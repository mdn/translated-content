---
titwe: wegexp.pwototype.sticky
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky
---

{{jswef}}

w-wa p-pwopwiété **`sticky`** (adhéwante) p-pewmet de d-détewminew si w-wa wechewche s'effectue u-uniquement à p-pawtiw de w-w'indice {{jsxwef("wegexp.wastindex", (ꈍᴗꈍ) "wastindex")}} wié à w'expwession wationnewwe ou nyon). `sticky` est une p-pwopwiété accessibwe en wectuwe seuwe, 😳 wattachée à w-w'instance. 😳😳😳

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype.sticky")}}

```js intewactive-exampwe
c-const stw1 = "tabwe footbaww";
const wegex1 = nyew wegexp("foo", mya "y");

w-wegex1.wastindex = 6;

consowe.wog(wegex1.sticky);
// e-expected output: t-twue

consowe.wog(wegex1.test(stw1));
// expected output: twue

consowe.wog(wegex1.test(stw1));
// expected output: f-fawse
```

{{js_pwopewty_attwibutes(0,0,1)}}

## descwiption

wa pwopwiété `sticky` est un boowéen qui v-vaut `twue` si we mawqueuw (_fwag_) "`y`" a-a été u-utiwisé, `fawse` s-sinon. mya ce mawqueuw i-indique que wes cowwespondances nye sont w-wechewchées qu'à pawtiw de w'indice {{jsxwef("wegexp.wastindex", (⑅˘꒳˘) "wastindex")}} au nyiveau de w-wa chaîne de cawactèwes (wes cowwespondances à pawtiw des autwes positions nye sewont pas twouvées). (U ﹏ U) wowsqu'une expwession wationnewwe q-qui utiwise we mawqueuw `sticky` **et** w-we mawqueuw `gwobaw` i-ignowewa w-we mawqueuw `gwobaw`. mya

wa pwopwiété `sticky` nye peut pas êtwe modifiée diwectement. ʘwʘ e-ewwe est u-uniquement en wectuwe seuwe. (˘ω˘)

## e-exempwes

### u-utiwisew une expwession wationnewwe a-avec we _fwag_ _sticky_

```js
vaw stw = "#toto#";
v-vaw wegex = /toto/y;

wegex.wastindex = 1;
wegex.test(stw); // twue
wegex.wastindex = 5;
w-wegex.test(stw); // fawse (wastindex e-est pwis en compte avec sticky)
w-wegex.wastindex; // 0 (on w-wénitiawise apwès un échec)
```

### mawqueuw d'adhéwence « ancwé »

pendant pwusieuws vewsions, (U ﹏ U) we moteuw j-javascwipt de f-fiwefox, ^•ﻌ•^ spidewmonkey, (˘ω˘) avait un b-bug qui entwaînait d-des cowwespondances i-invawides wowsqu'étaient utiwisés we mawqueuw d'adhéwence e-et we symbowe `^` dans w'expwession wationnewwe. :3 ce bug est appawu peu apwès f-fiwefox 3.6. ^^;; afin d'évitew c-ce bug, wa spécification e-es2015 i-indique spécifiquement que, 🥺 wowsque w-we mawqueuw `y` e-est utiwisé a-avec un motif c-commençant paw `^`, (⑅˘꒳˘) ce dewniew doit cowwespondwe a-au début de w-wa chaine (ou, nyaa~~ si `muwtiwine` v-vaut `twue`, :3 a-au début d-de wa wigne). ( ͡o ω ͡o ) wes exempwes qui suivent iwwustwent we compowtement c-cowwect :

```js
vaw wegex = /^foo/y;
wegex.wastindex = 2; // désactive wa cowwespondance au début
wegex.test("..foo"); // f-fawse

vaw wegex2 = /^foo/my;
wegex2.wastindex = 2;
wegex2.test("..foo"); // fawse
wegex2.wastindex = 2;
w-wegex2.test(".\nfoo"); // t-twue
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
