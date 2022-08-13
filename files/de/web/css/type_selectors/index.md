---
title: Typselektoren
slug: Web/CSS/Type_selectors
tags:
  - Anfänger
  - CSS
  - CSS Referenz
  - Selektoren
translation_of: Web/CSS/Type_selectors
---
{{CSSRef("Selectors")}}

## Übersicht

CSS Typselektoren matchen Elemente über den Knotennamen. Alleine verwendet markiert ein Typselektor für einen bestimmten Knotennamen daher alle Elemente dieses Typs - d. h. mit diesem Knotennamen - innerhalb des Dokuments.

## Syntax

    element { Stileigenschaften }

## Beispiel

### CSS

```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```

### HTML

```html
<span>Hier ist ein span mit Text.</span>
<p>Hier ist ein p mit Text.</p>
```

### Ergebnis

{{EmbedLiveSample('Beispiel', 200, 100)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                               | Kommentar                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#type-selectors', 'Typselektoren')}}         | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#type-selectors', 'Typselektoren')}}         | {{Spec2('CSS3 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'selector.html#type-selectors', 'Typselektoren')}} | {{Spec2('CSS2.1')}}             |                          |
| {{SpecName('CSS1', '#basic-concepts', 'Typselektoren')}}                     | {{Spec2('CSS1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.type")}}
