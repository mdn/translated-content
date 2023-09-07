---
title: font-family
slug: Web/CSS/@font-face/font-family
---

{{CSSRef}}

CSS дескриптор **`font-family`** позволяет авторам указывать font family для шрифта, указанного в правиле {{cssxref("@font-face")}}.

{{cssinfo}}

## Синтаксис

```css
/* <string> значения */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> значение */
font-family: examplefont;
```

### Значения

- `<family-name>`
  - : Указывает имя font family.

### Синтаксис

{{csssyntax}}

## Примеры

```css
@font-face {
  font-family: examplefont;
  src: url("examplefont.ttf");
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
