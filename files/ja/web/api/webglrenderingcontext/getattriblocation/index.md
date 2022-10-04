---
title: WebGLRenderingContext.getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.getAttribLocation()`** メソッドは指定された{{domxref("WebGLProgram")}}内の属性の場所を返します。

## 構文

```
GLint gl.getAttribLocation(program, name);
```

### 引数

- program
  - : 属性の変数を含む{{domxref("WebGLProgram")}}
- name
  - : 場所を取得する属性の変数名を指定する{{domxref("DOMString")}}

### 返り値

見つかった場合、変数名の場所を示す{{domxref("GLint")}}番号を、それ以外の場合は-1 を返します。

## 例

```js
gl.getAttribLocation(program, 'vColor');
```

## 仕様策定状況

| Specification                                                                                            | Status                               | Comment                       |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------- |
| {{SpecName('WebGL', "#5.14.10", "getAttribLocation")}}                                 | {{Spec2('WebGL')}}             | 初回定義                      |
| {{SpecName('OpenGL ES 2.0', "glGetAttribLocation.xml", "glGetAttribLocation")}} | {{Spec2('OpenGL ES 2.0')}} | OpenGL API のマニュアルページ |

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.getAttribLocation")}}

## 関連項目

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
