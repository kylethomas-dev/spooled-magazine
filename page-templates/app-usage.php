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

<section class="pt-4 pb-5">
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
                    <?php the_sub_field( 'content' ); ?>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="pb-5">
    <div class="container">
        <div class="row">
            <?php if ( have_rows( 'usage_columns' ) ) : ?>
            <?php while ( have_rows( 'usage_columns' ) ) : the_row(); ?>
            <div class="col-md-3">
                <?php $app_usage_icon = get_sub_field( 'app_usage_icon' ); ?>
                <?php if ( $app_usage_icon ) { ?>
                <img class="img-fluid" src="<?php echo $app_usage_icon['url']; ?>" alt="<?php echo $app_usage_icon['alt']; ?>" />
                <?php } ?>
                <p class="font-light pt-3 text-center">
                    <?php the_sub_field( 'app_usage_description' ); ?>
                </p>
            </div>
            <?php endwhile; ?>
            <?php else : ?>
            <?php // no rows found ?>
            <?php endif; ?>
        </div>
    </div>
</section>
