---
title: DOMTokenList.supports()
slug: Web/API/DOMTokenList/supports
tags:
  - メソッド
  - リファレンス
browser-compat: api.DOMTokenList.supports
translation_of: Web/API/DOMTokenList/supports
---
{{APIRef("DOM")}}

**`supports()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、渡されたトークンが関連する属性で対応しているトークンに含まれていれば `true` を返します。このメソッドは機能に対応しているかを検出するためのものです。

## 構文

```js
supports(token);
```

## 引数

- `token`
  - : 問い合わせるトークンが入った文字列です。

### 返値

論理値で、トークンが見つかったかどうかを返します。

## 例

```js
const iframe = document.getElementById('display');

if (iframe.sandbox.supports('an-upcoming-feature')) {
  // support code for mystery future feature
} else {
  // fallback code
}

if (iframe.sandbox.supports('allow-scripts')) {
  // instruct frame to run JavaScript
  //
  // (NOTE: This feature is well-supported; this is just an example!)
  //
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
