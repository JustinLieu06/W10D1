
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let para = document.createElement("p");
  para.innerHTML = string;
  let child = Array.from(htmlElement.children);
  if (child.length > 0) htmlElement.removeChild(child[0]);
  htmlElement.appendChild(para);
};

htmlGenerator('Party Time.', partyHeader);
