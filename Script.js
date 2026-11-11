const particleContainer = document.getElementById('particles');
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 80;
    const delay = Math.random() * 12;
    const duration = 10 + Math.random() * 14;
    p.style.cssText = `left:${left}%;bottom:0;--drift:${drift}px;animation-duration:${duration}s;animation-delay:-${delay}s;`;
    particleContainer.appendChild(p);
  }

  /* ── Password toggle ── */
  function togglePass() {
    const inp = document.getElementById('passInput');
    inp.type = inp.type === 'password' ? 'text' : 'password';
  }

  /* ── Strength meter ── */
  function updateStrength(val) {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    for (let i = 1; i <= 4; i++) {
      document.getElementById('s'+i).classList.toggle('active', i <= score);
    }
  }

  /* ── Submit ── */
  function handleSubmit() {
    const terms = document.getElementById('terms');
    if (!terms.checked) { terms.style.outline = '2px solid #e8c97a'; setTimeout(()=>terms.style.outline='',1200); return; }
    const btn = document.getElementById('submitBtn');
    const txt = document.getElementById('btnText');
    const spin = document.getElementById('spinner');
    txt.style.display = 'none';
    spin.style.display = 'block';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      document.getElementById('successOverlay').classList.add('show');
    }, 1600);
  }