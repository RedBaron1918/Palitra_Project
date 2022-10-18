import { createStore } from "vuex";

const store = createStore({
  state: {
    api: "https://jsonplaceholder.typicode.com",
    posts: null,
    post: {},
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getPost(state) {
      return state.post;
    },
  },
  mutations: {
    setPosts(state, value) {
      state.posts = value;
    },
    setPost(state, value) {
      state.post = value;
    },
  },
  actions: {
    fetchPostsByQuery(context, query) {
      return new Promise((resolve, reject) => {
        fetch(query)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              reject({ error: "something went wrong" });
              return;
            }
          })
          .then((json) => {
            json.map((item) => {
              item.user = { email: "" };
            });
            resolve(json);
          })
          .catch(() => reject({ error: "something went wrong" }));
      });
    },
    async fetchPostsAll({ commit }) {
      let posts = null;
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then(async (json) => {
          posts = json;
          posts = await Promise.all(
            posts.map(async (post) => {
              await fetch(
                `https://jsonplaceholder.typicode.com/users/${post.userId}`
              )
                .then((response) => response.json())
                .then((json) => {
                  post.user = {
                    id: json.id,
                    name: json.name,
                  };
                })
                .catch((err) => {
                  console.log(err);
                });
              return post;
            })
          );
          commit("setPosts", posts);
        })
        .catch((err) => console.log(err));
    },

    fetchPostById(context, id) {
      return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              reject({ error: "something went wrong" });
              return;
            }
          })
          .then(async (json) => {
            await fetch(
              `https://jsonplaceholder.typicode.com/users/${json.userId}`
            )
              .then((response) => response.json())
              .then((user) => {
                json.user = {
                  id: user.id,
                  name: user.name,
                };
              })
              .catch((err) => {
                console.log(err);
              });
            resolve(json);
          })
          .catch(() => reject({ error: "something went wrong" }));
      });
    },

    async fetchPostByUser({ state, dispatch }, id) {
      const query = `${state.api}/posts?userId=${id}`;
      return dispatch("fetchPostsByQuery", query);
    },
    async fetchUser(context, id) {
      let user;
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          user = json;
        })
        .catch((err) => console.log(err));
      return user;
    },

    async fetchComments(context, id) {
      let comments;
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((json) => {
          comments = json;
        })
        .catch((err) => console.log(err));
      return comments;
    },
  },
});

export default store;
