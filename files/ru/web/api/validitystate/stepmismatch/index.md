---
title: ValidityState.stepMismatch
slug: Web/API/ValidityState/stepMismatch
---

Доступное только для чтения свойство **`stepMismatch`** объекта **[`ValidityState`](/ru/docs/Web/API/ValidityState)** указывает, соответствует ли значение {{HTMLElement("input")}} после изменения пользователем ограничениям, установленным атрибутом `step`.

Если поле является числовым, включая типы {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} и значение атрибута `step` не равно `any`, в случае не соответствия поля ограниченям атрибутов [`step`](/ru/docs/Web/HTML/Attributes/step) и [`min`](/ru/docs/Web/HTML/Attributes/min), то `stepMismatch` будет true. Если остаток от деления значения элемента формы за вычетом [`min`](/ru/docs/Web/HTML/Attributes/min) на [`step`](/ru/docs/Web/HTML/Attributes/step), (которое по умолчаиню равно 1) не равен нулю, то это является несоответствием.

Учитывая следующее:

```html
<input type="number" min="20" max="40" step="2" />
```

если `(value - min) % 2 != 0`, `stepMismatch` будет true.

Если true, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation)
- [Атрибут `step`](/ru/docs/Web/HTML/Attributes/step)
