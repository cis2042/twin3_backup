// Twin3.ai Navigation Bar Control
document.addEventListener('DOMContentLoaded', function() {
  // 查找現有導航欄
  const existingNav = document.querySelector('nav') || 
                      document.querySelector('.navbar') || 
                      document.querySelector('.navigation') ||
                      document.querySelector('header');
  
  if (existingNav) {
    // 尋找最後一個導航項"Connect Wallet"前的位置
    const navItems = existingNav.querySelectorAll('a');
    let connectWalletBtn = null;
    
    for (let i = 0; i < navItems.length; i++) {
      if (navItems[i].textContent.trim() === 'Connect Wallet') {
        connectWalletBtn = navItems[i];
        break;
      }
    }
    
    // 創建About下拉菜單
    const aboutDropdown = document.createElement('div');
    aboutDropdown.className = 'nav-dropdown';
    aboutDropdown.innerHTML = `
      <a href="/pages/about/index.html" class="nav-link">ABOUT</a>
      <div class="dropdown-content">
        <a href="/pages/about/news.html" class="dropdown-item">News</a>
        <a href="/pages/about/team.html" class="dropdown-item">Team</a>
        <a href="/pages/about/join-us.html" class="dropdown-item">Join Us</a>
      </div>
    `;
    
    // 樣式調整，使其與現有導航項匹配
    const aboutLink = aboutDropdown.querySelector('.nav-link');
    if (aboutLink) {
      aboutLink.style.color = 'white';
      aboutLink.style.textDecoration = 'none';
      aboutLink.style.margin = '0 20px';
    }
    
    // 插入到適當位置
    if (connectWalletBtn && connectWalletBtn.parentNode) {
      connectWalletBtn.parentNode.insertBefore(aboutDropdown, connectWalletBtn);
    } else {
      // 如果找不到Connect Wallet按鈕，就添加到導航欄末尾
      existingNav.appendChild(aboutDropdown);
    }
    
    // 處理下拉菜單
    aboutDropdown.addEventListener('mouseenter', function() {
      this.querySelector('.dropdown-content').style.display = 'flex';
    });
    
    aboutDropdown.addEventListener('mouseleave', function() {
      this.querySelector('.dropdown-content').style.display = 'none';
    });
    
    // 添加當前頁面高亮
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pages/about/')) {
      aboutLink.classList.add('active');
    }
  } else {
    // 如果找不到現有導航欄，則使用原來的代碼創建新的
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
  }
}); 