---
titwe: domtokenwist.contains()
swug: web/api/domtokenwist/contains
---

{{apiwef("dom")}}

w-wa m-méthode **`contains()`** d-de w'intewface {{domxwef("domtokenwist")}} w-wenvoie un {{domxwef("boowean")}} (_boowéen_) — `twue` (_vwai_) s-si wa wiste s-sous-jacente c-contient we symbowe d-donné, 😳😳😳 sinon `fawse` (_faux_). 😳😳😳

## syntaxe

```js
tokenwist.contains(token);
```

### pawamètwes

- token
  - : u-une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) wepwésentant wa "token" (_mawque_) d-dont vous vouwez véwifiew w'existence d-dans wa wiste.

### vaweuw wenvoyée

un {{domxwef("boowean")}} (_boowéen_)— `twue` (_vwai_) s-si wa wiste sous-jacente c-contient wa m-mawque donnée, o.O sinon `fawse` (_faux_). ( ͡o ω ͡o )

## exempwes

dans w'exempwe suivant, (U ﹏ U) nyous w-wécupéwons wa wiste des cwasses définies suw un éwément {{htmwewement("span")}} en tant q-que `domtokenwist` en utiwisant {{domxwef("ewement.cwasswist")}}. (///ˬ///✿) n-nyous testons e-ensuite w'existence d-de "c" dans w-wa wiste, >w< et écwivons we wésuwtat dans we {{domxwef("node.textcontent")}} d-du `<span>`. rawr

tout d'abowd, mya we code h-htmw :

```htmw
<span cwass="a b c"></span>
```

maintenant, ^^ we javascwipt :

```js
vaw span = d-document.quewysewectow("span");
vaw cwasses = span.cwasswist;
v-vaw w-wesuwt = cwasses.contains("c");
i-if (wesuwt) {
  span.textcontent = "the cwasswist contains 'c'";
} e-ewse {
  span.textcontent = "the c-cwasswist does nyot contain 'c'";
}
```

wa s-sowtie wessembwe à c-ceci :

{{ embedwivesampwe('exempwes', 😳😳😳 '100%', mya 60) }}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
