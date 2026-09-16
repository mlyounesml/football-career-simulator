/**
 * FOOTBALL PLAYER CAREER SIMULATOR - REALISTIC PRO ENGINE
 * 20% Deep Football Realism + 80% Unpredictable RNG Luck
 * Real Trophies Tracking, Injuries, Slumps, Ballon d'Or, World Cup, and Season Recaps
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CLUBS DATABASE WITH REAL LEAGUES & COMPETITIONS
  // ==========================================
  const CLUBS = [
    // Tier 1: World Elite Giants
    { 
      id: 'real_madrid', nameEn: 'REAL MADRID', nameAr: 'ريال مدريد', 
      countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 1, 
      leagueEn: 'La Liga', leagueAr: 'الدوري الإسباني', 
      cupEn: 'Copa del Rey', cupAr: 'كأس ملك إسبانيا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#ffffff', c2: '#1e3a8a', text: 'RM' 
    },
    { 
      id: 'man_city', nameEn: 'MANCHESTER CITY', nameAr: 'مانشستر سيتي', 
      countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, 
      leagueEn: 'Premier League', leagueAr: 'الدوري الإنجليزي الممتاز', 
      cupEn: 'FA Cup', cupAr: 'كأس الاتحاد الإنجليزي',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#6ee7b7', c2: '#0284c7', text: 'MC' 
    },
    { 
      id: 'bayern', nameEn: 'BAYERN MUNICH', nameAr: 'بايرن ميونخ', 
      countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 1, 
      leagueEn: 'Bundesliga', leagueAr: 'الدوري الألماني', 
      cupEn: 'DFB-Pokal', cupAr: 'كأس ألمانيا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#dc2626', c2: '#ffffff', text: 'FCB' 
    },
    { 
      id: 'barcelona', nameEn: 'BARCELONA', nameAr: 'برشلونة', 
      countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 1, 
      leagueEn: 'La Liga', leagueAr: 'الدوري الإسباني', 
      cupEn: 'Copa del Rey', cupAr: 'كأس ملك إسبانيا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#991b1b', c2: '#1e3a8a', text: 'FCB' 
    },
    { 
      id: 'psg', nameEn: 'PARIS SG', nameAr: 'باريس سان جيرمان', 
      countryEn: 'FRANCE', countryAr: 'فرنسا', flag: '🇫🇷', tier: 1, 
      leagueEn: 'Ligue 1', leagueAr: 'الدوري الفرنسي', 
      cupEn: 'Coupe de France', cupAr: 'كأس فرنسا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#1e293b', c2: '#ef4444', text: 'PSG' 
    },
    { 
      id: 'arsenal', nameEn: 'ARSENAL', nameAr: 'أرسنال', 
      countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, 
      leagueEn: 'Premier League', leagueAr: 'الدوري الإنجليزي الممتاز', 
      cupEn: 'FA Cup', cupAr: 'كأس الاتحاد الإنجليزي',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#ef4444', c2: '#ffffff', text: 'AFC' 
    },
    { 
      id: 'liverpool', nameEn: 'LIVERPOOL', nameAr: 'ليفربول', 
      countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, 
      leagueEn: 'Premier League', leagueAr: 'الدوري الإنجليزي الممتاز', 
      cupEn: 'FA Cup', cupAr: 'كأس الاتحاد الإنجليزي',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#b91c1c', c2: '#facc15', text: 'LFC' 
    },
    { 
      id: 'inter', nameEn: 'INTER MILAN', nameAr: 'إنتر ميلان', 
      countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 1, 
      leagueEn: 'Serie A', leagueAr: 'الدوري الإيطالي', 
      cupEn: 'Coppa Italia', cupAr: 'كأس إيطاليا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#1d4ed8', c2: '#000000', text: 'IM' 
    },

    // Tier 2: European Contenders & Giants
    { 
      id: 'dortmund', nameEn: 'DORTMUND', nameAr: 'بوروسيا دورتموند', 
      countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 2, 
      leagueEn: 'Bundesliga', leagueAr: 'الدوري الألماني', 
      cupEn: 'DFB-Pokal', cupAr: 'كأس ألمانيا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#facc15', c2: '#000000', text: 'BVB' 
    },
    { 
      id: 'atletico', nameEn: 'ATLÉTICO MADRID', nameAr: 'أتلتيكو مدريد', 
      countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 2, 
      leagueEn: 'La Liga', leagueAr: 'الدوري الإسباني', 
      cupEn: 'Copa del Rey', cupAr: 'كأس ملك إسبانيا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#dc2626', c2: '#1d4ed8', text: 'ATM' 
    },
    { 
      id: 'juventus', nameEn: 'JUVENTUS', nameAr: 'يوفنتوس', 
      countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 2, 
      leagueEn: 'Serie A', leagueAr: 'الدوري الإيطالي', 
      cupEn: 'Coppa Italia', cupAr: 'كأس إيطاليا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#000000', c2: '#ffffff', text: 'JUV' 
    },
    { 
      id: 'chelsea', nameEn: 'CHELSEA', nameAr: 'تشيلسي', 
      countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, 
      leagueEn: 'Premier League', leagueAr: 'الدوري الإنجليزي الممتاز', 
      cupEn: 'FA Cup', cupAr: 'كأس الاتحاد الإنجليزي',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#1d4ed8', c2: '#ffffff', text: 'CFC' 
    },
    { 
      id: 'benfica', nameEn: 'BENFICA', nameAr: 'بنفيكا', 
      countryEn: 'PORTUGAL', countryAr: 'البرتغال', flag: '🇵🇹', tier: 2, 
      leagueEn: 'Primeira Liga', leagueAr: 'الدوري البرتغالي', 
      cupEn: 'Taça de Portugal', cupAr: 'كأس البرتغال',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#dc2626', c2: '#ffffff', text: 'SLB' 
    },
    { 
      id: 'sporting', nameEn: 'SPORTING CP', nameAr: 'سبورتينغ لشبونة', 
      countryEn: 'PORTUGAL', countryAr: 'البرتغال', flag: '🇵🇹', tier: 2, 
      leagueEn: 'Primeira Liga', leagueAr: 'الدوري البرتغالي', 
      cupEn: 'Taça de Portugal', cupAr: 'كأس البرتغال',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#047857', c2: '#ffffff', text: 'SCP' 
    },
    { 
      id: 'ajax', nameEn: 'AJAX', nameAr: 'أياكس أمستردام', 
      countryEn: 'NETHERLANDS', countryAr: 'هولندا', flag: '🇳🇱', tier: 2, 
      leagueEn: 'Eredivisie', leagueAr: 'الدوري الهولندي', 
      cupEn: 'KNVB Cup', cupAr: 'كأس هولندا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#ffffff', c2: '#dc2626', text: 'AFCA' 
    },
    { 
      id: 'leverkusen', nameEn: 'LEVERKUSEN', nameAr: 'باير ليفركوزن', 
      countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 2, 
      leagueEn: 'Bundesliga', leagueAr: 'الدوري الألماني', 
      cupEn: 'DFB-Pokal', cupAr: 'كأس ألمانيا',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#b91c1c', c2: '#000000', text: 'B04' 
    },

    // Tier 3: Competitive Mid-Tier & Regional Powerhouses
    { 
      id: 'genk', nameEn: 'GENK', nameAr: 'جينك', 
      countryEn: 'BELGIUM', countryAr: 'بلجيكا', flag: '🇧🇪', tier: 3, 
      leagueEn: 'Belgian Pro League', leagueAr: 'الدوري البلجيكي الممتاز', 
      cupEn: 'Belgian Cup', cupAr: 'كأس بلجيكا',
      contEn: 'UEFA Conference League', contAr: 'دوري المؤتمر الأوروبي',
      c1: '#1d4ed8', c2: '#ffffff', text: 'GNK' 
    },
    { 
      id: 'panathinaikos', nameEn: 'PANATHINAIKOS', nameAr: 'باناتينايكوس', 
      countryEn: 'GREECE', countryAr: 'اليونان', flag: '🇬🇷', tier: 3, 
      leagueEn: 'Super League Greece', leagueAr: 'الدوري اليوناني الممتاز', 
      cupEn: 'Greek Football Cup', cupAr: 'كأس اليونان',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#15803d', c2: '#ffffff', text: 'PAO' 
    },
    { 
      id: 'celtic', nameEn: 'CELTIC', nameAr: 'سيلتيك', 
      countryEn: 'SCOTLAND', countryAr: 'إسكتلندا', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', tier: 3, 
      leagueEn: 'Scottish Premiership', leagueAr: 'الدوري الإسكتلندي', 
      cupEn: 'Scottish Cup', cupAr: 'كأس إسكتلندا',
      contEn: 'UEFA Champions League', contAr: 'دوري أبطال أوروبا',
      c1: '#16a34a', c2: '#ffffff', text: 'CEL' 
    },
    { 
      id: 'galatasaray', nameEn: 'GALATASARAY', nameAr: 'غلطة سراي', 
      countryEn: 'TURKEY', countryAr: 'تركيا', flag: '🇹🇷', tier: 3, 
      leagueEn: 'Süper Lig', leagueAr: 'الدوري التركي', 
      cupEn: 'Turkish Cup', cupAr: 'كأس تركيا',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#b91c1c', c2: '#f59e0b', text: 'GS' 
    },
    { 
      id: 'sevilla', nameEn: 'SEVILLA', nameAr: 'إشبيلية', 
      countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 3, 
      leagueEn: 'La Liga', leagueAr: 'الدوري الإسباني', 
      cupEn: 'Copa del Rey', cupAr: 'كأس ملك إسبانيا',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#ffffff', c2: '#dc2626', text: 'SFC' 
    },

    // Tier 4: Historic Incubators & Starter Clubs
    { 
      id: 'dinamo_zagreb', nameEn: 'DINAMO ZAGREB', nameAr: 'دينامو زغرب', 
      countryEn: 'CROATIA', countryAr: 'كرواتيا', flag: '🇭🇷', tier: 4, 
      leagueEn: 'HNL', leagueAr: 'الدوري الكرواتي الممتاز', 
      cupEn: 'Croatian Cup', cupAr: 'كأس كرواتيا',
      contEn: 'UEFA Conference League', contAr: 'دوري المؤتمر الأوروبي',
      c1: '#1d4ed8', c2: '#ffffff', text: 'DZ' 
    },
    { 
      id: 'santos', nameEn: 'SANTOS FC', nameAr: 'سانتوس', 
      countryEn: 'BRAZIL', countryAr: 'البرازيل', flag: '🇧🇷', tier: 4, 
      leagueEn: 'Brasileirão', leagueAr: 'الدوري البرازيلي', 
      cupEn: 'Copa do Brasil', cupAr: 'كأس البرازيل',
      contEn: 'Copa Libertadores', contAr: 'كوبا ليبرتادوريس',
      c1: '#ffffff', c2: '#000000', text: 'SFC' 
    },
    { 
      id: 'boca_juniors', nameEn: 'BOCA JUNIORS', nameAr: 'بوكا جونيورز', 
      countryEn: 'ARGENTINA', countryAr: 'الأرجنتين', flag: '🇦🇷', tier: 4, 
      leagueEn: 'Primera División', leagueAr: 'الدوري الأرجنتيني', 
      cupEn: 'Copa Argentina', cupAr: 'كأس الأرجنتين',
      contEn: 'Copa Libertadores', contAr: 'كوبا ليبرتادوريس',
      c1: '#1e3a8a', c2: '#facc15', text: 'CABJ' 
    },
    { 
      id: 'anderlecht', nameEn: 'ANDERLECHT', nameAr: 'أندرلخت', 
      countryEn: 'BELGIUM', countryAr: 'بلجيكا', flag: '🇧🇪', tier: 4, 
      leagueEn: 'Belgian Pro League', leagueAr: 'الدوري البلجيكي الممتاز', 
      cupEn: 'Belgian Cup', cupAr: 'كأس بلجيكا',
      contEn: 'UEFA Conference League', contAr: 'دوري المؤتمر الأوروبي',
      c1: '#6b21a8', c2: '#ffffff', text: 'RSCA' 
    },

    // Arab & International Powerhouses
    { 
      id: 'al_hilal', nameEn: 'AL HILAL', nameAr: 'الهلال السعودي', 
      countryEn: 'SAUDI ARABIA', countryAr: 'السعودية', flag: '🇸🇦', tier: 2, 
      leagueEn: 'Saudi Pro League', leagueAr: 'دوري روشن السعودي', 
      cupEn: 'King Cup', cupAr: 'كأس خادم الحرمين الشريفين',
      contEn: 'AFC Champions League', contAr: 'دوري أبطال آسيا',
      c1: '#1d4ed8', c2: '#ffffff', text: 'HIL' 
    },
    { 
      id: 'al_nassr', nameEn: 'AL NASSR', nameAr: 'النصر السعودي', 
      countryEn: 'SAUDI ARABIA', countryAr: 'السعودية', flag: '🇸🇦', tier: 2, 
      leagueEn: 'Saudi Pro League', leagueAr: 'دوري روشن السعودي', 
      cupEn: 'King Cup', cupAr: 'كأس خادم الحرمين الشريفين',
      contEn: 'AFC Champions League', contAr: 'دوري أبطال آسيا',
      c1: '#facc15', c2: '#1e3a8a', text: 'NAS' 
    },
    { 
      id: 'al_ahly', nameEn: 'AL AHLY', nameAr: 'الأهلي المصري', 
      countryEn: 'EGYPT', countryAr: 'مصر', flag: '🇪🇬', tier: 2, 
      leagueEn: 'Egyptian Premier League', leagueAr: 'الدوري المصري الممتاز', 
      cupEn: 'Egypt Cup', cupAr: 'كأس مصر',
      contEn: 'CAF Champions League', contAr: 'دوري أبطال أفريقيا',
      c1: '#dc2626', c2: '#ffffff', text: 'ASC' 
    },
    { 
      id: 'inter_miami', nameEn: 'INTER MIAMI', nameAr: 'إنتر ميامي', 
      countryEn: 'USA', countryAr: 'أمريكا', flag: '🇺🇸', tier: 3, 
      leagueEn: 'MLS Cup', leagueAr: 'كأس الدوري الأمريكي', 
      cupEn: 'US Open Cup', cupAr: 'كأس أمريكا المفتوحة',
      contEn: 'CONCACAF Champions Cup', contAr: 'دوري أبطال الكونكاكاف',
      c1: '#f472b6', c2: '#000000', text: 'MIA' 
    }
  ];

  // ==========================================
  // 2. VECTOR CREST GENERATOR
  // ==========================================
  function generateCrestSVG(club, size = '100%') {
    return `
      <svg class="crest-svg" viewBox="0 0 100 100" style="width:${size}; height:${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-${club.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${club.c1}" />
            <stop offset="100%" stop-color="${club.c2}" />
          </linearGradient>
          <filter id="shadow-${club.id}" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.35"/>
          </filter>
        </defs>
        <path d="M50 5 L88 20 C88 62 50 95 50 95 C50 95 12 62 12 20 Z" 
              fill="url(#grad-${club.id})" 
              stroke="#0f172a" 
              stroke-width="4" 
              filter="url(#shadow-${club.id})"/>
        <path d="M50 12 L80 24 C80 57 50 86 50 86 C50 86 20 57 20 24 Z" 
              fill="none" 
              stroke="#ffffff" 
              stroke-width="2.5" 
              stroke-opacity="0.85"/>
        <text x="50" y="56" 
              font-family="Montserrat, Arial, sans-serif" 
              font-size="20" 
              font-weight="900" 
              fill="${club.c1 === '#ffffff' ? '#0f172a' : '#ffffff'}" 
              text-anchor="middle" 
              dominant-baseline="central">
          ${club.text}
        </text>
      </svg>
    `;
  }

  // ==========================================
  // 3. SOUND SYNTHESIZER
  // ==========================================
  class SoundManager {
    constructor() {
      this.audioCtx = null;
      this.enabled = true;
    }

    init() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.09);
    }

    playTransfer() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.14, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.06 + 0.18);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.19);
      });
    }

    playTrophy() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const chord = [523.25, 659.25, 783.99, 1046.5];
      chord.forEach((freq) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      });
    }

    playSad() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const notes = [400, 360, 320, 260];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.2);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.22);
      });
    }

    playWhistle() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.setValueAtTime(2800, now + 0.07);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  }

  // ==========================================
  // 4. CONFETTI ENGINE
  // ==========================================
  class ConfettiEngine {
    constructor() {
      this.canvas = document.getElementById('confettiCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.active = false;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(count = 60) {
      const colors = ['#facc15', '#ec4899', '#3b82f6', '#10b981', '#ffffff', '#a855f7'];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: this.canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.8) * 16,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          life: 1.0,
          decay: Math.random() * 0.015 + 0.012
        });
      }
      if (!this.active) {
        this.active = true;
        this.render();
      }
    }

    render() {
      if (!this.active) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rotSpeed;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.life);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        requestAnimationFrame(() => this.render());
      } else {
        this.active = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // ==========================================
  // 5. REGIONS & POSITIONS
  // ==========================================
  const REGIONS = [
    { nameEn: 'SOUTH AMERICA', nameAr: 'أمريكا الجنوبية', flag: '🌎', countriesAr: ['البرازيل', 'الأرجنتين', 'أوروغواي', 'كولومبيا'], countriesEn: ['BRAZIL', 'ARGENTINA', 'URUGUAY', 'COLOMBIA'] },
    { nameEn: 'EUROPE', nameAr: 'أوروبا', flag: '🇪🇺', countriesAr: ['فرنسا', 'إسبانيا', 'إنجلترا', 'ألمانيا', 'البرتغال', 'هولندا', 'إيطاليا'], countriesEn: ['FRANCE', 'SPAIN', 'ENGLAND', 'GERMANY', 'PORTUGAL', 'NETHERLANDS', 'ITALY'] },
    { nameEn: 'AFRICA', nameAr: 'أفريقيا', flag: '🌍', countriesAr: ['مصر', 'المغرب', 'السنغال', 'الجزائر', 'نيجيريا'], countriesEn: ['EGYPT', 'MOROCCO', 'SENEGAL', 'ALGERIA', 'NIGERIA'] },
    { nameEn: 'ASIA', nameAr: 'آسيا', flag: '🌏', countriesAr: ['السعودية', 'اليابان', 'كوريا الجنوبية'], countriesEn: ['SAUDI ARABIA', 'JAPAN', 'SOUTH KOREA'] },
    { nameEn: 'NORTH AMERICA', nameAr: 'أمريكا الشمالية', flag: '🌎', countriesAr: ['أمريكا', 'المكسيك'], countriesEn: ['USA', 'MEXICO'] }
  ];

  const POSITIONS = [
    { titleEn: 'STRIKER', titleAr: 'مهاجم صريح', icon: '⚽', statEn: 'GOALS', statAr: 'أهداف' },
    { titleEn: 'WINGER', titleAr: 'جناح هجومي', icon: '⚡', statEn: 'G/A', statAr: 'أهداف وصناعة' },
    { titleEn: 'ATTACKING MID', titleAr: 'صانع ألعاب', icon: '🎯', statEn: 'ASSISTS', statAr: 'تمريرات حاسمة' },
    { titleEn: 'CENTRAL MID', titleAr: 'لاعب وسط', icon: '🪄', statEn: 'CONTRIBUTIONS', statAr: 'مساهمات وسط' },
    { titleEn: 'CENTRE BACK', titleAr: 'قلب دفاع', icon: '🛡️', statEn: 'CLEAN SHEETS', statAr: 'شباك نظيفة' },
    { titleEn: 'FULL BACK', titleAr: 'ظهير عصري', icon: '💨', statEn: 'TACKLES', statAr: 'تدخلات وعرضيات' },
    { titleEn: 'GOALKEEPER', titleAr: 'حارس مرمى', icon: '🧤', statEn: 'SAVES/CS', statAr: 'تصديات وشباك نظيفة' }
  ];

  const MILESTONES = [18, 20, 22, 24, 26, 28, 30, 32, 34, 'R', 'M'];

  // ==========================================
  // 6. CAREER SIMULATION ENGINE
  // ==========================================
  class CareerGame {
    constructor() {
      this.sound = new SoundManager();
      this.confetti = new ConfettiEngine();
      this.lang = 'ar';
      this.milestoneIndex = 0;
      this.player = null;
      this.careerHistory = [];
      this.allTrophies = []; // [{ nameAr, nameEn, icon, clubName, age }]
      this.ageClubMap = {};
      this.totalStatScore = 0;
      this.totalEarnings = 0;
      this.peakMarketValue = 0;
      this.currentOffers = [];

      this.initDOMElements();
      this.bindEvents();
      this.startNewCareer();
    }

    initDOMElements() {
      this.dom = {
        trophyCabinetBtn: document.getElementById('trophyCabinetBtn'),
        trophyBadgeCount: document.getElementById('trophyBadgeCount'),
        langToggleBtn: document.getElementById('langToggleBtn'),
        langLabel: document.getElementById('langLabel'),
        audioToggleBtn: document.getElementById('audioToggleBtn'),
        audioIcon: document.getElementById('audioIcon'),
        restartGameBtn: document.getElementById('restartGameBtn'),
        miniCrest: document.getElementById('miniCrest'),
        miniClubName: document.getElementById('miniClubName'),
        miniClubCountry: document.getElementById('miniClubCountry'),
        miniSeasonTag: document.getElementById('miniSeasonTag'),
        timelineLadder: document.getElementById('timelineLadder'),
        ladderRows: document.querySelectorAll('.ladder-row'),
        playerRegion: document.getElementById('playerRegion'),
        playerPosition: document.getElementById('playerPosition'),
        playerAge: document.getElementById('playerAge'),
        playerValue: document.getElementById('playerValue'),
        valTrend: document.getElementById('valTrend'),
        currentTeamTitle: document.getElementById('currentTeamTitle'),
        currentTeamCrest: document.getElementById('currentTeamCrest'),
        currentTeamName: document.getElementById('currentTeamName'),
        currentTeamCountry: document.getElementById('currentTeamCountry'),
        currentSeasonBadge: document.getElementById('currentSeasonBadge'),
        eventBadgePill: document.getElementById('eventBadgePill'),
        eventBadgeIcon: document.getElementById('eventBadgeIcon'),
        eventBadgeText: document.getElementById('eventBadgeText'),
        narrativeBox: document.getElementById('narrativeBox'),
        narrativeText: document.getElementById('narrativeText'),
        offersGrid: document.getElementById('offersGrid'),
        actionBar: document.getElementById('actionBar'),
        stayBtn: document.getElementById('stayBtn'),
        stayClubName: document.getElementById('stayClubName'),
        ribbonTrophiesCounter: document.getElementById('ribbonTrophiesCounter'),
        trophiesLabel: document.getElementById('trophiesLabel'),
        trophiesCount: document.getElementById('trophiesCount'),
        goalsLabel: document.getElementById('goalsLabel'),
        goalsCount: document.getElementById('goalsCount'),
        earningsLabel: document.getElementById('earningsLabel'),
        careerEarnings: document.getElementById('careerEarnings'),

        // Season Recap Modal
        seasonModal: document.getElementById('seasonModal'),
        recapSeasonYear: document.getElementById('recapSeasonYear'),
        recapClubHeader: document.getElementById('recapClubHeader'),
        recapEventBanner: document.getElementById('recapEventBanner'),
        recapEventIcon: document.getElementById('recapEventIcon'),
        recapEventTitle: document.getElementById('recapEventTitle'),
        recapEventDetail: document.getElementById('recapEventDetail'),
        recapStatCount: document.getElementById('recapStatCount'),
        recapStatLabel: document.getElementById('recapStatLabel'),
        recapRating: document.getElementById('recapRating'),
        recapRatingLabel: document.getElementById('recapRatingLabel'),
        recapValueChange: document.getElementById('recapValueChange'),
        recapValueChangeLabel: document.getElementById('recapValueChangeLabel'),
        recapTrophiesTitle: document.getElementById('recapTrophiesTitle'),
        recapTrophiesList: document.getElementById('recapTrophiesList'),
        continueCareerBtn: document.getElementById('continueCareerBtn'),
        continueCareerText: document.getElementById('continueCareerText'),

        // Cabinet Modal
        cabinetModal: document.getElementById('cabinetModal'),
        closeCabinetBtn: document.getElementById('closeCabinetBtn'),
        cabinetList: document.getElementById('cabinetList'),

        // Final Modal
        careerModal: document.getElementById('careerModal'),
        modalStatusBadge: document.getElementById('modalStatusBadge'),
        modalTitle: document.getElementById('modalTitle'),
        modalSubtitle: document.getElementById('modalSubtitle'),
        finalRegion: document.getElementById('finalRegion'),
        finalPosition: document.getElementById('finalPosition'),
        finalRating: document.getElementById('finalRating'),
        finalSeasons: document.getElementById('finalSeasons'),
        finalSeasonsLabel: document.getElementById('finalSeasonsLabel'),
        finalTrophies: document.getElementById('finalTrophies'),
        finalTrophiesLabel: document.getElementById('finalTrophiesLabel'),
        finalGoals: document.getElementById('finalGoals'),
        finalGoalTitle: document.getElementById('finalGoalTitle'),
        finalPeakVal: document.getElementById('finalPeakVal'),
        finalPeakLabel: document.getElementById('finalPeakLabel'),
        finalTrophiesListTitle: document.getElementById('finalTrophiesListTitle'),
        finalTrophiesTags: document.getElementById('finalTrophiesTags'),
        journeyTitle: document.getElementById('journeyTitle'),
        clubsTrail: document.getElementById('clubsTrail'),
        managementTitleText: document.getElementById('managementTitleText'),
        managementReveal: document.getElementById('managementReveal'),
        managerCrest: document.getElementById('managerCrest'),
        managerClubName: document.getElementById('managerClubName'),
        managerRoleTitle: document.getElementById('managerRoleTitle'),
        playAgainBtn: document.getElementById('playAgainBtn'),
        playAgainText: document.getElementById('playAgainText'),
        shareCareerBtn: document.getElementById('shareCareerBtn'),
        shareCareerText: document.getElementById('shareCareerText'),
        ageLabelText: document.getElementById('ageLabelText'),
        retireLabelTag: document.getElementById('retireLabelTag'),
        manageLabelTag: document.getElementById('manageLabelTag')
      };
    }

    bindEvents() {
      this.dom.langToggleBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.toggleLanguage();
      });

      this.dom.audioToggleBtn.addEventListener('click', () => {
        const enabled = this.sound.toggle();
        this.dom.audioIcon.textContent = enabled ? '🔊' : '🔇';
      });

      this.dom.restartGameBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.startNewCareer();
      });

      this.dom.stayBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.executeSeasonProgression(false, this.player.currentClub);
      });

      this.dom.continueCareerBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.dom.seasonModal.classList.remove('active');
        this.advanceToNextMilestone();
      });

      // Trophy Cabinet Open/Close
      this.dom.trophyCabinetBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.openTrophyCabinet();
      });
      this.dom.ribbonTrophiesCounter.addEventListener('click', () => {
        this.sound.playClick();
        this.openTrophyCabinet();
      });
      this.dom.closeCabinetBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.dom.cabinetModal.classList.remove('active');
      });

      // Final Modal Actions
      this.dom.playAgainBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.dom.careerModal.classList.remove('active');
        this.startNewCareer();
      });

      this.dom.shareCareerBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.copyCareerResume();
      });
    }

    toggleLanguage() {
      this.lang = this.lang === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = this.lang;
      document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
      this.dom.langLabel.textContent = this.lang === 'ar' ? 'EN' : 'عربي';

      this.applyStaticTranslations();
      this.renderPlayerHUD();
      this.renderTimelineLadder();

      const currentMilestone = MILESTONES[this.milestoneIndex];
      if (typeof currentMilestone === 'number') {
        this.generateMilestoneEvents();
      } else if (currentMilestone === 'R') {
        this.handleRetirementPhase();
      } else if (currentMilestone === 'M') {
        this.handleManagementPhase();
      }
    }

    applyStaticTranslations() {
      const isAr = this.lang === 'ar';
      this.dom.ageLabelText.textContent = isAr ? 'العمر' : 'AGE';
      this.dom.currentTeamTitle.textContent = isAr ? 'الفريق الحالي' : 'CURRENT TEAM';
      this.dom.retireLabelTag.textContent = isAr ? 'اعتزال' : 'RETIRING';
      this.dom.manageLabelTag.textContent = isAr ? 'تدريب' : 'MANAGEMENT';
      this.dom.trophiesLabel.textContent = isAr ? 'البطولات (عرض 🔍)' : 'TROPHIES (VIEW 🔍)';
      this.dom.goalsLabel.textContent = isAr ? 'الأهداف / المساهمات' : 'GOALS / CS';
      this.dom.earningsLabel.textContent = isAr ? 'إجمالي الأرباح' : 'CAREER EARNINGS';
      this.dom.continueCareerText.textContent = isAr ? 'متابعة المسيرة إلى السن التالي ➡️' : 'CONTINUE CAREER ➡️';
      this.dom.modalStatusBadge.textContent = isAr ? 'نهاية المسيرة الكروية' : 'CAREER COMPLETED';
      this.dom.modalSubtitle.textContent = isAr ? 'رحلة تاريخية حافلة بالإنجازات والبطولات' : 'A journey through football history';
      this.dom.finalSeasonsLabel.textContent = isAr ? 'مواسم' : 'SEASONS';
      this.dom.finalTrophiesLabel.textContent = isAr ? 'بطولات 🏆' : 'TROPHIES 🏆';
      this.dom.finalPeakLabel.textContent = isAr ? 'أعلى قيمة سوقية' : 'PEAK VALUE';
      this.dom.finalTrophiesListTitle.textContent = isAr ? '🏆 البطولات المحققة عبر التاريخ:' : '🏆 TROPHIES WON IN CAREER:';
      this.dom.journeyTitle.textContent = isAr ? 'مسيرة الأندية' : 'CLUBS JOURNEY';
      this.dom.managementTitleText.textContent = isAr ? 'المسيرة التدريبية بعد الاعتزال 👔' : 'MANAGERIAL CALLING 👔';
      this.dom.playAgainText.textContent = isAr ? '⚡ بدء مسيرة لاعب جديد' : '⚡ PLAY NEW CAREER';
      this.dom.shareCareerText.textContent = isAr ? '📋 نسخ السيرة الذاتية للمسيرة' : '📋 COPY CAREER RESUME';
    }

    startNewCareer() {
      const regionObj = REGIONS[Math.floor(Math.random() * REGIONS.length)];
      const countryIdx = Math.floor(Math.random() * regionObj.countriesAr.length);
      const positionObj = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];

      // Realism: Age 18 starts at incubator / Tier 3 or 4 club
      const starterClubs = CLUBS.filter(c => c.tier >= 3);
      const startingClub = starterClubs[Math.floor(Math.random() * starterClubs.length)];
      
      // Realistic starting market value: €0.8M to €2.5M
      const startingValue = Math.round((0.8 + Math.random() * 1.7) * 10) / 10;

      this.player = {
        regionObj: regionObj,
        countryAr: regionObj.countriesAr[countryIdx],
        countryEn: regionObj.countriesEn[countryIdx],
        positionObj: positionObj,
        currentClub: startingClub,
        age: 18,
        marketValue: startingValue,
        injuriesCount: 0,
        superSeasonsCount: 0
      };

      this.milestoneIndex = 0;
      this.allTrophies = [];
      this.careerHistory = [];
      this.ageClubMap = { 18: startingClub };
      this.totalStatScore = 0;
      this.totalEarnings = startingValue * 0.3;
      this.peakMarketValue = startingValue;

      // Clear slots
      for (let age = 18; age <= 34; age += 2) {
        const slot = document.getElementById(`slot-${age}`);
        if (slot) {
          const crestEl = slot.querySelector('.slot-crest');
          const nameEl = slot.querySelector('.slot-name');
          if (crestEl) crestEl.innerHTML = '';
          if (nameEl) nameEl.textContent = '---';
        }
      }

      this.dom.careerModal.classList.remove('active');
      this.dom.seasonModal.classList.remove('active');
      this.dom.cabinetModal.classList.remove('active');
      this.applyStaticTranslations();
      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
      this.sound.playWhistle();
    }

    getClubName(club) {
      return this.lang === 'ar' ? club.nameAr : club.nameEn;
    }

    getClubCountry(club) {
      return this.lang === 'ar' ? club.countryAr : club.countryEn;
    }

    renderPlayerHUD() {
      const p = this.player;
      const isAr = this.lang === 'ar';

      this.dom.playerRegion.textContent = isAr ? `${p.regionObj.flag} ${p.countryAr}` : `${p.regionObj.flag} ${p.countryEn}`;
      this.dom.playerPosition.textContent = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      this.dom.playerAge.textContent = p.age;
      this.dom.playerValue.textContent = this.formatCurrency(p.marketValue);

      // Mini Header Club
      this.dom.miniCrest.innerHTML = generateCrestSVG(p.currentClub, '22px');
      this.dom.miniClubName.textContent = this.getClubName(p.currentClub);
      this.dom.miniClubCountry.textContent = this.getClubCountry(p.currentClub);
      const seasonYear = 2024 + (this.milestoneIndex * 2);
      this.dom.miniSeasonTag.textContent = isAr ? `${seasonYear} م${this.milestoneIndex + 1}` : `${seasonYear} S${this.milestoneIndex + 1}`;

      // Current Team Card
      this.dom.currentTeamCrest.innerHTML = generateCrestSVG(p.currentClub, '30px');
      this.dom.currentTeamName.textContent = this.getClubName(p.currentClub);
      this.dom.currentTeamCountry.textContent = this.getClubCountry(p.currentClub);
      this.dom.currentSeasonBadge.textContent = isAr ? `${seasonYear} م${this.milestoneIndex + 1}` : `${seasonYear} S${this.milestoneIndex + 1}`;

      // Stay button label
      const stayClub = this.getClubName(p.currentClub);
      if (isAr) {
        this.dom.stayBtn.innerHTML = `<span>🛡️ البقاء وتجديد العقد مع <strong>${stayClub}</strong></span>`;
      } else {
        this.dom.stayBtn.innerHTML = `<span>🛡️ Stay & Extend with <strong>${stayClub}</strong></span>`;
      }

      // Bottom Ribbon
      this.dom.trophyBadgeCount.textContent = this.allTrophies.length;
      this.dom.trophiesCount.textContent = `🏆 ${this.allTrophies.length}`;
      this.dom.goalsCount.textContent = `${p.positionObj.icon} ${this.totalStatScore}`;
      this.dom.careerEarnings.textContent = `💰 ${this.formatCurrency(this.totalEarnings)}`;
    }

    renderTimelineLadder() {
      this.dom.ladderRows.forEach((row) => {
        const rowAge = row.dataset.age;
        const rowIdx = MILESTONES.indexOf(isNaN(rowAge) ? rowAge : parseInt(rowAge));

        row.classList.remove('active', 'completed');
        if (rowIdx < this.milestoneIndex) {
          row.classList.add('completed');
        } else if (rowIdx === this.milestoneIndex) {
          row.classList.add('active');
        }

        if (!isNaN(rowAge)) {
          const ageNum = parseInt(rowAge);
          const club = this.ageClubMap[ageNum];
          const slot = document.getElementById(`slot-${ageNum}`);
          if (slot && club) {
            const crestEl = slot.querySelector('.slot-crest');
            const nameEl = slot.querySelector('.slot-name');
            if (crestEl) crestEl.innerHTML = generateCrestSVG(club, '18px');
            if (nameEl) nameEl.textContent = this.getClubName(club);
          }
        }
      });
    }

    formatCurrency(val) {
      if (val >= 1.0) {
        return `€ ${val.toFixed(1)}M`;
      } else {
        const k = Math.round(val * 1000);
        return `€ ${k}K`;
      }
    }

    // ==========================================
    // 7. MULTI-CLUB TRANSFER CHOICES GENERATOR
    // ==========================================
    generateMilestoneEvents() {
      const currentMilestone = MILESTONES[this.milestoneIndex];

      if (currentMilestone === 'R') {
        this.handleRetirementPhase();
        return;
      }

      if (currentMilestone === 'M') {
        this.handleManagementPhase();
        return;
      }

      const isAr = this.lang === 'ar';
      const age = this.player.age;
      const currentClub = this.player.currentClub;
      let eligibleClubs = CLUBS.filter(c => c.id !== currentClub.id);

      // 20% Realism filtering:
      if (age >= 32) {
        // Twilight years: Saudi / MLS / Former incubators / Veterans
        eligibleClubs.sort(() => Math.random() - 0.5);
      } else if (this.player.marketValue >= 45) {
        // High profile: Giant clubs
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else if (this.player.marketValue <= 8) {
        // Low/Slump: Mid-table or Tier 3/4
        eligibleClubs = eligibleClubs.filter(c => c.tier >= 2);
      }

      eligibleClubs.sort(() => Math.random() - 0.5);

      // Present 2 or 3 distinct clubs
      const offerCount = Math.random() > 0.4 ? 3 : 2;
      const chosenClubs = eligibleClubs.slice(0, offerCount);

      let badgeTitle = isAr ? `🔥 ${offerCount} أندية تتنافس لضمك` : `🔥 ${offerCount} CLUBS IN TRANSFER WAR`;
      let narrative = isAr
        ? 'نافذة الانتقالات مشتعلة! وصلتك عروض رسمية من أندية ترغب في التوقيع معك فوراً.'
        : 'The transfer window is buzzing! Official contract bids have arrived for your signature.';

      this.dom.eventBadgeText.textContent = badgeTitle;
      this.dom.narrativeText.textContent = narrative;

      this.currentOffers = chosenClubs.map(club => {
        const offerVal = this.calculateRealisticOffer(club);
        const wage = Math.max(0.4, Math.round((offerVal * 0.14) * 10) / 10);
        return {
          club: club,
          marketVal: offerVal,
          wageDisplay: `€${wage}M / ${isAr ? 'سنة' : 'YR'}`
        };
      });

      this.dom.offersGrid.innerHTML = '';
      this.currentOffers.forEach(offer => {
        const card = document.createElement('div');
        card.className = 'offer-card';
        const clubName = this.getClubName(offer.club);
        const clubCountry = this.getClubCountry(offer.club);
        const btnText = isAr ? 'اختر النادي ✍️' : 'SIGN CONTRACT ✍️';

        card.innerHTML = `
          <div class="offer-left">
            <div class="crest-container large">${generateCrestSVG(offer.club, '30px')}</div>
            <div class="offer-details">
              <span class="offer-club-name">${clubName}</span>
              <span class="offer-country">${offer.club.flag} ${clubCountry}</span>
            </div>
          </div>
          <div class="offer-right">
            <span class="offer-contract">${offer.wageDisplay}</span>
            <span class="offer-select-badge">${btnText}</span>
          </div>
        `;

        card.addEventListener('click', () => {
          this.sound.playTransfer();
          this.executeSeasonProgression(true, offer.club, offer.marketVal);
        });

        this.dom.offersGrid.appendChild(card);
      });

      this.dom.actionBar.style.display = 'flex';
    }

    calculateRealisticOffer(club) {
      const age = this.player.age;
      let val = this.player.marketValue;

      // Realism: Age Curve
      if (age <= 22) val *= (1.2 + Math.random() * 0.35);
      else if (age <= 28) val *= (1.1 + Math.random() * 0.25);
      else if (age <= 30) val *= (0.95 + Math.random() * 0.15);
      else val *= (0.7 + Math.random() * 0.2); // Decline past 30

      if (club.tier === 1) val *= 1.35;
      else if (club.tier === 2) val *= 1.1;
      else val *= 0.85;

      return Math.max(0.6, Math.round(val * 10) / 10);
    }

    // ==========================================
    // 8. DEEP REALISTIC & RNG SEASON SIMULATION
    // ==========================================
    executeSeasonProgression(transferred, targetClub, proposedVal = null) {
      const isAr = this.lang === 'ar';
      const age = this.player.age;
      const prevClub = this.player.currentClub;
      this.player.currentClub = targetClub;

      // Update Age-Club Map for ladder
      this.ageClubMap[age] = targetClub;

      // Determine 80% RNG Luck Event
      const rngRoll = Math.random();
      let eventType = 'SOLID_STARTER';

      // Probabilities:
      if (rngRoll < 0.18) {
        eventType = 'SUPER_SEASON'; // 18% Wonderkid / Monster season
        this.player.superSeasonsCount++;
      } else if (rngRoll < 0.36) {
        eventType = 'INJURY_CRISIS'; // 18% Injury misfortune
        this.player.injuriesCount++;
      } else if (rngRoll < 0.50) {
        eventType = 'BENCH_CONFLICT'; // 14% Tactical slump / bench
      } else if (rngRoll < 0.62) {
        eventType = 'HEARTBREAK_FINAL'; // 12% Dramatic finals loss
      } else {
        eventType = 'SOLID_STARTER'; // 38% Normal consistent season
      }

      // Check for Major International Tournament (Ages 22, 26, 30)
      const isWorldCupYear = (age === 22 || age === 26 || age === 30);
      let wonWorldCup = false;
      if (isWorldCupYear && Math.random() < 0.16) {
        wonWorldCup = true;
      }

      // Stats calculation (realistic goals/clean sheets for 2 years)
      let statsCount = 0;
      let matchRating = 7.2;
      let valDelta = 0;
      let trophiesWonThisSeason = [];

      const isAttacker = ['STRIKER', 'WINGER'].includes(this.player.positionObj.titleEn);
      const isMid = ['ATTACKING MID', 'CENTRAL MID', 'FULL BACK'].includes(this.player.positionObj.titleEn);

      // Event-specific resolution
      if (eventType === 'SUPER_SEASON') {
        matchRating = (8.2 + Math.random() * 0.9).toFixed(1);
        statsCount = isAttacker ? Math.floor(40 + Math.random() * 26) : (isMid ? Math.floor(22 + Math.random() * 16) : Math.floor(28 + Math.random() * 12));
        valDelta = Math.round(this.player.marketValue * (0.35 + Math.random() * 0.35) * 10) / 10;
        
        // High trophy chances
        if (targetClub.tier === 1) {
          trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇' });
          if (Math.random() < 0.55) {
            trophiesWonThisSeason.push({ nameAr: targetClub.contAr, nameEn: targetClub.contEn, icon: '🏆' });
          }
        } else if (targetClub.tier === 2) {
          if (Math.random() < 0.5) trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈' });
          if (Math.random() < 0.35) trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇' });
        } else {
          if (Math.random() < 0.4) trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈' });
        }

        // Ballon d'Or check
        if (targetClub.tier <= 2 && matchRating >= 8.6 && Math.random() < 0.45) {
          trophiesWonThisSeason.push({ nameAr: 'الكرة الذهبية كأفضل لاعب في العالم', nameEn: "Ballon d'Or World Best Player", icon: '🌕' });
        }

      } else if (eventType === 'INJURY_CRISIS') {
        matchRating = (6.0 + Math.random() * 0.6).toFixed(1);
        statsCount = isAttacker ? Math.floor(4 + Math.random() * 8) : Math.floor(2 + Math.random() * 6);
        valDelta = -Math.round(this.player.marketValue * (0.22 + Math.random() * 0.18) * 10) / 10;
        // Injuries result in Zero Trophies (موسم صفري)

      } else if (eventType === 'BENCH_CONFLICT') {
        matchRating = (6.3 + Math.random() * 0.5).toFixed(1);
        statsCount = isAttacker ? Math.floor(7 + Math.random() * 9) : Math.floor(4 + Math.random() * 7);
        valDelta = -Math.round(this.player.marketValue * (0.15 + Math.random() * 0.12) * 10) / 10;

      } else if (eventType === 'HEARTBREAK_FINAL') {
        matchRating = (7.5 + Math.random() * 0.6).toFixed(1);
        statsCount = isAttacker ? Math.floor(22 + Math.random() * 15) : Math.floor(12 + Math.random() * 10);
        valDelta = Math.round(this.player.marketValue * 0.05 * 10) / 10;
        // Lost the final in penalties!

      } else { // SOLID_STARTER
        matchRating = (7.3 + Math.random() * 0.5).toFixed(1);
        statsCount = isAttacker ? Math.floor(20 + Math.random() * 18) : (isMid ? Math.floor(11 + Math.random() * 10) : Math.floor(15 + Math.random() * 10));
        
        // Age decay check
        if (age >= 30) {
          valDelta = -Math.round(this.player.marketValue * 0.1 * 10) / 10;
        } else {
          valDelta = Math.round(this.player.marketValue * (0.08 + Math.random() * 0.15) * 10) / 10;
        }

        // Realistic Club trophy chance
        let prob = targetClub.tier === 1 ? 0.45 : (targetClub.tier === 2 ? 0.25 : 0.12);
        if (Math.random() < prob) {
          trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇' });
        } else if (Math.random() < prob * 0.8) {
          trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈' });
        }
      }

      // Add World Cup if won
      if (wonWorldCup) {
        trophiesWonThisSeason.push({
          nameAr: `كأس العالم مع ${this.player.countryAr}`,
          nameEn: `FIFA World Cup with ${this.player.countryEn}`,
          icon: '🌍'
        });
        valDelta += 15;
      }

      // Update Player State
      if (proposedVal && transferred) {
        this.player.marketValue = Math.max(0.5, Math.round((proposedVal + valDelta) * 10) / 10);
      } else {
        this.player.marketValue = Math.max(0.5, Math.round((this.player.marketValue + valDelta) * 10) / 10);
      }

      if (this.player.marketValue > this.peakMarketValue) {
        this.peakMarketValue = this.player.marketValue;
      }

      this.totalStatScore += statsCount;
      this.totalEarnings += Math.max(0.3, this.player.marketValue * 0.22);

      // Record Trophies with details
      trophiesWonThisSeason.forEach(t => {
        this.allTrophies.push({
          nameAr: t.nameAr,
          nameEn: t.nameEn,
          icon: t.icon,
          clubName: this.getClubName(targetClub),
          age: age
        });
      });

      // Sound effect
      if (trophiesWonThisSeason.length > 0) {
        this.sound.playTrophy();
        this.confetti.burst(65);
      } else if (eventType === 'INJURY_CRISIS' || eventType === 'BENCH_CONFLICT') {
        this.sound.playSad();
      }

      // Populate & Open Season Recap Modal
      this.showSeasonRecapModal({
        age: age,
        club: targetClub,
        eventType: eventType,
        statsCount: statsCount,
        matchRating: matchRating,
        valDelta: valDelta,
        trophies: trophiesWonThisSeason
      });
    }

    // ==========================================
    // 9. SEASON RECAP MODAL
    // ==========================================
    showSeasonRecapModal(data) {
      const isAr = this.lang === 'ar';
      const seasonYear = 2024 + (this.milestoneIndex * 2);
      
      this.dom.recapSeasonYear.textContent = isAr 
        ? `موسم ${seasonYear} - ${seasonYear + 2} (عمر ${data.age} سنة)` 
        : `Season ${seasonYear} - ${seasonYear + 2} (Age ${data.age})`;
      this.dom.recapClubHeader.textContent = `${this.getClubName(data.club)} ${data.club.flag}`;

      // Banner Event Details
      this.dom.recapEventBanner.className = 'recap-event-banner';
      if (data.eventType === 'SUPER_SEASON') {
        this.dom.recapEventBanner.classList.add('success');
        this.dom.recapEventIcon.textContent = '🚀';
        this.dom.recapEventTitle.textContent = isAr ? 'موسم استثنائي وتوهج عالمي! ⭐' : 'Sensational World-Class Season! ⭐';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'مستويات مذهلة أذهلت الجماهير والنقاد ووضعتك في مصاف أفضل لاعبي العالم.' 
          : 'Spectacular performances captivated fans and placed you among world elite.';
      } else if (data.eventType === 'INJURY_CRISIS') {
        this.dom.recapEventBanner.classList.add('injury');
        this.dom.recapEventIcon.textContent = '🚑';
        this.dom.recapEventTitle.textContent = isAr ? 'لعنة الإصابات القاسية! 💔' : 'Cruel Injury Nightmare! 💔';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'تمزق عضلي وإصابة في الركبة أبعدتك أشهراً عن الملاعب وتسببت في هبوط قيمتك السوقية.' 
          : 'Severe knee and muscle injuries sidelined you for months, hurting form and value.';
      } else if (data.eventType === 'BENCH_CONFLICT') {
        this.dom.recapEventBanner.classList.add('injury');
        this.dom.recapEventIcon.textContent = '🪑';
        this.dom.recapEventTitle.textContent = isAr ? 'أزمة دكة البدلاء وخلاف مع المدرب! ⚠️' : 'Benched & Tactical Squeeze! ⚠️';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'المدرب الجديد اعتمد على خطة أخرى ووضعك على الدكة، مما أضعف تأثيرك هذا الموسم.' 
          : 'A tactical change by the head coach saw you restricted to substitute appearances.';
      } else if (data.eventType === 'HEARTBREAK_FINAL') {
        this.dom.recapEventBanner.classList.add('warning');
        this.dom.recapEventIcon.textContent = '💔';
        this.dom.recapEventTitle.textContent = isAr ? 'دراما وخسارة مؤلمة في النهائي! 🥈' : 'Agonizing Final Defeat! 🥈';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'قدمت أداءً قتالياً لكن فريقك خسر النهائي بركلات الترجيح ليخرج بموسم صفري.' 
          : 'A valiant cup run ended in tears after a penalty shootout heartbreak in the final.';
      } else {
        this.dom.recapEventIcon.textContent = '⚽';
        this.dom.recapEventTitle.textContent = isAr ? 'موسم أساسي مستقر ومتوازن 🛡️' : 'Solid & Consistent Starter Role 🛡️';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'مشاركات منتظمة مع الفريق ومساهمات جيدة في مختلف البطولات المحلية.' 
          : 'Steady appearances and positive contributions across domestic competitions.';
      }

      // Stats
      this.dom.recapStatCount.textContent = data.statsCount;
      this.dom.recapStatLabel.textContent = isAr ? this.player.positionObj.statAr : this.player.positionObj.statEn;
      this.dom.recapRating.textContent = `${data.matchRating} ⭐`;
      
      const deltaText = data.valDelta >= 0 ? `+€${data.valDelta}M` : `-€${Math.abs(data.valDelta)}M`;
      this.dom.recapValueChange.textContent = deltaText;
      this.dom.recapValueChange.className = `recap-stat-val ${data.valDelta >= 0 ? 'highlight' : 'negative'}`;

      // Trophies List
      this.dom.recapTrophiesList.innerHTML = '';
      if (data.trophies.length > 0) {
        data.trophies.forEach(t => {
          const pill = document.createElement('div');
          pill.className = 'trophy-item-pill';
          const tName = isAr ? t.nameAr : t.nameEn;
          pill.innerHTML = `<span>${t.icon}</span> <span>${tName}</span>`;
          this.dom.recapTrophiesList.appendChild(pill);
        });
      } else {
        this.dom.recapTrophiesList.innerHTML = `
          <span class="no-trophy-text">
            ${isAr ? '❌ موسم صفري: لم يحقق الفريق أي لقب رسمي هذا الموسم.' : '❌ Zero Trophies: The team ended the campaign without silverware.'}
          </span>
        `;
      }

      this.dom.seasonModal.classList.add('active');
    }

    advanceToNextMilestone() {
      this.milestoneIndex++;
      const nextMilestone = MILESTONES[this.milestoneIndex];

      if (typeof nextMilestone === 'number') {
        this.player.age = nextMilestone;
        if (!this.ageClubMap[nextMilestone]) {
          this.ageClubMap[nextMilestone] = this.player.currentClub;
        }
      }

      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
    }

    // ==========================================
    // 10. TROPHY CABINET VIEWER
    // ==========================================
    openTrophyCabinet() {
      const isAr = this.lang === 'ar';
      this.dom.cabinetList.innerHTML = '';

      if (this.allTrophies.length === 0) {
        this.dom.cabinetList.innerHTML = `
          <p class="empty-cabinet-text">
            ${isAr ? 'لم تحقق أي بطولة حتى الآن.. قاتل مع فريقك في المواسم القادمة!' : 'No trophies won yet.. Keep fighting in upcoming seasons!'}
          </p>
        `;
      } else {
        this.allTrophies.forEach((t, i) => {
          const row = document.createElement('div');
          row.className = 'cabinet-trophy-row';
          const tName = isAr ? t.nameAr : t.nameEn;
          row.innerHTML = `
            <div class="cabinet-trophy-icon">${t.icon}</div>
            <div class="cabinet-trophy-info">
              <span class="cabinet-trophy-name">${tName}</span>
              <span class="cabinet-trophy-details">${t.clubName} • ${isAr ? `عمر ${t.age} سنة` : `Age ${t.age}`}</span>
            </div>
          `;
          this.dom.cabinetList.appendChild(row);
        });
      }

      this.dom.cabinetModal.classList.add('active');
    }

    // ==========================================
    // 11. RETIREMENT PHASE ('R')
    // ==========================================
    handleRetirementPhase() {
      const isAr = this.lang === 'ar';
      this.dom.eventBadgeText.textContent = isAr ? '👑 حفل اعتزال أسطوري' : '👑 RETIREMENT CEREMONY';
      this.dom.narrativeText.textContent = isAr
        ? 'بعد مسيرة ملحمية مليئة بالتقلبات والبطولات، حان وقت تعليق الحذاء وبدء رحلة التدريب!'
        : 'After an epic rollercoaster journey of glory and adversity, you hang up your boots for management!';
      this.dom.offersGrid.innerHTML = '';
      this.dom.actionBar.style.display = 'none';

      const retireCard = document.createElement('div');
      retireCard.className = 'offer-card';
      retireCard.style.justifyContent = 'center';
      retireCard.style.background = 'var(--primary-yellow)';
      retireCard.innerHTML = `
        <span style="font-family: var(--font-arabic); font-weight: 900; font-size: 1rem; color: #000;">
          ${isAr ? 'الانتقال إلى عالم التدريب 👔 ➡️' : 'PROCEED TO MANAGEMENT 👔 ➡️'}
        </span>
      `;
      retireCard.addEventListener('click', () => {
        this.sound.playClick();
        this.milestoneIndex++;
        this.renderTimelineLadder();
        this.handleManagementPhase();
      });
      this.dom.offersGrid.appendChild(retireCard);
      this.confetti.burst(50);
    }

    // ==========================================
    // 12. MANAGEMENT & HONEST LEGACY EVALUATION ('M')
    // ==========================================
    handleManagementPhase() {
      const isAr = this.lang === 'ar';
      this.sound.playTrophy();
      this.confetti.burst(90);

      // Honest Legacy Rank (No pure flattery / 'تطبيل')
      let rating = '';
      const trophiesCount = this.allTrophies.length;
      const peakVal = this.peakMarketValue;
      const injuries = this.player.injuriesCount;

      if (trophiesCount >= 8 && peakVal >= 90) {
        rating = isAr ? 'الأعظم في التاريخ (THE GOAT) 🐐' : 'THE GOAT 🐐';
      } else if (trophiesCount >= 4 && peakVal >= 60) {
        rating = isAr ? 'أسطورة كروية عالمية 🌟' : 'WORLD CLASS LEGEND 🌟';
      } else if (injuries >= 3 && trophiesCount <= 2) {
        rating = isAr ? 'موهبة دمرتها الإصابات 🩹' : 'INJURY CURSED TALENT 🩹';
      } else if (this.allTrophies.length === 0 && peakVal <= 20) {
        rating = isAr ? 'موهبة ضائعة لم تكتمل 📉' : 'WONDERKID BUST 📉';
      } else if (this.careerHistory.length >= 4) {
        rating = isAr ? 'رحالة كروي مكافح 🌍' : 'ICONIC JOURNEYMAN 🌍';
      } else {
        rating = isAr ? 'بطل الجماهير والمحبوب ⭐' : 'CULT HERO ⭐';
      }

      // Managerial Offer based on reality
      let managerClub;
      let managerTitle = isAr ? 'المدير الفني والمدرب العام' : 'HEAD COACH & TACTICAL MASTERMIND';

      if (trophiesCount >= 4 || peakVal >= 65) {
        const eliteClubs = CLUBS.filter(c => c.tier === 1);
        managerClub = eliteClubs[Math.floor(Math.random() * eliteClubs.length)];
      } else {
        managerClub = this.player.currentClub;
      }

      // Populate Modal Elements
      this.dom.modalTitle.textContent = isAr ? `مسيرة ${rating}` : `THE LEGACY OF ${rating}`;
      this.dom.finalRegion.textContent = isAr ? `${this.player.regionObj.flag} ${this.player.countryAr}` : `${this.player.regionObj.flag} ${this.player.countryEn}`;
      this.dom.finalPosition.textContent = isAr ? this.player.positionObj.titleAr : this.player.positionObj.titleEn;
      this.dom.finalRating.textContent = rating;
      this.dom.finalSeasons.textContent = '10';
      this.dom.finalTrophies.textContent = trophiesCount;
      this.dom.finalGoalTitle.textContent = isAr ? this.player.positionObj.statAr : this.player.positionObj.statEn;
      this.dom.finalGoals.textContent = this.totalStatScore;
      this.dom.finalPeakVal.textContent = this.formatCurrency(this.peakMarketValue);

      // Populate Trophies Tags in End Card
      this.dom.finalTrophiesTags.innerHTML = '';
      if (this.allTrophies.length === 0) {
        this.dom.finalTrophiesTags.innerHTML = `
          <span style="font-size:0.7rem; color:#64748b;">
            ${isAr ? 'لم تتوج بأي بطولة رسمية في مسيرتك.' : 'No official trophies won during your career.'}
          </span>
        `;
      } else {
        // Group trophies by name
        const counts = {};
        this.allTrophies.forEach(t => {
          const key = isAr ? t.nameAr : t.nameEn;
          counts[key] = (counts[key] || { count: 0, icon: t.icon });
          counts[key].count++;
        });

        Object.keys(counts).forEach(k => {
          const chip = document.createElement('div');
          chip.className = 'final-trophy-chip';
          chip.innerHTML = `<span>${counts[k].icon}</span> <span>${k} ${counts[k].count > 1 ? `x${counts[k].count}` : ''}</span>`;
          this.dom.finalTrophiesTags.appendChild(chip);
        });
      }

      // Clubs Trail
      this.dom.clubsTrail.innerHTML = '';
      const uniqueClubs = [];
      Object.values(this.ageClubMap).forEach(c => {
        if (!uniqueClubs.find(u => u.id === c.id)) {
          uniqueClubs.push(c);
        }
      });
      uniqueClubs.forEach(club => {
        const badge = document.createElement('div');
        badge.className = 'trail-badge';
        badge.innerHTML = `<span>${club.flag}</span> <span>${this.getClubName(club)}</span>`;
        this.dom.clubsTrail.appendChild(badge);
      });

      // Managerial Calling
      this.dom.managerCrest.innerHTML = generateCrestSVG(managerClub, '30px');
      this.dom.managerClubName.textContent = this.getClubName(managerClub);
      this.dom.managerRoleTitle.textContent = managerTitle;

      this.dom.careerModal.classList.add('active');
    }

    copyCareerResume() {
      const isAr = this.lang === 'ar';
      const p = this.player;
      const pos = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      const country = isAr ? p.countryAr : p.countryEn;
      const statTitle = isAr ? p.positionObj.statAr : p.positionObj.statEn;
      const mgrClub = this.dom.managerClubName.textContent;
      const rank = this.dom.finalRating.textContent;

      let trophyListStr = this.allTrophies.map(t => `${t.icon} ${isAr ? t.nameAr : t.nameEn}`).join(', ');
      if (!trophyListStr) trophyListStr = isAr ? 'صفر بطولات' : 'Zero Trophies';

      const resume = isAr ? `
⚽ سيرة مسيرة لاعب كرة القدم الواقعية ⚽
👤 المركز: ${pos} (${country})
🏆 إجمالي البطولات (${this.allTrophies.length}): ${trophyListStr}
📊 المساهمات (${statTitle}): ${this.totalStatScore}
💎 أعلى قيمة سوقية: ${this.formatCurrency(this.peakMarketValue)}
💰 إجمالي الأرباح: ${this.formatCurrency(this.totalEarnings)}
👔 النادي بعد التدريب: ${mgrClub}
🌟 التصنيف الحقيقي: ${rank}

العب الآن: https://mlyounesml.github.io/football-career-simulator/
      `.trim() : `
⚽ REALISTIC FOOTBALL PLAYER CAREER SIMULATOR ⚽
👤 Position: ${pos} (${country})
🏆 Trophies Won (${this.allTrophies.length}): ${trophyListStr}
📊 Total Stats (${statTitle}): ${this.totalStatScore}
💎 Peak Market Value: ${this.formatCurrency(this.peakMarketValue)}
💰 Total Earnings: ${this.formatCurrency(this.totalEarnings)}
👔 Management Club: ${mgrClub}
🌟 Realistic Legacy: ${rank}

Play now: https://mlyounesml.github.io/football-career-simulator/
      `.trim();

      navigator.clipboard.writeText(resume).then(() => {
        const originalText = this.dom.shareCareerText.textContent;
        this.dom.shareCareerText.textContent = isAr ? '✅ تم النسخ بنجاح!' : '✅ COPIED TO CLIPBOARD!';
        setTimeout(() => {
          this.dom.shareCareerText.textContent = originalText;
        }, 2500);
      }).catch(() => {
        alert(isAr ? 'تم نسخ السيرة الذاتية!' : 'Career resume copied!');
      });
    }
  }

  // Initialize Game on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.game = new CareerGame();
  });
})();
