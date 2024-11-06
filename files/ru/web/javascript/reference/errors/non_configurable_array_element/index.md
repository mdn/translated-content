---
title: "TypeError: can't delete non-configurable array element(Тип ошибки:не удаётся удалить настраиваемый элемент массива)"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: не удаётся удалить не настраиваемый элемент массива (Firefox)
TypeError: не удаётся удалить свойство '2' из [массива объектов] (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Была сделана попытка сократить длину массива, но один из элементов массива не изменяется. При укорочении массив, элементы за новую длину массива будут удалены, не в этой ситуации.

Настраиваемый атрибут определяет, можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи).

Обычно свойства объекта, созданного инициализатором массива, настраиваются. Однако, например, при использовании {{jsxref("Object.defineProperty()")}}, свойство не настраивается по умолчанию.

## Examples

### Не настраиваемые свойства, созданные `Object.defineProperty`

The {{jsxref("Object.defineProperty()")}} создаёт не настраиваемые свойства по умолчанию, если они не указаны как настраиваемые.

```js example-bad
var arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: не удаётся удалить не настраиваемый элемент массива
```

Вам нужно будет установить элементы как конфигурируемые, если вы собираетесь сократить массив.

```js example-good
var arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### `Seal`-ed Arrays (Герметичные Массивы)

The {{jsxref("Object.seal()")}} функция помечает все существующие элементы как не настраиваемые.

```js example-bad
var arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Вам или нужно извлечь {{jsxref("Object.seal()")}} позвоните или сделайте копию. В случае копирования сокращение копии массива не изменяет длину исходного массива.

```js example-good
var arr = [1, 2, 3];
Object.seal(arr);

// Скопируйте исходный массив, чтобы сократить копию
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
```

## Смотрите также

- [\[\[Configurable\]\]](/ru/docs/Web/JavaScript/Data_structures#Properties)
- {{jsxref("Array.length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
