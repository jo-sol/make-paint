// 캔버스 기본 세팅
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext('2d');

// --------------------------------------------------
// input 조절 기능 (버튼 굵기조절바)

const range = document.getElementById("brushSize");

function handleRangeChange(event) {
    const rangevalue = event.target.value;
    ctx.lineWidth = rangevalue;
}

if (range) {
    range.addEventListener("input", handleRangeChange);  
}

// --------------------------------------------------
// 채우기 클릭 시 Fill, Brush 버튼 설정

const mode = document.getElementById("fillButton");

let painting = false;
let filling = false;

if (mode) {
    mode.addEventListener("click", function(event) {
        if (filling === true) {         // ===은 값과 타입 둘 다 같아야 한다. ==보다 조금 더 엄격하고 정확성이 있다.
            filling = false;            // 채우기 실행
            mode.innerText = "Fill";    // innerText는 텍스트만 가져오는 것이다.
        } else {
            filling = true;
            mode.innerText = "Brush";
        }
    });
}

// --------------------------------------------------

const clear = document.getElementById("clearButton");
const save = document.getElementById("saveButton");