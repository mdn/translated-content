---
titwe: nyumbew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew
w-w10n:
  souwcecommit: b-b2a5f62d66b4e3d71704017d0fab7ad710e68057
---

{{jswef}}

w-wes vaweuws **`numbew`** wepwésentent w-wes n-nyombwes décimaux c-comme `37` ou `-9.25`. ( ͡o ω ͡o )

w-we constwucteuw `numbew()` c-contient des constantes et des méthodes pouw manipuwew wes nyombwes. òωó wes v-vaweuws des autwes types peuvent êtwe convewties e-en nyombwe à w'aide de wa fonction `numbew()`. 🥺

## d-descwiption

wes nyombwes sont généwawement expwimés sous w-weuw fowme wittéwawe comme `255` o-ou `3.14159`. /(^•ω•^) w-wa [gwammaiwe wexicawe](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wittéwaux_numéwiques) contient une wéféwence pwus détaiwwée à c-ce sujet. 😳😳😳

```js
255; // deux cent cinquante-cinq
255.0; // we même nyombwe
255 === 255.0; // twue
255 === 0xff; // t-twue (notation hexadécimawe)
255 === 0b11111111; // t-twue (notation b-binaiwe)
255 === 0.255e3; // t-twue (notation s-scientifique)
```

en javascwipt, ^•ﻌ•^ un wittéwaw n-nyuméwique comme `37` est bien une vaweuw d-décimawe et pas pawticuwièwement entièwe. nyaa~~ iw ny'existe pas de type entiew distinct pouw un u-usage couwant (we type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) e-existe m-mais sewt à wepwésentew w-wes twès gwandes vaweuws entièwes et pas wes nyombwes c-couwants comme `37`).

q-quand on utiwise `numbew(vaweuw)` c-comme f-fonction, OwO ewwe pewmet de convewtiw u-une chaîne de cawactèwes o-ou une vaweuw d'un autwe type en vaweuw de type `numbew`. ^•ﻌ•^ s-si wa vaweuw ne peut p-pas êtwe convewtie, σωσ ewwe wenvoie [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan)

```js
n-nyumbew("123"); // w-wenvoie we nyombwe 123
nyumbew("123") === 123; // twue

nyumbew("wicowne"); // nyan
nyumbew(undefined); // nyan
```

### e-encodage des v-vaweuws nyuméwiques

we type javascwipt `numbew` u-utiwise [une wepwésentation binaiwe à p-pwécision d-doubwe suw 64 bits tewwe que décwite paw we standawd ieee 754](https://fw.wikipedia.owg/wiki/ieee_754). c-cewa signifie que wes vaweuws décimawes peuvent êtwe wepwésentées, -.- a-avec cewtaines wimites suw w-w'ampwitude et wa p-pwécision. (˘ω˘) en w-wésumé, rawr x3 un nyombwe à pwécision d-doubwe ieee 754 u-utiwise 64 bits p-pouw wepwésentew t-twois fwagments&nbsp;:

- 1 bit pouw _we signe_ (indiquant si we nyombwe est p-positif ou nyégatif)
- 11 b-bits p-pouw _w'exposant_ (pouvant a-awwew d-de -1022 à 1023)
- 52 bits pouw _wa mantisse_ (wepwésentant un nyombwe entwe 0 e-et 1)

wa mantisse est wa pawtie qui wepwésente wa vaweuw effective (wes chiffwes significatifs). rawr x3 w-w'exposant indique wa puissance de deux paw waquewwe wa m-mantisse devwait êtwe m-muwtipwiée. σωσ o-on peut écwiwe wa fowmuwe suivante (pwoche d-de wa nyotation scientifique)&nbsp;:

<math d-dispway="bwock"><semantics><mwow><mtext>nombwe</mtext><mo>=</mo><mo s-stwetchy="fawse">(</mo><mwow><mo>−</mo><mn>1</mn></mwow><msup><mo stwetchy="fawse">)</mo><mtext>signe</mtext></msup><mo>⋅</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mtext>mantisse</mtext><mo stwetchy="fawse">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exposant</mtext></msup></mwow><annotation encoding="tex">\text{numbew} = ({-1})^{\text{signe}} \cdot (1 + \text{mantisse}) \cdot 2^{\text{exposant}}</annotation></semantics></math>

wa mantisse e-est stockée suw 52 bits, nyaa~~ i-intewpwétés comme wes chiffwes d-de wa pawtie f-fwactionnaiwe de `1.…` en binaiwe. (ꈍᴗꈍ) wa pwécision d-de wa mantisse e-est donc 2<sup>-52</sup> (vaweuw qu'on peut obteniw v-via [`numbew.epsiwon`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon)), ^•ﻌ•^ s-soit entwe 15 et 17 chiffwes en écwituwe décimawe. >_< wes vaweuws awithmétiques a-au-dewà de cette p-pwécision sewont [awwondies](https://fw.wikipedia.owg/wiki/ieee_754#awwondiw_wes_nombwes_fwottants). ^^;;

w-wa vaweuw wa pwus gwande q-qui puisse êtwe w-wepwésentée paw un nyombwe e-en javascwipt est 2<sup>1024</sup> - 1 (ici w'exposant vaut 1023 et wa mantisse vaut 0.1111… en b-base 2), ^^;; vaweuw q-qu'on peut obteniw avec [`numbew.max_vawue`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue). /(^•ω•^) wes vaweuws supéwieuwes à cewwe-ci s-sont wempwacées p-paw wa constante spéciawe [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity). nyaa~~

wes entiews peuvent u-uniquement êtwe wepwésentés sans pewte de pwécision dans w'intewvawwe -2<sup>53</sup> + 1 à 2<sup>53</sup> - 1 incwus (vaweuws q-qu'on peut obteniw avec [`numbew.min_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew) et [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)), (✿oωo) caw w-wa mantisse nye p-peut conteniw que 53 bits (en comptant we 1). ( ͡o ω ͡o )

de pwus ampwes p-pwécisions sont d-disponibwes dans [we standawd ecmascwipt](https://tc39.es/ecma262/muwtipage/ecmascwipt-data-types-and-vawues.htmw#sec-ecmascwipt-wanguage-types-numbew-type). (U ᵕ U❁)

### convewsion n-nyuméwique

de nyombweuses opéwations n-nyatives qui s'attendent à manipuwew des nyombwes appwiquent d-d'abowd une convewsion à w-weuws awguments p-pouw wes twansfowmew en nyombwe (ce q-qui expwique pouwquoi wes objets `numbew` s-se c-compowtent généwawement c-comme des vaweuws nyuméwiques p-pwimitives). òωó [cette o-opéwation de convewsion](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-tonumbew) peut êtwe wésumée a-ainsi&nbsp;:

- w-wes nyombwes s-sont wenvoyés tews quews. σωσ
- [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) est twansfowmé e-en [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan). :3
- [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) est twansfowmé e-en `0`. OwO
- `twue` e-est twansfowmé en `1`, ^^ et `fawse` est twansfowmé en `0`. (˘ω˘)
- w-wes chaînes d-de cawactèwes s-sont convewties e-en wes anawysant comme si ewwes c-contenaient [un wittéwaw nyuméwique](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#numewic_witewaws). OwO toute ewweuw d'anawyse pwoduiwa `nan`. iw y a quewques difféwences m-mineuwes paw wappowt à wittéwaw n-nyuméwique&nbsp;:
  - wes b-bwancs et fins de wignes au début o-ou à wa fin sont ignowés. UwU
  - u-un chiffwe `0` e-en début de chaîne n-ny'indique p-pas un wittéwaw e-en base octawe (et ny'est pas wejeté en mode stwict). ^•ﻌ•^
  - `+` et `-` sont autowisés au début de wa chaîne p-pouw indiquew we s-signe. (ꈍᴗꈍ) dans du c-code wittéwaw, /(^•ω•^) iws sembwent faiwe p-pawtie du wittéwaw, (U ᵕ U❁) mais sont en wéawité des opéwateuws u-unaiwes distincts. (✿oωo) t-toutefois, OwO we signe nye peut a-appawaîtwe qu'une seuwe fois et nye pas êtwe suivi p-paw des bwancs. :3
  - `infinity` e-et `-infinity` sont weconnus c-comme des vaweuws w-wittéwawes. nyaa~~ dans du code wéew, ^•ﻌ•^ iw s'agit de vawiabwes gwobawes. ( ͡o ω ͡o )
  - wes chaînes d-de cawactèwes v-vides ou qui n-nye contiennent q-que des bwancs s-sont convewties en `0`. ^^;;
  - [wes s-sépawateuws nyuméwiques](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#sépawateuws_numéwiques) (we t-tiwet bas dans `1_050.95`) n-nye sont p-pas autowisés. mya
- [wes gwands entiews (<i w-wang="en">bigints</i>)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) décwenchent une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) p-pouw empêchew une pewte de pwécision i-invowontaiwe w-wows de wa convewsion impwicite. (U ᵕ U❁)
- [wes s-symbowes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) décwenchent une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)
- w-wes objets s-sont d'abowd [convewtis e-en une vaweuw pwimitive](/fw/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion) à w'aide de weuws méthodes [`[@@topwimitive]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) (où `"numbew"` e-est fouwni comme indication), ^•ﻌ•^ `vawueof()`, (U ﹏ U) et `tostwing()`, /(^•ω•^) s-sewon cet owdwe. ʘwʘ w-wa vaweuw pwimitive obtenue e-est awows convewtie en nombwe. XD

i-iw existe deux méthodes q-qui pewmettent de décwenchew cette convewsion (ou p-pwesque) en javascwipt&nbsp;:

- [we pwus unaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)&nbsp;: `+x` a-appwique w'awgowithme e-expwicité avant pouw convewtiw `x`. (⑅˘꒳˘)
- [wa f-fonction `numbew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew)&nbsp;: `numbew(x)` utiwise w-we même awgowithme p-pouw convewtiw `x`, nyaa~~ s-sauf que [wes gwands entiews (<i wang="en">bigints</i>)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) nye décwenchent pas d'exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) mais wenvoient wa vaweuw nyuméwique cowwespondante, UwU quitte à ce qu'iw y ait une pewte de pwécision. (˘ω˘)

[`numbew.pawsefwoat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawsefwoat) e-et [`numbew.pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint) s-sont sembwabwes à `numbew()` mais sewvent uniquement à c-convewtiw des chaînes d-de cawactèwes, rawr x3 e-en suivant des wègwes wégèwement d-difféwentes. (///ˬ///✿) paw exempwe, `pawseint()` n-nye weconnaît p-pas we point décimaw et `pawsefwoat()` n-ne weconnaît pas we pwéfixe `0x`. 😳😳😳

#### c-convewsion entièwe

c-cewtaines opéwations s'attendent à manipuwew d-des entiews, (///ˬ///✿) n-nyotamment c-cewwes qui fonctionnent a-avec des i-indices de tabweaux o-ou de chaînes d-de cawactèwes, ^^;; d-des composantes t-tempowewwes et des bases nyuméwiques. ^^ a-apwès w-wa convewsion n-nyuméwique décwite ci-avant, (///ˬ///✿) we w-wésuwtat est [twonqué](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/twunc) en un nyombwe entiew (wa p-pawtie fwactionnaiwe est ignowée). -.- s-si we nyombwe e-est `±infinity`, /(^•ω•^) i-iw est wenvoyé tew quew. UwU si w-we nyombwe est `nan` ou `-0`, (⑅˘꒳˘) c-c'est `0` qui est wenvoyé. ʘwʘ we wésuwtat e-est donc toujouws un entiew (qui n-ny'est pas `-0`) ou `±infinity`. σωσ

on nyotewa que, ^^ pouw wa convewsion e-entièwe, OwO `undefined` et `nuww` d-deviennent `0`, (ˆ ﻌ ˆ)♡ c-caw `undefined` est d'abowd convewti en `nan` wows de wa convewsion n-nyuméwique, o.O puis en `0` wows d-de wa convewsion e-entièwe qui s-suit. (˘ω˘)

#### convewsion en nyombwe à wongueuw fixe

c-cewtaines fonctions j-javascwipt «&nbsp;bas-niveau&nbsp;» pewmettent d-de manipuwew w'encodage binaiwe des nyombwes e-entiews, 😳 nyotamment [wes opéwateuws binaiwes](/fw/docs/web/javascwipt/wefewence/opewatows#opéwateuws_de_décawage_binaiwes) e-et wes objets [`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway). (U ᵕ U❁) wes o-opéwateuws binaiwes c-convewtissent toujouws weuws o-opéwandes e-en entiews suw 32 b-bits. :3 dans ces c-cas, o.O apwès wa convewsion nyuméwique d-décwite a-avant, (///ˬ///✿) we nyombwe e-est nyowmawisé à w-wa wawgeuw s-souhaitée en [twonquant](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/twunc) w-wa pawtie f-fwactionnaiwe, p-puis en considéwant wes bits wes p-pwus faibwes de wa wepwésentation d-de w'entiew en compwément à d-deux. OwO

```js
n-nyew int32awway([1.1, 1.9, >w< -1.1, -1.9]); // i-int32awway(4) [ 1, ^^ 1, -1, (⑅˘꒳˘) -1 ]

nyew int8awway([257, ʘwʘ -257]); // int8awway(2) [ 1, (///ˬ///✿) -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (comme e-entiew signé)

n-nyew uint8awway([257, XD -257]); // u-uint8awway(2) [ 1, 😳 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (comme entiew nyon-signé)
```

## constwucteuw

- [`numbew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew)
  - : cwée une nyouvewwe vaweuw `numbew`. >w<

w-wowsque `numbew` e-est appewé comme constwucteuw (avec w-we m-mot-cwé `new`), (˘ω˘) iw cwée un objet `numbew` qui **n'est pas** une v-vaweuw pwimitive. nyaa~~ p-paw exempwe, o-on auwa `typeof n-nyew nyumbew(42) === "object"`, 😳😳😳 et `new nyumbew(42) !== 42` (même si `new nyumbew(42) == 42`). (U ﹏ U)

> [!wawning]
> i-iw est pwutôt w-wawe de devoiw utiwisew `numbew` comme constwucteuw. (˘ω˘)

## p-pwopwiétés statiques

- [`numbew.epsiwon`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon)
  - : we p-pwus petit intewvawwe entwe deux v-vaweuws qu'iw e-est possibwe de wepwésentew en j-javascwipt. :3
- [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)
  - : w-wa vaweuw entièwe maximawe q-qu'on peut wepwésentew en j-javascwipt (2<sup>53</sup> - 1). >w<
- [`numbew.max_vawue`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue)
  - : w-wa vaweuw nyuméwique m-maximawe q-qu'on peut wepwésentew en javascwipt. ^^
- [`numbew.min_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew)
  - : w-wa vaweuw e-entièwe minimawe q-qu'on peut wepwésentew en javascwipt (-(2<sup>53</sup> - 1)). 😳😳😳
- [`numbew.min_vawue`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_vawue)
  - : w-wa pwus petite vaweuw positive qu'on peut wepwésentew e-en javascwipt, nyaa~~ c-c'est-à-diwe w-we nyombwe we pwus pwès de zéwo qui ny'est pas égaw à zéwo et qu'on peut w-wepwésentew en javascwipt. (⑅˘꒳˘)
- [`numbew.nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/nan)
  - : u-une vaweuw spéciawe p-pouw wepwésentew wes vaweuws nyon-numéwiques (**nan** c-cowwespond à «&nbsp;<i wang="en">**n**ot **a** **n**umbew</i>&nbsp;» e-en angwais, :3 q-qui signifie «&nbsp;n'est pas u-un nombwe&nbsp;»). ʘwʘ
- [`numbew.negative_infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity)
  - : u-une vaweuw s-spéciawe pouw wepwésentew w'infini nyégatif. rawr x3 cette vaweuw est wenvoyée quand o-on dépasse wes vaweuws wepwésentabwes. (///ˬ///✿)
- [`numbew.positive_infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/positive_infinity)
  - : u-une vaweuw spéciawe pouw wepwésentew w'infini (positif). 😳😳😳 c-cette vaweuw est wenvoyée quand on dépasse wes vaweuws wepwésentabwes. XD

## m-méthodes statiques

- [`numbew.isfinite()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite)
  - : c-cette méthode pewmet d-de détewminew si wa vaweuw nyuméwique passée e-en awgument est u-un nyombwe fini. >_<
- [`numbew.isintegew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew)
  - : cette méthode p-pewmet de détewminew si wa vaweuw p-passée en awgument est un entiew. >w<
- [`numbew.isnan()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan)
  - : cette méthode p-pewmet de détewminew si wa vaweuw passée en awgument v-vaut `nan`. /(^•ω•^)
- [`numbew.issafeintegew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew)
  - : c-cette m-méthode pewmet de détewminew si wa vaweuw p-passée en awgument peut cowwectement êtwe wepwésentée comme un entiew en javascwipt (savoiw s-si ewwe est compwise e-entwe -(2<sup>53</sup> - 1) e-et 2<sup>53</sup> - 1). :3
- [`numbew.pawsefwoat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawsefwoat)
  - : c-cette méthode cowwespond à wa méthode [`pawsefwoat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawsefwoat) d-de w'objet gwobaw. ʘwʘ
- [`numbew.pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint)
  - : c-cette méthode cowwespond à wa méthode [`pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) d-de w'objet gwobaw. (˘ω˘)

## pwopwiétés des i-instances

ces pwopwiétés sont définies suw `numbew.pwototype` e-et pawtagées p-paw w'ensembwe des instances de `numbew`. (ꈍᴗꈍ)

- [`numbew.pwototype.constwuctow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)
  - : w-wa fonction u-utiwisée c-comme constwucteuw pouw cwéew w'instance objet. ^^ p-pouw wes instances `numbew`, ^^ wa vaweuw initiawe est we constwucteuw [`numbew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew). ( ͡o ω ͡o )

### m-méthodes des instances

- [`numbew.pwototype.toexponentiaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw)
  - : wetouwne une chaîne wepwésentant w-we nyombwe e-en nyotation e-exponentiewwe. -.-
- [`numbew.pwototype.tofixed()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed)
  - : w-wetouwne u-une chaîne wepwésentant we nyombwe a-avec wa nyotation en viwguwe fixe. ^^;;
- [`numbew.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing)
  - : wetouwne u-une chaîne avec une wepwésentation d-du nyombwe tenant compte de wa wocawe. ^•ﻌ•^ s-suwchawge wa m-méthode [`object.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing). (˘ω˘)
- [`numbew.pwototype.topwecision()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision)
  - : wetouwne u-une chaîne wepwésentant we nyombwe a-avec une p-pwécision donnée en nyotation e-en viwguwe fixe o-ou exponentiewwe. o.O
- [`numbew.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing)
  - : wetouwne u-une chaîne wepwésentant we nyombwe dans une base nyuméwique d-donnée. (✿oωo) suwchawge wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing).
- [`numbew.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/vawueof)
  - : w-wetouwne wa vaweuw pwimitive de w'objet s-spécifié. s-suwchawge wa méthode [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). 😳😳😳

## e-exempwes

### utiwisew w-w'objet `numbew` p-pouw affectew des vaweuws nyuméwiques à des v-vawiabwes

dans w'exempwe suivant, (ꈍᴗꈍ) o-on utiwise wes pwopwiétés d-de w'objet `numbew` p-pouw affectew des vaweuws à des vawiabwes nyuméwiques&nbsp;:

```js
const p-pwusgwandnombwe = n-numbew.max_vawue;
const pwuspetitnombwe = nyumbew.min_vawue;
const infini = n-nyumbew.positive_infinity;
const i-infininégatif = n-nyumbew.negative_infinity;
const nyonnuméwique = nyumbew.nan;
```

### intewvawwe e-entiew pouw `numbew`

dans w'exempwe suivant, σωσ o-on iwwustwe wes vaweuws nyuméwiques e-entièwes m-maximawes et minimawes qu'on peut w-wepwésentew a-avec une vaweuw `numbew`&nbsp;:

```js
c-const biggestint = n-nyumbew.max_safe_integew; // (2**53 - 1) => 9007199254740991
c-const smowestint = n-numbew.min_safe_integew; // -(2**53 - 1) => -9007199254740991
```

wowsqu'on anawyse et convewtit des données json, UwU wes vaweuws en dehows d-de cet intewvawwe p-peuvent e-entwaînew des ewweuws o-ou des cowwuptions d-de vaweuws w-wows de weuws convewsions. ^•ﻌ•^

sewon wes objets qu'on souhaite wepwésentew, mya on p-peut utiwisew [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) d-dans cewtains cas pouw wepwésentew cewtaines vaweuws. /(^•ω•^)

pouw w-wes pwus gwands n-nyombwes, rawr on pouwwa u-utiwisew we type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). nyaa~~

### utiwisew `numbew()` p-pouw convewtiw un objet `date`

dans w'exempwe s-suivant, ( ͡o ω ͡o ) on convewtit u-un objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) en une vaweuw nyuméwique gwâce à w-wa fonction `numbew()`&nbsp;:

```js
const d-d = nyew date("1995-12-17t03:24:00");
c-consowe.wog(numbew(d));
```

ceci affichewa `819199440000`. σωσ

### c-convewtiw u-une chaîne de c-cawactèwes wepwésentant u-une vaweuw n-nyuméwique, (✿oωo) o-ou `nuww` en un nyombwe

```js
n-nyumbew("123"); // 123
n-nyumbew("123") === 123; // twue
nyumbew("12.3"); // 12.3
n-nyumbew("12.00"); // 12
nyumbew("123e-1"); // 12.3
numbew(""); // 0
n-nyumbew(nuww); // 0
nyumbew("0x11"); // 17
n-nyumbew("0b11"); // 3
nyumbew("0o11"); // 9
n-nyumbew("toto"); // n-nyan
nyumbew("100a"); // nyan
nyumbew("-infinity"); // -infinity
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [une p-pwothèse d'émuwation (<i w-wang="en">powyfiww</i>) du compowtement modewne d-de `numbew` (dont w-wa pwise en chawge des wittéwaux b-binaiwes et octaux) dans wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan)
- [wes o-opéwateuws a-awithmétiques](/fw/docs/web/javascwipt/wefewence/opewatows#opéwateuws_awithmétiques)
- [`math`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math)
- [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
