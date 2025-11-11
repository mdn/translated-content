---
title: WebGLShader
slug: Web/API/WebGLShader
---

{{APIRef("WebGL")}}**WebGLShader** 는 [WebGL API](/ko/docs/Web/API/WebGL_API) 의 일부이며 정점 혹은 프래그먼트 셰이더가 될 수 있다. {{domxref("WebGLProgram")}} 는 두 타입의 셰이더 모두를 요구한다.

## 설명

**WebGLShader** 를 생성하려면 {{domxref("WebGLRenderingContext.createShader")}}를 사용한다. 그러고 나서는 {{domxref("WebGLRenderingContext.shaderSource()")}}를 사용해서 GLSL 소스 코드를 연결한다. 마지막으로{{domxref("WebGLRenderingContext.compileShader()")}}를 호출하고 셰이더를 컴파일한다. 이 시점에서 **WebGLShader** 는 여전히 사용할 수 있는 형식은 아니고{{domxref("WebGLProgram")}}에 부착되어야 한다.

```js
function createShader(gl, sourceCode, type) {
  // 셰이더 타입 gl.VERTEX_SHADER 또는 gl.FRAGMENT_SHADER 중 하나를 컴파일한다.
  var shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var info = gl.getShaderInfoLog(shader);
    throw "Could not compile WebGL program. \n\n" + info;
  }
}
```

셰이더 부착에 관한 정보는 {{domxref("WebGLProgram")}} 를 참고한다.

## 예시들

### 정점 셰이더 생성하기

셰이더 소스 코드 문자열들을 작성하고 접근하는 많은 다른 방법들이 있다는 점에 주목하라. 여기의 예는 오직 설명을 목적으로 한다.

```js
var vertexShaderSource = "attribute vec4 position;\n";
"void main() {\n" + "  gl_Position = position;\n" + "}\n";

// 위 예시로부터 createShader 함수를 사용한다.
var vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### 프래그먼트 셰이더 생성하기

```js
var fragmentShaderSource =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

// 위 예시로부터 createShader 함수를 사용한다.
var fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
