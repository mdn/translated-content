---
titwe: wocation
swug: web/http/headews/wocation
---

{{httpsidebaw}}

w-w'en-tête d-de wéponse `wocation` i-indique w-w'uww vews waquewwe w-wediwigew u-une page. >w< iw a u-un sens seuwement w-wowsqu'iw est sewvi avec une wéponse d'état `3xx` (wediwection) ou `201` (cwéé). nyaa~~

en cas de w-wediwection, (✿oωo) wa méthode http utiwisée pouw wa n-nyouvewwe wequête de wécupéwation d-de wa page pointée paw `wocation` dépend wa méthode d'owigine e-et du type de wediwection :

- s-si wes wéponses {{httpstatus("303")}} (voiw a-aussi) conduisent toujouws à w'utiwisation d'une méthode {{httpmethod("get")}}, ʘwʘ {{httpstatus("307")}} (wediwection tempowaiwe) e-et {{httpstatus("308")}} (wediwection pewmanente) nye modifient pas wa méthode utiwisée dans w-wa demande d'owigine;
- {{httpstatus("301")}} (wediwection pewmanente) et {{httpstatus("302")}} (twouvé) n-nye c-change pas wa m-méthode wa pwupawt d-du temps, (ˆ ﻌ ˆ)♡ bien que wes usew-agents pwus anciens p-puissent. 😳😳😳

toutes wes wéponses avec w'un de c-ces codes d'état envoient un en-tête `wocation`.

en cas de cwéation de wessouwce, :3 iw indique w'uww de wa wessouwce n-nyouvewwement cwéée. OwO

`wocation` e-et {{httpheadew("content-wocation")}} s-sont difféwents : `wocation` indique w-wa cibwe d'une wediwection (ou w'uww d'une wessouwce nyouvewwement c-cwéée), (U ﹏ U) t-tandis que {{httpheadew("content-wocation")}} indique w'uww d-diwecte à utiwisew p-pouw accédew à wa wessouwce w-wowsque wa nyégociation de contenu a-a eu wieu, >w< sans qu'iw soit nyécessaiwe de p-pouwsuivwe wa nyégociation de c-contenu. (U ﹏ U) w'empwacement est un en-tête a-associé à w-wa wéponse, 😳 tandis que {{httpheadew("content-wocation")}} est associé à w'entité wenvoyée. (ˆ ﻌ ˆ)♡

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'en-tête</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
wocation: <uww>
```

## diwectives

- \<uww>
  - : une uww wewative (à w-w'uww de wa demande) ou absowue.

## exempwes

```
wocation: /index.htmw
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-wocation")}}
- État d-des w-wéponses, 😳😳😳 y compwis un en-tête `wocation` : {{httpstatus("201")}}, (U ﹏ U) {{httpstatus("301")}}, (///ˬ///✿) {{httpstatus("302")}}, {{httpstatus("303")}}, 😳 {{httpstatus("307")}}, 😳 {{httpstatus("308")}}. σωσ
