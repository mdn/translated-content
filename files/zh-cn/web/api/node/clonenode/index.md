---
title: Node.cloneNode
slug: Web/API/Node/cloneNode
---

{{ApiRef("DOM")}}

**`Node.cloneNode()`** 方法返回调用该方法的节点的一个副本。

## 语法

```js-nolint
cloneNode()
cloneNode(deep)
```

- `node`
  - : 将要被克隆的节点
- `dupNode`
  - : 克隆生成的副本节点
- `deep` {{optional_inline}}
  - : 是否采用深度克隆，如果为 `true`，则该节点的所有后代节点也都会被克隆，如果为 `false`，则只克隆该节点本身。

> [!NOTE]
> 在 DOM4 规范中 (实现于 Gecko 13.0)，`deep`是一个可选参数。如果省略的话，参数的默认值为 `true，`也就是说默认是深度克隆。如果想使用浅克隆，你需要将该参数设置为 `false`。
>
> 在最新的规范里，该方法的行为已经改变了，其默认值变成了 false。虽然该参数仍旧是可选的，但是你必须要为该方法设置 deep 参数，无论是为了向前还是向后兼容考虑。假如开发者没设置参数的话，Gecko 28.0) 版本的控制台会发出警告。从 Gecko 29.0) 开始该方法默认为浅复制而不是深度复制。

## 示例

```js
var p = document.getElementById("para1"),
var p_prime = p.cloneNode(true);
```

## 附注

克隆一个元素节点会拷贝它所有的属性以及属性值，当然也就包括了属性上绑定的事件 (比如`onclick="alert(1)"`),但不会拷贝那些使用[`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)方法或者`node.onclick = fn`这种用 JavaScript 动态绑定的事件。

在使用{{domxref("Node.appendChild()")}}或其他类似的方法将拷贝的节点添加到文档中之前，那个拷贝节点并不属于当前文档树的一部分，也就是说，它没有父节点。

如果`deep`参数设为`false`,则不克隆它的任何子节点。该节点所包含的所有文本也不会被克隆，因为文本本身也是一个或多个的{{domxref("Text")}}节点。

如果 `deep` 参数设为 `true`,则会复制整棵 DOM 子树 (包括那些可能存在的{{domxref("Text")}}子节点).对于空结点 (例如{{HTMLElement("img")}}和{{HTMLElement("input")}}元素), 则 `deep` 参数无论设为 `true` 还是设为 `false`, 都没有关系，但是仍然需要为它指定一个值。

> [!WARNING]
> 为了防止一个文档中出现两个 ID 重复的元素，使用`cloneNode()` 方法克隆的节点在需要时应该指定另外一个与原 ID 值不同的 ID

如果原始节点设置了 ID，并且克隆节点会被插入到相同的文档中，那么应该更新克隆节点的 ID 以保证唯一性。name 属性可能也需要进行修改，取决于你是否希望有相同名称的节点存在于文档中。

想要克隆一个节点来添加到另外一个文档中，请使用{{domxref("Document.importNode()")}}代替本方法。

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}
