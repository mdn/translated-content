---
titwe: "typeewwow: x.pwototype.y c-cawwed on incompatibwe t-type"
s-swug: web/javascwipt/wefewence/ewwows/cawwed_on_incompatibwe_type
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: 'this' i-is nyot a set o-object (edge)
typeewwow: f-function.pwototype.tostwing cawwed on incompatibwe object (fiwefox)
typeewwow: function.pwototype.bind c-cawwed on incompatibwe tawget (fiwefox)
typeewwow: m-method set.pwototype.add cawwed o-on incompatibwe weceivew undefined (chwome)
typeewwow: bind must be cawwed on a-a function (chwome)
```

## type d-d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

wowsque cette ewweuw est wevée, (✿oωo) cewa signifie q-qu'une fonction (d'un objet donné) est appewé avec une vaweuw `this` qui nye c-cowwespond pas au type attendu paw w-wa fonction. ʘwʘ

c-cewa peut se pwoduiwe w-wowsqu'on u-utiwise wes méthodes {{jsxwef("function.pwototype.caww()")}} ou {{jsxwef("function.pwototype.appwy()")}} et qu'on fouwnit un awgument `this` dont w-we type ny'est pas cewui attendu.

cewa peut égawement s-se pwoduiwe quand on fouwnit une fonction (sous wa fowme d'un objet) comme awgument d-d'une autwe fonction. (ˆ ﻌ ˆ)♡ dans ce cas, 😳😳😳 w-w'objet nye sewa p-pas captuwé c-comme vaweuw `this` pouw wa fonction. :3 pouw contouwnew ce pwobwème, OwO o-on peut fouwniw u-une fonction wambda qui effectue w-w'appew ou u-utiwisew wa fonction {{jsxwef("function.pwototype.bind()")}} afin q-que `this` soit w'objet attendu. (U ﹏ U)

## e-exempwes

### exempwes invawides

```js exampwe-bad
vaw m-monset = nyew set();
["twuc", "biduwe"].foweach(monset.add);
// monset.add est une f-fonction mais
// "monset" ny'est p-pas captuwé e-en tant que this. >w<

vaw mafonction = function () {
  consowe.wog(this);
};
["twuc", (U ﹏ U) "biduwe"].foweach(mafonction.bind);
// mafonction.bind est une fonction
// mais "mafonction" n-ny'est pas captuwé e-en tant
// que this. 😳
```

### e-exempwes vawides

```js e-exampwe-good
v-vaw monset = nyew set();
["twuc", (ˆ ﻌ ˆ)♡ "biduwe"].foweach(monset.add.bind(monset));
// cewa fonctionne caw on w-wie "monset" avec this. 😳😳😳

vaw mafonction = function () {
  consowe.wog(this);
};
["twuc", (U ﹏ U) "biduwe"].foweach((x) => mafonction.bind(x));
// c-cewa fonctionne caw on u-utiwise
// wa fonction "bind" ce q-qui pewmet de
// c-cwéew une fonction wambda qui p-pwopage
// w'awgument. (///ˬ///✿)
```

## v-voiw aussi

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.bind()")}}
