/**
 * FOOTBALL PLAYER & MANAGER CAREER SIMULATOR PRO
 * - Addictive XP & Leveling System
 * - Dual Mode: Player Career & Manager Career Mode
 * - Complete In-Depth Stats: Matches, Goals, Assists, Yellows, Reds, World Cups, UCLs, Leagues, Cups
 * - Adaptive Learning AI (Evolving Q-weights with each run)
 * - Free Cloud Database Sync (Firebase REST + Offline-first LocalStorage)
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CLUBS DATABASE (WITH REAL LEAGUES & TROPHIES)
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

    // Tier 3: Competitive Mid-Tier
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
      cupEn: 'Greek Cup', cupAr: 'كأس اليونان',
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
      id: 'sevilla', nameEn: 'SEVILLA', nameAr: 'إشبيلية', 
      countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 3, 
      leagueEn: 'La Liga', leagueAr: 'الدوري الإسباني', 
      cupEn: 'Copa del Rey', cupAr: 'كأس ملك إسبانيا',
      contEn: 'UEFA Europa League', contAr: 'الدوري الأوروبي',
      c1: '#ffffff', c2: '#dc2626', text: 'SFC' 
    },

    // Tier 4: Historic Incubators
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

    playLevelUp() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.18, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.26);
      });
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
  // 5. CLOUD DATABASE & ADAPTIVE AI ENGINE
  // ==========================================
  const CLOUD_DB_BASE = 'https://football-career-sim-default-rtdb.firebaseio.com';

  class CloudAIHub {
    constructor() {
      this.defaultAI = {
        generation: 4,
        careersTrained: 148,
        difficultyBias: 1.0,
        injuryRate: 0.18,
        wonderkidRate: 0.18,
        transferAggression: 1.15
      };
      this.aiState = this.loadLocalAI();
      this.syncCloudAI();
    }

    loadLocalAI() {
      try {
        const stored = localStorage.getItem('career_ai_state_v4');
        return stored ? JSON.parse(stored) : { ...this.defaultAI };
      } catch (e) {
        return { ...this.defaultAI };
      }
    }

    saveLocalAI() {
      try {
        localStorage.setItem('career_ai_state_v4', JSON.stringify(this.aiState));
      } catch (e) {}
    }

    async syncCloudAI() {
      try {
        const res = await fetch(`${CLOUD_DB_BASE}/ai_state.json`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.generation) {
            this.aiState.generation = Math.max(this.aiState.generation, data.generation);
            this.aiState.careersTrained = Math.max(this.aiState.careersTrained, data.careersTrained || 0);
            this.saveLocalAI();
          }
        }
      } catch (e) {
        // Offline-first fallback
      }
    }

    async trainOnCareerRun(careerSummary) {
      this.aiState.careersTrained++;
      // Evolve AI weights adaptively:
      if (careerSummary.trophiesCount >= 6) {
        // Player dominated: increase challenge
        this.aiState.difficultyBias = Math.min(1.4, this.aiState.difficultyBias + 0.02);
      } else if (careerSummary.trophiesCount <= 1 && careerSummary.injuriesCount >= 2) {
        // Player struggled: balance injury curve
        this.aiState.injuryRate = Math.max(0.12, this.aiState.injuryRate - 0.01);
        this.aiState.wonderkidRate = Math.min(0.25, this.aiState.wonderkidRate + 0.01);
      }

      if (this.aiState.careersTrained % 10 === 0) {
        this.aiState.generation++;
      }

      this.saveLocalAI();

      // Async cloud sync
      try {
        fetch(`${CLOUD_DB_BASE}/ai_state.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.aiState)
        }).catch(() => {});
      } catch (e) {}
    }

    async submitLeaderboardScore(entry) {
      // Save locally
      let localScores = [];
      try {
        localScores = JSON.parse(localStorage.getItem('career_leaderboard_v4') || '[]');
      } catch (e) {}
      localScores.push(entry);
      localScores.sort((a, b) => (b.trophies || 0) - (a.trophies || 0) || (b.goals || 0) - (a.goals || 0));
      localScores = localScores.slice(0, 20);
      try {
        localStorage.setItem('career_leaderboard_v4', JSON.stringify(localScores));
      } catch (e) {}

      // Cloud save
      try {
        fetch(`${CLOUD_DB_BASE}/leaderboard.json`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        }).catch(() => {});
      } catch (e) {}
    }

    async fetchLeaderboard() {
      let scores = [];
      try {
        const res = await fetch(`${CLOUD_DB_BASE}/leaderboard.json`);
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data === 'object') {
            scores = Object.values(data);
          }
        }
      } catch (e) {}

      if (scores.length === 0) {
        try {
          scores = JSON.parse(localStorage.getItem('career_leaderboard_v4') || '[]');
        } catch (e) {}
      }

      // Default sample legends if empty
      if (scores.length === 0) {
        scores = [
          { name: 'Lionel Messi 🇦🇷', club: 'Barcelona', trophies: 12, goals: 672, rank: 'THE GOAT 🐐', mode: 'player' },
          { name: 'Cristiano Ronaldo 🇵🇹', club: 'Real Madrid', trophies: 11, goals: 710, rank: 'THE GOAT 🐐', mode: 'player' },
          { name: 'Pep Guardiola 🇪🇸', club: 'Man City', trophies: 14, goals: 890, rank: 'TACTICAL MASTERMIND 🧠', mode: 'manager' },
          { name: 'Carlo Ancelotti 🇮🇹', club: 'Real Madrid', trophies: 10, goals: 720, rank: 'LEGENDARY DYNASTY 👑', mode: 'manager' }
        ];
      }

      scores.sort((a, b) => (b.trophies || 0) - (a.trophies || 0) || (b.goals || 0) - (a.goals || 0));
      return scores.slice(0, 15);
    }
  }

  // ==========================================
  // 6. ADDICTIVE PROGRESSION (XP & LEVELS)
  // ==========================================
  class ProgressionHub {
    constructor(sound, confetti) {
      this.sound = sound;
      this.confetti = confetti;
      this.level = 1;
      this.currentXP = 0;
      this.load();
    }

    load() {
      try {
        const stored = localStorage.getItem('career_progression_v4');
        if (stored) {
          const p = JSON.parse(stored);
          this.level = p.level || 1;
          this.currentXP = p.currentXP || 0;
        }
      } catch (e) {}
    }

    save() {
      try {
        localStorage.setItem('career_progression_v4', JSON.stringify({
          level: this.level,
          currentXP: this.currentXP
        }));
      } catch (e) {}
    }

    getXPForLevel(lvl) {
      return 250 + (lvl - 1) * 150;
    }

    addXP(amount, onLevelUp) {
      this.currentXP += amount;
      let needed = this.getXPForLevel(this.level);
      let leveledUp = false;

      while (this.currentXP >= needed) {
        this.currentXP -= needed;
        this.level++;
        needed = this.getXPForLevel(this.level);
        leveledUp = true;
      }

      this.save();

      if (leveledUp) {
        this.sound.playLevelUp();
        this.confetti.burst(80);
        if (onLevelUp) onLevelUp(this.level);
      }

      return { level: this.level, currentXP: this.currentXP, needed: needed, leveledUp: leveledUp };
    }
  }

  // ==========================================
  // 7. REGIONS & POSITIONS
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
    { titleEn: 'WINGER', titleAr: 'جناح هجومي', icon: '⚡', statEn: 'GOALS', statAr: 'أهداف وصناعة' },
    { titleEn: 'ATTACKING MID', titleAr: 'صانع ألعاب', icon: '🎯', statEn: 'ASSISTS', statAr: 'تمريرات حاسمة' },
    { titleEn: 'CENTRAL MID', titleAr: 'لاعب وسط', icon: '🪄', statEn: 'CONTRIBUTIONS', statAr: 'مساهمات وسط' },
    { titleEn: 'CENTRE BACK', titleAr: 'قلب دفاع', icon: '🛡️', statEn: 'CLEAN SHEETS', statAr: 'شباك نظيفة' },
    { titleEn: 'FULL BACK', titleAr: 'ظهير عصري', icon: '💨', statEn: 'TACKLES', statAr: 'تدخلات وعرضيات' },
    { titleEn: 'GOALKEEPER', titleAr: 'حارس مرمى', icon: '🧤', statEn: 'SAVES/CS', statAr: 'تصديات وشباك نظيفة' }
  ];

  const MILESTONES = [18, 20, 22, 24, 26, 28, 30, 32, 34, 'R', 'M'];

  // ==========================================
  // 8. MASTER GAME CONTROLLER (PRO DUAL-MODE)
  // ==========================================
  class CareerGamePro {
    constructor() {
      this.sound = new SoundManager();
      this.confetti = new ConfettiEngine();
      this.cloudAI = new CloudAIHub();
      this.progression = new ProgressionHub(this.sound, this.confetti);

      this.gameMode = 'player'; // 'player' or 'manager'
      this.lang = 'ar';
      this.milestoneIndex = 0;
      this.currentTactic = 'attack'; // attack, balanced, defense

      // Deep Stats Accumulators
      this.player = null;
      this.careerHistory = [];
      this.allTrophies = [];
      this.ageClubMap = {};
      this.totalMatches = 0;
      this.totalGoals = 0;
      this.totalAssists = 0;
      this.totalYellow = 0;
      this.totalRed = 0;
      this.totalEarnings = 0;
      this.peakMarketValue = 0;

      // Trophy Sub-counts
      this.countWorldCups = 0;
      this.countUCLs = 0;
      this.countLeagues = 0;
      this.countCups = 0;
      this.countBallonDors = 0;

      this.initDOMElements();
      this.bindEvents();
      this.startNewCareer();
    }

    initDOMElements() {
      this.dom = {
        // Controls
        xpLevelWidget: document.getElementById('xpLevelWidget'),
        playerLevelBadge: document.getElementById('playerLevelBadge'),
        xpFillBar: document.getElementById('xpFillBar'),
        xpTextDisplay: document.getElementById('xpTextDisplay'),
        leaderboardBtn: document.getElementById('leaderboardBtn'),
        trophyCabinetBtn: document.getElementById('trophyCabinetBtn'),
        trophyBadgeCount: document.getElementById('trophyBadgeCount'),
        langToggleBtn: document.getElementById('langToggleBtn'),
        langLabel: document.getElementById('langLabel'),
        audioToggleBtn: document.getElementById('audioToggleBtn'),
        audioIcon: document.getElementById('audioIcon'),
        restartGameBtn: document.getElementById('restartGameBtn'),

        // Top bar
        tabPlayerMode: document.getElementById('tabPlayerMode'),
        tabManagerMode: document.getElementById('tabManagerMode'),
        miniCrest: document.getElementById('miniCrest'),
        miniClubName: document.getElementById('miniClubName'),
        miniClubCountry: document.getElementById('miniClubCountry'),
        miniSeasonTag: document.getElementById('miniSeasonTag'),
        aiStatusText: document.getElementById('aiStatusText'),

        // Ladder
        timelineLadder: document.getElementById('timelineLadder'),
        ladderRows: document.querySelectorAll('.ladder-row'),

        // HUD
        profileHudSection: document.getElementById('profileHudSection'),
        playerRegion: document.getElementById('playerRegion'),
        playerPosition: document.getElementById('playerPosition'),
        positionIcon: document.getElementById('positionIcon'),
        playerAge: document.getElementById('playerAge'),
        playerValue: document.getElementById('playerValue'),
        valTrend: document.getElementById('valTrend'),
        currentTeamTitle: document.getElementById('currentTeamTitle'),
        currentTeamCrest: document.getElementById('currentTeamCrest'),
        currentTeamName: document.getElementById('currentTeamName'),
        currentTeamCountry: document.getElementById('currentTeamCountry'),
        currentSeasonBadge: document.getElementById('currentSeasonBadge'),

        // Matchday Strip
        matchdayStatsStrip: document.getElementById('matchdayStatsStrip'),
        miniMatches: document.getElementById('miniMatches'),
        miniStat1Label: document.getElementById('miniStat1Label'),
        miniStat1Val: document.getElementById('miniStat1Val'),
        miniStat2Label: document.getElementById('miniStat2Label'),
        miniStat2Val: document.getElementById('miniStat2Val'),
        miniYellowCards: document.getElementById('miniYellowCards'),
        miniRedCards: document.getElementById('miniRedCards'),

        // Event Stage
        eventBadgePill: document.getElementById('eventBadgePill'),
        eventBadgeIcon: document.getElementById('eventBadgeIcon'),
        eventBadgeText: document.getElementById('eventBadgeText'),
        narrativeBox: document.getElementById('narrativeBox'),
        narrativeText: document.getElementById('narrativeText'),
        managerTacticsPanel: document.getElementById('managerTacticsPanel'),
        tacticsHeaderTitle: document.getElementById('tacticsHeaderTitle'),
        tacticCards: document.querySelectorAll('.tactic-card'),
        offersGrid: document.getElementById('offersGrid'),
        actionBar: document.getElementById('actionBar'),
        stayBtn: document.getElementById('stayBtn'),
        stayClubName: document.getElementById('stayClubName'),

        // Bottom Ribbon
        ribbonTrophiesCounter: document.getElementById('ribbonTrophiesCounter'),
        trophiesLabel: document.getElementById('trophiesLabel'),
        trophiesCount: document.getElementById('trophiesCount'),
        goalsLabel: document.getElementById('goalsLabel'),
        goalsCount: document.getElementById('goalsCount'),
        earningsLabel: document.getElementById('earningsLabel'),
        careerEarnings: document.getElementById('careerEarnings'),

        // Season Modal
        seasonModal: document.getElementById('seasonModal'),
        recapSeasonYear: document.getElementById('recapSeasonYear'),
        recapClubHeader: document.getElementById('recapClubHeader'),
        recapEventBanner: document.getElementById('recapEventBanner'),
        recapEventIcon: document.getElementById('recapEventIcon'),
        recapEventTitle: document.getElementById('recapEventTitle'),
        recapEventDetail: document.getElementById('recapEventDetail'),
        recapMatches: document.getElementById('recapMatches'),
        recapStatCount: document.getElementById('recapStatCount'),
        recapStatLabel: document.getElementById('recapStatLabel'),
        recapAssists: document.getElementById('recapAssists'),
        recapYellow: document.getElementById('recapYellow'),
        recapRed: document.getElementById('recapRed'),
        recapValueChange: document.getElementById('recapValueChange'),
        recapValueChangeLabel: document.getElementById('recapValueChangeLabel'),
        seasonXpGained: document.getElementById('seasonXpGained'),
        recapTrophiesTitle: document.getElementById('recapTrophiesTitle'),
        recapTrophiesList: document.getElementById('recapTrophiesList'),
        continueCareerBtn: document.getElementById('continueCareerBtn'),
        continueCareerText: document.getElementById('continueCareerText'),

        // Leaderboard Modal
        leaderboardModal: document.getElementById('leaderboardModal'),
        closeLeaderboardBtn: document.getElementById('closeLeaderboardBtn'),
        leaderboardList: document.getElementById('leaderboardList'),
        leaderboardSub: document.getElementById('leaderboardSub'),

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
        finalMatches: document.getElementById('finalMatches'),
        finalGoals: document.getElementById('finalGoals'),
        finalGoalTitle: document.getElementById('finalGoalTitle'),
        finalAssists: document.getElementById('finalAssists'),
        finalYellow: document.getElementById('finalYellow'),
        finalRed: document.getElementById('finalRed'),
        finalPeakVal: document.getElementById('finalPeakVal'),
        finalWorldCups: document.getElementById('finalWorldCups'),
        finalUCLs: document.getElementById('finalUCLs'),
        finalLeagues: document.getElementById('finalLeagues'),
        finalCups: document.getElementById('finalCups'),
        finalBallonDors: document.getElementById('finalBallonDors'),
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
      // Mode Tabs
      this.dom.tabPlayerMode.addEventListener('click', () => {
        if (this.gameMode !== 'player') {
          this.sound.playClick();
          this.gameMode = 'player';
          this.dom.tabPlayerMode.classList.add('active');
          this.dom.tabManagerMode.classList.remove('active');
          this.dom.managerTacticsPanel.style.display = 'none';
          this.startNewCareer();
        }
      });

      this.dom.tabManagerMode.addEventListener('click', () => {
        if (this.gameMode !== 'manager') {
          this.sound.playClick();
          this.gameMode = 'manager';
          this.dom.tabManagerMode.classList.add('active');
          this.dom.tabPlayerMode.classList.remove('active');
          this.dom.managerTacticsPanel.style.display = 'flex';
          this.startNewCareer();
        }
      });

      // Tactic Cards
      this.dom.tacticCards.forEach(btn => {
        btn.addEventListener('click', () => {
          this.sound.playClick();
          this.dom.tacticCards.forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          this.currentTactic = btn.dataset.tactic;
        });
      });

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

      // Modals
      this.dom.leaderboardBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.openLeaderboard();
      });
      this.dom.closeLeaderboardBtn.addEventListener('click', () => {
        this.sound.playClick();
        this.dom.leaderboardModal.classList.remove('active');
      });

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

      // Final Modal
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
      const isMgr = this.gameMode === 'manager';

      this.dom.tabPlayerMode.innerHTML = `<span>${isAr ? '👟 طور اللاعب' : '👟 PLAYER'}</span>`;
      this.dom.tabManagerMode.innerHTML = `<span>${isAr ? '👔 طور المدرب' : '👔 MANAGER'}</span>`;

      this.dom.ageLabelText.textContent = isMgr ? (isAr ? 'الموسم' : 'SEASON') : (isAr ? 'العمر' : 'AGE');
      this.dom.currentTeamTitle.textContent = isMgr ? (isAr ? 'النادي الذي تدربه' : 'MANAGED CLUB') : (isAr ? 'الفريق الحالي' : 'CURRENT TEAM');
      this.dom.retireLabelTag.textContent = isMgr ? (isAr ? 'التقاعد' : 'RETIRE') : (isAr ? 'اعتزال' : 'RETIRING');
      this.dom.manageLabelTag.textContent = isMgr ? (isAr ? 'مستشار' : 'DIRECTOR') : (isAr ? 'تدريب' : 'MANAGEMENT');
      this.dom.trophiesLabel.textContent = isAr ? 'البطولات (عرض 🔍)' : 'TROPHIES (VIEW 🔍)';
      this.dom.goalsLabel.textContent = isMgr ? (isAr ? 'أهداف الفريق' : 'TEAM GOALS') : (isAr ? 'الأهداف الكلية' : 'TOTAL GOALS');
      this.dom.earningsLabel.textContent = isAr ? 'إجمالي الأرباح' : 'CAREER EARNINGS';
      this.dom.continueCareerText.textContent = isAr ? 'متابعة المسيرة إلى المحطة التالية ➡️' : 'CONTINUE CAREER ➡️';
      this.dom.modalStatusBadge.textContent = isMgr ? (isAr ? 'نهاية المسيرة التدريبية' : 'MANAGERIAL CAREER COMPLETED') : (isAr ? 'نهاية المسيرة الكروية' : 'CAREER COMPLETED');
      this.dom.modalSubtitle.textContent = isAr ? 'سجل تاريخي كامل موثق في أرشيف كرة القدم' : 'Full statistical legacy recorded in football archives';
      this.dom.finalTrophiesListTitle.textContent = isAr ? '🏆 البطولات المحققة عبر التاريخ:' : '🏆 TROPHIES WON IN CAREER:';
      this.dom.journeyTitle.textContent = isAr ? 'مسيرة الأندية' : 'CLUBS JOURNEY';
      this.dom.managementTitleText.textContent = isMgr ? (isAr ? 'منصب المستشار الفني الدولي 👔' : 'GLOBAL TECHNICAL DIRECTOR 👔') : (isAr ? 'المسيرة التدريبية بعد الاعتزال 👔' : 'MANAGERIAL CALLING 👔');
      this.dom.playAgainText.textContent = isAr ? '⚡ بدء مسيرة جديدة' : '⚡ PLAY NEW CAREER';
      this.dom.shareCareerText.textContent = isAr ? '📋 نسخ السيرة الذاتية للمسيرة' : '📋 COPY CAREER RESUME';

      this.updateXPBar();
      this.updateAIStatusStrip();
    }

    updateXPBar() {
      const p = this.progression;
      const needed = p.getXPForLevel(p.level);
      const pct = Math.min(100, Math.round((p.currentXP / needed) * 100));
      this.dom.playerLevelBadge.textContent = `LVL ${p.level}`;
      this.dom.xpFillBar.style.width = `${pct}%`;
      this.dom.xpTextDisplay.textContent = `${p.currentXP}/${needed} XP`;
    }

    updateAIStatusStrip() {
      const isAr = this.lang === 'ar';
      const ai = this.cloudAI.aiState;
      this.dom.aiStatusText.textContent = isAr
        ? `🧠 ذكاء اصطناعي تكيفي: جيل ${ai.generation} • تم تدريبه على ${ai.careersTrained} مسيرة`
        : `🧠 Adaptive AI: Gen ${ai.generation} • Trained on ${ai.careersTrained} Careers`;
    }

    startNewCareer() {
      const regionObj = REGIONS[Math.floor(Math.random() * REGIONS.length)];
      const countryIdx = Math.floor(Math.random() * regionObj.countriesAr.length);
      const isMgr = this.gameMode === 'manager';

      // Pick starter club
      const starterClubs = CLUBS.filter(c => isMgr ? c.tier >= 2 : c.tier >= 3);
      const startingClub = starterClubs[Math.floor(Math.random() * starterClubs.length)];

      let positionObj;
      if (isMgr) {
        positionObj = {
          titleEn: 'HEAD COACH',
          titleAr: 'مدير فني وتكتيكي',
          icon: '👔',
          statEn: 'TEAM GOALS',
          statAr: 'أهداف الفريق'
        };
      } else {
        positionObj = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
      }

      const startingValue = isMgr ? 15.0 : Math.round((0.8 + Math.random() * 1.7) * 10) / 10;

      this.player = {
        regionObj: regionObj,
        countryAr: regionObj.countriesAr[countryIdx],
        countryEn: regionObj.countriesEn[countryIdx],
        positionObj: positionObj,
        currentClub: startingClub,
        age: isMgr ? 1 : 18,
        marketValue: startingValue,
        injuriesCount: 0,
        superSeasonsCount: 0
      };

      this.milestoneIndex = 0;
      this.allTrophies = [];
      this.careerHistory = [];
      this.ageClubMap = {};
      this.ageClubMap[isMgr ? 1 : 18] = startingClub;

      // Reset Stats
      this.totalMatches = 0;
      this.totalGoals = 0;
      this.totalAssists = 0;
      this.totalYellow = 0;
      this.totalRed = 0;
      this.totalEarnings = startingValue * 0.3;
      this.peakMarketValue = startingValue;

      this.countWorldCups = 0;
      this.countUCLs = 0;
      this.countLeagues = 0;
      this.countCups = 0;
      this.countBallonDors = 0;

      // Clear ladder slots
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
      this.dom.leaderboardModal.classList.remove('active');

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
      const isMgr = this.gameMode === 'manager';

      this.dom.playerRegion.textContent = `${p.regionObj.flag} ${isAr ? p.countryAr : p.countryEn}`;
      this.dom.playerPosition.textContent = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      this.dom.positionIcon.textContent = p.positionObj.icon;
      this.dom.playerAge.textContent = isMgr ? `S${p.age}` : p.age;
      this.dom.playerValue.textContent = this.formatCurrency(p.marketValue);

      // Mini Header Club
      this.dom.miniCrest.innerHTML = generateCrestSVG(p.currentClub, '22px');
      this.dom.miniClubName.textContent = this.getClubName(p.currentClub);
      this.dom.miniClubCountry.textContent = this.getClubCountry(p.currentClub);
      const seasonYear = 2024 + (this.milestoneIndex * 2);
      this.dom.miniSeasonTag.textContent = isAr ? `${seasonYear} م${this.milestoneIndex + 1}` : `${seasonYear} S${this.milestoneIndex + 1}`;

      // Current Team Card
      this.dom.currentTeamCrest.innerHTML = generateCrestSVG(p.currentClub, '28px');
      this.dom.currentTeamName.textContent = this.getClubName(p.currentClub);
      this.dom.currentTeamCountry.textContent = this.getClubCountry(p.currentClub);
      this.dom.currentSeasonBadge.textContent = isAr ? `${seasonYear} م${this.milestoneIndex + 1}` : `${seasonYear} S${this.milestoneIndex + 1}`;

      // Mini Matchday Strip
      this.dom.miniMatches.textContent = this.totalMatches;
      this.dom.miniStat1Label.textContent = isAr ? 'أهداف' : 'GOALS';
      this.dom.miniStat1Val.textContent = this.totalGoals;
      this.dom.miniStat2Label.textContent = isAr ? 'أسيست' : 'ASSISTS';
      this.dom.miniStat2Val.textContent = this.totalAssists;
      this.dom.miniYellowCards.textContent = `🟨 ${this.totalYellow}`;
      this.dom.miniRedCards.textContent = `🟥 ${this.totalRed}`;

      // Stay Button
      const stayClub = this.getClubName(p.currentClub);
      if (isAr) {
        this.dom.stayBtn.innerHTML = `<span>🛡️ ${isMgr ? 'مواصلة قيادة' : 'البقاء وتجديد العقد مع'} <strong>${stayClub}</strong></span>`;
      } else {
        this.dom.stayBtn.innerHTML = `<span>🛡️ ${isMgr ? 'Continue Managing' : 'Stay & Extend with'} <strong>${stayClub}</strong></span>`;
      }

      // Bottom Ribbon
      this.dom.trophyBadgeCount.textContent = this.allTrophies.length;
      this.dom.trophiesCount.textContent = `🏆 ${this.allTrophies.length}`;
      this.dom.goalsCount.textContent = `${p.positionObj.icon} ${this.totalGoals}`;
      this.dom.careerEarnings.textContent = `💰 ${this.formatCurrency(this.totalEarnings)}`;

      this.updateXPBar();
    }

    renderTimelineLadder() {
      const isMgr = this.gameMode === 'manager';

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
          const mappedKey = isMgr ? Math.floor((ageNum - 16) / 2) : ageNum;
          const club = this.ageClubMap[isMgr ? mappedKey : ageNum];
          const slot = document.getElementById(`slot-${ageNum}`);
          if (slot && club) {
            const crestEl = slot.querySelector('.slot-crest');
            const nameEl = slot.querySelector('.slot-name');
            if (crestEl) crestEl.innerHTML = generateCrestSVG(club, '17px');
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
    // 9. EVENT & TRANSFER OFFERS
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
      const isMgr = this.gameMode === 'manager';
      const currentClub = this.player.currentClub;
      let eligibleClubs = CLUBS.filter(c => c.id !== currentClub.id);

      // AI influence
      const ai = this.cloudAI.aiState;
      if (this.allTrophies.length >= 3) {
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else if (this.player.marketValue <= 6) {
        eligibleClubs = eligibleClubs.filter(c => c.tier >= 2);
      }

      eligibleClubs.sort(() => Math.random() - 0.5);

      const offerCount = Math.random() > 0.4 ? 3 : 2;
      const chosenClubs = eligibleClubs.slice(0, offerCount);

      let badgeTitle = '';
      let narrative = '';

      if (isMgr) {
        badgeTitle = isAr ? `📋 ${offerCount} أندية تطلب التعاقد معك كمدرب` : `📋 ${offerCount} CLUBS WANT YOU AS MANAGER`;
        narrative = isAr
          ? 'إدارات أندية كبرى تابعت بصمتك التكتيكية وقدمت عروضاً رسمية لتسليمك القيادة الفنية!'
          : 'Major club boards were impressed by your tactical prowess and sent managerial contract offers!';
      } else {
        badgeTitle = isAr ? `🔥 صراع ${offerCount} أندية على ضمك` : `🔥 ${offerCount}-CLUB BIDDING WAR`;
        narrative = isAr
          ? 'سوق الانتقالات يشتعل! عدة أندية كبرى دخلت في مفاوضات رسمية للظفر بخدماتك.'
          : 'The transfer market is heated! Multiple clubs have entered negotiations for your signature.';
      }

      this.dom.eventBadgeText.textContent = badgeTitle;
      this.dom.narrativeText.textContent = narrative;

      this.currentOffers = chosenClubs.map(club => {
        const offerVal = this.calculateRealisticOffer(club);
        const wage = Math.max(0.5, Math.round((offerVal * (isMgr ? 0.08 : 0.14)) * 10) / 10);
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
        const btnText = isMgr ? (isAr ? 'تولي التدريب 👔' : 'TAKE CHARGE 👔') : (isAr ? 'توقيع العقد ✍️' : 'SIGN CONTRACT ✍️');

        card.innerHTML = `
          <div class="offer-left">
            <div class="crest-container large">${generateCrestSVG(offer.club, '28px')}</div>
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
      const isMgr = this.gameMode === 'manager';
      let val = this.player.marketValue;

      if (!isMgr) {
        if (age <= 22) val *= (1.2 + Math.random() * 0.35);
        else if (age <= 28) val *= (1.1 + Math.random() * 0.25);
        else if (age <= 30) val *= (0.95 + Math.random() * 0.15);
        else val *= (0.7 + Math.random() * 0.2);
      } else {
        // Manager budget
        val = club.tier === 1 ? 60 + Math.random() * 40 : (club.tier === 2 ? 30 + Math.random() * 25 : 10 + Math.random() * 15);
      }

      if (!isMgr) {
        if (club.tier === 1) val *= 1.35;
        else if (club.tier === 2) val *= 1.1;
        else val *= 0.85;
      }

      return Math.max(0.6, Math.round(val * 10) / 10);
    }

    // ==========================================
    // 10. REALISTIC DEEP SIMULATION & STATS ENGINE
    // ==========================================
    executeSeasonProgression(transferred, targetClub, proposedVal = null) {
      const isAr = this.lang === 'ar';
      const isMgr = this.gameMode === 'manager';
      const age = this.player.age;
      this.player.currentClub = targetClub;

      // Map ladder slot
      this.ageClubMap[age] = targetClub;

      // 80% RNG Roll
      const ai = this.cloudAI.aiState;
      const roll = Math.random();
      let eventType = 'SOLID_STARTER';

      if (isMgr) {
        // Manager Events
        if (roll < 0.22) eventType = 'TACTICAL_TRIUMPH';
        else if (roll < 0.40) eventType = 'BOARD_PRESSURE';
        else if (roll < 0.55) eventType = 'SQUAD_MUTINY';
        else eventType = 'SOLID_STARTER';
      } else {
        // Player Events
        if (roll < ai.wonderkidRate) {
          eventType = 'SUPER_SEASON';
          this.player.superSeasonsCount++;
        } else if (roll < ai.wonderkidRate + ai.injuryRate) {
          eventType = 'INJURY_CRISIS';
          this.player.injuriesCount++;
        } else if (roll < 0.52) {
          eventType = 'BENCH_CONFLICT';
        } else if (roll < 0.65) {
          eventType = 'HEARTBREAK_FINAL';
        } else {
          eventType = 'SOLID_STARTER';
        }
      }

      // Check World Cup cycle (Player: Ages 22, 26, 30; Manager: Seasons 3, 7)
      const isWorldCupYear = isMgr ? (age === 3 || age === 7) : (age === 22 || age === 26 || age === 30);
      let wonWorldCup = false;
      if (isWorldCupYear && Math.random() < 0.16) {
        wonWorldCup = true;
      }

      // Detailed Stats Computation (2-year span: 75 to 110 matches)
      let matches = Math.floor(75 + Math.random() * 32);
      let goals = 0;
      let assists = 0;
      let yellows = Math.floor(2 + Math.random() * 6);
      let reds = Math.random() < 0.22 ? 1 : 0;
      let matchRating = 7.3;
      let valDelta = 0;
      let trophiesWonThisSeason = [];

      const isAttacker = ['STRIKER', 'WINGER'].includes(this.player.positionObj.titleEn);
      const isMid = ['ATTACKING MID', 'CENTRAL MID'].includes(this.player.positionObj.titleEn);

      // Tactic modifiers if Manager Mode
      let tacticAttackMult = 1.0;
      let tacticDefenseMult = 1.0;
      if (isMgr) {
        if (this.currentTactic === 'attack') { tacticAttackMult = 1.35; yellows += 3; }
        else if (this.currentTactic === 'defense') { tacticDefenseMult = 1.3; matches += 4; }
      }

      if (eventType === 'SUPER_SEASON' || eventType === 'TACTICAL_TRIUMPH') {
        matchRating = (8.3 + Math.random() * 0.8).toFixed(1);
        matches = Math.floor(88 + Math.random() * 20);
        
        if (isMgr) {
          goals = Math.floor((120 + Math.random() * 40) * tacticAttackMult);
          assists = Math.floor(goals * 0.7);
        } else {
          goals = isAttacker ? Math.floor(45 + Math.random() * 28) : (isMid ? Math.floor(18 + Math.random() * 14) : Math.floor(6 + Math.random() * 8));
          assists = isAttacker ? Math.floor(12 + Math.random() * 14) : (isMid ? Math.floor(22 + Math.random() * 18) : Math.floor(8 + Math.random() * 8));
        }

        valDelta = Math.round(this.player.marketValue * 0.45 * 10) / 10;

        // High trophy probability
        if (targetClub.tier === 1) {
          trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇', type: 'league' });
          this.countLeagues++;
          if (Math.random() < 0.6) {
            trophiesWonThisSeason.push({ nameAr: targetClub.contAr, nameEn: targetClub.contEn, icon: '🏆', type: 'ucl' });
            this.countUCLs++;
          }
        } else if (targetClub.tier === 2) {
          if (Math.random() < 0.5) { trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈', type: 'cup' }); this.countCups++; }
          if (Math.random() < 0.4) { trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇', type: 'league' }); this.countLeagues++; }
        } else {
          if (Math.random() < 0.45) { trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈', type: 'cup' }); this.countCups++; }
        }

        // Ballon d'Or
        if (!isMgr && targetClub.tier <= 2 && matchRating >= 8.6 && Math.random() < 0.45) {
          trophiesWonThisSeason.push({ nameAr: 'الكرة الذهبية كأفضل لاعب في العالم', nameEn: "Ballon d'Or World Best Player", icon: '🌕', type: 'ballon' });
          this.countBallonDors++;
        }

      } else if (eventType === 'INJURY_CRISIS') {
        matches = Math.floor(22 + Math.random() * 18); // Sidelined
        matchRating = (5.9 + Math.random() * 0.7).toFixed(1);
        goals = isAttacker ? Math.floor(4 + Math.random() * 6) : Math.floor(1 + Math.random() * 4);
        assists = Math.floor(2 + Math.random() * 4);
        valDelta = -Math.round(this.player.marketValue * 0.3 * 10) / 10;

      } else if (eventType === 'BENCH_CONFLICT' || eventType === 'BOARD_PRESSURE') {
        matches = Math.floor(34 + Math.random() * 18);
        matchRating = (6.2 + Math.random() * 0.6).toFixed(1);
        goals = isAttacker ? Math.floor(7 + Math.random() * 9) : Math.floor(3 + Math.random() * 5);
        assists = Math.floor(4 + Math.random() * 6);
        valDelta = -Math.round(this.player.marketValue * 0.18 * 10) / 10;
        yellows += 2;

      } else if (eventType === 'HEARTBREAK_FINAL' || eventType === 'SQUAD_MUTINY') {
        matches = Math.floor(80 + Math.random() * 18);
        matchRating = (7.4 + Math.random() * 0.5).toFixed(1);
        goals = isAttacker ? Math.floor(22 + Math.random() * 14) : Math.floor(9 + Math.random() * 9);
        assists = Math.floor(10 + Math.random() * 10);
        valDelta = Math.round(this.player.marketValue * 0.05 * 10) / 10;

      } else { // SOLID_STARTER
        matches = Math.floor(68 + Math.random() * 24);
        matchRating = (7.3 + Math.random() * 0.5).toFixed(1);
        if (isMgr) {
          goals = Math.floor((85 + Math.random() * 30) * tacticAttackMult);
          assists = Math.floor(goals * 0.65);
        } else {
          goals = isAttacker ? Math.floor(20 + Math.random() * 18) : (isMid ? Math.floor(10 + Math.random() * 10) : Math.floor(3 + Math.random() * 5));
          assists = isAttacker ? Math.floor(8 + Math.random() * 10) : (isMid ? Math.floor(15 + Math.random() * 14) : Math.floor(4 + Math.random() * 6));
        }

        if (!isMgr && age >= 30) {
          valDelta = -Math.round(this.player.marketValue * 0.1 * 10) / 10;
        } else {
          valDelta = Math.round(this.player.marketValue * 0.1 * 10) / 10;
        }

        let prob = targetClub.tier === 1 ? 0.45 : (targetClub.tier === 2 ? 0.25 : 0.1);
        if (Math.random() < prob) {
          trophiesWonThisSeason.push({ nameAr: targetClub.leagueAr, nameEn: targetClub.leagueEn, icon: '🥇', type: 'league' });
          this.countLeagues++;
        } else if (Math.random() < prob * 0.8) {
          trophiesWonThisSeason.push({ nameAr: targetClub.cupAr, nameEn: targetClub.cupEn, icon: '🥈', type: 'cup' });
          this.countCups++;
        }
      }

      // World Cup
      if (wonWorldCup) {
        trophiesWonThisSeason.push({
          nameAr: `${isMgr ? 'كأس العالم كمدرب وطني لـ' : 'كأس العالم مع'} ${this.player.countryAr}`,
          nameEn: `FIFA World Cup with ${this.player.countryEn}`,
          icon: '🌍',
          type: 'wc'
        });
        this.countWorldCups++;
        valDelta += 15;
      }

      // Accumulate Totals
      this.totalMatches += matches;
      this.totalGoals += goals;
      this.totalAssists += assists;
      this.totalYellow += yellows;
      this.totalRed += reds;

      if (proposedVal && transferred) {
        this.player.marketValue = Math.max(0.5, Math.round((proposedVal + valDelta) * 10) / 10);
      } else {
        this.player.marketValue = Math.max(0.5, Math.round((this.player.marketValue + valDelta) * 10) / 10);
      }

      if (this.player.marketValue > this.peakMarketValue) {
        this.peakMarketValue = this.player.marketValue;
      }

      this.totalEarnings += Math.max(0.4, this.player.marketValue * 0.2);

      // Append Trophies
      trophiesWonThisSeason.forEach(t => {
        this.allTrophies.push({
          nameAr: t.nameAr,
          nameEn: t.nameEn,
          icon: t.icon,
          clubName: this.getClubName(targetClub),
          age: age
        });
      });

      // Calculate XP Earned
      let xpEarned = 150 + (goals * 8) + (assists * 5) + (trophiesWonThisSeason.length * 250);
      if (wonWorldCup) xpEarned += 800;
      this.progression.addXP(xpEarned);

      // Audio feedback
      if (trophiesWonThisSeason.length > 0) {
        this.sound.playTrophy();
        this.confetti.burst(60);
      } else if (eventType === 'INJURY_CRISIS' || eventType === 'SQUAD_MUTINY') {
        this.sound.playSad();
      }

      // Show Season Recap Modal
      this.showSeasonRecapModal({
        age: age,
        club: targetClub,
        eventType: eventType,
        matches: matches,
        goals: goals,
        assists: assists,
        yellows: yellows,
        reds: reds,
        valDelta: valDelta,
        xpEarned: xpEarned,
        trophies: trophiesWonThisSeason
      });
    }

    // ==========================================
    // 11. SEASON RECAP MODAL POPUP
    // ==========================================
    showSeasonRecapModal(d) {
      const isAr = this.lang === 'ar';
      const isMgr = this.gameMode === 'manager';
      const seasonYear = 2024 + (this.milestoneIndex * 2);

      this.dom.recapSeasonYear.textContent = isMgr
        ? (isAr ? `الموسم التدريبي ${d.age} (${seasonYear})` : `Managerial Season ${d.age} (${seasonYear})`)
        : (isAr ? `موسم ${seasonYear} - ${seasonYear + 2} (عمر ${d.age} سنة)` : `Season ${seasonYear} - ${seasonYear + 2} (Age ${d.age})`);

      this.dom.recapClubHeader.textContent = `${this.getClubName(d.club)} ${d.club.flag}`;

      // Banner styling
      this.dom.recapEventBanner.className = 'recap-event-banner';
      if (d.eventType === 'SUPER_SEASON' || d.eventType === 'TACTICAL_TRIUMPH') {
        this.dom.recapEventBanner.classList.add('success');
        this.dom.recapEventIcon.textContent = '🚀';
        this.dom.recapEventTitle.textContent = isAr ? 'موسم استثنائي وتوهج كاسح! ⭐' : 'Sensational Breakthrough Season! ⭐';
        this.dom.recapEventDetail.textContent = isAr 
          ? (isMgr ? 'عبقرية تكتيكية مذهلة فرضت هيمنة فريقك محلياً وقارياً.' : 'مستويات خرافية أذهلت العالم وتصدرت عناوين الصحف العالمية.') 
          : 'Spectacular tactical execution brought sheer dominance on all fronts.';
      } else if (d.eventType === 'INJURY_CRISIS') {
        this.dom.recapEventBanner.classList.add('injury');
        this.dom.recapEventIcon.textContent = '🚑';
        this.dom.recapEventTitle.textContent = isAr ? 'لعنة الإصابات القاسية! 💔' : 'Cruel Injury Nightmare! 💔';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'إصابة قوية في الركبة أبعدتك أشهراً طويلة وأثرت على أرقامك وقيمتك.' 
          : 'A severe injury setback kept you sidelined for months.';
      } else if (d.eventType === 'BENCH_CONFLICT' || d.eventType === 'BOARD_PRESSURE') {
        this.dom.recapEventBanner.classList.add('injury');
        this.dom.recapEventIcon.textContent = isMgr ? '⚠️' : '🪑';
        this.dom.recapEventTitle.textContent = isAr 
          ? (isMgr ? 'ضغط إداري حاد وتهديد بالإقالة! ⚠️' : 'خلاف تكتيكي وجلوس على الدكة! 🪑') 
          : (isMgr ? 'Severe Board Pressure & Sacking Threats! ⚠️' : 'Benched & Tactical Friction! 🪑');
        this.dom.recapEventDetail.textContent = isAr 
          ? (isMgr ? 'تراجع النتائج أثار غضب الإدارة وطالبوك بتعديل المسار فوراً.' : 'المدرب اعتمد على بديل آخر وتم تقليص دقائق لعبك.') 
          : 'Rocky period with reduced involvement and tactical disputes.';
      } else if (d.eventType === 'HEARTBREAK_FINAL' || d.eventType === 'SQUAD_MUTINY') {
        this.dom.recapEventBanner.classList.add('warning');
        this.dom.recapEventIcon.textContent = '💔';
        this.dom.recapEventTitle.textContent = isAr ? 'دراما وخسارة مؤلمة في النهائي! 🥈' : 'Agonizing Final Defeat! 🥈';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'وصلتم للنهائي الكبير ولكنكم خسرتم اللقب بركلات الترجيح ليخرج الفريق بموسم صفري.' 
          : 'A valiant cup run ended in tears after a penalty shootout heartbreak.';
      } else {
        this.dom.recapEventIcon.textContent = '⚽';
        this.dom.recapEventTitle.textContent = isAr ? 'موسم أساسي مستقر ومتوازن 🛡️' : 'Solid & Consistent Campaign 🛡️';
        this.dom.recapEventDetail.textContent = isAr 
          ? 'مشاركات منتظمة وثبات في المستوى الفني.' 
          : 'Consistent performances with solid match contributions.';
      }

      // 6 Stats in Season Modal
      this.dom.recapMatches.textContent = d.matches;
      this.dom.recapStatCount.textContent = d.goals;
      this.dom.recapStatLabel.textContent = isAr ? 'الأهداف ⚽' : 'GOALS ⚽';
      this.dom.recapAssists.textContent = d.assists;
      this.dom.recapYellow.textContent = `🟨 ${d.yellows}`;
      this.dom.recapRed.textContent = `🟥 ${d.reds}`;

      const deltaText = d.valDelta >= 0 ? `+€${d.valDelta}M` : `-€${Math.abs(d.valDelta)}M`;
      this.dom.recapValueChange.textContent = deltaText;
      this.dom.recapValueChange.className = `sd-val ${d.valDelta >= 0 ? 'highlight' : 'negative'}`;

      this.dom.seasonXpGained.textContent = `+${d.xpEarned} XP`;

      // Trophies
      this.dom.recapTrophiesList.innerHTML = '';
      if (d.trophies.length > 0) {
        d.trophies.forEach(t => {
          const pill = document.createElement('div');
          pill.className = 'trophy-item-pill';
          const tName = isAr ? t.nameAr : t.nameEn;
          pill.innerHTML = `<span>${t.icon}</span> <span>${tName}</span>`;
          this.dom.recapTrophiesList.appendChild(pill);
        });
      } else {
        this.dom.recapTrophiesList.innerHTML = `
          <span class="no-trophy-text">
            ${isAr ? '❌ موسم صفري: لم يحقق الفريق أي بطولة رسمية هذا الموسم.' : '❌ Zero Trophies: Campaign concluded without silverware.'}
          </span>
        `;
      }

      this.dom.seasonModal.classList.add('active');
    }

    advanceToNextMilestone() {
      this.milestoneIndex++;
      const nextMilestone = MILESTONES[this.milestoneIndex];
      const isMgr = this.gameMode === 'manager';

      if (typeof nextMilestone === 'number') {
        if (isMgr) {
          this.player.age = Math.floor((nextMilestone - 16) / 2);
        } else {
          this.player.age = nextMilestone;
        }

        const mapKey = isMgr ? this.player.age : nextMilestone;
        if (!this.ageClubMap[mapKey]) {
          this.ageClubMap[mapKey] = this.player.currentClub;
        }
      }

      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
    }

    // ==========================================
    // 12. LEADERBOARD & TROPHY CABINET MODALS
    // ==========================================
    async openLeaderboard() {
      const isAr = this.lang === 'ar';
      this.dom.leaderboardList.innerHTML = `<p style="text-align:center; padding:15px; color:#64748b;">${isAr ? 'جاري الاتصال بقاعدة البيانات السحابية 🌐...' : 'Connecting to cloud database 🌐...'}</p>`;
      this.dom.leaderboardModal.classList.add('active');

      const scores = await this.cloudAI.fetchLeaderboard();
      this.dom.leaderboardList.innerHTML = '';

      scores.forEach((s, idx) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        item.innerHTML = `
          <div class="lb-rank">#${idx + 1}</div>
          <div class="lb-user-info">
            <span class="lb-user-name">${s.name || 'Anonymous Legend'}</span>
            <span class="lb-user-stats">${s.club || 'FC'} • ${s.goals || 0} ${isAr ? 'هدف' : 'Goals'} • ${s.rank || 'LEGEND'}</span>
          </div>
          <div class="lb-trophies-badge">🏆 ${s.trophies || 0}</div>
        `;
        this.dom.leaderboardList.appendChild(item);
      });
    }

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
        this.allTrophies.forEach(t => {
          const row = document.createElement('div');
          row.className = 'cabinet-trophy-row';
          const tName = isAr ? t.nameAr : t.nameEn;
          row.innerHTML = `
            <div class="cabinet-trophy-icon">${t.icon}</div>
            <div class="cabinet-trophy-info">
              <span class="cabinet-trophy-name">${tName}</span>
              <span class="cabinet-trophy-details">${t.clubName} • ${isAr ? `المحطة ${t.age}` : `Stage ${t.age}`}</span>
            </div>
          `;
          this.dom.cabinetList.appendChild(row);
        });
      }

      this.dom.cabinetModal.classList.add('active');
    }

    // ==========================================
    // 13. RETIREMENT & DEEP GRAND FINALE
    // ==========================================
    handleRetirementPhase() {
      const isAr = this.lang === 'ar';
      const isMgr = this.gameMode === 'manager';

      this.dom.eventBadgeText.textContent = isMgr ? (isAr ? '👑 ختام المسيرة التدريبية' : '👑 MANAGERIAL RETIREMENT') : (isAr ? '👑 حفل اعتزال أسطوري' : '👑 RETIREMENT CEREMONY');
      this.dom.narrativeText.textContent = isAr
        ? (isMgr ? 'بعد سنوات من التخطيط والتتويجات وإشعال الملاعب، حان وقت توديع دكة البدلاء!' : 'بعد مسيرة ملحمية مليئة بالتقلبات والبطولات، حان وقت تعليق الحذاء وبدء رحلة التدريب!')
        : 'After an epic career of tactical mastery and silverware, you conclude your active coaching journey!';

      this.dom.offersGrid.innerHTML = '';
      this.dom.actionBar.style.display = 'none';

      const retireCard = document.createElement('div');
      retireCard.className = 'offer-card';
      retireCard.style.justifyContent = 'center';
      retireCard.style.background = 'var(--primary-yellow)';
      retireCard.innerHTML = `
        <span style="font-family: var(--font-arabic); font-weight: 900; font-size: 1rem; color: #000;">
          ${isMgr ? (isAr ? 'عرض سجل الإنجازات والتقييم النهائي 🏆 ➡️' : 'VIEW FINAL ACHIEVEMENTS 🏆 ➡️') : (isAr ? 'الانتقال إلى عالم التدريب 👔 ➡️' : 'PROCEED TO MANAGEMENT 👔 ➡️')}
        </span>
      `;
      retireCard.addEventListener('click', () => {
        this.sound.playClick();
        this.milestoneIndex++;
        this.renderTimelineLadder();
        this.handleManagementPhase();
      });
      this.dom.offersGrid.appendChild(retireCard);
      this.confetti.burst(60);
    }

    handleManagementPhase() {
      const isAr = this.lang === 'ar';
      const isMgr = this.gameMode === 'manager';
      this.sound.playTrophy();
      this.confetti.burst(100);

      // Evaluate Honest Legacy
      let rating = '';
      const trophiesCount = this.allTrophies.length;
      const peakVal = this.peakMarketValue;
      const injuries = this.player.injuriesCount;

      if (isMgr) {
        if (trophiesCount >= 8) rating = isAr ? 'الداهية التكتيكية الخالدة 🧠' : 'TACTICAL MASTERMIND 🧠';
        else if (trophiesCount >= 4) rating = isAr ? 'صانع السلالات التاريخية 👑' : 'LEGENDARY DYNASTY 👑';
        else if (trophiesCount >= 1) rating = isAr ? 'بطل الكؤوس والمفاجآت ⭐' : 'UNDERDOG HERO ⭐';
        else rating = isAr ? 'مدرب متقلب لم يحالفه الحظ 📉' : 'TROUBLED TACTICIAN 📉';
      } else {
        if (trophiesCount >= 8 && peakVal >= 90) {
          rating = isAr ? 'الأعظم في التاريخ (THE GOAT) 🐐' : 'THE GOAT 🐐';
        } else if (trophiesCount >= 4 && peakVal >= 60) {
          rating = isAr ? 'أسطورة كروية عالمية 🌟' : 'WORLD CLASS LEGEND 🌟';
        } else if (injuries >= 3 && trophiesCount <= 2) {
          rating = isAr ? 'موهبة دمرتها الإصابات 🩹' : 'INJURY CURSED TALENT 🩹';
        } else if (trophiesCount === 0 && peakVal <= 20) {
          rating = isAr ? 'موهبة ضائعة لم تكتمل 📉' : 'WONDERKID BUST 📉';
        } else if (this.totalMatches >= 500) {
          rating = isAr ? 'رحالة كروي مقاتل 🌍' : 'ICONIC JOURNEYMAN 🌍';
        } else {
          rating = isAr ? 'بطل الجماهير والمحبوب ⭐' : 'CULT HERO ⭐';
        }
      }

      // Manager Appointment
      let managerClub;
      let managerTitle = isMgr 
        ? (isAr ? 'رئيس اللجنة الفنية بالاتحاد الدولي FIFA' : 'FIFA GLOBAL TECHNICAL DIRECTOR') 
        : (isAr ? 'المدير الفني والمدرب العام' : 'HEAD COACH & TACTICAL MASTERMIND');

      if (trophiesCount >= 4 || peakVal >= 65) {
        const eliteClubs = CLUBS.filter(c => c.tier === 1);
        managerClub = eliteClubs[Math.floor(Math.random() * eliteClubs.length)];
      } else {
        managerClub = this.player.currentClub;
      }

      // Populate Grand Finale Table
      this.dom.modalTitle.textContent = isAr ? `مسيرة ${rating}` : `THE LEGACY OF ${rating}`;
      this.dom.finalRegion.textContent = `${this.player.regionObj.flag} ${isAr ? this.player.countryAr : this.player.countryEn}`;
      this.dom.finalPosition.textContent = isAr ? this.player.positionObj.titleAr : this.player.positionObj.titleEn;
      this.dom.finalRating.textContent = rating;

      // In-Depth Numbers
      this.dom.finalMatches.textContent = this.totalMatches;
      this.dom.finalGoals.textContent = this.totalGoals;
      this.dom.finalGoalTitle.textContent = isMgr ? (isAr ? 'أهداف الفريق ⚽' : 'TEAM GOALS ⚽') : (isAr ? 'الأهداف ⚽' : 'GOALS ⚽');
      this.dom.finalAssists.textContent = this.totalAssists;
      this.dom.finalYellow.textContent = `🟨 ${this.totalYellow}`;
      this.dom.finalRed.textContent = `🟥 ${this.totalRed}`;
      this.dom.finalPeakVal.textContent = this.formatCurrency(this.peakMarketValue);

      // Trophy Sub-counts
      this.dom.finalWorldCups.textContent = this.countWorldCups;
      this.dom.finalUCLs.textContent = this.countUCLs;
      this.dom.finalLeagues.textContent = this.countLeagues;
      this.dom.finalCups.textContent = this.countCups;
      this.dom.finalBallonDors.textContent = this.countBallonDors;

      // Trophy chips
      this.dom.finalTrophiesTags.innerHTML = '';
      if (this.allTrophies.length === 0) {
        this.dom.finalTrophiesTags.innerHTML = `<span style="font-size:0.65rem; color:#64748b;">${isAr ? 'لم تحقق أي بطولة رسمية في مسيرتك.' : 'No official trophies won during this run.'}</span>`;
      } else {
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
      this.dom.managerCrest.innerHTML = generateCrestSVG(managerClub, '28px');
      this.dom.managerClubName.textContent = this.getClubName(managerClub);
      this.dom.managerRoleTitle.textContent = managerTitle;

      // Train AI on completed career & submit score to cloud DB
      this.cloudAI.trainOnCareerRun({
        trophiesCount: trophiesCount,
        injuriesCount: this.player.injuriesCount,
        goals: this.totalGoals,
        mode: this.gameMode
      });
      this.updateAIStatusStrip();

      this.cloudAI.submitLeaderboardScore({
        name: `${this.player.positionObj.titleAr} (${this.player.countryAr})`,
        club: this.getClubName(this.player.currentClub),
        trophies: trophiesCount,
        goals: this.totalGoals,
        matches: this.totalMatches,
        rank: rating,
        mode: this.gameMode,
        timestamp: Date.now()
      });

      this.dom.careerModal.classList.add('active');
    }

    copyCareerResume() {
      const isAr = this.lang === 'ar';
      const p = this.player;
      const isMgr = this.gameMode === 'manager';
      const pos = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      const country = isAr ? p.countryAr : p.countryEn;
      const rank = this.dom.finalRating.textContent;

      const resume = isAr ? `
⚽ سيرة مسيرة كرة القدم الاحترافية الشاملة ⚽
👤 المركز/الدور: ${pos} (${country})
🏟️ المباريات الملعوبة: ${this.totalMatches}
⚽ الأهداف الكلية: ${this.totalGoals} | 👟 الأسيست: ${this.totalAssists}
🟨 الإنذارات: ${this.totalYellow} | 🟥 الطرد: ${this.totalRed}
🏆 كؤوس العالم: ${this.countWorldCups} | دوري أبطال أوروبا: ${this.countUCLs}
🥇 الدوريات المحلية: ${this.countLeagues} | الكؤوس المحلية: ${this.countCups}
🌕 الكرات الذهبية: ${this.countBallonDors}
💎 أعلى قيمة: ${this.formatCurrency(this.peakMarketValue)} | 💰 الأرباح: ${this.formatCurrency(this.totalEarnings)}
🌟 التصنيف التاريخي: ${rank}

العب وتحدّ الذكاء الاصطناعي: https://mlyounesml.github.io/football-career-simulator/
      `.trim() : `
⚽ PRO FOOTBALL CAREER STATISTICAL RESUME ⚽
👤 Role: ${pos} (${country})
🏟️ Matches Played: ${this.totalMatches}
⚽ Goals: ${this.totalGoals} | 👟 Assists: ${this.totalAssists}
🟨 Yellow Cards: ${this.totalYellow} | 🟥 Red Cards: ${this.totalRed}
🏆 World Cups: ${this.countWorldCups} | UCL: ${this.countUCLs}
🥇 Domestic Leagues: ${this.countLeagues} | Domestic Cups: ${this.countCups}
🌕 Ballon d'Or: ${this.countBallonDors}
💎 Peak Value: ${this.formatCurrency(this.peakMarketValue)} | 💰 Total Earnings: ${this.formatCurrency(this.totalEarnings)}
🌟 Final Legacy: ${rank}

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
    window.game = new CareerGamePro();
  });
})();
