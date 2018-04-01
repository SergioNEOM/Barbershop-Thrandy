window.onload = function() {
        var auth = document.querySelector(".auth_btn");
        auth.addEventListener("click",
            function(evt) {
                evt.preventDefault();
                document.querySelector(".modal-login").classList.remove("visually-hidden");
            });
        document.querySelector(".modal-login .modal-close").addEventListener(
            "click",
            function(evt) {
                evt.preventDefault();
                document.querySelector(".modal-login").classList.add("visually-hidden");
            });
        /* --- */
        document.querySelector(".info_question").addEventListener(
            "click",
            function(evt) {
                evt.preventDefault();
                document.querySelector(".modal-map").classList.remove("visually-hidden");
            });

        document.querySelector(".modal-map .modal-close").addEventListener(
            "click",
            function(evt) {
                evt.preventDefault();
                document.querySelector(".modal-map").classList.add("visually-hidden");
            });
    }
    /*****/