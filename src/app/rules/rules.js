function initAccordion() {
  const accordion = document.getElementsByClassName("content-box");
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}

export { initAccordion };
