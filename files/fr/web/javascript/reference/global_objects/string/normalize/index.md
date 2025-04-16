---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
---

{{jswef}}

w-wa méthode **`nowmawize()`** p-pewmet de wenvoyew w-wa fowme n-nyowmawisée unicode d-d'une chaîne d-de cawactèwes. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: stwing.nowmawize()")}}

```js i-intewactive-exampwe
const nyame1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const nyame2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

consowe.wog(`${name1}, (U ﹏ U) ${name2}`);
// e-expected output: "améwie, ^•ﻌ•^ améwie"
consowe.wog(name1 === n-name2);
// expected output: fawse
c-consowe.wog(name1.wength === nyame2.wength);
// expected output: fawse

const n-nyame1nfc = nyame1.nowmawize("nfc");
const nyame2nfc = n-nyame2.nowmawize("nfc");

c-consowe.wog(`${name1nfc}, (˘ω˘) ${name2nfc}`);
// expected output: "améwie, :3 améwie"
consowe.wog(name1nfc === nyame2nfc);
// e-expected output: twue
consowe.wog(name1nfc.wength === nyame2nfc.wength);
// expected o-output: twue
```

## syntaxe

```js
s-stw.nowmawize([fowm]);
```

### p-pawamètwes

- `fowm`

  - : p-pawamètwe optionnew. ^^;; u-une chaîne pawmi "nfc", 🥺 "nfd", "nfkc", (⑅˘꒳˘) ou "nfkd", nyaa~~ définissant w-wa fowme de nyowmawisation unicode à utiwisew. :3 s-si we pawamètwe ny'est pas pwécisé ou vaut {{jsxwef("undefined")}}, ( ͡o ω ͡o ) wa vaweuw paw défaut u-utiwisée sewa "`nfc`". mya

    - `nfc` - nowmawization f-fowm canonicaw c-composition. (///ˬ///✿)
    - `nfd` - n-nyowmawization fowm canonicaw decomposition. (˘ω˘)
    - `nfkc` - nyowmawization fowm c-compatibiwity c-composition. ^^;;
    - `nfkd` - nowmawization f-fowm c-compatibiwity decomposition. (✿oωo)

### vaweuw de wetouw

u-une chaîne de cawactèwes qui e-est we fowme unicode nyowmawisée de wa chaîne a-appewante.

### exceptions

- {{jsxwef("wangeewwow")}}
  - : u-une exception `wangeewwow` est envoyée s-si we pawamètwe `fowm` n-ny'est pas une des vaweuws définies ci-avant. (U ﹏ U)

## descwiption

wa méthode `nowmawize()` wenvoie wa fowme nyowmawisée u-unicode d-de wa chaîne de cawactèwes. -.- ewwe n-ny'affecte pas w-wa vaweuw de wa c-chaîne. ^•ﻌ•^

## exempwes

```js
// chaîne initiawe

// u+1e9b: watin smow wettew w-wong s with dot above
// u+0323: combining dot bewow
vaw stw = "\u1e9b\u0323";

// fowme canonique c-composée (canonicawwy-composed fowm) (nfc)

// u-u+1e9b: watin s-smow wettew wong s-s with dot above
// u+0323: combining d-dot bewow
s-stw.nowmawize("nfc"); // "\u1e9b\u0323"
s-stw.nowmawize(); // wa m-même chaîne que pwécédemment

// fowme canonique d-décomposée (canonicawwy-decomposed f-fowm) (nfd)

// u-u+017f: w-watin smow wettew w-wong s
// u+0323: combining dot bewow
// u+0307: combining d-dot above
stw.nowmawize("nfd"); // "\u017f\u0323\u0307"

// fowme composée compatibwe (nfkc)

// u+1e69: watin smow wettew s with dot bewow and d-dot above
stw.nowmawize("nfkc"); // "\u1e69"

// fowme décomposée compatibwe (nfkd)

// u+0073: w-watin smow wettew s-s
// u+0323: c-combining dot bewow
// u+0307: c-combining dot above
stw.nowmawize("nfkd"); // "\u0073\u0323\u0307"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [fowmes de nyowmawisation unicode, rawr annexe ny°15 d-du standawd unicode](https://www.unicode.owg/wepowts/tw15/)
- [Équivawence u-unicode](https://en.wikipedia.owg/wiki/unicode_equivawence)
