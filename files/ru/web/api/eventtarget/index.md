---
title: EventTarget
slug: Web/API/EventTarget
---

{{ ApiRef("DOM Events") }}

**`EventTarget`** - это интерфейс, реализуемый объектами, которые могут генерировать события и могут иметь подписчиков на эти события.

Наиболее частые генераторы событий - {{domxref("Element")}}, {{domxref("document")}}, и {{domxref("window")}}, но другие объекты так же могут использоваться в качестве источников событий , например {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, {{domxref("AudioContext")}}, и другие.

Многие источники событий (включая элементы, документ и окно) также поддерживают установку [обработчиков событий](/ru/docs/Web/Guide/DOM/Events/Event_handlers) с помощью on`...` свойств и атрибутов.

## Методы

- {{domxref("EventTarget.addEventListener()")}}
  - : Регистрирует обработчик событий указанного типа на объекте.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Удаляет обработчик события.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Генерирует событие на объекте `EventTarget`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Event reference](/ru/docs/Web/Reference/Events) - доступные события на платформе.
- [Event developer guide](/ru/docs/Web/Guide/DOM/Events)
- {{domxref("Event")}} interface
