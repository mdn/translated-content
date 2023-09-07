---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
---

{{jsSidebar("Statements")}}

## Основная информация

**Инструкция `throw`** позволяет генерировать исключения, определяемые пользователем. При этом выполнение текущей функции будет остановлено (инструкции после `throw` не будут выполнены), и управление будет передано в первый блок [`catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch) в стеке вызовов. Если `catch` блоков среди вызванных функций нет, выполнение программы будет остановлено.

## Синтаксис

```
throw выражение;
```

- `выражение`
  - : Определяемое пользователем исключение.

## Описание

Используйте инструкцию throw для генерирования исключения. Когда вы генерируете исключение (throw), _выражение_ задаёт значение исключения. Каждое из следующих throw создаёт исключение:

```js
throw "Error2"; // генерирует исключение, значением которого является строка
throw 42; // генерирует исключение, значением которого является число 42
throw true; // генерирует исключение, значением которого является логическое значение true
```

Также стоит отметить, что на инструкцию `throw` влияет [автоматическая вставка точки с запятой (ASI)](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion). Поэтому не допускаются разрывы строк между инструкцией `throw` и `выражением`.

## Примеры

### Пример: Генерирование объекта в качестве исключения

Можно указать объект в качестве исключения. Затем можно получить ссылку на этот объект и доступ ко всем его свойствам в блоке catch. Следующий пример создаёт объект ошибки, который имеет тип UserException, и используется для генерации исключения.

```js
function UserException(message) {
  this.message = message;
  this.name = "Исключение, определённое пользователем";
}
function getMonthName(mo) {
  mo = mo - 1; // Нужно скорректировать номер месяца согласно индексам массива (1 = Jan, 12 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) return months[mo];

  throw new UserException("Неверно указан номер месяца");
}

let monthName;

try {
  // statements to try
  const myMonth = 15; // 15 находится вне границ массива, что приведёт к исключению
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "неизвестен";
  logMyErrors(e.message, e.name); // передаём исключение в обработчик ошибок
}
```

### Пример: Другой пример генерации объекта в виде исключения

Следующий пример проверяет, является ли строка, переданная в функцию, почтовым индексом США. Если индекс имеет недопустимый формат, будет сгенерировано исключение посредством создания объекта, имеющего тип `ZipCodeFormatException`.

```js
/*
 * Создаёт объект ZipCode.
 *
 * Допустимые форматы почтового индекса:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Если аргумент, переданный в конструктор ZipCode не совпадает
 * ни с одним из этих форматов, будет брошено исключение.
 */

function ZipCode(zip) {
  zip = new String(zip);
  const pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
    // значение почтового индекса должно быть первым совпадением в строке
    this.value = zip.match(pattern)[0];
    this.valueOf = function () {
      return this.value;
    };
    this.toString = function () {
      return String(this.value);
    };
  } else {
    throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = "Почтовый индекс имеет недопустимый формат";
  this.toString = function () {
    return this.value + this.message;
  };
}

/*
 * Это может быть скрипт, который проверяет значение адреса
 * для США.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    return e instanceof ZipCodeFormatException
      ? ZIPCODE_INVALID
      : IPCODE_UNKNOWN_ERROR;
  }
  return z;
}

a = verifyZipCode(95060); // вернёт 95060
b = verifyZipCode(9560); // вернёт -1
c = verifyZipCode("a"); // вернёт -1
d = verifyZipCode("95060"); // вернёт 95060
e = verifyZipCode("95060 1234"); // вернёт 95060 1234
```

### Пример: Повторный выброс исключения

Можно использовать throw для повторного выброса исключения после того, как оно было поймано. В следующем примере ловится исключение с числовым значением и делается повторный выброс, если его значение больше 50. Повторно выброшенное исключение передаётся далее в вызывающую функцию или до верхнего уровня, который видит пользователь.

```js
try {
  throw n; // бросаем исключение с числовым значением
} catch (e) {
  if (e <= 50) {
    // инструкции для обработки исключений со значениями в диапазоне 1-50
  } else {
    // необработанное исключение, делаем повторный выброс
    throw e;
  }
}
```

## Спецификации

| Specification                                                      | Status               | Comment                                           |
| ------------------------------------------------------------------ | -------------------- | ------------------------------------------------- |
| {{SpecName('ES3')}}                                                | {{Spec2('ES3')}}     | Initial definition. Implemented in JavaScript 1.4 |
| {{SpecName('ES5.1', '#sec-12.13', 'throw statement')}}             | {{Spec2('ES5.1')}}   |                                                   |
| {{SpecName('ES6', '#sec-throw-statement', 'throw statement')}}     | {{Spec2('ES6')}}     |                                                   |
| {{SpecName('ESDraft', '#sec-throw-statement', 'throw statement')}} | {{Spec2('ESDraft')}} |                                                   |

## Поддерживаемые браузеры

{{Compat}}

## Смотрите также

- [`try...catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
