// 캔버스 기본 세팅
const canvas = document.getElementById("drawCanvas");

canvas.width = 600;
canvas.height = 600;

// --------------------------------------------------
// 마우스 움직임에 따라 그리기

let painting = false;

function onMouseMove(event) {
    // 마우스가 캔버스 위에 있을 때 가지는 x와 y의 좌표
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {    // 그림을 그리고 있지 않을 때 (painting === true)
        // 마우스가 캔버스 위에 있을 때 그리기 시작
        ctx.beginPath();
        // 캔버스의 좌표를 기준으로 시작점을 설정
        ctx.moveTo(x, y);
    } else {            // 그림을 그리고 있을 때
        // lineTo와 stroke는 마우스를 움직일 때 생긴다.
        // lineTo의 좌표에 Path가 그려짐 (보이지는 않음)
        ctx.lineTo(x, y);
        // 선 그리기
        ctx.stroke();
    }
}

if (canvas) {
    // 사용자가 해당 element에서 마우스를 움직였을 때
    canvas.addEventListener("mousemove", onMouseMove)
}


// --------------------------------------------------

const ctx = canvas.getContext('2d');

// 바탕색 default 값은 하얀색
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 선 색, 바탕 색
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2;

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
// clear 클릭 시 캔버스 초기화

const clear = document.getElementById("clearButton");

if (clear) {
    clear.addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);   // 캔버스 초기화
        ctx.beginPath();                                    // 캔버스 리셋
    });
}

// --------------------------------------------------
// save 클릭 시 지정해 준 이름으로 다운로드

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
// color 선택 > 원하는 색상으로 변경

const colors = document.getElementById("colorSelector");

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

    // Array.from()
    // - 배열을 다시 배열로 반환하는 함수
    // - 반환하는 값은 원래 배열의 값을 새로운 Array로 복사하여 반환한다.

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

    // 화살표 함수를 사용하면 이벤트 핸들러에서 this를 사용할 수 있다.
    // this를 사용하면 이벤트가 발생한 요소를 가리키는 객체를 사용할 수 있다.
    // var d = function (a, b) {
    //     console.log( a * b )
    // };

    // let d = (a, b) => { console.log( a * b ) };

    // (매개변수) => { 본문 }