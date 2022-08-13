---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
tags:
  - Beginner
  - Guide
  - Introduction
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Introduction
original_slug: Web/JavaScript/Guide/Einführung
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammatik_und_Typen")}}

Dieses Kapitel stellt JavaScript vor und behandelt einige grundlegende Konzepte.

## Was solltest du bereits wissen

Für diese Einführung solltest du die folgenden Grundkenntnisse besitzen:

- Ein allgemeines Verständnis vom Internet und dem World Wide Web ({{Glossary("WWW")}}).
- Gute praktische Kenntnisse in der HyperText Markup Language ({{Glossary("HTML")}}).
- Etwas Programmiererfahrung. Falls du erst mit dem Programmieren beginnst, folge einem der Tutorials, die auf der Hauptseite zu [JavaScript](/de/docs/Web/JavaScript "/en-US/docs/") verlinkt sind.

## Wo findest du Informationen zu JavaScript

Die Dokumentation zu JavaScript im MDN umfasst Folgendes:

- [Learning the Web \[de\]](/de/Learn) vermittelt Informationen für Einsteiger und präsentiert grundlegende Konzepte der Programmierung und des Internets.
- [JavaScript Guide \[de\]](/de/docs/Web/JavaScript/Guide) (dieser Artikel) gibt einen Überblick über JavaScript und die Komponenten der Sprache.
- [JavaScript Referenz \[de\]](/de/docs/Web/JavaScript/Reference) enthält ausführliches Referenzmaterial über JavaScript.

Falls du dich das erste Mal mit JavaScript befasst, beginne einfach mit den Tutorials von [Learning the Web \[de\]](/de/Learn) und dem [JavaScript Guide \[de\]](/de/docs/Web/JavaScript/Guide "en/Core_JavaScript_1.5_Guide"). Sobald du mit den ersten Grundlagen vertraut bist, kannst du die [JavaScript Referenz \[de\]](/de/docs/Web/JavaScript/Reference) nutzen, um noch mehr über die einzelnen Methoden, Funktionen und Objekte von JavaScript zu erfahren.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache. Es ist eine kompakte und ressourcenschonende Sprache. Innerhalb einer Host-Umgebung kann JavaScript mit den Objekten seiner Umgebung verknüpft werden, um diese programmatisch zu steuern.

JavaScript beinhaltet eine Standardbibliothek von Objekten wie `Array`, `Date`, und `Math`, sowie einen Kern an Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Der JavaScript-Kern kann für eine Vielzahl von Anwendungsfällen erweitert werden, indem man ihn durch zusätzliche Objekte ergänzt. Beispiele:

- _Clientseitiges JavaScript_ erweitert die Kernsprache durch die Bereitstellung von Objekten, mit denen ein Browser und sein Document Object Model (DOM) steuern lassen. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente in einem HTML-Formular anzulegen und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache durch Bereitstellung von Objekten, die für die Ausführung von JavaScript auf einem Server von Bedeutung sind. Zum Beispiel ermöglichen es serverseitige Erweiterungen einer Applikation, mit einer Datenbank zu kommunizieren, Information von einem Aufruf der Applikation zum nächsten zu erhalten oder Änderungen an Dateien auf einem Server vorzunehmen.

## JavaScript und Java

JavaScript und Java gleichen einander in manchen Aspekten, sind in anderen aber grundlegend verschieden. Die Sprache JavaScript ähnelt Java, verfügt jedoch nicht über Javas statische Typisierung und seine strenge Typprüfung. JavaScript folgt weitgehend der Ausdruckssyntax, den Namenskonventionen und den elementaren Kontrollstrukturen von Java, was der Grund für die Umbenennung von LiveScript in JavaScript gewesen ist.

Im Gegensatz zu Javas durch Deklarationen aufgebautes System, von zur Compile-Zeit verfügbaren Klassen, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Zahl an Datentypen basiert, die numerische und Boolesche Werte sowie Zeichenketten repräsentieren. JavaScript besitzt ein prototypen-basiertes Objektmodell anstatt des verbreiteteren klassenbasierten. Das prototypen-basierte Modell liefert dynamische Vererbung; das bedeutet, was vererbt wird, kann zwischen einzelnen Objekten variieren. JavaScript unterstützt zudem Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Objekt Eigenschaften sein, ausgeführt als schwach typisierte Methoden.

JavaScript ist im Vergleich zu Java eine syntaktisch sehr freie Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht damit befassen, ob Methoden öffentlich, privat oder geschützt sind und Sie müssen keine Interfaces implementieren. Variablen, Parameter und Rückgabewerte von Funktionen sind nicht explizit typisiert.

Java ist eine auf schnelle Ausführung und Typsicherheit ausgelegte, klassenbasierte Programmiersprache. Typsicherheit bedeutet, dass Sie zum Beispiel keine Ganzzal in Java in eine Objektreferenz wandeln oder auf geschützten Speicher zugreifen können, indem Sie den Bytecode von Java manipulieren. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas Klassenvererbung und strenge Typisierung erfordern im Allgemeinen eng gekoppelte Objekthierarchien. Wegen dieser Anforderungen ist das Programmieren in Java komplexer als in JavaScript.

Im Gegensatz dazu steht JavaScript in der Tradition einer Reihe kleiner, dynamisch typisierter Sprachen wie HyperTalk und dBase. Diese Skriptsprachen stellen, dank ihrer einfacheren Syntax, spezialisierter eingebauter Funktionalität und minimalen Anforderungen, für die Objektgenerierung Programmierwerkzeuge für einen deutlich breiteren Adressatenkreis zu Verfügung.

| JavaScript                                                                                                                                                                                              | Java                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Typen von Objekten. Vererbung mittels des Prototypen-Mechanismus, jedes beliebige Objekt kann dynamisch um Eigenschaften und Methoden erweitert werden. | Klassenbasiert. Objekte werden in Klassen und Instanzen unterteilt, Vererbung erfolgt vollständig über die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften und Methoden dynamisch hinzugefügt werden. |
| Datentypen von Variablen werden nicht deklariert (dynamische Typisierung)                                                                                                                               | Datentypen von Variablen müssen deklariert werden (statische Typisierung)                                                                                                                                                 |
| Kein automatischer Schreibzugriff auf die Festplatte.                                                                                                                                                   | Kein automatischer Schreibzugriff auf die Festplatte.                                                                                                                                                                     |

Weitere Informationen zu den Unterschieden zwischen JavaScript und Java finden Sie im Kapitel [Einzelheiten des Objektmodells](/de/docs/Web/JavaScript/Guide/Details_of_the_Object_Model "JavaScript/Guide/Details of the Object Model").

## JavaScript und die ECMAScript-Spezifikation

JavaScript wird durch [Ecma International](http://www.ecma-international.org/) standardisiert — den europäischen Verband zur Standardisierung von Informations- und Telekommunikationssystemen (ECMA war vormals ein Akronym für 'European Computer Manufacturers Association'), um eine standardisierte, internationale Programmiersprache auf der Basis von JavaScript verfügbar zu machen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen standardkonformen Applikationen identisch. Unternehmen können die offene Sprachdefinition verwenden, um ihre eigene Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der Spezifikation ECMA-262 dokumentiert. Unter [Neu in JavaScript](/de/docs/Web/JavaScript/New_in_JavaScript) erfahren Sie mehr über die unterschiedlichen Versionen von JavaScript und den ECMAScript-Spezifikationen.

ECMA-262 ist auch von der [ISO](http://www.iso.ch/) (International Organization for Standardization) als ISO-16262 verabschiedet. Sie finden die Spezifikation auch auf [der Website von Ecma International](http://www.ecma-international.org/publications/standards/Ecma-262.htm). Die Spezifikation von ECMAScript beschreibt nicht das Document Object Model (DOM), welches durch das [World Wide Web Consortium (W3C)](http://www.w3.org/) und der [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org) standardisiert wird. Das DOM definiert die Art und Weise, in der HTML-Dokumentenobjekte für Ihr Skript sichtbar sind. Um ein besseres Verständnis der verschiedenen bei der Programmierung in JavaScript eingesetzten Technologien zu entwickeln, lesen Sie den Artikel [JavaScript Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologieuebersicht).

### JavaScript-Dokumentation vs. ECMAScript-Spezifikation

Die Spezifikation von ECMAScript besteht aus Anforderungen an eine Implementierung von ECMAScript; sie ist zweckdienlich, falls Sie standardkonforme Spracheigenschaften in Ihrer ECMAScript-Implementierung oder ihrer Laufzeitumgebung (wie SpiderMonkey in Firefox oder v8 in Chrome) realisieren wollen.

Das ECMAScript-Dokument soll nicht den Skriptprogrammierer unterstützen; nutzen Sie für Informationen zum Erstellen von Skripten die JavaScript-Dokumentation.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, mit der JavaScript-Programmierer möglicherweise nicht vertraut sind. Obwohl sich die Beschreibung der Sprache in ECMAScript unterscheiden kann, bleibt die Sprache selbst die gleiche. JavaScript unterstützt jede Funktionalität, die in der ECMAScript-Spezifikation genannt wird.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache in für JavaScript-Programmierer passender Form.

## Erste Schritte mit JavaScript

Die ersten Schritte mit JavaScript sind einfach: alles was Sie brauchen, ist einen aktuellen Browser. Diese Einführung nimmt auf einige Spracheigenschaften von JavaScript Bezug, die zur Zeit nur in den jüngsten Versionen von Firefox verfügbar sind, somit wird die Nutzung der aktuellsten Firefox-Version empfohlen.

Es gibt zwei Werkzeuge in Firefox, die zum Experimentieren mit JavaScript nützliche sind: die Web-Konsole and die JavaScript-Umgebung.

### Die Web-Konsole

Die [Web-Konsole](/de/docs/Tools/Web_Konsole) zeigt Ihnen Informationen zur aktuell geladenen Webseite an und beinhaltet zudem eine [Kommandozeile](/de/docs/Tools/Web_Konsole#Der_Kommandozeileninterpreter), die Sie nutzen können, um JavaScript-Ausdrücke im Kontext der aktuellen Seite auszuführen.

Um die Web-Konsole zu öffnen (Ctrl+Shift+K), wählen Sie "Web-Konsole" im Menü "Entwicklerwerkzeuge", das Sie im Menü von Firefox finden. Die Konsole wird am unteren Rand des Browserfensters angezeigt. Entlang des unteren Randes der Konsole befindet sich die Kommandozeile, in der Sie JavaScript eingeben können; die zugehörige Ausgabe erscheint im darüberliegenden Fensterbereich:

![](https://mdn.mozillademos.org/files/7363/web-console-commandline.png)

### JavaScript-Umgebung (Scratchpad)

Die Web-Konsole eignet sich hervorragend zur Ausführung einzelner Zeilen JavaScript, möchten Sie jedoch mehrere Zeilen ausführen können, ist das nicht besonders komfortabel und Ihren Beispielcode speichern können Sie mit der Web-Konsole auch nicht. Daher ist für komplexere Beispiele die [JavaScript-Umgebung](/de/docs/Tools/Scratchpad) die bessere Wahl.

Um die JavaScript-Umgebung zu öffnen (Shift+F4), wählen Sie "JavaScript-Umgebung" aus dem Menü "Entwicklerwerkzeuge", das Sie im Firefox-Menü finden. Die JavaScript-Umgebung öffnet sich in einem eigenen Fenster als Editor, mit dem Sie JavaScript schreiben und im Browser ausführen können. Sie können auch Skripte auf der Festplatte speichern bzw. laden.

![](https://mdn.mozillademos.org/files/13468/scratchpad.png)

### Hello world

Beginnen Sie mit dem Programmieren in JavaScript, indem Sie die JavaScript-Umgebung öffnen und Ihr erstes "Hello World"-Programm in JavaScript schreiben:

```js
function greetMe(yourName) {
  alert("Hello " + yourName);
}

greetMe("World");
```

Markieren Sie den Quelltext und drücken Sie Ctrl+R, um zu schauen, ob alles funktioniert.

Auf den folgenden Seiten macht Sie diese Einführung mit Syntax und Spracheigenschaften von JavaScript vertraut, sodass Sie bald komplexere Anwendungen schreiben können.

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammatik_und_Typen")}}
