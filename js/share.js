function toggleShare(element) {
  const socialShare = element.nextElementSibling; // Assuming social share links are next siblings
  socialShare.classList.toggle('show-share');
}
