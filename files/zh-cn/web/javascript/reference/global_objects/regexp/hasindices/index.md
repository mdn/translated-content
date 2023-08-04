---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
---

{{JSRef}}

**`hasIndices`** 访问器属性指示 `d` 标志是否与正则表达式一起使用。

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

## 描述

如果 `d` 标志被使用，则 `RegExp.prototype.hasIndices` 的值是 `true`；否则是 `false`。`d` 标志表示正则表达式匹配的结果应该包含每个捕获组子字符串开始和结束的索引。它不会以任何方式改变正则表达式的解释或匹配行为，它只在匹配的结果中提供额外的信息。

`hasIndices` 的 set 访问器是 `undefined`。你不能直接修改此属性。

## 示例

### 使用 hasIndices

```js
const str1 = "foo bar foo";

const regex1 = /foo/dg;

console.log(regex1.hasIndices); // Output: true

console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

const str2 = "foo bar foo";

const regex2 = /foo/;

console.log(regex2.hasIndices); // Output: false

console.log(regex2.exec(str2).indices); // Output: undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.exec()")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
