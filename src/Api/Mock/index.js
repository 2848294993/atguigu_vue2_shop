import mockRequest from "@/utils/MockRequest/mockRequest";
export const getBannerList = () => {
  return mockRequest.get('/banner');
}