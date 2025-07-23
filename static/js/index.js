window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Tab switching functionality
    const tabs = document.querySelectorAll('.tabs li');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('is-active'));
        
        // Add active class to clicked tab
        this.classList.add('is-active');
        
        // Hide all tab panes
        tabPanes.forEach(pane => {
          pane.style.display = 'none';
          pane.classList.remove('is-active');
        });
        
        // Show corresponding tab pane
        const targetTab = this.getAttribute('data-tab');
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
          targetPane.style.display = 'block';
          targetPane.classList.add('is-active');
        }
      });
    });

    // Handle reference citations click events
    document.addEventListener('click', function(e) {
        if (e.target.tagName.toLowerCase() === 'mcreference') {
            const link = e.target.getAttribute('link');
            if (link) {
                window.open(link, '_blank');
            }
        }
    });

})
