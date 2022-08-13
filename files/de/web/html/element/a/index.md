---
title: <a>
slug: Web/HTML/Element/a
tags:
  - Element
  - HTML
  - 'HTML: fliessender Inhalt'
  - Inhalt
  - Reference
  - Web
translation_of: Web/HTML/Element/a
---
{{HTMLRef}}

## Übersicht

Das _HTML-Element `<a>`_ (auch _HTML-Anker-Element_) definiert einen Hyperlink, ein benanntes Ziel für einen Hyperlink oder beides.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [gestaltender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Gestaltender_Inhalt "Gestaltender Inhalt"), interaktiver Inhalt, fühlbarer Inhalt.                                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Transparent](/de/docs/HTML/Content_categories#Transparent_content_model "HTML/Content_categories#Transparent_content_model"), beinhaltet entweder [fließenden Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender_Inhalt "HTML/Content_categories#Flow_content") (ausgenommen interaktiven Inhalt) oder [gestaltender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Gestaltender_Inhalt "Gestaltender Inhalt"). |
| Tag Wegfall                                                                     | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                      |
| Erlaubte Elternelemente                                                         | Alle Elemente die [gestaltenden Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Gestaltender_Inhalt "Gestaltender Inhalt") akzeptieren, oder alle Elemente die [fließenden Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender_Inhalt "HTML/Content_categories#Flow_content") erlauben.                                                                                                                            |
| Erlaubte ARIA-Rollen                                                            | {{ARIARole("button")}}, {{ARIARole("checkbox")}}, {{ARIARole("menuitem")}}, {{ARIARole("menuitemcheckbox")}}, {{ARIARole("menuitemradio")}}, {{ARIARole("option")}}, {{ARIARole("radio")}}, {{ARIARole("switch")}}, {{ARIARole("tab")}}, {{ARIARole("treeitem")}}                                                                                |
| DOM interface                                                                   | {{domxref("HTMLAnchorElement")}}                                                                                                                                                                                                                                                                                                                                                                                  |

## Attribute

Dieses Element besitzt die [globalen Attribute](/de/docs/Web/HTML/Globale_Attribute "HTML/Global attributes").

- {{htmlattrdef("download")}} {{HTMLVersionInline(5)}}
  - : Dieses Attribut zeigt, dass der Autor möchte, dass der Hyperlink verwendet wird, um eine Datei herunterzuladen. Also soll der Browser, wenn der Benutzer auf den Link klickt, diesen fragen, wo die Datei lokal gespeichert werden soll. Falls dem Attribut ein Wert zugewiesen ist, wird dieser Wert als Dateiname zum Abspeichern vorgeschlagen (der Benutzer kann diesen Namen natürlich ändern). Es gibt keine Einschränkungen für erlaubte Werte (obgleich `/` und `\` in Unterstriche konvertiert werden, um Verwechslungen mit Dateipfaden zu vermeiden). Dennoch sollten Sie beachten, dass die meisten Dateisysteme Einschränkungen bezüglich der unterstützten Interpunktion in Dateinamen haben, sowie die Browser die Dateinamen anpassen könnten.> **Note:** **Hinweis:\*** Dies kann mit [`blob:`-URLs](/de/docs/Web/API/URL.createObjectURL "/en-US/docs/Web/API/URL.createObjectURL") und `data:`-URLs verwendet werden, um es für Benutzer leichter zu machen, Inhalte herunterzuladen, die durch JavaScript generiert wurden (z. B. ein Bild, welches online über eine Zeichen-Anwendung erstellt wurde).
    > - Falls der HTTP-Header `Content-Disposition:` angegeben wird und einen anderen Dateinamen vorschlägt als dieses Attribut, hat der HTTP-Header Vorrang vor diesem Attribut.
    > - Falls das Attribut angegeben wird und `Content-Disposition:` den Wert `inline` hat, gibt Firefox `Content-Disposition` eine größere Wichtigkeit, wie im Fall des Dateinamens, während Chrome dem `download`-Attribut mehr Priorität gibt.
    > - Im [Firefox 20](/de/docs/Firefox_20_for_developers "/en-US/docs/Firefox_20_for_developers") wird dieses Attribut nur für Links auf Dateien desselben Ursprungs angewendet.
- {{htmlattrdef("href")}}
  - : Dieses war das einzige erforderliche Attribut für Anker, die einen Hyperlink definieren, aber es ist nicht länger erforderlich in HTML5. Wird dieses Attribut weggelassen, wird ein Platzhalter-Link erzeugt. Das `href`-Attribut zeigt das Ziel des Links an, entweder eine URL oder ein URL-Fragment. Ein URL-Fragment ist ein Name dem ein Doppelkreuz (`#`) vorausgeht, welches ein internes Ziel im aktuellen Dokument (eine [ID](/de/docs/HTML/Global_attributes#attr-id "Global attributes#attr-id")) festlegt. URLs sind nicht auf Web-(HTTP-)Dokumente beschränkt. Sie können ein beliebiges Protokoll verwenden, das von Browser unterstützt wird. Zum Beispiel `file`, `ftp` und `mailto` funktionieren in den meisten Browsern.> **Note:** **Hinweis:** Sie können das spezielle Fragment „top“ verwenden, um Links zu erzeugen, die zurück zum Anfang der Seite springen. Zum Beispiel: `<a href="#top">Return to top</a>`. [Dieses Verhalten ist in HTML5 festgelegt](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#scroll-to-fragid).
- {{htmlattrdef("media")}} {{HTMLVersionInline(5)}}
  - : Dieses Attribut legt das Medium fest, zu welchem die verlinkte Seite gehört. Der Wert muss ein [Media Query](/de/docs/CSS/Media_queries "CSS/Media queries") sein. Das Attribut ist sinnvoll, wenn auf externe Stylesheets verlinkt wird, während dem Browser erlaubt wird, das passende für das Gerät auszuwählen.> **Note:** \* In HTML 4 ist nur eine einfache durch Leerzeichen getrennte Liste von [Media Types und Media Groups](/de/docs/CSS/@media "https://developer.mozilla.org/en-US/docs/CSS/@media") definiert worden und als Werte für dieses Attribut erlaubt, z. B. `print`, `screen`, `aural`, `braille`, … HTML 5 hat dies auf beliebige [Media Queries](/de/docs/CSS/Media_queries "CSS/Media queries") erweitert, die eine Obermenge der erlaubten Werte von HTML 4 sind.
    > - Browser, welche die [CSS3 Media Queries](/de/docs/CSS/Media_queries "CSS/Media queries") nicht unterstützen, werden nicht notwendigerweise den passenden Link erkennen. Vergessen Sie also nicht Fallback-Links auf die beschränkten Werte von HTML 4 zu definieren.
- {{htmlattrdef("ping")}} {{HTMLVersionInline(5)}}
  - : Falls das Attribut `ping` vorhanden ist, wird den URLs der Zielseiten eine Benachrichtigung gesendet, wenn der Benutzer dem Hyperlink folgt.
- {{htmlattrdef("rel")}}
  - : Legt das Verhältnis des Zielobjekts zum Linkobjekt fest. Der Wert ist eine durch Leerzeichen getrennte Liste von [Link-Typen](/de/docs/Web/HTML/Link_types).
- {{htmlattrdef("target")}}
  - : Dieses Attribut legt fest, wo die verlinkte Quelle angezeigt wird. In HTML4 ist das der Name eines Frames oder ein Schlüsselwort für ein Frame. In HTML5 ist es ein Name eines _browsing context_es oder ein Schlüsselwort für einen \_browsing context_ (zum Beispiel ein Tab, Fenster oder Inline Frame). Die folgenden Schlüsselwörter haben eine spezielle Bedeutung:\* `_self`: Lädt die Antwort in dasselbe Frame (HTML4) bzw. denselben _browsing context_ (HTML5) wie die aktuelle Seite. Dieser Wert ist der Standardwert.
    - `_blank`: Lädt die Antwort in ein neues unbenanntes Fenster (HTML4) bzw. einen neuen _browsing context_ (HTML5).
    - `_parent`: Lädt die Antwort in den _frameset parent_ des aktuellen Frames (HTML4) bzw. _parent browsing context_ (HTML5) des aktuellen. Falls es keinen _parent_ gibt, verhält sich dieser Wert wie `_self`.
    - `_top`: Lädt die Antwort in das gesamte Fenster und alle Frames werden überschrieben (HTML4) bzw. in den obersten _browsing context_ (d.h. der _browsing context_, der dem aktuellen übergeordnet ist und keine übergeordneten \_browsing context_e hat). Falls es keinen übergeordneten gibt, verhält sich dieser Wert wie `_self`.Verwenden Sie dieses Attribut nur, wenn ein `href`-Attribut vorhanden ist.
- {{htmlattrdef("charset")}} {{obsoleteGeneric("inline","HTML5")}}
  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Datei. Der Wert ist eine durch Leerzeichen und/oder Komma-getrennte Liste von Zeichen-Sets nach der Definition der [RFC 2045](http://tools.ietf.org/html/rfc2045). Der Standardwert ist ISO-8859-1.> **Note:** **Verwendungshinweis:** Dieses Attribut ist obsolet in HTML5 und **sollte nicht mehr verwendet werden**. Um denselben Effekt zu erhalten, verwenden Sie den HTTP-Header `Content-Type:` bei der verlinkten Datei.
- {{htmlattrdef("coords")}} nur {{HTMLVersionInline(4)}}, {{obsoleteGeneric("inline","HTML5")}}
  - : Bei der Verwendung mit dem `shape`-Attribut gibt dieses Attribut als durch Komma getrennte Liste von Zahlen die Koordinaten des Objekts auf der Seite an.
- {{htmlattrdef("datafld")}} {{Non-standard_inline}}
  - : Dieses Attribut legt den Spaltennamen des Datenquellenobjekts fest, das die Daten zur Verfügung stellt, die mit diesem Element verknüpft sind.> **Note:** **Hinweis:** Dieses Attribut ist nicht standardisiert und **s**ollte nicht verwendet werden\*\*\*\*. Um denselben Effekt zu erhalten, verwenden Sie Scripting und einen Mechanismus wie [XMLHttpRequest](/de/docs/nsIXMLHttpRequest "XMLHttpRequest"), um die Seite dynamisch zu verändern.<table class="fullwidth-table">
      <tbody>
        <tr>
          <td rowspan="2">Unterstützung</td>
          <td>Gecko</td>
          <td>Presto</td>
          <td>WebKit</td>
          <td>Trident</td>
        </tr>
        <tr>
          <td>Nicht unterstützt</td>
          <td>Nicht unterstützt</td>
          <td>Nicht unterstützt</td>
          <td>IE4, IE5, IE6, IE7 (Entfernt in IE8)</td>
        </tr>
        <tr>
          <td>Normatives Dokument</td>
          <td colspan="4">
            <a
              class="external"
              href="http://msdn.microsoft.com/en-us/library/ms533703%28VS.85%29.aspx"
              >Microsoft's Data Binding: dataFld Property (MSDN)</a
            >
          </td>
        </tr>
      </tbody>
    </table>
- {{htmlattrdef("datasrc")}} {{Non-standard_inline}}
  - : Dieses Attribut zeigt die ID des Datenquellenobjekts an, das die Daten zur Verfügung stellt, die mit diesem Element verknüpft sind.> **Note:** **Verwendungshinweis:** Dieses Attribut ist nicht standardisiert und **s**ollte nicht verwendet werden\*\*\*\*. Um denselben Effekt zu erhalten, verwenden Sie Scripting und einen Mechanismus wie [XMLHttpRequest](/de/docs/nsIXMLHttpRequest "XMLHttpRequest"), um die Seite dynamisch zu verändern.<table class="fullwidth-table">
      <tbody>
        <tr>
          <td rowspan="2">Unterstützung</td>
          <td>Gecko</td>
          <td>Presto</td>
          <td>WebKit</td>
          <td>Trident</td>
        </tr>
        <tr>
          <td>Nicht unterstützt</td>
          <td>Nicht unterstützt</td>
          <td>Nicht unterstützt</td>
          <td>IE4, IE5, IE6, IE7 (Entfernt in IE8)</td>
        </tr>
        <tr>
          <td>Normatives Dokument</td>
          <td colspan="4">
            <a
              class="external"
              href="http://msdn.microsoft.com/en-us/library/ms533709(VS.85).aspx"
              >Microsoft's Data Binding: dataSrc Property (MSDN)</a
            >
          </td>
        </tr>
      </tbody>
    </table>
- {{htmlattrdef("hreflang")}}
  - : Dieses Attribut zeigt die Sprache der verlinkten Datei an. Es ist nur ein Hinweis. Erlaubte Werte sind bestimmt von [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) für HTML5 und von [RFC1766](http://www.ietf.org/rfc/rfc1766.txt) für HTML4. Verwenden Sie dieses Attribut nur, wenn ein `href`-Attribut vorhanden ist.
- {{htmlattrdef("methods")}} {{Non-standard_inline}}
  - : Der Wert dieses Attributes liefert Informationen über die Funktionen, die an einem Objekt ausgeführt werden können. Die Werte werden üblicherweise vom HTTP bestimmt, wenn es verwendet wird, aber es könnte (für ähnliche Gründe wie für das `title`-Attribut) nützlich sein, hinweisende Informationen im Voraus im Link einzufügen. Zum Beispiel könnte der Browser einen Link anders anzeigen, je nachdem welche Methoden angegenben sind; etwas, das durchsuchbar ist könnte ein anderes Icon erhalten oder ein Link, der auf eine fremde Seite verweist, könnte mit einem Hinweis, die Seite zu verlassen, angezeigt werden. Dieses Attribut ist weder gut verstanden noch unterstützt, sogar vom definierenden Browser, Internet Explorer 4. [Methods Property (MSDN)](<http://msdn.microsoft.com/en-us/library/ms534168(VS.85).aspx>)
- {{htmlattrdef("name")}} nur {{HTMLVersionInline(4)}}, {{obsoleteGeneric("inline","HTML5")}}
  - : Dieses Attribut wird in einem Anker benötigt, der ein Sprungziel innerhalb einer Seite definiert. Ein Wert für **name** ist einem Wert für das **id**-Attribut ähnlich und sollte eine alphanumerische Identifikation sein, die für das Dokument eindeutig ist. Nach der HTML-4.01-Spezifikation können **id** und **name** beide mit dem `a`-Element verwendet werden, solange sie idente Werte haben.> **Note:** **Verwendungshinweis:** Dieses Attribut ist obsolet in HTML5. Verwenden Sie das [globale Attribut **id**](/de/docs/Web/HTML/Globale_Attribute#attr-id "HTML/Global attributes#id") stattdessen.
- {{htmlattrdef("rev")}} nur {{HTMLVersionInline(4)}}, {{obsoleteGeneric("inline","HTML5")}}
  - : Dieses Attribut legt einen umgekehrten Link fest und ist das inverse Verhältnis zum **rel**-Attribut. Es ist nützlich, um anzuzeigen, woher ein Objekt kam, sowie den Autor eines Dokuments.

<!---->

- {{htmlattrdef("shape")}} nur {{HTMLVersionInline(4)}}, {{obsoleteGeneric("inline","HTML5")}}
  - : Dieses Attribut wird verwendet, um eine auswählbare Region für Hyperlinks festzulegen, die mit einer Abbildung verbunden sind, um eine Bildkarte zu erstellen. Die Werte für das Attribut sind `circle`, `default`, `polygon` und `rect`. Das Format des **coords**-Attributes hängt vom Wert jenes Attributs **shape** ab. Für `circle` ist der Wert `x,y,r`, wobei `x` und `y` die Pixelkoordinaten für den Mittelpunkt des Kreises sind und `r` der Radius in Pixeln ist. Für `rect` sollte das **coords**-Attribut `x,y,w,h` sein. Die Werte `x,y` legen das obere linke Eck des Rechtecks fest, während `w` und `h` die Breite bzw. Höhe festlegen. Der Wert `polygon` für **shape** verlangt Werte `x1,y1,x2,y2,...` für **coords**. Jedes der `x,y`-Paare definiert einen Punkt des Polygons, wobei aufeinander folgende Punkte sowie der letzte Punkt mit dem ersten mit geraden Linien verbunden werden. Der Wert `default` für **shape** verlangt, dass die gesamte beigefügte Fläche, üblicherweise ein Bild, verwendet wird.> **Note:** **Hinweis:** Es ist ratsam, das **usemap**-Attribut für das {{HTMLElement("img")}}-Element und das verbundene {{HTMLElement("map")}}-Element zu verwenden, um Hotspots anstatt des **shape**-Attributes zu definieren.
- {{htmlattrdef("type")}}
  - : Dieses Attribut legt den Medientyp in der Form eines MIME-Types für das Linkziel fest. Im Allgemeinen ist dies nur als hilfreiche Information verfügbar, aber in Zukunft könnte ein Browser ein kleines Icon für Multimedia-Typen hinzufügen. Beispielweise könnte ein Browser ein kleines Lautsrechersymbol anzeigen, wenn **type** auf `audio/wav` gesetzt ist. Für eine komplette Liste von erkannten MIME-Typen siehe <http://www.w3.org/TR/html4/references.html#ref-MIMETYPES>. Verwenden Sie dieses Attribut nur, wenn ein `href`-Attribut vorhanden ist.
- {{htmlattrdef("urn")}} {{Non-standard_inline}}
  - : Dieses angeblich von Microsoft unterstützte Attribut bezieht einen Uniform Resource Name (URN) auf den Link. Während dies auf Normungsarbeit vor Jahren basiert, ist die Bedeutung von URNs immer noch nicht gut definiert. Daher ist dieses Attribut bedeutungslos. [urn Property (MSDN)](<http://msdn.microsoft.com/en-us/library/ms534710(VS.85).aspx>)

## Beispiel: Link zu einem externen Ort

```html
<!-- Link zu einer externen Datei -->
<a href="http://www.mozilla.com/">
Externer Link
</a>
```

### Ergebnis

[Externer Link](http://www.mozilla.com/)

## Beispiel: Erstellung eines Bildlinks

Diese kleine Beispiel verwendet ein Bild, um zur MDN-Homepage zu verlinken. Die Homepage wird in einem neun _browsing context_ geöffnet, d.h. eine neue Seite oder ein neuer Tab.

```html
<a href="https://developer.mozilla.org/de/">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN-Logo" />
</a>
```

### Ergebnis

[![MDN-Logo](https://mdn.mozillademos.org/files/6851/mdn_logo.png)](https://developer.mozilla.org/de/)

## Beispiel: Erstellung eines E-Mail-Links

Es ist üblich, Schaltflächen oder Links zu erstellen, die in des Benutzers E-Mail-Programm geöffnet werden, um ihnen zu erlauben, eine neue Nachricht zu senden. Dies wird mit `mailto`-Links gemacht. Hier ein einfaches Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">E-Mail senden</a>
```

Dies führt zu einem Link, der so aussieht: [E-Mail senden](mailto:nowhere@mozilla.org).

Für weitere Details über das `mailto`-URL-Schema, z.B. wie man Betreff, Nachrichtentext oder ähnliches festlegt, siehe [E-Mail-Links](/de/docs/Web/Guide/HTML/Email_links) oder {{RFC(6068)}}.

## Beispiel: Verwendung des download-Attributes, um ein canvas als PNG zu speichern

Falls Sie einem Benutzer erlauben möchten, ein HTML-Canvas als Bild herunterzuladen, können Sie einen Link mit `download`-Attribut und den `canvas`-Daten als Datei-URL erstellen:

```js
var link = document.createElement('a');
link.innerHTML = 'Bild herunterladen';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "meinBild.png";
}, false);
document.body.appendChild(link);
```

Hier können Sie dies in Aktion sehen <http://jsfiddle.net/codepo8/V6ufG/2/>

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Anmerkung |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-a-element', '&lt;a&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-a-element', '&lt;a&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/links.html#h-12.2', '&lt;a&gt;')}}                         | {{Spec2('HTML4.01')}}     |           |

## Browser-Kompatibilität

{{Compat}}

## Hinweise

Die folgenden sind reservierte Browser Schlüsselverbindungen für die 2 Hauptbrowser und sollten nicht als Wert eines Zugangsschlüssels benutzt werden: a, c, e, f, g, h, v, Pfeil links, and Pfeil rechts.

HTML 3.2 definiert nur **name**, **href**, **rel**, **rev**, und **title**.

Das **target** Attribut ist nicht definiert in Browsern die keine Frames unterstützen, so wie Netscape 1 Generation Browser. Desweiteren, ist target nicht erlaubt in Varianten von [XHTML](/de/docs/XHTML "XHTML") sondern ist limitiert nur auf frameset oder Transit-Formulare.

### JavaScript Empfehlungen

Es ist öfters der Fall, dass ein Anker-Tag benutzt wird zusammen mit dem `onclick` Event. Um zu verhindern, dass die Seite sich neu lädt, wird **href** durch entweder "#" oder "javascript:void(0)" gesetzt. Beide Werte können zu unerwarteten Fehlern führen, wenn Hyperlinks kopiert oder in einem neuen Tab und/oder Fenster geöffnet werden. Seien Sie sich dieses Gebrauchs bewusst, und ausserdem, dass wenn Benutzer Anker-Tags benutzen, aber das generelle Verhalten verhindert wird.

## Siehe auch

- Andere Elemente, die Text semantisch beschreiben: {{HTMLElement("abbr")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
