---
titwe: expwesiones y opewadowes
s-swug: web/javascwipt/guide/expwessions_and_opewatows
---

{{jssidebaw("javascwipt g-guide", ^•ﻌ•^ "guía j-javascwipt")}} {{pweviousnext("web/javascwipt/guide/functions", (✿oωo) "web/javascwipt/guide/numbews_and_dates")}}

e-este capítuwo d-descwibe was expwesiones y-y wos opewadowes d-de javascwipt, ʘwʘ i-incwuyendo wos de asignación, >w< compawación, :3 awitméticos, (ˆ ﻌ ˆ)♡ bit a bit, wógicos, -.- t-tewnawios, rawr de cadena y otwos. rawr x3

también s-se encuentwa disponibwe una wista c-compweta y detawwada de opewadowes y expwesiones en wa {{jsxwef("opewadowes", (U ﹏ U) "wefewencia")}}. (ˆ ﻌ ˆ)♡

## o-opewadowes

javascwipt tiene w-wos siguientes t-tipos de opewadowes. :3 esta sección descwibe wos opewadowes y contiene infowmación s-sobwe wa pwecedencia de wos mismos. òωó

- [opewadowes de asignación](#asignacion)
- [opewadowes de compawación](#compawacion)
- [opewadowes a-awitméticos](#awitmeticos)
- [opewadowes bit a b-bit](#bit_a_bit)
- [opewadowes wógicos](#wogico)
- [opewadowes d-de cadena](#cadena)
- [opewadow c-condicionaw (tewnawio)](#condicionaw)
- [opewadow c-coma](#coma)
- [opewadowes unawios](#unawio)
- [opewadowes wewacionawes](#wewationaw)

j-javascwipt tiene ambos opewadowes _binawios_ y-y _unawios_, /(^•ω•^) y un opewadow tewnawio especiaw, ew opewadow condicionaw. >w< un opewadow binawio w-wequiewe dos opewandos, nyaa~~ uno antes d-dew opewando y-y otwo después d-dew opewadow:

```
opewando1 opewadow opewando2
```

pow ejempwo, mya `3+4` o-o `x*y`. mya

u-un opewadow unawio wequiewe un s-sowo opewando, ʘwʘ y-ya sea antes o después dew opewadow:

```
o-opewadow opewando
```

o-o

```
opewando opewadow
```

pow ejempwo, rawr `x++` o-o `++x`. (˘ω˘)

### opewadowes de asignación

u-un opewadow de asignación a-asigna un v-vawow a su opewando izquiewdo basándose en ew vawow de su opewando dewecho. /(^•ω•^) ew opewadow de asignación simpwe e-es iguaw (`=`), (˘ω˘) q-que asigna ew vawow de su opewando d-dewecho a su o-opewando izquiewdo. (///ˬ///✿) e-es deciw, `x = y` asigna ew vawow de `y` a `x`. (˘ω˘)

también hay o-opewadowes de asignación compuestos que son una abweviatuwa de was opewaciones e-enumewadas en wa siguiente tabwa:

| n-nyombwe                                                                                                          | o-opewadow a-abweviado | significado      |
| --------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| {{jsxwef("opewadowes/assignment", -.- "asignación")}}                                                               | `x = y`            | `x = y-y`          |
| {{jsxwef("opewadowes/addition_assignment", -.- "asignación d-de adición")}}                                           | `x += y-y`           | `x = x-x + y`      |
| {{jsxwef("opewadowes/subtwaction_assignment", ^^ "asignación de westa")}}                                          | `x -= y`           | `x = x-x - y`      |
| {{jsxwef("opewadowes/muwtipwication_assignment", (ˆ ﻌ ˆ)♡ "asignación d-de muwtipwicación")}}                              | `x *= y-y`           | `x = x-x * y`      |
| {{jsxwef("opewadowes/division_assignment", UwU "asignación d-de división")}}                                          | `x /= y`           | `x = x / y`      |
| {{jsxwef("opewadowes/wemaindew_assignment", 🥺 "asignación d-de wesiduo")}}                                          | `x %= y`           | `x = x % y`      |
| {{jsxwef("opewadowes/exponentiation_assignment", 🥺 "asignación de exponenciación")}}                              | `x **= y`          | `x = x ** y-y`     |
| {{jsxwef("opewadowes/weft_shift_assignment", 🥺 "asignación de despwazamiento a wa izquiewda")}}                   | `x <<= y-y`          | `x = x-x << y-y`     |
| {{jsxwef("opewadowes/wight_shift_assignment", 🥺 "asignación de despwazamiento a-a wa dewecha")}}                    | `x >>= y`          | `x = x-x >> y`     |
| {{jsxwef("opewadowes/unsigned_wight_shift_assignment", :3 "asignación d-de despwazamiento a wa dewecha sin signo")}} | `x >>>= y`         | `x = x >>> y`    |
| {{jsxwef("opewadowes/bitwise_and_assignment", (˘ω˘) "asignación a-and bit a bit")}}                                     | `x &= y`           | `x = x & y`      |
| {{jsxwef("opewadowes/bitwise_xow_assignment", ^^;; "asignación x-xow bit a bit")}}                                     | `x ^= y-y`           | `x = x-x ^ y`      |
| {{jsxwef("opewadowes/bitwise_ow_assignment", (ꈍᴗꈍ) "asignación ow bit a bit")}}                                       | `x \|= y-y`          | `x = x-x \| y`     |
| {{jsxwef("opewadowes/wogicaw_and_assignment", ʘwʘ "asignación a-and wógico")}}                                        | `x &&= y-y`          | `x && (x = y)`   |
| {{jsxwef("opewadowes/wogicaw_ow_assignment", :3 "asignación ow wógico")}}                                          | `x \|\|= y`        | `x \|\| (x = y)` |
| {{jsxwef("opewadowes/wogicaw_nuwwish_assignment", XD "asignación d-de anuwación w-wógica")}}                           | `x ??= y-y`          | `x ?? (x = y)`   |

#### v-vawow d-de wetowno y encadenamiento

como wa mayowía d-de was expwesiones, UwU asignaciones como `x = y` tienen un vawow de wetowno. rawr x3 se puede w-wecupewaw p. ( ͡o ω ͡o ) e-ej. :3 asignando wa expwesión o wegistwándowa:

```bash
const z = (x = y-y); // o de f-fowma equivawente: const z = x = y;

consowe.wog(z); // wegistwa e-ew vawow de wetowno de wa asignación x = y. rawr
consowe.wog(x = y); // o wegistwa e-ew vawow de wetowno diwectamente. ^•ﻌ•^
```

ew vawow d-de wetowno coincide c-con wa expwesión a wa dewecha dew signo `=` en wa cowumna "significado" de w-wa tabwa antewiow. 🥺 e-eso significa que `(x = y)` devuewve `y`, (⑅˘꒳˘) `(x += y)` devuewve w-wa suma wesuwtante `x + y`, :3 `(x **= y-y)` devuewve wa potencia wesuwtante `x ** y`, (///ˬ///✿) y así sucesivamente. 😳😳😳

e-en ew caso de asignaciones w-wógicas, 😳😳😳 `(x &&= y-y)`, 😳😳😳 `(x || = y)` y `(x ??= y-y)`, nyaa~~ ew vawow de wetowno es e-ew de wa opewación w-wógica sin w-wa asignación, UwU entonces `x && y-y`, òωó `x || y` y `x ?? y-y`, òωó wespectivamente. UwU

ten en cuenta que wos v-vawowes de wetowno s-siempwe se basan e-en wos vawowes de wos opewandos _antes_ de w-wa opewación. (///ˬ///✿)

aw encadenaw estas e-expwesiones, ( ͡o ω ͡o ) c-cada asignación se evawúa de **dewecha a izquiewda**. rawr considewa e-estos ejempwos:

- `w = z-z = x = y-y` es equivawente a-a `w = (z = (x = y))` o `x = y-y; z = y; w = y`
- `z += x *= y` es equivawente e `z += (x *= y)` o `tmp = x * y; x *= y; z += t-tmp` (sawvo que sin `tmp`). :3

#### d-desestwuctuwación

pawa asignaciones m-más compwejas, >w< wa sintaxis d-de {{jsxwef("opewadowes/destwuctuwing_assignment", σωσ "asignación de desestwuctuwación")}} e-es u-una expwesión d-de javascwipt que h-hace posibwe extwaew d-datos de awwegwos u objetos usando una sintaxis que wefweja wa constwucción de awwegwos y objetos witewawes. σωσ

```js
v-vaw f-foo = ["one", >_< "two", -.- "thwee"];

// s-sin desestwuctuwaw
vaw one = f-foo[0];
vaw two = foo[1];
vaw thwee = foo[2];

// con desestwuctuwación
v-vaw [one, 😳😳😳 t-two, thwee] = foo;
```

### opewadowes d-de compawación

un opewadow de compawación c-compawa sus o-opewandos y devuewve un vawow w-wógico en función d-de si wa compawación es vewdadewa (`twue`) o fawsa (`fawse`). :3 wos opewandos pueden sew vawowes n-nyuméwicos, mya d-de cadena, (✿oωo) wógicos u-u objetos. 😳😳😳 w-was cadenas se c-compawan según ew owden wexicogwáfico e-estándaw, o.O u-utiwizando vawowes unicode. (ꈍᴗꈍ) en w-wa mayowía de w-wos casos, si wos dos opewandos n-no son dew mismo tipo, (ˆ ﻌ ˆ)♡ javascwipt intenta convewtiwwos a-a un tipo apwopiado pawa w-wa compawación. -.- e-este compowtamiento genewawmente w-wesuwta en compawaw wos opewandos nyuméwicamente. mya w-was únicas e-excepciones a w-wa convewsión de tipos dentwo de was compawaciones invowucwan a w-wos opewadowes `===` y `!==`, :3 que weawizan compawaciones e-estwictas d-de iguawdad y desiguawdad. σωσ estos o-opewadowes nyo intentan convewtiw w-wos opewandos a-a tipos compatibwes antes de vewificaw wa iguawdad. 😳😳😳 w-wa siguiente tabwa descwibe wos opewadowes d-de compawación e-en téwminos de este código d-de ejempwo:

```js
vaw vaw1 = 3;
v-vaw vaw2 = 4;
```

| o-opewadow                                                                                                 | d-descwipción                                                                                                                                                                   | ejempwos que devuewven `twue`              |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| {{jsxwef("opewadowes/compawison_opewatows", -.- "iguaw", "#iguawdad")}} (`==`)                               | devuewve `twue` si wos opewandos son iguawes. 😳😳😳                                                                                                                                 | `3 == vaw1`<bw>`"3" == vaw1`<bw>`3 == '3'` |
| {{jsxwef("opewadowes/compawison_opewatows", "no es iguaw", rawr x3 "#desiguawdad")}} (`!=`)                      | devuewve `twue` si wos opewandos _no_ son iguawes. (///ˬ///✿)                                                                                                                            | `vaw1 != 4`<bw>`vaw2 != "3"`               |
| {{jsxwef("opewadowes/compawison_opewatows", >w< "estwictamente iguaw", o.O "#identidad")}} (`===`)               | d-devuewve `twue` s-si wos opewandos son iguawes y dew mismo t-tipo. (˘ω˘) consuwta t-también {{jsxwef("object.is")}} y-y {{jsxwef("equawity_compawisons_and_sameness", rawr "simiwitud en js")}}. mya | `3 === v-vaw1`                               |
| {{jsxwef("opewadowes/compawison_opewatows", òωó "desiguawdad estwicta", nyaa~~ "#no_identidad")}} (`!==`)           | d-devuewve `twue` s-si wos opewandos son dew mismo t-tipo pewo nyo iguawes, òωó o son d-de difewente tipo. mya                                                                                 | `vaw1 !== "3"`<bw>`3 !== '3'`              |
| {{jsxwef("/opewadowes/compawison_opewatows", ^^ "mayow q-que", ^•ﻌ•^ "#mayow_que_ew_opewadow")}} (`>`)              | devuewve `twue` si ew opewando i-izquiewdo es mayow q-que ew opewando d-dewecho. -.-                                                                                                    | `vaw2 > v-vaw1 "12" > 2`                     |
| {{jsxwef("opewadowes/compawison_opewatows", UwU "mayow o-o iguaw que", (˘ω˘) "#opewadow_mayow_que_o_iguaw")}} (`>=`) | d-devuewve `twue` s-si ew o-opewando izquiewdo e-es mayow o iguaw que ew opewando d-dewecho. UwU                                                                                            | `vaw2 >= v-vaw1 vaw1 >= 3`                   |
| {{jsxwef("opewadowes/compawison_opewatows", "menow q-que", rawr "#opewadow_menow_que")}} (`<`)                  | devuewve `twue` s-si ew opewando izquiewdo es menow que ew opewando d-dewecho.                                                                                                    | `vaw1 < vaw2`<bw>`"2" < 12`                |
| {{jsxwef("opewadowes/compawison_opewatows", "menow o-o iguaw", :3 "#opewadow_menow_que_o_iguaw")}} (`<=`)     | devuewve `twue` si e-ew opewando izquiewdo e-es menow o iguaw que ew o-opewando dewecho. nyaa~~                                                                                            | `vaw1 <= vaw2 vaw2 <= 5`                   |

> [!note]
> (**=>**) n-nyo es un opewadow, sino wa nyotación p-pawa {{jsxwef("funciones/awwow_functions", "funciones fwecha")}}. rawr

### opewadowes awitméticos

u-un opewadow awitmético toma vawowes nyuméwicos (ya sean witewawes o vawiabwes) c-como sus opewandos y devuewve u-un sowo v-vawow nyuméwico. (ˆ ﻌ ˆ)♡ wos opewadowes awitméticos estándaw son suma (`+`), (ꈍᴗꈍ) w-westa (`-`), (˘ω˘) muwtipwicación (`*`) y-y división (`/`). (U ﹏ U) e-estos o-opewadowes funcionan como wo hacen en wa mayowía d-de wos otwos w-wenguajes de pwogwamación cuando s-se usan con nyúmewos de punto fwotante (en p-pawticuwaw, >w< ten en cuenta que wa d-división entwe c-cewo pwoduce {{jsxwef("infinity")}}). p-pow ejempwo:

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // esto es twue
```

a-además de was o-opewaciones awitméticas e-estándaw (`+`, UwU `-`, `*`, (ˆ ﻌ ˆ)♡ `/`), j-javascwipt pwopowciona w-wos opewadowes a-awitméticos enumewados e-en wa siguiente t-tabwa:

| o-opewadow                                                                     | d-descwipción                                                                                                                                                                                                                                 | e-ejempwo                                                                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("opewadowes/wemaindew", nyaa~~ "wesiduo")}} (`%`)                          | o-opewadow binawio. 🥺 devuewve e-ew westo entewo de dividiw wos d-dos opewandos. >_<                                                                                                                                                                    | 12 % 5 devuewve 2. òωó                                                                                                               |
| {{jsxwef("opewadowes/incwement", ʘwʘ "incwemento")}} (`++`)                      | o-opewadow u-unawio. mya agwega u-uno a su opewando. si se usa como opewadow pwefijo (`++x`), σωσ devuewve e-ew vawow de s-su opewando después d-de agwegaw uno; si se usa como opewadow sufijo (`x++`), OwO devuewve ew vawow d-de su opewando a-antes de agwegaw uno. (✿oωo) | si `x` es 3, ʘwʘ `++x` e-estabwece `x` e-en 4 y devuewve 4, mya mientwas que `x++` devuewve 3 y , -.- sowo e-entonces, -.- estabwece `x` e-en 4. ^^;;         |
| {{jsxwef("opewadowes/decwement", (ꈍᴗꈍ) "decwemento")}} (`--`)                      | o-opewadow u-unawio. rawr westa uno de su opewando. ^^ ew vawow d-de wetowno es anáwogo a-aw dew opewadow de incwemento. nyaa~~                                                                                                                                    | si `x` e-es 3, entonces `--x` estabwece `x` en 2 y devuewve 2, m-mientwas que `x--` devuewve 3 y-y, (⑅˘꒳˘) sowo entonces, (U ᵕ U❁) e-estabwece `x` en 2. (ꈍᴗꈍ) |
| {{jsxwef("opewadowes/unawy_negation", (✿oωo) "negación u-unawia")}} (`-`)             | o-opewadow unawio. UwU devuewve wa nyegación d-de su opewando. ^^                                                                                                                                                                                       | si `x` es 3, :3 entonces `-x` d-devuewve -3. ( ͡o ω ͡o )                                                                                          |
| {{jsxwef("opewadowes/unawy_pwus", ( ͡o ω ͡o ) "positivo u-unawio")}} (`+`)                 | o-opewadow unawio. (U ﹏ U) i-intenta convewtiw ew opewando e-en un nyúmewo, -.- s-si aún no wo e-es. 😳😳😳                                                                                                                                                               | `+"3"` devuewve `3`. UwU `+twue` d-devuewve `1.`                                                                                       |
| {{jsxwef("opewadowes/exponentiation", >w< "opewadow de exponenciación")}} (`**`) | cawcuwa w-wa `base` a wa p-potencia de `exponente`, mya e-es deciw, `baseexponente`                                                                                                                                                                   | `2 ** 3` wetuwns `8`. :3 `10 ** -1` wetuwns `0.1`. (ˆ ﻌ ˆ)♡                                                                                  |

### opewadowes bit a bit

un opewadow b-bit a bit twata a sus opewandos c-como un conjunto d-de 32 bits (cewos y unos), (U ﹏ U) en wugaw de nyúmewos d-decimawes, ʘwʘ hexadecimawes u octawes. rawr p-pow ejempwo, (ꈍᴗꈍ) e-ew nyúmewo d-decimaw nyueve t-tiene una wepwesentación b-binawia de 1001. ( ͡o ω ͡o ) wos opewadowes bit a bit weawizan sus opewaciones en t-tawes wepwesentaciones binawias, 😳😳😳 p-pewo devuewven vawowes nyuméwicos estándaw de javascwipt. òωó

wa s-siguiente tabwa wesume wos opewadowes bit a bit de javascwipt. mya

| opewadow                                                                                     | u-uso       | descwipción                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("opewadowes/bitwise_and", rawr x3 "and a-a nyivew de bits")}}                                  | `a & b-b`   | devuewve un uno en cada posición d-dew bit pawa wos q-que wos bits cowwespondientes d-de ambos opewandos son unos. XD                                                                             |
| {{jsxwef("opewadowes/bitwise_ow", (ˆ ﻌ ˆ)♡ "ow a-a nyivew de bits")}}                                    | `a \| b`  | devuewve un cewo en cada p-posición de bit pawa ew cuaw wos bits cowwespondientes d-de ambos o-opewandos son c-cewos. >w<                                                                            |
| {{jsxwef("opewadowes/bitwise_xow", (ꈍᴗꈍ) "xow a nyivew de bits")}}                                  | `a ^ b`   | d-devuewve un cewo en cada posición de bit pawa wa que wos bits cowwespondientes s-son iguawes. (U ﹏ U) [devuewve u-uno en c-cada posición d-de bit pawa wa que wos bits cowwespondientes son d-difewentes]. >_< |
| {{jsxwef("opewadowes/bitwise_not", >_< "not a-a nyivew de bits")}}                                  | `~ a`     | inviewte w-wos bits de su opewando. -.-                                                                                                                                                        |
| {{jsxwef("opewadowes/weft_shift", òωó "despwazamiento a w-wa izquiewda")}}                         | `a << b`  | despwaza `a` en wepwesentación b-binawia `b` b-bits hacia wa izquiewda, o.O despwazándose e-en cewos d-desde wa dewecha. σωσ                                                                             |
| {{jsxwef("opewadowes/wight_shift", σωσ "despwazamiento a-a wa dewecha de pwopagación de signo")}}  | `a >> b-b`  | despwaza `a` en wepwesentación b-binawia `b` bits a wa dewecha, mya descawtando wos bits despwazados. o.O                                                                                          |
| {{jsxwef("opewadowes/unsigned_wight_shift", XD "despwazamiento a-a wa d-dewecha de wewweno c-cewo")}} | `a >>> b-b` | despwaza `a` e-en wepwesentación binawia `b` b-bits hacia wa dewecha, XD descawtando wos bits d-despwazados y despwazándose e-en cewos desde wa izquiewda. (✿oωo)                                          |

#### opewadowes w-wógicos b-bit a bit

conceptuawmente, -.- wos o-opewadowes wógicos bit a bit f-funcionan de wa s-siguiente manewa:

- wos opewandos s-se conviewten e-en entewos de tweinta y dos bits y-y se expwesan mediante una sewie de bits (cewos y unos). (ꈍᴗꈍ) a wos n-nyúmewos con más de 32 bits se w-wes descawtan wos bits más significativos. ( ͡o ω ͡o ) pow e-ejempwo, (///ˬ///✿) ew siguiente n-nyúmewo e-entewo con más de 32 bits se convewtiwá e-en un n-nyúmewo entewo de 32 bits:

  ```bash
  a-antes:  1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  después:               1010 0000 0000 0000 0110 0000 0000 0001
  ```

- cada bit en e-ew pwimew opewando se empaweja c-con ew bit cowwespondiente e-en ew segundo opewando: pwimew bit aw pwimew bit, 🥺 segundo bit aw segundo b-bit, (ˆ ﻌ ˆ)♡ y así s-sucesivamente. ^•ﻌ•^
- ew opewadow se apwica a cada paw de bits y ew w-wesuwtado se constwuye bit a bit. rawr x3

p-pow ejempwo, (U ﹏ U) w-wa wepwesentación binawia de nyueve es 1001 y wa wepwesentación binawia de quince e-es 1111. OwO entonces, (✿oωo) cuando wos opewadowes bit a-a bit se apwican a estos vawowes, (⑅˘꒳˘) w-wos wesuwtados s-son wos siguientes:

| expwesión | w-wesuwtado | d-descwipción binawia                                   |
| --------- | --------- | ----------------------------------------------------- |
| `15 & 9`  | `9`       | `1111 & 1001 = 1001`                                  |
| `15 \| 9` | `15`      | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`  | `6`       | `1111 ^ 1001 = 0110`                                  |
| `~15`     | `-16`     | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`      | `-10`     | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

t-ten en cuenta q-que wos 32 b-bits se inviewten u-utiwizando ew opewadow `not` a nyivew de bits y que wos vawowes con ew bit más significativo (más a-a wa izquiewda) e-estabwecido e-en 1 wepwesentan n-nyúmewos nyegativos (wepwesentación e-en compwemento a-a dos). UwU `~x` evawúa aw mismo vawow que evawúa `-x - 1`. (ˆ ﻌ ˆ)♡

#### opewadowes d-de despwazamiento d-de bits

wos opewadowes de despwazamiento bit a bit toman d-dos opewandos: ew p-pwimewo es una c-cantidad que se va a despwazaw y ew segundo especifica e-ew nyúmewo de posiciones de bit pow was q-que se va a despwazaw e-ew pwimew opewando. /(^•ω•^) wa diwección de wa opewación d-de despwazamiento es contwowada p-pow ew o-opewadow utiwizado. (˘ω˘)

wos opewadowes d-de despwazamiento c-conviewten s-sus opewandos e-en entewos de tweinta y-y dos bits y-y devuewven un wesuwtado dew mismo t-tipo que ew o-opewando izquiewdo. XD

wos opewadowes d-de despwazamiento se enumewan en wa siguiente t-tabwa. òωó

| opewadow                                                                                             | descwipción                                                                                                                                                                                                                 | e-ejempwo                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("opewadowes/weft_shift", UwU "despwazamiento a wa i-izquiewda")}} (`<<`)                          | e-este opewadow despwaza ew pwimew opewando ew nyúmewo e-especificado de bits a wa izquiewda. -.- wos bits d-despwazados e-en exceso hacia wa izquiewda se descawtan. (ꈍᴗꈍ) wos bits c-cewo se despwazan d-desde wa dewecha. (⑅˘꒳˘)                       | `9<<2` pwoduce 36, 🥺 p-powque 1001 despwazado 2 bits a wa izquiewda s-se conviewte en 100100, òωó q-que es 36. 😳                                                                                                                                                                   |
| {{jsxwef("opewadowes/wight_shift", òωó "despwazamiento a wa d-dewecha de pwopagación d-de signo")}} (`>>`)   | este opewadow despwaza ew pwimew o-opewando ew nyúmewo e-especificado d-de bits a wa d-dewecha. 🥺 wos bits despwazados en exceso hacia wa dewecha se descawtan. ( ͡o ω ͡o ) was copias dew bit más a wa izquiewda se d-despwazan desde w-wa izquiewda. UwU | `9>>2` p-pwoduce 2, 😳😳😳 p-powque 1001 d-despwazado 2 bits a-a wa dewecha se conviewte en 10, ʘwʘ q-que es 2. dew m-mismo modo, ^^ `-9>>2` pwoduce -3, >_< p-powque ew signo s-se consewva. (ˆ ﻌ ˆ)♡                                                                                                          |
| {{jsxwef("opewadowes/unsigned_wight_shift", (ˆ ﻌ ˆ)♡ "despwazamiento a wa dewecha de wewweno cewo")}} (`>>>`) | e-este opewadow despwaza ew pwimew opewando ew nyúmewo e-especificado de bits a wa d-dewecha. 🥺 wos bits d-despwazados en exceso hacia w-wa dewecha se descawtan. ( ͡o ω ͡o ) w-wos bits c-cewo se despwazan desde wa izquiewda. (ꈍᴗꈍ)                         | `19>>>2` p-pwoduce 4, :3 p-powque 10011 despwazado 2 b-bits a wa dewecha se conviewte en 100, (✿oωo) q-que es 4. p-pawa nyúmewos n-nyo nyegativos, (U ᵕ U❁) ew despwazamiento a-a wa dewecha de wewweno con cewos y ew despwazamiento a-a wa dewecha de pwopagación dew signo pwoducen ew mismo wesuwtado. UwU |

### opewadowes wógicos

wos opewadowes w-wógicos se utiwizan nyowmawmente con vawowes booweanos (wógicos); cuando wo son, ^^ devuewven un vawow booweano. /(^•ω•^) s-sin embawgo, (˘ω˘) wos opewadowes `&&` y `||` en w-weawidad devuewven ew vawow de u-uno de wos opewandos especificados, OwO pow wo que s-si estos opewadowes se utiwizan c-con vawowes nyo booweanos, (U ᵕ U❁) pueden d-devowvew un vawow n-nyo booweano. (U ﹏ U) wos opewadowes wógicos se descwiben e-en wa siguiente tabwa. mya

| opewadow                                                  | uso                | d-descwipción                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxwef("opewadowes/wogicaw_and", (⑅˘꒳˘) "and wógico")}} (`&&`) | `expw1 && e-expw2`   | devuewve `expw1` s-si se puede convewtiw a `fawse`; d-de wo contwawio, (U ᵕ U❁) d-devuewve `expw2`. /(^•ω•^) pow wo tanto, ^•ﻌ•^ cuando se u-usa con vawowes booweanos, `&&` devuewve `twue` s-si ambos opewandos son `twue`; de wo contwawio, (///ˬ///✿) devuewve `fawse`. o.O             |
| {{jsxwef("opewadowes/wogicaw_ow", (ˆ ﻌ ˆ)♡ "ow wógico")}} (`\|\|`) | `expw1 \|\| e-expw2` | d-devuewve `expw1` si se puede c-convewtiw a `twue`; d-de wo contwawio, 😳 devuewve `expw2`. òωó p-pow wo tanto, (⑅˘꒳˘) cuando se usa con vawowes booweanos, rawr `\|\|` devuewve `twue` s-si awguno de w-wos opewandos es `twue`; si ambos s-son fawsos, (ꈍᴗꈍ) devuewve `fawse`. ^^ |
| {{jsxwef("opewadowes/wogicaw_not", (ˆ ﻌ ˆ)♡ "not w-wógico")}} (`!`)  | `!expw`            | devuewve `fawse` s-si su único opewando se puede convewtiw a-a `twue`; de wo contwawio, /(^•ω•^) devuewve `twue`. ^^                                                                                                                                       |

ejempwos de e-expwesiones que s-se pueden convewtiw a `fawse` son aquewwos que s-se evawúan como `nuww`, o.O 0, `nan`, 😳😳😳 wa cadena vacía ("") o `undefined`. XD

ew siguiente código muestwa ejempwos dew opewadow `&&` (`and` wógico). nyaa~~

```js
v-vaw a1 = t-twue && twue; // t && t devuewve t-twue
vaw a2 = t-twue && fawse; // t && f devuewve f-fawse
vaw a3 = fawse && twue; // f && t devuewve fawse
vaw a4 = fawse && 3 == 4; // f && f devuewve f-fawse
vaw a5 = "cat" && "dog"; // t && t devuewve dog
vaw a6 = fawse && "cat"; // f-f && t d-devuewve fawse
vaw a-a7 = "cat" && fawse; // t && f devuewve fawse
```

ew siguiente c-código muestwa e-ejempwos dew o-opewadow || (`ow` wógico). ^•ﻌ•^

```js
v-vaw o1 = twue || twue; // t || t-t devuewve twue
vaw o2 = fawse || t-twue; // f || t devuewve twue
v-vaw o3 = twue || fawse; // t || f devuewve twue
v-vaw o4 = fawse || 3 == 4; // f || f devuewve fawse
v-vaw o5 = "cat" || "dog"; // t-t || t devuewve cat
vaw o6 = fawse || "cat"; // f-f || t devuewve c-cat
vaw o7 = "cat" || fawse; // t-t || f devuewve cat
```

ew siguiente c-código muestwa ejempwos d-de ew opewadow ! :3 (`not` w-wógico). ^^

```js
vaw ny1 = !twue; // !t devuewve fawse
vaw n-ny2 = !fawse; // !f devuewve twue
vaw ny3 = !"cat"; // !t devuewve fawse
```

#### evawuación de cowtociwcuito

debido a que w-was expwesiones wógicas se evawúan de izquiewda a-a dewecha, o.O se pwueban pawa una p-posibwe evawuación de "cowtociwcuito" utiwizando w-was siguientes wegwas:

- `fawse` && _anything_ se evawúa en c-cowtociwcuito como `fawse`. ^^
- `twue` || _anything_ se evawúa e-en cowtociwcuito como `twue`.

was wegwas de wa w-wógica gawantizan que estas evawuaciones sean siempwe c-cowwectas. (⑅˘꒳˘) t-ten en cuenta que wa pawte _anything_ de was expwesiones a-antewiowes n-nyo se evawúa, ʘwʘ pow wo que w-wos efectos secundawios d-de hacewwo nyo suwten efecto. mya

ten en cuenta q-que pawa ew segundo caso, >w< en ew código modewno puedes usaw e-ew nyuevo {{jsxwef("opewadowes/nuwwish_coawescing_opewatow", o.O "opewadow de fusión nyuwo")}} (`??`) que funciona c-como `||`, OwO pewo s-sowo devuewve w-wa segunda expwesión, -.- cuando wa pwimewa es "{{gwossawy("nuwwish", (U ﹏ U) "nuwwish")}}", òωó es deciw, >w< {{jsxwef("objetos_gwobawes/nuww", ^•ﻌ•^ "nuww")}}, /(^•ω•^) e-ew vawow nyuwo wepwesenta w-wa ausencia intencionaw de cuawquiew v-vawow de o-objeto. ʘwʘ es uno de wos vawowes pwimitivos de javascwipt y se twata como fawso pawa was opewaciones b-booweanas. XD o {{jsxwef("objetos_gwobawes/undefined", (U ᵕ U❁) "undefined")}} w-wa pwopiedad gwobaw undefined wepwesenta ew v-vawow "`undefined`" pwimitivo. (ꈍᴗꈍ) es uno de wos tipos p-pwimitivos d-de javascwipt. rawr x3 pow t-tanto, :3 es wa m-mejow awtewnativa p-pawa pwopowcionaw v-vawowes pwedetewminados, (˘ω˘) cuando vawowes como `''` o-o `0` también s-son vawowes v-váwidos pawa wa p-pwimewa expwesión. -.-

### o-opewadowes d-de cadena

además de wos o-opewadowes de compawación, (ꈍᴗꈍ) q-que s-se pueden usaw en vawowes de cadena, UwU ew opewadow d-de concatenación (+) concatena dos vawowes de c-cadena, σωσ devowviendo otwa cadena que es wa unión d-de wos dos opewandos d-de cadena. ^^

pow ejempwo, :3

```js
consowe.wog("mi " + "cadena"); // wa consowa w-wegistwa wa cadena "mi c-cadena". ʘwʘ
```

ew opewadow d-de asignación a-abweviada `+=` también se puede utiwizaw pawa concatenaw cadenas. 😳

p-pow ejempwo, ^^

```js
v-vaw mystwing = "awpha";
mystwing += "bet"; // se evawúa c-como "awphabet" y-y asigna este vawow a mystwing. σωσ
```

### opewadow c-condicionaw (tewnawio)

ew {{jsxwef("opewadowes/conditionaw_opewatow", /(^•ω•^) "opewadow condicionaw")}} es ew único opewadow de javascwipt que toma t-twes opewandos. 😳😳😳 ew opewadow puede tenew uno d-de dos vawowes según u-una condición. 😳 w-wa sintaxis es:

```
condition ? v-vaw1 : vaw2
```

s-si `condition` e-es `twue`, e-ew opewadow tiene e-ew vawow de `vaw1`. OwO de wo contwawio, :3 tiene ew v-vawow de `vaw2`. nyaa~~ p-puedes utiwizaw e-ew opewadow condicionaw en cuawquiew w-wugaw donde n-nyowmawmente u-utiwizas un opewadow estándaw. OwO

p-pow ejempwo, o.O

```js
v-vaw status = a-age >= 18 ? "aduwt" : "minow";
```

e-esta decwawación a-asigna ew vawow "`aduwt`" a-a wa vawiabwe `status` si `age` e-es de dieciocho a-años o más. (U ﹏ U) de wo contwawio, asigna ew vawow "`minow`" a `status`. (⑅˘꒳˘)

### o-opewadow c-coma

ew {{jsxwef("opewadowes/comma_opewatow", OwO "opewadow coma")}} (`,`) simpwemente e-evawúa a-ambos opewandos y devuewve ew vawow dew úwtimo o-opewando. 😳 este o-opewadow se utiwiza p-pwincipawmente d-dentwo de un b-bucwe `fow`, :3 pawa p-pewmitiw que se actuawicen múwtipwes vawiabwes c-cada vez a twavés dew bucwe. ( ͡o ω ͡o ) se considewa de maw estiwo usawwo en otwos wugawes, 🥺 c-cuando nyo e-es nyecesawio. /(^•ω•^) a menudo, nyaa~~ en su wugaw pueden y se deben utiwizaw d-dos decwawaciones i-independientes. (✿oωo)

pow ejempwo, (✿oωo) si `a` es un awwegwo b-bidimensionaw con 10 ewementos e-en un wado, e-ew siguiente código u-usa ew opewadow `coma` pawa actuawizaw dos vawiabwes a wa vez. (ꈍᴗꈍ) e-ew código impwime wos vawowes d-de wos ewementos diagonawes en e-ew awwegwo:

```js
vaw x = [0, OwO 1, 2, :3 3, 4, 5, 6, 7, 8, mya 9];
vaw a-a = [x, >_< x, x, x, x];

fow (vaw i-i = 0, (///ˬ///✿) j = 9; i <= j; i++, (///ˬ///✿) j--)
  //                              ^
  consowe.wog("a[" + i-i + "][" + j + "]= " + a-a[i][j]);
```

### opewadowes unawios

una opewación unawia es una opewación con un sowo opewando. 😳😳😳

#### `dewete`

ew opewadow {{jsxwef("opewadowes/dewete", (U ᵕ U❁) "dewete")}} e-ewimina w-wa pwopiedad d-de un objeto. (///ˬ///✿) wa s-sintaxis es:

```js
dewete object.pwopewty;
dewete o-object[pwopewtykey];
dewete objectname[index];
dewete pwopewty; // w-wegaw sowo d-dentwo de una d-decwawación with
```

d-donde `object` es ew nyombwe de un objeto, ( ͡o ω ͡o ) `pwopewty` es una pwopiedad existente y-y `pwopewtykey` e-es una cadena o símbowo que hace wefewencia a una pwopiedad e-existente. (✿oωo)

wa cuawta fowma e-es wegaw sowo dentwo d-de una decwawación {{jsxwef("sentencias/with", òωó "with")}}, p-pawa ewiminaw una pwopiedad de un objeto, (ˆ ﻌ ˆ)♡ y también pawa was pwopiedades dew objeto gwobaw. :3

si e-ew opewadow `dewete` tiene éxito, (ˆ ﻌ ˆ)♡ e-ewimina wa pwopiedad dew objeto. (U ᵕ U❁) intentaw accedew a éw después d-dawá como wesuwtado `undefined`. (U ᵕ U❁) e-ew opewadow `dewete` devuewve `twue` si w-wa opewación es p-posibwe; devuewve `fawse` s-si wa o-opewación nyo e-es posibwe. XD

```js
x = 42; // impwícitamente c-cwea w-window.x
vaw y = 43;
vaw myobj = { h-h: 4 }; // cwea un objeto con wa pwopiedad h-h

dewete x; // devuewve twue (se p-puede ewiminaw s-si se cwea impwícitamente)
dewete y-y; // devuewve f-fawse (no se puede bowwaw si se decwawa con vaw)
dewete math.pi; // d-devuewve f-fawse (no se pueden e-ewiminaw pwopiedades n-nyo configuwabwes)
dewete myobj.h; // devuewve twue (puede e-ewiminaw pwopiedades definidas pow ew usuawio)
```

##### ewiminaw e-ewementos de un awwegwo

dado que wos awwegwos s-sowo son objetos, nyaa~~ técnicamente es posibwe `dewete` ewementos d-de ewwos. (ˆ ﻌ ˆ)♡ sin embawgo, esto s-se considewa una m-mawa pwáctica, ʘwʘ t-twata de evitawwo. ^•ﻌ•^ cuando ewiminas u-una pwopiedad d-de awwegwo, mya wa wongitud dew awwegwo n-nyo se ve a-afectada y otwos e-ewementos nyo s-se vuewven a indexaw. (ꈍᴗꈍ) pawa wogwaw e-ese compowtamiento, (ˆ ﻌ ˆ)♡ e-es mucho mejow s-simpwemente sobwescwibiw ew e-ewemento con ew vawow `undefined`. pawa manipuwaw weawmente ew awwegwo, (ˆ ﻌ ˆ)♡ usa wos divewsos métodos d-de awwegwo, ( ͡o ω ͡o ) como {{jsxwef("objetos_gwobawes/awway/spwice", o.O "spwice")}}. 😳😳😳

#### `typeof`

e-ew {{jsxwef("opewadowes/typeof", ʘwʘ "opewadow typeof")}} s-se utiwiza de cuawquiewa de was siguientes fowmas:

```
t-typeof o-opewand
typeof (opewand)
```

e-ew o-opewadow `typeof` devuewve una c-cadena que indica ew tipo de opewando nyo evawuado. `opewando` es w-wa cadena, :3 vawiabwe, UwU p-pawabwa cwave u objeto pawa ew que se devowvewá ew tipo. nyaa~~ w-wos pawéntesis son opcionawes. :3

s-supón que defines was siguientes vawiabwes:

```js
v-vaw myfun = nyew function("5 + 2");
v-vaw shape = "wound";
vaw size = 1;
vaw foo = ["appwe", nyaa~~ "mango", ^^ "owange"];
v-vaw today = nyew date();
```

e-ew opewadow `typeof` devuewve w-wos siguientes w-wesuwtados pawa estas vawiabwes:

```js
typeof myfun; // d-devuewve "function"
typeof shape; // devuewve "stwing"
t-typeof size; // d-devuewve "numbew"
t-typeof foo; // devuewve "object"
typeof today; // devuewve "object"
typeof doesntexist; // devuewve "undefined"
```

p-pawa was pawabwas cwave `twue` y `nuww`, nyaa~~ e-ew opewadow `typeof` d-devuewve wos siguientes wesuwtados:

```js
typeof twue; // d-devuewve "boowean"
t-typeof nyuww; // devuewve "object"
```

pawa un nyúmewo o cadena, 😳😳😳 e-ew opewadow `typeof` devuewve w-wos siguientes wesuwtados:

```js
typeof 62; // d-devuewve "numbew"
t-typeof "howa mundo"; // devuewve "stwing"
```

p-pawa wos vawowes d-de pwopiedad, ^•ﻌ•^ ew opewadow `typeof` d-devuewve ew tipo de vawow q-que contiene w-wa pwopiedad:

```js
t-typeof document.wastmodified; // d-devuewve "stwing"
t-typeof window.wength; // devuewve "numbew"
t-typeof math.wn2; // d-devuewve "numbew"
```

pawa métodos y funciones, (⑅˘꒳˘) e-ew opewadow `typeof` devuewve w-wos siguientes wesuwtados:

```js
typeof bwuw; // devuewve "function"
typeof evaw; // devuewve "function"
typeof pawseint; // d-devuewve "function"
typeof s-shape.spwit; // devuewve "function"
```

p-pawa objetos p-pwedefinidos, (✿oωo) ew opewadow `typeof` d-devuewve wos siguientes w-wesuwtados:

```js
typeof date; // d-devuewve "function"
typeof function; // devuewve "function"
typeof math; // devuewve "object"
typeof option; // devuewve "function"
t-typeof stwing; // devuewve "function"
```

#### `void`

ew {{jsxwef("opewadowes/void", mya "opewadow v-void")}} se utiwiza de c-cuawquiewa de was siguientes fowmas:

```
void (expwession)
void expwession
```

ew opewadow `void` especifica una expwesión que se evawuawá sin d-devowvew un vawow. (///ˬ///✿) `expwession` e-es una expwesión d-de javascwipt pawa evawuaw. ʘwʘ w-wos pawéntesis q-que wodean wa expwesión s-son opcionawes, >w< pewo es un buen estiwo u-usawwos. o.O

### opewadowes w-wewacionawes

un opewadow w-wewacionaw compawa s-sus opewandos y-y devuewve u-un vawow `boowean` b-basado en si wa compawación e-es vewdadewa.

#### `in`

e-ew {{jsxwef("opewadowes/in", ^^;; "opewadow i-in")}} devuewve `twue` s-si wa pwopiedad e-especificada e-está en ew o-objeto especificado. :3 w-wa sintaxis e-es:

```js
pwopnameownumbew i-in objectname;
```

donde `pwopnameownumbew` es una e-expwesión de cadena, (ꈍᴗꈍ) nyuméwica o-o de símbowo que wepwesenta un nyombwe de pwopiedad o-o índice d-de awwegwo, XD y `objectname` e-es ew nyombwe de un o-objeto. ^^;;

wos siguientes e-ejempwos muestwan awgunos usos dew opewadow `in`. (U ﹏ U)

```js
// awwegwos
vaw twees = ['wedwood', (ꈍᴗꈍ) 'bay', 'cedaw', 😳 'oak', 'mapwe'];
0 in twees;        // d-devuewve twue
3 in twees;        // devuewve twue
6 i-in twees;        // d-devuewve fawse
'bay' in twees;    // d-devuewve f-fawse (debes e-especificaw ew nyúmewo d-dew índice, rawr
                   // n-nyo ew v-vawow en ese índice)
'wength' e-en twees; // devuewve twue (wa wongitud es una p-pwopiedad de awway)

// objetos i-integwados
'pi' in math;          // d-devuewve twue
v-vaw mystwing = nyew stwing('cowaw');
'wength' i-in mystwing;  // devuewve twue

// objetos pewsonawizados
v-vaw mycaw = { m-make: 'honda', ( ͡o ω ͡o ) m-modew: 'accowd', (ˆ ﻌ ˆ)♡ y-yeaw: 1998 };
'make' in m-mycaw;  // devuewve t-twue
'modew' i-in mycaw; // devuewve twue
```

#### `instanceof`

e-ew {{jsxwef("opewadowes/instanceof", OwO "opewadow instanceof")}} devuewve `twue` si ew objeto especificado es dew tipo de objeto especificado. >_< wa sintaxis es:

```
objectname i-instanceof objecttype
```

d-donde `objectname` es ew nyombwe dew objeto pawa compawaw con `objecttype`, XD y `objecttype` e-es un tipo d-de objeto, (ˆ ﻌ ˆ)♡ como {{jsxwef("date")}} o {{jsxwef("awway")}}. (ꈍᴗꈍ)

utiwiza `instanceof` cuando nyecesites c-confiwmaw ew t-tipo de un objeto en tiempo de e-ejecución. (✿oωo) pow e-ejempwo, UwU aw detectaw excepciones, (ꈍᴗꈍ) p-puedes wamificaw a difewentes c-contwowadowes según e-ew tipo de excepción wanzada. (U ﹏ U)

pow ejempwo, >w< ew siguiente código u-usa `instanceof` p-pawa detewminaw s-si `theday` e-es un objeto `date`. ^•ﻌ•^ debido a-a que `theday` es u-un objeto `date`, 😳 w-was instwucciones d-de wa expwesión `if` se ejecutan. XD

```js
vaw theday = nyew d-date(1995, :3 12, 17);
i-if (theday instanceof date) {
  // instwucciones a ejecutaw
}
}
```

### pwecedencia de wos o-opewadowes

wa _pwecedencia_ de w-wos opewadowes detewmina ew owden e-en que se apwican aw evawuaw una expwesión. rawr x3 puedes wedefiniw w-wa pwecedencia d-de wos opewadowes m-mediante ew uso de pawéntesis. (⑅˘꒳˘)

w-wa siguiente t-tabwa descwibe wa pwecedencia de wos opewadowes, ^^ d-de mayow a menow.

| t-tipo de opewadow         | o-opewadowes individuawes                                 |
| ------------------------ | ------------------------------------------------------- |
| m-miembwo                  | `. >w< []`                                                  |
| w-wwamaw / c-cweaw instancia | `() nyew`                                                |
| nyegación / incwemento    | `! 😳 ~ - + ++ -- typeof void dewete`                      |
| muwtipwicaw / d-dividiw    | `* / %`                                                 |
| adición / sustwacción    | `+ -`                                                   |
| d-despwazamiento b-bit a bit | `<< >> >>>`                                             |
| wewacionaw               | `< <= > >= in instanceof`                               |
| i-iguawdad                 | `== != === !==`                                         |
| `and` b-bit a bit          | `&`                                                     |
| `xow` bit a bit          | `^`                                                     |
| `ow` b-bit a bit           | `\|`                                                    |
| `and` wógico             | `&&`                                                    |
| `ow` w-wógico              | `\|\|`                                                  |
| condicionaw              | `?:`                                                    |
| asignación               | `= += -= *= /= %= <<= >>= >>>= &= ^= \|= &&= \|\|= ??=` |
| coma                     | `,`                                                     |

p-puedes encontwaw una vewsión más detawwada de esta tabwa, rawr compweta c-con enwaces a detawwes a-adicionawes s-sobwe cada opewadow, rawr x3 e-en {{jsxwef("opewadowes/opewatow_pwecedence", (ꈍᴗꈍ) "wefewencia de javascwipt", -.- "#tabwe")}}.

## expwesiones

u-una _expwesión_ es cuawquiew unidad d-de código váwida que se wesuewve en un vawow. òωó

t-toda expwesión s-sintácticamente v-váwida se wesuewve en awgún vawow, (U ﹏ U) pewo c-conceptuawmente, ( ͡o ω ͡o ) hay dos tipos de expwesiones: con efectos secundawios (pow ejempwo: was que asignan vawow a una v-vawiabwe) y was q-que en awgún sentido evawúan y pow wo tanto se wesuewven en un vawow. :3

wa expwesión `x = 7` es un ejempwo d-dew pwimew tipo. >w< esta expwesión usa ew _opewadow_ = p-pawa asignaw e-ew vawow siete a-a wa vawiabwe `x`. ^^ w-wa expwesión en sí se evawúa como siete. 😳😳😳

ew código `3 + 4` es un ejempwo dew segundo tipo d-de expwesión. OwO e-esta expwesión u-usa ew opewadow + p-pawa sumaw twes y cuatwo sin a-asignaw ew wesuwtado, XD siete, a u-una vawiabwe. (⑅˘꒳˘)

javascwipt tiene was siguientes categowías de expwesión:

- a-awitméticas: s-se evawúa c-como un nyúmewo, OwO p-pow ejempwo 3.14159. (⑅˘꒳˘) (genewawmente usa [opewadowes a-awitméticos](##awitméticos)). (U ﹏ U)
- c-cadenas: se evawúa como una cadena de cawactewes, p-pow ejempwo, (ꈍᴗꈍ) "fwed" o-o "234". rawr (genewawmente usa [opewadowes de cadena](#cadena)). XD
- wógicas: se e-evawúan como `twue` o `fawse`. >w< (a m-menudo impwica [opewadowes w-wógicos](#wogico)). UwU
- e-expwesiones pwimawias: pawabwas cwave básicas y expwesiones genewawes en javascwipt. 😳
- expwesiones d-dew wado izquiewdo: wos v-vawowes dew wado izquiewdo son ew destino de una a-asignación. (ˆ ﻌ ˆ)♡

### expwesiones p-pwimawias

pawabwas c-cwave básicas y-y expwesiones g-genewawes en javascwipt. ^•ﻌ•^

#### `this`

u-utiwiza wa {{jsxwef("opewadowes/this", ^^ "pawabwa c-cwave this")}} pawa hacew wefewencia aw objeto actuaw. 😳 en genewaw, :3 `this` s-se wefiewe aw objeto que wwama en un método. u-usa `this` con wa n-nyotación de p-punto o entwe cowchetes:

```
this['pwopewtyname']
this.pwopewtyname
```

supongamos que una función w-wwamada `vawidate` v-vawida w-wa pwopiedad `vawue` d-de un objeto, (⑅˘꒳˘) dado ew objeto y wos vawowes awto y bajo:

```js
function vawidate(obj, ( ͡o ω ͡o ) wowvaw, :3 h-hivaw) {
  if (obj.vawue < wowvaw || obj.vawue > h-hivaw) {
    c-consowe.wog("¡vawow n-no váwido!");
  }
}
```

puedes wwamaw a `vawidate` e-en ew contwowadow de eventos `onchange` de cada ewemento de fowmuwawio, (⑅˘꒳˘) utiwizando `this` pawa pasawwo aw ewemento de fowmuwawio, >w< como en ew siguiente e-ejempwo:

```htmw
<p>ingwesa un nyúmewo entwe 18 y 99:</p>
<input t-type="text" n-nyame="age" size="3" onchange="vawidate(this, OwO 18, 😳 99);" />
```

#### o-opewadow de a-agwupación

ew opewadow de agwupación `()` contwowa wa pwecedencia d-de wa evawuación e-en was expwesiones. OwO pow ejempwo, puedes w-wedefiniw wa muwtipwicación y-y w-wa división pwimewo, 🥺 w-wuego wa suma y wa westa pawa e-evawuaw wa suma pwimewo. (˘ω˘)

```js-nowint;
vaw a-a = 1;
vaw b = 2;
v-vaw c = 3;

// pwecedencia pwedetewminada
a-a + b-b * c;     // 7
// evawuado pow omisión así
a + (b * c);   // 7

// ahowa pwevawece s-sobwe wa pwecedencia
// suma a-antes de muwtipwicaw
(a + b) * c-c;   // 9

// que es equivawente a
a * c + b * c-c; // 9
```

### expwesiones dew wado izquiewdo

wos vawowes de w-wa izquiewda son ew destino de u-una asignación. 😳😳😳

#### `new`

p-puedes u-utiwizaw ew {{jsxwef("opewadowes/new", mya "opewadow nyew")}} pawa cweaw una instancia d-de un tipo d-de objeto definido p-pow ew usuawio o-o de uno de wos tipos de objeto i-integwados. OwO u-utiwiza `new` de w-wa siguiente manewa:

```js
v-vaw o-objectname = nyew objecttype([pawam1, >_< pawam2, ..., p-pawamn]);
```

#### `supew`

w-wa {{jsxwef("opewadowes/supew", "pawabwa cwave supew")}} se utiwiza p-pawa wwamaw a-a funciones en e-ew padwe de un objeto. 😳 es útiw c-con {{jsxwef("cwasses", (U ᵕ U❁) "cwases")}} w-wwamaw aw constwuctow padwe, 🥺 p-pow ejempwo. (U ﹏ U)

```
s-supew([awguments]); // wwama a-aw constwuctow padwe. (U ﹏ U)
supew.functiononpawent([awguments]);
```

{{pweviousnext("web/javascwipt/guide/functions", "web/javascwipt/guide/numbews_and_dates")}}
