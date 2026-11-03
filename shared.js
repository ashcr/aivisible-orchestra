/**
 * The AIvisible Orchestra — Complete Client Application Engine
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // 1. FAQ & ACCORDIONS
  document.querySelectorAll('.faq-question-avenora').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item-avenora').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // 2. LIGHTBOX MODAL
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');

  window.openBlueprintModal = function(src, title, desc) {
    if (!modal) return;
    if (modalImg) modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    modal.classList.add('active');
  };

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // 3. B2B GROWTH PHYSICS SIMULATOR
  const sliderNarrative = document.getElementById('sim-narrative');
  const sliderConsensus = document.getElementById('sim-consensus');
  const sliderProof = document.getElementById('sim-proof');
  const sliderAgentic = document.getElementById('sim-agentic');

  function updateSimulator() {
    if (!sliderNarrative) return;
    const narrative = Number(sliderNarrative.value);
    const consensus = Number(sliderConsensus.value);
    const proof = Number(sliderProof.value);
    const agentic = Number(sliderAgentic.value);

    const valNarrative = document.getElementById('val-narrative');
    const valConsensus = document.getElementById('val-consensus');
    const valProof = document.getElementById('val-proof');
    const valAgentic = document.getElementById('val-agentic');

    if (valNarrative) valNarrative.textContent = narrative + '/100';
    if (valConsensus) valConsensus.textContent = consensus + '/100';
    if (valProof) valProof.textContent = proof.toFixed(1) + 'x';
    if (valAgentic) valAgentic.textContent = agentic + '%';

    const velocity = Math.round(150 * (narrative / 45) * (proof / 1.8) / (0.7 + (consensus / 80)) * (1 + (agentic / 120)));
    const slippage = Math.max(5, Math.min(85, Math.round(55 * (consensus / 50) / ((proof / 2) * (narrative / 50)))));
    const cacSaved = Math.max(1, Math.min(14, (narrative * 0.08 + proof * 1.5 - consensus * 0.04 + agentic * 0.05).toFixed(1)));
    const trustScore = Math.min(99, Math.round((narrative * 0.35) + (proof * 16) + (agentic * 0.25) - (consensus * 0.15)));

    const elVel = document.getElementById('res-velocity');
    const elSlip = document.getElementById('res-slip');
    const elCac = document.getElementById('res-cac');
    const elTrust = document.getElementById('res-trust');

    if (elVel) elVel.textContent = velocity.toLocaleString() + ' points';
    if (elSlip) elSlip.textContent = slippage + ' / 100';
    if (elCac) elCac.textContent = cacSaved + ' points';
    if (elTrust) elTrust.textContent = trustScore + '/100';
  }

  if (sliderNarrative) {
    [sliderNarrative, sliderConsensus, sliderProof, sliderAgentic].forEach(sl => {
      sl.addEventListener('input', updateSimulator);
    });
    updateSimulator();
  }

  // 4. AGENTIC ORCHESTRATOR
  const agentCards = document.querySelectorAll('.agent-node-card');
  const agentDetails = {
    brand: {
      name: "Brand Agent",
      role: "Narrative Liquidity & Reputation Telemetry",
      task: "Monitors market categorization, brand search velocity, analyst alignment, and machine-crawlable proof points.",
      guardrail: "Human verification mandatory before public narrative repositioning."
    },
    demand: {
      name: "Demand Agent",
      role: "Buying Committee Context Synthesizer",
      task: "Surfaces high-intent committee signals, generates contextual buyer battlecards, and orchestrates multi-touch account journeys.",
      guardrail: "Zero generic outreach; strict verification of ICP criteria before signal engagement."
    },
    experience: {
      name: "Experience Agent",
      role: "Telemetry-Driven Value Proof Engine",
      task: "Tracks customer milestone telemetry, flags adoption stall points, and synthesizes verifiable expansion evidence for renewal committees.",
      guardrail: "Requires customer telemetry agreement; privacy preserved via cryptographic hashing."
    },
    audit: {
      name: "Audit & Fact Governance Agent",
      role: "The Human-in-the-Loop Verification Firewall",
      task: "Evaluates every agent output against corporate ground truth, security certifications, and ROI documentation before deployment.",
      guardrail: "Full veto authority on any unverified factual claims or hallucinated capabilities."
    }
  };

  agentCards.forEach(card => {
    card.addEventListener('click', () => {
      agentCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const key = card.getAttribute('data-agent');
      const d = agentDetails[key];
      if (d) {
        const titleEl = document.getElementById('agent-detail-title');
        const roleEl = document.getElementById('agent-detail-role');
        const taskEl = document.getElementById('agent-detail-task');
        const guardEl = document.getElementById('agent-detail-guard');
        if (titleEl) titleEl.textContent = d.name;
        if (roleEl) roleEl.textContent = d.role;
        if (taskEl) taskEl.textContent = d.task;
        if (guardEl) guardEl.textContent = d.guardrail;
      }
    });
  });

  // 5. AJAX FORM SUBMISSION
  document.querySelectorAll('.ajax-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusBox = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) submitBtn.disabled = true;
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.style.background = '#e0f2fe';
        statusBox.style.color = '#0369a1';
        statusBox.textContent = 'Saving your request locally...';
      }

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.consent = form.querySelector('input[name="consent"]')?.checked || false;

      try {
        const res = await fetch('https://cnrpv-49-205-224-145.free.pinggy.net/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok && data.ok) {
          if (statusBox) {
            statusBox.style.background = '#dcfce7';
            statusBox.style.color = '#15803d';
            statusBox.textContent = 'Thank you — we received your message and emailed a confirmation. Reference: ' + data.reference + '. We will get back to you soon.';
          }
          form.reset();
        } else {
          if (statusBox) {
            statusBox.style.background = '#fee2e2';
            statusBox.style.color = '#b91c1c';
            statusBox.textContent = data.error || 'Submission failed. Please check required fields.';
          }
        }
      } catch (err) {
        if (statusBox) {
          statusBox.style.background = '#fee2e2';
          statusBox.style.color = '#b91c1c';
          statusBox.textContent = 'Unable to reach local server. Ensure server.js is running.';
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });

});
