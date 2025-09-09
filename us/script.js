// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏移动端菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    }

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // 关闭移动端菜单
                if (navLinks && navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });

    // 元素淡入动画
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeInObserver.observe(element);
    });

    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());

            // 在实际应用中，这里会发送表单数据到服务器
            console.log('表单提交数据:', formValues);

            // 显示成功提示
            const formSuccess = document.querySelector('.form-success');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                formSuccess.style.opacity = '0';
                formSuccess.style.transition = 'opacity 0.5s ease';

                setTimeout(() => {
                    formSuccess.style.opacity = '1';
                }, 10);

                // 5秒后隐藏提示
                setTimeout(() => {
                    formSuccess.style.opacity = '0';
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 500);
                }, 5000);
            }

            // 重置表单
            this.reset();
        });
    }

    // 页面滚动时导航栏样式变化
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 107, 107, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = '#ff6b6b';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // 初始化时触发一次滚动事件，确保导航栏样式正确
    window.dispatchEvent(new Event('scroll'));
});

// 添加汉堡菜单动画
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'none';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
}

// 这里替换联盟链接
// 链接配置验证（第3-6行）
const OFFER_LINKS = {
    US: 'https://savebig.pro/a/W6w6ls5KR7sKP9B',  // 美国链接
    NO: 'https://savebig.pro/a/Z6w6os7OWiK3L9'   // 挪威链接
};

// 增强功能：浏览器地理定位（添加在handleCTA函数前）
if(navigator.geolocation && !localStorage.getItem('geo')) {
    navigator.geolocation.getCurrentPosition(pos => {
        const isNorway = (pos.coords.latitude > 57.5 && 
                         pos.coords.latitude < 71.1 &&
                         pos.coords.longitude > 4.0 &&
                         pos.coords.longitude < 31.1);
        currentGeo = isNorway ? 'NO' : 'US';
    });
}

// 初始化参数
let currentGeo = 'US';
let variant = new URLSearchParams(window.location.search).get('variant') || 'A';

// GEO切换逻辑
document.querySelectorAll('.geo-switcher button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentGeo = btn.dataset.geo;
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.style.display = el.dataset.lang === currentGeo ? 'block' : 'none';
        });
    });
});

// 处理CTA点击
function handleCTA() {
    const params = new URLSearchParams({
        utm_source: 'telegram',
        utm_medium: 'social',
        utm_campaign: 'dating2024',
        subid: Date.now(),
        country: currentGeo,
        variant: variant
    });
    
    window.location.href = `${OFFER_LINKS[currentGeo]}?${params.toString()}`;
}

// Cookie处理
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    loadAnalytics();
}

function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
}

function loadAnalytics() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        // 加载分析脚本
    }
}