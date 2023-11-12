---
title: DOMTokenList
slug: Web/API/DOMTokenList
---

{{APIRef("DOM")}}

**`DOMTokenList`** 介面表示了一個以空格作為分隔的內容集，通常來自 {{domxref("Element.classList")}}、{{domxref("HTMLLinkElement.relList")}}、{{domxref("HTMLAnchorElement.relList")}} 或 {{domxref("HTMLAreaElement.relList")}} 等屬性。本介面與 {{jsxref("Array")}} 同樣是由 `0` 開始索引，且 `DOMTokenList` 是區分大小寫的。

## 屬性

_This interface doesn't inherit any property._

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Is an `integer` representing the number of objects stored in the object.

## 方法

_This interface doesn't inherit any method._

- {{domxref("DOMTokenList.item()")}}
  - : Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to Gecko 7.0 returned null)
- {{domxref("DOMTokenList.contains()")}}
  - : Returns `true` if the underlying string contains _token_, otherwise `false`
- {{domxref("DOMTokenList.add()")}}
  - : Adds _token_ to the underlying string
- {{domxref("DOMTokenList.remove()")}}
  - : Removes _token_ from the underlying string
- {{domxref("DOMTokenList.replace()")}}
  - : Replaces an existing _token_ with a new token.
- {{domxref("DOMTokenList.supports()")}}
  - : Returns `true` if a given _token_ is in the associated attribute's supported tokens.
- {{domxref("DOMTokenList.toggle()")}}
  - : Removes _token_ from string and returns false. If _token_ doesn't exist it's added and the function returns true

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("DOMSettableTokenList")}} (object that extends DOMTokenList with settable _.value_ property)
