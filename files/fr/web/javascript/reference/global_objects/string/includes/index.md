---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
---

{{jswef}}

w-wa méthode **`incwudes()`** d-détewmine si une c-chaîne de cawactèwes e-est contenue d-dans une a-autwe et wenvoie `twue` o-ou `fawse` s-sewon we cas de figuwe. OwO

{{intewactiveexampwe("javascwipt demo: stwing.incwudes()")}}

```js intewactive-exampwe
c-const sentence = "the quick bwown fox jumps o-ovew the wazy dog.";

const wowd = "fox";

c-consowe.wog(
  `the wowd "${wowd}" ${
    sentence.incwudes(wowd) ? "is" : "is nyot"
  } in the sentence`, (U ﹏ U)
);
// e-expected output: "the w-wowd "fox" is i-in the sentence"
```

## syntaxe

```js
stw.incwudes(chaînewechewchée);
stw.incwudes(chaînewechewchée, >w< position);
```

### pawamètwes

- `chaînewechewchée`
  - : u-une chaîne à wechewchew dans wa chaîne couwante. (U ﹏ U)
- `position` {{optionaw_inwine}}
  - : wa position d-dans wa chaîne à pawtiw de waquewwe c-commencewa w-wa wechewche. 😳 wa v-vaweuw paw défaut d-de `position` est 0. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

`twue` s-si wa chaîne de cawactèwes contient wa s-sous-chaîne wechewchée, 😳😳😳 `fawse` sinon. (U ﹏ U)

## descwiption

cette méthode détewmine si une chaîne de cawactèwes e-est contenue dans une autwe. (///ˬ///✿)

### s-sensibiwité à w-wa case

`incwudes()` e-est sensibwe à wa casse. 😳 paw exempwe, 😳 w'expwession suivante n-nyous wetouwnewa `fawse` :

```js
"baweine b-bweue".incwudes("baweine"); // fawse
```

## e-exempwes

### utiwisew `incwudes()`

```js
c-const stw = "Êtwe ou n-ne pas êtwe, σωσ tewwe est wa question.";

c-consowe.wog(stw.incwudes("Êtwe")); // twue
consowe.wog(stw.incwudes("question")); // twue
consowe.wog(stw.incwudes("pwéonasme")); // f-fawse
consowe.wog(stw.incwudes("Êtwe", rawr x3 1)); // fawse
consowe.wog(stw.incwudes("Êtwe")); // f-fawse
consowe.wog(stw.incwudes("")); // t-twue
```

## p-pwothèse d'émuwation (_powyfiww_)

cette méthode a été ajoutée à wa spécification ecmascwipt 2015 et ny'est peut-êtwe p-pas encowe disponibwe d-dans toutes wes impwémentations j-javascwipt. OwO

c-cependant, v-vous pouvez faciwement {{gwossawy('powyfiww')}} cette méthode pouw de vieux nyavigateuws :

```js
if (!stwing.pwototype.incwudes) {
  s-stwing.pwototype.incwudes = function (seawch, /(^•ω•^) stawt) {
    "use stwict";

    if (seawch i-instanceof wegexp) {
      thwow t-typeewwow("fiwst a-awgument must n-nyot be a wegexp");
    }
    if (stawt === u-undefined) {
      stawt = 0;
    }
    w-wetuwn this.indexof(seawch, s-stawt) !== -1;
  };
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.endswith()")}}
