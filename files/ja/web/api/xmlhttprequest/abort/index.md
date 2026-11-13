---
title: "XMLHttpRequest: abort() メソッド"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest.abort()`** メソッドは、すでに送信されたリクエストを中止します。リクエストが中止されたら、 {{domxref("XMLHttpRequest.readyState", "readyState")}} が `XMLHttpRequest.UNSENT` (0) に変化し、リクエストの {{domxref("XMLHttpRequest.status", "status")}} コードが 0 に設定されます。

リクエストがまだ進行中である場合（その `readyState` が `XMLHttpRequest.DONE` または `XMLHttpRequest.UNSENT` でない場合）、 {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} イベントと、{{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}、そして {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}} イベントが、この順序で配信されます。同期リクエストの場合、イベントは配信されず、代わりにエラーが発生します。

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

- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
