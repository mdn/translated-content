---
title: background-attachment
slug: Web/CSS/background-attachment
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
translation_of: Web/CSS/background-attachment
---
{{ CSSRef() }}

## Podsumowanie

Jeśli {{ Cssxref("background-image") }} jest określone, `background-attachment` decyduje, czy położenie danego obrazka jest stałe względem okna, czy też przewija się wraz z zawierającym go blokiem.

{{cssinfo}}

## Składnia

    background-attachment: scroll | fixed | inherit

### Wartości

- scroll
  - : Jeśli zdefiniowane jest `scroll`, obrazek tła będzie się przewijał wewnątrz okna wraz z zawierającym go blokiem.
- fixed
  - : Jeśli zdefiniowane jest `fixed`, obrazek tła nie będzie się przewijał z zawierającym go blokiem, zamiast tego pozostanie nieruchomy względem okna.

## Przykłady

### Simple example

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif");
  background-attachment: fixed;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.
</p>
```

#### Result

{{EmbedLiveSample("Simple_example")}}

### Multiple background image support

This property supports multiple background images. You can specify a different `<attachment>` for each background, separated by commas. Each image is matched with the corresponding attachment type, from first specified to last.

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif"), url("https://mdn.mozillademos.org/files/12059/startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.

  Suddenly she came upon a little three-legged table, all made of solid
  glass; there was nothing on it except a tiny golden key, and Alice's
  first thought was that it might belong to one of the doors of the hall;
  but, alas! either the locks were too large, or the key was too small,
  but at any rate it would not open any of them. However, on the second
  time round, she came upon a low curtain she had not noticed before, and
  behind it was a little door about fifteen inches high: she tried the
  little golden key in the lock, and to her great delight it fitted!
</p>
```

#### Result

{{EmbedLiveSample("Multiple_background_image_support")}}

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#background-attachment)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background-attachment)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-attachment)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 6                |
| Opera             | 3.5              |
