export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function nodeListToArray(classe) {
  const nodesList = document.querySelectorAll("." + classe);
  const array = Array.prototype.slice.call(nodesList);
  console.log(array);

  return array;
}

export function getIdsOfNodeList(classe) {
  const nodesList = document.querySelectorAll("." + classe);
  const array = Array.prototype.slice.call(nodesList.id);
  console.log(nodesList);

  return array;
}

export function scrollToTop() {
  window.scrollTo(0, -window.screen.height);
}
