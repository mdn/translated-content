---
title: <img>
slug: Web/HTML/Element/img
translation_of: Web/HTML/Element/img
---
{{HTMLRef}}

Das Element **\<img>** fügt eine Grafik in ein Dokument ein.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [gestaltender Inhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), eingebetteter Inhalt, fühlbarer Inhalt. Falls das Attribut {{htmlattrxref("usemap", "img")}} gesetzt ist, gehört das Element auch zu den interaktiven Inhalten. |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Keiner, es ist ein {{Glossary("leeres Element")}}.                                                                                                                                                                                                                                                                                                                                               |
| Tag-Verwendung                                                                  | Muss einen Start-Tag, darf jedoch keinen End-Tag haben.                                                                                                                                                                                                                                                                                                                                                    |
| Erlaubte Elternelemente                                                         | Jedes Element, das gestaltenden Inhalt erlaubt.                                                                                                                                                                                                                                                                                                                                                            |
| DOM-Schnittstelle                                                               | {{domxref("HTMLImageElement")}}                                                                                                                                                                                                                                                                                                                                                                   |

## Attributes

Dieses Element unterstützt die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("align")}} {{deprecatedGeneric('inline','HTML4.01')}}, {{obsoleteGeneric('inline','HTML5')}}
  - : Ausrichtung der Grafik im Verhältnis zu ihrer Umgebung.
    Benutzen Sie stattdessen die CSS-Eigenschaft {{cssxref('vertical-align')}}.
- {{htmlattrdef("alt")}}

  - : Text, der vom Browser alternativ statt der Grafik angezeigt werden kann, zum Beispiel falls sie noch nicht heruntergeladen wurde, bei Übertragungsfehlern oder falls sie in keinem [unterstützten Format](#Supported_image_formats "HTML/Element/Img#Supported image formats") vorliegt. Der Benutzer kann die Grafikdarstellung auch abgeschaltet haben oder einen Browser benutzen, der keine Grafik darstellen kann.

    Der Text sollte das von der Grafik Dargestellte kurz und sinnvoll wiedergeben, so dass der Inhalt, den sie transportieren, ersichtlich wird. Ist dies nicht möglich, sollte das Attribut weggelassen werden.

    Reine Dekorationselemente sollten hingegen mit einem leeren Attribut (`alt=""`) eingefügt werden; Alternativtexte wie "Roter Punkt" sind unbedingt zu vermeiden!

    > **Hinweis:** Eine aussagekräftige Beschreibung des Bildes ist vor allem für die Barrierefreiheit von elementarer Bedeutung!
    > Dies gilt auch für das leere Attribut `alt=""`. Browser können die (Ersatz-) Darstellung des img-Elements in diesem Fall ganz überspringen, was merklich der Übersichtlichkeit dient – niemand möchte einen Text vorgelesen bekommen, ständig von nutzlosen Hinweisen wie "Roter Punkt" unterbrochen.

- {{htmlattrdef("border")}} {{deprecatedGeneric('inline','HTML4.01')}}, {{obsoleteGeneric('inline','HTML5')}}
  - : Breite des Rahmens um die Grafik. Benutzen Sie stattdessen die CSS-Eigenschaft {{cssxref('border')}}.
- {{htmlattrdef("crossorigin")}} {{HTMLVersionInline(5)}}

  - : Ist dieses Attribut gesetzt, wird die betreffende Grafik mittels [CORS](/de/docs/CORS_Enabled_Image "CORS_Enabled_Image")(Cross-Origin Resource Sharing) abgerufen, wahlweise ohne den Benutzer zu authentifizieren oder mit:_ `"anonymous"`
    _ : Es wird eine CORS-basierte Anfrage durchgeführt, jedoch wird keine Benutzerauthentifizierung mitgesendet (Cookies, X.509-Zertifikat, HTTP-Authentifizierung).

    - `"use-credentials"` \* : Es wird eine CORS-basierte Anfrage durchgeführt, gegebenenfalls mit Benutzerauthentifizierung (Cookies, X.509-Zertifikat, HTTP-Authentifizierung).Hat das Attribut einen ungültigen Wert, wird stattdessen die Einstellung **anonymous** angenommen.
      Fehlt das crossorigin-Attribut, wird die Grafik ohne CORS heruntergeladen (d.h. ohne die HTTP-Kopfzeile {{HTTPHeader('Origin')}}).

    Damit das Dokument uneingeschränkt auf die Grafik zugreifen kann (zum Beispiel im {{HTMLElement("canvas")}}-Element), muss der Server zusätzlich mit einer {{HTTPHeader('Access-Control-Allow-Credentials')}}-Angabe antworten, die den Ursprung des Dokuments einschließt.

    Weitere Informationen sind im Artikel über [CORS-Attribute](/de/docs/HTML/CORS_settings_attributes "CORS settings attributes") nachzulesen.

- {{htmlattrdef("height")}}
  - : Tatsächliche Höhe der Grafik in {{HTMLVersionInline(5)}} CSS-Pixeln, in {{HTMLVersionInline(4)}} Bildschirmpixeln oder als prozentualer Wert.
- {{htmlattrdef("hspace")}} {{deprecatedGeneric('inline','HTML4.01')}}, {{obsoleteGeneric('inline','HTML5')}}
  - : Breite des Innenabstands links und rechts der Grafik. Benutzen Sie stattdessen die CSS-Eigenschaften {{cssxref('padding-left')}} und {{cssxref('padding-right')}} bzw. {{cssxref('padding')}}.
- {{htmlattrdef("ismap")}}
  - : Serverseitig verweissensitive Grafik. Ist dieses Attribut gesetzt, werden bei jedem Klick die betreffenden Mauskoordinaten an den Server gesendet.> **Hinweis:** Dieses Attribut ist nur bei `<img>`-Elementen erlaubt, die sich innerhalb eines {{htmlelement("a")}}-Elements mit einem gültigen {{htmlattrxref("href","a")}}-Attribut befinden.
- {{htmlattrdef("longdesc")}}
  - : URL einer längeren Beschreibung des Bildes, die als Ergänzung zum **alt**-Text dient.
- {{htmlattrdef("name")}} {{deprecatedGeneric('inline','HTML4.01')}}, {{obsoleteGeneric('inline','HTML5')}}
  - : Name des Elements. Benutzen Sie stattdessen das **id**-Attribut.
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}
  - : Definiert, was beim Abruf der Grafik als verweisende URL in der HTTP-Kopfzeile {{HTTPHeader('Referer')}} an den Server gesendet werden soll:\* `"no-referrer"`: Es wird nichts gesendet.
    - "`no-referrer-when-downgrade`": Wurde das die Grafik enthaltende Dokument über eine gesicherte Verbindung (HTTPS) abgerufen, wird nur dann _keine_ verweisende URL gesendet, falls die Grafik über eine _ungesicherte_ Verbindung abgerufen wird.
      Dies ist das Standardverhalten des Browsers, falls nichts anderes angegeben wurde.
    - `"origin"`: Es wird der Ursprung des Dokuments gesendet, üblicherweise das Protokoll, die Domain und gegebenenfalls der Port (zum Beispiel `http://example.com:88`).
    - "`origin-when-cross-origin`": Wie `origin`, jedoch nur, falls die Grafik von einem anderen Server abgerufen wird. Ist der Server der gleiche, wird die vollständige URL des Dokuments, einschließlich Pfad, gesendet.
    - `"unsafe-url"`: Es wird immer die vollständige verweisende URL gesendet (jedoch ohne Fragmentbezeichner, Benutzername und Passwort).
      Dies ist unsicher, da zuvor über gesicherte Verbindungen abgerufene Informationen (die URL des Dokuments) auch über nichtgesicherte gesendet werden könnten (als verweisende URL beim Abruf der Grafik).> **Hinweis:** In älteren Versionen hieß dieses Attribut `referrer`.
- {{htmlattrdef("sizes")}}{{HTMLVersionInline(5)}}
  - : Mit dem `sizes`-Attribut wird die Anzeigegröße der Grafik in Abhängigkeit von der Größe des Anzeigegeräts festgelegt. Es enthält mehrere, durch Kommata getrennte Einträge, jeweils bestehend aus:1. einer CSS-Medienbedingung, zum Beispiel `(max-width: 480px)`. Diese Angabe entfällt für den letzten Eintrag. 2. einer CSS-Größenangabe.Anhand dieser Einträge wählt der Browser eine der in `srcset` gebenenen Grafikquellen, sofern diese mit Breitenangaben ('`w`') versehen sind.
    Fehlt das `srcset`-Attribut oder enthält es keine Breitenangaben, wird `sizes` ignoriert.
- {{htmlattrdef("src")}}
  - : URL der Grafik. Dieses Attribut ist zwingend erforderlich.
    Browser, die `srcset` unterstützen, behandeln `src` als Grafik mit einer Pixeldichte von `1x`, sofern keine andere Grafik mit dieser Dichte in `srcset` aufgeführt ist oder falls `srcset` '`w`'-Bezeichner enthält.
- {{htmlattrdef("srcset")}}{{HTMLVersionInline(5)}}

  - : `srcset` erlaubt das Bereitsstellen derselben Grafik in verschiedenen Versionen für niedrig- und hochauflösende Anzeigegeräte. Letztere profitieren von der höheren Bildqualität -bei größerer Datenmenge-, erstere von der geringeren Datenmenge.

    `srcset` enthält mehrere – durch Kommata getrennte – Einträge, jeweils bestehend aus:1. einer URL, 2. optional, Leerzeichen gefolgt von einem Kennwert:

        *   der tatsächlichen Breite dieser Quelle (positive Ganzzahl) gefolgt von dem Buchstaben `w`. Dieser Wert steht in Abhängigkeit zu den Einträgen im `sizes`-Attribut.
        *   eine abstrakte Pixeldichte in Form einer positiven Kommazahl gefolgt von dem Buchstaben `x`.Ist kein Kennwert gegeben, wird für die jeweilige Quelle `1x` angenommen.Breitenangaben und Pixeldichten dürfen nicht gleichzeitig verwendet werden. Doppelte Kennwerte (zum Beispiel zwei Quellen desselben `srcset`-Attributs mit dem Kennwert '`4x`') sind ebenfalls nicht erlaubt.Die Entscheidung, welche Quelle genutzt wird, obliegt alleine dem Browser. Neben den Eigenschaften der Anzeige können so auch Benutzereinstellungen oder die Internetverbindung berücksichtigt werden.

- {{htmlattrdef("width")}}
  - : Breite der Grafik in {{HTMLVersionInline(5)}} CSS-Pixeln, {{HTMLVersionInline(4)}} Bildschirmpixeln oder als prozentuale Angabe.
- {{htmlattrdef("usemap")}}
  - : Verweissensitive Grafik; das usemap-Attribut enthält das URL-Fragment (beginnend mit '#') der zugehörigen [Karte](/de/docs/HTML/Element/map "HTML/Element/Map").> **Hinweis:** `usemap` kann nicht benutzt werden, falls sich das `<img>`-Element in einem {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Element befindet. Die Verwendung würde mit `ismap` kollidieren.
- {{htmlattrdef("vspace")}} {{deprecatedGeneric('inline','HTML4.01')}}, {{obsoleteGeneric('inline','HTML5')}}
  - : Breite des Innenabstands über und unter der Grafik. Benutzen Sie stattdessen die CSS-Eigenschaften {{cssxref('padding-top')}} und {{cssxref('padding-bottom')}} bzw. {{cssxref('padding')}}.

## Unterstützte Grafikformate

Der HTML-Standard gibt nicht vor, welche Grafikformate unterstützt werden müssen. JPEG und GIF sind in allen grafischen Browsern zu finden, ebenso mittlerweile das etwas jüngere PNG. Die Unterstützung für SVG ist beim Internet Explorer und älteren Android-Versionen nur rudimentär vorhanden, breite Unterstützung gibt es erst durch seit 2015 erschienene Browser (insbesondere des Internet-Explorer-Nachfolgers Edge).

Gecko unterstützt die folgenden Formate:

- [JPEG](http://en.wikipedia.org/wiki/JPEG)
- [GIF](http://en.wikipedia.org/wiki/Graphics_Interchange_Format), einschließlich animierter
- [PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics)
- [APNG](/de/docs/Animated_PNG_graphics "Animated PNG graphics") {{gecko_minversion_inline("1.9.2")}}
- [SVG](/de/docs/SVG "SVG") {{gecko_minversion_inline("2.0")}}
- [BMP](http://en.wikipedia.org/wiki/BMP_file_format)
- [BMP ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29)
- [PNG ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29) {{gecko_minversion_inline("9.0")}}

> **Hinweis:** Das [XBM](http://en.wikipedia.org/wiki/X_BitMap)-Format wird seit Gecko 1.9.2 nicht mehr unterstützt.

## Beeinflussung durch CSS

CSS behandelt `<img>` als [ersetztes Element](/de/docs/CSS/Replaced_element "CSS/Replaced_element").

Bei der Verwendung im `inline`-Modus zusammen mit {{cssxref("vertical-align")}}`: baseline` wird die Unterkante der Grafik an der Grundline des Elternelements ausgerichtet, da die Grafik selbst keine Grundline besitzt.

Ob eine Grafik festgelegte Abmessungen, d.h. Breite und Höhe hat, hängt vom Grafiktyp ab. SVG-Grafiken verfügen zum Beispiel nicht unbedingt darüber, sie erhalten ihre tatsächlichen Abmessungen aus ihrer Verwendung.

## Fehlerbehandlung

Schlägt die Übertragung oder Darstellung der Grafik fehl, wird die wurde mittels {{htmlattrxref("onerror")}} festgelegte Ereignisbehandlung ausgeführt. Mögliche Ursachen sind unter anderem:

- Das {{htmlattrxref("src", "img")}}-Attribute ist leer oder `null`.
- Die für `src` angegebene URL ist die gleiche wie die des Dokuments.
- Die Grafikdaten sind unlesbar beschädigt oder auch nur, falls weder `width` noch `height` angegeben sind, in einer Weise, die es unmöglich macht, Abmessungen auszulesen.
- Das Grafikformat wird vom {{Glossary("Browser")}} nicht unterstützt.

## Beispiel 1

```html
<img src="mdn-logo-sm.png" alt="MDN">
```

![MDN](https://developer.mozilla.org/static/img/favicon144.png)

## Beispiel 2: Anklickbare Grafik als Verweis

```html
<a href="https://developer.mozilla.org/"><img src="mdn-logo-sm.png" alt="MDN"></a>
```

[![MDN](https://developer.mozilla.org/static/img/favicon144.png)](https://developer.mozilla.org/)

## Beispiel 3: Das `srcset`-Attribut

Das `src`-Attribut hat als Vorgabe den Wert `1x` bei Browsern, die `srcset` unterstützen.

```html
 <img src="mdn-logo-sm.png"
      alt="MDN"
      srcset="mdn-logo-HD.png 2x">
```

## Beispiel 4: Die Benutzung von `srcset` und `size`

Browser, die `srcset` unterstützen, ignorieren `src` bei der Benutzung des Bezeichners '`w`'. Trifft im Beispiel die Bedingung `(min-width: 600px)` zu, ist die Grafik 200px breit, andernfalls 50vw (50% der Breite des Anzeigegeräts).

```html
 <img src="clock-demo-thumb-200.png"
      alt="Clock"
      srcset="clock-demo-thumb-200.png 200w, clock-demo-thumb-400.png 400w"
      sizes="(min-width: 600px) 200px, 50vw">
```

## Spezifikationen

| Spezifikation                                                                                                                            | Status                               | Hinweis                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrer attribute')}} | {{Spec2('Referrer Policy')}} | Attribut `referrer` hinzugefügt. |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-img-element', '&lt;img&gt;')}}                         | {{Spec2('HTML WHATWG')}}     |                                  |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-img-element', '&lt;img&gt;')}}                         | {{Spec2('HTML5 W3C')}}         |                                  |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.2', '&lt;img&gt;')}}                                             | {{Spec2('HTML4.01')}}         |                                  |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- HTML-Elemente {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}.
