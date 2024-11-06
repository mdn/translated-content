---
title: "XMLHttpRequest: abort() メソッド"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequest.abort()`** メソッドは、すでに送信されたリクエストを中止します。リクエストが中止されたら、 {{domxref("XMLHttpRequest.readyState", "readyState")}} が `XMLHttpRequest.UNSENT` (0) に変化し、リクエストの {{domxref("XMLHttpRequest.status", "status")}} コードが 0 に設定されます。

## 構文

```js-nolint
abort()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 MDN のホームページからコンテンツを読み込み始め、ある条件が発生したときに、 `abort()` を呼び出すことで転送を中止します。

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
