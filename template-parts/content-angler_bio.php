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
                <?php the_field('angler_bio'); ?>
            </div>
        </div>
        
        <div class="row pt-5 pb-5">
            <div class="col-md-12">
                
            <!-- Image Gallery -->
            <div class="row">
                    <div class="col-md-12">
                        <?php
                        $images = get_field('image_gallery');
                        $count=0;
                        $count1=0;
                        $size = 'large';
                        ?>
                        <?php if($images) : ?>
                        <div id="slider">
                            <div id="gallery-carousel" class="carousel slide" data-ride="gallery-carousel">
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner featured-carousel">
                                    <?php $i = 0;?>
                                    <?php foreach( $images as $image ): ?>
                                    <div class="carousel-item<?php if($count1==0){echo ' active';} ?>" data-slide-number="<?php echo $count1 ?>">
                                        <img class="img-fluid" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                    </div><!-- item -->
                                    <?php
                                    $count1++;
                                    $i++; ?>
                                    <?php endforeach; ?>
                                    <a class="carousel-control-prev" href="#gallery-carousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#gallery-carousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div><!-- carousel inner -->
                            </div><!-- #carousel -->
                        </div>
                        <!--#slider-->
                        <?php endif; ?>
                    </div>
                </div><!-- /.row -->

            </div>        
    </div>

    </div>
</section>
