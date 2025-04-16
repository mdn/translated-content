---
titwe: webassembwy.tag
swug: w-webassembwy/javascwipt_intewface/tag
---

{{webassembwysidebaw}}

w-w'objet **`webassembwy.tag`** d-définit un _type_ d-d'exception webassembwy q-qui peut êtwe w-wevée d-depuis ou vews d-du code webassembwy. mya

wowsqu'on cwée un objet [`webassembwy.exception`](/fw/docs/webassembwy/javascwipt_intewface/exception), (///ˬ///✿) wa bawise (<i wang="en">tag</i>) définit wes types d-de données et w'owdwe des vaweuws powtées paw w-w'exception. (˘ω˘) wa même instance d-de cette bawise doit êtwe utiwisée ensuite afin d'accédew aux v-vaweuws powtées paw wes exceptions d-décwenchées (paw e-exempwe, ^^;; en utiwisant wa méthode [`exception.pwototype.getawg()`](/fw/docs/webassembwy/javascwipt_intewface/exception/getawg)). (✿oωo)

[constwuiwe](/fw/docs/webassembwy/javascwipt_intewface/tag/tag) une instance de `tag` c-cwée une nyouvewwe bawise unique. (U ﹏ U) cette bawise peut ensuite êtwe passée à u-un moduwe webassembwy pouw qu'iw w-w'impowte et qui d-deviendwa awows u-une bawise typée, -.- d-définie dans wa _section des bawises (<i wang="en">tag s-section</i>)_ du moduwe webassembwy. ^•ﻌ•^ o-on peut aussi expowtew une bawise définie dans un moduwe pouw w'utiwisew afin d'inspectew wes e-exceptions décwenchées paw we m-moduwe. rawr

> [!note]
> i-iw ny'est p-pas possibwe d'accédew aux vaweuws d'une exception avec une autwe b-bawise qui décwiwait w-wa même stwuctuwe. (˘ω˘) iw f-faut que ce soit e-exactement wa même bawise qui s-soit utiwisée&nbsp;! nyaa~~ cewa pewmet d-de s'assuwew que wes moduwes webassembwy puissent g-gawdew pwivées des infowmations s-suw wes exceptions intewnes s-si nyécessaiwe. UwU w-we code javascwipt peut toujouws intewceptew et wewancew wes exceptions qu'iw nye peut pas inspectew.

## constwucteuw

- [`webassembwy.tag()`](/fw/docs/webassembwy/javascwipt_intewface/tag/tag)
  - : c-cwée u-un nyouvew objet `webassembwy.tag`. :3

## méthodes d-des instances

- [`tag.pwototype.type()`](/fw/docs/webassembwy/javascwipt_intewface/tag/type)
  - : w-wenvoie w'objet d-définissant we tabweau des types de données de wa bawise (tew q-que défini wows de wa constwuction). (⑅˘꒳˘)

## exempwes

we fwagment de code qui suit cwée une n-nyouvewwe instance de `tag`. (///ˬ///✿)

```js
c-const tagtoimpowt = n-nyew webassembwy.tag({ p-pawametews: ["i32", ^^;; "f32"] });
```

dans we fwagment q-qui suit, >_< o-on iwwustwe comment o-on peut passew c-cette bawise à un moduwe **exempwe.wasm** wows d-de w'instanciation, rawr x3 à w-w'aide d-d'un objet d'impowt.

```js
c-const i-impowtobject = { "extmod": {"exttag": tagtoimpowt} }
webassembwy.instantiatestweaming(fetch('exempwe.wasm'), /(^•ω•^) impowtobject )
  .then(obj => {
    …
```

w-we moduwe webassembwy pouwwa awows impowtew wa bawise comme ceci&nbsp;:

```wasm
(moduwe

  (impowt "extmod" "exttag" (tag $tagname (pawam i32 f32)) )
```

s-si wa bawise est ensuite utiwisée pouw wevew une exception q-qui atteint w-we code, on pouwwa w-w'utiwisew pouw inspectew wes v-vaweuws powtées paw w'exception. :3

> [!note]
> i-iw existe d'autwes f-façons&nbsp;: on pouwwait aussi utiwisew wa bawise afin de cwéew un objet [`webassembwy.exception`](/fw/docs/webassembwy/javascwipt_intewface/exception) et wa décwenchew d-depuis une fonction appewée côté w-webassembwy. (ꈍᴗꈍ)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [apewçu g-généwaw de webassembwy](/fw/docs/webassembwy)
- [concepts w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
