---
title: ID-Selektoren
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - CSS Referenz
  - Einsteiger
  - Selektoren
translation_of: Web/CSS/ID_selectors
original_slug: Web/CSS/ID-Selektoren
---
{{CSSRef("Selectors")}}

In einem HTML Dokument matchen CSS ID-Selektoren ein Element basierend auf den Inhalten des {{htmlattrxref("id")}} Attributs des Elements, welches exakt dem Wert des angegebenen Selektors entsprechen muss.

## Syntax

    #id_value { Stileigenschaften }

Beachte, dass dies äquivalent zu folgendem {{cssxref("Attributselektoren", "Attributselektor")}} ist:

    [id=id_value] { Stileigenschaften }

## Beispiel

```css
span#identified {
  background-color: DodgerBlue;
}
```

```html
<span id="identified">Hier ist ein Span mit Text.</span>
<span>Hier ist ein weiterer.</span>
```

{{EmbedLiveSample("Beispiel", 200, 50)}}

## Spezifikationen

| Spezifikation                                                                                | Status                               | Kommentar                |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS4 Selectors")}} |                          |
| {{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS3 Selectors")}} |                          |
| {{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}} | {{Spec2("CSS2.1")}}             |                          |
| {{SpecName("CSS1", "#id-as-selector", "ID selectors")}}                     | {{Spec2("CSS1")}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.id")}}
