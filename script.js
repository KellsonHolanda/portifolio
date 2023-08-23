const titulo = document.querySelector(".digitando");
const menu = document.querySelector(".fa-bars");
const navMenu = document.querySelector("header .navegacao");



function ativarLetra(elemento){
    
    const arrText = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrText.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
        
    });
};
ativarLetra(titulo);


menu.addEventListener('click', ()=>{
    menu.classList.toggle("fa-x");
    navMenu.classList.toggle("opcoes");
}) 

const divExperience = document.querySelectorAll(".experienceContent div");
const liExperience = document.querySelectorAll(".experienceContent ul li");
const divEducation = document.querySelectorAll(".educationContent div");
const liEducation = document.querySelectorAll(".educationContent ul li");


divExperience[0].classList.add("ativo");
divEducation[0].classList.add("ativo");
liExperience[0].classList.add("ativo");
liEducation[0].classList.add("ativo");


function slide(index){
    divExperience.forEach((divisaoOuCard)=>{
        divisaoOuCard.classList.remove("ativo");
    });
    liExperience.forEach((indicadorDeSlide)=>{
        indicadorDeSlide.classList.remove("ativo");
    });
    divExperience[index].classList.add("ativo");
    liExperience[index].classList.add("ativo");
}
function slide2(index){
    divEducation.forEach((divisaoOuCard)=>{
        divisaoOuCard.classList.remove("ativo");
    });
    liEducation.forEach((indicadorDeSlide)=>{
        indicadorDeSlide.classList.remove("ativo");
    });
    divEducation[index].classList.add("ativo");
    liEducation[index].classList.add("ativo");
}

liExperience.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slide(index);
    });
});

liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slide2(index)
    });
});

const listAll = document.querySelectorAll(".storedProjects ul li");
const buttonGeral = document.querySelectorAll(".projectsModels ul li");
const buttonAll = document.querySelector(".projectsModels .all");

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
    
}

buttonGeral.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index);
    });
});



function showList(lista, buttom = 'all'){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if (buttom == 'design'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');

    }
    if (buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');

    }
    if (buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');

    }
    if (buttom == 'all'){
        
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');

    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        
        if(currentButton.classList.contains('all')){
            showList(listAll);
            
            
        }
        if(currentButton.classList.contains('design')){
            showList(listAll, 'design');
            
        }
        if(currentButton.classList.contains('graphic')){
            showList(listAll, 'graphic');
            
        }
        if(currentButton.classList.contains('website')){
            showList(listAll, 'website');
            
        }
    })
})