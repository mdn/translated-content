---
title: NDEFRecord.data
slug: Web/API/NDEFRecord/data
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.data
translation_of: Web/API/NDEFRecord/data
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`data`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードのペイロードの生のバイト列が入った {{jsxref("DataView")}} を返します。

## 構文

```js
NDEFRecord.data
```

### 値

エンコードしたこのレコードのペイロードをの入った {{jsxref("DataView")}} を返します。

## 例

次の例は {{domxref("NDEFReadingEvent.message")}} から取得した {{domxref("NDEFMessage")}} オブジェクト内のレコードを反復処理します。 {{domxref("NDEFRecord.mediaType",
"mediaType")}} に基づいてレコードを選択すると、次に `data` プロパティに格納されているものをデコードします。

```js
const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = (event) => {
    const decoder = new TextDecoder();
    for (const record of event.message.records) {
      if (record.mediaType === "application/json") {
        const json = JSON.parse(decoder.decode(record.data));
        const article =/^[aeio]/i.test(json.title) ? "an" : "a";
        console.log(`${json.name} is ${article} ${json.title}`);
      }
    }
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
