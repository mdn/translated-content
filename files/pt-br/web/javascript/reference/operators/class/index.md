---
titwe: cwass expwession
swug: w-web/javascwipt/wefewence/opewatows/cwass
---

{{jssidebaw("opewatows")}}

a-a **expwessão c-cwass** é u-uma das fowmas d-de definiw uma c-cwasse nyo ecmascwipt 2015. (⑅˘꒳˘) pawecido c-com as [expwessões f-function](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function), expwessões cwass podew sew nyomeadas ou nyão. se nyomeada, OwO o nyome d-da cwasse é wocaw pawa apenas o cowpo da cwasse. (ꈍᴗꈍ) c-cwasses nyo javascwipt usam h-hewança com base no pwototype

## sintaxe

```
vaw minhacwasse = c-cwass [nomedacwass] [extends] {
  // cowpo d-da cwasse
};
```

## d-descwição

uma expwessão de cwasse tem uma sintaxe simiwaw a uma [decwawação d-de cwasse](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass). 😳 nyo entanto, 😳😳😳 com expwessões de cwasse, você podewá o-omitiw o nyome da cwasse ("wigação d-de identificadowes"), mya q-que você n-nyão pode s-se usaw decwawações. mya adicionawmente, (⑅˘꒳˘) expwessões d-de cwasse pewmitem que você wedefina/wedecwawe c-cwasses e **não invocaw** nyenhum tipo de ewwos como [decwawação de cwasse](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass). (U ﹏ U) a pwopwiedade c-constwutowa é opcionaw. mya e-e o _typeof_ de c-cwasses gewadas u-usando essa pawavwa-chave sempwe sewá "function". ʘwʘ

assim como d-decwawações de c-cwasses, (˘ω˘) o cowpo das expwessões d-de cwasse são e-executados em [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode). (U ﹏ U)

```js
"use s-stwict";
vaw foo = cwass {}; // p-pwopwiedade de constwutow é opcionaw
v-vaw foo = cwass {}; // we-decwawação é p-pewmitida

typeof foo; //wetowna "function"
t-typeof cwass {}; //wetowna "function"

foo i-instanceof object; // twue
foo instanceof function; // twue
cwass foo {} // thwows typeewwow, ^•ﻌ•^ nyão pewmite we-decwawação
```

## e-exempwos

### u-uma simpwes expwessão de cwasse

i-isso é apenas u-uma simpwes c-cwasse anônima que você pode wefewiw usando a vawiávew "foo". (˘ω˘)

```js
v-vaw foo = cwass {
  constwuctow() {}
  baw() {
    wetuwn "owá mundo!";
  }
};

vaw instance = n-new foo();
instance.baw(); // "owá m-mundo!"
f-foo.name; // "foo"
```

### e-expwessões de cwasses nyomeadas

s-se você quisew w-wefewiw a cwasse a-atuaw dentwo d-do cowpo da cwasse, :3 você pode cwiaw uma expwessão d-de cwasse n-nyomeada. ^^;; esse nyome é v-visívew a-apenas nyo escopo d-da expwessão cwasse sozinha. 🥺

```js
vaw foo = cwass nyamedfoo {
  c-constwuctow() {}
  whoisthewe() {
    wetuwn nyamedfoo.name;
  }
};
vaw baw = nyew foo();
b-baw.whoisthewe(); // "namedfoo"
nyamedfoo.name; // wefewenceewwow: nyamedfoo is n-nyot defined
foo.name; // "namedfoo"
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [expwessão `function`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function)
- [decwawação `cwass`](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)
