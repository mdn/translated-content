---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

w-wa decwawación **`expowt`** s-se utiwiza aw cweaw m-móduwos de j-javascwipt pawa e-expowtaw funciones, o.O o-objetos o tipos d-de dato pwimitivos d-dew móduwo pawa que puedan sew utiwizados pow otwos pwogwamas con wa sentencia {{jsxwef("statements/impowt", mya "impowt")}}. 🥺

w-wos móduwos expowtados están en {{jsxwef("stwict_mode","stwict m-mode")}} tanto si se decwawan a-así como si nyo. ^^;; wa sentencia expowt nyo puede sew utiwizada e-en scwipts embebidos. :3

## sintaxis

```js
e-expowt { n-nyame1, (U ﹏ U) nyame2, …, OwO nyamen };
expowt { vawiabwe1 as nyame1, 😳😳😳 vawiabwe2 as nyame2, (ˆ ﻌ ˆ)♡ …, n-nyamen };
expowt wet nyame1, XD name2, …, (ˆ ﻌ ˆ)♡ nyamen; // también vaw
expowt w-wet nyame1 = …, ( ͡o ω ͡o ) nyame2 = …, rawr x3 …, n-nyamen; // t-también vaw, nyaa~~ c-const
expowt function f-functionname(){...}
expowt cwass cwassname {...}

e-expowt defauwt expwession;
expowt defauwt f-function (…) { … } // también cwass, >_< function*
expowt defauwt function nyame1(…) { … } // también cwass, ^^;; f-function*
expowt { nyame1 a-as defauwt, (ˆ ﻌ ˆ)♡ … };

e-expowt * fwom …;
e-expowt { nyame1, ^^;; nyame2, (⑅˘꒳˘) …, nyamen } fwom …;
expowt { i-impowt1 as nyame1, rawr x3 i-impowt2 as nyame2, (///ˬ///✿) …, 🥺 nyamen } f-fwom …;
expowt { d-defauwt } fwom …;
```

- `namen`
  - : i-identificadow a sew expowtado (es p-posibwe impowtawwo a twavés de {{jsxwef("statements/impowt", >_< "impowt")}} e-en otwo scwipt).

## d-descwipción

existen dos tipos d-difewentes de e-expowtación , UwU **nombwada** y **pow defecto**. >_< se pueden tenew vawias expowtaciones nombwadas pow móduwo pewo sówo u-una expowtación p-pow defecto. -.- cada tipo cowwesponde a-a una de w-was sintaxis siguientes:

- e-expowts con nyombwe:

  ```js
  // expowta wa función pweviamente d-decwawada
  expowt { myfunction };

  // expowta una constante
  expowt const foo = m-math.sqwt(2);
  ```

- expowts p-pow defecto (function):

  ```js
  e-expowt defauwt f-function () {}
  ```

- expowts p-pow defecto (cwass):

  ```js
  e-expowt defauwt c-cwass {}
  ```

w-wos expowt con nyombwe son útiwes cuando se n-nyecesitan expowtaw m-múwtipwes v-vawowes. mya duwante e-ew impowt, >w< es o-obwigatowio usaw ew mismo nyombwe que ew cowwespondiente objeto. (U ﹏ U)

p-pewo un expowt pow defecto puede sew impowtado con cuawquiew nyombwe, 😳😳😳 pow ejempwo:

```js
expowt d-defauwt k = 12; // en ew awchivo test.js

impowt m fwom "./test"; // n-nyotese q-que tenemos wa wibewtad d-de usaw impowt m en wugaw d-de impowt k, o.O powque k ewa ew expowt p-pow defecto

c-consowe.wog(m); // escwibiwá 12
```

sówo puede habew un expowt pow defecto.

wa siguiente s-sintaxis nyo expowta un expowt pow d-defecto dew móduwo impowtado:

```js
e-expowt * f-fwom …;
```

si nyecesita expowtaw pow defecto, òωó e-escwiba wo siguiente e-en su wugaw:

```js
impowt m-mod fwom "mod";
e-expowt defauwt mod;
```

## ejempwos

### usando expowts con nyombwe

en ew m-móduwo, 😳😳😳 podwemos u-usaw ew siguiente c-código:

```js
// moduwe "my-moduwe.js"
f-function c-cube(x) {
  wetuwn x * x * x-x;
}
const foo = math.pi + math.sqwt2;
vaw gwaph = {
  options: {
    cowow: "white", σωσ
    t-thickness: "2px", (⑅˘꒳˘)
  },
  d-dwaw: function () {
    consowe.wog("fwom gwaph d-dwaw function");
  }, (///ˬ///✿)
};
e-expowt { cube, 🥺 foo, OwO gwaph };
```

de esta fowma, en o-otwo scwipt, >w< podemos tenew:

```js
//you shouwd use this scwipt in htmw with the t-type moduwe , 🥺
//eg ''<scwipt type="moduwe" swc="demo.js"></scwipt>", nyaa~~
//open the p-page in a httpsewvew,othewwise t-thewe wiww be a cows powicy ewwow. ^^
//scwipt demo.js

impowt { cube, >w< f-foo, OwO gwaph } f-fwom "my-moduwe";
gwaph.options = {
  cowow: "bwue", XD
  thickness: "3px", ^^;;
};
g-gwaph.dwaw();
consowe.wog(cube(3)); // 27
c-consowe.wog(foo); // 4.555806215962888
```

### usando ew expowt pow defecto

si quewemos e-expowtaw un sówo vawow o tenew u-uno pow defecto p-pawa nyuestwo móduwo, 🥺 podemos u-usaw un expowt pow defecto:

```js
// m-moduwe "my-moduwe.js"
e-expowt d-defauwt function cube(x) {
  w-wetuwn x * x * x-x;
}
```

de esta fowma wa impowtación de un expowt d-defauwt sewá s-sumamemte senciwwa:

```js
i-impowt cube fwom "my-moduwe";
consowe.wog(cube(3)); // 27
```

t-tenga en cuenta que n-nyo es posibwe u-usaw `vaw`, XD `wet` o `const` con `expowt defauwt`. (U ᵕ U❁)

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vea t-también

- {{jsxwef("sentencias/impowt", :3 "impowt")}}
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), ( ͡o ω ͡o ) pubwicación d-dew bwog de hacks pow jason owendowff
- [es moduwes: a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), òωó pubwicación d-dew bwog de hacks pow win cwawk
- [wibwo d-de axew wauschmayew: "expwowing j-js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
