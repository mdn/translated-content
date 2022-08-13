---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/JSON
---
{{JSRef}}

Das **`JSON`** Objekt enthält Methoden für das Einlesen und Konvertieren der [JavaScript Objekt Notation](https://json.org/) ({{glossary("JSON")}}) in JavaScript und umgekehrt. Es kann nicht aufgerufen oder erstellt werden. Außer seinen zwei Methoden hat das Objekt keine interessante Funktionalität.

## Beschreibung

### JavaScript Objekt Notation

JSON ist eine Syntax für das Serialisieren von Objekten, Arrays, Nummern, Strings, Wahrheitswerten und {{jsxref("null")}}. JSON basiert auf der JavaScript Syntax, jedoch ist sie leicht unterschiedlich: Manches JavaScript ist kein JSON und manches JSON ist kein JavaScript. Für mehr Informationen Siehe in dem Artikel [JSON: The JavaScript subset that isn't](http://timelessrepo.com/json-isnt-a-javascript-subset).

| JavaScript Typen   | JSON Unterschiede                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objekte und Arrays | Namen von Eigenschaften müssen als Strings in Doppelten Anführungszeichen (") geschrieben werden; Angefügte Kommas sind verboten.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Zahlen             | Führende Nullen sind verboten (JSON.stringify ignoriert diese Nullen, jedoch wirft JSON.parse einen SyntaxError); Nach einem Dezimalpunkt muss mindestens eine Ziffer folgen.                                                                                                                                                                                                                                                                                                                                                            |
| Strings            | Nur eine begrenzte Menge von Zeichen muss maskiert werden; Einige Kontrollzeichen sind verboten; Die Unicodezeichen Zeilenumbruch ([U+2028](http://unicode-table.com/en/2028/)) und Paragraphenumbruch ([U+2029](http://unicode-table.com/en/2029/)) sind erlaubt; Strings müssen in Doppelten Anführungszeichen (") geschrieben werden. Das folgenden Beispiel zeigt eine Situation in der {{jsxref("JSON.parse()")}} funktioniert, aber das Ausführen durch JavaScript zu einem {{jsxref("SyntaxError")}} führt:```js |

var code = '"\u2028\u2029"'; JSON.parse(code); // funktioniert eval(code); // Error

````|

Nachfolgend ist die komplette JSON Syntax zu sehen:

```js
JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

JSONNumber = - PositiveNumber
          or PositiveNumber
PositiveNumber = DecimalNumber
              or DecimalNumber . Digits
              or DecimalNumber . Digits ExponentPart
              or DecimalNumber ExponentPart
DecimalNumber = 0
             or OneToNine Digits
ExponentPart = e Exponent
            or E Exponent
Exponent = Digits
        or + Digits
        or - Digits
Digits = Digit
      or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
          or " StringCharacters "
StringCharacters = StringCharacter
                or StringCharacters StringCharacter
StringCharacter = any character
                  except " or \ or U+0000 through U+001F
               or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
              or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
        or A through F
        or a through f

JSONObject = { }
          or { Members }
Members = JSONString : JSON
       or Members , JSONString : JSON

JSONArray = [ ]
         or [ ArrayElements ]
ArrayElements = JSON
             or ArrayElements , JSON
````

Unbedeutende Whitespaces können überall eingebaut werden außer in eine `JSONNumber` (Nummern dürfen keine Whitespaces enthalten) und einen `JSONString` (In dem wird es als das entsprechende Whitespace interpretiert oder führt zu einem Fehler). Das Tab-Zeichen ([U+0009](http://unicode-table.com/en/0009/)), "carriage return"-Zeichen ([U+000D](http://unicode-table.com/en/000D/)), "line feed"-Zeichen ([U+000A](http://unicode-table.com/en/000A/)) und Leerzeichen ([U+0020](http://unicode-table.com/en/0020/)) sind die einzigen erlaubten Whitespace-Zeichen.

## Methoden

- {{jsxref("JSON.parse()")}}
  - : Liest einen String als JSON ein. Optional werden die Werte und die Eigenschaften Transformiert und zurückgegeben.
- {{jsxref("JSON.stringify()")}}
  - : Gibt ein JSON-String eines übergebenen Wertes zurück. Optional können nur bestimmte Eigenschaften zum JSON hinzugefügt werden oder Eigenschaften werden Ersetzt. Dieses wird durch eine Benutzerdefinierte Methode durchgeführt.

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES5.1', '#sec-15.12', 'JSON')}}             | {{Spec2('ES5.1')}}     | Initiale Definition. |
| {{SpecName('ES6', '#sec-json-object', 'JSON')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-json-object', 'JSON')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.JSON")}}

## Siehe auch

- {{jsxref("Date.prototype.toJSON()")}}
