---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef("Global_Objects", "Number")}}

Объект **`Number`** является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект `Number` создаётся через конструктор `Number()`.

## Синтаксис

```
new Number(value);
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
```

### Параметры

- `value`
  - : Числовое значение, которое примет объект после создания.

## Описание

Несколько замечаний относительно использования объекта `Number`:

- Если аргумент не может быть преобразован в число, возвращается {{jsxref("Global_Objects/NaN", "NaN")}}.
- В неконструкторном контексте (то есть, без оператора {{jsxref("Operators/new", "new")}}), объект `Number` может использоваться для проведения преобразования типов.

## Свойства

- {{jsxref("Number.EPSILON")}} {{experimental_inline}}
  - : Наименьший интервал между двумя представимыми числами.
- {{jsxref("Number.MAX_SAFE_INTEGER")}} {{experimental_inline}}
  - : Максимальное целое число, которое можно безопасно использовать в JavaScript (`253 - 1`).
- {{jsxref("Number.MAX_VALUE")}}
  - : Наибольшее представимое положительное число.
- {{jsxref("Number.MIN_SAFE_INTEGER")}} {{experimental_inline}}
  - : Минимальное целое число, которое можно безопасно использовать в (`-(253 - 1)`).
- {{jsxref("Number.MIN_VALUE")}}
  - : Наименьшее представимое положительное число — то есть, самое близкое к нулю положительное число (которое ещё не является нулём).
- {{jsxref("Number.NaN")}}
  - : Специальное значение для представления «не числа».
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Специальное значение для представления отрицательной бесконечности; возвращается при переполнении.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Специальное значение для представления положительной бесконечности; возвращается при переполнении.
- {{jsxref("Number.prototype")}}
  - : Позволяет добавлять свойства к объекту `Number`.

## Методы

- {{jsxref("Number.isNaN()")}} {{experimental_inline}}
  - : Определяет, является ли переданное значение значением {{jsxref("Global_Objects/NaN", "NaN")}}.
- {{jsxref("Number.isFinite()")}} {{experimental_inline}}
  - : Определяет, является ли переданное значение конечным числом.
- {{jsxref("Number.isInteger()")}} {{experimental_inline}}
  - : Определяет, является ли тип переданного значения «числом», а само число — целым значением.
- {{jsxref("Number.isSafeInteger()")}} {{experimental_inline}}
  - : Определяет, является ли переданное значение безопасным целым числом (числом в диапазоне от `-(253 - 1)` до `253 - 1`).
- ~~{{jsxref("Number.toInteger()")}}~~
  - : ~~Использовался для вычисления переданного значения и преобразования его в целое число (или бесконечность {{jsxref("Global_Objects/Infinity", "Infinity")}}), но был удалён.~~
- {{jsxref("Number.parseFloat()")}} {{experimental_inline}}
  - : Представляет собой тот же самый метод, что и метод {{jsxref("Global_Objects/parseFloat", "parseFloat")}} глобального объекта.
- {{jsxref("Number.parseInt()")}} {{experimental_inline}}
  - : Представляет собой тот же самый метод, что и метод {{jsxref("Global_Objects/parseInt", "parseInt")}} глобального объекта.

## Экземпляры объекта `Number`

Все экземпляры объекта `Number` наследуются от {{jsxref("Number.prototype")}}. Объект прототипа конструктора `Number` может быть изменён, чтобы затронуть все экземпляры объекта `Number`.

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype', 'Methods')}}

## Примеры

### Пример: использование объекта `Number` для присваивания значений числовым переменным

В следующем примере для присваивания значений числовым переменным используются свойства объекта `Number`:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### Пример: целочисленный диапазон для объекта `Number`

Следующий пример показывает, какие минимальное и максимальное целочисленные значения может представить объект `Number` (за подробностями обращайтесь к стандарту EcmaScript, главе _8.5 Тип Number_):

```js
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;
```

При разборе данных, сериализованных в JSON, можно ожидать, что целые значения, выпадающие из этого диапазона будут повреждены, когда парсер JSON приведёт их к типу `Number`. Возможным обходным путём может быть использование объекта {{jsxref("Global_Objects/String", "String")}}.

### Пример: использование `Number` для преобразования объекта `Date`

В следующем примере объект {{jsxref("Global_Objects/Date", "Date")}} преобразуется в числовое значение с использование объекта `Number` в качестве функции:

```js
var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));
```

Пример выведет "819199440000".

### Пример: преобразование строк с числами в числа

```js
Number("123"); // 123
Number(""); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/NaN", "NaN")}}
- Глобальный объект {{jsxref("Global_Objects/Math", "Math")}}
