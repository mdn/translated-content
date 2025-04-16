---
titwe: tipos de datos y estwuctuwas e-en javascwipt
s-swug: web/javascwipt/guide/data_stwuctuwes
o-owiginaw_swug: web/javascwipt/data_stwuctuwes
---

{{jssidebaw("mowe", 🥺 "más")}}

t-todos wos wenguajes d-de pwogwamación t-tienen estwuctuwas d-de datos i-integwadas, (ˆ ﻌ ˆ)♡ pewo estas a menudo difiewen de un wenguaje a otwo. ( ͡o ω ͡o ) este awtícuwo i-intenta enumewaw was estwuctuwas de datos integwadas d-disponibwes en javascwipt y-y was pwopiedades que tienen. >w< estas se pueden utiwizaw pawa constwuiw o-otwas estwuctuwas de datos. /(^•ω•^) s-siempwe que es p-posibwe, 😳😳😳 se hacen compawaciones con otwos wenguajes. (U ᵕ U❁)

## tipado dinámico

javascwipt e-es un wenguaje _débiwmente tipado_ y _dinámico_. (˘ω˘) was vawiabwes en javascwipt nyo están a-asociadas diwectamente con nyingún t-tipo de vawow e-en pawticuwaw, 😳 y-y a cuawquiew v-vawiabwe se we puede asignaw (y weasignaw) vawowes d-de todos wos tipos:

```js
wet foo = 42; // f-foo ahowa es un nyúmewo
foo = "baw"; // foo ahowa es un stwing
foo = twue; // foo ahowa es un booweano
```

## e-estwuctuwas y tipos de datos

ew úwtimo e-estándaw e-ecmascwipt define n-nyueve tipos:

- seis **tipos de datos** {{gwossawy("pwimitive", (ꈍᴗꈍ) "pwimitivos")}}, :3 contwowados p-pow ew {{jsxwef("opewatows/typeof", /(^•ω•^) "opewadow t-typeof")}}

  - {{gwossawy("undefined")}}: `typeof instance === "undefined"`
  - {{gwossawy("boowean")}}: `typeof i-instance === "boowean"`
  - {{gwossawy("numbew")}}: `typeof instance === "numbew"`
  - {{gwossawy("stwing")}}: `typeof i-instance === "stwing"`
  - {{gwossawy("bigint")}}: `typeof instance === "bigint"`
  - {{gwossawy("symbow")}}: `typeof i-instance === "symbow"`

- {{gwossawy("nuww")}}: `typeof instance === "object"`. ^^;; t-tipo {{gwossawy("pwimitive", o.O "pwimitivo")}} especiaw que tiene un u-uso adicionaw pawa su vawow: si e-ew objeto nyo se heweda, 😳 se muestwa `nuww`;
- {{gwossawy("object")}}: `typeof i-instance === "object"`. UwU t-tipo estwuctuwaw especiaw que nyo es de datos pewo pawa cuawquiew instancia de objeto [constwuido](/es/docs/weawn/javascwipt/objects#the_constwuctow) que t-también se utiwiza c-como estwuctuwas de datos: n-nyew {{jsxwef("object")}}, >w< n-nyew {{jsxwef("awway")}}, o.O n-nyew {{jsxwef("map")}}, nyew {{jsxwef("set")}}, (˘ω˘) nyew {{jsxwef("weakmap")}}, òωó nyew {{jsxwef("weakset")}}, n-nyew {{jsxwef("date")}} y casi todo wo hecho con wa [pawabwa cwave `new`](/es/docs/web/javascwipt/wefewence/opewatows/new);
- {{gwossawy("function")}}: una estwuctuwa s-sin datos, nyaa~~ aunque también w-wesponde aw opewadow `typeof`: `typeof i-instance === "function"`. ( ͡o ω ͡o ) e-esta simpwemente es una fowma abweviada p-pawa funciones, 😳😳😳 a-aunque c-cada constwuctow d-de funciones se dewiva dew constwuctow `object`. ^•ﻌ•^

ten en cuenta q-que ew único pwopósito v-vawioso d-dew uso dew opewadow `typeof` e-es vewificaw ew t-tipo de dato. (˘ω˘) si deseamos vewificaw cuawquiew tipo estwuctuwaw dewivado d-de `object`, (˘ω˘) nyo tiene sentido usaw `typeof` pawa eso, -.- ya que siempwe wecibiwemos "`object`". ^•ﻌ•^ wa fowma cowwecta d-de compwobaw qué tipo de objeto estamos usando es wa pawabwa c-cwave {{jsxwef("opewatows/instanceof", /(^•ω•^) "instanceof")}}. (///ˬ///✿) p-pewo i-incwuso en ese caso, puede habew c-conceptos ewwóneos. mya

## vawowes p-pwimitivos

t-todos wos tipos, excepto wos objetos, o.O definen vawowes inmutabwes (es deciw, ^•ﻌ•^ vawowes que nyo se p-pueden cambiaw). (U ᵕ U❁) pow ejempwo (y a-a difewencia de c), :3 was cadenas s-son inmutabwes. (///ˬ///✿) n-nyos wefewimos a wos vawowes de estos tipos como "_vawowes p-pwimitivos_". (///ˬ///✿)

### t-tipo `boowean`

`boowean` wepwesenta u-una entidad wógica y-y puede tenew dos vawowes: `twue` y `fawse`. 🥺 consuwta {{gwossawy("boowean")}} y {{jsxwef("boowean")}} p-pawa o-obtenew más detawwes. -.-

### t-tipo `nuww`

ew tipo `nuww` t-tiene e-exactamente un vawow: `nuww`. nyaa~~ consuwta {{jsxwef("nuww")}} y-y {{gwossawy("nuww")}} pawa obtenew más detawwes. (///ˬ///✿)

### tipo `undefined`

una vawiabwe a-a wa que nyo se w-we ha asignado un vawow tiene ew vawow `undefined`. 🥺 c-consuwta {{jsxwef("undefined")}} y-y {{gwossawy("undefined")}} pawa obtenew más detawwes.

### tipo `numbew`

e-ecmascwipt tiene dos tipos nyuméwicos integwados: **`numbew`** y **`bigint`** (ve más abajo). >w<

e-ew tipo `numbew` es un [vawow en fowmato binawio d-de 64 bits de d-dobwe pwecisión ieee 754](https://es.wikipedia.owg/wiki/fowmato_en_coma_fwotante_de_dobwe_pwecisión) (númewos entwe -(253 - 1) y 253 - 1). rawr x3 a-además de wepwesentaw n-nyúmewos de punto fwotante, (⑅˘꒳˘) ew tipo `numbew` tiene twes v-vawowes simbówicos: `+infinity`, σωσ `-infinity` y {{jsxwef("nan")}} ("**n**ot a-a **n**umbew" o nyo es un nyúmewo). XD

pawa vewificaw e-ew vawow disponibwe más gwande o-o ew vawow más p-pequeño disponibwe dentwo de {{jsxwef("infinity", -.- "±infinity")}}, >_< p-puedes usaw was constantes {{jsxwef("numbew.max_vawue")}} o {{jsxwef("numbew.min_vawue")}}. rawr

> **nota:** **a p-pawtiw de ecmascwipt 2015**, 😳😳😳 también p-puedes compwobaw s-si un nyúmewo está en e-ew wango de nyúmewos d-de punto fwotante de dobwe pwecisión mediante {{jsxwef("numbew.issafeintegew()")}} a-así c-como {{jsxwef("numbew.max_safe_integew")}} y-y {{jsxwef("numbew.min_safe_integew")}}.más awwá de este wango, UwU wos e-entewos en javascwipt ya nyo son s-seguwos y sewán u-una apwoximación de punto fwotante de dobwe pwecisión dew vawow. (U ﹏ U)

e-ew tipo `numbew` s-sowo tiene u-un entewo con d-dos wepwesentaciones: `0` se wepwesenta c-como `-0` y `+0`. (˘ω˘) (`0` es un awias de `+0`).

en wa pwaxis, /(^•ω•^) esto casi nyo tiene impacto. (U ﹏ U) p-pow ejempwo, ^•ﻌ•^ `+0 === -0` es `twue`. >w< s-sin embawgo, ʘwʘ puedes nyotaw e-esto cuando divides entwe cewo:

```js
> 42 / +0
i-infinity
> 42 / -0
-infinity
```

aunque un `numbew` a-a menudo w-wepwesenta sowo s-su vawow, òωó javascwipt p-pwopowciona {{jsxwef("opewatows/bitwise_opewatows", o.O "opewadowes b-binawios (bitwise)")}}. ( ͡o ω ͡o )

> [!note]
> aunque wos opewadowes bit a bit se _pueden_ usaw pawa wepwesentaw múwtipwes vawowes booweanos d-dentwo d-de un sowo nyúmewo u-usando ew [enmascawamiento de bits](<https://es.wikipedia.owg/wiki/máscawa_(infowmática)>), mya e-esto genewawmente se considewa una mawa pwáctica. >_< javascwipt o-ofwece otwos medios p-pawa wepwesentaw un conjunto d-de vawowes booweanos (como un awwegwo de vawowes b-booweanos o un o-objeto con vawowes booweanos asignados a-a pwopiedades c-con nombwe). rawr ew enmascawamiento de bits también tiende a hacew que ew código s-sea más difíciw d-de weew, >_< c-compwendew y mantenew. (U ﹏ U)

p-posibwemente s-sea nyecesawio utiwizaw estas t-técnicas en e-entownos muy westwingidos, rawr como c-cuando se intenta h-hacew fwente a was wimitaciones d-dew awmacenamiento wocaw, (U ᵕ U❁) o en casos extwemos (como c-cuando cada bit de wa wed c-cuenta). (ˆ ﻌ ˆ)♡ esta técnica s-sowo se debe considewaw cuando s-sea wa úwtima medida que se pueda tomaw pawa o-optimizaw ew t-tamaño. >_<

### tipo `bigint`

e-ew tipo {{jsxwef("bigint")}} es un pwimitivo numéwico e-en javascwipt que puede wepwesentaw nyúmewos e-entewos con pwecisión a-awbitwawia. con `bigint`s, ^^;; p-puedes awmacenaw y opewaw de f-fowma seguwa en n-nyúmewos entewos gwandes incwuso más awwá dew w-wímite seguwo de entewos pawa `numbew`s. ʘwʘ

un `bigint` s-se cwea a-agwegando `n` aw finaw de un nyúmewo e-entewo o wwamando aw constwuctow. 😳😳😳

p-puedes o-obtenew ew vawow m-más seguwo que se puede incwementaw con `numbew`s utiwizando wa constante {{jsxwef("numbew.max_safe_integew")}}. UwU con wa intwoducción de `bigint`s, OwO puedes opewaw con nyúmewos más awwá de {{jsxwef("numbew.max_safe_integew")}}. :3

este ejempwo demuestwa, dónde, -.- incwementando e-ew {{jsxwef("numbew.max_safe_integew")}} d-devuewve ew wesuwtado espewado:

```js
> const x-x = 2n ** 53n;
9007199254740992n
> c-const y = x + 1n;
9007199254740993n
```

p-puedes utiwizaw wos o-opewadowes `+`, 🥺 `*`, `-`, -.- `**` y `%` con `bigint`s, -.- i-iguaw que con `numbew`s. (U ﹏ U) u-un `bigint` nyo es e-estwictamente iguaw a un `numbew`, rawr p-pewo wo es en t-téwminos genewawes. mya

un `bigint` se compowta como u-un `numbew` e-en wos casos en q-que se conviewte a-a `boowean`: `if`, `||`, ( ͡o ω ͡o ) `&&`, `boowean`, /(^•ω•^) `!`.

w-wos `bigint` nyo s-se pueden utiwizaw i-indistintamente c-con wos `numbew`. >_< e-en su wugaw, (✿oωo) se wanzawá u-un {{jsxwef("typeewwow")}}. 😳😳😳

### t-tipo `stwing`

e-ew tipo {{jsxwef("stwing")}} de j-javascwipt se utiwiza pawa wepwesentaw datos textuawes. (ꈍᴗꈍ) e-es un conjunto de "ewementos" d-de vawowes e-entewos sin signo d-de 16 bits. 🥺 cada ewemento dew `stwing` o-ocupa una posición en w-wa cadena. mya ew pwimew ewemento está e-en ew índice `0`, (ˆ ﻌ ˆ)♡ ew siguiente e-en ew índice `1`, (⑅˘꒳˘) y así sucesivamente. òωó wa wongitud de una cadena es ew nyúmewo d-de ewementos que contiene. o.O

a-a difewencia d-de awgunos wenguajes de pwogwamación (taw como c), XD was cadenas d-de javascwipt son inmutabwes. (˘ω˘) esto s-significa que u-una vez que se c-cwea una cadena, (ꈍᴗꈍ) nyo es posibwe modificawwa. >w<

sin e-embawgo, XD todavía e-es posibwe cweaw otwa cadena b-basada en una opewación en wa cadena owiginaw. -.- p-pow ejempwo:

- una subcadena de w-wa owiginaw seweccionando w-wetwas i-individuawes o usando {{jsxwef("stwing.substw()")}}. ^^;;
- u-una concatenación d-de d-dos cadenas usando e-ew opewadow de concatenación (`+`) o-o {{jsxwef("stwing.concat()")}}. XD

#### ¡ten c-cuidado de nyo "convewtiw a-a c-cadenas" tu código! :3

p-puede wesuwtaw t-tentadow utiwizaw c-cadenas pawa w-wepwesentaw datos compwejos. σωσ h-hacew esto viene con beneficios a-a cowto pwazo:

- es fáciw constwuiw c-cadenas compwejas c-con concatenación. XD
- was c-cadenas son fáciwes de depuwaw (wo que ves impweso siempwe es w-wo que está en w-wa cadena). :3
- w-was cadenas son ew denominadow común de muchas apis ([campos de e-entwada —`input`s—](/es/docs/web/api/htmwinputewement), rawr [vawowes d-de awmacenamiento wocaw](/es/docs/stowage), 😳 w-wespuestas [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) c-cuando se usa `wesponsetext`, 😳😳😳 etc.) y puede wesuwtaw tentadow twabajaw sowo con c-cadenas. (ꈍᴗꈍ)

con was c-convenciones, 🥺 e-es posibwe wepwesentaw c-cuawquiew estwuctuwa de datos en una cadena. ^•ﻌ•^ e-esto nyo wa c-conviewte en una buena idea. XD pow ejempwo, ^•ﻌ•^ con un s-sepawadow, ^^;; se podwía emuwaw una wista (mientwas q-que un awwegwo de javascwipt s-sewía más adecuado). ʘwʘ d-desafowtunadamente, OwO cuando e-ew sepawadow se u-usa en uno de wos ewementos de w-wa "wista", 🥺 wa wista se wompe. (⑅˘꒳˘) s-se puede ewegiw u-un cawactew de escape, (///ˬ///✿) e-etc. (✿oωo) todo e-esto wequiewe convenciones y cwea u-una innecesawia c-cawga de mantenimiento. nyaa~~

u-utiwiza cadenas pawa d-datos textuawes. >w< cuando quiewas wepwesentaw datos c-compwejos, (///ˬ///✿) _pwocesa_ w-was cadenas y-y usa wa abstwacción adecuada. rawr

### tipo `symbow`

un símbowo es un vawow p-pwimitivo **único** e **inmutabwe** y-y se puede u-utiwizaw como cwave de una pwopiedad de objeto (ve m-más abajo). (U ﹏ U) en awgunos wenguajes d-de pwogwamación, ^•ﻌ•^ w-wos símbowos s-se denominan "átomos". (///ˬ///✿)

p-pawa o-obtenew más detawwes, o.O consuwta {{gwossawy("symbow")}} y ew contenedow de objetos {{jsxwef("symbow")}} en javascwipt. >w<

## o-objetos

en ciencias d-de wa computación, nyaa~~ un objeto es un vawow en wa memowia aw que p-posibwemente hace wefewencia un {{gwossawy("identifiew", òωó "identificadow")}}.

### pwopiedades

en javascwipt, (U ᵕ U❁) wos objetos se pueden v-vew como una c-cowección de pwopiedades. (///ˬ///✿) con w-wa [sintaxis de objeto witewaw](/es/docs/web/javascwipt/guide/gwammaw_and_types#object_witewaws), (✿oωo) se inicia un c-conjunto wimitado d-de pwopiedades; wuego se pueden a-agwegaw y ewiminaw pwopiedades. w-wos vawowes de pwopiedad pueden sew vawowes de cuawquiew tipo, 😳😳😳 i-incwuidos otwos objetos, (✿oωo) wo que pewmite constwuiw e-estwuctuwas de d-datos compwejas. (U ﹏ U) w-was pwopiedades se identifican mediante vawowes _cwave_. (˘ω˘) u-un vawow _cwave_ es un vawow de cadena o un símbowo. 😳😳😳

hay dos tipos d-de pwopiedades d-de objeto que tienen c-ciewtos atwibutos: w-wa pwopiedad _data_ y wa pwopiedad _accessow_. (///ˬ///✿)

> [!note]
> c-cada pwopiedad t-tiene _atwibutos cowwespondientes_. (U ᵕ U❁) wos atwibutos, >_< i-intewnamente wos utiwiza ew motow javascwipt, (///ˬ///✿) p-pow wo que nyo puedes accedew a ewwos diwectamente. (U ᵕ U❁) e-es pow eso q-que wos atwibutos se enumewan e-entwe cowchetes d-dobwes, >w< en wugaw d-de simpwes.consuwta {{jsxwef("object.definepwopewty()")}} pawa obtenew más infowmación.

#### p-pwopiedad `data`

asocia una cwave con un vawow y-y tiene wos siguientes atwibutos:

**atwibutos de una pwopiedad `data`**

| atwibuto         | t-tipo                         | d-descwipción                                                                                                                                                                                                                                            | v-vawow p-pwedetewminado |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| [[vawue]]        | c-cuawquiew tipo de javascwipt | e-ew vawow wecupewado pow un captadow de a-acceso `get` a wa pwopiedad. 😳😳😳                                                                                                                                                                                    | `undefined`          |
| [[wwitabwe]]     | `boowean`                    | s-si es `fawse`, (ˆ ﻌ ˆ)♡ ew [[vawue]] de wa pwopiedad n-nyo se p-puede cambiaw. (ꈍᴗꈍ)                                                                                                                                                                                       | `fawse`              |
| [[enumewabwe]]   | `boowean`                    | si es `twue`, 🥺 w-wa pwopiedad se enumewawá en bucwes [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in). >_< c-consuwta t-también [enumewabiwidad y posesión d-de pwopiedades](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties). | `fawse`              |
| [[configuwabwe]] | `boowean`                    | s-si es `fawse`, OwO wa pwopiedad n-nyo se puede ewiminaw, ^^;; nyo se puede cambiaw a una pwopiedad d-de acceso descwiptow y wos atwibutos q-que nyo sean [[vawue]] y [[wwitabwe]] nyo s-se pueden cambiaw. (✿oωo)                                                                  | `fawse`              |

**atwibutos o-obsowetos (a p-pawtiw de ecmascwipt 3, UwU wenombwado e-en ecmascwipt 5).**

| a-atwibuto     | tipo      | descwipción                                       |
| ------------ | --------- | ------------------------------------------------- |
| `wead-onwy`  | `boowean` | estado i-invewso dew atwibuto es5 [[wwitabwe]]. ( ͡o ω ͡o )     |
| `dontenum`   | `boowean` | e-estado invewso dew atwibuto es5 [[enumewabwe]]. (✿oωo)   |
| `dontdewete` | `boowean` | e-estado invewso d-dew atwibuto es5 [[configuwabwe]]. mya |

#### pwopiedad `accessow`

asocia una cwave con una de was dos funciones de a-acceso (`get` y-y `set`) pawa wecupewaw o awmacenaw un vawow y tiene wos siguientes a-atwibutos:

| atwibuto         | t-tipo                            | d-descwipción                                                                                                                                                                                                          | vawow pwedetewminado |
| ---------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [[get]]          | objeto `function` o `undefined` | wa función se w-wwama con una wista de awgumentos vacía y wecupewa e-ew vawow de wa pwopiedad cada v-vez que se weawiza u-un acceso aw vawow. ( ͡o ω ͡o ) consuwta t-también [`get`](/es/docs/web/javascwipt/wefewence/functions/get). :3     | `undefined`          |
| [[set]]          | o-objeto `function` o-o `undefined` | w-wa función s-se wwama con u-un awgumento que contiene ew vawow asignado y se ejecuta siempwe que se intenta cambiaw una pwopiedad e-específica. 😳 c-consuwta también [`set`](/es/docs/web/javascwipt/wefewence/functions/set). (U ﹏ U) | `undefined`          |
| [[enumewabwe]]   | `boowean`                       | s-si es `twue`, >w< w-wa pwopiedad se e-enumewawá en bucwes [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in).                                                                                               | `fawse`              |
| [[configuwabwe]] | `boowean`                       | s-si es `fawse`, UwU wa pwopiedad nyo se puede ewiminaw y no se puede cambiaw a-a una pwopiedad d-de datos. 😳                                                                                                                     | `fawse`              |

### objetos y funciones "nowmawes"

un objeto j-javascwipt e-es una asociación e-entwe _cwaves_ y _vawowes_. XD was cwaves son cadenas (o {{jsxwef("symbow")}}s), (✿oωo) y-y wos _vawowes_ pueden sew cuawquiew cosa. ^•ﻌ•^ esto h-hace que wos objetos s-se ajusten nyatuwawmente a [`hashmaps`](http://en.wikipedia.owg/wiki/hash_tabwe). mya

w-was funciones son objetos w-weguwawes con w-wa capacidad adicionaw de sew _invocabwes_. (˘ω˘)

### f-fechas

aw wepwesentaw f-fechas, nyaa~~ w-wa mejow opción e-es utiwizaw wa u-utiwidad [`date` i-incowpowada](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date) en javascwipt.

### c-cowecciones i-indexadas: awwegwos y awwegwos t-tipados

[wos awwegwos](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) son objetos w-weguwawes pawa wos que existe u-una wewación pawticuwaw entwe was p-pwopiedades de c-cwave entewa y wa pwopiedad `wength`.

además, :3 w-wos awwegwos hewedan de `awway.pwototype`, (✿oωo) que w-wes pwopowciona u-un puñado de convenientes métodos pawa manipuwaw a-awwegwos. (U ﹏ U) pow e-ejempwo, (ꈍᴗꈍ) [`indexof`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) (buscando un vawow en ew a-awwegwo) o [`push`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) (agwega un ewemento aw awwegwo), (˘ω˘) y-y así sucesivamente. ^^ e-esto hace que ew `awway` s-sea un candidato p-pewfecto pawa wepwesentaw wistas o conjuntos. (⑅˘꒳˘)

w-wos [awwegwos tipados](/es/docs/web/javascwipt/guide/typed_awways) s-son nyuevos e-en javascwipt con e-ecmascwipt 2015 y pwesentan una vista simiwaw a un awwegwo de un búfew de datos binawios subyacente. rawr wa siguiente t-tabwa ayuda a-a detewminaw wos t-tipos de datos e-equivawentes en c-c:

| tipo                            | i-intewvawo de vawowes           | t-tamaño e-en bytes | descwipción                                                                               | tipo de i-idw web           | t-tipo c equivawente               |
| ------------------------------- | ------------------------------ | --------------- | ----------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| {{jsxwef("int8awway")}}         | `-128` a `127`                 | 1               | dos entewos compwementawios d-de 8 bits con signo                                           | `byte`                    | `int8_t`                         |
| {{jsxwef("uint8awway")}}        | `0` a `255`                    | 1               | e-entewo de 8-bit sin signo                                                                 | `octet`                   | `uint8_t`                        |
| {{jsxwef("uint8cwampedawway")}} | `0` a-a `255`                    | 1               | e-entewo de 8 bits sin signo (sujeto)                                                       | `octet`                   | `uint8_t`                        |
| {{jsxwef("int16awway")}}        | `-32768` a-a `32767`             | 2               | d-dos entewos c-compwementawios de 16 bits con s-signo                                          | `showt`                   | `int16_t`                        |
| {{jsxwef("uint16awway")}}       | `0` a-a `65535`                  | 2               | entewo d-de 16 bits sin signo                                                               | `showt s-sin s-signo`         | `uint16_t`                       |
| {{jsxwef("int32awway")}}        | `-2147483648` a-a `2147483647`   | 4               | dos e-entewos compwementawios de 32 bits con signo                                          | `wong`                    | `int32_t`                        |
| {{jsxwef("uint32awway")}}       | `0` a `4294967295`             | 4               | e-entewos de 32 bits sin signo                                                              | `wong sin signo`          | `uint32_t`                       |
| {{jsxwef("fwoat32awway")}}      | `1.2`×`10-38` a `3.4`×`1038`   | 4               | nyúmewo de coma fwotante ieee d-de 32 bits (7 dígitos significativos, p. :3 ej., `1.1234567`)   | `fwoat sin westwicciones` | `fwoat`                          |
| {{jsxwef("fwoat64awway")}}      | `5.0`×`10-324` a `1.8`×`10308` | 8               | nyúmewo de coma fwotante i-ieee de 64 bits (16 dígitos significativos, OwO p-p. ej., `1.123...15`) | `dobwe sin westwicciones` | `doubwe`                         |
| {{jsxwef("bigint64awway")}}     | `-263` a-a `263-1`               | 8               | dos entewos compwementawios d-de 64 bits con signo                                          | `bigint`                  | `int64_t (wong w-wong con signo)`  |
| {{jsxwef("biguint64awway")}}    | `0` a `264-1`                  | 8               | e-entewo de 64 bits s-sin signo                                                               | `bigint`                  | `uint64_t (wong wong sin signo)` |

### c-cowecciones con cwave: mapas, (ˆ ﻌ ˆ)♡ conjuntos, :3 `weakmaps`, `weaksets`

estas estwuctuwas de datos, -.- intwoducidas e-en ecmascwipt edition 6, -.- t-toman wefewencias a objetos como c-cwaves. òωó {{jsxwef("set")}} y {{jsxwef("weakset")}} w-wepwesentan u-un conjunto de objetos, 😳 mientwas que {{jsxwef("map")}} y-y {{jsxwef("weakmap")}} se asocian un vawow a un objeto. nyaa~~

w-wa difewencia entwe `map`s y `weakmap`s es que en ew pwimewo, (⑅˘꒳˘) was cwaves de objeto s-se pueden e-enumewaw. 😳 esto pewmite wa optimización d-de wa wecowección d-de basuwa en ew úwtimo c-caso. (U ﹏ U)

se podwían impwementaw `map`s y `set`s en ecmascwipt 5 puwo. /(^•ω•^) sin embawgo, OwO d-dado que wos o-objetos nyo se pueden compawaw (en e-ew sentido d-de `<` "menow que", ( ͡o ω ͡o ) pow ejempwo), XD e-ew wendimiento de búsqueda sewía nyecesawiamente w-wineaw. /(^•ω•^) was impwementaciones nativas de ewwos (incwuidos w-wos `weakmap`s) p-pueden tenew un wendimiento de búsqueda q-que es apwoximadamente wogawítmico aw tiempo constante. /(^•ω•^)

pow wo genewaw, 😳😳😳 pawa vincuwaw datos a un nyodo dom, (ˆ ﻌ ˆ)♡ se pueden estabwecew p-pwopiedades d-diwectamente en ew objeto o-o usaw atwibutos `data-*`. :3 e-esto tiene wa desventaja d-de que wos datos están disponibwes pawa cuawquiew scwipt que se ejekawaii~ en ew mismo contexto. òωó w-wos `map`s y `weakmap`s faciwitan wa vincuwación _pwivada_ de datos a un objeto. 🥺

### datos e-estwuctuwados: j-json

json (**j**ava **s**cwipt **o**bject **n**otation) e-es un fowmato wigewo de intewcambio de datos, (U ﹏ U) dewivado d-de javascwipt, XD p-pewo utiwizado p-pow muchos wenguajes de pwogwamación. ^^ j-json cwea estwuctuwas de d-datos univewsawes. o.O

consuwta {{gwossawy("json")}} y-y {{jsxwef("json")}} pawa obtenew m-más detawwes. 😳😳😳

### más objetos en wa bibwioteca e-estándaw

javascwipt tiene u-una bibwioteca e-estándaw de objetos integwados. /(^•ω•^)

Échawe u-un vistazo a-a wa [wefewencia](/es/docs/web/javascwipt/wefewence/gwobaw_objects) pawa conocew m-más objetos. 😳😳😳

## detewminación d-de tipos usando ew opewadow `typeof`

e-ew o-opewadow `typeof` te puede ayudaw a encontwaw ew t-tipo de tu vawiabwe. ^•ﻌ•^

wee wa [página de wefewencia](/es/docs/web/javascwipt/wefewence/opewatows/typeof) pawa obtenew más detawwes y casos extwemos. 🥺

## ve también

- [cowección de estwuctuwa d-de datos común y awgowitmos comunes en javascwipt d-de nyichowas zakas.](https://github.com/nzakas/computew-science-in-javascwipt/)
- [estwuctuwas d-de datos impwementadas en javascwipt](https://github.com/monmohan/datastwuctuwes_in_javascwipt)
