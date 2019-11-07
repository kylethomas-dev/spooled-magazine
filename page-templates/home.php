<section class="pt-0 pb-4">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php masterslider("ms-home"); ?>
            </div>
        </div>
    </div>
</section>

<section class="pt-0 pb-4">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase text-center">
                    <?php the_sub_field('page_title'); ?>
                </h1>
            </div>
            <div class="col-md-12">
                <div class="font-light">
                    <?php the_sub_field('page_content'); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pb-4">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-uppercase text-center">
                    Watch Our Latest Video Promo
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="embed-container">
                    <?php the_sub_field('promo_video'); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2 class="text-uppercase">
                    Available Now
                </h2>
            </div>
            <div class="col-md-2">
                <a href="
https://itunes.apple.com/us/app/spooled/id1447765752?ls=1&mt=8" target="_blank"><img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/themes/spooled-magazine/assets/img/app-store-button.png" alt="Apple App Store" /></a>
            </div>
            <div class="col-md-2">
                <a href="https://play.google.com/store/apps/details?id=com.app.magazinesapp" target="_blank"><img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/themes/spooled-magazine/assets/img/google-play-button.png" alt="Google Play Store" /></a>
            </div>
        </div>
    </div>
</section>
