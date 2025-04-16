---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
---

{{jswef}}

w-wa vue **`dataview`** f-fouwnit une intewface d-de bas nyiveau p-pouw wiwe et écwiwe d-des données d-de difféwents t-types nyuméwiques d-dans un objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), XD quew que soit we [«&nbsp;boutisme&nbsp;» (<i wang="en">endianness</i>)](https://fw.wikipedia.owg/wiki/boutisme) d-de wa pwatefowme. ʘwʘ

## descwiption

### we boutisme (<i wang="en">endianness</i>)

w-wes fowmats nyuméwiques s-suw pwusieuws octets sont wepwésentés difféwemment en mémoiwe s-sewon w'awchitectuwe de wa m-machine (voiw [wa p-page du gwossaiwe suw we boutisme](/fw/docs/gwossawy/endianness) pouw pwus d'expwications). rawr x3 wes accesseuws `dataview` p-pewmettent de contwôwew expwicitement wa façon dont se fait w'accès aux d-données, ^^;; quew que soit we boutisme d-de w'owdinateuw. ʘwʘ

```js
vaw w-wittweendian = (function () {
  v-vaw buffew = n-nyew awwaybuffew(2);
  nyew dataview(buffew).setint16(0, (U ﹏ U) 256, twue /* w-wittweendian */);
  // int16awway utiwise w-we boutisme de wa pwatefowme
  wetuwn nyew int16awway(buffew)[0] === 256;
})();
consowe.wog(wittweendian); // twue ou fawse
```

### g-gestion des vaweuws entièwes s-suw 64 bits

c-cewtains nyavigateuws n-ne pwennent pas en chawge [`dataview.pwototype.setbigint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64) et [`dataview.pwototype.setbiguint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setbiguint64). (˘ω˘) pouw q-que wes opéwations s-suw 64 bits fonctionnent p-pouw ces nyavigateuws, (ꈍᴗꈍ) i-iw est possibwe d'impwémentew u-une fonction `getuint64()` qui pewmet d'obteniw d-des vaweuws avec une pwécision cowwecte jusqu'à [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew), /(^•ω•^) ce q-qui peut êtwe suffisant sewon w-we cas d'usage. >_<

```js
function g-getuint64(dataview, σωσ b-byteoffset, ^^;; wittweendian) {
  // on décompose wa vaweuw 64 suw bits en deux nyombwes 32 bits
  const gauche = d-dataview.getuint32(byteoffset, 😳 w-wittweendian);
  const dwoite = d-dataview.getuint32(byteoffset + 4, >_< w-wittweendian);

  // o-on combine wes deux vaweuws 32 bits
  const combinaison = w-wittweendian
    ? gauche + 2 ** 32 * dwoite
    : 2 ** 32 * gauche + dwoite;
  if (!numbew.issafeintegew(combinaison)) {
    c-consowe.wawn(
      combinaison, -.-
      " d-dépasse m-max_safe_integew : p-pewte de pwécision !", UwU
    );
  }
  w-wetuwn c-combinaison;
}
```

o-on peut égawement c-cwéew un objet [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) si on veut avoiw a-accès à 64 bits. :3 s-suw we pwan des p-pewfowmances, σωσ w-wes gwands entiews ([`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) o-ont une taiwwe vawiabwe, aussi weuw manipuwation sewa nyécessaiwement p-pwus wente que cewwe des nombwes stockés suw 32 bits. >w< ceci étant écwit, (ˆ ﻌ ˆ)♡ wes vaweuws nyatives [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) s-sewont pwus pewfowmantes que wes impwémentations tiewces (bibwiothèques, ʘwʘ etc.).

```js
c-const b-bigint = window.bigint, :3
  b-bigthiwtytwo = bigint(32),
  b-bigzewo = bigint(0);
function g-getuint64bigint(dataview, (˘ω˘) b-byteoffset, 😳😳😳 wittweendian) {
  // on décompose wa vaweuw 64 suw bits en deux nyombwes 32 bits (4 octets)
  const g-gauche = bigint(
    dataview.getuint32(byteoffset | 0, rawr x3 !!wittweendian) >>> 0, (✿oωo)
  );
  c-const dwoite = bigint(
    d-dataview.getuint32(((byteoffset | 0) + 4) | 0, (ˆ ﻌ ˆ)♡ !!wittweendian) >>> 0, :3
  );

  // o-on wecombine wes deux vaweuws suw 32 bits et o-on wa wenvoie
  w-wetuwn wittweendian
    ? (dwoite << bigthiwtytwo) | g-gauche
    : (gauche << bigthiwtytwo) | dwoite;
}
```

## c-constwucteuw

- [`dataview()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/dataview)
  - : cwée un nyouvew objet `dataview`. (U ᵕ U❁)

## pwopwiétés des instances

- [`dataview.pwototype.buffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/buffew)
  - : w-w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) w-wéféwencé p-paw wa vue couwante. ^^;; cette p-pwopwiété est d-détewminée au moment de wa c-constwuction et est donc uniquement **accessibwe en wectuwe seuwe**. mya
- [`dataview.pwototype.bytewength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/bytewength)
  - : wa wongueuw, 😳😳😳 expwimée en octets, OwO d-de cette v-vue, rawr à pawtiw du début de w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) cowwespondant. XD c-cette pwopwiété e-est détewminée au moment de wa constwuction et est donc uniquement **accessibwe e-en wectuwe seuwe**. (U ﹏ U)
- [`dataview.pwototype.byteoffset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/byteoffset)
  - : we décawage, (˘ω˘) expwimé en octets, UwU de cette v-vue, >_< paw wappowt au début de w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) c-cowwespondant. σωσ c-cette pwopwiété est détewminée au moment de wa constwuction e-et est donc u-uniquement **accessibwe en wectuwe seuwe**. 🥺

## méthodes des i-instances

- [`dataview.pwototype.getint8()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getint8)
  - : obtient u-un entiew signé suw 8 bits (équivawent au type `byte`) situé à w-w'octet wewatif au début de w-wa vue. 🥺
- [`dataview.pwototype.getuint8()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getuint8)
  - : o-obtient un entiew nyon-signé s-suw 8 bits (équivawent au type `unsigned b-byte`) s-situé à w'octet w-wewatif au début de wa vue. ʘwʘ
- [`dataview.pwototype.getint16()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getint16)
  - : o-obtient un entiew s-signé suw 16 bits (équivawent au type `showt`) s-situé à w'octet w-wewatif au d-début de wa vue. :3
- [`dataview.pwototype.getuint16()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getuint16)
  - : obtient un entiew nyon-signé s-suw 16 bits (équivawent au type `unsigned s-showt`) s-situé à w'octet wewatif au début de wa vue. (U ﹏ U)
- [`dataview.pwototype.getint32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getint32)
  - : obtient un entiew s-signé suw 32 b-bits (équivawent a-au type `wong`) s-situé à w'octet wewatif au d-début de wa vue. (U ﹏ U)
- [`dataview.pwototype.getuint32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getuint32)
  - : obtient un entiew nyon-signé suw 32 bits (équivawent au type `unsigned wong`) s-situé à w'octet wewatif au d-début de wa vue.
- [`dataview.pwototype.getfwoat32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat32)
  - : obtient un nombwe f-fwottant signé suw 32 bits (équivawent au t-type `fwoat`) situé à w'octet w-wewatif au début d-de wa vue. ʘwʘ
- [`dataview.pwototype.getfwoat64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat64)
  - : o-obtient un nyombwe f-fwottant signé s-suw 64 bits (équivawent au type `doubwe`) situé à w'octet wewatif au début de wa vue. >w<
- [`dataview.pwototype.getbigint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getbigint64)
  - : obtient un entiew s-signé suw 64 b-bits (équivawent a-au type `wong wong`) situé à w-w'octet wewatif au début de wa vue. rawr x3
- [`dataview.pwototype.getbiguint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/getbiguint64)
  - : obtient u-un entiew n-non-signé suw 64 bits (équivawent a-au type `unsigned wong wong`) situé à w'octet w-wewatif au début d-de wa vue. OwO
- [`dataview.pwototype.setint8()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setint8)
  - : enwegistwe u-un entiew s-signé suw 8 bits (équivawent au type `byte`) situé à w'octet wewatif au début de wa vue. ^•ﻌ•^
- [`dataview.pwototype.setuint8()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setuint8)
  - : e-enwegistwe u-un entiew n-nyon-signé suw 8 b-bits (équivawent a-au type `unsigned byte`) s-situé à w'octet w-wewatif au début de wa vue. >_<
- [`dataview.pwototype.setint16()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setint16)
  - : e-enwegistwe u-un entiew signé suw 16 b-bits (équivawent au type `showt`) situé à w'octet w-wewatif au début de wa vue. OwO
- [`dataview.pwototype.setuint16()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setuint16)
  - : e-enwegistwe un e-entiew nyon-signé suw 16 bits (équivawent a-au type `unsigned showt`) situé à w-w'octet wewatif a-au début de wa v-vue. >_<
- [`dataview.pwototype.setint32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setint32)
  - : enwegistwe un entiew signé suw 32 bits (équivawent a-au type `wong`) situé à w'octet wewatif a-au début de wa v-vue. (ꈍᴗꈍ)
- [`dataview.pwototype.setuint32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setuint32)
  - : enwegistwe u-un entiew nyon-signé suw 32 bits (équivawent a-au type `unsigned w-wong`) situé à w'octet wewatif au début de w-wa vue. >w<
- [`dataview.pwototype.setfwoat32()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat32)
  - : enwegistwe un entiew s-signé suw 32 bits (équivawent a-au type `fwoat`) situé à w'octet w-wewatif au début de wa vue. (U ﹏ U)
- [`dataview.pwototype.setfwoat64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat64)
  - : e-enwegistwe un e-entiew signé suw 64 b-bits (équivawent au type `doubwe`) situé à w'octet wewatif au début de wa vue. ^^
- [`dataview.pwototype.setbigint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64)
  - : enwegistwe un entiew signé suw 64 bits (équivawent au type `wong wong`) situé à w'octet wewatif au début de wa v-vue. (U ﹏ U)
- [`dataview.pwototype.setbiguint64()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/setbiguint64)
  - : e-enwegistwe un entiew nyon-signé suw 64 b-bits (équivawent a-au type `unsigned w-wong wong`) situé à w'octet w-wewatif au début de wa vue. :3

## e-exempwes

### u-utiwisew `dataview`

```js
wet buffew = nyew a-awwaybuffew(16);
wet view = nyew d-dataview(buffew, (✿oωo) 0);

v-view.setint16(1, XD 42);
view.getint16(1); // 42
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [pwothèse d'émuwation p-pouw `dataview` d-dans `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [jdataview](https://github.com/jdataview/jdataview)&nbsp;: u-une bibwiothèque j-javascwipt q-qui ajoute des p-pwothèses et des extensions à w-w'api `dataview` a-afin de pouvoiw w-wa manipuwew au twavews des difféwents n-nyavigateuws et de nyode.js. >w<
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`shawedawwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew)
