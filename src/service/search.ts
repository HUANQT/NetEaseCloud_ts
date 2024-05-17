import http from "./http";
import to from "await-to-js";

// 默认搜索
export const getDefaultKey = async () => {
  const [err, res] = await to(http.get<Res.RootObject>("/search/default"));
  if (err) throw new Error("请求失败");
  return res.data.data.realkeyword;
};

//
