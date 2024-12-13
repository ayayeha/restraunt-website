
const bookTableButton = document.getElementById("my-button");
bookTableButton.addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Book a Table",
    text: "Thank you for your interest! Our team will contact you soon.",
    icon: "success",
    confirmButtonText: "OK",
  });
});



window.onload = () => {
    Swal.fire({
      title: 'Welcome to Mealify!',
      text: 'We hope you enjoy your visit.',
      icon: 'info',
      confirmButtonText: 'Let\'s Explore!',
    });
  };

  

  const scrollToTopButton = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  


  