// fetch接口默认请求localhost:4000
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e5%8f%af%e4%bb%a5%e4%bd%bf%e7%94%a8%e4%bb%a3%e7%90%86

async function fetch(api = "") {
  if (process.env.NODE_ENV === "development") {
    api = `http://localhost:4000/${api}`;
    let res = await window.fetch(api);
    let r = res.ok ? res.json() : "接口请求错误";
    if ((await r).result) {
      return (await r).result;
    } else {
      return await r;
    }
  }
}

export { fetch };
