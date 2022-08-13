---
title: <link>
slug: Web/HTML/Element/link
tags:
  - Element
  - HTML
  - Metadaten
  - Referenz
  - Web
translation_of: Web/HTML/Element/link
---
## Zusammenfassung

Das _HTML-Link-Element_ (**\<link>**) spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Mögliche Anwendungen für dieses Element sind die Definition eines relationalen Rahmens für die Navigation. Dieses Element wird am häufigsten verwendet, um mit Style Sheets zu verlinken.

| [Content categories](/de/docs/Web/HTML/Content_categories) | Metadata content. If {{htmlattrxref("itemprop", "link")}} is present: [flow content](/de/docs/Web/HTML/Content_categories#Flow_content)[phrasing content](/de/docs/Web/HTML/Content_categories#Phrasing_content) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | None, it is an {{Glossary("empty element")}}.                                                                                                                                                                      |
| Tag omission                                               | As it is a void element, the start tag must be present and the end tag must not be present                                                                                                                                    |
| Permitted parent elements                                  | Any element that accepts metadata elements. If {{htmlattrxref("itemprop", "link")}} is present: any element that accepts [phrasing content](/de/docs/Web/HTML/Content_categories#Phrasing_content).               |
| DOM interface                                              | {{domxref("HTMLLinkElement")}}                                                                                                                                                                                      |

## Attribute

Dieses Element beinhaltet die [Globalen Attribute](/de/docs/Web/HTML/Globale_Attribute).

- {{htmlattrdef("charset")}}{{obsolete_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Komma getrennte Liste von Zeichensätzen gemäß [RFC 2045](http://tools.ietf.org/html/rfc2045). Der Standardwert ist ISO-8859-1.

  > **Note:** **Verwendungshinweis**: Dieses Attribut ist in HTML5 obsolet und **darf von den Autoren nicht verwendet werden**. Um seine Wirkung zu erzielen, verwenden Sie den Content-Type HTTP-Header auf der verlinkten Ressource.

- {{htmlattrdef("crossorigin")}} {{HTMLVersionInline(5)}}
  - : Dieses aufgezählte Attribut gibt an, ob das Abrufen des zugehörigen Bildes mit CORS erfolgen muss oder nicht. [CORS-fähige Bilder](/de/docs/CORS_Enabled_Image) können im Element {{HTMLElement("canvas")}} wiederverwendet werden, ohne verunreinigt zu werden. Die zulässigen Werte sind:_ anonymous
    _ : Es wird eine ursprungsübergreifende Anforderung (z.B. mit `Origin:` HTTP-Header) durchgeführt. Es werden jedoch keine Anmeldeinformationen gesendet (d.h. es wird kein Cookie, kein X.509-Zertifikat und keine HTTP Basic-Authentifizierung gesendet). Wenn der Server der Ursprungsseite keine Anmeldeinformationen übergibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird das Bild verfälscht und seine Verwendung eingeschränkt.
    - use-credentials
      - : Eine ursprungsübergreifende Anforderung (z.B. mit `Origin:` HTTP-Header) wird mit Anmeldeinformationen ausgeführt (d.h. es wird ein Cookie, ein Zertifikat und eine HTTP-Basic-Authentifizierung durchgeführt). Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (über `Access-Control-Allow-Credentials:` HTTP-Header), wird das Bild verfälscht und seine Verwendung eingeschränkt.Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage geholt (d.h. ohne den `Origin:` HTTP-Header zu senden), wodurch verhindert wird, dass sie in {{HTMLElement('canvas')}}} Elementen verwendet wird. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie unter Attribute der [CORS-Einstellungen](/de/docs/Web/HTML/CORS_settings_attributes).

- {{htmlattrdef("disabled")}} {{Non-standard_inline}}
  - : Dieses Attribut wird verwendet, um eine Linkbeziehung zu deaktivieren. In Verbindung mit Scripting kann dieses Attribut verwendet werden, um verschiedene Style-Sheet-Beziehungen ein- und auszuschalten.

  > **Hinweis:** Während es im HTML-Standard kein `disabled` Attribut hat, **gibt** es im DOM-Objekt des `HTMLLinkElement` ein `disabled` Attribut.Die Verwendung von `disabled` als HTML-Attribut ist nicht standardisiert und wird nur von einigen Browsern verwendet ([W3 #27677](https://www.w3.org/Bugs/Public/show_bug.cgi?id=27677)). **Verwenden Sie es nicht.** Um einen ähnlichen Effekt zu erzielen, verwenden Sie eine der folgenden Techniken:Wenn das Attribut `disabled` direkt zu dem Element auf der Seite hinzugefügt wurde, darf stattdessen nicht das Element {{HTMLElement("link")}}} aufgenommen werden;
    > Setzt die `disabled` **Eigenschaft** des `StyleSheet` DOM Objekts über Skripting.

**{{htmlattrdef("href")}}**

Dieses Attribut gibt die URL der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.

- {{htmlattrdef("hreflang")}}
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Erlaubte Werte werden von [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) für HTML5 und von [RFC1766](http://www.ietf.org/rfc/rfc1766.txt) für HTML 4 bestimmt, verwenden Sie dieses Attribut nur, wenn das Attribut {{htmlattrxref("href", "a")}}} vorhanden ist.
- {{htmlattrdef("media")}}
  - : Dieses Attribut gibt das Medium an, für das die verknüpfte Ressource gilt. Sein Wert muss eine [Medienanfrage](/de/docs/Web/CSS/Media_Queries/Using_media_queries) sein. Dieses Attribut ist vor allem bei der Verknüpfung mit externen Stylesheets nützlich, da es dem Benutzeragenten ermöglicht, das am besten geeignete für das Gerät auszuwählen, auf dem es läuft.

  > **Hinweis:** In HTML 4 kann dies nur eine einfache, durch Leerzeichen getrennte Liste von Mediendaten sein, d.h. [Medientypen und -gruppen](/de/docs/Web/CSS/@media), die als Werte für dieses Attribut definiert und erlaubt sind, wie z.B. `print`, `screen`, `aural`, `braille`. HTML5 erweiterte dies auf jede Art von [Medienabfragen](/de/docs/Web/CSS/Media_Queries/Using_media_queries), die eine Obermenge der zulässigen Werte von HTML 4 darstellen.
    >
    > - Browser, die die [CSS3-Medienabfragen](/de/docs/Web/CSS/Media_Queries/Using_media_queries) nicht unterstützen, erkennen nicht unbedingt den passenden Link; vergessen Sie nicht, Fallback-Links zu setzen, den in HTML 4 definierten eingeschränkten Satz von Medienabfragen.
    >
- {{htmlattrdef("methods")}} {{Non-standard_inline}}
  - : Der Wert dieses Attributs gibt Auskunft über die Funktionen, die an einem Objekt ausgeführt werden können. Die Werte werden im Allgemeinen vom HTTP-Protokoll bei der Verwendung angegeben, aber es könnte (aus ähnlichen Gründen wie beim **Titelattribut**) sinnvoll sein, Beratungsinformationen im Voraus in den Link aufzunehmen. So kann beispielsweise der Browser eine andere Darstellung eines Links in Abhängigkeit von den angegebenen Methoden wählen; etwas, das durchsuchbar ist, kann ein anderes Symbol erhalten, oder ein externer Link kann mit dem Hinweis auf das Verlassen der aktuellen Website dargestellt werden. Dieses Attribut wird weder gut verstanden noch unterstützt, auch nicht vom definierenden Browser, dem Internet Explorer 4. Siehe [Methodeneigenschaften (MSDN)](http://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx).
- {{htmlattrdef("rel")}}
  - : Dieses Attribut bezeichnet eine Beziehung des verknüpften Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste der [Werte der Link-Typen](/de/docs/Web/HTML/Link_types) sein. Die häufigste Verwendung dieses Attributs ist die Angabe eines Links zu einem externen Stylesheet: Das **rel**-Attribut ist auf `stylesheet` gesetzt, und das **href**-Attribut ist auf die URL eines externen Stylesheets gesetzt, um die Seite zu formatieren. WebTV unterstützt auch die Verwendung des Wertes `next` für **rel**, um die nächste Seite in einer Dokumentserie vorzuladen.
- {{htmlattrdef("rev")}}{{obsolete_inline}}
  - : The value of this attribute shows the relationship of the current document to the linked document, as defined by the {{htmlattrxref("href", "link")}} attribute. The attribute thus defines the reverse relationship compared to the value of the **rel** attribute. [Link types values](/de/docs/Web/HTML/Link_types) for the attribute are similar to the possible values for {{htmlattrxref("rel", "link")}}.

  > **Note:** **Usage note:** This attribute is obsolete in HTML5. **Do not use it**. To achieve its effect, use the {{htmlattrxref("rel", "link")}} attribute with the opposite [link types values](/de/docs/Web/HTML/Link_types), e.g. made should be replaced by author. Also this attribute doesn't mean _revision_ and must not be used with a version number, which is unfortunately the case on numerous sites.
- {{htmlattrdef("sizes")}} {{HTMLVersionInline(5)}}
  - : This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the {{htmlattrxref("rel","link")}} contains the icon [link types value](/de/docs/Web/HTML/Link_types). It may have the following values:\* `any`, meaning that the icon can be scaled to any size as it is in a vectorial format, like `image/svg+xml`.
    - a white-space separated list of sizes, each in the format _\<width in pixels>\_x_\<height in pixels>_ or _\<width in pixels>_X_\<height in pixels>\_. Each of these sizes must be contained in the resource.

  > **Note:** **Usage note:\*** Most icon format are only able to store one single icon; therefore most of the time the {{htmlattrxref("sizes")}} contains only one entry. Among the major browsers, only the Apple's ICNS format allows the storage of multiple icons, and this format is only supported in WebKit.
      >
      > - Apple's iOS does not support this attribute, hence Apple's iPhone and iPad use special, non-standard [link types values](/de/docs/Web/HTML/Link_types) to define icon to be used as Web Clip or start-up placeholder: apple-touch-icon and apple-touch-startup-icon.
      >
- {{htmlattrdef("target")}}{{Non-standard_inline}}
  - : Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource.
- {{htmlattrdef("type")}}
  - : This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is **text/css**, which indicates a Cascading Style Sheet format.

## Examples

### Including a stylesheet

To include a stylesheet in a page, use the following syntax:

```html
<link href="style.css" rel="stylesheet">
```

### Providing alternative stylesheets

You can also specify [alternative style sheets](/de/docs/Web/CSS/Alternative_style_sheets).

The user can choose which style sheet to use by choosing it from the View>Page Style menu. This provides a way for users to see multiple versions of a page.

```html
<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">
```

### Stylesheet load events

You can determine when a style sheet has been loaded by watching for a `load` event to fire on it; similarly, you can detect if an error has occurred while processing a style sheet by watching for an `error` event:

```html
<script>
function sheetLoaded() {
  // Do something interesting; the sheet has been loaded
}

function sheetError() {
  alert("An error occurred loading the stylesheet!");
}
</script>

<link rel="stylesheet" href="mystylesheet.css" onload="sheetLoaded()" onerror="sheetError()">
```

> **Note:** The `load` event fires once the stylesheet and all of its imported content has been loaded and parsed, and immediately before the styles start being applied to the content.

## Notes

- A `<link>` tag can occur only in the head element; however, there can be multiple occurrences of `<link>`.
- HTML 3.2 defines only the **href**, **rel**, **rev**, and **title** attributes for the link element.
- HTML 2 defines the **href**, **methods**, **rel**, **rev**, **title**, and **urn** attributes for the `<link>` element. The **methods** and **urn** attributes were later removed from the specifications.
- The HTML and XHTML specifications define event handlers for the `<link>` element, but it is unclear how they would be used.
- Under XHTML 1.0, empty elements such as `<link>` require a trailing slash: `<link />`.

## Specifications

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-link-element', '&lt;link&gt;')}}         | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-link-element', '&lt;link&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'struct/links.html#h-12.3', '&lt;link&gt;')}}                     | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}

## See also

- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)

{{HTMLRef}}
