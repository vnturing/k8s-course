/* Shared behaviour: lesson list, prev/next pager, quizzes, paste-and-check tasks. */
(function(){
  var root=document.currentScript.src.replace(/assets\/course\.js.*$/,'');
  var C=window.COURSE||[];
  var list=document.getElementById('lesson-list');
  if(list)C.forEach(function(l){var li=document.createElement('li');
    li.innerHTML='<a href="'+root+l.file+'">'+l.title+'</a> — '+l.blurb;list.appendChild(li);});
  var pager=document.getElementById('pager');
  if(pager){var i=C.findIndex(function(l){return location.pathname.endsWith(l.file.split('/').pop());});
    var a=C[i-1],b=C[i+1];
    pager.innerHTML='<span>'+(a?'← <a href="'+root+a.file+'">'+a.title+'</a>':'')+'</span><span>'+(b?'<a href="'+root+b.file+'">'+b.title+'</a> →':'')+'</span>';}
  document.querySelectorAll('.quiz').forEach(function(q){
    var why=q.querySelector('.why'),done=false;
    q.querySelectorAll('li').forEach(function(li){
      var btn=document.createElement('button');btn.innerHTML=li.innerHTML;
      var ok=li.hasAttribute('data-correct');li.textContent='';li.appendChild(btn);
      btn.addEventListener('click',function(){
        if(done)return;
        if(ok){done=true;btn.className='right';why.classList.add('on');}
        else{btn.className='wrong';btn.disabled=true;}
      });
    });
  });
  document.querySelectorAll('.check').forEach(function(c){
    var must=JSON.parse(c.getAttribute('data-must')||'[]'),cnt=(c.getAttribute('data-count')||'').split('|');
    var ta=c.querySelector('textarea'),fb=c.querySelector('.fb');
    c.querySelector('button').addEventListener('click',function(){
      var t=ta.value,miss=[];
      must.forEach(function(p){if(!new RegExp(p).test(t))miss.push(p);});
      if(cnt[0]){var n=(t.match(new RegExp(cnt[0],'g'))||[]).length;if(n<+cnt[1])miss.push('only '+n+' of '+cnt[1]+' × '+cnt[0]);}
      fb.className='fb on '+(miss.length?'no':'ok');
      fb.textContent=miss.length?'Not yet. Missing: '+miss.join(', ')+'. '+(c.getAttribute('data-hint')||''):'Confirmed. That is exactly what we wanted to see.';
    });
  });
})();
