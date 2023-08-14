---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`indexOf()`** возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

## Синтаксис

```
arr.indexOf(searchElement[, fromIndex = 0])
```

### Параметры

- `searchElement`
  - : Искомый элемент в массиве.
- `fromIndex`
  - : Индекс, с которого начинать поиск. Если индекс больше или равен длине массива, возвращается -1, что означает, что массив даже не просматривается. Если индекс является отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от начала к концу. Если рассчитанный индекс оказывается меньше 0, поиск ведётся по всему массиву. Значение по умолчанию равно 0, что означает, что просматривается весь массив.

## Описание

Метод `indexOf()` сравнивает искомый элемент `searchElement` с элементами в массиве, используя [строгое сравнение](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (тот же метод используется оператором `===`, тройное равно).

## Примеры

### Пример: использование `indexOf()`

В следующем примере `indexOf()` используется для поиска значений в массиве.

```js
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Пример: нахождение всех вхождений элемента

В следующем примере `indexOf()` используется для поиска всех индексов элемента в указанном массиве, которые с помощью {{jsxref("Array.prototype.push()", "push()")}} добавляются в другой массив.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices);
// [0, 2, 4]
```

## Полифил

Метод `indexOf()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `indexOf()` в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 5-го издания; он предполагает, что {{jsxref("Global_Objects/TypeError", "TypeError")}} и {{jsxref("Math.abs()")}} имеют свои первоначальные значения.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.14
// Ссылка (en): http://es5.github.io/#x15.4.4.14
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Положим O равным результату вызова ToObject с передачей ему
    //    значения this в качестве аргумента.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get
    //    объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если len равен 0, вернём -1.
    if (len === 0) {
      return -1;
    }

    // 5. Если был передан аргумент fromIndex, положим n равным
    //    ToInteger(fromIndex); иначе положим n равным 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. Если n >= len, вернём -1.
    if (n >= len) {
      return -1;
    }

    // 7. Если n >= 0, положим k равным n.
    // 8. Иначе, n<0, положим k равным len - abs(n).
    //    Если k меньше нуля 0, положим k равным 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Пока k < len, будем повторять
    while (k < len) {
      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода
      //    HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, выполним
      //    i.  Положим elementK равным результату вызова внутреннего метода Get
      //        объекта O с аргументом ToString(k).
      //   ii.  Положим same равным результату применения
      //        Алгоритма строгого сравнения на равенство между
      //        searchElement и elementK.
      //  iii.  Если same равен true, вернём k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
