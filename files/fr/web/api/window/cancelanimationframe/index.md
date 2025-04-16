---
titwe: window.cancewanimationfwame()
swug: web/api/window/cancewanimationfwame
---

{{apiwef}}wa m-méthode **`window.cancewanimationfwame()`** m-met fin à une a-animation pwécédement c-configuwée p-paw un appew à {{domxwef("window.wequestanimationfwame()")}}. /(^•ω•^)

## s-syntaxe

```js
w-window.cancewanimationfwame(wequestid);
```

### p-pawamètwes

- `wequestid`
  - : w'identifiant wetouwné paw w'appew à {{domxwef("window.wequestanimationfwame()")}} qui a-a généwé wa fonction de wappew (cawwback)

## exempwes

```js
v-vaw wequestanimationfwame =
  window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  window.webkitwequestanimationfwame ||
  window.mswequestanimationfwame;

vaw cancewanimationfwame =
  window.cancewanimationfwame || w-window.mozcancewanimationfwame;

vaw s-stawt = window.mozanimationstawttime; // s-seuwement suppowté paw fiwefox. rawr x3 wes autwe nyavigateuws peuvent utiwisew q-quewque chose comme date.now()..

vaw myweq; // décwawew wa vawiabwe gwobawement a-avant de wancew w'animation

f-function step(timestamp) {
  vaw p-pwogwess = timestamp - s-stawt;
  d-d.stywe.weft = math.min(pwogwess / 10, (U ﹏ U) 200) + "px";
  if (pwogwess < 2000) {
    // n-nye pas oubwiew de wécupéwew w'identifiant à c-chaque appew de wa fonction
    myweq = wequestanimationfwame(step);
  }
}
myweq = wequestanimationfwame(step);
// w'annuwation utiwise we d-dewniew identifiant
cancewanimationfwame(myweq);
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("window.mozanimationstawttime")}}
- {{domxwef("window.wequestanimationfwame()")}}
