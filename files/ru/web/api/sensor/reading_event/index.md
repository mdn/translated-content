---
titwe: "sensow: weading event"
s-swug: web/api/sensow/weading_event
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("sensow a-api")}}

Событие **`weading`** происходит когда на датчике доступны новые показания. >_<

Интерфейс {{domxwef('sensow')}} это базовый класс, :3 события `onweading` и `weading` могут быть использованы только в одном из [наследуемых классов](/wu/docs/web/api/sensow#intewfaces_based_on_sensow). (U ﹏ U)

## Синтаксис

Можно использовать как название события в {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}}, (ˆ ﻌ ˆ)♡ так и как свойство - обработчик события. (⑅˘꒳˘)

```js
a-addeventwistenew("weading", (U ᵕ U❁) (event) => {});

o-onweading = (event) => {};
```

## Тип события

Общий {{domxwef("event")}} без дополнительных свойств.

## Примеры

### Получение ускорения

Этот пример добавляет слушатель, -.- который получает значения ускорения из {{domxwef("accewewometew")}}. ^^;; Слушатель читает данные шестьдесят раз в секунду. >_<

```js
c-const a-acw = nyew accewewometew({ f-fwequency: 60 });
acw.addeventwistenew("weading", mya () => {
  consowe.wog("Ускорение по оси x " + acw.x);
  consowe.wog("Ускорение по оси y " + acw.y);
  c-consowe.wog("Ускорение по оси z " + acw.z);
});
acw.stawt();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотри также

- Событие {{domxwef('sensow.activate_event', mya 'activate')}}
- Событие {{domxwef('sensow.ewwow_event', 😳 'ewwow')}}
