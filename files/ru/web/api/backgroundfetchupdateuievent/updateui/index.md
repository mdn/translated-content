---
title: BackgroundFetchUpdateUIEvent.updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Метод **`updateUI()`** интерфейса {{domxref("BackgroundFetchUpdateUIEvent")}} обновляет заголовок и иконку в пользовательском интерфейсе, для того чтобы показать статус фонового запроса.

Этот метод может быть вызван только один раз, чтобы уведомить пользователя об успехе или провале фонового запроса.

## Синтаксис

```js-nolint
updateUI(options)
```

### Параметры

- `options` {{optional_inline}}

  - : Объект, содержащий любое из следующих значений:

    - `icons` {{optional_inline}}

      - : Список из одного или более ресурсов изображений, содержащих иконки для использования в интерфейсе пользователя. Ресурс изображения это объект, содержащий:

        - `src`
          - : Строка с URL изображения.
        - `sizes` {{optional_inline}}
          - : Строка, которая эквивалентна аттрибуту `sizes` элемента {{htmlelement("link")}}.
        - `type` {{optional_inline}}
          - : Строка, содержащая MIME-тип изображения.
        - `label` {{optional_inline}}
          - : Строка, содержащая имя для изображения.

    - `title` {{optional_inline}}
      - : Строка, содержащая новый заголовок для интерфейса пользователя.

### Возвращаемое значение

{{jsxref("Promise")}}.

### Исключения

- `InvalidStateError` {{domxref("DOMException")}}
  - : Возвращается, если любое из следующих утверждений верно:
    - Свойство {{domxref("Event.isTrusted","isTrusted")}} - `false`.
    - {{domxref("BackgroundFetchUpdateUIEvent")}} флаг обновения UI уже установлен, указывая на то, что метод `updateUI()` уже был вызван.
    - {{domxref("BackgroundFetchUpdateUIEvent")}} не активен.

## Примеры

Следующий пример демонстрирует обновление в UI заголовка и иконки, при успешном завершении запроса.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "Эпизод 5 готов к прослушиванию!",
    icon: {
      src: "path/to/success.ico",
      sizes: "16x16 32x32 64x64",
    },
  });
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
