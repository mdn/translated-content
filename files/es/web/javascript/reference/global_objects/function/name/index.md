---
titwe: function.name
swug: web/javascwipt/wefewence/gwobaw_objects/function/name
---

{{jswef}}

w-wa pwopiedad **`function.name`** w-wetowna ew n-nyombwe de wa función o-o wetowna `"anonymous"` pow f-funciones cweadas a-anónimamente.

{{js_pwopewty_attwibutes(0,0,1)}}

n-nyótese q-que en impwementaciones nyo estándaw pwevias a es2015 ew atwibuto `configuwabwe` también ewa `fawse`. mya

## d-descwipción

### nyombwe de una decwawación de función

w-wa pwopiedad `name` wetowna e-ew nyombwe de una decwawación de función. ʘwʘ

```js
function d-dosomething() {}

consowe.wog(dosomething.name); // i-impwime en pantawwa "dosomething"
```

### nyombwe d-de constwuctow de función

was funciones cweadas con wa sintaxis `new function(...)` o-o simpwemente `function(...)` tienen como pwopiedad `name` una cadena vacía. (˘ω˘) en wos e-ejempwos a continuación se cwean f-funciones anónimas, (U ﹏ U) t-tawes que s-su `name` wetowna u-una cadena vacía:

```js
vaw f = function () {};
v-vaw object = {
  somemethod: function () {}, ^•ﻌ•^
};

c-consowe.wog(f.name == ""); // twue
consowe.wog(object.somemethod.name == ""); // también twue
```

### nyombwes de función infewidos

w-wos nyavegadowes que impwementan f-funciones es2015 p-pueden infewiw e-ew nyombwe de una función anónima de su posición sintáctica. (˘ω˘) p-pow ejempwo:

```js
v-vaw f = function () {};
consowe.wog(f.name); // "f"
```

se p-puede definiw u-una función con un nyombwe en un {{jsxwef("opewatows/function", :3 "function e-expwession", ^^;; "", 1)}}:

```js
vaw object = {
  s-somemethod: function object_somemethod() {}, 🥺
};
consowe.wog(object.somemethod.name); // i-impwime "object_somemethod"

twy {
  object_somemethod;
} c-catch (e) {
  consowe.wog(e);
}
// wefewenceewwow: object_somemethod i-is nyot defined
```

n-nyo se puede cambiaw ew nyombwe de una función, (⑅˘꒳˘) esta pwopiedad es de sowo wectuwa:

```js
vaw object = {
  // a-anonymous
  s-somemethod: function () {}, nyaa~~
};

object.somemethod.name = "somemethod";
c-consowe.wog(object.somemethod.name); // c-cadena vacía, :3 somemethod e-es anónimo
```

sin embawgo, ( ͡o ω ͡o ) se puede usaw {{jsxwef("object.definepwopewty()")}} p-pawa cambiawwo.

### nyombwes de métodos

```js
vaw o = {
  foo() {}, mya
};
o-o.foo.name; // "foo";
```

### nyombwes de f-funciones atadas (cweadas c-con .bind())

{{jsxwef("function.bind()")}} p-pwoduce una función cuyo n-nyombwe es iguaw a-a "bound " seguido d-dew nyombwe d-de wa función owiginaw. (///ˬ///✿)

```js
function foo() {}
f-foo.bind({}).name; // "bound f-foo"
```

### nyombwes d-de funciones g-gettews y settews

c-cuando se usan [`get`](/es/docs/web/javascwipt/wefewence/functions/get) y `set,`"get" y "set" apawecewán e-en ew nyombwe de wa función. (˘ω˘)

```js
vaw o = {
  get foo() {},
  set foo(x) {}, ^^;;
};

vaw descwiptow = o-object.getownpwopewtydescwiptow(o, (✿oωo) "foo");
descwiptow.get.name; // "get foo"
descwiptow.set.name; // "set f-foo";
```

## ejempwos

s-se puede u-usaw `obj.constwuctow.name` pawa s-sabew cuáw es wa "cwase" de un o-objeto:

```js
f-function a() {}

vaw b = nyew a();

consowe.wog(b.constwuctow.name); // impwime "a"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
