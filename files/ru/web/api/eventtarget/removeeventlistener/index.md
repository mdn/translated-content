---
title: "EventTarget: метод removeEventListener()"
slug: Web/API/EventTarget/removeEventListener
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

Метод **`removeEventListener()`** интерфейса {{domxref("EventTarget")}} удаляет слушателя событий, зарегистрированного с помощью {{domxref("EventTarget.addEventListener()")}}. Удаляемый слушатель событий [определяется комбинацией](#определение-слушателя-событий-для-удаления) типа события, функцией обработчика и дополнительными параметрами, влияющими на процесс обработки.

Вызов `removeEventListener()` с аргументами, которые не определяют зарегистрированного на `EventTarget` [слушателя событий](/ru/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback), не имеет эффекта.

Если слушатель событий удаляется в то время, когда другой слушатель обрабатывает событие, он не будет вызван. Однако его можно зарегистрировать повторно.

> [!WARNING]
> Если слушатель зарегистрирован дважды, с флагом _capture_ и без него, то необходимо удалять каждого слушателя по отдельности. Удаление слушателя захвата события не повлияет на слушателя всплытия этого события, и наоборот.

Слушатели событий также можно удалить передачей сигнала {{domxref("AbortSignal")}} в {{domxref("EventTarget/addEventListener()", "addEventListener()")}} и последующим вызовом {{domxref("AbortController/abort()", "abort()")}} на контроллере, владеющем сигналом.

## Синтаксис

```js-nolint
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)
```

### Параметры

- `type`
  - : Строка, описывающая тип события, которое нужно удалить.
- `listener`
  - : Функция обработчика события для удаления.
- `options` {{optional_inline}}

  - : Объект настроек, описывающий характеристики обработчика события:
    - `capture`: Логическое значение, определяющее зарегистрирован ли удаляемый слушатель событий на фазу захвата или нет. Если этот параметр опущен, то применяется значение по умолчанию `false`.

- `useCapture` {{optional_inline}}
  - : Логическое значение, определяющее зарегистрирован ли удаляемый слушатель событий на фазу захвата или нет. Если этот параметр опущен, то применяется значение по умолчанию `false`.

### Возвращаемое значение

Нет.

### Определение слушателя событий для удаления

Иногда возникает необходимость удалить зарегистрированного с помощью {{domxref("EventTarget.addEventListener", "addEventListener()")}} слушателя событий.

Очевидно, что для `removeEventListener()` нужно указать те же параметры `type` и `listener`. Но что делать с параметрами `options` или `useCapture`?

`addEventListener()` позволяет добавить одного и того же слушателя для одного типа событий более одного раза если отличаются настройки. При удалении слушателя `removeEventListener()` проверяет только флаг `capture`/`useCapture`. Его значение должно совпасть, а другие настройки не учитываются.

Например, представим такой вызов `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Теперь рассмотрим каждый из двух вызовов `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Не сработает
element.removeEventListener("mousedown", handleMouseDown, true); // Выполнится успешно
```

Первый вызов не сработает потому, что значение `useCapture` не совпадает. Второй вызов будет успешен, потому что значение `useCapture` совпадает.

Теперь рассмотрим такой случай:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Здесь мы задаём объект `options`, в котором значение `passive` установлено в `true`, а другие настройки не указаны, то есть будут иметь значение по умолчанию `false`.

Теперь рассмотрим вызовы `removeEventListener()` с разными параметрами. Те из них, в которых `capture` или `useCapture` установлены в `true`, не сработают, остальные выполнятся успешно.

Только настройка `capture` имеет значение при вызове `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Выполнится успешно
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Выполнится успешно
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Не сработает
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Выполнится успешно
element.removeEventListener("mousedown", handleMouseDown, false); // Выполнится успешно
element.removeEventListener("mousedown", handleMouseDown, true); // Не сработает
```

Стоит отметить, что некоторые версии браузеров ведут себя противоречиво, поэтому если нет особых причин для иного, при вызове `removeEventListener()` лучше использовать те же параметры, которые использовались для вызова `addEventListener()`.

## Пример

В этом примере показано как можно добавить слушателя событий `mouseover`, который будет удалять слушателя событий `click`.

```js
const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("EventTarget.addEventListener()")}}
