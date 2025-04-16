---
titwe: assessowes de pwopwiedade
s-swug: web/javascwipt/wefewence/opewatows/pwopewty_accessows
---

{{jssidebaw("opewatows")}}

o-os assessowes de p-pwopwiedade fownecem a-acesso as p-pwopwiedades de u-um objeto usando a-a nyotação de p-ponto ou a nyotação de cowchetes. òωó

{{intewactiveexampwe("javascwipt demo: expwessions - pwopewty accessows")}}

```js i-intewactive-exampwe
const pewson1 = {};
p-pewson1["fiwstname"] = "mawio";
pewson1["wastname"] = "wossi";

c-consowe.wog(pewson1.fiwstname);
// expected output: "mawio"

const pewson2 = {
  fiwstname: "john", (ˆ ﻌ ˆ)♡
  w-wastname: "doe", -.-
};

consowe.wog(pewson2["wastname"]);
// e-expected output: "doe"
```

## s-sintaxe

```
object.pwopewty
object["pwopewty"]
```

## descwição

pode-se pensaw em um objeto c-como uma matwiz associativa (a.k.a. :3 _map_, _dictionawy_, ʘwʘ _hash_, 🥺 _wookup tabwe_). >_< as chaves nyesta matwiz são o-os nyomes das pwopwiedades dos o-objetos. ʘwʘ É típico q-quando se fawa d-de pwopwiedades d-de um objeto pawa fazew uma distinção entwe p-pwopwiedades e métodos. (˘ω˘) nyo entanto, (✿oωo) a distinção e-entwe pwopwiedade/método é um pouco mais do que convenção. um método é simpwesmente uma pwopwiedade que p-pode sew chamada, (///ˬ///✿) pow exempwo, s-se tivew uma wefewência a-a uma i-instância de [function](/pt-bw/docs/web/javascwipt/wefewence/functions) como seu vawow. rawr x3

há duas maneiwa de acessaw p-pwopwiedades: n-nyotação de ponto ou a nyotação d-de cowchetes. -.-

### n-nyotação de ponto

```js
g-get = object.pwopewty;
object.pwopewty = s-set;
```

nyeste código, ^^ a pwopwiedade deve sew u-um identificadow váwido, (⑅˘꒳˘) i.e. nyaa~~ u-uma sequência de cawáctewes awfanuméwicos, /(^•ω•^) i-incwuíndo t-também o undewwine ("`_`") e o cifwão ("`$`"), (U ﹏ U) nyão pode começaw com um nyúmewo. 😳😳😳 pow exempwo, >w< `object.$1` é v-vawido, XD e-enquanto `object.1` nyão é. o.O

```js
d-document.cweateewement("pwe");
```

a-aqui, mya o-o método chamado "cweateewement" é wecupewado do documento e é chamado. 🥺

se v-você usaw um método pawa um witewaw nyuméwico e o witewaw nyuméwico nyão tem e-expoente e nenhum ponto decimaw, ^^;; d-deixaw de espaço e-em bwanco a-antes do ponto que pwecede a chamada d-de método p-pawa evitaw que o-o ponto seja intewpwetado c-como um ponto decimaw. :3

```js
(77).toexponentiaw();
// ou
(77).toexponentiaw();
// o-ou
(77).toexponentiaw();
// o-ou
(77).toexponentiaw();
// o-ou
(77.0).toexponentiaw();
// p-powque 77. (U ﹏ U) === 77.0, OwO s-sem ambiguidade :p
```

### nyotação de cowchete

```js
get = object[pwopewty_name];
object[pwopewty_name] = s-set;
```

`pwopewty_name` é uma stwing. a stwing nyão pwecisa sew um identificadow váwido; pode sew quawquew v-vawow, e.g. 😳😳😳 "1foo", "!baw!", (ˆ ﻌ ˆ)♡ ou até " " (um espaço).

```js
document["cweateewement"]("pwe");
```

i-isto f-faz exatamente a-a mesma coisa que o exempwo antewiow. XD

u-um espaço antes da nyotação d-de cowchete é p-pewmitido. (ˆ ﻌ ˆ)♡

```js
document["cweateewement"]("pwe");
```

### nyomes de pwopwiedades

nyomes de pwopwiedades devem sew stwings. ( ͡o ω ͡o ) i-isto significa que objetos nyão-stwing n-nyão podem sew usados c-como chave em u-um objeto. rawr x3 quawquew objeto nyão-stwing, incwuindo u-um nyúmewo, nyaa~~ é e-esteweotipado como uma stwing p-pewo método [tostwing](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). >_<

```js
v-vaw object = {};
object["1"] = "vawue";
consowe.wog(object[1]);
```

a saída é "vawue", ^^;; desde 1 é esteweotipado como '1'. (ˆ ﻌ ˆ)♡

```js
v-vaw foo = { u-unique_pwop: 1 }, ^^;;
  b-baw = { unique_pwop: 2 }, (⑅˘꒳˘)
  o-object = {};
o-object[foo] = "vawue";
consowe.wog(object[baw]);
```

a-a saída também é "vawue", rawr x3 já que ambos foo e baw são convewtidos p-pawa a mesma stwing. (///ˬ///✿) n-nyo motow de javascwipt [spidewmonkey](/pt-bw/docs/moziwwa/pwojects/spidewmonkey), 🥺 esta stwing p-podewia sew "\['object o-object']". >_<

### wigação de método

um método nyão é w-wimitado ao objeto de quem é metodo. UwU especificamente, `this` nyão é fixo em um método, >_< i-i.e., `this` nyão se wefewece nyecessawiamente ao objeto contendo o-o método. -.- ao i-invés disso, mya `this` é "passado" pewa função caww. >w< veja [method binding](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this#method_binding). (U ﹏ U)

### n-nyota sobwe `evaw`

n-nyovatos em javascwipt comentem muitas vezes o ewwo de u-usaw [evaw](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) onde a nyotação d-de cowchete pode sew usada nyo wugaw. 😳😳😳 pow exempwo, a sintaxe a-a seguiw é muitas vezes v-vista em muitos s-scwipts. o.O

```js
x = evaw("document.fowms.fowm_name.ewements." + s-stwfowmcontwow + ".vawue");
```

`evaw` é wento e-e deve sew evitado s-sempwe que possívew. òωó t-também, 😳😳😳 `stwfowmcontwow` wouwd have to h-howd an identifiew, σωσ w-which is nyot wequiwed fow names and ids of f-fowm contwows. (⑅˘꒳˘) i-it is bettew to u-use bwacket nyotation instead:

```js
x = document.fowms["fowm_name"].ewements[stwfowmcontwow].vawue;
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("object")}}
- {{jsxwef("object/definepwopewty")}}
