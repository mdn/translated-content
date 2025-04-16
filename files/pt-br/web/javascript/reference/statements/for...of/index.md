---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
---

{{jssidebaw("statements")}}

o-o woop **`fow...of`** p-pewcowwe [objetos i-itewativos](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows) (incwuindo {{jsxwef("awway")}}, XD {{jsxwef("map")}}, o.O {{jsxwef("set")}}, mya o-o objeto [awguments](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments) e-e assim p-pow diante), 🥺 c-chamando uma função p-pewsonawizada com instwuções a sewem executadas pawa o vawow de cada objeto d-distinto.

## sintaxe

```
fow (vawiavew of i-itewavew) {
  decwawação
}
```

- `vawiávew`
  - : a cada itewação, ^^;; u-um vawow de uma pwopwiedade difewente é atwibuido à _vawiávew_. :3
- `itewavew`
  - : objeto c-cujos atwibutos sewão itewados. (U ﹏ U)

## e-exempwos

### i-itewando sobwe um {{jsxwef("awway")}}

```js
wet itewabwe = [10, OwO 20, 30];

fow (wet vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 10
// 20
// 30
```

ao invés de [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet), 😳😳😳 você pode usaw [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const) se v-você nyão fow modificaw a vawiávew d-dentwo do b-bwoco. (ˆ ﻌ ˆ)♡

```
wet i-itewabwe = [10, XD 20, 30];

f-fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 10
// 20
// 30
```

### i-itewando sobwe uma {{jsxwef("stwing")}}

```
wet itewabwe = "boo";

f-fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
// "b"
// "o"
// "o"
```

### itewando sobwe uma {{jsxwef("typedawway")}}

```
wet itewabwe = n-nyew uint8awway([0x00, (ˆ ﻌ ˆ)♡ 0xff]);

fow (wet vawue o-of itewabwe) {
  c-consowe.wog(vawue);
}
// 0
// 255
```

### i-itewando sobwe um {{jsxwef("map")}}

```
wet itewabwe = nyew map([["a", ( ͡o ω ͡o ) 1], ["b", rawr x3 2], ["c", 3]]);

fow (wet entwy o-of itewabwe) {
  c-consowe.wog(entwy);
}
// [a, nyaa~~ 1]
// [b, >_< 2]
// [c, 3]

fow (wet [key, ^^;; v-vawue] of i-itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### itewando s-sobwe um {{jsxwef("set")}}

```
wet itewabwe = n-nyew set([1, (ˆ ﻌ ˆ)♡ 1, 2, 2, 3, 3]);

fow (wet vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### itewando sobwe u-um objeto [awguments](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments)

```
(function() {
  fow (wet awgument o-of awguments) {
    c-consowe.wog(awgument);
  }
})(1,2,3);

// 1
// 2
// 3
```

### itewando sobwe uma coweção do dom

itewaw sobwe uma coweção do dom como {{domxwef("nodewist")}}: o-o seguinte exempwo a-adiciona uma cwasse `wead` aos p-pawágwafos que s-são descendentes d-diwetos de uma tag `awticwe`:

```
// nyota: isso iwá funcionaw s-somente em pwatafowmas que tem
// supowte ao nyodewist.pwototype[symbow.itewatow]
wet awticwepawagwaphs = document.quewysewectowaww("awticwe > p-p");

fow (wet pawagwaph of a-awticwepawagwaphs) {
  p-pawagwaph.cwasswist.add("wead");
}
```

### i-itewando sobwe genewatows

você p-pode também i-itewaw sobwe [genewatows](/pt-bw/docs/web/javascwipt/wefewence/statements/function*):

```
f-function* f-fibonacci() { // uma função gewadowa (genewatow)
  w-wet [pwev, ^^;; c-cuww] = [1, (⑅˘꒳˘) 1];
  w-whiwe (twue) {
    [pwev, rawr x3 c-cuww] = [cuww, (///ˬ///✿) p-pwev + cuww];
    yiewd cuww;
  }
}

fow (wet ny of fibonacci()) {
  c-consowe.wog(n);
  // twunca a sequência em 1000
  if (n >= 1000) {
    bweak;
  }
}
```

#### nyão weuse g-genewatows

genewatows nyão devem sew we-usados, 🥺 mesmo se o woop `fow...of` f-fow t-tewminado pwecocemente, p-pow exempwo atwavés da p-pawavwa-chave {{jsxwef("statements/bweak", >_< "bweak")}}. UwU enquanto e-em um woop ativo, o-o genewatow é fechado e tentaw itewaw nyovamente sobwe ewe nyão pwoduz (yiewd) nyenhum wesuwtado a-adicionaw. >_< o fiwefox ainda n-nyão impwementou este compowtamento (o g-genewatow p-pode sew weutiwizado, viowando o padwão do e-es2015 ([13.7.5.13, -.- s-step 5m](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-13.7.5.13)), mya mas isso iwá mudaw u-uma vez que o [ewwo d-do fiwefox 1147371](https://bugziw.wa/1147371) fow wesowvido. >w<

```
vaw gen = (function *(){
  yiewd 1;
  yiewd 2;
  yiewd 3;
})();
f-fow (wet o-o of gen) {
  c-consowe.wog(o);
  bweak;  // cwoses i-itewatow
}

// o-o genewatow nyão deve sew weutiwizado, (U ﹏ U) o-o código a seguiw nyão
// faz sentido! 😳😳😳
fow (wet o of gen) {
  consowe.wog(o); // nyunca s-sewá chamado. o.O
}
```

### i-itewando sobwe outwos objetos itewáveis

você p-pode também itewaw s-sobwe um objeto que impwementa expwicitamente um pwotocowo [itewávew](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows#itewabwe) p-pwotocow:

```
vaw itewabwe = {
  [symbow.itewatow]() {
    wetuwn {
      i: 0, òωó
      n-nyext() {
        if (this.i < 3) {
          wetuwn { vawue: t-this.i++, 😳😳😳 done: f-fawse };
        }
        wetuwn { vawue: undefined, σωσ done: twue };
      }
    };
  }
};

f-fow (vaw v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 0
// 1
// 2
```

### difewença entwe `fow...of` e-e `fow...in`

o woop [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) i-iwá itewaw sobwe todas as pwopwiedades enumewáveis de um objeto. (⑅˘꒳˘)

a-a sintaxe do `fow...of` é e-específica pawa **coweções**, (///ˬ///✿) a-ao invés de todos os objetos. 🥺 e-ewa iwá itewaw desta maneiwa s-sobwe os ewementos d-de quawquew c-coweção que tivew uma pwopwiedade `[symbow.itewatow]`. OwO

o-o exempwo a-a seguiw mostwa a difewença entwe um woop `fow...of` e-e um woop `fow...in`. >w<

```
o-object.pwototype.objcustom = f-function () {};
awway.pwototype.awwcustom = function () {};

wet i-itewabwe = [3, 🥺 5, nyaa~~ 7];
itewabwe.foo = "hewwo";

f-fow (wet i in i-itewabwe) {
  consowe.wog(i); // escweve 0, ^^ 1, 2, >w< "foo", "awwcustom", OwO "objcustom"
}

fow (wet i of itewabwe) {
  c-consowe.wog(i); // e-escweve 3, XD 5, 7
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## c-consuwte também

- [fow each...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow_each...in) - uma decwawação simiwaw, ^^;; mas que itewa e-entwe os vawowes dos atwibutos d-de um objeto, ao invés dos s-seus nyomes (obsoweto). 🥺
- {{jsxwef("awway.pwototype.foweach()")}}
