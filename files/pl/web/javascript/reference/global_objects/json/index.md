---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - Obiekt
translation_of: Web/JavaScript/Reference/Global_Objects/JSON
original_slug: Web/JavaScript/Referencje/Obiekty/JSON
---
{{JSRef}}

Obiekt **`JSON`** zawiera metody do analizy składniowej [JavaScript Object Notation](https://json.org/) ({{glossary("JSON")}}) i konwertowania wartości do formatu JSON. Nie może być on wywołany lub utworzony i oprócz jego dwóch metod, sam w sobie nie ma interesującej funkcjonalności .

## Różnice między językiem JavaScript i formatem JSON

Format JSON jest składnią do serializowania obiektów, tablic, liczb, napisów, wartości logicznych oraz {{jsxref("null")}}. Bazuje na składni języka JavaScript, ale różni się od niego: _nie każdy_ JavaScript to JSON.

**Obiekty i tablice**: Nazwy właściwości muszą znajdować się w podwójnym cudzysłowie;  przecinki na końcach ([trailing commas](/pl/docs/Web/JavaScript/Reference/Trailing_commas)) nie są dozwolone.

**Liczby**: Zera nieznaczące są zakazane. Po przecinku musi się znaleźć co najmniej jedna liczba. Wartości NaN i Infinity nie są wspierane.

**Każdy tekst w formacie JSON jest poprawnym wyrażeniem w języku JavaScript** – ale wyłącznie w silnikach JavaScript, które mają zaimplementową możliwości, [by wszystkie dokumenty w formacie JSON były zgodne ze standardem ECMA-262](https://github.com/tc39/proposal-json-superset). W przeciwnym razie, znaki U+2028 (separator linii) i U+2029 (separator akapitów) są dozwolone w literałach znakowych i kluczach w formacie JSON, ale ich użycie w tym konteksie w języku JavaScript skutkuje zgłoszeniem błędu {{jsxref("SyntaxError")}}.

Rozważmy przykład, gdzie funkcja {{jsxref("JSON.parse()")}} przetwarza poniższy literał znakowy jako obiekt JSON, a funkcja [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) wykonuje go jako tekst w języku JavaScript:

```js
var code = '"\u2028\u2029"';
JSON.parse(code); // działa poprawnie
eval(code); // zgłasza błąd SyntaxError
```

Inne różnice to zgoda wyłącznie na literały znakowe w podwójnym cudzysłowie, brak zabezpieczenia dla {{jsxref("undefined")}} lub komentarzy.

## Pełna składnia JSON

Pełna składnia JSON jest następująca:

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

Nieznaczące białe znaki nie mogą występować tylko wewnątrz `JSONNumber` (liczby nie mogą zawierać białych znaków) oraz `JSONString` (gdzie jest to interpretowane jako odpowiedni znak w litarale znakowym lub może spowodować błąd). Tabulacja pozioma ([U+0009](https://unicode-table.com/pl/#0009)), powrót karetki ([U+000D](https://unicode-table.com/pl/#000D)), nowa linia ([U+000A](https://unicode-table.com/pl/#000A)) oraz spacja ([U+0020](https://unicode-table.com/pl/#0020)) to jedyne prawidłowe białe znaki.

## Metody

- {{jsxref("JSON.parse()")}}
  - : Parsuje literał znakowy na JSON, opcjonalnie przekształca otrzymaną wartosć i ją zwraca. Każde naruszenie składni JSON, wliczając w różnice między językiem JavaScript i JSON, powodują zgłosznie błędu {{jsxref("SyntaxError")}}. Opcja `reviver` pozwala zinterpretować, co `replacer` użył zamiast innych typów danych.
- {{jsxref("JSON.stringify()")}}
  - : Zwraca literał znakowy JSON odpowiadający określonej wartosci, ewentualnie zawierający jedynie niektóre wartości lub ze zamienionymi wartościami w sposób zdefinowany przez użytkownika. Domyślnie, wszystkie instance {{jsxref("undefined")}} są zastępowane przez {{jsxref("null")}} i inne niewspierane typy danych są ocenzurowywane. Opcja `replacer` pozwala określić inne zachowanie.

## Specyfikacja

| Specification                                                        | Status                       | Comment             |
| -------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES5.1', '#sec-15.12', 'JSON')}}             | {{Spec2('ES5.1')}}     | Initial definition. |
| {{SpecName('ES6', '#sec-json-object', 'JSON')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-json-object', 'JSON')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność

{{Compat("javascript.builtins.JSON")}}

## Zobacz także

- {{jsxref("Date.prototype.toJSON()")}}

## Tools

- [JSON Diff](http://jsoncompare.org/) checker.
- [JSON Beautifier/editor](http://jsonbeautifier.org/).
- [JSON Parser](http://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/).
