---
title: "Document: DOMContentLoaded event"
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

Событие **`DOMContentLoaded`** запускается когда первоначальный HTML документ будет полностью загружен и разобран, без ожидания полной загрузки таблиц стилей, изображений и фреймов.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплытие</th>
      <td>да</td>
    </tr>
    <tr>
      <th scope="row">Отменяемый</th>
      <td>
        Да (хотя указано как простое событие, которое не может быть отменено)
      </td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство обработчика событий</th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

Разные события,[`load`](/ru/docs/Web/API/Window/load_event), должны быть использованы только для обнаружения полностью загруженной страницы. Это распространённая ошибка в использовании `load`, там где `DOMContentLoaded` было бы более уместным.

Синхронный JavaScript останавливает разбор DOM. Если вы хотите что бы DOM был разобран как можно быстрее после того как пользователь запросит страницу, вы должны сделать ваш [JavaScript асинхронным](/ru/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) and [оптимизировать загрузку таблиц стилей](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery). Если загружать как обычно, таблицы стилей тормозят разбор DOM так как они загружаются параллельно, "крадя" трафик у основного HTML документа.

## Примеры

### Основное применение

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM полностью загружен и разобран");
});
```

### Отложенный DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM полностью загружен и разобран");
  });

  for (let i = 0; i < 1000000000; i++) {} // Этот синхронный скрипт откладывает разбор DOM,
  // так что событие DOMContentLoaded будет запущено позже.
</script>
```

### Проверка того, завершена ли загрузка

`DOMContentLoaded` может сработать до того, как ваш скрипт будет запущен, поэтому разумно это проверить, перед добавлением обработчика.

```js
function doSomething() {
  console.info("DOM загружен");
}

if (document.readyState === "loading") {
  // Загрузка ещё не закончилась
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` Уже сработал
  doSomething();
}
```

### Живые примеры

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JS

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = log.textContent + "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### Result

{{ EmbedLiveSample('Живые_примеры', '100%', '160px') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- События связанные с: [`load`](/ru/docs/Web/API/Window/load_event), [`readystatechange`](/ru/docs/Web/API/Document/readystatechange_event), [`beforeunload`](/ru/docs/Web/API/Window/beforeunload_event), [`unload`](/ru/docs/Web/API/Window/unload_event)
- Это событие [`Window`](/ru/docs/Web/API/Window) нацеленное на: [`DOMContentLoaded`](/ru/docs/Web/API/Window/DOMContentLoaded_event)
