---
title: ファイルとディレクトリー項目 API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("File and Directory Entries API")}}

ファイルとディレクトリー項目 API は、ユーザーがフォーム入力またはドラッグ＆ドロップ操作で指定したディレクトリーやファイルリストを処理する手段を提供します。これは単一のファイルを扱う[ファイル API](/ja/docs/Web/API/File) のより高度なバージョンです。当初は完全な仮想ファイルシステムへの対応を目的としていましたが、これでユーザー提供データに対する読み取り操作のみに対応しています。

[ファイル関連のその他の API との関係](/ja/docs/Web/API/File_API#他のファイル関連_api_との関係)では、この API と、[ファイルシステム API](/ja/docs/Web/API/File_System_API)、[ファイル API](/ja/docs/Web/API/File_API)との比較を行っています。

## ファイルシステムへのアクセス権の取得

仕様の現在の草案で定義されているファイルシステムへのアクセスを取得する方法は 2 つあります。

- ドラッグ＆ドロップで {{domxref("HTMLElement/drop_event", "drop")}} イベントを扱う際、 {{domxref("DataTransferItem.webkitGetAsEntry()")}} を呼び出すとドロップされたアイテムの {{domxref("FileSystemEntry")}} を取得することができます。結果が `null` でなかった場合、これはドロップされたファイルまたはディレクトリーであり、ファイルシステム呼び出しを使用して取り扱うことができます。
- {{domxref("HTMLInputElement.webkitEntries")}} プロパティでは、現在選択されているファイルの {{domxref("FileSystemFileEntry")}} オブジェクトにアクセスすることができますが、これはファイル選択へドラッグ＆ドロップされた場合に限られます（[Firefox バグ 1326031](https://bugzil.la/1326031)）。 {{domxref("HTMLInputElement.webkitdirectory")}} が `true` である場合、 {{HTMLElement("input")}} 要素はディレクトリーピッカーとなり、それぞれの選択されたディレクトリーの {{domxref("FileSystemDirectoryEntry")}} オブジェクトを取得できます。

## 歴史

元々のファイルシステム API は、ブラウザーがユーザーのストレージ機器上のサンドボックス化された仮想ファイルシステムにアクセスできるようにするために作成されました。仕様の標準化作業は 2012 年に放棄されましたが、その時点で Google Chrome は独自の実装を既に搭載していました。時間とともに、多くの人気サイトやウェブアプリケーションがこれを使用するようになりました。多くの場合、標準 API へのフォールバック手段を指定せず、API が利用可能かどうかを調べることすらせず、そのまま使用していたのです。Mozilla は代わりに、[IndexedDB](/ja/docs/Web/API/IndexedDB_API) など、同様の問題の多くを解決できる他の API の実装を選択しました。詳細な分析はブログ記事 [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) をご覧ください。

その結果、多くの人気ウェブサイトが Chrome 以外のブラウザーでは正常に動作しなくなりました。この問題を解決するため、Google の API のうち合意が得られた機能が「ファイルとディレクトリー項目 API」として標準化され、その後他のブラウザーにも実装されました。

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

### 他のインターフェイスへの拡張

- {{domxref("DataTransferItem.webkitGetAsEntry()")}}
  - : 選択されたファイルのファイルシステム上の項目を表す {{domxref("FileSystemEntry")}} の派生オブジェクトを返します。これは通常 {{domxref("FileSystemFileEntry")}} または {{domxref("FileSystemDirectoryEntry")}} オブジェクトのどちらかになります。
- {{domxref("File.webkitRelativePath")}}
  - : `File` の URL に対する相対パスを返します。
- {{domxref("HTMLInputElement.webkitdirectory")}}
  - : [`webkitdirectory`](/ja/docs/Web/HTML/Reference/Elements/input#webkitdirectory) 属性を表す論理値です。`true` の場合、ファイルシステムピッカーインターフェイスはファイルではなくディレクトリーのみを受け入れます。
- {{domxref("HTMLInputElement.webkitEntries")}}
  - : 現在選択されているファイルまたはディレクトリーを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイル API](/ja/docs/Web/API/File_API)
- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
