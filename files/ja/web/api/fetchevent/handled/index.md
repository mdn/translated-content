---
title: "FetchEvent: handled プロパティ"
short-title: handled
slug: Web/API/FetchEvent/handled
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`handled`** は {{DOMxRef("FetchEvent")}} インターフェイスのプロパティで、このイベントがフェッチアルゴリズムによって処理されたかどうかを示すプロミスを返します。このプロパティは、ブラウザーがレスポンスを消費した後にコードを実行することができ、通常は {{DOMxRef("ExtendableEvent.waitUntil", "waitUntil()")}} メソッドと共に使用します。

## 値

イベントが処理されるまでは待機し、イベントが処理されると履行される {{jsxref("Promise")}} です。

## 例

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      const response = await doCalculateAResponse(event.request);

      event.waitUntil(
        (async function () {
          await doSomeAsyncStuff(); // オプション

          // イベントがブラウザーによって消費されるのを待つ
          await event.handled;

          return doFinalStuff(); // イベントが消費された後に後始末
        })(),
      );

      return response;
    })(),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("ExtendableEvent.waitUntil()")}}
