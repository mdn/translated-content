---
title: WebGL types
slug: Web/API/WebGL_API/Types
---

{{DefaultAPISidebar("WebGL")}}

以下是[WebGL](/zh-CN/docs/Web/API/WebGL_API)提供的接口中用到的变量类型。

## WebGL 1

以下类型的变量属于{{domxref("WebGLRenderingContext")}}对象。

| 类型         | Web 接口类型         | 描述                                                                                                          |
| ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| `GLenum`     | `unsigned long`      | 用于枚举。另见 [constants](/zh-CN/docs/Web/API/WebGL_API/Constants)。                                         |
| `GLboolean`  | `boolean`            | {{jsxref("Boolean")}}型。                                                                                     |
| `GLbitfield` | `unsigned long`      | 一个位字段（bit field），用于存储逻辑位（bit）。例如，在 {{domxref("WebGLRenderingContext.clear()")}}的使用。 |
| `GLbyte`     | `byte`               | 八位（一个字节），2 的补码表示的有符号整数。                                                                  |
| `GLshort`    | `short`              | 十六位 2 的补码表示的有符号整数。                                                                             |
| `GLint`      | `long`               | 三十二位 2 的补码表示的有符号整数。                                                                           |
| `GLsizei`    | `long`               | 用来描述尺寸（例如：绘画缓冲 drawing buffer 的宽和高）。                                                      |
| `GLintptr`   | `long long`          | 用来表示指针的特殊类型。                                                                                      |
| `GLsizeiptr` | `long long`          | 用来表示指针的特殊类型。                                                                                      |
| `GLubyte`    | `octet`              | 八位（一个字节），2 的补码表示的无符号整数。                                                                  |
| `GLushort`   | `unsigned short`     | 十六位 2 的补码表示的无符号整数。                                                                             |
| `GLuint`     | `unsigned long`      | 三十二位 2 的补码表示的有符号整数。                                                                           |
| `GLfloat`    | `unrestricted float` | 三十二位的 IEEE 标准的浮点数。                                                                                |
| `GLclampf`   | `unrestricted float` | 限值 32 位 IEEE 浮点数。                                                                                      |

## WebGL 2

以下类型的变量属于 {{domxref("WebGL2RenderingContext")}}. 所有 WebGL 1 中的类型也有使用。

| 类型      | Web 接口类型 | 描述                 |
| --------- | ------------ | -------------------- |
| `GLint64` | `long long`  | 六十四位有符号整数。 |

## WebGL 扩展

以下类型用在 [WebGL extensions](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions)中。

| 类型          | Web 接口类型 | 描述               |
| ------------- | ------------ | ------------------ |
| `GLuint64EXT` | `long long`  | 六十四位无符号整数 |

## 规范

{{Specifications}}

## 另见

- {{domxref("WebGLRenderingContext")}}
