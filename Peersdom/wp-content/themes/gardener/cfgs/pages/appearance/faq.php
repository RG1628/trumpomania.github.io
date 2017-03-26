<?php

	/**
	 *	Appearance / Tempo FAQ - config settings
	 */

	$settings = tempo_cfgs::merge( (array)tempo_cfgs::get( 'settings' ), array(
		'appearance' => array(
			'tempo-faq' => array(
			    'sections' 	=> array(
			    	'faq' => array(
			    		'columns' 		=> array(
			    			// COLUMNS
							'right' => array(
								'boxes' 			=> array(
									array(
										'title'		=> __( 'Customize the Theme', 'gardener' ),
										'template'  => 'templates/admin/appearance/faq/customizer'
									)
								)
							)
			    		)
				    )
				)
			)
		)
	));

	tempo_cfgs::set( 'settings', $settings );
?>
