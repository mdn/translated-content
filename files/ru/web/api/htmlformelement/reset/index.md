---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
translation_of: Web/API/HTMLFormElement/reset
---
{{ APIRef("HTML DOM") }}

Метод **`HTMLFormElement.reset()`** восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.

Если элемент управления формы (такой как кнопка типа reset) имеет имя или идентификатор reset, это маскирует метод **`HTMLFormElement.reset()`**. Это не сбрасывает другие атрибуты, такие как **disabled**.

## Синтаксис

```
HTMLFormElement.reset()
```

## Пример

```
document.getElementById('myform').reset();
```

## Спецификация

[HTML 5.1 Nightly: Resetting a form](http://www.w3.org/html/wg/drafts/html/master/semantics.html#resetting-a-form)
