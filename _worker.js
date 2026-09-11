export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith('/api/')) {
      const targetUrl = "https://api.mail.tm" + url.pathname.substring(4) + url.search;
      
      const headers = new Headers(request.headers);
      headers.delete('Origin');
      headers.delete('Referer');
      
      const proxyReq = new Request(targetUrl, {
        method: request.method,
        headers: headers,
        body: request.body,
        redirect: 'manual'
      });
      
      return await fetch(proxyReq);
    }
    
    return env.ASSETS.fetch(request);
  }
};
