---
title: "File: name プロパティ"
short-title: name
slug: Web/API/File/name
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`name`** は {{domxref("File")}} インターフェイスの読み取り専用プロパティで、この {{domxref("File")}} オブジェクトによって表されるファイルの名前を返します。セキュリティ上の理由から、パスはこのプロパティから除外されます。

## 値

パスを除いたファイル名の入った文字列。 "My Resume.rtf" など。

## 例

### HTML

```html
<input type="file" id="filepicker" multiple />
<div>
  <p>選択されたファイルのリスト:</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    const li = document.createElement("li");
    li.textContent = file.name;
    output.appendChild(li);
  }
});
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
