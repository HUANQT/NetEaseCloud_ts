import http from "./http";
import to from "await-to-js";

// 主页轮播图
export const getHomePageData = async () => {
  const [err, res] = await to(
    http.get<Home.RootObject>("/homepage/block/page")
  );
  if (err) throw new Error("请求失败");
  return res.data.data;
};
