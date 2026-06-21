/* ブラウザのデフォルトのスクロール復元機能を手動に変更 */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

/* スクロールをX軸0、Y軸0（一番上）に移動 */
window.scrollTo(0, 0);

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
    const header = document.querySelector('.header-css');
    window.addEventListener('scroll', () => {
        if (!header) return;
        
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
    
    // これを見つけたらランデブーにメッセージをしてください　：D
    (function() {
        let k = "";
        let cnt = 0;
        let pcOk = false;
        let tmr = null;

        const t = atob("d2UgYXJlIGdhbWVycw==");
        const a = document.getElementById("adv-1");
        const f = document.getElementById("ft-logo");

        const n = atob("QVBVIEdhbWVycyBsb2dvLnBuZw==");
        const o = atob("QVBVIGVzcG9ydHMgbG9nby5wbmc=");

        if (!a || !f) return;

        function ex(s, d) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            const sound = new Audio("sound.mp3"); 
            sound.play().catch(e => console.log("Audio failed:", e));
            
                setTimeout(() => {
                    f.src = s;
                }, 1000);
                
                setTimeout(() => {
                    f.classList.remove("logo-pop");
                }, 2000);
                
                setTimeout(() => {
                    f.classList.add("logo-pop");
                    
                    setTimeout(() => {
                        f.src = o;
                        a.style.cursor = "default";
                    }, 1000);
                    
                    setTimeout(() => {
                        f.classList.remove("logo-pop");
                    }, 2000);
                }, d);

            );
        }

        function resetState() {
            cnt = 0;
            pcOk = false;
            clearTimeout(tmr);
        }

        document.addEventListener("keydown", function(e) {
            k += e.key;
            if (k.length > t.length) {
                k = k.slice(-t.length);
            }
            if (k === t) {
                pcOk = true;
                a.style.cursor = "pointer";
                cnt = 0;
            }
        });

        a.addEventListener("click", function() {
            if (pcOk) {
                ex(n, 10000);
                resetState();
                return;
            }

            cnt++;
            clearTimeout(tmr);

            if (cnt >= 10) {
                ex(n, 5000);
                resetState();
            } else {
                tmr = setTimeout(() => {
                    cnt = 0;
                }, 1000);
            }
            });
    })();
});
