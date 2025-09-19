console.log("Gyrfalx interactive site loaded!");

// Rare tag generator
const generateBtn = document.getElementById("generateBtn");
const tagOutput = document.getElementById("tagOutput");

function randomTag(length = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let tag = "";
  for (let i = 0; i < length; i++) {
    tag += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return tag;
}

generateBtn.onclick = () => {
  const tag = randomTag(Math.floor(Math.random() * 3) + 3); // 3-5 chars
  tagOutput.textContent = tag;
};
