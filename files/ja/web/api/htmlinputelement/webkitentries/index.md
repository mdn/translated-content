---
title: HTMLInputElement.webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
tags:
  - API
  - ファイルシステム API
  - ファイルとディレクトリー項目 API
  - Files
  - HTML DOM
  - HTMLInputElement
  - 標準外
  - プロパティ
  - webkitEntries
browser-compat: api.HTMLInputElement.webkitEntries
---
{{APIRef("File System API")}}{{SeeCompatTable}}{{Non-standard_header}}

**`webkitEntries`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用プロパティで、ユーザーが `file` 型の {{HTMLElement("input")}} 要素を用いて選択したファイルやディレクトリーを表す、ファイルシステムのエントリー（ {{domxref("FileSystemEntry")}} に基づくオブジェクト）の配列を含みます。その選択がドラッグ＆ドロップで行われた場合にのみ、ダイアログ内でファイルを選択しても、プロパティは空になります。

{{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} プロパティが `true` である場合のみ、配列が入ることがあります。これは、 `<input>` 要素でユーザーがディレクトリーを選択することができることを意味します。

> **Note:** このプロパティは仕様書で `webkitEntries` と呼ばれていますが、これはもともと Google Chrome 独自の API であったためです。いつか改名される可能性があります。

## 構文

```js
var entries = HTMLInputElement.webkitEntries;
```

### 値

{{domxref("FileSystemEntry")}} に基づいたオブジェクト配列で、それぞれの要素が {{HTMLElement("input")}} 要素で選択されたファイルを表します。具体的には、ファイルは {{domxref("FileSystemFileEntry")}} オブジェクトで表現され、許可されていれば、ディレクトリーは {{domxref("FileSystemDirectoryEntry")}} オブジェクトで表されます。

## 例

この例では、ファイル選択 `<input>` 要素を作成し、選択されたファイルを処理する方法を示しています。

### HTML

```html
<input id="files" type="file" multiple>
```

### JavaScript

```js
document.getElementById("files").addEventListener("change", function(event) {
  event.target.webkitEntries.forEach(function(entry) {
    /* do stuff with the entry */
  });
});
```

{{domxref("HTMLElement/chagne_event", "change")}} イベントが発生するたびに、このコードは選択されたファイルリストを走査して、 {{domxref("FileSystemEntry")}} ベースのオブジェクトを取得し操作をします。

## 仕様書

{{Specifications}}

この API は公式な W3C または WHATWG の仕様書にはありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルシステム API 入門](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("HTMLInputElement")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
