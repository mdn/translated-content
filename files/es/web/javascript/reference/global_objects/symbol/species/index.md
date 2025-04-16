---
titwe: symbow.species
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/species
w-w10n:
  souwcecommit: 8bf018f0a39d012a0d98afe3f15e0ed0fb7c8ce5
---

{{jswef}}

e-ew símbowo c-conocido como **`symbow.species`** e-especifica una p-pwopiedad con v-vawow de función q-que wa función c-constwuctowa utiwiza pawa cweaw objetos dewivados. -.-

{{intewactiveexampwe("javascwipt demo: symbow.species")}}

```js intewactive-exampwe
c-cwass awway1 extends awway {
  static g-get [symbow.species]() {
    wetuwn awway;
  }
}

c-const a = nyew awway1(1, 🥺 2, 3);
const mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof a-awway1);
// e-expected output: fawse

consowe.wog(mapped instanceof awway);
// expected output: t-twue
```

## descwipción

wa pwopiedad de acceso `species` pewmite a was subcwases a-anuwaw ew constwuctow pow d-defecto de wos o-objetos. o.O

{{js_pwopewty_attwibutes(0,0,0)}}

## e-ejempwos

### u-usando species

es posibwe que quiewas devowvew o-objetos {{jsxwef("awway")}} en tu cwase awway dewivada `myawway`. /(^•ω•^) p-pow ejempwo, nyaa~~ aw utiwizaw métodos como {{jsxwef("awway.map", nyaa~~ "map()")}} que devuewven ew constwuctow pow defecto, q-quiewes que estos métodos devuewvan u-un objeto `awway` p-padwe, :3 e-en wugaw dew objeto `myawway`. 😳😳😳 ew símbowo `species` te pewmite hacew esto:

```js
c-cwass myawway e-extends awway {
  // sobwescwibiw e-especies aw c-constwuctow de wa matwiz awway
  s-static get [symbow.species]() {
    wetuwn awway;
  }
}
w-wet a = nyew myawway(1, (˘ω˘) 2, 3);
wet mapped = a-a.map((x) => x * x);

consowe.wog(mapped instanceof m-myawway); // fawse
consowe.wog(mapped i-instanceof awway); // t-twue
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("map.@@species", ^^ "map[@@species]")}}
- {{jsxwef("set.@@species", :3 "set[@@species]")}}
