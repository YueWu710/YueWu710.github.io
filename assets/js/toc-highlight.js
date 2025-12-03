document.addEventListener("DOMContentLoaded", function() {
  const tocLinks = document.querySelectorAll(".toc a");
  const sections = [];
  
  tocLinks.forEach(function(link) {
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      sections.push({ link: link, section: section });
    }
  });

  function highlightToc() {
    let currentSection = null;
    const scrollPos = window.scrollY + 150;

    sections.forEach(function(item) {
      if (item.section.offsetTop <= scrollPos) {
        currentSection = item;
      }
    });

    tocLinks.forEach(function(link) {
      link.style.color = "#999";
      link.style.fontWeight = "normal";
    });

    if (currentSection) {
      currentSection.link.style.color = "#000";
      currentSection.link.style.fontWeight = "bold";
    }
  }

  window.addEventListener("scroll", highlightToc);
  highlightToc();
});
