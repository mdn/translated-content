---
title: ':empty'
slug: Web/CSS/:empty
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:empty
---
{{CSSRef}}

## Übersicht

Der pseudo-Klassen Selektor `:empty` wählt Elemente aus, die über kein Kindelement verfügen. Ein Inhalt in Form von einem Text wird dabei ebenfalls als ein Kind des Elementes angesehen, Kommentare und sonstige Verarbeitungsanweisungen jedoch nicht.

## Syntax

    <element>:empty { /* Deklarationsblock */ }

## Beispiele

```css
span:empty::before  {
  background-color: lime;
}
```

Die ersten beiden `span` Elemente sind leer, sodass der `:empty` Selektor angewendet wird. Auf die letzten drei trifft das jedoch nicht zu.

```css
<span></span>
<span><!-- Dieses Element wird grün dargestellt --></span>

<span> </span>
<span>Lorem ipsum</span>
<span><strong></strong></span>
```

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#empty-pseudo', ':empty')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#empty-pseudo', ':empty')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.empty")}}
