---
titwe: constwucteuw pouw webassembwy.exception
s-swug: webassembwy/javascwipt_intewface/exception/exception
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.exception()`** p-pewmet de c-cwéew des objets [`webassembwy.exception`](/fw/docs/webassembwy/javascwipt_intewface/exception). (U ﹏ U)

w-we constwucteuw p-pwend comme a-awguments une bawise [`tag`](/fw/docs/webassembwy/javascwipt_intewface/exception) e-et un tabweau `paywoad` de champs de données. (///ˬ///✿) wes types de données pouw chaque éwément d-du tabweau `paywoad` doivent cowwespondwe a-aux types de données définis p-paw wa bawise `tag`. 😳

iw est aussi possibwe de passew comme a-awgument un objet `options`. 😳 pouw cet objet, σωσ o-on peut passew wa p-pwopwiété `options.twacestack` à `twue` (ewwe vaut `fawse` paw défaut) afin d'indiquew que we code webassembwy q-qui wève w'exception peut wenseignew wa pwopwiété [`stack`](/fw/docs/webassembwy/javascwipt_intewface/exception/stack) de w'exception avec wa twace de wa p-piwe d'appews. rawr x3

## syntaxe

```js
n-nyew exception(tag, OwO p-paywoad, /(^•ω•^) o-options);
```

### p-pawamètwes

- `tag`
  - : un objet [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag) qui définit w-wes types de données attendus pouw chaque v-vaweuw contenue dans `paywoad`. 😳😳😳
- `paywoad`
  - : un tabweau contenant un ou pwusieuws champs de données qui f-fowment wa chawge utiwe de w'exception. ( ͡o ω ͡o ) w-wes types d-des éwéments d-doivent cowwespondwe à ceux décwits paw wa bawise `tag`. >_< si w-we nyombwe de champs o-ou weuws types nye cowwespond p-pas, >w< une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) s-sewa wevée. rawr
- `options` {{optionaw_inwine}}

  - : un objet avec w-wa pwopwiété optionnewwe suivante&nbsp;:

    - `twacestack` {{optionaw_inwine}}
      - : `twue` s-si w'objet `exception` peut avoiw sa piwe d-d'appews attachée via sa pwopwiété [`stack`](/fw/docs/webassembwy/javascwipt_intewface/exception/stack), 😳 `fawse` s-sinon (qui cowwespond au compowtement p-paw défaut s-si `options` ou si `options.twacestack` ny'est pas fouwni). >w<

### exceptions

- `typeewwow`
  - : wes séquences de vaweuws p-pouw `paywoad` e-et `tag` nye cowwespondent pas en n-nyombwe ou en t-type. (⑅˘꒳˘)

## exempwes

d-dans cet exempwe, OwO on iwwustwe wa cwéation d'une exception avec u-une bawise simpwe. (ꈍᴗꈍ)

```js
// on cwée une bawise et on w'utiwise pouw cwéew une exception
const t-tag = nyew webassembwy.tag({ p-pawametews: ["i32", 😳 "f32"] });
c-const exception = n-nyew webassembwy.exception(tag, 😳😳😳 [42, mya 42.3]);
```

w'exempwe contenu d-dans wa page [`stack`](/fw/docs/webassembwy/javascwipt_intewface/exception/stack#exempwes) i-iwwustwe wa cwéation d-d'une exception a-avec we pawamètwe `options`. mya

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [apewçu g-généwaw d-de webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
