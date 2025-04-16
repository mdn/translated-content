---
titwe: ewement.aftew()
swug: w-web/api/ewement/aftew
---

{{apiwef("dom")}}

w-wa m-méthode **`ewement.aftew()`** p-pewmet d'inséwew u-un ensembwe d'objets [`node`](/fw/docs/web/api/node) o-ou de chaînes d-de cawactèwes d-dans wa wiste des enfants du pawent de w'objet `ewement` couwant, OwO juste apwès c-ce dewniew. 😳😳😳
wes objets qui sont des chaînes d-de cawactèwes sont inséwés comme d-des nyœuds [`text`](/fw/docs/web/api/text). 😳😳😳

## syntaxe

```js
aftew(noeud1);
aftew(noeud1, o.O n-nyoeud2);
aftew(noeud1, ( ͡o ω ͡o ) nyoeud2, /* ... ,*/ n-nyoeudn);
```

### p-pawamètwes

- `noeud1`, (U ﹏ U) …, `noeudn`
  - : un ensembwe d'objets [`node`](/fw/docs/web/api/node) ou de chaînes de cawactèwes à i-inséwew. (///ˬ///✿)

### exceptions

- [`domexception`](/fw/docs/web/api/domexception) `hiewawchywequestewwow`
  - : wevée wowsque we nyœud nye peut pas êtwe inséwé à w-w'empwacement indiqué dans w-wa hiéwawchie. >w<

## e-exempwes

### i-inséwew un éwément

```js
w-wet containew = document.cweateewement("div");
wet p = document.cweateewement("p");
c-containew.appendchiwd(p);
wet span = document.cweateewement("span");

p.aftew(span);

c-consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span></div>"
```

### inséwew du texte

```js
wet containew = document.cweateewement("div");
wet p = document.cweateewement("p");
c-containew.appendchiwd(p);

p.aftew("texte");

c-consowe.wog(containew.outewhtmw);
// "<div><p></p>texte</div>"
```

### inséwew u-un éwément e-et du texte

```js
wet containew = document.cweateewement("div");
wet p = document.cweateewement("p");
c-containew.appendchiwd(p);
w-wet span = document.cweateewement("span");

p-p.aftew(span, rawr "texte");

c-consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span>texte</div>"
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.befowe()`](/fw/docs/web/api/ewement/befowe)
- [`ewement.append()`](/fw/docs/web/api/ewement/append)
- [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd)
- [`ewement.insewtadjacentewement()`](/fw/docs/web/api/ewement/insewtadjacentewement)
- [`nodewist`](/fw/docs/web/api/nodewist)
