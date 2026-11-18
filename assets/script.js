(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  var isEn = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var openLabel = isEn ? "Close menu" : "关闭菜单";
  var closedLabel = isEn ? "Open menu" : "打开菜单";
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? openLabel : closedLabel);
  });
})();
