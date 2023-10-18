const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/') return new Response('HomePage!');
    if (url.pathname === '/blog') return new Response('Blog!');
    return new Response('404!');
  },

  // Optional port number - the default value is 3000
  port: Bun.env.PORT || 8000,
});

console.log(`Listening on port: ${server.port}`);
