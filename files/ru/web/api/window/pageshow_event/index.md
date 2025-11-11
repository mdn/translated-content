---
title: "Window: событие pageshow"
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: 281e3b21178946c8301232a8eb50d11770ee8450
---

{{APIRef("HTML DOM")}}

Событие **`pageshow`** отправляется {{domxref("Window")}}, когда браузер отображает страницу.

Оно срабатывает в следующих случаях:

- Первоначальная загрузка страницы
- Переход на страницу с другой страницы в том же самом окне или вкладке
- Восстановление состояния ранее открытой страницы на мобильных ОС
- Возврат на страницу по кнопкам браузера "Вперёд" и "Назад"

> [!NOTE]
> Во время первоначальной загрузки страницы, событие `pageshow` срабатывает _после_ события {{domxref("Window/load_event", "load")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплывает</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Отменяемое</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("PageTransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство обработчика события</th>
      <td>{{domxref("Window.onpageshow", "onpageshow")}}</td>
    </tr>
  </tbody>
</table>

## Примеры

Следующий пример создаёт обработчики для событий, перечисленных в массиве `events`. Обработчик `eventLogger()` выводит на консоль каждый тип произошедшего события вместе со значением флага {{domxref("PageTransitionEvent.persisted", "persisted")}} в событиях `pageshow` и `pagehide`.

### JavaScript

```js
const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow":
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log("Event:", event.type, "-", isPersisted);
      break;
    default:
      console.log("Event:", event.type);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
```

### HTML

```html
<p>
  Откройте консоль и следите за выводом данных при переходе на эту страницу и
  обратно. этой страницы. Попробуйте открыть новые страницы в текущей вкладке, а
  затем вернитесь обратно, и посмотрите, что отобразилось в консоли.
</p>
```

### Результат

{{EmbedLiveSample("Examples", 640, 250)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Window.pagehide_event", "pagehide")}}
