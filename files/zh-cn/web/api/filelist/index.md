---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileList`** 接口表示由 HTML {{HTMLElement("input")}} 元素的 `files` 属性返回的该类型的对象；这使你·可以访问使用 `<input type="file">` 元素选择的文件列表。它还用于使用拖放 API 中放入 Web 内容中的文件列表；有关此用法的详细信息，请参阅 {{domxref("DataTransfer")}} 对象。

所有 `<input>` 元素节点都有一个 `FileList` 类型的 `files` 属性，其允许访问此列表中的项目。例如，如果 HTML 包含以下文件输入框：

```html
<input id="fileItem" type="file" />
```

以下代码行将节点文件列表中的第一个文件作为 {{domxref("File")}} 对象获取：

```js
const file = document.getElementById("fileItem").files[0];
```

> **备注：** 此接口是[尝试创建不可修改的列表](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)，并且仅因为避免破坏已经在使用它的代码而继续受支持。现代 API 使用围绕 ECMAScript 数组类型的类型，因此你可以像 ECMAScript 数组一样对待它们，同时对其使用施加额外的语义（例如使其项目只读）。

## 实例属性

- {{DOMxRef("FileList.length", "length")}} {{ReadOnlyInline}}
  - : 指示列表中文件数量的只读值。

## 实例方法

- {{DOMxRef("FileList.item()", "item()")}}
  - : 返回一个 {{domxref("File")}} 对象，表示文件列表中指定索引处的文件。

## 示例

### 记录文件名

在此示例中，我们记录用户选择的所有文件的名称。

#### HTML

```html
<input id="myfiles" multiple type="file" />
<pre class="output">选定的文件：</pre>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const output = document.querySelector(".output");
const fileInput = document.querySelector("#myfiles");

fileInput.addEventListener("change", () => {
  for (const file of fileInput.files) {
    output.innerText += `\n${file.name}`;
  }
});
```

#### 结果

{{EmbedLiveSample("记录文件名")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("FileReader")}}
