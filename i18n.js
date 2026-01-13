// ===================================
// i18n - Internationalization Module
// ===================================

const translations = {
    'zh-CN': {
        // Meta tags
        'meta.title': 'MD5在线生成器 - 免费MD5加密工具 | 文本和文件MD5计算',
        'meta.description': '免费在线MD5生成器，支持文本和文件MD5哈希计算。快速、安全、无需注册。提供MD5加密、校验和验证功能。',
        
        // Header
        'header.title': 'MD5 生成器',
        
        // Hero section
        'hero.title': '在线MD5哈希生成器',
        'hero.subtitle': '快速、安全、免费的MD5加密工具',
        
        // Input
        'input.textLabel': '输入文本',
        'input.textPlaceholder': '在此输入要生成MD5哈希的文本...',
        'input.fileLabel': '或上传文件',
        'input.dragDrop': '拖拽文件到此处或点击上传',
        'input.fileInfo': '支持任意文件类型，最大100MB',
        
        // Buttons
        'button.generate': '生成MD5',
        'button.copy': '复制',
        
        // Output
        'output.label': 'MD5 哈希输出',
        'output.length': '长度:',
        'output.characters': '字符',
        
        // Features
        'features.fast.title': '快速生成',
        'features.fast.desc': '瞬间完成MD5哈希计算',
        'features.secure.title': '安全可靠',
        'features.secure.desc': '本地计算，数据不上传',
        'features.api.title': 'API访问',
        'features.api.desc': '支持批量处理和集成',
        
        // About
        'about.title': '关于MD5',
        'about.desc1': 'MD5（Message-Digest Algorithm 5）是一个广泛使用的密码散列函数，可以产生128位（16字节）的哈希值。',
        'about.desc2': 'MD5常用于验证数据完整性、数字签名和密码存储。然而，由于安全性问题，不建议用于加密敏感密码。',
        
        // FAQ
        'faq.title': '常见问题',
        'faq.q1.question': 'MD5是可逆的吗？',
        'faq.q1.answer': '不，MD5是单向哈希函数，理论上不可逆。但由于彩虹表等技术，简单的MD5哈希可能被破解。',
        'faq.q2.question': '如何验证文件完整性？',
        'faq.q2.answer': '下载文件后，使用本工具生成MD5值，与官方提供的MD5值对比。如果一致，说明文件未被篡改。',
        'faq.q3.question': 'MD5安全吗？',
        'faq.q3.answer': 'MD5已被证明存在碰撞漏洞，不建议用于密码加密。对于安全要求高的场景，建议使用SHA-256等更安全的算法。',
        
        // Footer
        'footer.rights': '保留所有权利'
    },
    
    'en': {
        // Meta tags
        'meta.title': 'MD5 Generator Online - Free MD5 Hash Tool | Text & File MD5',
        'meta.description': 'Free online MD5 generator. Generate MD5 hash for text and files. Fast, secure, and no registration required.',
        
        // Header
        'header.title': 'MD5 Generator',
        
        // Hero section
        'hero.title': 'Online MD5 Hash Generator',
        'hero.subtitle': 'Fast, Secure, and Free MD5 Encryption Tool',
        
        // Input
        'input.textLabel': 'Enter Text',
        'input.textPlaceholder': 'Type or paste text to generate MD5 hash...',
        'input.fileLabel': 'Or Upload File',
        'input.dragDrop': 'Drag & drop file here or click to upload',
        'input.fileInfo': 'Supports any file type, max 100MB',
        
        // Buttons
        'button.generate': 'Generate MD5',
        'button.copy': 'Copy',
        
        // Output
        'output.label': 'MD5 Hash Output',
        'output.length': 'Length:',
        'output.characters': 'characters',
        
        // Features
        'features.fast.title': 'Fast Generation',
        'features.fast.desc': 'Instant MD5 hash calculation',
        'features.secure.title': 'Secure & Private',
        'features.secure.desc': 'Local processing, no data upload',
        'features.api.title': 'API Access',
        'features.api.desc': 'Batch processing and integration',
        
        // About
        'about.title': 'About MD5',
        'about.desc1': 'MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value.',
        'about.desc2': 'MD5 is commonly used for data integrity verification, digital signatures, and password storage. However, due to security vulnerabilities, it is not recommended for encrypting sensitive passwords.',
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.q1.question': 'Is MD5 reversible?',
        'faq.q1.answer': 'No, MD5 is a one-way hash function and theoretically irreversible. However, simple MD5 hashes can be cracked using rainbow tables and other techniques.',
        'faq.q2.question': 'How to verify file integrity?',
        'faq.q2.answer': 'After downloading a file, generate its MD5 hash using this tool and compare it with the official MD5 value. If they match, the file has not been tampered with.',
        'faq.q3.question': 'Is MD5 secure?',
        'faq.q3.answer': 'MD5 has known collision vulnerabilities and is not recommended for password encryption. For high-security scenarios, use more secure algorithms like SHA-256.',
        
        // Footer
        'footer.rights': 'All rights reserved'
    },
    
    'ja': {
        // Meta tags
        'meta.title': 'MD5ジェネレーター オンライン - 無料MD5ハッシュツール | テキストとファイルMD5',
        'meta.description': '無料のオンラインMD5ジェネレーター。テキストとファイルのMD5ハッシュを生成します。高速、安全、登録不要。',
        
        // Header
        'header.title': 'MD5 ジェネレーター',
        
        // Hero section
        'hero.title': 'オンラインMD5ハッシュジェネレーター',
        'hero.subtitle': '高速、安全、無料のMD5暗号化ツール',
        
        // Input
        'input.textLabel': 'テキストを入力',
        'input.textPlaceholder': 'MD5ハッシュを生成するテキストを入力してください...',
        'input.fileLabel': 'またはファイルをアップロード',
        'input.dragDrop': 'ファイルをドラッグ＆ドロップまたはクリックしてアップロード',
        'input.fileInfo': 'すべてのファイルタイプをサポート、最大100MB',
        
        // Buttons
        'button.generate': 'MD5を生成',
        'button.copy': 'コピー',
        
        // Output
        'output.label': 'MD5ハッシュ出力',
        'output.length': '長さ：',
        'output.characters': '文字',
        
        // Features
        'features.fast.title': '高速生成',
        'features.fast.desc': '瞬時にMD5ハッシュを計算',
        'features.secure.title': '安全でプライベート',
        'features.secure.desc': 'ローカル処理、データはアップロードされません',
        'features.api.title': 'APIアクセス',
        'features.api.desc': 'バッチ処理と統合をサポート',
        
        // About
        'about.title': 'MD5について',
        'about.desc1': 'MD5（Message-Digest Algorithm 5）は、128ビット（16バイト）のハッシュ値を生成する広く使用されている暗号学的ハッシュ関数です。',
        'about.desc2': 'MD5は、データの整合性検証、デジタル署名、パスワード保存などに一般的に使用されます。ただし、セキュリティ上の脆弱性があるため、機密性の高いパスワードの暗号化には推奨されません。',
        
        // FAQ
        'faq.title': 'よくある質問',
        'faq.q1.question': 'MD5は可逆的ですか？',
        'faq.q1.answer': 'いいえ、MD5は一方向ハッシュ関数であり、理論的には不可逆です。ただし、レインボーテーブルなどの技術を使用して、単純なMD5ハッシュは解読される可能性があります。',
        'faq.q2.question': 'ファイルの整合性を確認するには？',
        'faq.q2.answer': 'ファイルをダウンロードした後、このツールを使用してMD5ハッシュを生成し、公式に提供されているMD5値と比較します。一致すれば、ファイルは改ざんされていません。',
        'faq.q3.question': 'MD5は安全ですか？',
        'faq.q3.answer': 'MD5には既知の衝突脆弱性があり、パスワード暗号化には推奨されません。高セキュリティが必要なシナリオでは、SHA-256などのより安全なアルゴリズムを使用してください。',
        
        // Footer
        'footer.rights': 'すべての権利を保有'
    }
};

// Current language
let currentLanguage = 'zh-CN';

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check if we have exact match
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Check for language prefix (e.g., 'en-US' -> 'en')
    const langPrefix = browserLang.split('-')[0];
    if (translations[langPrefix]) {
        return langPrefix;
    }
    
    // Default to Chinese
    return 'zh-CN';
}

// Get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Update page content
function updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // For input elements, update placeholder
            element.placeholder = translation;
        } else if (element.tagName === 'META') {
            // For meta tags, update content
            element.setAttribute('content', translation);
        } else if (element.tagName === 'TITLE') {
            // For title tag
            element.textContent = translation;
        } else {
            // For regular elements
            element.textContent = translation;
        }
    });
    
    // Update placeholders separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        updatePageContent();
        
        // Track language change in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_change', {
                'new_language': lang
            });
        }
    }
}

// Initialize i18n
function initI18n() {
    // Check for saved preference
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = detectBrowserLanguage();
        localStorage.setItem('preferredLanguage', currentLanguage);
    }
    
    // Update page content
    updatePageContent();
    
    // Set language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, changeLanguage, initI18n };
}
