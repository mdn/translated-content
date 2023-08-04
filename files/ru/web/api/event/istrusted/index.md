---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}

`isTrusted` - свойство объекта {{domxref("Event")}}, доступное только на чтение. Принимает значение true, если событие было инициировано действиями пользователя, и false, если событие было создано или изменено скриптом, либо с помощью dispatchEvent

## Синтаксис

```
var bool = event.isTrusted;
```

## Пример

```
 if (e.isTrusted) {
     /* The event is trusted. */
 } else {
     /* The event is not trusted. */
 }
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
