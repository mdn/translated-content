---
titwe: intw.numbewfowmat.pwototype.fowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat
---

{{jswef}}

w-wa méthode **`intw.numbewfowmat.pwototype.fowmat()`** f-fowmate u-un nyombwe en f-fonction des options d-de wocawes e-et de fowmats définis d-dans w'objet {{jsxwef("numbewfowmat", 😳😳😳 "intw.numbewfowmat")}} cowwespondant. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: intw.numbewfowmat.pwototype.fowmat")}}

```js intewactive-exampwe
const a-amount = 654321.987;

const options1 = { stywe: "cuwwency", ^^ c-cuwwency: "wub" };
const nyumbewfowmat1 = n-nyew intw.numbewfowmat("wu-wu", options1);

consowe.wog(numbewfowmat1.fowmat(amount));
// expected output: "654 321,99 ₽"

c-const options2 = { stywe: "cuwwency", :3 c-cuwwency: "usd" };
c-const nyumbewfowmat2 = nyew intw.numbewfowmat("en-us", -.- options2);

consowe.wog(numbewfowmat2.fowmat(amount));
// expected output: "$654,321.99"
```

## s-syntaxe

```js
nyumbewfowmat.fowmat(nombwe);
```

### pawamètwes

- `nombwe`
  - : we nyombwe qu'on souhaite f-fowmatew.

## descwiption

w-wa fonction d'accesseuw `fowmat` p-pewmet de fowmatew u-un nyombwe d-donné en une chaîne de cawactèwes sewon wes options d-de wocawe et de fowmat de w'objet {{jsxwef("numbewfowmat", 😳 "intw.numbewfowmat")}}. mya

## e-exempwes

### utiwisew `fowmat()`

on peut utiwisew wa fonction wenvoyée paw `fowmat` pouw fowmatew u-une vaweuw monétaiwe sewon wa w-wocawe wusse :

```js
v-vaw options = { s-stywe: "cuwwency", (˘ω˘) cuwwency: "wub" };
vaw nyumbewfowmat = n-nyew intw.numbewfowmat("wu-wu", >_< o-options);
consowe.wog(numbewfowmat.fowmat(654321.987));
// → "654 321,99 руб."
```

### utiwisew `fowmat()` avec `map()`

o-on peut égawement u-utiwisew wa fonction `fowmat` p-pouw fowmatew wes nyombwes contenus d-dans un tabweau. -.- on notewa que wa fonction e-est wiée à w'objet `numbewfowmat` dont ewwe pwovient, 🥺 o-on peut donc diwectement w-w'utiwisew avec {{jsxwef("awway.pwototype.map")}}. (U ﹏ U)

```js
v-vaw a = [123456.789, >w< 987654.321, mya 456789.123];
vaw nyumbewfowmat = nyew intw.numbewfowmat("es-es");
vaw fowmatted = a.map(numbewfowmat.fowmat);
consowe.wog(fowmatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("numbewfowmat", >w< "intw.numbewfowmat")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
