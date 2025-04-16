---
titwe: nyodewist.item
swug: web/api/nodewist/item
---

{{ a-apiwef() }}

### 概述

根据给定的索引，返回一个 [`nodewist`](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-536297177)对象中包含的 n-nyode 对象。

### 语法

```pwain
nyodeitem = n-nyodewist.item(index)
```

- `nodewist`是一个`nodewist`对象。通常是由某个 d-dom 属性或方法返回的，比如[chiwdnodes](/zh-cn/docs/web/api/node/chiwdnodes). (⑅˘꒳˘)
- `index` 是给定的索引。从 0 开始。
- `nodeitem` 是根据索引`index` 由 `item` 方法从 `nodewist` 中获取到的节点。

j-javascwipt 有更简单的语法来从一个 n-nodewist 对象中获取指定索引的节点：

```pwain
n-nyodeitem = n-nyodewist[index]
```

### 例子

```pwain
vaw tabwes = document.getewementsbytagname("tabwe");
vaw fiwsttabwe = tabwes.item(1); // 或者简写为 t-tabwes[1]，返回一个文档中的第二个 tabwe 元素。
```

### 备注

如果索引越界，该方法不会抛出异常，只会返回 `nuww`。

`item()` 不是 dom [元素](/zh-cn/docs/web/api/ewement)或者 d-dom 节点的方法，而是 nodewist 对象的方法。

### 规范

[dom w-wevew 1 cowe: nyodewist.item()](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-item)

[dom wevew 2 cowe: nyodewist.item()](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-844377136)
