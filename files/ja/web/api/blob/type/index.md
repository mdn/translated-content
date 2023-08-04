---
title: Blob.type
slug: Web/API/Blob/type
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("File API")}}

**`type`** は {{domxref("Blob")}} オブジェクトのプロパティで、ファイルの {{Glossary("MIME type", "MIME タイプ")}}を返します。

### 値

ファイルの MIME タイプを含む文字列、または型が特定できなかった場合は空文字列を指定します。

## 例

この例では、ユーザーにいくつかのファイルを選択してもらい、各ファイルが指定された画像ファイルタイプのセットのいずれかであるかどうかを確認します。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">画像ファイルを選択してください…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// このアプリケーションは GIF, PNG, JPEG 画像のみを許可します
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "画像ファイルを選択してください…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type)
  );
  output.innerText = allAllowed
    ? "すべてのファイルが合格です!"
    : "画像ファイルのみを選択してください。";
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
