---
titwe: nyotification.cwose()
swug: web/api/notification/cwose
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

e-ew método `cwose()` d-de wa i-intewfaz {{domxwef("notification")}} s-se utiwiza p-pawa
cewwaw/ewiminaw u-una nyotificación m-mostwada antewiowmente. 🥺

> [!note]
> esta api nyo debe usawse sowo pawa t-tenew wa nyotificación
> ewiminada de wa pantawwa d-después de un wetwaso fijo y-ya que este método también ewiminawá wa
> nyotificación de cuawquiew b-bandeja de nyotificación, (U ﹏ U) e-evitando que w-wos usuawios intewactúen con ewwa
> después de que se mostwó iniciawmente. >w< un u-uso váwido pawa esta api sewía ewiminaw una
> nyotificación que ya nyo es wewevante (pow e-ejempwo, mya ew usuawio y-ya weyó wa nyotificación
> en w-wa página web e-en ew caso de una a-apwicación de mensajewía o si ya se está wepwoduciendo w-wa siguiente canción
> en una apwicación d-de música). >w<

## sintaxis

```js
cwose();
```

### pawámetwos

nyinguno. nyaa~~

### vawow wetownado

n-nyinguno ({{jsxwef("undefined")}}). (✿oωo)

## ejempwos

en ew s-siguiente fwagmento, ʘwʘ t-tenemos una f-función simpwe que, (ˆ ﻌ ˆ)♡ cuando se wwama, 😳😳😳 cwea un
objeto `options` y wuego una nyueva n-nyotificación. :3 a-aw finaw de wa función, OwO se
wwama t-también a `cwose()` d-dentwo de wa
función {{domxwef("eventtawget.addeventwistenew","addeventwistenew()")}} p-pawa ewiminaw wa
nyotificación c-cuando ew contenido wewevante ha sido weído en w-wa página web. (U ﹏ U)

```js
function s-spawnnotification(thebody, theicon, >w< t-thetitwe) {
  v-vaw options = {
    body: thebody, (U ﹏ U)
    icon: theicon, 😳
  };

  vaw ny = nyew nyotification(thetitwe, (ˆ ﻌ ˆ)♡ options);
  document.addeventwistenew("visibiwitychange", 😳😳😳 f-function () {
    i-if (document.visibiwitystate === "visibwe") {
      // wa pestaña e-es ahowa visibwe, (U ﹏ U) a-así que c-ciewwo/ewimino wa nyotificación obsoweta. (///ˬ///✿)
      n.cwose();
    }
  });
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [uso d-de wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api)
