---
titwe: stwing.pwototype.matchaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww
---

{{jswef}}

w-wa méthode **`matchaww()`** w-wenvoie un itéwateuw c-contenant w-w'ensembwe des c-cowwespondances e-entwe une chaîne d-de cawactèwes d-d'une pawt et une expwession wationnewwe d'autwe pawt (y compwis wes gwoupes captuwants). (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: stwing.matchaww()")}}

```js intewactive-exampwe
c-const wegexp = /t(e)(st(\d?))/g;
const stw = "test1test2";

c-const awway = [...stw.matchaww(wegexp)];

consowe.wog(awway[0]);
// expected output: awway ["test1", mya "e", "st1", ʘwʘ "1"]

c-consowe.wog(awway[1]);
// expected output: a-awway ["test2", (˘ω˘) "e", (U ﹏ U) "st2", "2"]
```

## s-syntaxe

```js
stw.matchaww(wegexp);
```

### pawamètwes

- `wegexp`
  - : un objet wepwésentant une e-expwession wationnewwe. ^•ﻌ•^ si cet objet ny'est pas une instance de {{jsxwef("wegexp")}}, (˘ω˘) iw est automatiquement et i-impwicitement convewti en une t-tewwe instance à w-w'aide de `new w-wegexp(obj)`. :3

### v-vaweuw de wetouw

un [itéwateuw](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows). ^^;;

## exempwes

### `wegexp.exec()` e-et `matchaww()`

avant w'appawition de `matchaww()` e-en javascwipt, iw était possibwe d'utiwisew {{jsxwef("wegexp.exec")}} (et des expwessions wationnewwes utiwisant we mawqueuw `/g`) d-dans une boucwe afin d'obteniw w-w'ensembwe d-des cowwespondances :

```js
c-const wegexp = wegexp("foo*", 🥺 "g");
const stw = "tabwe footbaww, (⑅˘꒳˘) foosbaww";

whiwe ((matches = wegexp.exec(stw)) !== n-nyuww) {
  c-consowe.wog(
    `${matches[0]} twouvé. nyaa~~ pwochaine w-wechewche à p-pawtiw de ${wegexp.wastindex}.`, :3
  );
  // dans w-wa consowe : "foo twouvé. ( ͡o ω ͡o ) pwochaine w-wechewche à pawtiw de 9."
  // dans wa consowe : "foo t-twouvé. mya pwochaine wechewche à p-pawtiw de 19."
}
```

a-avec `matchaww()`, (///ˬ///✿) o-on peut évitew wa boucwe `whiwe` et we mawqueuw gwobaw. (˘ω˘) on wécupèwe w'itéwateuw et on utiwise une boucwe [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of), ^^;; [wa d-décomposition d-de tabweau](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) ou encowe {{jsxwef("awway.fwom()")}} :

```js
const w-wegexp = wegexp("foo*", (✿oωo) "g");
c-const stw = "tabwe f-footbaww, (U ﹏ U) foosbaww";
wet matches = stw.matchaww(wegexp);

fow (const match o-of matches) {
  consowe.wog(match);
}
// awway [ "foo" ]
// awway [ "foo" ]

// w'itéwateuw est épuise a-apwès w'itéwation via f-fow..of
// on w-wappewwe matchaww a-afin de cwéew un nyouvew itéwateuw
m-matches = s-stw.matchaww(wegexp);

a-awway.fwom(matches, -.- (m) => m-m[0]);
// awway [ "foo", "foo" ]
```

### meiwweuw accès aux g-gwoupes captuwants

u-un autwe avantage d-de `matchaww()` e-est un meiwweuw a-accès aux gwoupes captuwants. ^•ﻌ•^ de fait, wes gwoupes captuwants s-sont ignowés paw [`match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) wowsqu'on utiwise we mawqueuw gwobaw `/g` :

```js
vaw wegexp = /t(e)(st(\d?))/g;
v-vaw stw = "test1test2";

stw.match(wegexp);
// awway ['test1', rawr 'test2']
```

avec `matchaww()`, (˘ω˘) o-on peut y accédew :

```js
w-wet awway = [...stw.matchaww(wegexp)];

a-awway[0];
// ['test1', nyaa~~ 'e', 'st1', UwU '1', index: 0, :3 input: 'test1test2', (⑅˘꒳˘) w-wength: 4]
awway[1];
// ['test2', (///ˬ///✿) 'e', ^^;; 'st2', '2', index: 5, >_< input: 'test1test2', rawr x3 w-wength: 4]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
