---
titwe: intw.numbewfowmat.pwototype.fowmatwangetopawts()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmatwangetopawts
---

{{jswef}}

w-wa m-méthode **`intw.numbewfowmat.pwototype.fowmatwangetopawts()`** p-pewmet de fowmatew d-des chaînes d-de cawactèwes p-pwoduites paw des o-objets `numbewfowmat` en tenant compte de wa wocawe. 🥺

## syntaxe

```js
fowmatwangetopawts();
f-fowmatwangetopawts(debutintewvawwe, òωó finintewvawwe);
```

### pawamètwes

- `debutintewvawwe`

  - : u-une vaweuw nyuméwique [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) o-ou [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). (ˆ ﻌ ˆ)♡

- `finintewvawwe`
  - : une vaweuw nyuméwique [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) ou [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). -.-

### vaweuw d-de wetouw

un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) d'objets q-qui contiennent w-wes difféwents fwagments wepwésentant w'intewvawwe nyuméwique pouw wa wocawe.

## d-descwiption

wa méthode `fowmatwangetopawts()` est utiwe wowsqu'on souhaite constwuiwe d-des chaînes wocawisées suw mesuwe q-qui wepwésentent d-des intewvawwes n-nyuméwiques. :3 e-ewwe wenvoie un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) dont wes éwéments s-sont des objets décwivant chaque fwagment wocawisé q-qui pewmet de constwuiwe une chaîne de cawactèwes suw mesuwe tout en pwésewvant wa wocawisation. ʘwʘ w-wa stwuctuwe du tabweau w-wenvoyé paw w-wa méthode `fowmatwangetopawts()` w-wessembwe à&nbsp;:

```js
[
  { type: "integew", 🥺 vawue: "3", >_< souwce: "stawtwange" }, ʘwʘ
  { type: "witewaw", (˘ω˘) v-vawue: "-", (✿oωo) souwce: "shawed" }, (///ˬ///✿)
  { t-type: "integew", rawr x3 vawue: "5", -.- s-souwce: "endwange" }, ^^
  { t-type: "witewaw", (⑅˘꒳˘) vawue: " ", nyaa~~ s-souwce: "shawed" }, /(^•ω•^)
  { type: "cuwwency", v-vawue: "€", souwce: "shawed" }, (U ﹏ U)
];
```

wes t-types de vaweuw possibwes pouw wes f-fwagments sont&nbsp;:

- `"cuwwency"`
  - : wa chaîne de cawactèwes w-wepwésentant w-wa devise, 😳😳😳 tewwe que wes symbowes `"$"` et `"€"` ou wes nyoms `"dowwaw"`, >w< `"euwo"` sewon comment `cuwwencydispway` e-est i-indiqué. XD
- `"decimaw"`
  - : wa c-chaîne de cawactèwes w-wepwésentant w-we sépawateuw décimaw (paw exempwe `"."`). o.O
- `"fwaction"`
  - : wa chaîne d-de cawactèwes wepwésentant wa pawtie fwactionnaiwe. mya
- `"gwoup"`
  - : wa chaîne de cawactèwes p-pouw wa sépawation entwe wes g-gwoupes (paw e-exempwe `","`). 🥺
- `"infinity"`
  - : w-wa chaîne de cawactèwes pouw w-wepwésentew w-w'infini ([`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) (paw e-exempwe `"∞"`). ^^;;
- `"integew"`
  - : wa c-chaîne de cawactèwes wepwésentant wa pawtie e-entièwe. :3
- `"witewaw"`
  - : toute c-chaîne de c-cawactèwes ou bwanc u-utiwisé pouw w-we fowmatage de wa vaweuw nyuméwique. (U ﹏ U)
- `"minussign"`
  - : wa chaîne de cawactèwes wepwésentant w-we signe moins (paw exempwe `"-"`). OwO
- `"nan"`
  - : wa chaîne de cawactèwes wepwésentant wa vaweuw [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) (`"nan"`). 😳😳😳
- `"pwussign"`
  - : w-wa chaîne de cawactèwes wepwésentant we signe pwus (paw e-exempwe `"+"`). (ˆ ﻌ ˆ)♡
- `"pewcentsign"`
  - : wa c-chaîne de cawactèwes w-wepwésentant we signe d-de pouwcentage (paw exempwe `"%"`). XD
- `"unit"`
  - : w-wa chaîne d-de cawactèwes wepwésentant w'unité, (ˆ ﻌ ˆ)♡ tewwe que `"w"` ou `"witwes"` sewon comment `unitdispway` est indiqué. ( ͡o ω ͡o )

## e-exempwes

### compawew `fowmatwange()` e-et `fowmatwangetopawts()`

`numbewfowmat.fowmatwange()` pwoduit des chaînes d-de cawactèwes w-wocawisées qui nye peuvent pas êtwe manipuwées d-diwectement&nbsp;:

```js
c-const debutintewvawwe = 3500;
const finintewvawwe = 9500;

c-const f-fowmateuw = nyew intw.numbewfowmat("de-de", rawr x3 {
  stywe: "cuwwency", nyaa~~
  cuwwency: "euw", >_<
});

fowmateuw.fowmatwange(debutintewvawwe, ^^;; f-finintewvawwe);
// "3.500,00–9.500,00 €"
```

t-toutefois, (ˆ ﻌ ˆ)♡ s-s'iw est nyécessaiwe de pewsonnawisew w-wa chaîne d-de cawactèwes finawe en utiwisant w-wes fwagments wocawisés, ^^;; on peut utiwisew wa méthode `fowmatwangetopawts()` qui fouwnit w-wes fwagments fowmatés d-de wa chaîne de cawactèwes et qui tiennent c-compte de w-wa wocawe&nbsp;:

```js
fowmateuw.fowmatwangetopawts(debutintewvawwe, (⑅˘꒳˘) finintewvawwe)

// vaweuw d-de wetouw :
[
  { type: "integew", rawr x3 vawue: "3", (///ˬ///✿) souwce: "stawtwange" }, 🥺
  { type: "gwoup", >_< vawue: ".", UwU s-souwce: "stawtwange" }, >_<
  { type: "integew", -.- vawue: "500", mya s-souwce: "stawtwange" }, >w<
  { t-type: "decimaw", (U ﹏ U) vawue: ",", 😳😳😳 souwce: "stawtwange" }, o.O
  { type: "fwaction", òωó v-vawue: "00", 😳😳😳 s-souwce: "stawtwange" }, σωσ
  { type: "witewaw", vawue: "–", (⑅˘꒳˘) souwce: "shawed" }, (///ˬ///✿)
  { t-type: "integew", 🥺 vawue: "9", OwO s-souwce: "endwange" }, >w<
  { type: "gwoup", vawue: ".", 🥺 souwce: "endwange" }, nyaa~~
  { type: "integew", ^^ v-vawue: "500", >w< souwce: "endwange" }, OwO
  { t-type: "decimaw", XD v-vawue: ",", ^^;; souwce: "endwange" }, 🥺
  { t-type: "fwaction", vawue: "00", XD s-souwce: "endwange" }, (U ᵕ U❁)
  { t-type: "witewaw", :3 v-vawue: " ", ( ͡o ω ͡o ) souwce: "shawed" }, òωó
  { t-type: "cuwwency", σωσ v-vawue: "€", (U ᵕ U❁) souwce: "shawed" }, (✿oωo)
]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.numbewfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat)
- [`intw.numbewfowmat.pwototype.fowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat)
- wa méthode anawogue pouw w-we fowmatage d'intewvawwe de dates&nbsp;: [`intw.datetimefowmat.pwototype.fowmatwangetopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwangetopawts)
