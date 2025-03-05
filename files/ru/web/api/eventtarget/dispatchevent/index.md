---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM")}}

Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.

## Синтаксис

```
cancelled = !target.dispatchEvent(event)
```

### Параметры

- `event` - объект {{domxref("Event")}}, который инициализируется.
- `target` - используется для инициализации {{domxref("Event", "", "target")}} и определяет, какие обработчики события вызвать.

### Возвращаемое Значение

- Возвращаемое значение — `false`, если событие отменяемое и хотя бы один из обработчиков этого события вызвал {{domxref("Event.preventDefault()")}}. В ином случае — `true`.

Метод `dispatchEvent` генерирует исключение `UNSPECIFIED_EVENT_TYPE_ERR`, если тип события не был указан при инициализации до вызова метода, или если тип события равен `null` или пустой строке. Исключения возникающие в обработчиках события работают как неперехваченные исключения; обработчики события отрабатывают во вложенном стеке вызовов: они блокируют вызывающий код до окончания своего выполнения, но исключения не распространяются на вызывающего.

## Примечания

dispatchEvent является последним шагом для процесса создание => инициализация => диспетчер, который используется для контроля событий внутри модели выполнения событий.Событие может быть создано используя метод [document.createEvent](/ru/docs/Web/API/Document/createEvent) и инициализировано используя [initEvent](/ru/docs/Web/API/Event/initEvent) или другой, более конкретный, метод инициализации, такой как [initMouseEvent](/ru/docs/Web/API/MouseEvent/initMouseEvent) или [initUIEvent](/ru/docs/Web/API/UIEvent/initUIEvent).

Смотрите также [События](/ru/docs/Web/API/Event)

## Пример

Для прочтения примера смотрите [Создание и инициирование собственных событий](/ru/docs/Web/Guide/Events/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9) .

## Спецификации

{{Specifications}}

## Примечание

`dispatchEvent` представляет собой последний шаг в процессе create-init-dispatch, который служит для отправки событий.

Событие может быть создано методом [document.createEvent](/en-US/DOM/document.createEvent) и инициализировано [initEvent](/en-US/DOM/event.initEvent) или, более конкретными инициализирующими методами, такими как [initMouseEvent](/en-US/DOM/event.initMouseEvent) или [initUIEvent](/en-US/DOM/event.initUIEvent).

Смотрите также [справку по Event object](/en-US/DOM/event).

## Совместимость с браузерами

{{Compat}}
