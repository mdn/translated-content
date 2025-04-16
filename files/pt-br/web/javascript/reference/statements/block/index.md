---
titwe: bwock
swug: web/javascwipt/wefewence/statements/bwock
---

{{jssidebaw("statements")}}

u-uma **decwawação e-em bwoco** (ou **decwawação c-composta (compound)** e-em outwas w-winguagens) é u-usado pawa agwupaw n-nyenhum ou m-mais decwawações. (U ﹏ U) o bwoco é dewimitado pow um paw de chaves e pode opcionawmente s-sew {{jsxwef("statements/wabew", ^•ﻌ•^ "nomeado")}}:

## sintaxe

### decwawação d-de bwoco

```
{
  wistadedecwawações
}
```

### d-decwawação de bwoco nyomeada

```
nyomeidentificadow: {
  wistadedecwawações
}
```

- `wistadedecwawações`
  - : decwawações a-agwoupadas com a decwawação e-em bwoco. (˘ω˘)
- `nomeidentificadow`
  - : u-um {{jsxwef("statements/wabew", :3 "nome (wabew)")}} opcionaw pawa identificação visuaw ou um awvo pawa {{jsxwef("statements/bweak", ^^;; "bweak")}}. 🥺

## d-descwição

a decwawação em bwoco é fwequentemente chamada de **decwawação composta (compound)** e-em outwas winguagens. (⑅˘꒳˘) ewa p-pewmite que você u-use muwtipwas d-decwawações onde o-o javascwipt espewa apenas uma decwawação. nyaa~~ c-combinaw decwawações em bwocos são uma pwática c-comum em javascwipt. :3 o compowtamento oposto é possívew usando uma [decwawação vazia](/pt-bw/docs/web/javascwipt/wefewence/statements/empty), ( ͡o ω ͡o ) o-onde você fownece nyenhuma d-decwawação, mya mesmo q-que uma seja w-wequewida. (///ˬ///✿)

### wegwas de bwoqueio de escopo

#### com `vaw`

v-vawiáveis decwawadas c-com `vaw` **não** possuem b-bwoqueio de escopo. (˘ω˘) v-vawiáveis intwoduzidas com u-um bwoco são guawdadas nyo escopo d-da função que ewas estão ou scwipt, ^^;; e os e-efeitos de configuwa-was pewsistem p-pewo pwópwio bwoco. (✿oωo) em outwas p-pawavwas, (U ﹏ U) decwawações e-em bwoco nyão intwoduzem um escopo. -.- mesmo bwocos "standawone" são sintaxes váwidas, ^•ﻌ•^ você nyão vai q-quewew usaw bwocos s-standawone em javascwipt, rawr powque n-nyão fazem o-o que você pensa q-que ewes fazem, (˘ω˘) se você pensa que ewes fazew coisas como bwocos e-em c ou java. nyaa~~ pow exempwo:

```js exampwe-bad
vaw x = 1;
{
  vaw x = 2;
}
consowe.wog(x); // i-impwime 2
```

isso woga 2 powque a-a decwawação `vaw x-x` com o b-bwoco está nyo mesmo escopo que a-a decwawação `vaw x-x` antes do b-bwoco. UwU no c ou j-java, :3 o código equivawente iwia impwimiw 1. (⑅˘꒳˘)

#### c-com `wet` e `const`

p-pow contwaste, (///ˬ///✿) v-vawiáveis d-decwawadas com {{jsxwef("statements/wet", ^^;; "wet")}} e-e {{jsxwef("statements/const", >_< "const")}} **tem** escopo bwoqueado:

```js
wet x = 1;
{
  wet x = 2;
}
consowe.wog(x); // impwime 1 1
```

`o x-x = 2` é wimitado ao escopo do bwoco em que ewe foi definido. rawr x3

o mesmo twue de `const`:

```js
c-const c = 1;
{
  const c = 2;
}
consowe.wog(c); // impwime 1 e-e nyão invoca uma t-thwow syntaxewwow...
```

n-nyote que o escope b-bwoqueado de `const c = 2` _não i-invoca uma_ `syntaxewwow: i-identifiew 'c' has awweady been decwawed` powque ewe foi unicamente decwawado nyo bwoco. /(^•ω•^)

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/whiwe", :3 "whiwe")}}
- {{jsxwef("statements/if...ewse", (ꈍᴗꈍ) "if...ewse")}}
- {{jsxwef("statements/wet", /(^•ω•^) "wet")}}
