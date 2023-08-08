---
title: GlobalEventHandlers.onfocus
slug: Web/API/Window/focus_event
---

{{ApiRef("HTML DOM")}}

Свойство **onfocus** устанавливает обработчик события onFocus на данный элемент.

## Синтаксис

```
element.onfocus = выполняемый код при сработке события
```

## Примечание

Событие фокуса (focus) вызывается когда пользователь устанавливает фокус на данный элемент.

Чтобы вызвать событие **`onfocus`** на элементах, отличных от полей ввода **input,** им необходимо предварительно добавить атрибут [`tabindex`](/ru/docs/Web/HTML/Global_attributes#tabindex) (см. [Building keyboard accessibility back in](/ru/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in) для подробностей).

В отличие от браузеров IE, в которых практически на всех элементах можно вызвать событие фокуса, браузеры, написанные на движке **Gecko (Mozilla Firefox),** не поддерживают это событие**.**

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
