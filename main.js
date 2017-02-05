$(document).ready(function() {
     $('.scrollspy').scrollSpy();
      $(".button-collapse").sideNav({
          edge: 'right',
          menuWidth: 150,
      });
    $('#revealcpu').hover(
        function() {
            $('#oldcpu').fadeIn();
        },
        function() {
            $('#oldcpu').fadeOut('slow');
        }
    );
});
