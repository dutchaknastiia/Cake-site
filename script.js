document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when a navigation item is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // 2. Form Validation & Submission Handling
    const orderForm = document.getElementById('orderForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const dateInput = document.getElementById('date');

            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameInput.closest('.form-group').classList.add('error');
                isValid = false;
            } else {
                nameInput.closest('.form-group').classList.remove('error');
            }

            // Validate Phone
            if (phoneInput.value.trim().length < 6) {
                phoneInput.closest('.form-group').classList.add('error');
                isValid = false;
            } else {
                phoneInput.closest('.form-group').classList.remove('error');
            }

            // Validate Date
            if (dateInput.value === '') {
                dateInput.closest('.form-group').classList.add('error');
                isValid = false;
            } else {
                dateInput.closest('.form-group').classList.remove('error');
            }

            // Display success modal if form is valid
            if (isValid) {
                successModal.classList.add('active');
                orderForm.reset();
            }
        });
    }

    // Modal Close Listeners
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }

    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }

    // 3. Set Minimum Selectable Date to Today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});