// 스타일과 색 적용하기

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    // 그라데이션으로 색 적용하기
    // for (var i = 0; i < 6; i++){
    //   for (var j = 0; j < 6; j++){
    //     ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
    //                      Math.floor(255 - 42.5 * j) + ', 0)';
    //     ctx.fillRect(j*25,i*25,25,25);
    //   }
    // }

    // fillStlye 예제 익히기 - 직사각형
    // ctx.fillStyle = "orange";
    // ctx.fillStyle = "#FFA500";
    // ctx.fillStyle = "rgb(255, 165, 0)";
    // ctx.fillStyle = "rgba(255, 165, 0, 1)";
    // ctx.fillRect(10, 10, 100, 100);

    // --------------------------------------------------------------------------------

    // strokeStyle 속성을 사용하여 윤곽선 색 바꾸기
    // for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //         ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
    //                         Math.floor(255 - 42.5 * j) + ')';
    //         ctx.beginPath();
    //         ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    //         ctx.stroke();
    //     }
    // }

    // strokeStlye 예제 익히기 - 원
    // ctx.strokeStyle = "blue";
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    // ctx.fillStyle = "yellow";
    // ctx.stroke();
    // ctx.fill();

    // --------------------------------------------------------------------------------

    

  }