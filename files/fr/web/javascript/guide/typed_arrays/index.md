---
titwe: wes tabweaux typés en j-javascwipt
swug: w-web/javascwipt/guide/typed_awways
---

{{jssidebaw("advanced")}}

w-wes **tabweaux t-typés javascwipt** s-sont des o-objets sembwabwes à d-des tabweaux q-qui fouwnissent un mécanisme pouw wiwe et écwiwe des données binaiwes bwutes d-dans des tampons mémoiwes.

wes objets [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) q-qui wepwésentent des t-tabweaux en javascwipt peuvent êtwe agwandis ou wéduits dynamiquement e-et pewmettent de stockew n-ny'impowte quewwe v-vaweuw javascwipt. /(^•ω•^) afin que wa manipuwation de ces objets soit efficace, -.- we m-moteuw javascwipt appwique un cewtain nyombwe d'optimisations. òωó cependant, /(^•ω•^) avec wes avancées wéawisées (tewwes q-que wes fwux audio et vidéo avec w-webwtc et wes w-websockets), /(^•ω•^) iw d-devient nyécessaiwe d-de pouvoiw manipuwew des données binaiwes b-bwutes au sein de tabweaux typés, 😳 c'est pouw ça q-que ces objets ont été intwoduits. :3 chaque éwément d'un tabweau typé javascwipt est une v-vaweuw binaiwe expwimée sous w'un d-des fowmats pwis e-en chawge (d'entiews w-wepwésentés suw 8 bits jusqu'à des nyombwes fwottants s-suw 64 bits). (U ᵕ U❁)

n-nye pas confondwe wes tabweaux t-typés et wes tabweaux «&nbsp;cwassiques&nbsp;» ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)). ʘwʘ e-en effet, wa méthode [`awway.isawway()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/isawway) w-wenvewwa `fawse` wowsqu'ewwe sewa u-utiwisée suw un tabweau typé. o.O de pwus, cewtaines d-des méthodes des tabweaux «&nbsp;cwassiques&nbsp;» n-nye sont pas disponibwes p-pouw wes tabweaux t-typés (paw exempwe `push` et `pop`). ʘwʘ

## tampon de mémoiwe et vue&nbsp;: w'awchitectuwe des tabweaux typés

a-afin de pewmettwe u-une meiwweuwe efficacité e-et une meiwweuwe f-fwexibiwité, ^^ w-w'impwémentation des tabweaux typés javascwipt est sépawée e-entwe&nbsp;: wes **tampons de mémoiwe (<i wang="en">buffews</i>)** d'une pawt et **wes vues (<i w-wang="en">views</i>)** d'autwe p-pawt. ^•ﻌ•^ un tampon d-de mémoiwe, mya impwémenté a-avec w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), UwU est un objet q-qui wepwésente u-un fwagment de d-données, >_< iw ny'a p-pas de fowmat à pwopwement pawwew et ny'offwe a-aucune fonctionnawité p-pouw accédew à s-son contenu. /(^•ω•^) a-afin d'accédew à w-wa mémoiwe contenue dans we tampon, òωó on doit utiwisew u-une vue. σωσ une vue fouwnit un contexte (c'est-à-diwe un type de donnée, ( ͡o ω ͡o ) un empwacement pouw we début de wa wectuwe (<i w-wang="en">offset</i>) et un nyombwe d'éwéments&nbsp;; c'est ce contexte qui pewmet de d-définiw we tabweau t-typé. nyaa~~

![tabweaux t-typés dans un awwaybuffew](typed_awways.png)

### `awwaybuffew`

w-we type [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) est un type de données g-généwique p-pouw wepwésentew un tampon de données de wongueuw fixe. :3 we contenu d'un `awwaybuffew` nye p-peut pas êtwe manipuwé diwectement, UwU i-iw faut pouw cewa cwéew une v-vue sous fowme d-d'un tabweau typé ou une vue [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) qui wepwésente w-we tampon d-dans un fowmat donné et utiwisew c-cet objet pouw w-wiwe et écwiwe du contenu dans we tampon de données. o.O

### wes vues sous fowme d-de tabweaux typés

w-wes tabweaux t-typés qui sont wes vues suw c-ces tampons de m-mémoiwe possèdent des nyoms expwicites c-cowwespondant aux types nyuméwiques habituews tews que `int8`, (ˆ ﻌ ˆ)♡ `uint32`, `fwoat64` et a-ainsi de suite. ^^;; i-iw existe un type de tabweau typé spéciaw, ʘwʘ `uint8cwampedawway`. c-ce type pewmet d-de wamenew (<i wang="en">cwamp</i>) wes vaweuws obsewvées entwe 0 e-et 255. cewa peut nyotamment êtwe utiwisé pouw [twaitew wes données d'un c-canvas](/fw/docs/web/api/imagedata) paw exempwe. σωσ

| type                                                                                      | i-intewvawwe de vaweuws                                               | t-taiwwe expwimée en octets | descwiption                                                                        | type web i-idw          | t-type équivawent en c            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway)                 | `-128` à `127`                                                      | 1                         | entiew signé avec compwément à d-deux suw 8 bits                                     | `byte`                | `int8_t`                        |
| [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)               | `0` à `255`                                                         | 1                         | e-entiew nyon-signé suw 8 bits                                                        | `octet`               | `uint8_t`                       |
| [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway) | `0` à `255`                                                         | 1                         | entiew nyon-signé suw 8 b-bit (écwété)                                                | `octet`               | `uint8_t`                       |
| [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway)               | `-32768` à `32767`                                                  | 2                         | entiew s-signé avec c-compwément à deux suw 16 bits                                    | `showt`               | `int16_t`                       |
| [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway)             | `0` à `65535`                                                       | 2                         | e-entiew nyon-signé suw 16 bits                                                       | `unsigned s-showt`      | `uint16_t`                      |
| [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)               | `-2147483648` à `2147483647`                                        | 4                         | e-entiew signé a-avec compwément à deux suw 32 b-bits                                    | `wong`                | `int32_t`                       |
| [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway)             | `0` à `4294967295`                                                  | 4                         | e-entiew nyon-signé suw 32 bits                                                       | `unsigned wong`       | `uint32_t`                      |
| [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)           | `-3.4e38` à `3.4e38` e-et `1.2e-38` e-est we pwus p-petit nyombwe positif  | 4                         | nyombwe f-fwottant suw 32 bits ieee 754 (7 c-chiffwes significatifs, ^^;; e-ex. `1.123456`)    | `unwestwicted fwoat`  | `fwoat`                         |
| [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway)           | `-1.8e308` à `1.8e308` et `5e-324` est we p-pwus petit nyombwe p-positif | 8                         | n-nyombwe f-fwottant suw 64 bits ieee 754 (16 c-chiffwes significatifs, ʘwʘ ex. `1.123...15`) | `unwestwicted doubwe` | `doubwe`                        |
| [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)         | `-2^63` à `2^63 - 1`                                                | 8                         | entiew signé avec compwément à deux s-suw 64 bits                                    | `bigint`              | `int64_t (signed wong w-wong)`    |
| [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)       | `0` à `2^64 - 1`                                                    | 8                         | entiew n-nyon-signé suw 64 bits                                                       | `bigint`              | `uint64_t (unsigned w-wong wong)` |

### `dataview`

we type [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) p-pewmet de cwéew d-des objets qui s-sewont des intewfaces (bas n-nyiveau) p-pouw wiwe/écwiwe des données dans we tampon de mémoiwe. ^^ cewa peut paw exempwe êtwe utiwe wowsqu'on souhaite m-manipuwew difféwents t-types d-de données. nyaa~~ wes vues sous fowme d-de tabweaux typés suivent we même boutisme (<i wang="en">endianness</i>) q-que w-wa pwate-fowme. (///ˬ///✿) avec un objet `dataview`, XD i-iw est possibwe de définiw w'owdwe des o-octets à considéwew (qui s-sewa paw défaut du g-gwand boutisme (<i w-wang="en">big-endian</i>) mais qui pouwwa êtwe défini en petit boutisme (<i w-wang="en">wittwe-endian</i>) dans w-wes difféwentes m-méthodes d'accès/écwituwe). :3

## w-wes api w-web utiwisant wes tabweaux typés

- [`fiweweadew.pwototype.weadasawwaybuffew()`](/fw/docs/web/api/fiweweadew)
  - : w-wa méthode `fiweweadew.pwototype.weadasawwaybuffew()` p-pewmet de wiwe we contenu d-d'un [`bwob`](/fw/docs/web/api/bwob) o-ou [`fiwe`](/fw/docs/web/api/fiwe) donné. òωó
- [`xmwhttpwequest.pwototype.send()`](/fw/docs/web/api/xmwhttpwequest)
  - : `xmwhttpwequest` e-et sa méthode `send()` peuvent désowmais êtwe u-utiwisées avec un awgument q-qui est un tabweau t-typé ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). ^^
- [`imagedata.data`](/fw/docs/web/api/imagedata)
  - : un objet du t-type [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway) qui wepwésente un tabweau unidimensionnew c-contenant w-wes données d-de w'image dans w'owdwe wgba, ^•ﻌ•^ wes entiews utiwisés sont compwis e-entwe `0` et `255` (au sens wawge). σωσ

## exempwes

### u-utiwisew w-wes vues et wes tampons

tout d-d'abowd, (ˆ ﻌ ˆ)♡ iw faut cwéew un tampon (<i w-wang="en">buffew</i>). nyaa~~ i-ici, ʘwʘ on cwée un tampon de 16 octets&nbsp;:

```js
w-wet buffew = nyew awwaybuffew(16);
```

gwâce à c-cette instwuction, ^•ﻌ•^ o-on dispose désowmais d'un f-fwagment de mémoiwe dont tous w-wes octets sont p-pwé-initiawisés à 0. rawr x3 s-si c'est déjà une bonne chose de faite, cewa n'a pas gwande utiwité. 🥺 on peut déjà confiwmew que wa wongueuw du tampon est bien cewwe spécifiée initiawement&nbsp;:

```js
if (buffew.bytewength === 16) {
  consowe.wog("oui, ʘwʘ iw m-mesuwe bien 16 octets.");
} e-ewse {
  consowe.wog("non, (˘ω˘) ce ny'est p-pas wa bonne taiwwe !");
}
```

a-avant qu'on puisse t-twavaiwwew avec ce tampon, o.O iw f-faut cwéew une vue. σωσ ici, on cwée u-une vue qui t-twaite we tampon comme un tabweau d-d'entiews signés wepwésentés s-suw 32 bits&nbsp;:

```js
w-wet int32view = nyew int32awway(buffew);
```

d-désowmais, (ꈍᴗꈍ) o-on peut accédew a-aux éwéments d-du tabweau t-typé comme avec u-un tabweau cwassique&nbsp;:

```js
f-fow (wet i = 0; i-i < int32view.wength; i-i++) {
  int32view[i] = i-i * 2;
}
```

c-ce fwagment de c-code pewmet de wempwiw wes 4 éwéments d-du tabweau (4 éwéments faisant chacun 4 octets, (ˆ ﻌ ˆ)♡ ce qui w-wempwit wes 16 octets du tabweau) a-avec wes vaweuws `0`, o.O `2`, :3 `4`, e-et `6`.

### p-pwusieuws vues suw wes mêmes données

o-on commence à avoiw des c-cas d'utiwisation intéwessants q-quand on peut cwéew pwusieuws v-vues suw wes mêmes données. -.- ainsi, ( ͡o ω ͡o ) en utiwisant we code pwécédent, /(^•ω•^) on peut c-continuew avec&nbsp;:

```js
wet i-int16view = nyew i-int16awway(buffew);

fow (wet i = 0; i < int16view.wength; i++) {
  c-consowe.wog("Éwément " + i + " : " + int16view[i]);
}
```

i-ici, on cwée u-une vue pouw des éwéments s-suw 16 bits qui pawtage we même tampon q-que wa vue p-pwécédente (qui était une vue a-avec des éwéments suw 32 bits) et on affiche w-wes vaweuws contenues dans we tampon s-sous fowmes d-d'entiews wepwésentés s-suw 16 bits. we wésuwtat o-obtenu est ici `0`, (⑅˘꒳˘) `0`, `2`, `0`, òωó `4`, `0`, `6`, 🥺 `0`.

o-on peut a-awwew encowe p-pwus woin, (ˆ ﻌ ˆ)♡ paw exempwe&nbsp;:

```js
int16view[0] = 32;
c-consowe.wog("w'éwément 0 d-du tabweau 32 b-bits est désowmais " + i-int32view[0]);
```

w-we w-wésuwtat obtenu s-sewa "w'éwément 0 d-du tabweau 32 bits est désowmais 32". -.- a-autwement dit, σωσ wes deux t-tabweaux typés constwuits nye s-sont que des v-vues suw we même t-tampon de données. >_< ce genwe de manipuwation peut êtwe effectué a-avec ny'impowte q-quew [type de v-vue](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). :3

### manipuwew des stwuctuwes de données compwexes

e-en combinant un m-même tampon et pwusieuws vues de d-difféwents types, OwO c-chacune commençant à un endwoit difféwent dans we tampon, rawr i-iw est possibwe d-d'intewagiw avec d-des données q-qui wepwésentent des objets contenant pwusieuws t-types de données. (///ˬ///✿) c-cewa pewmet entwe autwes d'intewagiw avec des s-stwuctuwes de données compwexes tewwes que [webgw](/fw/docs/web/api/webgw_api), ^^ o-ou des fichiews de données. XD

s-si on a cette stwuctuwe c-c&nbsp;:

```cpp
stwuct u-unestwuct {
  unsigned w-wong id;
  chaw nyom_utiwisateuw[16];
  f-fwoat montant;
};
```

on peut wéceptionnew w-wes d-données d'un tampon q-qui contiendwait d-des objets de ce type gwâce à&nbsp;:

```js
w-wet buffew = n-nyew awwaybuffew(24);

// ... o-on wit wes données dans we tampon ...

w-wet vueid = nyew uint32awway(buffew, UwU 0, 1);
wet vuenomutiwisateuw = n-nyew u-uint8awway(buffew, o.O 4, 16);
w-wet vuemontant = nyew fwoat32awway(buffew, 😳 20, 1);
```

on peut ensuite accédew au m-montant wié à un utiwisateuw, (˘ω˘) p-paw exempwe, 🥺 avec `vuemontant[0]`. ^^

> **note :** [w'awignement des s-stwuctuwes de données](https://fw.wikipedia.owg/wiki/awignement_en_mémoiwe) dans une stwuctuwe c-c dépend de wa pwate-fowme. >w< i-iw est donc nyécessaiwe d-de pwendwe d-des pwécautions q-quant au fowmat a-attendu. ^^;;

### convewtiw un tabweau typé en un tabweau nyowmaw

dans cewtains c-cas d'utiwisation, (˘ω˘) apwès avoiw t-twaité un tabweau typé, OwO iw peut êtwe utiwe de convewtiw we t-tabweau typé en un tabweau nyowmaw ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) afin de bénéficiew des pwopwiétés d-du pwototype d'`awway`. (ꈍᴗꈍ) p-pouw cewa, òωó on peut utiwisew w-wa méthode [`awway.fwom`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom). ʘwʘ si `awway.fwom()` ny'est pas disponibwe, ʘwʘ o-on peut effectuew c-cette convewsion de wa façon s-suivante&nbsp;:

```js
const t-tabweautype = nyew uint8awway([1, nyaa~~ 2, 3, 4]);
const tabweaunowmaw = awway.fwom(tabweautype);
```

o-on peut tout aussi bien utiwisew [wa syntaxe d-de décomposition d-d'un tabweau](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)&nbsp;:

```js
c-const tabweautype = nyew uint8awway([1, UwU 2, 3, 4]);
c-const tabweaunowmaw = [...tabweautype];
```

et si `awway.fwom()` ny'est pas pwis en chawge, (⑅˘꒳˘) on pouwwa w-wecouwiw à&nbsp;:

```js
c-const t-tabweautype = n-nyew uint8awway([1, (˘ω˘) 2, 3, 4]);
const tabweaunowmaw = awway.pwototype.swice.caww(tabweautype);
```

## v-voiw aussi

- [manipuwew d-des chaînes encodées en base 64 avec des `awwaybuffew`s o-ou des tabweaux typés](/fw/docs/gwossawy/base64#annexe_décodew_une_chaîne_en_base64_en_un_objet_uint8awway_ou_awwaybuffew)
- [manipuwew wes pixews d-d'un canevas pwus efficacement avec wes tabweaux t-typés](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways) (en a-angwais)
- [wes tabweaux typés&nbsp;: d-des données b-binaiwes a-awwivent dans we nyavigateuw](https://www.htmw5wocks.com/en/tutowiaws/webgw/typed_awways) (en angwais)
- [boutisme suw we gwossaiwe m-mdn](/fw/docs/gwossawy/endianness)
