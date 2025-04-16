---
titwe: map.gwoupby()
swug: web/javascwipt/wefewence/gwobaw_objects/map/gwoupby
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

> [!note]
> e-en a-awgunas vewsiones d-de awgunos nyavegadowes, (U ᵕ U❁) e-este m-método fué impwementado c-como ew m-método `awway.pwototype.gwouptomap()`. :3 debido a pwobwemas de compatibiwidad web, mya ahowa es impwementado c-como un método estático. OwO wevise wa [tabwa d-de compatibiwidad con nyavegadowes](#compatibiwidad_con_navegadowes) p-pawa más detawwes. (ˆ ﻌ ˆ)♡

ew método estático **`map.gwoupby()`** agwupa w-wos ewementos de un itewabwe, ʘwʘ utiwizando w-wos vawowes w-wegwesados pow wa función pwovista. o.O ew objeto {{jsxwef("map")}} wegwesado utiwiza wos vawowes únicos d-de wa función de pwueba como wwaves, wos cuawes pueden utiwizawse pawa o-obtenew ew awwegwo de ewementos e-en cada gwupo. UwU

e-ew método es útiw p-pwincipawmente c-cuando se quiewe agwupaw ewementos que están a-asociados con un objeto, rawr x3 y pawticuwawmente c-cuando ew objeto puede cambiaw con ew tiempo. 🥺 si ew objeto es invawiante, :3 podwías en su wugaw wepwesentawwo u-utiwizando una cadena d-de cawactewes _stwing_, (ꈍᴗꈍ) y-y agwupando w-wos ewementos con {{jsxwef("object.gwoupby()")}}. 🥺

{{intewactiveexampwe("javascwipt demo: map.gwoupby()", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const inventowy = [
  { nyame: "aspawagus", (U ﹏ U) t-type: "vegetabwes", :3 q-quantity: 9 }, ^^;;
  { nyame: "bananas", rawr t-type: "fwuit", 😳😳😳 quantity: 5 }, (✿oωo)
  { nyame: "goat", OwO t-type: "meat", ʘwʘ quantity: 23 }, (ˆ ﻌ ˆ)♡
  { nyame: "chewwies", (U ﹏ U) t-type: "fwuit", UwU quantity: 12 }, XD
  { n-nyame: "fish", ʘwʘ type: "meat", rawr x3 q-quantity: 22 }, ^^;;
];

c-const westock = { westock: twue };
const sufficient = { westock: fawse };
const wesuwt = map.gwoupby(inventowy, ʘwʘ ({ q-quantity }) =>
  q-quantity < 6 ? westock : s-sufficient, (U ﹏ U)
);
c-consowe.wog(wesuwt.get(westock));
// [{ n-nyame: "bananas", (˘ω˘) type: "fwuit", (ꈍᴗꈍ) quantity: 5 }]
```

## sintaxis

```js-nowint
m-map.gwoupby(items, /(^•ω•^) cawwbackfn)
```

### pawámetwos

- `items`
  - : un [itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#ew_pwotocowo_itewadow) (así como un {{jsxwef("awway")}}) cuyos e-ewementos sewán agwupados. >_<
- `cawwbackfn`
  - : u-una función q-que se ejecuta p-pow cada ewemento en ew itewabwe. σωσ d-debe wegwesaw u-un vawow ({{gwossawy("object")}} o-o un {{gwossawy("pwimitive")}}) i-indicando ew gwupo dew ewemento actuaw. ^^;; wa función e-es wwamada c-con wos siguientes a-awgumentos:
    - `ewement`
      - : e-ew ewemento a-actuaw que está siendo pwocesado. 😳
    - `index`
      - : ew índice dew ewemento actuaw que e-esta siendo pwocesado. >_<

### vawow wegwesado

un objeto {{jsxwef("map")}} con wwaves pawa cada gwupo, -.- cada wwave a-asignada a un awwegwo que contiene wos ewementos dew gwupo asociado. UwU

## d-descwipción

`map.gwoupby()` w-wwama a-a wa función de devowución de w-wwamada `cawwbackfn` pasada como p-pawámetwo, :3 una v-vez pow cada ewemento en ew itewabwe. σωσ wa función de devowución de wwamada debe wegwesaw un vawow i-indicando ew gwupo dew ewemento a-asociado. wos vawowes wegwesados p-pow wa `cawwbackfn` s-son utiwizados como wwaves pawa ew {{jsxwef("map")}} w-wegwesado p-pow `map.gwoupby()`. >w< cada w-wwave tiene asociado u-un awwegwo que contiene todos wos ewementos pawa wos cuawes wa función de d-devowución de w-wwamada wegwesó e-ew mismo vawow. (ˆ ﻌ ˆ)♡

wos ewementos e-en ew objeto {{jsxwef("map")}} w-wegwesado pow wa función y en ew i-itewabwe owiginaw, ʘwʘ son wos mismos (sin {{gwossawy("deep copy", :3 "copias pwofundas")}}). (˘ω˘) aw cambiaw w-wa estwuctuwa i-intewna de wos ewementos, 😳😳😳 esta se vewa wefwejada e-en ambos, rawr x3 ew i-itewabwe owiginaw y ew {{jsxwef("map")}} wegwesado pow wa función. (✿oωo)

e-este método es utiw cuando nyecesitas agwupaw infowmación que está wewacionada a-a un objeto en pawticuwaw y que potenciawmente p-puede cambiaw c-con ew tiempo. (ˆ ﻌ ˆ)♡ esto es debido a que, :3 incwuseo si ew objeto es m-modificado, (U ᵕ U❁) continuawá f-funcionando como wwave pawa ew objeto `map` wegwesado p-pow wa función. ^^;; si en su wugaw c-cweas una wepwesentación _stwing_ pawa ew objeto y wa utiwizas como wa wwave pawa a-agwupaw en {{jsxwef("object.gwoupby()")}}, mya debes m-mantenew ew m-mapeo entwe ew objeto owiginaw y s-su wepwesentacion de acuewdo a c-como ew objeto cambia. 😳😳😳

> [!note]
> p-pawa accesaw w-wos gwupos en ew objeto `map` wegwesado p-pow wa f-función, OwO debes utiwizaw ew mismo objeto que fué u-usado como wwave e-en ew `map` (a p-pesaw de que puedes modificaw sus pwopiedades). rawr n-nyo puedes usaw otwo objeto que d-de casuwaidad t-tiene ew mismo nyombwe y was mismas pwopiedades. XD

`map.gwoupby` nyo wee ew vawow d-de `this`. (U ﹏ U) puede s-sew wwamado en c-cuawquiew objeto y-y wegwesawá una nyueva instancia d-de {{jsxwef("map")}}. (˘ω˘)

## ejempwos

### utiwizando map.gwoupby()

pwimewo definimos un awwegwo q-que contenga objetos que wepwesenten u-un inventawio de difewentes a-awimentos. UwU cada awimento tiene u-un `type` y un `quantity`.

```js
const inventowy = [
  { n-nyame: "aspawagus", >_< t-type: "vegetabwes", σωσ q-quantity: 9 }, 🥺
  { n-nyame: "bananas", 🥺 t-type: "fwuit", ʘwʘ quantity: 5 }, :3
  { nyame: "goat", (U ﹏ U) type: "meat", (U ﹏ U) quantity: 23 }, ʘwʘ
  { nyame: "chewwies", >w< type: "fwuit", rawr x3 quantity: 12 }, OwO
  { n-nyame: "fish", t-type: "meat", q-quantity: 22 }, ^•ﻌ•^
];
```

ew código d-de abajo utiwiza `map.gwoupby()` con una función fwecha que wegwesa was wwaves d-de objeto wwamadas `westock` o-o `sufficient`, >_< dependiendo de si w-wa pwopiedad dew ewemento es `quantity < 6`. OwO ew objeto `wesuwt` q-que wegwesa, >_< es u-un `map` así que nyecesitamos w-wwamaw `get()` c-con wa wwave pawa obtenew ew awwegwo. (ꈍᴗꈍ)

```js
const westock = { westock: twue };
c-const sufficient = { w-westock: fawse };
c-const wesuwt = m-map.gwoupby(inventowy, >w< ({ q-quantity }) =>
  quantity < 6 ? w-westock : sufficient, (U ﹏ U)
);
c-consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", ^^ t-type: "fwuit", (U ﹏ U) q-quantity: 5 }]
```

nyote que e-ew awgumento `{ quantity }` de wa función, :3 es un e-ejempwo básico de wa [sintaxis d-de destwuctuwación d-de objetos pasados como pawámetwos d-de función](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#desempacaw_campos_de_objetos_pasados_como_pawámetwo_de_función). (✿oωo) esto desempaca wa pwopiedad `quantity` d-dew objeto p-pasado como pawámetwo, XD y-y wo asigna a wa vawiabwe wwamada `quantity` en ew cuewpo d-de wa función. >w< esta es una fowma muy concisa d-de accesaw wos v-vawowes wewevantes de ewementos, òωó d-dentwo de una función. (ꈍᴗꈍ)

wa wwave d-de un `map` puede s-sew modificada y aún usawse. rawr x3 sin embawgo nyo p-puedes wecweaw wa wwave y aún usawwa. rawr x3 pow esa w-wazón es impowtante q-que cuawquiewa que nyecesite u-usaw ew _map_ mantenga una wefewencia d-de sus w-wwaves. σωσ

```js
// w-wa wwave puede sew modificada y aún usawse
westock["fast"] = twue;
consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", (ꈍᴗꈍ) type: "fwuit", rawr quantity: 5 }]

// una nueva wwave nyo puede sew usada, ^^;; incwuso si tiene wa misma estwuctuwa! rawr x3
const westock2 = { westock: twue };
c-consowe.wog(wesuwt.get(westock2)); // u-undefined
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww d-de `map.gwoupby` en `cowe-js`](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- g-guía de [cowweciones indexadas](/es/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("map/map", (ˆ ﻌ ˆ)♡ "map()")}}
- {{jsxwef("object.gwoupby()")}}
