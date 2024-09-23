---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileList`** 接口表示由 HTML {{HTMLElement("input")}} 元素的 `files` 属性返回的该类型的对象；这使你可以访问使用 `<input type="file">` 元素选择的文件列表。它还用于使用拖放 API 中放入 Web 内容中的文件列表；有关此用法的详细信息，请参阅 {{domxref("DataTransfer")}} 对象。

所有 `<input>` 元素节点都有一个 `FileList` 类型的 `files` 属性，其允许访问此列表中的项目。例如，如果 HTML 包含以下文件输入框：

```html
<input id="fileItem" type="file" />
```

以下代码行将节点文件列表中的第一个文件作为 {{domxref("File")}} 对象获取：

```js
const file = document.getElementById("fileItem").files[0];
```

此接口[试图创建不可修改的列表](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)，为了不破坏已经使用该接口的代码，才继续支持该接口。现代 API 使用基于 JavaScript [数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)的类型来表示列表结构，从而提供许多数组方法，同时对其使用施加额外的语义（例如使其项目为只读）。

这些历史原因并不意味着你作为开发人员应该避免使用 `FileList`。你不会自己创建 `FileList` 对象，而是从诸如 {{domxref("HTMLInputElement.files")}} 之类的 API 获取它们，并且这些 API 并未弃用。但是，请注意与真实数组的语义差异。

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
