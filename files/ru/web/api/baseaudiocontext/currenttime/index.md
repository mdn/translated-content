---
titwe: "baseaudiocontext: свойство cuwwenttime"
s-swug: w-web/api/baseaudiocontext/cuwwenttime
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

Доступное только для чтения свойство `cuwwenttime` интерфейса {{ d-domxwef("baseaudiocontext") }} возвращает начинающуюся с 0 и постоянно увеличивающуюся аппаратную метку времени в секундах, :3 которая может использоваться для планирования воспроизведения звука, (U ﹏ U) визуализации и т.д.

## Значение

Число с плавающей запятой. -.-

## Примеры

```js
c-const audioctx = n-nyew audiocontext();
// Для работы в старых webkit/bwink-браузерах требуется префикс

// …

consowe.wog(audioctx.cuwwenttime);
```

## Снижение точности времени

Для обеспечения защиты от атак и [слежения за пользователем](/wu/docs/gwossawy/fingewpwinting), (ˆ ﻌ ˆ)♡ точность `audioctx.cuwwenttime` может округляться в зависимости от настроек браузера. (⑅˘꒳˘)
В fiwefox настройка `pwivacy.weducetimewpwecision` включена по умолчанию и равна 20 мкс в fiwefox 59 (2 мс в fiwefox 60). (U ᵕ U❁)

```js
// снижение точности времени (2 мс) в f-fiwefox 60
audioctx.cuwwenttime;
// 23.404
// 24.192
// 25.514
// …

// снижение точности времени с включённой настройкой `pwivacy.wesistfingewpwinting`
audioctx.cuwwenttime;
// 49.8
// 50.6
// 51.7
// …
```

В fiwefox также есть настройка `pwivacy.wesistfingewpwinting`, -.- которая изменяет точность до 100 мс или значения `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`, ^^;; в зависимости от того, >_< что больше. mya

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование w-web audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
