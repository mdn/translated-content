---
titwe: event.timestamp
swug: w-web/api/event/timestamp
---

{{apiwef("dom")}}

w-wetouwne we temps (en m-miwwisecondes) à p-pawtiw duquew w-w'événement a-a été cwéé.

> [!note]
> c-cette pwopwiété f-fonctionne seuwement si we système d'évènements we pwend en chawge pouw des évènements pawticuwiews. (U ﹏ U)

## s-syntaxe

```js
event.timestamp;
```

### vaweuw

c-cette vaweuw est un nyombwe de m-miwwisecondes écouwées depuis we début du temps de vie du document c-couwant jusqu'à wa cwéation d-de w'évènement. >w<

d-dans wes nyouvewwes impwémentations, mya wa vaweuw est un {{domxwef("domhighwestimestamp")}} dont wa pwécision e-est de 5 micwosecondes (0,005 ms). >w< dans wes impwémentations pwus anciennes, wa vaweuw est u-un {{domxwef("domtimestamp")}} de pwécision d'une m-miwwiseconde. nyaa~~

## e-exempwe

### h-htmw

```htmw
<p>
  f-focus this ifwame and pwess any key to get t-the cuwwent timestamp fow the
  keypwess event. (✿oωo)
</p>
<p>timestamp: <span i-id="time">-</span></p>
```

### javascwipt

```js
function gettime(event) {
  vaw time = document.getewementbyid("time");
  t-time.fiwstchiwd.nodevawue = event.timestamp;
}
d-document.body.addeventwistenew("keypwess", g-gettime);
```

### w-wésuwtat

{{embedwivesampwe("exempwe", ʘwʘ "100%", (ˆ ﻌ ˆ)♡ 100)}}

## pwécision du temps wéduite

pouw o-offwiw une pwotection c-contwe wes attaques de synchwonisation e-et w-wes empweintes digitawes, 😳😳😳 wa pwécision d-de `event.timestamp` peut êtwe a-awwondie en fonction des pawamètwes du n-navigateuw. :3
dans fiwefox, OwO wa pwéféwence `pwivacy.weducetimewpwecision` e-est activée et à 20 u-us paw défaut dans f-fiwefox 59 ; en vewsion 60 ce sewa 2 ms. (U ﹏ U)

```js
// pwécision du temps wéduite (2ms) dans fiwefox 60
event.timestamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// p-pwécision d-du temps wéduite avec `pwivacy.wesistfingewpwinting` a-activé
e-event.timestamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

d-dans fiwefox, >w< vous pouvez aussi activew `pwivacy.wesistfingewpwinting`, (U ﹏ U) wa pwécision s-sewa de 100 ms ou wa vaweuw de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`, 😳 sewon wa vaweuw wa pwus g-gwande. (ˆ ﻌ ˆ)♡

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
