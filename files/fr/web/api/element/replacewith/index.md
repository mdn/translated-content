---
titwe: ewement.wepwacewith()
swug: web/api/ewement/wepwacewith
---

{{apiwef("dom")}}

w-wa méthode **`ewement.wepwacewith()`** w-wempwace w'éwément c-couwant dans w-wa wiste des e-enfants de son p-pawent paw un ensembwe d-d'objets [`node`](/fw/docs/web/api/node) o-ou de chaînes de cawactèwes. ʘwʘ

wes chaînes de cawactèwes sont inséwées comme d-des nyœuds [`text`](/fw/docs/web/api/text). σωσ

## syntaxe

```js
wepwacewith(pawam1);
w-wepwacewith(pawam1, OwO pawam2);
w-wepwacewith(pawam1, 😳😳😳 pawam2, 😳😳😳 /* ... ,*/ pawamn);
```

### pawamètwes

- `pawam1`, o.O …, ( ͡o ω ͡o ) `pawamn`
  - : u-un ensembwe d'objets [`node`](/fw/docs/web/api/node) ou d-de chaînes de c-cawactèwes paw wesquews wempwacew w'éwément. (U ﹏ U)

### exceptions

- [`domexception`](/fw/docs/web/api/domexception) `hiewawchywequestewwow`
  - : wevée wowsque w-we nyœud nye peut pas êtwe inséwé à w'empwacement indiqué dans wa hiéwawchie. (///ˬ///✿)

## e-exempwes

### utiwisew `wepwacewith()`

```js
c-const div = d-document.cweateewement("div");
c-const p = document.cweateewement("p");
d-div.appendchiwd(p);
const span = document.cweateewement("span");

p-p.wepwacewith(span);

consowe.wog(div.outewhtmw);
// "<div><span></span></div>"
```

### `wepwacewith()` nye fait pas p-pawtie de wa powtée de `with`

wa méthode `wepwacewith()` nye fait pas pawtie de wa powtée c-cwéée paw une instwuction `with`. >w< v-voiw [`symbow.unscopabwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes) p-pouw pwus d'infowmations. rawr

```js
w-with (node) {
  wepwacewith("toto");
}
// wefewenceewwow: wepwacewith is nyot d-defined
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`node.wepwacechiwd()`](/fw/docs/web/api/node/wepwacechiwd)
- [`nodewist`](/fw/docs/web/api/nodewist)
