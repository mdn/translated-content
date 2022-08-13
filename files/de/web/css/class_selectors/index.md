---
title: Klassenselektoren
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - CSS Referenz
  - Einsteiger
  - Selektoren
translation_of: Web/CSS/Class_selectors
original_slug: Web/CSS/Klassenselektoren
---
{{CSSRef("Selectors")}}

In einem HTML Dokument matchen CSS Klassenselektoren ein Element basierend auf den Inhalten des {{htmlattrxref("class")}} Attributs des Elements. Das class Attribut ist definiert als eine durch Leerzeichen getrennte Liste von Einträgen, wobei einer dieser Einträge exakt auf den Klassennamen des angegebenen Selektors passen muss.

## Syntax

    .classname { style properties }

Beachte, dass dies äquivalent zu folgendem {{cssxref("Attributselektoren", "Attributselektor")}} ist:

    [class~=classname] { style properties }

## Beispiel

### CSS

```css
span.classy {
  background-color: DodgerBlue;
}
```

### HTML

```html
<span class="classy">Hier ist ein Span mit Text.</span>
<span>Hier ist ein weiterer.</span>
```

{{EmbedLiveSample('Beispiel', 200, 50)}}

## Spezifikationen

| Spezifikation                                                                                | Status                               | Kommentar                |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS4 Selectors')}} | Keine Änderungen         |
| {{SpecName('CSS3 Selectors', '#class-html', 'class selectors')}}         | {{Spec2('CSS3 Selectors')}} |                          |
| {{SpecName('CSS2.1', 'selector.html#class-html', 'child selectors')}} | {{Spec2('CSS2.1')}}             |                          |
| {{SpecName('CSS1', '#class-as-selector', 'child selectors')}}             | {{Spec2('CSS1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.class")}}
