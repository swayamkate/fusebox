export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Proxy for mail.tm
    if (url.pathname.startsWith('/api/tm/')) {
      const targetUrl = "https://api.mail.tm" + url.pathname.substring(7) + url.search;
      return await handleProxy(request, targetUrl);
    }
    
    // Proxy for mail.gw
    if (url.pathname.startsWith('/api/gw/')) {
      const targetUrl = "https://api.mail.gw" + url.pathname.substring(7) + url.search;
      return await handleProxy(request, targetUrl);
    }
    
    // Serve normal website files
    return env.ASSETS.fetch(request);
  }
};

async function handleProxy(request, targetUrl) {
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
