<?php
    /**
     *	Appearance / Customize / Header Tools
     */

    $cfgs = tempo_cfgs::merge( (array)tempo_cfgs::get( 'customize' ), array(
        'tempo-header-tools' => array(
            'title'         => __( 'Header Tools', 'gardener' ),
            'priority'      => 34,
            'fields'		=> array(
                'address' => array(
                    'title'			=> __( 'Display Address', 'gardener' ),
                    'description'	=> __( 'enable / disable address tools', 'gardener' ),
                    'priority'		=> 10,
                    'input'			=> array(
                        'type'			=> 'checkbox',
                        'default'		=> false
                    )
                ),
                'address-1' => array(
                    'title'			=> __( 'Address first Line', 'gardener' ),
                    'priority'		=> 15,
                    'input'			=> array(
                        'type'			=> 'text'
                    )
                ),
                'address-2' => array(
                    'title'			=> __( 'Address second Line', 'gardener' ),
                    'priority'		=> 20,
                    'input'			=> array(
                        'type'			=> 'text'
                    )
                ),
                'program' => array(
                    'title'			=> __( 'Display Program', 'gardener' ),
                    'description'	=> __( 'enable / disable program tools', 'gardener' ),
                    'priority'		=> 25,
                    'input'			=> array(
                        'type'			=> 'checkbox',
                        'default'		=> false
                    )
                ),
                'program-1' => array(
                    'title'			=> __( 'Program first Line', 'gardener' ),
                    'priority'		=> 30,
                    'input'			=> array(
                        'type'			=> 'text'
                    )
                ),
                'program-2' => array(
                    'title'			=> __( 'Program second Line', 'gardener' ),
                    'priority'		=> 35,
                    'input'			=> array(
                        'type'			=> 'text'
                    )
                )
            )
        )
    ));

    tempo_cfgs::set( 'customize', $cfgs );
?>
