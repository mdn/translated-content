---
title: 'NDEFReader: readingerror イベント'
slug: Web/API/NDEFReader/readingerror_event
tags:
  - Event
  - NDEF
  - リファレンス
  - ウェブ NFC
  - プロパティ
browser-compat: api.NDEFReader.readingerror_event
translation_of: Web/API/NDEFReader/readingerror_event
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

`readingerror` は {{DOMxRef("NDEFReader")}} インターフェイスのイベントで、 NFC タグの読み取りの際にエラーが発生するたびに発行されます。例えば、タグがリーダーの磁気誘導範囲から離れたときです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addEventListener('readingerror', event => { });

onreadingerror = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次の例は、 `onreading` と `onreadinger` の両方のイベントハンドラーを使用してイベントを処理する方法を示しています。

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
