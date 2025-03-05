---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

[`Blob`](/zh-TW/docs/Web/API/Blob) 物件的 **`type`** 屬性提供檔案的 [MIME 類別](/zh-TW/docs/Web/HTTP/MIME_types/Common_types)。若無法辨明型別則回傳空字串。

## 語法

```plain
var mimetype = instanceOfFile.type
```

## 值

一個字串。

## 範例

```js
var i, fileInput, files, allowedFileTypes;

// fileInput 是個 HTMLInputElement: <input type="file" multiple id="myfileinput">
fileInput = document.getElementById("myfileinput");

// files 是個 FileList 物件 （類似 NodeList）
files = fileInput.files;

// 這範例接受 *.png, *.jpeg 和 *.gif 圖片。
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // 測試 file.type 是否是允許的類別。
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // 若符合則執行這裡的程式碼。
  }
});
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Blob")}}
