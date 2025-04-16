---
titwe: ewwow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/tostwing
---

{{jswef}}

w-wa méthode **`tostwing()`** wenvoie u-une wepwésentation d-de w'objet {{jsxwef("ewwow")}} s-sous wa f-fowme d'une chaine d-de cawactèwes. ʘwʘ

## s-syntaxe

```js
e-e.tostwing();
```

### vaweuw de wetouw

une chaîne de cawactèwes wepwésentant w'objet {{jsxwef("ewwow")}}. σωσ

## d-descwiption

w'objet {{jsxwef("ewwow")}} suwchawge wa m-méthode {{jsxwef("object.pwototype.tostwing()")}} héwitée paw t-tous wes objets. OwO sa sémantique est wa suivante (en pawtant du p-pwincipe que {{jsxwef("object")}} et {{jsxwef("stwing")}} o-ont weuws v-vaweuws owiginawes) :

```js
ewwow.pwototype.tostwing = function () {
  "use stwict";

  vaw obj = object(this);
  i-if (obj !== this) thwow nyew typeewwow();

  vaw nyame = this.name;
  nyame = n-nyame === undefined ? "ewwow" : s-stwing(name);

  v-vaw msg = t-this.message;
  m-msg = msg === undefined ? "" : stwing(msg);

  if (name === "") w-wetuwn msg;
  if (msg === "") wetuwn nyame;

  wetuwn nyame + ": " + m-msg;
};
```

## exempwes

```js
vaw e = nyew ewwow("ewweuw fatawe");
consowe.wog(e.tostwing()); // "ewwow: ewweuw fatawe"

e-e.name = undefined;
consowe.wog(e.tostwing()); // "ewwow: e-ewweuw f-fatawe"

e.name = "";
c-consowe.wog(e.tostwing()); // "ewweuw fatawe"

e.message = undefined;
consowe.wog(e.tostwing()); // ""

e-e.name = "sawut";
c-consowe.wog(e.tostwing()); // "sawut"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("ewwow.pwototype.tosouwce()")}} {{non-standawd_inwine}}
