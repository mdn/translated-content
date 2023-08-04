---
title: File.lastModified
slug: Web/API/File/lastModified
---

{{APIRef("File API")}}

只读属性 **`File.lastModified`** 返回所引用文件最后修改日期，为自 1970 年 1 月 1 日 0:00 以来的毫秒数。没有已知的最后修改时间则会返回当前时间。

## 语法

```js
var time = instanceOfFile.lastModified;
```

## 值

自 1970 年 1 月 1 日 0:00 以来的毫秒数。

## 实例

### 从 INPUT 标签读取文件

```html
<input type="file" multiple id="fileInput" />
```

```js
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", function (event) {
  // files is a FileList object (simliar to NodeList)
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const date = new Date(files[i].lastModified);
    alert(files[i].name + " has a last modified date of " + date);
  }
});
```

结果：

{{ EmbedLiveSample('从 INPUT 标签读取文件', 300, 50) }}

### 动态创建文件

如果文件是动态创建的，可以在构造函数{{domxref("File.File()", "new File()")}} 中提供最后修改时间。如果未提供则会继承文件对象被创建时的{{jsxref("Date.now()")}} 。

```js
var fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); //returns 1485903600000

var fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); //returns current time
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("File")}}
