---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**`@font-face`** [CSS](/zh-TW/docs/Web/CSS) [@ 規則](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules)用來指定一個自定義的字型，用於顯示文本；該字型可以從遠端伺服器加載，或者使用者本地安裝的字型。

## 語法

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
}
```

### 描述符

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : 定義字型的上升量度。
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : 定義字型的下降量度。
- {{cssxref("@font-face/font-display", "font-display")}}
  - : 決定字型在下載並準備使用時的顯示方式。
- {{cssxref("@font-face/font-family", "font-family")}}
  - : 指定將作為字型屬性的字型名稱。`font-family` 名稱是 `@font-face` 規則有效的必要條件。
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : 一個 {{cssxref("font-stretch")}} 值。接受兩個值以指定字型範圍，例如 `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : 一個 {{cssxref("font-style")}} 值。接受兩個值以指定字型範圍，例如 `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : 一個 {{cssxref("font-weight")}} 值。接受兩個值以指定字型範圍，例如 `font-weight: 100 400;`
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : 允許控制 OpenType 字型的高級排版功能。
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : 通過指定特徵的四字母軸名稱及其變化值，提供對 OpenType 或 TrueType 字型變體的低層級控制。
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : 定義字型的行間距指標。
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : 定義字型輪廓和指標的縮放乘數，方便在相同字型大小下協調不同字型設計。
- {{cssxref("@font-face/src", "src")}}
  - : 指定字型資源的參考，包括字型格式及技術的提示。`src` 是 `@font-face` 規則有效的必要條件。
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : 指定字型所使用的 Unicode 碼位範圍。

## 描述

通常會同時使用 `url()` 和 `local()`，以便在使用者的設備上存在字型時優先使用本地字型，否則則下載字型檔案來使用。

如果提供了 `local()` 函數，指定了一個在使用者設備上尋找的字型名稱，且如果{{Glossary("user agent", "使用者代理")}}找到匹配的字型，則使用本地字型。否則，會下載並使用 `url()` 函數指定的字型資源。

瀏覽器會按照聲明列表的順序加載資源，因此通常應將 `local()` 寫在 `url()` 之前。這兩個函數都是可選的，因此可以僅包含一個或多個 `local()`，而不使用 `url()`。如果需要更特定的字型，例如帶有 `format()` 或 `tech()` 值的字型，應將這些版本列在不包含這些值的版本之前，否則會先嘗試並使用較不特定的版本。

通過允許作者提供自己的字型，`@font-face` 使內容設計不再受限於所謂的「Web 安全」字型（即被認為是普遍可用的常見字型）。指定本地安裝字型的名稱，允許在不依賴網際網路連接的情況下，超越基礎字型進行客製化。

> [!NOTE]
> 有關為舊版瀏覽器加載字型的回退策略，請參考 [`src` 描述符頁面](/zh-TW/docs/Web/CSS/Reference/At-rules/@font-face/src#指定舊版瀏覽器的後備方案)。

`@font-face` 規則不僅可用於 CSS 的頂層，也可以用於任何 [CSS 條件群組 @ 規則](/zh-TW/docs/Web/CSS/Guides/Conditional_rules#at_規則)中。

### 字型 MIME 類型

| 格式               | MIME 類型    |
| ------------------ | ------------ |
| TrueType           | `font/ttf`   |
| OpenType           | `font/otf`   |
| Web 開放字型格式   | `font/woff`  |
| Web 開放字型格式 2 | `font/woff2` |

### 備註

- Web 字型受相同域名的限制（字型檔案必須與使用它們的頁面在同一域名），除非使用 [HTTP 存取控制](/zh-TW/docs/Web/HTTP/Guides/CORS)來放寬此限制。
- `@font-face` 不能在 CSS 選擇器中宣告。例如，以下內容將無法運作：

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## 形式語法

{{csssyntax}}

## 範例

### 指定可下載字型

以下範例指定一個可下載的字型，並將其應用於整個文件的 body：

```html live-sample___web-font-example
<body>
  這是 Bitstream Vera Serif 粗體。
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### 指定本地字型替代選項

在此範例中，優先使用使用者本地的「Helvetica Neue Bold」；如果使用者未安裝該字型（會嘗試完整字型名稱和 Postscript 名稱），則改用可下載的字型「MgOpenModernaBold.ttf」：

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [關於 WOFF](/zh-TW/docs/Web/CSS/Guides/Fonts/WOFF)
- [FontSquirrel @font-face 生成器](https://www.fontsquirrel.com/tools/webfont-generator)
- [使用 @font-face 的漂亮字型](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
