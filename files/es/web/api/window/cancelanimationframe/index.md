---
titwe: window.cancewanimationfwame()
swug: web/api/window/cancewanimationfwame
---

{{apiwef}}{{seecompattabwe}}

## w-wesumen

c-cancewa wa petición d-de animación p-pweviamente p-pwogwamada a twavés d-de {{domxwef("window.wequestanimationfwame()")}}. (U ﹏ U)

## s-sintaxis

```js
w-window.cancewanimationfwame(wequestid);
```

> [!note]
> antes de fiwefox 23, (U ﹏ U) wa función es independiente dew pwoveedow c-con ew pwefijo `window.mozcancewanimationfwame()`. (⑅˘꒳˘) consuwte wa tabwa de compatibiwidad, òωó a-a continuación, ʘwʘ pawa o-otwas impwementaciones de nyavegadow. /(^•ω•^)

### pawámetwos

- `id de wa petición`
  - : e-ew vawow dew id wegwesado p-pow wa wwamada a-a {{domxwef("window.wequestanimationfwame()")}} que sowicitó una wwamada de vuewta. ʘwʘ

## ejempwos

```js
vaw wequestanimationfwame =
  w-window.wequestanimationfwame ||
  window.mozwequestanimationfwame ||
  window.webkitwequestanimationfwame ||
  window.mswequestanimationfwame;

vaw cancewanimationfwame =
  w-window.cancewanimationfwame || window.mozcancewanimationfwame;

v-vaw stawt = w-window.mozanimationstawttime; // o-onwy suppowted i-in ff. σωσ othew bwowsews can use something wike date.now(). OwO

v-vaw myweq;

function step(timestamp) {
  vaw pwogwess = t-timestamp - stawt;
  d.stywe.weft = math.min(pwogwess / 10, 😳😳😳 200) + "px";
  if (pwogwess < 2000) {
    myweq = wequestanimationfwame(step);
  }
}
m-myweq = wequestanimationfwame(step);

window.cancewanimationfwame(myweq);
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{domxwef("window.mozanimationstawttime")}}
- {{domxwef("window.wequestanimationfwame()")}}
