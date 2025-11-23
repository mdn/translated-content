---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** オブジェクトは、1 つのドラッグデータ項目を表します。ドラッグ操作中、それぞれの {{domxref("DragEvent")}} は {{domxref("DragEvent.dataTransfer", "dataTransfer")}} プロパティを持ち、このプロパティにはドラッグデータ項目の {{domxref("DataTransferItemList", "list")}} を含みます。リスト内のそれぞれの項目は `DataTransferItem` オブジェクトです。

`DataTransferItem` は主に [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) のために設計され、現在も HTML ドラッグアンドドロップセクションで規定されています。しかし現在では、{{domxref("ClipboardEvent.clipboardData")}} や {{domxref("InputEvent.dataTransfer")}} などの他の API でも使用されるようになりました。`DataTransferItem` のドキュメントでは主にドラッグ＆ドロップ操作における使用法について説明します。他のコンテキストでの `DataTransferItem` の使用法については、各 API のドキュメントを参照してください。

このインターフェイスにはコンストラクターがありません。

## インスタンスプロパティ

- {{domxref("DataTransferItem.kind")}} {{ReadOnlyInline}}
  - : ドラッグデータの項目の種類で、`string`（文字列）か `file`（ファイル）のどちらかです。
- {{domxref("DataTransferItem.type")}} {{ReadOnlyInline}}
  - : ドラッグデータ項目の型、通常は MIME タイプです。

## インスタンスメソッド

- {{domxref("DataTransferItem.getAsFile()")}}
  - : ドラッグデータ項目に関連付けられた {{domxref("File")}} オブジェクト (ドラッグ項目がファイルでない場合は null) を返します。
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}} {{Experimental_Inline}}
  - : {{jsxref('Promise')}} を返します。これはドラッグ中の項目がファイルであれば {{domxref('FileSystemFileHandle')}} で、ドラッグ中の項目がディレクトリーであれば {{domxref('FileSystemDirectoryHandle')}} で履行されます。
- {{domxref("DataTransferItem.getAsString()")}}
  - : ドラッグデータ項目の文字列を引数に、指定されたコールバックを呼び出します。
- {{domxref("DataTransferItem.webkitGetAsEntry()")}}
  - : 選択したファイルのファイルシステム内の項目を表す {{domxref("FileSystemEntry")}} に基づくオブジェクトを返します。これは通常、{{domxref("FileSystemFileEntry")}} または {{domxref("FileSystemDirectoryEntry")}} オブジェクトのいずれかになります。

## 例

このインターフェイスのすべてのメソッドとプロパティには、自身のリファレンスページがあり、それぞれのリファレンスページに例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
