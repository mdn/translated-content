---
title: '<td>: The Table Data Cell element'
slug: Web/HTML/Element/td
translation_of: Web/HTML/Element/td
---
{{HTMLRef}}

The **HTML `<td>` Element** definiert eine Zelle in einer Datentabelle. Es ist Teil des _table model_.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

| [Content categories](/de/docs/Web/HTML/Content_categories) | Sectioning root.                                                                                                                                                                                                                         |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                           | [Flow content](/de/docs/HTML/Content_categories#Flow_content).                                                                                                                                                                           |
| Tag Wegfall                                                | Der Start-Tag ist erforderlich. Der Ende Tag kann weggelassen werden, wenn direkt ein {{HTMLElement("th")}} oder ein {{HTMLElement("td")}} folgt oder wenn in seinem 'parent element' keine weiteren Daten enthalten sind. |
| Erlaubte parents                                           | Ein {{HTMLElement("tr")}} Element.                                                                                                                                                                                                |
| Erlaubte ARIA Funktionen                                   | Alle                                                                                                                                                                                                                                     |
| DOM Interface                                              | {{domxref("HTMLTableDataCellElement")}}                                                                                                                                                                                     |

## Eigenschaften

Dieses Element enthält die [global attributes](/de/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("abbr")}} {{obsolete_inline("html5")}}
  - : Dieses Attribut enthält eine Kurzbeschreibung des Inhalts der Zelle. Einige user-agents, wie z.B Sparchausgabe Apps, können diese Beschreibung vor dem Inhalt selbst anzeigen.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird. Alternativ können Sie die Kurzbeschreibung in die Zelle selbst stellen und den vollständigen Inhalt in die **title**-Eigenschaft schreiben.
- {{htmlattrdef("align")}} {{obsolete_inline("html5")}}
  - : Diese Listen Attribute legen fest, we der Zellinhalt waagerecht ausgerichtet wird. Mögliche Werte sind:\* `left`: Der Inhalt wird links in der Zelle ausgerichtet.
    - `center`: Der inhalt wird innerhalb der Zelle zentriert.
    - `right`: Der Inhalt wird innerhalb der Zelle rechts ausgerichtet.
    - `justify` (nur bei Text): Der Inhalt wird über die gesamte Breite der Zelle gedehnt.
    - `char` (nur bei Text): Der Inhalt wird mit minimalem Offset an einem Zeichen innerhalb der des `<th>` Elementes ausgerichtet. Das Zeichen wird durch die {{htmlattrxref("char", "td")}} und {{htmlattrxref("charoff", "td")}} definiert. {{unimplemented_inline(2212)}}.Der Default Wert, wenn das Attribut nicht spezifiziert wird ist `left`.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird.\* Um den gleichen Effekt wie mit den `left`, `center`, `right` oder `justify` Werten zu erhalten, verwenden Sie die CSS {{cssxref("text-align")}} Eigenschaft für dieses Element.
      >
      > - Um den gleichen Effekt wie bei dem `char` Wert zu erzielen, geben Sie der {{cssxref("text-align")}} Eigenschaft die gleichen Werte, die Sie auch für das {{htmlattrxref("char", "td")}} Attribut verwendet hätten.
      >   {{unimplemented_inline}} in CSS3.
      >
- {{htmlattrdef("axis")}} {{obsolete_inline("html5")}}
  - : Dieses Attribute enthält eine Liste von strings, durch Leerzeichen getrennt. Jeder String ist die `id` einer Gruppe von Zellen, die diesen Text als Header enthalten.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird.
- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}
  - | : Dieses Attribut definiert die Hintergrundfarbe jeder Zelle in einer Spalte. Es enthält einen 6-stelligen Hexadezimal-Code in [sRGB](https://www.w3.org/Graphics/Color/sRGB) definiert mit einem vorangestellten '#'. Für dieses Attribut sind die folgenden 16 Werte mit string-Werten vordefiniert: |                       | `black` = "#000000" |                      | `green` = "#008000"                                                                                                                                                                                                                                                                                                                                                                                               |
    | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |                                                                                                                                                                                                                                                                                                        | `silver` = "#C0C0C0"  |                     | `lime` = "#00FF00"   |
    |                                                                                                                                                                                                                                                                                                        | `gray` = "#808080"    |                     | `olive` = "#808000"  |
    |                                                                                                                                                                                                                                                                                                        | `white` = "#FFFFFF"   |                     | `yellow` = "#FFFF00" |
    |                                                                                                                                                                                                                                                                                                        | `maroon` = "#800000"  |                     | `navy` = "#000080"   |
    |                                                                                                                                                                                                                                                                                                        | `red` = "#FF0000"     |                     | `blue` = "#0000FF"   |
    |                                                                                                                                                                                                                                                                                                        | `purple` = "#800080"  |                     | `teal` = "#008080"   |
    |                                                                                                                                                                                                                                                                                                        | `fuchsia` = "#FF00FF" |                     | `aqua` = "#00FFFF"   | > **Hinweis:** Verwnden Sie dieses Attribut nicht, da es kein Standard ist und nur in einigen Versionen des Microsoft Internet Explorers implementiert ist: Das {{HTMLElement("td")}} Element sollte mittels [CSS](/de/docs/CSS) formatiert werden Um den gleichen Effekt zu erhalten verwenden Sie stattdessen die {{cssxref("background-color")}} Eigenschaft in [CSS](/de/docs/CSS). |

- {{htmlattrdef("char")}} {{obsolete_inline("html5")}}
  - : Der Inhalt der Zelle wird an einem Zeichen ausgerichtet. Typische Zeichen sind ein (.) oder (,) um Währungswerte auszurichten. Wenn {{htmlattrxref("align", "td")}} nicht als `char`, gesetzt ist, wird dieses Attribute ignoriert> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird. Um den gleichen Effekt zu erzielen können Sie das Zeichen auch als ersten Wert der {{cssxref("text-align")}} Eigenschaft definieren.
    > {{unimplemented_inline}} in CSS3.
- {{htmlattrdef("charoff")}} {{obsolete_inline("html5")}}
  - : Dieses Attribut wird verwendet um die Daten einer Spalte rechts von dem Zeichen auszurichten, das durch das **char** Attribut spezifiziert wurde. Sein Wert spezifiziert die Anzahl der Zeichen um die die Daten nach rechts verschoben werden.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird.
- {{htmlattrdef("colspan")}}
  - : Dieses Attribut enhält eine nicht negative ganze Zahl, die festlegt über wieviele Spalten einer Tabelle sich diese Zelle erstreckt. Der Default-Wert ist `1`. Größere Werte als 1000 werden nicht akzeptiert und auf den Default-Wert zurückgesetzt (1).
- {{htmlattrdef("headers")}}
  - : Diese Attribut enthält eine durch Leerzeichen getrennte Liste von Strings, von denen jeder mit dem **id** Attribut des {{HTMLElement("th")}} Elementes korrespondiert.
- {{htmlattrdef("height")}} {{Deprecated_inline("html 4")}}, {{obsolete_inline("html5")}}
  - : Dieses Attribut wird verwendet um die Höhe einer Zelle festzulegen.> **Hinweis:** DVerwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird. Verwenden Sie stattdessen die {{cssxref("height")}} Eigenschaft.
- {{htmlattrdef("rowspan")}}
  - : Dieses Attribut enthält einen nicht negativen ganzahligen Integer Wert, der festlegt, über wieviele Reihen sich eine Zelle erstreckt. Der Default-Wert ist `1`; wenn der Wert auf `0` gesetzt wird, erstreckt sich die Größe der Zelle über den Rest der Tabelle zu der die Zelle gehört auch wenn die Attribute ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}), implizit definiert sind. Werte über 65534 werden auf 65534 gesetzt.
- {{htmlattrdef("scope")}} {{obsolete_inline("html5")}}
  - : Dieses Listen Attribut definiert die Zellen, auf die sich das Header-Element bezieht, dass in dem {{HTMLElement("th")}} Element, definiert wurde.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird. Verwenden Sie diesesAttributenur mit dem {{HTMLElement("th")}} Element um eine Reihe oder eine Spalte für die dieses der Header ist zu definieren.
- {{htmlattrdef("valign")}} {{obsolete_inline("html5")}}
  - : Dieses Attribut legt fest, wie ein Text vertikal innerhalb einer Zelle ausgerichtet ist. Mögliche Werte für dieses Attribut sind:\* `baseline`: Positioniert den Text mit der [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) der Zeichen am unteren Rand der aus und nicht mit dem unteren Ende der Zeichen. Gibt es keine Zeichen mit Anhängen unterhalb der Zeichengrundlinie, so hat dieser Wert den gleichen Effekt wie `bottom`.
    - `bottom`: Positioniert den Text am unteren Rand in der Zelle
    - `middle`: Zentriert den Text vertikal in der Zelle.
    - and `top`: Positioniert den Text am oberen Rand der Zelle.> **Hinweis:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird.
      > Verwenden Sie stattdessen die CSS {{cssxref("vertical-align")}} Eigenschaft.
- {{htmlattrdef("width")}} {{Deprecated_inline("html 4")}}, {{obsolete_inline("html5")}}
  - : Dieses Attribut defieniert die benötigte Breite der Zelle. Zusätzlicher Platz kann mit Hilfe der [cellspacing](/de/docs/Web/API/HTMLTableElement/cellSpacing) and [cellpadding](/de/docs/Web/API/HTMLTableElement/cellPadding) Eigenschaftenerreicht werden. Mit Hilfe des {{HTMLElement("col")}} Elementes kann ebenfalls zusätzliche Breite erzeugt werden. Allerdings wird eine Zelle, die zu schmal für die passende Darstellung ihres Inhaltes, bei der Darstellung automatisch auf die richtige Breite erweitert.> **Note:** Verwenden Sie diese Eigenschaft nicht mehr, da sie von dem neuesten Standard nicht mehr unterstützt wird.
    > Verwenden Sie stattdessen die CSS {{cssxref("width")}} Eigenschaft.

## Beispiele

Siehe {{HTMLElement("table")}} für Beispiele für `<td>`.

## Spezifikationen

| Specification                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG','tables.html#the-td-element','td element')}}     | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C','tabular-data.html#the-td-element','td element')}} | {{Spec2('HTML5 W3C')}}     |         |

## Browser Kompatibilität

{{Compat("html.elements.td")}}

## Sieh auch

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.
