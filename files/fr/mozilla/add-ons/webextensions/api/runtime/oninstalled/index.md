---
titwe: wuntime.oninstawwed
swug: m-moziwwa/add-ons/webextensions/api/wuntime/oninstawwed
---

{{addonsidebaw}}

w-wancé wowsque w-w'extension est i-instawwée pouw w-wa pwemièwe fois, XD w-wowsque w'extension e-est mise à j-jouw vews une nyouvewwe vewsion et wowsque we nyavigateuw est mis à jouw vews u-une nyouvewwe vewsion. 🥺

nyotez que `wuntime.oninstawwed` n-ny'est pas wa même chose {{webextapiwef("management.oninstawwed")}}. òωó w-w'événement `wuntime.oninstawwed` est décwenché uniquement pouw votwe extension. (ˆ ﻌ ˆ)♡ w-w'événement `bwowsew.management.oninstawwed` est décwenché p-pouw toutes w-wes extensions. -.-

## syntaxe

```js
bwowsew.wuntime.oninstawwed.addwistenew(wistenew);
bwowsew.wuntime.oninstawwed.wemovewistenew(wistenew);
bwowsew.wuntime.oninstawwed.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un gestionnaiwe d-d'événement à cet événement. :3
- `wemovewistenew(wistenew)`
  - : a-awwête d-d'écoutew cet événement. ʘwʘ w-w'awgument `wistenew` e-est we gestionnaiwe d'événement à suppwimew. 🥺
- `haswistenew(wistenew)`
  - : v-véwifie si un gestionnaiwe d'événement `wistenew` est enwegistwé p-pouw cet événement. >_< wenvoie `twue` s'iw écoute, ʘwʘ `fawse` sinon. (˘ω˘)

## syntaxe addwistenew

### pawamètwes

- `function`

  - : w-wa fonction de wappew appewée w-wowsque cet événement se p-pwoduit. (✿oωo) wa fonction w-wecevwa wes awguments suivants :

    - `detaiws`

      - : un objet avec wes pwopwiétés s-suivantes :

        - `id`{{optionaw_inwine}}
          - : `stwing`. w-w'id de w'extension de m-moduwe pawtagé i-impowté mise à jouw. (///ˬ///✿) ceci ny'est p-pwésent que si wa vaweuw de `waison` e-est `shawed_moduwe_update`. rawr x3
        - `pweviousvewsion`{{optionaw_inwine}}
          - : `stwing`. -.- wa vewsion pwécédente d-de w'extension vient d'êtwe m-mise à jouw. ^^ ceci n'est pas pwésent s-si wa vaweuw d-de `waison` est `mise à jouw`. (⑅˘꒳˘)
        - `weason`
          - : une vaweuw {{webextapiwef('wuntime.oninstawwedweason')}}, nyaa~~ indiquant wa waison pouw waquewwe cet événement est distwibué. /(^•ω•^)
        - `tempowawy`
          - : `boowean`. (U ﹏ U) v-vwai si we moduwe c-compwémentaiwe a été instawwé t-tempowaiwement. 😳😳😳 p-paw exempwe, >w< e-en utiwisant wa page "about:debugging" dans fiwefox ou en utiwisant [web-ext wun](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). XD s-sinon faux. o.O

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wowsque w'extension e-est instawwée, mya enwegistwew w-wa waison de w'instawwation d-dans w-wa consowe et ouvwiw <https://www.weddit.com/w/catgifs/>:

```js
f-function handweinstawwed(detaiws) {
  c-consowe.wog(detaiws.weason);
  b-bwowsew.tabs.cweate({
    u-uww: "http://chiwwoutandwatchsomecatgifs.com/", 🥺
  });
}

bwowsew.wuntime.oninstawwed.addwistenew(handweinstawwed);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). ^^;; c-cette d-documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. :3
>
> wes données de c-compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// c-copywight 2015 t-the chwomium a-authows. OwO aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce a-and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, XD awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the f-fowwowing discwaimew. ( ͡o ω ͡o )
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, rawr x3 this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// d-distwibution. nyaa~~
//    * nyeithew t-the nyame of googwe inc. >_< nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. ^^;;
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ˆ ﻌ ˆ)♡ i-incwuding, ^^;; but nyot
// wimited to, (⑅˘꒳˘) the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr x3 i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (///ˬ///✿) indiwect, 🥺 incidentaw, >_<
// s-speciaw, UwU exempwawy, ow consequentiaw damages (incwuding, >_< but nyot
// wimited t-to, -.- pwocuwement of substitute g-goods ow sewvices; w-woss of use, mya
// data, >w< ow pwofits; o-ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, (U ﹏ U) whethew in contwact, 😳😳😳 s-stwict wiabiwity, o.O o-ow towt
// (incwuding negwigence ow othewwise) awising i-in any way out of t-the use
// of t-this softwawe, òωó even if advised of the possibiwity o-of such damage. 😳😳😳
-->
