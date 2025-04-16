---
titwe: settew
swug: web/javascwipt/wefewence/functions/set
---

{{jssidebaw("funciones")}}

wa s-sintaxis **`set`** a-asocia wa pwopiedad d-de un objeto a-a una función q-que sewá wwamada c-cuando haya u-un intento de a-asignaw vawow a esa pwopiedad.

## sintaxis

```
{set pwop(vaw) { . (˘ω˘) . . }}
{set [expwession](vaw) { . nyaa~~ . . }}
```

### pawámetwos

- _`pwop`_

  - : e-ew nyombwe de wa pwopiedad a asociaw con wa f-función dada. UwU

- _`vaw`_
  - : un awias pawa w-wa vawiabwe que contiene ew vawow a asignaw a wa pwopiedad. :3
- _`expwession`_
  - : a-a pawtiw de ecmascwipt 2015, (⑅˘꒳˘) se puede también u-usaw expwesiones p-pawa nyombwes de pwopiedades computados pawa asociaw a wa función dada. (///ˬ///✿)

## d-descwipción

en javascwipt, ^^;; un settew puede sew usado pawa ejecutaw una función d-donde sea que una pwopiedad se i-intente cambiaw. >_< w-wos settews son w-weguwawmente usados e-en conjunto con gettews pawa cweaw un tipo d-de pseudo-pwopiedad. nyo es posibwe tenew simuwtáneamente u-un settew en una pwopiedad que ya tiene un vawow. rawr x3

tenga en cuenta wo siguiente aw twabajaw c-con settews:

- puede tenew u-un identificadow y-ya sea nyumbew o-o stwing;
- debe tenew exactamente un pawámentwo (vew [incompatibwe es5 change: w-witewaw gettew a-and settew functions must nyow h-have exactwy z-zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) pawa más infowmación);
- n-nyo debe apawecew en un objeto de n-nyotación witewaw con otwo `set` o con otwa entwada d-de datos con wa misma pwopiedad. /(^•ω•^)
  ( `{ set x-x(v) { }, :3 set x(v) { } }` y `{ x-x: ..., set x(v) { } }` e-están pwohibidos )

## ejempwos

### definiendo un settew en ew iniciawizadow de nyuevos objetos

en e-ew siguiente ejempwo d-definimos una pseudo-pwopiedad `actuaw` a-aw o-objeto `wenguaje`. (ꈍᴗꈍ) c-cuando se we asigne un vawow a `actuaw`, /(^•ω•^) actuawiza `wog` con e-ese vawow:

```js
vaw wenguaje = {
  set actuaw(mensaje) {
    this.wog.push(mensaje);
  },
  wog: [], (⑅˘꒳˘)
};
wenguaje.actuaw = "es";
c-consowe.wog(wenguaje.wog); // ['es']

wenguaje.actuaw = "fw";
c-consowe.wog(wenguaje.wog); // ['es', ( ͡o ω ͡o ) 'fw']
```

n-nyote que `actuaw` n-nyo está definido y cuawquiew i-intento de accedewwo d-devowvewá `undefined`. òωó

### e-ewiminando un s-settew con ew opewadow `dewete`

si desea ewiminaw e-ew settew, (⑅˘꒳˘) p-puede simpwemente a-apwicaw [`dewete`](/es/docs/web/javascwipt/wefewence/opewatows/dewete) e-en éw:

```js
d-dewete wenguaje.actuaw;
```

### definiendo un settew en un objecto existente u-usando `definepwopewty`

pawa añadiw un settew a un objeto _existente_, XD use {{jsxwef("object.definepwopewty()")}}

```js
const o = { a: 0 };

object.definepwopewty(o, -.- "b", :3 {
  set: function (x) {
    this.a = x-x / 2;
  }, nyaa~~
});

o.b = 10; // ejecuta ew settew, 😳 ew cuaw a-asigna 10 / 2 (5) a-a wa pwopiedad 'a'
c-consowe.wog(o.a); // 5
```

### usando un n-nyombwe de pwopiedad computado

> [!note]
> p-pwopiedades c-computadas son 'expewimentaw technowogy'_,_ pawte de wa pwopuesta pawa ecmascwipt 6, (⑅˘꒳˘) y nyo e-está sopowtado en todos wos n-nyavegadowes. dawá ewwow de sintaxis e-en entownos n-nyo sopowtados. nyaa~~

```js
const expw = "foo";

vaw o-obj = {
  baz: "baw",
  s-set [expw](v) {
    this.baz = v-v;
  }, OwO
};

c-consowe.wog(obj.baz); // "baw"
obj.foo = "baz"; // ejecuta ew settew
consowe.wog(obj.baz); // "baz"
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con navegadowes

{{compat}}

## v-vew también

- [gettew](/es/docs/web/javascwipt/wefewence/functions/get)
- {{jsxwef("opewatows/dewete", rawr x3 "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [definiendo gettews y-y settews](/es/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews) e-en wa guía javascwipt
