---
title: Selektory typu
slug: Web/CSS/Type_selectors
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/Type_selectors
original_slug: Web/CSS/Selektory_typu
---
{{CSSRef}}

**Selektory typu** dopasowują wszystkie elementy mające taką samą nazwę jak dany selektor. Własności zostaną zastosowane do każdego elementu danego typu niezależnie od tego, gdzie znajduje się w drzewie dokumentu.

## Składnia

    selektor {własności }

`selektor` jest do dowolnym elementem np. `p`, `div`, `a`, `table`.

## Przykład

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Span z tekstem.</span>
<p>Akapit z tekstem.</p>
<span>Span z większą ilością tekstu.</span>
```

### Rezultat

{{EmbedLiveSample('Przykład', '100%', 150)}}

## Specyfikacje

| Specyfikacja                                                                                             | Status                               | Komentarz          |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('CSS4 Selectors', '#type-selectors', 'Type (tag name) selector')}} | {{Spec2('CSS4 Selectors')}} | No changes         |
| {{SpecName('CSS3 Selectors', '#type-selectors', 'type selectors')}}                 | {{Spec2('CSS3 Selectors')}} | No changes         |
| {{SpecName('CSS2.1', 'selector.html#type-selectors', 'type selectors')}}         | {{Spec2('CSS2.1')}}             |                    |
| {{SpecName('CSS1', '#basic-concepts', 'type selectors')}}                             | {{Spec2('CSS1')}}             | Initial definition |

## Kompatybilność przeglądarek

{{Compat("css.selectors.type")}}
