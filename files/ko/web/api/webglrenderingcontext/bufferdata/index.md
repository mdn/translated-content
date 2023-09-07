---
title: "WebGLRenderingContext: bufferData() 메서드"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/en-US/docs/Web/API/WebGL_API) 의 **`WebGLRenderingContext.bufferData()`** 메서드는 버퍼 객체의 데이터 저장소를 초기화하고 생성합니다.

## 구문

```js-nolint
// WebGL1
bufferData(target, usage)
bufferData(target, size, usage)
bufferData(target, srcData, usage)

// WebGL2
bufferData(target, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### 매개 변수

- `target`

  - : 바인딩 지점(target)을 지정하는{{domxref("WebGL_API/Types", "GLenum")}}. 가능한 값들은 다음과 같습니다.

    - `gl.ARRAY_BUFFER`
      - : 정점 좌표, 텍스처 좌표 데이터 또는 정점 색상 데이터와 같은 정점 속성을 포함하는 버퍼.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : 요소 인덱스를 위한 버퍼.

    {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}를 사용하는 경우, 추가적으로 아래 값들이 가능합니다.

    - `gl.COPY_READ_BUFFER`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼.
    - `gl.COPY_WRITE_BUFFER`
      - : 한 버퍼 객체에서 다른 버퍼 객체로 복사하기 위한 버퍼.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : 변환 피드백 작업을 위한 버퍼.
    - `gl.UNIFORM_BUFFER`
      - : 유니폼 블록을 저장하기 위한 버퍼.
    - `gl.PIXEL_PACK_BUFFER`
      - : 픽셀 전송 작업을 위한 버퍼.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : 픽셀 전송 작업을 위한 버퍼.

- `size`
  - : 버퍼 객체의 데이터 저장소의 크기를 바이트 단위로 설정하는 {{domxref("WebGL_API/Types", "GLsizeiptr")}}.
- `srcData` {{optional_inline}}
  - : 데이터 저장소로 복사될 {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, {{jsxref("TypedArray")}} 혹은 {{jsxref("DataView")}}. `null`인 경우, 데이터 저장소는 여전히 생성되지만, 그 내용은 초기화되지 않고 정의되지 않습니다.
- `usage`

  - : 최적화 목적으로 데이터 저장소의 예정된 사용 패턴을 지정하는 {{domxref("WebGL_API/Types", "GLenum")}} 가능한 값들은 다음과 같습니다.

    - `gl.STATIC_DRAW`
      - : 콘텐츠는 응용 프로그램에 의해 한 번 지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 여러 번 사용됩니다.
    - `gl.DYNAMIC_DRAW`
      - : 콘텐츠는 응용 프로그램에 의해 반복적으로 재지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 여러 번 사용됩니다.
    - `gl.STREAM_DRAW`
      - : 콘텐츠는 응용 프로그램에 의해 한 번 지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 몇 번 사용됩니다.
    - {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}를 사용할 때 추가적으로 사용할 수 있는 값들은 다음과 같습니다.

      - `gl.STATIC_READ`
        - : 콘텐츠는 WebGL에서 데이터를 읽어 한 번 지정되며, 응용 프로그램에 의해 여러 번 조회됩니다.
      - `gl.DYNAMIC_READ`
        - : 콘텐츠는 WebGL에서 데이터를 반복적으로 읽어 재지정되며, 응용 프로그램에 의해 여러 번 조회됩니다.
      - `gl.STREAM_READ`
        - : 콘텐츠는 WebGL에서 데이터를 읽어 한 번 지정되며, 응용 프로그램에 의해 몇 번 조회됩니다.
      - `gl.STATIC_COPY`
        - : 콘텐츠는 WebGL에서 데이터를 읽어 한 번 지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 여러 번 사용됩니다.
      - `gl.DYNAMIC_COPY`
        - : 콘텐츠는 WebGL에서 데이터를 반복적으로 읽어 재지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 여러 번 사용됩니다.
      - `gl.STREAM_COPY`
        - : 콘텐츠는 WebGL에서 데이터를 읽어 한 번 지정되며, WebGL 그리기와 이미지 명세 명령의 소스로서 몇 번 사용됩니다.

- `srcOffset`
  - : 버퍼를 어디서부터 읽기 시작할 지 결정하는 원소 인덱스 오프셋을 지정하는 {{domxref("WebGL_API/Types", "GLuint")}}.
- `length` {{optional_inline}}
  - : 기본적으로 0이 지정된 {{domxref("WebGL_API/Types", "GLuint")}}.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- 컨텍스트가 주어진 `size`로 데이터 저장소를 생성할 수 없는 경우 `gl.OUT_OF_MEMORY` 오류가 발생합니다.
- `size`가 음수인 경우 `gl.INVALID_VALUE` 오류가 발생합니다.
- `target` 또는 `usage`가 허용된 열거형 중 하나가 아닌 경우 `gl.INVALID_ENUM` 오류가 발생합니다.

## 예제

### bufferData 사용하기

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### 버퍼 정보 가져오기

현재 버퍼의 사용량과 버퍼 크기를 확인하려면
{{domxref("WebGLRenderingContext.getBufferParameter()")}} 메서드를 사용합니다.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### 형식화 배열의 크기 가져오기

타입 배열의 크기 매개변수를 계산합니다.

```js
const dataArray = new Float32Array([1, 2, 3, 4]);
const sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- 기타 버퍼: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
