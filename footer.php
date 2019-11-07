<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Spooled_Magazine
 */

?>
<section>
    <div class="container-fluid">
        <img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/uploads/2018/12/spooled-reels.jpg">
    </div>
</section>

<footer class="site-footer p-5">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h6 class="text-uppercase">Magazine</h6>
                <ul class="no-bullets">
                    <li class="font-light"><a href="<?php echo get_site_url(); ?>/magazine">Spooled Magazine</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <h6 class="text-uppercase">Spooled Story</h6>
                <ul class="no-bullets">
                    <li class="font-light"><a href="<?php echo get_site_url(); ?>/about">About</a></li>
                    <li class="font-light"><a href="<?php echo get_site_url(); ?>/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h6 class="text-uppercase">Get Spooled</h6>
                <ul class="no-bullets">
                    <li class="font-light"><a href="<?php echo get_site_url(); ?>/members">Become A Member</a></li>
                </ul>
            </div>
            <div class="col-md-2">
                <h6 class="text-uppercase">Contact</h6>
                <ul class="no-bullets list-inline">
                    <li class="font-light list-inline-item"><a href="http://facebook.com/spooledmagazine" target="_blank"><i class="fab fa-facebook fa-3x"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="row pt-4">
            <div class="col-md-2">
                <a href="
https://itunes.apple.com/us/app/spooled/id1447765752?ls=1&mt=8" target="_blank"><img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/themes/spooled-magazine/assets/img/app-store-button.png" alt="Apple App Store" /></a>
            </div>
            <div class="col-md-2">
                <a href="https://play.google.com/store/apps/details?id=com.app.magazinesapp" target="_blank"><img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/themes/spooled-magazine/assets/img/google-play-button.png" alt="Google Play Store" /></a>
            </div>
        </div>

    </div>
</footer>

<?php wp_footer(); ?>

</body>

</html>
