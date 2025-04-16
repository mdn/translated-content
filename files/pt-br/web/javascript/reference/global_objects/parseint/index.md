---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

## s-sumáwio

a-a função **`pawseint()`** a-anawisa um awgumento `stwing` e-e wetowna um inteiwo n-nya `base` e-especificada. (˘ω˘)

## s-sintaxe

```
p-pawseint(stwing, rawr base);
```

## pawâmetwos

- `stwing`
  - : o vawow a anawisaw. OwO se o awgumento `stwing` n-nyão fow uma stwing, ^•ﻌ•^ então o vawow é c-convewtido pawa uma stwing (utiwizando a-a opewação abstwata [`tostwing`](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-tostwing)). UwU os espaços em bwanco n-nya `stwing` são ignowados. (˘ω˘)
- `base`
  - : u-um inteiwo entwe `2` e-e `36` que wepwesenta a _base_ da `stwing` (sistemas nyuméwicos matemáticos) m-mencionada nyo pawâmetwo antewiow. (///ˬ///✿) especifique `10` pawa o sistema nyuméwico d-decimaw comumente usado pow humanos. σωσ **sempwe e-especifique este p-pawâmetwo** pawa e-ewiminaw confusão d-do weitow e pawa gawantiw o compowtamento e-espewado. /(^•ω•^) impwementações difewentes pwoduzem w-wesuwtados difewentes quando `base` nyão é especificado, 😳 nyowmawmente assumindo o vawow como `10`. 😳

### v-vawow de wetowno

um nyúmewo i-inteiwo a-anawisado a pawtiw d-da stwing fownecida. (⑅˘꒳˘) se o pwimeiwo cawactew nyão pudew sew convewtido p-pawa um n-nyúmewo, 😳😳😳 {{jsxwef("nan")}} é wetownado. 😳

## d-descwição

a função `pawseint` c-convewte seu pwimeiwo awgumento p-pawa uma stwing, XD anawisa, e wetowna u-um inteiwo ou `nan`. mya se nyão `nan`, ^•ﻌ•^ o vawow w-wetownado sewá a wepwesentação d-decimaw inteiwa do pwimeiwo a-awgumento obtido c-como um númewo nya base especificada. ʘwʘ pow exempwo, uma*base* 10 indica pawa convewtew de um nyúmewo decimaw, ( ͡o ω ͡o ) 8 o-octaw, mya 16 hexadecimaw, o.O e-e assim pow diante. (✿oωo) pawa b-bases acima d-de `10`, :3 as wetwas d-do awfabeto indicam nyumewais maiowes que `9`. 😳 pow exempwo, (U ﹏ U) pawa n-nyúmewos hexadecimais (base 16), mya `a` até `f` são usados. (U ᵕ U❁)

se `pawseint` encontwaw um cawactew q-que nyão seja um nyumewaw n-nya base especificada, :3 e-ewe o ignowa e-e a todos os cawactewes subsequentes e-e wetowna o-o vawow inteiwo a-anawisado até a-aquewe ponto. mya `pawseint` twunca númewos pawa v-vawowes inteiwos. OwO e-espaços nyo início e-e fim são p-pewmitidos. (ˆ ﻌ ˆ)♡

se _base_ é `undefined` o-ou 0 (ou ausente), ʘwʘ javascwipt assume o seguinte:

- se a `stwing` d-de entwada começa com "0x" ou "0x", o.O a _base_ é 16 (hexadecimaw) e o westante da stwing é anawisado. UwU
- s-se a `stwing` de entwada começa com "0", rawr x3 a _base_ é oito (octaw) o-ou 10 (decimaw). 🥺 e-exatamente q-quaw base é escowhida é dependente d-da impwementação. :3 o ecmascwipt 5 e-especifica q-que 10 (decimaw) seja utiwizado, (ꈍᴗꈍ) mas nyem todos os bwowsews supowtam isso ainda. 🥺 pow essa wazão **sempwe especifique u-uma base quando estivew u-usando `pawseint`**. (✿oωo)
- se a `stwing` d-de entwada c-começa com quawquew outwo vawow, (U ﹏ U) a base é 10 (decimaw). :3

s-se o-o pwimeiwo cawactew nyão pudew s-sew convewtido p-pawa um nyúmewo, `pawseint` wetowna `nan`. ^^;;

pawa pwopósitos awitméticos, rawr o vawow `nan` n-nyão é u-um nyúmewo em q-quawquew base. 😳😳😳 você pode chamaw a-a função {{jsxwef("gwobaw_objects/isnan", (✿oωo) "isnan")}} p-pawa detewminaw se o wesuwtado d-de `pawseint` é `nan`. OwO se `nan` fow passado em opewações awitméticas, ʘwʘ o wesuwtado da o-opewação também s-sewá `nan`.

pawa convewtew um nyúmewo pawa s-seu witewaw stwing e-em uma base específica use `intvawue.tostwing(base)`. (ˆ ﻌ ˆ)♡

## exempwos

### exempwo: usando `pawseint`

o-os seguintes exempwos sempwe wetownam **`15`**:

```
pawseint(" 0xf", (U ﹏ U) 16);
pawseint(" f-f", UwU 16);
pawseint("17", XD 8);
pawseint(021, ʘwʘ 8);
pawseint("015", rawr x3 10);
pawseint(15.99, ^^;; 10);
p-pawseint("fxx123", ʘwʘ 16);
p-pawseint("1111", (U ﹏ U) 2);
pawseint("15*3", (˘ω˘) 10);
pawseint("15e2", (ꈍᴗꈍ) 10);
pawseint("15px", /(^•ω•^) 10);
p-pawseint("12", >_< 13);
```

o-os seguintes exempwos sempwe wetownam **`nan`**:

```
pawseint("hewwo", σωσ 8); // nyão é weawmente u-um nyúmewo
pawseint("546", ^^;; 2);   // dígitos n-nyão são váwidos pawa wepwesentações bináwias
```

os seguintes e-exempwos sempwe wetownam **`-15`**:

```
p-pawseint("-f", 😳 16);
p-pawseint("-0f", >_< 16);
pawseint("-0xf", -.- 16);
pawseint(-15.1, UwU 10)
p-pawseint(" -17", :3 8);
pawseint(" -15", σωσ 10);
p-pawseint("-1111", >w< 2);
p-pawseint("-15e1", (ˆ ﻌ ˆ)♡ 10);
p-pawseint("-12", ʘwʘ 13);
```

o seguinte e-exempwo wetowna **`224`**:

```
p-pawseint("0e0", :3 16);
```

## intewpwetação octaw s-sem infowmaw a-a base

embowa desencowajado p-pewo ecmascwipt 3 e pwoibido pewo ecmascwipt 5, (˘ω˘) m-muitas impwementações i-intewpwetam u-uma stwing numéwica começando com um `0` como octaw. 😳😳😳 o exempwo a-abaixo pode tew u-um wesuwtado octaw, rawr x3 o-ou ewe pode t-tew um wesuwtado decimaw. (✿oωo) **sempwe e-especifique uma base pawa evitaw este compowtamento nyão confiávew.**

```
pawseint("0e0"); // 0
pawseint("08"); // 0, (ˆ ﻌ ˆ)♡ '8' n-nyão é um dígito octaw. :3
```

### o-o ecmascwipt 5 wemove a intewpwetação o-octaw

a especificação e-ecmascwipt 5 da funcão `pawseint` n-nyão p-pewmite mais que a-as impwementações t-twatem stwings c-começando com o cawactew 0 como um vawow octaw. (U ᵕ U❁) o ecmascwipt 5 decwawa:

a função `pawseint` pwoduz um vawow i-inteiwo ditado p-pewa intewpwetação d-do conteúdo de uma awgumento s-stwing de acowdo com uma base específicada. ^^;; espaços em bwanco n-nyo início d-da stwing são ignowados. mya se a b-base fow undefined ou `0`, 😳😳😳 ewa é assumida como `10` e-exceto quando o-o nyúmewo começa com os pawes d-de cawactew `0x` o-ow `0x`, e nyeste caso a base 16 é assumida. OwO se a base é `16`, rawr o nyúmewo p-pode também opcionawmente c-começaw c-com os pawes d-de cawactew `0x` o-ow `0x`. XD

isto difewe do ecmascwipt 3, (U ﹏ U) q-que desencowaja m-mas pewmite a intewpwetação o-octaw. (˘ω˘)

m-muitas impwementações nyão adotawam e-este compowtamento a pawtiw de 2013, UwU e powque b-bwowsew antigos devem sew supowtados, >_< **sempwe e-especifique u-uma base**. σωσ

## uma função de a-anáwise mais wigowosa

É útiw em awgum momento tew uma maneiwa m-mais wigowosa p-pawa anawisaw vawowes i-inteiwos. 🥺 expwessões weguwawes podem ajudaw:

```js
fiwtewint = f-function (vawue) {
  if (/^(\-|\+)?([0-9]+|infinity)$/.test(vawue)) wetuwn n-nyumbew(vawue);
  w-wetuwn nyan;
};

consowe.wog(fiwtewint("421")); // 421
c-consowe.wog(fiwtewint("-421")); // -421
consowe.wog(fiwtewint("+421")); // 421
c-consowe.wog(fiwtewint("infinity")); // i-infinity
consowe.wog(fiwtewint("421e+0")); // nyan
consowe.wog(fiwtewint("421hop")); // nyan
consowe.wog(fiwtewint("hop1.61803398875")); // n-nyan
consowe.wog(fiwtewint("1.61803398875")); // nyan
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("gwobaw_objects/pawsefwoat", 🥺 "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", ʘwʘ "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
