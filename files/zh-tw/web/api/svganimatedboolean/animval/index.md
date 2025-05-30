---
title: SVGAnimatedBoolean：animVal 屬性
slug: Web/API/SVGAnimatedBoolean/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

{{domxref("SVGAnimatedBoolean")}} 介面的 **`animVal`** 唯讀屬性表示相關可動畫布林 SVG 屬性的當前動畫值。如果屬性未被動畫化，`animVal` 與 {{domxref("SVGAnimatedBoolean.baseVal")}} 相同。

某些布林 SVG 屬性（例如 [`preserveAlpha`](/zh-TW/docs/Web/SVG/Reference/Attribute/preserveAlpha)）是可動畫的。在這種情況下，當屬性值解析為 true 時，`SVGAnimatedBoolean.animVal` 的值為 `true`；否則，值為 `false`。

## 值

一個布林值；對應於可動畫布林屬性的值。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
