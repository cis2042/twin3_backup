// Twin3.ai Navigation Bar Control
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  if (!root) return;

  // 創建導航欄
  const navbar = document.createElement('nav');
  navbar.className = 'twin3-navbar';
  navbar.innerHTML = `
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="/">
          <img src="https://twin3.ai/assets/img/logo.svg" alt="Twin3" />
        </a>
      </div>
      <div class="navbar-links">
        <a href="/" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="/pages/about/index.html" class="nav-link">About</a>
          <div class="dropdown-content">
            <a href="/pages/about/news.html" class="dropdown-item">News</a>
            <a href="/pages/about/team.html" class="dropdown-item">Team</a>
            <a href="/pages/about/join-us.html" class="dropdown-item">Join Us</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // 在頁面開頭插入導航欄
  root.insertBefore(navbar, root.firstChild);

  // 添加當前頁面高亮
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
    
    // 對於About下拉菜單項
    if (currentPath.includes('/pages/about/') && link.textContent === 'About') {
      link.classList.add('active');
    }
  });

  // 處理下拉菜單
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
      this.querySelector('.dropdown-content').style.display = 'flex';
    });
    
    dropdown.addEventListener('mouseleave', function() {
      this.querySelector('.dropdown-content').style.display = 'none';
    });
  });
}); 