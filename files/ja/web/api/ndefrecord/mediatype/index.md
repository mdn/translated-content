---
title: NDEFRecord.mediaType
slug: Web/API/NDEFRecord/mediaType
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.mediaType
translation_of: Web/API/NDEFRecord/mediaType
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`mediaType`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードの {{Glossary("MIME type", "MIME タイプ")}}を返します。この値は `recordType` が `"mime"` と等しくない場合は `null` になります。

## 構文

```js
NDEFRecord.mediaType
```

### 値

{{DOMxRef("USVString")}} で、このレコードのペイロードの {{Glossary("MIME type", "MIME タイプ")}}が入ります。

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
