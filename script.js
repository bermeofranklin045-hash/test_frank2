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
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = '';
    }

    
    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad
        if (selectedValue === '' || selectedValue === modalidad) {
            job.style.display = 'block'

        } else {
            job.style.display = 'none'
        }
    })
})





const container = document.querySelector('.jobs-listing-card')
fetch("./data.json")
  .then((response)=> {
    return response.json();
  })
  .then((jobs)=>{
    jobs.forEach(job => {
     const article = document.createElement('article')
      
      article.className='job-listing-card'

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

