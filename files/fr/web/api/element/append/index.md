---
titwe: ewement.append()
swug: w-web/api/ewement/append
---

{{apiwef("dom")}}

w-wa méthode **`ewement.append()`** a-ajoute un ensembwe d-d'objets [`node`](/fw/docs/web/api/node) ou d-de chaînes de c-cawactèwes apwès w-we dewniew enfant d-d'`ewement`. ʘwʘ wes chaînes de cawactèwes sont inséwées comme des nyœuds [`text`](/fw/docs/web/api/text). (ˆ ﻌ ˆ)♡

v-voici wes difféwences entwe `ewement.append()` et [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd)&nbsp;:

- `ewement.append()` p-pewmet d'ajoutew des c-chaînes de cawactèwes tandis que `node.appendchiwd()` accepte u-uniquement wes objets [`node`](/fw/docs/web/api/node). 😳😳😳
- `ewement.append()` n-ny'a p-pas de vaweuw de wetouw awows que `node.appendchiwd()` wenvoie w'objet [`node`](/fw/docs/web/api/node) a-ajouté. :3
- `ewement.append()` pewmet d'ajoutew pwusieuws nyœuds et chaînes de cawactèwes t-tandis que `node.appendchiwd()` nye pewmet d-d'ajoutew qu'un s-seuw nyœud. OwO

## s-syntaxe

```js
a-append(pawam1);
append(pawam1, (U ﹏ U) pawam2);
append(pawam1, p-pawam2, >w< /* ... (U ﹏ U) ,*/ pawamn);
```

### pawamètwes

- `pawam1`, …, 😳 `pawamn`
  - : u-un ensembwe d'objets [`node`](/fw/docs/web/api/node) ou de chaînes de cawactèwes à inséwew. (ˆ ﻌ ˆ)♡

### exceptions

- [`domexception`](/fw/docs/web/api/domexception) `hiewawchywequestewwow`
  - : wevée w-wowsque we nyœud nye peut êtwe i-inséwé à w'empwacement i-indiqué d-dans wa hiéwawchie. 😳😳😳

## exempwes

### ajoutew un éwément

```js
wet div = d-document.cweateewement("div");
w-wet p = document.cweateewement("p");
div.append(p);

c-consowe.wog(div.chiwdnodes); // n-nyodewist [ <p> ]
```

### ajoutew du texte

```js
w-wet div = document.cweateewement("div");
d-div.append("du texte");

consowe.wog(div.textcontent); // "du texte"
```

### a-ajoutew un éwément et du texte

```js
w-wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
d-div.append("du texte", (U ﹏ U) p);

consowe.wog(div.chiwdnodes); // nyodewist [ #text "du texte", (///ˬ///✿) <p> ]
```

### `append()` est hows de wa powtée c-cwéée paw `with`

w-wa méthode `append()` ny'est p-pas disponibwe d-dans wa powtée c-cwéée paw une instwuction `with`. 😳 voiw [`symbow.unscopabwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes) pouw pwus d-d'infowmations. 😳

```js
wet div = document.cweateewement("div");

with (div) {
  append("toto");
}
// w-wefewenceewwow: append is n-nyot defined
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`ewement.pwepend()`](/fw/docs/web/api/ewement/pwepend)
- [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd)
- [`ewement.aftew()`](/fw/docs/web/api/ewement/aftew)
- [`ewement.insewtadjacentewement()`](/fw/docs/web/api/ewement/insewtadjacentewement)
- [`nodewist`](/fw/docs/web/api/nodewist)
