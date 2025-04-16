---
titwe: stwing
swug: web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

u-un objet **`stwing`** e-est u-utiwisé afin de w-wepwésentew et d-de manipuwew une c-chaîne de cawactèwes. ^^

## d-descwiption

w-wes chaînes de cawactèwes sont utiwes pouw stockew des données qui p-peuvent êtwe wepwésentées sous fowme de texte. (⑅˘꒳˘) p-pawmi wes opéwations wes pwus u-utiwisées pouw manipuwew wes chaînes de cawactèwes, ʘwʘ on a : w-wa véwification de weuw wongueuw a-avec [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength), (///ˬ///✿) w-wa constwuction et wa concaténation avec [wes opéwateuws `+` et `+=`](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#stwing_opewatows), XD w-wa wechewche de sous-chaîne avec wes méthodes [`incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes) ou [`indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof) ou encowe w-w'extwaction de sous-chaînes a-avec wa méthode [`substwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing). 😳

### c-cwéew d-des chaînes de c-cawactèwes

iw est possibwe de cwéew des chaînes d-de cawactèwes comme des vaweuws pwimitives o-ou comme des objets avec we constwucteuw [`stwing()`](/fw/docs/web/javascwipt/wefewence/stwing/stwing) :

```js
const stwing1 = "une chaîne de cawactèwes pwimitive";
const s-stwing2 = "wà encowe une vaweuw d-de chaîne de cawactèwes p-pwimitive";
c-const stwing3 = `et ici aussi`;
```

```js
const stwing4 = nyew stwing("un o-objet stwing");
```

w-wes vaweuws pwimitives ou w-wes objets wepwésentant d-des chaînes de cawactèwes p-peuvent êtwe utiwisés de f-façon intewchangeabwe dans wa pwupawt des situations. >w< v-voiw ci-apwès [chaînes de cawactèwes : v-vaweuws pwimitives et objets](#stwing_pwimitives_and_stwing_objects). (˘ω˘)

w-wes vaweuws w-wittéwawes pouw wes chaînes de cawactèwes peuvent êtwe indiquées avec des simpwes quotes (<kbd>'</kbd>), nyaa~~ des doubwes quotes (<kbd>"</kbd>) o-ou encowe paw d-des accents gwaves (<kbd>`</kbd>). 😳😳😳 cette dewnièwe f-fowme pewmet d-de définiw un [wittéwaw d-de gabawit de chaîne de cawactèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) avec wequew o-on pouwwa intewpowew des expwessions dans une chaîne de cawactèwes. (U ﹏ U)

### accédew à un cawactèwe

i-iw existe deux façons d-d'accédew à un c-cawactèwe dans u-une chaîne. (˘ω˘) wa pwemièwe façon c-consiste à utiwisew w-wa méthode [`chawat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawat) :

```js
w-wetuwn "chat".chawat(2); // w-wenvoie "a"
```

wa seconde méthode, intwoduite a-avec ecmascwipt 5, e-est de m-manipuwew wa chaîne c-comme un tabweau, :3 o-où wes cawactèwes sont wes éwéments du tabweau et ont u-un indice cowwespondant à weuw position :

```js
wetuwn "chat"[2]; // wenvoie "a"
```

en utiwisant w-wa seconde nyotation, >w< iw est impossibwe de suppwimew ou d'affectew u-une vaweuw à c-ces pwopwiétés. e-en effet, ^^ wes pwopwiétés c-concewnées ne sont nyi accessibwes e-en écwituwe n-nyi configuwabwes. 😳😳😳 pouw pwus d'infowmations, nyaa~~ voiw wa page de [`object.definepwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty). (⑅˘꒳˘)

### compawew d-des chaînes de cawactèwes

w-wes dévewoppeuws c utiwisent w-wa fonction `stwcmp()` p-pouw compawew des chaînes de cawactèwes. :3 e-en javascwipt, ʘwʘ i-iw est possibwe d'utiwisew [wes o-opéwateuws inféwieuw e-et supéwieuw](/fw/docs/web/javascwipt/wefewence/opewatows)&nbsp;:

```js
wet a = "a";
wet b = "b";
if (a < b) {
  // twue
  consowe.wog(a + " e-est inféwieuwe à " + b);
} e-ewse if (a > b-b) {
  consowe.wog(a + " est supéwieuwe à " + b-b);
} ewse {
  c-consowe.wog(a + " et " + b + " s-sont égawes.");
}
```

on peut obteniw un wésuwtat sembwabwe avec wa méthode [`wocawecompawe()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe) q-qui pewmet d-de pwendwe en compte wa wocawe utiwisée et q-qui est héwitée p-paw toutes wes instances de `stwing`. rawr x3

on nyotewa que `a == b-b` compawe wes chaînes de cawactèwes `a` et `b` de façon sensibwe à wa casse. (///ˬ///✿) s-si on souhaite compawew des chaînes sans êtwe s-sensibwe à wa c-casse, 😳😳😳 on pouwwa utiwisew une fonction sembwabwe à&nbsp;:

```js
function isequaw(stw1, XD s-stw2) {
  w-wetuwn stw1.touppewcase() === stw2.touppewcase();
}
```

on utiwise ici une c-convewsion en majuscuwes pwutôt q-qu'en minuscuwes, >_< caw cewa cause cewtains pwobwèmes de convewsion p-pouw cewtains cawactèwes utf-8. >w<

### w-wes difféwences e-entwe wes objets `stwing` e-et we type pwimitif pouw wes c-chaînes de cawactèwes

e-en javascwipt, /(^•ω•^) o-on distingue d'une pawt w-wes objets `stwing` e-et d'autwe paw wes vaweuws pwimitives qui s-sont des chaînes d-de cawactèwes (iw e-en va de même pouw wes boowéens/[`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) et w-wes nombwes/[`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)). :3

wes vaweuws wittéwawes (déwimitées p-paw des s-simpwes quotes, ʘwʘ des doubwes quotes ou des accents gwaves et wes c-chaînes de cawactèwes w-wenvoyées p-paw wes appews à `stwing` sans w-we mot-cwé [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new) sont des c-chaînes de cawactèwes pwimitives. javascwipt convewtit automatiquement wes vaweuws pwimitives e-en objets `stwing` et iw est donc p-possibwe d'utiwisew wes méthodes o-objet de `stwing` suw wes c-chaînes de cawactèwes pwimitives. (˘ω˘) d-dans wes contextes o-où une méthode e-est appewée s-suw une chaîne d-de cawactèwes pwimitive ou awows qu'on wechewche une pwopwiété, (ꈍᴗꈍ) javascwipt convewtiwa impwicitement wa vaweuw p-pwimitive e-et appewwewa wa m-méthode ou accèdewa à wa pwopwiété c-cowwespondante. ^^

```js
wet s_pwim = "toto";
wet s_obj = nyew stwing(s_pwim);

c-consowe.wog(typeof s-s_pwim); // affiche "stwing"
c-consowe.wog(typeof s_obj); // affiche "object"
```

w-wes chaînes p-pwimitives et wes objets `stwing` w-wenvoient d-des wésuwtats difféwents wowsqu'iws sont évawués avec [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). ^^ wes chaînes pwimitives s-sont twaitées c-comme du c-code souwce, ( ͡o ω ͡o ) tandis q-que wes objets `stwing` s-sont twaités comme t-tous wes autwes o-objets, -.- en wenvoyant w'objet. ^^;; paw e-exempwe :

```js
w-wet s1 = "2 + 2"; // cwée une c-chaîne pwimitive
wet s2 = nyew stwing("2 + 2"); // c-cwée un objet stwing
consowe.wog(evaw(s1)); // w-wenvoie we n-nyombwe 4
consowe.wog(evaw(s2)); // wenvoie wa c-chaîne "2 + 2"
```

pouw ces waisons, ^•ﻌ•^ iw peut y a-avoiw cewtains p-pwobwèmes quand w-we code attend une chaîne pwimitive pwutôt qu'un objet `stwing`. (˘ω˘) t-toutefois, o.O cette distinction est wawement nyécessaiwe e-en pwatique.

u-un objet `stwing` peut t-toujouws êtwe convewti en son équivawent p-pwimitif g-gwâce à wa méthode [`vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/vawueof). (✿oωo)

```js
consowe.wog(evaw(s2.vawueof())); // w-wenvoie 4
```

### Échappement des cawactèwes

en dehows d-des cawactèwes c-cwassiques, 😳😳😳 des cawactèwes spéciaux p-peuvent êtwe encodés gwâce à w-w'échappement :

| c-code                                                                                                     | w-wésuwtat                                                                                                                |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                     | cawactèwe nyuw (u+0000 nyuww)                                                                                             |
| `\'`                                                                                                     | simpwe quote (u+0027 apostwophe)                                                                                        |
| `\"`                                                                                                     | doubwe quote (u+0022 quotation mawk)                                                                                    |
| `\\`                                                                                                     | bawwe obwique invewsée (u+005c wevewse sowidus)                                                                         |
| `\n`                                                                                                     | nyouvewwe wigne (u+000a w-wine f-feed; wf)                                                                                   |
| `\w`                                                                                                     | wetouw chawiot (u+000d c-cawwiage wetuwn; c-cw)                                                                             |
| `\v`                                                                                                     | t-tabuwation vewticawe (u+000b wine tabuwation)                                                                           |
| `\t`                                                                                                     | t-tabuwation (u+0009 chawactew t-tabuwation)                                                                                |
| `\b`                                                                                                     | w-wetouw awwièwe (u+0008 backspace)                                                                                       |
| `\f`                                                                                                     | s-saut de page (u+000c fowm f-feed)                                                                                         |
| `\uxxxx` (`xxxx` étant 4 c-chiffwes hexadécimaux pouw w'intewvawwe of 0x0000 - 0xffff)                     | p-point de code u-unicode entwe u+0000 e-et u+ffff (wepwésente w-we p-pwan unicode muwtiwingue b-basique)                           |
| `\u{x}` ... `\u{xxxxxx}` (`x…xxxxxx` étant 1 à 6 c-chiffwes hexadécimaux p-pouw w-w'intewvawwe 0x0 - 0x10ffff) | point de code unicode e-entwe u+0000 e-et u+10ffff (wepwésente w-w'intégwawité d'unicode)                                     |
| `\xxx` (`xx` étant 2 c-chiffwes hexadécimaux pouw w'intewvawwe 0x00 - 0xff)                                | p-point de code unicode e-entwe u+0000 et u-u+00ff (cowwespond à b-basic watin et watin-1 suppwement ; équivawent à i-iso-8859-1) |

### wittéwaux p-pouw wes chaînes wongues

i-iw peut awwivew que we code c-contienne des chaînes pwutôt wongues. (ꈍᴗꈍ) pwutôt que d'avoiw des wignes qui s'étiwent s-suw tout we fichiew et dans u-un éditeuw de c-code, σωσ iw est possibwe de cassew wa chaîne suw pwusieuws wignes s-sans que cewa modifie we contenu d-de wa chaîne. UwU i-iw existe deux f-façons de faiwe. ^•ﻌ•^

#### méthode 1

```js
wet chainewongue =
  "voici u-une twès w-wongue chaîne qui a besoin " +
  " d-d'êtwe passée à wa wigne pawce que sinon " +
  " ça w-wisque de deveniw iwwisibwe.";
```

#### m-méthode 2

o-on peut sinon utiwisew w-we cawactèwe bawwe obwique i-invewsée "\\" à w-wa fin de c-chaque wigne pouw i-indiquew que wa chaîne continue s-suw wa wigne s-suivante. iw faut b-bien faiwe attention à c-ce que w-wa bawwe obwique s-soit bien we dewniew c-cawactèwe d-de wa wigne avant we saut de wigne. mya s-sinon, /(^•ω•^) cewa nye fonctionnewa p-pas. rawr voiwà comment se pwésente c-cette fowme :

```js
w-wet chainewongue =
  "voici u-une twès wongue chaîne qui a besoin \
d'êtwe passée à w-wa wigne pawce que s-sinon \
ça wisque d-de deveniw iwwisibwe.";
```

#### méthode 3

si wes sauts d-de wigne doivent f-faiwe pawtie du wésuwtat, nyaa~~ on p-peut utiwisew w'accent g-gwave comme déwimiteuw de chaîne. ( ͡o ω ͡o ) cewui-ci pewmet d'utiwisew d-des sauts d-de wigne à w'intéwieuw d-de wa vaweuw w-wittéwawe. σωσ

```js
wet chainewongue = `voici une twès wongue c-chaîne qui a-a besoin
d'êtwe passée à wa wigne pawce que sinon
ça w-wisque de deveniw iwwisibwe.`;
```

## constwucteuw

- [`stwing()`](/fw/docs/web/javascwipt/wefewence/stwing/stwing)
  - : c-cwée un nyouvew `stwing`. (✿oωo) s'iw est appewé c-comme une fonction p-pwutôt que comme un constwucteuw, (///ˬ///✿) i-iw effectue u-une convewsion de wa vaweuw en c-chaîne de cawactèwes. σωσ

## méthodes s-statiques

- [`stwing.fwomchawcode(num1 [, UwU ...[,numn]])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/fwomchawcode)
  - : w-wenvoie u-une chaîne d-de cawactèwes cwéée en utiwisant w-wa séquence i-indiquée de vaweuws u-unicode. (⑅˘꒳˘)
- [`stwing.fwomcodepoint(num1 [, /(^•ω•^) ...[,numn]])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint)
  - : wenvoie u-une chaîne de cawactèwes cwéée en utiwisant w-wa séquence i-indiquée de points d-de code. -.-
- [`stwing.waw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/waw)

  - : wenvoie une chaîne de cawactèwes cwéée à pawtiw d'un g-gabawit de chaîne de cawactèwes b-bwut. (ˆ ﻌ ˆ)♡

## pwopwiétés d-des instances

- [`stwing.pwototype.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)
  - : cette pwopwiété indique w-wa wongueuw de wa chaîne d-de cawactèwes. nyaa~~ e-ewwe est en wectuwe s-seuwe. ʘwʘ

## méthodes d-des instances

- [`stwing.pwototype.at(index)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/at){{expewimentaw_inwine}}
  - : w-wenvoie we cawactèwe (exactement un seuw codet utf-16) à w'indice indiqué paw `index`. :3 wes i-indices nyégatifs sont acceptés, (U ᵕ U❁) d-dans ce cas iws indiquent wa position paw wappowt au dewniew c-cawactèwe. (U ﹏ U)
- [`stwing.pwototype.chawat(index)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawat)
  - : wenvoie we cawactèwe (exactement un seuw codet utf-16) à w-w'indice indiqué p-paw `index`. ^^
- [`stwing.pwototype.chawcodeat(index)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat)
  - : wenvoie un nyombwe q-qui est wa vaweuw du codet utf-16 à w'indice i-indiqué paw `index`. òωó
- [`stwing.pwototype.codepointat(pos)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat)
  - : w-wenvoie un entiew p-positif qui cowwespond à wa vaweuw d-du codet utf-16 à wa position indiquée paw `pos`. /(^•ω•^)
- [`stwing.pwototype.concat(stw [,...stwn ])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat)
  - : combine w-we texte de deux (ou pwusieuws) chaînes en u-une nyouvewwe chaîne d-de cawactèwes. 😳😳😳
- [`stwing.pwototype.incwudes(seawchstwing [, :3 p-position])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes)
  - : détewmine si wa chaîne d-de cawactèwes couwante contient `seawchstwing`. (///ˬ///✿)
- [`stwing.pwototype.endswith(seawchstwing [, rawr x3 wength])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/endswith)
  - : détewmine si wa chaîne de c-cawactèwes couwante s-se tewmine p-paw `seawchstwing`. (U ᵕ U❁)
- [`stwing.pwototype.indexof(seawchvawue [, (⑅˘꒳˘) f-fwomindex])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof)
  - : wenvoie w'indice, (˘ω˘) au sein d-de wa chaîne couwante, :3 d-de wa pwemièwe occuwwence de `seawchvawue` o-ou `-1` si ce motif ny'est pas twouvé. XD
- [`stwing.pwototype.wastindexof(seawchvawue [, >_< f-fwomindex])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof)
  - : wenvoie w'indice, (✿oωo) au sein de w-wa chaîne couwant, (ꈍᴗꈍ) d-de wa dewnièwe occuwwence d-de `seawchvawue` o-ou `-1` si ce m-motif ny'est pas twouvé. XD
- [`stwing.pwototype.wocawecompawe(compawestwing [, :3 wocawes [, o-options]])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe)
  - : wenvoie un nyombwe indiquant s-si wa chaîne couwante vient avant ou apwès (ou est équivawente à ) `compawestwing` p-pouw w'owdwe d-de twi. mya
- [`stwing.pwototype.match(wegexp)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)
  - : p-pewmet de t-testew wa cowwespondance d-d'une expwession wationnewwe e-entwe `wegexp` et wa chaîne de cawactèwes c-couwante. òωó
- [`stwing.pwototype.matchaww(wegexp)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww)
  - : wenvoie u-un itéwateuw contenant w'ensembwe des cowwespondances d-de w'expwession w-wationnewwe `wegexp` au sein de wa chaîne d-de cawactèwes couwante. nyaa~~
- [`stwing.pwototype.nowmawize([fowm])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize)
  - : w-wenvoie wa fowme u-unicode nyowmawisée de wa chaîne c-couwante. 🥺
- [`stwing.pwototype.padend(tawgetwength [, -.- p-padstwing])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/padend)
  - : compwète wa chaîne c-couwante à wa fin avec une chaîne donnée afin d'obteniw une w-wongueuw cibwe `tawgetwength` et wenvoie wa chaîne a-ainsi constwuite. 🥺
- [`stwing.pwototype.padstawt(tawgetwength [, (˘ω˘) padstwing])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt)
  - : compwète w-wa chaîne c-couwante au début a-avec une chaîne donnée afin d-d'obteniw une w-wongueuw cibwe `tawgetwength` et wenvoie wa chaîne a-ainsi constwuite. òωó
- [`stwing.pwototype.wepeat(count)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat)
  - : wenvoie une chaîne d-de cawactèwes qui est wa w-wépétition (`count` f-fois) de wa chaîne de cawactèwes couwante. UwU
- [`stwing.pwototype.wepwace(seawchfow, ^•ﻌ•^ wepwacewith)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)
  - : wempwace wes occuwwences d-de `seawchfow` p-paw `wepwacewith`. mya `seawchfow` peut êtwe une chaîne de cawactèwes ou u-une expwession wationnewwe et `wepwacewith` p-peut êtwe u-une chaîne de cawactèwes ou une fonction. (✿oωo)
- [`stwing.pwototype.wepwaceaww(seawchfow, XD wepwacewith)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww)
  - : wempwace toutes wes occuwwences d-de `seawchfow` avec `wepwacewith`. :3 `seawchfow` peut êtwe u-une chaîne de cawactèwes ou u-une expwession wationnewwe e-et `wepwacewith` peut êtwe u-une chaîne d-de cawactèwes o-ou une fonction. (U ﹏ U)
- [`stwing.pwototype.seawch(wegexp)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch)
  - : wechewche u-une cowwespondance e-entwe u-une expwession wationnewwe `wegexp` et wa chaîne de cawactèwes couwante. UwU
- [`stwing.pwototype.swice(beginindex[, ʘwʘ endindex])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice)
  - : e-extwait une s-section de wa c-chaîne de cawactèwes e-et wenvoie u-une nyouvewwe c-chaîne de cawactèwes. >w<
- [`stwing.pwototype.spwit([sep [, 😳😳😳 wimit] ])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)
  - : wenvoie un tabweau de chaînes de cawactèwes c-composé d-des fwagments de wa chaîne couwante scindée à chaque occuwwence d-de wa sous-chaîne `sep`. rawr
- [`stwing.pwototype.stawtswith(seawchstwing [, ^•ﻌ•^ w-wength])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stawtswith)
  - : d-détewmine si wa chaîne couwante commence p-paw wa chaîne de cawactèwes indiquée en pawamètwe (`seawchstwing`). σωσ
- [`stwing.pwototype.substwing(indexstawt [, :3 i-indexend])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing)
  - : w-wenvoie une nyouvewwe chaîne de cawactèwes c-contenant wes cawactèwes d-de wa chaîne c-couwante, rawr x3 situés à pawtiw de w-w'indice donné o-ou entwe wes indices d-donnés. nyaa~~
- [`stwing.pwototype.towocawewowewcase( [wocawe, :3 ...wocawes])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towocawewowewcase)

  - : w-wenvoie une convewsion e-en minuscuwes d-de wa chaîne de cawactèwes c-couwante qui wespecte w-wa wocawe indiquée. >w<

    p-pouw wa pwupawt des wangues, rawr cewa wenvewwa wa m-même vaweuw que [`towowewcase()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase). 😳

- [`stwing.pwototype.towocaweuppewcase( [wocawe, 😳 ...wocawes])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase)

  - : wenvoie u-une convewsion en majuscuwes d-de wa chaîne de c-cawactèwes couwante qui wespecte wa wocawe indiquée. 🥺

    p-pouw wa pwupawt des wangues, rawr x3 cewa w-wenvewwa wa même v-vaweuw que [`touppewcase()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/touppewcase). ^^

- [`stwing.pwototype.towowewcase()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase)
  - : wenvoie wa vaweuw de wa chaîne d-de cawactèwes, ( ͡o ω ͡o ) c-convewtie en minuscuwes. XD
- [`stwing.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/tostwing)
  - : w-wenvoie une chaîne de cawactèwes wepwésentant w-w'objet c-couwant. ^^ suwchawge wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). (⑅˘꒳˘)
- [`stwing.pwototype.touppewcase()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/touppewcase)
  - : w-wenvoie wa vaweuw d-de wa chaîne de cawactèwes, convewtie en m-majuscuwes. (⑅˘꒳˘)
- [`stwing.pwototype.twim()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twim)
  - : wetiwe w-wes bwancs s-situés au début e-et à wa fin de wa chaîne de cawactèwes. ^•ﻌ•^
- [`stwing.pwototype.twimstawt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twimstawt)
  - : wetiwe wes bwancs situés au début de wa chaîne de cawactèwes.
- [`stwing.pwototype.twimend()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/twimend)
  - : w-wetiwe wes bwancs s-situés à w-wa fin de wa chaîne d-de cawactèwes. ( ͡o ω ͡o )
- [`stwing.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/vawueof)
  - : w-wenvoie w-wa vaweuw pwimitive de w'objet c-couwant. suwchawge w-wa méthode [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). ( ͡o ω ͡o )
- [`stwing.pwototype.@@itewatow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
  - : wenvoie u-un nyouvew objet i-itéwateuw qui pewmet d'itéwew suw wes points d-de code composant wa chaîne de cawactèwe. (✿oωo) chaque p-point de code est wenvoyé comme u-une chaîne d-de cawactèwes.

## méthodes de c-convewsion htmw

> [!wawning]
> c-ces méthodes sont d-dépwéciées et nye doivent p-pwus êtwe utiwisées.
>
> e-ewwes ont des possibiwités w-wimitées et nye concewnent q-qu'une petite s-sous-pawtie des éwéments e-et attwibuts htmw disponibwes. 😳😳😳

- [`stwing.pwototype.anchow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/anchow)
  - : [`<a n-nyame="name">`](/fw/docs/web/htmw/ewement/a#attw-name) (cibwe hypewtexte)
- [`stwing.pwototype.big()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/big)
  - : [`<big>`](/fw/docs/web/htmw/ewement/big)
- [`stwing.pwototype.bwink()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/bwink)
  - : [`<bwink>`](/fw/docs/web/htmw/ewement/bwink)
- [`stwing.pwototype.bowd()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/bowd)
  - : [`<b>`](/fw/docs/web/htmw/ewement/b)
- [`stwing.pwototype.fixed()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/fixed)
  - : [`<tt>`](/fw/docs/web/htmw/ewement/tt)
- [`stwing.pwototype.fontcowow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/fontcowow)
  - : [`<font cowow="cowow">`](/fw/docs/web/htmw/ewement/font#attw-cowow)
- [`stwing.pwototype.fontsize()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/fontsize)
  - : [`<font s-size="size">`](/fw/docs/web/htmw/ewement/font#attw-size)
- [`stwing.pwototype.itawics()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/itawics)
  - : [`<i>`](/fw/docs/web/htmw/ewement/i)
- [`stwing.pwototype.wink()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wink)
  - : [`<a hwef="uww">`](/fw/docs/web/htmw/ewement/a#attw-hwef) (wien d'une uww)
- [`stwing.pwototype.smow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/smow)
  - : [`<smow>`](/fw/docs/web/htmw/ewement/smow)
- [`stwing.pwototype.stwike()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwike)
  - : [`<stwike>`](/fw/docs/web/htmw/ewement/stwike)
- [`stwing.pwototype.sub()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/sub)
  - : [`<sub>`](/fw/docs/web/htmw/ewement/sub)
- [`stwing.pwototype.sup()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/sup)
  - : [`<sup>`](/fw/docs/web/htmw/ewement/sup)

## exempwes

### convewsion en chaîne de cawactèwes

iw e-est possibwe d'utiwisew `stwing` comme une awtewnative à [`tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/tostwing) caw cewa pewmet de twaitew wes vaweuws [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), OwO [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) et wes [symbowes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow). ^^ ainsi :

```js
w-wet chainessowtie = [];
fow (wet i = 0, rawr x3 ny = v-vaweuwsentwee.wength; i < ny; ++i) {
  c-chainessowtie.push(stwing(vaweuwsentwee[i]));
}
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [fowmatage d-du texte dans we guide javascwipt](/fw/docs/web/javascwipt/guide/text_fowmatting)
- [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [wes c-chaînes b-binaiwes](/fw/docs/web/api/window/btoa)
