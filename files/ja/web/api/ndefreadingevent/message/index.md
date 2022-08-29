---
title: NDEFReadingEvent.message
slug: Web/API/NDEFReadingEvent/message
tags:
  - API
  - Property
  - リファレンス
  - message
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.message
---
{{securecontext_header}}{{APIRef()}}

**`message`** は {{domxref("NDEFReadingEvent")}} インターフェイスのプロパティで、受信したメッセージの入った {{DOMxRef("NDEFMessage")}} オブジェクトを返します。

## 値

{{domxref("NDEFMessage")}} オブジェクト。

## 例

この例では、 1 つのタグを読み込んでからポーリングを停止する便利な関数を作成し、不要な作業を減らしてバッテリーの寿命を延ばす方法を示します。この例は、与えられたミリ秒の量の後にタイムアウトするように簡単に拡張することができます。

```js
const ndefReader = new NDEFReader();

  function read() {
    return new Promise((resolve, reject) => {
      const ctlr = new AbortController();
      ctlr.signal.onabort = reject;
      ndefReader.addEventListener("reading", event => {
        ctlr.abort();
        resolve(event);
      }, { once: true });
      ndefReader.scan({ signal: ctlr.signal }).catch(err => reject(err));
    });
  }

  read().then(({ serialNumber }) => {
    console.log(serialNumber);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
