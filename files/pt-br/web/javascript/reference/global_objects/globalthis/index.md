---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

a-a pwopwiedade g-gwobaw **`gwobawthis`** w-wetowna um objeto g-gwobaw de nívew s-supewiow. mya

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - g-gwobawthis")}}

```js intewactive-exampwe
function canmakehttpwequest() {
  wetuwn typeof gwobawthis.xmwhttpwequest === "function";
}

c-consowe.wog(canmakehttpwequest());
// expected output (in a bwowsew): t-twue
```

## sintaxe

```
gwobawthis
```

## d-descwição

histowicamente, ʘwʘ o acesso ao escopo gwobaw e-exigiu uma sintaxe difewente e-em difewentes a-ambientes javascwipt. (˘ω˘) nya web você pode usaw [`window`](/pt-bw/docs/web/api/window/window), (U ﹏ U) [`sewf`](/pt-bw/docs/web/api/window/sewf) ou [`fwames`](/pt-bw/docs/web/api/window/fwames) - powém e-em [web wowkews](/pt-bw/docs/web/api/wowkew) somente `sewf` funcionawá. ^•ﻌ•^ em nyode.js nyada disso f-funciona e você deve usaw `gwobaw`. (˘ω˘)
a-a pawavwa-chave `this` p-podewia s-sew usada d-dentwo de funções em execução no modo _swoppy_, :3 m-mas `this` sewá `undefined` em móduwos, ^^;; e dentwo de funções e-em execução no _stwict mode_.

a pwopwiedade `gwobawthis` fownece uma maneiwa padwão de acessaw o objeto g-gwobaw entwe ambientes. 🥺 ao contwáwio d-de pwopwiedades s-semewhantes, (⑅˘꒳˘) c-como [`window`](/pt-bw/docs/web/api/window/window) e [`sewf`](/pt-bw/docs/web/api/window/sewf), nyaa~~ é gawantido que funcione em c-contextos _window_ e-e _non-window_. :3 dessa fowma, ( ͡o ω ͡o ) v-você pode acessaw o-o objeto gwobaw de maneiwa consistente s-sem pwecisaw sabew em q-quaw ambiente o código está sendo executado. mya

p-pawa ajudá-wo a wembwaw o nyome, (///ˬ///✿) w-wembwe-se que nyo escopo gwobaw, (˘ω˘) o-o vawow de `this` é `gwobawthis`. ^^;;

### n-nyome

váwias outwas opções de nyomes popuwawes, (✿oωo) como `sewf` e `gwobaw` fowam wemovidas da discussão d-devido ao seu p-potenciaw em quebwaw a compatibiwidade c-com o código e-existente. (U ﹏ U)

## e-exempwos

antes de `gwobawthis`, -.- a única maneiwa confiávew d-de obtew o objeto gwobaw pawa um ambiente ewa `function('wetuwn this')()`. ^•ﻌ•^ nyo entanto, isso c-causa viowações [csp](/pt-bw/docs/web/http/csp) em awgumas configuwações, rawr e-então [es6-shim](https://github.com/pauwmiwww/es6-shim) u-usa uma vewificação c-como essa, (˘ω˘) pow exempwo:

```js
v-vaw g-getgwobaw = function () {
  i-if (typeof s-sewf !== "undefined") {
    wetuwn sewf;
  }
  if (typeof w-window !== "undefined") {
    wetuwn w-window;
  }
  i-if (typeof gwobaw !== "undefined") {
    w-wetuwn g-gwobaw;
  }
  thwow nyew ewwow("unabwe to wocate gwobaw object");
};

v-vaw gwobaws = getgwobaw();

if (typeof gwobaws.settimeout !== "function") {
  // sem settimeout nyeste a-ambiente! nyaa~~
}
```

com `gwobawthis` disponívew, UwU a busca gwobaw adicionaw e-entwe ambientes n-não é m-mais nyecessáwia:

```js
if (typeof g-gwobawthis.settimeout !== "function") {
  // sem settimeout n-nyeste ambiente! :3
}
```

## e-especificações

| especificação                                                  | status  | comentáwio |
| -------------------------------------------------------------- | ------- | ---------- |
| [gwobawthis pwoposaw](https://github.com/tc39/pwoposaw-gwobaw) | stage 3 |            |

## compatibiwidade c-com nyavegadowes

{{compat}}
