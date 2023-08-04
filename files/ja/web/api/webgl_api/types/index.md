---
title: WebGL の型
slug: Web/API/WebGL_API/Types
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](/ja/docs/Web/API/WebGL_API) インターフェースでは次の型が使用されます。

## WebGL 1

これらの型は {{domxref("WebGLRenderingContext")}} 内で使用されます。

| 型           | Web IDL 型           | 説明                                                                                                                              |
| ------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `GLenum`     | `unsigned long`      | 列挙に使用されます。[定数](/ja/docs/Web/API/WebGL_API/Constants)のリストも参照してください。                                      |
| `GLboolean`  | `boolean`            | A {{jsxref("Boolean")}}.                                                                                                   |
| `GLbitfield` | `unsigned long`      | A bit field that stores multiple, logical bits. Used for example in {{domxref("WebGLRenderingContext.clear()")}}. |
| `GLbyte`     | `byte`               | 8-bit twos complement signed integer.                                                                                             |
| `GLshort`    | `short`              | 16-bit twos complement signed integer.                                                                                            |
| `GLint`      | `long`               | 32-bit twos complement signed integer.                                                                                            |
| `GLsizei`    | `long`               | Used for sizes (e.g. width and height of the drawing buffer).                                                                     |
| `GLintptr`   | `long long`          | Special type for pointer arithmetic.                                                                                              |
| `GLsizeiptr` | `long long`          | Special type for pointer arithmetic.                                                                                              |
| `GLubyte`    | `octet`              | 8-bit twos complement unsigned integer.                                                                                           |
| `GLushort`   | `unsigned short`     | 16-bit twos complement unsigned integer.                                                                                          |
| `GLuint`     | `unsigned long`      | 32-bit twos complement unsigned integer.                                                                                          |
| `GLfloat`    | `unrestricted float` | 32-bit IEEE floating point number.                                                                                                |
| `GLclampf`   | `unrestricted float` | Clamped 32-bit IEEE floating point number.                                                                                        |

## WebGL 2

これらの型は {{domxref("WebGL2RenderingContext")}} で使用されます。すべての WebGL 1 タイプも使用されます。

| 型        | Web IDL 型  | 説明                   |
| --------- | ----------- | ---------------------- |
| `GLint64` | `long long` | 符号付き 64 ビット整数 |

## WebGL 拡張

これらの型は、[WebGL 拡張](/ja/docs/Web/API/WebGL_API/Using_Extensions)内で使用されます。

| 型            | Web IDL 型  | 説明                   |
| ------------- | ----------- | ---------------------- |
| `GLuint64EXT` | `long long` | 符号なし 64 ビット整数 |

## 仕様

{{Specifications}}

## あわせて参照

- {{domxref("WebGLRenderingContext")}}
