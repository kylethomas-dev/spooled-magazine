<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Spooled_Magazine
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
    <meta name="google-site-verification" content="6B1uZwEJvh-1gg11bKTT5cxFgmUxxGco8BCxi8_FRmM" />

    <?php wp_head(); ?>

    <link href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css" rel="stylesheet">
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    <script src="https://stamen-maps.a.ssl.fastly.net/js/tile.stamen.js"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/assets/js/leaflet-geosearch.js"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/assets/js/leaflet-providers.js"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/assets/js/leaflet.markercluster-src.js"></script>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/assets/js/Leaflet.Sleep.js"></script>
</head>

<body <?php body_class(); ?>>

    <section class="pt-3 pb-3">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="navbar-brand active">
                        <a href="<?php echo home_url(); ?>">
                            <img src="<?php bloginfo('stylesheet_directory') ?>/assets/img/spooled-logo.png" class="d-inline-block align-top site-logo" />
                        </a>
                    </div>
                </div>
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

    <header class="site-header">
        <div class="container">
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                <?php ubermenu( 'main' , array( 'theme_location' => 'menu-1' ) ); ?>
            </nav>
        </div>

    </header>
