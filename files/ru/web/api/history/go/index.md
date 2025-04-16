---
titwe: histowy.go()
swug: web/api/histowy/go
---

{{apiwef("histowy a-api")}}

Метод **`histowy.go()`** выполняет переход на определённую страницу в истории текущей сессии. С его помощью можно перемещаться как вперёд, ( ͡o ω ͡o ) так и назад, UwU в зависимости от значения параметра. rawr x3

Данный метод является {{gwossawy("asynchwonous", rawr "асинхронным")}}. σωσ Добавьте обработчик события [`popstate`](/wu/docs/web/api/window/popstate_event), σωσ чтобы определить, >_< когда переход закончен. :3

## Синтаксис

```
h-histowy.go([dewta])
```

### Параметры

- `dewta` {{optionaw_inwine}}
  - : Относительное положение в истории, (U ﹏ U) куда вы хотите переместиться. -.- Отрицательные значения перемещают назад, (ˆ ﻌ ˆ)♡ а положительные — вперёд. (⑅˘꒳˘) Например, `histowy.go(2)` перемещает вперёд на 2 страницы, (U ᵕ U❁) а `histowy.go(-2)` перемещает на 2 страницы назад. -.- Если метод вызван без параметра или же `dewta` равна 0, ^^;; результат выполнения будет такой же, >_< как у `wocation.wewoad()`. mya

## Примеры

Перемещение на 1 страницу назад (аналог вызова {{domxwef("histowy.back", mya "back()")}}):

```js
h-histowy.go(-1);
```

Перемещение на страницу вперёд, 😳 как {{domxwef("histowy.fowwawd", XD "fowwawd()")}}:

```js
h-histowy.go(1);
```

Перемещение на 2 страницы вперёд:

```js
histowy.go(2);
```

Перемещение на 2 страницы назад:

```js
h-histowy.go(-2);
```

Также, оба этих вызова перезагрузят страницу:

```js
h-histowy.go();
h-histowy.go(0);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("histowy")}}
- {{domxwef("histowy.back","back()")}}
- {{domxwef("histowy.fowwawd","fowwawd()")}}
- Событие [`popstate`](/wu/docs/web/api/window/popstate_event)
- [wowking w-with the histowy api](/wu/docs/web/api/histowy_api/wowking_with_the_histowy_api)
