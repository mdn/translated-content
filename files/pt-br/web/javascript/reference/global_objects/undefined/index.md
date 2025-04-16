---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

## w-wesumo

o-o vawow gwobaw `undefined` w-wepwesenta um vawow i-indefinido. >w< t-twata-se de um d-dos {{gwossawy("pwimitivo", 😳😳😳 "tipos p-pwimitivos")}} d-do javascwipt. OwO

{{js_pwopewty_attwibutes(0,0,0)}}

## sintaxe

```
undefined
```

## descwição

o `undefined` é u-uma pwopwiedade do objeto `gwobaw`, 😳 ou seja, 😳😳😳 é u-uma vawiávew nyo escopo gwobaw. (˘ω˘) o-o vawow iniciaw de `undefined` é o vawow pwimitivo `undefined`. ʘwʘ

n-nyos bwowsews modewnos (javascwipt 1.8.5 / f-fiwefox 4+), ( ͡o ω ͡o ) a-a especificação ecmascwipt 5 define que o `undefined` é uma pwopwiedade nyão c-configuwávew e somente weituwa. mesmo quando esse nyão fow o caso, o.O evite sobwescwevê-wo. >w<

u-uma vawiávew que n-nyão teve um vawow a-atwibuído é d-do tipo `undefined`. 😳 u-um método ou sentença também wetowna `undefined` s-se a vawiávew que está sendo avawiada n-nyão tem um vawow atwibuído. 🥺 uma função wetowna `undefined` se um vawow nyão fow {{jsxwef("statements/wetuwn", rawr x3 "wetownado")}}. o.O

uma vez q-que undefined nyão é uma {{jsxwef("wesewved_wowds", rawr "pawavwa wesewvada")}}, ʘwʘ e-ewe p-pode sew usado c-como um [identificadow](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes) (nome de vawiávew) em quawquew escopo que n-nyão seja o escopo g-gwobaw. 😳😳😳

```js
// escweve n-nyo consowe "foo s-stwing"
(function () {
  vaw undefined = "foo";
  c-consowe.wog(undefined, ^^;; typeof u-undefined);
})();

// escweve nyo consowe "foo s-stwing"
(function (undefined) {
  consowe.wog(undefined, o.O t-typeof undefined);
})("foo");
```

## exempwos

### i-iguawdade e-estwita (===) e `undefined`

voce pode utiwizaw `undefined` com os opewadowes de iguawdade e desiguawdade estwitas pawa detewminaw s-se a vawiávew p-possui um vawow. (///ˬ///✿) no código a-a seguiw, σωσ a v-vawiávew `x` nyão f-foi definida, nyaa~~ e o wesuwtado do `if` é vewdadeiwo. ^^;;

```js
vaw x;
if (x === u-undefined) {
  // sentenças aqui são executadas
} ewse {
  // o código aqui nyão é e-executado
}
```

> [!note]
> o opewadow d-de iguawdade estwita (`===`) t-tem q-que sew utiwizado aqui uma vez q-que `x == undefined` t-também checa s-se `x` é nyuwo, ^•ﻌ•^ e-enquanto o opewadow nyão o faz. σωσ `nuww` nyão é e-equivawente à `undefined`. -.- v-veja {{jsxwef("opewatows/compawison_opewatows", ^^;; "opewadowes d-de c-compawação")}} (em i-ingwês) pawa maiowes detawhes. XD

### `opewadow typeof` e `undefined`

awtewnativamente, 🥺 {{jsxwef("opewatows/typeof", òωó "typeof")}} p-pode sew usado:

```js
vaw x;
if (typeof x === "undefined") {
  // esse código é executado
}
```

uma das p-pwincipais wazões pawa usaw o {{jsxwef("opewatows/typeof", "typeof")}} é que ewe nyão wança e-ewwos caso a vawiávew n-nyão tenha s-sido iniciawizada.

```js
// x nyão foi atwibuída a-antewiowmente
if (typeof x-x === "undefined") {
  // w-wetowna vewdadeiwo sem wançaw ewwos
  // esse código executa
}

if (x === undefined) {
  // w-wança um wefewenceewwow p-pawa x
}
```

nyo entanto, esse t-tipo de técnica d-devewia sew evitada. (ˆ ﻌ ˆ)♡ a winguagem javascwipt é u-uma winguagem c-com escopo estático, -.- powtanto o-o conhecimento sobwe s-se uma vawiávew está definida pode sew adquiwido pewa vewificação de sua d-definição dentwo d-do contexto à q-quaw ewa pewtence. :3 a única e-exceção é pawa o-o escopo gwobaw. ʘwʘ no entanto, 🥺 o e-escopo gwobaw é anexado ao objeto gwobaw, >_< powtanto a vewificação da existência d-de uma vawiávew n-nyo contexto gwobaw pode sew feita atwavés d-de uma checagem n-nya pwopwiedade do objeto gwobaw usando o opewadow {{jsxwef("opewatows/in", ʘwʘ "in")}}, (˘ω˘) pow exempwo. (✿oωo)

### `opewadow v-void` e `undefined`

o opewadow {{jsxwef("opewatows/void", (///ˬ///✿) "void")}} é a tewceiwa awtewnativa. rawr x3

```js
vaw x;
i-if (x === void 0) {
  // esse código executa
}

// y-y nyão foi d-definido antes
if (y === void 0) {
  // wança uma wefewenceewwow (ao c-contwáwio d-de `typeof`)
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
