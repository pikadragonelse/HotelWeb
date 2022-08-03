const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const html = $('html');
const body = $('body');
const mainElement = $('.main');
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

const headerSearchReceiveElement = $('.header__search-receive');
const headerSearchReceiveOptionElement = $('.header__search-receive-option');

const headerSearchCheckElement = $('.header__search-give');
const headerSearchCheckOptionElement = $('.header__search-check-option');

const headerSearchCustomerElement = $('.header__search-customer');
const headerSearchCustomerOptionElement = $('.header__search-customer-option')

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
                if (window.screen.width > 740) {
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
    placeChoice() {
        headerSearchPlaceOptionElement.onclick = () => {

            this.checkShow(this.checkPlace, headerSearchPlaceOptionElement);

            if (!this.checkPlace) {
                headerSearchPlaceElement.style.display = 'block';
                this.checkPlace = true;

                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;

                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;
                this.buttonSearchHandle();

            }
            else {
                headerSearchPlaceElement.style.display = 'none';
                this.checkPlace = false;

            }

        }

        headerSearchPlaceOptionElement.onblur = () => {
            headerSearchPlaceElement.style.display = 'none';
            this.checkPlace = false;
            headerSearchPlaceOptionElement.classList.remove(selectedSearchItemClass);
            this.buttonSearchHandle();

        }
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
                this.buttonSearchHandle();

            }
            else {
                headerSearchReceiveElement.style.display = 'none';
                this.checkReceive = false;
            }
        }

        headerSearchReceiveOptionElement.onblur = () => {
            headerSearchReceiveElement.style.display = 'none';
            this.checkReceive = false;
            headerSearchReceiveOptionElement.classList.remove(selectedSearchItemClass);
            this.buttonSearchHandle();
        }

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
                this.buttonSearchHandle();
            }
            else {
                headerSearchCheckElement.style.display = 'none';
                this.checkCheck = false;

            }
        }

        headerSearchCheckOptionElement.onblur = () => {
            headerSearchCheckElement.style.display = 'none';
            this.checkCheck = false;
            headerSearchCheckOptionElement.classList.remove(selectedSearchItemClass);
            this.buttonSearchHandle();

        }

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
                this.buttonSearchHandle();

            }
            else {
                headerSearchCustomerElement.style.display = 'none';
                this.checkCustomer = false;

            }
        }

        headerSearchCustomerOptionElement.onblur = () => {
            headerSearchCustomerElement.style.display = 'none';
            this.checkCustomer = false;

            headerSearchCustomerOptionElement.classList.remove(selectedSearchItemClass);
            this.buttonSearchHandle();
        }
    },
    buttonSearchHandle() {
        if (!this.checkSearchButton) {
            headerSearchButtonTextElement.style.display = 'block';
            headerSearchButtonMainElement.classList.add(activeButtonClass);
            this.checkSearchButton = true;
        }
        else {
            headerSearchButtonTextElement.style.display = 'none';
            headerSearchButtonMainElement.classList.remove(activeButtonClass);
            this.checkSearchButton = false;
        }
    },

}

function start() {
    handleOptionItem();
    handleUser.showUserBarList();
    handleUser.userRegister();
    handleUser.userLogin();
    scrollHandle.changeNavbar();
    searchHandle.placeChoice();
    searchHandle.checkChoice();
    searchHandle.customerChoice();
}


start();






