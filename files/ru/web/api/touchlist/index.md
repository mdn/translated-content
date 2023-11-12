---
title: TouchList
slug: Web/API/TouchList
---

{{ APIRef("Touch Events") }}

Интерфейс **`TouchList`** представляет собой список точек касаний сенсорной поверхности. Например, если пользователь коснулся сенсорной поверхности (такой как экран или трекпад) тремя пальцами, соответствующий объект `TouchList` будет содержать по одному объекту {{domxref("Touch")}} для каждого пальца, всего три объекта.

## Свойства

- {{domxref("TouchList.length")}} {{readonlyInline}}
  - : Количество объектов {{domxref("Touch")}} в `TouchList`.

## Методы

- {{domxref("TouchList.identifiedTouch()")}}
  - : Возвращает первый объект {{domxref("Touch")}} из списка, чей идентификатор соответствует заданному значению.
- {{domxref("TouchList.item()")}}
  - : Возвращает объект {{domxref("Touch")}}, находящийся в списке по указанному индексу

## Пример

С примером можно ознакомиться в основной статье про [События касаний (тач-события)](/ru/docs/Web/API/Touch_events)

## Спецификации

{{Specifications}}

## Доступность в браузерах

{{Compat}}

## Смотрите также

- [События касаний (тач-события)](/ru/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
