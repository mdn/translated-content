---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("File and Directory Entries API")}}

**`FileSystemEntry`** は ファイルとディレクトリーの項目 API のインターフェイスで、ファイルシステム内の単一の項目を表します。項目はファイルでもディレクトリーでも構いません（ディレクトリーは {{domxref("FileSystemDirectoryEntry")}} インターフェイスで表します）。この API には、ファイルを操作するためのメソッド（コピー、移動、削除、読み込みなど）が含まれます。また、また、この API が指すファイルに関する情報（ファイル名、ルートから項目までのパスなど）も含まれます。

## 基本概念

直接 `FileSystemEntry` オブジェクトを作成することはありません。代わりに、他の API を使用してこのインターフェイスに基づくオブジェクトを受け取ります。このインターフェイスは、{{domxref("FileSystemFileEntry")}} および {{domxref("FileSystemDirectoryEntry")}} インターフェイスの基底クラスとなっており、それぞれファイルとディレクトリーを表すファイルシステム項目に固有の機能を提供します。

`FileSystemEntry` インターフェイスには、ファイルやディレクトリーを操作するためのメソッドが記載されていますが、項目の URL を取得するための便利なメソッド、 [`toURL()`](#tourl) も含まれています。また、新しい URL スキーム `filesystem:` も導入されています。

Google Chrome では、`filesystem:` スキームを使用することで、アプリのオリジンに含まれるすべてのファイルとフォルダーを確認することができます。アプリのオリジンのルートディレクトリーに `filesystem:` スキームを使用するだけです。例えば、アプリが [`http://www.example.com`](https://www.example.com) にある場合、`filesystem:http://www.example.com/temporary/` をタブで開きます。Chrome はアプリのオリジンに含まれるすべてのファイルとフォルダーの読み取り専用のリストを表示します。

### 例

`toURL()` がどのように動作するのかの例を見るには、この[メソッドの説明](#tourl)を参照してください。下記のスニペットは、ファイル名でファイルを除去する方法を示しています。

```js
// ブラウザー固有の接頭辞を世話する
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;

// …

// 一時ストレージを持つファイルシステムを開く
window.requestFileSystem(
  TEMPORARY,
  1024 * 1024 /*1MB*/,
  (fs) => {
    fs.root.getFile(
      "log.txt",
      {},
      (fileEntry) => {
        fileEntry.remove(() => {
          console.log("ファイルが削除されました。");
        }, onError);
      },
      onError,
    );
  },
  onError,
);
```

## インスタンスプロパティ

_このインターフェイスには以下のプロパティがあります。_

- {{domxref("FileSystemEntry.filesystem", "filesystem")}} {{ReadOnlyInline}}
  - : この項目があるファイルシステムを表す {{domxref("FileSystem")}} オブジェクト。
- {{domxref("FileSystemEntry.fullPath", "fullPath")}} {{ReadOnlyInline}}
  - : ファイルシステムのルートから項目までの完全な絶対パスを指定された文字列。 "/" 文字を先頭につけた、ルートディレクトリーからの相対パスと考えることもできます。
- {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} {{ReadOnlyInline}}
  - : 論理値。この項目がディレクトリーを表している場合は `true`、そうでない場合は `false` となります。
- {{domxref("FileSystemEntry.isFile", "isFile")}} {{ReadOnlyInline}}
  - : 論理値で、その項目がファイルを表している場合は `true` となります。ファイルでない場合は `false` です。
- {{domxref("FileSystemEntry.name", "name")}} {{ReadOnlyInline}}
  - : 項目の名前（パスの最後の "/" の後の部分）が入った文字列。

## インスタンスメソッド

_このインターフェイスには以下のメソッドがあります。_

- {{domxref("FileSystemEntry.copyTo", "copyTo()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ファイルまたはディレクトリーをファイルシステムの新しい場所にコピーします。
- {{domxref("FileSystemEntry.getMetadata", "getMetadata()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ファイルの更新日時やサイズなどのメタデータを取得します。
- {{domxref("FileSystemEntry.getParent", "getParent()")}}
  - : この項目の親ディレクトリーを表す {{domxref("FileSystemDirectoryEntry")}} を返します。
- {{domxref("FileSystemEntry.moveTo", "moveTo()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ファイルまたはディレクトリーをファイルシステム上の新しい場所に移動させるか、ファイルまたはディレクトリーの名前を変更します。
- {{domxref("FileSystemEntry.remove", "remove()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 指定したファイルまたはディレクトリーを除去されます。削除されるのは空のディレクトリーだけです。
- {{domxref("FileSystemEntry.toURL", "toURL()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : この項目を識別する URL を作成して返します。この URL は URL スキーム `"filesystem:"` を使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_System_API)
- {{domxref("FileSystemFileEntry")}} と {{domxref("FileSystemDirectoryEntry")}} は `FileSystemEntry` が基底クラスです。
