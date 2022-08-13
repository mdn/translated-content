---
title: <area>
slug: Web/HTML/Element/area
tags:
  - Eingebettet
  - Element
  - HTML
  - Inhalt
  - Multimedia
  - Referenz
  - Web
translation_of: Web/HTML/Element/area
---
## Übersicht

Das \_HTML-Element `<area>` \_definiert einen Bereich auf einem Bild als Hot-Spot. Optional kann auf diesem Bereich ein {{Glossary("Hyperlink", "Hyperlink")}} hinterlegt werden. Dieses Element kann nur innerhalb eines {{HTMLElement("map")}} Elements verwendet werden.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formulierung](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content").                                |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Keiner, es ist ein {{Glossary("empty element", "leeres Element")}}.                                                                                                                                                                    |
| Tag Wegfall                                                                     | Es muss einen Start-Tag und keinen End-Tag geben.                                                                                                                                                                                                       |
| Erlaubte Elternelemente                                                         | Jedes Element, das [Formulierungen](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content") akzeptiert. Das `<area>` Element muss direkt oder indirekt ein Kind eines {{HTMLElement("map")}} Elements sein. |
| DOM interface                                                                   | {{domxref("HTMLAreaElement")}}                                                                                                                                                                                                                |

## Attribute

Dieses Element besitzt die globalen Attribute [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("accesskey")}} {{HTMLVersionInline("4")}} only, {{obsolete_inline("5.0")}}
  - : Spezifiziert einen Tastatur-Shortcut für dieses Element. Eine Tastenkombination mit ALT oder einer ähnlichen Taste in Verbindung mit dem angegebenen Zeichen selektiert die damit assoziierte From Control. Dabei sollten keine von Webbrowsern vorbelegten Tastenkombinationen verwendet werden. Dieses Attribut ist seit HTML5 global.

- {{htmlattrdef("alt")}}
  - : Ein alternativer Text zum Einblenden, wenn der Webbrowser keine Bilder darstellt. Der Text soll dem Benutzer den Inhalt des Bildes beschreiben. In HTML4 ist dieses Attribut verpflichtend aber es kann ein leerer Text ("") angegeben werden. In HTML5 ist dieses Attribute nur verpflichtend, wenn das **href** Attribut vewendet wird.

- {{htmlattrdef("coords")}}
  - : Eine Menge von Werten, welche die Koordinaten des Hot-Spot Bereichs angeben. Die Anzahl und die Bedeutung der Werte hängt von dem Wert des **shape** Attributs ab. Für `rect` (rechteckige Form) beinhaltet der Wert von **coords** zwei x,y Pare: left, top, right und bottom. Für `circle` (kreisförmige Form) besteht der Wert aus `x,y,r`. Dabei sind `x,y` ein Paar, dass die Position des Kreismittelpunkt angibt und `r` ist der Radius. Für `poly` (Polygon) beinhaltet der Wert mehrere x,y Paare, wobei jedes Paar für einen Punkt im Polygon steht: `x1,y1,x2,y2,x3,y3,` usw. In HTML4 sind die Werte die Anzahl Pixel oder Prozente, wenn ein Prozentzeichen (%) angehängt wird. In HTML5 sind die Werte die Anzahl von CSS Pixel.
- {{htmlattrdef("download")}} {{HTMLVersionInline("5")}}
  - : Dieses Attribut gibt an, sofern es verwendet wird, dass der Autor den Hyperlink zum Dowload einer Ressource verwendet. Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des {{htmlattrxref("download", "a")}} Attributs.

- {{htmlattrdef("href")}}
  - : Das Ziel des Hyperlinks für diesen Bereich. Der Wert muss eine gültige URL sein. In HTML4 muss entweder dieses Attribut oder das **nohref** Attribut im Element sein. In HTML5 kann dieses Attribut ausgelassen werden. In diesem Fall repräsentiert das area Element keinen Hyperlink.

- {{htmlattrdef("hreflang")}} {{HTMLVersionInline("5")}}
  - : Gibt die Sprache der verlinkten Ressource an. Erlaubte Werte sind in [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) bestimmt worden. Dieses Attribut sollte nur zusammen mit einem **href** Attribut verwendet werden.

- {{htmlattrdef("name")}} {{HTMLVersionInline("4")}} only, {{obsolete_inline("5.0")}}
  - : Definiert einen Namen für den anklickbaren Bereich, damit er von älternen Webbrowserns mittels Scripting verwendet werden kann.

- {{htmlattrdef("media")}} {{HTMLVersionInline("5")}}
  - : Ein Hinweis zum Medium, für welches die verlinkte Ressource ausgelegt ist (zum Beispiel: `print und screen`.). Wenn es ausgelassen wird, wird der Standardwert `all` angenommen. Dieses Attribut sollte nur zusammen mit einem **href** Attribut verwendet werden.

- {{htmlattrdef("nohref")}} {{HTMLVersionInline("4")}} only, {{obsolete_inline("5.0")}}
  - : Gibt an, dass auf diesem Bereich kein Hyperlink hinterlegt ist. Es muss entweder dieses Attribut oder das **href** Attribut in diesem Element verwendet werden.> **Note:** **Verwendungshinweis:** Dieses Attribut ist seit HTML5 veraltet. Stattdessen ist das Auslassen des **href** Attributs ausreichend.

- {{htmlattrdef("rel")}} {{HTMLVersionInline("5")}}
  - : Dieses Attribut spezifiziert für Anker im **href** Attribut die Beziehung zwischen dem Zielobjekt und dem Linkobjekt. Der Wert ist eine kommaseparierte Liste von [Linktypen](/de/docs/Web/HTML/Link_types). Die Werte und deren Semantik werden von Autorität eingetragen, welche die entsprechenden Rechte am Dokument besitzt. Der Standardwert ist void, wenn kein anderer Wert angegeben ist. Dieses Attribut sollte nur zusammen mit einem **href** Attribut verwendet werden.
- {{htmlattrdef("shape")}}
  - : Die Form vom Hot-Spot. Die Spezifikationen für HTML 5 und HTML 4 definieren die Werte `rect` (rechteckiger Bereich), `circle` (kreisförmiger Bereich), `poly` (für ein Polygon) und `default` (für den ganzen Bereich außerhalb der definierten Bereiche). Viele Webbrowser, insbesonders Internet Explorer 4 und höher, unterstützen `circ`, `polygon` und `rectangle` als gültige Werte für **shape**, welche nicht spezifiziert sind {{Non-standard_inline}}.

- {{htmlattrdef("tabindex")}} {{HTMLVersionInline("4")}} only, {{obsolete_inline("5.0")}}
  - : Ein numerischer Wert, der die Position in der Reihenfolge des Tabbing im Webbrowser definiert. Dieses Attribut ist in HTML5 global.

- {{htmlattrdef("target")}}
  - : Dieses Attribut gibt an, wo die verlinkte Ressource dargestellt werden soll. In HTML4 ist das der Name oder ein Schlüssenwort für einen Frame. In HTML5 ist es der Name oder ein Schlüsselwort für einen _browsing context_ (zum Beispiel: tab, window oder inline frame). Die folgenden Schlüsselwörter haben eine spezielle Bedeutung:\* `_self`: Lädt die Antwort in denselben HTML4 Frame (oder HTML5 browsing context) wie der aktuelle. Das ist der Standardwert, wenn das Attribut nicht angegeben wird.
    - `_blank`: Lädt die Antwort in ein neues unbenanntes HTML4 Fenster oder HTML5 browsing context.
    - `_parent`: Lädt die Antwort in das HTML4 Frameset Parent des aktuellen Framee oder in den HTML5 parent browsing context des aktuellen. Wenn es kein Parent gibt, verhält sich diese Option wie `_self`.
    - `_top`: In HTML4: Lädt die Antwort in das volle, originale Fenster und löscht alle anderen Frames. In HTML5: Lädt die Antwort in den top-level browsing context (der browsing context, der ein Parent des aktuellen ist und selbst kein Parent hat). Wenn es kein Parent gibt, verhält sich diese Option wie `_self`.Dieses Attribut sollte nur zusammen mit einem **href** Attribut verwendet werden.
- {{htmlattrdef("type")}}
  - : Dieses Attribut spezifiziert den Medientyp des Linkziels als MIME Type. Normalerweise wird dies streng als beratende Information angeboten. In der Zukunft könnte ein Webbrowser aber ein kleines Icon zum Multimediatyp hinzufügen (zum Beispiel: ein Webbrowser zeigt ein Icon mit einem Lautsprecher an, wenn der Typ auf audio/wav gesetzt ist). Eine vollständige Liste der erkannten MIME types ist unter [http://www.w3.org/TR/html4/references.html#ref-MIMETYPES](http://www.w3.org/TR/html4/references.html#ref-MIMETYPES "Linkification: http://www.w3.org/TR/html4/references.html#ref-MIMETYPES") zu finden. Dieses Attribut sollte nur zusammen mit einem **href** Attribut verwendet werden.

## Beispiel

```html
<map name="primary">
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" nohref />
</map>
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Bemerkung |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-map-element.html#the-area-element', '&lt;area&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-area-element', '&lt;area&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.6.1', '&lt;area&gt;')}}                 | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{Compat("html.elements.area")}}

## Hinweise

Unter den HTML 3.2, 4.0 und 5 Spezifikationen ist der End-Tag `</area>` verboten.

Die XHTML 1.0 Spezifikation verlangt einen nachfolgenden Slash: `<area />`.

Die Attribute **id**, **class**, und **style** haben dieselbe Bedeutung wie die in HTML 4 definierten Kernattribute. Aber nur Netscape und Microsoft definieren sie.

Netscape 1–level Webbrowser verstehen das **target** Attribut in dem Sinne, dass es sich auf Frames bezieht.

HTML 3.2 definiert nur **alt**, **coords**, **href**, **nohref** und **shape**.

{{HTMLRef}}
