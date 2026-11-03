// The AIvisible Orchestra — Client Application Engine
// High-conversion, intuitive, modern Webflow-grade interactivity
(function() {
  'use strict';

  const B = window.BOOK;
  if (!B) return console.error('BOOK content not loaded');

  // App State
  let state = {
    activeSection: 'all',
    activeFramework: 'growth-physics',
    activeAgent: 'brand-os',
    formTab: 'preorder',
    physicsScores: {
      memory: 4,
      relevance: 3,
      proof: 2,
      consensus: 3,
      experience: 4,
      learning: 2
    },
    cdiScores: {
      role: 8,
      goal: 12,
      evidence: 14,
      risk: 10,
      ownership: 6
    }
  };

  // DOM Elements
  const app = document.getElementById('app');
  const progressBar = document.getElementById('progress-bar');

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progressBar) progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }, { passive: true });

  // Render Full Application
  function initApp() {
    renderHome();
    setupEventListeners();
    setupCalculators();
    setup3DTilt();
  }

  function renderHome() {
    app.innerHTML = `
      <!-- HERO SECTION -->
      <section class="section hero-section" id="hero">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <div class="badge-pill dark">
                <span class="badge-dot"></span>
                <span>The 2026 B2B Marketing Manifesto</span>
              </div>
              <h1>The Operating System for B2B Growth in the <span class="text-gradient">Age of AI.</span></h1>
              <p>Time-tested reflections with a 360-degree B2B marketing framework to win in the AI era. Built on lived enterprise wisdom, not marketing fashion.</p>
              
              <div class="hero-cta-group">
                <a href="#preorder" class="btn-pill btn-primary">
                  <span>Reserve First Edition</span>
                  <span class="icon-disc">↗</span>
                </a>
                <a href="#frameworks" class="btn-pill btn-outline-light">
                  <span>Explore Frameworks</span>
                  <span class="icon-disc">↓</span>
                </a>
              </div>

              <div class="hero-stats-row">
                <div class="stat-item">
                  <div class="stat-num">25+</div>
                  <div class="stat-label">Years B2B Wisdom</div>
                </div>
                <div class="stat-item">
                  <div class="stat-num">8</div>
                  <div class="stat-label">Diagnostic Tools</div>
                </div>
                <div class="stat-item">
                  <div class="stat-num">10+</div>
                  <div class="stat-label">AI Agent Blueprints</div>
                </div>
              </div>
            </div>

            <div class="hero-visual">
              <div class="book-card-3d" id="book-3d">
                <img src="/aivisible-orchestra/assets/book-cover.jpg" alt="The AIvisible Orchestra Book Cover" onerror="this.src='/aivisible-orchestra/assets/diagram-trifecta.png'">
              </div>
              <div class="floating-badge badge-top-right">
                <span>BRAND · DEMAND · EXPERIENCE</span>
              </div>
              <div class="floating-badge badge-bottom-left">
                <span>BY SAIRAM VEDAM & PRASANT AGARWAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- METRICS STRIP -->
      <section class="metrics-strip">
        <div class="container">
          <div class="metrics-grid">
            <div class="metric-cell">
              <div class="metric-val">25+</div>
              <div class="metric-title">Years Lived Wisdom</div>
              <div class="metric-sub">Across 3 tech generations</div>
            </div>
            <div class="metric-cell">
              <div class="metric-val">08</div>
              <div class="metric-title">Diagnostic Frameworks</div>
              <div class="metric-sub">Actionable executive models</div>
            </div>
            <div class="metric-cell">
              <div class="metric-val">10+</div>
              <div class="metric-title">Autonomous AI Agents</div>
              <div class="metric-sub">Enterprise marketing OS</div>
            </div>
            <div class="metric-cell">
              <div class="metric-val">100%</div>
              <div class="metric-title">Committee Defensibility</div>
              <div class="metric-sub">Built for buying networks</div>
            </div>
          </div>
        </div>
      </section>

      <!-- THE CORE THESIS: THE TRIFECTA -->
      <section class="section section-white" id="trifecta">
        <div class="container">
          <div class="section-header split-header">
            <div class="header-left">
              <div class="badge-pill">
                <span class="badge-dot"></span>
                <span>The Core Operating Model</span>
              </div>
              <h2>The B2B Marketing Trifecta<span class="text-gradient-blue">.</span></h2>
              <p class="subheadline">Deals don’t move on dopamine. They move on to due diligence. Purchase isn’t a swipe; it is a committee consensus.</p>
            </div>
            <div class="header-right">
              <p class="subheadline" style="font-size: 15px;">When marketing operates as three isolated departments, the company leaks credibility. The AIvisible Orchestra unites them on a single shared codebase.</p>
            </div>
          </div>

          <div class="trifecta-grid">
            <div class="trifecta-card">
              <div class="card-num">TRIFECTA 01 / MINDSHARE</div>
              <div class="card-icon-box">🧠</div>
              <h3>Brand Creates Meaning</h3>
              <p>Brand is not a cosmetic coat of paint. It is accumulated market memory and confidence. It ensures buyers and AI answer engines recall your company before formal buying cycles ever begin.</p>
              <div class="card-callout">"When the spreadsheet ties, people buy the brand that feels like them."</div>
            </div>

            <div class="trifecta-card" style="border-color: var(--primary-blue);">
              <div class="card-num">TRIFECTA 02 / MOMENTUM</div>
              <div class="card-icon-box" style="background:#dbeafe; color:var(--primary-blue);">⚡</div>
              <h3>Demand Creates Velocity</h3>
              <p>Intent is a clue, not a verdict. Enterprise demand is not about harvesting form-fills—it is navigating complex 13+ stakeholder buying networks through context-led evidence and belief gates.</p>
              <div class="card-callout">"The better product doesn’t win. The better-informed one does."</div>
            </div>

            <div class="trifecta-card">
              <div class="card-num">TRIFECTA 03 / LEGACY</div>
              <div class="card-icon-box">🛡️</div>
              <h3>Experience Creates Legacy</h3>
              <p>Experience is where brand promises are tested. B2B loyalty is not repeat purchase; it is repeated trust. Closing experience debt turns one-time customers into compounding advocates.</p>
              <div class="card-callout">"Reputation is the supply chain of kept promises. Experience debt is the cost of broken ones."</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8 DIAGNOSTIC FRAMEWORKS HUB -->
      <section class="section section-light" id="frameworks">
        <div class="container">
          <div class="section-header text-center">
            <div class="badge-pill">
              <span class="badge-dot"></span>
              <span>Author-Developed Diagnostic Tools</span>
            </div>
            <h2>Eight Frameworks for Strategic Clarity<span class="text-gradient-blue">.</span></h2>
            <p class="subheadline">Working instruments to help CMOs and enterprise leaders ask sharper questions, compare scenarios, and make defensible decisions.</p>
          </div>

          <div class="frameworks-nav" id="frameworks-tabs">
            ${B.frameworks.map((f, i) => `
              <button class="framework-tab ${i === 0 ? 'active' : ''}" data-fid="${f.id}">
                ${f.name}
              </button>
            `).join('')}
          </div>

          <div id="framework-card-container">
            ${renderFrameworkCard(B.frameworks[0])}
          </div>

          <!-- B2B GROWTH PHYSICS INTERACTIVE CALCULATOR -->
          <div class="calculator-box">
            <div class="section-header">
              <div class="badge-pill">
                <span class="badge-dot"></span>
                <span>Interactive Diagnostic Engine</span>
              </div>
              <h3>B2B Growth Physics Simulator</h3>
              <p class="subheadline">Adjust each force from 1 (severe weakness) to 5 (world-class). See how the weakest force constrains your enterprise growth velocity.</p>
            </div>

            <div class="calc-grid">
              <div class="sliders-column">
                <div class="slider-group">
                  <div class="slider-header">
                    <span>1. Market Memory (Will they recall us?)</span>
                    <strong id="val-memory">4 / 5</strong>
                  </div>
                  <input type="range" id="slide-memory" min="1" max="5" value="4">
                </div>

                <div class="slider-group">
                  <div class="slider-header">
                    <span>2. Relevance (Do we understand their context?)</span>
                    <strong id="val-relevance">3 / 5</strong>
                  </div>
                  <input type="range" id="slide-relevance" min="1" max="5" value="3">
                </div>

                <div class="slider-group">
                  <div class="slider-header">
                    <span>3. Proof (Can our claims survive scrutiny?)</span>
                    <strong id="val-proof">2 / 5</strong>
                  </div>
                  <input type="range" id="slide-proof" min="1" max="5" value="2">
                </div>

                <div class="slider-group">
                  <div class="slider-header">
                    <span>4. Consensus (Can buying network defend choice?)</span>
                    <strong id="val-consensus">3 / 5</strong>
                  </div>
                  <input type="range" id="slide-consensus" min="1" max="5" value="3">
                </div>

                <div class="slider-group">
                  <div class="slider-header">
                    <span>5. Experience (Does reality match the promise?)</span>
                    <strong id="val-experience">4 / 5</strong>
                  </div>
                  <input type="range" id="slide-experience" min="1" max="5" value="4">
                </div>

                <div class="slider-group">
                  <div class="slider-header">
                    <span>6. Learning (Does system get smarter every cycle?)</span>
                    <strong id="val-learning">2 / 5</strong>
                  </div>
                  <input type="range" id="slide-learning" min="1" max="5" value="2">
                </div>
              </div>

              <div class="calc-result-column">
                <div class="calc-score-ring">
                  <span class="calc-score-val" id="calc-score">37%</span>
                </div>
                <div class="calc-verdict-title" id="calc-verdict-title">System Constrained</div>
                <p class="calc-verdict-desc" id="calc-verdict-desc">
                  Your bottleneck is <b>Proof & Learning</b>. Weak proof creates heavy friction in the buying committee, forcing deals to stall in procurement.
                </p>
                <div style="margin-top:20px;">
                  <a href="#preorder" class="btn-pill btn-white" style="font-size:12px; padding:6px 16px;">
                    <span>Read Section I: Growth Physics</span>
                    <span class="icon-disc">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AGENTIC MARKETING ARCHITECTURE (Dark Section) -->
      <section class="section section-dark" id="agentic-ai">
        <div class="container">
          <div class="section-header split-header">
            <div class="header-left">
              <div class="badge-pill dark">
                <span class="badge-dot"></span>
                <span>Section III · Enterprise Agentic AI</span>
              </div>
              <h2>The Agentic Marketing Architecture<span class="text-gradient">.</span></h2>
              <p class="subheadline">Moving from AI vocabulary to AI value. Re-engineering marketing around a unified multi-agent operating system.</p>
            </div>
            <div class="header-right">
              <p class="subheadline" style="font-size: 15px;">"If AI cuts the time to produce a generic campaign from five days to five minutes, you’ve saved time and gained nothing. The real prize is capital allocation of cognition."</p>
            </div>
          </div>

          <div class="agentic-layout">
            <!-- Left: Agent Selector -->
            <div class="agent-selector-list">
              ${B.agenticModel.agents.map((agent, i) => `
                <div class="agent-item-card ${i === 0 ? 'active' : ''}" data-aid="${agent.id}">
                  <div>
                    <h4>${agent.name}</h4>
                    <span>${agent.domain}</span>
                  </div>
                  <span style="font-size:18px;">↗</span>
                </div>
              `).join('')}
            </div>

            <!-- Right: Agent Interactive Panel -->
            <div class="agent-detail-panel" id="agent-detail-panel">
              ${renderAgentDetail(B.agenticModel.agents[0])}
            </div>
          </div>

          <!-- AI Decision Rights Matrix -->
          <div style="margin-top: 64px;">
            <div class="badge-pill dark">
              <span class="badge-dot"></span>
              <span>Governance Architecture</span>
            </div>
            <h3 style="color:#ffffff; margin-bottom: 20px;">AI Decision Rights Matrix: Who Gets the Last Word?</h3>
            <div class="decision-matrix-strip">
              ${B.agenticModel.decisionMatrix.map(dm => `
                <div class="matrix-card">
                  <div class="level-tag">${dm.level}</div>
                  <h4>${dm.mode}</h4>
                  <p>${dm.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- CHAPTER EXPLORER (Manuscript Directory) -->
      <section class="section section-white" id="chapters">
        <div class="container">
          <div class="section-header split-header">
            <div class="header-left">
              <div class="badge-pill">
                <span class="badge-dot"></span>
                <span>Complete Manuscript Navigator</span>
              </div>
              <h2>Explore the Chapters<span class="text-gradient-blue">.</span></h2>
              <p class="subheadline">35+ chapters spanning three decades of field-tested enterprise marketing wisdom.</p>
            </div>
            <div class="header-right">
              <a href="#preorder" class="btn-pill btn-white">
                <span>Download Sample Passages</span>
                <span class="icon-disc">↗</span>
              </a>
            </div>
          </div>

          <div class="chapters-nav-tabs" id="chapter-section-tabs">
            <button class="section-tab-btn active" data-sec="all">All Sections (5)</button>
            ${B.parts.map(p => `
              <button class="section-tab-btn" data-sec="${p.n}">${p.n} · ${p.name.split(':')[0]}</button>
            `).join('')}
          </div>

          <div class="chapter-accordion-list" id="chapters-container">
            ${renderChapterList('all')}
          </div>
        </div>
      </section>

      <!-- HAND-DRAWN BLUEPRINTS & DIAGRAM GALLERY -->
      <section class="section section-light" id="diagrams">
        <div class="container">
          <div class="section-header text-center">
            <div class="badge-pill">
              <span class="badge-dot"></span>
              <span>Original Author Blueprints</span>
            </div>
            <h2>Intellectual Property in Ink<span class="text-gradient-blue">.</span></h2>
            <p class="subheadline">In an era of generic AI images, these 31 hand-drawn diagrams represent authentic practitioner thought and architectural clarity. Click any diagram to examine details.</p>
          </div>

          <div class="gallery-grid">
            ${B.diagrams.slice(0, 9).map((d, i) => `
              <div class="gallery-card" data-diag-idx="${i}">
                <div class="gallery-img-wrapper">
                  <img src="${d.file}" alt="${d.title}" loading="lazy">
                </div>
                <div class="gallery-info">
                  <span class="badge-pill" style="font-size:10px; padding:3px 10px; margin-bottom:8px;">${d.page}</span>
                  <h4>${d.title}</h4>
                  <p>"${d.quote}"</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 48px;">
            <button class="btn-pill btn-white" id="btn-load-more-diagrams">
              <span>View All 31 Diagrams & Illustrations</span>
              <span class="icon-disc">↓</span>
            </button>
          </div>
        </div>
      </section>

      <!-- VOICES OF LEADERSHIP (Endorsements) -->
      <section class="section section-white" id="endorsements">
        <div class="container">
          <div class="section-header text-center">
            <div class="badge-pill">
              <span class="badge-dot"></span>
              <span>Executive Endorsements</span>
            </div>
            <h2>Voices of Leadership<span class="text-gradient-blue">.</span></h2>
            <p class="subheadline">Verified perspectives from enterprise founders, CMOs, and board advisors who have read the manuscript.</p>
          </div>

          <div class="testimonials-grid">
            ${B.quotes.map(q => `
              <div class="testimonial-card">
                <div>
                  <span class="testimonial-tag">${q.tag}</span>
                  <p class="testimonial-quote">“${q.text}”</p>
                </div>
                <div class="testimonial-author">
                  <div class="author-avatar">${q.initials}</div>
                  <div class="author-info">
                    <h4>${q.name}</h4>
                    <span>${[q.role, q.company].filter(Boolean).join(' · ')}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ABOUT THE AUTHORS -->
      <section class="section section-light" id="authors">
        <div class="container">
          <div class="section-header text-center">
            <div class="badge-pill">
              <span class="badge-dot"></span>
              <span>Meet the Authors</span>
            </div>
            <h2>Two Practitioners. One Shared Conviction<span class="text-gradient-blue">.</span></h2>
            <p class="subheadline">Decades of lived experience bridging enterprise brand strategy, product engineering, and global go-to-market execution.</p>
          </div>

          <div class="authors-grid">
            ${B.meta.authors.map(author => `
              <div class="author-card">
                <div class="author-card-header">
                  <div class="author-large-avatar">${author.initials}</div>
                  <div class="author-name-group">
                    <h3>${author.name}</h3>
                    <div class="author-role">${author.role}</div>
                  </div>
                </div>
                <p class="author-bio">${author.bio}</p>
                <div class="author-focus-tags">
                  ${author.focus.map(tag => `<span class="focus-tag">${tag}</span>`).join('')}
                </div>
                <div>
                  <a href="${author.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-white" style="font-size:13px; padding:6px 18px;">
                    <span>Connect on LinkedIn</span>
                    <span class="icon-disc">↗</span>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- PREORDER & CONNECT (Port 3100) -->
      <section class="section section-white" id="preorder">
        <div class="container">
          <div class="preorder-box">
            <div>
              <div class="badge-pill">
                <span class="badge-dot"></span>
                <span>Port 3100 · Early Access</span>
              </div>
              <h2>Reserve Your Copy & Connect<span class="text-gradient-blue">.</span></h2>
              <p class="subheadline" style="font-size: 16px; margin-bottom: 24px;">
                Be part of the inaugural cohort of enterprise leaders shaping modern B2B marketing in the AI era.
              </p>
              
              <div style="background:#eff6ff; border-radius:var(--radius-lg); padding:24px; margin-bottom: 24px;">
                <h4 style="color:var(--primary-blue); font-size:16px; margin-bottom:8px;">What You Receive</h4>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:14px; color:#334155;">
                  <li>✓ Early notification when hardcovers, paperbacks & ebooks launch</li>
                  <li>✓ Invitations to exclusive closed-door CMO roundtables</li>
                  <li>✓ High-resolution digital companion pack of all 31 author blueprints</li>
                  <li>✓ Diagnostic spreadsheet templates for all 8 book frameworks</li>
                </ul>
              </div>

              <p class="subheadline" style="font-size: 13px; color:var(--text-dark-muted);">
                <b>Privacy Notice:</b> No payment details are requested or stored on this website. Your contact information is solely used by the authors to communicate book launch and event details.
              </p>
            </div>

            <!-- Form Card -->
            <div>
              <div class="form-tabs">
                <button class="form-tab-btn active" data-formtab="preorder">Preorder Interest</button>
                <button class="form-tab-btn" data-formtab="contact">Contact Authors</button>
                <button class="form-tab-btn" data-formtab="feedback">Reader Feedback</button>
              </div>

              <form id="lead-form">
                <input type="hidden" name="type" id="form-type" value="preorder">
                
                <div class="form-grid-fields">
                  <div class="form-field">
                    <label>Full Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Andrea Taylor">
                  </div>

                  <div class="form-field">
                    <label>Corporate Email *</label>
                    <input type="email" name="email" required placeholder="name@company.com">
                  </div>

                  <div class="form-field">
                    <label>Organization / Company</label>
                    <input type="text" name="organization" placeholder="e.g. Acroway Global">
                  </div>

                  <div class="form-field">
                    <label>Designation / Role</label>
                    <input type="text" name="designation" placeholder="e.g. Chief Marketing Officer">
                  </div>

                  <div class="form-field">
                    <label>Country / Region</label>
                    <input type="text" name="country" placeholder="e.g. United States / India">
                  </div>

                  <div class="form-field" id="quantity-field">
                    <label>Expected Copies (1 - 100) *</label>
                    <input type="number" name="quantity" min="1" max="100" value="1" required>
                  </div>

                  <div class="form-field" id="format-field">
                    <label>Preferred Format</label>
                    <select name="format">
                      <option value="Hardcover">Executive Hardcover</option>
                      <option value="Paperback">Paperback Edition</option>
                      <option value="Ebook">Digital E-Book</option>
                      <option value="Undecided">No Preference</option>
                    </select>
                  </div>

                  <div class="form-field full-width">
                    <label>Primary Focus Area</label>
                    <select name="interest">
                      <option value="B2B Growth Physics">B2B Growth Physics & Operating System</option>
                      <option value="Agentic AI">Agentic Marketing Architecture (Multi-Agent)</option>
                      <option value="Brand & Narrative">Brand Architecture & Narrative Carry (NCC)</option>
                      <option value="Demand & ABX">Demand Engine & Context-Led ABX</option>
                      <option value="Executive Advisory">Executive Keynotes & Author Workshops</option>
                    </select>
                  </div>

                  <div class="form-field full-width">
                    <label id="message-label">Additional Requirements or Notes</label>
                    <textarea name="message" placeholder="Share your team size, bulk order questions, or areas you would like explored..."></textarea>
                  </div>

                  <div class="consent-row">
                    <input type="checkbox" name="consent" id="consent" required checked>
                    <span>I agree to receive communications regarding book availability, author discussions, and diagnostic tools. I acknowledge this is an expression of interest with no immediate billing.</span>
                  </div>
                </div>

                <div style="margin-top:24px;">
                  <button type="submit" class="btn-pill btn-primary" id="btn-submit" style="width:100%; justify-content:center;">
                    <span id="submit-btn-text">Register Preorder Interest</span>
                    <span class="icon-disc">↗</span>
                  </button>
                </div>

                <div class="form-status-msg" id="form-status"></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- EXECUTIVE FAQS -->
      <section class="section section-light" id="faqs">
        <div class="container">
          <div class="section-header text-center">
            <div class="badge-pill">
              <span class="badge-dot"></span>
              <span>Frequently Answered</span>
            </div>
            <h2>Executive FAQs<span class="text-gradient-blue">.</span></h2>
            <p class="subheadline">Common inquiries regarding publication, bulk institutional orders, and speaking engagements.</p>
          </div>

          <div class="faq-list">
            ${B.faqs.map(faq => `
              <div class="faq-item">
                <div class="faq-header">
                  <h4>${faq.q}</h4>
                  <span style="font-size:20px; font-weight:700;">+</span>
                </div>
                <div class="faq-body">
                  <p>${faq.a}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- LIGHTBOX MODAL -->
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content">
          <button class="modal-close-btn" id="modal-close">&times;</button>
          <div class="modal-img-container">
            <img src="" id="modal-img" alt="Author Architectural Diagram">
          </div>
          <div class="badge-pill" id="modal-page">Page Reference</div>
          <h3 id="modal-title" style="margin-bottom:8px;">Diagram Title</h3>
          <p id="modal-quote" style="font-style:italic; color:var(--primary-blue); font-weight:650; margin-bottom:12px;"></p>
        </div>
      </div>
    `;
  }

  function renderFrameworkCard(f) {
    return `
      <div class="framework-display-card">
        <div class="framework-left">
          <div class="badge-pill" style="margin-bottom:12px;">Diagnostic Model</div>
          <h3>${f.name}</h3>
          <div class="framework-formula">${f.formula}</div>
          <p>${f.summary}</p>
          <ul class="framework-list">
            ${(f.factors || f.surfaces || f.dimensions || f.drags || f.gates || f.steps || []).slice(0, 5).map(item => {
              if (typeof item === 'string') return `<li>${item}</li>`;
              if (item.name) return `<li><b>${item.name}:</b> ${item.question}</li>`;
              if (item.risk) return `<li><b>${item.risk}:</b> ${item.antidote}</li>`;
              if (item.type) return `<li><b>${item.type}:</b> ${item.desc}</li>`;
              if (item.title) return `<li><b>${item.code} (${item.title}):</b> ${item.desc}</li>`;
              return `<li>${JSON.stringify(item)}</li>`;
            }).join('')}
          </ul>
          <a href="#preorder" class="btn-pill btn-primary" style="font-size:13px; padding:6px 18px;">
            <span>Get the Full Diagnostic Tool</span>
            <span class="icon-disc">↗</span>
          </a>
        </div>
        <div class="framework-right">
          <div class="framework-diagram-box" onclick="window.openDiagramModal('${f.image}', '${f.name}', '${f.caption}')">
            <span class="diagram-zoom-hint">🔍 Click to Expand</span>
            <img src="${f.image}" alt="${f.name}">
            <div class="diagram-caption">"${f.caption}"</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderAgentDetail(a) {
    return `
      <div class="badge-pill dark" style="margin-bottom:12px;">Specialized Marketing Agent</div>
      <h3>${a.name}</h3>
      <div class="agent-tagline">${a.domain}</div>
      <p style="color:var(--text-light-secondary); font-size:15px; margin-bottom:24px; line-height:1.65;">
        ${a.role}
      </p>

      <div class="agent-meta-block">
        <div class="agent-meta-label">Knowledge & Context Inputs:</div>
        <div class="agent-meta-text">${a.inputs}</div>
      </div>

      <div class="agent-meta-block">
        <div class="agent-meta-label">Governed Output Deliverables:</div>
        <div class="agent-meta-text" style="color:var(--accent-cyan-light); font-weight:650;">${a.output}</div>
      </div>

      <div style="margin-top:auto; padding-top:16px;">
        <span style="font-size:12px; color:var(--text-light-muted);">
          Governed under Enterprise AI Decision Rights Matrix Mode: <b>Human Approved / Level 3</b>
        </span>
      </div>
    `;
  }

  function renderChapterList(secFilter) {
    let filteredParts = secFilter === 'all' 
      ? B.parts 
      : B.parts.filter(p => p.n === secFilter);

    return filteredParts.map(part => `
      <div style="margin-bottom: 28px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
          <span class="badge-pill" style="margin-bottom:0;">${part.num}</span>
          <h3 style="font-size:22px; color:var(--text-dark-primary);">${part.name}</h3>
        </div>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${part.chapters.map((ch, idx) => `
            <div class="chapter-row">
              <div class="chapter-header">
                <div class="chapter-title-group">
                  <div class="chapter-index">${String(idx + 1).padStart(2, '0')}</div>
                  <div class="chapter-name">${ch.title}</div>
                </div>
                <div class="chapter-toggle-icon">↓</div>
              </div>
              <div class="chapter-body">
                <p>${ch.lead}</p>
                <div style="margin-top:14px; font-size:13px; font-weight:700; color:var(--primary-blue);">
                  Featured in Section ${part.n} · Complete treatise in the published manuscript.
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function setupEventListeners() {
    // Framework Tabs
    const fwTabs = document.getElementById('frameworks-tabs');
    if (fwTabs) {
      fwTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.framework-tab');
        if (!btn) return;
        document.querySelectorAll('.framework-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const fid = btn.dataset.fid;
        const target = B.frameworks.find(f => f.id === fid);
        if (target) {
          document.getElementById('framework-card-container').innerHTML = renderFrameworkCard(target);
        }
      });
    }

    // Agent Selector
    const agentSelector = document.querySelector('.agent-selector-list');
    if (agentSelector) {
      agentSelector.addEventListener('click', (e) => {
        const item = e.target.closest('.agent-item-card');
        if (!item) return;
        document.querySelectorAll('.agent-item-card').forEach(c => c.classList.remove('active'));
        item.classList.add('active');
        const aid = item.dataset.aid;
        const target = B.agenticModel.agents.find(a => a.id === aid);
        if (target) {
          document.getElementById('agent-detail-panel').innerHTML = renderAgentDetail(target);
        }
      });
    }

    // Chapter Section Tabs
    const chTabs = document.getElementById('chapter-section-tabs');
    if (chTabs) {
      chTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.section-tab-btn');
        if (!btn) return;
        document.querySelectorAll('.section-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sec = btn.dataset.sec;
        document.getElementById('chapters-container').innerHTML = renderChapterList(sec);
      });
    }

    // Chapter Accordion Click
    document.addEventListener('click', (e) => {
      const header = e.target.closest('.chapter-header');
      if (header) {
        const row = header.closest('.chapter-row');
        row.classList.toggle('expanded');
      }

      // FAQ Accordion
      const faqHeader = e.target.closest('.faq-header');
      if (faqHeader) {
        const item = faqHeader.closest('.faq-item');
        item.classList.toggle('open');
        const icon = faqHeader.querySelector('span');
        if (icon) icon.textContent = item.classList.contains('open') ? '−' : '+';
      }

      // Gallery Card Click
      const galleryCard = e.target.closest('.gallery-card');
      if (galleryCard) {
        const idx = Number(galleryCard.dataset.diagIdx);
        const diag = B.diagrams[idx];
        if (diag) window.openDiagramModal(diag.file, diag.title, diag.quote, diag.page);
      }
    });

    // Load More Diagrams Button
    const btnLoadMore = document.getElementById('btn-load-more-diagrams');
    if (btnLoadMore) {
      btnLoadMore.addEventListener('click', () => {
        const galleryGrid = document.querySelector('.gallery-grid');
        galleryGrid.innerHTML = B.diagrams.map((d, i) => `
          <div class="gallery-card" data-diag-idx="${i}">
            <div class="gallery-img-wrapper">
              <img src="${d.file}" alt="${d.title}" loading="lazy">
            </div>
            <div class="gallery-info">
              <span class="badge-pill" style="font-size:10px; padding:3px 10px; margin-bottom:8px;">${d.page}</span>
              <h4>${d.title}</h4>
              <p>"${d.quote}"</p>
            </div>
          </div>
        `).join('');
        btnLoadMore.style.display = 'none';
      });
    }

    // Modal Close
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalClose && modalOverlay) {
      modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('active');
      });
    }

    // Form Tabs
    document.querySelectorAll('[data-formtab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-formtab]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.formtab;
        switchFormTab(tab);
      });
    });

    // Form Submission (Connected to Node.js backend on Port 3100)
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-submit');
        const submitText = document.getElementById('submit-btn-text');
        const statusMsg = document.getElementById('form-status');

        submitBtn.disabled = true;
        submitText.textContent = 'Recording Expression...';
        statusMsg.className = 'form-status-msg';
        statusMsg.style.display = 'none';

        const formData = new FormData(leadForm);
        const payload = Object.fromEntries(formData.entries());
        payload.consent = leadForm.elements.consent.checked;
        payload.quantity = Number(payload.quantity || 1);

        try {
          const res = await fetch('https://cnrpv-49-205-224-145.free.pinggy.net/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();

          if (!res.ok) throw new Error(data.error || 'Submission failed');

          statusMsg.className = 'form-status-msg success';
          statusMsg.innerHTML = `
            <strong>Preorder Reference Confirmed:</strong> ${data.reference}<br>
            Thank you for registering your interest in <em>The AIvisible Orchestra</em>. The author team has received your registration and will notify you as soon as publication dates, preview chapters, and shipping allocations are finalized.
          `;
          leadForm.reset();
        } catch (err) {
          statusMsg.className = 'form-status-msg error';
          statusMsg.textContent = err.message || 'Unable to record your submission. Please try again.';
        } finally {
          submitBtn.disabled = false;
          submitText.textContent = 'Register Preorder Interest';
        }
      });
    }
  }

  function switchFormTab(tab) {
    state.formTab = tab;
    const formType = document.getElementById('form-type');
    const submitText = document.getElementById('submit-btn-text');
    const qtyField = document.getElementById('quantity-field');
    const formatField = document.getElementById('format-field');
    const msgLabel = document.getElementById('message-label');

    if (formType) formType.value = tab;

    if (tab === 'preorder') {
      submitText.textContent = 'Register Preorder Interest';
      if (qtyField) qtyField.style.display = 'flex';
      if (formatField) formatField.style.display = 'flex';
      if (msgLabel) msgLabel.textContent = 'Additional Notes or Requirements (Optional)';
    } else if (tab === 'contact') {
      submitText.textContent = 'Send Executive Message';
      if (qtyField) qtyField.style.display = 'none';
      if (formatField) formatField.style.display = 'none';
      if (msgLabel) msgLabel.textContent = 'Your Message / Inquiry Details *';
    } else if (tab === 'feedback') {
      submitText.textContent = 'Share Reader Perspective';
      if (qtyField) qtyField.style.display = 'none';
      if (formatField) formatField.style.display = 'none';
      if (msgLabel) msgLabel.textContent = 'Your Reflections on the Manuscript *';
    }
  }

  function setupCalculators() {
    const inputs = ['memory', 'relevance', 'proof', 'consensus', 'experience', 'learning'];
    inputs.forEach(key => {
      const slider = document.getElementById(`slide-${key}`);
      const valLabel = document.getElementById(`val-${key}`);
      if (slider && valLabel) {
        slider.addEventListener('input', () => {
          valLabel.textContent = `${slider.value} / 5`;
          state.physicsScores[key] = Number(slider.value);
          updateGrowthPhysicsScore();
        });
      }
    });
  }

  function updateGrowthPhysicsScore() {
    const { memory, relevance, proof, consensus, experience, learning } = state.physicsScores;
    // Multiplicative diagnostic model: (M * R * P * C * E * L) / (5^6) * 100
    const rawProduct = memory * relevance * proof * consensus * experience * learning;
    const maxProduct = Math.pow(5, 6); // 15625
    const scorePct = Math.round((rawProduct / maxProduct) * 100);

    const scoreDisplay = document.getElementById('calc-score');
    const titleDisplay = document.getElementById('calc-verdict-title');
    const descDisplay = document.getElementById('calc-verdict-desc');

    if (scoreDisplay) scoreDisplay.textContent = `${scorePct}%`;

    // Find the constraining force (minimum value)
    const forces = [
      { name: 'Memory', val: memory, risk: 'Lack of category recall before RFP' },
      { name: 'Relevance', val: relevance, risk: 'Failing to solve the customer’s customer problem' },
      { name: 'Proof', val: proof, risk: 'Inability to defend claims under committee scrutiny' },
      { name: 'Consensus', val: consensus, risk: 'Hidden buyers and misalignment in the buying network' },
      { name: 'Experience', val: experience, risk: 'Accumulated experience debt and broken delivery promises' },
      { name: 'Learning', val: learning, risk: 'Organizational amnesia and repeated quarterly mistakes' }
    ];

    forces.sort((a, b) => a.val - b.val);
    const bottleneck = forces[0];

    if (scorePct >= 75) {
      if (titleDisplay) titleDisplay.textContent = 'High Coherence Growth Engine';
      if (descDisplay) descDisplay.innerHTML = `All six forces multiply effectively. Even with high performance, preserve your lowest force (<b>${bottleneck.name}</b>: ${bottleneck.risk}) to prevent future drag.`;
    } else if (scorePct >= 40) {
      if (titleDisplay) titleDisplay.textContent = 'Constrained Commercial Velocity';
      if (descDisplay) descDisplay.innerHTML = `Your primary growth bottleneck is <b>${bottleneck.name}</b> (${bottleneck.val}/5). As the manuscript teaches, growth stalls at the weakest link: <em>${bottleneck.risk}</em>.`;
    } else {
      if (titleDisplay) titleDisplay.textContent = 'Severe Force Field Friction';
      if (descDisplay) descDisplay.innerHTML = `Severe friction in <b>${bottleneck.name}</b> is neutralizing strength elsewhere. Before buying more top-of-funnel ads, invest in <em>${bottleneck.name} architecture</em>.`;
    }
  }

  function setup3DTilt() {
    const card = document.getElementById('book-3d');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 22;
      const rotateY = (x / rect.width) * 22;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateY(-12deg) rotateX(4deg) scale(1)`;
    });
  }

  // Global helper for diagram modal
  window.openDiagramModal = function(src, title, quote, page) {
    const overlay = document.getElementById('modal-overlay');
    const img = document.getElementById('modal-img');
    const titleEl = document.getElementById('modal-title');
    const quoteEl = document.getElementById('modal-quote');
    const pageEl = document.getElementById('modal-page');

    if (overlay && img) {
      img.src = src;
      if (titleEl) titleEl.textContent = title;
      if (quoteEl) quoteEl.textContent = quote ? `“${quote}”` : '';
      if (pageEl) pageEl.textContent = page || 'Manuscript Original Blueprint';
      overlay.classList.add('active');
    }
  };

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
