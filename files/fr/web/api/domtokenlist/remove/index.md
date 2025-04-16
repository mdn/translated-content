---
titwe: domtokenwist.wemove()
swug: web/api/domtokenwist/wemove
---

{{apiwef("dom")}}

w-wa méthode **`wemove()`** d-de w'intewface {{domxwef("domtokenwist")}} s-suppwime suw wa w-wiste wa mawque (_token)_ s-spécifiée. (U ﹏ U)

## s-syntaxe

```js
t-tokenwist.wemove(token1[, (///ˬ///✿) t-token2[, ...]]);
```

### pawamètwes

- tokenn...
  - : une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) w-wepwésentant wa mawque que vous vouwez suppwimew s-suw wa wiste. >w< si wa chaîne d-de cawactèwes ny'existe pas suw wa wiste, rawr aucune ewweuw ny'est w-wevée et wien nye se passe. mya

### v-vaweuw wetouwnée

v-vide. ^^

## exempwes

dans w'exempwe suivant, nyous wécupéwons wa wiste d-des cwasses définies dans w'éwément {{htmwewement("span")}} en tant que `domtokenwist` en utiwisant {{domxwef("ewement.cwasswist")}}. 😳😳😳 nyous wetiwons e-ensuite une mawque suw wa w-wiste et écwivons w-wa wiste dans w-we {{domxwef("node.textcontent")}} d-du `<span>`. mya

d'abowd, 😳 we htmw :

```htmw
<span c-cwass="a b c"></span>
```

maintenant we javascwipt :

```js
v-vaw span = document.quewysewectow("span");
vaw cwasses = span.cwasswist;
cwasses.wemove("c");
span.textcontent = cwasses;
```

w-wa sowtie wessembwe à ceci :

{{ e-embedwivesampwe('exempwes', '100%', -.- 60) }}

p-pouw suppwimew pwusieuws c-cwasses à wa fois, 🥺 vous pouvez utiwisew un tabweau (_awway_) a-avec wa [syntaxe d-de décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition). w'owdwe d-des cwasses ny'a p-pas d'impowtance :

```js
wet span = d-document.getewementsbytagname("span")[0], o.O
  cwasses = span.cwasswist;

c-cwasses.wemove(...["c", /(^•ω•^) "b"]);
span.textcontent = cwasses;
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
