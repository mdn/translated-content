---
title: Boolean
slug: Glossary/Boolean
---

{{GlossarySidebar}}

在计算机科学中，**布尔值**是一种取值仅能为 _真_ 或 _假_ 的数据类型，它赋予了编程语言在逻辑上表达*真* 或 _假_ 的能力。如果没有这种能力，很多功能将无法被实现。举个例子，JavaScript 中的 _if 语句_ 需要一些判断条件来决定接下来的代码会否被执行，而这些条件，本质上会被解释成一个布尔值。又如 JavaScript 中的 _for 循环_，如果没有一个能够解释成布尔值的判断条件，循环将无法知道自己什么时候该结束。

**_JavaScript if 语句_**

```js
if(boolean conditional) {
  //代码
}

if(true) {
  console.log("布尔值判断条件被解释为 真");
} else {
  console.log("布尔值判断条件被解释为 假");
}
```

**_JavaScript for 循环_**

```js
for(control variable; boolean conditional; counter) {
  //代码
}

for(var i=0; i<4; i++) {
  console.log("只有当布尔值判断条件为 真 的时候才，这段文字才会被打印");
}
```

## 了解更多

### 通用知识

- 维基百科上的布尔值 [Boolean](https://zh.wikipedia.org/wiki/Boolean_data_type)

### 技术参考文档

- 标准全局对象：{{jsxref("Boolean")}}
- [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
