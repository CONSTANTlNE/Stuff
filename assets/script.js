// Function to toggle a specific tab
function toggleTab(tabId) {
  const tabContent = document.getElementById(tabId);
  if (tabContent.style.display === "block") {
    tabContent.style.display = "none";
  } else {
    tabContent.style.display = "block";
  }
}
