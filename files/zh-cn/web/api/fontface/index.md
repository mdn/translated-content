---
title: FontFace
slug: Web/API/FontFace
---

{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}

**`FontFace`** 接口表示一个可用的字体。它允许你控制字体的源文件，作为外部资源的 URL 或缓冲区; 它还允许你控制字体的加载时间和字体当前的状态。

## Constructor

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : 使用 URL 指向的外部资源或{{domxref("ArrayBuffer")}}构造并返回一个新的 `FontFace` 对象。

## Properties

_这个接口不继承任何属性。_

- {{domxref("FontFace.family")}}
  - : 这是不是一个{{domxref("DOMString")}} ？是的话将表示该字体的 _family_ 属性，相当于 {{cssxref("@font-face/family", "family")}} 。
- {{domxref("FontFace.style")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体的 _style_ 属性，相当于 {{cssxref("@font-face/style", "style")}} 。
- {{domxref("FontFace.weight")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体的 _weight_ 属性，相当于 {{cssxref("@font-face/weight", "weight")}}。
- {{domxref("FontFace.stretch")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体的 _stretches_ 属性，相当于 {{cssxref("@font-face/stretch", "stretch")}} 。
- {{domxref("FontFace.unicodeRange")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体涵盖的 _range of code_（字符编码的范围），相当于 {{cssxref("@font-face/unicode-range", "unicode-range")}} 。
- {{domxref("FontFace.variant")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体的 _variant_ 属性，相当于 {{cssxref("@font-face/range", "range")}} 。
- {{domxref("FontFace.featureSettings")}}
  - : 这是不是一个 {{domxref("DOMString")}} ？是的话将表示该字体的 _features_ 属性，相当于 {{cssxref("@font-face/feature-settings", "feature-settings")}} 。
- {{domxref("FontFace.status")}} {{readonlyinline}}
  - : 返回一个表示字体当前状态的可枚举值，它可能是下列之一：`"unloaded"`、`"loading"`、`"loaded"`、`"error"`。
- {{domxref("FontFace.loaded")}} {{readonlyinline}}
  - : 当字体完全加载或加载失败时返回该 `FontFace` 的 {{domxref("Promise")}}。

## 方法

_这个接口不继承任何方法。_

- {{domxref("FontFace.load()")}}
  - : 加载该字体，返回该字体完全加载或加载失败时的 {{domxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
