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

    // 투명도 조절하기 - globalAlpha 예제

    // 배경을 그린다
    // ctx.fillStyle = '#FD0';
    // ctx.fillRect(0, 0, 75, 75);
    // ctx.fillStyle = '#6C0';
    // ctx.fillRect(75, 0, 75, 75);
    // ctx.fillStyle = '#09F';
    // ctx.fillRect(0, 75, 75, 75);
    // ctx.fillStyle = '#F30';
    // ctx.fillRect(75, 75, 75, 75);
    // ctx.fillStyle = '#FFF';

    // 투명값을 설정한다
    //ctx.globalAlpha = 0.2;

    // 반투명한 원을 그린다
    // for (var i = 0; i < 7; i++){
    //     ctx.beginPath();
    //     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    //     ctx.fill();
    // }
    
    // 투명도 조절하기 - rgba() 예제

    // 배경을 그린다
    //   ctx.fillStyle = 'rgb(255,221,0)';
    //   ctx.fillRect(0,0,150,37.5);
    //   ctx.fillStyle = 'rgb(102,204,0)';
    //   ctx.fillRect(0,37.5,150,37.5);
    //   ctx.fillStyle = 'rgb(0,153,255)';
    //   ctx.fillRect(0,75,150,37.5);
    //   ctx.fillStyle = 'rgb(255,51,0)';
    //   ctx.fillRect(0,112.5,150,37.5);

    // 반투명한 사각형을 그린다
    //   for (var i=0;i<10;i++){
    //     ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
    //     for (var j=0;j<4;j++){
    //       ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
    //     }
    //   }

    // --------------------------------------------------------------------------------

    // 선 두께 조절하기
    // for (var i = 0; i < 10; i++){
    //     ctx.lineWidth = 1 + i;
    //     ctx.beginPath();
    //     ctx.moveTo(5 + i * 14, 5);
    //     ctx.lineTo(5 + i * 14, 140);
    //     ctx.stroke();
    // }

    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.moveTo(5, 15);
    // ctx.lineTo(135, 15);
    // ctx.stroke();

    // --------------------------------------------------------------------------------

    // 선의 끝점 모양 조절하기

    // var lineCap = ['butt','round','square'];

    // 안내선을 그린다
    // ctx.strokeStyle = '#09f';
    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.lineTo(140, 10);
    // ctx.moveTo(10, 140);
    // ctx.lineTo(140, 140);
    // ctx.stroke();

    // 선을 그린다
    // ctx.strokeStyle = 'black';
    // for (var i=0;i<lineCap.length;i++){  // 배열 길이만큼 반복
    //     ctx.lineWidth = 15;
    //     ctx.lineCap = lineCap[i];    // i번째 인덱스의 값(즉, 문자열)이 들어감 > 배열의 인덱스를 이용하여 선의 끝점 모양을 설정
    //     ctx.beginPath();
    //     ctx.moveTo(25 + i * 50, 10); // i번째 인덱스 숫자(i)가 들어감
    //     ctx.lineTo(25 + i * 50,140);
    //     ctx.stroke();
    // }
  
}