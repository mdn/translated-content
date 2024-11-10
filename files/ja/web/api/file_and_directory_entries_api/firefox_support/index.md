---
title: ファイルとディレクトリー項目 API の Firefox における対応
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{DefaultAPISidebar("File and Directory Entries API")}}

元のファイルシステム API は、ユーザーのストレージ機器上のサンドボックス化された仮想ファイルシステムにアクセスする対応をブラウザーの実装するために作成されたものです。この仕様を標準化する作業は 2012 年に中止されましたが、この時点では Google Chrome が API を独自に実装していました。時間が経つにつれ、多くの人気サイトやウェブ標準アプリケーションがこの API を使用するようになりましたが、標準 API にフォールバックする手段や、API が利用可能かどうかを使用前に確認することすら提供されないことが多くありました。Mozilla は代わりに、同じ問題の多くを解決するために使用できる他の API、例えば [IndexedDB](/ja/docs/Web/API/IndexedDB_API) を実装することを選択しました。詳細については、ブログ記事 [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) をご覧ください。

このため、Chrome 以外のブラウザーでは、多くの人気ウェブサイトが正しく動作しない問題が発生しました。そのため、Google の API の機能を提供し、コンセンサスを得ることができる仕様を作成する試みが行われました。その結果、[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) が誕生しました。Chrome が提供する API のサブセットであり、まだ完全に仕様化されていません。しかし、ウェブの互換性の観点から、この API のサブセットを Firefox で実装することが決定され、Firefox 50 で導入されました。

この記事では、ファイルとディレクトリー項目 API の Firefox の実装が、他の実装や仕様とどのように異なるかを記述しています。

## 仕様書から外れた Chrome

まだ残っている最大の互換性課題は、Chrome が API 内の多くのインターフェイスに、関連しているものの異なる仕様を実装したため、古い名称を使用していることです。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">仕様書での名前</th>
      <th scope="col">Google Chrome での名前</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FileSystemDirectoryEntry</code></td>
      <td><code>DirectoryEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryEntrySync</code></td>
      <td><code>DirectoryEntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReader</code></td>
      <td><code>DirectoryReader</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReaderSync</code></td>
      <td><code>DirectoryReaderSync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntry</code></td>
      <td><code>Entry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntrySync</code></td>
      <td><code>EntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntry</code></td>
      <td><code>FileEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntrySync</code></td>
      <td><code>FileEntrySync</code></td>
    </tr>
  </tbody>
</table>

コードでは、両方の名前を使用できるようにすることで、この点を考慮するようにしてください。Chrome が近いうちに、新しい名前を使用するように更新されることを期待します。

以下のようにすることで、コードが Chrome と他のブラウザーの両方で確実に動作するようになります。

```js
const FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
const FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Firefox での制限

次に、Firefox に実装されている API の制限について見ていきましょう。大まかに言えば、それらの制限は以下のようにまとめられます。

- コンテンツスクリプトは、ファイルシステムを作成したり、ファイルシステムへのアクセスを開始することはできません。ファイルシステムの項目にアクセスする方法は、現時点では 2 つしかありません。

  - {{HTMLElement("input")}} 要素で、{{domxref("HTMLInputElement.webkitEntries")}} プロパティを使用して、読み込めるファイルシステム項目を示す {{domxref("FileSystemEntry")}} オブジェクトの配列にアクセスする。
  - ドラッグ＆ドロップを使用する場合、{{domxref("DataTransferItem.webkitGetAsEntry")}}メソッドを呼び出すことで、ドロップゾーンにドロップしたファイルの{{domxref("FileSystemFileEntry")}}または{{domxref("FileSystemDirectoryEntry")}}を取得することができる。

- Firefox は `"filesystem:"` URL スキームに対応していません。

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) 仕様書
- 元の仕様書である [File API: Directories and System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html) （"FileSystem API" と呼ばれる）。Google Chrome はこの**放棄された** API を実装している唯一のブラウザーです。
