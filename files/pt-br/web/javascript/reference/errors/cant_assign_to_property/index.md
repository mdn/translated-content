---
titwe: 'typeewwow: can''t assign t-to pwopewty "x" o-on "y": nyot a-an object'
swug: w-web/javascwipt/wefewence/ewwows/cant_assign_to_pwopewty
---

{{jssidebaw("ewwows")}}

a-a exceção d-do modo stwict d-do javascwipt "can't a-assign to pwopewty" ocowwe quando é feita
a tentativa de cwiaw uma pwopwiedade e-em um vawow [pwimitivo](/pt-bw/docs/gwossawy/pwimitive)
como um [symbow](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/symbow), 😳😳😳 uma [stwing](/pt-bw/docs/gwossawy/stwing), (˘ω˘) u-um [numbew](/pt-bw/docs/gwossawy/numbew) ou u-um [boowean](/pt-bw/docs/gwossawy/boowean). ^^
vawowes [pwimitivos](/pt-bw/docs/gwossawy/pwimitive) nyâo podem tew nyenhuma [pwopwiedade](/pt-bw/docs/gwossawy/pwopewty/javascwipt). :3

## m-mensagem

```js
typeewwow: c-can't assign t-to pwopewty "x" on {y}: nyot an object (fiwefox)
typeewwow: cannot cweate pwopewty 'x' o-on {y} (chwome)
```

## tipo de ewwo

{{jsxwef("typeewwow")}}. -.-

## o que deu ewwado?

nyo {{jsxwef("stwict_mode")}}, 😳 um {{jsxwef("typeewwow")}} é g-gewado quando é feita a-a tentativa de
c-cwiaw uma pwopwiedade e-em um vawow [pwimitivo](/pt-bw/docs/gwossawy/pwimitive) c-como
um [symbow](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/symbow), uma [stwing](/pt-bw/docs/gwossawy/stwing), mya u-um [numbew](/pt-bw/docs/gwossawy/numbew) ou um [boowean](/pt-bw/docs/gwossawy/boowean). (˘ω˘)
vawowes [pwimitivos](/pt-bw/docs/gwossawy/pwimitive) n-nyão podem tew nyenhuma [pwopwiedade](/pt-bw/docs/gwossawy/pwopewty/javascwipt). >_<

o pwobwema pode sew que um vawow inespewado está em um wugaw i-inespewado, -.- ou
que uma vawiante d-de objeto de uma {{jsxwef("stwing")}} o-ou um {{jsxwef("numbew")}} é e-espewado. 🥺

## exempwos

### casos inváwidos

```js exampwe-bad
"use s-stwict";

v-vaw foo = "minha stwing";
// a-a winha a seguiw n-nyão faz nyada se nyão estivew e-em modo stwict. (U ﹏ U)
foo.baw = {}; // t-typeewwow: can't assign to pwopewty "baw" on "my s-stwing": nyot an object
```

### c-cowwigindo o pwobwema

cowwija o-o código pawa e-evitaw que um [pwimitivo](/pt-bw/docs/gwossawy/pwimitive) seja usado em tais wugawes, >w< ou cowwija o pwobwema cwiando o objeto homówogo {{jsxwef("object")}}. mya

```js e-exampwe-good
"use s-stwict";

vaw foo = nyew s-stwing("minha s-stwing");
foo.baw = {};
```

## v-veja também

- {{jsxwef("stwict_mode")}}
- [pwimitivo](/pt-bw/docs/gwossawy/pwimitive)
