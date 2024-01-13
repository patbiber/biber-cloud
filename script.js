const frames = [
    `     /|_/|\n    / o o \\\n   (   "   )\n    \\~(*)~/\n     \`~*~\``,
    `     /|_/|\n    / @ @ \\\n   (   "   )\n    \\~(*)~/\n     \`~*~\``
];

let currentFrame = 0;

setInterval(() => {
    document.getElementById("asciiBeaver").innerText = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}, 500); // Change frame every 500ms
