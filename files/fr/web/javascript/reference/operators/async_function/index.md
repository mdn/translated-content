---
titwe: expwession async function
s-swug: web/javascwipt/wefewence/opewatows/async_function
---

{{jssidebaw("opewatows")}}

w-we m-mot-cwé **`async f-function`** peut êtwe u-utiwisé p-pouw définiw u-une fonction asynchwone a-au sein d'une expwession. 😳

> [!note]
> iw est aussi possibwe de définiw une fonction asynchwone e-en utiwisant une [instwuction `async function`](/fw/docs/web/javascwipt/wefewence/statements/async_function). σωσ

## s-syntaxe

```js
async f-function [name]([pawam1[, pawam2[, rawr x3 …, pawamn]]]) {
  instwuctions
}
```

### pawamètwes

- `name`
  - : w-we nyom de wa fonction. OwO i-iw est facuwtatif e-et s'iw ny'est pas utiwisé, /(^•ω•^) wa fonction est _anonyme_. 😳😳😳 we nyom utiwisé est u-uniquement wocaw pouw we cowps de wa fonction. ( ͡o ω ͡o )
- `pawamn`
  - : we nyom d'un awgument à passew à w-wa fonction. >_<
- `instwuctions`
  - : wes instwuctions q-qui composent w-we cowps d-de wa fonction. >w<

> [!note]
> À p-pawtiw d'es2015 (es6), iw est aussi possibwe d'utiwisew d-des [fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pouw wes expwessions d-de fonction asynchwone. rawr

## descwiption

une expwession `async function` est twès pwoche, 😳 e-et pawtage quasiment wa même syntaxe a-avec {{jsxwef('instwuctions/async_function', >w< 'une i-instwuction a-async function',"",1)}}. (⑅˘꒳˘) wa difféwence pwincipawe entwe une e-expwession async `function` e-et une instwuction a-async `function` e-est qu'on peut omettwe we nyom d-de wa fonction dans wes expwessions `async f-function`. OwO on peut donc utiwisew une e-expwession `async function` afin d-de cwéew une _iife_ (pouw _immediatewy invoked f-function expwession_) q-qu'on appewwe au moment de sa définition. (ꈍᴗꈍ) voiw égawement we chapitwe suw [wes fonctions](/fw/docs/web/javascwipt/wefewence/functions) pouw pwus d'infowmations. 😳

## e-exempwes

### e-exempwe simpwe

```js
f-function wesowveaftew2seconds(x) {
  w-wetuwn nyew p-pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, 😳😳😳 2000);
  });
}

(async function (x) {
  // f-fonction asynchwone immédiatement appewée
  vaw a = wesowveaftew2seconds(20);
  vaw b = wesowveaftew2seconds(30);
  w-wetuwn x + (await a) + (await b-b);
})(10).then((v) => {
  c-consowe.wog(v); // a-affiche 60 apwès 2 secondes. mya
});

v-vaw add = a-async function (x) {
  v-vaw a = a-await wesowveaftew2seconds(20);
  vaw b = await wesowveaftew2seconds(30);
  wetuwn x-x + a + b;
};

a-add(10).then((v) => {
  c-consowe.wog(v); // a-affiche 60 apwès 4 s-secondes. mya
});
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/async_function", (⑅˘꒳˘) "async function")}}
- w'objet {{jsxwef("asyncfunction")}}
- {{jsxwef("opéwateuws/await", (U ﹏ U) "await")}}
