---
title: WebGLRenderingContext.uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
tags:
  - API
  - メソッド
  - リファレンス
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.uniform1f
translation_of: Web/API/WebGLRenderingContext/uniform
---
{{APIRef("WebGL")}}

**`WebGLRenderingContext.uniform[1234][fi][v]()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、ユニフォーム変数の値を指定します。プログラムオブジェクトで定義されたすべてのアクティブなユニフォーム変数は、プログラムオブジェクトが正常にリンクされたときに 0 に初期化されます。それらは、プログラムオブジェクトのリンクが成功し、再び 0 に初期化されるまで、このメソッドの呼び出しによって割り当てられた値を保持します。

> **Note:** ここで書かれている関数の多くは WebGL 2 インターフェイスで拡張されており、
> {{domxref("WebGL2RenderingContext.uniform","WebGL2RenderingContext.uniform[1234][uif][v]()")}} 以下にあります。

## 構文

```js
void gl.uniform1f(location, v0);
void gl.uniform1fv(location, value);
void gl.uniform1i(location, v0);
void gl.uniform1iv(location, value);

void gl.uniform2f(location, v0, v1);
void gl.uniform2fv(location, value);
void gl.uniform2i(location, v0, v1);
void gl.uniform2iv(location, value);

void gl.uniform3f(location, v0, v1, v2);
void gl.uniform3fv(location, value);
void gl.uniform3i(location, v0, v1, v2);
void gl.uniform3iv(location, value);

void gl.uniform4f(location, v0, v1, v2, v3);
void gl.uniform4fv(location, value);
void gl.uniform4i(location, v0, v1, v2, v3);
void gl.uniform4iv(location, value);
```

### 引数

- location
  - : {{domxref("WebGLUniformLocation")}} オブジェクトで、変更するユニフォーム属性の位置を変更します。
- `value, v0, v1, v2, v3`

  - : ユニフォーム変数に使用される新しい値です。指定可能な型は次の通りです。

    - 浮動小数点の {{jsxref("Number")}}: 浮動小数点値（"f" の付いたメソッド）に使用します。
    - 一連の浮動小数点値（例えば {{jsxref("Float32Array")}} または数値の {{jsxref("Array")}}）: 浮動小数点のベクターメソッド（"fv" の付いたメソッド）に使用します。
    - 整数の {{jsxref("Number")}}:  整数値（"i" の付いたメソッド）に使用します。
    - {{jsxref("Int32Array")}}: 整数のベクターメソッド（"iv" の付いたメソッド）。

### 返値

なし。

## 例

```js
gl.uniform1f(u_alpha, 0.8);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
