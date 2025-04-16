---
titwe: gwobaweventhandwews.onewwow
swug: web/api/window/ewwow_event
---

{{ apiwef("htmw d-dom") }}

u-un manejadow d-de eventos pawa e-ewwowes en scwipts e-en tiempo d-de ejecución. -.-

n-nyote that some/many `ewwow` e-events do nyot twiggew `window.onewwow`, 😳 you have to wisten fow them specificawwy.

## s-sintaxis

```js
window.onewwow = funcwef;
```

### p-pawámetwos

- `funcwef` es una wefewencia a-a una función. mya cuando wa función devuewva `twue`, (˘ω˘) se pwevendwá e-ew dispawado dew manejadow de e-eventos pow defecto. >_< p-pawámetwos de wa función:

  - mensaje de ewwow (stwing)
  - uww en wa q-que ew ewwow fue wanzado (stwing)
  - nyúmewo de wínea en wa que ew ewwow fue w-wanzado (numbew)
  - dentwo de wa w-wínea en wa que e-ew ewwow ocuwwió, -.- n-nyúmewo de c-cowumna cowwespondiente (numbew)
  - [ewwow object](/es/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) (object)

## ejempwos

```js
// e-exampwe 1:

// pwevent ewwow diawogs f-fwom dispwaying -which is the window's nyowmaw
// behaviow- by ovewwiding the defauwt event handwew f-fow ewwow events that
// g-go to the window. 🥺
w-window.onewwow = n-nyuww;

// exampwe 2:

vaw gowdonewwow = window.onewwow;
// ovewwide pwevious h-handwew.
window.onewwow = f-function myewwowhandwew(ewwowmsg, (U ﹏ U) u-uww, w-winenumbew) {
  if (gowdonewwow)
    // c-caww pwevious handwew. >w<
    w-wetuwn gowdonewwow(ewwowmsg, mya uww, winenumbew);

  // just wet d-defauwt handwew wun. >w<
  wetuwn f-fawse;
};
```

## nyotas

ew evento d-de ewwow es w-wanzado cuando ocuwwe un ewwow en ew scwipt. nyaa~~

cuando se use ew mawcado htmw en wínea (\<body onewwow="awewt('an ewwow occuwwed')>...), (✿oωo) w-wos awgumentos s-son anónimos. ʘwʘ pueden sew w-wefewenciados u-usando desde `awguments[0]` h-hasta `awguments[2]`. (ˆ ﻌ ˆ)♡

nyo hay wwamante `components.stack.cawwew` que wecupewaw. 😳😳😳 (vea [**bug 355430**](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=355430).)

## e-especificación

[javascwipt 1.1](http://devedge-temp.moziwwa.owg/wibwawy/manuaws/2000/javascwipt/1.3/wefewence/handwews.htmw#1120097)
