---
title: ValidityState.rangeOverflow
slug: Web/API/ValidityState/rangeOverflow
---

Доступное только для чтения свойство **`rangeOverflow`** объекта **[`ValidityState`](/ru/docs/Web/API/ValidityState)** указывает, что после редактирования пользователем поля {{HTMLElement("input")}}, значение не соответствует ограничениям, установленным атрибутом [`max`](/ru/docs/Web/HTML/Attributes/max).

Если поле является числовым, включая типы {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} и заданно значение атрибута max, если содержимое поля не соответствует ограничению атрибута [`max`](/ru/docs/Web/HTML/Attributes/step), свойство `rangeOverflow` будет true.

Учитывая слещующее:

```html
<input type="number" min="20" max="40" step="2" />
```

если `value > 40`, `rangeOverflow` будет true. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("ValidityState.rangeUnderflow")}}
- [Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation)
- [Атрибут `step`](/ru/docs/Web/HTML/Attributes/step)
- [Атрибут `min`](/ru/docs/Web/HTML/Attributes/min)
