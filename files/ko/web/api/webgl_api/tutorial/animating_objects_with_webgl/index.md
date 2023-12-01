---
title: WebGL을 사용한 객체 애니메이션
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

앞 단원에서의 예제 코드는 정지되어 있는 것처럼 보이지만 사실은 15밀리초마다 한 번 씩 WebGL 장면(Scene)을 다시 그리도록 설정되어 있습니다. 그려질 객체의 상태가 계속 똑같기 때문에, 똑같은 객체를 15밀리초마다 계속 다시 그리고 있는 것입니다. 이제 우리가 그린 정사각형을 실제로 움직이게 만들어 보겠습니다.

이번 예제에서는 2차원 정사각형을 3차원으로 회전시키고 이동시켜 보겠습니다. 3차원을 이루는 X, Y, Z축 방향 모두를 중심으로 회전시켜 보면, 우리가 그린 것은 2차원 정사각형이지만 3차원 공간 안에 존재한다는 것을 실감할 수 있을 것 입니다.

## 정사각형 회전시키기

먼저 정사각형을 회전시켜 보겠습니다. 회전 시키려면 회전 상태(회전량)를 저장할 변수가 필요합니다:

```js
var squareRotation = 0.0;
```

이제 정사각형을 그릴 때 회전을 반영하도록 `drawScene()` 함수를 수정해야 합니다. 정사각형을 처음에 그려질 위치로 이동시키고 나서 다음과 같이 회전을 적용합니다:

```js
mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
```

현재 상태의 모델-뷰 행렬을 저장하고, X축과 Z축을 기준으로 `squareRotation` 만큼 행렬을 회전시킵니다.

정사각형을 그리고 난 후에 모델-뷰 행렬을 원상태로 복구합니다:

```js
mvPopMatrix();
```

모델-뷰 행렬을 복구하는 이유는 이 회전이 다른 객체에 영향을 미치는 것을 예방하기 위해서 입니다.

실제로 애니메이션 효과가 나타나도록 하려면 `squareRotation` 값을 시간이 지남에 따라 계속 변경해주는 코드를 추가해야 합니다. `lastSquareUpdateTime`이라는 변수에 마지막으로 다시 그렸던 시각을 저장하고, 다음과 같은 코드를 `drawScene()`에 추가합니다:

```js
var currentTime = new Date().getTime();
if (lastSquareUpdateTime) {
  var delta = currentTime - lastSquareUpdateTime;

  squareRotation += (30 * delta) / 1000.0;
}

lastSquareUpdateTime = currentTime;
```

이 코드는 마지막으로 `squareRotation`의 값을 변경한 시각과 현재 시각과의 차이를 이용해서 회전량을 나타내는 `squareRotation`의 값을 결정 합니다.

## 정사각형 이동시키기

정사각형을 그리기 전에 위치값을 변경하면 정사각형을 이동시킬 수 있습니다. 이번 예제에서는 학습을 목적으로 아주 기초적인 애니메이션을 구현해봅니다. 실전에서 이런 식으로 애니메이션을 구현하면 사람들에게 사랑받지 못할 것입니다.

X, Y, Z 각 축별 오프셋(offset) 값을 새 변수에 저장합니다:

```js
var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
```

축 별 위치 변동값을 다음과 같이 각기 다른 값으로 지정합니다:

```js
var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
```

이제 위치 변동값을 계산하는 코드를 위에서 구현한 회전량 계산 코드 바로 아래에 추가합니다:

```js
squareXOffset += xIncValue * ((30 * delta) / 1000.0);
squareYOffset += yIncValue * ((30 * delta) / 1000.0);
squareZOffset += zIncValue * ((30 * delta) / 1000.0);

if (Math.abs(squareYOffset) > 2.5) {
  xIncValue = -xIncValue;
  yIncValue = -yIncValue;
  zIncValue = -zIncValue;
}
```

마지막으로 다음 코드를 `drawScene()` 함수에 추가합니다:

```js
mvTranslate([squareXOffset, squareYOffset, squareZOffset]);
```

이제 정사각형이 화면에서 좌, 우, 위, 아래, 앞, 뒤로 완전히 자기멋대로 움직이면서 회전하는 것을 볼 수 있습니다. 어찌보면 바탕화면 보호기 같기도 합니다.

WebGL이 지원되는 브라우저라면, [여기](/samples/webgl/sample4/index.html)에서 실제 동작하는 예제를 확인할 수 있습니다.

## 추가적인 행렬 연산

아래의 예제는 스택을 사용하는 두 개의 push, pop 루틴과, 주어진 각도만큼 회전시키는 행렬을 포함하는 몇 가지 추가적인 행렬 연산을 사용합니다. 한 번 참고하시기 바랍니다:

```js
var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw "Can't pop from an empty matrix stack.";
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = (angle * Math.PI) / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
```

이 루틴은 예전에 Vlad Vukićević가 작성했던 예제를 참고하여 만들었습니다.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
