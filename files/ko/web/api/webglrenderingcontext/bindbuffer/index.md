---
title: "WebGLRenderingContext: bindBuffer() 메서드"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/ko/docs/Web/API/WebGL_API)의 **`WebGLRenderingContext.bindBuffer()`** 메서드는 주어진 {{domxref("WebGLBuffer")}} target에 바인딩합니다.

## 구문

```js-nolint
bindBuffer(target, buffer)
```

### 매개변수

- `target`

  - : 바인딩 포인트(target)을 지정하는 {{domxref("WebGL_API/Types", "GLenum")}} 입니다. 가능한 값들은 다음과 같습니다.

    - `gl.ARRAY_BUFFER`
      - : 정점 좌표, 텍스처 좌표 데이터 또는 정점 색상 데이터 등의 정점 속성을 포함하는 버퍼입니다.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : 요소 인덱스를 위한 버퍼입니다.

    {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 를 사용하면 추가로 다음의 값들이 가능합니다.

    - `gl.COPY_READ_BUFFER`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼입니다.
    - `gl.COPY_WRITE_BUFFER`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼입니다.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : 변환 피드백 작업을 위한 버퍼입니다.
    - `gl.UNIFORM_BUFFER`
      - : 유니폼 블록을 저장하기 위한 버퍼입니다.
    - `gl.PIXEL_PACK_BUFFER`
      - : 픽셀 전송 작업을 위한 버퍼입니다.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : 픽셀 전송 작업을 위한 버퍼입니다.

- `buffer`
  - : 바인딩할 {{domxref("WebGLBuffer")}} 입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

주어진 {{domxref("WebGLBuffer")}}에는 한 target만 바인딩할 수 있습니다. 버퍼를 다른 타겟에 바인딩하려는 시도는 `INVALID_OPERATION` 오류를 던지고 현재 버퍼 바인딩은 유지됩니다.

{{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}}로 삭제로 표시된 {{domxref("WebGLBuffer")}}는 (재)바인딩할 수 없습니다. 시도할 경우 `INVALID_OPERATION` 오류를 발생시키고, 현재 바인딩은 그대로 유지됩니다.

## 예제

### 버퍼를 타겟에 바인딩하기

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### 현재 바인딩 확인하기

현재 버퍼 바인딩을 확인하려면,`ARRAY_BUFFER_BINDING`
과 `ELEMENT_ARRAY_BUFFER_BINDING` 상수를 조회하십시오.

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
