---
title: "NDEFRecord: data プロパティ"
short-title: data
slug: Web/API/NDEFRecord/data
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

**`data`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードのペイロードの生のバイト列が入った {{jsxref("DataView")}} を返します。

## 構文

```js-nolint
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
      const article = /^[aeio]/i.test(json.title) ? "an" : "a";
      console.log(`${json.name} is ${article} ${json.title}`);
    }
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
