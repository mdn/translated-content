---
title: "WebGLRenderingContext: getShaderInfoLog() メソッド"
short-title: getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.getShaderInfoLog** は、指定された {{domxref("WebGLShader")}} オブジェクトの情報ログを返します。これには、警告、デバッグ、およびコンパイル情報が含まれます。

## 構文

```js-nolint
getShaderInfoLog(shader)
```

### 引数

- `shader`
  - : 問い合わせ先の {{domxref("WebGLShader")}} です。

### 返値

最後のコンパイル操作に関する診断メッセージ、警告メッセージ、その他の情報を含む文字列です。最初に {{domxref("WebGLShader")}} オブジェクトが作成されたとき、その情報ログは長さ 0 の文字列になります。

## 例

### コンパイルメッセージの確認

```js
/* シェーダーのソースコードを読み取る */
gl.shaderSource(shader, shaderCode);

/* シェーダーのソースコードをコンパイル */
gl.compileShader(shader);

const message = gl.getShaderInfoLog(shader);

if (message.length > 0) {
  /* メッセージはエラーまたは警告 */
  throw message;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getShaderParameter()")}} – `gl.COMPILE_STATUS` と一緒に使用すると、コンパイルに失敗したかどうかをチェックします
- {{domxref("WebGLRenderingContext.getError()")}}
