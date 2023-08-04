---
title: "NDEFReader: reading イベント"
slug: Web/API/NDEFReader/reading_event
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

`reading` は {{DOMxRef("NDEFReader")}} インターフェイスのイベントで、タグがリーダーの磁気誘導範囲に入り、互換性のある NFC 機器（例えば NDEF に対応している NFC タグ）からの読み取りが可能になるたびに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addEventListener('reading', event => { });

onreading = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次の例は、 `onreading` と `onreadingerror` の両方のイベントハンドラーを使用してイベントを処理する方法を示しています。

```js
const ndef = new NDEFReader();
  ndef.scan().then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log("Error! Cannot read data from the NFC tag. Try a different one?");
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  }).catch(error => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });

```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("NDEFReader.readingerror_event")}}
