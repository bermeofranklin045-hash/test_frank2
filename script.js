import './devjobs-avatar-elements.js'

const jobListingSection = document.querySelector('.jobs-listing-card');

jobListingSection.addEventListener('click', function (event) {
    const element = event.target;

    // 👉 Si hace click en el botón
    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    } else {
        window.location.href = "infoempleo.html";
    }
});


const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
    const selectedValue = filter.value;
    const jobs = document.querySelectorAll('.job-listing-card')

    if (selectedValue) {
        console.log(mensajeLevel)
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = '';
    }


    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad
        if (selectedValue === '' || selectedValue === modalidad) {
            job.style.display = 'flex'

        } else {
            job.style.display = 'none'
        }
    })
})

const filterLevel = document.querySelector('#filter-nivelEx')
const mensajeLevel = document.querySelector('#filer-selected-nivel')

filterLevel.addEventListener('change', function () {
    const selectedValue = filterLevel.value;
    const jobs = document.querySelectorAll('.job-listing-card')


    if (selectedValue) {
        console.log(mensajeLevel)
        mensajeLevel.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensajeLevel.textContent = '';
    }

    jobs.forEach(job => {
        const level = job.dataset.nivel
        if (selectedValue === '' || selectedValue === level) {
            job.style.display = 'flex'

        } else {
            job.style.display = 'none'
        }
    })
})



const filterTecno = document.querySelector('#filter-categoria')
const mensajeTecno = document.querySelector('#filter-selected-tecnologia')

filterTecno.addEventListener('change', function () {
    const selectedValue = filterTecno.value;
    const jobs = document.querySelectorAll('.job-listing-card')


    if (selectedValue) {
        console.log(mensajeTecno)
        mensajeTecno.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensajeT.textContent = '';
    }

    jobs.forEach(job => {
        const technology = job.dataset.technology
        if (selectedValue === '' || selectedValue === technology) {
            job.style.display = 'flex'

        } else {
            job.style.display = 'none'
        }
    })
})


const busqueda = document.querySelector('#search-input')
busqueda.addEventListener('input', function () {

    const jobs = document.querySelectorAll('.job-listing-card')
    const inputValue = busqueda.value.toLowerCase().trim()

    jobs.forEach(job => {
        const title = job.dataset.titulo.toLowerCase()

        if (inputValue === '' || title.startsWith(inputValue)) {
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})


const btnbus = document.querySelector('#btn-buscar')
btnbus.addEventListener('click', function (event) {
    const busqueda = document.querySelector('#search-input')
    event.preventDefault()
    const jobs = document.querySelectorAll('.job-listing-card')
    const inputValue = busqueda.value;
    jobs.forEach(job => {
        const title = job.dataset.titulo
        console.log(title)

        if (inputValue === '' || inputValue === title) {
            job.style.display = 'flex'

        } else {
            job.style.display = 'none'
        }
    })
})

const container = document.querySelector('.jobs-listing-card')
fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement('article')

            article.className = 'job-listing-card'
            article.dataset.titulo = job.data.titulo
            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology

            article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="btn-aplicar button-apply-job" >Aplicar</button>`

            container.appendChild(article)
        })
    })