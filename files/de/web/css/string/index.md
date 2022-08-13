---
title: <string>
slug: Web/CSS/string
tags:
  - CSS
  - CSS Datentypen
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/string
---
{{CSSRef}}

Der `<string>` [CSS](/de/docs/Web/CSS) Datentyp repräsentiert eine Zeichenfolge. Er setzt sich aus [Unicode](http://de.wikipedia.org/wiki/Unicode) Zeichen umschlossen von doppelten (") oder einfachen (') Anführungszeichen zusammen. Ein in doppelte Anführungszeichen eingeschlossener String darf keine doppelten Anführungszeichen enthalten, außer sie sind durch einen Backslash (\\) escapt. Das gleiche Prinzip gilt für in einfache Anführungszeichen eingeschlossene Strings. Sie dürfen keine einfachen Anführungszeichen enthalten, außer sie sind durch einen Backslash (\\) escapt. Das Backslash Zeichen muss escapt sein, um Teil des Strings zu sein.

Zeilenumbrüche werden nicht akzeptiert, sofern sie nicht durch ein Zeilenvorschubzeichen wie \A oder \00000a escapt sind. Jedoch können Strings sich über mehrere Zeilen erstrecken. In diesem Fall muss das Zeilenumbruchszeichen durch einen Backslash (\\) als letztes Zeichen der Zeile escapt werden.

Zeichen können durch ihren [Unicode Codepunkt](https://de.wikipedia.org/wiki/Unicode#Codepunkte_und_Zeichen) in Hexadezimalschreibweise beschrieben werden, wenn sie durch einen Backslash (\\) escapt werden. \27 stellt dabei das einfache Anführungszeichen (') dar.

## Beispiele

```css
/* Einfaches Escapen von Anführungszeichen */
"String mit doppelten Anführungszeichen"
"String mit \" escapten doppelten Anführungszeichen"
'String mit einfachen Anführungszeichen'
"String mit \' escapten einfachen Anführungszeichen"

/* Zeilenumbruch in einem String */
"String mit \AZeilenumbruch"

/* String, der sich über zwei Zeilen erstreckt (diese zwei Strings sind exakt gleich) */
"Ein äußerst langer \
String"
"Ein äußerst langer String"
```

> **Hinweis:** Strings in doppelten Anführungszeichen können auch mit Hilfe von \22 escapt werden und Strings mit einfachen Anführungszeichen mit Hilfe von \27.

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                         |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#strings', '&lt;string&gt;')}}         | {{Spec2('CSS3 Values')}} | Keine signifikante Änderung in Bezug auf CSS Level 2 (Revision 1) |
| {{SpecName('CSS2.1', 'syndata.html#strings', '&lt;string&gt;')}} | {{Spec2('CSS2.1')}}         | Explizit definiert; erlaubt 6-stellige escapte Unicodezeichen     |
| {{SpecName('CSS1', '', '&lt;string&gt;')}}                             | {{Spec2('CSS1')}}         | Implizit definiert; erlaubt 4-stellige escapte Unicodezeichen     |

## Browser Kompatibilität

{{Compat("css.types.string")}}
