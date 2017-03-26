<?php
	$headline       = (bool)tempo_options::get( 'header-headline' );
	$description    = (bool)tempo_options::get( 'header-description' );

    $btn_1 			= (bool)tempo_options::get( 'header-btn-1' );
    $btn_2 			= (bool)tempo_options::get( 'header-btn-2' );

	$valign     = 'tempo-valign-middle';

	if( ( $headline || $description ) && ( $btn_1 || $btn_2 ) ){
        $valign = 'tempo-valign-top';
	}

	$style	= '';

	if( !($headline || $description) ){
		$style	= 'style="height: 100%"';
	}

    $classes    = 'tempo-header-btns-wrapper';
    $align      = 'tempo-align-center';

	if( !( $btn_1 || $btn_2 ) )
        return;
?>

	<div <?php echo tempo_flex_container_class( $classes, $valign ); ?> <?php echo $style; ?>>
		<div <?php echo tempo_flex_item_class( null, $align ); ?>>

			<?php
				if( $btn_1 ){

					$btn_1_text 		= esc_html( tempo_options::get( 'header-btn-1-text' ) );
					$btn_1_description	= esc_attr( tempo_options::get( 'header-btn-1-description' ) );
					$btn_1_url			= esc_url( tempo_options::get( 'header-btn-1-url' ) );
					$btn_1_target		= (bool)tempo_options::get( 'header-btn-1-target' ) ? 'target="_blank"' : '';

					echo '<a href="' . esc_url( $btn_1_url ) . '" title="' . esc_attr( $btn_1_description ) . '" ' . $btn_1_target . ' class="tempo-btn btn-header btn-1">' . esc_html( $btn_1_text ) . '</a>';
				}

				if( $btn_2 ){

					$btn_2_text 		= esc_html( tempo_options::get( 'header-btn-2-text' ) );
					$btn_2_description	= esc_attr( tempo_options::get( 'header-btn-2-description' ) );
					$btn_2_url			= esc_url( tempo_options::get( 'header-btn-2-url' ) );
					$btn_2_target		= (bool)tempo_options::get( 'header-btn-2-target' ) ? 'target="_blank"' : '';

					echo '<a href="' . esc_url( $btn_2_url ) . '" title="' . esc_attr( $btn_2_description ) . '" ' . $btn_2_target . ' class="tempo-btn btn-header btn-2">' . esc_html( $btn_2_text ) . '</a>';
				}
			?>

		</div>
	</div>
