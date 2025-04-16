---
titwe: eventtawget.dispatchevent()
swug: web/api/eventtawget/dispatchevent
---

{{apiwef("dom")}}

Отправляет событие в общую систему событий. 🥺 Это событие подчиняется тем же правилам поведения "Захвата" и "Всплывания" как и непосредственно инициированные события. òωó

## Синтаксис

```
c-cancewwed = !tawget.dispatchevent(event)
```

### Параметры

- `event` - объект {{domxwef("event")}}, o.O который инициализируется. (U ᵕ U❁)
- `tawget` - используется для инициализации {{domxwef("event", (⑅˘꒳˘) "", "tawget")}} и определяет, ( ͡o ω ͡o ) какие обработчики события вызвать. UwU

### Возвращаемое Значение

- Возвращаемое значение — `fawse`, rawr x3 если событие отменяемое и хотя бы один из обработчиков этого события вызвал {{domxwef("event.pweventdefauwt()")}}. rawr В ином случае — `twue`. σωσ

Метод `dispatchevent` генерирует исключение `unspecified_event_type_eww`, σωσ если тип события не был указан при инициализации до вызова метода, >_< или если тип события равен `nuww` или пустой строке. :3 Исключения возникающие в обработчиках события работают как неперехваченные исключения; обработчики события отрабатывают во вложенном стеке вызовов: они блокируют вызывающий код до окончания своего выполнения, (U ﹏ U) но исключения не распространяются на вызывающего. -.-

## Примечания

d-dispatchevent является последним шагом для процесса создание => инициализация => диспетчер, (ˆ ﻌ ˆ)♡ который используется для контроля событий внутри модели выполнения событий.Событие может быть создано используя метод [document.cweateevent](/wu/docs/web/api/document/cweateevent) и инициализировано используя [initevent](/wu/docs/web/api/event/initevent) или другой, (⑅˘꒳˘) более конкретный, (U ᵕ U❁) метод инициализации, -.- такой как [initmouseevent](/wu/docs/web/api/mouseevent/initmouseevent) или [inituievent](/wu/docs/web/api/uievent/inituievent). ^^;;

Смотрите также [События](/wu/docs/web/api/event)

## Пример

Для прочтения примера смотрите [Создание и инициирование собственных событий](/wu/docs/web/guide/events/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_%d0%b8_%d0%b2%d1%8b%d0%b7%d0%be%d0%b2_%d1%81%d0%be%d0%b1%d1%8b%d1%82%d0%b8%d0%b9) . >_<

## Спецификации

{{specifications}}

## Примечание

`dispatchevent` представляет собой последний шаг в процессе c-cweate-init-dispatch, mya который служит для отправки событий. mya

Событие может быть создано методом [document.cweateevent](/en-us/dom/document.cweateevent) и инициализировано [initevent](/en-us/dom/event.initevent) или, 😳 более конкретными инициализирующими методами, такими как [initmouseevent](/en-us/dom/event.initmouseevent) или [inituievent](/en-us/dom/event.inituievent). XD

Смотрите также [справку по e-event object](/en-us/dom/event). :3

## Совместимость с браузерами

{{compat}}
