/**
 * FOOTBALL PLAYER CAREER SIMULATOR
 * Inspired by TikTok / Reels filter games
 * 20% Football Realism & Logic / 80% RNG & Luck
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CLUBS DATABASE (45+ Real Clubs with SVG Crests)
  // ==========================================
  const CLUBS = [
    // Tier 1: World Elite
    { id: 'real_madrid', name: 'REAL MADRID', country: 'SPAIN', flag: '🇪🇸', tier: 1, c1: '#ffffff', c2: '#1e3a8a', text: 'RM' },
    { id: 'man_city', name: 'MANCHESTER CITY', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#6ee7b7', c2: '#0284c7', text: 'MC' },
    { id: 'bayern', name: 'BAYERN MUNICH', country: 'GERMANY', flag: '🇩🇪', tier: 1, c1: '#dc2626', c2: '#ffffff', text: 'FCB' },
    { id: 'psg', name: 'PARIS SG', country: 'FRANCE', flag: '🇫🇷', tier: 1, c1: '#1e293b', c2: '#ef4444', text: 'PSG' },
    { id: 'barcelona', name: 'BARCELONA', country: 'SPAIN', flag: '🇪🇸', tier: 1, c1: '#991b1b', c2: '#1e3a8a', text: 'FCB' },
    { id: 'arsenal', name: 'ARSENAL', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#ef4444', c2: '#ffffff', text: 'AFC' },
    { id: 'liverpool', name: 'LIVERPOOL', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 1, c1: '#b91c1c', c2: '#facc15', text: 'LFC' },
    { id: 'inter', name: 'INTER MILAN', country: 'ITALY', flag: '🇮🇹', tier: 1, c1: '#1d4ed8', c2: '#000000', text: 'IM' },

    // Tier 2: European Giants
    { id: 'dortmund', name: 'DORTMUND', country: 'GERMANY', flag: '🇩🇪', tier: 2, c1: '#facc15', c2: '#000000', text: 'BVB' },
    { id: 'atletico', name: 'ATLÉTICO MADRID', country: 'SPAIN', flag: '🇪🇸', tier: 2, c1: '#dc2626', c2: '#1d4ed8', text: 'ATM' },
    { id: 'juventus', name: 'JUVENTUS', country: 'ITALY', flag: '🇮🇹', tier: 2, c1: '#000000', c2: '#ffffff', text: 'JUV' },
    { id: 'ac_milan', name: 'AC MILAN', country: 'ITALY', flag: '🇮🇹', tier: 2, c1: '#b91c1c', c2: '#000000', text: 'ACM' },
    { id: 'chelsea', name: 'CHELSEA', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'CFC' },
    { id: 'man_united', name: 'MAN UNITED', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#dc2626', c2: '#facc15', text: 'MU' },
    { id: 'tottenham', name: 'TOTTENHAM', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#ffffff', c2: '#0f172a', text: 'TH' },
    { id: 'napoli', name: 'NAPOLI', country: 'ITALY', flag: '🇮🇹', tier: 2, c1: '#38bdf8', c2: '#ffffff', text: 'NAP' },
    { id: 'benfica', name: 'BENFICA', country: 'PORTUGAL', flag: '🇵🇹', tier: 2, c1: '#dc2626', c2: '#ffffff', text: 'SLB' },
    { id: 'sporting', name: 'SPORTING CP', country: 'PORTUGAL', flag: '🇵🇹', tier: 2, c1: '#047857', c2: '#ffffff', text: 'SCP' },
    { id: 'ajax', name: 'AJAX', country: 'NETHERLANDS', flag: '🇳🇱', tier: 2, c1: '#ffffff', c2: '#dc2626', text: 'AFCA' },
    { id: 'porto', name: 'PORTO', country: 'PORTUGAL', flag: '🇵🇹', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'FCP' },
    { id: 'leverkusen', name: 'LEVERKUSEN', country: 'GERMANY', flag: '🇩🇪', tier: 2, c1: '#b91c1c', c2: '#000000', text: 'B04' },
    { id: 'aston_villa', name: 'ASTON VILLA', country: 'ENGLAND', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tier: 2, c1: '#6b21a8', c2: '#38bdf8', text: 'AVFC' },

    // Tier 3: Competitive Mid / High Tier
    { id: 'genk', name: 'GENK', country: 'BELGIUM', flag: '🇧🇪', tier: 3, c1: '#1d4ed8', c2: '#ffffff', text: 'GNK' },
    { id: 'club_brugge', name: 'CLUB BRUGGE', country: 'BELGIUM', flag: '🇧🇪', tier: 3, c1: '#1e3a8a', c2: '#000000', text: 'CLU' },
    { id: 'feyenoord', name: 'FEYENOORD', country: 'NETHERLANDS', flag: '🇳🇱', tier: 3, c1: '#dc2626', c2: '#ffffff', text: 'FEY' },
    { id: 'sevilla', name: 'SEVILLA', country: 'SPAIN', flag: '🇪🇸', tier: 3, c1: '#ffffff', c2: '#dc2626', text: 'SFC' },
    { id: 'roma', name: 'AS ROMA', country: 'ITALY', flag: '🇮🇹', tier: 3, c1: '#991b1b', c2: '#f59e0b', text: 'ASR' },
    { id: 'marseille', name: 'MARSEILLE', country: 'FRANCE', flag: '🇫🇷', tier: 3, c1: '#38bdf8', c2: '#ffffff', text: 'OM' },
    { id: 'panathinaikos', name: 'PANATHINAIKOS', country: 'GREECE', flag: '🇬🇷', tier: 3, c1: '#15803d', c2: '#ffffff', text: 'PAO' },
    { id: 'olympiacos', name: 'OLYMPIACOS', country: 'GREECE', flag: '🇬🇷', tier: 3, c1: '#dc2626', c2: '#ffffff', text: 'OLY' },
    { id: 'celtic', name: 'CELTIC', country: 'SCOTLAND', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', tier: 3, c1: '#16a34a', c2: '#ffffff', text: 'CEL' },
    { id: 'galatasaray', name: 'GALATASARAY', country: 'TURKEY', flag: '🇹🇷', tier: 3, c1: '#b91c1c', c2: '#f59e0b', text: 'GS' },
    { id: 'fenerbahce', name: 'FENERBAHÇE', country: 'TURKEY', flag: '🇹🇷', tier: 3, c1: '#1e3a8a', c2: '#facc15', text: 'FB' },
    { id: 'sociedad', name: 'REAL SOCIEDAD', country: 'SPAIN', flag: '🇪🇸', tier: 3, c1: '#1d4ed8', c2: '#ffffff', text: 'RSO' },

    // Tier 4: Starting Academies & Historic Incubators
    { id: 'dinamo_zagreb', name: 'DINAMO ZAGREB', country: 'CROATIA', flag: '🇭🇷', tier: 4, c1: '#1d4ed8', c2: '#ffffff', text: 'GNK' },
    { id: 'red_star', name: 'RED STAR', country: 'SERBIA', flag: '🇷🇸', tier: 4, c1: '#dc2626', c2: '#ffffff', text: 'CZV' },
    { id: 'santos', name: 'SANTOS FC', country: 'BRAZIL', flag: '🇧🇷', tier: 4, c1: '#ffffff', c2: '#000000', text: 'SFC' },
    { id: 'boca_juniors', name: 'BOCA JUNIORS', country: 'ARGENTINA', flag: '🇦🇷', tier: 4, c1: '#1e3a8a', c2: '#facc15', text: 'CABJ' },
    { id: 'river_plate', name: 'RIVER PLATE', country: 'ARGENTINA', flag: '🇦🇷', tier: 4, c1: '#ffffff', c2: '#dc2626', text: 'CARP' },
    { id: 'palmeiras', name: 'PALMEIRAS', country: 'BRAZIL', flag: '🇧🇷', tier: 4, c1: '#15803d', c2: '#ffffff', text: 'SEP' },
    { id: 'anderlecht', name: 'ANDERLECHT', country: 'BELGIUM', flag: '🇧🇪', tier: 4, c1: '#6b21a8', c2: '#ffffff', text: 'RSCA' },
    { id: 'basel', name: 'FC BASEL', country: 'SWITZERLAND', flag: '🇨🇭', tier: 4, c1: '#1e3a8a', c2: '#dc2626', text: 'FCB' },
    { id: 'malmo', name: 'MALMÖ FF', country: 'SWEDEN', flag: '🇸🇪', tier: 4, c1: '#38bdf8', c2: '#ffffff', text: 'MFF' },

    // High Roller & Twilight Destinations
    { id: 'al_hilal', name: 'AL HILAL', country: 'SAUDI ARABIA', flag: '🇸🇦', tier: 2, c1: '#1d4ed8', c2: '#ffffff', text: 'HIL' },
    { id: 'al_nassr', name: 'AL NASSR', country: 'SAUDI ARABIA', flag: '🇸🇦', tier: 2, c1: '#facc15', c2: '#1e3a8a', text: 'NAS' },
    { id: 'inter_miami', name: 'INTER MIAMI', country: 'USA', flag: '🇺🇸', tier: 3, c1: '#f472b6', c2: '#000000', text: 'MIA' },
    { id: 'lafc', name: 'LAFC', country: 'USA', flag: '🇺🇸', tier: 3, c1: '#000000', c2: '#d97706', text: 'LA' }
  ];

  // ==========================================
  // 2. SVG CREST GENERATOR (Crisp vector badge)
  // ==========================================
  function generateCrestSVG(club) {
    return `
      <svg class="crest-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-${club.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${club.c1}" />
            <stop offset="100%" stop-color="${club.c2}" />
          </linearGradient>
          <filter id="shadow-${club.id}" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
          </filter>
        </defs>
        <!-- Shield Background -->
        <path d="M50 5 L88 20 C88 60 50 95 50 95 C50 95 12 60 12 20 Z" 
              fill="url(#grad-${club.id})" 
              stroke="#0f172a" 
              stroke-width="4" 
              filter="url(#shadow-${club.id})"/>
        <!-- Inner Border -->
        <path d="M50 12 L80 24 C80 57 50 86 50 86 C50 86 20 57 20 24 Z" 
              fill="none" 
              stroke="#ffffff" 
              stroke-width="2.5" 
              stroke-opacity="0.8"/>
        <!-- Club Monogram/Text -->
        <text x="50" y="56" 
              font-family="Montserrat, sans-serif" 
              font-size="22" 
              font-weight="900" 
              fill="${club.c1 === '#ffffff' ? '#000' : '#fff'}" 
              text-anchor="middle" 
              dominant-baseline="central"
              letter-spacing="0.5">
          ${club.text}
        </text>
      </svg>
    `;
  }

  // ==========================================
  // 3. SOUND SYNTHESIZER (Native Web Audio API)
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
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, this.audioCtx.currentTime + 0.08);
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
        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
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
        gain.gain.setValueAtTime(0.1, now);
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
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  }

  // ==========================================
  // 4. CONFETTI GENERATOR (Interactive celebration)
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

    burst(count = 65) {
      const colors = ['#fbbf24', '#ec4899', '#3b82f6', '#10b981', '#ffffff', '#a855f7'];
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
        p.vy += 0.35; // gravity
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
  // 5. CAREER GAME ENGINE
  // ==========================================
  const REGIONS = [
    { name: 'SOUTH AMERICA', flag: '🌎', countries: ['BRAZIL', 'ARGENTINA', 'URUGUAY', 'COLOMBIA'] },
    { name: 'EUROPE', flag: '🇪🇺', countries: ['FRANCE', 'SPAIN', 'ENGLAND', 'GERMANY', 'PORTUGAL', 'NETHERLANDS'] },
    { name: 'AFRICA', flag: '🌍', countries: ['NIGERIA', 'SENEGAL', 'MOROCCO', 'IVORY COAST', 'EGYPT'] },
    { name: 'ASIA', flag: '🌏', countries: ['JAPAN', 'SOUTH KOREA', 'SAUDI ARABIA'] },
    { name: 'NORTH AMERICA', flag: '🌎', countries: ['USA', 'CANADA', 'MEXICO'] }
  ];

  const POSITIONS = [
    { title: 'STRIKER', icon: '⚽', statName: 'CAREER GOALS' },
    { title: 'WINGER', icon: '⚡', statName: 'GOALS & ASSISTS' },
    { title: 'ATTACKING MID', icon: '🎯', statName: 'GOALS & ASSISTS' },
    { title: 'CENTRAL MID', icon: '🪄', statName: 'MATCH CONTRIBUTIONS' },
    { title: 'CENTRE BACK', icon: '🛡️', statName: 'CLEAN SHEETS' },
    { title: 'FULL BACK', icon: '💨', statName: 'DEFENSIVE DUELS' },
    { title: 'GOALKEEPER', icon: '🧤', statName: 'CLEAN SHEETS' }
  ];

  const MILESTONES = [18, 20, 22, 24, 26, 28, 30, 32, 34, 'R', 'M'];

  class CareerGame {
    constructor() {
      this.sound = new SoundManager();
      this.confetti = new ConfettiEngine();
      this.milestoneIndex = 0;
      this.player = null;
      this.careerHistory = [];
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
        audioToggleBtn: document.getElementById('audioToggleBtn'),
        audioIcon: document.getElementById('audioIcon'),
        restartGameBtn: document.getElementById('restartGameBtn'),
        miniCrest: document.getElementById('miniCrest'),
        miniClubName: document.getElementById('miniClubName'),
        miniClubCountry: document.getElementById('miniClubCountry'),
        miniSeasonTag: document.getElementById('miniSeasonTag'),
        timelineLadder: document.getElementById('timelineLadder'),
        ladderSteps: document.querySelectorAll('.ladder-step'),
        playerRegion: document.getElementById('playerRegion'),
        playerPosition: document.getElementById('playerPosition'),
        playerAge: document.getElementById('playerAge'),
        playerValue: document.getElementById('playerValue'),
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
        trophiesCount: document.getElementById('trophiesCount'),
        goalsCount: document.getElementById('goalsCount'),
        careerEarnings: document.getElementById('careerEarnings'),
        careerModal: document.getElementById('careerModal'),
        modalTitle: document.getElementById('modalTitle'),
        modalSubtitle: document.getElementById('modalSubtitle'),
        finalRegion: document.getElementById('finalRegion'),
        finalPosition: document.getElementById('finalPosition'),
        finalRating: document.getElementById('finalRating'),
        finalSeasons: document.getElementById('finalSeasons'),
        finalTrophies: document.getElementById('finalTrophies'),
        finalGoals: document.getElementById('finalGoals'),
        finalGoalTitle: document.getElementById('finalGoalTitle'),
        finalPeakVal: document.getElementById('finalPeakVal'),
        clubsTrail: document.getElementById('clubsTrail'),
        managementReveal: document.getElementById('managementReveal'),
        managerCrest: document.getElementById('managerCrest'),
        managerClubName: document.getElementById('managerClubName'),
        managerRoleTitle: document.getElementById('managerRoleTitle'),
        playAgainBtn: document.getElementById('playAgainBtn'),
        shareCareerBtn: document.getElementById('shareCareerBtn')
      };
    }

    bindEvents() {
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

    // Generate fresh player profile at Age 18
    startNewCareer() {
      const regionObj = REGIONS[Math.floor(Math.random() * REGIONS.length)];
      const country = regionObj.countries[Math.floor(Math.random() * regionObj.countries.length)];
      const positionObj = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
      
      // Starter clubs usually Tier 3 or 4 (e.g. Genk, Dinamo Zagreb, Santos, Boca, Anderlecht)
      const starterClubs = CLUBS.filter(c => c.tier >= 3);
      const startingClub = starterClubs[Math.floor(Math.random() * starterClubs.length)];
      const startingValue = 1.0; // € 1.0M

      this.player = {
        region: regionObj.name,
        country: country,
        position: positionObj.title,
        positionObj: positionObj,
        currentClub: startingClub,
        age: 18,
        marketValue: startingValue
      };

      this.milestoneIndex = 0;
      this.careerHistory = [{
        age: 18,
        club: startingClub,
        transferred: false,
        trophies: 0,
        statVal: 0
      }];
      this.totalTrophies = 0;
      this.totalStatScore = 0;
      this.totalEarnings = startingValue * 0.35; // base signing
      this.peakMarketValue = startingValue;

      this.dom.careerModal.classList.remove('active');
      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
      this.sound.playWhistle();
    }

    renderPlayerHUD() {
      const p = this.player;
      this.dom.playerRegion.textContent = p.region;
      this.dom.playerPosition.textContent = p.position;
      this.dom.playerAge.textContent = p.age;
      this.dom.playerValue.textContent = this.formatCurrency(p.marketValue);

      // Mini Header Club
      this.dom.miniCrest.innerHTML = generateCrestSVG(p.currentClub);
      this.dom.miniClubName.textContent = p.currentClub.name;
      this.dom.miniClubCountry.textContent = p.currentClub.country;
      const seasonYear = 2024 + (this.milestoneIndex * 2);
      this.dom.miniSeasonTag.textContent = `${seasonYear} S${this.milestoneIndex + 1}`;

      // Main HUD Team Card
      this.dom.currentTeamCrest.innerHTML = generateCrestSVG(p.currentClub);
      this.dom.currentTeamName.textContent = p.currentClub.name;
      this.dom.currentTeamCountry.textContent = p.currentClub.country;
      this.dom.currentSeasonBadge.textContent = `${seasonYear} S${this.milestoneIndex + 1}`;

      this.dom.stayClubName.textContent = p.currentClub.name;

      // Bottom Ribbon
      this.dom.trophiesCount.textContent = `🏆 ${this.totalTrophies}`;
      this.dom.goalsCount.textContent = `${p.positionObj.icon} ${this.totalStatScore}`;
      this.dom.careerEarnings.textContent = `💰 ${this.formatCurrency(this.totalEarnings)}`;
    }

    renderTimelineLadder() {
      const currentMilestone = MILESTONES[this.milestoneIndex];
      this.dom.ladderSteps.forEach((step) => {
        const stepAge = step.dataset.age;
        const stepIdx = MILESTONES.indexOf(isNaN(stepAge) ? stepAge : parseInt(stepAge));
        
        step.classList.remove('active', 'completed');
        if (stepIdx < this.milestoneIndex) {
          step.classList.add('completed');
        } else if (stepIdx === this.milestoneIndex) {
          step.classList.add('active');
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
    // 6. GENERATE MILESTONE EVENTS (20% Logic / 80% RNG)
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

      // 80% RNG Event Type determination
      const rand = Math.random();
      let eventType = 'double_offer'; // Default showdown

      if (this.milestoneIndex === 0) {
        // Age 18: Debut season! Offers from higher clubs or domestic rivals
        eventType = 'double_offer';
      } else if (rand < 0.35) {
        eventType = 'double_offer'; // 2 Clubs Interested
      } else if (rand < 0.60) {
        eventType = 'triple_frenzy'; // 3 Clubs Bidding frenzy
      } else if (rand < 0.80) {
        eventType = 'wonderkid_spike'; // Mega offer / Hype explosion
      } else {
        eventType = 'contract_or_transfer'; // Contract extension vs 1 mega offer
      }

      this.populateOffersForAge(eventType);
    }

    populateOffersForAge(eventType) {
      const age = this.player.age;
      const currentClub = this.player.currentClub;
      let eligibleClubs = CLUBS.filter(c => c.id !== currentClub.id);

      // Realistic tiering logic (20% Logic):
      if (age >= 32) {
        // Twilight years: Mix in high paying exotic or sentimental clubs
        eligibleClubs.sort(() => Math.random() - 0.5);
      } else if (currentClub.tier === 1) {
        // Player already at elite tier: Offers from other giants or top European clubs
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else if (this.totalTrophies >= 2 || this.player.marketValue >= 35) {
        // Rising star unlocking top tier
        eligibleClubs = eligibleClubs.filter(c => c.tier <= 2);
      } else {
        // Mid tier or starter
        eligibleClubs = eligibleClubs.filter(c => c.tier >= 2);
      }

      // Shuffle eligible clubs
      eligibleClubs.sort(() => Math.random() - 0.5);

      let offerCount = 2;
      let badgeTitle = '2 CLUBS INTERESTED';
      let narrative = 'TWO TEAMS ARE CREATING A THRILLING TRANSFER SHOWDOWN BY COMPETING FOR YOUR TALENT!';

      if (eventType === 'triple_frenzy') {
        offerCount = 3;
        badgeTitle = '💥 3-CLUB BIDDING WAR';
        narrative = 'MULTIPLE EUROPEAN GIANTS HAVE SUBMITTED OFFICIAL BIDS FOR YOUR SIGNATURE!';
      } else if (eventType === 'wonderkid_spike') {
        offerCount = 2;
        badgeTitle = '⭐ GLOBAL HYPE SURGE';
        narrative = 'YOUR RECENT PERFORMANCES HAVE ATTRACTED MASSIVE HIGH-PROFILE OFFERS!';
      } else if (eventType === 'contract_or_transfer') {
        offerCount = 1;
        badgeTitle = '📋 BLOCKBUSTER BID';
        narrative = 'A MAJOR CLUB HAS TRIGGERED YOUR RELEASE CLAUSE! WILL YOU ACCEPT OR STAY?';
      }

      this.currentOffers = eligibleClubs.slice(0, offerCount).map(club => {
        // Calculate realistic proposed value
        let offerVal = this.calculateOfferValue(club);
        return {
          club: club,
          marketVal: offerVal,
          wageDisplay: `€${(offerVal * 0.12).toFixed(1)}M / YR`
        };
      });

      // Update Badge and Narrative UI
      this.dom.eventBadgeText.textContent = badgeTitle;
      this.dom.narrativeText.textContent = narrative;

      // Render Offer Cards
      this.dom.offersGrid.innerHTML = '';
      this.currentOffers.forEach(offer => {
        const card = document.createElement('div');
        card.className = 'offer-card';
        card.innerHTML = `
          <div class="offer-left">
            <div class="crest-container large">${generateCrestSVG(offer.club)}</div>
            <div class="offer-details">
              <span class="offer-club-name">${offer.club.name}</span>
              <span class="offer-country">${offer.club.flag} ${offer.club.country}</span>
            </div>
          </div>
          <div class="offer-right">
            <span class="offer-contract">${offer.wageDisplay}</span>
            <span class="offer-select-badge">SIGN CONTRACT ✍️</span>
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

      // Realism: Age Curve modifier
      let ageFactor = 1.0;
      if (age <= 24) ageFactor = 1.35 + Math.random() * 0.4;
      else if (age <= 28) ageFactor = 1.25 + Math.random() * 0.3;
      else if (age <= 30) ageFactor = 1.05 + Math.random() * 0.15;
      else ageFactor = 0.75 + Math.random() * 0.25;

      // Club Tier bonus
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
      this.totalEarnings += offer.marketVal * 0.25; // Wage cut + signing fee

      this.advanceSeason(true, offer.club);
    }

    handleStayWithCurrentClub() {
      // Reward for loyalty with moderate value update
      const age = this.player.age;
      let valDelta = (age <= 28 ? 1.15 : 0.9) + (Math.random() * 0.2 - 0.1);
      this.player.marketValue = Math.max(0.5, Math.round(this.player.marketValue * valDelta * 10) / 10);
      if (this.player.marketValue > this.peakMarketValue) {
        this.peakMarketValue = this.player.marketValue;
      }
      this.totalEarnings += this.player.marketValue * 0.2;

      this.advanceSeason(false, this.player.currentClub);
    }

    advanceSeason(transferred, club) {
      // Simulate performance stats & trophies for the 2-year season milestone
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

      // Advance milestone index
      this.milestoneIndex++;
      const nextMilestone = MILESTONES[this.milestoneIndex];

      if (typeof nextMilestone === 'number') {
        this.player.age = nextMilestone;
      }

      this.renderPlayerHUD();
      this.renderTimelineLadder();
      this.generateMilestoneEvents();
    }

    simulateSeasonPerformance(club) {
      // 20% Realism based on club tier + 80% RNG
      let trophyProb = 0.15;
      if (club.tier === 1) trophyProb = 0.55;
      else if (club.tier === 2) trophyProb = 0.32;
      else if (club.tier === 3) trophyProb = 0.18;
      else trophyProb = 0.08;

      let trophiesWon = 0;
      if (Math.random() < trophyProb) {
        trophiesWon += 1; // Domestic Cup / League
        if (club.tier <= 2 && Math.random() < 0.3) {
          trophiesWon += 1; // European Glory (UCL)
        }
      }

      // Stats based on position
      const isAttacker = ['STRIKER', 'WINGER', 'ATTACKING MID'].includes(this.player.position);
      const isMid = ['CENTRAL MID', 'FULL BACK'].includes(this.player.position);
      let stats = 0;

      if (isAttacker) {
        stats = Math.floor(Math.random() * 26) + 16; // 16 to 42 goals per 2 seasons
      } else if (isMid) {
        stats = Math.floor(Math.random() * 18) + 10;
      } else {
        stats = Math.floor(Math.random() * 20) + 12; // clean sheets
      }

      return { trophies: trophiesWon, stats: stats };
    }

    // ==========================================
    // 7. RETIRING PHASE ('R')
    // ==========================================
    handleRetirementPhase() {
      this.dom.eventBadgeText.textContent = '👑 RETIREMENT CEREMONY';
      this.dom.narrativeText.textContent = 'AFTER AN UNFORGETTABLE PLAYING CAREER, YOU HANG UP YOUR BOOTS! GLORY AWAITS IN THE NEXT CHAPTER.';
      this.dom.offersGrid.innerHTML = '';
      this.dom.actionBar.style.display = 'none';

      // Show Retirement Button
      const retireCard = document.createElement('div');
      retireCard.className = 'offer-card';
      retireCard.style.justifyContent = 'center';
      retireCard.style.background = 'var(--primary-yellow)';
      retireCard.innerHTML = `
        <span style="font-family: var(--font-display); font-weight: 900; font-size: 1.05rem; color: #000;">
          PROCEED TO MANAGEMENT PHASE 👔 ➡️
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
    // 8. MANAGEMENT PHASE & CAREER RECAP ('M')
    // ==========================================
    handleManagementPhase() {
      this.sound.playTrophy();
      this.confetti.burst(90);

      // Determine Managerial Offer based on career prestige
      let managerClub;
      let managerTitle = 'HEAD COACH & TACTICAL GENIUS';

      if (this.totalTrophies >= 4 || this.peakMarketValue >= 70) {
        // Elite club offer
        const eliteClubs = CLUBS.filter(c => c.tier === 1);
        managerClub = eliteClubs[Math.floor(Math.random() * eliteClubs.length)];
      } else {
        // Former club or Mid-tier club
        managerClub = this.careerHistory[this.careerHistory.length - 1].club;
      }

      // Legacy Title Rating
      let rating = 'CULT HERO ⭐';
      if (this.totalTrophies >= 6 && this.peakMarketValue >= 80) {
        rating = 'THE GOAT 🐐';
      } else if (this.totalTrophies >= 3 || this.peakMarketValue >= 60) {
        rating = 'WORLD CLASS LEGEND 🌟';
      } else if (this.careerHistory.length >= 5) {
        rating = 'ICONIC JOURNEYMAN 🌍';
      } else {
        rating = 'FAN FAVORITE WARRIOR ⚔️';
      }

      // Populate Modal Elements
      this.dom.modalTitle.textContent = `THE LEGACY OF A ${rating.split(' ')[0]}`;
      this.dom.finalRegion.textContent = this.player.region;
      this.dom.finalPosition.textContent = this.player.position;
      this.dom.finalRating.textContent = rating;
      this.dom.finalSeasons.textContent = '10 SEASONS';
      this.dom.finalTrophies.textContent = this.totalTrophies;
      this.dom.finalGoalTitle.textContent = this.player.positionObj.statName;
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
        badge.innerHTML = `<span>${club.flag}</span> <span>${club.name}</span>`;
        this.dom.clubsTrail.appendChild(badge);
      });

      // Managerial Calling
      this.dom.managerCrest.innerHTML = generateCrestSVG(managerClub);
      this.dom.managerClubName.textContent = managerClub.name;
      this.dom.managerRoleTitle.textContent = managerTitle;

      // Show Career Modal Overlay
      this.dom.careerModal.classList.add('active');
    }

    copyCareerResume() {
      const resume = `
⚽ FOOTBALL PLAYER CAREER SIMULATOR SUMMARY ⚽
👤 Position: ${this.player.position} (${this.player.region})
🏆 Total Trophies: ${this.totalTrophies}
📊 Total Performance: ${this.totalStatScore} (${this.player.positionObj.statName})
💎 Peak Market Value: ${this.formatCurrency(this.peakMarketValue)}
💰 Total Earnings: ${this.formatCurrency(this.totalEarnings)}
👔 Management Club: ${this.dom.managerClubName.textContent}
🌟 Legacy Rank: ${this.dom.finalRating.textContent}

Play now: https://mlyounesml.github.io/football-career-simulator/
      `.trim();

      navigator.clipboard.writeText(resume).then(() => {
        this.dom.shareCareerBtn.innerHTML = '<span>✅ COPIED TO CLIPBOARD!</span>';
        setTimeout(() => {
          this.dom.shareCareerBtn.innerHTML = '<span>📋 COPY CAREER RESUME</span>';
        }, 2500);
      }).catch(() => {
        alert('Career resume copied!');
      });
    }
  }

  // Initialize Game on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.game = new CareerGame();
  });
})();
