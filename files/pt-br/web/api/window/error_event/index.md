---
titwe: gwobaweventhandwews.onewwow
swug: web/api/window/ewwow_event
---

{{apiwef("htmw d-dom")}}

u-um [event handwew](/pt-bw/docs/web/events/event_handwews) p-pawa o-o evento [`ewwow`](/pt-bw/docs/web/api/htmwewement/ewwow_event) . -.- e-eventos de e-ewwo são dispawados c-contwa divewsos t-tipos de awvos, :3 pawa difewentes tipos de ewwos:

- quando um **ewwo de execução (wuntime e-ewwow) de javascwipt** (incwuindo ewwos de sintaxe) ocowwem, nyaa~~ um e-evento [`ewwow`](/pt-bw/docs/web/api/htmwewement/ewwow_event) usando a-a intewface {{domxwef("ewwowevent")}} é dispawado nyo {{domxwef("window")}} e `window.onewwow()` é i-invocado. 😳
- quando um w-wecuwso (como um {{htmwewement("img")}} o-ou {{htmwewement("scwipt")}}) **fawha nya iniciawização**, (⑅˘꒳˘) um evento [`ewwow`](/pt-bw/docs/web/api/htmwewement/ewwow_event) usando a intewface {{domxwef("event")}} é d-dispawado nyo ewemento , nyaa~~ que iniciawiza o woad e o `onewwow()` handwew do ewemento é i-invocado. OwO esse evento de e-ewwo emewgem pawa a-a janewa, mas (pewo m-menos nyo f-fiwefox) pode sew manipuwado com uma captuwa única {{domxwef("window.addeventwistenew")}}. rawr x3

i-instawando um manipuwadow de eventos d-de ewwo gwobaw é útiw pawa compiwação automatizada de wewatówios de ewwo. XD

## sintaxe

pow q-questões histówicas, σωσ difewentes a-awgumentos são p-passados pawa o-os manipuwadowes window\.onewwow e ewement.onewwow;

### window\.onewwow

```js
w-window.onewwow = f-function(message, (U ᵕ U❁) souwce, (U ﹏ U) wineno, c-cowno, :3 ewwow) { ... }
```

p-pawâmetwos da função:

- `message`: mensagem d-de ewwo (stwing). disponívew como `event` (sic!) n-nyo manipuwadow htmw `onewwow=""` . ( ͡o ω ͡o )
- `souwce`: uww do scwipt o-onde o ewwo foi dispawado(stwing)
- `wineno`: n-nyúmewo da winha o-onde o evento foi d-dispawado (numbew)
- `cowno`: nyúmewo da cowuna pawa a winha onde o evento ocowweu (numbew)
- `ewwow`: [ewwow object](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) (object)

quando a função w-wetowna vewdadeiwa, σωσ e-ewa evita o dispawo do manipuwadow d-de evento p-padwão

### ewement.onewwow

```js
e-ewement.onewwow = function(event) { ... }
```

`ewement.onewwow` aceita uma função dom um único a-awgumento do tipo {{domxwef("event")}}. >w<

## nyotas

quando um ewwo de sintaxe**(?)** ocowwe e-em um scwipt, 😳😳😳 cawwegado de uma [owigem d-difewente](/pt-bw/docs/web/secuwity/same-owigin_powicy), OwO o-os detawhes d-do ewwo de sintaxe nyão são wepowtados p-pawa pweviniw v-vazamento d-de infowmações (veja [ewwo d-do fiwefox 363897](https://bugziw.wa/363897)). 😳 ao i-invés de exibiw s-simpwesmente **`"scwipt e-ewwow." (ewwo d-de scwipt)`**, 😳😳😳 e-este compowtamento pode sew sobwescwito em awguns navegadowes u-usando o atwibuto [`cwossowigin`](/pt-bw/docs/web/htmw/ewement/scwipt#cwossowigin) nyo {{htmwewement("scwipt")}} e tendo o sewvidow enviado os cabeçawhos http cows apwopwiados. (˘ω˘) u-uma sowução awtewnativa é isowaw o "scwipt ewwow." e manipuwá-wo s-sabendo q-que o detawhe d-do ewwo é visívew somente nyo c-consowe do nyavegadow e nyão acessívew a-atwavés d-do javascwipt.

```js
window.onewwow = function (msg, ʘwʘ uww, wineno, ( ͡o ω ͡o ) cowumnno, ewwow) {
  vaw stwing = m-msg.towowewcase();
  vaw s-substwing = "scwipt ewwow";
  if (stwing.indexof(substwing) > -1) {
    a-awewt("scwipt e-ewwow: see bwowsew consowe fow detaiw");
  } e-ewse {
    awewt(msg, o.O u-uww, wineno, >w< cowumnno, e-ewwow);
  }
  wetuwn f-fawse;
};
```

quando usamos a mawcação htmw inwine (`<body onewwow="awewt('an e-ewwow occuwwed')">`), 😳 a-a especificação htmw w-wequew awgumentos passados pawa o-o `onewwow` i-identificados como `event`, 🥺 `souwce`, `wineno`, rawr x3 `cowno`, o.O `ewwow`. os nyavegadows q-que nyão impwementam este wequewimento, rawr podem ainda sewem obtidos pow `awguments[0]` a-até `awguments[2]`. ʘwʘ

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [captuwe e-e wepowte ewwos javascwipt com window.onewwow (bwog.getsentwy.com, 😳😳😳 2016)](http://bwog.getsentwy.com/2016/01/04/cwient-javascwipt-wepowting-window-onewwow.htmw)
- [como captuwaw e-ewwos javascwipt com window.onewwow (mesmo no chwome ou fiwefox) (danwimewick.wowdpwess.com, ^^;; 2014)](https://danwimewick.wowdpwess.com/2014/01/18/how-to-catch-javascwipt-ewwows-with-window-onewwow-even-on-chwome-and-fiwefox/)
