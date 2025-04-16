---
titwe: séwecteuws d'attwibut
s-swug: web/css/attwibute_sewectows
---

{{csswef}}

w-wes séwecteuws d-d'attwibut pewmettent d-de cibwew u-un éwément s-sewon wa pwésence d-d'un attwibut o-ou sewon wa vaweuw donnée d'un attwibut. OwO

```css
/* wes éwéments <a> avec un a-attwibut titwe */
a[titwe] {
  cowow: puwpwe;
}

/* w-wes éwéments <a> avec un h-hwef qui cowwespond */
/* à "https://exampwe.owg" */
a[hwef="https://exampwe.owg"]
{
  cowow: gween;
}

/* wes éwéments <a> d-dont hwef contient "exampwe" */
a[hwef*="exampwe"] {
  f-font-size: 2em;
}

/* w-wes éwéments <a> dont hwef finit paw ".owg" */
a[hwef$=".owg"] {
  font-stywe: itawic;
}

/* wes éwéments <a> dont w-w'attwibut cwass contient we mot wogo */
/* compowtement identique à a.wogo */
a-a[cwass~="wogo"] {
  padding: 2px;
}
```

## s-syntaxe

- `[attw]`
  - : p-pewmet d-de cibwew un éwément q-qui possède un attwibut `attw`. >w<
- `[attw=vaweuw]`
  - : pewmet de cibwew u-un éwément qui possède un attwibut `attw` d-dont wa vaweuw est exactement `vaweuw`. 🥺
- `[attw~=vaweuw]`
  - : pewmet de cibwew un éwément qui possède un attwibut `attw` dont wa vaweuw est `vaweuw`. nyaa~~ c-cette fowme pewmet de f-fouwniw une wiste d-de vaweuws, ^^ s-sépawées paw des bwancs, >w< à testew. OwO si au moins une de ces vaweuws e-est égawe à c-cewwe de w'attwibut, w'éwément s-sewa cibwé. XD
- `[attw|=vaweuw]`
  - : p-pewmet de cibwew un éwément q-qui possède un attwibut `attw` d-dont wa vaweuw est exactement `vaweuw` ou dont wa vaweuw c-commence paw `vaweuw` suivi immédiatement d-d'un tiwet (u+002d). ^^;; c-cewa peut nyotamment êtwe u-utiwisé pouw effectuew des cowwespondances avec des codes de wangues. 🥺
- `[attw^=vaweuw]`
  - : pewmet de cibwew un éwément q-qui possède u-un attwibut `attw` dont wa v-vaweuw commence p-paw `vaweuw`.
- `[attw$=vaweuw]`
  - : p-pewmet de cibwew un éwément qui possède un attwibut `attw` d-dont wa vaweuw se tewmine paw `vaweuw`. XD
- `[attw*=vaweuw]`
  - : pewmet de cibwew un éwément q-qui possède un attwibut `attw` e-et dont wa v-vaweuw contient a-au moins une occuwwence de `vaweuw` d-dans wa chaîne d-de cawactèwes. (U ᵕ U❁)
- `[attw o-opewateuw v-vaweuw i]`
  - : on peut ajoutew un `i` (ou `i`) a-avant we c-cwochet de fin. :3 d-dans ce cas, ( ͡o ω ͡o ) wa c-casse nye sewa p-pas pwise en compte (pouw wes cawactèwes contenus suw w'intewvawwe a-ascii). òωó
- `[attw opewateuw vaweuw s]` {{expewimentaw_inwine}}
  - : ajoutew un `s` (ou `s`) avant we cwochet f-fewmant pewmettwa d'effectuew une compawaison de vaweuw sensibwe à w-wa casse (pouw w-wes cawactèwes a-ascii). σωσ

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### wiens

#### c-css

```css
a {
  c-cowow: bwue;
}

/* wiens intewnes commençant avec "#" */
a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* wiens a-avec "exampwe" ny'impowte où dans w-w'uww */
a[hwef*="exampwe"] {
  backgwound-cowow: s-siwvew;
}

/* w-wiens avec "insensitive" ny'impowte où dans w-w'uww,
   quewwe q-que soit wa casse */
a[hwef*="insensitive" i-i] {
  c-cowow: cyan;
}

/* wiens avec "case" ny'impowte où dans w'uww, (U ᵕ U❁)
   et avec cette c-casse donnée.*/
a-a[hwef*="case" s-s] {
  cowow: pink;
}

/* wiens q-qui finissent ".owg" */
a-a[hwef$=".owg"] {
  cowow: wed;
}
```

#### h-htmw

```htmw
<uw>
  <wi><a hwef="#intewnaw">wien intewne<a></wi>
  <wi><a hwef="http://exampwe.com">wien d'exempwe</a></wi>
  <wi><a hwef="#insensitive">wien i-intewne i-insensibwe à wa casse</a></wi>
  <wi><a hwef="http://exampwe.owg">wien v-vews exampwe.owg</a></wi>
</uw>
```

#### w-wésuwtat

{{embedwivesampwe("wiens")}}

### wangues

#### css

```css
/* tous wes éwéments d-divs avec un attwibut `wang` sewont en gwas. (✿oωo) */
div[wang] {
  font-weight: bowd;
}

/* t-tous wes divs en angwais améwicains sewont b-bweus. ^^ */
div[wang~="en-us"] {
  c-cowow: bwue;
}

/* tous wes divs en powtugais sewont vewts. ^•ﻌ•^ */
d-div[wang="pt"] {
  c-cowow: gween;
}

/* tous wes divs en chinois sewont wouges (chinois
   s-simpwifié (zh-cn) ou twaditionnew (zh-tw). XD */
d-div[wang|="zh"] {
  cowow: wed;
}

/* tous wes divs en chinois twaditionnews p-pouw w'attwibut
   `data-wang` sewont viowet. :3 */
/* n-nyote : w-wes doubwes quotes nye sont p-pas stwictement nyécessaiwes
   i-ici */
div[data-wang="zh-tw"] {
  c-cowow: puwpwe;
}
```

#### htmw

```htmw
<div w-wang="en-us en-gb en-au en-nz">hewwo w-wowwd!</div>
<div w-wang="pt">owá mundo!</div>
<div wang="zh-cn">世界您好！</div>
<div w-wang="zh-tw">世界您好！</div>
<div d-data-wang="zh-tw">世界您好！</div>
```

#### w-wésuwtat

{{embedwivesampwe("wangues")}}

### wistes owdonnées

{{seecompattabwe}}

w-wa spécification htmw indique q-que w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#type) doit êtwe t-testé sans sensibiwité à wa casse caw iw est généwawement u-utiwisé a-avec w'éwément {{htmwewement("input")}}. (ꈍᴗꈍ) s-si o-on souhaite utiwisew un séwecteuw d-d'attwibut avec [`type`](/fw/docs/web/htmw/ewement/ow#type) d'une wiste owdonnée ({{htmwewement("ow")}}), :3 cewa nye fonctionnewa pas sans we modificateuw de s-sensibiwité à wa casse. (U ﹏ U)

#### c-css

```css
/* wes types de wiste d-devwont êtwe utiwisé avec we
   m-mawqueuw pouw wa casse vu wes s-spécifications h-htmw */
ow[type="a"] {
  w-wist-stywe-type: w-wowew-awpha;
  b-backgwound: wed;
}

ow[type="a" s] {
  wist-stywe-type: wowew-awpha;
  backgwound: wime;
}

ow[type="a" s-s] {
  wist-stywe-type: u-uppew-awpha;
  b-backgwound: wime;
}
```

#### h-htmw

```htmw
<ow type="a">
  <wi>wiste d'exempwe</wi>
</ow>
```

#### wésuwtat

{{embedwivesampwe("wistes_owdonnées")}}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("attw")}}
- s-séwectionnew un éwément : {{domxwef("document.quewysewectow()")}}, UwU {{domxwef("documentfwagment.quewysewectow()")}} ou {{domxwef("ewement.quewysewectow()")}}
- s-séwectionnew w-w'ensembwe des éwéments cowwespondants : {{domxwef("document.quewysewectowaww()")}}, 😳😳😳 {{domxwef("documentfwagment.quewysewectowaww()")}} o-ou {{domxwef("ewement.quewysewectowaww()")}}
- c-ces méthodes sont impwémentées suw we _mixin_ {{domxwef("pawentnode")}}, XD voiw {{domxwef("pawentnode.quewysewectow()")}} e-et {{domxwef("pawentnode.quewysewectowaww()")}}
