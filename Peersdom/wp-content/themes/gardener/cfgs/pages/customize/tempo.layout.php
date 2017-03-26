<?php
    
    /**
     *  Appearance / Customize / Layout - config settings
     */

    $default = array(
        'main'          => __( 'Main Sidebar' , 'gardener' ),
        'front-page'    => __( 'Front Page Sidebar' , 'gardener' ),
        'page'          => __( 'Page Sidebar' , 'gardener' ),
        'post'          => __( 'Single Post Sidebar' , 'gardener' )
    );

    $sidebars   = $default;
    $custom     = tempo_validator::get_json( tempo_options::val( 'custom-sidebars' ) );

    if( !empty( $custom ) && is_array( $custom ) )
        $sidebars = array_merge( $default,  $custom );
    

    $cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'customize' ), array(
    	'tempo-layout' => array(
    		'title'		=> __( 'Layout' , 'gardener' ),
    		'priority' 	=> 47,
    		'sections'	=> array(
                'tempo-layout-general' => array(
                    'title'             => __( 'General' , 'gardener' ),
                    'description'       => sprintf( __( '%s: On the premium version, the content width for layout with sidebars is 945 pixels.' , 'gardener' ), '<b>' . __( 'IMPORANT', 'gardener' ) . '</b>' ),
                    'fields'            => array(
                        'content-width' => 'unsupport'
                    )
                ),
    			'tempo-layout' => array(
    				'title'             => __( 'Blog & Archives' , 'gardener' ),
                	'description'       => __( 'Default Layout is used for the next templates: Blog, Archives, Categories, Tags, Author and Search Results.' , 'gardener' ),
                	'fields'			=> array(
                		'layout'	=> array(
                			'title'             => __( 'Layout' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'right',
                				'options'	=> array(
                					'left'  => __( 'Left Sidebar', 'gardener' ),
                    				'full'  => __( 'Full Width', 'gardener' ),
                    				'right' => __( 'Right Sidebar', 'gardener' )
                				)
                			)
                		),
                		'sidebar'	=> array(
                			'title'             => __( 'Sidebar' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'main',
                				'options'	=> $sidebars
                			)
                		)
                	)
    			),
    			'tempo-front-page-layout' => array(
    				'title'             => __( 'Front Page' , 'gardener' ),
                	'description'       => __( 'In order to use this option set you need to activate a staic page on Front Page from - "Static Front Page" tab.' , 'gardener' ),
                	//'callback' 			=> 'is_front_page',
                	'fields'			=> array(
                		'front-page-layout' => array(
                			'title'             => __( 'Layout' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'full',
                				'options'	=> array(
                					'left'  => __( 'Left Sidebar', 'gardener' ),
                    				'full'  => __( 'Full Width', 'gardener' ),
                    				'right' => __( 'Right Sidebar', 'gardener' )
                				)
                			)
                		),
                		'front-page-sidebar' => array(
                			'title'             => __( 'Sidebar' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'front-page',
                				'options'	=> $sidebars
                			)
                		)
                	)
    			),
    			'tempo-post-layout' => array(
    				'title'             => __( 'Post' , 'gardener' ),
                	'description'       => __( 'for the each post you can overwrite the Layout options with the custom settings ( on edit page meta box "Layout" ).' , 'gardener' ),
                	'fields'			=> array(
                		'post-layout' => array(
                			'title'             => __( 'Layout' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'right',
                				'options'	=> array(
                					'left'  => __( 'Left Sidebar', 'gardener' ),
                    				'full'  => __( 'Full Width', 'gardener' ),
                    				'right' => __( 'Right Sidebar', 'gardener' )
                				)
                			)
                		),
                		'post-sidebar' => array(
                			'title'             => __( 'Sidebar' , 'gardener' ),
                			'input'				=> array(
                				'type'		=> 'select',
                				'default'	=> 'post',
                				'options'	=> $sidebars
                			)
                		)
                	)
    			),
                'tempo-page-layout' => array(
                    'title'             => __( 'Page' , 'gardener' ),
                    'description'       => __( 'for the each page you can overwrite the Layout options with the custom settings ( on edit page meta box "Layout" ).' , 'gardener' ),
                    'fields'            => array(
                        'page-layout' => array(
                            'title'             => __( 'Layout' , 'gardener' ),
                            'input'             => array(
                                'type'      => 'select',
                                'default'   => 'full',
                                'options'   => array(
                                    'left'  => __( 'Left Sidebar', 'gardener' ),
                                    'full'  => __( 'Full Width', 'gardener' ),
                                    'right' => __( 'Right Sidebar', 'gardener' )
                                )
                            )
                        ),
                        'page-sidebar' => array(
                            'title'             => __( 'Sidebar' , 'gardener' ),
                            'input'             => array(
                                'type'      => 'select',
                                'default'   => 'page',
                                'options'   => $sidebars
                            )
                        )
                    )
                )
    		)
    	)
    ));

    tempo_cfgs::set( 'customize', $cfgs );
?>