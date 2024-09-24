$(document).ready(function() {
    // ハンバーガーメニューのクリックイベント
    $('.hamburger-menu').click(function() {
        $(this).toggleClass('open');

        var navMenu = $('.nav-menu');
        if (navMenu.hasClass('show')) {
            // メニューを閉じる
            navMenu.fadeOut(300, function() {
                navMenu.removeClass('show');

                // ロゴの切り替え
                var logo = $('#header h1 a img');
                var newSrc = logo.attr('src').indexOf('logo-r.svg') !== -1 ?
                            'img/logo-w.svg' : 'img/logo-r.svg';

                $('<img>').attr('src', newSrc).on('load', function() {
                    logo.attr('src', newSrc);
                });
            });
        } else {
            // メニューを開く
            navMenu.addClass('show').fadeIn(300, function() {
                // ロゴの切り替え
                var logo = $('#header h1 a img');
                var newSrc = logo.attr('src').indexOf('logo-r.svg') !== -1 ?
                            'img/logo-w.svg' : 'img/logo-r.svg';

                $('<img>').attr('src', newSrc).on('load', function() {
                    logo.attr('src', newSrc);
                });
            });
        }
    });

    // 「無料体験に申し込む」リンクをクリックしたときの動作
    $('.nav-menu a[href="#header"]').click(function() {
        var target = $($(this).attr('#header')); // リンク先の要素を取得

        // ロゴの切り替え
        var logo = $('#header h1 a img');
        var newSrc = logo.attr('src').indexOf('logo-r.svg') !== -1 ?
                    'img/logo-w.svg' : 'img/logo-r.svg';

        $('<img>').attr('src', newSrc).on('load', function() {
            logo.attr('src', newSrc);
        });

        // ハンバーガーメニューを閉じる
        $('.hamburger-menu').removeClass('open');
        $('.nav-menu').fadeOut(500, function() {
            $('.nav-menu').removeClass('show');
        });

        // スムーズにスクロール
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top // ターゲットの位置までスクロール
            }, 1000); // 1秒でスクロール
        }
    });
});
