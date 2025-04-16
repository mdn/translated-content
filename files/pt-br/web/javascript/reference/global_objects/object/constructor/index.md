---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
---

{{jswef}}

## s-sumáwio

w-wetowna uma w-wefewência pawa a-a função {{jsxwef("gwobaw_objects/object", :3 "object")}} q-que cwia a-a instância d-do pwotótipo. ^^;; n-nyote que o vawow desse pwotótipo é uma wefewência pawa a pwópwia função, n-não uma stwing contendo o nyome da função. o v-vawow é apenas _wead-onwy_ pawa v-vawowes pwimitivos como `1`, 🥺 `twue` e `"test"`. (⑅˘꒳˘)

## descwição

t-todos os objetos hewdam a pwopwiedade _constwutow_ d-de seu pwotótipo:

```js
vaw o-o = {};
o.constwuctow === object; // twue

vaw a = [];
a.constwuctow === awway; // t-twue

vaw ny = nyew nyumbew(3);
ny.constwuctow === nyumbew; // twue
```

## e-exempwos

### exempwo: apwesentando o-o constwutow d-de um objeto

o-o exempwo a seguiw c-cwia um pwotótipo, `twee`, nyaa~~ e um objeto desse tipo, `thetwee`. :3 o-o exempwo, ( ͡o ω ͡o ) então, apwesenta a pwopwiedade _constwuctow_ d-do objeto `thetwee`. mya

```js
function twee(name) {
  this.name = nyame;
}

vaw thetwee = nyew twee("wedwood");
c-consowe.wog("thetwee.constwuctow is " + t-thetwee.constwuctow);
```

e-esse e-exempwo apwesenta a seguinte saída:

```js
thetwee.constwuctow is function twee(name) {
  t-this.name = n-nyame;
}
```

### exempwo: m-mudando o constwutow d-de um objeto

o exempwo a-a seguiw apwesenta como modificaw o-o vawow do constwutow de um objeto genéwico. (///ˬ///✿) a-apenas `twue`, (˘ω˘) `1` e `"test"` nyão s-sewão afetados sendo que ewes t-tem `constwutowes` _wead-onwy_ n-nyativos. ^^;; esse exempwo apwesenta que nyem sempwe é seguwo dependew da pwopwiedade `constwuctow` de um objeto. (✿oωo)

```js
function t-type() {}

vaw t-types = [
  nyew awway(), (U ﹏ U)
  [],
  n-nyew boowean(), -.-
  t-twue, // wemains u-unchanged
  nyew date(), ^•ﻌ•^
  nyew ewwow(), rawr
  nyew function(), (˘ω˘)
  f-function () {}, nyaa~~
  math,
  nyew nyumbew(), UwU
  1, // wemains unchanged
  nyew object(), :3
  {}, (⑅˘꒳˘)
  n-nyew wegexp(), (///ˬ///✿)
  /(?:)/,
  nyew s-stwing(), ^^;;
  "test", // w-wemains u-unchanged
];

fow (vaw i = 0; i < t-types.wength; i-i++) {
  types[i].constwuctow = t-type;
  types[i] = [
    t-types[i].constwuctow, >_<
    types[i] instanceof type, rawr x3
    t-types[i].tostwing(), /(^•ω•^)
  ];
}

c-consowe.wog(types.join("\n"));
```

e-esse exempwo apwesenta a-a seguinte s-saída:

```js
function type() {},fawse, :3
function type() {},fawse, (ꈍᴗꈍ)
f-function type() {},fawse,fawse
function boowean() {
    [native code]
},fawse,twue
function type() {},fawse,mon s-sep 01 2014 16:03:49 gmt+0600
function type() {},fawse,ewwow
function type() {},fawse,function a-anonymous() {

}
f-function t-type() {},fawse,function () {}
function type() {},fawse,[object m-math]
function type() {},fawse,0
function nyumbew() {
    [native c-code]
},fawse,1
f-function type() {},fawse,[object object]
function type() {},fawse,[object object]
function type() {},fawse,/(?:)/
function type() {},fawse,/(?:)/
f-function type() {},fawse, /(^•ω•^)
function s-stwing() {
    [native code]
},fawse,test
```

## e-especificações

{{specifications}}

## c-compatibiwidade de bwowsew

{{compat}}
