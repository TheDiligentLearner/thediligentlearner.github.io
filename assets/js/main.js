(function() {

    // TEST OVERFLOW
    // var docWidth = document.documentElement.offsetWidth;
    //     [].forEach.call(
    //   document.querySelectorAll('*'),
    //   function(el) {
    //     if (el.offsetWidth > docWidth) {
    //       console.log(el);
    //       console.log("Size: "+ el.offsetWidth + " / " + docWidth);
    //     }
    //   }
    // );


    // Variables
    var menuButtons = document.querySelectorAll(".js-navbar__btn");
    var foldButtons = document.querySelectorAll(".js-fold-btn");


    // Functions
    backAction = function() {
        window.history.back();
    }

    toggleMenu = function(e) {
        //const keyName = event.key;
        let btn = e.currentTarget; // We use currentTarget (=button) instead of target (button or icon)
        let btnId = btn.id;
        const regex = /(.*)-navbar-btn/; // without g, index0 first match, index1 captured group

        // Detect which button on navbar has been pressed, using its ID
        let name = btnId.match(regex)[1];
        let panelId = name + '-panel';
        let actionFunction = name + 'Action';
        let visiblePanel = document.querySelector('.js-panel.-js-is-visible');
        let activeBtn = document.querySelector('.js-navbar__btn.-js-is-active');

        if (btn.classList.contains('-js-is-actionable')) {

            if (typeof window[actionFunction] === "function") {
                document.getElementById(btnId).classList.add("-js-is-active");
                window[actionFunction]();
                document.getElementById(btnId).classList.remove("-js-is-active");
            } else {
                console.log("Action " + actionFunction + " not defined for this button !!!");
            }
        } else if (document.getElementById(panelId)) {
            console.log("entro aqui");
            if (activeBtn) {
                visiblePanel.classList.remove("-js-is-visible");
                activeBtn.classList.remove('-js-is-active');

                if (btnId != activeBtn.id) {
                    document.getElementById(panelId).classList.add("-js-is-visible");
                    document.getElementById(btnId).classList.add("-js-is-active");
                }
            } else {
                document.getElementById(panelId).classList.add("-js-is-visible");
                document.getElementById(btnId).classList.add("-js-is-active");
            }
        } else {
            console.log("No panel nor function find for this button !!!");
        }

    }

    toggleList = function(e) {
        let btn = e.target;
        console.log(e.target);
        e.target.classList.toggle('-js-is-pressed');
        e.target.parentElement.querySelectorAll(".panel__list")[0].classList.toggle('-js-is-folded');
    }

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    //let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--inner-vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.setProperty('--outer-vh', `${window.outerHeight * 0.01}px`);
    document.documentElement.style.setProperty('--screen-vh', `${window.screen.height * 0.01}px`);
    document.documentElement.style.setProperty('--inner-vw', `${window.innerWidth * 0.01}px`);
    document.documentElement.style.setProperty('--outer-vw', `${window.outerWidth * 0.01}px`);
    document.documentElement.style.setProperty('--screen-vw', `${window.screen.width * 0.01}px`);


    // Event listeners
    if (menuButtons) {
        menuButtons.forEach(function(btn) {
            btn.addEventListener('click', toggleMenu, false);
            //btn.addEventListener('keydown', toggleMenu, false);
        })
    }

    if (foldButtons) {
        foldButtons.forEach(function(btn) {
            btn.addEventListener('click', toggleList, false);
            //btn.addEventListener('keydown', toggleMenu, false);
        })
    }

    //  window.onclick = function (event) {
    //     console.log(event.target);
    //     //console.log(event.currentTarget.classList.contains('js-navbar__btn'));
    //     if (! ((event.target.classList.contains('js-navbar__btn')) || event.target.parent.classList.contains('js-navbar__btn')))){
    //         console.log("tancar panel");
    //     }
    //         if (!(event.target.classList.contains('js-navbar__btn') || event.target.classList.contains('js-navbar__icon'))) {
    // console.log("Aqui també entrooooo");
    //             document.querySelectorAll('.js-panel.-js-is-visible').forEach(item => {
    //                 item.classList.remove("-js-is-visible");
    //             })
    //             document.querySelectorAll('.js-navbar__btn.-js-is-active').forEach(item => {
    //                 item.classList.remove("-js-is-active");
    //             })




})();