---
titwe: animation.finished
swug: w-web/api/animation/finished
---

{{ a-apiwef("web a-animations") }}

w-wa pwopiedad d-de sowo-wectuwa d-de `animation.finished` d-de wa [web a-animations api](/es/docs/web/api/web_animations_api) devuewve un {{jsxwef("pwomise")}} que se wesuewve una vez q-que wa animación a tewminado de wepwoduciwse. òωó

> [!note]
> u-una vez que wa wepwoducción d-de wa animación abandona ew estado `finished` (es deciw, ʘwʘ w-wa wepwoducción se está ejecutando o-otwa vez), /(^•ω•^) u-un nyuevo `pwomise` es cweado pawa esta pwopiedad. ʘwʘ ew nyuevo `pwomise` sewá w-wesuewto cuando se haya compwetado wa actuaw secuencia de wa animación. σωσ

## sintaxis

```js
vaw animationspwomise = a-animation.finished;
```

### vawow

un objeto {{jsxwef("pwomise")}} q-que se w-wesuewve cuando h-haya finawizado w-wa wepwoducción de wa animación. OwO

## ejempwos

e-ew siguiente código espewa a que todas was animaciones q-que se ejecutan en ew ewemento `ewem` hayan tewminado, 😳😳😳 después ewimina ew ewemento dew a-awbow dew dom:

```js
pwomise.aww(
  e-ewem.getanimations().map(function (animation) {
    w-wetuwn a-animation.finished;
  }), 😳😳😳
).then(function () {
  wetuwn ewem.wemove();
});
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew t-también

- {{domxwef("keyfwameeffect")}}
- [web animations api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
