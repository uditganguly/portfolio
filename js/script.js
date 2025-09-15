// Smooth scroll + active nav       
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
}); 
 
// Mobile nav toggle
const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.getElementById('navMenu');
if(navToggle){
  navToggle.addEventListener('click',()=>{
    const open=navToggle.getAttribute('aria-expanded')==='true';
    navToggle.setAttribute('aria-expanded',String(!open));
    navMenu.style.display=open?'none':'flex';
    navMenu.style.flexDirection='column';
    navMenu.style.gap='8px';
  });
}

// Counters
function animateCounter(el){
  const target = Number(el.dataset.counter || 0);
  const duration = 1200;
  const start = performance.now();

  const step = (t) => {
    const p = Math.min((t - start) / duration, 1);
    el.textContent = Math.floor(p * target).toLocaleString();
    if (p < 1) {
      requestAnimationFrame(step);
    } else {
      // After counting completes, format based on value
      if (target >= 1000) {
        el.textContent = (target / 1000).toLocaleString() + "K+";
      } else {
        el.textContent = target.toLocaleString() + "+";
      }
    }
  };

  requestAnimationFrame(step);
}

document.querySelectorAll('[data-counter]').forEach(animateCounter);

// Portfolio filters
const filters=[...document.querySelectorAll('.filter')];
const projects=[...document.querySelectorAll('.project')];
filters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const type=btn.dataset.filter;
    projects.forEach(p=>{
      const show= type==='all' || p.dataset.type===type;
      p.style.display=show?'block':'none';
    });
  });
});

// Contact form basic validation (no backend; feel free to hook later)
const form=document.querySelector('.contact-form');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const fd=new FormData(form);
  const required=['name','email','subject','message'];
  for(const key of required){
    if(!String(fd.get(key)||'').trim()){
      alert('Please fill all fields before sending.');
      return;
    }
  }
  alert('Thanks! Your message has been noted. I will respond within 24 hours.');
  form.reset();
});

// Footer year
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
