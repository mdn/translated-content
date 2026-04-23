---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 0a24354d9ac0cac0b9c6f47de27cbf758c9f32f4
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`File`** インターフェイスは、ファイルについての情報を提供したり、ウェブページ内の JavaScript からその内容にアクセスできるようにしたりします。

`File` オブジェクトは通常、{{HTMLElement("input")}} 要素を使用してファイルを選択した結果として返される {{DOMxRef("FileList")}} オブジェクト、またはドラッグ＆ドロップ操作の {{DOMxRef("DataTransfer")}} オブジェクトから取得します。

`File` オブジェクトは特別な種類の {{DOMxRef("Blob")}} オブジェクトであり、 Blob が利用できる場面ではどこでも利用できます。特に、以下の API は `Blob` と `File` の両方を受け付けます。

- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{DOMxRef("Window.createImageBitmap()")}} および {{DOMxRef("WorkerGlobalScope.createImageBitmap()")}}
- {{domxref("Window.fetch", "fetch()")}} の [`body`](/ja/docs/Web/API/RequestInit#body) オプション
- {{DOMxRef("XMLHttpRequest.send()")}}

詳しい情報や例は、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications) を参照してください。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("File.File", "File()")}}
  - : 新しく構築された `File` オブジェクトを返します。

## インスタンスプロパティ

_`File` インターフェイスには {{DOMxRef("Blob")}} インターフェイスから継承したプロパティもあります。_

- {{DOMxRef("File.lastModified")}} {{ReadOnlyInline}}
  - : ファイルの最終更新時刻を、 UNIX 元期 (1970 年 1 月 1 日深夜) からの経過ミリ秒数で返します。
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : `File` オブジェクトが参照しているファイルの最終更新時刻の {{JSxRef("Date")}} を返します。
- {{DOMxRef("File.name")}} {{ReadOnlyInline}}
  - : `File` オブジェクトが参照しているファイルの名前を返します。
- {{DOMxRef("File.webkitRelativePath")}} {{ReadOnlyInline}}
  - : `File` の URL の相対パスを返します。

## インスタンスメソッド

_`File` インターフェイスには {{DOMxRef("Blob")}} インターフェイスから継承したメソッドもあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
