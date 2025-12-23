// Simple script.js for animations, typed hero text and responsive nav

document.addEventListener('DOMContentLoaded', ()=>{
  // Typing effect for hero
  const typedEl = document.querySelector('.hero-typed');
  const texts = ['Roleplay. Komunita. Zážitky.','Český FiveM server.','Připoj se k dobrodružství!'];
  let idx = 0, char = 0, forward = true;

  function typeLoop(){
    if(!typedEl) return;
    typedEl.textContent = texts[idx].slice(0,char);
    if(forward){
      if(char < texts[idx].length){ char++; }
      else { forward = false; setTimeout(typeLoop,1200); return; }
    } else {
      if(char>0){ char--; }
      else { forward = true; idx = (idx+1)%texts.length; }
    }
    setTimeout(typeLoop, forward?60:30);
  }
  typeLoop();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .feature, .content h1');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  },{threshold:0.12});
  revealEls.forEach(el=>obs.observe(el));

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}); });
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const shown = nav.style.display === 'flex';
      nav.style.display = shown? 'none' : 'flex';
      nav.style.flexDirection='column';
      nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)';
      nav.style.padding = '1rem';
    });
  }

  // Add fade-in to hero and features
  document.querySelectorAll('.hero-inner, .feature').forEach(el=>el.classList.add('fade-in'));
});