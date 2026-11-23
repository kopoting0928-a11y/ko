// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // 捲動時讓紙感導覽列增加柔和陰影
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 18px rgba(64, 48, 31, 0.09)';
            navbar.style.background = 'rgba(245, 241, 232, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(245, 241, 232, 0.94)';
        }
    });

    console.log('ようこそ — Welcome to my portfolio.');
});
