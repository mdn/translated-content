---
title: Node：isSameNode() 方法
short-title: isSameNode()
slug: Web/API/Node/isSameNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`isSameNode()`** 方法是[严格相等运算符（`===`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)的遗留别名。也就是说，它检测两个节点是否相同（换句话说，它们是否引用同一对象）。

> [!NOTE]
> 不必使用 `isSameNode()`；请改用 `===` 严格相等运算符。

## 语法

```js-nolint
isSameNode(otherNode)
```

### 参数

- `otherNode`
  - : 要与之比较的 {{domxref("Node")}}。
    > [!NOTE]
    > 此参数不是可选的，但可以设为 `null`。

### 返回值

布尔值：若两个节点严格相等则为 `true`，否则为 `false`。

## 示例

在本示例中，我们创建三个 {{HTMLElement("div")}} 块。第一个和第三个具有相同的内容和属性，第二个则不同。然后运行一些 JavaScript，用 `isSameNode()` 比较这些节点并输出结果。

### HTML

```html
<div>这是第一个元素。</div>
<div>这是第二个元素。</div>
<div>这是第一个元素。</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const divList = document.getElementsByTagName("div");

output.innerText += `div 0 与 div 0 相同：${divList[0].isSameNode(
  divList[0],
)}\n`;
output.innerText += `div 0 与 div 1 相同：${divList[0].isSameNode(
  divList[1],
)}\n`;
output.innerText += `div 0 与 div 2 相同：${divList[0].isSameNode(
  divList[2],
)}\n`;
```

### 结果

{{ EmbedLiveSample('示例', "100%", "205") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.isEqualNode()")}}
