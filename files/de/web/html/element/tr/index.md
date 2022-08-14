---
title: <tr>
slug: Web/HTML/Element/tr
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
translation_of: Web/HTML/Element/tr
---
## Übersicht

Das HTML Element _table row_ `<tr>` definiert eine Reihe, bestehend aus einzelnen Zellen, in einer Tabelle. Diese können aus {{HTMLElement("td")}} und {{HTMLElement("th")}} Elementen bestehen.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content categories") | Keine                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | 0 oder mehrere {{HTMLElement("td")}} oder {{HTMLElement("th")}} Elemente, oder eine Mischung aus diesen                                                                                                                                                                                                                         |
| Tag Wegfall                                                                     | Start-Tag ist ein Muss. Ende-Tag kann weggelassen werden, wenn das {{HTMLElement("tr")}} Element direkt gefolgt wird von einem {{HTMLElement("tr")}} Element, oder wenn die Haupttabellengruppen ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}}) keinen Inhalt haben |
| Erlaubte Elternelemente                                                         | {{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} oder {{HTMLElement("tfoot")}} Element                                                                                                                                                                                            |
| Erlaubte ARIA-Rollen                                                            | alle                                                                                                                                                                                                                                                                                                                                          |
| DOM interface                                                                   | {{domxref("HTMLTableRowElement")}}                                                                                                                                                                                                                                                                                                  |
| Verweis-Dokument                                                                | [HTML, "The `tr` element"](http://www.whatwg.org/html/#the-tr-element)                                                                                                                                                                                                                                                                        |

## Attribute

Dieses Element beinhaltet [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("align")}} {{deprecatedGeneric("inline","html4.01")}}, {{obsoleteGeneric("inline","html5")}}
  - : Dieses aufgezählte Attribut spezifiziert wie die horizontale Ausrichtung jeden Zelleninhalts behandelt wird. Mögliche Werte sind:\* `left`, Ausrichtung des Inhalts am linken Rand der Zelle
    - `center`, Zentrierung des Inhalts innerhalb der Zelle
    - `right`, Ausrichtung des Inhalts am rechten Rand der Zelle
    - `justify`, Erweiterung der Leerstellen im textuellen Inhalt so dass der Inhalt die gesamte Breite der Zelle besetzt (Blocksatz)
    - `char`, Ausrichtung des textuellen Inhalts an einem speziellen Charakter mit einem minimalen Abstand, definiert durch {{htmlattrxref("char", "tr")}} und {{htmlattrxref("charoff", "tr")}} Attribute {{unimplemented_inline("2212")}}Wenn dieses Attribut nicht gesetzt wird, dann wird der Wert des Elternknotens geerbt.> **Note:** **Bemerkung:** Benutzen Sie dieses Attribut nicht, da es nicht mehr im aktuellen Standard unterstützt wird.\* Um denselben Effekt zu erhalten wie `left`, `center`, `right` oder `justify`, benutzen Sie die CSS {{cssxref("text-align")}} Eigenschaft.
      >
      > - Um denselben Effekt zu erhalten wie `char`, in CSS3, können Sie den Wert der Eigenschaft {{htmlattrxref("char", "tr")}} als Wert der {{cssxref("text-align")}} Eigenschaft benutzen {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{deprecatedGeneric("inline","html4.01")}}, {{obsoleteGeneric("inline","html5")}}
  - : Dieses Attribut definiert die Hintergrundfarbe jeder Zelle in einer Zeile. Es kann entweder ein [#RRGGBB Code](/de/docs/CSS/color_value#HTML.2fSVG.2fX11.c2.a0_Color_Keywords "CSS/color value#HTML.2fSVG.2fX11.c2.a0 Color Keywords") oder ein [SVG Farbschlüssel](/#HTML.2fSVG.2fX11.c2.a0_Color_Keywords "#HTML.2fSVG.2fX11.c2.a0 Color Keywords") sein.> **Note:** **Gebrauchsanweisung:** Das {{HTMLElement("tr")}} Element sollte mit [CSS](/de/docs/CSS "CSS") formatiert werden. Um denselben Effekt wie das **bgcolor** Attribut zu erreichen, benutzen Sie die [CSS](/de/docs/CSS "CSS") Eigenschaft {{cssxref("background-color")}}.

- {{htmlattrdef("char")}} {{deprecatedGeneric("inline","html4.01")}}, {{obsoleteGeneric("inline","html5")}}
  - : Dieses Attribut wird benutzt um die Charaktere einer Zelle zu einer Kolonne auszurichten. Typische Werte beinhalten einen Punkt (.) wenn Zahlen oder Währungswerte ausgerichtet werden sollen. Wenn {{htmlattrxref("align", "tr")}} nicht mit `char` gesetzt ist, so wird dieses Attribut ignoriert.> **Note:** **Bemerkung:** Benutzen Sie dieses Attribut nicht, da es nicht mehr im aktuellen Standard unterstützt wird. Um denselben Effekt wie {{htmlattrxref("char", "tr")}}, in CSS3 zu erreichen, können Sie den Zeichensatz benutzen, welcher das {{htmlattrxref("char", "tr")}} Attribut als Wert der {{cssxref("text-align")}} Eigenschaft enthält {{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{deprecatedGeneric("inline","html4.01")}}, {{obsoleteGeneric("inline","html5")}}
  - : Dieses Attribut wird benutzt um die Anzahl der Charaktere zu bestimmen, welche als Abstand für den Kolonneninhalt genommen und durch das **char** Attribut definiert wird.> **Note:** **Bemerkung:** Benutzen Sie dieses Attribut nicht, da es nicht mehr im aktuellen Standard unterstützt wird.

- {{htmlattrdef("valign")}} {{deprecatedGeneric("inline","html4.01")}}, {{obsoleteGeneric("inline","html5")}}
  - : Dieses Attribut definiert die vertikale Ausrichtung des Textes in jeder Zeile. Mögliche Werte für dieses Attribut sind:\* `baseline`, platziert den Text so nah wie möglich an den unteren Rand der Zelle, aber richtet sie an der [Basislinie](http://en.wikipedia.org/wiki/Baseline_%28typography%29) der Charaktere aus anstatt am unteren Rand derselben. Sind alle Charaktere von derselben Grösse, so hat es denselben Effekt wie `bottom`.
    - `bottom`, platziert den Text so nah wie möglich an den unteren Rand der Zelle;
    - `middle`, zentriert den Text innerhalb der Zelle;
    - und `top`, platziert den Text so nah wie möglich an den oberen Rand der Zelle.> **Note:**Benutzen Sie dieses Attribut nicht, da es nicht mehr im aktuellen Standard unterstützt wird; benutzen Sie die CSS {{cssxref("vertical-align")}} Eigenschaft.

## Beispiele

Siehe {{HTMLElement("table")}} für Beispiele von `<tr>`.

## Browserkompatibilität

{{Compat}}

\[1] Siehe {{bug(915)}}.

\[2] Siehe {{bug(2212)}}.

## Siehe auch

- Andere Tabellen-bezogene HTML Elemente: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}};
- CSS Eigenschaften und Pseudo-Klassen die eventuel wichtig sind für die Formatierung des `<tr>` Elementes:

  - Die {{cssxref(":nth-child")}} Pseudo-Klasse für die Ausrichtung der Zellen ganzer Zeilen und Spalten;
  - Die {{cssxref("text-align")}} Eigenschaft um alle Zelleninhalte auf demselben Charakter auszurichten, wie '.'.<

{{HTMLRef}}
