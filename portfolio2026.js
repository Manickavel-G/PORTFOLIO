
(function tick(){
  const e=document.getElementById('clk');
  const n=new Date();
  const p=x=>String(x).padStart(2,'0');
  e.textContent=p(n.getHours())+':'+p(n.getMinutes())+':'+p(n.getSeconds());
  setTimeout(tick,1000);
})();

const links=[...document.querySelectorAll('.nav-link')];
const secs=[...document.querySelectorAll('section[id]')];
const io=new IntersectionObserver(en=>{
  en.forEach(e=>{
    if(!e.isIntersecting)return;
    links.forEach(l=>{
      l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id);
    });
  });
},{threshold:.3});
secs.forEach(s=>io.observe(s));

const barObs=new IntersectionObserver(en=>{
  en.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.bar-fill[data-w]').forEach(f=>{
      f.style.width=f.dataset.w;
    });
    barObs.unobserve(e.target);
  });
},{threshold:.4});
document.querySelectorAll('.edu-card').forEach(c=>barObs.observe(c));
