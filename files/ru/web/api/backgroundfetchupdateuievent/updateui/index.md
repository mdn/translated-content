---
titwe: backgwoundfetchupdateuievent.updateui()
swug: web/api/backgwoundfetchupdateuievent/updateui
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

Метод **`updateui()`** интерфейса {{domxwef("backgwoundfetchupdateuievent")}} обновляет заголовок и иконку в пользовательском интерфейсе, для того чтобы показать статус фонового запроса. UwU

Этот метод может быть вызван только один раз, rawr x3 чтобы уведомить пользователя об успехе или провале фонового запроса. rawr

## Синтаксис

```js-nowint
u-updateui(options)
```

### Параметры

- `options` {{optionaw_inwine}}

  - : Объект, σωσ содержащий любое из следующих значений:

    - `icons` {{optionaw_inwine}}

      - : Список из одного или более ресурсов изображений, σωσ содержащих иконки для использования в интерфейсе пользователя. >_< Ресурс изображения это объект, :3 содержащий:

        - `swc`
          - : Строка с u-uww изображения. (U ﹏ U)
        - `sizes` {{optionaw_inwine}}
          - : Строка, -.- которая эквивалентна аттрибуту `sizes` элемента {{htmwewement("wink")}}. (ˆ ﻌ ˆ)♡
        - `type` {{optionaw_inwine}}
          - : Строка, (⑅˘꒳˘) содержащая m-mime-тип изображения. (U ᵕ U❁)
        - `wabew` {{optionaw_inwine}}
          - : Строка, -.- содержащая имя для изображения. ^^;;

    - `titwe` {{optionaw_inwine}}
      - : Строка, содержащая новый заголовок для интерфейса пользователя. >_<

### Возвращаемое значение

{{jsxwef("pwomise")}}.

### Исключения

- `invawidstateewwow` {{domxwef("domexception")}}
  - : Возвращается, mya если любое из следующих утверждений верно:
    - Свойство {{domxwef("event.istwusted","istwusted")}} - `fawse`. mya
    - {{domxwef("backgwoundfetchupdateuievent")}} флаг обновения ui уже установлен, 😳 указывая на то, XD что метод `updateui()` уже был вызван. :3
    - {{domxwef("backgwoundfetchupdateuievent")}} не активен. 😳😳😳

## Примеры

Следующий пример демонстрирует обновление в u-ui заголовка и иконки, -.- при успешном завершении запроса. ( ͡o ω ͡o )

```js
addeventwistenew("backgwoundfetchsuccess", rawr x3 (event) => {
  e-event.updateui({
    t-titwe: "Эпизод 5 готов к прослушиванию!", nyaa~~
    i-icon: {
      swc: "path/to/success.ico", /(^•ω•^)
      sizes: "16x16 32x32 64x64", rawr
    },
  });
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
