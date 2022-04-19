
            let stars = document.getElementById('stars');
            let moon = document.getElementById('moon');
            let montains_behind = document.getElementById('montains_behind');
            let title_home = document.getElementById('title_home');
            let btn = document.getElementById('btn');
            let montains_front = document.getElementById('montains_front');
            let header = document.querySelector('header');

            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                stars.style.left = value * 0.25 + 'px';
                moon.style.top = value * 1.05 + 'px';
                montains_behind.style.top = value * 0.05 + 'px';
                montains_front.style.top = value * 0 + 'px';
                title_home.style.marginRight = value * 5 + 'px';
                title_home.style.marginTop = value * 1.5 + 'px';
                btn.style.marginTop = value * 1.5 + 'px';
                header.style.top = value * 0.5 + 'px';
            })