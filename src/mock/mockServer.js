import Mock from "mockjs";
import banner from "./banner";
import floor from "./floor";

//使用Mock.mock来模拟接口以及返回数据
//第一个参数是mock的请求接口
//第二个参数是返回的数据
Mock.mock('/mock/banner', { code: 200, data: banner });
Mock.mock('/mock/floor', { code: 200, data: floor });