---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---

{{JSRef}}

Свойство **`Number.EPSILON`** представляет собой разницу между единицей и наименьшим значением, большим единицы, которое может быть представлено типом {{jsxref("Number")}}.

Вам не нужно создавать объект типа {{jsxref("Number")}} для доступа к этому статическому свойству (используйте `Number.EPSILON`).

{{js_property_attributes(0, 0, 0)}}

## Описание

Свойство `EPSILON` имеет значение, приблизительно равное `2.2204460492503130808472633361816E-16` или `2-52`.

## Примеры

### Проверка на равенство

```
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## Полифил

```js
if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Объект {{jsxref("Number")}}, которому принадлежит это свойство.
