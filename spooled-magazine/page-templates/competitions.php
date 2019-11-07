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
    </div>
</section>

<!-- Angler Bios -->
<section>
    <div class="container">
        <!-- Single Stock -->
        <div class="row">
            <?php 
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array('posts_per_page' => 12, 'post_type' => 'competitions', 'paged' => $paged );
query_posts($args); ?>
            <!-- the loop -->
            <?php if ( have_posts() ) : while (have_posts()) : the_post(); ?>
            <div class="col-md-3">
                <a href="<?php the_permalink(); ?>">
                    <div class="image">
                        <?php
                                            if ( has_post_thumbnail() ) {
                                                the_post_thumbnail('image-tile');
                                            } ?>
                    </div>
                </a>
                <h5 class="text-uppercase pt-2">
                    <?php the_title(); ?>
                </h5>
                <p><a href="<?php the_permalink(); ?>" class="btn btn-block btn-black">View Bio</a></p>
            </div>
            <!-- end col -->
            <?php $counter++;
                      if ($counter % 4 == 0) {
                      echo '</div><div class="row">';
                    } ?>
            <?php endwhile; ?>
            <!-- pagination -->
            <div class="row">
                <div class="col-md-12" style="text-align:center;">
                    <?php wp_pagenavi(); ?>
                    <?php else : ?>
                    <!-- No posts found -->
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <!-- /Single Stock -->
    </div>
</section>
<!-- /Angler Bios -->
