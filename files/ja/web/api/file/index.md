---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 2a09bee9b36fd9a53c1bce641297021bfe274a33
---

{{APIRef("File API")}}

**`File`** インターフェイスは、ファイルについての情報を提供したり、ウェブページ内の JavaScript からその内容にアクセスできるようにしたりします。

`File` オブジェクトは通常、{{HTMLElement("input")}} 要素を使用してファイルを選択した結果として返される {{DOMxRef("FileList")}} オブジェクト、またはドラッグ＆ドロップ操作の {{DOMxRef("DataTransfer")}} オブジェクトから取得します。

`File` オブジェクトは特別な種類の {{DOMxRef("Blob")}} オブジェクトであり、 Blob が利用できる場面ではどこでも利用できます。特に、{{DOMxRef("FileReader")}}、{{DOMxRef("URL.createObjectURL_static")}}、{{DOMxRef("createImageBitmap()")}}、{{DOMxRef("XMLHttpRequest", "", "send()")}} は、`Blob` と `File` の両方を受け付けます。

詳しい情報や例は、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications) を参照してください。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("File.File", "File()")}}
  - : 新しく構築された `File` オブジェクトを返します。

## インスタンスプロパティ

- {{DOMxRef("File.prototype.lastModified")}} {{ReadOnlyInline}}
  - : ファイルの最終更新時刻を、 UNIX 元期 (1970 年 1 月 1 日深夜) からの経過ミリ秒数で返します。
- {{DOMxRef("File.prototype.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : `File` オブジェクトが参照しているファイルの最終更新時刻の {{JSxRef("Date")}} を返します。
- {{DOMxRef("File.prototype.name")}} {{ReadOnlyInline}}
  - : `File` オブジェクトが参照しているファイルの名前を返します。
- {{DOMxRef("File.prototype.webkitRelativePath")}} {{ReadOnlyInline}}
  - : {{DOMxRef("File")}} の URL の相対パスを返します。

`File` は {{DOMxRef("Blob")}} を実装しているので、以下のようなプロパティも利用できます。

- {{DOMxRef("Blob.size")}} {{ReadOnlyInline}}
  - : ファイルのサイズをバイト単位で返します。
- {{DOMxRef("File.prototype.type")}} {{ReadOnlyInline}}
  - : ファイルの [MIME](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types) タイプを返します。

## インスタンスメソッド

_`File` インターフェイスはメソッドを定義せず、{{DOMxRef("Blob")}} インターフェイスからメソッドを継承しています。_

- {{DOMxRef("Blob.prototype.slice()", "Blob.prototype.slice([start[, end[, contentType]]])")}}
  - : ソース `Blob` の指定したバイト数の範囲のデータを含む新しい `Blob` オブジェクトを返します。
- {{DOMxRef("Blob.prototype.stream()")}}
  - : `File` を {{DOMxRef("ReadableStream")}} に変換し、`File` の内容を読み込めるようにします。
- {{DOMxRef("Blob.prototype.text()")}}
  - : `File` をストリームに変換し、最後まで読み込みます。これは、文字列（テキスト）で解決するプロミスを返します。
- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : `File` をストリームに変換し、最後まで読み込みます。 {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
