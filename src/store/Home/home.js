import { getCategoryList } from "@/Api/Home";
import { getBannerList } from "@/Api/Mock";
const state = {
  categoryList: [],
  bannerList: [],
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

  },
  async getBannerList({ commit }) {
    const { data: res } = await getBannerList();
    if (res.code === 200) {
      commit("GetBannerList", res.data);
    }
    else {
      alert("获取轮播图数据失败");
    }
  }
}

const mutations = {
  GetCategoryList(state, categoryList) {
    state.categoryList = categoryList;
  },
  GetBannerList(state, bannerList) {
    state.bannerList = bannerList;
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