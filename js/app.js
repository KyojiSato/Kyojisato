(function(){
  document.querySelectorAll('details.js-lazy-iframe').forEach(function(d){
    d.addEventListener('toggle', function(){
      if(!d.open) return;
      var holder = d.querySelector('[data-src]');
      if(holder && !holder.dataset.loaded){
        var url = holder.getAttribute('data-src');
        if(url){
          var ifr = document.createElement('iframe');
          ifr.loading = 'lazy';
          ifr.src = url;
          if(holder.classList.contains('site-contact__form')){
            ifr.title = 'お問い合わせフォーム';
          }else if(holder.classList.contains('site-map__embed')){
            ifr.title = '地図';
          }
          holder.appendChild(ifr);
          holder.dataset.loaded = '1';
        }
      }
    });
  });
})();