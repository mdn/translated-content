---
title: z-index
slug: Web/CSS/z-index
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/z-index
---
{{CSSRef}}

Własność **`z-index`** określa kolejność elementów wzdłuż osi z. Kiedy elementy nachodzą na siebie, kolejność osi `z` decyduje, który element przykrywa inny. Element z większym indeksem `z` zazwyczaj przykrywa element z mniejszym.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

- {{ Xref_cssinitial() }}: {{ Cssxref("auto") }}
- Stosowana do: {{ Cssxref("position", "elementów pozycjonowanych") }}
- {{ Xref_cssinherited() }}: nie
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jako określona

## Składnia

```css
/* Właściwość wartość */
z-index: auto;

/* wartość jako liczba */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* wartość ujemna w celu zmniejszenia priorytetu */

/* globalne wartości */
z-index: inherit;
z-index: initial;
z-index: unset;
```

Wartość `z-index` jest określona słowem kluczowym [`auto`](#auto) lub jako [`<liczba>`](#<liczba>).

### Wartości

- auto
  - : Element jest rysowany w takiej samej kolejności względem osi z jak element z `z-index: 0`._Nie_ tworzy nowego kontekstu nakładania.
- `<liczba>`
  - : Element jest rysowany w podanej kolejności względem osi z. Tworzy również nowy kontekst nakładania, co oznacza, że wszystkie jego elementy potomne również są rysowane z takim samym indeksem z. Oznacza to również, że indeksy z elementów potomnych nie są porównywane do indeksów z elementów na zewnątrz danego elementu.

## Przykład

### HTML

```html
<div class="dashed-box">Dashed box
  <span class="gold-box">Gold box</span>
  <span class="green-box">Green box</span>
</div>
```

### CSS

```css
.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

### Wynik

{{ EmbedLiveSample('Examples', '550', '200', '') }}

## Specifikacja

| Specification                                                                                                    | Status                                   | Comment                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'animation behavior for z-index')}} | {{Spec2('CSS3 Transitions')}} | Defines `z-index` as animatable. |
| {{SpecName('CSS2.1', 'visuren.html#z-index', 'z-index')}}                                     | {{Spec2('CSS2.1')}}                 | Initial definition               |

### Zgodność z przeglądarką

{{Compat("css.properties.z-index")}}

### Zobacz także

{{ Cssxref("position") }}

{{ languages( { "en": "en/CSS/z-index", "fr": "fr/CSS/z-index" } ) }}
