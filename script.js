/**
 * FOOTBALL PLAYER CAREER SIMULATOR
 * Inspired by viral TikTok / Reels filter games
 * Full Arabic (عربي) & English support, Age + Club Ladder, Multiple Club Choices
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CLUBS DATABASE (45+ Real Clubs with Arabic & English names)
  // ==========================================
  const CLUBS = [
    // Tier 1: World Elite
    { id: 'real_madrid', nameEn: 'REAL MADRID', nameAr: 'ريال مدريد', countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 1, c1: '#ffffff', c2: '#1e3a8a', text: 'RM' },
    { id: 'man_city', nameEn: 'MANCHESTER CITY', nameAr: 'مانشستر سيتي', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#6ee7b7', c2: '#0284c7', text: 'MC' },
    { id: 'bayern', nameEn: 'BAYERN MUNICH', nameAr: 'بايرن ميونخ', countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 1, c1: '#dc2626', c2: '#ffffff', text: 'FCB' },
    { id: 'barcelona', nameEn: 'BARCELONA', nameAr: 'برشلونة', countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 1, c1: '#991b1b', c2: '#1e3a8a', text: 'FCB' },
    { id: 'psg', nameEn: 'PARIS SG', nameAr: 'باريس سان جيرمان', countryEn: 'FRANCE', countryAr: 'فرنسا', flag: '🇫🇷', tier: 1, c1: '#1e293b', c2: '#ef4444', text: 'PSG' },
    { id: 'arsenal', nameEn: 'ARSENAL', nameAr: 'أرسنال', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#ef4444', c2: '#ffffff', text: 'AFC' },
    { id: 'liverpool', nameEn: 'LIVERPOOL', nameAr: 'ليفربول', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#b91c1c', c2: '#facc15', text: 'LFC' },
    { id: 'inter', nameEn: 'INTER MILAN', nameAr: 'إنتر ميلان', countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 1, c1: '#1d4ed8', c2: '#000000', text: 'IM' },

    // Tier 2: European Giants
    { id: 'dortmund', nameEn: 'DORTMUND', nameAr: 'بوروسيا دورتموند', countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 2, c1: '#facc15', c2: '#000000', text: 'BVB' },
    { id: 'atletico', nameEn: 'ATLÉTICO MADRID', nameAr: 'أتلتيكو مدريد', countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 2, c1: '#dc2626', c2: '#1d4ed8', text: 'ATM' },
    { id: 'juventus', nameEn: 'JUVENTUS', nameAr: 'يوفنتوس', countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 2, c1: '#000000', c2: '#ffffff', text: 'JUV' },
    { id: 'ac_milan', nameEn: 'AC MILAN', nameAr: 'إيه سي ميلان', countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 2, c1: '#b91c1c', c2: '#000000', text: 'ACM' },
    { id: 'chelsea', nameEn: 'CHELSEA', nameAr: 'تشيلسي', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'CFC' },
    { id: 'man_united', nameEn: 'MAN UNITED', nameAr: 'مانشستر يونايتد', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#dc2626', c2: '#facc15', text: 'MU' },
    { id: 'tottenham', nameEn: 'TOTTENHAM', nameAr: 'توتنهام', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#ffffff', c2: '#0f172a', text: 'TH' },
    { id: 'napoli', nameEn: 'NAPOLI', nameAr: 'نابولي', countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 2, c1: '#38bdf8', c2: '#ffffff', text: 'NAP' },
    { id: 'benfica', nameEn: 'BENFICA', nameAr: 'بنفيكا', countryEn: 'PORTUGAL', countryAr: 'البرتغال', flag: '🇵🇹', tier: 2, c1: '#dc2626', c2: '#ffffff', text: 'SLB' },
    { id: 'sporting', nameEn: 'SPORTING CP', nameAr: 'سبورتينغ لشبونة', countryEn: 'PORTUGAL', countryAr: 'البرتغال', flag: '🇵🇹', tier: 2, c1: '#047857', c2: '#ffffff', text: 'SCP' },
    { id: 'ajax', nameEn: 'AJAX', nameAr: 'أياكس أمستردام', countryEn: 'NETHERLANDS', countryAr: 'هولندا', flag: '🇳🇱', tier: 2, c1: '#ffffff', c2: '#dc2626', text: 'AFCA' },
    { id: 'porto', nameEn: 'PORTO', nameAr: 'بورتو', countryEn: 'PORTUGAL', countryAr: 'البرتغال', flag: '🇵🇹', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'FCP' },
    { id: 'leverkusen', nameEn: 'LEVERKUSEN', nameAr: 'باير ليفركوزن', countryEn: 'GERMANY', countryAr: 'ألمانيا', flag: '🇩🇪', tier: 2, c1: '#b91c1c', c2: '#000000', text: 'B04' },
    { id: 'aston_villa', nameEn: 'ASTON VILLA', nameAr: 'أستون فيلا', countryEn: 'ENGLAND', countryAr: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#6b21a8', c2: '#38bdf8', text: 'AVFC' },

    // Tier 3: Competitive Mid / High Tier
    { id: 'genk', nameEn: 'GENK', nameAr: 'جينك', countryEn: 'BELGIUM', countryAr: 'بلجيكا', flag: '🇧🇪', tier: 3, c1: '#1d4ed8', c2: '#ffffff', text: 'GNK' },
    { id: 'club_brugge', nameEn: 'CLUB BRUGGE', nameAr: 'كلوب بروج', countryEn: 'BELGIUM', countryAr: 'بلجيكا', flag: '🇧🇪', tier: 3, c1: '#1e3a8a', c2: '#000000', text: 'CLU' },
    { id: 'feyenoord', nameEn: 'FEYENOORD', nameAr: 'فاينورد', countryEn: 'NETHERLANDS', countryAr: 'هولندا', flag: '🇳🇱', tier: 3, c1: '#dc2626', c2: '#ffffff', text: 'FEY' },
    { id: 'sevilla', nameEn: 'SEVILLA', nameAr: 'إشبيلية', countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 3, c1: '#ffffff', c2: '#dc2626', text: 'SFC' },
    { id: 'roma', nameEn: 'AS ROMA', nameAr: 'روما', countryEn: 'ITALY', countryAr: 'إيطاليا', flag: '🇮🇹', tier: 3, c1: '#991b1b', c2: '#f59e0b', text: 'ASR' },
    { id: 'marseille', nameEn: 'MARSEILLE', nameAr: 'مارسيليا', countryEn: 'FRANCE', countryAr: 'فرنسا', flag: '🇫🇷', tier: 3, c1: '#38bdf8', c2: '#ffffff', text: 'OM' },
    { id: 'panathinaikos', nameEn: 'PANATHINAIKOS', nameAr: 'باناتينايكوس', countryEn: 'GREECE', countryAr: 'اليونان', flag: '🇬🇷', tier: 3, c1: '#15803d', c2: '#ffffff', text: 'PAO' },
    { id: 'olympiacos', nameEn: 'OLYMPIACOS', nameAr: 'أولمبياكوس', countryEn: 'GREECE', countryAr: 'اليونان', flag: '🇬🇷', tier: 3, c1: '#dc2626', c2: '#ffffff', text: 'OLY' },
    { id: 'celtic', nameEn: 'CELTIC', nameAr: 'سيلتيك', countryEn: 'SCOTLAND', countryAr: 'إسكتلندا', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', tier: 3, c1: '#16a34a', c2: '#ffffff', text: 'CEL' },
    { id: 'galatasaray', nameEn: 'GALATASARAY', nameAr: 'غلطة سراي', countryEn: 'TURKEY', countryAr: 'تركيا', flag: '🇹🇷', tier: 3, c1: '#b91c1c', c2: '#f59e0b', text: 'GS' },
    { id: 'fenerbahce', nameEn: 'FENERBAHÇE', nameAr: 'فنربخشة', countryEn: 'TURKEY', countryAr: 'تركيا', flag: '🇹🇷', tier: 3, c1: '#1e3a8a', c2: '#facc15', text: 'FB' },
    { id: 'sociedad', nameEn: 'REAL SOCIEDAD', nameAr: 'ريال سوسيداد', countryEn: 'SPAIN', countryAr: 'إسبانيا', flag: '🇪🇸', tier: 3, c1: '#1d4ed8', c2: '#ffffff', text: 'RSO' },

    // Tier 4: Starting Academies & Historic Incubators
    { id: 'dinamo_zagreb', nameEn: 'DINAMO ZAGREB', nameAr: 'دينامو زغرب', countryEn: 'CROATIA', countryAr: 'كرواتيا', flag: '🇭🇷', tier: 4, c1: '#1d4ed8', c2: '#ffffff', text: 'DZ' },
    { id: 'red_star', nameEn: 'RED STAR', nameAr: 'النجم الأحمر', countryEn: 'SERBIA', countryAr: 'صربيا', flag: '🇷🇸', tier: 4, c1: '#dc2626', c2: '#ffffff', text: 'CZV' },
    { id: 'santos', nameEn: 'SANTOS FC', nameAr: 'سانتوس', countryEn: 'BRAZIL', countryAr: 'البرازيل', flag: '🇧🇷', tier: 4, c1: '#ffffff', c2: '#000000', text: 'SFC' },
    { id: 'boca_juniors', nameEn: 'BOCA JUNIORS', nameAr: 'بوكا جونيورز', countryEn: 'ARGENTINA', countryAr: 'الأرجنتين', flag: '🇦🇷', tier: 4, c1: '#1e3a8a', c2: '#facc15', text: 'CABJ' },
    { id: 'river_plate', nameEn: 'RIVER PLATE', nameAr: 'ريفر بليت', countryEn: 'ARGENTINA', countryAr: 'الأرجنتين', flag: '🇦🇷', tier: 4, c1: '#ffffff', c2: '#dc2626', text: 'CARP' },
    { id: 'palmeiras', nameEn: 'PALMEIRAS', nameAr: 'بالميراس', countryEn: 'BRAZIL', countryAr: 'البرازيل', flag: '🇧🇷', tier: 4, c1: '#15803d', c2: '#ffffff', text: 'SEP' },
    { id: 'anderlecht', nameEn: 'ANDERLECHT', nameAr: 'أندرلخت', countryEn: 'BELGIUM', countryAr: 'بلجيكا', flag: '🇧🇪', tier: 4, c1: '#6b21a8', c2: '#ffffff', text: 'RSCA' },
    { id: 'basel', nameEn: 'FC BASEL', nameAr: 'بازل', countryEn: 'SWITZERLAND', countryAr: 'سويسرا', flag: '🇨🇭', tier: 4, c1: '#1e3a8a', c2: '#dc2626', text: 'FCB' },
    { id: 'malmo', nameEn: 'MALMÖ FF', nameAr: 'مالمو', countryEn: 'SWEDEN', countryAr: 'السويد', flag: '🇸🇪', tier: 4, c1: '#38bdf8', c2: '#ffffff', text: 'MFF' },

    // High Roller & Arab/American Destinations
    { id: 'al_hilal', nameEn: 'AL HILAL', nameAr: 'الهلال السعودي', countryEn: 'SAUDI ARABIA', countryAr: 'السعودية', flag: '🇸🇦', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'HIL' },
    { id: 'al_nassr', nameEn: 'AL NASSR', nameAr: 'النصر السعودي', countryEn: 'SAUDI ARABIA', countryAr: 'السعودية', flag: '🇸🇦', tier: 2, c1: '#facc15', c2: '#1e3a8a', text: 'NAS' },
    { id: 'al_ahly', nameEn: 'AL AHLY', nameAr: 'الأهلي المصري', countryEn: 'EGYPT', countryAr: 'مصر', flag: '🇪🇬', tier: 2, c1: '#dc2626', c2: '#ffffff', text: 'ASC' },
    { id: 'zamalek', nameEn: 'ZAMALEK', nameAr: 'الزمالك', countryEn: 'EGYPT', countryAr: 'مصر', flag: '🇪🇬', tier: 3, c1: '#ffffff', c2: '#dc2626', text: 'ZSC' },
    { id: 'inter_miami', nameEn: 'INTER MIAMI', nameAr: 'إنتر ميامي', countryEn: 'USA', countryAr: 'أمريكا', flag: '🇺🇸', tier: 3, c1: '#f472b6', c2: '#000000', text: 'MIA' },
    { id: 'lafc', nameEn: 'LAFC', nameAr: 'لوس أنجلوس', countryEn: 'USA', countryAr: 'أمريكا', flag: '🇺🇸', tier: 3, c1: '#000000', c2: '#d97706', text: 'LA' }
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
        <!-- Shield -->
        <path d="M50 5 L88 20 C88 62 50 95 50 95 C50 95 12 62 12 20 Z" 
              fill="url(#grad-${club.id})" 
              stroke="#0f172a" 
              stroke-width="4" 
              filter="url(#shadow-${club.id})"/>
        <!-- Inner Border -->
        <path d="M50 12 L80 24 C80 57 50 86 50 86 C50 86 20 57 20 24 Z" 
              fill="none" 
              stroke="#ffffff" 
              stroke-width="2.5" 
              stroke-opacity="0.85"/>
        <!-- Monogram -->
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
  // 4. CONFETTI GENERATOR
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
  // 5. TRANSLATIONS & CONSTANTS
  // ==========================================
  const REGIONS = [
    { nameEn: 'SOUTH AMERICA', nameAr: 'أمريكا الجنوبية', flag: '🌎', countriesAr: ['البرازيل', 'الأرجنتين', 'أوروغواي', 'كولومبيا'], countriesEn: ['BRAZIL', 'ARGENTINA', 'URUGUAY', 'COLOMBIA'] },
    { nameEn: 'EUROPE', nameAr: 'أوروبا', flag: '🇪🇺', countriesAr: ['فرنسا', 'إسبانيا', 'إنجلترا', 'ألمانيا', 'البرتغال', 'هولندا', 'إيطاليا'], countriesEn: ['FRANCE', 'SPAIN', 'ENGLAND', 'GERMANY', 'PORTUGAL', 'NETHERLANDS', 'ITALY'] },
    { nameEn: 'AFRICA', nameAr: 'أفريقيا', flag: '🌍', countriesAr: ['مصر', 'المغرب', 'نيجيريا', 'السنغال', 'الجزائر', 'ساحل العاج'], countriesEn: ['EGYPT', 'MOROCCO', 'NIGERIA', 'SENEGAL', 'ALGERIA', 'IVORY COAST'] },
    { nameEn: 'ASIA', nameAr: 'آسيا', flag: '🌏', countriesAr: ['السعودية', 'اليابان', 'كوريا الجنوبية', 'الإمارات'], countriesEn: ['SAUDI ARABIA', 'JAPAN', 'SOUTH KOREA', 'UAE'] },
    { nameEn: 'NORTH AMERICA', nameAr: 'أمريكا الشمالية', flag: '🌎', countriesAr: ['أمريكا', 'المكسيك', 'كندا'], countriesEn: ['USA', 'MEXICO', 'CANADA'] }
  ];

  const POSITIONS = [
    { titleEn: 'STRIKER', titleAr: 'مهاجم صريح', icon: '⚽', statEn: 'CAREER GOALS', statAr: 'أهداف المسيرة' },
    { titleEn: 'WINGER', titleAr: 'جناح هجومي', icon: '⚡', statEn: 'GOALS & ASSISTS', statAr: 'أهداف وصناعة' },
    { titleEn: 'ATTACKING MID', titleAr: 'صانع ألعاب', icon: '🎯', statEn: 'GOALS & ASSISTS', statAr: 'مساهمات تهديفية' },
    { titleEn: 'CENTRAL MID', titleAr: 'لاعب وسط', icon: '🪄', statEn: 'MATCH RATINGS', statAr: 'مساهمات في الوسط' },
    { titleEn: 'CENTRE BACK', titleAr: 'قلب دفاع', icon: '🛡️', statEn: 'CLEAN SHEETS', statAr: 'شباك نظيفة' },
    { titleEn: 'FULL BACK', titleAr: 'ظهير عصري', icon: '💨', statEn: 'TACKLES & ASSISTS', statAr: 'تدخلات وصناعة' },
    { titleEn: 'GOALKEEPER', titleAr: 'حارس مرمى', icon: '🧤', statEn: 'CLEAN SHEETS', statAr: 'شباك نظيفة وتصديات' }
  ];

  const MILESTONES = [18, 20, 22, 24, 26, 28, 30, 32, 34, 'R', 'M'];

  // ==========================================
  // 6. CAREER GAME CONTROLLER
  // ==========================================
  class CareerGame {
    constructor() {
      this.sound = new SoundManager();
      this.confetti = new ConfettiEngine();
      this.lang = 'ar'; // Default Arabic as requested
      this.milestoneIndex = 0;
      this.player = null;
      this.careerHistory = [];
      this.ageClubMap = {}; // Maps age to club { 18: club, 20: club, ... }
      this.totalTrophies = 0;
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
        currentTeamTitle: document.getElementById('currentTeamTitle'),
        currentTeamCrest: document.getElementById('currentTeamCrest'),
        currentTeamName: document.getElementById('currentTeamName'),
        currentTeamCountry: document.getElementById('currentTeamCountry'),
        currentSeasonBadge: document.getElementById('currentSeasonBadge'),
        eventBadgePill: document.getElementById('eventBadgePill'),
        eventBadgeText: document.getElementById('eventBadgeText'),
        narrativeBox: document.getElementById('narrativeBox'),
        narrativeText: document.getElementById('narrativeText'),
        offersGrid: document.getElementById('offersGrid'),
        actionBar: document.getElementById('actionBar'),
        stayBtn: document.getElementById('stayBtn'),
        stayClubName: document.getElementById('stayClubName'),
        trophiesLabel: document.getElementById('trophiesLabel'),
        trophiesCount: document.getElementById('trophiesCount'),
        goalsLabel: document.getElementById('goalsLabel'),
        goalsCount: document.getElementById('goalsCount'),
        earningsLabel: document.getElementById('earningsLabel'),
        careerEarnings: document.getElementById('careerEarnings'),
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
        this.handleStayWithCurrentClub();
      });

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
      this.dom.trophiesLabel.textContent = isAr ? 'البطولات' : 'TROPHIES';
      this.dom.goalsLabel.textContent = isAr ? 'الأهداف / المساهمات' : 'GOALS / CS';
      this.dom.earningsLabel.textContent = isAr ? 'إجمالي الأرباح' : 'CAREER EARNINGS';
      this.dom.modalStatusBadge.textContent = isAr ? 'نهاية المسيرة الكروية' : 'CAREER COMPLETED';
      this.dom.modalSubtitle.textContent = isAr ? 'رحلة تاريخية حافلة بالإنجازات والبطولات' : 'A journey through world football history';
      this.dom.finalSeasonsLabel.textContent = isAr ? 'مواسم' : 'SEASONS';
      this.dom.finalTrophiesLabel.textContent = isAr ? 'بطولات 🏆' : 'TROPHIES 🏆';
      this.dom.finalPeakLabel.textContent = isAr ? 'أعلى قيمة سوقية' : 'PEAK VALUE';
      this.dom.journeyTitle.textContent = isAr ? 'مسيرة الأندية' : 'CLUBS JOURNEY';
      this.dom.managementTitleText.textContent = isAr ? 'المسيرة التدريبية بعد الاعتزال 👔' : 'MANAGERIAL CALLING 👔';
      this.dom.playAgainText.textContent = isAr ? '⚡ بدء مسيرة لاعب جديد' : '⚡ PLAY NEW CAREER';
      this.dom.shareCareerText.textContent = isAr ? '📋 نسخ السيرة الذاتية للمسيرة' : '📋 COPY CAREER RESUME';
    }

    startNewCareer() {
      const regionObj = REGIONS[Math.floor(Math.random() * REGIONS.length)];
      const countryIdx = Math.floor(Math.random() * regionObj.countriesAr.length);
      const positionObj = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
      
      // Starter clubs usually Tier 3 or 4 (Genk, Dinamo Zagreb, Santos, Boca, Anderlecht, etc.)
      const starterClubs = CLUBS.filter(c => c.tier >= 3);
      const startingClub = starterClubs[Math.floor(Math.random() * starterClubs.length)];
      const startingValue = 1.0; // € 1.0M

      this.player = {
        regionObj: regionObj,
        countryAr: regionObj.countriesAr[countryIdx],
        countryEn: regionObj.countriesEn[countryIdx],
        positionObj: positionObj,
        currentClub: startingClub,
        age: 18,
        marketValue: startingValue
      };

      this.milestoneIndex = 0;
      this.ageClubMap = { 18: startingClub };
      this.careerHistory = [{
        age: 18,
        club: startingClub,
        transferred: false,
        trophies: 0,
        statVal: 0
      }];
      this.totalTrophies = 0;
      this.totalStatScore = 0;
      this.totalEarnings = startingValue * 0.4;
      this.peakMarketValue = startingValue;

      // Reset all ladder slots to blank
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

      this.dom.playerRegion.textContent = isAr ? p.regionObj.nameAr : p.regionObj.nameEn;
      this.dom.playerPosition.textContent = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      this.dom.playerAge.textContent = p.age;
      this.dom.playerValue.textContent = this.formatCurrency(p.marketValue);

      // Mini Header Club
      this.dom.miniCrest.innerHTML = generateCrestSVG(p.currentClub, '24px');
      this.dom.miniClubName.textContent = this.getClubName(p.currentClub);
      this.dom.miniClubCountry.textContent = this.getClubCountry(p.currentClub);
      const seasonYear = 2024 + (this.milestoneIndex * 2);
      this.dom.miniSeasonTag.textContent = isAr ? `${seasonYear} م${this.milestoneIndex + 1}` : `${seasonYear} S${this.milestoneIndex + 1}`;

      // Current Team Card
      this.dom.currentTeamCrest.innerHTML = generateCrestSVG(p.currentClub, '32px');
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
      this.dom.trophiesCount.textContent = `🏆 ${this.totalTrophies}`;
      this.dom.goalsCount.textContent = `${p.positionObj.icon} ${this.totalStatScore}`;
      this.dom.careerEarnings.textContent = `💰 ${this.formatCurrency(this.totalEarnings)}`;
    }

    renderTimelineLadder() {
      const currentMilestone = MILESTONES[this.milestoneIndex];
      
      this.dom.ladderRows.forEach((row) => {
        const rowAge = row.dataset.age;
        const rowIdx = MILESTONES.indexOf(isNaN(rowAge) ? rowAge : parseInt(rowAge));
        
        row.classList.remove('active', 'completed');
        if (rowIdx < this.milestoneIndex) {
          row.classList.add('completed');
        } else if (rowIdx === this.milestoneIndex) {
          row.classList.add('active');
        }

        // Fill in club badge and name for played milestones
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
        return `€ ${val.toFixed(val >= 10 ? 0 : 1)}M`;
      } else {
        const k = Math.round(val * 1000);
        return `€ ${k}K`;
      }
    }

    // ==========================================
    // 7. GENERATE MULTIPLE CLUB CHOICES (ALWAYS 2 TO 3 CLUBS)
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

      // Filter eligible clubs (excluding current club)
      let eligibleClubs = CLUBS.filter(c => c.id !== currentClub.id);

      // Realistic tiering logic
      if (age >= 32) {
        eligibleClubs.sort(() => Math.random() - 0.5);
      } else if (currentClub.tier === 1) {
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else if (this.totalTrophies >= 2 || this.player.marketValue >= 30) {
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else {
        eligibleClubs = eligibleClubs.filter(c => c.tier >= 2);
      }

      // Shuffle
      eligibleClubs.sort(() => Math.random() - 0.5);

      // Determine 2 or 3 clubs to offer
      const rand = Math.random();
      let offerCount = (rand > 0.45) ? 3 : 2; // Always 2 or 3 clubs to give multiple choices!

      let badgeTitle = '';
      let narrative = '';

      if (offerCount === 3) {
        badgeTitle = isAr ? '💥 صراع 3 أندية كبرى على ضمك' : '💥 3-CLUB BIDDING FRENZY';
        narrative = isAr
          ? 'ثلاثة أندية كبرى تقتحم السباق وتقدم عروضاً مغرية لضمك في سوق الانتقالات!'
          : 'THREE MAJOR CLUBS ARE COMPETING IN A HEATED BIDDING WAR FOR YOUR SIGNATURE!';
      } else {
        badgeTitle = isAr ? '🟢 نادِيان يتنافسان على ضمك' : '🟢 2 CLUBS INTERESTED';
        narrative = isAr
          ? 'فريقان كبيران يدخلان في مفاوضات رسمية لتقديم عقد احترافي جديد لك!'
          : 'TWO TEAMS ARE CREATING A THRILLING TRANSFER SHOWDOWN BY COMPETING FOR YOUR TALENT!';
      }

      // Pick top diverse clubs
      const chosenClubs = eligibleClubs.slice(0, offerCount);

      this.currentOffers = chosenClubs.map(club => {
        let offerVal = this.calculateOfferValue(club);
        return {
          club: club,
          marketVal: offerVal,
          wageDisplay: `€${(offerVal * 0.12).toFixed(1)}M / ${isAr ? 'سنة' : 'YR'}`
        };
      });

      // Update Badge and Narrative UI
      this.dom.eventBadgeText.textContent = badgeTitle;
      this.dom.narrativeText.textContent = narrative;

      // Render Multiple Offer Cards
      this.dom.offersGrid.innerHTML = '';
      this.currentOffers.forEach((offer, idx) => {
        const card = document.createElement('div');
        card.className = 'offer-card';
        const clubName = this.getClubName(offer.club);
        const clubCountry = this.getClubCountry(offer.club);
        const btnText = isAr ? 'اختر النادي ✍️' : 'SIGN CONTRACT ✍️';

        card.innerHTML = `
          <div class="offer-left">
            <div class="crest-container large">${generateCrestSVG(offer.club, '32px')}</div>
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
          this.handleAcceptOffer(offer);
        });
        this.dom.offersGrid.appendChild(card);
      });

      this.dom.actionBar.style.display = 'flex';
    }

    calculateOfferValue(club) {
      const age = this.player.age;
      let baseVal = this.player.marketValue;

      let ageFactor = 1.0;
      if (age <= 24) ageFactor = 1.35 + Math.random() * 0.4;
      else if (age <= 28) ageFactor = 1.25 + Math.random() * 0.3;
      else if (age <= 30) ageFactor = 1.05 + Math.random() * 0.15;
      else ageFactor = 0.75 + Math.random() * 0.25;

      let tierFactor = 1.0;
      if (club.tier === 1) tierFactor = 1.4;
      else if (club.tier === 2) tierFactor = 1.15;
      else tierFactor = 0.9;

      let finalVal = baseVal * ageFactor * tierFactor;
      return Math.max(0.8, Math.round(finalVal * 10) / 10);
    }

    handleAcceptOffer(offer) {
      this.player.currentClub = offer.club;
      this.player.marketValue = offer.marketVal;
      if (this.player.marketValue > this.peakMarketValue) {
        this.peakMarketValue = this.player.marketValue;
      }
      this.totalEarnings += offer.marketVal * 0.25;

      // Update age club map for timeline ladder display
      this.ageClubMap[this.player.age] = offer.club;

      this.advanceSeason(true, offer.club);
    }

    handleStayWithCurrentClub() {
      const age = this.player.age;
      let valDelta = (age <= 28 ? 1.15 : 0.9) + (Math.random() * 0.2 - 0.1);
      this.player.marketValue = Math.max(0.5, Math.round(this.player.marketValue * valDelta * 10) / 10);
      if (this.player.marketValue > this.peakMarketValue) {
        this.peakMarketValue = this.player.marketValue;
      }
      this.totalEarnings += this.player.marketValue * 0.2;

      // Update age club map for timeline ladder display
      this.ageClubMap[this.player.age] = this.player.currentClub;

      this.advanceSeason(false, this.player.currentClub);
    }

    advanceSeason(transferred, club) {
      const sim = this.simulateSeasonPerformance(club);
      this.totalTrophies += sim.trophies;
      this.totalStatScore += sim.stats;

      if (sim.trophies > 0) {
        this.sound.playTrophy();
        this.confetti.burst(50);
      }

      this.careerHistory.push({
        age: this.player.age,
        club: club,
        transferred: transferred,
        trophies: sim.trophies,
        statVal: sim.stats
      });

      // Move to next milestone index
      this.milestoneIndex++;
      const nextMilestone = MILESTONES[this.milestoneIndex];

      if (typeof nextMilestone === 'number') {
        this.player.age = nextMilestone;
        // Lock in current club for next age if not changed yet
        if (!this.ageClubMap[nextMilestone]) {
          this.ageClubMap[nextMilestone] = this.player.currentClub;
        }
      }

      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
    }

    simulateSeasonPerformance(club) {
      let trophyProb = 0.15;
      if (club.tier === 1) trophyProb = 0.55;
      else if (club.tier === 2) trophyProb = 0.32;
      else if (club.tier === 3) trophyProb = 0.18;
      else trophyProb = 0.08;

      let trophiesWon = 0;
      if (Math.random() < trophyProb) {
        trophiesWon += 1;
        if (club.tier <= 2 && Math.random() < 0.3) {
          trophiesWon += 1; // Champions League / Continental Glory
        }
      }

      const isAttacker = ['STRIKER', 'WINGER', 'ATTACKING MID'].includes(this.player.positionObj.titleEn);
      const isMid = ['CENTRAL MID', 'FULL BACK'].includes(this.player.positionObj.titleEn);
      let stats = 0;

      if (isAttacker) {
        stats = Math.floor(Math.random() * 26) + 16;
      } else if (isMid) {
        stats = Math.floor(Math.random() * 18) + 10;
      } else {
        stats = Math.floor(Math.random() * 20) + 12;
      }

      return { trophies: trophiesWon, stats: stats };
    }

    // ==========================================
    // 8. RETIRING PHASE ('R')
    // ==========================================
    handleRetirementPhase() {
      const isAr = this.lang === 'ar';
      this.dom.eventBadgeText.textContent = isAr ? '👑 حفل اعتزال أسطوري' : '👑 RETIREMENT CEREMONY';
      this.dom.narrativeText.textContent = isAr
        ? 'بعد مسيرة كروية تاريخية مليئة باللحظات الخالدة، تعلق حذاءك رسمياً! مرحلة التدريب بانتظارك.'
        : 'AFTER AN UNFORGETTABLE PLAYING CAREER, YOU HANG UP YOUR BOOTS! MANAGEMENT AWAITS.';
      this.dom.offersGrid.innerHTML = '';
      this.dom.actionBar.style.display = 'none';

      const retireCard = document.createElement('div');
      retireCard.className = 'offer-card';
      retireCard.style.justifyContent = 'center';
      retireCard.style.background = 'var(--primary-yellow)';
      retireCard.innerHTML = `
        <span style="font-family: var(--font-arabic); font-weight: 900; font-size: 1.05rem; color: #000;">
          ${isAr ? 'الانتقال إلى عالم التدريب 👔 ➡️' : 'PROCEED TO MANAGEMENT PHASE 👔 ➡️'}
        </span>
      `;
      retireCard.addEventListener('click', () => {
        this.sound.playClick();
        this.milestoneIndex++; // Move to 'M'
        this.renderTimelineLadder();
        this.handleManagementPhase();
      });
      this.dom.offersGrid.appendChild(retireCard);
      this.confetti.burst(60);
    }

    // ==========================================
    // 9. MANAGEMENT PHASE & CAREER RECAP ('M')
    // ==========================================
    handleManagementPhase() {
      const isAr = this.lang === 'ar';
      this.sound.playTrophy();
      this.confetti.burst(90);

      let managerClub;
      let managerTitle = isAr ? 'المدير الفني والمدرب العام' : 'HEAD COACH & TACTICAL MASTERMIND';

      if (this.totalTrophies >= 4 || this.peakMarketValue >= 70) {
        const eliteClubs = CLUBS.filter(c => c.tier === 1);
        managerClub = eliteClubs[Math.floor(Math.random() * eliteClubs.length)];
      } else {
        managerClub = this.careerHistory[this.careerHistory.length - 1].club;
      }

      let rating = '';
      if (this.totalTrophies >= 6 && this.peakMarketValue >= 80) {
        rating = isAr ? 'الأعظم في التاريخ (GOAT) 🐐' : 'THE GOAT 🐐';
      } else if (this.totalTrophies >= 3 || this.peakMarketValue >= 60) {
        rating = isAr ? 'أسطورة كروية عالمية 🌟' : 'WORLD CLASS LEGEND 🌟';
      } else if (this.careerHistory.length >= 5) {
        rating = isAr ? 'رحالة كروي استثنائي 🌍' : 'ICONIC JOURNEYMAN 🌍';
      } else {
        rating = isAr ? 'بطل الجماهير والمحبوب ⭐' : 'CULT HERO ⭐';
      }

      // Populate Modal
      this.dom.modalTitle.textContent = isAr ? `مسيرة ${rating}` : `THE LEGACY OF ${rating}`;
      this.dom.finalRegion.textContent = isAr ? this.player.regionObj.nameAr : this.player.regionObj.nameEn;
      this.dom.finalPosition.textContent = isAr ? this.player.positionObj.titleAr : this.player.positionObj.titleEn;
      this.dom.finalRating.textContent = rating;
      this.dom.finalSeasons.textContent = '10';
      this.dom.finalTrophies.textContent = this.totalTrophies;
      this.dom.finalGoalTitle.textContent = isAr ? this.player.positionObj.statAr : this.player.positionObj.statEn;
      this.dom.finalGoals.textContent = this.totalStatScore;
      this.dom.finalPeakVal.textContent = this.formatCurrency(this.peakMarketValue);

      // Clubs Trail
      this.dom.clubsTrail.innerHTML = '';
      const uniqueClubs = [];
      this.careerHistory.forEach(h => {
        if (!uniqueClubs.find(c => c.id === h.club.id)) {
          uniqueClubs.push(h.club);
        }
      });
      uniqueClubs.forEach(club => {
        const badge = document.createElement('div');
        badge.className = 'trail-badge';
        badge.innerHTML = `<span>${club.flag}</span> <span>${this.getClubName(club)}</span>`;
        this.dom.clubsTrail.appendChild(badge);
      });

      // Managerial Calling
      this.dom.managerCrest.innerHTML = generateCrestSVG(managerClub, '32px');
      this.dom.managerClubName.textContent = this.getClubName(managerClub);
      this.dom.managerRoleTitle.textContent = managerTitle;

      // Show Modal
      this.dom.careerModal.classList.add('active');
    }

    copyCareerResume() {
      const isAr = this.lang === 'ar';
      const p = this.player;
      const pos = isAr ? p.positionObj.titleAr : p.positionObj.titleEn;
      const reg = isAr ? p.regionObj.nameAr : p.regionObj.nameEn;
      const statTitle = isAr ? p.positionObj.statAr : p.positionObj.statEn;
      const mgrClub = this.dom.managerClubName.textContent;
      const rank = this.dom.finalRating.textContent;

      const resume = isAr ? `
⚽ سيرة مسيرة لاعب كرة القدم ⚽
👤 المركز: ${pos} (${reg})
🏆 إجمالي البطولات: ${this.totalTrophies}
📊 المساهمات (${statTitle}): ${this.totalStatScore}
💎 أعلى قيمة سوقية: ${this.formatCurrency(this.peakMarketValue)}
💰 إجمالي الأرباح: ${this.formatCurrency(this.totalEarnings)}
👔 النادي بعد التدريب: ${mgrClub}
🌟 التصنيف التاريخي: ${rank}

العب الآن: https://mlyounesml.github.io/football-career-simulator/
      `.trim() : `
⚽ FOOTBALL PLAYER CAREER SIMULATOR SUMMARY ⚽
👤 Position: ${pos} (${reg})
🏆 Total Trophies: ${this.totalTrophies}
📊 Total Performance: ${this.totalStatScore} (${statTitle})
💎 Peak Market Value: ${this.formatCurrency(this.peakMarketValue)}
💰 Total Earnings: ${this.formatCurrency(this.totalEarnings)}
👔 Management Club: ${mgrClub}
🌟 Legacy Rank: ${rank}

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
