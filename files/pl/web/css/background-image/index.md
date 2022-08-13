---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
translation_of: Web/CSS/background-image
---
{{ CSSRef() }}

## Podsumowanie

Własność `background-image` ustawia obrazek tła dla elementu.

{{cssinfo}}

## Składnia

    background-image: uri | none | inherit

### Wartości

- uri
  - : Położenie zasobu obrazka używanego jako obrazek tła.
- none
  - : Używane do wyszczególnienia, że dany element nie powinien mieć obrazka tła.

## Przykłady

Note that the star image is partially transparent and is layered over the cat image.

### HTML

```html
<div>
    <p class="catsandstars">
        This paragraph is full of cats<br />and stars.
    </p>
    <p>This paragraph is not.</p>
    <p class="catsandstars">
        Here are more cats for you.<br />Look at them!
    </p>
    <p>And no more.</p>
</div>
```

### CSS

```css
pre, p {
    font-size: 1.5em;
    color: #FE7F88;
    background-color: transparent;
}

div {
  background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
}

p {
  background-image: none;
}

.catsandstars {
  background-image:  url("https://mdn.mozillademos.org/files/11991/startransparent.gif"),
                     url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-color: transparent;
}
```

### Result

{{EmbedLiveSample('Przyk%C5%82ady')}}

## Uwagi

Twórcy powinni się upewnić, że określili {{ Cssxref("background-color") }} do użycia w przypadku, jeśli obrazek jest niedostępny. Obrazki tła są wyświetlane nad kolorem tła.

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#background-image)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background-image)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-background-image)

## Zgodność z przeglądarką

| Przeglądarki      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 4                |
| Opera             | 3.5              |
