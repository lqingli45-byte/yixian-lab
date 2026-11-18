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

(function () {
  var link = document.querySelector("[data-checkout-link]");
  if (!link) return;
  var status = document.querySelector("[data-checkout-status]");

  fetch("site.config.json", { cache: "no-store" })
    .then(function (response) {
      return response.ok ? response.json() : null;
    })
    .then(function (config) {
      if (!config || config.checkoutEnabled !== true || typeof config.checkoutUrl !== "string") return;

      var url = new URL(config.checkoutUrl);
      if (url.origin !== "https://checkout.dodopayments.com" || url.username || url.password ||
          !/^\/buy\/pdt_[A-Za-z0-9]+\/?$/.test(url.pathname)) return;

      link.href = url.href;
      link.hidden = false;
      if (status) status.hidden = true;
    })
    .catch(function () {
      // Leave the visible purchase status in place if the public config is unavailable.
    });
})();
