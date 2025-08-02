export const state = () => ({
  siteName: "The best Company",
  users: [],
  auth: false,
});

export const mutations = {
  setSiteName(state: any, name: string) {
    state.siteName = name;
  },
  setUsers(state: any, data: any) {
    state.users = data;
  },
};
export const getters = {
  getSiteName(store: any) {
    return store.siteName;
  },
  getUsers(store: any) {
    return store.users;
  },
};

export const actions = {
  changeSiteName({ commit }: any, name: string) {
    commit("setSiteName", name);
  },
  async nuxtServerInit({ commit }: any, context: any) {
    const users = await context.app.$axios.$get(
      "https://randomuser.me/api/?results=2"
    );
    commit("setUsers", users.results);
  },
};
