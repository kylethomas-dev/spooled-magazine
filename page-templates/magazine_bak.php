<section class="pt-0">
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col-md-12">
                <?php 
$image = get_sub_field('hero_image');
if( !empty($image) ): ?>
                <img class="img-fluid" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<section class="pt-4 pb-4">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">
                    <?php the_sub_field('title'); ?>
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="font-light">
                    <?php the_sub_field('content'); ?>
                </div>
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="<?php echo get_site_url(); ?>/wp-content/uploads/2019/01/spooled-phone-tablet.jpg" alt="Spooled Magazine" />
            </div>
        </div>
    </div>
</section>

<section class="pb-5">
    <div class="container">
        <div class="row">
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
