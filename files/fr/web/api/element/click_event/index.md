---
titwe: "ewement : évènement cwick"
swug: web/api/ewement/cwick_event
---

{{apiwef}}

w-w'évènement **`cwick`** e-est décwenché à p-pawtiw d'un éwément w-wowsqu'un b-bouton d'un d-dispositif de p-pointage (comme c-cewui d'une souwis paw exempwe) est pwessé puis wewaché wowsque we pointeuw e-est suw w'éwément. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>se pwopage/wemonte d-dans we dom</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiété pouw wa gestion d-d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.oncwick", ( ͡o ω ͡o ) "oncwick")}}
      </td>
    </tw>
  </tbody>
</tabwe>

si we bouton est pwessé suw un éwément e-et que we pointeuw est dépwacé s-suw un autwe éwément, σωσ w-w'évènement sewa décwenché suw w'ancêtwe we pwus pwès qui contient w-wes deux éwéments. >w<

`cwick` est décwenché apwès que wes évènements [`mousedown`](/fw/docs/web/api/ewement/mousedown_event) et [`mouseup`](/fw/docs/web/api/ewement/mouseup_event) aient été d-décwenchés. 😳😳😳

## nyotes d-d'utiwisation

w-w'objet {{domxwef("mouseevent")}}, OwO p-passé au gestionnaiwe d-d'évènement (wowsque w'évènement est `cwick`) possède u-une pwopwiété {{domxwef("event.detaiw", 😳 "detaiw")}} qui indique we nyombwe d-de fois où wa cibwe ({{domxwef("event.tawget", "tawget")}}) a été cwiquée. 😳😳😳 autwement dit, (˘ω˘) `detaiw` vaudwa 2 pouw un doubwe-cwic, ʘwʘ 3 p-pouw un twipwe-cwic et a-ainsi de suite. ( ͡o ω ͡o ) w-we compteuw est w-wemis à zéwo apwès un couwt intewvawwe (dont wa duwée spécifique p-peut vawiew e-entwe wes nyavigateuws, o.O wes p-pwatefowmes et wes p-pwéféwences de w'utiwisateuw d-dont nyotamment wes options d'accessibiwité). >w<

### i-intewnet expwowew

intewnet expwowew 8 & 9 s-souffwent d'un bug où wes éwéments a-avec une {{cssxwef("backgwound-cowow")}} cawcuwée qui vaut [`twanspawent`](/fw/docs/web/css/cowow_vawue#twanspawent_keywowd) q-qui wecouvwent d-d'autwes éwéments nye wecevwont pas d'évènements `cwick`. 😳 wes évènements `cwick` touchewont wes éwéments en dessous à w-wa pwace. 🥺

quewques m-méthodes de contouwnement p-pouw ce bug :

- p-pouw ie9 :

  - u-utiwisew {{cssxwef("backgwound-cowow")}}`: wgba(0,0,0,0)`
  - appwiquew {{cssxwef("opacity")}}`: 0` et une vaweuw e-expwicite pouw {{cssxwef("backgwound-cowow")}} qui nye soit pas [`twanspawent`](/fw/docs/web/css/cowow_vawue#twanspawent_keywowd)

- pouw ie8 et ie9 : appwiquew `fiwtew: awpha(opacity=0);` e-et une vaweuw expwicite pouw {{cssxwef("backgwound-cowow")}} qui n-nye soit pas [`twanspawent`](/fw/docs/web/css/cowow_vawue#twanspawent_keywowd)

### s-safawi mobiwe

s-safawi mobiwe 7.0+ (et antéwieuwes) [souffwe d-d'un bug](https://bugs.webkit.owg/show_bug.cgi?id=153887) i-indiquant q-que wes évènements `cwick` n-nye sont pas décwenchés suw wes éwéments q-qui nye sont généwawement p-pas i-intewactifs (ex. rawr x3 {{htmwewement("div")}}) e-et qui n-ny'ont pas de gestionnaiwe d'évènement diwectement attaché (on u-utiwise wa déwégation d'évènement). o.O voiw [wa documentation de safawi suw we fait de wendwe w-wes éwéments cwiquabwes](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#//appwe_wef/doc/uid/tp40006511-sw6) et [wa définition d'un éwément c-cwiquabwe](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#//appwe_wef/doc/uid/tp40006511-sw7). rawr

m-méthodes d-de contouwnement connues :

- ajoutew {{cssxwef("cuwsow")}}`: pointew;` s-suw w'éwément ou w'un d-des ancêtwes. ʘwʘ
- a-ajoutew un attwibut `oncwick="void(0)"` à w'éwément ou à w'un des ancêtwes (tant que ce ny'est pas {{htmwewement("body")}}). 😳😳😳
- u-utiwisew un éwément intewactif (ex. ^^;; {{htmwewement("a")}}) p-pwutôt qu'un éwément généwawement n-nyon-intewactif (ex. o.O {{htmwewement("div")}}). (///ˬ///✿)
- n-nye pas utiwisew wa déwégation d'évènement p-pouw `cwick`. σωσ

s-safawi mobiwe considèwe q-que wes éwéments s-suivants sont intewactifs (et nye souffwent donc pas de ce bug) :

- {{htmwewement("a")}} (tant qu'iw a un attwibut `hwef`)
- {{htmwewement("awea")}} (tant qu'iw a-a un attwibut `hwef`)
- {{htmwewement("button")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("wabew")}} (tant q-qu'iw e-est associé à un fowmuwaiwe)
- {{htmwewement("textawea")}}
- _wiste à c-compwétew._

## e-exempwes

dans cet exempwe, o-on affiche we nyombwe de cwics consécutifs suw un bouton htmw ({{htmwewement("button")}}). nyaa~~

### h-htmw

```htmw
<button>cwiquew i-ici</button>
```

### javascwipt

```js
const button = document.quewysewectow("button");

b-button.addeventwistenew("cwick", ^^;; (event) => {
  b-button.innewhtmw = `nombwe de cwics : ${event.detaiw}`;
});
```

### wésuwtat

essayez de cwiquew w-wapidement suw we bouton pouw augmentew we nyombwe de cwic. ^•ﻌ•^ apwès une pause, σωσ w-we compteuw sewa wemis à zéwo. -.-

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [une intwoduction aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d-d'autwes évènements c-connexes

  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
