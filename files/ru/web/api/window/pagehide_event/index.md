---
title: "Window: событие pagehide"
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: c125e7c912ba8f13dc8440ba29a94851d09f6a92
---

{{APIRef("HTML DOM")}}

Событие **`pagehide`** отправляется объекту {{domxref("Window")}}, когда браузер скрывает текущую страницу в процессе отображения других страниц из истории сессии.

Например, когда пользователь нажимает на кнопку "Назад" в браузере, перед тем, как отобразиться предыдущая страница, текущая страница сгенерирует событие `pagehide`.

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
      <th scope="row">Свойство обработчика событий</th>
      <td>{{domxref("Window.onpagehide", "onpagehide")}}</td>
    </tr>
  </tbody>
</table>

## Примечания по использованию

По аналогии с событиями [`unload`](/ru/docs/Web/API/Window/unload_event) и [`beforeunload`](/ru/docs/Web/API/Window/beforeunload_event), это событие не всегда срабатывает в браузерах, особенно на мобильных. Например, событие `pagehide` может вовсе не сработать в следующем сценарии:

1. Пользователь открывает страницу с мобильного браузера.
2. Некоторое время спустя он переключается на другое приложение.
3. А затем он закрывает браузер при помощи менеджера приложений.

Тем не менее, в отличие от событий `unload` и `beforeunload`, это событие совместимо [кешом для перехода вперёд и назад](https://web.dev/bfcache/) (bfcache), поэтому обработчик этого события не помещает странице быть закешированной в bfcache.

Поэтому, чтобы определить завершение пользовательской сессии предпочтительнее всего использовать событие [`visibilitychange`](/ru/docs/Web/API/Document/visibilitychange_event). Если в браузерах не поддерживается `visibilitychange`, вместо него следует использовать событие `pagehide` как наиболее подходящую альтернативу.

В случае, если нужно определить именно наступление событий `unload`, то событие `pagehide` как нельзя лучше подойдёт для этого.

Дополнительные сведения о том, как данное событие связано с другими событиями жизненного цикла страницы, смотрите на странице [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api).

## Примеры

В следующем примере добавлен обработчик для отслеживания событий `pagehide`, чтобы что-то сделать на случай, если страница была сохранена в кеше для возможного повторного использования.

```js
window.addEventListener(
  "pagehide",
  (event) => {
    if (event.persisted) {
      /* Страница была сохранена в кеше, её можно повторно использовать */
    }
  },
  false,
);
```

Этот обработчик также можно написать с помощью свойства обработчика события {{domxref("Window.onpagehide", "onpagehide")}} в объекте {{domxref("Window")}}:

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* Страница была сохранена в кеше, её можно повторно использовать */
  }
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Событие {{domxref("Window.pageshow_event", "pageshow")}}.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) содержит рекомендуемые практики по обработке поведения жизненного цикла страницы в веб-приложениях.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): JavaScript-библиотека, которая решает несоответствия в работе жизненного цикла страница в разных браузерах.
- [Кэш для перехода назад и вперед](https://web.dev/bfcache/) объясняет, что такое кеш "назад/вперед", и его последствия для различных событий жизненного цикла страницы.
