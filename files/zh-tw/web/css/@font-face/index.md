---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

## 摘要

`@font-face` CSS @ 規則允許指定用於顯示文字之自定義字體，該字體可以從網路或用戶自己電腦上安裝的本地字體載入。透過自定義字體， `@font-face` 消除了對使用者電腦上安裝的有限數量字體的依賴。

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

### 參數值

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : 定義字體的上升度量。
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : 定義字體的下降度量。
- {{cssxref("@font-face/font-display", "font-display")}}
  - : 根據字體是否及何時被下載並準備使用，決定字體的顯示方式。
- {{cssxref("@font-face/font-family", "font-family")}}
  - : 指定將用作字體屬性的字體值的名稱。
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : {{cssxref("font-stretch")}} 值，接受兩個值來指定 font-face 支援的範圍，例如 `font-stretch: 50% 200%;`。
- {{cssxref("@font-face/font-style", "font-style")}}
  - : {{cssxref("font-style")}} 值， 接受兩個值來指定 font-face 支援的範圍，例如 `font-style: oblique 20deg 50deg;`。
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : {{cssxref("font-weight")}} 值，接受兩個值來指定 font-face 支援的範圍，例如 `font-weight: 100 400;`。

    > **備註：** {{cssxref("font-variant")}} 描述符已於 2018 年從規範中刪除。 {{cssxref("font-variant")}} 值屬性仍受支援，但沒有對應的描述符。

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : 允許控制 OpenType 字型中的進階排版功能。
  - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : 透過指定要變更的功能的四個字母軸名稱及其變更值，允許對 OpenType 或 TrueType 字體變更進行低階控制。
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : 定義字體的行距。
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : 定義與此字體關聯的字形輪廓和規格的乘數。這使得在以相同字體大小渲染時更容易配合各種字體的設計。
- {{cssxref("@font-face/src", "src")}}
  - : 指定對字體資源的引用，包括有關字體格式和技術的提示。 `@font-face` 規則必須有效。
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : 字體中要使用的 Unicode 碼位的範圍。

## 描述

在使用 `url()` 和 `local()` 函數時，通常會將兩者一起使用，如此一來，若用戶的裝置上有安裝字體，就會使用本地字體，若沒有則會下載字體資源來使用。

如果提供了 `local()` 函數，並指定了一個字體名稱來尋找用戶裝置上的字體，如果{{Glossary("user agent")}}找到了匹配的字體，就會使用這個本地字體。否則，將會下載並使用 `url()` 函數指定的字體資源。

瀏覽器會按照聲明列表的順序嘗試加載資源，因此通常應該將 `local()` 寫在 `url()` 之前。兩個函數都是選擇性的，所以只包含一個或多個 `local()` 而沒有 `url()` 的規則塊也是可以的。如果需要更具體的字體格式（使用 `format()` 或 `tech()` 值），應該將這些更具體的版本列在沒有這些值的版本之前，因為較不具體的變體會先被嘗試並使用。

透過允許自定義字體，`@font-face` 可以設計內容而不必局限於所謂的「web-safe」字體（即那些非常常用、被認為是普遍可用的字體）。指定本地安裝的字體名稱以尋找和使用，使得可以在不依賴網路連接的情況下自定義字體而非使用基本字體。

> [!NOTE]
> 在舊版瀏覽器上加載字體的回退策略描述在 [`src` 描述符頁面](/zh-TW/docs/Web/CSS/@font-face/src#指定舊版瀏覽器的後備方案)。

`@font-face` 不僅可以在 CSS 的頂層使用，還可以在任何 [CSS 條件規則群組](/zh-TW/docs/CSS/At-rule#條件規則群組)內使用。

### 字體 MIME 類型

| 格式                 | MIME 類型    |
| -------------------- | ------------ |
| TrueType             | `font/ttf`   |
| OpenType             | `font/otf`   |
| Web 開放字型格式     | `font/woff`  |
| Web 開放字型格式 2.0 | `font/woff2` |

### 備註

- Web 字體受到相同網域的限制（字型檔案必須與使用它們的頁面位於相同網域），除非使用[HTTP存取控制](/zh-TW/docs/Web/HTTP/CORS)來放寬此限制。
- `@font-face` 不能在 CSS 選擇器中宣告。例如，以下內容將無法運作：

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## 形式語法

{{csssyntax}}

## 範例

### 指定可下載字型

下面這個範例指定一個可供下載的字型，並套用至文件的整個 `<body>`：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Web Font Sample</title>
    <style media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

此範例網頁看起來會像這樣：

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### 指定本地替代字型

下面這個範例會套用使用者本地的 "Helvetica Neue Bold" 字型，只有當使用者未安裝該字型（兩種名稱都試過了），才會下載 "MgOpenModernaBold.ttf" 字型：

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [關於 WOFF](/zh-TW/docs/WOFF)
- [FontSquirrel @font-face 生成器](https://www.fontsquirrel.com/tools/webfont-generator)
- [Beautiful fonts with @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
- [WOFF 與瀏覽器相容性](https://caniuse.com/woff)
- [SVG 字體與瀏覽器相容性](https://caniuse.com/svg-fonts)
