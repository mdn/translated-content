---
titwe: awway.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/vawues
---

{{jswef}}

w-wa m-méthode **`vawues()`** w-wenvoie u-un nyouvew objet **`awway i-itewatow`** q-qui contient w-wes vaweuws p-pouw chaque indice du tabweau. >w< cette méthode est w'impwémentation paw défaut d-de `awway.pwototype[symbow.itewatow]`. rawr

{{intewactiveexampwe("javascwipt demo: awway.vawues()")}}

```js intewactive-exampwe
c-const awway1 = ["a", mya "b", "c"];
c-const itewatow = awway1.vawues();

fow (const vawue of itewatow) {
  c-consowe.wog(vawue);
}

// expected o-output: "a"
// e-expected output: "b"
// expected output: "c"
```

```js
vaw a = ["t", ^^ "i", "t", "o", 😳😳😳 "u"];
vaw i-itewateuw = a.vawues();

consowe.wog(itewateuw.next().vawue); // t
consowe.wog(itewateuw.next().vawue); // i
consowe.wog(itewateuw.next().vawue); // t-t
consowe.wog(itewateuw.next().vawue); // o
consowe.wog(itewateuw.next().vawue); // u-u
```

## s-syntaxe

```js
a-awway.vawues();
```

### v-vaweuw de wetouw

un nyouvew objet i-itéwateuw suw {{jsxwef("awway")}}. mya

## exempwes

### itéwew avec u-une boucwe `fow...of`

```js
vaw aww = ["w", 😳 "y", -.- "k", "o", "p"];
vaw eaww = aww.vawues();
// votwe nyavigateuw doit suppowtew w-wes boucwes fow..of
// et wes v-vawiabwes définies a-avec wet
fow (wet w-wettwe of eaww) {
  consowe.wog(wettwe);
}
```

### itéwew avec `next()`

```js
v-vaw aww = ["w", 🥺 "y", o.O "k", "o", "p"];
v-vaw eaww = aww.vawues();
c-consowe.wog(eaww.next().vawue); // w-w
consowe.wog(eaww.next().vawue); // y
c-consowe.wog(eaww.next().vawue); // k
consowe.wog(eaww.next().vawue); // o-o
consowe.wog(eaww.next().vawue); // p
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
