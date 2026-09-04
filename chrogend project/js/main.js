// js/main.js
// MathVibe General Client-Side Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Single Button Dark & White Mode Setup
    const themeToggleBtn = document.getElementById('theme-toggle');

    function updateThemeUI(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span>White Mode</span>
                `;
            }
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <span>Dark Mode</span>
                `;
            }
        }
    }

    // Check initial theme state
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateThemeUI(isDarkMode);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeUI(isDark);
            
            // Sync with backend
            const basePath = window.BASE_PATH || '/';
            fetch(basePath + 'student/settings.php?toggle_theme=1')
                .then(r => r.json())
                .catch(e => {});
        });
    }

    // 2. Mobile Navigation Toggle
    const mobileToggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggleBtn && navMenu) {
        mobileToggleBtn.addEventListener('click', () => {
            const isVisible = navMenu.style.display === 'flex';
            navMenu.style.display = isVisible ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '65px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'var(--bg-secondary)';
            navMenu.style.borderBottom = '1px solid var(--border-color)';
            navMenu.style.padding = '1.5rem';
            navMenu.style.gap = '1rem';
        });
    }

    // 3. FAQ Accordion Items
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // 4. Close Toast Notification on Click
    const toasts = document.querySelectorAll('.toast');
    toasts.forEach(toast => {
        toast.addEventListener('click', () => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }
        }, 5000);
    });

    // 5. Skeleton Loader Reveal Handler
    const skeletonPlaceholders = document.querySelectorAll('.skeleton-placeholder');
    if (skeletonPlaceholders.length > 0) {
        setTimeout(() => {
            skeletonPlaceholders.forEach(el => {
                el.style.transition = 'opacity 0.3s ease';
                el.style.opacity = '0';
                setTimeout(() => {
                    el.style.display = 'none';
                    // Reveal the actual content container adjacent to this placeholder
                    const actualContent = el.nextElementSibling;
                    if (actualContent && actualContent.classList.contains('skeleton-content')) {
                        actualContent.style.display = 'block';
                        actualContent.classList.add('fade-in-content');
                    }
                }, 300);
            });
        }, 600); // 600ms delay to allow animations to load smoothly
    }
});

/**
 * Show a dynamic toast notification from JS
 */
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Icon selection
    let icon = '';
    if (type === 'success') icon = '🟢';
    else if (type === 'error') icon = '🔴';
    else if (type === 'warning') icon = '🟡';
    else icon = '🔵';
    
    toast.innerHTML = `<div>${icon}</div><div>${message}</div>`;
    container.appendChild(toast);
    
    toast.addEventListener('click', () => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            toast.remove();
        }, 300);
    });
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }
    }, 5000);
}
