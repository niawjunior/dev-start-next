function removeClassesFromHTML(htmlString) {
  // Parse the HTML string into a DOM object
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, "text/html");

  // Get all elements with a class attribute and remove the class attribute
  const elements = dom.querySelectorAll("[className]");
  elements.forEach((element) => {
    element.removeAttribute("className");
  });

  // Convert the modified DOM back to an HTML string

  return dom;
}
