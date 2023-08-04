---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** オブジェクトは、1 つのドラッグデータ項目を表します。*ドラッグ操作*中、それぞれの {{domxref("DragEvent", "ドラッグイベント", "", 1)}}は {{domxref("DragEvent.dataTransfer", "dataTransfer")}} プロパティを持ち、このプロパティにはドラッグデータ項目の {{domxref("DataTransferItemList", "list")}} を含みます。リスト内のそれぞれの項目は `DataTransferItem` オブジェクトです。

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
  - : ドラッグ中の項目がファイルであれば {{domxref('FileSystemFileHandle')}} を、ドラッグ中の項目がディレクトリーであれば {{domxref('FileSystemDirectoryHandle')}} を返します。
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
