document.getElementById('yr').textContent=new Date().getFullYear();
const nav=document.getElementById('nav'),menu=document.getElementById('menu');
menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded',false)}});
document.getElementById('theme').addEventListener('click',()=>{
 const r=document.documentElement;
 const dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
 r.dataset.theme=dark?'light':'dark';
});
const rb=document.getElementById('read'),mb=document.getElementById('more-bio');
rb.addEventListener('click',()=>{const s=mb.classList.toggle('show');rb.textContent=s?'Read Less':'Read More';rb.setAttribute('aria-expanded',s)});
function body(f){const d=new FormData(f);return `Hello Mohamed,\n\n${d.get('message')}\n\nTopic: ${d.get('topic')}\nFrom: ${d.get('name')} (${d.get('email')})`}
const form=document.getElementById('form'),st=document.getElementById('status');
// Paste your Formspree link between the quotes to receive messages straight in your inbox.
// Example: 'https://formspree.io/f/abcdwxyz'. Leave it empty to open Gmail instead.
const FORMSPREE_URL='';
form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(FORMSPREE_URL){
  st.textContent='Sending...';
  try{
   const r=await fetch(FORMSPREE_URL,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:form.name.value,email:form.email.value,topic:form.topic.value,message:form.message.value})});
   if(r.ok){form.reset();st.textContent='Thank you! Your message was sent. I will reply soon.'}
   else{st.textContent='Sorry, the message did not send. Please email mohaa30486@gmail.com or use WhatsApp.'}
  }catch(err){st.textContent='No connection. Please try again, or use WhatsApp.'}
  return;
 }
 const s=encodeURIComponent('Portfolio message: '+form.topic.value);
 window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=mohaa30486@gmail.com&su=${s}&body=${encodeURIComponent(body(form))}`,'_blank','noopener');
 st.textContent='Gmail opened in a new tab with your message. Click Send there to finish.';
});
document.getElementById('wa-send').addEventListener('click',()=>{
 if(!form.reportValidity())return;
 window.open('https://wa.me/254722453814?text='+encodeURIComponent(body(form)),'_blank','noopener');
});
