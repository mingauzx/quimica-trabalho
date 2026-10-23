// Experiências de aprendizagem: modelos ilustrativos, não dados experimentais.
const $ = (id) => document.getElementById(id);
const progress = $('progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max * 100) : 0) + '%';
}, {passive:true});

const menuToggle = $('menu-toggle');
const mainNav = $('main-nav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const particles = $('particles');
for (let i=0;i<31;i++) {
  const p=document.createElement('span'); p.className='particle';
  p.style.setProperty('--x', (6 + (i*37.71)%86)+'%');
  p.style.setProperty('--y', (12+(i*26.29)%72)+'%');
  p.style.setProperty('--dx', (Math.sin(i*2.3)*65).toFixed(0)+'px');
  p.style.setProperty('--dy', (Math.cos(i*1.4)*55).toFixed(0)+'px');
  p.style.setProperty('--delay',(-i*.43)+'s');
  particles.append(p);
}
function updateKinetics() {
  const temp = Number($('temperature').value);
  const surface = $('surface').checked;
  const catalyst = $('catalyst').checked;
  // Índice relativo escolhido apenas para exibir o efeito conceitual.
  const factor = (1 + (temp - 40)/85) * (surface?1.5:1) * (catalyst?1.65:1);
  const value = Math.max(.3, factor);
  $('temperature-value').textContent = `${temp} °C`;
  $('speed-value').textContent = `${value.toFixed(1).replace('.',',')}×`;
  $('speed-bar').style.width = Math.min(value/3.8*100,100)+'%';
  particles.querySelectorAll('.particle').forEach(p=>p.style.setProperty('--duration',Math.max(1.2,8/value)+'s'));
}
['temperature','surface','catalyst'].forEach(id=>$(id).addEventListener('input',updateKinetics));
updateKinetics();

const responses={
  normal:'No equilíbrio dinâmico, as reações direta e inversa ocorrem à mesma velocidade.',
  reagent:'Ao adicionar um reagente, o sistema tende a consumi-lo; isso pode favorecer a reação direta e a formação de C.',
  product:'Ao retirar o produto C, o sistema tende a repor a quantidade removida, favorecendo a reação direta.'
};
document.querySelectorAll('.perturb').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.perturb').forEach(other=>other.classList.remove('active'));
  btn.classList.add('active');
  const current=btn.dataset.equilibrium;
  $('equilibrium-response').textContent=responses[current];
  $('product-symbol').classList.toggle('highlight',current!=='normal');
  $('reactant-symbol').classList.toggle('highlight',current==='reagent');
}));

function fmt(number){return number.toFixed(1).replace('.',',')}
function updatePH(value){
  let n=Math.min(14,Math.max(0,Number(value)));
  $('ph-slider').value=String(n);
  $('ph-value').textContent=fmt(n);
  $('poh-value').textContent=fmt(14-n);
  $('h-value').textContent=`1 × 10${toSuperscript(-n)}`;
  const acidic=n<7, basic=n>7;
  const kind=acidic?'Ácido':(basic?'Básico':'Neutro');
  const color=acidic?'#ffb08e':basic?'#9bb4ff':'#b7f0c3';
  $('ph-type').textContent=kind;
  $('ph-type').style.color=color;
  $('ph-value').style.color=color;
  $('ph-tip').textContent=acidic?'pH abaixo de 7: há maior concentração de H₃O⁺ do que de OH⁻ na solução.':basic?'pH acima de 7: a solução possui maior concentração de OH⁻ do que de H₃O⁺.':'pH 7 indica neutralidade a 25 °C: concentrações de H₃O⁺ e OH⁻ são iguais.';
}
function toSuperscript(n){return [...String(n)].map(c=>({'-':'⁻','.':'·','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}[c]||c)).join('')}
$('ph-slider').addEventListener('input',e=>updatePH(e.target.value));
document.querySelectorAll('.substance').forEach(btn=>btn.addEventListener('click',()=>{
  updatePH(btn.dataset.ph);
  $('ph-slider').focus({preventScroll:true});
}));
updatePH(7);

document.querySelectorAll('.q-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.q-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.question').forEach(q=>{q.hidden=btn.dataset.filter!=='all'&&q.dataset.category!==btn.dataset.filter});
}));
document.querySelectorAll('.resolve').forEach(btn=>btn.addEventListener('click',()=>{
  const expanded=btn.getAttribute('aria-expanded')==='true';
  btn.setAttribute('aria-expanded',String(!expanded));
  btn.lastElementChild.textContent=expanded?'＋':'−';
  btn.nextElementSibling.hidden=expanded;
}));
