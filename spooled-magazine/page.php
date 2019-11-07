<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Spooled_Magazine
 */

get_header();
?>


<?php if ( have_rows( 'page_templates' ) ): ?>
<?php while ( have_rows( 'page_templates' ) ) : the_row(); ?>

<?php if ( get_row_layout() == 'home_page' ) : ?>
<?php get_template_part( 'page-templates/home' ); ?>

<?php elseif ( get_row_layout() == 'about_page' ) : ?>
<?php get_template_part( 'page-templates/about' ); ?>

<?php elseif ( get_row_layout() == 'magazine_page' ) : ?>
<?php get_template_part( 'page-templates/magazine' ); ?>

<?php elseif ( get_row_layout() == 'contact_page' ) : ?>
<?php get_template_part( 'page-templates/contact' ); ?>

<?php elseif ( get_row_layout() == 'members_page' ) : ?>
<?php get_template_part( 'page-templates/members' ); ?>

<?php elseif ( get_row_layout() == 'bios_page' ) : ?>
<?php get_template_part( 'page-templates/bio' ); ?>

<?php elseif ( get_row_layout() == 'app_usage_page' ) : ?>
<?php get_template_part( 'page-templates/app-usage' ); ?>

<?php elseif ( get_row_layout() == 'competitions_page' ) : ?>
<?php get_template_part( 'page-templates/competitions' ); ?>

<?php elseif ( get_row_layout() == 'general_page' ) : ?>
<?php get_template_part( 'page-templates/general' ); ?>

<?php // warning: layout 'about_page' has no sub fields ?>
<?php endif; ?>
<?php endwhile; ?>
<?php else: ?>
<section id="content">
    <div class="container">
        <div class="row">
            <?php
						while ( have_posts() ) :
							the_post();
							get_template_part( 'template-parts/content', 'page' );

							// If comments are open or we have at least one comment, load up the comment template.
							if ( comments_open() || get_comments_number() ) :
								comments_template();
							endif;

						endwhile; // End of the loop.
						?>
        </div>
        <!-- /#content -->
    </div>
    <!-- /.container -->
</section>
<!-- /.row -->
<?php endif; ?>

<?php get_footer(); ?>
