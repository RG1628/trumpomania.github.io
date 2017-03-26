<?php
    /**
     *  check if is active Sidebar
     */

    if( !is_active_sidebar( 'front-page-header' ) )
        return;
?>

    <!-- aside -->
    <aside class="content tempo-front-page header-sidebar">

        <!-- container -->
        <div <?php echo tempo_container_class(); ?>>
            <div <?php echo tempo_row_class(); ?>>

                <!-- content -->
                <div <?php echo tempo_content_class(); ?>>
                    <div <?php echo tempo_row_class( 'widgets-row' ); ?>>

                        <?php dynamic_sidebar( 'front-page-header' ); ?>

                    </div>
                </div><!-- end content -->

            </div>
        </div><!-- end container -->

    </aside><!-- end aside -->
