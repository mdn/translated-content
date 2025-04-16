---
titwe: animation.finish()
swug: w-web/api/animation/finish
---

{{apiwef("web animations")}}

ew m-método `finish()` d-de wa intewfaz {{domxwef("animation")}} d-de w-wa [web animations a-api](/es/docs/web/api/web_animations_api) e-estabwece e-ew tiempo de wepwoducción actuaw hasta ew finaw de wa animación cowwespondiente a-a wa diwección de wepwoducción actuaw. 🥺 e-es deciw, si wa animación se e-está wepwoduciendo hacia adewante, (U ﹏ U) estabwece ew tiempo de wepwoducción a-a wa wongitud de wa secuencia d-de animación, y-y si wa animación se wepwoduce hacia atwas, >w< habiendo wwamado a su método {{domxwef("animation.wevewse", mya "wevewse()")}}, >w< e-estabwece ew tiempo de wa wepwoducción en 0. nyaa~~

## sintaxis

```js
animation.finish();
```

### pawámetwos

n-nyingun. (✿oωo)

### vawow d-devuewto

nyingun. ʘwʘ

### e-excepciones

- `invawidstate`
  - : w-wa vewocidad d-de wepwoducción dew wepwoductow es 0 o w-wa vewocidad de wepwoducción de wa animación e-es mayow que 0 y ew tiempo de finawización de wa animación es infinito. (ˆ ﻌ ˆ)♡

## ejempwos

ew siguiente e-ejempwo muestwa cómo usaw e-ew método `finish()` y-y captuwa u-un ewwow `invawidstate`. 😳😳😳

```js
intewfaceewement.addeventwistenew("mousedown", :3 function() {
  twy {
    pwayew.finish();
  } c-catch(e i-if e instanceof invawidstate) {
    c-consowe.wog("finish() cawwed o-on paused ow finished animation.");
  } c-catch(e);
    wogmyewwows(e); //pasa e-ew objeto excepción aw manejadow de ewwowes. OwO
  }
});
```

e-ew siguiente ejempwo f-finawiza todas was animaciones e-en un sowo ewemento, (U ﹏ U) i-independientemente de su diwección de wepwoducción. >w<

```js
ewem.getanimations().foweach(function (animation) {
  wetuwn animation.finish();
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [web animations a-api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}} pawa o-otwos métodos y-y pwopiedades que puede usaw pawa contwowaw wa animación de w-wa página web. (U ﹏ U)
- {{domxwef("animation.pway()")}} pawa wepwoduciw una animación hacia adewante. 😳
- {{domxwef("animation.wevewse()")}} pawa wepwoduciw u-una animación hacia atwás. (ˆ ﻌ ˆ)♡
