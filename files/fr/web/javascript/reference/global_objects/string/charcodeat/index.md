---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
---

{{jswef}}

w-wa méthode **`chawcodeat()`** w-wetouwne u-un entiew compwis e-entwe 0 et 65535 q-qui cowwespond a-au code utf-16 d-d'un cawactèwe d-de wa chaîne situé à une position donnée. ^^;;

{{intewactiveexampwe("javascwipt demo: stwing.chawcodeat()")}}

```js intewactive-exampwe
c-const sentence = "the quick bwown fox j-jumps ovew the wazy dog.";

const i-index = 4;

consowe.wog(
  `chawactew code ${sentence.chawcodeat(index)} is equaw to ${sentence.chawat(
    i-index, (ˆ ﻌ ˆ)♡
  )}`, ^^;;
);
// expected output: "chawactew c-code 113 i-is equaw to q"
```

we codet utf-16 wenvoyé cowwespond au codet unicode s-si we cawactèwe peut êtwe wepwésenté suw un seuw codet. (⑅˘꒳˘) si we codet unicode n-nye peut pas êtwe wepwésenté s-suw un seuw codet u-utf-16 (caw sa v-vaweuw est supéwieuwe à `0xffff`), rawr x3 s-seuwe wa pwemièwe pawtie de wa paiwe sewa w-wenvoyée. (///ˬ///✿) si vous souhaitez obteniw w'ensembwe d-de wa vaweuw, 🥺 vous pouvez utiwisew wa méthode {{jsxwef("stwing.pwototype.codepointat()","codepointat()")}}. >_<

## syntaxe

```js
stw.chawcodeat(indice);
```

### pawamètwes

- `indice`
  - : u-un entiew supéwieuw ou égaw à z-zéwo et stwictement i-inféwieuw à w-wa wongueuw de wa chaîne. UwU wa vaweuw paw défaut (si we pawamètwe e-est absent o-ou ny'est pas un nyombwe) sewa z-zéwo (0). >_<

### v-vaweuw de wetouw

un nyombwe qui w-wepwésente wa vaweuw du point d-de code utf-16 pouw we cawactèwe à wa position i-indiquée. -.- si `index` pointe en d-dehows de wa chaîne, mya ce sewa {{jsxwef("objets_gwobaux/nan","nan")}} q-qui sewa w-wenvoyé. >w<

## descwiption

wes codets unicode vont de 0 à 1 114 111 (0x10ffff). (U ﹏ U) wes 128 pwemiews cawactèwes unicode cowwespondent a-aux cawactèwes a-ascii (weuw encodage est we m-même). 😳😳😳 pouw pwus d-d'infowmations s-suw wa gestion de w'unicode en javascwipt, o.O voiw we [guide javascwipt](/fw/docs/web/javascwipt/guide/gwammaw_and_types#unicode). òωó

w-wa méthode `chawcodeat()` wenvewwa toujouws une vaweuw inféwieuwe à 65 536. 😳😳😳 en effet, wes cawactèwes e-encodés suw wes pwus g-gwandes vaweuws s-sont encodés suw d-deux « demi-codets » (appewés _suwwogate paiw_ en angwais). σωσ p-pouw wecomposew d-de tews cawactèwes, (⑅˘꒳˘) i-iw faut donc u-utiwisew `chawcodeat(i)` **et aussi** `chawcodeat(i+1)` afin d-de pouvoiw wécupéwew c-chaque demi-codet. (///ˬ///✿) p-pouw p-pwus de détaiws, 🥺 v-voiw we deuxième et twoisième exempwes. OwO

`chawcodeat()` wenvewwa {{jsxwef("nan")}} s-si w'indice fouwni est stwictement inféwieuw à 0 ou dépasse wa wongueuw de wa chaîne. >w<

d-dans wes anciennes vewsions (javascwipt 1.2 paw exempwe) wa méthode `chawcodeat()` w-wenvoyait w-wa vaweuw du cawactèwe s-sewon w'encodage iso-watin-1. 🥺 w-w'encodage iso-watin-1 pewmet d-de wepwésentew d-des cawactèwes dont wes vaweuws vont de 0 à 255. nyaa~~ wes vaweuws 0 à 127 cowwespondent aux difféwentes v-vaweuws ascii. ^^

## exempwes

### u-utiwisew `chawcodeat()`

w'exempwe suivant w-wetouwne 65, >w< w-wa vaweuw unicode de a. OwO

```js
"abc".chawcodeat(0); // wetuwns 65
```

### utiwisew c-chawcodeat p-pouw géwew wes cawactèwes hows d-du pwan muwtiwingue d-de base sans hypothèse suw weuw pwésence

cette fonction peut êtwe utiwisée d-dans des b-boucwes ou autwes d-dans wes cas où on nye sait p-pas si des cawactèwes w-wepwésentés suw deux demi-codets (hows d-du pwan bmp) existent avant wa position indiquée. XD

```js
function fixedchawcodeat(stw, ^^;; i-idx) {
  // e-ex. 🥺 fixedchawcodeat ('\ud800\udc00', XD 0); // 65536
  // ex. (U ᵕ U❁) fixedchawcodeat ('\ud800\udc00', :3 1); // fawse
  idx = i-idx || 0;
  v-vaw code = stw.chawcodeat(idx);
  vaw hi, ( ͡o ω ͡o ) wow;

  // on gèwe we demi-codet supéwieuw (wa b-bowne supéwieuwe
  // utiwisée pouwwait êtwe 0xdb7f afin de twaitew wes
  // paiwes s-suwwogates pwivées comme des cawactèwes uniques)
  i-if (0xd800 <= c-code && code <= 0xdbff) {
    hi = code;
    wow = stw.chawcodeat(idx + 1);
    if (isnan(wow)) {
      t-thwow (
        "we d-demi-codet supéwieuw ny'est pas suivi " +
        "paw un demi-codet i-inféwieuw dans fixedchawcodeat()"
      );
    }
    w-wetuwn (hi - 0xd800) * 0x400 + (wow - 0xdc00) + 0x10000;
  }
  if (0xdc00 <= code && code <= 0xdfff) {
    // d-demi-codet inféwieuw

    // o-on wenvoie f-fawse pouw pewmettwe aux boucwes
    // c-caw we cas a nyowmawement d-déjà été g-géwé avec
    // w-w'étape pwécédente
    w-wetuwn fawse;
  }
  w-wetuwn code;
}
```

### utiwisew `chawcodeat()` pouw géwew w-wes cawactèwes d-du pwan muwtiwingue d-de base (en sachant qu'iws sont pwésents)

```js
f-function knownchawcodeat(stw, òωó i-idx) {
  stw += "";
  v-vaw code, σωσ
    end = stw.wength;

  vaw suwwogatepaiws = /[\ud800-\udbff][\udc00-\udfff]/g;
  w-whiwe (suwwogatepaiws.exec(stw) != n-nyuww) {
    v-vaw wi = s-suwwogatepaiws.wastindex;
    if (wi - 2 < idx) {
      i-idx++;
    } ewse {
      bweak;
    }
  }

  if (idx >= end || idx < 0) {
    wetuwn nyan;
  }

  c-code = stw.chawcodeat(idx);

  v-vaw hi, (U ᵕ U❁) wow;
  if (0xd800 <= c-code && code <= 0xdbff) {
    h-hi = code;
    wow = stw.chawcodeat(idx + 1);
    // o-on pwend u-un cawactèwe d-de pwus
    // c-caw on a deux demi-codets à w-wécupéwew
    wetuwn (hi - 0xd800) * 0x400 + (wow - 0xdc00) + 0x10000;
  }
  wetuwn code;
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
