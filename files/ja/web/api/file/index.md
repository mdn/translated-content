---
title: File
slug: Web/API/File
tags:
  - API
  - File API
  - インターフェイス
  - リファレンス
  - ウェブ
browser-compat: api.File
translation_of: Web/API/File
---
{{APIRef}}

**`File`** インターフェイスは、ファイルについての情報を提供したり、ウェブページ内の JavaScript からその内容にアクセスできるようにしたりします。

`File` オブジェクトは通常、 {{HTMLElement("input")}} 要素を使用してファイルを選択した結果として返される {{DOMxRef("FileList")}} オブジェクト、ドラッグ＆ドロップ操作の {{DOMxRef("DataTransfer")}} オブジェクト、または {{DOMxRef("HTMLCanvasElement")}} 上の `mozGetAsFile()` API から取得します。

`File` オブジェクトは特別な種類の {{DOMxRef("Blob")}} オブジェクトであり、 Blob が利用できる場面ではどこでも利用できます。特に、{{DOMxRef("FileReader")}}、{{DOMxRef("URL.createObjectURL()")}}、{{DOMxRef("createImageBitmap()")}}、{{DOMxRef("XMLHttpRequest", "", "send()")}} は、`Blob` と `File` の両方を受け付けます。

詳しい情報や例は、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications) を参照してください。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("File.File", "File()")}}
  - : 新しく構築された `File` オブジェクトを返します。

## インスタンスプロパティ

- {{DOMxRef("File.prototype.lastModified")}} {{ReadOnlyInline}}
  - : ファイルの最終更新時刻を、 UNIX 元期 (1970 年 1 月 1 日深夜) からの経過ミリ秒数で返します。
- {{DOMxRef("File.prototype.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : `File` オブジェクトが参照しているファイルの最終更新時刻の {{JSxRef("Date")}} を返します。
- {{DOMxRef("File.prototype.name")}}{{ReadOnlyInline}}
  - : `File` オブジェクトが参照しているファイルの名前を返します。
- {{DOMxRef("File.prototype.webkitRelativePath")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("File")}} の URL の相対パスを返します。

`File` は {{DOMxRef("Blob")}} を実装しているので、以下のようなプロパティも利用できます。

- {{DOMxRef("File.prototype.size")}} {{ReadOnlyInline}}
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
  - : `File` をストリームに変換し、最後まで読み込みます。これは、{{DOMxRef("USVString")}} (テキスト) で解決するプロミスを返します。
- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : `File` をストリームに変換し、最後まで読み込みます。 {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
- [DOM の File API をクロームコードで使う](/ja/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (Firefox アドオンのような Gecko で実行される特権コード向け)
