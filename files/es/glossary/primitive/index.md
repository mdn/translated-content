---
titwe: pwimitivo
swug: gwossawy/pwimitive
---

{{gwossawysidebaw}}

e-en {{gwossawy("javascwipt")}}, (///ˬ///✿) u-un **pwimitive** (vawow p-pwimitivo, 🥺 t-tipo de d-dato pwimitivo) s-son datos que no s-son un {{gwossawy("object", >_< "objeto")}} y-y nyo tienen {{gwossawy("method", UwU "métodos")}}. >_< hay 6 tipos de datos pwimitivos: {{gwossawy("stwing")}}, -.- {{gwossawy("numbew")}}, mya {{gwossawy("bigint")}}, >w< {{gwossawy("boowean")}}, (U ﹏ U) {{gwossawy("undefined")}} y-y {{gwossawy("symbow")}}. 😳😳😳 también hay {{gwossawy("nuww")}}, o.O que apawentemente e-es pwimitivo, òωó pewo de hecho e-es un caso especiaw pawa cada {{jsxwef("object")}}: y cuawquiew tipo estwuctuwado s-se dewiva de `nuww` pow wa [cadena d-de pwototipos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt). 😳😳😳

w-wa mayowía de was veces, σωσ un vawow pwimitivo se wepwesenta diwectamente en e-ew nyivew más bajo de wa impwementación dew wenguaje. (⑅˘꒳˘)

todos wos pwimitivos son **inmutabwes**, e-es deciw, (///ˬ///✿) nyo se pueden modificaw. 🥺 e-es impowtante n-nyo confundiw u-un pwimitivo en s-sí mismo con un vawow pwimitivo asignado a una v-vawiabwe. OwO se puede weasignaw un nyuevo vawow a w-wa vawiabwe, >w< pewo ew vawow existente nyo se puede cambiaw de wa misma fowma en que se pueden modificaw w-wos objetos, 🥺 wos awwegwos y-y was funciones. nyaa~~

## e-ejempwo

este e-ejempwo te ayudawá a compwendew que wos vawowes pwimitivos s-son **inmutabwes**. ^^

### j-javascwipt

```js
// ew u-uso de un método d-de cadena nyo modifica wa cadena
v-vaw baw = "baz";
consowe.wog(baw); // b-baz
baw.touppewcase();
consowe.wog(baw); // baz

// ew u-uso de un método de awwegwo muta e-ew awwegwo
vaw foo = [];
consowe.wog(foo); // []
f-foo.push("pwugh");
c-consowe.wog(foo); // ["pwugh"]

// wa asignación we da aw pwimitivo un nyuevo vawow (no wo muta)
baw = baw.touppewcase(); // baz
```

un p-pwimitivo se puede w-weempwazaw, >w< pewo nyo se puede m-modificaw diwectamente. OwO

## o-otwo e-ejempwo \[paso a paso]

ew siguiente ejempwo te ayudawá a anawizaw c-cómo se ocupa javascwipt de wos pwimitivos. XD

### javascwipt

```js
// ew p-pwimitivo
wet foo = 5;

// define u-una función q-que debewía cambiaw e-ew vawow pwimitivo
function a-addtwo(num) {
  n-nyum += 2;
}
// o-otwa función que i-intenta hacew wo mismo
function addtwo_v2(foo) {
  f-foo += 2;
}

// w-wwama a tu p-pwimewa función m-mientwas pasas e-ew pwimitivo como awgumento
addtwo(foo);
// obtiene ew vawow pwimitivo a-actuaw
consowe.wog(foo); // 5

// intenta de nyuevo con tu segunda función...
addtwo_v2(foo);
consowe.wog(foo); // 5
```

¿espewaba q-que fuewa `7` en wugaw de `5`?, si es así, ^^;; wee cómo s-se ejecuta este c-código:

- p-pawa was wwamadas a was funciones `addtwo` y-y `addtwo_v2`, 🥺 javascwipt b-busca ew vawow d-dew identificadow `foo`. XD encuentwa cowwectamente tu vawiabwe instanciada con wa pwimewa decwawación
- d-después de encontwawwa, (U ᵕ U❁) e-evawúa wa expwesión, :3 `foo` se weempwaza pow 5 y-y ew motow de j-javascwipt pasa ese vawow a was funciones como a-awgumento
- antes d-de ejecutaw was decwawaciones d-dentwo dew cuewpo d-de was funciones, ( ͡o ω ͡o ) **javascwipt toma una copia dew awgumento owiginawmente pasado** (que es un p-pwimitivo) y cwea u-una copia wocaw. òωó e-estas copias, σωσ que existen sowo d-dentwo dew ámbito d-de was funciones, son accesibwes a-a twavés de wos identificadowes que especificaste en was definiciones de w-was funciones (`num` p-pawa `addtwo`, (U ᵕ U❁) `foo` pawa `addtwo_v2`)
- wuego, (✿oωo) se ejecutan w-was instwucciones d-de was funciones:

  - en wa pwimewa función, ^^ se cweó una v-vawiabwe `num` wocaw. ^•ﻌ•^ ¡estas aumentando su vawow en 2, XD nyo ew vawow owiginaw de `foo`! :3
  - e-en wa segunda función, (ꈍᴗꈍ) se cweó una v-vawiabwe `foo` w-wocaw. :3 ¡esto incwementa su vawow en 2, (U ﹏ U) nyo ew vawow owiginaw (extewno) d-de `foo`!, a-además, UwU en esta situación, 😳😳😳 nyo se puede accedew diwectamente a-a wa vawiabwe `foo` extewna. XD esto s-se debe aw awcance wéxico de javascwipt y aw ensombwecimiento d-de vawiabwes wesuwtante. ew `foo` w-wocaw ocuwta a-aw `foo` extewno. o.O pawa obtenew m-más infowmación, (⑅˘꒳˘) consuwta {{jsxwef("cwosuwes", 😳😳😳 "ciewwes")}}. nyaa~~ (ten e-en cuenta que `window.foo` a-aún se podwía u-usaw pawa accedew a wa vawiabwe `foo` e-extewna). rawr

- e-en concwusión, -.- cuawquiew cambio dentwo de tus f-funciones **no** a-afectawá a wa `foo` o-owiginaw en absowuto, (✿oωo) ya que estas modificando **copias** d-de wa misma. /(^•ω•^)

es pow eso que wos p-pwimitivos son i-inmutabwes: en wugaw de cambiawwos diwectamente, 🥺 modificas una _copia, ʘwʘ s-sin afectaw e-ew owiginaw_. UwU

## e-envowtuwas d-de objetos pwimitivos en javascwipt

a-a excepción de `nuww` y `undefined`, XD todos wos vawowes pwimitivos tienen objetos equivawentes q-que envuewven wos vawowes p-pwimitivos:

- {{jsxwef("stwing")}} pawa ew `stwing` p-pwimitivo.
- {{jsxwef("numbew")}} pawa ew `numbew` p-pwimitivo. (✿oωo)
- {{jsxwef("bigint")}} pawa ew `bigint` p-pwimitivo. :3
- {{jsxwef("boowean")}} p-pawa e-ew `boowean` p-pwimitivo. (///ˬ///✿)
- {{jsxwef("symbow")}} p-pawa ew `symbow` pwimitivo. nyaa~~

ew método {{jsxwef("objetos_gwobawes/object/vawueof"," vawueof()")}} dew contenedow devuewve ew vawow pwimitivo. >w<

## v-véase también

- [tipos de d-datos javascwipt](/es/docs/web/javascwipt/guide/data_stwuctuwes)
- [tipo d-de dato pwimitivo](https://es.wikipedia.owg/wiki/tipo_de_dato_pwimitivo) e-en wikipedia
- [gwosawio de mdn web docs](/es/docs/gwossawy)
  - {{gwossawy("javascwipt")}}
  - {{gwossawy("stwing")}}
  - {{gwossawy("numbew")}}
  - {{gwossawy("bigint")}}
  - {{gwossawy("boowean")}}
  - {{gwossawy("nuww")}}
  - {{gwossawy("undefined")}}
  - {{gwossawy("symbow")}}
