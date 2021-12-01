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

// let painting = false;
let filling = false;

if (mode) {
    mode.addEventListener("click", function() {
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

if (clear) {
    clear.addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);   // 캔버스 초기화
        ctx.beginPath();                                    // 캔버스 리셋
    });
}

// --------------------------------------------------

const save = document.getElementById("saveButton");

function handleSaveClick() {
    const image = canvas.toDataURL();           // 캔버스의 이미지를 데이터 URL로 변환, 기본값은 PNG
    
    // var fullQuality = image.replace(/^data:image\/png;base64,/, "1.0");     // 이미지의 품질을 높여 준다.
    // var mediumQuality = image.replace(/^data:image\/png;base64,/, "0.5");   // 이미지의 품질을 낮추어 준다.
    // var lowQuality = image.replace(/^data:image\/png;base64,/, "0.1");      // 이미지의 품질을 낮추어 준다.

    // .createElement()는 요소를 생성하는 함수
    const link = document.createElement("a");   // createElement에 대해 "a"라는 태그를 만들어서 link에 대입 <a></a>
    link.href = image;                          // href에 위에서 설정한 canvas.toDataURL()을 대입
    link.download = "My Sketchbook[🎨]";       // 다운로드 파일 이름
    link.click();                               // 링크를 클릭하면 다운로드가 된다.
}

if (save) {
    save.addEventListener("click", handleSaveClick);
}

// --------------------------------------------------
