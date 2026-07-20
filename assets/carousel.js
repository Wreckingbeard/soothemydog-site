
(function(){
  var root=document.querySelector('.carousel'); if(!root) return;
  var imgs=[].slice.call(root.querySelectorAll('.frame img'));
  var status=root.querySelector('.cstatus'); var i=0, timer=null;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function show(n){imgs[i].classList.remove('on');i=(n+imgs.length)%imgs.length;imgs[i].classList.add('on');
    if(status)status.textContent='Image '+(i+1)+' of '+imgs.length;}
  function start(){if(reduce||timer)return;timer=setInterval(function(){show(i+1)},4000);setP(true);}
  function stop(){clearInterval(timer);timer=null;setP(false);}
  function setP(on){var b=root.querySelector('.playpause');if(b){b.textContent=on?'⏸':'▶';b.setAttribute('aria-pressed',on);b.setAttribute('aria-label',on?'Pause slideshow':'Play slideshow')}}
  show(0);
  root.querySelector('.playpause').addEventListener('click',function(){timer?stop():start()});
  if(!reduce) start();
})();
