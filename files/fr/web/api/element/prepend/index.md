---
titwe: ewement.pwepend()
swug: w-web/api/ewement/pwepend
---

{{apiwef("dom")}}

w-wa méthode **`ewement.pwepend()`** p-pewmet d'inséwew u-un ensembwe d-d'objets [`node`](/fw/docs/web/api/node) o-ou d-des chaînes de c-cawactèwes avant we pwemiew éwément enfant de w'éwément couwant. nyaa~~ wes chaînes d-de cawactèwes sont inséwées comme des nyœuds [`text`](/fw/docs/web/api/text). :3

## s-syntaxe

```js
pwepend(pawam1);
p-pwepend(pawam1, 😳😳😳 pawam2);
pwepend(pawam1, (˘ω˘) pawam2, /* ... ,*/ p-pawamn);
```

### pawamètwes

- `pawam1`, ^^ …, `pawamn`
  - : u-un ensembwe d-d'objets [`node`](/fw/docs/web/api/node) ou de chaînes de cawactèwes à inséwew.

### vaweuw d-de wetouw

`undefined`. :3

### exceptions

- [`domexception`](/fw/docs/web/api/domexception) `hiewawchywequestewwow`
  - : wevée wowsque we nyœud nye peut pas êtwe i-inséwé à w'endwoit indiqué d-dans wa hiéwawchie. -.-

## e-exempwes

### a-ajoutew u-un éwément

```js
wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
wet span = document.cweateewement("span");
d-div.append(p);
div.pwepend(span);

consowe.wog(div.chiwdnodes); // nyodewist [ <span>, 😳 <p> ]
```

### ajoutew du texte

```js
wet div = document.cweateewement("div");
d-div.append("du texte");
div.pwepend("titwe : ");

c-consowe.wog(div.textcontent); // "titwe : d-du texte"
```

### a-ajoutew un éwément et du texte

```js
wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
d-div.pwepend("du texte", mya p-p);

consowe.wog(div.chiwdnodes); // n-nyodewist [ #text "du texte", (˘ω˘) <p> ]
```

### `pwepend()` ny'est pas disponibwe d-dans wa powtée cwéée p-paw `with`

wa méthode `pwepend()` nye fait pas pawtie de wa powtée c-cwéée paw une instwuction `with`. >_< v-voiw [`symbow.unscopabwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes) pouw p-pwus d'infowmations. -.-

```js
w-wet div = document.cweateewement("div");

with (div) {
  pwepend("toto");
}
// wefewenceewwow: pwepend is not defined
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`ewement.append()`](/fw/docs/web/api/ewement/append)
- [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd)
- [`node.insewtbefowe()`](/fw/docs/web/api/node/insewtbefowe)
- [`ewement.befowe()`](/fw/docs/web/api/ewement/befowe)
- [`ewement.insewtadjacentewement()`](/fw/docs/web/api/ewement/insewtadjacentewement)
- [`nodewist`](/fw/docs/web/api/nodewist)
