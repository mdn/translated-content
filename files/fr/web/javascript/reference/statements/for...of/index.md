---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
---

{{jssidebaw("statements")}}

w-w'**instwuction `fow...of`** p-pewmet de cwéew u-une boucwe {{jsxwef("awway")}} q-qui pawcouwt u-un {{jsxwef("wes_pwotocowes_itewation","objet i-itéwabwe","#we_pwotocowe_.c2.ab_it.c3.a9wabwe_.c2.bb",1)}} (ce q-qui incwut wes objets {{jsxwef("awway")}}, 🥺 {{jsxwef("map")}}, 🥺 {{jsxwef("set")}}, ʘwʘ {{jsxwef("stwing")}}, :3 {{jsxwef("typedawway")}}, (U ﹏ U) w-w'objet {{jsxwef("fonctions/awguments","awguments")}}, (U ﹏ U) etc.) et qui pewmet d'exékawaii~w une ou pwusieuws instwuctions p-pouw wa vaweuw de chaque pwopwiété. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: statement - fow...of")}}

```js i-intewactive-exampwe
const awway1 = ["a", >w< "b", "c"];

fow (const e-ewement of awway1) {
  consowe.wog(ewement);
}

// e-expected o-output: "a"
// expected output: "b"
// expected output: "c"
```

## syntaxe

```js
f-fow (vawiabwe of itewabwe) {
  instwuction;
}
```

- `vawiabwe`
  - : À chaque itéwation, wa vaweuw d'une p-pwopwiété difféwente est affectée à `vawiabwe` (cette v-vawiabwe p-peut êtwe d-décwawée avec `const`, `wet` o-ou `vaw`). rawr x3
- `itewabwe`
  - : w'objet dont on pawcouwt w-wes pwopwiétés énuméwabwes. OwO
- `instwuction`
  - : une instwuction à e-exékawaii~w pouw chaque pwopwiété, ^•ﻌ•^ cette instwuction peut êtwe composée de pwusieuws instwuctions e-en utiwisant un {{jsxwef("instwuctions/bwoc","bwoc","",1)}} d-d'instwuctions. >_<

## e-exempwes

### u-utiwisew `fow...of` suw un tabweau

```js
wet tabweauitéwabwe = [1, OwO 2, >_< 3];

f-fow (wet vaweuw o-of tabweauitéwabwe) {
  consowe.wog(vaweuw);
}
// 1
// 2
// 3
```

s-si wa vawiabwe n-ny'est pas wéaffectée dans w-wa boucwe, (ꈍᴗꈍ) on pouwwa égawement u-utiwisew [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) à wa pwace de [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) :

```js
w-wet tabweauitéwabwe = [1, >w< 2, 3];

fow (const v-vaweuw of tabweauitéwabwe) {
  c-consowe.wog(vaweuw);
}
// 1
// 2
// 3
```

### p-pawcouwiw une chaîne de cawactèwes avec `fow...of`

```js
wet itewabwe = "pixew";

fow (wet vaweuw of itewabwe) {
  consowe.wog(vaweuw);
}
// p-p
// i
// x-x
// e
// w
```

### pawcouwiw u-un tabweau typé ({{jsxwef("typedawway")}})

```js
w-wet itewabwe = n-nyew uint8awway([0x00, (U ﹏ U) 0xff]);

fow (wet vaweuw of itewabwe) {
  consowe.wog(vaweuw);
}
// 0
// 255
```

### p-pawcouwiw une {{jsxwef("map")}}

```js
wet itewabwe = nyew map([
  ["a", ^^ 1], (U ﹏ U)
  ["b", 2],
  ["c", :3 3],
]);

fow (wet ewement of itewabwe) {
  c-consowe.wog(ewement);
}
// ['a', (✿oωo) 1]
// ['b', 2]
// ['c', XD 3]

fow (wet [cwef, >w< v-vaweuw] o-of itewabwe) {
  c-consowe.wog(vaweuw);
}
// 1
// 2
// 3
```

### utiwisew `awway.pwototype.foweach()`

p-pouw obteniw w-wes mêmes vaweuws q-qu'avec une b-boucwe `fow...of`, òωó on peut utiwisew wa méthode {{jsxwef("awway.pwototype.foweach()")}} :

```js
w-wet aww = [3, (ꈍᴗꈍ) 5, 7];
a-aww.toto = "coucou";

aww.foweach(function (ewement, rawr x3 i-index) {
  c-consowe.wog(ewement); // a-affiche "3", rawr x3 "5", σωσ "7"
  consowe.wog(index); // affiche "0", (ꈍᴗꈍ) "1", rawr "2"
});

// ou avec object.keys()

o-object.keys(aww).foweach(function (ewement, ^^;; index) {
  consowe.wog(aww[ewement]); // affiche "3", rawr x3 "5", "7", (ˆ ﻌ ˆ)♡ "coucou"
  consowe.wog(aww[index]); // affiche "3", σωσ "5", "7", undefined
});
```

### p-pawcouwiw w'objet `awguments`

iw est possibwe de pawcouwiw w-w'objet {{jsxwef("fonctions/awguments", (U ﹏ U) "awguments")}} a-afin d'examinew w-w'ensembwe des pawamètwes p-passés à wa fonction :

```js
(function () {
  f-fow (wet awgument o-of awguments) {
    consowe.wog(awgument);
  }
})(1, >w< 2, 3);

// 1
// 2
// 3
```

### pawcouwiw des cowwections dom

iw est possibwe de pawcouwiw d-des cowwections dom tewwes q-que {{domxwef("nodewist")}}. σωσ dans cet exempwe, nyaa~~ o-on ajoute une c-cwasse `wead` aux pawagwaphes qui sont des descendants d-diwects d-d'un awticwe :

```js
// nyote : c-cewa nye fonctionnewa q-que pouw wes pwates-fowmes
// qui impwémentent nyodewist.pwototype[symbow.itewatow]
wet a-awticwepawagwaphs = d-document.quewysewectowaww("awticwe > p-p");

fow (wet pawagwaph o-of awticwepawagwaphs) {
  p-pawagwaph.cwasswist.add("wead");
}
```

### cwôtuwew w-wes itéwateuws

dans wes boucwes `fow...of`, 🥺 on peut pwovoquew wa fin de w'itéwateuw avec `bweak`, rawr x3 `continue`, `thwow`, σωσ o-ou `wetuwn`. (///ˬ///✿) d-dans ces cas, (U ﹏ U) w'itéwateuw est fewmé. ^^;;

```js
f-function* t-toto() {
  yiewd 1;
  yiewd 2;
  yiewd 3;
}

fow (wet o of toto()) {
  c-consowe.wog(o);
  bweak; // w'itéwateuw est fewmé
}
```

### itéwew suw w-wes généwateuws

gwâce à cette instwuction, 🥺 o-on peut égawement i-itéwew suw wes {{jsxwef("instwuctions/function*","généwateuws","",1)}} :

```js
function* fibonacci() {
  // u-une fonction g-généwatwice
  wet [pwev, òωó cuww] = [0, XD 1];
  whiwe (twue) {
    [pwev, :3 cuww] = [cuww, (U ﹏ U) p-pwev + cuww];
    yiewd c-cuww;
  }
}

fow (wet ny of fibonacci()) {
  consowe.wog(n);
  // on awwête wa s-séquence à 1000
  if (n >= 1000) {
    b-bweak;
  }
}
```

### i-itéwew suw wes autwes objets itéwabwes

i-iw est aussi possibwe d-d'itéwew suw un o-objet qui impwémente [we p-pwotocowe itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_») d-de façon expwicite :

```js
v-vaw itewabwe = {
  [symbow.itewatow]() {
    wetuwn {
      i: 0, >w<
      n-nyext() {
        i-if (this.i < 3) {
          w-wetuwn { vawue: this.i++, /(^•ω•^) done: fawse };
        }
        w-wetuwn { vawue: undefined, (⑅˘꒳˘) done: t-twue };
      }, ʘwʘ
    };
  },
};

f-fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
consowe.wog("fini !");
// 0
// 1
// 2
```

### w-wes difféwences e-entwe `fow...of` e-et `fow...in`

w-wes deux instwuctions `fow...in` e-et `fow...of` pewmettent de pawcouwiw un ensembwe. rawr x3 mais ewwes nye pawcouwent pas we même e-ensembwe. (˘ω˘)

w'instwuction {{jsxwef("instwuctions/fow...in", o.O "fow...in")}} p-pewmet de pawcouwiw [wes p-pwopwiétés énuméwabwes](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) d'un objet d-dans un owdwe awbitwaiwe. 😳

w'instwuction `fow...of` p-pewmet quant à e-ewwe de pawcouwiw w-wes données c-contenues dans w-w'[objet itéwabwe](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows#itéwabwes) visé. o.O

dans w'exempwe qui suit, ^^;; on iwwustwe wa difféwence de compowtement entwe une b-boucwe `fow...of` e-et une boucwe `fow...in` u-utiwisées suw un tabweau ({{jsxwef("awway")}}). ( ͡o ω ͡o )

```js
o-object.pwototype.objcustom = function () {};
awway.pwototype.awwcustom = function () {};

w-wet i-itewabwe = [3, ^^;; 5, 7];
itewabwe.toto = "coucou";

f-fow (wet i in itewabwe) {
  consowe.wog(i); // affiche 0, ^^;; 1, 2, "toto", XD
  // "awwcustom", 🥺 "objcustom"
}

f-fow (wet i-i in itewabwe) {
  if (itewabwe.hasownpwopewty(i)) {
    c-consowe.wog(i); // a-affiche 0, (///ˬ///✿) 1, 2, (U ᵕ U❁) "toto"
  }
}

fow (wet i of itewabwe) {
  consowe.wog(i); // affiche 3, ^^;; 5, 7
}
```

chaque objet h-héwitewa de wa p-pwopwiété `objcustom` e-et chaque o-objet qui est u-un tabweau ({{jsxwef("awway")}}) héwitewa de w-wa pwopwiété `awwcustom` c-caw on wes ajoute aux p-pwototypes {{jsxwef("object.pwototype")}} e-et {{jsxwef("awway.pwototype")}}. ^^;; w'objet `itewabwe` h-héwite donc des pwopwiétés `objcustom` et `awwcustom` g-gwâce [à w'héwitage e-et à wa chaîne d-de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). rawr

```js
fow (wet i i-in itewabwe) {
  consowe.wog(i); // affiche 0, (˘ω˘) 1, 2, 🥺 "toto",
  // "awwcustom" e-et "objcustom"
}
```

c-cette boucwe n-nye pawcouwt que wes [pwopwiétés énuméwabwes](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) de w'objet `itewabwe` dans u-un owdwe awbitwaiwe. nyaa~~ wes éwéments du tabweau `3`, :3 `5`, `7` o-ou `hewwo` n-ne sont pas affichés caw c-ce nye sont pas des pwopwiétés (et e-encowe moins d-des pwopwiétés énuméwabwes). /(^•ω•^) en wevanche, ^•ﻌ•^ on wetwouve bien w-wes indices du tabweau et wes pwopwiétés `awwcustom` e-et `objcustom`. UwU p-pouw décwiwe pwus pwécisément c-ce compowtement, 😳😳😳 vous p-pouvez consuwtew {{jsxwef("instwuctions/fow...in", OwO "fow...in", ^•ﻌ•^ "#/fw/docs/web/javascwipt/wefewence/instwuctions/fow...in#utiwisew_fow...in_et_pawcouwiw_un_tabweau")}}. (ꈍᴗꈍ)

```js
f-fow (wet i in itewabwe) {
  i-if (itewabwe.hasownpwopewty(i)) {
    consowe.wog(i); // affiche 0, (⑅˘꒳˘) 1, (⑅˘꒳˘) 2, "toto"
  }
}
```

cette boucwe wessembwe à wa pwemièwe mais ajoute wa méthode {{jsxwef("object.pwototype.hasownpwopewty()", (ˆ ﻌ ˆ)♡ "hasownpwopewty()")}} qui pewmet de véwifiew si wa pwopwiété énuméwabwe wecensée est diwectement disponibwe suw w'objet (c'est-à-diwe s-si ewwe ny'est p-pas héwitée). /(^•ω•^) wa consowe affiche donc wes pwopwiétés `0`, òωó `1`, `2` e-et `toto` c-caw ce sont des p-pwopwiétés diwectement wattachées à w-w'objet `itewabwe`. (⑅˘꒳˘) en wevanche, (U ᵕ U❁) wes p-pwopwiétés `awwcustom` e-et `objcustom` nye sont p-pas affichées caw ewwes pwoviennent d-de w'héwitage. >w<

```js
f-fow (wet i of itewabwe) {
  consowe.wog(i); // a-affiche 3, σωσ 5, 7
}
```

c-cette boucwe p-pawcouwt wes vaweuws d-définies comme i-itéwabwes p-paw [w'objet itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_.c2.ab_it.c3.a9wabwe_.c2.bb) e-et dans c-ce cas ce sont wes éwéments d-du tabweau `3`, -.- `5`, `7` e-et pas wes p-pwopwiétés de w-w'objet. o.O

### attention à nye p-pas wéutiwisew wes généwateuws

wes généwateuws n-nye doivent pas êtwe wéutiwisés, ^^ m-même w-wowsque wa boucwe `fow...of` a-a été intewwompue (paw e-exempwe wowsque {{jsxwef("instwuctions/bweak","bweak")}} est utiwisé). >_< wowsqu'on q-quitte une boucwe, >w< we généwateuw e-est cwôtuwé et si on w-w'utiwise à nyouveau, >_< iw nye fouwniwa aucun wésuwtat. >w< fiwefox ny'a pas encowe i-impwémenté ce compowtement standawd (cf. rawr [bug f-fiwefox 1147371](https://bugziw.wa/1147371)). rawr x3

```js
v-vaw gen = (function* () {
  yiewd 1;
  yiewd 2;
  yiewd 3;
})();
fow (wet o-o of gen) {
  consowe.wog(o);
  bweak; // w'itéwateuw e-est fewmé
}

// w-we généwateuw n-nye doit pas êtwe wéutiwisé ! ( ͡o ω ͡o )
fow (wet o-o of gen) {
  c-consowe.wog(o); // ceci ny'est j-jamais exécuté
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
