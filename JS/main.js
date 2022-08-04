const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const html = $('html');
const body = $('body');
const mainElement = $('.main');
const modalCloseElement = $('.modal__close-icon');
const modal = $('.modal');
const modalOverlay = $('.modal__overlay');

const optionLinkElements = $$('.header__navbar-option-link');
const optionItemElements = $$('.header__navbar-option-items');
const headerOptionListElement = $('.header__navbar-option-list');
const headerNavbarScroll = $('.header__navbar-scroll');

const headerUserBars = $$('.header__navbar-user-bar');
const headerUserOverlay = $('.user-overlay');
const headerUserBarList = $('.header__navbar-user-bar-list');
const userRegisterElement = $('.user-register');
const userLoginElement = $('.user-login');


const headerSearchElements = $$('.header__search-list');
const headerSearchItemElements = $$('.header__search-items');

const headerSearchPlaceElement = $('.header__search-place');
const headerSearchPlaceOptionElement = $('.header__search-place-option');
const headerSearchPlaceOptionElement2 = $('.header__search-place-option-2');

const headerSearchReceiveElement = $('.header__search-receive');
const headerSearchReceiveOptionElement = $('.header__search-receive-option');

const headerSearchCheckElement = $('.header__search-give');
const headerSearchCheckOptionElement = $('.header__search-check-option');

const headerSearchCheckStarts = $$('.header__search-check-start');
const iconCheckeds = $$('.fa-calendar-check');
const iconChecks = $$('.fa-calendar');
const timeIns = $$('.header__search-check-time-in');

const headerSearchCustomerElement = $('.header__search-customer');
const headerSearchCustomerOptionElement = $('.header__search-customer-option')
const pluses = $$('.fa-plus');
const minuses = $$('.fa-minus');
const times = $$('.header__search-customer-times');

const headerSearchButtonMainElement = $('.header__search-button-main');
const headerSearchButtonTextElement = $('.header__search-button-text');


const navbarUserListScrollClass = 'header__navbar-user-bar-list-scroll';
const headerOptionItemSelected = 'header__navbar-option-items-selected';
const optionClass = 'option-';
const selectedSearchItemClass = 'header__search-items-selected';
const activeButtonClass = 'header__search-button-active';


const handleUser = {
    showUserBarList() {
        let checkShow = false;

        function handleShowUserBarList() {
            if (!checkShow) {
                headerUserBarList.style.display = 'block';
                checkShow = true;
            }
            else {
                headerUserBarList.style.display = 'none';
                checkShow = false;
            }
        }

        for (let headerUserBar of headerUserBars ) {

            headerUserBar.onclick = () => {
                handleShowUserBarList();
            }

            headerUserBars[0].onblur = () => {
                headerUserBarList.style.display = 'none';
                checkShow = false;
            }

        }

        headerUserBars[1].onblur = () => {
            headerUserBarList.style.display = 'none';
            checkShow = false;
        }

        html.onkeyup = (e) => {
            if (e.keyCode === 27) {
                headerUserBarList.style.display = 'none';
                checkShow = false;
            }
        } 



    },
    userRegister() {
        userRegisterElement.onclick = () => {
            modal.style.display = 'flex';
        }

        modalOverlay.onclick = () => {
            modal.style.display = 'none';
        }
    },
    userLogin() {
        userLoginElement.onclick = () => {
            modal.style.display = 'flex';
        }

        modalOverlay.onclick = () => {
            modal.style.display = 'none';
        }
    }

}

const scrollHandle = {
    changeNavbar() {
        window.onscroll = function() {
            if (this.scrollY > 30) {
                headerNavbarScroll.style.display = 'flex';
                headerOptionListElement.style.display = 'none';

                for (let headerSearchElement of headerSearchElements) {
                    headerSearchElement.style.display = 'none';
                }
                headerUserBarList.classList.add(navbarUserListScrollClass);
                
            }
            else {
                headerNavbarScroll.style.display = 'none';
                if (window.screen.width > 739) {
                    headerOptionListElement.style.display = 'flex';
                    headerSearchElements[0].style.display = 'flex';
                }
                headerUserBarList.classList.remove(navbarUserListScrollClass);


            }
        }
    }
}

function handleOptionItem() {
    for (let i = 0; i < optionLinkElements.length; i++) {
        optionLinkElements[i].onclick = (e) => {
    
            for (let optionItemElement of optionItemElements) {
                if (optionItemElement.classList.value.search(headerOptionItemSelected) !== -1) {
                    optionItemElement.classList.remove(headerOptionItemSelected);
                }
            }
    
            const optionItemElement = e.target.parentNode;
            optionItemElement.classList.add(headerOptionItemSelected);
    
            const arrayOptionClasses = e.target.classList.value.split(' ');
            const selectedOption = arrayOptionClasses.find(option => {
                return option === optionClass + (i + 1);
            });
            for (let j = 0; j < headerSearchElements.length; j++) {
    
                if (headerSearchElements[j].classList.value.search(optionClass)) {
                    headerSearchElements[j].style.display = 'none';
                }
                
                if (headerSearchElements[j].classList.value.search(selectedOption) !== -1) {

                    headerSearchElements[j].style.display = 'flex'; 
                }
            }
        }
    
    }

}

const searchHandle = {
    checkPlace: false,
    checkReceive:  false,
    checkCheck: false,
    checkCustomer: false,
    checkSearchButton: false,
    setClassForItemElement(element) {
        for (itemElement of headerSearchItemElements) {
            if (itemElement === element) {
                itemElement.classList.add(selectedSearchItemClass);
            }
            else {
                itemElement.classList.remove(selectedSearchItemClass);
            }
        }
    },
    checkShow(checkObject, element) {
        if (checkObject) {
            element.classList.remove(selectedSearchItemClass);
        }
        else {
            this.setClassForItemElement(element);
        }
    },
    placeChoice(element) {
        element.onclick = () => {

            this.checkShow(this.checkPlace, element);
            if (!this.checkPlace) {
                headerSearchPlaceElement.style.display = 'block';
                this.checkPlace = true;

                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;

                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;
                

            }
            else {
                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;

            }

        }

        window.addEventListener('click', (e) => {
            if ( !e.target.closest('.header__search-place') && (!e.target.closest('.header__search-place-option'))) { 
                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;
                headerSearchPlaceOptionElement.classList.remove(selectedSearchItemClass);
            }

            
        })


    },
    checkChoice() {

        headerSearchReceiveOptionElement.onclick = () => {
            this.checkShow(this.checkReceive, headerSearchReceiveOptionElement);


            if (!this.checkReceive) {
                headerSearchReceiveElement.style.display = 'block';
                this.checkReceive = true;

                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;

                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;

            }
            else {
                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;
            }
        }

        window.addEventListener('click', (e) => {
            if ( !e.target.closest('.header__search-receive') && !e.target.closest('.header__search-receive-option')) { 
                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;
                headerSearchReceiveOptionElement.classList.remove(selectedSearchItemClass);
            }
        })

        headerSearchCheckOptionElement.onclick = () => {
            this.checkShow(this.checkCheck, headerSearchCheckOptionElement);


            if (!this.checkCheck) {
                headerSearchCheckElement.style.display = 'block';
                this.checkCheck = true;

                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;

                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;

                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;
                
            }
            else {
                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

            }
        }

        window.addEventListener('click',  (e) => {
            if ( !e.target.closest('.header__search-give') && !e.target.closest('.header__search-check-option')) { 
                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;
                headerSearchCheckOptionElement.classList.remove(selectedSearchItemClass);
            }
        })

    },
    customerChoice() {
        headerSearchCustomerOptionElement.onclick = () => {

            this.checkShow(this.checkCustomer, headerSearchCustomerOptionElement);


            if (!this.checkCustomer) {
                headerSearchCustomerElement.style.display = 'block';
                this.checkCustomer = true;

                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;

                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;
                

            }
            else {
                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;

            }
        }

        window.addEventListener('click', (e) => {
            if ( !e.target.closest('.header__search-customer') && !e.target.closest('.header__search-customer-option')) { 
                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;
                headerSearchCustomerOptionElement.classList.remove(selectedSearchItemClass);
            }
        })
    },


}

const handleModal = {
    closeModal() {
        modalCloseElement.onclick = () => {
            modal.style.display = 'none';
        }

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 27)
                modal.style.display = 'none';
        })
    }
}

const handelOptions = {
    selectedCheckStart() {
        for (let element of headerSearchCheckStarts) {
            element.onclick = () => {
                if (!Object.values(element.classList).find((classElement) => {return classElement === 'header__search-check-start--selected'})) {
                    element.classList.add('header__search-check-start--selected');
                    for (let icon of iconCheckeds) {
                        if (icon.parentNode === element) {
                            icon.style.display = 'inline-block';
                        }
                    }

                    for (let icon of iconChecks) {
                        if (icon.parentNode === element) {
                            icon.style.display = 'none';
                        }
                    }
                }
                else {
                    element.classList.remove('header__search-check-start--selected');
                    for (let icon of iconCheckeds) {
                        if (icon.parentNode === element) {
                            icon.style.display = 'none';
                        }
                    }

                    for (let icon of iconChecks) {
                        if (icon.parentNode === element) {
                            icon.style.display = 'inline-block';
                        }
                    }
                }
            }
        }

    },
    selectedTimeIn() {
        for (let time of timeIns) {
            time.onclick = () => {
                
                if (!Object.values(time.classList).find((classElement) => {return classElement === 'header__search-check-time-in--selected'})) {
                    time.classList.add('header__search-check-time-in--selected');
                }
                else {
                    time.classList.remove('header__search-check-time-in--selected');
                }
            }
        }
    },
    handlePlusMinor() {
        for (let plus of pluses) {
            plus.onclick = () => {
                 $('#T' + plus.id).innerText = Number($('#T' + plus.id).innerText) + 1;
                 if (Number($('#T' + plus.id).innerText) > 0) {
                    $('#M' + plus.id).classList.remove('header__search-customer-icon--disable');
                    $('#M' + plus.id).classList.add('header__search-customer-icon--enable');
                 }
            }
        }

        for (let minus of minuses) {
            minus.onclick = () => {
                if (Object.values(minus.classList).find((classElement) => {return classElement === 'header__search-customer-icon--enable'}) && Number($('#T' + minus.id.split('')[1]).innerText) > 0) {
                    $('#T' + minus.id.split('')[1]).innerText = Number($('#T' + minus.id.split('')[1]).innerText) - 1;
                }
                if (Number($('#T' + minus.id.split('')[1]).innerText) === 0) {
                    minus.classList.add('header__search-customer-icon--disable');
                    minus.classList.remove('header__search-customer-icon--enable');
                }
            }

        }
    }
}

function start() {
    handleOptionItem();
    handleUser.showUserBarList();
    handleUser.userRegister();
    handleUser.userLogin();
    scrollHandle.changeNavbar();
    searchHandle.placeChoice(headerSearchPlaceOptionElement);
    searchHandle.placeChoice(headerSearchPlaceOptionElement2);
    searchHandle.checkChoice();
    searchHandle.customerChoice();
    handleModal.closeModal();
    handelOptions.selectedCheckStart();
    handelOptions.selectedTimeIn();
    handelOptions.handlePlusMinor();
}


start();






