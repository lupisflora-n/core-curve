// ==========================================
// 【管理用】設定項目（ここを書き換えるだけで反映されます）
// ==========================================
const MONITOR_COUNT = "5"; // 残り人数の数字部分

document.addEventListener('DOMContentLoaded', function () {
    // 残り人数の反映
    const countDisplay = document.getElementById('monitor-count-display');
    if (countDisplay) countDisplay.textContent = MONITOR_COUNT;

    const fadeEls = document.querySelectorAll('.scroll-fade, .hope-shine');
    const glowEls = document.querySelectorAll('.glow-reveal');

    // 即座に表示状態を確認する関数
    const checkVisibilityOnLoad = () => {
        const viewportBottom = window.scrollY + window.innerHeight;

        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            // すでに画面内にある、または通り過ぎている場合は即表示
            if (elementTop < viewportBottom) {
                el.classList.add('is-visible');
            }
        });

        glowEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (elementTop < viewportBottom) {
                el.classList.add('is-glowing');
            }
        });
    };

    // 初回チェック
    checkVisibilityOnLoad();

    // 更新時（すでにスクロールされている場合）はロックを即座に解除
    if (window.scrollY > 50) {
        document.body.classList.remove('is-locked');
        // スクロールヒントも不要なので即非表示
        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) scrollHint.style.display = 'none';
    } else {
        // 通常（トップから開始）の場合は6秒後に解除
        setTimeout(() => {
            document.body.classList.remove('is-locked');
        }, 6000);
    }

    // 通常のスクロール監視（rootMarginを少し甘くして、スクロール時の体験をスムーズに）
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

    fadeEls.forEach(el => {
        if (!el.classList.contains('is-visible')) {
            observer.observe(el);
        }
    });

    const glowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-glowing');
                glowObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });

    glowEls.forEach(el => {
        if (!el.classList.contains('is-glowing')) {
            glowObserver.observe(el);
        }
    });

    // スクロールエフェクトが見えなくなるまでスクロールしたら完全に消去する（再表示しない）
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        const hideHintObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && window.scrollY > 100) {
                    // 完全に画面外に出たらディスレイをnoneにして再配置させない
                    scrollHint.style.display = 'none';
                    hideHintObserver.disconnect();
                }
            });
        }, { threshold: 0 }); // 要素が見えなくなった瞬間に発火

        // ロック解除後に監視開始（最初に非表示判定されるのを防ぐ）
        setTimeout(() => {
            hideHintObserver.observe(scrollHint);
        }, 6500);
    }
});
