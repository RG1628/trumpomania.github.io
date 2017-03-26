 (function($){

    {   //- BACKGROUND IMAGE -//

        wp.customize( 'background_image' , function( value ){
            value.bind(function( newval ){
                if( newval ){

                    var image       = newval;
                    var repeat      = wp.customize.instance( 'background_repeat' ).get();
                    var position    = wp.customize.instance( 'background_position_x' ).get();
                    var attchment   = wp.customize.instance( 'background_attachment' ).get();

                    jQuery( 'style#background-image').html(
                        'body div.tempo-website-wrapper{' +
                        'background-image: url(' + image + ');' +
                        'background-repeat: ' + repeat + ';' +
                        'background-position: ' + position + ';' +
                        'background-attachment: ' + attchment + ';' +
                        '}'
                    );
                }
            });
        });

        wp.customize( 'background_repeat' , function( value ){
            value.bind(function( newval ){
                if( newval ){

                    var image       = wp.customize.instance( 'background_image' ).get();
                    var repeat      = newval;
                    var position    = wp.customize.instance( 'background_position_x' ).get();
                    var attchment   = wp.customize.instance( 'background_attachment' ).get();

                    jQuery( 'style#background-image').html(
                        'body div.tempo-website-wrapper{' +
                        'background-image: url(' + image + ');' +
                        'background-repeat: ' + repeat + ';' +
                        'background-position: ' + position + ';' +
                        'background-attachment: ' + attchment + ';' +
                        '}'
                    );
                }
            });
        });

        wp.customize( 'background_position_x' , function( value ){
            value.bind(function( newval ){
                if( newval ){

                    var image       = wp.customize.instance( 'background_image' ).get();
                    var repeat      = wp.customize.instance( 'background_repeat' ).get();
                    var position    = newval;
                    var attchment   = wp.customize.instance( 'background_attachment' ).get();

                    jQuery( 'style#background-image').html(
                        'body div.tempo-website-wrapper{' +
                        'background-image: url(' + image + ');' +
                        'background-repeat: ' + repeat + ';' +
                        'background-position: ' + position + ';' +
                        'background-attachment: ' + attchment + ';' +
                        '}'
                    );
                }
            });
        });

        wp.customize( 'background_attachment' , function( value ){
            value.bind(function( newval ){
                if( newval ){

                    var image       = wp.customize.instance( 'background_image' ).get();
                    var repeat      = wp.customize.instance( 'background_repeat' ).get();
                    var position    = wp.customize.instance( 'background_position_x' ).get();
                    var attchment   = newval;

                    jQuery( 'style#background-image').html(
                        'body div.tempo-website-wrapper{' +
                        'background-image: url(' + image + ');' +
                        'background-repeat: ' + repeat + ';' +
                        'background-position: ' + position + ';' +
                        'background-attachment: ' + attchment + ';' +
                        '}'
                    );
                }
            });
        });
    }

    {   //- COLORS -//

        // background color
        wp.customize( 'background_color' , function( value ){
            value.bind(function( newval ){
                if( newval ){
                    jQuery( 'style#background-color').html(
                        'body div.tempo-website-wrapper{' +
                        'background-color: ' + newval + ';' +
                        '}'
                    );
                }
            });
        });
    }

    {   /// HEADER TOOLS

        // Address
        wp.customize( 'address-1', function( value ){
            value.bind(function( newval ){
                var span = jQuery( 'div.tools-item.gardener-address span.info-stressed' );

                if( span.length )
                    span.text( newval );
            });
        });

        wp.customize( 'address-2', function( value ){
            value.bind(function( newval ){
                var span = jQuery( 'div.tools-item.gardener-address span.info-unstressed' );

                if( span.length )
                    span.text( newval );
            });
        });

        // Program
        wp.customize( 'program-1', function( value ){
            value.bind(function( newval ){
                var span = jQuery( 'div.tools-item.gardener-program span.info-stressed' );

                if( span.length )
                    span.text( newval );
            });
        });

        wp.customize( 'program-2', function( value ){
            value.bind(function( newval ){
                var span = jQuery( 'div.tools-item.gardener-program span.info-unstressed' );

                if( span.length )
                    span.text( newval );
            });
        });
    }


    {   //- HEADER -//

        {   // custom colors ( first color )

            wp.customize( 'first-color', function( value ){
                value.bind(function( newval ){
                    jQuery( 'style#first-color' ).html(
                        'div.tempo-breadcrumbs nav.tempo-navigation ul.tempo-menu-list li a:hover,' +
                        'article.tempo-article.classic h2.tempo-title a:hover,' +
                        'article.tempo-article.classic div.tempo-meta.top a:hover,' +
                        'article.tempo-article.classic a.more-link:hover,' +
                        'div.tempo-comments-wrapper p.must-log-in a,' +
                        'input[type="submit"].btn-empty,' +
                        'input[type="button"].btn-empty,' +
                        'input[type="reset"].btn-empty,' +
                        'button.btn-empty,' +
                        '.button.btn-empty,' +
                        '.tempo-btn.btn-empty,' +
                        '.btn.btn-empty,' +
                        'input[type="submit"].btn-search.btn-empty,' +
                        'input[type="button"].btn-search.btn-empty,' +
                        'input[type="reset"].btn-search.btn-empty,' +
                        'button.btn-search.btn-empty,' +
                        '.button.btn-search.btn-empty,' +
                        '.tempo-btn.btn-search.btn-empty,' +
                        '.btn.btn-search.btn-empty,' +
                        'input[type="submit"].btn-header.btn-empty,' +
                        'input[type="button"].btn-header.btn-empty,' +
                        'input[type="reset"].btn-header.btn-empty,' +
                        'button.btn-header.btn-empty,' +
                        '.button.btn-header.btn-empty,' +
                        '.tempo-btn.btn-header.btn-empty,' +
                        '.btn.btn-header.btn-empty,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover,' +
                        'button.btn-newsletter.btn-hover-empty:hover,' +
                        '.button.btn-newsletter.btn-hover-empty:hover,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus,' +
                        'button.btn-newsletter.btn-hover-empty:focus,' +
                        '.button.btn-newsletter.btn-hover-empty:focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.focus,' +
                        'button.btn-newsletter.btn-hover-empty.focus,' +
                        '.button.btn-newsletter.btn-hover-empty.focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.focus,' +
                        '.btn.btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'button.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:active,' +
                        'button.btn-newsletter.btn-hover-empty:active,' +
                        '.button.btn-newsletter.btn-hover-empty:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.active,' +
                        'button.btn-newsletter.btn-hover-empty.active,' +
                        '.button.btn-newsletter.btn-hover-empty.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.active,' +
                        '.btn.btn-newsletter.btn-hover-empty.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.active,' +
                        'button.btn-header.btn-2.btn-hover-empty.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'button.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.button.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'button.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.button.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'button.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.button.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'button.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.button.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'button.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.button.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'button.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.button.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'button.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.button.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.btn.btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'button.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'div.gardener-header-tools div.tools-item div.tools-item-wrapper i,' +
                        'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title,' +
                        'article.tempo-article.classic div.tempo-meta-activity a:hover,' +
                        'article.tempo-article.classic div.tempo-meta-activity span,' +
                        'article.tempo-article.classic div.tempo-author a.author-website-url,' +
                        'aside:not(.dark-sidebars) div.widget a:hover,' +
                        'aside:not(.dark-sidebars) div.widget.widget_pages li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_meta li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_categories li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_archive li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_nav_menu li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.zeon_widget_categories li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.tempo_widget_categories li:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_recent_comments ul li a:hover,' +
                        'aside:not(.dark-sidebars) div.widget.widget_calendar div.calendar_wrap table td a,' +
                        'aside.header-sidebar div.widget.widget_pages ul li:hover:before,' +
                        'aside.header-sidebar div.widget.widget_nav_menu ul li:hover:before,' +
                        'aside.header-sidebar div.widget.widget_pages ul li a:hover,' +
                        'aside.header-sidebar div.widget.widget_nav_menu ul li a:hover,' +
                        'aside.sidebar-content-wrapper div.widget.zeon_widget_categories ul li a:hover,' +
                        'aside.sidebar-content-wrapper div.widget.tempo_widget_categories ul li a:hover,' +
                        'aside.tempo-footer.light-sidebars div.widget.widget_pages ul li:hover:before,' +
                        'aside.tempo-footer.light-sidebars div.widget.widget_nav_menu ul li:hover:before,' +
                        'aside.tempo-footer.light-sidebars div.widget.widget_pages ul li a:hover,' +
                        'aside.tempo-footer.light-sidebars div.widget.widget_nav_menu ul li a:hover,' +
                        'h1 .gardener-highlight,' +
                        'h2 .gardener-highlight,' +
                        'h3 .gardener-highlight,' +
                        'h4 .gardener-highlight,' +
                        'h5 .gardener-highlight,' +
                        'h6 .gardener-highlight {' +
                        'color: ' + newval + ';' +
                        '}' +

                        'article.tempo-article.classic div.tempo-categories a,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form div.textarea p.comment-form-comment textarea:focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form div.textarea p.comment-form-comment textarea:active,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form div.textarea p.comment-form-comment textarea.focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form div.textarea p.comment-form-comment textarea.active' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.input input:focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.input input:active,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.input input.focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.input input.active,' +
                        'input[type="submit"],' +
                        'input[type="button"],' +
                        'input[type="reset"],' +
                        'button,' +
                        '.button,' +
                        '.tempo-btn,' +
                        '.btn,' +
                        'input[type="submit"].btn-search,' +
                        'input[type="button"].btn-search,' +
                        'input[type="reset"].btn-search,' +
                        'button.btn-search,' +
                        '.button.btn-search,' +
                        '.tempo-btn.btn-search,' +
                        '.btn.btn-search,' +
                        'input[type="submit"].btn-header,' +
                        'input[type="button"].btn-header,' +
                        'input[type="reset"].btn-header,' +
                        'button.btn-header,' +
                        '.button.btn-header,' +
                        '.tempo-btn.btn-header,' +
                        '.btn.btn-header,' +
                        'input[type="submit"].btn-newsletter:hover,' +
                        'input[type="button"].btn-newsletter:hover,' +
                        'input[type="reset"].btn-newsletter:hover,' +
                        'button.btn-newsletter:hover,' +
                        '.button.btn-newsletter:hover,' +
                        '.tempo-btn.btn-newsletter:hover,' +
                        '.btn.btn-newsletter:hover,' +
                        'input[type="submit"].btn-header.btn-2:hover,' +
                        'input[type="button"].btn-header.btn-2:hover,' +
                        'input[type="reset"].btn-header.btn-2:hover,' +
                        'button.btn-header.btn-2:hover,' +
                        '.button.btn-header.btn-2:hover,' +
                        '.tempo-btn.btn-header.btn-2:hover,' +
                        '.btn.btn-header.btn-2:hover,' +
                        'input[type="submit"].btn-newsletter:focus,' +
                        'input[type="button"].btn-newsletter:focus,' +
                        'input[type="reset"].btn-newsletter:focus,' +
                        'button.btn-newsletter:focus,' +
                        '.button.btn-newsletter:focus,' +
                        '.tempo-btn.btn-newsletter:focus,' +
                        '.btn.btn-newsletter:focus,' +
                        'input[type="submit"].btn-header.btn-2:focus,' +
                        'input[type="button"].btn-header.btn-2:focus,' +
                        'input[type="reset"].btn-header.btn-2:focus,' +
                        'button.btn-header.btn-2:focus,' +
                        '.button.btn-header.btn-2:focus,' +
                        '.tempo-btn.btn-header.btn-2:focus,' +
                        '.btn.btn-header.btn-2:focus,' +
                        'input[type="submit"].btn-newsletter.focus,' +
                        'input[type="button"].btn-newsletter.focus,' +
                        'input[type="reset"].btn-newsletter.focus,' +
                        'button.btn-newsletter.focus,' +
                        '.button.btn-newsletter.focus,' +
                        '.tempo-btn.btn-newsletter.focus,' +
                        '.btn.btn-newsletter.focus,' +
                        'input[type="submit"].btn-header.btn-2.focus,' +
                        'input[type="button"].btn-header.btn-2.focus,' +
                        'input[type="reset"].btn-header.btn-2.focus,' +
                        'button.btn-header.btn-2.focus,' +
                        '.button.btn-header.btn-2.focus,' +
                        '.tempo-btn.btn-header.btn-2.focus,' +
                        '.btn.btn-header.btn-2.focus,' +
                        'input[type="submit"].btn-newsletter:active,' +
                        'input[type="button"].btn-newsletter:active,' +
                        'input[type="reset"].btn-newsletter:active,' +
                        'button.btn-newsletter:active,' +
                        '.button.btn-newsletter:active,' +
                        '.tempo-btn.btn-newsletter:active,' +
                        '.btn.btn-newsletter:active,' +
                        'input[type="submit"].btn-header.btn-2:active,' +
                        'input[type="button"].btn-header.btn-2:active,' +
                        'input[type="reset"].btn-header.btn-2:active,' +
                        'button.btn-header.btn-2:active,' +
                        '.button.btn-header.btn-2:active,' +
                        '.tempo-btn.btn-header.btn-2:active,' +
                        '.btn.btn-header.btn-2:active,' +
                        'input[type="submit"].btn-newsletter.active,' +
                        'input[type="button"].btn-newsletter.active,' +
                        'input[type="reset"].btn-newsletter.active,' +
                        'button.btn-newsletter.active,' +
                        '.button.btn-newsletter.active,' +
                        '.tempo-btn.btn-newsletter.active,' +
                        '.btn.btn-newsletter.active,' +
                        'input[type="submit"].btn-header.btn-2.active,' +
                        'input[type="button"].btn-header.btn-2.active,' +
                        'input[type="reset"].btn-header.btn-2.active,' +
                        'button.btn-header.btn-2.active,' +
                        '.button.btn-header.btn-2.active,' +
                        '.tempo-btn.btn-header.btn-2.active,' +
                        '.btn.btn-header.btn-2.active,' +
                        'input[type="submit"].btn-newsletter:hover:focus,' +
                        'input[type="button"].btn-newsletter:hover:focus,' +
                        'input[type="reset"].btn-newsletter:hover:focus,' +
                        'button.btn-newsletter:hover:focus,' +
                        '.button.btn-newsletter:hover:focus,' +
                        '.tempo-btn.btn-newsletter:hover:focus,' +
                        '.btn.btn-newsletter:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2:hover:focus,' +
                        'input[type="button"].btn-header.btn-2:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2:hover:focus,' +
                        'button.btn-header.btn-2:hover:focus,' +
                        '.button.btn-header.btn-2:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2:hover:focus,' +
                        '.btn.btn-header.btn-2:hover:focus,' +
                        'input[type="submit"].btn-newsletter:hover.focus,' +
                        'input[type="button"].btn-newsletter:hover.focus,' +
                        'input[type="reset"].btn-newsletter:hover.focus,' +
                        'button.btn-newsletter:hover.focus,' +
                        '.button.btn-newsletter:hover.focus,' +
                        '.tempo-btn.btn-newsletter:hover.focus,' +
                        '.btn.btn-newsletter:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2:hover.focus,' +
                        'input[type="button"].btn-header.btn-2:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2:hover.focus,' +
                        'button.btn-header.btn-2:hover.focus,' +
                        '.button.btn-header.btn-2:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2:hover.focus,' +
                        '.btn.btn-header.btn-2:hover.focus,' +
                        'input[type="submit"].btn-newsletter:hover:active,' +
                        'input[type="button"].btn-newsletter:hover:active,' +
                        'input[type="reset"].btn-newsletter:hover:active,' +
                        'button.btn-newsletter:hover:active,' +
                        '.button.btn-newsletter:hover:active,' +
                        '.tempo-btn.btn-newsletter:hover:active,' +
                        '.btn.btn-newsletter:hover:active,' +
                        'input[type="submit"].btn-header.btn-2:hover:active,' +
                        'input[type="button"].btn-header.btn-2:hover:active,' +
                        'input[type="reset"].btn-header.btn-2:hover:active,' +
                        'button.btn-header.btn-2:hover:active,' +
                        '.button.btn-header.btn-2:hover:active,' +
                        '.tempo-btn.btn-header.btn-2:hover:active,' +
                        '.btn.btn-header.btn-2:hover:active,' +
                        'input[type="submit"].btn-newsletter:hover.active,' +
                        'input[type="button"].btn-newsletter:hover.active,' +
                        'input[type="reset"].btn-newsletter:hover.active,' +
                        'button.btn-newsletter:hover.active,' +
                        '.button.btn-newsletter:hover.active,' +
                        '.tempo-btn.btn-newsletter:hover.active,' +
                        '.btn.btn-newsletter:hover.active,' +
                        'input[type="submit"].btn-header.btn-2:hover.active,' +
                        'input[type="button"].btn-header.btn-2:hover.active,' +
                        'input[type="reset"].btn-header.btn-2:hover.active,' +
                        'button.btn-header.btn-2:hover.active,' +
                        '.button.btn-header.btn-2:hover.active,' +
                        '.tempo-btn.btn-header.btn-2:hover.active,' +
                        '.btn.btn-header.btn-2:hover.active,' +
                        'input[type="submit"].btn-newsletter:focus:active,' +
                        'input[type="button"].btn-newsletter:focus:active,' +
                        'input[type="reset"].btn-newsletter:focus:active,' +
                        'button.btn-newsletter:focus:active,' +
                        '.button.btn-newsletter:focus:active,' +
                        '.tempo-btn.btn-newsletter:focus:active,' +
                        '.btn.btn-newsletter:focus:active,' +
                        'input[type="submit"].btn-header.btn-2:focus:active,' +
                        'input[type="button"].btn-header.btn-2:focus:active,' +
                        'input[type="reset"].btn-header.btn-2:focus:active,' +
                        'button.btn-header.btn-2:focus:active,' +
                        '.button.btn-header.btn-2:focus:active,' +
                        '.tempo-btn.btn-header.btn-2:focus:active,' +
                        '.btn.btn-header.btn-2:focus:active,' +
                        'input[type="submit"].btn-newsletter:focus.active,' +
                        'input[type="button"].btn-newsletter:focus.active,' +
                        'input[type="reset"].btn-newsletter:focus.active,' +
                        'button.btn-newsletter:focus.active,' +
                        '.button.btn-newsletter:focus.active,' +
                        '.tempo-btn.btn-newsletter:focus.active,' +
                        '.btn.btn-newsletter:focus.active,' +
                        'input[type="submit"].btn-header.btn-2:focus.active,' +
                        'input[type="button"].btn-header.btn-2:focus.active,' +
                        'input[type="reset"].btn-header.btn-2:focus.active,' +
                        'button.btn-header.btn-2:focus.active,' +
                        '.button.btn-header.btn-2:focus.active,' +
                        '.tempo-btn.btn-header.btn-2:focus.active,' +
                        '.btn.btn-header.btn-2:focus.active,' +
                        'input[type="submit"].btn-newsletter.focus.active,' +
                        'input[type="button"].btn-newsletter.focus.active,' +
                        'input[type="reset"].btn-newsletter.focus.active,' +
                        'button.btn-newsletter.focus.active,' +
                        '.button.btn-newsletter.focus.active,' +
                        '.tempo-btn.btn-newsletter.focus.active,' +
                        '.btn.btn-newsletter.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.focus.active,' +
                        'input[type="button"].btn-header.btn-2.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.focus.active,' +
                        'button.btn-header.btn-2.focus.active,' +
                        '.button.btn-header.btn-2.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.focus.active,' +
                        '.btn.btn-header.btn-2.focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover,' +
                        'button.btn-newsletter.btn-empty:hover,' +
                        '.button.btn-newsletter.btn-empty:hover,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover,' +
                        '.btn.btn-newsletter.btn-empty:hover,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover,' +
                        'button.btn-header.btn-2.btn-empty:hover,' +
                        '.button.btn-header.btn-2.btn-empty:hover,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover,' +
                        '.btn.btn-header.btn-2.btn-empty:hover,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus,' +
                        'button.btn-newsletter.btn-empty:focus,' +
                        '.button.btn-newsletter.btn-empty:focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus,' +
                        '.btn.btn-newsletter.btn-empty:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus,' +
                        'button.btn-header.btn-2.btn-empty:focus,' +
                        '.button.btn-header.btn-2.btn-empty:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus,' +
                        '.btn.btn-header.btn-2.btn-empty:focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty.focus,' +
                        'input[type="button"].btn-newsletter.btn-empty.focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty.focus,' +
                        'button.btn-newsletter.btn-empty.focus,' +
                        '.button.btn-newsletter.btn-empty.focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty.focus,' +
                        '.btn.btn-newsletter.btn-empty.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.focus,' +
                        'button.btn-header.btn-2.btn-empty.focus,' +
                        '.button.btn-header.btn-2.btn-empty.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.focus,' +
                        '.btn.btn-header.btn-2.btn-empty.focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:active,' +
                        'button.btn-newsletter.btn-empty:active,' +
                        '.button.btn-newsletter.btn-empty:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:active,' +
                        '.btn.btn-newsletter.btn-empty:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:active,' +
                        'button.btn-header.btn-2.btn-empty:active,' +
                        '.button.btn-header.btn-2.btn-empty:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:active,' +
                        '.btn.btn-header.btn-2.btn-empty:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty.active,' +
                        'input[type="button"].btn-newsletter.btn-empty.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty.active,' +
                        'button.btn-newsletter.btn-empty.active,' +
                        '.button.btn-newsletter.btn-empty.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty.active,' +
                        '.btn.btn-newsletter.btn-empty.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.active,' +
                        'button.btn-header.btn-2.btn-empty.active,' +
                        '.button.btn-header.btn-2.btn-empty.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.active,' +
                        '.btn.btn-header.btn-2.btn-empty.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover:focus,' +
                        'button.btn-newsletter.btn-empty:hover:focus,' +
                        '.button.btn-newsletter.btn-empty:hover:focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover:focus,' +
                        '.btn.btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'button.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.button.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.btn.btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover.focus,' +
                        'button.btn-newsletter.btn-empty:hover.focus,' +
                        '.button.btn-newsletter.btn-empty:hover.focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover.focus,' +
                        '.btn.btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'button.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.button.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.btn.btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover:active,' +
                        'button.btn-newsletter.btn-empty:hover:active,' +
                        '.button.btn-newsletter.btn-empty:hover:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover:active,' +
                        '.btn.btn-newsletter.btn-empty:hover:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover:active,' +
                        'button.btn-header.btn-2.btn-empty:hover:active,' +
                        '.button.btn-header.btn-2.btn-empty:hover:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover:active,' +
                        '.btn.btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover.active,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover.active,' +
                        'button.btn-newsletter.btn-empty:hover.active,' +
                        '.button.btn-newsletter.btn-empty:hover.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover.active,' +
                        '.btn.btn-newsletter.btn-empty:hover.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover.active,' +
                        'button.btn-header.btn-2.btn-empty:hover.active,' +
                        '.button.btn-header.btn-2.btn-empty:hover.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover.active,' +
                        '.btn.btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus:active,' +
                        'button.btn-newsletter.btn-empty:focus:active,' +
                        '.button.btn-newsletter.btn-empty:focus:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus:active,' +
                        '.btn.btn-newsletter.btn-empty:focus:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus:active,' +
                        'button.btn-header.btn-2.btn-empty:focus:active,' +
                        '.button.btn-header.btn-2.btn-empty:focus:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus:active,' +
                        '.btn.btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus.active,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus.active,' +
                        'button.btn-newsletter.btn-empty:focus.active,' +
                        '.button.btn-newsletter.btn-empty:focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus.active,' +
                        '.btn.btn-newsletter.btn-empty:focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus.active,' +
                        'button.btn-header.btn-2.btn-empty:focus.active,' +
                        '.button.btn-header.btn-2.btn-empty:focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus.active,' +
                        '.btn.btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty.focus.active,' +
                        'input[type="button"].btn-newsletter.btn-empty.focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty.focus.active,' +
                        'button.btn-newsletter.btn-empty.focus.active,' +
                        '.button.btn-newsletter.btn-empty.focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty.focus.active,' +
                        '.btn.btn-newsletter.btn-empty.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.focus.active,' +
                        'button.btn-header.btn-2.btn-empty.focus.active,' +
                        '.button.btn-header.btn-2.btn-empty.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.focus.active,' +
                        '.btn.btn-header.btn-2.btn-empty.focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover,' +
                        'button.btn-newsletter.btn-hover-empty:hover,' +
                        '.button.btn-newsletter.btn-hover-empty:hover,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus,' +
                        'button.btn-newsletter.btn-hover-empty:focus,' +
                        '.button.btn-newsletter.btn-hover-empty:focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.focus,' +
                        'button.btn-newsletter.btn-hover-empty.focus,' +
                        '.button.btn-newsletter.btn-hover-empty.focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.focus,' +
                        '.btn.btn-newsletter.btn-hover-empty.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.focus,' +
                        'button.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:active,' +
                        'button.btn-newsletter.btn-hover-empty:active,' +
                        '.button.btn-newsletter.btn-hover-empty:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.active,' +
                        'button.btn-newsletter.btn-hover-empty.active,' +
                        '.button.btn-newsletter.btn-hover-empty.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.active,' +
                        '.btn.btn-newsletter.btn-hover-empty.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.active,' +
                        'button.btn-header.btn-2.btn-hover-empty.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover:focus,' +
                        'button.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.button.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover:focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover:focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover.focus,' +
                        'button.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.button.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover.focus,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover.focus,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover:active,' +
                        'button.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.button.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:hover.active,' +
                        'button.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.button.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:hover.active,' +
                        '.btn.btn-newsletter.btn-hover-empty:hover.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'button.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:hover.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus:active,' +
                        'button.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.button.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus:active,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus:active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty:focus.active,' +
                        'button.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.button.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty:focus.active,' +
                        '.btn.btn-newsletter.btn-hover-empty:focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'button.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty:focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="button"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-hover-empty.focus.active,' +
                        'button.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.button.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-hover-empty.focus.active,' +
                        '.btn.btn-newsletter.btn-hover-empty.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'button.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.button.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        '.btn.btn-header.btn-2.btn-hover-empty.focus.active,' +
                        'select:focus,' +
                        'textarea:focus,' +
                        'input:not([type=submit]):not([type=file]):not([type=button]):not([type=reset]):focus,' +
                        'input[type="tel"]:focus,' +
                        'input[type="url"]:focus,' +
                        'input[type="text"]:focus,' +
                        'input[type="email"]:focus,' +
                        'input[type="phone"]:focus,' +
                        'input[type="number"]:focus,' +
                        'input[type="password"]:focus,' +
                        'select:active,' +
                        'textarea:active,' +
                        'input:not([type=submit]):not([type=file]):not([type=button]):not([type=reset]):active,' +
                        'input[type="tel"]:active,' +
                        'input[type="url"]:active,' +
                        'input[type="text"]:active,' +
                        'input[type="email"]:active,' +
                        'input[type="phone"]:active,' +
                        'input[type="number"]:active,' +
                        'input[type="password"]:active,' +
                        'header.tempo-header div.tempo-header-partial.tempo-portfolio div.tempo-categories.single span.category-wrapper a,' +
                        'aside:not(.dark-sidebars) div.widget.widget_tag_cloud div.tagcloud a:hover,' +
                        'aside:not(.dark-sidebars) div.widget.tempo_widget_post_tags div.tagcloud a:hover{' +
                        'border-color: ' + newval + ';' +
                        '}' +

                        'article.tempo-article.classic div.tempo-categories i,' +
                        'article.tempo-article.classic div.tempo-categories ul li a,' +
                        '.pagination span,' +
                        '.pagination-wrapper span,' +
                        '.pagination a:hover,' +
                        '.pagination-wrapper a:hover,' +
                        'div.tempo-comments-wrapper ol.tempo-comments-list li.comment header span.tempo-comment-meta cite span.tempo-author-tag,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.form-submit input[type="submit"]:hover,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.form-submit input[type="submit"]:focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.form-submit input[type="submit"]:active,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.form-submit input[type="submit"].focus,' +
                        'div.tempo-comments-wrapper div.comment-respond form.comment-form p.form-submit input[type="submit"].active,' +
                        'input[type="submit"],' +
                        'input[type="button"],' +
                        'input[type="reset"],' +
                        'button,' +
                        '.button,' +
                        '.tempo-btn,' +
                        '.btn,' +
                        'input[type="submit"].btn-search,' +
                        'input[type="button"].btn-search,' +
                        'input[type="reset"].btn-search,' +
                        'button.btn-search,' +
                        '.button.btn-search,' +
                        '.tempo-btn.btn-search,' +
                        '.btn.btn-search,' +
                        'input[type="submit"].btn-header,' +
                        'input[type="button"].btn-header,' +
                        'input[type="reset"].btn-header,' +
                        'button.btn-header,' +
                        '.button.btn-header,' +
                        '.tempo-btn.btn-header,' +
                        '.btn.btn-header,' +
                        'input[type="submit"].btn-newsletter:hover,' +
                        'input[type="button"].btn-newsletter:hover,' +
                        'input[type="reset"].btn-newsletter:hover,' +
                        'button.btn-newsletter:hover,' +
                        '.button.btn-newsletter:hover,' +
                        '.tempo-btn.btn-newsletter:hover,' +
                        '.btn.btn-newsletter:hover,' +
                        'input[type="submit"].btn-header.btn-2:hover,' +
                        'input[type="button"].btn-header.btn-2:hover,' +
                        'input[type="reset"].btn-header.btn-2:hover,' +
                        'button.btn-header.btn-2:hover,' +
                        '.button.btn-header.btn-2:hover,' +
                        '.tempo-btn.btn-header.btn-2:hover,' +
                        '.btn.btn-header.btn-2:hover,' +
                        'input[type="submit"].btn-newsletter:focus,' +
                        'input[type="button"].btn-newsletter:focus,' +
                        'input[type="reset"].btn-newsletter:focus,' +
                        'button.btn-newsletter:focus,' +
                        '.button.btn-newsletter:focus,' +
                        '.tempo-btn.btn-newsletter:focus,' +
                        '.btn.btn-newsletter:focus,' +
                        'input[type="submit"].btn-header.btn-2:focus,' +
                        'input[type="button"].btn-header.btn-2:focus,' +
                        'input[type="reset"].btn-header.btn-2:focus,' +
                        'button.btn-header.btn-2:focus,' +
                        '.button.btn-header.btn-2:focus,' +
                        '.tempo-btn.btn-header.btn-2:focus,' +
                        '.btn.btn-header.btn-2:focus,' +
                        'input[type="submit"].btn-newsletter.focus,' +
                        'input[type="button"].btn-newsletter.focus,' +
                        'input[type="reset"].btn-newsletter.focus,' +
                        'button.btn-newsletter.focus,' +
                        '.button.btn-newsletter.focus,' +
                        '.tempo-btn.btn-newsletter.focus,' +
                        '.btn.btn-newsletter.focus,' +
                        'input[type="submit"].btn-header.btn-2.focus,' +
                        'input[type="button"].btn-header.btn-2.focus,' +
                        'input[type="reset"].btn-header.btn-2.focus,' +
                        'button.btn-header.btn-2.focus,' +
                        '.button.btn-header.btn-2.focus,' +
                        '.tempo-btn.btn-header.btn-2.focus,' +
                        '.btn.btn-header.btn-2.focus,' +
                        'input[type="submit"].btn-newsletter:active,' +
                        'input[type="button"].btn-newsletter:active,' +
                        'input[type="reset"].btn-newsletter:active,' +
                        'button.btn-newsletter:active,' +
                        '.button.btn-newsletter:active,' +
                        '.tempo-btn.btn-newsletter:active,' +
                        '.btn.btn-newsletter:active,' +
                        'input[type="submit"].btn-header.btn-2:active,' +
                        'input[type="button"].btn-header.btn-2:active,' +
                        'input[type="reset"].btn-header.btn-2:active,' +
                        'button.btn-header.btn-2:active,' +
                        '.button.btn-header.btn-2:active,' +
                        '.tempo-btn.btn-header.btn-2:active,' +
                        '.btn.btn-header.btn-2:active,' +
                        'input[type="submit"].btn-newsletter.active,' +
                        'input[type="button"].btn-newsletter.active,' +
                        'input[type="reset"].btn-newsletter.active,' +
                        'button.btn-newsletter.active,' +
                        '.button.btn-newsletter.active,' +
                        '.tempo-btn.btn-newsletter.active,' +
                        '.btn.btn-newsletter.active,' +
                        'input[type="submit"].btn-header.btn-2.active,' +
                        'input[type="button"].btn-header.btn-2.active,' +
                        'input[type="reset"].btn-header.btn-2.active,' +
                        'button.btn-header.btn-2.active,' +
                        '.button.btn-header.btn-2.active,' +
                        '.tempo-btn.btn-header.btn-2.active,' +
                        '.btn.btn-header.btn-2.active,' +
                        'input[type="submit"].btn-newsletter:hover:focus,' +
                        'input[type="button"].btn-newsletter:hover:focus,' +
                        'input[type="reset"].btn-newsletter:hover:focus,' +
                        'button.btn-newsletter:hover:focus,' +
                        '.button.btn-newsletter:hover:focus,' +
                        '.tempo-btn.btn-newsletter:hover:focus,' +
                        '.btn.btn-newsletter:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2:hover:focus,' +
                        'input[type="button"].btn-header.btn-2:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2:hover:focus,' +
                        'button.btn-header.btn-2:hover:focus,' +
                        '.button.btn-header.btn-2:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2:hover:focus,' +
                        '.btn.btn-header.btn-2:hover:focus,' +
                        'input[type="submit"].btn-newsletter:hover.focus,' +
                        'input[type="button"].btn-newsletter:hover.focus,' +
                        'input[type="reset"].btn-newsletter:hover.focus,' +
                        'button.btn-newsletter:hover.focus,' +
                        '.button.btn-newsletter:hover.focus,' +
                        '.tempo-btn.btn-newsletter:hover.focus,' +
                        '.btn.btn-newsletter:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2:hover.focus,' +
                        'input[type="button"].btn-header.btn-2:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2:hover.focus,' +
                        'button.btn-header.btn-2:hover.focus,' +
                        '.button.btn-header.btn-2:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2:hover.focus,' +
                        '.btn.btn-header.btn-2:hover.focus,' +
                        'input[type="submit"].btn-newsletter:hover:active,' +
                        'input[type="button"].btn-newsletter:hover:active,' +
                        'input[type="reset"].btn-newsletter:hover:active,' +
                        'button.btn-newsletter:hover:active,' +
                        '.button.btn-newsletter:hover:active,' +
                        '.tempo-btn.btn-newsletter:hover:active,' +
                        '.btn.btn-newsletter:hover:active,' +
                        'input[type="submit"].btn-header.btn-2:hover:active,' +
                        'input[type="button"].btn-header.btn-2:hover:active,' +
                        'input[type="reset"].btn-header.btn-2:hover:active,' +
                        'button.btn-header.btn-2:hover:active,' +
                        '.button.btn-header.btn-2:hover:active,' +
                        '.tempo-btn.btn-header.btn-2:hover:active,' +
                        '.btn.btn-header.btn-2:hover:active,' +
                        'input[type="submit"].btn-newsletter:hover.active,' +
                        'input[type="button"].btn-newsletter:hover.active,' +
                        'input[type="reset"].btn-newsletter:hover.active,' +
                        'button.btn-newsletter:hover.active,' +
                        '.button.btn-newsletter:hover.active,' +
                        '.tempo-btn.btn-newsletter:hover.active,' +
                        '.btn.btn-newsletter:hover.active,' +
                        'input[type="submit"].btn-header.btn-2:hover.active,' +
                        'input[type="button"].btn-header.btn-2:hover.active,' +
                        'input[type="reset"].btn-header.btn-2:hover.active,' +
                        'button.btn-header.btn-2:hover.active,' +
                        '.button.btn-header.btn-2:hover.active,' +
                        '.tempo-btn.btn-header.btn-2:hover.active,' +
                        '.btn.btn-header.btn-2:hover.active,' +
                        'input[type="submit"].btn-newsletter:focus:active,' +
                        'input[type="button"].btn-newsletter:focus:active,' +
                        'input[type="reset"].btn-newsletter:focus:active,' +
                        'button.btn-newsletter:focus:active,' +
                        '.button.btn-newsletter:focus:active,' +
                        '.tempo-btn.btn-newsletter:focus:active,' +
                        '.btn.btn-newsletter:focus:active,' +
                        'input[type="submit"].btn-header.btn-2:focus:active,' +
                        'input[type="button"].btn-header.btn-2:focus:active,' +
                        'input[type="reset"].btn-header.btn-2:focus:active,' +
                        'button.btn-header.btn-2:focus:active,' +
                        '.button.btn-header.btn-2:focus:active,' +
                        '.tempo-btn.btn-header.btn-2:focus:active,' +
                        '.btn.btn-header.btn-2:focus:active,' +
                        'input[type="submit"].btn-newsletter:focus.active,' +
                        'input[type="button"].btn-newsletter:focus.active,' +
                        'input[type="reset"].btn-newsletter:focus.active,' +
                        'button.btn-newsletter:focus.active,' +
                        '.button.btn-newsletter:focus.active,' +
                        '.tempo-btn.btn-newsletter:focus.active,' +
                        '.btn.btn-newsletter:focus.active,' +
                        'input[type="submit"].btn-header.btn-2:focus.active,' +
                        'input[type="button"].btn-header.btn-2:focus.active,' +
                        'input[type="reset"].btn-header.btn-2:focus.active,' +
                        'button.btn-header.btn-2:focus.active,' +
                        '.button.btn-header.btn-2:focus.active,' +
                        '.tempo-btn.btn-header.btn-2:focus.active,' +
                        '.btn.btn-header.btn-2:focus.active,' +
                        'input[type="submit"].btn-newsletter.focus.active,' +
                        'input[type="button"].btn-newsletter.focus.active,' +
                        'input[type="reset"].btn-newsletter.focus.active,' +
                        'button.btn-newsletter.focus.active,' +
                        '.button.btn-newsletter.focus.active,' +
                        '.tempo-btn.btn-newsletter.focus.active,' +
                        '.btn.btn-newsletter.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.focus.active,' +
                        'input[type="button"].btn-header.btn-2.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.focus.active,' +
                        'button.btn-header.btn-2.focus.active,' +
                        '.button.btn-header.btn-2.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.focus.active,' +
                        '.btn.btn-header.btn-2.focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover,' +
                        'button.btn-newsletter.btn-empty:hover,' +
                        '.button.btn-newsletter.btn-empty:hover,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover,' +
                        '.btn.btn-newsletter.btn-empty:hover,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover,' +
                        'button.btn-header.btn-2.btn-empty:hover,' +
                        '.button.btn-header.btn-2.btn-empty:hover,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover,' +
                        '.btn.btn-header.btn-2.btn-empty:hover,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus,' +
                        'button.btn-newsletter.btn-empty:focus,' +
                        '.button.btn-newsletter.btn-empty:focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus,' +
                        '.btn.btn-newsletter.btn-empty:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus,' +
                        'button.btn-header.btn-2.btn-empty:focus,' +
                        '.button.btn-header.btn-2.btn-empty:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus,' +
                        '.btn.btn-header.btn-2.btn-empty:focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty.focus,' +
                        'input[type="button"].btn-newsletter.btn-empty.focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty.focus,' +
                        'button.btn-newsletter.btn-empty.focus,' +
                        '.button.btn-newsletter.btn-empty.focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty.focus,' +
                        '.btn.btn-newsletter.btn-empty.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.focus,' +
                        'button.btn-header.btn-2.btn-empty.focus,' +
                        '.button.btn-header.btn-2.btn-empty.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.focus,' +
                        '.btn.btn-header.btn-2.btn-empty.focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:active,' +
                        'button.btn-newsletter.btn-empty:active,' +
                        '.button.btn-newsletter.btn-empty:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:active,' +
                        '.btn.btn-newsletter.btn-empty:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:active,' +
                        'button.btn-header.btn-2.btn-empty:active,' +
                        '.button.btn-header.btn-2.btn-empty:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:active,' +
                        '.btn.btn-header.btn-2.btn-empty:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty.active,' +
                        'input[type="button"].btn-newsletter.btn-empty.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty.active,' +
                        'button.btn-newsletter.btn-empty.active,' +
                        '.button.btn-newsletter.btn-empty.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty.active,' +
                        '.btn.btn-newsletter.btn-empty.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.active,' +
                        'button.btn-header.btn-2.btn-empty.active,' +
                        '.button.btn-header.btn-2.btn-empty.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.active,' +
                        '.btn.btn-header.btn-2.btn-empty.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover:focus,' +
                        'button.btn-newsletter.btn-empty:hover:focus,' +
                        '.button.btn-newsletter.btn-empty:hover:focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover:focus,' +
                        '.btn.btn-newsletter.btn-empty:hover:focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover:focus,' +
                        'button.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.button.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover:focus,' +
                        '.btn.btn-header.btn-2.btn-empty:hover:focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover.focus,' +
                        'button.btn-newsletter.btn-empty:hover.focus,' +
                        '.button.btn-newsletter.btn-empty:hover.focus,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover.focus,' +
                        '.btn.btn-newsletter.btn-empty:hover.focus,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover.focus,' +
                        'button.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.button.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover.focus,' +
                        '.btn.btn-header.btn-2.btn-empty:hover.focus,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover:active,' +
                        'button.btn-newsletter.btn-empty:hover:active,' +
                        '.button.btn-newsletter.btn-empty:hover:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover:active,' +
                        '.btn.btn-newsletter.btn-empty:hover:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover:active,' +
                        'button.btn-header.btn-2.btn-empty:hover:active,' +
                        '.button.btn-header.btn-2.btn-empty:hover:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover:active,' +
                        '.btn.btn-header.btn-2.btn-empty:hover:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:hover.active,' +
                        'input[type="button"].btn-newsletter.btn-empty:hover.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:hover.active,' +
                        'button.btn-newsletter.btn-empty:hover.active,' +
                        '.button.btn-newsletter.btn-empty:hover.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:hover.active,' +
                        '.btn.btn-newsletter.btn-empty:hover.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:hover.active,' +
                        'button.btn-header.btn-2.btn-empty:hover.active,' +
                        '.button.btn-header.btn-2.btn-empty:hover.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:hover.active,' +
                        '.btn.btn-header.btn-2.btn-empty:hover.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus:active,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus:active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus:active,' +
                        'button.btn-newsletter.btn-empty:focus:active,' +
                        '.button.btn-newsletter.btn-empty:focus:active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus:active,' +
                        '.btn.btn-newsletter.btn-empty:focus:active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus:active,' +
                        'button.btn-header.btn-2.btn-empty:focus:active,' +
                        '.button.btn-header.btn-2.btn-empty:focus:active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus:active,' +
                        '.btn.btn-header.btn-2.btn-empty:focus:active,' +
                        'input[type="submit"].btn-newsletter.btn-empty:focus.active,' +
                        'input[type="button"].btn-newsletter.btn-empty:focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty:focus.active,' +
                        'button.btn-newsletter.btn-empty:focus.active,' +
                        '.button.btn-newsletter.btn-empty:focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty:focus.active,' +
                        '.btn.btn-newsletter.btn-empty:focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty:focus.active,' +
                        'button.btn-header.btn-2.btn-empty:focus.active,' +
                        '.button.btn-header.btn-2.btn-empty:focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty:focus.active,' +
                        '.btn.btn-header.btn-2.btn-empty:focus.active,' +
                        'input[type="submit"].btn-newsletter.btn-empty.focus.active,' +
                        'input[type="button"].btn-newsletter.btn-empty.focus.active,' +
                        'input[type="reset"].btn-newsletter.btn-empty.focus.active,' +
                        'button.btn-newsletter.btn-empty.focus.active,' +
                        '.button.btn-newsletter.btn-empty.focus.active,' +
                        '.tempo-btn.btn-newsletter.btn-empty.focus.active,' +
                        '.btn.btn-newsletter.btn-empty.focus.active,' +
                        'input[type="submit"].btn-header.btn-2.btn-empty.focus.active,' +
                        'input[type="button"].btn-header.btn-2.btn-empty.focus.active,' +
                        'input[type="reset"].btn-header.btn-2.btn-empty.focus.active,' +
                        'button.btn-header.btn-2.btn-empty.focus.active,' +
                        '.button.btn-header.btn-2.btn-empty.focus.active,' +
                        '.tempo-btn.btn-header.btn-2.btn-empty.focus.active,' +
                        '.btn.btn-header.btn-2.btn-empty.focus.active,' +
                        'header.tempo-header div.tempo-topper div.tempo-navigation-wrapper div.gardener-menu-wrapper,' +
                        'header.tempo-header div.tempo-header-partial div.tempo-header-btns-wrapper a.tempo-btn.btn-1,' +
                        'header.tempo-header div.tempo-header-partial div.tempo-header-btns-wrapper a.tempo-btn.btn-2:hover,' +
                        'body div.nav-collapse.tempo-navigation-wrapper nav.tempo-navigation ul li.current-menu-item > a,' +
                        'header.tempo-header div.tempo-topper div.tempo-navigation-wrapper div.tempo-menu-wrapper ul.tempo-menu-list > li ul,' +
                        'header.tempo-header div.tempo-header-partial.tempo-portfolio div.tempo-categories.single span.categories-wrapper i,' +
                        'header.tempo-header div.tempo-header-partial.tempo-portfolio div.tempo-categories.single ul li a,' +
                        'header.tempo-header div.tempo-header-partial.tempo-portfolio div.tempo-categories.single ul li a:hover,' +
                        'article.tempo-article.classic div.tempo-author hr.author-delimiter,' +
                        'aside:not(.dark-sidebars) div.widget.widget_search form fieldset button,' +
                        'aside:not(.dark-sidebars) div.widget.zeon_widget_newsletter form fieldset button,' +
                        'aside:not(.dark-sidebars) div.widget.widget_tag_cloud div.tagcloud a:hover,' +
                        'aside:not(.dark-sidebars) div.widget.tempo_widget_post_tags div.tagcloud a:hover,' +
                        'aside.sidebar-content-wrapper div.widget h4.widget-title:before,' +
                        'aside.sidebar-content-wrapper div.widget:hover h4.widget-title:before {' +
                        'background-color: ' + newval + ';' +
                        '}' +

                        'aside:not(.dark-sidebars) div.widget.widget_pages a:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_meta a:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_categories a:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_archive a:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_nav_menu a:before,' +
                        'aside:not(.dark-sidebars) div.widget.zeon_widget_categories a:before,' +
                        'aside:not(.dark-sidebars) div.widget.tempo_widget_categories a:before{' +
                        'background-color: rgba(' + tempo_hex2rgb( newval ) + ', 0 );' +
                        '}' +

                        'aside:not(.dark-sidebars) div.widget.widget_pages a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_meta a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_categories a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_archive a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.widget_nav_menu a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.zeon_widget_categories a:hover:before,' +
                        'aside:not(.dark-sidebars) div.widget.tempo_widget_categories a:hover:before{' +
                        'background-color: rgba(' + tempo_hex2rgb( newval ) + ', 0.5 );' +
                        '}'
                    );
                });
            });
        }

        {   // headline max width

            wp.customize( 'header-headline-max-width', function( value ){
                value.bind(function( newval ){
                    jQuery( 'style#header-headline-max-width' ).html(
                        'header.tempo-header div.tempo-header-partial .tempo-header-headline{' +
                        'max-width:' + parseInt( newval ) + 'px;' +
                        '}'
                    );
                });
            });

        }

        {   ////    BUTTON 1

            // Text
            wp.customize( 'header-btn-1-text', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-1' );

                    if( button.length )
                        button.html( newval );
                });
            });

            // Description
            wp.customize( 'header-btn-1-description', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-1' );

                    if( button.length )
                        button.attr( 'title', newval );
                });
            });

            // Url
            wp.customize( 'header-btn-1-url', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-1' );

                    if( button.length )
                        button.attr( 'href', newval );
                });
            });

            // Target
            wp.customize( 'header-btn-1-target', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-1' );

                    if( !button.length )
                        return;

                    if( newval ){
                        button.attr( 'target', "_blank" );
                    }

                    else{
                        button.removeAttr( 'target' );
                    }
                });
            });
        }

        {   ////    BUTTON 2

            // Text
            wp.customize( 'header-btn-2-text', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-2' );

                    if( button.length )
                        button.html( newval );
                });
            });

            // Description
            wp.customize( 'header-btn-2-description', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-2' );

                    if( button.length )
                        button.attr( 'title', newval );
                });
            });

            // Url
            wp.customize( 'header-btn-2-url', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-2' );

                    if( button.length )
                        button.attr( 'href', newval );
                });
            });

            // Target
            wp.customize( 'header-btn-2-target', function( value ){
                value.bind(function( newval ){
                    var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-btns-wrapper .tempo-btn.btn-2' );

                    if( !button.length )
                        return;

                    if( newval ){
                        button.attr( 'target', "_blank" );
                    }

                    else{
                        button.removeAttr( 'target' );
                    }
                });
            });
        }
    }

})(jQuery);
