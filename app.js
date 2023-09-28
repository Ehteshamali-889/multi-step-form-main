function displayplansection(){
    var formContainer = document.querySelector('.formcontainer');
    // if(nameInput.trim() != '' && emailInput.trim() != '' && phoneInput.trim() != ''){
        formContainer.style.display = 'none';
        var plansection = document.querySelector('.plansection');
        plansection.style.display = 'block';
        var count = document.querySelectorAll('.count');
        count[0].classList.remove('active');
        count[1].classList.remove('notactive');
        count[1].classList.add('active');
        count[0].classList.add('notactive');
    // }
    
}

function displaypersonalsection(){
    var plansection = document.querySelector('.plansection');
    plansection.style.display = 'none';
    var formContainer = document.querySelector('.formcontainer');
    formContainer.style.display = 'block';
    var count = document.querySelectorAll('.count');
    count[1].classList.remove('active');
    count[0].classList.remove('notactive');
    count[0].classList.add('active');
    count[1].classList.add('notactive');
}

function checkCheckbox() {
    var checkbox = document.querySelector('.customcheckbox');
    var packagePara = document.querySelectorAll('.packagepara');
    var freetext = document.querySelectorAll('.free');

    // Check if the checkbox is checked
    if (checkbox.checked) {
        packagePara[0].textContent = '$90/yr';
        packagePara[1].textContent = '$120/yr';
        packagePara[2].textContent = '$150/yr';
        freetext[0].style.display = 'inline-block';
        freetext[1].style.display = 'inline-block';
        freetext[2].style.display = 'inline-block';
    } else {
        packagePara[0].textContent = '$9/mo';
        packagePara[1].textContent = '$12/mo';
        packagePara[2].textContent = '$15/mo';
        freetext[0].style.display = 'none';
        freetext[1].style.display = 'none';
        freetext[2].style.display = 'none';
    }
  }
  
function displayaddonssection(){
    var plansection = document.querySelector('.plansection');
    plansection.style.display = 'none';
    var addons = document.querySelector('.addons');
    addons.style.display = 'block';
    var count = document.querySelectorAll('.count');
    count[1].classList.remove('active');
    count[2].classList.remove('notactive');
    count[2].classList.add('active');
    count[1].classList.add('notactive');
}

function displayprevioussection(){
    var addons = document.querySelector('.addons');
    addons.style.display = 'none';
    var plansection = document.querySelector('.plansection');
    plansection.style.display = 'block';
    var count = document.querySelectorAll('.count');
    count[2].classList.remove('active');
    count[1].classList.remove('notactive');
    count[1].classList.add('active');
    count[2].classList.add('notactive');
    
}

function displayfinishsection(){
    var addons = document.querySelector('.addons');
    addons.style.display = 'none';
    var finishsection = document.querySelector('.finishsection');
    finishsection.style.display = 'block';
    var count = document.querySelectorAll('.count');
    count[2].classList.remove('active');
    count[3].classList.remove('notactive');
    count[3].classList.add('active');
    count[2].classList.add('notactive');
}

function displaypreviousaddonsection(){
    var finishsection = document.querySelector('.finishsection');
    finishsection.style.display = 'none';
    var addons = document.querySelector('.addons');
    addons.style.display = 'block';
    var count = document.querySelectorAll('.count');
    count[3].classList.remove('active');
    count[3].classList.remove('notactive');
    count[2].classList.add('active');
    count[3].classList.add('notactive');
}

function updateradio(index){
    var radiobox = document.querySelectorAll('.customradio');
    var singleaddon = document.querySelectorAll('.singleaddon');
    if(radiobox[index].checked){
        singleaddon[index].style.backgroundColor = "var(--Magnolia)";
    }
}

function changetext(){
    var changemonthyear = document.querySelector('.changemonthyear');
    var price = document.querySelector('.price');
    var innerprice = document.querySelectorAll('.innerprice');
    var totalprice = document.querySelector('.totalprice');
    if(changemonthyear.innerText=='(Monthly)'){
        changemonthyear.innerText='(Yearly)';
        price.innerText='$90/yr';
        innerprice[0].innerText='+$10/yr';
        innerprice[1].innerText='+20/yr';
        totalprice.innerText='$120/yr';
    }
    else{
        changemonthyear.innerText='(Monthly)';
        price.innerText='$9/mo';
        innerprice[0].innerText='+$1/mo';
        innerprice[1].innerText='+2/mo';
        totalprice.innerText='$12/mo';
    }
}

function displaythankyousection(){
    var finishsection = document.querySelector('.finishsection');
    finishsection.style.display = 'none';
    var thankyousection = document.querySelector('.thankyousection');
    thankyousection.style.display = 'flex';
    var leftnav = document.querySelector('.leftnav');
    leftnav.style.width = '60%';
}