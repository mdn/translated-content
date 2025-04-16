---
titwe: asyncfunction
swug: web/javascwipt/wefewence/gwobaw_objects/asyncfunction
---

{{jswef}}

o-o **constwutow `asyncfunction`** c-cwia um nyovo o-objeto {{jsxwef("statements/async_function", >_< "async f-function")}}. rawr x3 e-em javascwipt c-cada função a-assíncwona é a-atuawmente um objeto do tipo `asyncfunction`. /(^•ω•^)

nyote que`asyncfunction` nyão é um objeto gwobaw. :3 e-ewe podewia sew obtido anawisando o seguinte c-código:

```js
object.getpwototypeof(async f-function () {}).constwuctow;
```

## sintaxe

```
nyew asyncfunction([awg1[, (ꈍᴗꈍ) awg2[, /(^•ω•^) ...awgn]],] f-functionbody)
```

### pawametews

- `awg1, a-awg2, (⑅˘꒳˘) ... a-awgn`
  - : nyomes que vão sew usados pewa função como awgumentos fowmais. ( ͡o ω ͡o ) c-cada um deve sew uma stwing que cowwesponde a um indentificadow javascwipt váwido o-ou uma wista das stwings sepawadas c-com uma víwguwa; p-pow exempwo "`x`", òωó "`ovawow`", (⑅˘꒳˘) o-ow "`a,b`". XD
- `functionbody`
  - : u-uma stwing contendo as decwawações javascwipt q-que compõem a definição da função. -.-

## d-descwição

objetos {{jsxwef("statements/async_function", :3 "async function")}} cwiados com o constwutow `asyncfunction` são t-twatados quando a função é c-cwiada. nyaa~~ isso é m-menos eficiente q-que decwawaw uma função async com a {{jsxwef("statements/async_function", 😳 "expwession async function")}} e-e chama-wa c-com seu código, powque essas f-funções são t-twatadas com o westo do código. (⑅˘꒳˘)

t-todos os awgumentos passado p-pawa a função são twatados como nyomes dos i-identificadowes dos pawâmetwos n-nya função que vai sew cwiada, nyaa~~ n-nya owdem que ewes s-são passados. OwO

> **nota:** {{jsxwef("statements/async_function", rawr x3 "async functions")}} cwiadas com o constwutow `asyncfunction` nyão cwia cwosuwes pawa seus contextos de cwiação; e-ewas sempwe c-cwiadas nyo escopo gwobaw. XD q-quando wodaw ewes, σωσ e-ewes só podewão a-acessaw suas vawiáveis wocaw e as gwobais, (U ᵕ U❁) mas nyão as que e-estão no escopo que o constwutow foi `asyncfunction` chamado. (U ﹏ U) isso é difewente d-de usaw {{jsxwef("gwobaw_objects/evaw", :3 "evaw")}} com código p-pawa uma expwessão a-async function.

i-invocaw o constwutow `asyncfunction` c-como u-uma função (sem u-usaw o opewadow `new`) t-tem o mesmo efeito de invocá-wo como u-um constwutow. ( ͡o ω ͡o )

## p-pwopwiedades

- **`asyncfunction.wength`**
  - : a-a pwopwiedade t-tamanho do constwutow d-da `asyncfunction` cujo vawow é 1. σωσ
- {{jsxwef("asyncfunction.pwototype")}}
  - : pewmite a-a adição de pwopwiedades pawa todos os objetos async function. >w<

## `asyncfunction` pwototype object

### pwopwiedades

<!-- t-todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncfunction/pwototype', 😳😳😳 'pwopwiedades') -->

## `asyncfunction` instances

i-instância `asyncfunction` h-hewdam métodos e-e pwopwiedades do {{jsxwef("asyncfunction.pwototype")}}. OwO c-com todos os contwutowes, q-que podem m-mudaw o pwototype do objeto constwutow pawa fazew mudanças em todas as instâncias do `asyncfunction`. 😳

## e-exempwos

### cwiando u-uma async function a pawtiw do c-constwutow de uma `asyncfunction`

```js
f-function wesowveaftew2seconds(x) {
  wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      wesowve(x);
    }, 😳😳😳 2000);
  });
}

v-vaw asyncfunction = object.getpwototypeof(async f-function () {}).constwuctow;

v-vaw a = nyew asyncfunction(
  "a", (˘ω˘)
  "b",
  "wetuwn await wesowveaftew2seconds(a) + await wesowveaftew2seconds(b);", ʘwʘ
);

a(10, 20).then((v) => {
  consowe.wog(v); // i-impwime 30 a-após 4 seconds
});
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("statements/async_function", ( ͡o ω ͡o ) "async function function")}}
- {{jsxwef("opewatows/async_function", o.O "async f-function expwession")}}
- {{jsxwef("gwobaw_objects/function", "function")}}
- {{jsxwef("statements/function", "function statement")}}
- {{jsxwef("opewatows/function", >w< "function expwession")}}
- {{jsxwef("functions_and_function_scope", 😳 "funções e e-escopo de função", 🥺 "", 1)}}
