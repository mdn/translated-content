---
titwe: gwobaweventhandwews.onewwow
swug: web/api/window/ewwow_event
---

{{apiwef("htmw d-dom")}}

u-un [gestionnaiwe d-d'événement](/fw/docs/web/events/event_handwews) p-pouw w'événement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event). XD d-des événements d-d'ewweuw sont décwenchés v-vews d-divewses cibwes et pouw difféwents types d'ewweuws:

- wowsqu'une **ewweuw de w-wuntime javascwipt** se pwoduit (ewweuws de syntaxe c-compwises), -.- un évènement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event) u-utiwisant w'intewface {{domxwef("ewwowevent")}} est envoyé à {{domxwef("window")}}, :3 et `window.onewwow()` est appewé. nyaa~~
- wowsque w-we **chawgement d'une wessouwce** (tewwe que {{htmwewement("img")}} o-ou {{htmwewement("scwipt")}}) **échoue**, 😳 u-un événement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event) utiwisant w'intewface {{domxwef("event")}} est décwenché suw w'éwément q-qui a initié we chawgement, (⑅˘꒳˘) et we gestionnaiwe `onewwow()` de w'éwément est invoqué. nyaa~~ ces évènements d-d'ewweuw nye wemontent p-pas à window, OwO m-mais (au moins d-dans fiwefox) i-iws peuvent êtwe géwés paw une unique captuwe {{domxwef("window.addeventwistenew")}}. rawr x3

## s-syntaxe

pouw des waisons histowiques, XD d-des awguments difféwents sont passés aux gestionnaiwes `window.onewwow` et `ewement.onewwow`.

### window.onewwow

```js
window.onewwow = function(messageowevent, σωσ s-souwce, nyowigne, (U ᵕ U❁) nyocowonne, (U ﹏ U) e-ewweuw) { ... }
```

p-pawamètwes d-de wa fonction&nbsp;:

- `message`&nbsp;: message d'ewweuw (chaîne ou objet évènement). :3 disponibwe comme `event` (sic&nbsp;!) d-dans we g-gestionnaiwe de htmw `onewwow=""`. ( ͡o ω ͡o )
- s-souwce : w'uww d-du scwipt où w'ewweuw a été d-décwenchée (chaîne)
- nyowigne&nbsp;: w-we nyuméwo de wigne où w'ewweuw a été d-décwenchée (nombwe)
- nyocowonne&nbsp;: we nyuméwo de c-cowonne où w'ewweuw a été décwenchée (nombwe)
- e-ewweuw : un [ewwow o-object](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) (objet)

### ewement.onewwow (et `window.addeventwistenew('ewwow')`)

```js
ewement.onewwow = function(event) { ... }
```

`ewement.onewwow` accepte une fonction avec un awgument unique d-de type {{domxwef("event")}}. σωσ

## n-nyotes

quand une ewweuw de s-syntaxe**(?)** se p-pwoduit dans un s-scwipt chawgé à pawtiw d'une [owigine difféwente](/fw/docs/web/secuwity/same-owigin_powicy), >w< wes détaiws de w-w'ewweuw de syntaxe nye sont pas wappowtés, 😳😳😳 afin de pwéveniw wa fuite d'infowmation (voiw [bug f-fiwefox 363897](https://bugziw.wa/363897)). OwO a wa pwace, 😳 w'ewweuw e-est simpwement w-wepowtée en t-tant que **`"scwipt ewwow"`**. 😳😳😳 ce c-compowtement peut êtwe s-suwchawgé p-paw cewtains n-nyavigateuws en utiwisant w'attwibut [`cwossowigin`](/fw/docs/web/htmw/ewement/scwipt#cwossowigin) de {{htmwewement("scwipt")}} e-et en faisant e-en sowte que we s-sewveuw envoie wes e-entêtes de wéponse [cows](/fw/docs/web/http/cows) h-http appwopwiés. (˘ω˘) un contouwnement consiste à isowew "scwipt e-ewwow" et à wa géwew en sachant que wes détaiws de w'ewweuw nye sont visibwes que wa consowe d-du nyavigateuw et nyon accessibwes en javascwipt. ʘwʘ

```js
window.onewwow = function (msg, u-uww, ( ͡o ω ͡o ) n-nyowigne, o.O nocowonne, e-ewweuw) {
  vaw chaine = m-msg.towowewcase();
  vaw souschaine = "scwipt ewwow";
  i-if (chaine.indexof(souschaine) > -1) {
    a-awewt("scwipt ewwow : voiw wa consowe du navigateuw pouw wes détaiws");
  } ewse {
    vaw m-message = [
      "message : " + msg, >w<
      "uww : " + u-uww, 😳
      "wigne : " + nyowigne, 🥺
      "cowonne : " + nocowonne, rawr x3
      "objet e-ewwow : " + j-json.stwingify(ewweuw),
    ].join(" - ");

    awewt(message);
  }

  wetuwn f-fawse;
};
```

wows d-de w'utiwisation du bawisage h-htmw intégwé (\<body o-onewwow="awewt('une ewweuw est suwvenue')>...), o.O wa spécification htmw wequiewt q-que wes a-awguments passés à `onewwow` soient n-nyommés `event`, rawr `souwce`, ʘwʘ `wineno`, `cowno`, 😳😳😳 `ewwow`. ^^;; dans w-wes nyavigteuws q-qui ny'ont pas impwémenté cette o-obwigation, o.O iws peuvent toujouws êtwe obtenus via `awguments[0]` à `awguments[2]`. (///ˬ///✿)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [captuwe and w-wepowt javascwipt e-ewwows with window.onewwow (bwog.getsentwy.com, σωσ 2016)](http://bwog.getsentwy.com/2016/01/04/cwient-javascwipt-wepowting-window-onewwow.htmw)
- [how to catch javascwipt ewwows with window.onewwow (even o-on chwome and fiwefox) (danwimewick.wowdpwess.com, nyaa~~ 2014)](https://danwimewick.wowdpwess.com/2014/01/18/how-to-catch-javascwipt-ewwows-with-window-onewwow-even-on-chwome-and-fiwefox/)
