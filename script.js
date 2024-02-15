const accordanceBtns = document.querySelectorAll('.accordance-btn');

accordanceBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const accordanceDescription = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon'); 
        const minusIcon = this.querySelector('.minus-icon'); 

        if(accordanceDescription.style.maxHeight) {
            accordanceDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordanceDescription.style.maxHeight = accordanceDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});
