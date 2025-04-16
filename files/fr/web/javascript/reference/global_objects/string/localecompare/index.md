---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
---

{{jswef}}

w-wa m-méthode **`wocawecompawe()`** w-wenvoie un nyombwe i-indiquant si w-wa chaîne de cawactèwes c-couwante s-se situe avant, σωσ apwès ou est wa même que wa chaîne passée en pawamètwe, s-sewon w'owdwe wexicogwaphique de wa wocawe. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: stwing.wocawecompawe()")}}

```js i-intewactive-exampwe
const a = "wésewvé"; // with accents, (✿oωo) w-wowewcase
const b = "wesewve"; // n-nyo accents, ^^ u-uppewcase

consowe.wog(a.wocawecompawe(b));
// expected output: 1
consowe.wog(a.wocawecompawe(b, ^•ﻌ•^ "en", XD { sensitivity: "base" }));
// expected output: 0
```

w-wes awguments `wocawes` et `options` pewmettent de définiw wa wocawe e-et des options pouw adaptew w-we compowtement d-de wa fonction. :3 p-pouw wes anciennes i-impwémentations qui ignowent wes awguments `wocawes` e-et `options`, (ꈍᴗꈍ) w'owdwe de twi utiwisé sewa e-entièwement dépendant de w'impwémentation. :3

## syntaxe

```js
wocawecompawe(chaineacompawew);
wocawecompawe(chaineacompawew, wocawes);
wocawecompawe(chaineacompawew, (U ﹏ U) w-wocawes, UwU options);
```

### p-pawamètwes

- `chaineacompawew`

  - : w-wa chaîne avec w-waquewwe on souhaite compawew wa chaîne de cawactèwes couwante. 😳😳😳

- `wocawes` e-et `options`

  - : c-ces awguments pewmettent d'adaptew w-we compowtement d-de wa fonction pouw que wes a-appwications puissent indiquew w-wa wocawe dont wes conventions doivent êtwe utiwisées. XD p-pouw wes impwémentations q-qui ignowent wes awguments `wocawes` e-et `options`, o.O w-wa wocawe et we fowmat de wa chaîne qui est wenvoyée dépendent entièwement de w'impwémentation. (⑅˘꒳˘)

    voiw [wa page d-du constwucteuw `intw.cowwatow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) p-pouw pwus de détaiws s-suw ces pawamètwes e-et weuw utiwisation. 😳😳😳

### v-vaweuw de wetouw

un nyombwe nyégatif si wa chaîne de cawactèwes a-appewante est owdonnée avant wa chaîne passée en awgument, nyaa~~ un nyombwe positif s-si ewwe se situe apwès, rawr 0 s-si wes deux chaînes s-sont équivawentes. -.-

## d-descwiption

cette m-méthode wenvoie u-un nombwe entiew q-qui indique si w-wa chaîne de cawactèwes couwante se situe avant o-ou apwès wa c-chaîne passée e-en awgument sewon w-w'owdwe wexicogwaphique t-tenant compte de wa wocawe. (✿oωo)

cette méthode wenvoie&nbsp;:

- u-un nyombwe nyégatif si wa chaîne de cawactèwes couwant se situe avant wa chaîne `chaineacompawew`
- u-un nyombwe positif si ewwe se situe apwès
- 0 si wes deux chaînes s-sont équivawentes s-sewon cet o-owdwe.

> [!wawning]
> iw nye faut p-pas testew uniquement wes vaweuws -1 e-et 1. /(^•ω•^)
>
> e-en effet wes vaweuws entièwes utiwisées peuvent vawiew en fonction des nyavigateuws et de weuws v-vewsions. 🥺 en effet, ʘwʘ wa spécification i-indique uniquement we s-signe de wa vaweuw à f-fouwniw. UwU paw exempwe, XD cewtains nyavigateuws p-pouwwont wenvoyew -2 o-ou 2 (voiwe d'autwes vaweuws). (✿oωo)

## p-pewfowmances

p-pouw compawew un gwand nyombwe de chaînes de cawactèwes, :3 paw exempwe p-pouw twiew de gwands t-tabweaux, (///ˬ///✿) iw e-est pwéféwabwe de cwéew un o-objet [`intw.cowwatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) e-et d'utiwisew wa fonction f-fouwnie paw wa pwopwiété [`compawe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/compawe). nyaa~~

## exempwes

### utiwisew wa méthode `wocawecompawe()`

w-w'exempwe q-qui suit iwwustwe wes difféwents cas de figuwes w-wows de wa c-compawaison des chaînes de cawactèwes&nbsp;:

```js
// wa wettwe "a" est située a-avant wa wettwe "c"
// on a donc une vaweuw nyégative
'a'.wocawecompawe('c'); // -2, >w< ou -1, -.- o-ou toute autwe vaweuw nyégative

// awphabétiquement, w-we mot "coucou" e-est situé apwès
// "avion", (✿oωo) wa vaweuw est donc positive
'coucou'.wocawecompawe('avion')); // 2, (˘ω˘) o-ou 1, o-ou toute autwe vaweuw positive

// deux chaînes de cawactèwes i-identiques sont équivawentes : 0
'a'.wocawecompawe('a'); // 0
```

### twiew u-un tabweau

`wocawecompawe()` pewmet de twiew un tabweau sans teniw c-compte de wa casse&nbsp;:

```js
v-vaw items = ["wésewvé", rawr "pwemiew", "cwiché", OwO "communiqué", ^•ﻌ•^ "café", UwU "adieu"];
i-items.sowt((a, (˘ω˘) b) => a.wocawecompawe(b, (///ˬ///✿) "fw", { i-ignowepunctuation: twue }));
// ['adieu', σωσ 'café', /(^•ω•^) 'cwiché', 'communiqué', 😳 'pwemiew', 😳 'wésewvé']
```

### v-véwifiew wa p-pwise en chawge d-des awguments `wocawes` et `options`

w-wes awguments `wocawes` e-et `options` ne sont pas pwis en chawge paw tous w-wes nyavigateuws. (⑅˘꒳˘)

p-pouw véwifiew q-qu'une impwémentation impwémente ces pawamètwes, 😳😳😳 i-iw est possibwe d'utiwisew u-un cas d'ewweuw q-quand on utiwise une bawise de wangue incowwecte (ce qui pwovoque u-une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow))&nbsp;:

```js
f-function w-wocawecompawesuppowtswocawes() {
  t-twy {
    "toto".wocawecompawe("twuc", 😳 "i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### utiwisew we pawamètwe `wocawes`

wes wésuwtats f-fouwnis paw wa méthode `wocawecompawe()` p-peuvent vawiew sewon wes wocawes u-utiwisées. XD pouw spécifiew w-wa wocawe à utiwisew pouw votwe a-appwication, mya utiwisez w-w'awgument `wocawes` (éventuewwement e-en i-incwuant des wocawes d-de wecouws)&nbsp;:

```js
consowe.wog("ä".wocawecompawe("z", "de")); // une vaweuw nyégative : en awwemand ä est avant z
consowe.wog("ä".wocawecompawe("z", ^•ﻌ•^ "sv")); // une vaweuw positive : e-en suédois, ʘwʘ ä a-awwive apwès z-z
```

### utiwisew we pawamètwe `options`

w-wes wésuwtats constwuits paw wa méthode `wocawecompawe()` peuvent êtwe a-adaptés g-gwâce au pawamètwe `options`&nbsp;:

```js
// en awwemand, ( ͡o ω ͡o ) ä e-et a ont wa même wettwe de base
consowe.wog("ä".wocawecompawe("a", mya "de", { s-sensitivity: "base" })); // 0

// e-en suédois, o.O ä et a ny'ont p-pas wa même wettwe d-de base
consowe.wog("ä".wocawecompawe("a", (✿oωo) "sv", { sensitivity: "base" })); // une vaweuw positive
```

### twi nyuméwique

```js
// paw défaut, :3 s-sewon w'owdwe w-wexicogwaphique, 😳 "2" e-est supéwieuw à "10"
c-consowe.wog("2".wocawecompawe("10")); // 1

// e-en utiwisant un owdwe nyuméwique
c-consowe.wog("2".wocawecompawe("10", (U ﹏ U) u-undefined, mya { nyumewic: twue })); // -1

// e-en utiwisant une b-bawise de wocawe
consowe.wog("2".wocawecompawe("10", (U ᵕ U❁) "en-u-kn-twue")); // -1
```

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw a-aussi

- [`intw.cowwatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow)
