---
title: HTMLInputElement.webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
tags:
  - API
  - ファイルシステム API
  - ファイルとディレクトリー項目 API
  - ファイル
  - HTML DOM
  - HTMLInputElement
  - 標準外
  - プロパティ
  - リファレンス
  - Web
  - webkitdirectory
  - プロパティ
translation_of: Web/API/HTMLInputElement/webkitdirectory
---
{{APIRef("HTML DOM")}}{{non-standard_header}}

**`HTMLInputElement.webkitdirectory`** はプロパティで、 {{htmlattrxref("webkitdirectory", "input")}} という HTML 属性の値を反映し、 {{HTMLElement("input")}} 要素によってユーザーがファイルの代わりにディレクトリーを選択できることを示します。ディレクトリーが選択された場合、ディレクトリーとその内容の階層構造が選択されたアイテムのセットに含まれます。選択されているファイルシステムのファイルアイテムは、 {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} を使用して受け取ることができます。

## 構文

```js
 HTMLInputElement.webkitdirectory = boolValue
```

### 値

論理型で、 `true` は {{HTMLElement("input")}} 要素がディレクトリーのみを選択することができることを、 `false` はファイルのみが選択できることを示します。

## 結果を理解する

ユーザーが選択を行った後、 `files` の中のそれぞれの {{domxref("File")}} オブジェクトは各自が {{domxref("File.webkitRelativePath")}} プロパティセットを持ち、ファイルが所在する位置が選択されたディレクトリーの中の相対パスで設定されます。例えば、次のようなファイルシステムを考えてみてください。

- PhotoAlbums

  - Birthdays

    - Jamie's 1st birthday

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Don's 40th birthday

      - PIC2343.jpg
      - PIC2344.jpg
      - PIC2355.jpg
      - PIC2356.jpg

  - Vacations

    - Mars

      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

ユーザーが `PhotoAlbums` を選択すると、 files によって報告されるリストは上記のすべてのファイルに対する {{domxref("File")}} オブジェクトを含みます。 — しかし、ディレクトリーは含みません。 `PIC2343.jpg` の項目では `webkitRelativePath` が `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg` となります。これによって {{domxref("FileList")}} が平坦でも階層構造を知ることができます。

> **Note:** `webkitRelativePath` の挙動は *Chromium 72 より前*では異なります。詳しくは[このバグ](https://bugs.chromium.org/p/chromium/issues/detail?id=124187)を参照してください。

## 例

この例では、ユーザーが 1 つまたは複数のディレクトリーを選択することができるディレクトリーピッカーが表示されます。 {{domxref("HTMLElement/change_event", "change")}} イベントが発生すると、選択されたディレクトリー階層ないのすべてのファイルを含むリストが生成され、表示されます。

### HTML content

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript content

```js
document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
```

### 結果

{{ EmbedLiveSample('Example') }}

## 仕様書

{{Specifications}}

この API は公式な W3C または WHATWG の仕様書にはありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
