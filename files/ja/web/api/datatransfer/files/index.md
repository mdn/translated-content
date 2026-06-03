---
title: "DataTransfer: files プロパティ"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`files`** は [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトの読み取り専用プロパティで、ドラッグ操作中の[ファイルのリスト](/ja/docs/Web/API/FileList)です。操作にファイルが含まれていない場合、リストは空になります。

この機能を利用して、ユーザーのデスクトップからブラウザーにファイルをドラッグすることができます。

> [!NOTE]
> [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトの `files` プロパティは、 {{domxref("HTMLElement/drop_event", "drop")}} および {{domxref("Element/paste_event", "paste")}} イベントの中からのみアクセスできます。それ以外のどのイベントでも、 `files` プロパティは空になります。その基礎となるデータストアが[保護モード](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#保護モード)になるからです。

## 返値

ドラッグ操作中のファイルの {{domxref("FileList")}} で、 1 つのリスト項目が 1 つのファイルを表します。操作にファイルが含まれていない場合、リストは空になります。

## 例

### ファイルリストの読み取り

この例では、ファイルをドロップできる基本的な領域を作成し、いくつかのメタデータを表示します。

```html-nolint
<pre id="output">ファイルシステムからここにファイルをドロップしてください。</pre>
```

```css
#output {
  min-height: 200px;
  border: 1px solid black;
  padding: 1em;
}
```

```js
const output = document.getElementById("output");

function log(text) {
  output.innerText += text;
}

output.addEventListener("dragenter", (e) => {
  e.stopPropagation();
  e.preventDefault();
  output.textContent = "";
});
output.addEventListener("dragover", (e) => {
  e.stopPropagation();
  e.preventDefault();
});
output.addEventListener("drop", (e) => {
  e.stopPropagation();
  e.preventDefault();
  const files = event.dataTransfer.files;
  log(`ファイル数: ${files.length}\n`);

  for (const file of files) {
    log(`  ファイル: ${file}, ${file.name}, ${file.size} バイト\n`);
  }
});
```

{{EmbedLiveSample("reading_the_files_list", "", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
