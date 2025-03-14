---
title: DataTransferItem：kind 属性
slug: Web/API/DataTransferItem/kind
l10n:
  sourceCommit: 73744acdfd7546fcadca21e2188de03deb787151
---

{{APIRef("HTML Drag and Drop API")}}

只读属性 **`DataTransferItem.kind`** 返回代表*拖动数据项*的 {{domxref("DataTransferItem")}} 对象的类别——字符串或文件。

## 值

一个表示拖动数据项类别的字符串。它必须是以下值之一：

- `'file'`
  - : 拖动数据项是文件。
- `'string'`
  - : 拖动数据项是*纯文本的 Unicode 字符串*。

## 示例

以下示例展示了 `kind` 属性的用法。

```js
function dropHandler(ev) {
  console.log("放置");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // 该项目是目标节点
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // 拖动数据项是 HTML
      console.log("… Drop: HTML");
    } else if (data[i].kind === "file" && data[i].type.match("^image/")) {
      // 拖动数据项是图像文件
      const f = data[i].getAsFile();
      console.log("……放置：文件");
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推荐拖动类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试——粘贴和拖动](https://codepen.io/tech_query/pen/MqGgap)
