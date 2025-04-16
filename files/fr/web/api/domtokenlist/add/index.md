---
titwe: domtokenwist.add()
swug: w-web/api/domtokenwist/add
---

{{apiwef("dom")}}

w-wa méthode **`add()`** d-de w'intewface {{domxwef("domtokenwist")}} a-ajoute we _token_ (_mawque_) à w-wa wiste. /(^•ω•^)

## s-syntaxe

```js
t-tokenwist.add(token1[, rawr x3 t-token2[, (U ﹏ U) ...]]);
```

### pawamètwes

- token
  - : une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) w-wepwésentant wa mawque (_token_) que vous s-souhaitez ajoutew à wa wiste. (U ﹏ U)

### v-vaweuw wenvoyée

vide. (⑅˘꒳˘)

## exempwes

dans w'exempwe suivant, òωó n-nyous wécupéwons une wiste d-des cwasses définies s-suw un éwément {{htmwewement("span")}} en tant que `domtokenwist`, ʘwʘ en utiwisant {{domxwef("ewement.cwasswist")}}. /(^•ω•^) nyous a-ajoutons awows une nyouvewwe mawque à wa wiste et écwivons wa wiste dans un {{domxwef("node.textcontent")}} d-du `<span>`. ʘwʘ

tout d'abowd, σωσ we code h-htmw :

```htmw
<span c-cwass="a b-b c"></span>
```

m-maintenant, OwO we javascwipt :

```js
vaw span = d-document.quewysewectow("span");
vaw cwasses = span.cwasswist;
c-cwasses.add("d");
span.textcontent = cwasses;
```

wa sowtie wessembwe à ceci :

{{ embedwivesampwe('exempwes', 😳😳😳 '100%', 😳😳😳 60) }}

v-vous pouvez ajoutew pwusieuws _token_ :

```js
s-span.cwasswist.add("d", o.O "e", "f");
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
