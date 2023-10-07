---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

`FileList` 型別物件通常來自 HTML {{HTMLElement("input")}} 元素 {{domxref("Document_Object_Model", "DOM")}} 物件的 `files` 屬性（{{Glossary("property/JavaScript", "property")}}）。你可以操作 `FileList` 物件來存取使用者透過 `<input type="file">` 元素所選取的檔案，或由拖放操作所產生的檔案（請參考 {{domxref("DataTransfer")}} 物件的更多使用細節）。

> **備註：** 在 Gecko 1.9.2 之前，{{HTMLElement("input")}} 元素只支援一次選取一個檔案，這代表了 `FileList` 只能夠包含一個 `File` 物件。從 Gecko 1.9.2 開始，假如 `<input>` 元素的 `multiple` 屬性（attribute）為 true，則 FileList 就可能會包含多個檔案。

## 使用 FileList

所有 `<input>` 元素節點的 {{domxref("Document_Object_Model", "DOM")}} 物件都擁有 `files` 屬性（{{Glossary("property/JavaScript", "property")}}），此屬性即為 `FileList`，是一個可藉此存取使用者選取之檔案的類陣列物件。以下範例展示了一個 `type` 屬性（{{Glossary("attribute")}}）值為 `file` 的 HTML `<input>` 元素：

```html
<input id="fileItem" type="file" />
```

下面範例演示了如何取得 `<input>` 元素節點中所包含的第一個 {{domxref("File")}} 型別物件：

```js
var file = document.getElementById("fileItem").files[0];
```

## 方法概觀

| `File item(index);` |
| ------------------- |

## 屬性

| 屬性名稱 | 型別      | 描述                                     |
| -------- | --------- | ---------------------------------------- |
| `length` | `integer` | 表示 `FileList` 物件中的檔案數量，唯讀。 |

## 方法

### item()

回傳 `FileList` 中指定索引的 {{domxref("File")}} 物件。

```js
File item(
  index
);
```

#### 參數

- `index`
  - : 要取得的檔案之索引（起始於零）。

#### 回傳值

要求的 {{domxref("File")}} 物件。

## 範例

此範例演示了迭代所有之使用者於 `<input>` 元素選取的檔案：

```js
// fileInput is an HTML input element: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;
var file;

// loop through files
for (var i = 0; i < files.length; i++) {
  // get item
  file = files.item(i);
  //or
  file = files[i];

  alert(file.name);
}
```

以下是更完整的範例：

```html
<!doctype html>
<html>
  <head> </head>
  <body>
    <!--multiple is set to allow multiple files to be selected-->

    <input id="myfiles" multiple type="file" />
  </body>

  <script>
    var pullfiles = function () {
      // love the query selector
      var fileInput = document.querySelector("#myfiles");
      var files = fileInput.files;
      // cache files.length
      var fl = files.length;
      var i = 0;

      while (i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
      }
    };

    // set the input element onchange to call pullfiles
    document.querySelector("#myfiles").onchange = pullfiles;

    //a.t
  </script>
</html>
```

## 規範

- [File upload state](http://www.whatwg.org/specs/web-apps/current-work/multipage/number-state.html#concept-input-type-file-selected) (HTML5 working draft)

## 參見

- [在網頁應用程式中使用本地檔案](/zh-TW/docs/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("FileReader")}}
