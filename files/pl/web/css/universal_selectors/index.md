---
title: Selektor uniwersalny
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Selektory
translation_of: Web/CSS/Universal_selectors
original_slug: Web/CSS/Selektor_uniwersalny
---
{{CSSRef}}

**Selektor uniwersalny** (`*`) dopasowuje elementy wszystkich typów.

```css
/* Wybierz wszystkie elementy */
* {
  color: green;
}
```

Począwszy od CSS3, gwiazdka może być używana w połączeniu z {{cssxref("CSS_Namespaces", "namespaces")}}:

- `ns|*` - dopasowuje wszystkie elementy w przestrzeni nazw _ns_
- `*|*` - dopasowuje wszystkie elementy
- `|*` - dopasowuje wszystkie elementy bez zdefiniowanej przestrzeni nazw

## Składnia

    * { własności }

Gwiazdka jest opcjonalna w przypadku prostych selektorów. Np.: `*.warning` i `.warning` są równoważne.

## Przykłady

### CSS

```css
* [lang^=pl] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left
}

/* automatycznie czyści opływanie dla rodzeństwa znajdującego się bezpośrednio po elemencie z klasą .floating */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="pl">Zielony span</span> w czerwonym akapicie.
</p>
<p id="maincontent" lang="pl">
  <span class="warning">czerwony span</span> w zielonym akapicie.
</p>
```

### Rezultat

{{EmbedLiveSample('Przykłady')}}

## Specyfikacje

| Specyfikacja                                                                                                 | Status                               | Komentarz                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#the-universal-selector', 'universal selector')}}     | {{Spec2('CSS4 Selectors')}} | No changes                                                                                                       |
| {{SpecName('CSS3 Selectors', '#universal-selector', 'universal selector')}}         | {{Spec2('CSS3 Selectors')}} | Defines behavior regarding namespaces and adds hint that omitting the selector is allowed within pseudo-elements |
| {{SpecName('CSS2.1', 'selector.html#universal-selector', 'universal selector')}} | {{Spec2('CSS2.1')}}             | Initial definition                                                                                               |

## Browser compatibility

{{Compat("css.selectors.universal")}}
