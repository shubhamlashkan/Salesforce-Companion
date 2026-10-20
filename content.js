// content.js (Shadow DOM isolated version)
(() => {
  // If host exists, do nothing (prevents double-insertion)
  if (document.getElementById("sf-nav-sidebar")) return;

  // Create host and attach shadow
  const host = document.createElement("div");
  host.id = "sf-nav-sidebar";
  const shadow = host.attachShadow({ mode: "open" });

  // Insert CSS + HTML inside shadow so page CSS cannot leak in
  shadow.innerHTML = `
    <style>
      /* === Styles (copied/adapted from your CSS) === */

      :host {
        position: fixed;
        top: 30px;
        left: 0;
        z-index: 999999;
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
        

      /* Hamburger button */
      #sf-nav-toggle {
        position: fixed;
        top: 120px;
        left: 0;
        z-index: 1000000;
        background: #0176d3;
        color: white;
        font-size: 20px;
        padding: 5px 7px;
        border-radius: 0 6px 6px 0;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        user-select: none;
      }

      /* Sidebar content with animation */
#sf-nav-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, #fafbfc 0%, #eaeef3 100%);


  border-right: 1px solid #e1e4e8;
  box-shadow: 4px 0 16px rgba(0, 0, 0, 0.12);
  padding: 12px;
  overflow-y: auto;

  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

/* Active (visible) state */
#sf-nav-content.active {
  transform: translateX(0);
}

#sf-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(2px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  z-index: 999998;
}
#sf-backdrop.active {
  opacity: 1;
  visibility: visible;
}



      /* Header */
      #sf-nav-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 12px;
        color: #0176d3;
      }

      #sf-nav-close {
        background: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
        margin: 5px;
      }

      .container {
        box-sizing: border-box;
      }

      h2 {
        font-size: 16px;
        margin-bottom: 16px;
        color: #0176d3; /* Salesforce blue */
        text-align: center;
      }

      h2 small {
        display: block;
        font-size: 12px;
        color: #666;
        margin-top: 4px;
        font-weight: 400;
      }

      .section-header {
  font-size: 12px;
  font-weight: 600;
  color: #374151; /* darker gray for better contrast */
  background: #f9fafb;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 28px 12px 12px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  border-left: 4px solid #0176d3;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06); /* subtle depth */
}

.section-header:first-of-type {
  margin-top: 12px; /* tighter for first section */
}



      .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 12px;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.card:hover {
  transform: translateY(-3px);
  border-color: #0176d3;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.card .icon {
  font-size: 22px;
  color: #0176d3;
  margin-bottom: 6px;
  display: block;
}

.card span {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50; /* dark but clean */
  transition: color 0.2s ease;
}

.card:hover span {
  color: #0176d3; /* Salesforce blue highlight */
}



      /* Search Box */
#searchInput {
  display: block;
  margin: 0 auto 16px auto;
  width: 92%;
  padding: 10px 14px;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  background-color: #fafbfc;
  text-align: left;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

#searchInput::placeholder {
  color: #888;
  font-size: 13px;
}

#searchInput:focus {
  outline: none;
  border-color: #0176d3;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(1, 118, 211, 0.15);
}


      /* No results message */
      #noResults {
  display: none;
  text-align: center;
  margin: 16px auto;
  padding: 12px;
  width: 85%;
  background: #f9fafb;
  border: 1px dashed #d0d7de;
  border-radius: 10px;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
}

.no-results-icon {
  font-size: 20px;
  margin-bottom: 6px;
  opacity: 0.8;
}

.no-results-text {
  font-size: 13px;
  color: #666;
}

      

      

  

.env-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  margin: 0 auto 16px auto;
  color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.env-badge.prod { background: #2ecc71; }   /* Green */
.env-badge.sandbox { background: #ff9800; }/* Orange */
.env-badge.scratch { background: #2196f3; }/* Blue */
.env-badge.dev { background: #000; }    /* Purple */

/* Button grid container */
.sf-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
  margin-bottom: 20px;
}

  /* Base button style */
.sf-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #0176d3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  padding: 8px 14px;
  margin: 6px 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.sf-btn:hover {
  background: #025cb8;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.sf-btn:active {
  transform: scale(0.98);
}

/* Variants */
.sf-btn.orange {
  background: #ff7043;
}
.sf-btn.orange:hover {
  background: #e64a19;
}

.sf-btn.green {
  background: #2ecc71;
}
.sf-btn.green:hover {
  background: #27ae60;
}

.sf-btn.gray {
  background: #6c757d;
}
.sf-btn.gray:hover {
  background: #5a6268;
}

.sf-btn.purple {
  background: #9b59b6;
}
.sf-btn.purple:hover {
  background: #8e44ad;
}

.sf-btn.teal {
  background: #16a085;
}
.sf-btn.teal:hover {
  background: #138d75;
}

.sf-btn.indigo {
  background: #3f51b5;
}
.sf-btn.indigo:hover {
  background: #2e3e9e;
}
.sf-btn.clone {
  background: #fbc02d;
  color: #000; /* better contrast on yellow */
}
.sf-btn.clone:hover {
  background: #f9a825;
}




/* Final Sidebar Title */
#sf-title {
  text-align: center;
  margin: 0 auto 18px auto;
  padding: 14px 10px;
  background: #f4f9ff; /* light Salesforce blue tint */
  border-radius: 12px;
  color: #0176d3;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

#sf-title small {
  display: block;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
  color: #555;
}

#sf-title a {
  color: #025cb8;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}
#sf-title a:hover {
  color: #014f86;
}


#sf-title .product-promo {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid #dce8f5;
  font-size: 12px;
  font-weight: 400;
  color: #555;
}

#sf-title .product-promo a {
  display: inline-block;
  margin-left: 4px;
  color: #0176d3;
  font-weight: 700;
  text-decoration: none;
}

#sf-title .product-promo a:hover {
  color: #014f86;
  text-decoration: underline;
}


      /* Make sure scrollbars in the sidebar are visible above page content */
      #sf-nav-content::-webkit-scrollbar {
        width: 8px;
      }
      #sf-nav-content::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.15);
        border-radius: 4px;
      }
    </style>

    <div id="sf-nav-toggle" title="Open Salesforce Quick Launcher">☰</div>

    <div id="sf-nav-content" role="dialog" aria-label="Salesforce Quick Launcher">
      <div id="sf-nav-header">
        <div id="envBadge" class="env-badge">...</div>
        
        <button id="sf-nav-close" title="Close">✖</button>
      </div>

      <div class="container">
      
        <div id="sf-title">
  ⚡ Salesforce Companion
  <small>by <a href="https://shubhamlashkan.com/" target="_blank" id="sf-about-link">Shubham Lashkan</a></small>
  <small class="product-promo">
    Also check out
    <a href="https://packagexml.dev/" target="_blank" rel="noopener noreferrer">
      PackageXML.dev ↗
    </a>
  </small>
</div>

     
         <input type="text" id="searchInput" placeholder="Search pages..." />
       <div id="noResults">
  <div class="no-results-icon">🔍</div>
  <div class="no-results-text">No results. Try another search.</div>
</div>
        <div id="switchViewContainer" class='sf-actions' style="text-align: center; margin-bottom: 5px; display: none;">
          <button id="switchViewBtn" class="sf-btn orange"></button>
          <button id="copyRecordIdBtn" class="sf-btn gray" style="margin-left:6px; display:none;">📋 Copy ID</button>
<span id="copyMsg" style="display:none; margin-left:6px; font-size:12px; color:green;">✅ Copied!</span>
    
    <button id="devConsoleBtn" class="sf-btn green" title="Open Developer Console" aria-label="Open Developer Console">💻 Dev Console</button>
    <button id="objectManagerBtn" class="sf-btn purple" style="display:none;">🛠️ Edit Object</button>
    
    <button id="showAPINameBtn" class="sf-btn teal" style="display:none;">🆔 Show Field API Names</button>
    <button id="generateSOQL" class="sf-btn indigo" style="display:none;">📋 Generate SOQL</button>
    <button id="cloneRecordBtn" class="sf-btn clone" style="display:none;">📄 Clone Record</button>

</div>

        
        <div id="links" aria-live="polite"></div>

        
      </div>
    </div>
  `;

  // Append host to body
  document.body.appendChild(host);

  const envBadge = shadow.getElementById("envBadge");

  function detectEnvironment() {
    const host = window.location.hostname;

    if (host.includes("sandbox") || host.includes("cs")) {
      envBadge.textContent = "🧪 Sandbox";
      envBadge.className = "env-badge sandbox"; // orange
    } else if (host.includes("scratch")) {
      envBadge.textContent = "🔧 Scratch Org";
      envBadge.className = "env-badge scratch"; // blue
    } else if (host.includes("dev")) {
      envBadge.textContent = "🛠️ Developer Edition";
      envBadge.className = "env-badge dev";
    } else {
      envBadge.textContent = "⚠️ Production";
      envBadge.className = "env-badge prod"; // green
    }
  }

  detectEnvironment();

  // Query shadow nodes (use shadowRoot.querySelector)
  const s = shadow;

  const devConsoleBtn = s.querySelector("#devConsoleBtn");

  // Map Lightning host -> my.salesforce.com host for Developer Console
  function buildDevConsoleUrl() {
    const host = location.hostname;

    // Common Lightning domains → map to my.salesforce.com
    if (host.endsWith(".lightning.force.com")) {
      return `https://${host.replace(
        ".lightning.force.com",
        ".my.salesforce.com"
      )}/_ui/common/apex/debug/ApexCSIPage`;
    }

    // China domain (if applicable)
    if (host.endsWith(".lightning.force.com.cn")) {
      return `https://${host.replace(
        ".lightning.force.com.cn",
        ".my.salesforce.com.cn"
      )}/_ui/common/apex/debug/ApexCSIPage`;
    }

    // Visualforce host (rare for you here, but safe to map)
    if (host.endsWith(".visual.force.com")) {
      return `https://${host.replace(
        ".visual.force.com",
        ".my.salesforce.com"
      )}/_ui/common/apex/debug/ApexCSIPage`;
    }

    // Already on *.my.salesforce.com or instance *.salesforce.com → use as-is
    return `https://${host}/_ui/common/apex/debug/ApexCSIPage`;
  }

  if (devConsoleBtn) {
    devConsoleBtn.addEventListener("click", () => {
      const url = buildDevConsoleUrl();
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  const toggleBtn = s.querySelector("#sf-nav-toggle");
  const content = s.querySelector("#sf-nav-content");
  const closeBtn = s.querySelector("#sf-nav-close");
  const container = s.querySelector("#links");
  const searchInput = s.querySelector("#searchInput");
  const noResults = s.querySelector("#noResults");
  const switchContainer = s.querySelector("#switchViewContainer");
  const switchBtn = s.querySelector("#switchViewBtn");
  const copyBtn = shadow.getElementById("copyRecordIdBtn");
  const copyMsg = shadow.getElementById("copyMsg");

  // Toggle open/close with animation
  toggleBtn.addEventListener("click", () => {
    content.classList.add("active");
    toggleBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    content.classList.remove("active");
    toggleBtn.style.display = "block";
  });

  // Close with ESC (nice quality-of-life)
  s.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      content.style.display = "none";
      toggleBtn.style.display = "block";
    }
  });

  // Build sections & cards
  // NOTE: sections must be available in the same content-script environment (your separate file).
  if (typeof sections === "undefined" || !Array.isArray(sections)) {
    container.innerHTML = `<div style="padding:12px;color:#666">No sections found. Make sure sections.js is loaded as a content script before content.js.</div>`;
  } else {
    const allCards = [];
    sections.forEach((section) => {
      const header = document.createElement("div");
      header.textContent = section.title;
      header.className = "section-header";
      container.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "grid";

      section.pages.forEach((page) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="icon">${page.icon || ""}</div><span>${
          page.name
        }</span>`;

        card.addEventListener("click", () => {
          try {
            window.open(location.origin + page.path, "_blank");
          } catch (err) {
            console.error("Failed to open page:", err);
          }
        });

        grid.appendChild(card);
        allCards.push({ element: card, name: (page.name || "").toLowerCase() });
      });

      container.appendChild(grid);
    });

    // Search filter
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      let visibleCount = 0;
      allCards.forEach(({ element, name }) => {
        if (name.includes(term)) {
          element.style.display = ""; // let grid control layout
          visibleCount++;
        } else {
          element.style.display = "none";
        }
      });
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    });
  }

  const hostname = location.hostname.toLowerCase();

  (function setupRecordButtons() {
    var allFields = null;
    let apiMode = false;
    let mutationTimer = null;
    const switchBtn = shadow.getElementById("switchViewBtn");
    const copyBtn = shadow.getElementById("copyRecordIdBtn");
    const copyMsg = shadow.getElementById("copyMsg");
    const switchContainer = shadow.getElementById("switchViewContainer");
    const objectManagerBtn = shadow.getElementById("objectManagerBtn");
    const showApiNameBtn = shadow.getElementById("showAPINameBtn");
    const generateSOQLBtn = shadow.getElementById("generateSOQL");
    showApiNameBtn.addEventListener("click", toggleApiMode);
    generateSOQLBtn.addEventListener("click", generateSoql);
    const cloneRecordBtn = shadow.getElementById("cloneRecordBtn");

    function toggleApiMode() {
      if (apiMode) return; // Prevent multiple clicks, user must refresh to hide

      apiMode = true;
      const btn = shadow.getElementById("showAPINameBtn");
      if (btn) btn.textContent = "Refresh Page to Hide";

      showApiNames();
      const observer = new MutationObserver(() => {
        if (!apiMode) return;
        if (mutationTimer) clearTimeout(mutationTimer);
        mutationTimer = setTimeout(() => {
          showApiNames();
        }, 180);
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }

    function showApiNames() {
      const fields = document.querySelectorAll(
        "[data-target-selection-name*='RecordField']"
      );

      fields.forEach((field) => {
        try {
          const apiPath = field.getAttribute("data-target-selection-name");
          if (!apiPath) return;
          const apiName = apiPath.split(".").pop();

          const labelEl =
            field.querySelector(".test-id__field-label") ||
            field.querySelector(".slds-form-element__label") ||
            field.querySelector("label");

          if (!labelEl) return;

          if (!labelEl.querySelector(".sf-api-badge")) {
            const badge = document.createElement("span");
            badge.className = "sf-api-badge";
            badge.textContent = ` (${apiName})`;
            badge.style.cssText =
              "font-weight:600; color:#6b6f76; margin-left:6px; font-size:12px;";
            labelEl.appendChild(badge);
          }
        } catch (err) {
          console.debug("sf-api: failed to inject for field", err);
        }
      });
    }

    function generateSoql() {
      console.log("@@@@@@@ generateSoql start");
      let ctx = getRecordContext();
      if (!ctx) {
        showToast("⚠️ Not on a record page", "error");
        return;
      }

      let fieldApiNames = collectFieldApiNames();
      console.log("@@@@@@ fieldApiNames", fieldApiNames);
      if (!fieldApiNames.length) {
        showToast("⚠️ No fields detected on this page", "error");
        return;
      }

      let filteredFields = fieldApiNames.filter(
        (f) => !["Id", "OwnerId", "RecordTypeId", "IsDeleted"].includes(f)
      );
      let topFields = filteredFields.slice(0, 10);

      let soql = "SELECT Id";
      if (topFields.length) soql += ", " + topFields.join(", ");
      soql += ` FROM ${ctx.objectApiName} WHERE Id = '${ctx.recordId}'`;
      console.log("@@@@@@@ soql", soql);
      navigator.clipboard.writeText(soql).then(
        () => showToast("✅ SOQL query copied to clipboard", "success"),
        () => showToast("⚠️ Clipboard error", "error")
      );
      console.log("@@@@@@@ generateSoql end");
    }

    function getRecordContext() {
      let match = window.location.pathname.match(
        /\/lightning\/r\/([^/]+)\/([A-Za-z0-9]{15,18})\//
      );
      if (!match) return null;
      return { objectApiName: match[1], recordId: match[2] };
    }

    function collectFieldApiNames() {
      console.log("@@@@@@ Start collect method");

      // Grab all fields from DOM
      let fields = document.querySelectorAll(
        "[data-target-selection-name*='RecordField']"
      );
      console.log("@@@@@ fields found:", fields.length);

      // Initialize allFields if first time
      if (!allFields) allFields = new Set();

      let namesSet = new Set();

      for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        // Only consider fields not already seen
        if (allFields.has(field)) continue;

        let apiPath = field.getAttribute("data-target-selection-name");
        if (!apiPath) continue;

        let apiName = apiPath.split(".").pop();
        if (apiName) namesSet.add(apiName);

        // Mark field as seen
        allFields.add(field);
      }

      console.log("@@@@@@@@ New field names detected:", namesSet);
      return Array.from(namesSet);
    }

    function showToast(message, type = "success") {
      let toast = document.createElement("div");
      toast.textContent = message;

      Object.assign(toast.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: type === "error" ? "#e74c3c" : "#2ecc71",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "system-ui, sans-serif",
        boxShadow: "0 4px 12px rgba(0,0,0,.25)",
        zIndex: 1000000,
        opacity: "0",
        transform: "translateY(20px)",
        transition: "all 0.3s ease",
      });

      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      });

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    function updateRecordButtons() {
      const pathname = location.pathname || "/";
      const lightningMatch = pathname.match(
        /^\/lightning\/r\/([^/]+)\/([^/]+)\/view/
      );
      const classicMatch = pathname.match(/\/([a-zA-Z0-9]{15,18})(?:[\/?]|$)/);
      if (lightningMatch) {
        const objectApiName = lightningMatch[1];
        const recordId = lightningMatch[2];

        // Lightning ↔ Classic
        switchBtn.textContent = "🏛️ Open in Classic";
        switchContainer.style.display = "block";
        copyBtn.style.display = "inline-block";
        switchBtn.onclick = () =>
          window.open(`${location.origin}/${recordId}`, "_blank");

        copyBtn.onclick = async () => {
          await navigator.clipboard.writeText(recordId);
          copyMsg.style.display = "inline";
          setTimeout(() => (copyMsg.style.display = "none"), 1500);
        };

        // Object Manager button
        objectManagerBtn.style.display = "inline-block";
        objectManagerBtn.onclick = () => {
          const instance = location.hostname;
          const url = `https://${instance}/lightning/setup/ObjectManager/${objectApiName}/list`;
          window.open(url, "_blank", "noopener,noreferrer");
        };
        showApiNameBtn.style.display = "inline-block";
        generateSOQLBtn.style.display = "inline-block";
        cloneRecordBtn.style.display = "inline-block";
        cloneRecordBtn.onclick = () => {
          const url = `${location.origin}/lightning/r/${objectApiName}/${recordId}/clone`;
          window.open(url, "_blank", "noopener,noreferrer");
        };
      } else if (classicMatch) {
        const recordId = classicMatch[1];

        // Classic → Lightning
        switchBtn.textContent = "⚡ Open in Lightning";
        switchContainer.style.display = "block";
        copyBtn.style.display = "inline-block";

        switchBtn.onclick = () =>
          window.open(
            `${location.origin}/lightning/r/${recordId}/view`,
            "_blank"
          );

        copyBtn.onclick = async () => {
          await navigator.clipboard.writeText(recordId);
          copyMsg.style.display = "inline";
          setTimeout(() => (copyMsg.style.display = "none"), 1500);
        };

        // Object Manager button hidden (optional: can implement mapping for classic if needed)
        objectManagerBtn.style.display = "none";
      } else {
        // Not a record page
        switchContainer.style.display = "none";
        copyBtn.style.display = "none";
        objectManagerBtn.style.display = "none";
      }
    }

    // Run once on load
    updateRecordButtons();

    // Polling to detect SPA URL changes (Lightning)
    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        updateRecordButtons();
      }
    }, 500);
  })();
  chrome.runtime.onMessage.addListener((msg) => {
    const s = shadow;
    switch (msg.action) {
      case "switch-view":
        s.getElementById("switchViewBtn")?.click();
        break;
      case "open-dev-console":
        s.getElementById("devConsoleBtn")?.click();
        break;
      case "open-object-manager":
        s.getElementById("objectManagerBtn")?.click();
        break;
    }
  });
})();
