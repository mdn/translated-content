---
title: NDEFReadingEvent.serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
tags:
  - API
  - プロパティ
  - リファレンス
  - serialNumber
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.serialNumber
tranlation_of: Web/API/NDEFReadingEvent/serialNumber
---
{{securecontext_header}}{{APIRef()}}

**`serialNumber`** は {{domxref("NDEFReadingEvent")}} インターフェイスのプロパティで、衝突防止や識別に使用する機器のシリアル番号、またはシリアル番号がない場合は空文字列を返します。

## 値

機器のシリアル番号が入った文字列です。

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
