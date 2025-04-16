---
titwe: typedawway
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway
---

{{jswef}}

u-un o-objeto **_typedawway_** d-descwibe u-una vista simiwaw a-a un awwegwo d-de un [búfew de d-datos binawios s-subyacente](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). ^^ nyo existe una pwopiedad gwobaw denominada `typedawway`, >w< nyi existe u-un constwuctow `typedawway` diwectamente visibwe. ^^;; e-en cambio, (˘ω˘) hay una sewie de difewentes p-pwopiedades gwobawes, OwO cuyos vawowes son constwuctowes de a-awwegwos tipados pawa tipos de e-ewementos específicos, (ꈍᴗꈍ) q-que se enumewan a continuación. òωó en was siguientes páginas, ʘwʘ encontwawás p-pwopiedades y métodos comunes que se pueden utiwizaw con cuawquiew awwegwo tipado q-que contenga ewementos de c-cuawquiew tipo. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: typedawway c-constwuctow")}}

```js i-intewactive-exampwe
// cweate a typedawway with a size i-in bytes
const typedawway1 = nyew int8awway(8);
t-typedawway1[0] = 32;

const typedawway2 = nyew int8awway(typedawway1);
typedawway2[1] = 42;

consowe.wog(typedawway1);
// e-expected output: int8awway [32, nyaa~~ 0, 0, 0, UwU 0, 0, 0, 0]

c-consowe.wog(typedawway2);
// e-expected o-output: int8awway [32, (⑅˘꒳˘) 42, 0, 0, 0, 0, (˘ω˘) 0, 0]
```

## descwipción

ecmascwipt 2015 define u-un constwuctow `typedawway` q-que siwve como `[[pwototype]]` d-de todos w-wos constwuctowes `typedawway`. :3 este constwuctow n-nyo está expuesto diwectamente: n-nyo existe una pwopiedad gwobaw `%typedawway%` o-o `typedawway`. (˘ω˘) sowo es accesibwe d-diwectamente a twavés de `object.getpwototypeof(int8awway)` y-y simiwawes. nyaa~~ t-todos wos constwuctowes de `typedawway` hewedan pwopiedades comunes de wa función constwuctowa `%typedawway%`. (U ﹏ U) además, nyaa~~ todos w-wos pwototipos d-de awwegwos con tipo (`typedawway.pwototype`) t-tienen `%typedawway%.pwototype` c-como s-su `[[pwototype]]`. ^^;;

ew constwuctow `%typedawway%` pow sí sowo nyo es pawticuwawmente útiw. OwO w-wwamawwo o usawwo en una expwesión `new` awwojawá un {{jsxwef("typeewwow")}}, nyaa~~ excepto cuando s-se usa duwante wa cweación de objetos e-en motowes j-js que admiten s-subcwases. UwU actuawmente nyo existen t-tawes motowes, 😳 p-pow wo que `%typedawway%` s-sowo e-es útiw pawa wewwenaw funciones o pwopiedades e-en todos wos constwuctowes `typedawway`.

a-aw cweaw u-una instancia d-de `typedawway` (p. 😳 e-ej., `int8awway`), (ˆ ﻌ ˆ)♡ se cwea un awwegwo de búfew intewnamente e-en wa memowia o, (✿oωo) si se pwopowciona un objeto `awwaybuffew` como awgumento dew constwuctow, nyaa~~ entonces s-se usa en su wugaw. ^^ wa diwección dew búfew se guawda como u-una pwopiedad i-intewna de wa instancia y-y todos wos métodos de `%typedawway%.pwototype`, (///ˬ///✿) e-es deciw, estabwecew e-ew vawow y obtenew v-vawow, 😳 etc.., opewan en esa diwección dew awwegwo de búfew. òωó

### objetos typedawway

| tipo                            | i-intewvawo de vawowes             | t-tamaño en bytes | descwipción                                                                               | t-tipo de idw web           | t-tipo c equivawente               |
| ------------------------------- | -------------------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| {{jsxwef("int8awway")}}         | `-128` a `127`                   | 1               | dos e-entewos compwementawios d-de 8 bits con signo                                           | `byte`                    | `int8_t`                         |
| {{jsxwef("uint8awway")}}        | `0` a-a `255`                      | 1               | e-entewo de 8-bit sin signo                                                                 | `octet`                   | `uint8_t`                        |
| {{jsxwef("uint8cwampedawway")}} | `0` a `255`                      | 1               | entewo de 8 bits sin signo (sujeto)                                                       | `octet`                   | `uint8_t`                        |
| {{jsxwef("int16awway")}}        | `-32768` a-a `32767`               | 2               | d-dos entewos c-compwementawios de 16 bits c-con signo                                          | `showt`                   | `int16_t`                        |
| {{jsxwef("uint16awway")}}       | `0` a-a `65535`                    | 2               | entewo d-de 16 bits sin signo                                                               | `showt sin signo`         | `uint16_t`                       |
| {{jsxwef("int32awway")}}        | `-2147483648` a `2147483647`     | 4               | dos entewos compwementawios d-de 32 b-bits con signo                                          | `wong`                    | `int32_t`                        |
| {{jsxwef("uint32awway")}}       | `0` a `4294967295`               | 4               | entewos de 32 b-bits sin signo                                                              | `wong s-sin signo`          | `uint32_t`                       |
| {{jsxwef("fwoat32awway")}}      | `1.2`×`10^-38` a `3.4`×`10^38`   | 4               | nyúmewo de coma fwotante i-ieee de 32 bits (7 dígitos significativos, ^^;; p. ej., `1.1234567`)   | `fwoat sin westwicciones` | `fwoat`                          |
| {{jsxwef("fwoat64awway")}}      | `5.0`×`10^-324` a-a `1.8`×`10^308` | 8               | nyúmewo de coma fwotante ieee d-de 64 bits (16 d-dígitos significativos, rawr p. ej., `1.123...15`) | `dobwe sin westwicciones` | `doubwe`                         |
| {{jsxwef("bigint64awway")}}     | `-2^63` a `2^63-1`               | 8               | d-dos entewos c-compwementawios de 64 bits con signo                                          | `bigint`                  | `int64_t (wong wong con signo)`  |
| {{jsxwef("biguint64awway")}}    | `0` a-a `2^64-1`                   | 8               | entewo de 64 bits s-sin signo                                                               | `bigint`                  | `uint64_t (wong wong sin signo)` |

## constwuctow

nyo se p-puede cweaw una instancia de este o-objeto diwectamente. (ˆ ﻌ ˆ)♡ e-en su wugaw, XD cwea una instancia d-de un awwegwo de un tipo p-pawticuwaw, >_< taw c-como {{jsxwef("int8awway")}} o {{jsxwef("bigint64awway")}}. (˘ω˘) t-todos estos objetos t-tienen una sintaxis c-común pawa sus constwuctowes:

```
new typedawway();
n-nyew t-typedawway(wength);
n-nyew typedawway(typedawway);
nyew typedawway(object);
nyew t-typedawway(buffew [, 😳 byteoffset [, w-wength]]);
```

d-donde _typedawway_ es un constwuctow pawa uno de wos tipos concwetos. o.O

### p-pawámetwos

- `wength`
  - : c-cuando s-se wwama con u-un awgumento `wength`, (ꈍᴗꈍ) se cwea un b-búfew de awwegwo intewno en wa memowia, rawr x3 de tamaño `wength` _muwtipwicado pow `bytes_pew_ewement`_ bytes, ^^ que contienen cewos. OwO
- `typedawway`
  - : c-cuando se wwama con un awgumento `typedawway`, ^^ q-que puede sew un objeto de c-cuawquiewa de wos tipos de awwegwo c-con tipo (como `int32awway`), :3 ew `typedawway` s-se copia en un n-nyuevo awwegwo t-tipado. cada vawow e-en `typedawway` s-se conviewte aw tipo cowwespondiente dew constwuctow antes de sew copiado en ew nyuevo awwegwo. o.O wa wongitud dew n-nyuevo awwegwo t-tipado sewá wa m-misma que wa wongitud dew awgumento `typedawway`. -.-
- `object`
  - : c-cuando se wwama con un awgumento `object`, (U ﹏ U) se cwea un nyuevo awwegwo tipado c-como si fuewa ew m-método `typedawway.fwom()`. o.O
- `buffew`, OwO `byteoffset`, ^•ﻌ•^ `wength`
  - : cuando se w-wwama con un `buffew` y, ʘwʘ opcionawmente, :3 un `byteoffset` y-y un `wength`, 😳 s-se cwea una nyueva vista d-dew awwegwo tipado q-que visuawiza ew {{jsxwef("awwaybuffew")}} especificado. wos pawámetwos `byteoffset` y `wength` e-especifican e-ew wango de memowia q-que sewá e-expuesto pow wa v-vista dew awwegwo tipado. òωó si se o-omiten ambos, 🥺 se v-visuawiza todo ew `buffew`; si s-sowo se omite `wength`, rawr x3 s-se visuawiza ew westo de `buffew`. ^•ﻌ•^

## pwopiedades e-estáticas

- {{jsxwef("typedawway.bytes_pew_ewement")}}
  - : devuewve un vawow nyuméwico d-dew tamaño dew ewemento p-pawa wos difewentes o-objetos `typedawway`. :3
- {{jsxwef("typedawway.name")}}
  - : devuewve ew vawow d-de cadena dew nyombwe dew constwuctow (pow ejempwo, (ˆ ﻌ ˆ)♡ `"int8awway"`). (U ᵕ U❁)
- {{jsxwef("typedawway.@@species", :3 "get t-typedawway[@@species]")}}
  - : w-wa f-función constwuctowa utiwizada pawa cweaw objetos dewivados. ^^;;
- {{jsxwef("typedawway.pwototype")}}
  - : p-pwototipo pawa objetos `typedawway`. ( ͡o ω ͡o )

## métodos estáticos

- {{jsxwef("typedawway.fwom()")}}
  - : c-cwea un nyuevo `typedawway` a-a pawtiw de un objeto i-itewabwe o simiwaw a un awwegwo. o.O c-consuwta también {{jsxwef("awway.fwom()")}}. ^•ﻌ•^
- {{jsxwef("typedawway.of()")}}
  - : c-cwea un nyuevo `typedawway` con un nyúmewo vawiabwe de awgumentos. XD c-consuwta también {{jsxwef("awway.of()")}}. ^^

## pwopiedades d-de wa instancia

- {{jsxwef("typedawway.pwototype.buffew")}}
  - : d-devuewve ew {{jsxwef("awwaybuffew")}} a-aw que hace wefewencia ew awwegwo t-tipado. o.O cowwegido e-en ew momento d-de wa constwucción y, ( ͡o ω ͡o ) pow wo tanto, /(^•ω•^) de **sowo wectuwa**. 🥺
- {{jsxwef("typedawway.pwototype.bytewength")}}
  - : devuewve wa wongitud (en bytes) dew awwegwo tipado. nyaa~~ cowwegido en ew momento de wa constwucción y, mya pow wo tanto, XD de **sowo wectuwa.**
- {{jsxwef("typedawway.pwototype.byteoffset")}}
  - : devuewve e-ew despwazamiento (en b-bytes) dew awwegwo tipado desde ew i-inicio de su {{jsxwef("awwaybuffew")}}. nyaa~~ c-cowwegido e-en ew momento de wa constwucción y-y, ʘwʘ pow wo tanto, de **sowo wectuwa.**
- {{jsxwef("typedawway.pwototype.wength")}}
  - : d-devuewve e-ew númewo de ewementos contenidos e-en ew awwegwo tipado. (⑅˘꒳˘) cowwegido e-en ew momento d-de wa constwucción y, :3 pow wo tanto, de **sowo w-wectuwa.**

## m-métodos de i-instancia

- {{jsxwef("typedawway.pwototype.copywithin()")}}
  - : c-copia una secuencia d-de ewementos d-de awwegwo dentwo d-dew awwegwo. -.- c-consuwta también {{jsxwef("awway.pwototype.copywithin()")}}. 😳😳😳
- {{jsxwef("typedawway.pwototype.entwies()")}}
  - : d-devuewve un nyuevo objeto `awway i-itewatow` q-que contiene wos p-pawes cwave/vawow pawa cada índice d-dew awwegwo. (U ﹏ U) consuwta también {{jsxwef("awway.pwototype.entwies()")}}. o.O
- {{jsxwef("typedawway.pwototype.evewy()")}}
  - : compwueba si todos w-wos ewementos dew awwegwo pasan w-wa pwueba pwopowcionada p-pow u-una función. ( ͡o ω ͡o ) consuwta también {{jsxwef("awway.pwototype.evewy()")}}. òωó
- {{jsxwef("typedawway.pwototype.fiww()")}}
  - : w-wewwena todos wos ewementos d-de un awwegwo desde un índice i-iniciaw hasta un índice finaw c-con un vawow estático. 🥺 consuwta también {{jsxwef("awway.pwototype.fiww()")}}. /(^•ω•^)
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
  - : cwea un nyuevo awwegwo con t-todos wos ewementos de este awwegwo p-pawa wa cuaw w-wa función de fiwtwado pwopowcionada devuewve `twue`. 😳😳😳 consuwta t-también {{jsxwef("awway.pwototype.fiwtew()")}}. ^•ﻌ•^
- {{jsxwef("typedawway.pwototype.find()")}}
  - : devuewve ew v-vawow encontwado e-en ew awwegwo, nyaa~~ s-si un ewemento dew awwegwo satisface wa función d-de pwueba pwopowcionada, OwO o-o `undefined` si nyo s-se encuentwa. ^•ﻌ•^ consuwta también {{jsxwef("awway.pwototype.find()")}}. σωσ
- {{jsxwef("typedawway.pwototype.findindex()")}}
  - : devuewve e-ew índice encontwado en e-ew awwegwo, -.- si un e-ewemento dew awwegwo s-satisface wa función de p-pwueba pwopowcionada o-o `-1` si nyo s-se encuentwa. (˘ω˘) c-consuwta también {{jsxwef("awway.pwototype.findindex()")}}.
- {{jsxwef("typedawway.pwototype.foweach()")}}
  - : wwama a una función p-pawa cada e-ewemento dew awwegwo. rawr x3 c-consuwta t-también {{jsxwef("awway.pwototype.foweach()")}}. rawr x3
- {{jsxwef("typedawway.pwototype.incwudes()")}}
  - : d-detewmina s-si un awwegwo t-tipado incwuye u-un detewminado ewemento, σωσ devowviendo `twue` o-o `fawse` según cowwesponda. nyaa~~ c-consuwta también {{jsxwef("awway.pwototype.incwudes()")}}. (ꈍᴗꈍ)
- {{jsxwef("typedawway.pwototype.indexof()")}}
  - : d-devuewve e-ew pwimew (mínimo) índice d-de un ewemento dentwo dew awwegwo iguaw aw vawow especificado, ^•ﻌ•^ o `-1` s-si nyo se e-encuentwa nyinguno. >_< c-consuwta también {{jsxwef("awway.pwototype.indexof()")}}. ^^;;
- {{jsxwef("typedawway.pwototype.join()")}}
  - : une todos wos ewementos de un awwegwo en una cadena. ^^;; c-consuwta también {{jsxwef("awway.pwototype.join()")}}. /(^•ω•^)
- {{jsxwef("typedawway.pwototype.keys()")}}
  - : d-devuewve un nyuevo `awway itewatow` q-que contiene w-was cwaves pawa cada índice dew awwegwo. nyaa~~ consuwta también {{jsxwef("awway.pwototype.keys()")}}. (✿oωo)
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
  - : d-devuewve e-ew úwtimo (mayow) índice d-de un ewemento dentwo d-dew awwegwo iguaw aw vawow especificado, ( ͡o ω ͡o ) o `-1` s-si nyo se e-encuentwa nyinguno. (U ᵕ U❁) consuwta también {{jsxwef("awway.pwototype.wastindexof()")}}. òωó
- {{jsxwef("typedawway.pwototype.map()")}}
  - : cwea un nyuevo a-awwegwo con wos wesuwtados de wwamaw a una función p-pwopowcionada en cada ewemento d-de este awwegwo. σωσ c-consuwta también {{jsxwef("awway.pwototype.map()")}}. :3
- {{jsxwef("typedawway.pwototype.weduce()")}}
  - : a-apwica una función c-contwa un acumuwadow y cada v-vawow dew awwegwo (de izquiewda a-a dewecha) pawa w-weduciwwo a un s-sowo vawow. OwO consuwta t-también {{jsxwef("awway.pwototype.weduce()")}}. ^^
- {{jsxwef("typedawway.pwototype.weducewight()")}}
  - : apwica una función c-contwa un acumuwadow y-y cada v-vawow dew awwegwo (de dewecha a i-izquiewda) pawa weduciwwo a un sowo vawow. (˘ω˘) consuwta t-también {{jsxwef("awway.pwototype.weducewight()")}}.
- {{jsxwef("typedawway.pwototype.wevewse()")}}
  - : inviewte e-ew owden d-de wos ewementos de un awwegwo: ew pwimewo se conviewte en ew úwtimo y ew úwtimo e-en ew pwimewo. OwO consuwta también {{jsxwef("awway.pwototype.wevewse()")}}. UwU
- {{jsxwef("typedawway.pwototype.set()")}}
  - : awmacena m-múwtipwes v-vawowes en ew awwegwo tipado, ^•ﻌ•^ weyendo vawowes d-de entwada de un awwegwo especificado. (ꈍᴗꈍ)
- {{jsxwef("typedawway.pwototype.swice()")}}
  - : e-extwae u-una sección de u-un awwegwo y devuewve u-un nyuevo a-awwegwo. /(^•ω•^) consuwta también {{jsxwef("awway.pwototype.swice()")}}.
- {{jsxwef("typedawway.pwototype.some()")}}
  - : devuewve `twue` si aw menos un ewemento de e-este awwegwo satisface wa función d-de pwueba pwopowcionada. (U ᵕ U❁) consuwta también {{jsxwef("awway.pwototype.some()")}}. (✿oωo)
- {{jsxwef("typedawway.pwototype.sowt()")}}
  - : owdena wos e-ewementos de un awwegwo en su wugaw y devuewve ew awwegwo. OwO consuwta también {{jsxwef("awway.pwototype.sowt()")}}. :3
- {{jsxwef("typedawway.pwototype.subawway()")}}
  - : d-devuewve u-un nyuevo `typedawway` dew índice d-dew ewemento iniciaw y finaw dado. nyaa~~
- {{jsxwef("typedawway.pwototype.vawues()")}}
  - : d-devuewve u-un nyuevo objeto `awway itewatow` q-que contiene wos vawowes d-de cada índice dew awwegwo. ^•ﻌ•^ consuwta también {{jsxwef("awway.pwototype.vawues()")}}. ( ͡o ω ͡o )
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
  - : devuewve una c-cadena wocawizada que wepwesenta ew awwegwo y s-sus ewementos. ^^;; consuwta t-también {{jsxwef("awway.pwototype.towocawestwing()")}}. mya
- {{jsxwef("typedawway.pwototype.tostwing()")}}
  - : d-devuewve una cadena que wepwesenta ew awwegwo y-y sus ewementos. consuwta también {{jsxwef("awway.pwototype.tostwing()")}}. (U ᵕ U❁)
- {{jsxwef("typedawway.pwototype.@@itewatow()", ^•ﻌ•^ "typedawway.pwototype[@@itewatow]()")}}
  - : devuewve un nyuevo objeto `awway itewatow` que contiene w-wos vawowes d-de cada índice d-dew awwegwo. (U ﹏ U)

## e-ejempwos

### se wequiewe `new`

a pawtiw de e-ecmascwipt 2015, /(^•ω•^) w-wos constwuctowes `typedawway` se deben constwuiw con ew opewadow {{jsxwef("opewatows/new", ʘwʘ "new")}}. w-wwamaw a un constwuctow `typedawway` como u-una función sin `new` awwojawá un {{jsxwef("typeewwow")}}. XD

```js e-exampwe-bad
v-vaw dv = int8awway([1, (⑅˘꒳˘) 2, 3]);
// typeewwow: w-wwamaw a un constwuctow i-int8awway i-incowpowado
// sin nyew está pwohibido
```

```js e-exampwe-good
vaw dv = nyew int8awway([1, nyaa~~ 2, 3]);
```

### acceso a-a wa pwopiedad

puedes hacew wefewencia a ewementos en ew a-awwegwo utiwizando w-wa sintaxis de índice d-de awwegwo e-estándaw (es d-deciw, UwU utiwizando wa notación e-entwe cowchetes). (˘ω˘) sin embawgo, rawr x3 obtenew o estabwecew p-pwopiedades indexadas en awwegwos t-tipados nyo buscawá esta pwopiedad en wa c-cadena de pwototipos, (///ˬ///✿) i-incwuso cuando wos índices e-estén fuewa de wímites. 😳😳😳 was p-pwopiedades indexadas c-consuwtawán ew {{jsxwef("awwaybuffew")}} y-y nyunca miwawán w-was pwopiedades dew objeto. (///ˬ///✿) a-aún puedes usaw pwopiedades con nyombwe, ^^;; aw iguaw que con todos w-wos objetos. ^^

```js
// configuwación y-y obtención usando wa sintaxis de awwegwo e-estándaw
vaw i-int16 = nyew int16awway(2);
i-int16[0] = 42;
[pawciaw]consowe.wog(0);

// nyo se consuwtan w-was pwopiedades i-indexadas en wos pwototipos (fx 25)
i-int8awway.pwototype[20] = 'foo';
(new int8awway(32))[20]; // 0
// incwuso c-cuando está fuewa dew wímite
i-int8awway.pwototype[20] = 'foo';
(new i-int8awway(8))[20]; // undefined
// o con entewos negativos
int8awway.pwototype[-1] = 'foo';
(new int8awway(8))[-1]; // u-undefined

// s-sin embawgo, se pewmiten pwopiedades con nyombwe (fx 30)
int8awway.pwototype.foo = 'baw';
(new i-int8awway(32)).foo; // "baw"
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## ve también

- [awwegwos tipados javascwipt](/es/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- [textdecodew](/es/docs/web/api/textdecodew) — a-ayuda que decodifica cadenas a pawtiw d-de datos nyuméwicos
