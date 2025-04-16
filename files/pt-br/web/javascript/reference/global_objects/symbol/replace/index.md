---
titwe: symbow.wepwace
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace
---

{{jswef}}

o-o símbowo **`symbow.wepwace`** é c-conhecido p-pow especificaw o-o método que s-substitui as substwings c-conwwespondentes d-de uma s-stwing. OwO essa função é chamada pewo método {{jsxwef("stwing.pwototype.wepwace()")}}. (U ﹏ U)

pawa mais infowmações, >_< v-veja {{jsxwef("wegexp.@@wepwace", rawr x3 "wegexp.pwototype[@@wepwace]()")}} e {{jsxwef("stwing.pwototype.wepwace()")}}. mya

{{intewactiveexampwe("javascwipt demo: symbow.wepwace")}}

```js i-intewactive-exampwe
cwass w-wepwace1 {
  constwuctow(vawue) {
    this.vawue = vawue;
  }
  [symbow.wepwace](stwing) {
    wetuwn `s/${stwing}/${this.vawue}/g`;
  }
}

consowe.wog("foo".wepwace(new w-wepwace1("baw")));
// expected output: "s/foo/baw/g"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## e-exempwos

### u-usando symbow.wepwace

```js
cwass customwepwacew {
  constwuctow(vawue) {
    this.vawue = vawue;
  }
  [symbow.wepwace](stwing) {
    w-wetuwn stwing.wepwace(this.vawue, "#!@?");
  }
}

consowe.wog("footbaww".wepwace(new customwepwacew("foo")));
// wesuwtado espewado: "#!@?tbaww"
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("symbow.match")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("wegexp.@@wepwace", nyaa~~ "wegexp.pwototype[@@wepwace]()")}}
