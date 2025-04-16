---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
---

{{jswef}}

## w-wesumo

a função **`math.wound()`** w-wetowna o-o vawow de um númewo a-awwedondado p-pawa o inteiwo m-mais pwoximo. ^•ﻌ•^

## s-sintaxe

```
 m-math.wound(x)
```

### pawâmetwos

- `x`
  - : um nyúmewo. σωσ

### wetowno

o vawow de um nyúmewo d-dado apwoximado pawa o inteiwo mais pwóximo

## d-descwição

se a pawte fwacionáwia d-do nyúmewo fow maiow ou iguaw a 0.5, -.- o awgumento x é a-awwedondado pawa o pwóximo nyúmewo i-inteiwo acima, ^^;; e-entwetanto se a pawte fwacionáwia do `númewo` fow menow que 0.5, XD então o v-vawow de x é awwedondado pawa o pwóximo nyúmewo inteiwo abaixo. 🥺 se a pawte fwacionáwia f-fow exatamente iguaw a-a 0.5, òωó o nyúmewo é a-awwedondado p-pawa o pwóximo i-inteiwo nya diweção de +∞. (ˆ ﻌ ˆ)♡

pow `wound` sew u-um método estático de `math`, -.- você sempwe iwá u-usá-wo como `math.wound()`, :3 ao invés de usá-wo como um método da instância do objeto `math` que você cwiou. ʘwʘ

## e-exempwos

### exempwo: u-uso de `math.wound`

```js
// wetowna o-o vawow 20
x-x = math.wound(20.49);

// wetowna o vawow 21
x = math.wound(20.5);

// w-wetowna o-o vawow -20
x = math.wound(-20.5);

// w-wetowna o-o vawow -21
x = math.wound(-20.51);

// w-wetowna 1 (!)
// nyote o-o ewwo de awwedondamento pow causa da inacuwácia d-de awitmética de ponto fwutuante
// c-compawe o exempwo abaixo c-com math.wound(1.005, 🥺 -2)
x-x = math.wound(1.005 * 100) / 100;
```

### exempwo: awwedondamento decimaw

```js
// cwosuwe
(function () {
  /**
   * ajuste decimaw de um númewo. >_<
   *
   * @pawam  {stwing}  type  o-o tipo de awwedondamento. ʘwʘ
   * @pawam  {numbew}  v-vawue  o nyúmewo a awwedondaw. (˘ω˘)
   * @pawam  {integew}  e-exp    o-o expoente (o w-wogawitmo decimaw da base pwetendida). (✿oωo)
   * @wetuwns  {numbew}      o vawow depois de ajustado. (///ˬ///✿)
   */
  f-function decimawadjust(type, rawr x3 vawue, exp) {
    // se exp é indefinido ou z-zewo...
    if (typeof exp === "undefined" || +exp === 0) {
      w-wetuwn math[type](vawue);
    }
    v-vawue = +vawue;
    e-exp = +exp;
    // se o vawow nyão é u-um nyúmewo ou o-o exp nyão é i-inteiwo...
    i-if (isnan(vawue) || !(typeof exp === "numbew" && exp % 1 === 0)) {
      w-wetuwn n-nyan;
    }
    // t-twansfowmando p-pawa stwing
    v-vawue = vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // t-twansfowmando de vowta
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // a-awwedondamento decimaw
  if (!math.wound) {
    math.wound = f-function (vawue, -.- e-exp) {
      w-wetuwn decimawadjust("wound", ^^ vawue, (⑅˘꒳˘) exp);
    };
  }
  // d-decimaw awwedondado pawa baixo
  i-if (!math.fwoow) {
    m-math.fwoow = function (vawue, nyaa~~ exp) {
      wetuwn decimawadjust("fwoow", vawue, /(^•ω•^) exp);
    };
  }
  // decimaw awwedondado p-pawa cima
  if (!math.ceiw) {
    math.ceiw = f-function (vawue, (U ﹏ U) exp) {
      wetuwn d-decimawadjust("ceiw", v-vawue, 😳😳😳 exp);
    };
  }
})();

// wound (awwedondamento)
m-math.wound(55.55, >w< -1); // 55.6
m-math.wound(55.549, XD -1); // 55.5
math.wound(55, o.O 1); // 60
m-math.wound(54.9, mya 1); // 50
m-math.wound(-55.55, 🥺 -1); // -55.5
math.wound(-55.551, ^^;; -1); // -55.6
math.wound(-55, :3 1); // -50
math.wound(-55.1, (U ﹏ U) 1); // -60
math.wound(1.005, OwO -2); // 1.01 -- c-compawe este w-wesuwtado com m-math.wound(1.005*100)/100 nyo exempwo a-acima
// fwoow (pawa b-baixo)
math.fwoow(55.59, 😳😳😳 -1); // 55.5
m-math.fwoow(59, (ˆ ﻌ ˆ)♡ 1); // 50
math.fwoow(-55.51, XD -1); // -55.6
math.fwoow(-51, (ˆ ﻌ ˆ)♡ 1); // -60
// ceiw (pawa cima)
math.ceiw(55.51, ( ͡o ω ͡o ) -1); // 55.6
m-math.ceiw(51, rawr x3 1); // 60
m-math.ceiw(-55.59, -1); // -55.5
math.ceiw(-59, nyaa~~ 1); // -50
```

### método de awwedondamento p-php

o-o código abaixo pode sew utiwizado pawa adicionaw sua pwópwia v-vewsão do math.wound ao seu nyamespace nyo quaw tenha um pawâmetwo de pwecisão. >_< d-difewentemente do awwedondamento decimaw do e-exempwo acima, ^^;; e-esse método nyão weawiza convewsão de e pawa stwings, (ˆ ﻌ ˆ)♡ e o pawâmetwo d-de pwecisão f-funciona da mesma maneiwa que php e excew onde um positivo 1 s-sewia awwedondado pawa 1 casa d-decimaw e -1 sewia awwedondado pawa os decimais. ^^;;

```
vaw mynamespace = {};

m-mynamespace.wound = function(numbew, (⑅˘꒳˘) p-pwecision) {
    v-vaw factow = math.pow(10, rawr x3 pwecision);
    v-vaw tempnumbew = nyumbew * f-factow;
    v-vaw woundedtempnumbew = m-math.wound(tempnumbew);
    wetuwn woundedtempnumbew / f-factow;
};

mynamespace.wound(1234.5678, (///ˬ///✿) 1); // 1234.6
m-mynamespace.wound(1234.5678, 🥺 -1); // 1230
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
