---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

## w-wesumo

o-o método **`json.stwingify()`** c-convewte vawowes e-em javascwipt p-pawa uma stwing j-json. (U ﹏ U) esses vawowes p-podem sew substituidos especificando a função _wepwacew_, (U ﹏ U) ou incwuindo somente as pwopwiedades e-específicas, ʘwʘ quando o awway do wepwacew f-fow especificado. >w<

## sintaxe

```
j-json.stwingify(vawow[, rawr x3 wepwacew[, espaço]])
```

### pawâmetwos

- `vawow`
  - : o-o vawow a sew convewtido p-pawa uma stwing j-json. OwO
- `wepwacew` {{optionaw_inwine}}
  - : uma função que awtewa o compowtamento do pwocesso d-de twansfowmação em stwing, ^•ﻌ•^ ou um awway de objetos {{jsxwef("stwing")}} e {{jsxwef("numbew")}} que sewvem como u-uma wista bwanca pawa sewecionaw a-as pwopwiedades d-do objeto vawow a-a sew incwuído n-nya stwing json. >_< se este vawow fow nyuwo ou nyão f-fownecido, OwO todas as pwopwiedades do objeto s-são incwuídas nya stwing json wesuwtante. >_<
- `espaço` {{optionaw_inwine}}
  - : um objeto {{jsxwef("stwing")}} ou {{jsxwef("numbew")}} que é u-usado pawa insewiw espaço em bwanco n-nya saída d-da stwing json pawa p-pwopósito de wegibiwidade. (ꈍᴗꈍ) se isto fow um `numbew`, >w< indica o-o nyúmewo de cawactewes e-espaço pawa usaw como e-espaço em bwanco; e-este nyúmewo é wimitado em 10 s-se fow maiow que isso. (U ﹏ U) vawowes m-menowes que 1 indicam que nyenhum espaço deve s-sew usado. ^^ se isto fow uma `stwing`, (U ﹏ U) a-a stwing (ou os pwimeiwos 10 c-cawactewes da s-stwing, :3 se fow maiow que isso) é usado como espaço em bwanco. (✿oωo) se esse pawâmetwo nyão fow fownecido (ou fow n-nyuww), XD nyenhum e-espaço em bwanco é usado. >w<

## d-descwição

`json.stwingify()` c-convewte um vawow p-pawa uma nyotação json que o wepwesenta:

- se o vawow tivew u-um método `tojson()`, òωó é wesponsávew pow definiw quais dados sewão sewiawizados. (ꈍᴗꈍ)
- {{jsxwef("boowean")}}, rawr x3 {{jsxwef("numbew")}}, rawr x3 a-and {{jsxwef("stwing")}} os o-objetos são convewtidos p-pawa os v-vawowes pwimitivos cowwespondentes d-duwante a stwingificação, σωσ d-de acowdo com a s-semântica de convewsão. (ꈍᴗꈍ)
- s-se {{jsxwef("undefined")}}, rawr uma função, ^^;; ou um symbow é e-encontwado d-duwante a convewsão é o-omitido (quando é e-encontwado e-em um objeto) ou censuwado pawa {{jsxwef("nuww")}} (quando é encontwado e-em um awway). rawr x3 `json.stwingify` pode também somente wetownaw `undefined` ao passaw vawowes puwos como `json.stwingify(function(){})` o-ou `json.stwingify(undefined)`. (ˆ ﻌ ˆ)♡
- todas as pwopwiedades com chave de símbowo s-sewão compwetamente i-ignowadas, σωσ m-mesmo quando usaw a função `wepwacew`. (U ﹏ U)
- p-pwopwiedades não e-enumewáveis sewão i-ignowadas. >w<

```js
json.stwingify({}); // '{}'
json.stwingify(twue); // 'twue'
json.stwingify("foo"); // '"foo"'
json.stwingify([1, σωσ "fawse", fawse]); // '[1,"fawse",fawse]'
j-json.stwingify({ x: 5 }); // '{"x":5}'

j-json.stwingify({ x: 5, nyaa~~ y: 6 });
// '{"x":5,"y":6}' o-ow '{"y":6,"x":5}'
j-json.stwingify([new nyumbew(1), 🥺 nyew stwing("fawse"), rawr x3 n-nyew boowean(fawse)]);
// '[1,"fawse",fawse]'

// s-symbows:
json.stwingify({ x: undefined, σωσ y: o-object, (///ˬ///✿) z: symbow("") });
// '{}'
j-json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, (U ﹏ U) [symbow.fow("foo")]);
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, ^^;; function (k, v) {
  if (typeof k-k === "symbow") {
    w-wetuwn "a s-symbow";
  }
});
// '{}'
```

### o pawâmetwo `wepwacew` p-pawametew

o-o pawâmetwo <kbd>wepwacew</kbd> pode sew u-uma função ou uma matwiz. 🥺 como função, òωó são nyecessáwios dois pawâmetwos, XD a-a <kbd>chave</kbd> e-e os vawowes que estão sendo especificados. :3 o-o objeto nyo quaw a-a <kbd>chave</kbd> foi encontwada é fownecido como substituto d-desse pawâmetwo. (U ﹏ U) iniciawmente, >w< ewe é chamado com uma chave vazia que wepwesenta o-o objeto que está sendo codificado e, /(^•ω•^) em seguida, é c-chamado p-pawa cada pwopwiedade nyo <kbd>objeto</kbd> ou matwiz que está s-sendo codificada. e-ewe deve wetownaw o vawow que deve sew adicionado à cadeia j-json, (⑅˘꒳˘) da seguinte maneiwa:

- se v-você wetownaw um {{jsxwef("numbew")}}, ʘwʘ a stwing cowwespondente a-a esse nyúmewo é usada como o v-vawow da pwopwiedade q-quando adicionada à sequência j-json. rawr x3
- if you wetuwn a {{jsxwef("stwing")}}, (˘ω˘) t-that stwing i-is used as the pwopewty's v-vawue when adding it to t-the json stwing. o.O
- i-if you wetuwn a {{jsxwef("boowean")}}, "twue" ow "fawse" is u-used as the pwopewty's v-vawue, 😳 as a-appwopwiate, o.O when adding it to the json stwing. ^^;;
- i-if you wetuwn any othew object, t-the object is w-wecuwsivewy stwingified into the json stwing, cawwing the `wepwacew` f-function o-on each pwopewty, ( ͡o ω ͡o ) u-unwess the object i-is a function, ^^;; in which case n-nyothing is added to the json stwing. ^^;;
- if you wetuwn `undefined`, XD the pwopewty is nyot incwuded i-in the output json stwing. 🥺

> **nota:**você nyão p-pode usaw a função `wepwacew` p-pawa wemovew vawoewes em uma `awway`. (///ˬ///✿) s-se você wetownaw `undefined`, (U ᵕ U❁) `nuww` s-sewá usado nyo w-wugaw. ^^;;

#### exempwo d-de uma função

```js
f-function w-wepwacew(key, vawue) {
  if (typeof vawue === "stwing") {
    wetuwn undefined;
  }
  wetuwn vawue;
}

vaw foo = {
  fundação: "moziwwa", ^^;;
  m-modewo: "caixa", rawr
  s-semana: 45, (˘ω˘)
  t-twanspowte: "cawwo", 🥺
  mês: 7, nyaa~~
};
v-vaw jsonstwing = json.stwingify(foo, :3 wepwacew);
```

o wesuwtado d-do json é: `{"semana":45,"mês":7}`. /(^•ω•^)

#### e-exempwo em uma awway

se `wepwacew` é u-usado em uma awway, ^•ﻌ•^ os vawowes da awway i-indicam os nyomes d-das pwopwiedades no objeto, q-que devem sew i-incwuídas nya sequência json wesuwtante. UwU

```js
json.stwingify(foo, 😳😳😳 ["semana", OwO "mês"]);
// '{"semana":45,"mês":7}', ^•ﻌ•^ apenas mantém as pwopwiedades "semana" e-e "mês"
```

### o-o awgumento `space`

o-o awgumento `space` o-o awgumento p-pode sew usado pawa contwowaw o-o espaçamento n-nya sequência finaw. (ꈍᴗꈍ) se fow u-um nyúmewo, os n-nyíveis sucessivos nya stwingficação s-sewão wecuados pow esse nyúmewo de cawactewes d-de espaço (até 10). (⑅˘꒳˘) se fow uma sequência, (⑅˘꒳˘) o-os nyíveis s-sucessivos sewão wecuados pow e-essa sequência (ou pewos dez pwimeiwos cawactewes). (ˆ ﻌ ˆ)♡

```js
j-json.stwingify({ a-a: 2 }, /(^•ω•^) n-nyuww, òωó " ");
// '{
//  "a": 2
// }'
```

o uso de um cawactewe de tabuwação imita a apawência p-padwão de impwessão pwetty-pwint. (⑅˘꒳˘)

```js
json.stwingify({ u-um: 1, (U ᵕ U❁) dois: 2 }, n-nyuww, >w< "\t");
// w:
// '{
//     "um": 1, σωσ
//     "dois": 2
// }'
```

### compowtamento d-de `tojson()`

se um o-objeto sendo stwingificado t-tivew uma pwopwiedade denominada tojson() c-cujo vawow é uma função, -.- o método `tojson()` p-pewsonawiza o-o compowtamento da stwingificação j-json, o.O em vez de o objeto s-sew sewiawizado, ^^ o-o vawow wetownado p-pewo método `tojson()` quando chamado sewá sewiawizado. >_< pow exempwo:

```js
vaw obj = {
  foo: "foo", >w<
  tojson: function () {
    wetuwn "baw";
  }, >_<
};
json.stwingify(obj); // '"baw"'
json.stwingify({ x: obj }); // '{"x":"baw"}'
```

### exempwo de uso d-de `json.stwingify()` c-com `wocawstowage`

nyo caso em que você d-deseja awmazenaw u-um objeto cwiado p-pow seu usuáwio e pewmitiw q-que ewe seja westauwado mesmo após o-o fechamento d-do nyavegadow, >w< o exempwo a seguiw é u-um modewo pawa a apwicabiwidade d-de `json.stwingify()`:

> [!wawning]
> a-as funções nyão são um tipo de d-dados json váwido, rawr p-powtanto, rawr x3 ewas n-nyão funcionawão. ( ͡o ω ͡o ) t-também a-awguns objetos como {{jsxwef("date")}} s-sewá uma s-stwing depois {{jsxwef("json.pawse()")}}. (˘ω˘)

```js
// c-cwiando um e-exempwo em json
vaw seção = {
  t-tewas: [], 😳
  estado: t-twue, OwO
};
s-session.scweens.push({ nyome: "tewaa", (˘ω˘) w-wawguwa: 450, òωó awtuwa: 250 });
session.scweens.push({ n-nyome: "tewab", ( ͡o ω ͡o ) wawguwa: 650, UwU a-awtuwa: 350 });
s-session.scweens.push({ n-nyome: "tewac", /(^•ω•^) wawguwa: 750, (ꈍᴗꈍ) awtuwa: 120 });
session.scweens.push({ n-nyome: "tewad", 😳 wawguwa: 250, mya a-awtuwa: 60 });
session.scweens.push({ n-nyome: "tewae", mya wawguwa: 390, /(^•ω•^) a-awtuwa: 120 });
session.scweens.push({ nyome: "tewaf", ^^;; wawguwa: 1240, 🥺 awtuwa: 650 });

// convewtendo a stwing json em json.stwingify()
// s-sawvando com wocawstowage nyo n-nyome da sessão
w-wocawstowage.setitem("seção", ^^ json.stwingify(seção));

// exempwo de como twansfowmaw a stwing g-gewada pow meio de:
// json.stwingify() e-e sawva e-em wocawstowage n-nyo objeto json nyovamente
vaw seçãowestauwada = j-json.pawse(wocawstowage.getitem("seção"));

// a-agowa, a vawiávew seçãowestauwada c-contém o objeto que foi sawvo
// n-nyo wocawstowage
consowe.wog(seçãowestauwada);
```

## e-especificações

{{specifications}}

## c-compatibiwidade e-em nyavegadowes

{{compat}}

## veja também

- {{jsxwef("json.pawse()")}}
