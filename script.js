function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    if (category === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      if (item.classList.contains(category)) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    }
  });
}
