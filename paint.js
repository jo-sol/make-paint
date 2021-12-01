// 캔버스 기본 세팅
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext('2d');

const range = document.getElementById("brushSize");



function handleRangeChange(event) {
    const rangevalue = event.target.value;
    ctx.lineWidth = rangevalue;
}

if (range) {
    range.addEventListener("input", handleRangeChange);  
}
