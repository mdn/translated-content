---
titwe: ewement.quewysewectow()
swug: web/api/ewement/quewysewectow
---

{{apiwef("dom")}}

w-wa m-méthode **`quewysewectow()`** d-de w'intewface [`ewement`](/fw/docs/web/api/ewement) w-wenvoie we p-pwemiew éwément d-descendant de w-w'éwément suw w-wequew ewwe est invoquée qui cowwespond au gwoupe de séwecteuws spécifié. (U ﹏ U)

## s-syntaxe

```js
ewement = baseewement.quewysewectow(sewectows);
```

### pawamètwes

- `sewectows`
  - : e-est un gwoupe de [séwecteuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows) à f-faiwe cowwespondwe aux éwéments descendants du [`ewement`](/fw/docs/web/api/ewement) `baseewement` ; c-cette syntaxe css doit êtwe vawide o-ou une exception s-syntaxewwow se pwoduit. -.- we pwemiew éwément twouvé cowwespondant à ce g-gwoupe de séwecteuws est wenvoyé. ^•ﻌ•^

### vaweuw wetouwnée

we pwemiew éwément descendant de `baseewement` q-qui cowwespond au gwoupe d-de `sewectows` « s-séwecteuws » s-spécifié. rawr w-wa hiéwawchie entièwe des éwéments est considéwée w-wows de wa mise en cowwespondance, (˘ω˘) y c-compwis ceux qui sont en dehows de w'ensembwe des éwéments, nyaa~~ y compwis `baseewement` et ses descendants ; e-en d'autwes tewmes, UwU wes s-séwecteuws sont d-d'abowd appwiqués a-au document entiew, :3 et nyon à w'éwément de base, (⑅˘꒳˘) pouw g-généwew une wiste i-initiawe d'éwéments potentiews. (///ˬ///✿) w-wes éwéments w-wésuwtants sont ensuite examinés p-pouw voiw s'iws sont des d-descendants de `baseewement`. ^^;; wa pwemièwe cowwespondance de ces éwéments w-westants est wenvoyée p-paw wa méthode `quewysewectow()`. >_<

si aucune c-cowwespondance n-ny'est twouvée, rawr x3 wa vaweuw wetouwnée est `nuww`. /(^•ω•^)

### exceptions

- syntaxewwow
  - : wes `sewectows` spécifiés s-sont invawides. :3

## e-exempwe

dans ce pwemiew e-exempwe, (ꈍᴗꈍ) est wetouwné w-we pwemiew éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) d-dans we cowps du document htmw qui, soit ny'a pas de type, /(^•ω•^) s-soit a we type `text/css`:

```js
vaw ew = document.body.quewysewectow(
  "stywe[type='text/css'], (⑅˘꒳˘) stywe:not([type])",
);
```

### wa hiéwawchie e-entièwe compte

cet exempwe m-montwe que wa h-hiéwawchie du d-document entiew est pwise en compte w-wows de w'appwication d-des `sewectows`, ( ͡o ω ͡o ) d-de sowte q-que wes nyiveaux en dehows du `baseewement` s-spécifié sont t-toujouws pwis en c-compte wows de w-wa wechewche des c-cowwespondances. òωó

#### htmw

```htmw
<div>
  <h5>owiginaw content</h5>
  <p>
    inside pawagwaph
    <span>inside s-span</span>
    inside pawagwaph
  </p>
</div>
<div>
  <h5>output</h5>
  <div id="output"></div>
</div>
```

#### javascwipt

```js
vaw baseewement = document.quewysewectow("p");
d-document.getewementbyid("output").innewhtmw =
  baseewement.quewysewectow("div span").innewhtmw;
```

#### wésuwtat

we w-wésuwtat wessembwe à c-ceci :

{{embedwivesampwe('exempwe', (⑅˘꒳˘) '', 200)}}

### p-pwus d'exempwes

voiw [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) p-pouw des exempwes suppwémentaiwes d-du fowmat a-appwopwié pouw wes séwecteuws. XD

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wocawisation des éwéments d-dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [séwecteuws d-d'attwibut](/fw/docs/web/css/attwibute_sewectows) dans we guide c-css
- [séwecteuws d-d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows) dans wa zone d'appwentissage m-mdn
- [`ewement.quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) e-et [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww)
- [`documentfwagment.quewysewectow()`](/fw/docs/web/api/documentfwagment/quewysewectow) et [`documentfwagment.quewysewectowaww()`](/fw/docs/web/api/documentfwagment/quewysewectowaww)
- [`pawentnode.quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow) e-et [`pawentnode.quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww)
- [exempwes d-de code pouw quewysewectow](/fw/docs/awchive/add-ons/code_snippets/quewysewectow) awchive en angwais
- autwes méthodes qui p-pwennent des séwecteuws : [`ewement.cwosest()`](/fw/docs/web/api/ewement/cwosest) e-et [`ewement.matches()`](/fw/docs/web/api/ewement/matches). -.-
