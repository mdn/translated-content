---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
tags:
  - Accessibility
  - Global attributes
  - HTML
  - Reference
  - a11y
translation_of: Web/HTML/Global_attributes/tabindex
original_slug: Web/HTML/Globale_Attribute/tabindex
---
{{HTMLSidebar("Global_attributes")}}

Das [Globale Attribut](/de/docs/Web/HTML/Global_attributes) **`tabindex`** gibt an, ob sein Element fokussiert werden kann, ob und an welcher Stelle es an der sequentiellen Tastaturnavigation beteiligt ist (normalerweise mit der Tabulatortaste, daher der Name).

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Es akzeptiert einen Integer als Wert der zu unterschiedlichen Ergebnissen führt, abhängig von diesen Werten:

- Ein _negativer Wert_ (normalerweise `tabindex="-1"`) bedeutet, dass das Element fokussierbar, jedoch nicht durch die sequenzielle Tastaturnavigation erreichbar sein sollte. Er ist meistens hilfreich um barrierefreie Widgets mit JavaScript zu erstellen.
- > **Note:** Dies ist hilfreich, wenn Inhalte außerhalb des Bildschirms vorhanden sind, welche zu einem bestimmten Ereignis in Erscheinung treten. Es ist nicht möglich ein Element mit der Tastatur zu fokussieren, das einen negativen `tabindex` hat. Jedoch ist es möglich, es mittels der `focus()` [Methode](/de/docs/Web/API/HTMLElement/focus) aufzurufen.

> **Note:**

- `tabindex="0"` bedeutet, dass das Element mittels der sequenziellen Tastaturnavigation fokussierbar ist, wobei die Aufrufreihenfolge von der Quellreihenfolge des Dokuments definiert ist
- > **Warning:** Die CSS-Positionierung **wirkt sich nicht** auf die Tab-Reihenfolge aus. Es wird sich nur die visuelle Reihenfolge der Elemente ändern. Tab-Reihenfolge entspricht der Quellreihenfolge!

> **Warning:**

- Ein _positiver Wert_ bedeutet, dass das Element in der sequenziellen Tastaturnavigation fokussierbar sein kann, wobei seine Reihenfolge durch den Wert der Zahl definiert wird. `tabindex="4"` würde also vor `tabindex="5"`, aber nach `tabindex="3"` fokussiert werden. Wenn mehrere Elemente den gleichen positiven `tabindex`-Wert haben, folgt ihre Reihenfolge relativ zu ihrer Position in der Dokumentquelle.

  > **Warning:** Vermeiden Sie die Verwendung von `tabindex`-Werten größer als 0. Dies erschwert es Benutzern, die auf assistive Technologie angewiesen sind, durch Seiteninhalte zu Navigieren und sie zu Bedienen.

> **Note:** Es wird nicht empfohlen, den Elementen positive Werte zu geben. Am Ende springt der Fokus zwischen den Elementen und es wird verwirrend, die `tabindex`-Attributwerte einzelner Elemente zu manipulieren. Empfehlenswert ist, sie in einer geeigneten DOM-Sequenz zu schreiben.

Wenn das `tabindex`-Attribut für ein {{htmlelement ("div")}} festgelegt wird, kann der untergeordnete Inhalt nicht mit den Pfeiltasten gescrollt werden. Außer, der `tabindex` wurde für den Inhalt festgelegt. [Folgendes fiddle hilft beim Verstehen der Scrolleffekte des `tabindex`](https://jsfiddle.net/jainakshay/0b2q4Lgv/).

> **Note:** **Hinweis:** Der maximale Wert für `tabindex` ist 32767. Wenn er nicht spezifiziert ist, wird der Standardwert von 0 angenommen.

## Bedenken zur Barrierefreiheit

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit [nichtinteraktiven Inhalten](/de/docs/Web/Guide/HTML/Content_categories#Interactive_content), um Elemente durch die Tastatureingabe interaktiv fokussierbar zu machen, wie etwa zum Beispiel die Verwendung eines {{HTMLElement ("div")}} Elements, um eine Schaltfläche zu erzeugen, anstelle des {{HTMLElement ("button")}} Elements.

Interaktive Komponenten, die mit nichtinteraktiven Elementen erstellt wurden, gelangen nicht in der [accessibility tree](/de/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) für Eingabehilfen aufgeführt. Dadurch wird verhindert, dass assistive Technologien zu ihnen navigieren und sie manipulieren können. Der Inhalt sollte semantisch mit interaktiven Elementen ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) beschrieben werden. Diese Elemente verfügen über integrierte Rollen und Zustände, die den Status der Zugänglichkeit mitteilen, die andernfalls durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Verwenden des tabindex Attributs | The Paciello Group](https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)

## Spezifikationen

| Spezifikation                                                                                        | Status                           | Kommentar                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#attr-tabindex", "tabindex")}}     | {{Spec2('HTML WHATWG')}} | No change from latest snapshot, {{SpecName('HTML5.1')}}.                                                                                                                                                                 |
| {{SpecName('HTML5.1', "editing.html#the-tabindex-attribute", "tabindex")}} | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}}.                                                                                                                                |
| {{SpecName('HTML5 W3C', "editing.html#attr-tabindex", "tabindex")}}             | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName('HTML WHATWG')}}. From {{SpecName("HTML4.01")}}, the attribute is now supported on all elements (global attributes).                                                                      |
| {{SpecName('HTML4.01', 'interact/forms.html#adef-tabindex', 'tabindex')}}     | {{Spec2('HTML4.01')}}     | Only supported on {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("button")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}. |

## Browserkompatibilität

{{Compat("html.global_attributes.tabindex")}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.tabIndex")}} das dieses Attribut widerspiegelt
- Accessibility-Probleme mit tabindex: siehe [Don’t Use Tabindex Greater than 0](http://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
