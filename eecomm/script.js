document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");
   
    // Slider functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides .slide img');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    };

    const prevSlide = () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    };

    document.querySelector('.slider-controls .next').addEventListener('click', nextSlide);
    document.querySelector('.slider-controls .prev').addEventListener('click', prevSlide);

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Product button functionality
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.order-form').style.display = 'flex';
        });
    });

    // Order form and Payment form functionality
    const closeButtons = document.querySelectorAll('.order-form .close, .payment .close');
    const orderForm = document.querySelector('.order-form');
    const paymentForm = document.querySelector('.payment');
    const confirmationMessage = document.querySelector('.confirmation-message');

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            orderForm.style.display = 'none';
            paymentForm.style.display = 'none';
            confirmationMessage.style.display = 'none';
        });
    });

    // Submit Order Form
    document.querySelector('.order-form button').addEventListener('click', () => {
        // Here you can add validation if needed
        orderForm.style.display = 'none';
        paymentForm.style.display = 'flex';
    });

    // Submit Payment Form
    document.querySelector('#submitPaymentButton').addEventListener('click', () => {
        // Here you can add validation if needed
        paymentForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
        alert('Order Placed');
    });
});