---
title: NDEFRecord.toRecords()
slug: Web/API/NDEFRecord/toRecords
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.toRecords
translation_of: Web/API/NDEFRecord/toRecords
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`toRecords()`** は {{DOMxRef("NDEFRecord")}} インターフェイスのメソッドで、 {{DOMxRef("NDEFRecord.data")}} を {{DOMxRef("NDEFRecord.recordType")}} に基づいた一連のレコードに変換し、その結果を返すものです。これにより、スマートポスターや外部型レコードなど、ネストしたレコードを含む可能性のあるレコード型のペイロードを解釈することができます。

## 構文

```js
NDEFRecord.toRecords()
```

### 引数

なし。

### 返値

{{DOMxRef("NDEFRecord")}} のリストです。

## 例外

- {{domxref("DOMException")}} `"NotSupported"`
  - : {{Glossary("User Agent", "ユーザーエージェント")}}が {{DOMxRef("NDEFRecord.data")}} と {{DOMxRef("NDEFRecord.recordType")}} のこの組み合わせを解釈する方法を知らないことを示します。

## 例

NDEF メッセージをペイロードとする外部レコードを読み取ります。

この例では、外部型レコードを使用して、アプリケーション定義のレコードを作成します。
これらのレコードはペイロードとして {{domxref("NDEFMessage")}} を含むことができ、アプリケーションのコンテキストで使用されるローカル型を含む独自の {{domxref("NDEFRecord")}} オブジェクトが含まれます。スマートポスターレコード型は、ペイロードとして NDEF メッセージも含んでいることに注意してください。

NDEF はレコードの順序を保証しないので、ペイロードとして NDEF メッセージを持つ外部型レコードを使用することは、関連するデータをカプセル化するのに便利です。

この例は、ソーシャルポストの外部レコードを読み取る方法を示しています。このレコードは {{domxref("NDEFMessage")}} を含み、テキストレコードとローカル型 "act" (action) のレコードを含み、定義はスマートポスターから借用しますがローカルアプリケーションコンテキストで使用されます。

```js
const ndefReader = new NDEFReader();
await ndefReader.scan();
ndefReader.onreading = (event) => {
  const externalRecord = event.message.records.find(
    record => record.type == "example.com:smart-poster"
  );

  let action, text;

  for (const record of externalRecord.toRecords()) {
    if (record.recordType == "text") {
      const decoder = new TextDecoder(record.encoding);
      text = decoder.decode(record.data);
    } else if (record.recordType == ":act") {
      action = record.data.getUint8(0);
    }
  }

  switch (action) {
    case 0: // do the action
      console.log(`Post "${text}" to timeline`);
      break;
    case 1: // save for later
      console.log(`Save "${text}" as a draft`);
      break;
    case 2: // open for editing
      console.log(`Show editable post with "${text}"`);
      break;
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
