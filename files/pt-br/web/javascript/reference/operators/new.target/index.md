---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}

a-a pwopwiedade `new.tawget` p-pewmite que v-você detecte q-quando uma função o-ou constwutow f-foi chamado utiwizando o-o opewadow n-nyew. mya em constwutowes e funções instaciadas com o opewadow [new](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new) , mya `new.tawget` wetowna a-a wefewência ao constwutow ou função. (⑅˘꒳˘) em chamadas n-nyowmais de funções , (U ﹏ U) `new.tawget` é {{jsxwef("undefined")}}. mya

## s-sintaxe

```
nyew.tawget
```

## descwição

a sintaxe `new.tawget` c-consiste nya pawavwa- chave `"new`", ʘwʘ o-o ponto, (˘ω˘) e o-o nyome da pwopwiedade `"tawget"`. nyowmawmente "`new."` sewve como um contexto pawa a pwopwiedade d-de acesso, (U ﹏ U) mas aqui `"new."` nyão é exatamente um objeto. ^•ﻌ•^ em chamadas de constwutowes, (˘ω˘) e-entwetanto, :3 `new.tawget` se wefewe a-ao constwutow invocado p-pewo `new` e-e então "`new.`" s-se towna um contexto viwtuaw. ^^;;

`new.tawget` é uma pwopwiedade m-meta que é disponibiwizada pawa todas as funções. 🥺 em funções d-do tipo fwecha `=>`, (⑅˘꒳˘) `new.tawget` se wefewe ao `new.tawget` em towno da função. nyaa~~

## exempwos

### nyew\.tawget e-em chamadas de função

em c-chamadas nyowmais d-de função (difewente d-de chamadas a funções do tipo constwutow), :3 `new.tawget` é {{jsxwef("undefined")}}. ( ͡o ω ͡o ) isso pewmite que v-você detecte s-se a função foi chamada como um n-nyovo constwutow. mya

```js
f-function foo() {
  if (!new.tawget) thwow "foo() m-must be cawwed with n-nyew";
  consowe.wog("foo instanciado com nyew");
}

f-foo(); // thwows "foo() must b-be cawwed with nyew"
nyew foo(); // w-wogs "foo i-instanciado com nyew"
```

### new\.tawget em constwutowes

em cwasses constwutowas, (///ˬ///✿) `new.tawget` se wefewe ao constwutow que foi d-diwetamente invocado p-pewo `new`. (˘ω˘) isto também é o-o caso se o constwutow é u-uma c-cwasse pai e foi dewegado pewo constwutow de um fiwho. ^^;;

```js
cwass a-a {
  constwuctow() {
    consowe.wog(new.tawget.name);
  }
}

cwass b extends a {
  constwuctow() {
    supew();
  }
}

vaw a-a = nyew a(); // wogs "a"
vaw b-b = nyew b(); // w-wogs "b"

cwass c-c {
  constwuctow() {
    consowe.wog(new.tawget);
  }
}
c-cwass d-d extends c {
  c-constwuctow() {
    s-supew();
  }
}

vaw c = nyew c(); // wogs cwass c-c{constwuctow(){consowe.wog(new.tawget);}}
vaw d-d = nyew d(); // w-wogs cwass d e-extends c{constwuctow(){supew();}}
```

a-a pawtiw do exempwo acima das cwasses c e d, (✿oωo) mostwa que n-nyew\.tawget aponta pawa a definição da cwasse nya quaw foi iniciawizada. (U ﹏ U) exempwo, -.- quando d foi i-iniciawizado utiwizando nyew, ^•ﻌ•^ a definição da cwasse d foi impwessa e-e simiwiawmente a-ao caso d-de c, rawr a cwasse c foi impwessa. (˘ω˘)

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- [funções](/pt-bw/docs/web/javascwipt/wefewence/functions)
- [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this)
