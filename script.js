// ===================================
// MD5 Generator - Main Script
// ===================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n
    initI18n();

    // Initialize theme
    initTheme();

    // Initialize MD5 generator
    initMD5Generator();

    // Initialize file upload
    initFileUpload();

    // Google Analytics tracking
    trackPageView();
});

// ===================================
// Theme Management
// ===================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Track theme change
        if (typeof gtag !== 'undefined') {
            gtag('event', 'theme_change', {
                'new_theme': newTheme
            });
        }
    });
}

// ===================================
// MD5 Generator
// ===================================
function initMD5Generator() {
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    const md5Output = document.getElementById('md5Output');
    const outputSection = document.getElementById('outputSection');
    const copyBtn = document.getElementById('copyBtn');
    const hashLength = document.getElementById('hashLength');

    // Generate MD5 from text
    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        const fileInput = document.getElementById('fileInput');

        if (!text && !fileInput.files.length) {
            alert(currentLanguage === 'zh-CN' ? '请输入文本或上传文件' :
                currentLanguage === 'ja' ? 'テキストを入力するかファイルをアップロードしてください' :
                    'Please enter text or upload a file');
            return;
        }

        if (text) {
            // Generate MD5 from text
            const hash = CryptoJS.MD5(text).toString();
            displayHash(hash);

            // Track event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_md5', {
                    'type': 'text',
                    'text_length': text.length
                });
            }
        }
    });

    // Keyboard shortcut: Ctrl+Enter to generate
    textInput.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            generateBtn.click();
        }
    });

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
        const hash = md5Output.textContent;

        navigator.clipboard.writeText(hash).then(() => {
            // Visual feedback
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✓';
            copyBtn.style.background = '#10b981';
            copyBtn.style.color = 'white';

            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 1500);

            // Track event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'copy_hash', {
                    'hash_length': hash.length
                });
            }
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard');
        });
    });

    // Display hash
    function displayHash(hash) {
        md5Output.textContent = hash;
        hashLength.textContent = hash.length;
        outputSection.classList.add('show');
    }
}

// ===================================
// File Upload & MD5 from File
// ===================================
function initFileUpload() {
    const fileDropZone = document.getElementById('fileDropZone');
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const generateBtn = document.getElementById('generateBtn');

    // Click to upload
    fileDropZone.addEventListener('click', () => {
        fileInput.click();
    });

    // File selected
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Drag and drop
    fileDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileDropZone.classList.add('drag-over');
    });

    fileDropZone.addEventListener('dragleave', () => {
        fileDropZone.classList.remove('drag-over');
    });

    fileDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        fileDropZone.classList.remove('drag-over');

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Handle file
    function handleFile(file) {
        // Check file size (100MB limit)
        const maxSize = 100 * 1024 * 1024;
        if (file.size > maxSize) {
            alert(currentLanguage === 'zh-CN' ? '文件大小超过100MB限制' :
                currentLanguage === 'ja' ? 'ファイルサイズが100MBを超えています' :
                    'File size exceeds 100MB limit');
            return;
        }

        // Display file name
        fileName.textContent = `📎 ${file.name} (${formatFileSize(file.size)})`;

        // Clear text input
        document.getElementById('textInput').value = '';

        // Generate MD5 from file
        generateMD5FromFile(file);
    }

    // Generate MD5 from file
    function generateMD5FromFile(file) {
        const reader = new FileReader();

        // Show loading state
        generateBtn.classList.add('loading');
        generateBtn.disabled = true;

        reader.onload = function (e) {
            const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
            const hash = CryptoJS.MD5(wordArray).toString();

            // Display hash
            const md5Output = document.getElementById('md5Output');
            const hashLength = document.getElementById('hashLength');
            const outputSection = document.getElementById('outputSection');

            md5Output.textContent = hash;
            hashLength.textContent = hash.length;
            outputSection.classList.add('show');

            // Remove loading state
            generateBtn.classList.remove('loading');
            generateBtn.disabled = false;

            // Track event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_md5', {
                    'type': 'file',
                    'file_size': file.size,
                    'file_type': file.type
                });
            }
        };

        reader.onerror = function () {
            alert('Error reading file');
            generateBtn.classList.remove('loading');
            generateBtn.disabled = false;
        };

        reader.readAsArrayBuffer(file);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
}

// ===================================
// Google Analytics Tracking
// ===================================
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href,
            'page_path': window.location.pathname
        });
    }
}

// Track button clicks
function trackEvent(eventName, params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
    }
}

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
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
