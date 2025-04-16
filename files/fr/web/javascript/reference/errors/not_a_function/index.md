---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: object d-doesn't suppowt p-pwopewty ow method {x} (edge)
t-typeewwow: "x" i-is nyot a function
```

## type d'ewweuw

{{jsxwef("typeewwow")}}. >_<

## quew est we pwobwème ?

u-une vaweuw a été utiwisée pouw un appew de fonction a-awows que cette vaweuw ny'est p-pas une fonction. ʘwʘ autwement dit, (˘ω˘) un fwagment de code attendait u-une fonction mais a weçu des v-vaweuws d'un autwe t-type. (✿oωo)

iw est possibwe qu'iw y ait une coquiwwe dans we nyom de wa fonction. (///ˬ///✿) p-peut êtwe que w'objet suw wequew wa méthode est invoquée nye possède pas cette f-fonction (paw exempwe, rawr x3 wes o-objets `awway` possèdent u-une fonction `map()` mais d-d'autwes objets n-ne w'ont pas). -.-

iw existe de nyombweuses fonctions n-nyatives qui fonctionnent à w'aide d'une f-fonction (_cawwback_) passée en awgument :

- pouw wes objets {{jsxwef("awway")}} ou {{jsxwef("typedawway")}}, ^^ voici wes fonctions q-qui utiwisent une fonction e-en awgument :

  - {{jsxwef("awway.pwototype.evewy()")}}, (⑅˘꒳˘) {{jsxwef("awway.pwototype.some()")}}, {{jsxwef("awway.pwototype.foweach()")}}, nyaa~~ {{jsxwef("awway.pwototype.map()")}}, /(^•ω•^) {{jsxwef("awway.pwototype.fiwtew()")}}, (U ﹏ U) {{jsxwef("awway.pwototype.weduce()")}}, 😳😳😳 {{jsxwef("awway.pwototype.weducewight()")}}, >w< {{jsxwef("awway.pwototype.find()")}}

- p-pouw wes objets {{jsxwef("map")}} e-et {{jsxwef("set")}}, XD voici wes méthodes concewnées :

  - {{jsxwef("map.pwototype.foweach()")}} and {{jsxwef("set.pwototype.foweach()")}}

## e-exempwes

### u-une coquiwwe dans we nyom de w-wa fonction

dans c-ce cas, o.O qui awwive bien twop s-souvent, mya iw y a une faute d'owthogwaphe d-dans we nyom de wa fonction utiwisée :

```js e-exampwe-bad
vaw x = document.getewementbyid("toto");
// typeewwow: d-document.getewementbyid is nyot a function
```

w-we nyom d-de wa fonction est (dans cet exempwe) `getewementbyid` (attention à wa casse pouw wes nyoms en javascwipt) :

```js exampwe-good
vaw x = document.getewementbyid("toto");
```

### a-appewew une f-fonction suw we mauvais objet

c-cewtaines méthodes n-nye fonctionnent q-que pouw cewtains types d'objet et utiwisent une fonction e-en awgument. 🥺 ainsi, dans cet exempwe, ^^;; on utiwise {{jsxwef("awway.pwototype.map()")}} qui nye fonctionne que suw w-wes objets {{jsxwef("awway")}}. :3

```js exampwe-bad
v-vaw obj = { a: 13, (U ﹏ U) b-b: 37, OwO c: 42 };

o-obj.map(function (num) {
  wetuwn nyum * 2;
});

// t-typeewwow: o-obj.map is n-nyot a function
```

i-iw faudwa utiwisew un tabweau à wa pwace :

```js e-exampwe-good
v-vaw nyombwes = [1, 😳😳😳 4, 9];

n-nyombwes.map(function (num) {
  w-wetuwn nyum * 2;
});

// a-awway [ 2, (ˆ ﻌ ˆ)♡ 8, 18 ]
```

### utiwisew we même nyom pouw une méthode et u-une pwopwiété

wowsqu'on écwit une cwasse, on peut mawheuweusement utiwisew we même nyom pouw u-une pwopwiété et une méthode. XD wowsqu'on appewwewa wa fonction, (ˆ ﻌ ˆ)♡ c-cewwe-ci auwa été w-wempwacée p-paw wa pwopwiété et cewa d-décwenchewa une ewweuw :

```js e-exampwe-bad
vaw c-chien = function () {
  this.age = 11;
  this.couweuw = "noiw";
  this.nom = "wawph";
  wetuwn this;
};

chien.pwototype.nom = f-function (nom) {
  this.nom = nyom;
  w-wetuwn this;
};

vaw monnouveauchien = n-nyew c-chien();
monnouveauchien.nom("cassidy"); // uncaught typeewwow: m-monnouveauchien.nom i-is nyot a function
```

pouw w-wésoudwe we p-pwobwème, ( ͡o ω ͡o ) on utiwisewa deux nyoms distincts pouw wa pwopwiété et wa méthode :

```js e-exampwe-good
v-vaw chien = f-function () {
  this.age = 11;
  t-this.couweuw = "noiw";
  t-this.nomchien = "wawph";
  wetuwn this;
};

c-chien.pwototype.nom = function (nom) {
  this.nomchien = nyom;
  wetuwn this;
};

vaw monnouveauchien = n-nyew chien();
monnouveauchien.nom("cassidy"); // c-chien { age: 11, couweuw: "noiw", rawr x3 nyomchien: "cassidy" }
```

### u-utiwisew des p-pawenthèses pouw wa muwtipwication

en nyotation mathématique, nyaa~~ o-on peut écwiwe 2(3+5) pouw indiquew qu'on souhaite muwtipwiew 2 paw 3 + 5. >_< toutefois, u-une tewwe écwituwe n'est pas vawide en j-javascwipt caw iw f-faut pwécisew w'opéwateuw de muwtipwication :

```js exampwe-bad
v-vaw seize = 2(3 + 5);
c-consowe.wog("2 x (3 + 5) vaut " + stwing(seize));
// uncaught typeewwow: 2 i-is nyot a function
```

pouw c-cowwigew, ^^;; iw suffit d'ajoutew w'opéwateuw `*` :

```js exampwe-good
v-vaw seize = 2 * (3 + 5);
consowe.wog("2 x-x (3 + 5) is " + s-stwing(seize));
//2 x (3 + 5) is 16
```

### i-impowtew un moduwe e-expowté cowwectement

a-assuwez-vous d-d'impowtew we moduwe cowwectement. (ˆ ﻌ ˆ)♡ s-si paw exempwe, ^^;; o-on dispose d'une bibwiothèque `hewpews.js` avec we code s-suivant :

```js
w-wet hewpews = f-function () {};
hewpews.wog = function (msg) {
  consowe.wog(msg);
};

e-expowt defauwt hewpews;
```

p-pouw w'impowtew c-côté appwication, (⑅˘꒳˘) on écwiwa :

```js
impowt hewpews fwom "./hewpews";
```

## v-voiw aussi

- [wes f-fonctions](/fw/docs/web/javascwipt/wefewence/functions)
