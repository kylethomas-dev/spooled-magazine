<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">
                    <?php single_post_title(); ?>
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 font-light">
                <?php the_field('page_content'); ?>
            </div>
        </div>
    </div>
</section>
