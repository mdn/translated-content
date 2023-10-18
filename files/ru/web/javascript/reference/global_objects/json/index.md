---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef("Global_Objects", "JSON")}}

## Сводка

Объект **`JSON`** содержит методы для разбора [объектной нотации JavaScript](http://json.org/) (JavaScript Object Notation — сокращённо {{glossary("JSON")}}) и преобразования значений в JSON. Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.

## Описание

### Объектная нотация JavaScript

JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения {{jsxref("null")}}. Он основывается на синтаксисе JavaScript, однако всё же отличается от него: не каждый код на JavaScript является JSON, и не каждый JSON является кодом на JavaScript. Смотрите также статью [JSON: подмножество JavaScript, которым он не является](http://timelessrepo.com/json-isnt-a-javascript-subset) (на английском).

<table>
  <caption>
    Различия между JavaScript и JSON
  </caption>
  <thead>
    <tr>
      <th scope="col">Тип JavaScript</th>
      <th scope="col">Отличия от JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Объекты и массивы</td>
      <td>
        Имена свойств должны быть строками, заключёнными в двойные кавычки;
        конечные запятые запрещены.
      </td>
    </tr>
    <tr>
      <td>Числа</td>
      <td>
        Ведущие нули запрещены; перед десятичной запятой обязательно должна быть
        хотя бы одна цифра.
      </td>
    </tr>
    <tr>
      <td>Строки</td>
      <td>
        <p>
          Только ограниченный набор символов может быть заэкранирован; некоторые
          управляющие символы запрещены; разрешены юникодные символы
          разделительной линии (<a href="http://unicode-table.com/ru/2028/"
            >U+2028</a
          >) и разделительного параграфа (<a
            href="http://unicode-table.com/ru/2029/"
            >U+2029</a
          >); строки должны быть заключены в двойные кавычки. Смотрите следующий
          пример, в котором метод {{jsxref("JSON.parse()")}}
          отрабатывает без проблем, а при вычислении кода как JavaScript
          выбрасывается исключение {{jsxref("SyntaxError")}}:
        </p>
        <pre class="brush: js">
var code = '"\u2028\u2029"';
JSON.parse(code); // работает
eval(code); // ошибка
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Ниже представлен полный синтаксис JSON:

```
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

Во всех продукциях могут присутствовать незначащие пробельные символы, за исключением продукций `ЧислоJSON` (числа не должны содержать пробелов) и `СтрокаJSON` (где они интерпретируются как часть строки или возбуждают ошибку). Пробельными символами считаются символы табуляции ([U+0009](http://unicode-table.com/ru/0009/)), возврата каретки ([U+000D](http://unicode-table.com/ru/000D/)), перевода строки ([U+000A](http://unicode-table.com/ru/000A/)) и, собственно, пробела ([U+0020](http://unicode-table.com/ru/0020/)).

## Методы

- {{jsxref("JSON.parse()")}}
  - : Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.
- {{jsxref("JSON.stringify()")}}
  - : Возвращает строку JSON, соответствующую указанному значению, возможно с включением только определённых свойств или с заменой значений свойств определяемым пользователем способом.

## Полифил

Объект `JSON` не поддерживается старыми браузерами. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать объект `JSON` в реализациях, которые его ещё не поддерживают (например, в Internet Explorer 6).

Следующий алгоритм имитирует работу настоящего объекта `JSON`:

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

Более сложными известными [полифилами](http://remysharp.com/2010/10/08/what-is-a-polyfill/) для объекта `JSON` являются проекты [JSON2](https://github.com/douglascrockford/JSON-js) и [JSON3](http://bestiejs.github.com/json3).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование родного объекта `JSON`](/ru/docs/Web/JavaScript/Guide/Using_native_JSON)
- {{jsxref("Date.prototype.toJSON()")}}
