window.addEventListener("load", () => {

    let form = document.querySelector("form"),
    title = document.getElementById("title"),
    rating = document.getElementById("rating"),
    awards = document.getElementById("awards"),
    release_date = document.getElementById("release_date"),
    length = document.getElementById("length"),
    genre = document.getElementById("genre");

    const $ = id => document.getElementById(id)
    
    title.focus();

    title.addEventListener("keyup", () => {
        if (!title.value) {
            title.classList.add("is-invalid");
            title.classList.remove("is-valid");            
        }else{
            title.classList.add("is-valid");
            title.classList.remove("is-invalid");
        }
    })

    title.addEventListener("blur", () => {
        if (!title.value) {
            title.classList.add("is-invalid");
            title.classList.remove("is-valid");            
        }else{
            title.classList.add("is-valid");
            title.classList.remove("is-invalid");
        }
    })

    rating.addEventListener("keyup", () => {
        if (!rating.value) {
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");            
        }else if(!(rating.value >= 0 && rating.value <= 10)){
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");
            $("error-rating").innerHTML = "<span>La claificación debe estar entre 0 y 10</span>"
            $("error-rating").style.display = "block"
        }else{
            rating.classList.add("is-valid");
            rating.classList.remove("is-invalid");
            $("error-rating").style.display = "none"
        }
    })

    rating.addEventListener("blur", () => {
        if (!rating.value) {
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");            
        }else if(!(rating.value >= 0 && rating.value <= 10)){
            rating.classList.add("is-invalid");
            rating.classList.remove("is-valid");
            $("error-rating").innerHTML = "<span>La claificación debe estar entre 0 y 10</span>"
            $("error-rating").style.display = "block"
        }else{
            rating.classList.add("is-valid");
            rating.classList.remove("is-invalid");
            $("error-rating").style.display = "none"
        }
    })

    awards.addEventListener("keyup", () => {
        if (!awards.value) {
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");            
        }else if(!(awards.value >= 0 && awards.value <= 10)){
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");
            $("error-awards").innerHTML = "<span>La Premios debe estar entre 0 y 10</span>"
            $("error-awards").style.display = "block"
        }else{
            awards.classList.add("is-valid");
            awards.classList.remove("is-invalid");
            $("error-awards").style.display = "none"
        }
    })

    awards.addEventListener("blur", () => {
        if (!awards.value) {
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");            
        }else if(!(awards.value >= 0 && awards.value <= 10)){
            awards.classList.add("is-invalid");
            awards.classList.remove("is-valid");
            $("error-awards").innerHTML = "<span>La Premios debe estar entre 0 y 10</span>"
            $("error-awards").style.display = "block"
        }else{
            awards.classList.add("is-valid");
            awards.classList.remove("is-invalid");
            $("error-awards").style.display = "none"
        }
    })

    release_date.addEventListener("blur", () => {
        if (!release_date.value) {
            release_date.classList.add("is-invalid");
            release_date.classList.remove("is-valid");            
        }else{
            release_date.classList.add("is-valid");
            release_date.classList.remove("is-invalid");
        }
    })

    length.addEventListener("keyup", () => {
        if (!length.value) {
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");            
        }else if(!(length.value >= 60 && length.value <= 360)){
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");
            $("error-length").innerHTML = "<span>La Duración debe estar entre 60 y 360 minutos</span>"
            $("error-length").style.display = "block"
        }else{
            length.classList.add("is-valid");
            length.classList.remove("is-invalid");
            $("error-length").style.display = "none"
        }
    })

    length.addEventListener("blur", () => {
        if (!length.value) {
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");            
        }else if(!(length.value >= 60 && length.value <= 360)){
            length.classList.add("is-invalid");
            length.classList.remove("is-valid");
            $("error-length").innerHTML = "<span>La Duración debe estar entre 60 y 360 minutos</span>"
            $("error-length").style.display = "block"
        }else{
            length.classList.add("is-valid");
            length.classList.remove("is-invalid");
            $("error-length").style.display = "none"
        }
    })

    genre.addEventListener("change", () => {
        if (!genre.value) {
            genre.classList.add("is-invalid");
            genre.classList.remove("is-valid");            
        }else{
            genre.classList.add("is-valid");
            genre.classList.remove("is-invalid");
        }
    })

    genre.addEventListener("blur", () => {
        if (!genre.value) {
            genre.classList.add("is-invalid");
            genre.classList.remove("is-valid");            
        }else{
            genre.classList.add("is-valid");
            genre.classList.remove("is-invalid");
        }
    })

    form.addEventListener("submit", e => {
        e.preventDefault()
    
        let formElements = form.elements;
        let error = false;
    
        for (let i = 0; i < formElements.length - 1; i++) {
            
            if(!formElements[i].value){
                formElements[i].classList.add("is-invalid")
                $("error-sub").innerHTML = "Los campos señalados son obligatorios";
                error = true
            }
        }
        if(!error){
            alert("Pelicula agregada")
            form.submit()
        }
    })
    
});