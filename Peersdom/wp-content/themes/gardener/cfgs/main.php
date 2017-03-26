<?php

	/**
	 *	General config settings
	 */


	/**
	 *	Theme Config
	 */

	$cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'theme' ), array(
		'description' => __( 'Gardener is a free WordPress child Theme that extends the Tempo free WordPress theme.', 'gardener' ),
	));

	tempo_cfgs::set( 'theme', $cfgs );


	/**
	 *	Author Config
	 */

	$cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'author' ), array(
		'uri-title'			=> 'http://mythem.es/?admin-panel=gardener&amp;title=1',
		'uri-description'	=> 'http://mythem.es/?admin-panel=gardener&amp;description=1',
		'contact'			=> 'http://mythem.es/contact/?admin-panel=gardener&amp;contact-us=1'
	));

	tempo_cfgs::set( 'author', $cfgs );


	/**
	 *	Custom Logo
	 */

	$cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'custom-logo' ), array(
        'height'      	=> 78,
        'width'       	=> 518,
        'flex-height' 	=> true,
		'flex-width'  	=> true,
		'header-text'	=> array( 'tempo-site-title', 'tempo-site-description' )
    ));

    tempo_cfgs::set( 'custom-logo', $cfgs );


    /**
     *	Custom Background
     */

    $cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'custom-background' ), array(
        'default-color'         => '#ffffff',
        'default-image'         => null,
        'default-attachment'    => 'scroll'
	));

	tempo_cfgs::set( 'custom-background', $cfgs );


	/**
     *	Custom Header
     */

    $cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'custom-header' ), array(
        'default-image' => get_stylesheet_directory_uri() . '/media/img/wordpress-theme-gardener-header-image.jpg',
    ));

    tempo_cfgs::set( 'custom-header', $cfgs );


	/**
	 *	Images Size
	 */

	$cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'images-size' ), array(
		'tempo-classic' => array(
			'width' 	=> 1140,
			'height'	=> 640,
			'crop' 		=> true
		),
		'gardener-header' => array(
			'width' 	=> 2560,
			'height'	=> 1440,
			'crop' 		=> true
		),
	));

	tempo_cfgs::set( 'images-size', $cfgs );
?>
