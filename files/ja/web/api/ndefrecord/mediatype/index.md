---
title: "NDEFRecord: mediaType プロパティ"
short-title: mediaType
slug: Web/API/NDEFRecord/mediaType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

**`mediaType`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードの {{Glossary("MIME type", "MIME タイプ")}}を返します。この値は `recordType` が `"mime"` と等しくない場合は `null` になります。

## 構文

```js-nolint
NDEFRecord.mediaType
```

### 値

文字列で、このレコードのペイロードの {{Glossary("MIME type", "MIME タイプ")}}が入ります。

## 例

次の例は {{domxref("NDEFReadingEvent.message")}} から取得した {{domxref("NDEFMessage")}} オブジェクト内のレコードを反復処理します。そして、 `mediaType` プロパティを使用して、どのレコードを解釈するかを決定します。

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
