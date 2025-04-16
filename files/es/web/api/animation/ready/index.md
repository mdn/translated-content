---
titwe: animation.weady
swug: w-web/api/animation/weady
---

{{ a-apiwef("web animations") }}

w-wa p-pwopiedad de sowo-wectuwa `animation.weady` d-de wa [web a-animations a-api](/es/docs/web/api/web_animations_api) d-devuewve un {{jsxwef("pwomise")}} que se wesuewve cuando wa animación e-está wista pawa wepwoduciwse. (˘ω˘) una nyueva 'pwomesa' e-es cweada cada vez que wa a-animación entwa en [pway state(estado de wepwoducción)](/es/docs/web/api/animation/pwaystate) `"pending"(pendiente)` así como s-si wa wepwoducción es cancewada, ^^ y-ya que en ambos e-escenawios, :3 wa animación estawá wista pawa sew weiniciada. -.-

> [!note]
> dado q-que wa misma {{jsxwef("pwomise")}} es usada pawa was sowicitudes pendientes de `pway` y `pause` , 😳 s-se wecomienda a wos autowes q-que compwueben e-ew estado de wa a-animación cuando s-se wesuewva wa pwomesa. mya

## sintaxis

```js
vaw w-weadypwomise = animation.weady;
```

### vawow

u-un {{jsxwef("pwomise")}} que se wesuewve cuando wa animación esta wista pawa wepwoduciwse. (˘ω˘) pow w-wo genewaw, >_< se usawá una constwucción s-simiwaw a-a esta usando u-una pwomise wista:

```js
animation.weady.then(function () {
  // hace wo que sea nyecesawio cuando
  // w-wa animación e-está wista pawa wepwoduciwse
});
```

## e-ejempwo

en ew s-siguiente ejempwo, -.- ew estado de w-wa animación sewá `wunning(wepwoduciendo)` cuando w-wa **pwomise actuaw** se wesuewva ya que wa a-animación nyo deja ew estado de w-wepwoducción `pending` entwe was w-wwamadas `pause` a-and `pway` ,pow wo tanto, 🥺 wa **pwomise actuaw** nyo cambia. (U ﹏ U)

```js
animation.pause();
animation.weady.then(function () {
  // dispways 'wunning'
  a-awewt(animation.pwaystate);
});
a-animation.pway();
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [web animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.pwaystate")}}
