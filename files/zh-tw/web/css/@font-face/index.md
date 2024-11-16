---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

`@font-face` [CSS](/zh-TW/docs/Web/CSS) [@ 規則](/zh-TW/docs/Web/CSS/At-rule)允許指定用於顯示文字之自定義字型，該字型可以從遠端伺服器或用戶自己電腦上安裝的本地字型載入。

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
  - : 定義字型的上升度量。
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : 定義字型的下降度量。
- {{cssxref("@font-face/font-display", "font-display")}}
  - : 根據字型是否及何時被下載並準備使用，決定字型的顯示方式。
- {{cssxref("@font-face/font-family", "font-family")}}
  - : 指定將用作字型屬性的字型值的名稱。
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : {{cssxref("font-stretch")}} 值，接受兩個值來指定 font-face 支援的範圍，例如 `font-stretch: 50% 200%;`。
- {{cssxref("@font-face/font-style", "font-style")}}
  - : {{cssxref("font-style")}} 值， 接受兩個值來指定 font-face 支援的範圍，例如 `font-style: oblique 20deg 50deg;`。
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : {{cssxref("font-weight")}} 值，接受兩個值來指定 font-face 支援的範圍，例如 `font-weight: 100 400;`。

    > [!NOTE]
    > font-variant 描述符已於 2018 年從規範中刪除。 {{cssxref("font-variant")}} 值屬性仍受支援，但沒有對應的描述符。

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : 允許控制 OpenType 字型中的進階排版功能。
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : 透過指定要變更的功能的四個字母軸名稱及其變更值，允許對 OpenType 或 TrueType 字型變更進行低階控制。
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : 定義字型的行距。
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : 定義與此字型關聯的字形輪廓和規格的乘數。這使得在以相同字型大小渲染時更容易配合各種字型的設計。
- {{cssxref("@font-face/src", "src")}}
  - : 指定對字型資源的引用，包括有關字型格式和技術的提示。`@font-face` 規則必須有效。
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : 字型中要使用的 Unicode 碼位的範圍。

## 描述

在使用 `url()` 和 `local()` 函數時，通常會將兩者一起使用，如此一來，若用戶的裝置上有安裝字型，就會使用本地字型，若沒有則會下載字型資源來使用。

如果提供了 `local()` 函數，並指定了一個字型名稱來尋找用戶裝置上的字型，如果{{Glossary("user agent", "使用者代理")}}找到了匹配的字型，就會使用這個本地字型。否則，將會下載並使用 `url()` 函數指定的字型資源。

瀏覽器會按照聲明列表的順序嘗試加載資源，因此通常應該將 `local()` 寫在 `url()` 之前。兩個函數都是選擇性的，所以只包含一個或多個 `local()` 而沒有 `url()` 的規則塊也是可以的。如果需要更具體的字型格式（使用 `format()` 或 `tech()` 值），應該將這些更具體的版本列在沒有這些值的版本之前，因為較不具體的變體會先被嘗試並使用。

透過允許自定義字型，`@font-face` 可以設計內容而不必局限於所謂的「web-safe」字型（即那些非常常用、被認為是普遍可用的字型）。指定本地安裝的字型名稱以尋找和使用，使得可以在不依賴網路連接的情況下自定義字型而非使用基本字型。

> [!NOTE]
> 在舊版瀏覽器上加載字型的回退策略描述在 [`src` 描述符頁面](/zh-TW/docs/Web/CSS/@font-face/src#指定舊版瀏覽器的後備方案)。

`@font-face` 不僅可以在 CSS 的頂層使用，還可以在任何 [CSS 條件群組 @ 規則](/zh-TW/docs/Web/CSS/CSS_conditional_rules#at_規則)內使用。

### 字型 MIME 類型

| 格式                 | MIME 類型    |
| -------------------- | ------------ |
| TrueType             | `font/ttf`   |
| OpenType             | `font/otf`   |
| Web 開放字型格式     | `font/woff`  |
| Web 開放字型格式 2.0 | `font/woff2` |

### 備註

- Web 字型受到相同網域的限制（字型檔案必須與使用它們的頁面位於相同網域），除非使用 [HTTP 存取控制](/zh-TW/docs/Web/HTTP/CORS)來放寬此限制。
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

下面這個範例會套用使用者本地的「Helvetica Neue Bold」字型，只有當使用者未安裝該字型（兩種名稱都試過了），才會下載「MgOpenModernaBold.ttf」字型：

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
- [使用 @font-face 的漂亮字型](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
