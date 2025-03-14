---
title: WebGL 컨텍스트에 2D 컨텐츠 추가하기
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

일단 성공적으로 [WebGL컨텍스트를 생성](/en-US/WebGL/Getting_started_with_WebGL)하면 그 안에 렌더링을 시작할 수 있습니다. 가장 간단히 해볼 수 있는 것은 텍스쳐가 없는 2D 객체를 렌더링 하는 것입니다. 한번 사각형을 그리는 코드를 작성하는 것으로 시작해봅시다.

## 장면(scene)에 조명효과 추가하기

시작 하기전에 반드시 이해해야할 것은 예제에서 오직 2차원 객체만 랜더링을 하더라도 3D 공간에서 그리고 있다는 것 입니다. 이처럼 여전히 객체가 그려질 간단한 장면에 조명 쉐이더를 설정하는것이 필요합니다. 여기서 어떻게 사각형에 조명효과를 줄 수 있는지 확인해보겠습니다.

### 쉐이더 초기화

쉐이더는[OpenGL ES 쉐이딩 언어](https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf)를 사용하여 지정됩니다. 컨텐츠의 유지보수와 업데이트를 쉽게하기 위해 쉐이더를 '불러오기위한' 코드를 직접 작성하겠습니다. 다시 말하자면 쉐이더를 직접 새로 만드는 것이 아니라 HTML문서에서 쉐이더를 '찾아오는' JavaScript 코드입니다. 이 작업을 처리하는 initShaders()함수의 일반적인 형태를 살펴보겠습니다.

```js
function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  // Create the shader program

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Unable to initialize the shader program.");
  }

  gl.useProgram(shaderProgram);

  vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition",
  );
  gl.enableVertexAttribArray(vertexPositionAttribute);
}
```

이 방식을 통해 로딩되는 쉐이더는 두가지가 있습니다. 첫번째는 조각 쉐이더(fragment shader)로 "shader-fs"라는 ID를 가진 script 엘리먼트에서 불러옵니다. 두번째는 정점 쉐이더(vertex shader)로 "shader-vs"라는 ID를 가진 script엘리먼트에서 불러옵니다. getShader()함수는 다음 섹션에서 다룰 것입니다. 이 과정은 쉐이더 프로그램을 DOM에서 가저오는 것을 다룹니다.

그 다음 우리는 WebGL 객체의 createProgram()함수를 호출하여 쉐이더 프로그램을 생성 할 것입니다. WebGL 객체에 두개의 쉐이더를 붙인다음 서로 연결할 것입니다. 그 다음 프로그램이 성공적으로 연결되었는지 확인하기 위해 gl 객체의 LINK_STATUS 매개변수를 체크합니다. 이것이 성공적이라면 새로운 쉐이더 프로그램을 활성화 합니다.

### DOM에서 쉐이더 불러오기

getShader()함수는 DOM에서 지정된 이름을 가진 쉐이더 프로그램을 가져와 컴파일된 쉐이더 프로그램을 호출자에 반환 합니다. 컴파일이나 불러올 수 없는 경우에는 null을 반환 합니다.

```js
function getShader(gl, id) {
  var shaderScript, theSource, currentChild, shader;

  shaderScript = document.getElementById(id);

  if (!shaderScript) {
    return null;
  }

  theSource = "";
  currentChild = shaderScript.firstChild;

  while(currentChild) {
    if (currentChild.nodeType == currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }
```

특정 ID를 가진 엘리먼트를 찾으면 텍스트 컨텐츠가 `theSource 변수에 저장됩니다.`

```js
if (shaderScript.type == "x-shader/x-fragment") {
  shader = gl.createShader(gl.FRAGMENT_SHADER);
} else if (shaderScript.type == "x-shader/x-vertex") {
  shader = gl.createShader(gl.VERTEX_SHADER);
} else {
  // Unknown shader type
  return null;
}
```

쉐이더를 위한 코드가 읽혀지면 쉐이더가 정점 쉐이더(MIME type "x-shader/x-vertex")인지 조각 쉐이더(MIME type "x-shader/x-fragment")인지 결정하기 위해 쉐이더 객체의 MIME 형식을 살펴봅니다. 그 다음 소스 코드에서 얻어진 것을 가지고 적절한 타입의 쉐이더를 생성합니다.

```js
  gl.shaderSource(shader, theSource);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
      return null;
  }

  return shader;
}
```

마지막으로 소스는 쉐이더로 전달되고 컴파일됩니다. 만약 쉐이더가 컴파일하는 동안 에러가 발생하면 경고 메세지를 출력하고 null을 반환합니다. 그러지 않으면 새롭게 컴파일된 쉐이더가 호출자로 반환됩니다.

### 쉐이더

그 다음 쉐이더 프로그램을 HTML 표현에 추가해야 합니다. 쉐이더가 구체적으로 어떻게 작동하는지에 대한 내용은 이 문서에서 다루지 않습니다. 다음은 쉐이더 언어 문법입니다.

#### 조각 쉐이더(Fragment shader)

다각형 안에 있는 각각의 픽셀은 GL 전문용어로 **fragment**이라고 부릅니다. fragment shader가 하는 일은 각 픽셀의 색상을 설정하는 것입니다. 우리는 간단하게 각 픽셀을 하얀색으로 지정하겠습니다.

fragment의 색상에서 사용되는 gl_FragColor는 GL에서 만들어진 변수입니다. 아래와 같이 값을 설정하면 픽셀의 색상이 설정됩니다.

```html
<script id="shader-fs" type="x-shader/x-fragment">

  void main(void) {

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

  }
</script>
```

#### 정점 쉐이더(Vertex Shader)

정점 쉐이더는 각 정점의 위치과 모양을 정의합니다.

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  }
</script>
```

## 객체 생성

사각형 렌더링을 하기 전에 사각형의 각 정점들을 저장할 버퍼를 만들어야 합니다. 이를 **initBuffers()** 라는 함수를 이용해 해보도록 하겠습니다. 앞으로 고급 WebGL 개념을 살펴보면서, 더욱 다양하고 복잡한 3D 오브젝트를 생성하고자 할 때 이 루틴을 많이 사용하게 될 것입니다.

```js
var horizAspect = 480.0 / 640.0;

function initBuffers() {
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  var vertices = [
    1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}
```

이 예제에서는 장면(scene)의 기본적인 속성만을 보여주기 위해, 루틴이 다소 지나치게 단순화되어있습니다. 정점들을 저장할 버퍼를 얻기 위해 `gl` 객체의 createBuffer() 메서드를 호출하는 것으로 시작합니다. 그 다음 `bindBuffer()` 메서드를 불러와 컨텍스트에 연결합니다.

이 과정이 끝난 뒤 사각형의 각 정점 좌표를 담고있는 JavaScript 배열을 생성합니다. 그런 다음 배열을 WebGL floats 배열로 변환한 뒤 gl객체의 bufferData() 메서드로 전달해 객체의 정점을 설정합니다.

## 장면(Scene) 그리기

쉐이더가 설정되고 객체가 생성되면 실제로 장면을 렌더링 할 수 있습니다. 이 예제에서 어떠한 애니메이팅도 안 할 것이기 떄문에 drawScene()함수는 매우 간단합니다. 이는 우리가 곧 다룰 몇 가지 유용한 루틴만 사용합니다?.

```js
function drawScene() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  loadIdentity();
  mvTranslate([-0.0, 0.0, -6.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

첫번째 과정은 배경색에 컨텍스트를 clear하는 것입니다. 그 다음 카메라의 원근을 설정합니다. 시점을 45°로, 종횡비를 640/480(캔버스의 크기)로 설정합니다. 또한 카메라로부터 0.1에서 100단위 사이에 있는 오브젝트만 렌더링하도록 정합니다.

그런 다음 identity(항등) position을 불러오고 카메라에서 6단위 만큼 translate(변환)하여 사각형의 위치를 정합니다 . 그 다음 사각형 정점 버퍼를 컨텍스트에 연결해 구성한 뒤 drawArrays() 메서드를 불러와 객체를 그립니다.

브라우저가 웹GL을 지원한다면 다음 링크에서 확인 할 수 있습니다. [try out this demo by clicking here](http://mdn.github.io/webgl-examples/tutorial/sample2)

## 행렬 유틸리티를 이용한 연산

행렬 연산은 꽤 복잡합니다. 행렬을 다루기 위한 코드를 직접 작성하고 싶은 사람은 아무도 없을 것입니다. 다행히도 벡터와 행렬 연산을 JavaScript에서 다루는 데 아주 편리한 라이브러리인 [Sylvester](http://sylvester.jcoglan.com/)가 있습니다.

이 데모에서 사용한glUtils.js 파일은 웹에 떠돌아 다니는 많은 WebGL 데모에서 사용하고 있습니다. 이 파일이 어디서 나온 것인지 명확히 아는 사람은 아무도 없는것 같습니다만, HTML 로 출력하기 위한 메소드 뿐만 아니라 특별한 형태의 행렬을 만들기 위한 메소드를 추가되어 있어 Sylvester를 보다 정말 단순화 시켜놓았습니다.

게다가 이 데모는 특정 작업을 위한 라이브러리를 이용할 때 도움될만한 몇가지 루틴을 정의하고 있습니다. 정확히 이것들이 어떤 일을 하는 것인지는 이 데모에서 다룰 범위는 아닙니다. 하지만 온라인에서 참고할만 한 좋은 레퍼런스가 많이 있습니다. 아래 [See also](#see_also) 섹션에 그 중 몇 개를 소개하고 있습니다.

```js
function loadIdentity() {
  mvMatrix = Matrix.I(4);
}

function multMatrix(m) {
  mvMatrix = mvMatrix.x(m);
}

function mvTranslate(v) {
  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(
    pUniform,
    false,
    new Float32Array(perspectiveMatrix.flatten()),
  );

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
}
```

## See also

- [Matrices](https://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matrix](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) on Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
