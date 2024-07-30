---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
---

{{APIRef("DOM")}}

**`NamedNodeMap`** 介面表示了 {{domxref("Attr")}} 物件的集合。雖然 `NamedNodeMap` 與 {{domxref("NodeList")}} 都能如陣列一般透過索引訪問成員，但和 `NodeList` 不同的是，`NamedNodeMap` 中的成員並沒有順序。

`NamedNodeMap` 物件具有*即時性（live）*，如果其內部成員（屬性節點物件）發生改變，`NamedNodeMap` 物件會自動更新至最新的狀態。

> [!NOTE]
> 僅管被稱作 `NamedNodeMap`，但本介面並不是直接用來處理節點物件（{{domxref("Node")}}），而是專門負責屬性節點物件（{{domxref("Attr")}}）。屬性節點是一種特殊的節點，在部分瀏覽器實作中依然存在。

## 屬性

_This interface doesn't inherit any property._

- {{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}
  - : Returns the amount of objects in the map.

## 方法

_This interface doesn't inherit any method._

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : Returns a {{domxref("Attr")}}, corresponding to the given name.
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : Replaces, or adds, the {{domxref("Attr")}} identified in the map by the given name.
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : Removes the {{domxref("Attr")}} identified by the given map.
- {{domxref("NamedNodeMap.item()")}}
  - : Returns the {{domxref("Attr")}} at the given index, or `null` if the index is higher or equal to the number of nodes.
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : Returns a {{domxref("Attr")}} identified by a namespace and related local name.
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : Replaces, or adds, the {{domxref("Attr")}} identified in the map by the given namespace and related local name.
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : Removes the {{domxref("Attr")}} identified by the given namespace and related local name.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Element.attributes")}}
