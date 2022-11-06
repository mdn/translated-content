---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

`readAsText` 方法可以将 [Blob](/zh-CN/docs/Web/API/Blob) 或者 [File](/zh-CN/docs/Web/API/File) 对象转根据特殊的编码格式转化为内容 (字符串形式)

这个方法是异步的，也就是说，只有当执行完成后才能够查看到结果，如果直接查看是无结果的，并返回 undefined

也就是说必须要挂载 实例下的 onload 或 onloadend 的方法处理转化后的结果

当转化完成后， [readyState](/zh-CN/docs/Web/API/FileReader/readyState) 这个参数就会转换 为 done 即完成态， [event("loadend")](/zh-CN/docs/Web/Events/loadend) 挂载的事件会被触发，并可以通过事件返回的形参得到中的 [FileReader.result](/zh-CN/docs/Web/API/FileReader/result) 属性得到转化后的结果

## 语法

```plain
 instance of FileReader.readAsText(blob[, encoding]);
```

### 参数

- `二进制对象`
  - : [Blob](/zh-CN/docs/Web/API/Blob)类型 或 [File](/zh-CN/docs/Web/API/File)类型
- 编码类型 (可选)
  - : 传入一个字符串类型的编码类型，如缺省，则默认为“utf-8”类型

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [FileReader](/zh-CN/docs/Web/API/FileReader)
