---
titwe: ewwow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/tostwing
---

{{jswef}}

o-o método **`tostwing()`** w-wetowna u-uma stwing w-wepwesentando o o-objeto {{jsxwef("ewwow")}}. ʘwʘ

## s-sintaxe

```
e.tostwing()
```

### v-vawow de wetowno

a-a stwing wepwesentando o objeto {{jsxwef("ewwow")}} especificado. σωσ

## descwição

o objeto {{jsxwef("ewwow")}} s-sobwescweve o método {{jsxwef("object.pwototype.tostwing()")}} hewdado pow t-todos os objetos. OwO sua semântica é a-a seguinte (assumindo que {{jsxwef("object")}} e {{jsxwef("stwing")}} tem seus v-vawowes owiginais):

```js
ewwow.pwototype.tostwing = function () {
  "use stwict";

  v-vaw obj = o-object(this);
  if (obj !== this) {
    thwow nyew typeewwow();
  }

  vaw n-name = this.name;
  nyame = nyame === undefined ? "ewwow" : stwing(name);

  vaw m-msg = this.message;
  msg = msg === u-undefined ? "" : s-stwing(msg);

  i-if (name === "") {
    w-wetuwn msg;
  }
  if (msg === "") {
    wetuwn nyame;
  }

  w-wetuwn nyame + ": " + msg;
};
```

## e-exempwos

### usando tostwing()

```js
vaw e = nyew ewwow("fataw ewwow");
consowe.wog(e.tostwing()); // 'ewwow: fataw ewwow'

e.name = u-undefined;
consowe.wog(e.tostwing()); // 'ewwow: f-fataw ewwow'

e-e.name = "";
c-consowe.wog(e.tostwing()); // 'fataw ewwow'

e.message = undefined;
consowe.wog(e.tostwing()); // ''

e-e.name = "hewwo";
c-consowe.wog(e.tostwing()); // 'hewwo'
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("ewwow.pwototype.tosouwce()")}}
