---
title: font-weight
slug: Web/CSS/font-weight
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/font-weight
---
{{ CSSRef() }}

## Podsumowanie

Własność {{ Cssxref("font-weight") }} określa wagę lub grubość czcionki.

{{cssinfo}}

## Składnia

`font-weight:` `normal` | `bold` | `bolder` | `lighter` | `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900` | {{ Cssxref("inherit") }}

### Wartości

- normal
  - : Normalna waga czcionki. Identycznie jak 400.
- bold
  - : Pogrubiona czcionka. Identycznie jak 700.
- lighter
  - : Waga czcionki lżejsza o jedną wartość niż w elemencie rodzica (spośród dostępnych wag czcionki)
- bolder
  - : Waga czcionki cięższa o jedną wartość niż w elemencie rodzica (spośród dostępnych wag czcionki)
- 100, 200, 300, 400, 500, 600, 700, 800, 900
  - : Liczbowe wartość wag czcionek dla czcionek, które mają więcej niż tylko waga normalna i pogrubiona. Jeśli wybrana waga jest niedostępna, wtedy dla wartości 600-900 używana jest najbliższa dostępna większa wagi (lub jeśli takiej nie ma, najbliższa dostępna lżejsza waga), a dla wartości 100-500 używana jest najbliższa dostępna mniejsza waga (lub jeśli takiej nie ma, najbliższa dostępna większa waga). Oznacza to, że dla czcionek, które mają tylko wagi normalną i pogrubioną, wartości 100-500 stają się wagą normalną, a 600-900 pogrubioną.

## Przykłady

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the
  bank, and of having nothing to do: once or twice she had peeped into the
  book her sister was reading, but it had no pictures or conversations in
  it, 'and what is the use of a book,' thought Alice 'without pictures or
  conversations?'
</p>

<div>I'm heavy<br/>
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps darker than
   normal but less than a standard bold. */
div {
 font-weight: 600;
}

/* Sets text enclosed within span tag
   to be one step lighter than the parent. */
span {
  font-weight: lighter;
}
```

### Result

{{EmbedLiveSample("Przykłady","400","300")}}

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#font-weight)
- [CSS 2.1](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)
- [css3-fonts](http://www.w3.org/TR/css3-fonts/#font-weight)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 3                |
| Netscape          | 4                |
| Opera             | 3.5              |
