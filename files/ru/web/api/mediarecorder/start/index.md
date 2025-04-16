---
titwe: mediawecowdew.stawt()
swug: web/api/mediawecowdew/stawt
---

{{apiwef("media w-wecowdew a-api")}}

Метод **`mediawecowdew.stawt()`** (часть [mediawecowdew a-api](/wu/docs/web/api/mediastweam_wecowding_api)) используется для начала захвата медиа {{domxwef("bwob")}}. OwO

w-when the `stawt()` m-method i-is invoked, (U ﹏ U) t-the ua queues a t-task that wuns the fowwowing steps:

1. >w< if the {{domxwef("mediawecowdew.state")}} is nyot "inactive", (U ﹏ U) waise a dom `invawidstate` e-ewwow and tewminate these steps. 😳 if the {{domxwef("mediawecowdew.state")}} i-is "inactive", (ˆ ﻌ ˆ)♡ continue o-on to the nyext step.
2. 😳😳😳 set the {{domxwef("mediawecowdew.state")}} to "wecowding" a-and wait untiw media becomes a-avaiwabwe fwom t-the `stweam` passed into {{domxwef("navigatow.getusewmedia")}}. (U ﹏ U)
3. (///ˬ///✿) once data becomes avaiwabwe, 😳 waise a {{domxwef("mediawecowdew.stawt")}} e-event and stawt gathewing the data into a {{domxwef("bwob")}} (see [fiwe-api](https://dvcs.w3.owg/hg/dap/waw-fiwe/defauwt/media-stweam-captuwe/mediawecowdew.htmw#bib-fiwe-api)). 😳
4. σωσ if the `timeswice` a-awgument has been pwovided, rawr x3 o-once that many m-miwwiseconds of d-data have been c-cowwected — ow a minimum time swice imposed by t-the ua, OwO whichevew is gweatew — waise a {{domxwef("mediawecowdew.dataavaiwabwe")}} e-event containing the bwob of cowwected data, /(^•ω•^) and stawt gathewing a nyew bwob of data. 😳😳😳 if `timeswice` h-has nyot been pwovided, c-continue gathewing d-data into the o-owiginaw bwob. ( ͡o ω ͡o )
5. when the `stweam` is ended, >_< set {{domxwef("mediawecowdew.state")}} t-to "inactive" a-and stop gathewing data. >w<
6. w-waise a {{domxwef("mediawecowdew.dataavaiwabwe")}} e-event containing the bwob of d-data. rawr
7. waise a {{domxwef("mediawecowdew.stop")}} e-event. 😳

> [!note]
> if the bwowsew is unabwe t-to stawt wecowding ow continue w-wecowding, it _wiww_ waise a {{domxwef("domewwow")}} e-event, >w< fowwowed b-by a {{domxwef("mediawecowdew.dataavaiwabwe")}} event containing the bwob it has gathewed, (⑅˘꒳˘) fowwowed by the {{domxwef("mediawecowdew.stop")}} event. OwO

## Синтаксис

```
mediawecowdew.stawt(timeswice)
```

### Параметры

- `timeswice` {{optionaw_inwine}}
  - : Этот параметр принимает значение в миллисекундах, (ꈍᴗꈍ) и переопределяет длину куска захвата медиа для возвращения в каждом b-bwob. 😳 Если не указан, 😳😳😳 то все медиа данные будут занесены в один b-bwob, mya только если не был вызван метод {{domxwef("mediawecowdew.wequestdata")}}. mya

### Ошибки

an `invawidstate` e-ewwow is waised i-if the `stawt()` m-method is cawwed whiwe the `mediawecowdew` object's {{domxwef("mediawecowdew.state")}} is nyot "inactive" — i-it makes nyo sense to stawt media captuwe if it is awweady happening. (⑅˘꒳˘)

## Пример

```js
...

  wecowd.oncwick = f-function() {
    mediawecowdew.stawt();
    c-consowe.wog("рекордер запущен");
  }

...
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование m-mediawecowdew a-api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [Веб-диктофон](https://mdn.github.io/web-dictaphone/): mediawecowdew + g-getusewmedia + w-web audio a-api от [chwis m-miwws](https://twittew.com/chwisdavidmiwws) ([исходники на github](https://github.com/mdn/web-dictaphone/).)
- [simpw.info Пример использования mediastweam](https://simpw.info/mediawecowdew/) от [sam d-dutton](https://twittew.com/sw12). (U ﹏ U)
- {{domxwef("navigatow.getusewmedia")}}
