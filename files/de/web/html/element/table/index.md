---
title: <table>
slug: Web/HTML/Element/table
tags:
  - Element
  - Reference
  - Tables
  - Web
translation_of: Web/HTML/Element/table
---
## Zusammenfassung

Das _HTML-Tabellen-Element_ (`<table>`) repräsentiert Daten in zwei oder mehr Dimensionen.

> **Note:** **Hinweis:** Bevor es [CSS](/de/docs/CSS "CSS") gab, wurden HTML-{{HTMLElement("table")}}-Elemente oft für das Seitenlayout verwendet. Von dieser Nutzung wird seit HTML 4 abgeraten, und das {{HTMLElement("table")}}-Element **sollte nicht** für Layoutzwecke verwendet werden.

## Nutzungskontext

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a
          href="/en-US/docs/HTML/Content_categories"
          title="HTML/Content categories"
          >Inhaltskategorien</a
        >
      </td>
      <td>
        <a
          href="/en-US/docs/HTML/Content_categories#Flow_content"
          title="HTML/Content categories#Flow content"
          >Fließ-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <td>Erlaubter Inhalt</td>
      <td>
        <div>
          <div id="table-mdls">
            In dieser Reihenfolge:
            <ul>
              <li>
                ein optionales {{HTMLElement("caption")}}-Element,
              </li>
              <li>
                null oder mehr {{HTMLElement("colgroup")}}-Elemente,
              </li>
              <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
              <li>
                eine der beiden Alternativen:
                <ul>
                  <li>
                    ein {{HTMLElement("tfoot")}}-Element, gefolgt von:
                    <ul>
                      <li>
                        null oder mehr
                        {{HTMLElement("tbody")}}-Elementen,
                      </li>
                      <li>
                        oder einem oder mehr
                        {{HTMLElement("tr")}}-Elementen,
                      </li>
                    </ul>
                  </li>
                  <li>
                    eine zweite Alternative gefolgt von einem optionalen
                    {{HTMLElement("tfoot")}}-Element:
                    <ul>
                      <li>
                        entweder null oder mehr
                        {{HTMLElement("tbody")}}-Elemente,
                      </li>
                      <li>
                        oder ein oder mehr {{HTMLElement("tr")}}-Elemente
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Tag-Auslassung</td>
      <td>Keine, sowohl das Start-Tag als auch das End-Tag sind Pflicht</td>
    </tr>
    <tr>
      <td>Erlaubte Eltern-Elemente</td>
      <td>Jedes Element, das Fließ-Inhalt akzeptiert</td>
    </tr>
    <tr>
      <td>Normatives Dokument</td>
      <td>
        <a
          class="external"
          href="http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-table-element"
          rel="external nofollow"
          title="http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-table-element"
          >HTML5, Abschnitt 4.9.1</a
        >
        (<a
          class="external"
          href="http://www.w3.org/TR/REC-html40/struct/tables.html#edef-TABLE"
          >HTML4.01, Abschnitt 11.2.1</a
        >)
      </td>
    </tr>
  </tbody>
</table>

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("align")}} {{Deprecated_inline}}
  - : Dieses aufgezählte Attribut gibt an, wie die Tabelle im beinhaltenden Dokument ausgerichtet werden muss. Es kann die folgenden Werte haben:\* left, bedeutet, dass die Tabelle links im Dokument angezeigt werden soll;
    - center, bedeutet, dass die Tabelle mittig im Dokument angezeigt werden soll;
    - right, bedeutet, dass die Tabelle rechts im Dokument angezeigt werden soll.> **Note:** **Hinweis:\*** **Verwenden Sie dieses Attribut nicht**, da es überholt ist: das {{HTMLElement("table")}}-Element sollte mit [CSS](/de/docs/CSS "CSS") angepasst werden. Um einen ähnlichen Effekt zu erreichen wie mit dem align-Attribut, sollten die [CSS](/de/docs/CSS "CSS")-Eigenschaften "text-align" und "vertical-align" verwendet werden.
      > - Vor Firefox 4 unterstützte Firefox, nur im Quirks-Modus, auch die Werte `middle`, `absmiddle`, und `abscenter` als Synonyme von `center`_._

<!---->

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}
  - | : Dieses Attribut definiert die Hintergrundsfarbe von der Tabelle und deren Inhalt. Die Farbe entspricht einem 6-stelligen Hexadezimalcode definiert in [sRGB](http://www.w3.org/Graphics/Color/sRGB) mit einem vorangestellten '#'. Es kann auch einer der sechszehn vordefinierten Farbnamen benutzt werden: |                     | black = "#000000" |                    | green = "#008000"                                                                                                                                                                                                                                                                                                                                                       |
    | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |                                                                                                                                                                                                                                                                                                                | silver = "#C0C0C0"  |                   | lime = "#00FF00"   |
    |                                                                                                                                                                                                                                                                                                                | gray = "#808080"    |                   | olive = "#808000"  |
    |                                                                                                                                                                                                                                                                                                                | white = "#FFFFFF"   |                   | yellow = "#FFFF00" |
    |                                                                                                                                                                                                                                                                                                                | maroon = "#800000"  |                   | navy = "#000080"   |
    |                                                                                                                                                                                                                                                                                                                | red = "#FF0000"     |                   | blue = "#0000FF"   |
    |                                                                                                                                                                                                                                                                                                                | purple = "#800080"  |                   | teal = "#008080"   |
    |                                                                                                                                                                                                                                                                                                                | fuchsia = "#FF00FF" |                   | aqua = "#00FFFF"   | > **Note:** **Gebrauchshinweis:** Es wird von der Benutzung dieses Attributs abgeraten, da es veraltet ist. Das {{HTMLElement("table")}} Element sollte mit [CSS](/de/docs/Web/CSS "CSS") formatiert werden. Um einen ähnlichen Effekt zu erzielen sollte das [CSS ](/de/docs/Web/CSS "CSS")Attribut {{cssxref("background-color")}} verwendet werden. |

<!---->

- {{htmlattrdef("border")}} {{Deprecated_inline}}
  - : Dieser Integer Wert definiert die Breite des Rahmens in Pixeln. Wenn er auf 0 gesetzt wird, dann impliziert es, dass das {{htmlattrxref("frame", "table")}} Attribut auf void gesetzt ist.> **Note:** **Gebrauchshinweis:** Es wird von der Benutzung dieses Attributs abgeraten, da es veraltet ist. Das {{HTMLElement("table")}} Element sollte mit [CSS](/de/docs/Web/CSS "CSS") formatiert werden.. Um einen ähnlichen Effekt wie das border Attribut zu erzielen sollten die [CSS](/de/docs/Web/CSS "CSS") Eigenschaften {{cssxref("border")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} und{{cssxref("border-style")}} benutzt werden.

<!---->

- {{htmlattrdef("cellpadding")}} {{Deprecated_inline}}
  - : This attribute defines the space between the content of a cell and the border, displayed or not, of it. If it is a pixel length, this pixel-sized space will be applied on all four sides; if it is a percentage length, the content will be centered and the total vertical space (top and bottom) will represent this percentage. The same is true for the total horizontal space (left and right).> **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/de/docs/CSS "CSS"). To give a similar effect than the border attribute, use the [CSS](/de/docs/CSS "CSS") property {{cssxref("border-collapse")}} with the value collapse on the {{HTMLElement("table")}} element itself, and the property {{cssxref("padding")}} on the {{HTMLElement("td")}}.

<!---->

- {{htmlattrdef("cellspacing")}} {{Deprecated_inline}}
  - : This attribute defines the size, in percentage or in pixels, of the space between two cells (both horizontally and vertically), between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row.> **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/de/docs/CSS "CSS"). To give a similar effect than the border attribute, use the [CSS](/de/docs/CSS "CSS") property {{cssxref("border-collapse")}} with the value collapse on the {{HTMLElement("table")}} element itself, and the property {{cssxref("margin")}} on the {{HTMLElement("td")}} element.

<!---->

- {{htmlattrdef("frame")}} {{Deprecated_inline}}
  - | : This enumerated attribute defines which side of the frame surrounding the table must be displayed. It may have the following values: |        | above |        | below                                                                                                                                                                                                                                                                                                                                                           |
    | -------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |                                                                                                                                        | hsides |       | vsides |
    |                                                                                                                                        | lhs    |       | rhs    |
    |                                                                                                                                        | border |       | box    |
    |                                                                                                                                        | void   |       |        | > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/de/docs/CSS "CSS"). To give a similar effect than the frame attribute, use the [CSS](/de/docs/CSS "CSS") properties {{cssxref("border-style")}} and {{cssxref("border-width")}}. |

<!---->

- {{htmlattrdef("rules")}} {{Deprecated_inline()}}
  - : This enumerated attribute defines where rules, i.e. lines, should appear in a table. It can have the following values:\* none, which indicates the no rules will be displayed; it is the default value;
    - groups, which will make the rules to be displayed between row groups (defined by the {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} and {{HTMLElement("tfoot")}} elements) and between column groups (defined by the {{HTMLElement("col")}} and {{HTMLElement("colgroup")}} elements) only;
    - rows, which will make the rules to be displayed between rows;
    - columns, which will make the rules to be displayed between columns;
    - all, which wil make the rules to be displayed between rows and columns.> **Note:** :\* The styling of the rules is browser-dependant and cannot be modified.
      > - Do not use this attribute, as it has been deprecated: the rules should be defined and styled using [CSS](/de/docs/CSS "CSS"). use the [CSS](/de/docs/CSS "CSS") property {{cssxref("border")}} on the adequate {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} or {{HTMLElement("colgroup")}} elements.

<!---->

- {{htmlattrdef("summary")}} {{Deprecated_inline}}
  - : This attribute defines an alternative text use to describe the table in user-agent unable to display it. Typically, it contents a description of it to allow visually impaired people, like blind people browsing the web using Braille screen, to get the information in it. If the information added in this attribute may also be useful for non-visually impaired people, consider using the {{HTMLElement("caption")}} instead. The summary attribute is not mandatory and may be omitted when a {{HTMLElement("caption")}} element fulfills its role.> **Note:** **Usage Note:** Do not use this attribute, as it has been deprecated. Instead, use one of these way of describing a table:\* In prose, surrounding the table (this is the less semantic-conveying way of doing it).
    > - In the table's {{HTMLElement("caption")}} element.
    > - In a {{HTMLElement("details")}} element, inside the table's {{HTMLElement("caption")}} element.
    > - Include the {{HTMLElement("table")}} element in a {{HTMLElement("figure")}} element and add the description in prose next to it.
    > - Include the {{HTMLElement("table")}} element in a {{HTMLElement("figure")}} element and add the description in prose inside a {{HTMLElement("figcaption")}} element.
    > - Adjust the table so that such description is no more needed, by using {{HTMLElement("th")}} and {{HTMLElement("thead")}} elements for example.

<!---->

- {{htmlattrdef("width")}} {{Deprecated_inline}}
  - : This attribute defines the width of the table. It may either be a pixel length or a percentage value, representing the percentage of the width of its container that the table should use.> **Note:** **Usage Note:** Do not use this attribute, as it has been deprecated: the rules should be defined and styled using [CSS](/de/docs/CSS "CSS"). use the [CSS](/de/docs/CSS "CSS") property {{cssxref("width")}} instead.

## DOM interface

This element implements the [`HTMLTableElement`](/en-US/docs/DOM/HTMLTableElement "DOM/HTMLTableElement") interface.

## Beispiele

### Einfache Tabelle

```html
<table>
  <tr>
    <td>Max</td>
    <td>Mustermann</td>
  </tr>
  <tr>
    <td>Maxine</td>
    <td>Mustermann</td>
  </tr>
</table>
```

{{ EmbedLiveSample('Einfache_Tabelle', '100%', '100') }}

### Weitere Beispiele

```html
<p>Einfache Tabelle mit Überschrift</p>
<table>
  <tr>
    <th>Vorname</th>
    <th>Nachname</th>
  </tr>
  <tr>
    <td>Max</td>
    <td>Mustermann</td>
  </tr>
  <tr>
    <td>Maxine</td>
    <td>Mustermann</td>
  </tr>
</table>

<p>Tabelle mit thead, tfoot, and tbody</p>
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table>

<p>Tabelle mit colgroup</p>
<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Länder</th>
    <th>Hauptstädte</th>
    <th>Bevölkerung</th>
    <th>Sprache</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 Millionen</td>
    <td>Englisch</td>
  </tr>
  <tr>
    <td>Schweden</td>
    <td>Stockholm</td>
    <td>9 Millionen</td>
    <td>Schwedisch</td>
  </tr>
</table>

<p>Tabelle mit colgroup und col</p>
<table>
  <colgroup>
    <col class="column1">
    <col class="columns2plus3" span="2">
  </colgroup>
  <tr>
    <th>Limone</th>
    <th>Zitrone</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Grün</td>
    <td>Gelb</td>
    <td>Orange</td>
  </tr>
</table>

<p>Einfache Tabelle mit Beschreibung</p>
<table>
  <caption>Unglaublich tolle Beschreibung</caption>
  <tr>
    <td>Unglaublich tolle Daten</td>
  </tr>
</table>
```

```css hidden
table
{
border-collapse: collapse;
border-spacing: 0px;
}
table, th, td
{
padding: 5px;
border: 1px solid black;
}
```

{{ EmbedLiveSample('Weitere_Beispiele', '100%', '800') }}

## Browser Kompabilität

{{Compat}}

## Siehe auch

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties that may be specially useful to style the \<table> element:

  - {{cssxref("width")}} to control the width of the table;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} to control the aspect of cell borders, rules and frame;
  - {{cssxref("margin")}} and {{cssxref("padding")}} to style the individual cell content;
  - {{cssxref("text-align")}} and {{cssxref("vertical-align")}} to define alignment of text and cell content.

{{HTMLRef}}
