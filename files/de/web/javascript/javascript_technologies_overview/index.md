---
title: JavaScript Technologieübersicht
slug: Web/JavaScript/JavaScript_technologies_overview
translation_of: Web/JavaScript/JavaScript_technologies_overview
original_slug: Web/JavaScript/JavaScript_technologieuebersicht
---
{{JsSidebar("Introductory")}}

## Einleitung

Während [HTML](/de/docs/Web/HTML) die Struktur einer Webseite definiert und [CSS](/de/docs/Web/CSS) den Style angibt, mit dem der Inhalt der Webseite dargestellt wird, ermöglicht [JavaScript](/de/docs/Web/JavaScript) das Erstellen von interaktiven Webseiten und Rich Web Applications.

Der Begriff "JavaScript" umfasst im Kontext von Web-Browsern mehrere Elemente. Darunter befinden sich der Sprachkern (ECMAScript) und einige [Web APIs](/de/docs/Web/Reference/API), die auch das DOM (Document Object Model) enthalten.

## Sprachkern von JavaScript (ECMAScript)

Der Sprachkern von JavaScript wurde vom ECMA TC39 Kommittee als die Sprache [ECMAScript](/de/docs/JavaScript/Language_Resources "en-US/docs/JavaScript/Language_Resources") standardisiert. Die aktuellste Version der Spezifikation ist [ECMAScript 5.1](http://ecma-international.org/ecma-262/5.1/).

Der Sprachkern wird auch in Umgebungen außerhalb von Webbrowsern eingesetzt, wie zum Beispiel in [node.js](http://nodejs.org/).

### Was gehört alles zu ECMAScript?

Neben anderen Dingen definiert ECMAScript folgende Punkte:

- Die Sprachsyntax (Regeln zum Parsen, Schlüsselwörter, Kontrollfluss, Objektinitialisierung...)
- Mechanismen zur Fehlerbehandlung (throw, try/catch, Erstellung von benutzerdefinierten Fehlertypen)
- Typen (boolean, number, string, function, object...)
- Das globale Objekt. In Webbrowsern ist dies das window Objekt. ECMAScript definiert hierbei nur die APIs, die nicht browserspezifisch sind. z.B.: `parseInt`, `parseFloat`, `decodeURI`, `encodeURI`...
- Vererbungsmechanismus basierend auf Prototypen
- Eingebaute Objekte und Funktionen (`JSON`, `Math`, `Array.prototype` Methoden, Object introspection methods...)
- Strict mode

### Webbrowserunterstützung

Im August 2014 implementierten die aktuellen Versionen der verbreitesten Webbrowser [ECMAScript 5.1](/de/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla). Es sind aber noch ältere Versionen in Verwendung, welche ECMAScript 3 und nur Teile von ECMAScript 5 implementieren. Moderne Webbrowsers implementieren bereits große Teile von [ECMAScript 6](/de/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla).

### Zukunft

Die vorgeschlagene vierte Version von ECMA-262 (**ECMAScript 4** oder **ES4**) hätte das erste große Update von ECMAScript seit der dritten Version, welche in 1999 veröffentlicht wurde, sein sollen. Im August 2008 wurde der Vorschlag zur vierten Version von ECMAScript unter dem Projekt [ECMAScript Harmony](http://wiki.ecmascript.org/doku.php?id=harmony:harmony) reduziert, welches zum Beispiel Proxies oder das `const` Schlüsselwort definiert. Der Fortschirtt kann [hier](http://wiki.ecmascript.org/doku.php) verfolgt werden. Die Veröffentlichung der sechsten Hauptversion des Standards wird im Jahr 2015 erwartet.

## Internationalization API

Die [ECMAScript Internationalization API Specification](http://ecma-international.org/ecma-402/1.0/) ist eine Erweiterung zur ECMAScript Sprachspezifikation, welche vom Ecma TC39 Kommittee standardisiert wird. Die Internationalization API bietet Textvergleiche (string Vergleiche), Formatierung von Zahlen, Datum und Zeit für JavaScript Applikationen, und lässt Applikationen die Sprache wählen, um die Funktionalität für die eigenen Bedürfnisse anpassen zu können. Der Standard wurde im Dezember 2012 freigegeben. Der Status über die Implementierung in Webbrowsern ist in der Documentation von [`Intl` object](/de/docs/JavaScript/Reference/Global_Objects/Intl) aufgezeichnet.

## Die Web APIs und der DOM

### WebIDL

Die [WebIDL specification](http://www.w3.org/TR/WebIDL/) verbindet die DOM Technologien und ECMAScript miteinander.

### Der Kern des DOM

Das Document Object Model (DOM) ist eine plattform- und **sprachunabhängige Konvention** zur Repräsentation und Interaktion mit Objekten in HTML, XHTML und XML Dokumenten. Objekte im **DOM Baum** können über Methoden angesprochen und durch Aufrufen ihrer Methoden verändert werden. Das Core Document Object Model ist von der W3C standardisiert worden. Es definiert sprachspezifische Schnittstellen, welche HTML und XML Dokuments als Objekte abstrahieren und Mechanismen zur Manipulation dieser Abstraktion. Zusätzlich definiert der DOM auch:

- Die Dokumentstruktur, ein Baummodell, und die DOM Event Architektur im [DOM core](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html): `Node`, `Element`, `DocumentFragment`, `Document`, `DOMImplementation`, `Event`, `EventTarget`, …
- Eine weniger strenge Definition der DOM Event Architektur und spezifische Events im [DOM events](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- Andere Definitionen wie zum Beispiel [DOM Traversal](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) und [DOM Range](http://html5.org/specs/dom-range.html).

Aus der Sicht von ECMAScript werden Objekte, die in der DOM Spezifikation definiert sind, "host objects" genannt.

### HTML DOM

[HTML](http://www.whatwg.org/html), die Markup-Sprache im Web, ist mit Bezug auf den DOM definiert. HTML liegt eine Schicht über den abstrakten Konzepten vom DOM Kern und definiert zusätzlich die _Bedeutung_ von Elementen. Der HTML DOM beinhaltet zum Beispiel die `className` Eigenschaft von HTML Elementen oder APIs wie {{ domxref("document.body") }}.

Die HTML Spezifikation definiert auch Einschränkungen auf Documenten. So müssen zum Beispiel die direkten Kindelemente der ungeordneten Liste `ul` alle `li` Elemente sein, welche die Listeneinträge repräsentieren. Im Allgemeinen verbietet die Spezifikation auch die Verwendung von Elementen und Attributen, die nicht im Standard definiert sind.

Suchen Sie nach dem [`Document` Objekt](/de/docs/DOM/document "https://developer.mozilla.org/en-US/docs/DOM/document"), [`Window` Objekt](/de/docs/DOM/window), oder anderen DOM Elementen? Besuchen Sie die [DOM Dokumentation](/de/docs/Web/API/Document_Object_Model "/en-US/docs/Gecko_DOM_Reference").

### Andere APIs

- Die `setTimeout` und die `setInterval` Funktionen wurden zuerst auf dem [`Window`](http://www.whatwg.org/html/#window) interface im HTML Standard definiert.
- [XMLHttpRequest.](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) API die das Senden von asynchronen HTTP Request ermöglicht.
- [CSS Object Model.](http://dev.w3.org/csswg/cssom/) Das CSSOM wird zur Abstraktion von CSS Regeln als Objekte verwendet.
- [WebWorkers.](http://www.whatwg.org/specs/web-workers/current-work/) API die die Verwendung von paralleler Verarbeitung ermöglicht.
- [WebSockets.](http://www.whatwg.org/C/#network) API die eine low-level bidirektionale Kommunikation ermöglicht.
- [Canvas 2D Context.](http://www.whatwg.org/html/#2dcontext) Grafik API für das canvas Element.

### Webbrowserunterstützung

Jeder Webbrowser muss erfahren, dass [der DOM ein Chaos](http://ejohn.org/blog/the-dom-is-a-mess/) ist. Die Einheitlichkeit der Webbrowserunterstützung variiert teilweise stark von Feature zu Feature. Die Ursache dafür ist, dass viele der wichtigen DOM Features kaum oder unklare Spezifikationen hatten. Zusätzlich implementieren verschiedene Webbrowser eigene inkompatible Features für überlappende Einsatzszenarien (wie das Event Model vom Internet Explorer). Der aktuelle Trend (Stand Juni 2011) ist, das die W3C und teilweise die WHATWG ältere Features detaillierter definieren, damit die Interoperabilität verbessert werden kann. Diesem Trend folgend verbessern Webbbrowser ihre Implementierungen basierend auf den detaillierten Spezifikationen.

Eine allgemeine aber möglicherweise nicht vollkommen zuverlässiger Ansatz für cross-browser Kompatibilität ist der Einsatz einer JavaScript Bibliothek. Diese Bibliotheken abstrahieren DOM Features und gewährleisten den APIs, dass sie in verschiedenen Webbrowsern einheitlich funktionieren. Einige der meistverbreitesten Frameworks sind [jQuery](http://jquery.com/), [prototype](http://www.prototypejs.org/), und [YUI](http://developer.yahoo.com/yui/).
