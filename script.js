document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("infoPanel");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");

  const marker1 = document.querySelector("#marker1");
  const marker2 = document.querySelector("#marker2");
  const marker3 = document.querySelector("#marker3");

  panel.style.display = "none";

  marker1.addEventListener("markerFound", () => {
    title.innerText = "Car";
    desc.innerText = "This is a 3D car model.";
    panel.style.display = "block";
  });

  marker2.addEventListener("markerFound", () => {
    title.innerText = "Earth";
    desc.innerText = "This is the GHOST 😨😨.";
    panel.style.display = "block";
  });

  marker3.addEventListener("markerFound", () => {
    title.innerText = "Robot";
    desc.innerText = "This is a robot model.";
    panel.style.display = "block";
  });

  [marker1, marker2, marker3].forEach(marker => {
    marker.addEventListener("markerLost", () => {
      panel.style.display = "none";
    });
  });
});