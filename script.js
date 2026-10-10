const select = document.querySelector('.select');
const button = document.querySelector('.select__placeholder');
const options = document.querySelector('.select__options');
const optionsArray = Array.from(document.querySelectorAll('.select__option'));
const oldSelect = document.querySelector('.old-select');
const arrow = document.querySelector('.select__arrow');

button.addEventListener('click', ()=> {
    options.classList.toggle('show-options');
    select.style.height = '274px';
    arrow.classList.toggle('rotate-arrow');
});

optionsArray.forEach(option => {
    option.addEventListener('click', function() {
        let selectedOption = this.dataset.value;
        let selectedOptionText = this.innerText;
        console.log(selectedOptionText);
        oldSelect.value = selectedOption;
        const placeholderText = document.querySelector('.select__label');
        placeholderText.textContent = selectedOptionText;
        options.classList.remove('show-options');
        arrow.classList.remove('rotate-arrow');
    });
});

