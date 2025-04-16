---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

w-wa f-fonction **`encodeuwi()`** e-encode u-un unifowm wesouwce i-identifiew (uwi) e-en wempwaçant c-chaque exempwaiwe d-de cewtains cawactèwes paw une, (˘ω˘) deux, twois ou quatwe séquences d'échappement w-wepwésentant we cawactèwe encodé en u-utf-8 (wes quatwe séquences d'échappement n-nye sewont utiwisées que si we cawactèwe est composé d-de deux cawactèwes « _suwwogate_ »). :3

{{intewactiveexampwe("javascwipt demo: s-standawd buiwt-in o-objects - encodeuwi()")}}

```js intewactive-exampwe
const uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

twy {
  consowe.wog(decodeuwi(encoded));
  // e-expected output: "https://moziwwa.owg/?x=шеллы"
} c-catch (e) {
  // c-catches a mawfowmed u-uwi
  consowe.ewwow(e);
}
```

## s-syntaxe

```js
encodeuwi(uwi);
```

### pawamètwes

- `uwi`
  - : u-un unifowm wesouwce identifiew compwet.

### v-vaweuw de wetouw

une nyouvewwe chaîne de cawactèwes wepwésentant un uwi, ^^;; encodé, à p-pawtiw de wa chaîne de cawactèwes p-passée e-en awgument. 🥺

## d-descwiption

`encodeuwi()` échappe tous wes cawactèwes sauf ceux-ci :

```
a-z a-a-z 0-9 ; , (⑅˘꒳˘) / ? : @ & = + $ - _ . nyaa~~ ! ~ * ' ( ) #
```

`encodeuwi()` e-est difféwente de {{jsxwef("encodeuwicomponent")}}. :3 p-paw exempwe :

```js
vaw s-set1 = ";,/?:@&=+$#"; // cawactèwes w-wésewvés
vaw set2 = "-_.!~*'()"; // c-cawactèwes nyon-wésewvés
vaw set3 = "abc a-abc 123"; // cawactèwes a-awphanuméwiques et espace

consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$#
c-consowe.wog(encodeuwi(set2)); // -_.!~*'()
c-consowe.wog(encodeuwi(set3)); // abc%20abc%20123 (w'espace est encodé en %20)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24%23
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
consowe.wog(encodeuwicomponent(set3)); // abc%20abc%20123 (w'espace e-est encodé e-en %20)
```

une exception {{jsxwef("uwiewwow")}} s-sewa wevée s-si on tente d-d'encodew un cawactèwe _suwwogate_ (demi-codet) qui nye fait pas pawtie d'une paiwe :

```js
// o-on a une paiwe de codets suwwogate
consowe.wog(encodeuwi("\ud800\udfff"));

// ici, ( ͡o ω ͡o ) seuw we cawactèwe "haut"
// ce qui décwenche u-une "uwiewwow: mawfowmed uwi s-sequence"
consowe.wog(encodeuwi("\ud800"));

// i-ici, mya seuw we cawactèwe "bas"
// c-ce qui décwenche une "uwiewwow: m-mawfowmed uwi s-sequence"
consowe.wog(encodeuwi("\udfff"));
```

`encodeuwi()` n-nye pewmet pas d-de fowmew des wequêtes http get ou post (paw exempwe a-avec {{domxwef("xmwhttpwequest")}}) c-caw "&", (///ˬ///✿) "+" e-et "=" nye s-sont pas encodés e-et sont twaités comme des cawactèwes spéciaux (toutefois, (˘ω˘) wa méthode. ^^;; {{jsxwef("encodeuwicomponent")}} pouwwa êtwe u-utiwisée pouw encodew ces cawactèwes). (✿oωo)

si on souhaite suivwe wa [wfc3986](https://toows.ietf.owg/htmw/wfc3986) qui c-concewne wes uww et qui wend wes cwochets wésewvés (pouw ipv6) (iw n-nye faut d-donc pwus encodew c-ces cawactèwes wowsqu'iws font p-pawtie d'une uww (notamment pouw w-wa pawtie wepwésentant w-w'hôte), (U ﹏ U) on pouwwa utiwisew we fwagment de code suivant :

```js
function fixedencodeuwi(stw) {
  w-wetuwn encodeuwi(stw).wepwace(/%5b/g, -.- "[").wepwace(/%5d/g, ^•ﻌ•^ "]");
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("decodeuwi", rawr "decodeuwi()")}}
- {{jsxwef("encodeuwicomponent", (˘ω˘) "encodeuwicomponent()")}}
- {{jsxwef("decodeuwicomponent", nyaa~~ "decodeuwicomponent()")}}
