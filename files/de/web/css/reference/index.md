---
title: CSS Referenz
slug: Web/CSS/Reference
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/Reference
original_slug: Web/CSS/CSS_Referenz
---
{{CSSRef}}

Verwende diese **CSS-Referenz** für einen [alphabetischen Index](#Index) aller Standard-[CSS](/de/docs/Web/CSS)-Eigenschaften, [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes), [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), [Datentypen](/de/docs/Web/CSS/CSS_Typen) und [@-Regeln](/de/docs/Web/CSS/At-rule). Du kannst eine Liste aller [Selektoren](#Selektoren) und eine Liste aller [Konzepte](#Konzepte) ansehen. Dies beinhaltet auch eine kurze Referenz zu [DOM-CSS / CSSOM](#DOM-CSS_CSSOM).

## Grundlegende Syntax von Regeln

### Syntax von Stilregeln

    selektorliste {
      eigenschaft: wert;
      [weitere eigenschaft:wert; Paare]
    }

    ... wobei selektorliste: selektor[:pseudo-klasse] [::pseudo-element] [, weitere selektorlisten]

    Siehe Listen aller Selektoren, Pseudo-Klassen und Pseudo-Elemente weiter unten.

#### _Beispiele für Stilregeln_

```css

strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

_Für eine Einführung in die Syntax von CSS-Selektoren auf Anfängerstufe, siehe [diese Anleitung](/de/docs/Learn/CSS/Introduction_to_CSS/Selectors). Beachte, dass jeder [CSS-Syntax](/de/docs/Web/CSS/Syntax)-Fehler in einer Regeldefinition die gesamte Regel ungültig macht. Ungültige Regeln werden vom Browser ignoriert. Beachte dass CSS-Regeldefinitionen vollständig (ASCII) [text-basiert](https://www.w3.org/TR/css-syntax-3/#intro) sind, wohingegegen DOM-CSS / CSSOM (das Regel-Verwaltungssystem) [objekt-basiert](https://www.w3.org/TR/cssom/#introduction) ist._

### _Syntax von @-Regeln_

_Da die Struktur von @-Regeln stark variiert, schaue bitte bei [@-Regel](/de/docs/Web/CSS/At-rule) nach, um die Syntax der gewünschten Regel herauszufinden._

## _Index_

> **Note:** **Hinweis:** Die Bezeichnungen der Eigenschaften enthalten **nicht** die [JavaScript-Namen](/de/docs/Web/CSS/CSS_Properties_Reference), wenn sie sich von den CSS-Standardbezeichnern unterscheiden.

_{{CSS_Ref}}_

## _Selektoren_

### [Einfache Selektoren](/de/docs/Web/CSS/CSS_Selectors#Grundlegende_Selektoren)

- _[Typselektor](/de/docs/Web/CSS/Type_selectors) `Elementname`_
- _[Klassenselektor](/de/docs/Web/CSS/Klassenselektoren) `.klassenname`_
- _[ID-Selektor](/de/docs/Web/CSS/ID-Selektoren) `#idname`_
- _[Universalselektor](/de/docs/Web/CSS/Universal_selectors) `*`_
- _[Attributselektoren](/de/docs/Web/CSS/Attributselektoren) `[attribute="value"]` etc._

### [Kombinatoren](/de/docs/Web/CSS/CSS_Selectors#Kombinatoren)

- _[Nachfahrkombinator](/de/CSS/Nachfahrkombinator) `A B`_
- _[Kindkombinator](/de/CSS/Kindkombinator) `A > B`_
- _[direkter Nachbarkombinator](/de/CSS/direkter_Nachbarkombinator) `A + B`_
- _[indirekter Nachbarkombinator](/de/CSS/indirekter_Nachbarkombinator) `A ~ B`_
- _[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)_
- _[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)_

### [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)

- {{ Cssxref(":active") }}
- {{cssxref(':any')}}
- {{cssxref(':any-link')}}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":defined") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":focus-visible") }}
- {{ Cssxref(":host") }}
- {{ Cssxref(":host()") }}
- {{ Cssxref(":host-context()") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

### [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

- {{ Cssxref("::after") }}
- {{ Cssxref("::backdrop") }}
- {{ Cssxref("::before") }}
- {{ Cssxref("::cue") }}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::grammar-error") }} {{experimental_inline}}
- {{ Cssxref("::marker") }} {{experimental_inline}}
- {{ Cssxref("::placeholder") }} {{experimental_inline}}
- {{ Cssxref("::selection") }}
- {{ Cssxref("::spelling-error") }} {{experimental_inline}}

> **Note:** **Siehe auch:** Eine vollständige [Liste der Selektoren](https://www.w3.org/TR/selectors/#selectors) in der Selectors Level 3 Spezifikation.

## Konzepte

### Syntax & Semantik

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [@-Regeln](/de/docs/Web/CSS/At-rule)
- [Kaskaden](/de/docs/Web/CSS/Cascade)
- [Kommentare](/de/CSS/Kommentare)
- [Deskriptor](</de/docs/Glossary/Descriptor_(CSS)>)
- [Vererbung](/de/docs/Web/CSS/inheritance)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Spezifität](/de/CSS/Spezifität)
- [Wert-Definition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)

### Werte

- [tatsächlicher Wert](/de/docs/Web/CSS/actual_value)
- [berechneter Wert](/de/docs/Web/CSS/computed_value)
- [initialer Wert](/de/docs/Web/CSS/initial_value)
- [aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [angegebener Wert](/de/docs/Web/CSS/specified_value)
- [verwendeter Wert](/de/docs/Web/CSS/used_value)

### Layout

- [Block-Formatierung-Kontext](/de/docs/Web/Guide/CSS/Block_formatting_context)
- [Boxmodell](/de/CSS/Boxmodell)
- [Beinhaltender Block](/de/docs/Web/CSS/All_About_The_Containing_Block)
- [Layout-Modus](/de/docs/Web/CSS/Layout_mode)
- [Margin-Collapsing](/de/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Stapel-Kontext](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Visuelles Formatierungsmodel](/de/docs/Web/Guide/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Wichtigste Objekttypen

- document.[styleSheets](/de/docs/Web/API/Document/styleSheets)
- styleSheets\[i].[cssRules](/de/docs/Web/API/CSSRuleList)
- cssRules\[i].[cssText](/de/docs/Web/API/CSSRule/cssText) (selector & style)
- cssRules\[i].[selectorText](/de/docs/Web/API/CSSStyleRule/selectorText)
- elem.[style](/de/docs/Web/API/HTMLElement/style)
- elem.style.[cssText](/de/docs/Web/API/CSSStyleDeclaration/cssText) (just style)
- elem.[className](/de/docs/Web/API/Element/className)
- elem.[classList](/de/docs/Web/API/Element/classList)

### Wichtige Methoden

- {{domxref("CSSStyleSheet.insertRule")}}
- {{domxref("CSSStyleSheet.deleteRule")}}
