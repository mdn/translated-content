---
title: Expando
slug: Glossary/Expando
---

{{GlossarySidebar}}

可扩展对象的动态属性 (Expando properties) 是{{glossary("JavaScript")}} 添加到{{glossary("DOM")}} 节点的属性 , 可以直接从 DOM 元素中访问。这些属性不是{{glossary("对象")}} 的 DOM 规范的一部分：

```js
window.document.foo = 5; // foo 是一个自定义属性
```

该术语也可以应用于添加到对象的属性，而不遵守对象的原始意图，例如非数字命名的属性添加到一个{{glossary("数组")}}里。

**注：**
expando 可能是 expandable object 的缩写，表示可扩展的对象。expando property 表示可扩展对象的动态属性，可以在运行时动态添加到对象中的属性。
“JavaScript 中的所有对象均支持 expando 属性和方法，这些属性和方法可在运行时动态添加和移除。”（来源：MSDN）

### 例子：二维数组的创建

```js
var n = 5;
var i, j;

var arr = new Array(n); //创建第一维的数组
for (i = 0; i < n; i++) {
  arr[i] = new Array(n);
  for (
    j = 0;
    j < n;
    j++ // 内循环创建第二维数组
  ) {
    arr[i][j] = i * j; // 数组赋值
  }
}
console.log(arr);
```
