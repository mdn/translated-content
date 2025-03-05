---
title: "File: webkitRelativePath プロパティ"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

**`webkitRelativePath`** は {{domxref("File")}} インターフェイスの読み取り専用プロパティで、[`webkitdirectory`](/ja/docs/Web/HTML/Element/input#webkitdirectory) 属性が設定された {{HTMLElement("input")}} 要素において、ユーザーが選択したディレクトリーに対するファイルのパスを指定する文字列を保持します。

## 値

ユーザーが選択した祖先ディレクトリーを基準にしたファイルのパスを含む文字列。

## 例

この例では、ユーザーが 1 つまたは複数のディレクトリーを選択することができるディレクトリーピッカーが表示されます。 {{domxref("HTMLElement/change_event", "change")}} イベントが発生すると、選択されたディレクトリー階層に含まれるすべてのファイルのリストが生成され、表示されます。

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;

  for (const file of files) {
    output.textContent += `${file.webkitRelativePath}\n`;
  }
});
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
