const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello from Bun!!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 8000,
});

console.log(`Listening on port ${server.port}`);
