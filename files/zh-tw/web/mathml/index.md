---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

**數學標記語言**（MathML）是一種基於 [XML](/zh-TW/docs/Web/XML) 的語言，用於描述數學符號。

[MathML](https://w3c.github.io/mathml/) 最初被設計為通用規範，適用於瀏覽器、辦公軟體套件、[電腦代數系統](https://zh.wikipedia.org/wiki/計算機代數系統)、[EPUB](https://www.w3.org/publishing/epub33/) 閱讀器以及 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 生成器。然而，這種方法並不十分適合 Web：[專注於語意](https://w3c.github.io/mathml/#contm)的子集從未在瀏覽器中實作，而[專注於數學佈局](https://w3c.github.io/mathml/#presm)的子集則導致了不完整且不一致的瀏覽器實作。

[MathML Core](https://w3c.github.io/mathml-core/) 是一個子集，基於 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 和[開放字型格式](https://learn.microsoft.com/zh-tw/typography/opentype/spec/math)的規則增加了實作細節。它是為瀏覽器量身打造的，並專為與其他 Web 標準（包括 [HTML](/zh-TW/docs/Web/HTML)、[CSS](/zh-TW/docs/Web/CSS)、[DOM](/zh-TW/docs/Web/API/Document_Object_Model)、[JavaScript](/zh-TW/docs/Web/JavaScript)）良好運作而設計。

在下方你可以找到使用 MathML 的文件、範例和工具連結。MDN 使用 [MathML Core](https://w3c.github.io/mathml-core/) 作為參考規範，但由於不穩定的標準化歷史，舊有的 MathML 功能可能仍會出現在現有的實作和 Web 內容中。

> [!NOTE]
> 強烈建議開發者和作者轉向 MathML Core，或許依靠其他 Web 技術來覆蓋缺失的使用案例。Math 工作小組維護了一組 [MathML polyfill](https://github.com/w3c/mathml-polyfills) 以促進該過渡。

## 教學

[MathML 教學](/zh-TW/docs/Web/MathML/Tutorials)旨在引導你學習各個主題，假設你沒有任何先備經驗，從基礎開始並進展到更進階的技巧。

- [初學者的 MathML](/zh-TW/docs/Web/MathML/Tutorials/For_beginners)
  - : 本教學將引導你使用結構化標記建立數學公式。它從介紹將 MathML 加入 HTML 文件開始，接著深入探討關鍵元件：分數和根號、上下標元素和文字容器。接著教學涵蓋矩陣的表格佈局和進階數學格式設定。最後，透過讓你使用所學概念重新建立三個著名的數學公式，來測試你的理解程度。

## 指南

[MathML 指南](/zh-TW/docs/Web/MathML/Guides)是幫助你在網頁上撰寫 MathML 的資源，包含關於寫作、編輯器、字型等的指引。

- [撰寫 MathML](/zh-TW/docs/Web/MathML/Guides/Authoring)
  - : 撰寫 MathML 的建議與技巧，包含建議的 MathML 編輯器以及如何將其輸出整合至 Web 內容中。
- [MathML 的字型](/zh-TW/docs/Web/MathML/Guides/Fonts)
  - : 使用者如何安裝此類數學字型以在瀏覽器中正確顯示 MathML。

## 參考

[MathML 參考](/zh-TW/docs/Web/MathML/Reference)是 MDN 上記錄的 MathML 元素和屬性的綜合列表。

- [MathML 元素參考](/zh-TW/docs/Web/MathML/Reference/Element)
  - : 關於每個 MathML 元素的詳細資訊以及桌機和行動瀏覽器的相容性資訊。
- [MathML 全域屬性參考](/zh-TW/docs/Web/MathML/Reference/Global_attributes)
  - : 適用於所有元素的 MathML 全域屬性資訊。
- [MathML 屬性參考](/zh-TW/docs/Web/MathML/Reference/Attribute)
  - : 修改元素外觀或行為的 MathML 屬性資訊。
- [MathML 屬性值](/zh-TW/docs/Web/MathML/Reference/Values)
  - : 關於 MathML 屬性值的更多資訊。

## 範例

在下方你可以找到一些範例，幫助你了解如何使用 MathML。

### MathML 公式

以下的展示在 Web 內容中顯示日益複雜的數學概念。

- [證明畢氏定理](/zh-TW/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : 展示畢氏定理證明的小範例。
- [推導二次公式](/zh-TW/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : 概述二次公式的推導。
- [Mozilla MathML 測試](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : 來自 Mozilla MathML 專案的原始測試。它包含來自 [TeXbook](https://en.wikipedia.org/wiki/Computers_and_Typesetting) 的範例，並附有由 TeX 生成的圖像參考。

### 其他 Web 技術

以下的展示將 MathML 與其他 Web 技術混合以產生進階內容。

- [`<la-tex>` 自訂元素](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : 一個接受 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 內容的[自訂元素](/zh-TW/docs/Web/API/Web_components/Using_custom_elements)。
- [磁場展示](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : 磁場的 3D 表現，使用 [SVG](/zh-TW/docs/Web/SVG) 和 [WebGL](/zh-TW/docs/Web/API/WebGL_API)。
- [黎曼 ζ 函數（el）](https://fred-wang.github.io/MathFonts/Συνάρτηση_ζήτα_Ρήμαν.html)
  - : 一篇關於黎曼 ζ 函數的希臘文文章，使用了來自 [Greek Font Society](https://greekfontsociety-gfs.gr/) 的 [Web 字型](/zh-TW/docs/Learn_web_development/Core/Text_styling/Web_fonts)。
- [佩爾方程式](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : 一個使用 [`BigInt`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 求解佩爾方程式的 JavaScript 程式。
- [Lovelace 的伯努利數程式](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Ada Lovelace 計算伯努利數的程式模擬器，使用[私有元素](/zh-TW/docs/Web/JavaScript/Reference/Classes/Private_elements)。

## 從社群獲得協助

- [W3C Math 首頁](https://www.w3.org/Math/)
- [在 GitHub w3c/mathml 倉儲提出議題](https://github.com/w3c/mathml/issues)
- [www-math w3.org 郵件存檔](https://lists.w3.org/Archives/Public/www-math/)

## 工具

- [W3C 驗證器](https://validator.w3.org/)
- [W3C 的 wiki 頁面](https://www.w3.org/wiki/Math_Tools)

## 相關主題

- [CSS](/zh-TW/docs/Web/CSS)
- [HTML](/zh-TW/docs/Web/HTML)
- [SVG](/zh-TW/docs/Web/SVG)

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
