---
title: DataTransferItem
slug: Web/API/DataTransferItem
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItem`** オブジェクトは、1 つのドラッグデータ項目を表します。*ドラッグ操作*中、各 {{domxref("DragEvent", "drag event")}}は {{domxref("DragEvent.dataTransfer", "dataTransfer")}} プロパティを持ち、このプロパティにはドラッグデータ項目の {{domxref("DataTransferItemList", "list")}} を含みます。リスト内の各項目は `DataTransferItem` オブジェクトです。

このインターフェイスにはコンストラクタがありません。

## プロパティ

- {{domxref("DataTransferItem.kind")}} {{readonlyInline}}
  - : ドラッグデータの項目、`文字列`、`ファイル` の*種類*。
- {{domxref("DataTransferItem.type")}} {{readonlyInline}}
  - : ドラッグデータ項目のタイプ、通常は MIME タイプ。

## メソッド

- {{domxref("DataTransferItem.getAsFile()")}}
  - : ドラッグデータ項目に関連付けられた {{domxref("File")}} オブジェクト (ドラッグ項目がファイルでない場合は null) を返します。
- {{domxref("DataTransferItem.getAsString()")}}
  - : ドラッグデータ項目の文字列を引数に、指定されたコールバックを呼び出します。
- {{domxref("DataTransferItem.webkitGetAsEntry()")}} {{Non-standard_inline}}
  - : 選択したファイルのファイルシステム内のエントリを表す {{domxref("FileSystemEntry")}} に基づくオブジェクトを返します。これは通常、{{domxref("FileSystemFileEntry")}} または {{domxref("FileSystemDirectoryEntry")}} オブジェクトのいずれかになります。

## 例

このインターフェイスのすべてのメソッドとプロパティには、それ自身の参照ページがあり、それぞれの参照ページにはその使用例があります。

## 仕様

{{Specifications}}

## ブラウザの互換性

{{Compat("api.DataTransferItem")}}
