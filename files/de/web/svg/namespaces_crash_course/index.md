---
title: Namespace Kurzanleitung
slug: Web/SVG/Namespaces_Crash_Course
tags:
  - Namensraum
  - Vektorgrafik
translation_of: Web/SVG/Namespaces_Crash_Course
---
Als [XML](/de/docs/Glossary/XML "en-US/docs/Glossary/XML") Dialekt verfügt [SVG](/de/docs/Web/SVG "en-US/docs/Web/SVG") über einen eigenen _Namespace_. Es ist wichtig, Konzept und Anwendung von _Namespaces_ zu verstehen, will man SVG Inhalte selber erstellen. Der Veröffentlichung von Firefox 1.5 vorausgehende Versionen von SVG zollten diesen kaum Beachtung. _Namespaces_ sind jedoch wichtig für Multi-XML Dialekt unterstützende _User Agents_ wie z.B. [Gecko](/de/docs/Mozilla/Gecko "en-US/docs/Mozilla/Gecko")-basierte Browser, die sehr streng damit verfahren.
Nehmen Sie sich die Zeit, _Namespaces_ zu verstehen. Es wird Ihnen allerhand Kopfschmerzen in der Zukunft ersparen.

### Hintergrund

Es ist lange schon ein Ziel des W3C, die gleichzeitige Verwendung verschiedener Typen XML-basierter Inhalte im selben XML-Dokument zu ermöglichen.
So können z.B. SVG and [MathML](/de/docs/Web/MathML "en-US/docs/Web/MathML") direkt in ein XHTML-basiertes wissenschaftliches Dokument eingefügt werden. Die Möglichkeit, verschiedenartige Inhalte zu mischen, bietet viele Vorteile, setzte aber die Lösung sehr konkreter Probleme voraus.

Selbstverständlich beschreibt jeder XML Dialekt die Bedeutung seiner _Markup Tag_ Bezeichnungen in einer eigenen Spezifikation. Das Problem beim Mischen von Inhalten aus verschiedenen XML-Dialekten im selben XML-Dokument ist, dass _Tags_ aus dem einen Dialekt auch im anderen definiert sein können. So gibt es z.B. sowohl in XHTML wie auch in SVG das `<title>` _Tag_. Wie soll der _User Agent_ die beiden unterscheiden?
Woran erkennt der User Agent überhaupt die Bedeutung von XML Inhalten oder ob es sich um für ihn bedeutungslose Tags aus einer beliebigen XML-Datei handelt?

Man könnte fälschlicherweise annehmen, dass er dies anhand der `DOCTYPE` Deklaration erkennt. \_DTD_s wurden jedoch nicht mit Blick auf gemischte Inhalte entworfen und Versuche, \_DTD_s für gemischte Inhalte zu erstellen, sind letztlich gescheitert.

XML und einige XML Dialekte (einschließlich SVG) erfordern keine `DOCTYPE` Deklaration und SVG 1.2 wird nicht einmal eine haben. Der Umstand, daß `DOCTYPE` Deklarationen meist dem Typ des Seiteninhalts entsprechen, ist rein zufällig. DTDs werden zur Validierung, nicht zur Identifizierung von Inhalten benötigt. _User Agents_, die schummeln und XML-Inhalte per `DOCTYPE` Deklaration identifizieren, verursachen Probleme.

Korrekterweise sollte der XML-Inhalt dem _User Agent_ mitteilen, welchem Dialekt _Tag_ Bezeichnungen angehören, indem den _Tags_ explizite _Namespace Declarations_ zugewiesen werden.

### Namensraumzuweisung

Wie sehen Namensraumzuweisungen (_Namespace Declarations_) aus und wie werden sie konkret verwendet? Hier ein Beispiel:

    <svg xmlns="http://www.w3.org/2000/svg">
      <!-- weitere tags folgen... -->
    </svg>

Die _Namespace_ Deklaration ist durch das Attribut `xmlns` gegeben. Dieses Attribut besagt, daß das `<svg>` Tag und seine Kinder-Tags zu dem XML-Dialekt gehören, der dem Namespace `'http://www.w3.org/2000/svg'` entspricht, hier eben SVG.
Die _Namespace_ Deklaration hat nur einmal zu erfolgen und zwar im Ursprungs-Tag (_root tag_). Diese Deklaration definiert den _Namespace_ als Voreinstellung, sodass der _User Agent_ weiß, daß alle dem `<svg>` Tag untergeordneten Tags demselben _Namespace_ angehören. _User Agents_ prüfen den _Namespace_ um herauszufinden, ob sie mit dem enthaltenen _Markup_ umgehen können.

Der _Namespace_ Name (sprich das `xmlns` Attribut) ist ein einfacher _String_, sodass der Umstand, daß der SVG Namespace wie ein URI aussieht, nicht weiter wichtig ist. URIs werden allgemein benutzt, weil sie einzigartig sind und nicht, um irgendetwas zu verlinken. URIs werden tatsächlich so häufig verwendet, dass allgemein der Begriff "Namespace URI" gebräuchlicher ist als "Namespace Name".

#### Umdeklarierung eines vorgegebenen Namensraums

Wenn alle Nachkommen des Ursprungs-Tags automatisch dem dadurch vorgegebenen _Namespace_ angehören, wie streut man dann Inhalte aus einem anderen _Namespace_ ein? Die einfache Antwort lautet, man redefiniert den Vorgabe-_Namespace_. So zum Beispiel:

    <html xmlns="http://www.w3.org/1999/xhtml">
      <body>
        <!-- some XHTML tags here -->
        <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
          <!-- some SVG tags here -->
        </svg>
        <!-- some XHTML tags here -->
      </body>
    </html>

In diesem Beispiel deklariert das `xmlns` Attribut des ursprünglichen `<html>` Tags den vorgegebenen Namensraum als XHTML. Somit werden dieses und alle nachkommenden Tags als XHTML intepretiert, mit Ausnahme des `<svg>` Tags. Das `<svg>` Tag hat sein eigenes `xmlns` Attribut und deklariert somit den ursprünglichen Namensraum um, was bewirkt, dass dieses Tag mitsamt Nachkommen (sofern diese nicht ihrererseits Namensräume erneut umdeklarieren) vom User Agent als SVG erkannt wird.

Na also, war doch nicht schwer.

#### Namensraumpräfixe deklarieren

XML-Dialekte definieren außer eigenen Tags auch eigene Attribute. Ursprünglich gehören Attribute zu keinem Namensraum und sind nur deshalb einzigartig, weil sie einem Element mit einzigartigem, eindeutigem Namen zugeordnet sind.

Manchmal ist es jedoch nötig, Attribute zu definieren, die in vielen verschiedenen Elementen wiederverwendbar sein müssen und trotzdem dasselbe Attribut verkörpern, egal von welchem Element sie verwendet werden. Ein besonders gutes Beispiel hierfür ist das von der XLink Spezifikation definierte `href` Attribut. Dieses Attribut wird allgemein auch von anderen XML-Dialekten verwendet zum Verlinken externer Quellen. Aber wie teilt man dem _User Agent_ mit, zu welchem XML-Dialekt das Attribut gehört, z.B. XLink? Betrachten wir dazu folgendes Beispiel:

    <svg xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <script xlink:href="cool-script.js" type="text/ecmascript"/>
    </svg>

Hier sehen wir das etwas merkwürdige Attribut `xmlns:xlink`. Vom `xmlns` Bestandteil ist abzuleiten, daß hier eine weitere Namensraumdeklaration vorliegt. Allerdings wird hier nicht der Vorgabenamensraum festgelegt, sondern der Namensraum für ein "Namensraum Präfix". In diesem Fall wurde das Präfix `xlink` (der zweite Teil des Attributs) gewählt, um damit dem User Agent etwas über Attribute aus dem Namensraum XLink mitzuteilen.

Der Begriff Namensraum*präfix* deutet bereits an, dass damit Attribut- und Tag-Bezeichnungen in Ihrer Bedeutung eingegrenzt werden (ähnlich wie Vorsilben bzw. Präfixe die Bedeutung von Begriffen in menschlicher Sprache modifizieren). Dies geschieht indem das Namensraumpräfix und ein Doppelpunkt dem Attributnamen vorangestellt werden, wie im obigen Beispiel beim `<script>` Tag zu sehen. Das erklärt dem _User Agent_, daß dieses spezielle Attribut zu dem Namensraum gehört, der mit dem Namenraumpräfix XLink deklariert wurde, und ein Attribut ist, das mit derselben Bedeutung in anderen Tags verwendet werden kann.

Es ist ein XML Fehler, ein Präfix zu benutzen, das nicht an einen Namenraum gebunden wurde. Die mit dem `xmlns:xlink` Attribut erzeugte Bindung im obigen Beispiel ist unverzichtbar, wenn das `xlink:href` Attribut keinen Fehler hervorrufen soll. Dieses XLink Attribut wird regelmäßig in SVG benutzt, u.a. mit `<a>`, `<use>` und `<image>` Tags. Darum ist es eine gute Idee, die XLink Deklaration in allen Dokumenten miteinzubeziehen.

Es ist nützlich zu wissen, dass Namensraumpräfixe auch als _Tag_-Namen genutzt werden können. Dies vermittelt dem _User Agent_ die Zugehörigkeit eines bestimmten _Tags_ (in diesem Fall jedoch nicht die seiner Kinder!) zu dem Namensraum des Präfixes. Dieses Wissen erspart einige Verwirrung, falls man Markup wie dem folgenden begegnet:

    <html xmlns="http://www.w3.org/1999/xhtml"
          xmlns:svg="http://www.w3.org/2000/svg">
      <body>
        <h1>SVG embedded inline in XHTML</h1>
        <svg:svg width="300px" height="200px">
          <svg:circle cx="150" cy="100" r="50" fill="#ff0000"/>
        </svg:svg>
      </body>
    </html>

Weil hier das Namensraumpräfix verwendet wurde für das `<svg:svg>`Tag und sein Kind `<svg:circle>`, war es nicht nötig, den Standardnamensraum erneut zu deklarieren. Allgemein ist es jedoch besser, den Standardnamensraum erneut auszuweisen als eine Menge Tags derart mit Präfixen zu versehen.

### Arbeiten mit Namensraum-XML

Namensräume haben nicht nur Auswirkungen auf _Markup_, sondern auch auf _Scripte_. Wer _Scripte_ für Namensraum-XML wie z.B. SVG verfasst, sollte weiterlesen.

Die Empfehlung zu [DOM Level 1](http://www.w3.org/TR/REC-DOM-Level-1/) wurde geschaffen bevor [die ursprüngliche Empfehlung zu Namenräumen in XML](http://www.w3.org/TR/REC-xml-names/) freigegeben wurde. Deshalb kennt DOM1 keine Namensräume, was Probleme verursacht bei Namensraum-XML wie z.B. SVG. Um diese Probleme zu lösen, führte [DOM Level 2 Core](http://www.w3.org/TR/DOM-Level-2-Core/) Namenraum berücksichtigende Entsprechungen zu allen anwendbaren DOM Level 1 Methoden ein. Beim Kodieren von SVG ist es wichtig, diese [den Namensraum berücksichtigenden Methoden](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations) zu verwenden.
Die folgende Tabelle listet alle DOM1 Methoden auf, die nicht in SVG benutzt werden sollten, außerdem ihre DOM2 Entsprechungen, die stattdessen verwendet werden sollten.

| DOM1 (nicht verwenden)                                                                                       | DOM2 (stattdessen diese verwenden!)                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [createAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute)           | [createAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS)                                                                                            |
| [createElement](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement)               | [createElementNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)                                                                                                |
| [getAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode)         | [getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)                                                                                         |
| [getAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute)                 | [getAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)                                                                                               |
| [getElementsByTagName](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName) | [getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS) (also [added to Element](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)) |
| [getNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem)                 | [getNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS)                                                                                            |
| [hasAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#)                                    | [hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)                                                                                               |
| [removeAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute)           | [removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)                                                                                              |
| [removeNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem)           | [removeNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS)                                                                                      |
| [setAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute)                 | [setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)                                                                                               |
| [setAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)         | [setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)                                                                                         |
| [setNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem)                 | [setNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS)                                                                                            |

Das erste Argument für alle DOM2 Methoden, die den Namespace berücksichtigen, muss der Namespace Name (auch Namespace URI genannt) des betroffenen Elementes oder Attributes sein. Das ist für SVG **Elemente** 'http\://www\.w3.org/2000/svg'. Beachten Sie jedoch: die Empfehlung [Namespaces in XML 1.1](http://www.w3.org/TR/xml-names11/#defaulting) besagt, dass der Namespace Name für Attributes ohne Prefix keinen Wert enthält. Anders ausgedrückt, obwohl die Attribute zum Namespace des Tags gehören, verwenden Sie den Namespace Namen nicht, sonder **setzen den Namespace Namen auf null.** Um also ein SVG `rect` _Element_ mit `document.createElementNS()` zu erstellen, gehen Sie folgendermaßen vor:

```javascript
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

Um nun das `x` _Attribut_ des SVG `rect` Elementes auszulesen, verfahren Sie wie folgt:

```javascript
rect.getAttributeNS(null, 'x');
```

Beachten Sie, dass sich dies nicht auf Attribute _mit_ Namespace Prefix anwendet (Attribute, die nicht zum gleichen XML Dialect gehören, wie der Tag). Attribute wie `xlink:href` erfordern den Namespace Namen, der dem Prefix zugewiesen wurde (z.B. http\://www\.w3.org/1999/xlink für XLink). Um den Wert des `xlink:href` Attributs eines `<a>` Elements in SVG auszulesen, schreibt man:

```javascript
elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
```

Um Attribute mit einem Namespace zu setzen, wird empfohlen (aber nicht erzwungen), dass man auch ihr Prefix als zweites Argument übergibt, so dass das DOM später wieder einfacher nach to XML zurückkonvertriert werden kann (wenn man es z.B. zurück zum Server senden möchte). Ein beispiel:

```javascript
elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');
```

Als letztes Beispiel wird aufgezeigt wie man ein an `<image>` Element dynamisch mit Hilfe eines Scripts erzeugt:

```javascript
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
```

### Conclusion

Stellen Sie sicher, dass Sie die von Ihnen in der XML Datei verwendeten Namespaces deklarieren. Erfolgt diese Deklaration nicht, werden User Agents wie Firefox den Inhalt nicht erkennen und nur XML Markup anzeigen oder den Anwender informieren, dass ein XML Fehler aufgetreten ist. Es ist empfehlenswert, für das Erstellen einer neuen SVG Datei eine Vorlage zu verwenden, die alle für gewöhnlich verwendeten Namespace Deklarationen enthält. Hat man eine solche Vorlage nicht, kann man mit dem folgenden Code starten:

    <svg xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
    </svg>

Selbst wenn nicht alle aufgeführten Namespaces in einem Dokument verwendet werden, stören die Namespace Deklarationen nicht. Es kann einen vor Problemen bewahren, wenn man das Dokument zu einem späteren Zeitpunkt ergänzt und dabei Elemente aus einer der Deklarationen verwendet.

### Vollständiges Beispiel

Als vollständiges Beispiel dient [SVG: Namespaces Crash Course: Example](/de/docs/Web/SVG/Namespaces_Crash_Course/Example).
