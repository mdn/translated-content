---
title: 캔버스(canvas)를 이용한 도형 그리기
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

앞서 캔버스 환경 설정([canvas environment](/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage))을 완료 하였다면, 이제 어떻게 캔버스에 그릴수 있는지에 대하여 자세하게 알아봅시다. 이 글을 끝내고 난 후, 여러분은 어떻게 사각형, 삼각형, 선, 아치, 곡선 등 의 기본적인 도형을 그릴수 있는지 익히실 수 있을 것 입니다. 캔버스 위에 물체를 그릴 때에는 path를 사용하는것이 필수적이므로 우리는 이것이 어떻게 사용되는지 볼 것입니다.

## 그리드

![](canvas_default_grid.png)드로잉을 시작 하기에 앞서, 캔버스 그리드 혹은 좌표공간 (**coordinate space)** 에 대하여 이야기 해보겠습니다. 이전 페이지에서 이야기 했던 HTML 골격(skeleton)는 가로 세로 각각 150 픽셀의 캔버스 요소를 가지고 있습니다. 오른쪽에 보시면, 캔버스와 기본 그리드가 놓인것을 보실 수 있습니다. 기본적으로 그리드의 1단위는 캔버스의 1픽셀과 같습니다. 이 그리드의 원점은 좌측상단의 (0,0) 입니다. 모든 요소들은 이 원점을 기준으로 위치됩니다. 그렇기 때문에, 파란 사각형의 좌측상단은 왼쪽에서 x 픽셀, 위에서 y 픽셀 떨어진 것이라 볼 수 있고, 이 사각형의 좌표는 (x,y)가 됩니다. 이 튜토리얼 후반부에서 어떻게 원점을 이동하며, 그리드를 회전하고 같은 비율로 확대/축소할 수 있는지 살펴볼 것이지만, 지금은 기본에 충실하도록 합시다.

## 직사각형 그리기

{{Glossary("SVG")}} 와는 다르게, {{HTMLElement("canvas")}}는 오직 하나의 원시적인 도형만을 제공합니다. 바로 **직사각형** 입니다. 다른 모든 도형들은 무조건 하나 혹은 하나 이상의 path 와 여러 점으로 이어진 선으로 만들어집니다. 다행히도, 우리는 여러 path drawing 함수(function)들을 통해 아주 어려운 도형들도 그릴수 있습니다.

첫번째로, 직사각형을 봅시다. 캔버스 위에 직사각형을 그리는데에는 세가지 함수(function)가 있습니다:

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}
  - : 색칠된 직사각형을 그립니다.
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}
  - : 직사각형 윤곽선을 그립니다.
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}
  - : 특정 부분을 지우는 직사각형이며, 이 지워진 부분은 완전히 투명해집니다.

각각의 세 함수는 모두 같은 변수를 가집니다. `x`와 `y`는 캔버스의 좌측상단에서 사각형의 (원점으로부터 상대적인) 위치를 뜻하며, `width` 와 `height`는 사각형의 크기를 뜻하게 됩니다.

전 페이지에서 보여드렸던 `draw()` 함수(function)를 이용하여 위의 세가지 함수를 아래의 예제에 적용해 보았습니다.

### 직사각형 도형 예제

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

위 예제의 결과는 다음과 같습니다.

{{EmbedLiveSample("Rectangular_shape_example", 160, 160, "canvas_rect.png")}}

`fillRect()` 함수는 가로 세로 100 픽셀 사이즈의 검정 사각형을 그립니다. 이후 `clearRect()` 함수가 60x60 픽셀의 사각형 크기로 도형 중앙을 지우게 되고, `strokeRect()`은 이 빈 사각형 공간 안에 50x50 픽셀 사이즈의 윤곽선만 있는 사각형을 만들게 됩니다.

다음 페이지에서, 우리는 `clearRect()`를 대신하는 두개의 함수에 대해 살펴보고, 만들어진 도형의 색이나 윤곽선의 스타일을 바꾸는 방법들에 대하여 알아보도록 하겠습니다.

우리가 다음 섹션에서 보게될 path 함수와 다르게 세개의 직사각형 함수는 캔버스에 바로 그릴 수 있습니다.

## 경로 그리기

*경로(path)*는 직사각형 이외의 유일한 원시적인(primitive) 도형입니다. 경로는 점들의 집합이며, 선의 한 부분으로 연결되어 여러가지 도형, 곡선을 이루고 두께와 색을 나타내게 됩니다. 경로나 하위 경로(sub-path)는 닫힐 수 있습니다. 경로를 이용하여 도형을 만들 때에는 몇가지 추가적인 단계를 거쳐야 합니다:

1. 경로를 생성합니다.
2. [그리기 명령어](/ko/docs/Web/API/CanvasRenderingContext2D#Paths)를 사용하여 경로상에 그립니다.
3. 경로가 한번 만들어졌다면, 경로를 렌더링 하기 위해서 윤곽선을 그리거나 도형 내부를 채울수 있습니다.

다음은 위의 단계들을 실행하기 위해 사용되는 함수입니다:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : 새로운 경로를 만듭니다. 경로가 생성됬다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
- Path 메소드 ([Path methods](/ko/docs/Web/API/CanvasRenderingContext2D#Paths))
  - : 물체를 구성할 때 필요한 여러 경로를 설정하는데 사용하는 함수입니다.
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : 윤곽선을 이용하여 도형을 그립니다.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : 경로의 내부를 채워서 내부가 채워진 도형을 그립니다.

경로를 만들기 위한 첫번째 단계는 `beginPath()` 메소드를 사용하는 것 입니다. 내부적으로, 경로는 도형을 이루는 하위경로(선, 아치 등)들의 집합으로 이루어져있습니다. 이 메소드가 호출될 때 마다, 하위 경로의 모음은 초기화되며, 우리는 새로운 도형을 그릴 수 있게 됩니다.

> [!NOTE]
> 현재 열린 path가 비어있는 경우 ( `beginPath()` 메소드를 사용한 직 후, 혹은캔버스를 새로 생성한 직후), 첫 경로 생성 명령은 실제 동작에 상관 없이 `moveTo()`로 여겨지게 됩니다. 그렇기 때문에 경로를 초기화한 직후에는 항상 명확하게 시작 위치를 설정해 두는것이 좋습니다.

두번째 단계는 실제로 경로가 그려지는 위치를 설정하는 메소드를 호출하는 것 입니다. 이 내용에 대해서는 곧 보실수 있습니다.

세번째 단계는 선택사항으로 `closePath()` 메소드를 호출하는 것 입니다. 이 메소드는 현재 점 위치와 시작점 위치를 직선으로 이어서 도형을 닫습니다. 이미 도형이 닫혔거나 한 점만 존재한다면, 이 메소드는 아무것도 하지 않습니다.

> **참고:** `fill()` 메소드 호출 시, 열린 도형은 자동으로 닫히게 되므로 `closePath()`메소드를 호출하지 않아도 됩니다. 이것은 `stroke()` 메소드에는 **적용되지 않습니다**.

### 삼각형 그리기

예를 들어, 삼각형을 그리기 위한 코드는 다음과 같습니다:

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="100" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

위 코드의 실행 결과는 다음과 같습니다:

{{EmbedLiveSample("Drawing_a_triangle", 110, 110, "triangle.png")}}

### 펜(pen) 이동하기

가장 유용한 함수중에 실제로 어떤 것도 그리지 않지만 위에서 언급한 경로의 일부가 되는 `moveTo()` 함수가 있습니다. 이는 펜이나 연필을 종이위에서 들어 옆으로 옮기는것이라고 보시면 됩니다.

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : 펜을 x와 y 로 지정된 좌표로 옮깁니다.

캔버스가 초기화 되었거나 `beginPath()` 메소드가 호출되었을 때, 특정 시작점 설정을 위해 `moveTo()` 함수를 사용하는것이 좋습니다. 또한 `moveTo()` 함수는 연결되지 않은 경로를 그리는데에도 사용 할 수 있습니다. 아래의 스마일 아이콘을 봅시다.

코드 snippet을 사용해하여 직접 시도하여 보세요. 앞에서 보았던 `draw()` 함수(function)를 붙혀넣기 해 보세요.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  }
}
```

결과는 다음과 같습니다:

{{EmbedLiveSample("Moving_the_pen", 160, 160, "canvas_smiley.png")}}

`moveTo()`를 사용한 코드라인을 지우면 연결된 선들을 확인 할 수 있습니다

> **참고:** `arc()` function에 대하여 더 알아보고 싶다면 아래의 [Arcs](#arcs) 를 확인하세요.

### 선

직선을 그리기 위해서는 `lineTo()` 메소드를 사용할 수 있습니다.

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : 현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그립니다.

이 메소드는 선의 끝점의 좌표가 되는 x와 y의 두개의 인자가 필요합니다. 시작점은 이전에 그려진 경로에 의해 결정 되며, 이전 경로의 끝점이 다음 그려지는 경로의 시작점이 됩니다. 또한 시작점은 `moveTo()` 메소드를 통해 변경될 수 있습니다.

아래의 예시는 하나의 두 삼각형 (윤곽선 삼각형, 색칠된 삼각형)을 그립니다.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

새로운 경로를 지정하기 위해 `beginPath()` 메소드를 먼저 실행합니다. 그 다음 `moveTo()` 메소드를 가지고 시작점을 원하는 위치로 새롭게 지정 해 줍니다. 다음은, 두선을 그어 삼각형의 두 면을 그려줍니다.

{{EmbedLiveSample("Lines", 160, 160, "canvas_lineto.png")}}

여러분은 채워진 삼각형과 윤곽선 삼각형의 차이를 확인 하셨을 겁니다. 위에 언급했던 것 처럼, 경로가 채워지게 되면 그 도형은 자동으로 닫히게 되지만 윤곽선 삼각형에서는 그렇지 않기 때문입니다. 만약에 `closePath()` 메소드를 윤곽선 삼각형 코드에서 지운다면, 오직 두 선만 그려지게 되며 완벽한 삼각형으로 만들어지지 않습니다.

### 호(arc)

호나 원을 그리기위해서는 `arc()` 혹은 `arcTo()` 메소드를 사용합니다..

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, anticlockwise)")}}
  - : _(x, y)_ 위치에 원점을 두면서, 반지름 r을 가지고, _startAngle_ 에서 시작하여 _endAngle_ 에서 끝나며 주어진 _anticlockwise_ 방향으로 향하는 (기본값은 시계방향 회전) 호를 그리게 됩니다.
- {{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}
  - : 주어진 제어점들과 반지름으로 호를 그리고, 이전 점과 직선으로 연결합니다.

`arc` 메소드의 여섯개의 매개변수에 대하여 좀 더 자세하게 알아봅시다: `x` 와 `y`는 호를 그릴 때 필요한 원점 좌표입니다. 반지름(`radius`) 은 말 그대로 호의 반지름을 뜻합니다. `startAngle` 및 `endAngle` 매개 변수는 원의 커브를 따라 호의 시작점과 끝점을 라디안 단위로 정의합니다. 이 변수들은 x축을 기준으로 계산됩니다. Boolean 값을 가지는 `anticlockwise` 변수는 `true`일 때 호를 반시계 방향으로 그리게 되며, 그렇지 않을 경우에는 시계 방향으로 그리게 됩니다.

> **참고:** `arc` 함수에서 각도는 각이 아닌 라디안 값을 사용합니다. 각도를 라디안으로 바꾸려면 다음의 JavaScript(JavaScript) 코드를 사용하실 수 있습니다: `radians = (Math.PI/180)*degrees`.

다음의 예제는 우리가 이제껏 봐 왔던 예제들 보다 약간 더 복잡합니다. 이 예제는 12가지의 다양한 각도로 채워진 각기 다른 호를 그립니다.

두개의 [`for` loops](/ko/docs/Web/JavaScript/Reference/Statements/for)은 루프를 통해 호(arc)들의 행과 열을 읽기 위해 사용되었습니다. `beginPath()`를 사용해 각 호의 새로운 경로를 만듭니다. 코드 내에서, 각각의 매개변수들을 명확하게 보여주기 위해 변수로 정의 하였지만, 실제로 사용할때 꼭 필요한 것은 아닙니다.

`x`와 `y` 좌표는 충분히 명확하게 표기되어야 합니다. `radius` 와 `startAngle`은 고정되어 있습니다. `endAngle`는 처음 180도 (반원) 에서 시작하고 이후 매번 90도씩 증가하다가 마지막 열에서 완벽한 원을 그립니다.

`clockwise` 매개 변수를 지정한 결과로 첫번째와 세번째 줄은 시계방향으로 원호들이 그려졌고 두번째와 네번째 줄에는 반시계방향의 원호들이 그려졌습니다. 마지막으로 `if` 문은 위 반쪽이 윤곽선으로, 아래 반쪽이 색으로 채워진 호들을 만들어 냅니다.

> [!NOTE]
> 이 예제는 다른 예제들 보다 더 큰사이즈의 캔버스가 필요합니다: 150 x 200 픽셀

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i &#x3C; 4; i++) {
      for (var j = 0; j &#x3C; 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Arcs", 160, 210, "canvas_arc.png")}}

### 베지어(Bezier) 곡선과 이차(Quadratic )곡선

다음 경로 타입은 베지어 곡선 ([Bézier curves](https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%A7%80%EC%97%90_%EA%B3%A1%EC%84%A0))으로, 삼차(cubic)와 이차(quadric) 변수가 모두 가능합니다. 이 타입은 대게 복잡한 유기체적 형태 (organic shape)를 그리는데 사용됩니다.

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : `cp1x` 및 `cp1y`로 지정된 제어점을 사용하여 현재 펜의 위치에서 `x`와 `y`로 지정된 끝점까지 이차 베지어 곡선을 그립니다.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : (`cp1x`, `cp1y`) 및 (cp2x, cp2y)로 지정된 제어점을 사용하여 현재 펜 위치에서 `x` 및 `y`로 지정된 끝점까지 삼차 베지어 곡선을 그립니다.

![](canvas_curves.png)오른쪽의 사진은 두 곡선의 차이를 가장 잘 설명해주고 있습니다. 이차 베지에 곡선은 시작점과 끝점 (파란색 점) 그리고 하나의 **제어점** (control point, 빨간 점으로 표시)을 가지고 있지만, 삼차 베지에 곡선은 두개의 제어점을 사용하고 있습니다.

두 메소드에 모두 사용되는 `x`와 `y` 변수는 모두 끝점의 좌표를 나타냅니다. 첫번째 제어점은 `cp1x` 와 `cp1y` 좌표로, 두번째 제어점은 `cp2x` 와 `cp2y` 좌표로 표시되었습니다.

이차 및 삼차 베지어 곡선을 사용하는 것은 매우 어려울 수 있습니다. Adobe Illustrator와 같은 벡터 드로잉 소프트웨어와는 달리, 우리는 현재 수행중인 작업에 대해 직접적인 시각적 피드백을 받을 수 없기 때문입니다. 이런 점은 복잡한 모양을 그리기 어렵도록 합니다. 다음 예제에서 우리는 간단한 유기체적 형태만 그리도록 하겠지만, 여러분이 연습과 시간을 투자 하신다면, 이후에 더욱 복잡한 도형을 그릴수 있게 될 것입니다.

이 예제는 아주 어려운 점은 없습니다. 두 경우 모두 연속된 곡선이 그려지면서 최종 모양이 완성됩니다.

#### 이차 베지에 곡선(Quadratic Bezier curves)

이 예제는 여러개의 이차 베지어 곡선을 이용해 말풍선을 만들어 냅니다.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("Quadratic_Bezier_curves", 160, 160, "canvas_quadratic.png")}}

#### 삼차 베지어 곡선 (Cubic Bezier curves)

이 예제는 삼차 곡선을 이용하여 하트를 그립니다.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("Cubic_Bezier_curves", 160, 160, "canvas_bezier.png")}}

### 직사각형

직사각형을 캔버스에 직접 그리는 [직사각형 그리기](#직사각형_그리기)에서 본 세 가지 메소드 외에 `rect()` 메소드도 있습니다. 이 메소드는 현재 열린 패스에 직사각형 경로를 추가합니다.

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}
  - : 좌측상단이 (x, y)이고 폭과 높이가 `width`와 `height`인 직사각형을 그립니다.

이 메소드가 실행되기 전에, (x,y) 매개변수를 가진 `moveTo()` 메소드가 자동으로 호출됩니다. 즉, 현재의 펜위치가 자동으로 기본 좌표로 초기화 됩니다.

### 조합하기

이제까지 이 페이지의 예제들은 각각의 도형마다 하나의 path 함수를 가지고 있었습니다. 하지만 도형을 만드는데에 사용되는 경로의 종류와 개수는 제한이 없습니다. 그렇기 때문에 이 마지막 예제에서는 모든 경로 함수를 합쳐 여러 게임 캐릭터들을 그려보도록 하겠습니다.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
```

결과 이미지는 다음과 같습니다:

{{EmbedLiveSample("Making_combinations", 160, 160, "combinations.png")}}

이 예제는 보기보다 아주 간단하기 때문에 자세한 설명은 생략하겠습니다. 알아 두어야할 가장 중요한 부분은 `fillStyle` 코드와 사용된 유틸리티 함수 (`roundedRect()` 부분) 입니다. 유틸리티 함수를 사용하게 되면, 사용해야 할 코드의 양과 복잡함을 줄여주는데 도움을 줍니다.

이 튜토리얼에서 나중에 `fillStyle`에 대하여 조금 더 자세하게 알아보도록 하겠지만, 지금은 경로의 채우는 색을 기본값(흑백)에서 바꾸었다가 다시 기본값으로 바꾸는 정도로만 사용하였습니다.

## Path2D 오브젝트 (Path2D objects)

마지막 예제에서 보았 듯이, 캔버스에 객체를 그리는 일련의 경로와 그리기 명령이 있을 수 있습니다. 코드를 단순화하고 성능을 향상시키기 위해 최근 버전의 브라우저에서 사용할 수있는 {{domxref("Path2D")}} 객체를 사용하여 이러한 드로잉 명령을 캐시하거나 기록 할 수 있습니다. 이로써 여러분은 경로를 빠르게 다시 실행 시킬 수 있습니다.

어떻게 `Path2D` object를 생성 할 수 있는지 확인해 봅시다:

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : **`Path2D()`** 생성자는 새로운 `Path2D` 객체를 반환합니다. 선택적으로 다른 경로를 인수로 받거나(복사본을 생성), SVG 경로 데이터로 구성된 문자열을 받아서 객체로 반환합니다.

```js
new Path2D(); // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d); // path from SVG path data
```

`moveTo`, `rect`, `arc` 혹은 `quadraticCurveTo` 등과 같은 모든 경로 메소드 ([path methods](/ko/docs/Web/API/CanvasRenderingContext2D#Paths))들은 `Path2D` 객체에서 사용 가능합니다.

`Path2D` API는 또한 `addPath` 메소드를 사용하여 경로를 결합하는 방법을 추가합니다. 예를 들자면, 여러 요소를 사용하는 오브젝트를 만들 때 유용하게 사용 될 수 있습니다.

- {{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}
  - : 옵션으로 변환 행렬(transformation matrix)을 사용하여 현재 경로에 경로를 추가합니다.

### Path2D 예제

이 예제에서는, 직사각형과 원을 만들어 볼 것입니다. 나중에 사용할 것을 고려하여, 두 도형 모두 `Path2D` object로 저장 될 것입니다. 새로운 버전의 `Path2D` API에서는 여러 메소드들이 지금 사용하고있는 path가 아닌 `Path2D` object를 옵션으로 선택하여 사용 할 수 있도록 업데이트 되었습니다. 아래의 예제에서 보시면, `stroke` 와 `fill` 메소드가 오브젝트를 캔버스 위에 그리도록 path 변수와 함께 사용되었습니다.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

{{EmbedLiveSample("Path2D_example", 130, 110, "path2d.png")}}

### SVG paths 사용하기

새로운 캔버스 path2D API 또다른 강력한 특징 중 하나는, 캔버스의 path를 초기화 하기 위해 [SVG path data](/ko/docs/Web/SVG/Tutorial/Paths)를 사용한다는 것입니다. 이는 path 데이터를 이동시키며, SVG와 canvas 에서 재사용 할 수 있도록 해줍니다.

path는 (`M10 10`) 점으로 이동한 다음, 수평하게 오른쪽으로 으로 80 포인트 (`h 80`) 만큼 이동합니다. 이후 수직으로 80포인트 (v 80) 내려간 다음, 80 포인트 왼쪽으로 (`h -80`) 수평하게 이동하고 다시 시작점 (`z`)으로 돌아갑니다. 예시는 [이곳](/ko/docs/Web/API/Path2D.Path2D#Using_SVG_paths)( `Path2D` constructor )에서 확인하실 수 있습니다.

```js
var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
