import request from "@/utils/Request/requet";

export const getCategoryList = () => {
  return request.get("/product/getBaseCategoryList");
};