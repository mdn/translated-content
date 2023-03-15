---
title: Document.dir
slug: Web/API/Document/dir
---

{{ApiRef("")}}

Document.dir 的本质是 DOMString，代表了文档的文字朝向，是从左到右 (默认) 还是从右到左。

'rtl'(right to left) 代表从右到左，'ltr'(left to right) 代表从左到右。

## 语法

```plain
console.log(document.dir);// "" (译者添加)
document.dir = "ltr"//(默认);
document.dir = "rtl";
dirStr = document.dir;
document.dir = dirStr;
```

（译者注：第一次调用该属性时，可能返回空字符串""，译者环境：chrome，版本 53.0.2785.116 m）

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- <http://msdn.microsoft.com/en-us/library/ms533731.aspx>
