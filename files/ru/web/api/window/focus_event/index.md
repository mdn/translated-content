---
title: GlobalEventHandlers.onfocus
slug: Web/API/Window/focus_event
---

{{APIRef}}

Свойство **onfocus** устанавливает обработчик события onFocus на данный элемент.

## Синтаксис

```
element.onfocus = выполняемый код при сработке события
```

## Примечание

Событие фокуса (focus) вызывается когда пользователь устанавливает фокус на данный элемент.

Чтобы вызвать событие **`onfocus`** на элементах, отличных от полей ввода **input,** им необходимо предварительно добавить атрибут [`tabindex`](/ru/docs/Web/HTML/Reference/Global_attributes#tabindex) (см. [Building keyboard accessibility back in](/ru/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in) для подробностей).

В отличие от браузеров IE, в которых практически на всех элементах можно вызвать событие фокуса, браузеры, написанные на движке **Gecko (Mozilla Firefox),** не поддерживают это событие**.**

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
