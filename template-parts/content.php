<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Spooled_Magazine
 */

?>

<section class="pt-0">
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col-md-12">
                <?php 
$image = get_field('hero_image');
if( !empty($image) ): ?>
                <img class="img-fluid" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<section class="pt-5">
    <div class="container">
        <div class="row">
            <main id="content" class="col-md-9" role="main">

                <div class="row">
                    <div class="col-md-12">
                        <div class="card-block px-2">
                            <h1 class="text-uppercase">
                                <?php the_title(); ?>
                            </h1>
                            <div class="card-text font-light">
                                <?php the_content(); ?>
                                <hr />
                                <time>
                                    <i class="far fa-calendar-alt font-red mr-1"></i>
                                    <?php the_date(); ?>
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <aside class="col-md-3">
                <?php get_sidebar(); ?>
            </aside>

        </div>
    </div>
</section>


<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row justify-content-center align-self-center pb-5">
                    <a href="<?php echo get_site_url(); ?>/news/"><button type="button" class="btn btn-red text-uppercase"><strong>BACK TO NEWS</strong><i class="fas fa-angle-right fa-lg mt-1 ml-2"></i></button></a>
                </div>
            </div>
        </div>
    </div>
</section>
