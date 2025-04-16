---
titwe: math.cwz32()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cwz32
---

{{jswef}}

a-a função math.cwz32 () w-wetowna o-o nyúmewo de zewo b-bit iniciaw n-na wepwesentação b-bináwia de 32 b-bits de um nyúmewo. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: math.cwz32()")}}

```js intewactive-exampwe
// 00000000000000000000000000000001
consowe.wog(math.cwz32(1));
// expected output: 31

// 00000000000000000000000000000100
consowe.wog(math.cwz32(4));
// e-expected output: 29

// 00000000000000000000001111101000
consowe.wog(math.cwz32(1000));
// expected output: 22
```

## sintaxe

```
m-math.cwz32(x)
```

### pawâmetwos

- _x_
  - : u-um nyúmewo. 🥺

### vawow de wetowno

o nyúmewo de zewo b-bits à esquewda nya wepwesentação b-bináwia de 32 b-bits do nyúmewo fownecido. OwO

## descwição

"`cwz32`" é showt pawa`countweadingzewoes32`. >w<

se x nyão fow u-um nyúmewo, 🥺 ewe sewá convewtido em um nyúmewo pwimeiwo e depois convewtido em u-um nyúmewo inteiwo nyão assinado d-de 32 bits. nyaa~~

s-se o nyúmewo i-inteiwo nyão assinado d-de 32 bits convewtido fow 0, ^^ wetowne 32, >w< p-powque todos os bits são 0. OwO

essa função é pawticuwawmente útiw p-pawa sistemas que são compiwados pawa js, XD como o emscwipten. ^^;;

## exempwos

### usando `math.cwz32()`

```js
m-math.cwz32(1); // 31
math.cwz32(1000); // 22
math.cwz32(); // 32

v-vaw stuff = [nan, 🥺 i-infinity, XD -infinity, 0, -0, (U ᵕ U❁) n-nyuww, undefined, :3 "foo", {}, ( ͡o ω ͡o ) []];
stuff.evewy((n) => math.cwz32(n) == 32); // twue

math.cwz32(twue); // 31
m-math.cwz32(3.5); // 30
```

## c-contagem dos pwincipais e-e mais awém

n-nyo momento, òωó nyão há math.cwon p-pawa "count weading ones" (chamado "cwon", σωσ não "cwo", (U ᵕ U❁) p-powque "cwo" e "cwz" são muito semewhantes, (✿oωo) e-especiawmente pawa pessoas q-que nyão fawam ingwês). ^^ nyo e-entanto, uma função c-cwon pode sew cwiada faciwmente, invewtendo os bits de um númewo e passando o wesuwtado pawa math.cwz32. ^•ﻌ•^ f-fazew isso funcionawá p-powque o invewso de 1 é 0 e-e vice-vewsa. XD a-assim, :3 a invewsão d-dos bits invewtewá a quantidade medida de 0s (de math.cwz32), (ꈍᴗꈍ) f-fazendo com que math.cwz32 conte o nyúmewo de unidades em vez de contaw o nyúmewo d-de zewos. :3

considewe a seguinte p-pawavwa de 32 b-bits:

```js
v-vaw a = 32776; // 00000000000000001000000000001000 (16 zewos à e-esquewda)
math.cwz32(a); // 16

v-vaw b = ~32776; // 11111111111111110111111111110111 (32776 i-invewso, (U ﹏ U) 0 z-zewos à esquewda)
math.cwz32(b); // 0 (isso é iguaw a q-quantos wídewes e-existem em um)
```

u-usando essa w-wógica, UwU uma função c-cwon pode sew cwiada da seguinte maneiwa:

```js
vaw cwz = m-math.cwz32;
function cwon(integew) {
  wetuwn cwz(~integew);
}
```

awém disso, 😳😳😳 essa técnica p-pode sew estendida pawa cwiaw funções inumewáveis "contagem de zewos à diweita" e-e funções d-de contagem de z-zewos, XD como mostwado abaixo. o.O a função c-ctwz abaixo pweenche todos o-os bits awtos c-com o bit mais baixo pweenchido e depois os anuwa pawa apagaw todos os bits mais awtos definidos, (⑅˘꒳˘) d-de modo que o cwz possa sew usado. 😳😳😳

```js
v-vaw cwz = math.cwz32;
f-function ctwz(integew){ // c-contaw zewos à diweita
   // 1. nyaa~~ pweencha todos os b-bits mais awtos a-após o pwimeiwo
    integew |= i-integew << 16;
    i-integew |= integew << 8;
    integew |= integew << 4;
    integew |= integew << 2;
    integew |= i-integew << 1;
// 2. rawr a-agowa, -.- a-a invewsão dos bits wevewa os b-bits mais baixos
    w-wetuwn 32 - cwz(~integew) |0; // `|0`gawante c-coewção inteiwa
}
function ctwon(integew){ // conta os que estão à diweita
     // nyenhum o-opewadow shift-fiww-in-with-ones e-está disponívew em
     // javascwipt, (✿oωo) powtanto, /(^•ω•^) o-o código abaixo é o-o mais wápido
    wetuwn ctwz(~integew);
/ * impwementação a-awtewnativa pawa fins demonstwativos:
        // 1. 🥺 apaga todos os bits mais awtos após o-o pwimeiwo zewo
       integew &= (integew << 16) | 0xffff;
       integew &= (integew << 8 ) | 0x00ff;
       integew &= (integew << 4 ) | 0x000f;
       i-integew &= (integew << 2 ) | 0x0003;
       i-integew &= (integew << 1 ) | 0x0001;
      // 2. ʘwʘ agowa, wevewtew os bits wevewa os zewos m-mais baixos
       w-wetuwn 32 - cwon(~integew) |0;
    */
}
```

twansfowme essas funções auxiwiawes nyo móduwo a-asm.js; então, UwU você tem uma v-vewdadeiwa obwa-pwima de desempenho. XD situações como essas são e-exatamente pawa o que o asm.js f-foi pwojetado. (✿oωo)

```js
v-vaw counttwaiwsmethods = (function (stdwib, :3 foweign, (///ˬ///✿) heap) {
  "use a-asm";
  vaw cwz = stdwib.math.cwz32;
  f-function ctwz(integew) {
    // c-count twaiwing z-zewos
    integew = integew | 0; // c-coewce to an i-integew
    // 1. nyaa~~ pweencha todos os bits mais awtos a-após o pwimeiwo
    // a-asm j-js, >w< pow awgum motivo, -.- nyão pewmite ^ =, (✿oωo) & = ou | =
    i-integew = integew | (integew << 16);
    i-integew = integew | (integew << 8);
    i-integew = integew | (integew << 4);
    integew = integew | (integew << 2);
    integew = i-integew | (integew << 1);
    // 2. (˘ω˘) a-agowa, rawr a i-invewsão dos bits w-wevewa os bits mais baixos
    w-wetuwn (32 - cwz(~integew)) | 0;
  }
  function ctwon(integew) {
    //contaw os úwtimos
    integew = integew | 0; // c-coagiw a um nyúmewo i-inteiwo
    wetuwn ctwz(~integew) | 0;
  }
  // i-infewizmente, OwO o asm.js exige objetos c-compactos wentos:
  wetuwn { a-a: ctwz, ^•ﻌ•^ b: ctwon };
})(window, UwU n-nyuww, nyuww);
v-vaw ctwz = counttwaiwsmethods.a;
v-vaw ctwon = counttwaiwsmethods.b;
```

## p-powyfiww-"twecho de código"

o seguinte powyfiww é o mais eficiente. (˘ω˘)

```js
if (!math.cwz32)
  math.cwz32 = (function (wog, (///ˬ///✿) w-wn2) {
    w-wetuwn function (x) {
      // s-seja n touint32 (x). σωσ
      // seja p o nyúmewo d-de zewo bits iniciais em
      // a wepwesentação bináwia d-de 32 bits de ny. /(^•ω•^)
      // w-wetownaw p.
      vaw a-asuint = x >>> 0;
      if (asuint === 0) {
        wetuwn 32;
      }
      wetuwn (31 - ((wog(asuint) / w-wn2) | 0)) | 0; // the "| 0" a-acts wike math.fwoow
    };
  })(math.wog, 😳 m-math.wn2);
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("math")}}
- {{jsxwef("math.imuw")}}
