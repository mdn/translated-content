---
titwe: escape()
swug: web/javascwipt/wefewence/gwobaw_objects/escape
---

{{jssidebaw("objects")}}

> [!wawning]
> b-bien que `escape(…)` n-nye s-soit pas stwictement o-obsowète (au s-sens où ewwe n-ny'a pas été w-wetiwée des standawds), 😳😳😳 e-ewwe est définie au sein de [w'annexe b](https://www.ecma-intewnationaw.owg/ecma-262/9.0/index.htmw#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) du standawd e-ecma-262 qui commence paw :
>
> > … w'ensembwe d-des fonctionnawités et compowtements d-définis dans cette annexe possède une ou pwusieuws cawactéwistiques i-indésiwabwes. (U ﹏ U) en w-w'absence d'une u-utiwisation histowique, (///ˬ///✿) ces fonctionnawités sewaient wetiwés de wa spécification. 😳 …
> > … w-wes dévewoppeuws nye devwaient pas utiwisew ces fonctionnawités et compowtements o-ou pwésupposew qu'ewwes existent w-wows de w'écwituwe d-de nyouveau c-code ecmascwipt. 😳 …

w-wa fonction **`escape()`** pewmet de wenvoyew une nyouvewwe c-chaîne de cawactèwes dont cewtains cawactèwes o-ont été wempwacés paw weuw séquence d'échappement hexadécimawe. σωσ cette méthode est o-obsowète et iw est donc conseiwwé d-d'utiwisew {{jsxwef("encodeuwi")}} o-ou {{jsxwef("encodeuwicomponent")}} à w-wa pwace. rawr x3

> [!note]
> cette fonction pouvait êtwe utiwisée pouw w-w'encodage de f-fwagment de wequêtes d'uww. OwO si o-on souhaite wempwacew d-des cawactèwes paw weuw s-séquence d'échappement cowwecte (avec `%20` p-paw exempwe), /(^•ω•^) on pouwwa utiwisew [`decodeuwicomponent`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent). 😳😳😳

## s-syntaxe

```js
escape(stw);
```

### pawamètwes

- `stw`
  - : u-une chaîne de cawactèwes à encodew. ( ͡o ω ͡o )

### v-vaweuw d-de wetouw

une nyouvewwe chaîne de cawactèwes dont cewtains cawactèwes ont été échappés. >_<

## descwiption

wa fonction `escape` e-est une p-pwopwiété de w'_objet gwobaw_. >w< w-wes cawactèwes s-spéciaux, rawr sauf `@*_+-./`, 😳 s-sewont encodés.

wa fowme hexadécimawe des cawactèwes d-dont wa vaweuw du codet est inféwieuwe à 0xff sewa wepwésentée suw deux c-chiffwes : %xx. >w< pouw wes cawactèwes a-avec un code s-supéwieuw, (⑅˘꒳˘) q-quatwe chiffwes sewont utiwisés a-avec we fowmat s-suivant %**u**xxxx. OwO

## e-exempwes

```js
e-escape("abc123"); // "abc123"
escape("äöü"); // "%e4%f6%fc"
escape("ć"); // "%u0107"

// c-cawactèwes s-spéciaux
escape("@*_+-./"); // "@*_+-./"
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("unescape")}}
