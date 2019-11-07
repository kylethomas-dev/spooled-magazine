<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Spooled_Magazine
 */

get_header();
?>

<section class="pt-4">
    <div class="container">
        <div class="row">
            <main id="content" class="col-md-9" role="main">

                <?php if ( have_posts() ) : ?>
                <?php /* Start the Loop */ ?>
                <?php while ( have_posts() ) : the_post(); ?>

                <?php

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', ('single') );
				?>

                <?php endwhile; ?>
                <?php the_posts_navigation(); ?>

                <?php else : ?>

                <?php get_template_part( 'template-parts/content', 'none' ); ?>

                <?php endif; ?>

            </main>

            <aside class="col-md-3">

                <?php get_sidebar(); ?>

            </aside>


        </div>
    </div>
</section>

<?php
get_footer(); ?>
