---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef("Global_Objects", "String")}}

Объект **`String`** используется, чтобы представить и конструировать последовательность символов.

## Синтаксис

Строковые литералы могут быть следующих форм:

```
'строка текста'
"строка текста"
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ்"
```

Кроме регулярных печатных символов можно использовать специальные символы, которые можно закодировать, используя нотацию escape-последовательностей:

| Код      | Вывод                       |
| -------- | --------------------------- |
| `\0`     | нулевой символ (символ NUL) |
| `\'`     | одинарная кавычка           |
| `\"`     | двойная кавычка             |
| `\\`     | обратный слеш               |
| `\n`     | новая строка                |
| `\r`     | возврат каретки             |
| `\v`     | вертикальная табуляция      |
| `\t`     | табуляция                   |
| `\b`     | забой                       |
| `\f`     | подача страницы             |
| `\uXXXX` | Юникод-символ               |
| `\xXX`   | символ в кодировке Latin-1  |

Либо можно использовать глобальный объект `String` напрямую:

```
String(thing)
new String(thing)
```

### Параметры

- `thing`
  - : Всё, что может быть преобразовано в строку.

## Описание

Строки полезны для хранения данных, которые можно представить в текстовой форме. Некоторые из наиболее частых операций со строками — это проверка их {{jsxref("String.length", "длины", "", 1)}}, построение строки с помощью [операций строковой конкатенации + и +=](/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B), проверка на существование или местоположение подстрок с помощью метода {{jsxref("String.prototype.indexOf()", "indexOf()")}}, либо извлечение подстрок с помощью метода {{jsxref("String.prototype.substring()", "substring()")}}.

### Доступ к символам

Существует два способа добраться до конкретного символа в строке. В первом способе используется метод {{jsxref("String.prototype.charAt()", "charAt()")}}:

```js
return "кот".charAt(1); // вернёт "о"
```

Другим способом (введённым в ECMAScript 5) является рассмотрение строки как массивоподобного объекта, в котором символы имеют соответствующие числовые индексы:

```js
return "кот"[1]; // вернёт "о"
```

При доступе к символам посредством нотации с квадратными скобками, попытка удалить символ, или присвоить значение числовому свойству закончится неудачей, поскольку эти свойства являются незаписываемыми и ненастраиваемыми. Смотрите документацию по методу {{jsxref("Object.defineProperty()")}} для дополнительной информации.

### Сравнение строк

Разработчики на C имеют для сравнения строк функцию `strcmp()`. В JavaScript вы просто используете [операторы меньше и больше](/ru/docs/Web/JavaScript/Reference/Operators/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F):

```js
var a = "a";
var b = "b";
if (a < b) {
  // true
  print(a + " меньше чем " + b);
} else if (a > b) {
  print(a + " больше чем " + b);
} else {
  print(a + " и " + b + " равны.");
}
```

Подобный результат также может быть достигнут путём использования метода {{jsxref("String.prototype.localeCompare()", "localeCompare()")}}, имеющегося у всех экземпляров `String`.

### Разница между строковыми примитивами и объектами `String`

Обратите внимание, что JavaScript различает объекты `String` и значения строкового примитива (то же самое верно и для объектов {{jsxref("Global_Objects/Boolean", "Boolean")}} и {{jsxref("Global_Objects/Number", "Number")}}).

Строковые литералы (обозначаемые двойными или одинарными кавычками) и строки, возвращённые вызовом `String` в неконструкторном контексте (то есть, без использования ключевого слова {{jsxref("Operators/new", "new")}}) являются строковыми примитивами. JavaScript автоматически преобразует примитивы в объекты `String`, так что на строковых примитивах возможно использовать методы объекта `String`. В контекстах, когда на примитивной строке вызывается метод или происходит поиск свойства, JavaScript автоматически оборачивает строковый примитив объектом и вызывает на нём метод или ищет в нём свойство.

```js
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // выведет 'string'
console.log(typeof s_obj); // выведет 'object'
```

Строковые примитивы и объекты `String` также дают разные результаты при использовании глобальной функции {{jsxref("Global_Objects/eval", "eval()")}}. Примитивы, передаваемые в `eval()`, трактуются как исходный код; объекты же `String` трактуются так же, как и все остальные объекты, а именно: возвращается сам объект. Например:

```js
var s1 = "2 + 2"; // создаёт строковый примитив
var s2 = new String("2 + 2"); // создаёт объект String
console.log(eval(s1)); // выведет число 4
console.log(eval(s2)); // выведет строку '2 + 2'
```

По этим причинам код может сломаться, если он получает объекты `String`, а ожидает строковые примитивы, хотя в общем случае вам не нужно беспокоиться о различиях между ними.

Объект `String` также всегда может быть преобразован в его примитивный аналог при помощи метода {{jsxref("String.prototype.valueOf()", "valueOf()")}}.

```js
console.log(eval(s2.valueOf())); // выведет число 4
```

## Свойства

- {{jsxref("String.length")}}
  - : Хранит длину строки. Только для чтения.

## Методы

- {{jsxref("String.fromCharCode()")}}
  - : Возвращает строку, созданную из указанной последовательности значений Юникода.
- {{jsxref("String.fromCodePoint()")}} {{experimental_inline}}
  - : Возвращает строку, созданную из указанной последовательности кодовых точек Юникода.
- {{jsxref("String.raw()")}} {{experimental_inline}}
  - : Возвращает строку, созданную из сырой шаблонной строки.

## Общие методы объекта `String`

Методы экземпляров `String` также доступны в Firefox как часть JavaScript 1.6 (который не является частью стандарта ECMAScript) на объекте `String`, что позволяет применять эти методы к любому объекту:

```js
var num = 15;
console.log(String.replace(num, /5/, "2"));
```

{{jsxref("Global_Objects/Array", "Общие методы", "#Array_generic_methods", 1)}} также доступны для объекта {{jsxref("Global_Objects/Array", "Array")}}.

Следующая прослойка позволяет использовать их во всех браузерах:

```js
/*globals define*/
// Предполагаем, что все требуемые методы экземпляров String уже присутствуют
// (для них так же можно использовать полифилы, если их нет)
(function () {
  "use strict";

  var i,
    // Мы могли построить массив методов следующим образом, однако метод
    //   getOwnPropertyNames() нельзя реализовать на JavaScript:
    // Object.getOwnPropertyNames(String).filter(function(methodName) {
    //   return typeof String[methodName] === 'function';
    // });
    methods = [
      "quote",
      "substring",
      "toLowerCase",
      "toUpperCase",
      "charAt",
      "charCodeAt",
      "indexOf",
      "lastIndexOf",
      "startsWith",
      "endsWith",
      "trim",
      "trimLeft",
      "trimRight",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "localeCompare",
      "match",
      "search",
      "replace",
      "split",
      "substr",
      "concat",
      "slice",
    ],
    methodCount = methods.length,
    assignStringGeneric = function (methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function (arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i < methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
})();
```

## Примеры

### Пример: преобразование в строку

Объект `String` можно использовать как «безопасную» альтернативу методу {{jsxref("String.prototype.toString()", "toString()")}}, так как хотя он обычно и вызывает соответствующий метод `toString()`, он также работает и для значений {{jsxref("Global_Objects/null", "null")}} и {{jsxref("Global_Objects/undefined", "undefined")}}. Например:

```js
var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("DOMString")}}
- [Двоичные строки](/ru/docs/Web/API/DOMString/Binary)
