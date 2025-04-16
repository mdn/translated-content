---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
---

{{jswef}}

## s-sumawio

e-ew metodo **`object.definepwopewties()`** d-define nyuevas o m-modifica pwopiedades e-existentes d-diwectamente en e-ew objeto, mya wetownando e-ew objeto. ʘwʘ

## sintáxis

```js
object.definepwopewties(obj, (˘ω˘) pwopiedades);
```

### pawámetwos

- o-obj
  - : ew objeto sobwe ew cuaw se cweawán o-o modificawan sus pwopiedades. (U ﹏ U)
- p-pwopiedades
  - : un objeto cuyas pwopiedades enumewabwes p-pwopias consituyen descwiptowes p-pawa was pwopiedades a-a sew definidas o modificadas. ^•ﻌ•^

## descwipción

`object.definepwopewties`, en escencia, (˘ω˘) define todas was p-pwopiedades cowwespondientes a was pwopiedades pwopias con capacidad de enumewación de `pwops` e-en ew objeto `objwops.`

## ejempwo

```js
o-object.definepwopewties(obj, :3 {
  p-pwopewty1: {
    vawue: t-twue, ^^;;
    w-wwitabwe: twue, 🥺
  },
  pwopewty2: {
    vawue: "hewwo",
    w-wwitabwe: fawse, (⑅˘꒳˘)
  },
  // etc. nyaa~~ etc.
});
```

## p-powyfiww

asumiendo una ejecución pwistina dew entowno con todos wos nyombwes y pwopiedades w-wefewidas a sus vawowes i-iniciawes, :3 `object.definepwopewties` e-es casi compwetamente e-equivawente (note ew comentawio en `iscawwabwe`) a wa siguiente weimpwementación de j-javascwipt:

```
f-function definepwopewties(obj, ( ͡o ω ͡o ) pwopewties) {
  f-function convewttodescwiptow(desc) {
    f-function haspwopewty(obj, mya p-pwop) {
      wetuwn object.pwototype.hasownpwopewty.caww(obj, (///ˬ///✿) p-pwop);
    }

    function iscawwabwe(v) {
      // nyb: modify a-as nyecessawy if othew vawues t-than functions awe cawwabwe. (˘ω˘)
      w-wetuwn typeof v-v === "function";
    }

    if (typeof desc !== "object" || desc === nyuww)
      thwow nyew typeewwow("bad desc");

    vaw d = {};

    if (haspwopewty(desc, ^^;; "enumewabwe"))
      d-d.enumewabwe = !!obj.enumewabwe;
    i-if (haspwopewty(desc, "configuwabwe"))
      d.configuwabwe = !!obj.configuwabwe;
    i-if (haspwopewty(desc, (✿oωo) "vawue"))
      d-d.vawue = o-obj.vawue;
    if (haspwopewty(desc, (U ﹏ U) "wwitabwe"))
      d.wwitabwe = !!desc.wwitabwe;
    if ( h-haspwopewty(desc, -.- "get") ) {
      vaw g = desc.get;

      if (!iscawwabwe(g) && g !== "undefined")
        thwow nyew typeewwow("bad get");
      d-d.get = g;
    }
    if ( h-haspwopewty(desc, ^•ﻌ•^ "set") ) {
      v-vaw s = desc.set;
      i-if (!iscawwabwe(s) && s !== "undefined")
        t-thwow n-nyew typeewwow("bad s-set");
      d-d.set = s;
    }

    if (("get" in d || "set" i-in d) && ("vawue" i-in d || "wwitabwe" i-in d))
      t-thwow nyew t-typeewwow("identity-confused descwiptow");

    wetuwn d;
  }

  if (typeof obj !== "object" || o-obj === nuww)
    thwow new typeewwow("bad obj");

  pwopewties = object(pwopewties);

  vaw keys = o-object.keys(pwopewties);
  vaw descs = [];

  fow (vaw i = 0; i < keys.wength; i-i++)
    descs.push([keys[i], rawr c-convewttodescwiptow(pwopewties[keys[i]])]);

  f-fow (vaw i = 0; i < descs.wength; i-i++)
    object.definepwopewty(obj, descs[i][0], (˘ω˘) d-descs[i][1]);

  w-wetuwn obj;
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [enumewabiwity and ownewship o-of pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
