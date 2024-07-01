---
title: FileReaderSync
slug: Web/API/FileReaderSync
l10n:
  sourceCommit: 5749ddb42f8087c44163dc909ef19ef7451dcac9
---

{{APIRef("File API")}}

`FileReaderSync` インターフェイスにより、{{DOMxRef("File")}} または {{DOMxRef("Blob")}} オブジェクトを同期的に読み込むことができます。

{{AvailableInWorkers}}

> **警告:** このインターフェイスは、ブロックが発生する可能性がある同期 I/O を使用するため、[ワーカー](/ja/docs/Web/API/Worker)**でのみ**利用できます。

## コンストラクター

- {{domxref("FileReaderSync.FileReaderSync", "FileReaderSync()")}}
  - : 新しい `FileReaderSync` オブジェクトを返します。

## インスタンスプロパティ

このインターフェイスにはプロパティはありません。

## インスタンスメソッド

- {{DOMxRef("FileReaderSync.readAsArrayBuffer","FileReaderSync.readAsArrayBuffer()")}}
  - : このメソッドは、指定された {{DOMxRef("Blob")}} または {{DOMxRef("File")}} を、入力データをバイナリー文字列として表す {{jsxref("ArrayBuffer")}} に変換します。
- {{DOMxRef("FileReaderSync.readAsBinaryString","FileReaderSync.readAsBinaryString()")}} {{deprecated_inline}}
  - : このメソッドは、指定された {{DOMxRef("Blob")}} または {{DOMxRef("File")}} を、入力データをバイナリー文字列として表す文字列に変換します。このメソッドは非推奨であり、代わりに `readAsArrayBuffer()` を使用することを検討してください。
- {{DOMxRef("FileReaderSync.readAsText","FileReaderSync.readAsText()")}}
  - : このメソッドは、指定された {{DOMxRef("Blob")}} または {{DOMxRef("File")}} を、入力データをテキスト文字列として表す文字列に変換します。オプションの **`encoding`** 引数は、使用するエンコーディングを示します（iso-8859-1 や UTF-8 など）。これがない場合、このメソッドはエンコーディングの検出アルゴリズムを適用します。
- {{DOMxRef("FileReaderSync.readAsDataURL","FileReaderSync.readAsDataURL()")}}
  - : 指定された {{DOMxRef("Blob")}} または {{DOMxRef("File")}} を、入力データをデータ URL として表す文字列に変換します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("FileReader")}}
- {{DOMxRef("Blob")}}
- {{DOMxRef("File")}}
