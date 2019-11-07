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
            <div class="col-md-12">
                <div class="font-light">
                    <?php the_sub_field('content'); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php echo do_shortcode('[contact-form-7 id="8" title="Contact Spooled Magazine"]'); ?>
            </div>
        </div>
    </div>
</section>
