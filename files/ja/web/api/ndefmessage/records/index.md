---
title: NDEFMessage.records
slug: Web/API/NDEFMessage/records
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
  - プロパティ
browser-compat: api.NDEFMessage.records
translation_of: Web/API/NDEFMessage/records
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

`records` は {{DOMxRef("NDEFMessage")}} インターフェイスのプロパティで、 NDEF メッセージに現れる {{DOMxRef("NDEFRecord")}} のリストを表します。

## 値

{{DOMxRef("NDEFRecord")}} オブジェクトのリストで、メッセージに記録されたデータを表します。

## 例

次の例は、 NDEF メッセージの内容を読み取る方法を示しています。最初に {{domxref("NDEFReader.reading_event", "onreading")}} のイベントハンドラーをセットアップし、ここに {{domxref("NDEFReadingEvent")}} のインスタンスが渡されます。 `NDEFMessage` オブジェクトが {{domxref("NDEFReadingEvent.message")}} から返されます。このオブジェクトは `message.records` をループして、メッセージの種類に基づいて各レコードを処理します。 data メンバーは {{jsxref("DataView")}} であり、 UTF-16 でエンコードされたデータを扱うことができます。

```js
ndefReaderInst.onreading = event => {
  const ndefMessage = event.message;
  for (const record of ndefMessage.records) {
    console.log("Record type:  " + record.recordType);
    console.log("MIME type:    " + record.mediaType);
    console.log("Record id:    " + record.id);
    switch (record.recordType) {
      case "text":
        // TODO: Read text record with record data, lang, and encoding.
        break;
      case "url":
        // TODO: Read URL record with record data.
        break;
      default:
        // TODO: Handle other records with record data.
    };
  };
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
