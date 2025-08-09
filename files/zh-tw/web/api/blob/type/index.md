---
title: Blob：type 屬性
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 介面的 **`type`** 唯讀屬性回傳檔案的 {{Glossary("MIME type", "MIME 類型")}}。

> [!NOTE]
> 根據目前的實作，瀏覽器實際上不會讀取檔案的位元流來判斷其媒體類型，而是根據檔案的副檔名來推測。例如，將 PNG 圖片檔案重新命名為 .txt，會回傳「_text/plain_」而非「_image/png_」。此外，`blob.type` 通常僅對常見的檔案類型（如圖片、HTML 文件、音訊和視訊）可靠。不常見的副檔名會回傳空字串。用戶端的組態（例如 Windows 登錄檔）可能導致即使是常見類型也會回傳非預期的值。**建議開發者不要僅依賴此屬性作為驗證的唯一依據。**

## 值

包含檔案 MIME 類型的字串，若無法判斷類型則為空字串。

## 範例

此範例要求用戶選擇多個檔案，然後檢查每個檔案是否屬於指定的一組圖片檔案類型。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">選擇圖片檔案…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// 我們的應用程式僅允許 GIF、PNG 和 JPEG 圖片
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "選擇圖片檔案…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type),
  );
  output.innerText = allAllowed ? "所有檔案均符合！" : "請僅選擇圖片檔案。";
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
