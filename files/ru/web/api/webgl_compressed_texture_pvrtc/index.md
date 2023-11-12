---
title: WEBGL_compressed_texture_pvrtc
slug: Web/API/WEBGL_compressed_texture_pvrtc
---

{{APIRef("WebGL")}}

Расширение **`WEBGL_compressed_texture_pvrtc`** часть [WebGL API](/ru/docs/Web/API/WebGL_API) и представляет четыре [сжатых формата текстур PVRTC](https://en.wikipedia.org/wiki/PVRTC).

Сжатые текстуры уменьшают количество памяти, используемые в GPU для хранения, позволяя большее разрешение для текстур или большее количество текстур с одинаковым разрешением.

WebGL расширения доступны через метод {{domxref("WebGLRenderingContext.getExtension()")}}. Для подробностей смотри также [Использование расширений](/ru/docs/Web/API/WebGL_API/Using_Extensions) в [туториале по WebGL.](/ru/docs/Web/API/WebGL_API/Tutorial)

> **Примечание:** Обычно PVRTC доступен только на мобильных устройствах с чипсетом PowerVR. Используется во всех поколениях iPhone, iPod Touch и iPad и поддерживается на определённых Android устройствах, использующих PowerVR GPU.
>
> Версии контекста, поддерживающие расширение: {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} , и {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}.

## Константы

Форматы сжатых текстур представлены четырьмя константами и могут быть использованы в двух функциях:
{{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} — параметры высота и ширина должны соответствовать степени 2
{{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}} — параметры высоты и ширины должны быть равны размеру текстуры, а значения параметров `xoffset` и `yoffset` должны быть 0.

- `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
  - : RGB сжатие в 4-битном режиме. Один блок на каждые 4×4 пикселей.
- `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
  - : RGBA сжатие в 4-битном режиме. Один блок на каждые 4×4 пикселей.
- `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
  - : RGB сжатие в 2-битном режиме. Один блок на каждые 8×4 пикселей.
- `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`
  - : RGBA сжатие в 2-битном режиме. Один блок на каждые 8×4 пикселей.

## Примеры

```js
var ext = gl.getExtension("WEBGL_compressed_texture_pvrtc");

var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
  512,
  512,
  0,
  textureData,
);
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [PVRTC Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/PVRTC)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
