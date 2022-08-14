---
title: <col>
slug: Web/HTML/Element/col
translation_of: Web/HTML/Element/col
---
Das **HTML `<col>`-Element** definiert eine Spalte innerhalb einer Tabelle und wird zum Definieren einer gemeinsamen Semantik für alle gängigen Zellen verwendet. Es wird allgemein innerhalb eines {{HTMLElement("colgroup")}} -Elements gefunden.Auf dieses Element können CSS-Stilvorschriften für das Design von Spalten angewendet werden, aber nur wenige Attribute wirken sich auf die Spalte aus (siehe die CSS 2.1-Spezifikation für eine Liste).

| [Inhaltskategorien](/de/docs/HTML/Content_categories) | Keine                                                                                                                                                                                                                                                |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                      | Keiner, es ist ein {{Glossary("empty element")}}                                                                                                                                                                                          |
| Tag-Auslassung                                        | Das Start-Tag ist obligatorisch, aber da es sich um ein void-Element handelt, ist die Verwendung eines End-Tags nicht zulässig.                                                                                                                      |
| Erlaubte Elternelemente                               | Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Start-Tag nicht obligatorisch ist. Das {{HTMLElement("colgroup")}} darf kein {{htmlattrxref("span", "colgroup")}} - Attribut haben. |
| Zulässige ARIA-Rollen                                 | Keine                                                                                                                                                                                                                                                |
| DOM Schnittstelle                                     | {{domxref("HTMLTableColElement")}}                                                                                                                                                                                                         |

## Attribute

Dieses Element enthält die globalen Attribute

- {{htmlattrdef("align")}} {{Deprecated_inline("html4.01")}}, {{obsolete_inline("html5")}}
  - : Dieses Aufzählungsattribut gibt an, wie die horizontale Ausrichtung der einzelnen Spaltenzelleninhalte behandelt wird. Mögliche Werte sind:\* `left`, richtet den Inhalt links von der Zelle aus
    - `center`, zentriert den Inhalt in der Zelle
    - `right`, richtet den Inhalt auf der rechten Seite der Zelle aus
    - `justify`, einfügen von Leerzeichen in den Textinhalt, so dass der Inhalt in der Zelle gerechtfertigt ist
    - `char`, richtet den Textinhalt auf ein Sonderzeichen mit einem minimalen Offset aus, definiert durch htmlattrxref \<char>, \<col> und htmlattrxref \<charoff>, \<col> Attribute ; nicht implementiert_inline (2212).Wenn dieses Attribut nicht gesetzt ist, wird der Wert von {{htmlattrxref("align", "colgroup")}} des {{HTMLElement("colgroup")}} -Elements geerbt, zu dem dieses `<col>` -Element gehört. Wenn es keine gibt, wird der Wert `left` angenommen.> **Note:**Verwenden Sie dieses Attribut nicht, da es im neuesten Standard veraltet (nicht unterstützt) ist.\* Um den gleichen Effekt zu erzielen wie die Werte `left`, `center`, `right` or `justify`:
      >     *   Versuchen Sie nicht, die Eigenschaft {{cssxref("text-align")}} in einem Selektor festzulegen, der ein {{HTMLElement("col")}} enthält. Da {{HTMLElement("td")}} nicht von `<col>`-Element abhängen, werden sie nicht übernommen..
      >     *   Wenn die Tabelle keines der {{htmlattrxref("colspan", "td")}}-Attribute verwendet, benutzen Sie bitte den `td:nth-child(an+b)`-CSS-Selektoren. Setzen Sie `a` auf null und `b` auf die Position der Tabellenspalte, z.B. `td:nth-child(2) { text-align: right; }`, um die zweite Zeile rechts auszurichten.
      >     *   Wenn die Tabelle ein Attribut {{htmlattrxref("colspan", "td")}} verwendet, kann der Effekt durch Kombination geeigneter CSS-Attributselektoren wie ` [colspan = n]  `erzielt werden, obwohl dies nicht trivial ist.
      >
      > - Um den gleichen Effekt wie den `char`-Wert zu erzielen, können Sie in CSS3 den Wert von {{htmlattrxref("char", "col")}} als Wert von {{cssxref("text-align")}} verwenden.(Inline nicht implementiert) .
- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}
  - | : Dieses Attribut definiert die Hintergrundfarbe jeder Zelle der Spalte. Zugelassene Werte sind jeweils einer der 6-stelligen Hexadezimalcodes, wie in [sRGB](https://www.w3.org/Graphics/Color/sRGB) definiert wurden, immer mit einem '#' vorangestellt. Außerdem kann einer der sechzehn vordefinierten Farbstrings verwendet werden: |                       | `black` = "#000000" |                      | `green` = "#008000"                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    |                                                                                                                                                                                                                                                                                                                                          | `silver` = "#C0C0C0"  |                     | `lime` = "#00FF00"   |
    |                                                                                                                                                                                                                                                                                                                                          | `gray` = "#808080"    |                     | `olive` = "#808000"  |
    |                                                                                                                                                                                                                                                                                                                                          | `white` = "#FFFFFF"   |                     | `yellow` = "#FFFF00" |
    |                                                                                                                                                                                                                                                                                                                                          | `maroon` = "#800000"  |                     | `navy` = "#000080"   |
    |                                                                                                                                                                                                                                                                                                                                          | `red` = "#FF0000"     |                     | `blue` = "#0000FF"   |
    |                                                                                                                                                                                                                                                                                                                                          | `purple` = "#800080"  |                     | `teal` = "#008080"   |
    |                                                                                                                                                                                                                                                                                                                                          | `fuchsia` = "#FF00FF" |                     | `aqua` = "#00FFFF"   | > **Note:** **Hinweis zur Verwendung**: Verwenden Sie dieses Attribut nicht, da es nicht standardgemäß ist und nur in einigen Versionen von Microsoft Internet Explorer implementiert ist: Das Element `<col>` sollte mit CSS formatiert werden. Verwenden Sie die CSS-Eigenschaft {{cssxref("background-color")}} in den relevanten {{HTMLElement("td")}}-Elementen, um einen mit dem `bgcolor`-Attribut vergleichbaren Effekt zu erzielen. |
- {{htmlattrdef("char")}} {{Deprecated_inline("html4.01")}}, {{obsolete_inline("html5")}}

  - : Dieses Attribut wird verwendet, um das Zeichen festzulegen, an dem die Zellen in einer Spalte ausgerichtet werden sollen. Typische Werte hierfür sind ein Punkt (.) Beim Ausrichten von Zahlen oder Geldwerten. Wenn {{htmlattrxref("align", "col")}} nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert;

    > **Note:** **Anmerkung**: Verwenden Sie dieses Attribut nicht, da es im neuesten Standard veraltet (und nicht unterstützt) ist. Um den gleichen Effekt wie bei {{htmlattrxref("char", "col")}} zu erzielen, können Sie in CSS3 den Zeichensatz mit dem {{htmlattrxref("char", "col")}} Attribut als Wert der Eigenschaft {{cssxref("text-align")}} einsetzen.

- {{htmlattrdef("charoff")}} {{Deprecated_inline("html4.01")}}, {{obsolete_inline("html5")}}
  - : Dieses Attribut gibt die Anzahl der Zeichen an, die die Spaltendaten von den vom char-Attribut angegebenen Ausrichtungszeichen versetzen sollen> **Note:** **Anmerkung:** Verwenden Sie dieses Attribut nicht, da es im aktuellen Standard veraltet (und nicht unterstützt) ist.
- {{htmlattrdef("span")}}
  - : Dieses Attribut enthält eine positive ganze Zahl, die die Anzahl aufeinanderfolgender Spalten angibt, die das `<col>` -Element überspannt. Wenn nicht vorhanden, ist der Standardwert `1`.
- {{htmlattrdef("valign")}} {{Deprecated_inline("html4.01")}}, {{obsolete_inline("html5")}}
  - : Dieses Attribut gibt die vertikale Ausrichtung des Texts in jeder Zelle der Spalte an. Mögliche Werte für dieses Attribut sind:\* `baseline`, setzt den Text so nahe wie möglich an den unteren Rand der Zelle , richtet ihn aber an der Grundlinie der Zeichen anstatt am unteren Rand aus. Wenn alle Zeichen dieselbe Größe haben, hat dies den gleichen Effekt wie `bottom`
    - `bottom`, setzt den Text so nahe wie möglich an den unteren Rand der Zelle
    - `middle`, zentriert den Text in der Zelle
    - `top`, setzt den Text so nahe wie möglich an den oberen Rand der Zelle> **Note:** **Anmerkung:** Verwenden Sie dieses Attribut nicht, da es im neuesten Standard veraltet (und nicht unterstützt) ist:\* Versuchen Sie nicht, die Eigenschaft {{cssxref ("vertical-align")}} in einem Selektor festzulegen, der ein HTMLElement \<col> enthält. Da das {{HTMLElement("td")}}-Element nicht vom {{HTMLElement("col")}}-Element abhängt, werden sie nicht vererbt.
      > - Wenn die Tabelle kein {{htmlattrxref("colspan", "td")}} - Attribut verwendet, verwenden Sie den CSS-Selektor `td: nth-child (an + b)`, wobei a die Gesamtanzahl der Spalten in der Tabelle ist und b ist die Ordnungsposition der Spalte in der Tabelle. Erst nach diesem Selektor kann die Eigenschaft cssxref {{cssxref("vertical-align")}} verwendet werden.
      > - Wenn die Tabelle ein {{htmlattrxref("colspan", "td")}}- Attribut verwendet, kann der Effekt durch Kombination geeigneter CSS-Attributselektoren wie `[colspan = n]` erzielt werden, obwohl dies nicht trivial ist.
- {{htmlattrdef("width")}} {{obsolete_inline("html5")}}
  - : Dieses Attribut gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standardpixel- und -prozentwerten kann dieses Attribut das Sonderformat `0 *` annehmen, was bedeutet, dass die Breite jeder Spalte in der Gruppe die minimale Breite sein sollte, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `0,5 *` können ebenfalls verwendet werden.

## Beispiel

Auf der Seite {{HTMLElement("table")}} finden Sie Beispiele für `<col>`.

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', 'tables.html#the-col-element', '&lt;col&gt;')}}         | {{Spec2('HTML WHATWG')}} |                     |
| {{SpecName('HTML5 W3C', 'tabular-data.html#the-col-element', '&lt;col&gt;')}} | {{Spec2('HTML5 W3C')}}     |                     |
| {{SpecName('HTML4.01', 'struct/tables.html#h-11.2.4.2', '&lt;col&gt;')}}         | {{Spec2('HTML4.01')}}     | Initiale Definition |

## Browser-Kompatibilität

{{Compat("html.elements.col")}}

## Siehe auch

- Andere tabellenbezogene HTML-Elemente: {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS-Eigenschaften und Pseudoklassen, die besonders nützlich sein können, um das `<col>` -Element zu formatieren:

  - Die Eigenschaft {{cssxref("width")}} , um die Breite der Spalte zu steuern;
  - Die Pseudoklasse {{cssxref(":nth-child")}} , um die Ausrichtung auf die Zellen der Spalte festzulegen;
  - Die {{cssxref("text-align")}} -Eigenschaft, um den Inhalt aller Zellen auf dasselbe Zeichen wie '.'.
