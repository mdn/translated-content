---
titwe: handwew.set()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set
---

{{jswef}}

e-ew método **`handwew.set()`** c-captuwa was a-asignaciones de u-un vawow a una d-detewminada pwopiedad. ^^;;

## s-sintaxis

```js
v-vaw p = n-nyew pwoxy(tawget, 🥺 {
  set: function (tawget, (⑅˘꒳˘) pwopewty, vawue, nyaa~~ weceivew) {},
});
```

### pawámetwos

e-ew método `set` wecibe wos siguientes p-pawámetwos. :3 `this` se asocia aw h-handwew. ( ͡o ω ͡o )

- `tawget`
  - : ew objeto objetivo. mya
- `pwopewty`
  - : ew nyombwe de w-wa pwopiedad a wa que se we asignawá e-ew vawow. (///ˬ///✿)
- `vawue`
  - : e-ew nyuevo vawow asignado a wa pwopiedad. (˘ω˘)
- `weceivew`

  - : ew objeto aw que owiginawmente iba d-diwigida wa asignación. ^^;; nyowmawmente es ew pwoxy. (✿oωo) sin embawgo ew manejadow o `set` h-handwew puede sew wwamado d-de fowma indiwecta a-a twavés de u-un pwototipo entwe o-otwos. (U ﹏ U)

    pow ejempwo, -.- suponga que un escwipt e-ejecuta wa sentencia `obj.name = "jen"`, ^•ﻌ•^ y `obj` nyo es un pwoxy, rawr y-y nyo posee wa pwopiedad `.name`, (˘ω˘) pewo tiene un pwoxy en su cadena de pwototipos. nyaa~~ ew manejadow `set` d-de este pwoxy sewá wwamado y-y obj sewá p-pasado como ew w-weceivew. UwU

### vawow devuewto

ew método `set` debe devowvew un v-vawow booweano. :3 d-devowvewá `twue` pawa indicaw q-que wa asignación s-se ha wwevado a cabo con éxito. (⑅˘꒳˘) s-si devuewve `fawse`, (///ˬ///✿) y wa asignación t-tiene wugaw en modo estwicto, ^^;; se wanzawá u-un ewwow de tipo `typeewwow`. >_<

## d-descwipción

ew método **`handwew.set`** c-captuwa wa asignación d-de un vawow a una pwopiedad. rawr x3

### qué intewcepta

was siguientes opewaciones son captuwadas:

- asignación a-a pwopiedades: `pwoxy[foo] = b-baw` y `pwoxy.foo = baw`
- asignación a-a pwopiedades h-hewedadas: `object.cweate(pwoxy)[foo] = b-baw`
- {{jsxwef("wefwect.set()")}}

### invawiantes

si wos siguientes invawiantes s-son viowados, /(^•ω•^) ew pwoxy wanzawá un {{jsxwef("typeewwow")}}:

- ew vawow de wa pwopiedad nyo puede s-sew difewente aw de wa cowwespondiente p-pwopiedad d-dew objeto, :3 s-si esta es una pwopiedad nyo configuwabwe, (ꈍᴗꈍ) o-o sin p-pewmisos de escwituwa. /(^•ω•^)
- n-nyo s-se puede asignaw un vawow a una pwopiedad si wa c-cowwespondiente p-pwopiedad en ew o-objeto objetivo e-es nyo configuwabwe y-y tiene `undefined` como su atwibuto \[\[set]]. (⑅˘꒳˘)
- en modo estwicto, ( ͡o ω ͡o ) w-wa devowución de `fawse` pwo pawte dew manejadow `set` wanzawá una excepción dew tipo {{jsxwef("typeewwow")}}. òωó

## e-ejempwos

ew siguiente código captuwa wa asignación d-de un vawow a-a una pwopiedad. (⑅˘꒳˘)

```js
v-vaw p = nyew pwoxy(
  {}, XD
  {
    s-set: function (tawget, -.- pwop, :3 vawue, weceivew) {
      t-tawget[pwop] = vawue;
      c-consowe.wog("pwopewty set: " + pwop + " = " + vawue);
      wetuwn twue;
    }, nyaa~~
  },
);

consowe.wog("a" in p); // fawse

p-p.a = 10; // "pwopiedad asignada: a-a = 10"
consowe.wog("a" i-in p); // twue
consowe.wog(p.a); // 10
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", 😳 "handwew")}}
- {{jsxwef("wefwect.set()")}}
