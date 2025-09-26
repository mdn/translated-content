---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
---

{{APIRef}}

**`NamedNodeMap`** 接口表示属性节点 {{domxref("Attr")}} 对象的集合。尽管在 `NamedNodeMap` 里面的对象可以像数组一样通过索引来访问，但是它和 {{ domxref("NodeList") }} 不一样，对象的顺序没有指定。

`NamedNodeMap` 对象是即时的 (_live_)，因此，如果它内部包含的对象发生改变的话，该对象会自动更新到最新的状态。

> [!NOTE]
> 尽管被称为 `NamedNodeMap`，但这个接口不是用来处理节点对象 ({{domxref("Node")}})，而是用来处理属性节点对象 ({{domxref("Attr")}})，属性节点原来是一种特殊的节点 ({{domxref("Node")}})，仍然在某些实现环境（浏览器）中有效。

## 属性

_该接口没有继承任何属性。_

- {{ domxref("NamedNodeMap.length") }} {{ReadOnlyInline}}
  - : 返回映射 (map) 中对象的数量。

## 方法

_该接口没有继承任何方法。_

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : 返回一个给定名字对应的属性节点（{{ domxref("Attr") }}）。
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : 替换或添加一个属性节点（{{ domxref("Attr") }}）到映射（map）中。
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : 移除一个属性节点（{{ domxref("Attr") }}）。
- {{domxref("NamedNodeMap.item()")}}
  - : 返回指定索引处的属性节点（{{ domxref("Attr") }}），或者，当索引超出或等于属性节点的数量时，返回 `null`。
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : 根据给定的命名空间参数和 name 参数返回一个 {{domxref("Attr")}} 对象。
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : 替换、添加给定命名空间参数和 name 参数的 {{domxref("Attr")}} 对象。
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : 删除给定命名空间参数和 name 参数的 {{domxref("Attr")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ domxref("Element.attributes") }}
