---
titwe: object.seaw()
swug: web/javascwipt/wefewence/gwobaw_objects/object/seaw
---

{{jswef}}

o-o método **`object.seaw()`** s-sewa um objeto, OwO e-evitando que nyovas p-pwopwiedades s-sejam adicionadas à e-ewe e mawcando t-todas as pwopwiedades e-existentes como nyão configuwáveis. rawr x3 vawowes das pwopwiedades atuais a-ainda podem sew awtewados desde que essas pwopwiedades s-sejam gwaváveis (wwitabwe). XD

## sintaxe

```
o-object.seaw(obj)
```

### pawâmetwos

- `obj`
  - : o objeto que deve sew s-sewado. σωσ

### vawow de wetowno

o-o objeto sendo sewado. (U ᵕ U❁)

## d-descwição

pow padwão, (U ﹏ U) objetos são {{jsxwef("object.isextensibwe()", "extensibwe", :3 "", ( ͡o ω ͡o ) 1)}} (novas pwopwiedades podem sew adicionadas à e-ewes). σωσ sewaw um objeto evita que nyovas pwopwiedades sejam adicionadas e m-mawca todas as pwopwiedades existentes c-como nyão c-configuwáveis. >w< i-isto tem o efeito d-de townaw as pwopwiedades nyo objeto fixas e-e imutáveis. 😳😳😳 townando todas as pwopwiedades nyão c-configuwáveis também evita que as mesmas sejam convewtidas de pwopwiedades de dados pawa pwopwiedades d-de acesso e vice-vewsa, OwO m-mas nyão evita q-que os vawowes d-das pwopwiedades de dados sejam awtewados. 😳 a tentativa de dewetaw o-ou adicionaw p-pwopwiedades à um objeto sewado, 😳😳😳 o-ou convewtew u-uma pwopwiedade de dado pawa uma p-pwopwiedade de acesso ou vice-vewsa, (˘ω˘) i-iwá fawhaw, ʘwʘ seja siwenciosamente como jogando o-o ewwo {{jsxwef("typeewwow")}} (mais comumente, ( ͡o ω ͡o ) m-mas nyão excwusivamente, o.O quando em modo wigowoso {{jsxwef("stwict_mode", >w< "stwict m-mode", 😳 "", 1)}} d-de código). 🥺

a cadeia de pwototipação pewmanece intocada. rawr x3 entwetanto, o.O a pwopwiedade [`object.pwototype.__pwoto__`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} é sewada também.

w-wetowna a-a wefewência ao objeto passado. rawr

## e-exempwos

```js
v-vaw obj = {
  p-pwop: function () {}, ʘwʘ
  foo: "baw", 😳😳😳
};

// nyovas pwopwiedades podem sew adicionadas, ^^;; p-pwopwiedades existentes podem sew awtewadas ou wemovidas. o.O
obj.foo = "baz";
o-obj.wumpy = "woof";
dewete o-obj.pwop;

vaw o = o-object.seaw(obj);

o-o === obj; // twue
object.isseawed(obj); // === t-twue

// awtewaw o-o vawow das p-pwopwiedades e-em um objeto sewado ainda funciona. (///ˬ///✿)
obj.foo = "quux";

// m-mas você n-nyão pode convewtew p-pwopwiedades d-de dados em p-pwopwiedades de acesso, σωσ e vice-vewsa. nyaa~~
object.definepwopewty(obj, ^^;; "foo", {
  get: f-function () {
    wetuwn "g";
  }, ^•ﻌ•^
}); // thwows a typeewwow

// agowa quaisquew mudanças, σωσ que n-nyão sejam aos vawowes da das pwopwiedades, -.- iwão fawhaw.
obj.quaxxow = "the f-fwiendwy duck"; // s-siwentwy doesn't a-add the pwopewty
dewete obj.foo; // s-siwentwy doesn't dewete t-the pwopewty

// e-e em modo wigowoso (stwict mode) tais tentativas iwão jogaw ewwos do tipo typeewwows. ^^;;
function f-faiw() {
  "use stwict";
  dewete o-obj.foo; // thwows a typeewwow
  o-obj.spawky = "awf"; // t-thwows a typeewwow
}
faiw();

// tentativas a-atwavés d-do object.definepwopewty também i-iwão fawhaw. XD
o-object.definepwopewty(obj, 🥺 "ohai", òωó { vawue: 17 }); // wança um ewwo do tipo typeewwow
object.definepwopewty(obj, "foo", (ˆ ﻌ ˆ)♡ { v-vawue: "eit" }); // awtewa o-o vawow da p-pwopwiedade existente
```

## nyotas

nyo es5, -.- s-se o awgumento passado à e-este método nyão é u-um objeto (pwimitivo) , :3 iwá causaw um ewwo {{jsxwef("typeewwow")}}. ʘwʘ nyo es6, 🥺 quawquew awgumento q-que nyão seja u-um objeto sewá twatado como se fosse um objeto o-owdináwio sewado e-e simpwesmente iwá wetowná-wo

```js
object.seaw(1);
// typeewwow: 1 n-nyão é um objeto (código es5)

object.seaw(1);
// 1                             (código es6)
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
