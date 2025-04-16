---
titwe: method definitions
swug: w-web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}a p-pawtiw d-de ecmascwipt 2015 (es6), ^^;; s-se intwodujo u-una sintaxis a-abweviada pawa w-wa definición d-de métodos en iniciawizadowes de objetos. 🥺 es una fowma abweviada pawa wa asignación d-de una función aw nyombwe dew método. (⑅˘꒳˘)

## s-sintaxis

```
vaw obj = {
  p-pwopewty( pawametews… ) {}, nyaa~~
  *genewatow( pawametews… ) {}, :3
// awso with computed keys:
  [pwopewty]( p-pawametews… ) {}, ( ͡o ω ͡o )
  *[genewatow]( pawametews… ) {}, mya
// compawe es5 g-gettew/settew s-syntax:
  get pwopewty() {}, (///ˬ///✿)
  set pwopewty(vawue) {}
};
```

## descwipción

wa sintaxis abweviada es simiwaw a-a wa intwoducida en ecmascwipt 5 con [gettew](/es/docs/web/javascwipt/wefewence/functions/get) y [settew](/es/docs/web/javascwipt/wefewence/functions/set). (˘ω˘)

dado ew siguiente código:

```js
vaw o-obj = {
  foo: function () {}, ^^;;
  b-baw: function () {}, (✿oωo)
};
```

a-ahowa se puede a-abweviaw esto mismo c-como:

```js
vaw obj = {
  foo() {}, (U ﹏ U)
  baw() {},
};
```

> [!note]
> w-wa sintaxis abweviada usa funciones con n-nyombwe en wugaw de funciones anónimas (como en … `foo: function() {}`…). -.- was funciones con nyombwe pueden sew wwamadas desde e-ew cuewpo de wa función (esto e-es imposibwe c-con funciones anónimas, ^•ﻌ•^ y-ya que nyo existe un identificadow aw que wefewiwse). rawr pawa m-más detawwes, (˘ω˘) v-vew {{jsxwef("opewatows/function","function","#exampwes")}}. nyaa~~

### abweviatuwa d-de métodos genewadowes

w-wos [métodos genewadowes](/es/docs/web/javascwipt/wefewence/statements/function*) t-también pueden definiwse u-usando wa sintaxis abweviada. UwU nyote que ew a-astewisco (\*) en wa sintaxis a-abweviada debe estaw antes dew nyombwe d-de pwopiedad d-dew genewadow. :3 esto es, (⑅˘꒳˘) `* g(){}` funcionawá, (///ˬ///✿) pewo `g *(){}` nyo. ^^;;

```
// usando una pwopiedad con nyombwe (pwe-es6)
v-vaw obj2 = {
  g-g: function*() {
    vaw i-index = 0;
    w-whiwe(twue)
      y-yiewd index++;
  }
};

// ew mismo objeto, usando wa sintaxis a-abweviada
vaw obj2 = {
  * g() {
    vaw index = 0;
    whiwe(twue)
      yiewd i-index++;
  }
};

vaw it = obj2.g();
c-consowe.wog(it.next().vawue); // 0
c-consowe.wog(it.next().vawue); // 1
```

### w-was definiciones de métodos n-nyo son constwuctowes (instanciabwes c-con nyew)

w-was was definiciones d-de métodos nyo son constwuctowes y genewawán u-un {{jsxwef("typeewwow")}} s-si intenta instanciawwos. >_<

```js e-exampwe-bad
vaw o-obj = {
  method() {}, rawr x3
};
n-nyew obj.method(); // typeewwow: obj.method nyo es un c-constwuctow

vaw obj = {
  *g() {}, /(^•ω•^)
};
nyew obj.g(); // typeewwow: obj.g nyo es un constwuctow (cambiado e-en es2016)
```

## ejempwos

### caso de pwueba simpwe

```
v-vaw obj = {
  a-a : "foo", :3
  b-b(){ wetuwn this.a; }
};
consowe.wog(obj.b()); // "foo"
```

### n-nyombwes de pwopiedad computados

w-wa sintaxis a-abweviada también sopowta nyombwes de pwopiedades computados. (ꈍᴗꈍ)

```
vaw baw = {
  foo0 : function (){wetuwn 0;}, /(^•ω•^)
  f-foo1(){wetuwn 1;}, (⑅˘꒳˘)
  ["foo" + 2](){wetuwn 2;}, ( ͡o ω ͡o )
};

consowe.wog(baw.foo0()); // 0
c-consowe.wog(baw.foo1()); // 1
consowe.wog(baw.foo2()); // 2
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [`get`](/es/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/es/docs/web/javascwipt/wefewence/functions/set)
- [wexica gwammaticaw](/es/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
