<?php
/**
 * Spooled Magazine functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Spooled_Magazine
 */

if ( ! function_exists( 'spooled_magazine_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function spooled_magazine_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Spooled Magazine, use a find and replace
		 * to change 'spooled-magazine' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'spooled-magazine', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'spooled-magazine' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'spooled_magazine_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'spooled_magazine_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function spooled_magazine_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'spooled_magazine_content_width', 640 );
}
add_action( 'after_setup_theme', 'spooled_magazine_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function spooled_magazine_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'spooled-magazine' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'spooled-magazine' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h5 class="card-title text-uppercase">',
		'after_title'   => '</h5>',
	) );
}
add_action( 'widgets_init', 'spooled_magazine_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function spooled_magazine_scripts() {
    //reenable outdated scripts with updated versions
	wp_enqueue_script( 'jquery','https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), '3.3.1', false );
	wp_enqueue_script( 'jquery-ui-core', "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js", array('jquery'), '1.12.1', false );
    
    
    wp_enqueue_script( 'spooled-magazine-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

    wp_enqueue_script( 'spooled-magazine-popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array('jquery'), '1.0.0', true );
    wp_enqueue_script( 'spooled-magazine-bootstrapjs', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '4.1.1', true );
    wp_enqueue_script( 'spooled-magazine-carouseljs', get_template_directory_uri() . '/assets/js/carousel.js', array('spooled-magazine-magazine-js'), '1.0.0', true );
    wp_enqueue_script( 'spooled-magazine-fontawesomejs', get_template_directory_uri() . '/assets/js/all.min.js', array('spooled-magazine-carouseljs'), '5.3.1', true );
    wp_enqueue_script( 'spooled-magazine-slickjs', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('spooled-magazine-fontawesomejs'), '1.8.1', true );
	wp_enqueue_script( 'spooled-magazine-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
    
wp_enqueue_style( 'spooled-magazine-style', get_stylesheet_uri(), array('spooled-magazine-bootstrap'), '' );
    wp_enqueue_style( 'spooled-magazine-theme', get_template_directory_uri() . '/assets/css/theme.css', array('spooled-magazine-style'), '');
    wp_enqueue_style( 'spooled-magazine-bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', array(), '4.1.1' );
    wp_enqueue_style( 'spooled-magazine-fontawesome', get_template_directory_uri() . '/assets/css/all.min.css"', array(), '5.3.1' );
     wp_enqueue_style( 'spooled-magazine-slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1.0.0' ); 
    wp_enqueue_style( 'spooled-magazine-montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700', array(), '' );
    	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'spooled_magazine_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

add_filter('acf_the_content', 'eae_encode_emails');
