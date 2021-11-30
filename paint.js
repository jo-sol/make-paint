// 렌더링 컨텍스트, 지원 여부 검사
// getContext() 메서드를 이용하여 랜더링 컨텍스트와 그리기 함수들을 사용
// 대체 콘텐츠는 <canvas>를 지원하지 않는 브라우저에 표시
function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

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

        // 경로 그리기

        // Path 메소드는 물체를 구성할 대 필요한 여러 경로를 설정하는 데 사용하는 함수이다.
        // 그리기를 시작하기 위해서는 beginPath() 메소드를 사용해야 한다.

        ctx.beginPath(); // 경로 시작
        ctx.moveTo(75, 50); // 처음 위치로 이동
        ctx.lineTo(100, 75); // 처음 위치에서 지정한 위치로 선을 그린다.
        ctx.lineTo(100, 25); // 지정한 위치에서 지정한 위치로 선을 그린다.
        ctx.fill(); // 색칠

        // fill() 메소드 호출 시 열린 도형은 자동으로 닫히게 되므로
        // closePath()메소드를 호출하지 않아도 되지만,
        // stroke() 메소드는 반드시 closePath()를 사용해야 한다.
    }
}