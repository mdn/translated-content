---
title: WebGL에서 셰이더를 사용하여 색상 적용하기
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

[앞 단원의 예제](/ko/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)에서 정사각형을 그려봤으니, 이제 정사각형에 색을 칠해 보겠습니다. 셰이더를 조금 수정하면 색을 칠할 수 있습니다.

## 정점에 색상 적용

GL(Graphic Library)에서 객체는 정점의 집합으로 구성되며, 각 정점은 위치값과 색상값을 가지고 있습니다. 기본적으로 정점이 아닌 모든 픽셀의 색상값은 선형 보간법(linear interpolation)을 이용해서 계산됩니다. 색상 뿐 아니라 위치를 포함한 다른 모든 속성들도 마찬가지로 선형 보간법으로 계산됩니다. 색상의 경우 선형 보간법을 통해 보간되면 자연스럽게 부드러운 그라데이션(gradation)이 형성됩니다. 앞 단원에서는 정점 셰이더에서 정점에 아무런 색상도 적용하지 않았습니다. 대신에 프래그먼트 셰이더에서 각 픽셀에 흰색을 적용했기 때문에 전체 사각형이 흰색으로 그려질 수 있었습니다.

이제 정사각형의 각 꼭지점에 빨간색, 파란색, 녹색, 흰색을 적용해 보겠습니다. 정점이 아닌 픽셀들은 선형 보간에 의해 그라데이션이 형성됩니다. 먼저 네 개의 정점에 색을 지정하겠습니다. 정점에 색을 지정하려면 정점의 색상값을 가진 배열을 만들고, 이 배열을 WebGL 버퍼에 저장해야 합니다. `initBuffers()` 함수에 아래의 내용을 추가합니다:

```js
  var colors = [
    1.0,  1.0,  1.0,  1.0,    // 흰색
    1.0,  0.0,  0.0,  1.0,    // 빨간색
    0.0,  1.0,  0.0,  1.0,    // 녹색
    0.0,  0.0,  1.0,  1.0     // 파란색
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
```

먼저 정점에 지정할 색상값을 가진 JavaScript 배열을 생성합니다. 4개의 원소가 하나의 색을 나타내며, 정사각형의 4개의 꼭지점에 흰색, 빨간색, 파란색, 녹색이 지정되도록 값을 정합니다. 이 색상 정보 배열을 저장하기 위해 새로운 WebGL 버퍼를 생성하고, 배열은 부동소수점 형식으로 WebGL의 버퍼에 저장합니다.

이 색상 정보를 실제 렌더링에 사용하려면, 컬러 버퍼에서 색상 정보를 읽을 수 있도록 정점 셰이더를 수정해야 합니다:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying lowp vec4 vColor;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
</script>
```

수정 전의 소스와 가장 많이 달라진 점은, 색상 배열에서 읽은 값을 토대로 각 정점에 색상값을 지정했다는 점입니다.

## 프래그먼트에 색상 입히기

앞 단원에서 사용했던 프래그먼트 셰이더를 다시 한 번 보겠습니다:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

프래그먼트에 색상 입히기는 아주 쉽습니다. 위와 같이 프래그먼트 셰이더 내에서 흰색을 지정해주는 대신 단순히 `vColor` 변수에서 값을 읽어오도록 수정하기만 하면, 각 픽셀 별로 보간된 색상값을 구할 수 있습니다:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying lowp vec4 vColor;

  void main(void) {
    gl_FragColor = vColor;
  }
</script>
```

위와 같이 각 프래그먼트는 정점을 기준으로 상대적인 위치에 따라 선형 보간된 색상값을 갖게 됩니다.

## 색상을 적용해서 그리기

이제 셰이더 프로그램에서 색상 변수를 초기화하고 활성화하는 내용을 `initShaders()`에 추가합니다:

```js
vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
gl.enableVertexAttribArray(vertexColorAttribute);
```

다음은 정사각형을 그릴 때 색상 정보를 사용하도록 `drawScene()`을 수정합니다:

```js
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
```

이제 WebGL이 호환되는 브라우저에서 [샘플](http://mdn.github.io/webgl-examples/tutorial/sample3/index.html)을 보면, 검정색 바탕에 아래와 같은 정사각형이 그려지는 것을 볼 수 있습니다:

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[전체 코드 보기](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample3) | [새창에서 데모 실행하기](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
