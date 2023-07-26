---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

## 摘要

The `@font-face` [CSS](/zh-TW/docs/CSS) [at-rule](/zh-TW/docs/CSS/At-rule) allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, `@font-face` eliminates the need to depend on the limited number of fonts users have installed on their computers. The `@font-face` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/zh-TW/docs/CSS/At-rule#Conditional_Group_Rules).

{{seeCompatTable}}

## 語法

```plain
@font-face {
  [font-family: <family-name>;]?
  [src: [ <uri> [format(<string>#)]? | <font-face-name> ]#;]?
  [unicode-range: <urange>#;]?
  [font-variant: <font-variant>;]?
  [font-feature-settings: normal|<feature-tag-value>#;]?
  [font-stretch: <font-stretch>;]?
  [font-weight: <weight>];
  [font-style: <style>];
}
```

### 參數值

- `<family-name>`
  - : Specifies a font name that will be used as font face value for font properties.
- `<uri>`
  - : URL for the remote font file location, or the name of a font on the user's computer in the form `local("Font Name")`.
- `<font-variant>`
  - : A {{cssxref("font-variant")}} value.
- `<font-stretch>`
  - : A {{cssxref("font-stretch")}} value.
- `<weight>`
  - : A [font weight](/zh-TW/docs/CSS/font-weight) value.
- `<style>`
  - : A [font style](/zh-TW/docs/CSS/font-style) value.

You can specify a font on the user's local computer by name using the `local()` syntax. If that font isn't found, other sources will be tried until one is found.

## 範例

這個範例指定一個可供下載的字型，並套用至 document 的整個 body。

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

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

這個範例會套用使用者本地的 "Helvetica Neue Bold" 字型，只有當使用者未安裝該字型（兩種名稱都試過了），才會下載 "MgOpenModernaBold.ttf" 字型：

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## 注意事項

- In Gecko, web fonts are subject to the same domain restriction (font files must be on the same domain as the page using them), unless [HTTP access controls](/zh-TW/docs/HTTP_access_control) are used to relax this restriction.

  > **備註：** Because there are no defined MIME types for TrueType, OpenType, and Web Open File Format (WOFF) fonts, the MIME type of the file specified is not considered.

- When Gecko displays a page that uses web fonts, it initially displays text using the best CSS fallback font available on the user's computer while it waits for the web font to finish downloading. As each web font finishes downloading, Gecko updates the text that uses that font. This allows the user to read the text on the page more quickly.

## 規格文件

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 詳見

- [About WOFF](/zh-TW/docs/WOFF)
- [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
- [Beautiful fonts with @font-face](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Open Font Library](http://openfontlibrary.org/)
- [Microsoft Developer Network (MSDN) @font-face reference](<http://msdn.microsoft.com/en-us/library/ms530757(VS.85).aspx>)
- [When can I use WOFF?](http://caniuse.com/woff)
- [When can I use SVG Fonts?](http://caniuse.com/svg-fonts)
