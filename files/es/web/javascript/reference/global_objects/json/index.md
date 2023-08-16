---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef("Objetos_globales", "JSON")}}

## Resumen

El objeto JSON contiene métodos para analizar [JavaScript Object Notation](http://json.org/) (JSON) y convertir valores a JSON. No puede ser llamado o construído, y aparte de estas dos propiedades, no tiene funcionalidad interesante por sí mismo.

## Descripción

### JavaScript Object Notation

JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis JavaScript pero es diferente a ella: algo JavaScript no es JSON, y algo JSON no es JavaScript. Mira también: [JSON: The JavaScript subset that isn't](http://timelessrepo.com/json-isnt-a-javascript-subset).

| Tipo JavaScript    | Diferencia JSON                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetos y arreglos | Los nombres de las propiedades deben tener doble comilla; las comas finales están prohibidas.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Números            | Los ceros a la izquierda están prohibidos; un punto decimal debe ser seguido al menos por un dígito.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Cadenas            | Solo un limitado conjunto de caracteres pueden ser de escape; ciertos caracteres de control estan prohibidos; los caracteres de separador de linea Unicode (U+2028) y el separador de parrafo (U+2029) son permitidos; las cadenas deben estar entre comillas dobles. Mira el siguiente ejemplo donde {{jsxref("JSON.parse")}} funciona bien y un{{jsxref("SyntaxError")}} es generado cuando se evalua el codigo como JavaScript: <pre lang="js">var code = '"\u2028\u2029"';<br>JSON.parse(code); // works fine<br>eval(code); // fails</pre> |

La sintaxis JSON completa es la siguiente:

```js-nolint
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
```

Espacios en blanco insignificantes pueden estar presentes en cualquier lugar excepto en un _JSONNumber_ (los números no deben contener ningún espacio) o en una _JSONString_ (donde es interpretado como el caracter correspondiente en la cadena, o podría causar un error). Los caracteres de Tabulación (U+0009), de retorno de carro (U+000D), de nueva línea (U+000A), y de espacio (U+0020) son los únicos caracteres de espacios en blanco válidos.

## Métodos

- {{jsxref("JSON.parse()")}}
  - : Analiza una cadena de texto JSON, opcionalmente transformando el valor producido y sus propiedades, retornando el valor.
- {{jsxref("JSON.stringify()")}}
  - : Devuelve un string JSON correspondiente al valor especificado, incluyendo opcionalmente ciertas propiedades o reemplazando valores de propiedades de la manera definida por el usuario.

## Polyfill

El objeto JSON no es soportado por navegadores antiguos. Se puede solucionar esto insertando el siguiente código al inicio del script, permitiendo usar el objeto JSON en navegadores que no soportan su implementación de forma nativa (por ejemplo en Internet Explorer 6).

El siguiente algoritmo es una imitación del objeto JSON nativo:

```js
if (!window.JSON) {
  window.JSON = {
    parse: function (sJSON) {
      return eval("(" + sJSON + ")");
    },
    stringify: function (vContent) {
      if (vContent instanceof Object) {
        var sOutput = "";
        if (vContent.constructor === Array) {
          for (
            var nId = 0;
            nId < vContent.length;
            sOutput += this.stringify(vContent[nId]) + ",", nId++
          );
          return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
        }
        if (vContent.toString !== Object.prototype.toString) {
          return '"' + vContent.toString().replace(/"/g, "\\$&") + '"';
        }
        for (var sProp in vContent) {
          sOutput +=
            '"' +
            sProp.replace(/"/g, "\\$&") +
            '":' +
            this.stringify(vContent[sProp]) +
            ",";
        }
        return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
      }
      return typeof vContent === "string"
        ? '"' + vContent.replace(/"/g, "\\$&") + '"'
        : String(vContent);
    },
  };
}
```

Los objectos [JSON2](https://github.com/douglascrockford/JSON-js) y [JSON3](http://bestiejs.github.com/json3) son mas complejos que el objeto JSON ya que manejan [polyfills](http://remysharp.com/2010/10/08/what-is-a-polyfill/).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Using native JSON](/es/docs/Web/JavaScript/Guide/Using_native_JSON)
- {{jsxref("Date.prototype.toJSON()")}}
