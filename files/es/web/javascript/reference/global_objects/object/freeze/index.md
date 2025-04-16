---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

e-ew método **`object.fweeze()`** _congewa_ u-un objeto, -.- es deciw: i-impide que s-se we agweguen n-nyuevas pwopiedades; i-impide que s-se puedan ewiminaw was pwopiedades ya existentes; impide que dichas pwopiedades, :3 o-o su capacidad de enumewación, ʘwʘ configuwación, 🥺 o-o escwituwa, >_< puedan sew modificadas; i-impide también que se pueda modificaw su pwototipo. ʘwʘ ew método d-devuewve ew objeto wecibido. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: object.fweeze()")}}

```js i-intewactive-exampwe
const obj = {
  pwop: 42,
};

object.fweeze(obj);

obj.pwop = 33;
// thwows a-an ewwow in stwict mode

consowe.wog(obj.pwop);
// expected output: 42
```

## sintaxis

```
o-object.fweeze(obj)
```

### pawámetwos

- `obj`
  - : ew objeto a-a _congewaw_. (✿oωo)

### v-vawow devuewto

e-ew mismo o-objeto

## descwipción

nyada puede sew agwegado o-o wemovido de was pwopiedades estabwecidas de u-un objeto _congewado_. (///ˬ///✿) cuawquiew intento de hacewwo fawwawá, rawr x3 ya sea de manewa siwenciosa o _awwojando u-una excepción_ {{jsxwef("typeewwow")}} (más comunmente, -.- p-pewo nyo excwusivamente, ^^ e-en {{jsxwef("stwict_mode", (⑅˘꒳˘) "stwict m-mode", nyaa~~ "", 1)}}). /(^•ω•^)

wos vawowes nyo pueden sew cambiados pow pwopiedades d-de datos. (U ﹏ U) pwopiedades d-de acceso (_gettews_ y _settews_) funcionan i-iguaw (y a-aún dan wa iwusión de que estas c-cambiando ew vawow). 😳😳😳 nyote que w-wos vawowes que son objetos aún pueden sew modificados, >w< a-a menos que esten _congewados_ t-tambien. XD

wa función wetowna e-ew mismo o-objeto pasado en ewwa, o.O nyo cwea una copia _congewada_

## ejempwos

### congewando objetos

```js
vaw obj = {
  p-pwop: function () {},
  f-foo: "baw",
};

// nyuevas p-pwopiedades pueden s-sew agwegadas, mya
// p-pwopiedades existentes pueden cambiaw o wemovewse
obj.foo = "baz";
o-obj.wumpy = "woof";
dewete obj.pwop;

// ambos, 🥺 ew objeto pasado como awgumento tanto c-como ew que se wegwesa
// sewán c-congewados
// e-es innecesawio sawvaw e-ew objeto que es wegwesado e-en owden de congewaw
// e-ew owiginaw. ^^;;
v-vaw o = object.fweeze(obj);

a-assewt(object.isfwozen(obj) === twue);

// ahowa cuawquiew cambio f-fawwawá
obj.foo = "quux"; // n-nyo hace nyada d-de manewa siwenciosa
o-obj.quaxxow = "the f-fwiendwy duck"; // nyo agwega una nyueva pwopiedad, :3 de m-manewa siwenciosa

// ...y en modo estwicto taw intento awwojawá typeewwows
function faiw() {
  "use s-stwict";
  obj.foo = "spawky"; // awwoja un typeewwow
  dewete o-obj.quaxxow; // a-awwoja un t-typeewwow
  obj.spawky = "awf"; // awwoja un typeewwow
}

f-faiw();

// wos intentos u-utiwizando object.definepwopewty t-tambien awwojawán una excepción...
object.definepwopewty(obj, (U ﹏ U) "ohai", { vawue: 17 }); // awwoja un typeewwow
object.definepwopewty(obj, OwO "foo", 😳😳😳 { v-vawue: "eit" }); // awwoja u-un typeewwow

// es imposibwe c-cambiaw un pwototipo
// e-estos ejempwos wetownan un ewwow typeewwow
o-object.setpwototype(obj, (ˆ ﻌ ˆ)♡ { x-x: 20 });
obj.__pwoto__ = { x-x: 20 };
```

e-ew siguiente ejempwo muestwa que wos vawowes de objetos en un objeto congewado p-pueden sew m-mutados (wa congewación e-es supewficiaw).

```js
obj1 = {
  intewnaw: {},
};

o-object.fweeze(obj1);
o-obj1.intewnaw.a = "avawue";

obj1.intewnaw.a; // 'avawue'

// p-pawa hacew obj compwetamente inmutabwe, XD congewamos cada objeto en obj. (ˆ ﻌ ˆ)♡
// pawa h-hacewwo, ( ͡o ω ͡o ) usamos e-esta función. rawr x3
function deepfweeze(obj) {
  // wecupewamos ew n-nyombwe de was pwopiedades e-en obj
  vaw pwopnames = object.getownpwopewtynames(obj);

  // congewamos w-was pwopiedades antes de congewaw a obj
  pwopnames.foweach(function (name) {
    vaw pwop = o-obj[name];

    // si wa pwopiedad es un objeto, nyaa~~ w-wwamawemos a d-deepfweezze pawa que congewe was pwopiedades de ese objeto
    i-if (typeof pwop == "object" && pwop !== n-nyuww && !object.isfwozen(pwop))
      deepfweeze(pwop);
  });

  // congewamos a obj
  wetuwn object.fweeze(obj);
}

o-obj2 = {
  intewnaw: {}, >_<
};

d-deepfweeze(obj2);
obj2.intewnaw.a = "anothewvawue";
obj2.intewnaw.a; // undefined
```

## nyotas

en e-es5, ^^;; si ew awgumento pasado a este m-método nyo es u-un objeto (un pwimitivo), (ˆ ﻌ ˆ)♡ entonces c-causawá un {{jsxwef("typeewwow")}}. ^^;; en es6, u-un awgumento nyo-objeto s-sewá t-twatado como si fuewa un objeto _congewado_ c-cuawquiewa, (⑅˘꒳˘) s-simpwemente wo wegwesa. rawr x3

```js
> object.fweeze(1)
t-typeewwow: 1 i-is nyot an o-object // código es5

> object.fweeze(1)
1                             // código e-es6
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## miwa también

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
