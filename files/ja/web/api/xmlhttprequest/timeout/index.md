---
title: "XMLHttpRequest: timeout プロパティ"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequest.timeout`** は `unsigned long` 型で、リクエストが自動的に終了するまでの時間をミリ秒で示します。既定値は 0 で、タイムアウトが無いことを示します。 timeout は{{Glossary('document environment', '文書環境')}}で利用される同期 XMLHttpRequest や `InvalidAccessError` の例外を投げるものに使用することはできません。タイムアウトとなった場合、 [timeout](/ja/docs/Web/API/XMLHttpRequest/timeout_event) イベントが発行されます。

> [!NOTE]
> ウィンドウを持つ同期リクエストでは、タイムアウトを使用することはできません。

[タイムアウトは非同期リクエストで使用してください](/ja/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests#example_using_a_timeout)。

## 例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // ミリ秒単位の時間

xhr.onload = () => {
  // リクエスト完了。ここで処理を行います。
};

xhr.ontimeout = (e) => {
  // XMLHttpRequest がタイムアウト。ここで何かを行います。
};

xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
