import http from "./http";
import to from "await-to-js";

// 榜单内容摘要
export const getToplistDetail = async () => {
  const [err, res] = await to(
    http.get<TopListDetail.RootObject>("/toplist/detail")
  );
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 榜单详情
interface idre {
  id: number;
  s?: number;
}
export const getPlaylistDetail = async (params: idre) => {
  const [err, res] = await to(
    http.get<TopListDetail.RootObject>("/playlist/detail", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.playlist;
};

// mv排行榜
export const getTopMv = async () => {
  const [err, res] = await to(http.get<TopMv.RootObject>("/top/mv?limit=3"));
  if (err) throw new Error("请求失败");
  return res.data.data;
};
