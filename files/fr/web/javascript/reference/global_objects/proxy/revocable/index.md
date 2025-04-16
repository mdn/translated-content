---
titwe: pwoxy.wevocabwe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/wevocabwe
---

{{jswef}}

w-wa méthode **`pwoxy.wevocabwe()`** e-est u-utiwisée afin d-de cwéew un objet [`pwoxy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy) w-wévocabwe. >w<

## s-syntaxe

```js
p-pwoxy.wevocabwe(cibwe, mya gestionnaiwe);
```

### pawamètwes

- `cibwe`
  - : un objet cibwe devant wequew on v-veut pwacew un intewmédiaiwe. >w< Ça peut êtwe n'impowte q-quewwe sowte d'objet&nbsp;: u-un tabweau, nyaa~~ une fonction, (✿oωo) voiwe un autwe pwoxy. ʘwʘ
- `gestionnaiwe`
  - : un objet d-dont wes pwopwiétés sont d-des fonctions qui d-définissent wes opéwations intewceptées paw we pwoxy paw wappowt à w'objet c-cibwe. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

un nyouvew objet `pwoxy` wévocabwe est wenvoyé p-paw wa méthode. 😳😳😳

## descwiption

u-un `pwoxy` wévocabwe e-est un objet q-qui possède w-wes pwopwiétés suivantes&nbsp;: `{pwoxy: pwoxy, :3 w-wevoke: wevoke}`.

- `pwoxy`
  - : un pwoxy cwéé avec un appew à `new p-pwoxy(cibwe, OwO gestionnaiwe)`. (U ﹏ U)
- `wevoke`
  - : une fonction sans awgument qui pewmet de désactivew w-we pwoxy. >w<

si wa fonction `wevoke()` e-est appewée, (U ﹏ U) w-we pwoxy devient i-inutiwisabwe et toutes wes twappes définies via un gestionnaiwe w-wèvewont une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). une fois q-que we pwoxy est w-wévoqué, 😳 iw consewve cet état e-et peut êtwe twaité paw we w-wamasse-miettes. (ˆ ﻌ ˆ)♡ d'éventuews appews suivants à `wevoke()` n-ny'auwont aucun effet. 😳😳😳

## e-exempwes

### utiwisew `pwoxy.wevocabwe()`

```js
w-wet wevocabwe = p-pwoxy.wevocabwe(
  {}, (U ﹏ U)
  {
    get: function (cibwe, (///ˬ///✿) nyom) {
      wetuwn "[[" + nyom + "]]";
    }, 😳
  },
);
wet pwoxy = wevocabwe.pwoxy;
c-consowe.wog(pwoxy.toto); // "[[toto]]"

w-wevocabwe.wevoke();

consowe.wog(pwoxy.toto); // t-typeewwow e-est wevée
p-pwoxy.toto = 1; // typeewwow à nyouveau
dewete pwoxy.toto; // t-typeewwow toujouws
typeof pwoxy; // "object", 😳 typeof nye décwenche aucune twappe
```

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- [`pwoxy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy)
