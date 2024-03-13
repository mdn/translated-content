---
title: Compiling an Existing C Module to WebAssembly
slug: WebAssembly/existing_C_to_Wasm
---

{{WebAssemblySidebar}}

WebAssembly의 핵심 Use-case는 기존의 C 라이브러리 생태계를 사용하고 개발자가 웹에서 사용할 수 있도록하는 것입니다.

이러한 라이브러리는 종종 C의 표준 라이브러리, 운영 체제, 파일 시스템 및 기타 사항에 의존합니다. Emscripten은 이러한 기능 대부분을 제공하지만 몇 가지 [제한 사항](https://kripken.github.io/emscripten-site/docs/porting/guidelines/api_limitations.html)이 있습니다.

예를 들어, WebP 용 인코더를 컴파일 해 봅시다. WebP(웹용 이미지 포맷) 코덱의 소스는 C로 작성되었으며 [GitHub에서 사용가능](https://github.com/webmproject/libwebp)할뿐 아니라 광범위한 [API documentation](https://developers.google.com/speed/webp/docs/api)로도 제공됩니다. 꽤 좋은 출발점입니다.

```bash
git clone https://github.com/webmproject/libwebp
```

간단히 시작하려면 `webp.c`라는 C 파일을 작성하여 `encode.h`의 `WebPGetEncoderVersion()` 을 JavaScript로 노출 시키십시오.

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

이 함수를 호출하기 위해 매개 변수 나 복잡한 데이터 구조가 필요 없기 때문에 libwebp의 소스 코드를 컴파일 할 수 있는지 여부를 테스트하는 좋은 간단한 프로그램입니다.

이 프로그램을 컴파일하려면 -I 플래그를 사용하여 libwebp의 헤더 파일을 어디에서 찾을 수 있는지 컴파일러에게 알려야하며 필요한 libwebp의 모든 C 파일을 전달해야합니다. 유용한 전략은 **모든** C 파일을 제공하고 컴파일러에 의존하여 불필요한 모든 것을 제거하는 것입니다. 그것은 훌륭하게 작동할 것입니다.

```bash
$ emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c
```

> **참고:** 이 전략은 모든 C 프로젝트에서 작동하지 않습니다. 많은 프로젝트는 컴파일하기 전에 시스템 특정 코드를 생성하기 위해 autoconf / automake를 사용합니다. Emscripten은 `emconfigure`와 `emmake`를 제공하여 이 명령을 랩핑하고 적절한 매개 변수를 주입합니다. [Emscripten documentation](https://kripken.github.io/emscripten-site/docs/compiling/Building-Projects.html)에서 자세한 내용을 찾을 수 있습니다.

이제 새 모듈을 로드하기 위해 HTML과 JavaScript 만 있으면 됩니다.

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async (_) => {
    const api = {
      version: Module.cwrap("version", "number", []),
    };
    console.log(api.version());
  };
</script>
```

[output](https://googlechrome.github.io/samples/webassembly/version.html)에 라이브러리의 버전 번호가 정확히 표시됩니다.

![Screenshot of the DevTools console showing the correct versionnumber.](version.png)

> **참고:**libwebp는 현재 버전 인 a.b.c를 16 진수 0xabc로 반환합니다. 예를 들어 v0.6.1은 0x000601 = 1537로 인코딩됩니다.

### Get an image from JavaScript into Wasm

인코더의 버전 번호를 얻는 것은 좋지만 실제 이미지 인코딩은 더욱 인상적입니다.

자 여기서! 어떻게하면 이미지를 wasm으로 가져올 수 있는지가 가장 먼저 궁굼할 것입니다. [encoding API of libwebp](https://developers.google.com/speed/webp/docs/api#simple_encoding_api)를 보면 RGB, RGBA, BGR 또는 BGRA의 바이트 배열이 필요함을 알 수 있습니다. 다행히 Canvas API에는 RGBA의 이미지 데이터가 포함 된 {{jsxref ( "Uint8ClampedArray")}}를 던져주는 {{domxref ( "CanvasRenderingContext2D.getImageData")}}가 있습니다.

```js
async function loadImage(src) {
  // Load image
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Make canvas same size as image
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw image onto canvas
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

이제 이것은 자바 스크립트에서 wasm로 데이터를 복사하는 것만이 남았습니다. 이를 위해서 두 가지 추가 기능, 즉 wasm 내부의 이미지에 메모리를 할당하는 기능과 다시 해제 할 수있는 기능을 노출해야합니다.

```cpp
#include <stdlib.h> // required for malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}
```

`create_buffer()` 함수는 RGBA 이미지에 대한 버퍼를 할당하므로 픽셀 당 4 바이트입니다. `malloc()`에 의해 반환 된 포인터는 그 버퍼의 첫번째 메모리 셀의 주소입니다. 포인터가 JavaScript 토큰으로 반환되면 포인터는 숫자로 취급됩니다. cwrap을 사용하여 JavaScript에 함수를 노출 한 후에는 해당 번호를 사용하여 버퍼의 시작 부분을 찾고 이미지 데이터를 복사 할 수 있습니다.

```js
const api = {
  version: Module.cwrap("version", "number", []),
  create_buffer: Module.cwrap("create_buffer", "number", ["number", "number"]),
  destroy_buffer: Module.cwrap("destroy_buffer", "", ["number"]),
};

const image = await loadImage("./image.jpg");
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... call encoder ...
api.destroy_buffer(p);
```

### Encode the Image

이제 wasm에서 이미지를 사용할 수 있습니다. 이번엔 WebP 인코더를 호출하여 작업을 수행 할 차례입니다. [WebP documentation](https://developers.google.com/speed/webp/docs/api#simple_encoding_api)을 보면 `WebPEncodeRGBA`가 가장 적합한 것 같습니다. 이 함수는 0과 100 사이의 품질 옵션뿐만 아니라 입력 이미지 및 치수에 대한 포인터를 사용합니다. 또한 WebP 이미지가 완료되면 `WebPFree()`를 사용하여 해제해야하는 출력 버퍼를 할당합니다.

인코딩 작업의 결과는 출력 버퍼와 그 길이입니다. C의 함수는 메모리를 동적으로 할당하지 않는 한 반환 유형으로 배열을 가질 수 없으므로 이 예제는 정적 전역 배열에 의존합니다. 실제로는 32 비트 폭의 wasm 포인터에 의존합니다. 그러나 이것은 일을 단순하게 유지하는 적절한 방법입니다.

```js
int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &img_out);

  result[0] = (int)img_out;
  result[1] = size;
}

EMSCRIPTEN_KEEPALIVE
void free_result(uint8_t* result) {
  WebPFree(result);
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() {
  return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size() {
  return result[1];
}
```

이제 그 모든 것을 갖추면 인코딩 함수를 호출하고 포인터와 이미지 크기를 가져 와서 자신의 JavaScript 버퍼에 넣은 다음 프로세스에 할당 된 모든 Wasm 버퍼를 해제 할 수 있습니다.

```js
api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(
  Module.HEAP8.buffer,
  resultPointer,
  resultSize,
);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);
```

> **참고:** `new Uint8Array(someBuffer)`는 `new Uint8Array(someTypedArray)`가 데이터를 복사하는 동안 동일한 memory chunk에 새로운 뷰를 생성합니다.

이미지의 크기에 따라, wasm이 입력 및 출력 이미지를 모두 수용할 만큼 메모리를 늘릴 수 없는 오류가 발생할 수 있습니다.

![Screenshot of the DevTools console showing an error.](error.png)

다행히도 이 문제에 대한 해결책은 오류 메시지에 있습니다. 컴파일 명령에 `-s ALLOW_MEMORY_GROWTH=1`을 추가하기 만하면됩니다.

WebP 인코더를 컴파일하고 JPEG 이미지를 WebP로 코드 변환했습니다. 제대로 동작하는지 확인하기 위해 결과 버퍼를 블롭으로 변환하고 `<img>` 요소에 사용합니다.

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
document.body.appendChild(img);
```

보거라! 새로운 WebP 이미지의 영광을. :) [Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Full Code](/ko/docs/)

![DevToolsâ network panel and the generated image.](result.jpg)
