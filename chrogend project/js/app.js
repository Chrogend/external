// js/app.js - Shared UI Logic, Component Rendering & KaTeX Integration

const App = {
  init() {
    this.setupTheme();
    this.injectGlobalBackground();
    this.renderHeader();
    this.renderSidebar();
    this.renderFooter();
  },

  // Helper to determine relative root path ('./' or '../')
  getRelativePrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/student/') || path.includes('/admin/')) {
      return '../';
    }
    return './';
  },

  // Dark/Light Mode Theme Setup
  setupTheme() {
    const savedTheme = localStorage.getItem(Store.KEYS.THEME) || 'dark';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  },

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(Store.KEYS.THEME, isDark ? 'dark' : 'light');
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = isDark ? '☀️' : '🌙';
    }
  },

  // Inject Animated Moving Background & Floating Math Symbols
  injectGlobalBackground() {
    if (document.querySelector('.global-bg-shapes')) return;
    const bgContainer = document.createElement('div');
    bgContainer.className = 'global-bg-shapes';
    bgContainer.innerHTML = `
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="floating-math math-1">∫</div>
      <div class="floating-math math-2">∑</div>
      <div class="floating-math math-3">∇</div>
      <div class="floating-math math-4">π</div>
      <div class="floating-math math-5">∞</div>
      <div class="floating-math math-6">∂</div>
      <div class="floating-math math-7">√</div>
      <div class="floating-math math-8">θ</div>
    `;
    document.body.prepend(bgContainer);
  },

  // Toast Notifications
  showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
      padding: 12px 20px;
      border-radius: 8px;
      color: #fff;
      font-weight: 600;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    `;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Simple Markdown & KaTeX Parsing helper
  renderMarkdown(text) {
    if (!text) return '';

    let html = text
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/#### (.*)/g, '<h4>$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/- \[ \] (.*)/g, '<li style="list-style: none;">🔲 $1</li>')
      .replace(/- \[x\] (.*)/g, '<li style="list-style: none;">✅ $1</li>')
      .replace(/^- (.*)/gm, '<li>$1</li>')
      .replace(/\n\n/g, '<br><br>');

    return html;
  },

  // Trigger KaTeX auto-render on container
  renderMath(containerId = null) {
    if (typeof renderMathInElement === 'function') {
      const target = containerId ? document.getElementById(containerId) : document.body;
      if (target) {
        renderMathInElement(target, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
  },

  renderHeader() {
    const headerEl = document.getElementById('app-header');
    if (!headerEl) return;

    const user = Store.getUser();
    const isDark = document.body.classList.contains('dark-mode');
    const path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    const prefix = this.getRelativePrefix();
    const isInsideSubfolder = prefix === '../';

    const homeUrl = isInsideSubfolder ? '../index.html' : 'index.html';
    const topicsUrl = path.includes('/student/') ? 'lessons.html' : (isInsideSubfolder ? '../student/lessons.html' : 'student/lessons.html');
    const aboutUrl = isInsideSubfolder ? '../about.html' : 'about.html';
    const contactUrl = isInsideSubfolder ? '../contact.html' : 'contact.html';
    const signInUrl = isInsideSubfolder ? (path.includes('/student/') ? 'login.html' : '../student/login.html') : 'student/login.html';
    const registerUrl = isInsideSubfolder ? (path.includes('/student/') ? 'register.html' : '../student/register.html') : 'student/register.html';
    const adminUrl = isInsideSubfolder ? (path.includes('/admin/') ? 'login.html' : '../admin/login.html') : 'admin/login.html';

    headerEl.innerHTML = `
      <header class="navbar" style="border-bottom: 1px solid var(--border-color); background: var(--bg-secondary); padding: 1rem 2rem;">
        <div class="nav-container" style="display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; width: 100%;">
          
          <!-- Logo -->
          <a href="${homeUrl}" class="logo" style="display: flex; align-items: center; gap: 0.6rem; font-size: 1.4rem; font-weight: 800; color: var(--primary); text-decoration: none;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            MathVibe
          </a>

          <!-- Main Nav Links -->
          <nav class="nav-menu" style="display: flex; gap: 1.8rem; align-items: center; list-style: none;">
            <a href="${homeUrl}" class="nav-link ${path.endsWith('index.html') || path.endsWith('/') ? 'active' : ''}" style="font-weight: 600;">Home</a>
            <a href="${topicsUrl}" class="nav-link ${path.includes('lessons') ? 'active' : ''}" style="font-weight: 600;">20 Topics</a>
            <a href="${aboutUrl}" class="nav-link ${path.includes('about') ? 'active' : ''}" style="font-weight: 600;">About</a>
            <a href="${contactUrl}" class="nav-link ${path.includes('contact') ? 'active' : ''}" style="font-weight: 600;">Contact</a>
            <a href="${adminUrl}" class="nav-link ${path.includes('/admin/') ? 'active' : ''}" style="font-weight: 600; color: var(--text-secondary);">Admin</a>
          </nav>

          <!-- User & Theme Actions -->
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button id="theme-toggle-btn" onclick="App.toggleTheme()" style="background: transparent; border: 1px solid var(--border-color); color: var(--text-primary); padding: 0.5rem 0.8rem; border-radius: 8px; cursor: pointer;">
              ${isDark ? '☀️' : '🌙'}
            </button>

            ${user ? `
              <div style="display: flex; align-items: center; gap: 0.8rem;">
                <span class="user-avatar" style="background: var(--primary); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">
                  ${user.name.charAt(0)}
                </span>
                <a href="${path.includes('/student/') ? 'dashboard.html' : (isInsideSubfolder ? '../student/dashboard.html' : 'student/dashboard.html')}" style="font-weight: 600; font-size: 0.95rem; text-decoration: none; color: inherit;">
                  ${user.name}
                </a>
                <a href="${signInUrl}" onclick="Store.logout()" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">Logout</a>
              </div>
            ` : `
              <a href="${signInUrl}" class="btn btn-outline">Sign In</a>
              <a href="${registerUrl}" class="btn btn-primary">Register</a>
            `}
          </div>
        </div>
      </header>
    `;
  },

  renderSidebar() {
    const sidebarEl = document.getElementById('app-sidebar');
    if (!sidebarEl) return;

    const path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    const isStudent = path.includes('/student/') || path.endsWith('/dashboard.html') || path.endsWith('/lessons.html') || path.endsWith('/quizzes.html') || path.endsWith('/progress.html') || path.endsWith('/achievements.html') || path.endsWith('/profile.html');
    const isAdmin = path.includes('/admin/');

    if (isStudent && !isAdmin) {
      sidebarEl.innerHTML = `
        <aside class="sidebar">
          <ul class="sidebar-menu">
            <li><a href="dashboard.html" class="sidebar-link ${path.includes('dashboard') ? 'active' : ''}">📊 Dashboard</a></li>
            <li><a href="lessons.html" class="sidebar-link ${path.includes('lessons') ? 'active' : ''}">📚 20 Core Lessons</a></li>
            <li><a href="quizzes.html" class="sidebar-link ${path.includes('quizzes') ? 'active' : ''}">📝 Checkpoint Quizzes</a></li>
            <li><a href="progress.html" class="sidebar-link ${path.includes('progress') ? 'active' : ''}">📈 Progress Report</a></li>
            <li><a href="achievements.html" class="sidebar-link ${path.includes('achievements') ? 'active' : ''}">🏆 Badges & Streak</a></li>
            <li><a href="profile.html" class="sidebar-link ${path.includes('profile') ? 'active' : ''}">👤 Account Profile</a></li>
          </ul>
        </aside>
      `;
    } else if (isAdmin) {
      sidebarEl.innerHTML = `
        <aside class="sidebar">
          <ul class="sidebar-menu">
            <li><a href="dashboard.html" class="sidebar-link ${path.includes('dashboard') ? 'active' : ''}">⚙️ Admin Dashboard</a></li>
            <li><a href="topics.html" class="sidebar-link ${path.includes('topics') ? 'active' : ''}">🗂️ Manage Topics</a></li>
            <li><a href="lessons.html" class="sidebar-link ${path.includes('lessons') ? 'active' : ''}">📖 Manage Lessons</a></li>
            <li><a href="quizzes.html" class="sidebar-link ${path.includes('quizzes') ? 'active' : ''}">❓ Manage Quizzes</a></li>
            <li><a href="students.html" class="sidebar-link ${path.includes('students') ? 'active' : ''}">👥 Student Records</a></li>
            <li style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;"><a href="../index.html" class="sidebar-link" style="color: var(--primary);">← Student Portal</a></li>
          </ul>
        </aside>
      `;
    }
  },

  renderFooter() {
    const footerEl = document.getElementById('app-footer');
    if (!footerEl) return;

    const path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    const prefix = this.getRelativePrefix();
    const isInsideSubfolder = prefix === '../';

    const homeUrl = isInsideSubfolder ? '../index.html' : 'index.html';
    const topicsUrl = path.includes('/student/') ? 'lessons.html' : (isInsideSubfolder ? '../student/lessons.html' : 'student/lessons.html');
    const aboutUrl = isInsideSubfolder ? '../about.html' : 'about.html';
    const contactUrl = isInsideSubfolder ? '../contact.html' : 'contact.html';
    const signInUrl = isInsideSubfolder ? (path.includes('/student/') ? 'login.html' : '../student/login.html') : 'student/login.html';
    const registerUrl = isInsideSubfolder ? (path.includes('/student/') ? 'register.html' : '../student/register.html') : 'student/register.html';
    const adminUrl = isInsideSubfolder ? (path.includes('/admin/') ? 'login.html' : '../admin/login.html') : 'admin/login.html';

    footerEl.innerHTML = `
      <footer style="margin-top: auto; background: var(--bg-secondary); border-top: 1px solid var(--border-color); padding: 3rem 2rem 2rem 2rem;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2.5rem; margin-bottom: 2rem;">
          
          <!-- Column 1: Brand -->
          <div>
            <h3 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 800;">MathVibe</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">
              An online assessment & learning system focusing on 20 core mathematics topics with 10-page lecture notes and quizzes.
            </p>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; color: var(--text-primary);">Navigation</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem;">
              <li><a href="${homeUrl}" style="color: var(--text-secondary); text-decoration: none;">Home</a></li>
              <li><a href="${topicsUrl}" style="color: var(--text-secondary); text-decoration: none;">20 Core Topics</a></li>
              <li><a href="${aboutUrl}" style="color: var(--text-secondary); text-decoration: none;">About System</a></li>
              <li><a href="${contactUrl}" style="color: var(--text-secondary); text-decoration: none;">Contact & Support</a></li>
            </ul>
          </div>

          <!-- Column 3: Student Portal -->
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; color: var(--text-primary);">Student Portal</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem;">
              <li><a href="${signInUrl}" style="color: var(--text-secondary); text-decoration: none;">Student Sign In</a></li>
              <li><a href="${registerUrl}" style="color: var(--text-secondary); text-decoration: none;">Create Account</a></li>
              <li><a href="${path.includes('/student/') ? 'dashboard.html' : (isInsideSubfolder ? '../student/dashboard.html' : 'student/dashboard.html')}" style="color: var(--text-secondary); text-decoration: none;">Student Dashboard</a></li>
            </ul>
          </div>

          <!-- Column 4: Instructor / Admin -->
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; color: var(--text-primary);">Admin Access</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem;">
              <li><a href="${adminUrl}" style="color: var(--text-secondary); text-decoration: none;">Instructor Login</a></li>
              <li><a href="${path.includes('/admin/') ? 'dashboard.html' : (isInsideSubfolder ? '../admin/dashboard.html' : 'admin/dashboard.html')}" style="color: var(--text-secondary); text-decoration: none;">System Admin Panel</a></li>
            </ul>
          </div>

        </div>

        <div style="max-width: 1200px; margin: 0 auto; border-top: 1px solid var(--border-color); padding-top: 1.5rem; text-align: center; color: var(--text-secondary); font-size: 0.85rem;">
          <p>&copy; 2026 MathVibe — Online Mathematics Learning & Assessment System.</p>
        </div>
      </footer>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
