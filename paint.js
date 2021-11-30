// 렌더링 컨텍스트, 지원 여부 검사
// getContext() 메서드를 이용하여 랜더링 컨텍스트와 그리기 함수들을 사용
// 대체 콘텐츠는 <canvas>를 지원하지 않는 브라우저에 표시
function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        // 직사각형 그리기

        // fillRect(x, y, width, height)
        // 색칠된 직사각형 그리기

        // ctx.fillStyle = 'rgb(200,0,0)'; // 색상 설정
        // ctx.fillRect(10, 10, 55, 50); // 좌표(10,10)에 크기(55,50)의 사각형을 채운다.

        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        // ctx.fillRect(30, 30, 55, 50);

        // 별도로 색상을 지정하지 않으면 바로 위에 선언된 색상이 선택된다.
        // 지정된 색이 아무것도 없다면 기본 색상인 검정색으로 채워진다.

        // ctx.fillRect(25, 25, 100, 100); // 사각형을 채우기
        // ctx.clearRect(45, 45, 10, 10); // 지우기
        // ctx.strokeRect(50, 50, 55, 50); // 선 그리기

        // --------------------------------------------------------------------------------

        // 삼각형 그리기

        // Path 메소드는 물체를 구성할 대 필요한 여러 경로를 설정하는 데 사용하는 함수이다.
        // 그리기를 시작하기 위해서는 beginPath() 메소드를 사용해야 한다.

        // ctx.beginPath(); // 경로 시작
        // ctx.moveTo(75, 50); // 펜을  x와 y 로 지정된 좌표로 옮긴다.
        // ctx.lineTo(100, 75); // 처음 위치에서 지정한 위치로 선을 그린다.
        // ctx.lineTo(100, 25); // 지정한 위치에서 지정한 위치로 선을 그린다.
        // ctx.fill(); // 색칠

        // fill() 메소드 호출 시 열린 도형은 자동으로 닫히게 되므로
        // closePath()메소드를 호출하지 않아도 되지만,
        // stroke() 메소드는 반드시 closePath()를 사용해야 한다.

        // --------------------------------------------------------------------------------

        // 펜 이동하는 방법 학습하기 -  원 그리기

        // moveTo()를 주석하게 되면 펜이 어떻게 이동하는지 확인할 수 있다.
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 얼굴 그리기 - 동그라미
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false);  // 입 그리기 - 반원(Math.PI)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 왼쪽 눈 그리기
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 오른쪽 눈 그리기
        // ctx.stroke();

        // --------------------------------------------------------------------------------

        // 선 그리기

        // ctx.beginPath(); // 경로 열어 주는 메소드
        // ctx.moveTo(25, 25); // 시작점
        // ctx.lineTo(105, 25); // 끝점
        // ctx.closePath(); // stroke() 메소드를 사용해 주기 위해 닫아 주기
        // ctx.stroke(); // 선을 그려 주는 메소드

        // Filled triangle
        // ctx.beginPath();
        // ctx.moveTo(10, 25);
        // ctx.lineTo(70, 30);
        // ctx.lineTo(12, 105);
        // ctx.fill();

        // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();

        // --------------------------------------------------------------------------------

        // 호 그리기

        // Boolean 값을 가지는 anticlockwise 변수는
        // true일 때 반시계 방향 false일 때 시계 방향으로 그려진다.

        // ctx.beginPath();
        // var x = 25 + 1 * 50;
        // var y = 25 + 1 * 50; 
        // var radius = 20; // 반지름
        // var startAngle = 0; // 시작 각도
        // var endAngle = Math.PI + (Math.PI * 1) / 2; // 끝 각도 - 기본값 180도
        // var anticlockwise = 1 / 2 == 0 ? false : true; // 시계 방향인지 반시계 방향인지 결정

        // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        // ctx.closePath();
        // ctx.stroke();

        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 3; j++) {
        //       ctx.beginPath();
        //       var x = 25 + j * 50;
        //       var y = 25 + i * 50;
        //       var radius = 20;
        //       var startAngle = 0;
        //       var endAngle = Math.PI + (Math.PI * j) / 2;
        //       var anticlockwise = i % 2 == 0 ? false : true;
      
        //       ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      
        //       if (i > 1) {
        //         ctx.fill();
        //       } else {
        //         ctx.stroke();
        //       }
        //     }
        //   }

        // --------------------------------------------------------------------------------

        

    }
}