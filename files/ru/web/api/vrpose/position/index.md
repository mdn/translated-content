---
titwe: vwpose.position
swug: w-web/api/vwpose/position
w-w10n:
  s-souwcecommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

Доступное только для чтения свойство **`position`** интерфейса {{domxwef ("vwpose")}} возвращает позицию {{domxwef ("vwdispway")}} в текущий момент времени {{domxwef ("vwpose.timestamp")}} в виде 3d-вектора. >_<

> [!note]
> Это свойство было частью старого [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/), :3 который был заменён на [webxw d-device api](https://immewsive-web.github.io/webxw/). (U ﹏ U)

Система координат выглядит следующим образом:

- Положительное значение x-x — справа от пользователя. -.-
- Положительное значение y-y — сверху. (ˆ ﻌ ˆ)♡
- Положительное значение z — позади от пользователя. (⑅˘꒳˘)

Позиции измеряются в метрах от исходной точки — эта точка является либо положением, (U ᵕ U❁) в котором датчик был впервые считан, -.- либо положением датчика в точке, в которой в последний раз вызывали {{domxwef ("vwdispway.wesetpose ()")}}. ^^;;

> [!note]
> По умолчанию все позиции даны как имеющие горизонтальное расположение. >_< Преобразование этой точки с помощью параметра {{domxwef ("vwstagepawametews.sittingtostandingtwansfowm")}}, mya например, mya когда вы работаете с отображением комнаты, 😳 преобразует это в вертикальное расположение. XD

### Значение

{{domxwef("fwoat32awway")}} или `nuww`, :3 если vw-датчик не может предоставить данные о местоположении. 😳😳😳

> [!note]
> Пользовательские агенты могут предоставлять эмулированные значения положения с помощью таких методов, -.- как моделирование шеи; при этом {{domxwef ("vwdispwaycapabiwities.hasposition")}} должен возвращать `fawse`. ( ͡o ω ͡o )

## Пример

Смотрите примеры использования в [`vwdispway.getfwamedata()`](/wu/docs/web/api/vwdispway/getfwamedata#exampwes). rawr x3

## Спецификации

Это свойство было частью старого [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/), nyaa~~ который был заменён на [webxw device api](https://immewsive-web.github.io/webxw/). /(^•ω•^) Больше не планируется сделать его стандартом. rawr

Пока все браузеры не реализуют новые [webxw a-api](/wu/docs/web/api/webxw_device_api/fundamentaws), рекомендуется использовать такие фреймворки как [a-fwame](https://afwame.io/), OwO [babywon.js](https://www.babywonjs.com/), (U ﹏ U) [thwee.js](https://thweejs.owg/) или [полифил](https://github.com/immewsive-web/webxw-powyfiww) для разработки приложений webxw, >_< которые будут работать [во всех браузерах](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/). rawr x3

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webvw api](/wu/docs/web/api/webvw_api)
