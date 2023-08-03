---
title: validityState.badInput
slug: Web/API/ValidityState/badInput
---

{{APIRef("HTML DOM")}}

Доступное только для чтения свойство **`badInput`** объекта [ValidityState](/ru/docs/Web/API/ValidityState), указывающее, что пользователь ввёл значение, которое браузер не может преобразовать. Например, поле ввода чисел, содержащее строку. _**Примечание:** Во всех браузерах, кроме Internet Explorer, ввести в числовое поле любое нечисловое значения не удастся._

## Пример

```html
<input type="number" id="age" />
```

```js
var input = document.getElementById("age");
if (input.validity.badInput) {
  console.log("Bad input detected…");
} else {
  console.log("Content of input ok.");
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Руководство: Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Учебник: Валидация форм](/ru/docs/Learn/Forms/Form_validation)
