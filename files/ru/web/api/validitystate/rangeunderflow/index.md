---
title: ValidityState.rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
---

Доступное только для чтения свойство **`rangeUnderflow`** объекта **[`ValidityState`](/ru/docs/Web/API/ValidityState)** указывает, соответствует ли значение {{HTMLElement("input")}} после изменения пользователем ограничениям, установленным атрибутом [`min`](/ru/docs/Web/HTML/Attributes/min).

Если поле является числовым, включая типы {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} и заданно значение атрибута `min`, если содержимое поля не соответствует ограничению атрибута [`min`](/ru/docs/Web/HTML/Attributes/step), свойство `rangeUnderflow` будет true.

Учитывая следующее:

```html
<input type="number" min="20" max="40" step="2" />
```

если `value < 20`, `rangeUnderflow` будет true. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("ValidityState.rangeOverflow")}}
- [Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation)
- [Атрибут `step`](/ru/docs/Web/HTML/Attributes/step)
- [Атрибут `max`](/ru/docs/Web/HTML/Attributes/max)
