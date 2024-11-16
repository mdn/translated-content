---
title: Getting started with WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](http://www.khronos.org/webgl/)은 플러그인을 사용하지 않고 [OpenGL ES](http://www.khronos.org/opengles/) 2.0 기반 API를 이용하여 브라우저의 HTML [`canvas`](/en/HTML/Canvas)에 렌더링하여 3D 웹 콘텐츠 제작을 가능하게 합니다. WebGL 프로그램은 컴퓨터의 그래픽 처리 장치(GPU)에서 실행되는 JavaScript나 특수 효과(셰이더 코드)코드로 구성됩니다. WebGL 요소들은 다른 HTML 요소들과 혼합될 수 있고 페이지나 페이지 배경의 다른 부분과 합성될 수 있습니다.

이 문서는 기본 WebGL 기본 사항을 소개합니다. 이 문서에서는 3D 그래픽에 관련된 수학적 이해를 이미 이해하고 있다고 간주하고 OpenGL 자체에 대하여 설명하지 않을 것입니다.

## 3D 렌더링 준비

WebGL을 사용하여 3D 렌더링을 하는 데 첫 번째로 필요한 것은 캔버스입니다. 아래 HTML 코드는 canvas를 만들고 사용할 WebGL 컨텍스트를 초기화하는 onload 이벤트 핸들러를 지정합니다.

```html
<body onload="start()">
  <canvas id="glcanvas" width="640" height="480">
    Your browser doesn't appear to support the HTML5
    <code>&lt;canvas&gt;</code> element.
  </canvas>
</body>
```

### WebGL 컨텍스트 준비

JavaScript 코드에서 `start()` 함수는 문서가 다 불러와지면 호출됩니다. 이 함수의 기능은 WebGL 컨텍스트를 설정하고 콘텐츠 렌더링을 시작하는 것입니다.

```js
var gl; // A global variable for the WebGL context

function start() {
  var canvas = document.getElementById("glcanvas");

  gl = initWebGL(canvas); // Initialize the GL context

  // Only continue if WebGL is available and working

  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set clear color to black, fully opaque
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear the color as well as the depth buffer.
  }
}
```

첫 번째 할 일은 canvas에 대한 참조를 얻는 것 입니다. canvas라는 변수에 지정합니다. 당연히 canvas를 반복적으로 참조할 필요는 없고 전역 변수로 저장하는 것은 피해야 합니다. 지역 변수나 객체의 필드 멤버로 참조해야 됩니다.

캔버스가 있으면 `initWebGL()`이라는 함수를 호출할 수 있습니다. 이 함수는 일시적으로 정의되고 WebGL 컨텍스트를 초기화하는 일을 합니다.

만약 컨텍스트가 성공적으로 초기화 되면 gl은 이를 참조합니다. 이번 예제에서는 검은색 투명 색상을 설정하면 컨텍스트를 그 색상으로 지정합니다. 그 다음 컨텍스트는 설정 매개변수로 설정됩니다. 예제에서는 깊이 테스트가 가능하고 가까운 물체가 멀리 떨어저 있는 물체를 가리는 것을 지정합니다.

코드에서 초기화를 전달하는 목적은 우리가 하려는 것 전부 입니다. 잠시 후 실제로 무언가를 어떻게 시작하는가 알아볼 것입니다.

### WebGL 컨텍스트 생성

`initWebGL()` 함수는 다음과 같습니다.

```js
function initWebGL(canvas) {
  gl = null;

  try {
    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}

  // If we don't have a GL context, give up now
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
    gl = null;
  }

  return gl;
}
```

캔버스에서 WebGL 컨텍스트를 얻기 위해 canvas로 "webgl"이라고 불리는 컨텍스트를 요청할 것입니다. 만약에 실패한다면 "experimental-webgl"이라는 이름으로 시도할 것입니다. 만약 이마저도 실패한다면 사용자에게 사용 중인 브라우저가 WebGL을 지원하지 않는다는 경고를 출력할 것입니다. 이게 전부입니다. 이 시점에서 gl은 null(WebGL 컨텍스트를 이용할 수 없다는 의미)이거나 렌더링할 WebGL 컨텍스트를 참조할 것입니다.

> [!NOTE]
> experimental-webgl이라는 이름은 사양 개발 시 사용되는 컨텍스트를 위한 일시적인 이름입니다. webgl은 사양이 확정되면 사용됩니다.

이 시점에서 이 코드는 WebGL 컨텍스트가 성공적으로 초기화하는 데 충분한 코드입니다. 이 코드를 통해 검정 박스 형태의 빈 공간이 형성되며, 여기에 콘텐츠를 생성할 기본 준비가 되었습니다.

[여기를 클릭하여 예제를 확인하세요](/samples/webgl/sample1/index.html). 브라우저가 WebGL을 호환한다면 실행될 것 입니다.

### WebGL 컨텍스트 크기 조정

이제 새로운 WebGL 컨텍스트는 새로운 컨텍스트 인스턴스를 얻었습니다. 그리고 CSS 없이 캔버스 요소의 height와 width로 뷰포트의 해상도를 설정합니다. 캔버스 요소의 스타일 편집하면 출력되는 크기를 변경될 것이지만 렌더링 해상도는 변경되지 않습니다. 또한 컨텍스트가 생성된 후 캔버스 요소의 width와 height 속성을 편집하면 그려지는 픽셀 수를 변경할 수 없습니다. WebGL 렌더의 해상도를 변경하려면 사용자가 캔버스 문서 전체 창 크기를 조정하거나 앱에서 그래픽 설정을 조정할 수 있게 하길 원할 것입니다. WebGL 컨텍스트 viewport() 함수가 변경할 수있는 것으로 알려져 있습니다.

렌더링된 WebGL 컨텍스트의 해상도를 수정하려면 위에 나오는 gl과 canvas 변수를 사용해야 됩니다.

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

캔버스는 CSS 스타일과 다른 해상도로 렌더링되어질 때 화면에서 차지하는 크기를 볼 것입니다. CSS로 크기를 조정하면 낮은 해상도에서 렌더링하거나 브라우저 화면을 확대할 때 자원을 절약하는 데 유용합니다. 축소는 슈퍼샘플 안티에일리어싱(SSAA) 효과를 사용할 때 가능합니다. (많은 성능 비용이 발생하고 작은 결과이기는 하지만) 아래에 참고 사항을 살펴보는 것이 가장 좋습니다.

- [WebGL에 대한 소개](http://dev.opera.com/articles/view/an-introduction-to-webgl/) - DEV.OPERA에 있는 Luz Caballero가 작성한 문서입니다. 이 문서는 WebGL이 무엇인지, 어떻게 작동되는지, 렌더링 파이프라인 개념에 대하여 설명하고 몇 가지 WebGL 라이브러리에 대하여 소개합니다.
- [현대 OpenGL에 대한 소개](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) - Joe Groff가 작성한 OpenGL에 대한 좋은 문서 시리즈입니다. 조는 명확하게 역사를 가지고 OpenGL의 중요한 그래픽 파이프라인 개념에 대해 소개하고 몇 가지 데모를 통해 OpenGL이 어떻게 작동되는지 설명하기 위해 예제들을 제공합니다. 만약 OpenGL에 대한 개념이 안 잡혀 있다면 시작하기 좋은 장소가 될 것입니다.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
