---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
---

{{ APIRef("HTML DOM") }}

Метод **`HTMLFormElement.reset()`** восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.

Если элемент управления формы (такой как кнопка типа reset) имеет имя или идентификатор reset, это маскирует метод **`HTMLFormElement.reset()`**. Это не сбрасывает другие атрибуты, такие как **disabled**.

## Синтаксис

```js
HTMLFormElement.reset();
```

## Пример

```js
document.getElementById("myform").reset();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
