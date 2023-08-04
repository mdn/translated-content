---
title: ファイルとディレクトリー項目 API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{DefaultAPISidebar("File and Directory Entries API")}}

ファイルとディレクトリー項目 API (File and Directory Entries API) は、ウェブアプリケーションが移動してファイルにアクセスできるローカルファイルシステムをシミュレートします。サンドボックス化された仮想的なファイルシステムで、ファイルやディレクトリーの読み書きや作成を行うアプリを開発することができます。

## ファイルシステムへのアクセス権の取得

仕様の現在の草案で定義されているファイルシステムへのアクセスを取得する方法は 2 つあります。

- ドラッグ＆ドロップで {{domxref("HTMLElement/drop_event", "drop")}} イベントを扱う際、 {{domxref("DataTransferItem.webkitGetAsEntry()")}} を呼び出すとドロップされたアイテムの {{domxref("FileSystemEntry")}} を取得することができます。結果が `null` でなかった場合、これはドロップされたファイルまたはディレクトリーであり、ファイルシステム呼び出しを使用して取り扱うことができます。
- {{domxref("HTMLInputElement.webkitEntries")}} プロパティでは、現在選択されているファイルの {{domxref("FileSystemFileEntry")}} オブジェクトにアクセスすることができますが、これはファイル選択へドラッグ＆ドロップされた場合に限られます（[Firefox バグ 1326031](https://bugzil.la/1326031)）。 {{domxref("HTMLInputElement.webkitdirectory")}} が `true` である場合、 {{HTMLElement("input")}} 要素はディレクトリーピッカーとなり、それぞれの選択されたディレクトリーの {{domxref("FileSystemDirectoryEntry")}} オブジェクトを取得できます。

## インターフェイス

ファイルとディレクトリー項目 API には以下のインターフェイスがあります。

- {{domxref("FileSystem")}}
  - : ファイルシステムを表します。
- {{domxref("FileSystemEntry")}}
  - : ファイルシステムにおける単一の項目を表現する基本インターフェイス。ファイルやディレクトリーを表現する他のインターフェイスによって実装される。
- {{domxref("FileSystemFileEntry")}}
  - : ファイルシステム内の単一のファイルを表します。
- {{domxref("FileSystemDirectoryEntry")}}
  - : ファイルシステム内の単一のディレクトリーを表します。
- {{domxref("FileSystemDirectoryReader")}}
  - : {{domxref("FileSystemDirectoryEntry.createReader()")}} を呼び出すことで生成され、このインターフェイスはディレクトリーの内容を読み取る機能を提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [ファイルとディレクトリー項目 API の Firefox での対応](/ja/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
