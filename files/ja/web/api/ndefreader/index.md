---
title: NDEFReader
slug: Web/API/NDEFReader
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFReader
translation_of: Web/API/NDEFReader
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`NDEFReader`** は[ウェブ NFC API](/ja/docs/Web/API/Web_NFC_API)のインターフェイスで、互換性のある NFC 機器、たとえば NDEF に対応している NFC タグなどがリーダーの磁気誘導範囲にあるときに、これらの機器からデータを読み取ったり、書き込んだりするために使用されます。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("NDEFReader.NDEFReader", "NDEFReader()")}} {{Experimental_Inline}}
  - : 新しい `NDEFReader` オブジェクトです。

## メソッド

_`NDEFReader` インターフェイスは、親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{DOMxRef("NDEFReader.scan", "NDEFReader.scan()")}} {{Experimental_Inline}}
  - : 読み取り機器をアクティブにして {{jsxref("Promise")}} を返します。このプロミスは NFC タグが読み取られれば解決し、ハードウェアまたは権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。
- {{DOMxRef("NDEFReader.write", "NDEFReader.write()")}} {{Experimental_Inline}}
  - : NDEF メッセージをタグに書き込む操作を行い、 {{jsxref("Promise")}} を返します。このプロミスは、タグへのメッセージの書き込みが完了した場合は解決し、ハードウェアまたは権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。

## イベント

_親である {{DOMxRef("EventTarget")}} からプロパティを継承しています。_

- {{DOMxRef("NDEFReader.reading_event", "reading")}} {{Experimental_Inline}}
  - : 互換性のある NFC 機器から読み取りができるようになったときに発行されます。
- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} {{Experimental_Inline}}
  - : タグが読み取り装置の近くにあるにもかかわらず、読み取れなかった場合に発行されます。

## 例

### 書き込み前の読み取りを扱う

以下の例では、一般的な読み取りハンドラーと、単一の書き込みに特化したハンドラーの間で調整する方法を示しています。書き込みを行うためには、タグを発見し、読み取る必要があります。これにより、実際に書き込みたいタグであるかどうかをチェックすることができます。そのため、読み取りイベントから `write()` を呼び出すことが推奨されます。

```js
const ndef = new NDEFReader();
let ignoreRead = false;

ndef.onreading = (event) => {
  if (ignoreRead) {
    return; // write pending, ignore read.
  }

  console.log("We read a tag, but not during pending write!");
};

function write(data) {
  ignoreRead = true;
  return new Promise((resolve, reject) => {
    ndef.addEventListener("reading", event => {
      // Check if we want to write to this tag, or reject.
      ndef.write(data).then(resolve, reject).finally(() => ignoreRead = false);
    }, { once: true });
  });
}

await ndef.scan();
try {
  await write("Hello World");
  console.log("We wrote to a tag!")
} catch(err) {
  console.error("Something went wrong", err);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
