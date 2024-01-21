export const navLinksEls: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll(".nav-link");

export const windowPathName: string = window.location.pathname;

navLinksEls.forEach((navLinkEl): void => {
  if (navLinkEl.href.includes(windowPathName)) {
    navLinkEl.classList.add("active");
  }
});
