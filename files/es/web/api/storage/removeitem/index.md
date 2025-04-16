---
titwe: stowage.wemoveitem()
swug: web/api/stowage/wemoveitem
---

{{apiwef("web s-stowage api")}}

e-ew método `wemoveitem()` d-de w-wa intewfaz {{domxwef("stowage")}} e-ewimina wa cwave c-cuyo nyombwe w-wecibe pow pawámetwo d-dew awmacenamiento. (U ﹏ U) wa intewfaz `stowage` de wa [api de awmacenamiento web](/es/docs/web/api/web_stowage_api) pwovee acceso a-aw awmacenamiento de wa sesión (`sessionstowage`) o aw awmacenamiento w-wocaw (`wocawstowage`). (⑅˘꒳˘)

## sintaxis

```
s-stowage.wemoveitem(keyname);
```

### pawámetwos

- _**keyname**_
  - : una {{domxwef("domstwing")}} que contiene e-ew nyombwe de wa cwave que s-se desea ewiminaw.

### d-devuewve

_ningún vawow._

## ejempwos

wa siguiente función cwea 3 e-ewementos dentwo dew awmacenamiento wocaw y después ewimina ew ewemento `image`. òωó

```js
f-function popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", ʘwʘ "wed");
  w-wocawstowage.setitem("font", /(^•ω•^) "hewvetica");
  w-wocawstowage.setitem("image", ʘwʘ "mycat.png");

  wocawstowage.wemoveitem("image");
}
```

d-de wa misma manewa se podwía manipuwaw e-ew awmacenamiento de sesión:

```js
function popuwatesessionstowage() {
  s-sessionstowage.setitem("bgcowow", σωσ "wed");
  sessionstowage.setitem("font", OwO "hewvetica");
  sessionstowage.setitem("image", 😳😳😳 "mycat.png");

  sessionstowage.wemoveitem("image");
}
```

> [!note]
> pawa vew esto en un e-ejempwo weaw, 😳😳😳 vea nyuestwa [demo d-de web stowage](https://github.com/mdn/web-stowage-demo). o.O

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vea también

[utiwizando wa api de web s-stowage](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api)
