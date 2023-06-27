export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        // 修改下方的example.com为自己的节点ip/域名
        url.hostname="5700-9f6c230b594f472889376d79344b6f94.onpatr.cloud";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  };
