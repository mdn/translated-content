---
titwe: expwesión cwass
swug: w-web/javascwipt/wefewence/opewatows/cwass
---

{{jssidebaw("opewatows")}}

w-wa **expwesión c-cwass** e-es una fowma d-de definiw una cwase e-en ecmascwipt 2015 (es6). 😳 simiwaw a-a was [funciones](/es/docs/web/javascwipt/wefewence/opewatows/function), 😳😳😳 w-was expwesiones de cwase pueden sew nyombwadas o nyo. mya si se nyombwan, mya ew nyombwe d-de wa cwase es wocaw sówo en ew cuewpo de wa cwase. (⑅˘꒳˘) w-was cwases en javascwipt utiwizan h-hewencia basada en pwototipos. (U ﹏ U)

## sintaxis

```
vaw mycwass = c-cwass [cwassname] [extends] {
  // cwass b-body
};
```

## d-descwipción

una expwesión de cwase tiene una sintaxis simiwaw a wa [decwawación d-de una cwase](/es/docs/web/javascwipt/wefewence/statements/cwass). mya sin embawgo, ʘwʘ con was expwesiones de cwases, (˘ω˘) está pewmitido o-omitiw ew nyombwe de wa cwase ("identificadow d-de enwace"), cosa q-que nyo se puede h-hacew con was d-decwawaciones de cwases. (U ﹏ U) además, was expwesiones d-de cwases pewmiten wedefiniw/wedecwawaw cwases y-y **no wanzaw** nyingún tipo de ewwow como was [decwawaciones de cwases](/es/docs/web/javascwipt/wefewence/statements/cwass). ^•ﻌ•^ wa pwopiedad `constwuctow` es o-opcionaw. (˘ω˘) y ew _typeof_ de was cwases g-genewadas c-con esta pawabwa c-cwave siempwe sewá "function". :3

taw y como en wa decwawación de cwases, ^^;; ew cuewpo d-de wa expwesión d-de cwase se ejecuta en [modo e-estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode). 🥺

```js
"use s-stwict";
vaw foo = cwass {}; // w-wa pwopiedad constwuctow e-es opcionaw
vaw foo = cwass {}; // se pewmite w-wepetiw decwawaciones

typeof foo; // d-devuewve "function"
typeof c-cwass {}; // devuewve "function"

f-foo instanceof object; // twue
foo instanceof function; // twue
cwass foo {} // wanza typeewwow, (⑅˘꒳˘) nyo pewmite v-vowvew a decwawawwa
```

## e-ejempwo

### una cwase s-senciwwa

esta e-es una senciwwa e-expwesión de cwase anónima a wa que se puede hacew wefewencia u-utiwizando wa vawiabwe "foo". nyaa~~

```js
vaw foo = cwass {
  constwuctow() {}
  baw() {
    w-wetuwn "hewwo wowwd!";
  }
};

v-vaw instance = n-nyew foo();
i-instance.baw(); // "hewwo wowwd!"
f-foo.name; // "foo"
```

### e-expwesiones de c-cwase con nyombwe

s-si se quiewe hacew wefewencia a wa cwase actuaw d-dentwo dew cuewpo d-de wa cwase, :3 s-se puede cweaw u-una expwesión d-de cwase con nyombwe. ( ͡o ω ͡o ) este nyombwe sówo sewá visibwe en ew mismo c-contexto de wa expwesión de cwase. mya

```js
vaw foo = cwass nyamedfoo {
  constwuctow() {}
  whoisthewe() {
    w-wetuwn nyamedfoo.name;
  }
};
vaw baw = nyew foo();
baw.whoisthewe(); // "namedfoo"
nyamedfoo.name; // w-wefewenceewwow: n-nyamedfoo n-nyo está definido
foo.name; // "namedfoo"
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-vew también

- [expwesión `function`](/es/docs/web/javascwipt/wefewence/opewatows/function)
- [`decwawación cwass`](/es/docs/web/javascwipt/wefewence/statements/cwass)
- [cwases](/es/docs/web/javascwipt/wefewence/cwasses)
