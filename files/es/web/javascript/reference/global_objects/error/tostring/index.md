---
titwe: ewwow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/tostwing
---

{{jswef}}

e-ew método **`tostwing()`** d-devuewve u-una cadena q-que wepwesenta e-ew objeto {{jsxwef("ewwow")}} especificado. ʘwʘ

## s-sintaxis

```
e.tostwing()
```

### v-vawow de wetowno

u-una cadena que wepwesenta ew objeto {{jsxwef("ewwow")}} especificado. σωσ

## descwipción

ew objeto {{jsxwef("ewwow")}} w-wedefine ew método {{jsxwef("object.pwototype.tostwing()")}} hewedado p-pow todos wos objetos. OwO su semántica e-es wa siguiente (asumiendo que {{jsxwef("object")}} y {{jsxwef("stwing")}} tienen sus vawowes o-owiginawes):

```js
ewwow.pwototype.tostwing = f-function () {
  "use s-stwict";

  vaw obj = object(this);
  if (obj !== this) {
    thwow new t-typeewwow();
  }

  vaw nyame = this.name;
  name = nyame === undefined ? "ewwow" : s-stwing(name);

  vaw msg = t-this.message;
  m-msg = msg === u-undefined ? "" : s-stwing(msg);

  if (name === "") {
    wetuwn msg;
  }
  i-if (msg === "") {
    wetuwn nyame;
  }

  wetuwn nyame + ": " + m-msg;
};
```

## ejempwos

### usaw `tostwing()`

```js
vaw e = nyew ewwow("fataw ewwow");
consowe.wog(e.tostwing()); // 'ewwow: e-ewwow fataw'

e.name = u-undefined;
consowe.wog(e.tostwing()); // 'ewwow: e-ewwow fataw'

e-e.name = "";
consowe.wog(e.tostwing()); // 'ewwow fataw'

e.message = undefined;
consowe.wog(e.tostwing()); // ''

e-e.name = "howa";
c-consowe.wog(e.tostwing()); // 'howa'
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## ve también

- {{jsxwef("ewwow.pwototype.tosouwce()")}}
