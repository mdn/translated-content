---
title: "HTMLInputElement: webkitEntries プロパティ"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("File and Directory Entries API")}}

**`webkitEntries`** は {{domxref("HTMLInputElement")}} インターフェイスの読み取り専用プロパティで、ユーザーが {{HTMLElement("input")}} 要素の `file` 型を用いて選択したファイルやディレクトリーを表す、ファイルシステムの項目（{{domxref("FileSystemEntry")}} に基づくオブジェクト）の配列を含みます。その選択がドラッグ & ドロップで行われた場合にのみ、ダイアログ内でファイルを選択しても、プロパティは空になります。

{{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} プロパティが `true` である場合のみ、配列が入ることがあります。これは、 `<input>` 要素でユーザーがディレクトリーを選択することができることを意味します。

> [!NOTE]
> このプロパティは仕様書で `webkitEntries` と呼ばれていますが、これはもともと Google Chrome 独自の API であったためです。いつか改名される可能性があります。

## 値

{{domxref("FileSystemEntry")}} に基づいたオブジェクト配列で、それぞれの要素が {{HTMLElement("input")}} 要素で選択されたファイルを表します。具体的には、ファイルは {{domxref("FileSystemFileEntry")}} オブジェクトで表現され、許可されていれば、ディレクトリーは {{domxref("FileSystemDirectoryEntry")}} オブジェクトで表されます。

## 例

この例では、ファイル選択 `<input>` 要素を作成し、選択されたファイルを処理する方法を示しています。

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

```js
document.getElementById("files").addEventListener("change", (event) => {
  event.target.webkitEntries.forEach((entry) => {
    /* do stuff with the entry */
  });
});
```

{{domxref("HTMLElement/change_event", "change")}} イベントが発生するたびに、このコードは選択されたファイルリストを走査して、 {{domxref("FileSystemEntry")}} ベースのオブジェクトを取得し操作をします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API 入門](/ja/docs/Web/API/File_System_API)
- {{domxref("HTMLInputElement")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
