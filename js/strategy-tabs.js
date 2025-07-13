// Strategy tabs functionality
function initStrategyTabs() {
  const strategyTabs = document.querySelectorAll(".strategy-tab");
  const strategyPanels = document.querySelectorAll(".strategy-panel");

  console.log("Found strategy tabs:", strategyTabs.length);
  console.log("Found strategy panels:", strategyPanels.length);

  // Log all tabs and their data-strategy attributes
  strategyTabs.forEach((tab, index) => {
    const strategy = tab.getAttribute("data-strategy");
    console.log(`Tab ${index + 1}:`, strategy);
  });

  // Log all panels and their data-strategy attributes
  strategyPanels.forEach((panel, index) => {
    const strategy = panel.getAttribute("data-strategy");
    const hasContent = panel.innerHTML.trim().length > 0;
    const isActive = panel.classList.contains("active");
    console.log(
      `Panel ${index + 1}:`,
      strategy,
      "hasContent:",
      hasContent,
      "isActive:",
      isActive
    );
  });

  if (strategyTabs.length === 0 || strategyPanels.length === 0) {
    console.log("Strategy elements not found, retrying...");
    setTimeout(initStrategyTabs, 100);
    return;
  }

  strategyTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetStrategy = this.getAttribute("data-strategy");
      console.log("Clicked tab with strategy:", targetStrategy);

      // Remove active class from all tabs and panels
      strategyTabs.forEach((t) => t.classList.remove("active"));
      strategyPanels.forEach((p) => p.classList.remove("active"));

      // Add active class to clicked tab and corresponding panel
      this.classList.add("active");
      const targetPanel = document.querySelector(
        `.strategy-panel[data-strategy="${targetStrategy}"]`
      );
      if (targetPanel) {
        targetPanel.classList.add("active");
        console.log("Activated panel:", targetStrategy);
        console.log("Panel classes:", targetPanel.className);
        console.log(
          "Panel display style:",
          window.getComputedStyle(targetPanel).display
        );
        console.log(
          "Panel content:",
          targetPanel.innerHTML.substring(0, 100) + "..."
        );
      } else {
        console.error("Panel not found for strategy:", targetStrategy);
        // Try to find any panel with this strategy
        const allPanels = document.querySelectorAll(".strategy-panel");
        allPanels.forEach((panel) => {
          console.log("Available panel:", panel.getAttribute("data-strategy"));
        });
      }
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStrategyTabs);
} else {
  initStrategyTabs();
}
