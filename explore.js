
(() => {
 const arch = [
 ['Market intelligence','Signals become useful when they have context and provenance.','Competitive developments, customer intent, analyst perspectives and market changes are collected with source provenance.'],
 ['Knowledge & trust','Make every claim traceable.','Approved case studies, product facts, brand guidance and policies become the governed context layer.'],
 ['Planning & reasoning','Choose actions from evidence and priorities.','Decision support translates goals and account context into prioritised campaigns and next-best actions.'],
 ['Specialist agents','Coordinate bounded execution.','Research, content, account intelligence, operations and experience agents each work within a defined remit.'],
 ['Human governance','Keep consequential decisions accountable.','Review gates, access controls and escalation paths protect external claims and consequential decisions.'],
 ['Measurement & learning','Prove the change, not just activity.','Track quality, time saved, adoption, engagement and pipeline influence without treating simulations as actual results.']
 ];
 const archbuttons=[...document.querySelectorAll('[data-step]')];
 if(archbuttons.length) archbuttons.forEach(btn=>btn.addEventListener('click',()=>{
 const n=Number(btn.dataset.step);const x=arch[n];if(!x)return;
 archbuttons.forEach(b=>{const active=b===btn;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))});
 document.getElementById('arch-number').textContent=String(n+1).padStart(2,'0')+' / SIX LAYERS';
 document.getElementById('arch-title').textContent=x[0];
 document.getElementById('arch-description').textContent=x[1];
 document.getElementById('arch-explanation').textContent=x[2];
 }));
 const dataset=document.getElementById('agent-library-data');
 if(dataset){
 const agents=JSON.parse(dataset.textContent); const buttons=[...document.querySelectorAll('[data-agent-library]')];
 buttons.forEach(btn=>btn.addEventListener('click',()=>{
 const a=agents[Number(btn.dataset.agentLibrary)];if(!a)return;
 buttons.forEach(b=>{let active=b===btn;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))});
 for(const [id,txt] of [['lib-title',a[0]],['lib-purpose',a[2]],['lib-inputs',a[3]],['lib-output',a[4]],['lib-guard',a[5]],['lib-metric',a[6]]])document.getElementById(id).textContent=txt;
 }));
 }
 const dict=document.getElementById('dictionary-data');
 if(dict){const terms=JSON.parse(dict.textContent);const query=document.getElementById('term-search'),category=document.getElementById('term-category'),list=document.getElementById('dictionary-list'),count=document.getElementById('dictionary-count'),empty=document.getElementById('dictionary-empty');
 const render=()=>{const q=query.value.trim().toLocaleLowerCase();const cat=category.value;const filtered=terms.filter(t=>(cat==='All'||t.category===cat)&&[t.term,t.definition,t.category].join(' ').toLocaleLowerCase().includes(q));
 list.replaceChildren();filtered.forEach(t=>{const card=document.createElement('article');card.className='term-card';const tag=document.createElement('span');tag.className='term-tag';tag.textContent=t.category;const head=document.createElement('h3');head.textContent=t.term;const p=document.createElement('p');p.textContent=t.definition;const small=document.createElement('span');small.className='term-source';small.textContent='Reference: '+t.source;card.append(tag,head,p,small);list.append(card)});count.textContent=filtered.length+' of '+terms.length+' terms';empty.hidden=filtered.length!==0};query.addEventListener('input',render);category.addEventListener('change',render);render();}
})();
