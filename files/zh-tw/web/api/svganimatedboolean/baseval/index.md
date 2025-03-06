---
title: SVGAnimatedBoolean：baseVal 屬性
slug: Web/API/SVGAnimatedBoolean/baseVal
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

**`baseVal`** 是 {{domxref("SVGAnimatedBoolean")}} 介面的屬性，用於表示相關可動畫布林值 SVG 屬性在基礎（未動畫化）狀態下的值。當未應用動畫時，它反映相關可動畫布林值屬性的值。

某些布林值 SVG 屬性（例如 [`preserveAlpha`](/zh-TW/docs/Web/SVG/Attribute/preserveAlpha)）是可動畫的。在這種情況下，當屬性設置為 `false`、被省略且預設為 `false`，或屬性為可繼承且繼承 `false` 時，`SVGAnimatedBoolean.baseVal` 的值為 `false`；否則，值為 `true`。

## 值

一個布林值；對應於反映屬性的基礎值。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
