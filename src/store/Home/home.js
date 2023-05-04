import { getCategoryList } from "@/Api/Home";
const state = {
  categoryList: [],
}
const actions = {
  async getCategoryList({ commit }) {
    const { data: res } = await getCategoryList();
    if (res.code === 200) {
      commit("GetCategoryList", res.data);
    }
    else {
      alert("获取分类列表失败");
    }

  }
}

const mutations = {
  GetCategoryList(state, categoryList) {
    state.categoryList = categoryList;
    // console.log(state.categoryList);
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}