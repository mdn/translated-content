---
title: Element.clientTop
slug: Web/API/Element/clientTop
---

{{ APIRef("DOM") }}

Толщина верхней границы элемента в пикселях. Не включает в себя margin и padding. Свойство только для чтения.

Всё, что лежит между двумя местами (`offsetTop` и верх клиентской области) является границей элемента, потому что `offsetTop` показывает местоположение верха border элемента (не margin), в то время как верх клиентской области начинается сразу под border (клиентская область включает padding). Поэтому значение **clientTop** всегда будет равно значению `.getComputedStyle()` для "border-top-width". Например, если значение "border-top-width" равно нулю, то и **clientTop** тоже равно нулю.

> **Примечание:** Это свойство округляет значение до целого. Если вам нужно дробное значение, используйте {{ domxref("element.getBoundingClientRect()") }}.

Основанные на [Gecko](en/Gecko) приложения поддерживают clientTop начиная с Gecko 1.9 ([Firefox 3](en/Firefox_3), реализовано в {{ Bug(111207) }}). Это свойство не поддерживается в Firefox 2 и более ранних.

## Синтаксис

```
vartop = element.clientTop;
```

## Пример

В следующей иллюстрации клиентская область показана белым (части под названиями "Top", "Right" и т. д. не имеют никакого отношения к клиентской области). Значение **clientTop** - расстояние между окончанием области margin (жёлтый) или padding и началом области контента (белый)

## Примечание

`clientTop` был впервые введён в MS IE DHTML object model.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [MSDN: Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
