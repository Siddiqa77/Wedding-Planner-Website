

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });



    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Reviews

    let swiper = new Swiper(".review-slider", {
        loop:true,
        grabCursor: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    
    
    AOS.init({
      duration:800,
      delay:400
    });
    
    // calculator
    // Get the button and the budget calculator container
    // Open the calculator when button is clicked
document.getElementById('openCalculatorBtn').addEventListener('click', function () {
    document.getElementById('budgetCalculatorWrapper').classList.add('show');
});

// Close the calculator when close button is clicked
document.getElementById('closeCalculator').addEventListener('click', function () {
    document.getElementById('budgetCalculatorWrapper').classList.remove('show');
});

// Calculate the total budget
function calculateBudget() {
    var guests = document.getElementById('guests').value;
    var venue = document.getElementById('venue').value;
    var catering = document.getElementById('catering').value;
    var decoration = document.getElementById('decoration').value;
    
    var totalBudget = parseFloat(venue) + (parseFloat(catering) * parseFloat(guests)) + parseFloat(decoration);
    
    document.getElementById('totalBudget').innerText = totalBudget.toFixed(2);
}
// checklist btn

// Get the sidebar element and the open/close buttons
const openBtn = document.getElementById('openChecklistBtn');
const sidebar = document.getElementById('checklistSidebar');
const closeBtn = document.getElementById('closeChecklist');

// Event listener to open the sidebar
openBtn.addEventListener('click', function() {
    sidebar.classList.add('open'); // Add class to open the sidebar
});

// Event listener to close the sidebar
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open'); // Remove class to close the sidebar
});

// Optional: Close the sidebar when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == sidebar) {
        sidebar.classList.remove('open');
    }
});

