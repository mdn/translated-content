---
title: Intl.Collator.prototype.compare
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
---

{{JSRef("Global_Objects", "Collator", "Intl,DateTimeFormat,NumberFormat")}}

## Сводка

Свойство **`Intl.Collator.prototype.compare`** возвращает функцию-геттер, сравнивающую две строки согласно порядку сортировки соответствующего объекта {{jsxref("Global_Objects/Collator", "Collator")}}.

## Синтаксис

```
collator.compare(string1, string2)
```

### Параметры

- `string1`

  `string2`

  - : Сравниваемые друг с другом строки.

## Описание

Функция, возвращённая геттером `compare`, возвращает число, указывающее, как строки `string1` и `string2` сравниваются друг с другом в соответствии с порядком сортировки объекта {{jsxref("Global_Objects/Collator", "Collator")}}: отрицательное значение, если строка `string1` предшествует строке `string2`; положительное значение, если строка `string1` следует за строкой `string2`; 0, если строки считаются равными.

## Примеры

### Пример: использование функции `compare` для сортировки массива

Использование функции, возвращённой геттером `compare`, для сортировки массивов. Обратите внимание, что функция привязана к объекту {{jsxref("Global_Objects/Collator", "Collator")}}, из которого она была получена, так что её можно передавать в {{jsxref("Array.prototype.sort()")}} напрямую.

```js
var a = ["Offenbach", "Österreich", "Odenwald"];
var collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", "));
// → "Odenwald, Österreich, Offenbach"
```

### Пример: использование функции `compare` для поиска в массиве

Использование функции, возвращённой геттером `compare`, для поиска совпадающих строк в массиве:

```js
var a = ["Congrès", "congres", "Assemblée", "poisson"];
var collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
var s = "congres";
var matches = a.filter(function (v) {
  return collator.compare(v, s) === 0;
});
console.log(matches.join(", "));
// → "Congrès, congres"
```

## Спецификации

| Спецификация                                                                 | Статус                  | Комментарии              |
| ---------------------------------------------------------------------------- | ----------------------- | ------------------------ |
| {{SpecName('ES Int 1.0', '#sec-10.3.2', 'Intl.Collator.prototype.compare')}} | {{Spec2('ES Int 1.0')}} | Изначальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
