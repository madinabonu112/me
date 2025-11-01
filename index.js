(function(){
      const btn = document.querySelector('.nav-toggle');
      const navList = document.querySelector('nav ul');
      if(!btn || !navList) return;
      btn.addEventListener('click', function(){
        navList.classList.toggle('open');
      });
      navList.addEventListener('click', function(e){
        if(e.target.tagName === 'A') navList.classList.remove('open');
      });
    })();