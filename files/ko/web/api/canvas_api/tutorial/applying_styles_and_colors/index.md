---
title: 스타일과 색 적용하기
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

[도형 그리기](/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes) 장에서는 기본 선과 채우기 스타일만 사용했습니다. 여기서 우리는 그리기를 조금 더 매력적으로 만들 수있는 캔버스 옵션을 살펴볼 것입니다. 그리기에 다른 색상, 선 스타일, 그라디언트, 패턴 및 그림자를 추가하는 방법을 배우게됩니다.

## 색상

지금까지는 그리기 메소드만 살펴봤습니다. 도형에 색을 적용하고자 하면, `fillStyle`과 `strokeStyle` 두 가지 중요한 속성을 사용할 수 있습니다.

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : 도형을 채우는 색을 설정합니다.
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : 도형의 윤곽선 색을 설정합니다.

여기서의 `color`는 CSS의 {{cssxref("&lt;color&gt;")}}, 그라디언트 객체, 패턴 객체를 뜻합니다. 그라디언트 객체와 패턴 객체는 페이지 아래에서 설명합니다. 윤곽선과 채움 색의 초기 설정값은 검은색입니다. (CSS 색상 값 `#000000`)

> **참고:** `strokeStyle` 또는 `fillStyle` 속성을 설정하면, 새로 설정된 값이 앞으로 그려질 도형의 기본 값이 됩니다. 각 도형에 다른 색을 적용하려면 `fillStyle` 또는 `strokeStyle` 속성을 다시 적용해야 합니다.

색의 올바른 값은 CSS3 사양에 나오는 {{cssxref("&lt;color&gt;")}} 값입니다. 아래에 나오는 색은 모두 한가지 색을 다르게 표현한 것입니다.

```js
// fillStyle에 적용되는 색은 모두 '오렌지'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255, 165, 0)";
ctx.fillStyle = "rgba(255, 165, 0, 1)";
```

### `fillStyle` 예제

이 예제에서 `for` 반복문을 두 번 사용하여 사각형 격자를 그릴 것입니다. 결과는 스크린샷과 같을 것입니다. 결과가 그리 대단한 것은 아닙니다. 각 사각형의 RGB 색상값에서 붉은색과 녹색 값만을 변수 `i`와 `j`를 사용하여 변경합니다. 파란색 채널은 고정된 값입니다. 채널 값들을 변경함으로써, 모든 종류의 팔레트를 생성할 수 있습니다. 단계를 늘리면 Photoshop에서 사용하는 색상 팔레트와 비슷한 모양을 얻을 수 있습니다.

<pre class="brush: js;highlight[5,6]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i &#x3C; 6; i++){
    for (var j = 0; j &#x3C; 6; j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ', 0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}</pre>

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

결과는 아래와 같습니다.

{{EmbedLiveSample("A_fillStyle_example", 160, 160, "canvas_fillstyle.png")}}

### `strokeStyle` 예제

이번 예제는 위에 나온 예제와 비슷하지만, `strokeStyle` 속성을 사용하여 윤곽선의 색을 바꿉니다. 사각형 대신, 원을 그리는 `arc()` 메소드를 사용합니다.

<pre class="brush: js;highlight[5,6]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i &#x3C; 6; i++) {
    for (var j = 0; j &#x3C; 6; j++) {
      ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ')';
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}</pre>

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

결과는 아래와 같습니다.

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "canvas_strokestyle.png")}}

## 투명도

캔버스에는 불투명한 도형을 그릴 수도 있고, 반투명한 도형도 그릴 수도 있습니다. `globalAlpha` 값을 설정하거나 윤곽선 또는 채움 스타일에 반투명 색을 적용하면 됩니다.

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}
  - : 투명도 값이 설정되면 이후 캔버스에 그려지는 모든 도형들의 투명도가 바뀝니다. 설정하는 값은 0.0(완전히 투명)과 1.0(완전히 불투명) 사이에 있어야 하며, 초기 설정값은 1.0(완전히 불투명)입니다.

`globalAlpha`는 모두 같은 투명도로 캔버스에 많은 도형을 그릴 때 유용합니다. 하지만, 보통은 각각의 도형마다 투명도를 설정하는 것이 더 유용할 것입니다.

`strokeStyle`과 `fillStyle` 값에 CSS rgba 색상값을 적용할 수 있으므로, 투명한 색을 적용하려면 아래와 같은 표기법을 사용할 수 있습니다.

```js
// 외곽선과 채움 스타일에 투명 적용

ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
```

`rgba()` 함수는 `rgb()` 함수와 비슷하지만, 인자가 하나 더 있습니다. 마지막 인자는 투명도 값을 설정하는 인자입니다. 올바른 범위는 0.0(완전히 투명)에서 1.0(완전히 불투명)입니다.

### `globalAlpha` 예제

이 예제에서, 네 가지 다른 색을 가진 사각형을 배경에 그릴 것입니다. 그 위에, 반투명한 원을 여러 개 그릴 것입니다. `globalAlpha` 값을 `0.2`로 설정하면 이후 그려질 도형은 이 값을 사용합니다. `for` 반복문을 사용하여 점점 큰 반지름의 원을 그립니다. 최종 결과물은 원형 그레이디언트가 됩니다. 원이 겹쳐지면서 점점 불투명해지는 것을 볼 수 있으며, 최종적으로 한 가운데에 있는 원에서는 뒷 배경이 거의 보이지 않게 됩니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // 배경을 그린다
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  // 투명값을 설정한다
  ctx.globalAlpha = 0.2;

  // 반투명한 원을 그린다
  for (var i = 0; i &#x3C; 7; i++){
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "180", "180", "canvas_globalalpha.png")}}

### `rgba()`를 사용한 예제

두번째 예제에서는 위의 예제와 비슷한 일을 하지만, 겹쳐진 원을 그리는 대신, 불투명도가 증가하는 작은 사각형을 그릴 것입니다. 각각의 도형마다 윤곽선이나 채움 스타일을 따로따로 설정할 수 있기 때문에, `rgba()`를 사용할 때는 조금 더 제어가 쉽고 융통성도 있습니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 배경을 그린다
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0,0,150,37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0,37.5,150,37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0,75,150,37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0,112.5,150,37.5);

  // 반투명한 사각형을 그린다
  for (var i=0;i&#x3C;10;i++){
    ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
    for (var j=0;j&#x3C;4;j++){
      ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("An_example_using_rgba()", "180", "180", "canvas_rgba.png")}}

## 선 모양

선의 스타일을 바꾸는 방법이 몇가지 있습니다.

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : 이후 그려질 선의 두께를 설정합니다.
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : 선의 끝 모양을 설정합니다.
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : 선들이 만나는 "모서리"의 모양을 설정합니다.
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : 두 선이 예각으로 만날 때 접합점의 두께를 제어할 수 있도록, 연결부위의 크기를 제한하는 값을 설정합니다.
- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : 음수가 아닌 짝수를 포함하는 현재 선의 대시 패턴 배열을 반환합니다.
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : 현재 선의 대시 패턴을 설정합니다.
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : 선의 대시 배열이 어디서 시작될지 지정합니다.

아래 예제들을 보면 어떻게 동작하는지 이해할 수 있을 것입니다.

### `lineWidth` 예제

현재 선의 두께를 설정합니다. 설정값은 반드시 양수이어야 하며, 초기 설정값은 1.0 단위입니다.

선의 두께는 지정된 경로의 가운데에 있는 획의 두께입니다. 이 말의 뜻은, 경로의 좌우로, 설정된 두께 반 만큼의 폭 영역이 그려진다는 것입니다. 캔버스 좌표는 픽셀을 직접 참조하지 않으므로, 선명한 수평 및 수직선을 얻기 위해 특별히 주의를 기울여야 합니다.

아래에 나오는 예제에서는, 선의 두께가 점점 증가하는 10개의 직선이 그려집니다. 가장 왼쪽의 선은 1.0 단위 폭입니다. 그러나, 경로의 위치 때문에 가장 왼쪽과 다른 모든 홀수 폭 두께 선은 선명하게 보이지 않습니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i &#x3C; 10; i++){
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "180", "180", "canvas_linewidth.png")}}

선명한 선을 얻으려면 경로에 획을 어떻게 그려지는지 이해해야 합니다. 아래의 이미지를 보면, 격자는 캔버스의 좌표 격자를 나타냅니다. 격자선 사이에 있는 사각형은 실제 픽셀과 딱 맞아 떨어집니다. 아래에 있는 첫번째 이미지를 보면, (2,1)에서 (5,5)로 사각형이 채워져 있습니다. 사각형의 전체 영역(연한 붉은 색)은 픽셀 경계선 사이에 딱 맞아 떨어지기 때문에 채워진 사각형은 선명한 가장자리를 갖습니다.

![](canvas-grid.png)

만일 (3,1)에서 (3,5)로 그리는 직선의 두께가 1.0이라면, 두번째 이미지와 같은 상황이 됩니다. 채워진 실제 영역 (진한 파란색)은 패스의 양쪽에있는 픽셀의 절반까지만 확장됩니다. 이것은 1 픽셀을 채우는 것이 아니므로 근사값으로 화면에 그려지게 됩니다. 그래서 양옆의 영역(연한 파란색과 짙은 파란 색)으로, 실제 설정한 색과는 다른 흐릿한 색으로 채워지는 것입니다. 이전 예제에서 보듯이 선 두께가 `1.0`인 선에서 일어난 일입니다.

이렇게 되는 것을 막으려면, 경로를 아주 정밀하게 생성해야 합니다. 선의 두께가 1.0이면 경로의 양쪽으로 0.5 단위만큼이라는 것을 알고 있으니, (3.5,1)에서 (3.5,5)로 그리는 경로를 생성하는 세번째 이미지의 결과는 완벽히 정밀하게 1 픽셀 두께의 수직선이 됩니다.

> **참고:** **참고:** 위에 나온 수직선 그리기 예제를 살펴보면, Y 위치는 정수로 된 격자선 위치를 참조하고 있습니다. 그렇지 않았다면, 끝점에서 픽셀의 반을 차지한 상태로 보였을 것입니다. (초기값이 `butt`인 `lineCap` 스타일의 설정값에 따라 다르게 보입니다. 홀수 두께 선들의 좌표를 0.5 픽셀씩 조정하여 다시 계산하고 싶을지도 모릅니다. `lineCap` 스타일을 `square`로 설정함으로써, 끝점에서 선의 외곽 경계선은 픽셀에 딱 맞게 자동적으로 확장될 것입니다.)경로의 시작 지점과 종료 지점의 끝점만이 영향을 받는다는 것에 주목하세요. 만약 `closePath()`로 경로가 닫힌다면, 시작 지점과 종료 지점은 없는 것입니다. 그 대신, 경로 안에 있는 모든 끝점들은, 초기 설정값이 `miter`인 `lineJoin` 스타일의 설정값을 사용하여 이전 부분 및 다음 부분과 이어지는데, 교차되는 점들로 이어진 부분들의 외곽 경계선을 자동적으로 확장하는 효과가 생깁니다. 그렇기 때문에 만약 이들 이어진 부분들이 수직 또는 수평이라면, 그려지는 선들은 각 끝점의 중심에 놓인 픽셀을 가득 채우게 될 것입니다. 이들 선 스타일에 대한 예제는 아래에 나옵니다.

짝수 두께의 선들은 반으로 나누어도 각각의 반은 정수의 양만큼이기 때문에 픽셀을 조정할 필요가 없습니다.

비트맵이 아닌 벡터 2D 그래픽으로 작업할 때, 작업을 시작할 때는 약간 힘들겠지만, 격자와 경로의 위치에 주의를 기울인다면, 크기를 키우거나 줄이거나 또는 어떠한 변형을 하더라도 그리려는 이미지는 똑바로 보일 것입니다. 1.0 두께의 수직선은 2배로 크기를 키웠을 때, 정확히 2 픽셀 두께의 선이 되며, 올바른 위치에 나타날 것입니다.

### `lineCap` 예제

`lineCap` 속성은 그리려는 모든 선의 끝점 모양을 결정합니다. `butt`, `round`, `square`라는 세 가지 값을 가지며, 초기 설정값은 `butt`입니다.

![](canvas_linecap.png)

- `butt`
  - : 선의 끝이 좌표에 딱맞게 잘립니다.
- `round`
  - : 선의 끝이 동그랗습니다.
- `square`
  - : 선 끝에, 선 두께 반만큼의 사각형 영역이 더해집니다.

이 예제에서는, 각기 다른 `lineCap` 속성 값을 가진 선 세개가 그려집니다. 또한 각 선들의 차이점을 정확히 보이기 위한 안내선이 추가로 그려집니다. 세개의 선 모두, 이 안내선 위에 시작과 종료 좌표가 있습니다.

맨 왼쪽에 있는 선은 초기 설정값인 `butt`을 사용합니다. 안내선에 딱 맞게 선이 시작되고 끝이 납니다. 가운데에 있는 선은 `round`를 사용합니다. 선 두께의 반을 반지름으로 하는 반원이 끝에 붙습니다. 맨 오른쪽에 있는 선은 `square`를 사용합니다. 선 두께 만큼의 너비와 선 두께 반 만큼의 높이를 가진 네모 상자가 끝에 붙습니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineCap = ['butt','round','square'];

  // 안내선을 그린다
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // 선을 그린다
  ctx.strokeStyle = 'black';
  for (var i=0;i&#x3C;lineCap.length;i++){
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50,140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "180", "180", "canvas_linecap.png")}}

### `lineJoin` 예제

`lineJoin` 속성은, 도형을 이루는 선이나 호나 곡선들이 연결되는 지점의 모양을 결정합니다. 끝점과 제어점이 정확히 같은 위치인, 길이가 0인 부분들은 제외된다.

이 속성에는 세 가지 값이 있는데, `round`, `bevel`, `miter`이며, 초기 설정값은 `miter`입니다. 두 부분들이 같은 방향으로 연결되어 있는 경우에는, `lineJoin`을 설정해도 아무런 효과가 나타나지 않습니다.

![](canvas_linejoin.png)

- `round`
  - : 도형의 모서리를, 연결되는 부분들의 공통 끝점을 중심으로 하는 원 모양으로 만듭니다. 이때 원의 반지름은 선의 두께와 같습니다.
- `bevel`
  - : 도형의 모서리를, 연결되는 부분들의 공통 끝점에서 세모 모양으로 만듭니다.
- `miter`
  - : 도형의 모서리를, 두 부분의 바깥쪽 테두리 선을 각각 연장하여 교차된 점으로 생긴 마름모꼴 모양으로 만듭니다. `miterLimit` 속성값에 따라 모양이 달라집니다.

아래 예제에서 세 개의 경로를 그릴 것입니다. 세 경로는 각각 다른 `lineJoin` 속성값을 가집니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;
  for (var i=0;i&#x3C;lineJoin.length;i++){
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "180", "180", "canvas_linejoin.png")}}

### `miterLimit` 속성 예제

위의 예제에서 볼 수 있듯이, 속성값을 `miter`로 하여 두 선이 연결되면, 연결되는 두 선의 바깥쪽 테두리는 연장선이 만나는 지점까지 확장됩니다. 연결된 두 선이 이루는 각도가 크면, 확장되는 영역이 크지 않지만, 각도가 작아짐(끝이 뾰족해짐)에 따라서 이 영역이 기하급수적으로 커질 수도 있습니다.

`miterLimit` 속성은 끝점이 만나는 지점과 테두리 연장선이 만나는 지점이 얼마나 떨어져 있을지를 결정합니다. 두 선이 이 값을 넘게 되면, `lineJoin` 속성의 `bevel` 값 모양이 적용됩니다. `miterLimit` 속성값(HTML {{HTMLElement("canvas")}}에서, 초기 설정값은 10.0)에 의해, 현재 좌표 방식 안에서, 선의 두께에 따라, 어느 정도까지 뾰족해질 수 있는지가 계산됩니다. 그래서 `miterLimit`은 현재 디스플레이 비율이나 경로의 변형 같은 것으로 각각 설정될 수 있습니다. 그렇게 하여 선의 모서리에만 영향을 줍니다.

더 자세히 얘기하자면, 뾰족함 제한(miter limit)은, 선 두께의 반과 확장되는 길이(HTML 캔버스에서, 선이 연결되는 바깥쪽 끝부분과, 경로에서 연결되는 두 부분의 공통 끝점 사이로 측정합니다.)의 최대 허용 비율입니다. 이것은 두 부분의 외곽선이 만나는 안쪽 점과 바깥쪽 점 사이 거리와, 선 두께의 최대 허용 비율과 같습니다. miter 값 모양이 아닌 bevel 값 모양으로 연결되는 지점의 최소 안쪽 각 반 만큼의 값과 같은 것입니다.

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 초기 설정값이 10.0인 뾰족함 제한(miter limit)값은 약 11도보다 낮은 예각인 곳을 bevel 값 모양으로 만듭니다.
- 뾰족함 제한 값이 √2 ≈ 1.4142136(반올림)과 같다면 연결되는 곳이 둔각이거나 직각인 곳을 제외한 모든 곳을 bevel 값 모양으로 만듭니다.
- 뾰족함 제한 값이 1.0과 같다면 모든 곳을 bevel 값 모양으로 만듭니다.
- 뾰족함 제한 값에는 1.0보다 작은 값이 올 수 없습니다.

다음 예제에서는 `miterLimit` 값을 바꾸고 그 결과가 어떤지 바로 확인할 수 있습니다. 파란색 선은 지그재그 무늬 안에서 선들의 시작 지점과 종료 지점을 나타냅니다.

이 예제에서 `miterLimit` 값을 4.2보다 낮게 설정하면, 모든 연결 지점은 bevel 값 모양이 되어 파란색 선에 붙을 것입니다. `miterLimit` 값이 10보다 높다면, 거의 모든 연결 지점들이 파란색 선 바깥쪽에 있을 것입니다. 왼쪽으로 갈수록 파란색 선에서 더 많이 튀어나오는데, 왼쪽으로 갈수록 연결되는 각이 더 작아지기 때문입니다. 값을 5로 설정하면, 반은 bevel 값 모양으로, 반은 miter 값 모양이 됩니다.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 캔버스를 비운다
  ctx.clearRect(0,0,150,150);

  // 안내선을 그린다
  ctx.strokeStyle = '#09f';
  ctx.lineWidth   = 2;
  ctx.strokeRect(-5,50,160,50);

  // 선 스타일을 설정한다
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 10;

  // 입력 값을 검사한다
  if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
  } else {
    alert('Value must be a positive number');
  }

  // 선을 그린다
  ctx.beginPath();
  ctx.moveTo(0,100);
  for (i=0;i&#x3C;24;i++){
    var dy = i%2==0 ? 25 : -25 ;
    ctx.lineTo(Math.pow(i,1.5)*2,75+dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>
      Change the <code>miterLimit</code> by entering a new value below and
      clicking the redraw button.<br /><br />
      <form onsubmit="return draw();">
        <label>Miter limit</label>
        <input type="text" size="3" id="miterLimit" />
        <input type="submit" value="Redraw" />
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "400", "180", "canvas_miterlimit.png")}}

### 대시라인 사용하기

`setLineDash` 메소드와 `lineDashOffset` 속성은 선의 대시 패턴을 지정합니다. `setLineDash` 메소드는 거리를 지정하는 숫자 목록을 받아 선과 틈을 교대로 그리며 `lineDashOffset` 속성은 패턴을 시작할 위치를 오프셋으로 설정합니다.

이 예제에서 우리는 행진하는 개미 효과를 만들고 있습니다. 컴퓨터 그래픽 프로그램의 선택 도구에서 흔히 볼 수있는 애니메이션 기술입니다. 테두리를 애니메이션화하여 사용자가 선택 테두리와 이미지 배경을 구별하는 데 도움이됩니다. 이 튜토리얼의 뒷부분에서 이 작업 및 다른 [기본 애니메이션](/ko/docs/docs/Web/API/Canvas_API/Tutorial/Basic_animations)을 수행하는 방법을 배울 수 있습니다.

```html hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Using_line_dashes", "120", "120", "marching-ants.png")}}

## 그라디언트(Gradient)

다른 그래픽 프로그램들과 마찬가지로, 선형 및 원형의 그레이디언트를 사용할 수 있습니다. 다음 메소드 중 하나를 사용하여 {{domxref("CanvasGradient")}} 객체를 생성합니다. 그런 다음 이 객체를 `fillStyle` 또는 `strokeStyle` 속성에 할당 할 수 있습니다.

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : 시작점 좌표를 (`x1`, `y1`)로 하고, 종료점 좌표를 (`x2`, `y2`)로 하는 선형 그라디언트 오브젝트를 생성합니다.
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : 반지름이 `r1`이고 좌표 (`x1`, `y1`)을 중심으로 하는 원과, 반지름이 `r2`이고 좌표 (`x2`, `y2`)를 중심으로 하는 원을 사용하여 그라디언트가 생성됩니다.

예를 들면 다음과 같습니다.

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

`CanvasGradient` 객체를 만들었다면, `addColorStop()` 메소드를 사용하여, 오브젝트에 색을 적용할 수 있습니다.

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : `gradient` 오브젝트에 새로운 색 중단점(color stop)을 생성합니다. `position`은 0.0에서 1.0 사이의 숫자이고 그라디언트에서 색상의 상대적인 위치를 정의합니다. `color` 인자는 CSS {{cssxref("&lt;color&gt;")}}를 나타내는 문자열이어야하고, 그라디언트가 (전환효과로) 진행되면서 도달한 지점의 색상을 의미합니다.

색 중단점은 원하는 만큼 마음대로 추가할 수 있습니다. 흰 색에서 검은 색으로 변하는 선형 그레이디언트를 만들려면 아래와 같이 합니다.

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### `createLinearGradient` 예제

이 예제에서 그레이디언트 두 개를 만들 것입니다. 예제에서 볼 수 있듯이, `strokeStyle`과 `fillStyle` 속성 모두 `canvasGradient` 오브젝트를 속성 값으로 가질 수 있습니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 그레이디언트를 생성한다
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgba(0, 0, 0, 0)");

  // 외곽선과 채움 스타일에 그레이디언트를 적용한다
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // 도형을 그린다
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

첫번째 그라디언트는 배경 그라디언트입니다. 보시다시피 같은 위치에 두 가지 색상을 지정했습니다. 매우 선명한 색상 전환을 만들기 위해 이 작업을 수행합니다(이 경우 흰색에서 녹색으로). 일반적으로 색상 중단점을 정의하는 순서는 중요하지 않지만, 이 특별한 경우에는 의미가 있습니다.

두 번째 그래디언트에서는 시작 색상 (위치 0.0)을 지정하지 않았는데, 자동으로 다음 색상 중단점의 색상으로 가정하기 때문에 반드시 필요하지는 않기 때문입니다. 따라서 위치 0.5에 검은색을 지정하면 시작부터 중단점까지 자동으로 검정색 그라이언트를 만듭니다.

{{EmbedLiveSample("A_createLinearGradient_example", "180", "180", "canvas_lineargradient.png")}}

### `createRadialGradient` 예제

이 예제에서는 원형 그레이디언트를 4개 만들 것입니다. 포토샵같은 프로그램에서 원형 그레이디언트를 만들 때는 하나의 점을 중심으로 그레이디언트를 만드는데, 캔버스의 원형 그레이디언트에서는 시작과 종료 지점 두군데를 제어할 수 있기 때문에, 기존의 프로그램에서 볼 수 있는 원형 그레이디언트보다는 더 복잡한 효과를 만들어 낼 수 있습니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 그라디언트를 생성한다
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgba(1,159,98,0)");

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgba(255,1,136,0)");

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0,201,255,0)");

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgba(228,199,0,0)");

  // 도형을 그린다
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

이 예제에서는 원형 그레이디언트에 사용되는 두 원의 중심을 달리하여 입체적인 공처럼 보이게 했습니다. 안쪽 원과 바깥쪽 원은 겹치지 않게 하는 것이 좋습니다. 왜냐하면 예상하기 힘든 이상한 결과가 나타날 수 있기 때문입니다.

그레이디언트의 마지막 색 적용 지점에서는 투명도를 적용하였습니다. 투명도가 적용된 지점에서 이전 지점까지의 색 변화를 보기 좋게 만들려면, 두 지점에 똑같은 색을 적용하면 되는데, 이 예제에서는 색의 값을 다른 방식으로 입력하여 헷갈릴 수도 있습니다. 첫번째 그레이디언트에 사용된 `#019F62`와 `rgba(1,159,98,1)`은 같은 색입니다.

{{EmbedLiveSample("A_createRadialGradient_example", "180", "180", "canvas_radialgradient.png")}}

## 패턴(Patterns)

이전 페이지의 예제 중 하나에서 일련의 루프를 사용하여 이미지 패턴을 만들었습니다. 그러나 훨씬 간단한 메소드 인 createPattern () 메소드가 있습니다.

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : 새 캔버스 패턴 객체를 만들어 반환합니다. `image`는 {{domxref("CanvasImageSource")}}(즉, {{domxref("HTMLImageElement")}}, 다른 캔버스, {{HTMLElement("video")}} 요소 등등)입니다. `type`은 이미지 사용 방법을 나타내는 문자열입니다.

`type`은 패턴을 만들기 위해 이미지를 사용하는 방법을 지정하며, 다음 문자열 값 중 하나 여야합니다.

- `repeat`
  - : 수직 및 수평 방향으로 이미지를 이어 붙입니다.
- `repeat-x`
  - : 수평 방향으로만 이미지를 이어 붙입니다.
- `repeat-y`
  - : 수직 방향으로만 이미지를 이어 붙입니다.
- `no-repeat`
  - : 이미지를 이어 붙이지 않습니다. 이미지는 한번만 사용됩니다.

이 메소드를 사용하여 위에서 본 그라디언트 메소드와 매우 유사한 {{domxref ( "CanvasPattern")}} 객체를 생성합니다. 패턴을 생성하면 `fillStyle` 또는 `strokeStyle` 속성에 패턴을 할당 할 수 있습니다. 예를 들면 다음과 같습니다.

```js
var img = new Image();
img.src = "someimage.png";
var ptrn = ctx.createPattern(img, "repeat");
```

> **참고:** `drawImage ()` 메서드와 마찬가지로 이 메소드를 호출하기 전에 이미지가 로드되었는지 확인해야합니다. 그렇지 않으면 패턴이 잘못 그려 질 수 있습니다.

### `createPattern` 예제

이 마지막 예제에서, `fillStyle` 속성에 적용할 패턴을 만들 것입니다. 한 가지 눈여겨 볼 것은, 이미지 `onload` 핸들러 사용한다는 것입니다. 이미지를 패턴에 적용하기 전에 불러오기가 완료되었는지 확인하는 것입니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 패턴으로 사용할 이미지 오브젝트를 생성한다
  var img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = function () {
    // 패턴을 생성한다
    var ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
draw();
```

The result looks like this:

{{EmbedLiveSample("A_createPattern_example", "180", "180", "canvas_createpattern.png")}}

## 그림자

그림자 사용에는 네 개의 속성이 있습니다.

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : 그림자가 객체에서 연장되어야하는 수평 거리를 나타냅니다. 이 값은 변환 행렬의 영향을 받지 않습니다. 기본값은 0입니다.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : 그림자가 객체에서 연장되어야하는 수직 거리를 나타냅니다. 이 값은 변환 행렬의 영향을 받지 않습니다. 기본값은 0입니다.
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : 흐림(blur) 효과의 크기를 나타냅니다. 이 값은 픽셀 수와 일치하지 않으며 현재 변환 행렬의 영향을 받지 않습니다. 기본값은 0입니다.
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : 그림자 효과의 색상을 나타내는 표준 CSS 색상 값. 기본적으로 완전 검은색입니다.

`shadowOffsetX` 및 `shadowOffsetY` 속성은 그림자가 X 및 Y 방향으로 객체에서 얼마나 멀리 떨어져야하는지 나타냅니다. 이 값은 현재 변환 행렬의 영향을받지 않습니다. 음수값을 사용하면 그림자가 위로 또는 왼쪽으로 확장되고 양수값을 사용하면 그림자가 아래로 또는 오른쪽으로 확장됩니다. 기본값은 모두 0입니다.

`shadowBlur` 속성은 흐림 효과의 크기를 나타냅니다. 이 값은 픽셀 수와 일치하지 않으며 현재 변환 행렬의 영향을받지 않습니다. 기본값은 0입니다.

`shadowColor` 속성은 그림자 효과의 색상을 나타내는 표준 CSS 색상 값입니다. 기본값은 완전 검은색입니다.

> **참고:** **알아둘 것:** 음영은 `source-over` [합성 작업](/ko/docs/docs/Web/API/Canvas_API/Tutorial/Compositing)에만 사용됩니다.

### 그림자 있는 글자 예제

이 예제에서는 그림자가 있는 글자를 그립니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example", "180", "100", "shadowed-string.png")}}

다음 장에서 [텍스트 그리기](/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_text)에 대한 `font` 속성과 `fillText` 메소드를 살펴 보겠습니다.

## 캔버스 채우기 규칙

`fill` (혹은 {{domxref("CanvasRenderingContext2D.clip", "clip")}} 및 {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointinPath")}})을 사용할 때 한 점이 경로 안쪽 또는 바깥에 있는지 그리고 따라서 채워지는지 여부를 결정하기 위한 채우기 규칙 알고리즘을 선택적으로 제공 할 수 있습니다. 경로가 교차하거나 중첩 된 경우에 유용합니다.

다음 두가지 값을 사용할 수 있습니다:

- `nonzero`
  - : [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule) 알고리즘. 기본값.
- `evenodd`
  - : [even-odd winding rule](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule) 알고리즘.

In this example we are using the `evenodd` rule.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules", "110", "110", "fill-rule.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
