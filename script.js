const $=id=>document.getElementById(id);
function openModal(id){$(id).classList.add('show')}
function closeModal(id){$(id).classList.remove('show')}
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
function demoAction(msg){toast(msg)}
function startPractice(name){toast('▶ Starting '+name+' — demo player ready')}
function joinLive(){toast('Live room demo opened — connect your video provider to go live')}
function choosePlan(plan){toast(plan==='Starter'?'Starter selected — welcome!':plan+' selected — payment gateway can be connected here')}
function filterPractice(type,btn){document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.practice-card').forEach(c=>{c.style.display=(type==='all'||c.classList.contains(type))?'block':'none'})}
function filterAll(){const b=document.querySelector('.filters button');filterPractice('all',b)}
function toggleMenu(){const n=document.querySelector('.nav nav');if(n){n.style.display=n.style.display==='flex'?'none':'flex';n.style.position='absolute';n.style.top='78px';n.style.left='0';n.style.right='0';n.style.padding='20px';n.style.background='var(--cream)';n.style.flexDirection='column'}}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
