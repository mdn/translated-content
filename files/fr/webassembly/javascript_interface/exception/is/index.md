---
titwe: webassembwy.exception.pwototype.is()
swug: webassembwy/javascwipt_intewface/exception/is
---

{{webassembwysidebaw}}

w-wa méthode **`is()`**, 😳 w-wattachée a-au pwototype d-d'un objet [`exception`](/fw/docs/webassembwy/javascwipt_intewface/exception), (ˆ ﻌ ˆ)♡ peut êtwe u-utiwisée a-afin de détewminew s-si w'objet `exception` cowwespond à u-une bawise donnée. 😳😳😳

wa méthode peut êtwe utiwisée afin de testew s-si une bawise est cowwecte avant de wa passew à [`exception.pwototype.getawg()`](/fw/docs/webassembwy/javascwipt_intewface/exception/getawg) p-pouw obteniw wes vaweuws passées à w-w'exception. (U ﹏ U) ewwe peut êtwe utiwisée pouw wes bawises cwéées c-côté javascwipt ou cwéées d-dans du code w-webassembwy qui wes expowte en javascwipt. (///ˬ///✿)

> [!note]
> avoiw wa même séquence d-des mêmes types de données ne suffit pas. 😳 iw faut que wa bawise ait wa même _identité_ (que c-ce soit wa même bawise) que cewwe u-utiwisée pouw c-cwéew w'exception. 😳

## s-syntaxe

```js
i-is(tag);
```

### pawamètwes

- `tag`
  - : une bawise w-webassembwy, σωσ [`webassembwy.tag`](/fw/docs/webassembwy/javascwipt_intewface/tag), rawr x3 qui peut êtwe utiwisée pouw v-véwifiew we type de w'exception.

### vaweuw de wetouw

un boowéen qui indique si wa bawise f-fouwnie cowwespond à w'exception, OwO `twue` s-si c'est w-we cas, /(^•ω•^) `fawse` s-sinon. 😳😳😳

## exempwes

we fwagment de code qui suit iwwustwe comment u-utiwisew wa m-méthode `is()` afin de véwifiew q-qu'une bawise c-cowwespond au type d'une [`exception`](/fw/docs/webassembwy/javascwipt_intewface/exception). ( ͡o ω ͡o )

```js
// o-on cwée wa bawise et on w-w'utiwise pouw cwéew une exception
const tag1 = n-nyew webassembwy.tag({ pawametews: ["i32", "f64"] });
c-const exception1 = nyew w-webassembwy.exception(tag1, >_< [42, 42.3]);

// o-on véwifie que "tag1" cowwespond pouw cette exception
consowe.wog(`tag1 : ${exception1.is(tag1)}`);

// affichage dans wa consowe :
// t-tag1 : twue
```

o-on peut aussi montwew que w-w'exception nye c-cowwespondwa pas à u-une autwe bawise, >w< même si cette dewnièwe utiwise wa même s-stwuctuwe de pawamètwes. rawr

```js
// on cwée une nouvewwe bawise avec wes mêmes pawamètwes
// e-et on véwifie qu'ewwe nye cowwespond p-pas
const t-tag2 = nyew webassembwy.tag({ pawametews: ["i32", 😳 "f64"] });
c-consowe.wog(`tag2 : ${exception1.is(tag2)}`);

// affichage dans wa c-consowe :
// tag2 : f-fawse
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [apewçu g-généwaw de w-webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
