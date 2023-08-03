---
title: 변형 (transformations)
slug: Web/API/Canvas_API/Tutorial/Transformations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

이 튜토리얼에 앞서 [canvas 그리드](/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes)와 **좌표 공간**에 대해 알아 보았습니다. 지금까지는 기본적인 그리드를 사용해 요구에 맞추어 전체 canvas의 크기를 바꾸기만 했습니다. Transformation(변형)에는 그리드를 원점에서 다른 위치로 옮기고, 회전하며, 확대·축소까지 하는 더 강력한 방법들이 있습니다.

## 상태(state)의 저장과 복원

변형(transformation) 메소드을 살펴보기 전에 두 가지 다른 메소드를 보도록 하지요. 일단 여러분이 더 복잡한 그림(drawings)을 그리기 시작하면 반드시 있어야 하는 메소드들입니다.

- {{domxref("CanvasRenderingContext2D.save", "save()")}}
  - : canvas의 모든 상태를 저장합니다.
- {{domxref("CanvasRenderingContext2D.restore", "restore()")}}
  - : 가장 최근에 저장된 canvas 상태를 복원합니다.

Canvas 상태는 스택(stack)에 쌓입니다. `save()` 메소드가 호출될 때마다 현재 drawing 상태가 스택 위로 푸시됩니다. drawing 상태는 다음과 같이 이루어집니다.

- 이전부터 적용된 변형(가령, `translate`과 `rotate`와 `scale` 같은 – 아래의 내용을 보세요).
- 다음 속성(attributes)의 현재 값:
  {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.
- 현재의 [clipping path](/ko/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths), 이것은 다음 섹션에서 다루겠습니다.

여러분은 원하는 만큼 `save()` 메소드를 많이 호출할 수 있습니다. `restore()` 메소드를 호출할 때마다 마지막으로 저장된 상태가 스택에서 튀어나와 저장된 설정들을 모두 복원시킵니다.

### `save`와 `restore` canvas 상태(state) 예제

사각형 세트를 연이어 그려서 drawing 상태를 가진 스택이 어떻게 기능하는지를 이 예제에서 설명하고자 합니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // 기본 설정으로 사각형을 그리기
  ctx.save(); // 기본 상태를 저장하기

  ctx.fillStyle = "#09F"; // 설정 변경하기
  ctx.fillRect(15, 15, 120, 120); // 새로운 설정으로 사각형 그리기

  ctx.save(); // 현재 상태 저장하기
  ctx.fillStyle = "#FFF"; // 설정 변경하기
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // 새로운 설정으로 사각형 그리기

  ctx.restore(); // 이전 상태 복원하기
  ctx.fillRect(45, 45, 60, 60); // 복원된 설정으로 사각형 그리기

  ctx.restore(); // 초기 상태를 복원하기
  ctx.fillRect(60, 60, 30, 30); // 복원된 설정으로 사각형 그리기
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

첫 단계로 기본 설정으로 커다란 사각형을 그립니다. 그다음에는 이 상태를 저장하고 fill color를 바꿉니다. 그런 후에 두 번째이자 크기가 더 작은 파란 사각형을 그리고 그 상태를 저장합니다. 다시 한번 일부 drawing 설정을 바꾸고 세 번째 반투명한 흰 사각형을 그립니다.

여기까지는 이전 섹션에서 했던 작업과 매우 유사합니다. 하지만 일단 첫 번째 `restore()` 문을 호출하면 스택에서 맨 위의 drawing 상태가 지워지고 설정이 복원됩니다. 만일 `save()`로 저장하지 않았다면, 이전 상태로 되돌리기 위해 fill color와 투명도를 일일이 바꿔주어야 했을 것입니다. 두 속성이라서 간단했을 테지만 그보다 더 많았으면 코드가 급속히 길어졌겠지요.

두 번째 `restore()`문이 호출될 때, 초기 상태( 처음으로 `save`를 호출하기 전에 설정한 상태)가 복원되고 마지막 사각형은 한번 더 검게 그려집니다.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "180", "180", "canvas_savestate.png")}}

## 이동(translating)

![](canvas_grid_translate.png)우리가 살펴볼 첫 번째 변형 메소드는 `translate()`입니다. 이 메소드는 그리드에서 canvas를 원점에서 다른 점으로 옮기는 데 사용됩니다.

- {{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}
  - : 그리드에서 canvas와 그 원점을 이동합니다. `x`는 이동시킬 수평 거리를 가리키고, `y`는 그리드에서 수직으로 얼마나 멀리 떨어지는지를 표시합니다.

변형하기 전에 canvas 상태를 저장하는 것이 좋습니다. 대다수의 경우, 원래 상태로 되돌리려고 역이동(reverse translation)을 시키는 것보다 `restore` 메소드를 호출하는 것이 더욱 간편합니다. 게다가 루프(loop) 안에서 이동하는 거라면 canvas 상태를 저장하고 복원하지 마세요. canvas 모서리 밖에서 그려지는 바람에 drawing의 일부를 잃어버리게 될지 모릅니다.

### `translate` 예제

이 예제에서 canvas 원점의 이동에 관한 좋은 점을 일부 보여드리겠습니다. `translate()` 메소드를 쓰지 않으면 모든 사각형은 같은 위치 (0, 0)에 그려집니다. 또한, `translate()` 메소드는 사각형을 `fillRect()` function에서 좌표를 일일이 적으며 바꾸지 않아도 어디에나 위치할 수 있게 해줍니다. 이렇게 하면 이해하고 사용하기가 좀 더 쉽습니다.

`draw()` function에서 두 개의 루프(loops)를 이용해 `fillRect()` function을 아홉 번 호출합니다. 루프마다 canvas가 이동하고 사각형이 그려지며, canvas는 원래 상태로 되돌아 갑니다. `fillRect()`로의 호출이 `translate()`에 의지해 drawing 위치를 바꾸는데 어떻게 매번 같은 좌표를 사용하는지 눈여겨 보세요.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
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

{{EmbedLiveSample("A_translate_example", "160", "160", "translate.png")}}

## 회전(rotating)

![](canvas_grid_rotate.png)두 번째 변형 메소드는 `rotate()`입니다. canvas를 현재의 원점 둘레로 회전하는 데 사용합니다.

- {{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}
  - : canvas를 현재 원점을 기준으로 라디안의 `angle` 숫자만큼 시계방향으로 회전시킵니다.

회전의 중심점은 언제나 canvas 원점입니다. 중심점을 바꾸려면 `translate()` 메소드를 써서 canvas를 이동해야 합니다.

### `rotate` 예제

이 예제는 사각형을 canvas 원점에서 먼저 회전하고 그다음에 `translate()`의 도움을 받아 사각형 자체의 중심에서 회전하는 데 `rotate()`를 사용합니다.

> **참고:** **주의**: 각도의 단위는 도(degree)가 아닌 라디안(radian)입니다. 변환하려면 `radians = (Math.PI/180)*degrees`.를 사용합니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 좌측 사각형, canvas 원점에서 회전하기
  ctx.save();
  // 파란 사각형
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // 회색 사각형
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // 우측 사각형, 사각형 중심에서 회전하기
  // 파란 사각형 그리기
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // 사각형 중심으로 이동하기
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // 회전
  ctx.translate(-200, -80); // 예전 위치로 이동하기

  // 회색 사각형 그리기
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
```

사각형 자체의 중심 둘레로 회전하려면 사각형의 중심으로 canvas를 옮기세요. 그런 후에 canvas를 회전하고, 그 canvas를 0, 0로 되돌려 이동합니다. 그다음에 사각형을 그리세요.

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "310", "210", "rotate.png")}}

## 확대·축소(scaling)

다음 변형 메소드는 확대·축소(scaling)입니다. canvas 그리드에서 단위(units)를 키우거나 줄이는 데 사용합니다. 이는 벡터 모양과 비트맵(bitmaps) 요소를 축소하거나 확대해서 그리는 데 사용될 수 있습니다.

- {{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}
  - : canvas 단위를 수평으로 x만큼, 수직으로 y만큼 크기를 확대·축소합니다. 둘의 매개 변수는 실수입니다. 1.0보다 작은 값이면 단위의 크기를 축소하고, 1.0보다 큰 값이면 단위의 크기를 확대합니다. 값이 1.0이면 단위의 크기는 그대로입니다.

음수를 이용해서 축을 대칭 시킬 수 있습니다(가령 `translate(0,canvas.height); scale(1,-1);`로 쓰는 것처럼 말이죠. 좌측 하단 모서리에 있는 원점을 이용한, 잘 알려진 카르테시안 좌표계(Cartesian coordinate)인 것이지요.

기본적으로 canvas에서 하나의 단위는 정확히 1픽셀입니다. 예를 들어 0.5라는 확대·축소 비율을 적용한다면, 결과로 나오는 단위는 0.5 픽셀이 될 것이고, 고로 모양도 절반 크기로 그려질 것입니다. 이런 방식으로 크기 비율을 2.0으로 잡으면 단위 크기가 확대되어 하나의 단위는 이제 2픽셀이 되겠지요. 이 결과로 모양은 그만큼 2배로 커집니다.

### `scale` 예제

마지막 예제로 다양한 확대·축소 비율을 이용해 모양을 그려보겠습니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // 간단하지만 확대·축소 비율을 적용한 사각형 그리기
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // 수평으로 대칭하기
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_scale_example", "160", "160", "scale.png")}}

## 변형(transforms)

마지막으로, 다음의 변형(transform) 메소드들은 변환 행렬(transformation matrix)로 변경할 사항을 즉시 적용할 수 있습니다.

- {{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}
  - : 인수(arguments)에 표시된 행렬을 이용해 현재 변환 행렬을 곱합니다. 변환 행렬은 다음과 같이 작성됩니다. <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

<dl><dd>만일 인수 중에 <code><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity" title="/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>가 있다면, 변환 행렬은 예외 처리하는 메소드 대신에 반드시 infinite로 표시되어야 합니다.</dd></dl>

이 function의 매개 변수들은 다음과 같습니다.

- `a (m11)`
  - : 수평으로 확대·축소하기
- _`b (m12)`_
  - : 수평으로 비스듬히 기울이기
- `c (m21)`
  - : 수직으로 비스듬히 기울이기
- `d (m22)`
  - : 수직으로 확대·축소하기
- `e (dx)`
  - : 수평으로 이동하기
- `f (dy)`
  - : 수직으로 이동하기
- {{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}
  - : 현재 변형 상태를 단위 행렬로 재설정하고 나서 동일한 인수로 `transform()` 메소드를 적용합니다. 이는 기본적으로 현재의 변형을 무효로 한 후에 명시된 변형으로 바뀌는데, 한번에 모든 게 진행됩니다.
- {{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}
  - : 현재 변형 상태를 단위 행렬로 재설정합니다. 이는 `ctx.setTransform(1, 0, 0, 1, 0, 0);` 호출과 같습니다.

### `transform`과 `setTransform` 예제

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = "rgb(" + c + ", " + c + ", " + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="200" height="250"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Example_for_transform_and_setTransform", "230", "280", "canvas_transform.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}
