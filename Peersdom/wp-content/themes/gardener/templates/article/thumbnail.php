<?php
    global $post;

	$thumbnail          = get_post( get_post_thumbnail_id( $post ) );
    $has_post_thumbnail = has_post_thumbnail( $post ) && isset( $thumbnail -> ID ) && wp_attachment_is( 'image', $thumbnail );

    if( !$has_post_thumbnail )
        return;


    echo '<div class="tempo-thumbnail-wrapper">';


    /**
     *  Image Thumbnail Image
     */

    echo '<div class="tempo-image-wrapper overflow-wrapper">';

	echo get_the_post_thumbnail( $post,  'tempo-classic', array(
        'alt'   => get_the_title( $post ),
        'class' => 'effect-scale'
    ));


    /**
     *  Thumbnail Permalink ( go to single post )
     */

    echo '<a href="' . esc_url( get_permalink( $post ) ) . '" class="tempo-flex-container tempo-valign-bottom" title="' . esc_attr( get_the_title( $post ) ) . '">';

    /**
     *  Thumbnail Caption
     */

    $caption = isset( $thumbnail -> post_excerpt ) ? strip_tags( $thumbnail -> post_excerpt ) : null;

    if( !empty( $caption ) ){
        echo '<span class="tempo-caption-wrapper tempo-flex-item left">' . $caption . '</span>';
    }

    echo '</a>';

    echo '</div>';


    echo '</div>';
?>
