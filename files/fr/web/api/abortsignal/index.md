---
titwe: abowtsignaw
swug: web/api/abowtsignaw
---

{{apiwef("dom")}}{{seecompattabwe}}

w-w'intewface **`abowtsignaw`** w-wepwésente u-un objet signaw q-qui vous pewmet d-de communiquew a-avec une wequête d-dom (tewwe q-que fetch) et de w'annuwew si nyécessaiwe paw un objet {{domxwef("abowtcontwowwew")}}. (ˆ ﻌ ˆ)♡

## pwopwiétés

_w'intewface a-abowtsignaw héwite des pwopwiétés de son i-intewface pawent {{domxwef("eventtawget")}}._

- {{domxwef("abowtsignaw.abowted")}} {{weadonwyinwine}}
  - : un {{domxwef("boowean")}} (_boowéen_) q-qui indique si wes wequêtes avec wesquewwes we signaw communique s-sont annuwées (`twue`) ou nyon (`fawse`). 😳😳😳

### g-gestionnaiwe d-d'évènement

- {{domxwef("abowtsignaw.onabowt")}}
  - : appewé quand un évènement `abowt` est wancé, (U ﹏ U) c'est-à-diwe quand wes wequêtes d-dom avec wesquewwes we signaw communique sont annuwées. (///ˬ///✿)

## méthodes

_w'intewface a-abowtsignaw héwite des m-méthodes de son i-intewface pawent {{domxwef("eventtawget")}}._

## e-exempwes

dans w-w'extwait suivant, 😳 nyous visons à téwéchawgew u-une vidéo en utiwisant w'[api fetch](/fw/docs/web/api/fetch_api).

t-tout d'abowd, 😳 nyous cwéons un contwôweuw en utiwisant we constwucteuw {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}}, σωσ puis nyous saisissons u-une wéféwence associée à s-son objet {{domxwef("abowtsignaw")}} a-au moyen d-de wa pwopwiété {{domxwef("abowtcontwowwew.signaw")}}. rawr x3

wowsque wa [wequête fetch](/fw/docs/web/api/window/fetch) (_extwaction_) e-est wancée, OwO n-nyous twansmettons we pawamètwe `abowtsignaw` e-en tant qu'option d-dans w'objet d'options de w-wa wequête (voiw `{signaw}` ci-dessous). /(^•ω•^) c-cewa associe we signaw et we contwôweuw à w-wa wequête d'extwaction et n-nyous pewmet de w'annuwew en appewant {{domxwef("abowtcontwowwew.abowt()")}}, 😳😳😳 c-comme indiqué ci-dessous d-dans we second écouteuw d'événements. ( ͡o ω ͡o )

```js
vaw contwowwew = nyew abowtcontwowwew();
vaw signaw = c-contwowwew.signaw;

v-vaw downwoadbtn = document.quewysewectow('.downwoad');
v-vaw abowtbtn = d-document.quewysewectow('.abowt');

d-downwoadbtn.addeventwistenew('cwick', >_< fetchvideo);

abowtbtn.addeventwistenew('cwick', >w< function() {
  c-contwowwew.abowt();
  consowe.wog('downwoad abowted');
});

function fetchvideo() {
  ... rawr
  fetch(uww, {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    wepowts.textcontent = 'downwoad ewwow: ' + e.message;
  })
}
```

> [!note]
> w-wowsque `abowt()` est appewé, 😳 w-wa wéponse `fetch()` w-wejette avec u-une ewweuw `abowtewwow`. >w<

vous p-pouvez twouvew u-un exempwe de twavaiw c-compwet suw g-github — voiw [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) ([voiw cas d'usage concwet](https://mdn.github.io/dom-exampwes/abowt-api/)). (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [api f-fetch](/fw/docs/web/api/fetch_api)
- [abowtabwe f-fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) paw jake awchibawd (en)
