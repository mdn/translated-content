---
title: File.webkitRelativePath
slug: Web/API/File/webkitRelativePath
tags:
  - File
  - File API
  - File System API
  - File and Directory Entries API
  - 標準外
  - プロパティ
  - 読み取り専用
  - リファレンス
  - ウェブ
  - webkitRelativePath
browser-compat: api.File.webkitRelativePath
translation_of: Web/API/File/webkitRelativePath
---
{{APIRef("File API")}}{{non-standard_header}}

**`File.webkitRelativePath`** は、 {{htmlattrxref("webkitdirectory", "input")}} 属性が設定された {{HTMLElement("input")}} 要素でユーザーが選択したディレクトリーに対するファイルのパスを指定する {{domxref("USVString")}} を持つ読み取り専用のプロパティです。

## 構文

```js
relativePath = File.webkitRelativePath
```

### 値

ユーザーが選択した祖先ディレクトリーを基準にしたファイルのパスを含む {{domxref("USVString")}}。

## 例

この例では、ユーザーが 1 つまたは複数のディレクトリーを選択することができるディレクトリーピッカーが表示されます。 {{domxref("HTMLElement/change_event", "change")}} イベントが発生すると、選択されたディレクトリ階層に含まれるすべてのファイルのリストが生成され、表示されます。

### HTML コンテンツ

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript コンテンツ

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

この API には、公式の W3C または WHATWG 仕様はありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
