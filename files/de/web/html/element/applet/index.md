---
title: <applet>
slug: Web/HTML/Element/applet
tags:
  - Element
  - HTML
  - Obsolete
  - Referenz
  - Web
translation_of: Web/HTML/Element/applet
---
{{obsolete_header}}

## Übersicht

Das HTML Applet Element (`<applet>`) identifiziert die Einbindung eines Java Applets.

> **Note:** **Hinweis zur Benutzung:** Dieses Element wurde in HTML5 entfernt und sollte nicht mehr verwendet werden. Stattdessen sollten Webentwickler das generische {{HTMLElement("object")}} Element verwenden.

## Attribute

- {{htmlattrdef("align")}}
  - : Dieses Attribut wird verwendet um die Position des Applets relativ zum Inhalt auf der Seite zu bestimmen. Die HTML 4.01 Spezifikation definiert die Werte **bottom**, **left**, **middle**, **right** und **top**, während Microsoft und Netscape ebenso **absbottom**, **absmiddle**, **baseline**, **center** und **texttop** unterstützen.
- {{htmlattrdef("alt")}}
  - : Dieses Attribut bewirkt eine beschreibende Textalternative welche angezeigt wird, wenn der Browser kein Java unterstützt. Designer sollten daran denken, dass Inhalte die innerhalb des `<applet>` Elements liegen, auch als Alternativtext dargestellt werden könnten.
- {{htmlattrdef("archive")}}
  - : Dieses Attribut verweist zu einer archivierten oder komprimierten Version des Applets und der damit assoziierten Klassen-Datei. Die Anwendung dieses Attributs kann dabei helfen, die Download-Zeit zu verkürzen.
- {{htmlattrdef("code")}}
  - : Dieses Attribut spezifiziert die URL der Applet Klassendatei die geladen und ausgeführt wird. Applet Dateinamen werden identifiziert mit Hilfe der Extension .class. Die vom Code angegebene URL kann in Bezug mit dem codebase-Attribut stehen.
- {{htmlattrdef("codebase")}}
  - : Dieses Attribut gibt die absolute oder die relative URL vom Pfad der Applet-Klassendatei an, welche vom code Attribut gespeichert wird.
- {{htmlattrdef("datafld")}}
  - : Dieses Attribut, unterstützt vom Internet Explorer 4 oder höher, spezifiziert den Spaltennamen des Data Source Objects welches die gebundenen Daten liefert. Es kann genutzt werden, um die verschiedenen {{HTMLElement("param")}} Elemente aufzulisten, welche an das Java Applet durchgereicht werden.
- {{htmlattrdef("datasrc")}}
  - : Ähnlich wie `datafld`, wird dieses Attribut zur Datenbindung unter dem Internet Explorer 4 genutzt. Es bestimmt die ID des Data Source Objects, welches die Daten liefert, die mit {{HTMLElement("param")}} Elementen innerhalb des Applets assoziiert sind.
- {{htmlattrdef("height")}}
  - : Dieses Attribut spezifiziert die Höhe in Pixeln, die das Applet benötigt.
- {{htmlattrdef("hspace")}}
  - : Dieses Attribut spezifiziert zusätzlichen horizontalen Platz in Pixeln, der für das Applet reserviert wird.
- {{htmlattrdef("mayscript")}}
  - : In der Netscape Implementierung erlaubt dieses Attribut den Zugriff auf Applets durch Programme, die innerhalb einer Skriptsprache im Dokument eingebettet sind.
- {{htmlattrdef("name")}}
  - : Dieses Attribut weist dem Applet einen Namen zu, sodass es von anderen Ressourcen (vorwiegend Scripts) identifiziert werden kann.
- {{htmlattrdef("object")}}
  - : Dieses Attribut spezifiziert die URL einer serialisierten Darstellung eines Applets.
- {{htmlattrdef("src")}}
  - : Wenn es nach dem Internet Explorer 4 und höher geht, dient dieses Attribut dazu, eine URL für eine verknüpfte Datei eines Applets zu spezifizieren. Die Bedeutung und die Benutzung ist unklar und kein Teil des HTML-Standards.
- {{htmlattrdef("vspace")}}
  - : Dieses Attribut spezifiziert zusätzlichen vertikalen Platz in Pixeln, der für das Applet ober- und unterhalb reserviert wird.
- {{htmlattrdef("width")}}
  - : Dieses Attribut spezifiziert die Breite in Pixeln, die das Applet benötigt.

## Beispiel

```html
<applet code="game.class" align="left" archive="game.zip" height="250" width="350">
  <param name="difficulty" value="easy">
  <b>Sorry, du brauchst Java um dieses Spiel zu spielen.</b>
</applet>
```

## Browser Kompatibilität

{{Compat}}

## Anmerkungen

Die W3C Spezifikation rät von der Benutzung des `<applet>` Elements ab und bevorzugt die Nutzung des {{HTMLElement("object")}} Elements. Unter der strikten Definition von HTML 4.01 ist dieses Element veraltet und überflüssig in HTML5.

{{HTMLRef}}
