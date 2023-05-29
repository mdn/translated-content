---
title: Blob.size
slug: Web/API/Blob/size
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`size`** プロパティは、 {{domxref("Blob")}} または {{domxref("File")}} の大きさをバイト単位で返します。

### 値

`Blob` （または `Blob` ベースのオブジェクト、例えば {{domxref("File")}}）内に含まれるデータのバイト数です。

## 例

この例では、 {{HTMLElement("input")}} 要素の `file` 型を使用して、ユーザーにファイルのグループを尋ね、それらのファイルを繰り返し処理して、その名前と長さをバイト単位で出力しています。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">ファイルを選択してください…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  output.innerText = "";

  for (const file of event.target.files) {
    output.innerText += `${file.name} の大きさは ${file.size} バイトです。\n`;
  }
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
