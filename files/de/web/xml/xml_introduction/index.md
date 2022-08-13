---
title: XML_Einführung
slug: Web/XML/XML_introduction
tags:
  - XML
translation_of: Web/XML/XML_introduction
original_slug: Web/XML/XML_Einführung
---
### Was ist XML?

XML ist eine Auszeichnungssprache ähnlich wie HTML. XML steht für **Extensible Markup Language** (Erweiterbare Auszeichnungssprache) und ist eine [Standardisierte](http://www.w3.org/) Spezifikation, die für allgemeingültige Zwecke genutzt werden kann. Das bedeutet, dass, im Gegensatz zu anderen Auszeichnungssprachen, XML nicht vordefiniert ist, sodass eigene Tags definiert werden müssen. Die hauptsächliche Aufgabe der Sprache besteht darin, Daten über unterschiedliche Systeme auszutauschen, so wie im Internet.

Es gibt eine Vielzahl an Sprachen, die auf XML basieren: Einige Beispiele sind: [XHTML](/de/XHTML "de/XHTML"), [MathML](/de/MathML "de/MathML"), [SVG](/de/SVG "de/SVG"), [XUL](/de/XUL "de/XUL"), [XBL](/de/XBL "de/XBL"), [RSS](/de/RSS "de/RSS"), und [RDF](/de/RDF "de/RDF").

### "Korrektes" XML

Ein XML-Dokument kann erst dann als korrekt bezeichnet werden, wenn es wohlgeformt (well-formed) ist, was bedeutet, dass es allen Syntaxregeln für XML entspricht. Die meisten Browser (einschließlich Mozilla) bieten einen Debugger, der bei nicht wohlgeformten Dokumenten warnt.

Ein Beispiel für ein Dokument, welches nicht korrekt formatiert ist, wäre ein Element mit einem öffnenden aber ohne einem schließenden Tag und welches nicht selbst-schließend ist. Das folgende Beispiel ist demnach fehlerhaft:

**Beispiel**

    <nachricht>
     <warnung>
       Hallo Welt
    </nachricht>

Das korrekte Beispiel würde so aussehen:

``

    <nachricht>
     <warnung>
       Hallo Welt
     </warnung>
    </nachricht>

Damit ein XML Dokument valide ist, müssen einige semantische Regeln erfüllt sein, welche normalerweise in einem XML Schema oder einer [Dokumenttyp-Definition](/de/DTD "de/DTD") festgelegt werden. Ein Beispiel für nicht valides XML wäre ein Dokument, das ein nicht definiertes Tag enthält. Zum Beispiel, wenn ein _warnung_ Tag niemals zuvor definiert wurde.

### Entities

Wie in HTML, gibt es in XML sogenannte _Entities_, um spezielle, reservierte Zeichen (wie das Größer-als-Zeichen, welches für Tags benutzt wird) zu verwenden. Es gibt fünf nennenswerte, die man wissen sollte:

    &lt;  <        Kleiner-als-Zeichen
    &gt;  >        Größer-als-Zeichen
    &amp;  &        Ampersand (Und Zeichen).
    &quot;  "        Anführungszeichen.
    &apos;  '        Apostroph.

Da nur fünf _Entities_ deklariert sind, können weitere mittels der [Dokumenttyp-Definition](/de/DTD "de/DTD") hinzugefügt werden.

     <?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE body [
         <!ENTITY warnung "Warnung: Irgendetwas ist schief gelaufen... Bitte lade neu und versuch es nochmal.">
     ]>
     <body>
       <nachricht> &warnung; </nachricht>
     </body>

### XML Darstellung

Normalerweise wird XML zur Beschreibung von Daten benutzt, es gibt allerdings Wege, um XML-Daten darzustellen. Ohne eine Darstellungsart festzulegen, wird der rohe XML-Code im Browser angezeigt.

Eine Art XML darzustellen ist, [CSS](/de/CSS "de/CSS") in XML mittels der `xml-stylesheet` Anweisung zu integrieren:

    <?xml-stylesheet type="text/css" href="stylesheet.css"?>

Oder aber man benutzt das mächtige [XSLT](/de/XSLT "de/XSLT"), das XML-Daten in HTML umwandeln kann oder auch in viele andere Dinge; die Möglichkeiten sind fast grenzenlos.

    <?xml-stylesheet type="text/xsl" href="transform.xsl"?>

### Empfehlungen

Dieser Artikel bietet nur eine schnelle Einführung in XML mit ein paar kleinen Beispielen, die einen Einblick liefern und Lust auf mehr machen sollen. Für weitere Details über XML, gibt es einige tiefer gehende Artikel im Web.

Um ein besseres Verständnis für XML zu bekommen bietet sich auch an, mehr über die HyperText Markup Language ([HTML](/de/HTML "de/HTML")) zu lernen.

Einige nützliche Links (Englisch):

- [W3Schools: XML Tutorial](http://www.w3schools.com/xml/)
- [W3Schools: DTD Tutorial](http://www.w3schools.com/dtd/)
- [XML.com](http://www.xml.com/)
- [Extensible Markup Language (XML) auf W3.org](http://www.w3.org/XML/)
- [_XML Example_ auf _A List Apart_](http://www.alistapart.com/d/usingxml/xml_uses_a.html)
- [_Using XML auf A List Apart_](http://www.alistapart.com/articles/usingxml/)

### Informationen zu diesem Dokument

- Autor(en): [Justin G. Shreve](http://justinshreve.com)
- Letzte Aktualisierung: 4. August 2007

{{ languages( { "en": "en/XML_Introduction", "es": "es/Introducci\u00f3n_a_XML", "fr": "fr/Introduction\_\u00e0\_XML", "ja": "ja/XML_Introduction", "pl": "pl/Wprowadzenie_do_XML-a", "zh-cn": "cn/XML\_\u4ecb\u7ecd" } ) }}
