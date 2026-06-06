export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Laisser passer /login (GET affiche le formulaire, POST est géré par login.js)
  if (url.pathname === '/login') {
    // GET /login → servir le formulaire
    if (request.method === 'GET') {
      const redirect = url.searchParams.get('redirect') || '/';
      return loginPage(redirect, false);
    }
    // POST /login → laissé à functions/login.js
    return next();
  }

  const SITE_PASSWORD = env.SITE_PASSWORD;
  if (!SITE_PASSWORD) return next(); // pas de mdp configuré → accès libre

  // Vérifier le cookie de session
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/suncom_session=([^;]+)/);
  const session = match ? match[1] : null;

  if (session === `ok:${SITE_PASSWORD}`) {
    return next(); // Authentifié ✓
  }

  // Non authentifié → page de login
  return loginPage(url.pathname, false);
}

function loginPage(redirect, error) {
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SUNCOM — Accès privé</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@300;400&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: #0D1B2A; font-family: 'DM Sans', system-ui, sans-serif;
    }
    .card { width: 100%; max-width: 360px; padding: 0 24px; text-align: center; }
    .logo {
      font-family: 'Orbitron', sans-serif; font-size: 24px; font-weight: 300;
      letter-spacing: 0.2em; color: #FAFAF8; margin-bottom: 6px;
    }
    .logo span { color: #00C9B1; }
    .sub {
      font-size: 10px; letter-spacing: 0.2em; color: rgba(255,255,255,0.25);
      text-transform: uppercase; margin-bottom: 40px;
    }
    input[type=password] {
      width: 100%; padding: 13px 16px; margin-bottom: 12px;
      background: rgba(255,255,255,0.05);
      border: 1px solid ${error ? '#ef4444' : 'rgba(255,255,255,0.1)'};
      border-radius: 10px; color: #FAFAF8; font-size: 15px; outline: none;
    }
    input[type=password]:focus { border-color: rgba(0,201,177,0.5); }
    .error { color: #ef4444; font-size: 12px; margin-bottom: 12px; }
    button {
      width: 100%; padding: 13px; background: #00C9B1; border: none;
      border-radius: 10px; color: #0D1B2A; font-size: 14px; font-weight: 700;
      letter-spacing: 0.05em; cursor: pointer;
    }
    button:hover { background: #00d4bc; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">SUN<span>COM</span></div>
    <div class="sub">Accès privé</div>
    <form method="POST" action="/login">
      <input type="hidden" name="redirect" value="${redirect}">
      <input type="password" name="password" placeholder="Mot de passe" autofocus required>
      ${error ? '<p class="error">Mot de passe incorrect</p>' : ''}
      <button type="submit">Entrer</button>
    </form>
  </div>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html;charset=UTF-8' },
  });
}
