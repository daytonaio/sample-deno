import { Application, Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts';

const app = new Application();
const router = new Router();
const port = 8000;

// Basic routing
router.get('/', (ctx) => {
  ctx.response.body = 'Welcome to Deno!';
});

router.get('/api/hello', (ctx) => {
  ctx.response.body = {
    message: 'Hello from Deno!',
    time: new Date().toISOString(),
  };
});

// Use router
app.use(router.routes());
app.use(router.allowedMethods());

// Basic error handling
app.addEventListener('error', (evt) => {
  console.log(evt.error);
});

console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
