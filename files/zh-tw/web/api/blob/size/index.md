---
title: Blob.size
slug: Web/API/Blob/size
---

{{APIRef("File API")}}

**`Blob.size`** 屬性回傳以 byte 為單位的 {{domxref("Blob")}} 或一個 {{domxref("File")}} 的大小。

## 語法

```plain
var sizeInBytes = blob.size
```

## 值

一個數字。

## 範例

```js
// fileInput 是個 HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files 是個 FileList 物件 （類似 NodeList）
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  console.log(files[i].name + " has a size of " + files[i].size + " Bytes");
}
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Blob")}}
