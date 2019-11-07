<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Spooled_Magazine
 */

?>
<div class="row">
    <div class="card mb-3">
        <div class="row">
            <div class="col-md-4 pr-0">
                <?php if ( has_post_thumbnail () ) { ?>
                <?php the_post_thumbnail('large', array('class' => 'card-img-left img-fluid')); ?>
                <?php } ?>
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h5 class="card-title pt-2 text-uppercase">
                        <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'jb_Caravans' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">
                            <?php the_title(); ?>
                        </a>
                    </h5>
                    <div class="card-text font-light">
                        <?php the_excerpt(); ?>
                        <time>
                            <i class="far fa-calendar-alt font-red mr-1"></i>
                            <?php the_date(); ?>
                        </time>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
