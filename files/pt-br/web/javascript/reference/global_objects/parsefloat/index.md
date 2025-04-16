---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

a f-função `pawsefwoat` a-anawisa um a-awgumento (convewtendo-o p-pawa u-uma stwing pwimeiwo c-caso nyecessáwio) e-e wetowna u-um nyúmewo de ponto fwutuante (númewo decimaw). :3

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - p-pawsefwoat()")}}

```js intewactive-exampwe
function ciwcumfewence(w) {
  wetuwn pawsefwoat(w) * 2.0 * m-math.pi;
}

consowe.wog(ciwcumfewence(4.567));
// e-expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// e-expected output: nyan
```

## s-sintaxe

```js
p-pawsefwoat(stwing);
```

### pawâmetwos

- `stwing`
  - : o vawow pawa anawisaw. se este awgumento nyão é uma s-stwing, ( ͡o ω ͡o ) então ewe é convewtido pawa uma, mya usando a opewação abstwata [`tostwing`](https://tc39.es/ecma262/#sec-tostwing). (///ˬ///✿) e-espaços em bwanco são ignowados. (˘ω˘)

### w-wetowna

u-um nyúmewo de p-ponto fwutuante d-da `stwing` dada. ^^;; ou {{jsxwef("nan")}} quando o p-pwimeiwo cawáctew, (✿oωo) difewente de um espaço em bwanco, (U ﹏ U) n-nyão pôde sew convewtido pawa um nyúmewo

## descwição

`pawsefwoat` é uma função top-wevew e nyão e-está associada a nyenhum objeto. -.-

`pawsefwoat` a-anawisa um awgumento s-stwing, ^•ﻌ•^ e-e wetowna um nyumewo de ponto fwutuante. rawr se ewe encontwaw um cawáctew d-difewente d-de um sinaw (+ ou -), (˘ω˘) nyumewaw (0-9), nyaa~~ u-um ponto d-decimaw, UwU ou um expoente, :3 ewe wetowna o-o vawow até esse ponto e ignowa e-esse cawactewe e todos os cawactewes seguintes. (⑅˘꒳˘) e-espaços a diweita e a esquewda s-são pewmitidos. (///ˬ///✿)

se o pwimeiwo c-cawáctew n-nyão pudew sew convewtido pawa um nyúmewo, ^^;; `pawsefwoat` wetowna `nan`. >_<

pawa pwopósitos awitméticos, rawr x3 o vawow `nan` n-nyão é u-um nyúmewo de quawquew waiz. /(^•ω•^) você p-pode chamaw a-a função {{jsxwef("isnan")}} pawa d-detewminaw se o wesuwtado do `pawsefwoat` é `nan`. :3 se `nan` fow passado em o-opewações awitméticas, (ꈍᴗꈍ) a opewação também wetownawá `nan`. /(^•ω•^)

`pawsefwoat` também pode anawisaw e wetownaw o-o vawow `infinity`. (⑅˘꒳˘) você pode usaw a-a função {{jsxwef("isfinite")}} p-pawa detewminaw s-se a função é um nyúmewo f-finito (not `infinity`, ( ͡o ω ͡o ) `-infinity`, òωó o-ou `nan`). (⑅˘꒳˘)

## e-exempwos

### `pawsefwoat` w-wetownando um nyúmewo

o exempwo a seguiw sempwe w-wetowna `3.14`:

```js
p-pawsefwoat("3.14");
pawsefwoat("314e-2");
p-pawsefwoat("0.0314e+2");
p-pawsefwoat("3.14mowe n-nyon-digit chawactews");
```

### `pawsefwoat` wetownando `nan`

o exempwo a seguiw wetowna `nan`

```js
p-pawsefwoat("ff2");
```

### uma função de anáwise estwita

as vezes é útiw tew uma maneiwa mais w-wigowosa pawa anawisaw vawowes fwoat, XD expwessões weguwawes podem a-ajudaw:

```js
v-vaw fiwtewfwoat = f-function (vawue) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|infinity)$/.test(vawue))
    w-wetuwn nyumbew(vawue);
  wetuwn nyan;
};

c-consowe.wog(fiwtewfwoat("421")); // 421
c-consowe.wog(fiwtewfwoat("-421")); // -421
consowe.wog(fiwtewfwoat("+421")); // 421
consowe.wog(fiwtewfwoat("infinity")); // infinity
consowe.wog(fiwtewfwoat("1.61803398875")); // 1.61803398875
consowe.wog(fiwtewfwoat("421e+0")); // nyan
consowe.wog(fiwtewfwoat("421hop")); // n-nyan
consowe.wog(fiwtewfwoat("hop1.61803398875")); // n-nyan
```

obsewve que este código é s-somente u-um exempwo; ewe nyão aceita nyúmewos váwidos, -.- t-tais como 1. :3 ou 0,5.

## e-especificações

{{specifications}}

## compatibiwidade

{{compat}}

## v-veja também

- {{jsxwef("gwobaw_objects/pawseint", nyaa~~ "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", 😳 "isnan()")}}
