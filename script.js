// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    console.log("大会サイトへようこそ！");

    // --- 機能1: エントリーボタンのクリックイベント ---
    const entryButtons = document.querySelectorAll('.btn-main');
    
    entryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 実際のリンク移動を一時止めて確認を出す場合
            const confirmEntry = confirm("エントリーページへ移動します。よろしいですか？");
            if (!confirmEntry) {
                event.preventDefault(); // キャンセルされたら移動しない
            }
        });
    });

    // --- 機能2: スクロールアニメーション（簡易版） ---
    // セクションがふわっと表示されるようにクラスを付与
    const sections = document.querySelectorAll('.info-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
    //--- 機能3: ヘッダーが消えたり出たりするようにしたいな
    let lastScrollY = window.scrollY; // 前回のスクロール位置を保存
    const header = document.querySelector('.header-consist');
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // 下にスクロール 且つ 100px以上動いた場合
            header.classList.add('hide');
        } else {
            // 上にスクロール
            header.classList.remove('hide');
        }

        lastScrollY = currentScrollY; // 現在の位置を保存して次回比較に使う
    });
    
});


