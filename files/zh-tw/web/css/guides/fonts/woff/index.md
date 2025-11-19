---
title: Web 開放字型格式（WOFF）
slug: Web/CSS/Guides/Fonts/WOFF
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**WOFF**（**Web 開放字型格式**）是一種由 Mozilla 與 Type Supply、LettError 及其他組織共同開發的 Web 字型格式。它使用與 TrueType、OpenType 和 Open Font Format 相同的基於表的 `sfnt` 結構的壓縮版本，但增加了後設資料和私用資料結構，包括允許字型公司和供應商在需要時提供授權訊息的預定義欄位。

使用 WOFF 有三個主要好處：

1. 字型資料經過壓縮，因此使用 WOFF 的網站將比使用同等的未壓縮 TrueType 或 OpenType 檔案佔用更少的頻寬，載入速度也更快。
2. 許多不願意授權其 TrueType 或 OpenType 格式字型在 Web 上使用的字型供應商，會授權 WOFF 格式的字型。這提高了網站設計師可用的字型數量。
3. 無論是專有軟體還是自由軟體的瀏覽器供應商都喜歡 WOFF 格式，因此它有潛力成為一種真正通用、可互通的 Web 字型格式，這點與其他現行的字型格式不同。

WOFF 有兩種版本：WOFF 和 WOFF2。它們的主要區別在於使用的壓縮演算法。在 {{cssxref("@font-face")}} 中，它們分別由 `'woff'` 和 `'woff2'` 格式描述子識別。

## 使用 WOFF

你可以使用 {{cssxref("@font-face")}} CSS 屬性來將 WOFF 字型用於 Web 內容中的文字。它的運作方式與 OpenType 和 TrueType 格式的字型完全相同，但由於增加了壓縮功能，它可能會讓你的內容下載得更有效率。

## 處理 WOFF 字型的工具

- [處理 WOFF 的工具](https://github.com/odemiral/woff2sfnt-sfnt2woff)已經可用。`sfnt2woff` 和 `woff2sfnt` 可在 WOFF 和 OpenType 之間進行轉換。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("@font-face")}}
