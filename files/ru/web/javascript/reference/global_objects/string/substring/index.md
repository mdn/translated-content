---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`substring()`** возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

## Синтаксис

```
str.substring(indexA[, indexB])
```

### Параметры

- `indexA`
  - : Целое число от `0` до длины строки, определяющее смещение в строке первого символа, который будет включён в результирующую подстроку.
- `indexB`
  - : Необязательный параметр. Целое число от `0` до длины строки, определяющее смещение в строке первого символа, который **не будет** включён в результирующую подстроку.

## Описание

Метод `substring()` извлекает символы, начиная с индекса `indexA` до, но не включая, индекс `indexB`. В частности:

- Если аргумент `indexA` равен аргументу `indexB`, метод `substring()` вернёт пустую строку.
- Если аргумент `indexB` опущен, метод `substring()` извлечёт символы до конца строки.
- Если любой из аргументов меньше, либо равен нулю или равен {{jsxref("Global_Objects/NaN", "NaN")}}, он будет трактоваться как равный 0.
- Если любой из аргументов больше, чем `stringName.length`, он будет трактоваться как равный `stringName.length`.

Если аргумент `indexA` будет больше аргумента `indexB`, то метод `substring()` сработает так, как если бы аргументы были поменяны местами; например, `str.substring(1, 0) == str.substring(0, 1)`.

## Примеры

### Пример: использование метода `substring()`

В следующем примере метод `substring()` используется для отображения символов из строки `'Mozilla'`:

```js
var anyString = "Mozilla";

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Отобразит 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6));

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

### Пример: использование метода `substring()` вместе со свойством `length`

Следующий пример использует метод `substring()` и свойство {{jsxref("String.length", "length")}} для извлечения последних символов из строки. Этот метод может оказаться легче для запоминания, особенно если учесть, что вам не нужно знать начальный и конечный индексы, как это было в примере выше.

```js
// Отобразит 'illa' - последние 4 символа
var anyString = "Mozilla";
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Отобразит 'zilla' - последние 5 символов
var anyString = "Mozilla";
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

### Пример: замена подстроки в строке

Следующий пример демонстрирует замену подстроки в строке. Он заменит как отдельные символы, так и целые подстроки. Вызов функции в конце примера изменит строку `'Дивный новый мир'` на строку `'Дивный новый веб'`.

```js
// Заменяет oldS на newS в строке fullS
function replaceString(oldS, newS, fullS) {
  for (var i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("мир", "веб", "Дивный новый мир");
```

Обратите внимание, что функция может скатиться в бесконечный цикл, если строка `oldS` сама является подстрокой для `newS` — например, если вы попытаетесь заменить слово «мир» на слово «другоймир». Лучше использоваться следующий метод для замены строк:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Код выше следует рассматривать всего лишь как пример работы с подстроками. Если вам нужно заменить подстроки, скорее всего вы захотите использовать метод {{jsxref("String.prototype.replace()")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
