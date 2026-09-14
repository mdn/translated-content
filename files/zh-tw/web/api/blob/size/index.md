---
title: Blob：size 屬性
slug: Web/API/Blob/size
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 介面的 **`size`** 唯讀屬性回傳 {{domxref("Blob")}} 或 {{domxref("File")}} 的大小（以位元組為單位）。

## 值

包含在 `Blob`（或基於 `Blob` 的物件，例如 {{domxref("File")}}）中的資料位元組數。

## 範例

此範例使用一個類型為 `file` 的 {{HTMLElement("input")}} 元素，讓使用者選擇一組檔案，然後遍歷這些檔案並輸出它們的名稱及大小（以位元組為單位）。

### HTML

```html
<input type="file" id="input" multiple /> <output id="output">選擇檔案…</output>
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
    output.innerText += `${file.name} 的大小為 ${file.size} 位元組。\n`;
  }
});
```

### 結果

{{EmbedLiveSample("範例")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Blob")}}
- [在 Web 應用程式中使用檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)
