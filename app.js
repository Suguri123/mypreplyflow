/* ==========================================================================
   MY PREPLY FLOW - APP LOGIC (JAVASCRIPT)
   ========================================================================== */

// --- Constants & Data ---
const DEFAULT_WORDS = [
    {
        id: "mock-1",
        word: "cognitive",
        meaning: "인지적인, 인식의",
        example: "Sleep deprivation can severely affect your cognitive functions.",
        translation: "수면 부족은 인지 기능에 심각한 영향을 미칠 수 있다.",
        context: "Tutor James와 뉴스 토론 중",
        pronunciation: "[카-그너-티브] o에 강세",
        phonetic: "/ˈkɑːɡ.nə.tɪv/",
        tags: ["Academic", "Business"],
        status: "needs_review",
        dateAdded: new Date().toISOString().split('T')[0]
    },
    {
        id: "mock-2",
        word: "pull strings",
        meaning: "배후에서 조종하다, 연줄을 이용하다",
        example: "He had to pull strings to get the promotion.",
        translation: "그는 승진하기 위해 배후의 영향력(연줄)을 이용해야 했다.",
        context: "일상 회화 관용구 공부",
        pronunciation: "strings 복수형 유의",
        phonetic: "/pʊl strɪŋz/",
        tags: ["Idiom", "Casual"],
        status: "needs_review",
        dateAdded: new Date().toISOString().split('T')[0]
    },
    {
        id: "mock-3",
        word: "resilience",
        meaning: "회복 탄력성, 복원력",
        example: "She showed great resilience in overcoming adversity.",
        translation: "그녀는 역경을 극복하는 데 엄청난 회복 탄력성을 보여주었다.",
        context: "비즈니스 리더십 아티클 읽기",
        pronunciation: "[리-질-리언스]",
        phonetic: "/rɪˈzɪl.jəns/",
        tags: ["Business", "Academic"],
        status: "mastered",
        dateAdded: new Date().toISOString().split('T')[0]
    }
];

const DAILY_NEWS_DATA = [
    {
        id: "news-1",
        title: "The Evolution of Language in the AI Era",
        category: "Technology",
        date: "2026-07-15",
        sourceUrl: "https://learningenglish.voanews.com/a/ai-tools-language-learning/7249156.html",
        sentences: [
            {
                en: "Artificial intelligence is changing how we communicate, prompting us to adapt our {cognitive} habits.",
                ko: "인공지능은 우리가 의사소통하는 방식을 변화시키고 있으며, 우리의 인지적인 습관을 조정하도록 촉구합니다.",
                vocab: {
                    word: "cognitive",
                    meaning: "인지적인, 인식의",
                    phonetic: "/ˈkɑːɡ.nə.tɪv/",
                    context: "July 15 News: AI Era"
                }
            },
            {
                en: "Many learners use AI tools to {retrieve} grammar rules and vocabulary instantly.",
                ko: "많은 학습자들이 문법 규칙과 어휘를 즉각적으로 검색(회수)하기 위해 AI 도구를 활용합니다.",
                vocab: {
                    word: "retrieve",
                    meaning: "되찾다, 정보를 검색하다, 회수하다",
                    phonetic: "/rɪˈtriːv/",
                    context: "July 15 News: AI Era"
                }
            },
            {
                en: "However, relying solely on technology might decrease long-term memory {retention}.",
                ko: "하지만, 기술에만 전적으로 의존하는 것은 장기적인 기억 유지력을 감소시킬 수 있습니다.",
                vocab: {
                    word: "retention",
                    meaning: "기억 유지력, 보유, 보존",
                    phonetic: "/rɪˈten.ʃən/",
                    context: "July 15 News: AI Era"
                }
            },
            {
                en: "To combat this, modern study companion platforms {simulate} real-world conversations.",
                ko: "이를 방지하기 위해, 현대적인 학습 동반자 플랫폼들은 실제 대화 환경을 가상으로 구현하여 시뮬레이션합니다.",
                vocab: {
                    word: "simulate",
                    meaning: "가상으로 구현하다, 모의실험하다, 흉내 내다",
                    phonetic: "/ˈsɪm.jə.leɪt/",
                    context: "July 15 News: AI Era"
                }
            }
        ],
        translationKo: "인공지능은 우리가 소통하는 방식을 변화시키고 있으며, 우리의 인지적 습관을 조정하도록 촉구하고 있습니다. 많은 학습자들은 어휘와 문법을 즉각적으로 검색하기 위해 AI 도구를 사용합니다. 하지만 기술에만 전적으로 의존하는 것은 장기적인 기억 유지력을 떨어뜨릴 수 있습니다. 이를 극복하기 위해, 현대적인 학습 플랫폼들은 실제 대화 환경을 가상으로 구현해 제공합니다."
    },
    {
        id: "news-2",
        title: "The Secret to Better Sleep and Brain Resilience",
        category: "Health",
        date: "2026-07-14",
        sourceUrl: "https://learningenglish.voanews.com/a/study-why-sleep-is-needed-for-the-brain/3575971.html",
        sentences: [
            {
                en: "Scientific studies show that sleep {deprivation} severely impacts mental agility.",
                ko: "과학적 연구들은 수면 부족(박탈)이 정신적 기민성에 심각한 영향을 미친다는 것을 보여줍니다.",
                vocab: {
                    word: "deprivation",
                    meaning: "박탈, 결핍, 부족",
                    phonetic: "/ˌdep.rɪˈveɪ.ʃən/",
                    context: "July 14 News: Better Sleep"
                }
            },
            {
                en: "During deep sleep phases, our brains actively work to {consolidate} memories.",
                ko: "깊은 수면 단계 동안, 우리의 뇌는 기억을 강화하고 통합하기 위해 활발히 움직입니다.",
                vocab: {
                    word: "consolidate",
                    meaning: "강화하다, 통합하다, 굳건히 하다",
                    phonetic: "/kənˈsɑː.lɪ.deɪt/",
                    context: "July 14 News: Better Sleep"
                }
            },
            {
                en: "Without enough rest, neural pathways become {vulnerable} to cognitive fatigue.",
                ko: "충분한 휴식이 없으면, 신경 경로는 인지적 피로에 취약해집니다.",
                vocab: {
                    word: "vulnerable",
                    meaning: "취약한, 상처받기 쉬운",
                    phonetic: "/ˈvʌl.nər.ə.bəl/",
                    context: "July 14 News: Better Sleep"
                }
            },
            {
                en: "Experts warn that {chronic} sleep loss cannot be easily recovered by sleeping in on weekends.",
                ko: "전문가들은 만성적인 수면 부족이 주말에 늦잠을 자는 것만으로는 쉽게 회복될 수 없다고 경고합니다.",
                vocab: {
                    word: "chronic",
                    meaning: "만성적인, 오래 지속되는",
                    phonetic: "/ˈkrɑː.nɪk/",
                    context: "July 14 News: Better Sleep"
                }
            }
        ],
        translationKo: "과학 연구에 따르면 수면 부족은 정신적 기민성에 심각한 영향을 미칩니다. 깊은 수면 중에 우리의 뇌는 낮 동안 쌓인 기억을 정리하고 강화합니다. 휴식이 부족하면 신경 경로가 피로에 쉽게 무너지며 취약해집니다. 전문가들은 만성적인 수면 부족이 주말 몰아서 자는 것만으로는 완전히 회복되지 않는다고 조언합니다."
    },
    {
        id: "news-3",
        title: "NASA's Voyage Reaches Major Celestial Milestone",
        category: "Science",
        date: "2026-07-13",
        sourceUrl: "https://learningenglish.voanews.com/a/nasa-marks-milestone-for-voyage/7258412.html",
        sentences: [
            {
                en: "Human space exploration has reached a new {milestone} with this deep space venture.",
                ko: "인류의 우주 탐사는 이번 심우주 벤처를 통해 새로운 이정표에 도달했습니다.",
                vocab: {
                    word: "milestone",
                    meaning: "이정표, 획기적인 사건",
                    phonetic: "/ˈmaɪl.stoʊn/",
                    context: "July 13 News: NASA Voyage"
                }
            },
            {
                en: "Astronomers study {celestial} structures to identify the traces of ancient water.",
                ko: "천문학자들은 고대 물의 흔적을 찾기 위해 천체 구조를 연구합니다.",
                vocab: {
                    word: "celestial",
                    meaning: "천체의, 하늘의",
                    phonetic: "/sɪˈles.tʃəl/",
                    context: "July 13 News: NASA Voyage"
                }
            },
            {
                en: "This program represents a {pioneering} effort to prepare for manned Mars operations.",
                ko: "이 프로그램은 인류의 유인 화성 작전을 준비하기 위한 선구적인 노력을 보여줍니다.",
                vocab: {
                    word: "pioneering",
                    meaning: "선구적인, 개척적인",
                    phonetic: "/ˌpaɪəˈnɪr.ɪŋ/",
                    context: "July 13 News: NASA Voyage"
                }
            },
            {
                en: "Researchers are analyzing atmospheric compositions to see if the planet is {inhabitable}.",
                ko: "연구자들은 그 행성이 사람이 살 수 있는(거주 가능한) 곳인지 확인하기 위해 대기 구성을 분석 중입니다.",
                vocab: {
                    word: "inhabitable",
                    meaning: "살 수 있는, 거주 가능한",
                    phonetic: "/ɪnˈhæb.ɪ.tə.bəl/",
                    context: "July 13 News: NASA Voyage"
                }
            }
        ],
        translationKo: "인류의 우주 탐사는 이번 심우주 탐사 프로젝트를 통해 새로운 역사적 이정표를 세웠습니다. 과학자들은 물의 흔적을 밝혀내기 위해 다양한 외계 천체들을 면밀히 연구하고 있습니다. 이번 프로젝트는 향후 유인 화성 탐사 임무를 설계하기 위한 선구적인 시도입니다. 또한 연구진들은 해당 행성이 실제로 거주 가능한 환경인지를 평가하고 있습니다."
    }
];

// --- Application State ---
let state = {
    words: [],
    streak: 0,
    lastActiveDate: null,
    readNewsIds: [],
    selectedTagsForForm: new Set(),
    activeTheme: "light",
    currentNewsIndex: 0
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromStorage();
    initTheme();
    initNavigation();
    initDashboard();
    initLogger();
    initNews();
    initTypingStudy();
    initLibrary();
    initFlashcards();
    initModals();
    
    // Initial stats rendering
    updateStatsOnUI();
});

// --- Local Storage Management ---
function loadStateFromStorage() {
    try {
        const storedWords = localStorage.getItem("preply_flow_words");
        if (storedWords) {
            state.words = JSON.parse(storedWords);
            
            // Migration: Inject missing phonetic symbols for default mock words if loaded from old storage
            state.words.forEach(w => {
                const matchDefault = DEFAULT_WORDS.find(d => d.word === w.word);
                if (matchDefault && !w.phonetic) {
                    w.phonetic = matchDefault.phonetic;
                }
            });
            localStorage.setItem("preply_flow_words", JSON.stringify(state.words));
        } else {
            // Seed default words on first visit
            state.words = [...DEFAULT_WORDS];
            localStorage.setItem("preply_flow_words", JSON.stringify(state.words));
        }

        state.streak = parseInt(localStorage.getItem("preply_flow_streak") || "0", 10);
        state.lastActiveDate = localStorage.getItem("preply_flow_last_active");
        
        const storedNews = localStorage.getItem("preply_flow_read_news");
        state.readNewsIds = storedNews ? JSON.parse(storedNews) : [];
        
        state.activeTheme = localStorage.getItem("preply_flow_theme") || "light";
        
        checkAndUpdateStreak();
    } catch (e) {
        console.error("Local Storage Loading Error", e);
        state.words = [...DEFAULT_WORDS];
    }
}

function saveWordsToStorage() {
    localStorage.setItem("preply_flow_words", JSON.stringify(state.words));
    updateStatsOnUI();
    renderLibraryGrid();
}

function recordActivity() {
    const todayStr = new Date().toISOString().split('T')[0];
    if (state.lastActiveDate !== todayStr) {
        if (state.lastActiveDate) {
            const lastDate = new Date(state.lastActiveDate);
            const todayDate = new Date(todayStr);
            const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // Consecutive day!
                state.streak += 1;
                showToast(`🔥 학습 스트릭 달성! ${state.streak}일 연속 학습 중입니다.`, "success");
            } else if (diffDays > 1) {
                // Streak broken, reset to 1
                state.streak = 1;
                showToast(`🔥 새로운 학습 스트릭 시작! 매일 공부하여 기록을 이어가세요.`, "success");
            }
        } else {
            // First time active
            state.streak = 1;
        }
        state.lastActiveDate = todayStr;
        localStorage.setItem("preply_flow_streak", state.streak.toString());
        localStorage.setItem("preply_flow_last_active", todayStr);
        
        // Update streak widget
        document.getElementById("streak-days").textContent = state.streak;
    }
}

function checkAndUpdateStreak() {
    const todayStr = new Date().toISOString().split('T')[0];
    document.getElementById("streak-days").textContent = state.streak;
    
    if (state.lastActiveDate) {
        const lastDate = new Date(state.lastActiveDate);
        const todayDate = new Date(todayStr);
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
            // Streak broken since they haven't been active yesterday or today
            state.streak = 0;
            localStorage.setItem("preply_flow_streak", "0");
            document.getElementById("streak-days").textContent = "0";
        }
    }
}

// --- Theme Logic ---
function initTheme() {
    const root = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");
    
    // Apply initial theme
    root.setAttribute("data-theme", state.activeTheme);
    
    themeToggle.addEventListener("click", () => {
        const newTheme = state.activeTheme === "dark" ? "light" : "dark";
        state.activeTheme = newTheme;
        root.setAttribute("data-theme", newTheme);
        localStorage.setItem("preply_flow_theme", newTheme);
        showToast(`${newTheme === "dark" ? "다크 모드" : "라이트 모드"}로 전환되었습니다.`);
    });
}

// --- SPA Navigation ---
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const viewPanes = document.querySelectorAll(".view-pane");
    
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetView = btn.getAttribute("data-target");
            switchView(targetView);
        });
    });
    
    // Setup dashboard links
    document.body.addEventListener("click", (e) => {
        const link = e.target.closest(".link-to-view");
        if (link) {
            const targetView = link.getAttribute("data-target");
            switchView(targetView);
        }
    });
}

function switchView(viewId) {
    // Update active nav button
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        if (btn.getAttribute("data-target") === viewId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Update active pane
    const viewPanes = document.querySelectorAll(".view-pane");
    viewPanes.forEach(pane => {
        if (pane.getAttribute("id") === `view-${viewId}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });
    
    // Change Page Title & Subtitle dynamically
    const titleEl = document.getElementById("page-title");
    const subEl = document.getElementById("page-subtitle");
    
    switch (viewId) {
        case "dashboard":
            titleEl.textContent = "학습 대시보드";
            subEl.textContent = "오늘의 목표 달성도와 공부 내역을 확인해 보세요.";
            updateStatsOnUI();
            renderRecentWords();
            updateDashboardNewsPreview();
            break;
        case "add-word":
            titleEl.textContent = "단어 / 표현 기록";
            subEl.textContent = "프레플리 수업이나 일상 공부 중 배운 중요 표현을 수집하세요.";
            break;
        case "news":
            titleEl.textContent = "오늘의 영어 뉴스";
            subEl.textContent = "영문 아티클을 끊어 읽으며 단어를 터치해 바로 저장하세요.";
            renderNewsArticle();
            break;
        case "typing":
            titleEl.textContent = "타이핑 단어 암기";
            subEl.textContent = "직접 영어 스펠링을 타자 연습하듯 입력하며 기억력을 단련합니다.";
            resetTypingSession();
            break;
        case "library":
            titleEl.textContent = "내 단어장 보관소";
            subEl.textContent = "저장된 단어들을 검색하고, 수정 및 TTS 발음을 재생해 보세요.";
            renderLibraryGrid();
            renderLibraryTagFilters();
            break;
        case "flashcards":
            titleEl.textContent = "플래시카드 학습";
            subEl.textContent = "3D 뒤집기 방식의 능동적 회상 복습으로 빠르게 어휘를 점검하세요.";
            resetFlashcardSession();
            break;
        case "translator":
            titleEl.textContent = "실시간 학습 번역기";
            subEl.textContent = "수업 중에 모르는 문장을 바로 번역하고, 클릭 한 번으로 내 단어장에 추가해 보세요.";
            initTranslator();
            break;
    }
    
    // Close speech synthesis if navigating away from news/library/etc
    window.speechSynthesis.cancel();
    
    // Scroll content to top
    document.querySelector(".main-content").scrollTop = 0;
}

// --- Dashboard View Controller ---
function initDashboard() {
    renderRecentWords();
    updateDashboardNewsPreview();
}

function updateStatsOnUI() {
    // Total words
    document.getElementById("stat-total-words").textContent = state.words.length;
    
    // Read news count
    document.getElementById("stat-read-news").textContent = state.readNewsIds.length;
    
    // Mastered count
    const masteredCount = state.words.filter(w => w.status === "mastered").length;
    document.getElementById("stat-mastered-words").textContent = masteredCount;
    
    // Daily goal (e.g., 5 words registered today)
    const todayStr = new Date().toISOString().split('T')[0];
    const registeredToday = state.words.filter(w => w.dateAdded === todayStr).length;
    const targetGoal = 5;
    const progressPct = Math.min((registeredToday / targetGoal) * 100, 100);
    
    document.getElementById("today-goal-bar").style.width = `${progressPct}%`;
    document.getElementById("today-goal-text").textContent = `${registeredToday} / ${targetGoal} 단어 등록`;
}

function renderRecentWords() {
    const listContainer = document.getElementById("recent-words-list");
    
    if (state.words.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📝</div>
                <p>아직 등록된 단어가 없습니다.<br>수업에서 배운 표현을 추가해 보세요!</p>
                <button class="btn btn-primary link-to-view" data-target="add-word">첫 단어 등록하기</button>
            </div>
        `;
        return;
    }
    
    // Sort by newest added and take top 5
    const recent = [...state.words]
        .sort((a, b) => b.id.localeCompare(a.id))
        .slice(0, 5);
        
    let html = '<div style="display: flex; flex-direction: column; gap: 0.75rem;">';
    recent.forEach(item => {
        const firstTag = item.tags && item.tags.length > 0 ? item.tags[0] : "";
        const tagHtml = firstTag ? `<span class="mini-tag">${translateTag(firstTag)}</span>` : "";
        
        html += `
            <div class="recent-item">
                <div class="recent-item-main">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span class="recent-word">${escapeHTML(item.word)}</span>
                        ${tagHtml}
                    </div>
                    <span class="recent-meaning">${escapeHTML(item.meaning)}</span>
                </div>
                <button class="recent-play-btn" data-word="${escapeHTML(item.word)}" title="발음 듣기">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
            </div>
        `;
    });
    html += '</div>';
    listContainer.innerHTML = html;
    
    // Attach event listeners to speaker buttons
    listContainer.querySelectorAll(".recent-play-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const w = btn.getAttribute("data-word");
            speakWord(w);
        });
    });
}

function updateDashboardNewsPreview() {
    const article = DAILY_NEWS_DATA[0]; // Highlight the latest news
    document.getElementById("dash-news-title").textContent = article.title;
    
    // Construct short excerpt
    const plainExcerpt = article.sentences.map(s => s.en.replace(/{|}/g, '')).join(' ');
    document.getElementById("dash-news-excerpt").textContent = plainExcerpt.substring(0, 110) + "...";
}

// --- Add Word Logger Controller ---
// --- Add Word Logger Controller ---
async function autoFetchVocabDetails(word) {
    let meaning = "";
    let example = "";
    let translation = "";
    let pronunciation = "";

    // 1. Fetch details from Dictionary API (Phonetic spelling and Example sentences)
    try {
        const dictUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
        const dictRes = await fetch(dictUrl);
        if (dictRes.ok) {
            const data = await dictRes.json();
            if (data && data.length > 0) {
                const entry = data[0];
                
                // Pronunciation phonetic spelling
                if (entry.phonetic) {
                    pronunciation = entry.phonetic;
                } else if (entry.phonetics && entry.phonetics.length > 0) {
                    pronunciation = entry.phonetics.find(p => p.text)?.text || "";
                }
                
                // Extract an example sentence
                if (entry.meanings && entry.meanings.length > 0) {
                    for (const m of entry.meanings) {
                        if (m.definitions) {
                            for (const d of m.definitions) {
                                if (d.example) {
                                    example = d.example;
                                    break;
                                }
                            }
                        }
                        if (example) break;
                    }
                }
            }
        }
    } catch (err) {
        console.warn("Dictionary API failed:", err);
    }

    // 2. Fetch Korean translation of the word itself
    try {
        const transWordUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|ko`;
        const transWordRes = await fetch(transWordUrl);
        if (transWordRes.ok) {
            const transWordData = await transWordRes.json();
            if (transWordData && transWordData.responseData) {
                meaning = transWordData.responseData.translatedText;
                
                // Clean up translation if it returns the fallback info
                if (meaning && meaning.toLowerCase().includes("mymemory")) {
                    meaning = "";
                }
            }
        }
    } catch (err) {
        console.warn("Translation API failed for word:", err);
    }

    // 3. Translate example or generate fallback
    if (example) {
        try {
            const transExUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(example)}&langpair=en|ko`;
            const transExRes = await fetch(transExUrl);
            if (transExRes.ok) {
                const transExData = await transExRes.json();
                if (transExData && transExData.responseData) {
                    translation = transExData.responseData.translatedText;
                    
                    // Clean up fallback info
                    if (translation && translation.toLowerCase().includes("mymemory")) {
                        translation = "";
                    }
                }
            }
        } catch (err) {
            console.warn("Translation API failed for example:", err);
        }
    } else {
        // Fallback example in case API has no examples
        example = `He wanted to learn how to use the word "${word}" correctly.`;
        translation = `그는 "${word}"라는 단어를 올바르게 사용하는 법을 배우고 싶었다.`;
    }

    return {
        meaning: meaning || "",
        example: example,
        translation: translation,
        pronunciation: "", // Keep Korean pronunciation blank for user input
        phonetic: pronunciation // Store dictionary IPA in phonetic field
    };
}

function initLogger() {
    const form = document.getElementById("vocab-form");
    const tagPills = document.querySelectorAll("#vocab-tags-container .tag-pill");
    const autoSearchBtn = document.getElementById("btn-auto-search");
    
    // Auto Search Click Event
    autoSearchBtn.addEventListener("click", async () => {
        const wordInput = document.getElementById("vocab-word");
        const word = wordInput.value.trim();
        
        if (!word) {
            showToast("먼저 검색할 영어 단어/표현을 입력하세요.", "error");
            wordInput.focus();
            return;
        }
        
        // Set loading state on button
        autoSearchBtn.disabled = true;
        autoSearchBtn.textContent = "검색 중...";
        
        const meaningInput = document.getElementById("vocab-meaning");
        const exampleInput = document.getElementById("vocab-example");
        const translationInput = document.getElementById("vocab-example-translation");
        const pronInput = document.getElementById("vocab-pronunciation");
        const phoneticInput = document.getElementById("vocab-phonetic");
        
        // Disable fields during fetch
        meaningInput.disabled = true;
        exampleInput.disabled = true;
        translationInput.disabled = true;
        pronInput.disabled = true;
        phoneticInput.disabled = true;
        
        try {
            const result = await autoFetchVocabDetails(word);
            
            // Populate inputs
            if (result.meaning) meaningInput.value = result.meaning;
            if (result.example) exampleInput.value = result.example;
            if (result.translation) translationInput.value = result.translation;
            if (result.pronunciation) pronInput.value = result.pronunciation;
            if (result.phonetic) phoneticInput.value = result.phonetic;
            
            showToast(`"${word}" 검색 완료! 뜻과 예문이 자동 완성되었습니다.`, "success");
        } catch (error) {
            console.error("Auto fetch error:", error);
            showToast("어휘를 검색하는 데 실패했습니다. 직접 작성해 주세요.", "error");
        } finally {
            // Restore UI state
            autoSearchBtn.disabled = false;
            autoSearchBtn.textContent = "🔍 자동 완성";
            
            meaningInput.disabled = false;
            exampleInput.disabled = false;
            translationInput.disabled = false;
            pronInput.disabled = false;
            phoneticInput.disabled = false;
        }
    });
    
    // Tag selector logic
    tagPills.forEach(pill => {
        pill.addEventListener("click", () => {
            const tagVal = pill.getAttribute("data-value");
            if (state.selectedTagsForForm.has(tagVal)) {
                state.selectedTagsForForm.delete(tagVal);
                pill.classList.remove("selected");
            } else {
                state.selectedTagsForForm.add(tagVal);
                pill.classList.add("selected");
            }
        });
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const word = document.getElementById("vocab-word").value.trim();
        const meaning = document.getElementById("vocab-meaning").value.trim();
        const example = document.getElementById("vocab-example").value.trim();
        const translation = document.getElementById("vocab-example-translation").value.trim();
        const context = document.getElementById("vocab-context").value.trim();
        const pronunciation = document.getElementById("vocab-pronunciation").value.trim();
        const phonetic = document.getElementById("vocab-phonetic").value.trim();
        
        if (!word || !meaning) {
            showToast("단어와 뜻은 필수 입력 항목입니다.", "error");
            return;
        }
        
        const newWord = {
            id: "word-" + Date.now(),
            word: word,
            meaning: meaning,
            example: example,
            translation: translation,
            context: context || "개인 학습",
            pronunciation: pronunciation,
            phonetic: phonetic,
            tags: Array.from(state.selectedTagsForForm),
            status: "needs_review",
            dateAdded: new Date().toISOString().split('T')[0]
        };
        
        // Save
        state.words.push(newWord);
        saveWordsToStorage();
        recordActivity();
        
        showToast(`단어 "${word}"가 성공적으로 저장되었습니다!`, "success");
        
        // Reset form
        form.reset();
        state.selectedTagsForForm.clear();
        tagPills.forEach(p => p.classList.remove("selected"));
        
        // Redirect back to dashboard to see progress
        setTimeout(() => switchView("dashboard"), 800);
    });
}

// --- Daily News Controller ---
let isReadingNewsSpeech = false;
let newsUtterance = null;

function initNews() {
    const tabsContainer = document.getElementById("news-tabs-container");
    const playTtsBtn = document.getElementById("news-play-tts");
    const toggleTransBtn = document.getElementById("toggle-translation-btn");
    
    // Tab setup
    let tabsHtml = "";
    DAILY_NEWS_DATA.forEach((article, index) => {
        tabsHtml += `
            <button class="news-tab-btn ${index === 0 ? 'active' : ''}" data-index="${index}">
                ${article.date} (${article.category})
            </button>
        `;
    });
    tabsContainer.innerHTML = tabsHtml;
    
    tabsContainer.querySelectorAll(".news-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            tabsContainer.querySelectorAll(".news-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Stop speech synthesis on switch
            if (isReadingNewsSpeech) {
                window.speechSynthesis.cancel();
                isReadingNewsSpeech = false;
                playTtsBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    기사 듣기
                `;
            }
            
            state.currentNewsIndex = parseInt(btn.getAttribute("data-index"), 10);
            renderNewsArticle();
        });
    });
    
    // TTS toggle
    playTtsBtn.addEventListener("click", () => {
        const article = DAILY_NEWS_DATA[state.currentNewsIndex];
        const textToRead = article.sentences.map(s => s.en.replace(/{|}/g, '')).join(' ');
        
        if (isReadingNewsSpeech) {
            window.speechSynthesis.cancel();
            isReadingNewsSpeech = false;
            playTtsBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                기사 듣기
            `;
            showToast("음성 재생이 중단되었습니다.");
        } else {
            window.speechSynthesis.cancel();
            newsUtterance = new SpeechSynthesisUtterance(textToRead);
            newsUtterance.lang = "en-US";
            newsUtterance.rate = 0.85; // Slightly slower for better comprehension
            
            newsUtterance.onend = () => {
                isReadingNewsSpeech = false;
                playTtsBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    기사 듣기
                `;
            };
            
            window.speechSynthesis.speak(newsUtterance);
            isReadingNewsSpeech = true;
            playTtsBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                재생 중단
            `;
            showToast("기사 읽기를 시작합니다.");
            
            recordActivity();
        }
    });
    
    // Toggle translation
    toggleTransBtn.addEventListener("click", () => {
        const transDiv = document.getElementById("news-body-ko");
        if (transDiv.style.display === "none") {
            transDiv.style.display = "block";
            toggleTransBtn.textContent = "번역본 숨기기";
        } else {
            transDiv.style.display = "none";
            toggleTransBtn.textContent = "번역본 보기";
        }
    });
}

function renderNewsArticle() {
    const article = DAILY_NEWS_DATA[state.currentNewsIndex];
    
    // Meta data
    document.getElementById("news-date").textContent = article.date;
    document.getElementById("news-category").textContent = article.category;
    document.getElementById("news-title").textContent = article.title;
    document.getElementById("news-source-link").href = article.sourceUrl || "https://learningenglish.voanews.com/";
    
    // Render English text with interactive highlighted elements
    const enContainer = document.getElementById("news-body-en");
    enContainer.innerHTML = "";
    
    article.sentences.forEach((sentence, sIdx) => {
        const sentenceBlock = document.createElement("p");
        sentenceBlock.className = "article-sentence-block";
        
        // Find if sentence contains vocabulary wrapped in curly brackets
        const regex = /\{([^}]+)\}/g;
        let match;
        let htmlContent = sentence.en;
        
        if (sentence.vocab) {
            const rawWord = sentence.vocab.word;
            const meaning = sentence.vocab.meaning;
            const phonetic = sentence.vocab.phonetic || "";
            const fullRawContextSentence = sentence.en.replace(/{|}/g, '');
            const fullTranslatedSentence = sentence.ko;
            
            // Inject customized interactive markup
            const highlightedMarkup = `
                <span class="clickable-news-vocab" 
                      data-word="${escapeHTML(rawWord)}" 
                      data-meaning="${escapeHTML(meaning)}"
                      data-phonetic="${escapeHTML(phonetic)}"
                      data-context="${escapeHTML(sentence.vocab.context)}"
                      data-example="${escapeHTML(fullRawContextSentence)}"
                      data-translation="${escapeHTML(fullTranslatedSentence)}">${escapeHTML(rawWord)}</span>
            `;
            
            htmlContent = sentence.en.replace(`{${rawWord}}`, highlightedMarkup);
        }
        
        sentenceBlock.innerHTML = htmlContent;
        enContainer.appendChild(sentenceBlock);
    });
    
    // Render Korean translation
    document.getElementById("news-body-ko").textContent = article.translationKo;
    
    // Default translation hidden
    document.getElementById("news-body-ko").style.display = "none";
    document.getElementById("toggle-translation-btn").textContent = "번역본 보기";
    
    // Mark as read in state
    if (!state.readNewsIds.includes(article.id)) {
        state.readNewsIds.push(article.id);
        localStorage.setItem("preply_flow_read_news", JSON.stringify(state.readNewsIds));
        updateStatsOnUI();
    }
    
    // Attach click events on news vocabs to open modal
    enContainer.querySelectorAll(".clickable-news-vocab").forEach(el => {
        el.addEventListener("click", () => {
            const word = el.getAttribute("data-word");
            const meaning = el.getAttribute("data-meaning");
            const example = el.getAttribute("data-example");
            const translation = el.getAttribute("data-translation");
            const context = el.getAttribute("data-context");
            const phonetic = el.getAttribute("data-phonetic");
            
            openNewsImportModal(word, meaning, example, translation, context, phonetic);
        });
    });
}

// --- Typing Study Mode Controller ---
let typingState = {
    activeWordList: [],
    currentIndex: 0,
    totalCount: 0,
    correctKeystrokes: 0,
    totalKeystrokes: 0,
    targetWord: "",
    hasStarted: false
};

function initTypingStudy() {
    const startBtn = document.getElementById("start-typing-btn");
    const restartBtn = document.getElementById("restart-typing-btn");
    const resultRestartBtn = document.getElementById("restart-typing-btn");
    const skipBtn = document.getElementById("typing-skip-btn");
    const ttsBtn = document.getElementById("typing-tts-btn");
    const hiddenInput = document.getElementById("typing-hidden-input");
    const exitBtn = document.getElementById("exit-typing-btn");
    
    startBtn.addEventListener("click", startTypingSession);
    restartBtn.addEventListener("click", () => {
        document.getElementById("typing-result-view").style.display = "none";
        document.getElementById("typing-setup-view").style.display = "block";
    });
    
    exitBtn.addEventListener("click", () => {
        if (confirm("학습을 중단하시겠습니까? 진행 내용은 저장되지 않습니다.")) {
            resetTypingSession();
        }
    });
    
    // Monitor keystrokes on secret text box
    hiddenInput.addEventListener("input", handleTypingInput);
    
    // Force focus to input box
    const visualizer = document.getElementById("typing-word-visualizer");
    visualizer.addEventListener("click", () => {
        hiddenInput.focus();
        document.getElementById("focus-alert").style.display = "none";
    });
    
    hiddenInput.addEventListener("focus", () => {
        document.getElementById("focus-alert").style.display = "none";
        visualizer.style.boxShadow = "var(--shadow-glow)";
        visualizer.style.borderColor = "var(--color-accent)";
    });
    
    hiddenInput.addEventListener("blur", () => {
        document.getElementById("focus-alert").style.display = "block";
        visualizer.style.boxShadow = "none";
        visualizer.style.borderColor = "var(--border-color)";
    });
    
    skipBtn.addEventListener("click", () => {
        goToNextTypingWord();
    });
    
    ttsBtn.addEventListener("click", () => {
        speakWord(typingState.targetWord);
    });
}

function startTypingSession() {
    const range = document.getElementById("typing-range-select").value;
    let list = [];
    
    if (range === "all") {
        list = [...state.words];
    } else if (range === "recent") {
        list = [...state.words].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 10);
    } else if (range === "review") {
        list = state.words.filter(w => w.status === "needs_review");
    }
    
    if (list.length === 0) {
        showToast("학습할 단어가 단어장에 없습니다. 먼저 단어를 등록해 주세요!", "error");
        return;
    }
    
    // Shuffle the words for a dynamic typing training experience
    typingState.activeWordList = list.sort(() => Math.random() - 0.5);
    typingState.currentIndex = 0;
    typingState.totalCount = typingState.activeWordList.length;
    typingState.correctKeystrokes = 0;
    typingState.totalKeystrokes = 0;
    typingState.hasStarted = true;
    
    // View swaps
    document.getElementById("typing-setup-view").style.display = "none";
    document.getElementById("typing-play-view").style.display = "flex";
    
    loadCurrentTypingWord();
    recordActivity();
}

function loadCurrentTypingWord() {
    const wordData = typingState.activeWordList[typingState.currentIndex];
    typingState.targetWord = wordData.word.trim();
    
    // Render progress indicators
    document.getElementById("typing-progress-text").textContent = `${typingState.currentIndex + 1} / ${typingState.totalCount}`;
    const progressPct = ((typingState.currentIndex) / typingState.totalCount) * 100;
    document.getElementById("typing-progress-bar").style.width = `${progressPct}%`;
    
    // Meaning and Example Sentence
    document.getElementById("typing-current-meaning").textContent = wordData.meaning;
    document.getElementById("typing-current-example").textContent = wordData.example || "등록된 예문이 없습니다.";
    
    // Reset inputs
    const hiddenInput = document.getElementById("typing-hidden-input");
    hiddenInput.value = "";
    hiddenInput.maxLength = typingState.targetWord.length;
    
    // Focus
    hiddenInput.focus();
    
    // Build character visualizer
    renderTypingVisualizer("");
    updateAccuracyDisplay();
}

function renderTypingVisualizer(typedValue) {
    const container = document.getElementById("typing-word-visualizer");
    container.innerHTML = "";
    
    const word = typingState.targetWord;
    
    for (let i = 0; i < word.length; i++) {
        // Insert Caret before the current character index
        if (i === typedValue.length) {
            const caret = document.createElement("span");
            caret.className = "typing-caret";
            container.appendChild(caret);
        }
        
        const charSpan = document.createElement("span");
        const char = word[i];
        
        if (i < typedValue.length) {
            const typedChar = typedValue[i];
            if (typedChar.toLowerCase() === char.toLowerCase()) {
                charSpan.className = "char-correct";
                charSpan.textContent = char;
            } else {
                charSpan.className = "char-incorrect";
                charSpan.textContent = typedChar === " " ? "_" : char; // show typo or underscore if space
            }
        } else {
            charSpan.className = "char-untyped";
            charSpan.textContent = char;
        }
        
        container.appendChild(charSpan);
    }
    
    // If completed typing exact characters length and all match
    if (typedValue.length === word.length) {
        // Insert Caret at the end of the word
        const caret = document.createElement("span");
        caret.className = "typing-caret";
        container.appendChild(caret);
    }
}

function handleTypingInput(e) {
    const typed = e.target.value;
    const target = typingState.targetWord;
    
    typingState.totalKeystrokes++;
    
    // Compare letters to tally correct keystrokes
    const lastCharIdx = typed.length - 1;
    if (lastCharIdx >= 0 && typed[lastCharIdx].toLowerCase() === target[lastCharIdx].toLowerCase()) {
        typingState.correctKeystrokes++;
    }
    
    // Render letters coloring
    renderTypingVisualizer(typed);
    updateAccuracyDisplay();
    
    // Check if fully typed correctly
    if (typed === target) {
        speakWord(target);
        
        // Success animation effect
        const visualizer = document.getElementById("typing-word-visualizer");
        visualizer.style.transform = "scale(1.05)";
        visualizer.style.borderColor = "var(--color-success)";
        visualizer.style.boxShadow = "var(--shadow-glow)";
        
        setTimeout(() => {
            visualizer.style.transform = "none";
            visualizer.style.borderColor = "var(--border-color)";
            visualizer.style.boxShadow = "none";
            goToNextTypingWord();
        }, 600);
    }
}

function updateAccuracyDisplay() {
    let accuracy = 100;
    if (typingState.totalKeystrokes > 0) {
        accuracy = Math.round((typingState.correctKeystrokes / typingState.totalKeystrokes) * 100);
    }
    document.getElementById("typing-accuracy-live").textContent = `${accuracy}%`;
}

function goToNextTypingWord() {
    typingState.currentIndex++;
    if (typingState.currentIndex >= typingState.totalCount) {
        // Complete! Show results
        finishTypingSession();
    } else {
        loadCurrentTypingWord();
    }
}

function finishTypingSession() {
    document.getElementById("typing-play-view").style.display = "none";
    document.getElementById("typing-result-view").style.display = "block";
    
    // Stats calculation
    let avgAccuracy = 100;
    if (typingState.totalKeystrokes > 0) {
        avgAccuracy = Math.round((typingState.correctKeystrokes / typingState.totalKeystrokes) * 100);
    }
    
    document.getElementById("result-total-count").textContent = typingState.totalCount;
    document.getElementById("result-accuracy-value").textContent = `${avgAccuracy}%`;
}

function resetTypingSession() {
    typingState.hasStarted = false;
    document.getElementById("typing-play-view").style.display = "none";
    document.getElementById("typing-result-view").style.display = "none";
    document.getElementById("typing-setup-view").style.display = "block";
    
    const hiddenInput = document.getElementById("typing-hidden-input");
    hiddenInput.value = "";
    hiddenInput.blur();
}

// --- Library View Controller ---
let libraryState = {
    searchQuery: "",
    selectedTag: "all",
    sortBy: "newest"
};

function initLibrary() {
    const searchInput = document.getElementById("library-search-input");
    const sortSelect = document.getElementById("library-sort-select");
    
    searchInput.addEventListener("input", (e) => {
        libraryState.searchQuery = e.target.value.toLowerCase().trim();
        renderLibraryGrid();
    });
    
    sortSelect.addEventListener("change", (e) => {
        libraryState.sortBy = e.target.value;
        renderLibraryGrid();
    });
}

function renderLibraryTagFilters() {
    const container = document.getElementById("library-tag-filters");
    
    // Tally tags from actual saved words
    const allTags = new Set();
    state.words.forEach(w => {
        if (w.tags) w.tags.forEach(t => allTags.add(t));
    });
    
    let html = `<button class="filter-tag-pill ${libraryState.selectedTag === 'all' ? 'active' : ''}" data-tag="all">전체</button>`;
    allTags.forEach(tag => {
        html += `
            <button class="filter-tag-pill ${libraryState.selectedTag === tag ? 'active' : ''}" data-tag="${tag}">
                ${translateTag(tag)}
            </button>
        `;
    });
    container.innerHTML = html;
    
    // Add Click listener
    container.querySelectorAll(".filter-tag-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            container.querySelectorAll(".filter-tag-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            libraryState.selectedTag = pill.getAttribute("data-tag");
            renderLibraryGrid();
        });
    });
}

function renderLibraryGrid() {
    const grid = document.getElementById("library-words-grid");
    
    if (state.words.length === 0) {
        grid.innerHTML = `
            <div class="content-card w-100" style="grid-column: 1 / -1;">
                <div class="empty-state">
                    <div class="empty-icon">📂</div>
                    <p>내 단어장에 단어가 없습니다. 수업이나 뉴스에서 배운 단어를 등록하세요!</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Apply Filter & Sorting
    let filtered = state.words.filter(w => {
        // Tag filter
        if (libraryState.selectedTag !== "all" && (!w.tags || !w.tags.includes(libraryState.selectedTag))) {
            return false;
        }
        
        // Search query filter
        if (libraryState.searchQuery) {
            const wordMatch = w.word.toLowerCase().includes(libraryState.searchQuery);
            const meanMatch = w.meaning.toLowerCase().includes(libraryState.searchQuery);
            const exMatch = w.example && w.example.toLowerCase().includes(libraryState.searchQuery);
            return wordMatch || meanMatch || exMatch;
        }
        
        return true;
    });
    
    // Sort
    filtered.sort((a, b) => {
        if (libraryState.sortBy === "newest") {
            return b.id.localeCompare(a.id);
        } else if (libraryState.sortBy === "oldest") {
            return a.id.localeCompare(b.id);
        } else if (libraryState.sortBy === "alphabetical") {
            return a.word.localeCompare(b.word);
        } else if (libraryState.sortBy === "status") {
            // Put 'needs_review' before 'mastered'
            if (a.status === b.status) return b.id.localeCompare(a.id);
            return a.status === 'needs_review' ? -1 : 1;
        }
        return 0;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="content-card w-100" style="grid-column: 1 / -1;">
                <div class="empty-state">
                    <p>검색 조건에 맞는 단어가 존재하지 않습니다.</p>
                </div>
            </div>
        `;
        return;
    }
    
    let html = "";
    filtered.forEach(item => {
        const reviewClass = item.status === "needs_review" ? "needs-review" : "";
        const tagBadge = item.tags && item.tags.length > 0 ? `<span class="card-top-tag">${translateTag(item.tags[0])}</span>` : "";
        const statusTitle = item.status === "needs_review" ? "다시 공부하기 상태" : "완벽히 암기 완료한 단어";
        
        html += `
            <div class="word-card ${reviewClass}" title="${statusTitle}">
                <div>
                    <div class="card-top">
                        ${tagBadge}
                        <div class="card-top-actions">
                            <button class="btn-card-action edit" data-id="${item.id}" title="수정">✏️</button>
                            <button class="btn-card-action delete" data-id="${item.id}" title="삭제">🗑️</button>
                        </div>
                    </div>
                    <h3 class="card-word-title">${escapeHTML(item.word)}</h3>
                    <div class="card-word-pron">${escapeHTML(item.phonetic ? item.phonetic : '')} ${escapeHTML(item.pronunciation ? `${item.pronunciation}` : '') || (!item.phonetic ? '[발음 정보 없음]' : '')}</div>
                    <div class="card-word-meaning">${escapeHTML(item.meaning)}</div>
                    ${item.example ? `<div class="card-word-example">${escapeHTML(item.example)}</div>` : ""}
                </div>
                
                <div class="card-bottom">
                    <div class="card-context" title="${escapeHTML(item.context)}">📍 ${escapeHTML(item.context)}</div>
                    <button class="card-btn-speak" data-word="${escapeHTML(item.word)}" title="발음 듣기">🔊</button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
    
    // Attach buttons event listeners
    grid.querySelectorAll(".card-btn-speak").forEach(btn => {
        btn.addEventListener("click", () => {
            speakWord(btn.getAttribute("data-word"));
        });
    });
    
    grid.querySelectorAll(".btn-card-action.delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            deleteWordItem(id);
        });
    });
    
    grid.querySelectorAll(".btn-card-action.edit").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            openEditModal(id);
        });
    });
}

function deleteWordItem(id) {
    const wordItem = state.words.find(w => w.id === id);
    if (!wordItem) return;
    
    if (confirm(`단어 "${wordItem.word}"를 정말로 삭제하시겠습니까?`)) {
        state.words = state.words.filter(w => w.id !== id);
        saveWordsToStorage();
        showToast("단어가 삭제되었습니다.");
    }
}

// --- Flashcard View Controller ---
let flashcardState = {
    activeCards: [],
    currentIndex: 0,
    isFlipped: false
};

function initFlashcards() {
    const startBtn = document.getElementById("start-flashcards-btn");
    const flipBtn = document.getElementById("flashcard-flip-btn");
    const hardBtn = document.getElementById("rating-hard-btn");
    const easyBtn = document.getElementById("rating-easy-btn");
    const closeBtn = document.getElementById("exit-flashcard-btn");
    const cardEl = document.getElementById("interactive-flashcard");
    const cardTts = document.getElementById("flash-card-tts-btn");
    const restartBtn = document.getElementById("restart-flashcards-btn");
    
    startBtn.addEventListener("click", startFlashcardSession);
    
    // Flip actions
    flipBtn.addEventListener("click", toggleFlashcardFlip);
    cardEl.addEventListener("click", toggleFlashcardFlip);
    
    // Self-ratings
    hardBtn.addEventListener("click", () => handleFlashcardRating("needs_review"));
    easyBtn.addEventListener("click", () => handleFlashcardRating("mastered"));
    
    closeBtn.addEventListener("click", () => {
        if (confirm("복습 세션을 종료하겠습니까?")) {
            resetFlashcardSession();
        }
    });
    
    cardTts.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent flipping the card
        const card = flashcardState.activeCards[flashcardState.currentIndex];
        speakWord(card.word);
    });
    
    restartBtn.addEventListener("click", () => {
        document.getElementById("flashcard-finish-view").style.display = "none";
        document.getElementById("flashcard-setup-view").style.display = "block";
    });
}

function startFlashcardSession() {
    const range = document.getElementById("flashcard-range-select").value;
    let list = [];
    
    if (range === "all") {
        list = [...state.words];
    } else if (range === "review") {
        list = state.words.filter(w => w.status === "needs_review");
    } else if (range === "recent") {
        list = [...state.words].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 15);
    }
    
    if (list.length === 0) {
        showToast("복습할 단어가 단어장에 없습니다. 먼저 단어를 추가해 주세요!", "error");
        return;
    }
    
    // Shuffle
    flashcardState.activeCards = list.sort(() => Math.random() - 0.5);
    flashcardState.currentIndex = 0;
    flashcardState.isFlipped = false;
    
    document.getElementById("flashcard-setup-view").style.display = "none";
    document.getElementById("flashcard-play-view").style.display = "flex";
    
    loadCurrentFlashcard();
    recordActivity();
}

function loadCurrentFlashcard() {
    const card = flashcardState.activeCards[flashcardState.currentIndex];
    
    // Reset flip layout
    const cardEl = document.getElementById("interactive-flashcard");
    cardEl.classList.remove("flipped");
    flashcardState.isFlipped = false;
    
    // Toggle rating control button group visibility
    document.getElementById("flashcard-rating-actions").style.display = "none";
    document.getElementById("flashcard-flip-btn").style.display = "block";
    
    // Progress
    document.getElementById("flashcard-progress-text").textContent = `${flashcardState.currentIndex + 1} / ${flashcardState.activeCards.length} 카드`;
    
    // Front card face
    const firstTag = card.tags && card.tags.length > 0 ? card.tags[0] : "기타";
    document.getElementById("flash-card-tag").textContent = translateTag(firstTag);
    document.getElementById("flash-card-word").textContent = card.word;
    
    const ipa = card.phonetic ? card.phonetic : "";
    const koPron = card.pronunciation ? card.pronunciation : "";
    const pronDisplay = ipa && koPron ? `${ipa}  ${koPron}` : (ipa || koPron || "[발음 정보 없음]");
    document.getElementById("flash-card-pron").textContent = pronDisplay;
    
    // Back card face
    document.getElementById("flash-card-tag-back").textContent = translateTag(firstTag);
    document.getElementById("flash-card-meaning").textContent = card.meaning;
    document.getElementById("flash-card-ex-en").textContent = card.example || "등록된 예문이 없습니다.";
    document.getElementById("flash-card-ex-ko").textContent = card.translation || "";
    document.getElementById("flash-card-context").textContent = `출처: ${card.context}`;
}

function toggleFlashcardFlip() {
    const cardEl = document.getElementById("interactive-flashcard");
    flashcardState.isFlipped = !flashcardState.isFlipped;
    
    if (flashcardState.isFlipped) {
        cardEl.classList.add("flipped");
        
        // Speak word automatically on flip for better auditory reinforcement
        const card = flashcardState.activeCards[flashcardState.currentIndex];
        setTimeout(() => speakWord(card.word), 150);
        
        // Show rating feedback actions
        document.getElementById("flashcard-rating-actions").style.display = "grid";
        document.getElementById("flashcard-flip-btn").style.display = "none";
    } else {
        cardEl.classList.remove("flipped");
        
        // Hide rating feedback actions
        document.getElementById("flashcard-rating-actions").style.display = "none";
        document.getElementById("flashcard-flip-btn").style.display = "block";
    }
}

function handleFlashcardRating(statusRating) {
    const card = flashcardState.activeCards[flashcardState.currentIndex];
    
    // Update word item status directly
    const storedItem = state.words.find(w => w.id === card.id);
    if (storedItem) {
        storedItem.status = statusRating;
        saveWordsToStorage();
    }
    
    // Move on
    flashcardState.currentIndex++;
    if (flashcardState.currentIndex >= flashcardState.activeCards.length) {
        // Session complete
        finishFlashcardSession();
    } else {
        loadCurrentFlashcard();
    }
}

function finishFlashcardSession() {
    document.getElementById("flashcard-play-view").style.display = "none";
    document.getElementById("flashcard-finish-view").style.display = "block";
    
    // Tally stats
    document.getElementById("flashcard-result-total").textContent = flashcardState.activeCards.length;
    const masteredCount = state.words.filter(w => w.status === "mastered").length;
    document.getElementById("flashcard-result-mastered").textContent = masteredCount;
}

function resetFlashcardSession() {
    document.getElementById("flashcard-play-view").style.display = "none";
    document.getElementById("flashcard-finish-view").style.display = "none";
    document.getElementById("flashcard-setup-view").style.display = "block";
}

// --- Modals Management ---
let activeEditId = null;

function initModals() {
    const closeEditBtn = document.getElementById("close-edit-modal-btn");
    const cancelEditBtn = document.getElementById("cancel-edit-modal-btn");
    const editForm = document.getElementById("edit-vocab-form");
    
    const closeImportBtn = document.getElementById("close-import-modal-btn");
    const cancelImportBtn = document.getElementById("cancel-import-modal-btn");
    const importForm = document.getElementById("news-import-form");
    
    // Modal Backdrops close on background click
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) {
                closeAllModals();
            }
        });
    });
    
    // Edit Modal triggers
    closeEditBtn.addEventListener("click", closeAllModals);
    cancelEditBtn.addEventListener("click", closeAllModals);
    
    // Edit Submit
    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("edit-vocab-id").value;
        const wordEl = document.getElementById("edit-vocab-word");
        const meanEl = document.getElementById("edit-vocab-meaning");
        const exEl = document.getElementById("edit-vocab-example");
        const transEl = document.getElementById("edit-vocab-example-translation");
        const ctxEl = document.getElementById("edit-vocab-context");
        const pronEl = document.getElementById("edit-vocab-pronunciation");
        const phoneticEl = document.getElementById("edit-vocab-phonetic");
        
        const originalWord = state.words.find(w => w.id === id);
        if (originalWord) {
            originalWord.word = wordEl.value.trim();
            originalWord.meaning = meanEl.value.trim();
            originalWord.example = exEl.value.trim();
            originalWord.translation = transEl.value.trim();
            originalWord.context = ctxEl.value.trim();
            originalWord.pronunciation = pronEl.value.trim();
            originalWord.phonetic = phoneticEl.value.trim();
            
            // Re-tally tags from modal selection
            const activeTags = [];
            const selectedPills = document.querySelectorAll("#edit-vocab-tags-container .tag-pill.selected");
            selectedPills.forEach(pill => activeTags.push(pill.getAttribute("data-value")));
            originalWord.tags = activeTags;
            
            saveWordsToStorage();
            showToast("변경 사항이 성공적으로 저장되었습니다.", "success");
            closeAllModals();
            renderLibraryGrid();
        }
    });
    
    // News Import triggers
    closeImportBtn.addEventListener("click", closeAllModals);
    cancelImportBtn.addEventListener("click", closeAllModals);
    
    // News Import Submit
    importForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const word = document.getElementById("import-word").value.trim();
        const meaning = document.getElementById("import-meaning").value.trim();
        const example = document.getElementById("import-example").value.trim();
        const translation = document.getElementById("import-translation").value.trim();
        const tag = document.getElementById("import-tags").value;
        
        if (!meaning) {
            showToast("뜻을 입력해 주세요.", "error");
            return;
        }
        
        // Add vocabulary object
        const newWord = {
            id: "word-" + Date.now(),
            word: word,
            meaning: meaning,
            example: example,
            translation: translation,
            context: "뉴스 리딩에서 가져옴",
            pronunciation: "",
            phonetic: currentNewsImportPhonetic,
            tags: [tag],
            status: "needs_review",
            dateAdded: new Date().toISOString().split('T')[0]
        };
        
        state.words.push(newWord);
        saveWordsToStorage();
        recordActivity();
        
        showToast(`단어 "${word}"가 단어장에 추가되었습니다!`, "success");
        closeAllModals();
    });
}

function openEditModal(id) {
    const wordData = state.words.find(w => w.id === id);
    if (!wordData) return;
    
    activeEditId = id;
    document.getElementById("edit-vocab-id").value = id;
    document.getElementById("edit-vocab-word").value = wordData.word;
    document.getElementById("edit-vocab-meaning").value = wordData.meaning;
    document.getElementById("edit-vocab-example").value = wordData.example || "";
    document.getElementById("edit-vocab-example-translation").value = wordData.translation || "";
    document.getElementById("edit-vocab-context").value = wordData.context || "";
    document.getElementById("edit-vocab-pronunciation").value = wordData.pronunciation || "";
    document.getElementById("edit-vocab-phonetic").value = wordData.phonetic || "";
    
    // Match and toggle tags selected status
    const pills = document.querySelectorAll("#edit-vocab-tags-container .tag-pill");
    pills.forEach(pill => {
        const val = pill.getAttribute("data-value");
        if (wordData.tags && wordData.tags.includes(val)) {
            pill.classList.add("selected");
        } else {
            pill.classList.remove("selected");
        }
        
        // Reset and re-bind clicks inside modal
        pill.replaceWith(pill.cloneNode(true));
    });
    
    // Bind click events on cloned tag pills
    const freshPills = document.querySelectorAll("#edit-vocab-tags-container .tag-pill");
    freshPills.forEach(pill => {
        pill.addEventListener("click", () => {
            pill.classList.toggle("selected");
        });
    });
    
    document.getElementById("edit-vocab-modal").style.display = "flex";
}

let currentNewsImportPhonetic = "";

function openNewsImportModal(word, meaning, example, translation, context, phonetic) {
    currentNewsImportPhonetic = phonetic || "";
    document.getElementById("import-word").value = word;
    document.getElementById("import-meaning").value = meaning; // suggest direct meaning
    document.getElementById("import-example").value = example;
    document.getElementById("import-translation").value = translation;
    
    // Reset focus to meaning field
    document.getElementById("news-import-form").reset();
    document.getElementById("import-word").value = word;
    document.getElementById("import-meaning").value = meaning;
    document.getElementById("import-example").value = example;
    document.getElementById("import-translation").value = translation;
    
    document.getElementById("news-import-modal").style.display = "flex";
    
    setTimeout(() => {
        document.getElementById("import-meaning").focus();
    }, 150);
}

function closeAllModals() {
    document.getElementById("edit-vocab-modal").style.display = "none";
    document.getElementById("news-import-modal").style.display = "none";
    activeEditId = null;
}

// --- Text-to-Speech (TTS) Voice Utilities ---
function speakWord(text) {
    if (!text) return;
    
    // Cancel any active Speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    
    // Try to find a nice English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith("en-") && v.name.includes("Google"));
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// --- Toast Notifications Manager ---
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    
    toast.className = `toast toast-${type}`;
    
    const icon = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span>${escapeHTML(message)}</span>
        <button class="toast-close">&times;</button>
    `;
    
    container.appendChild(toast);
    
    // Close click handler
    toast.querySelector(".toast-close").addEventListener("click", () => {
        removeToast(toast);
    });
    
    // Auto remove
    setTimeout(() => {
        removeToast(toast);
    }, 3500);
}

function removeToast(toast) {
    toast.classList.add("toast-fade-out");
    toast.addEventListener("animationend", () => {
        toast.remove();
    });
}

// --- Helper Functions ---
function translateTag(tagKey) {
    const dict = {
        "Idiom": "이디엄",
        "Business": "비즈니스",
        "Casual": "일상회화",
        "Grammar": "문법",
        "Pronunciation": "발음",
        "Academic": "학술",
        "News": "뉴스 단어",
        "Other": "기타"
    };
    return dict[tagKey] || tagKey;
}

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --- Live Translator Controller ---
let isTranslatorInitialized = false;
let translatorSourceLang = "en";
let translatorTargetLang = "ko";
let translationTimeout = null;

function initTranslator() {
    if (isTranslatorInitialized) return;
    isTranslatorInitialized = true;
    
    const srcTextArea = document.getElementById("src-text");
    const tgtTextDiv = document.getElementById("tgt-text");
    const swapBtn = document.getElementById("btn-swap-lang");
    const srcLabel = document.getElementById("lang-src-label");
    const tgtLabel = document.getElementById("lang-tgt-label");
    const speakSrcBtn = document.getElementById("btn-speak-src");
    const speakTgtBtn = document.getElementById("btn-speak-tgt");
    const clearSrcBtn = document.getElementById("btn-clear-src");
    const charCountSpan = document.getElementById("src-char-count");
    const copyTgtBtn = document.getElementById("btn-copy-tgt");
    const addVocabBtn = document.getElementById("btn-add-translated-to-vocab");

    // Clear initial state
    srcTextArea.value = "";
    tgtTextDiv.textContent = "번역 결과가 여기에 표시됩니다...";
    tgtTextDiv.classList.add("placeholder-active");
    charCountSpan.textContent = "0 / 1000";

    srcTextArea.addEventListener("input", () => {
        const text = srcTextArea.value;
        if (text.length > 1000) {
            srcTextArea.value = text.slice(0, 1000);
        }
        charCountSpan.textContent = `${srcTextArea.value.length} / 1000`;
        
        clearTimeout(translationTimeout);
        if (!srcTextArea.value.trim()) {
            tgtTextDiv.textContent = "번역 결과가 여기에 표시됩니다...";
            tgtTextDiv.classList.add("placeholder-active");
            return;
        }
        
        tgtTextDiv.textContent = "입력 대기 중...";
        tgtTextDiv.classList.add("placeholder-active");
        translationTimeout = setTimeout(performTranslation, 600);
    });

    swapBtn.addEventListener("click", () => {
        // Swap values
        const tempLang = translatorSourceLang;
        translatorSourceLang = translatorTargetLang;
        translatorTargetLang = tempLang;

        // Swap labels
        if (translatorSourceLang === "en") {
            srcLabel.textContent = "영어 (English)";
            srcLabel.classList.add("active");
            tgtLabel.textContent = "한국어 (Korean)";
            tgtLabel.classList.remove("active");
            srcTextArea.placeholder = "여기에 영어 텍스트를 입력하세요 (자동 번역)...";
        } else {
            srcLabel.textContent = "한국어 (Korean)";
            srcLabel.classList.add("active");
            tgtLabel.textContent = "영어 (English)";
            tgtLabel.classList.remove("active");
            srcTextArea.placeholder = "여기에 한글 텍스트를 입력하세요 (자동 번역)...";
        }

        // Swap contents
        const srcText = srcTextArea.value;
        const tgtText = tgtTextDiv.classList.contains("placeholder-active") ? "" : tgtTextDiv.textContent;

        srcTextArea.value = tgtText;
        charCountSpan.textContent = `${srcTextArea.value.length} / 1000`;

        if (srcText) {
            tgtTextDiv.textContent = srcText;
            tgtTextDiv.classList.remove("placeholder-active");
        } else {
            tgtTextDiv.textContent = "번역 결과가 여기에 표시됩니다...";
            tgtTextDiv.classList.add("placeholder-active");
        }
        
        if (srcTextArea.value.trim()) {
            performTranslation();
        }
    });

    clearSrcBtn.addEventListener("click", () => {
        srcTextArea.value = "";
        tgtTextDiv.textContent = "번역 결과가 여기에 표시됩니다...";
        tgtTextDiv.classList.add("placeholder-active");
        charCountSpan.textContent = "0 / 1000";
        window.speechSynthesis.cancel();
    });

    copyTgtBtn.addEventListener("click", () => {
        const text = tgtTextDiv.textContent;
        if (!text || tgtTextDiv.classList.contains("placeholder-active")) {
            showToast("복사할 번역 결과가 없습니다.", "error");
            return;
        }
        
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast("번역 결과를 클립보드에 복사했습니다!", "success");
            })
            .catch(err => {
                console.error("Copy failed:", err);
                showToast("복사에 실패했습니다.", "error");
            });
    });

    speakSrcBtn.addEventListener("click", () => {
        const text = srcTextArea.value.trim();
        if (!text) return;
        
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = translatorSourceLang === "en" ? "en-US" : "ko-KR";
        window.speechSynthesis.speak(utterance);
    });

    speakTgtBtn.addEventListener("click", () => {
        const text = tgtTextDiv.textContent;
        if (!text || tgtTextDiv.classList.contains("placeholder-active")) return;
        
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = translatorTargetLang === "en" ? "en-US" : "ko-KR";
        window.speechSynthesis.speak(utterance);
    });

    addVocabBtn.addEventListener("click", () => {
        const srcText = srcTextArea.value.trim();
        const tgtText = tgtTextDiv.classList.contains("placeholder-active") ? "" : tgtTextDiv.textContent.trim();
        
        if (!srcText || !tgtText) {
            showToast("번역된 단어나 문장이 존재해야 단어장에 추가할 수 있습니다.", "error");
            return;
        }

        // Determine which is English and which is Korean
        let englishPhrase = "";
        let koreanMeaning = "";

        if (translatorSourceLang === "en") {
            englishPhrase = srcText;
            koreanMeaning = tgtText;
        } else {
            englishPhrase = tgtText;
            koreanMeaning = srcText;
        }

        // Switch to add-word view
        switchView("add-word");

        // Prefill elements
        document.getElementById("vocab-word").value = englishPhrase;
        document.getElementById("vocab-meaning").value = koreanMeaning;
        document.getElementById("vocab-context").value = "학습 번역기에서 연동";

        // Show guide toast
        showToast("번역된 어휘가 성공적으로 연동되었습니다. 🔍 자동 완성 버튼을 눌러보세요!", "success");

        // Focus meaning
        setTimeout(() => {
            document.getElementById("vocab-meaning").focus();
        }, 150);
    });
}

async function performTranslation() {
    const text = document.getElementById("src-text").value.trim();
    const tgtTextDiv = document.getElementById("tgt-text");
    if (!text) return;
    
    tgtTextDiv.textContent = "번역 중...";
    tgtTextDiv.classList.add("placeholder-active");
    
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${translatorSourceLang}|${translatorTargetLang}`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            if (data && data.responseData) {
                let result = data.responseData.translatedText;
                if (result && result.toLowerCase().includes("mymemory")) {
                    tgtTextDiv.textContent = "번역 실패 (API 한도 초과 또는 오류)";
                } else {
                    tgtTextDiv.textContent = result;
                    tgtTextDiv.classList.remove("placeholder-active");
                }
            }
        } else {
            tgtTextDiv.textContent = "번역 실패 (서버 연결 오류)";
        }
    } catch (err) {
        console.error("Translation error:", err);
        tgtTextDiv.textContent = "번역 오류가 발생했습니다.";
    }
}
