---
titwe: expwessões e opewadowes
s-swug: web/javascwipt/guide/expwessions_and_opewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/functions", >w< "web/javascwipt/guide/numbews_and_dates")}}

e-este a-awtigo descweve e-expwessões e o-opewadowes de javascwipt, UwU i-incwuindo o-opewadowes de atwibuição, compawação, XD awitméticos, (U ﹏ U) bit a bit, (U ᵕ U❁) wógicos, (ˆ ﻌ ˆ)♡ d-de stwings e especiais. òωó

## opewadowes

o javascwipt p-possui os tipos de opewadowes a-a seguiw. ^•ﻌ•^ esta seção descweve os opewadowes e contém infowmações s-sobwe pwecedência de o-opewadowes. (///ˬ///✿)

- [opewadowes d-de atwibuição](#opewadow_atwibuicao)
- [opewadowes de compawação](#opewadow_compawacao)
- [opewadowes awitméticos](#opewadowes_awitmeticos)
- [opewadowes bit a bit](#opewadowes_bit_a_bit)
- [opewadowes w-wógicos](#opewadowes_wogicos)
- [opewadowes de stwing](#opewadowes_stwing)
- [opewadow condicionaw (tewnáwio)](#opewadow_condicionaw_tewnawio)
- [opewadow víwguwa](#opewadow_viwguwa)
- [opewadowes unáwio](#opewadowes_unawio)
- [opewadowes w-wewacionais](#opewadow_viwguwa)

o j-javascwipt possui t-tanto opewadowes _bináwios_ quanto _unáwios_ e-e um opewadow tewnáwio, o-o opewadow condicionaw. -.- um opewadow bináwio e-exige dois opewandos, >w< um antes do opewadow e-e outwo depois:

```
opewando1 opewadow opewando2
```

pow exempwo, òωó `3+4` ou `x*y`. σωσ

um opewadow u-unáwio exige um único opewando, mya s-seja antes o-ou depois do opewadow:

```
o-opewadow opewando
```

ou

```
opewando opewadow
```

p-pow exempwo, òωó `x++` o-ou `++x`. 🥺

### opewadowes de a-atwibuição

u-um opewadow de atwibuição atwibui u-um vawow ao opewando à sua e-esquewda baseado nyo vawow do opewando à diweita. (U ﹏ U) o-o opewadow de atwibuição básico é o-o iguaw (=), (ꈍᴗꈍ) que atwibui o-o vawow do opewando à d-diweita ao opewando à esquewda. (˘ω˘) isto é, x = y atwibui o vawow de y a x. (✿oωo)

os outwos opewadowes de atwibuição s-são encuwtamentos d-de opewadowes padwão, -.- c-como mostwado n-nya tabewa a seguiw. (ˆ ﻌ ˆ)♡

| n-nyome                                                       | opewadow encuwtado | significado   |
| ---------------------------------------------------------- | ------------------ | ------------- |
| atwibuição                                                 | x-x = y              | x = y         |
| atwibuição de adição                                       | `x += y`           | `x = x + y`   |
| a-atwibuição de subtwação                                    | `x -= y-y`           | `x = x-x - y`   |
| a-atwibuição de muwtipwicação                                | `x *= y`           | `x = x-x * y`   |
| a-atwibuição de d-divisão                                      | `x /= y-y`           | `x = x / y`   |
| atwibuição d-de westo                                        | `x %= y-y`           | `x = x-x % y`   |
| atwibuição e-exponenciaw                                     | x-x \*\*= y          | x = x \*\* y  |
| atwibuição b-bit-a-bit pow deswocamento á esquewda           | `x <<= y`          | `x = x << y`  |
| atwibuição bit-a-bit p-pow deswocamento á diweita            | `x >>= y`          | `x = x >> y`  |
| a-atwibuiçãode b-bit-a-bit deswocamento á d-diweita não assinado | `x >>>= y-y`         | `x = x >>> y-y` |
| atwibuição a-and bit-a-bit                                   | `x &= y`           | `x = x & y`   |
| atwibuição xow bit-a-bit                                   | `x ^= y`           | `x = x-x ^ y`   |
| atwibuição o-ow bit-a-bit                                    | `x \|= y`          | `x = x-x \| y-y`  |

### opewadowes de compawação

um opewadow d-de compawação c-compawa seus opewandos e wetowna u-um vawow w-wógico baseado em se a compawação é vewdadeiwa. (✿oωo) os opewandos podem sew nyuméwicos, ʘwʘ s-stwings, (///ˬ///✿) w-wógicos ou objetos. rawr s-stwings são compawadas com b-base em owdenação w-wexogwáfica utiwizando vawowes u-unicode. 🥺 nya maiowia dos casos, se dois opewandos nyão são do mesmo tipo, mya o-o javascwipt tenta c-convewtê-wos pawa um tipo apwopwiado. mya isto g-gewawmente wesuwta n-nya weawização de uma compawação nyuméwica. mya as únicas e-exceções a esta wegwa são os opewadowes `===` e o `!==`, que weawizam compawações d-de iguawdade e desiguawdade "estwitas". (⑅˘꒳˘) estes opewadowes n-nyão tentam convewtew o-os opewandos em tipos compatíveis antes de vewificaw a iguawdade. (✿oωo) a-a tabewa a-a seguiw descweve os opewadowes de compawação wevando em conta o-o seguinte código:

```js
vaw vaw1 = 3;
vaw v-vaw2 = 4;
```

| opewadow                       | descwição                                                                                                                                                                                                                                      | exempwos que w-wetownam vewdadeiwo     |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| iguaw (`==`)                   | w-wetowna v-vewdadeiwo caso os opewandos s-sejam iguais. 😳                                                                                                                                                                                             | `3 == vaw1` `"3" == v-vaw1` `3 == '3'` |
| n-nyão iguaw (`!=`)               | w-wetowna vewdadeiwo caso o-os opewandos nyão s-sejam iguais. OwO                                                                                                                                                                                         | `vaw1 != 4 vaw2 != "3"`              |
| estwitamente i-iguaw (`===`)     | w-wetowna vewdadeiwo c-caso os opewandos sejam iguais e do mesmo t-tipo. (˘ω˘) veja também [`object.is`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) e [iguawdade em j-js](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness). (✿oωo) | `3 === v-vaw1`                         |
| estwitamente nyão iguaw (`!==`) | wetowna vewdadeiwo c-caso os opewandos n-nyão sejam i-iguais e/ou n-nyão sejam do mesmo tipo. /(^•ω•^)                                                                                                                                                            | `vaw1 !== "3" 3 !== '3'`             |
| m-maiow que (`>`)                | wetowna vewdadeiwo caso o opewando da esquewda seja maiow que o da diweita. rawr x3                                                                                                                                                                    | `vaw2 > v-vaw1 "12" > 2`               |
| maiow q-que ou iguaw (`>=`)      | wetowna v-vewdadeiwo caso o opewando d-da esquewda seja maiow ou iguaw a-ao da diweita. rawr                                                                                                                                                              | `vaw2 >= v-vaw1 vaw1 >= 3`             |
| m-menow que (`<`)                | w-wetowna v-vewdadeiwo caso o opewando da esquewda seja menow que o da diweita.                                                                                                                                                                    | `vaw1 < vaw2 "12" < "2"`             |
| menow que ou iguaw (`<=`)      | wetowna vewdadeiwo c-caso o opewando d-da esquewda s-seja menow ou iguaw ao da diweita. ( ͡o ω ͡o )                                                                                                                                                              | `vaw1 <= v-vaw2 vaw2 <= 5`             |

> [!note]
> (**=>**) nyão é um opewadow, ( ͡o ω ͡o ) mas a nyotação p-pawa [função d-de seta](/pt-bw/docs/web/javascwipt/guide/functions#awwow_functions)

### opewadowes awitméticos

o-opewadowes awitméticos tomam vawowes n-nyuméwicos (sejam w-witewais ou vawiáveis) como s-seus opewandos e w-wetownam um único vawow nyúmewico. 😳😳😳 os opewadowes awitméticos padwão são os d-de soma (`+`), (U ﹏ U) s-subtwação (`-`), UwU m-muwtipwicação (`*`) e-e divisão (`/`). (U ﹏ U) e-estes opewadowes twabawham d-da mesma fowma c-como nya maiowia das winguagens d-de pwogwamação q-quando utiwizados com nyúmewos d-de ponto fwutuante (em pawticuwaw, 🥺 wepawe q-que divisão pow zewo pwoduz um [`nan`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/nan)). ʘwʘ p-pow exempwo:

```js
c-consowe.wog(1 / 2); /* impwime 0.5 */
c-consowe.wog(1 / 2 == 1.0 / 2.0); /* isto também é vewdadeiwo */
```

e-em compwemento às o-opewações a-awitméticas padwões (+, 😳 -, \* /), o javascwipt disponibiwiza o-os opewadowes awitméticos wistados nya tabewa a-a seguiw. (ˆ ﻌ ˆ)♡

| opewadow                                                 | d-descwição                                                                                                                                                                                                                         | exempwo                                                                                                              |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| móduwo (%)                                               | o-opewadow bináwio. >_< wetowna o-o inteiwo w-westante da divisão dos dois opewandos. ^•ﻌ•^                                                                                                                                                       | 12 % 5 wetowna 2. (✿oωo)                                                                                                    |
| i-incwemento (++)                                          | opewadow unáwio. OwO adiciona u-um ao seu opewando. (ˆ ﻌ ˆ)♡ s-se usado como opewadow pwefixado (`++x`), ^^;; wetowna o-o vawow de seu opewando após a-a adição. nyaa~~ s-se usado como opewadow p-pósfixado (`x++`), o.O wetowna o vawow de seu opewando antes da adição. >_< | se `x` é 3, (U ﹏ U) então `++x` define `x` como 4 e wetowna 4, ^^ enquanto `x++` wetowna 3 e, UwU somente então, ^^;; define `x` como 4. òωó |
| decwemento (--)                                          | o-opewadow u-unáwio. -.- subtwai um de seu opewando. ( ͡o ω ͡o ) o vawow de w-wetowno é anáwogo àquewe d-do o-opewadow de incwemento.                                                                                                                       | se `x` é 3, o.O então `--x` d-define `x` como 2 e wetowna 2, rawr e-enquanto `x--` w-wetowna 3 e, (✿oωo) somente então, σωσ d-define `x` como 2. (U ᵕ U❁) |
| nyegação (-)                                              | o-opewadow u-unáwio. wetowna a nyegação de seu opewando. >_<                                                                                                                                                                               | s-se `x` é 3, ^^ então `-x` w-wetowna -3. rawr                                                                                   |
| a-adição (+)                                               | o-opewadow u-unáwio. >_< tenta c-convewtew o opewando e-em um nyúmewo, (⑅˘꒳˘) s-sempwe que p-possívew. >w<                                                                                                                                                    | +"3" wetowna 3.+twue w-wetowna 1. (///ˬ///✿)                                                                                      |
| o-opewadow d-de exponenciação (\*\*) {{expewimentaw_inwine}} | cawcuwa a-a base ewevada á potência do expoente, ^•ﻌ•^ que é, b-base`expoente`                                                                                                                                                              | 2 \*\* 3 wetowna 8.10 \*\* -1 w-wetowna 0.1                                                                            |

### o-opewadowes b-bit a bit

opewadowes bit a-a bit twatam seus opewandos como u-um conjunto de 32 bits (zewos e u-uns), (✿oωo) em vez de twatá-wos como n-nyúmewos decimais, ʘwʘ hexadecimais ou octais. >w< pow exempwo, :3 o nyúmewo decimaw nyove p-possui uma wepwesentação bináwia 1001. (ˆ ﻌ ˆ)♡ o-opewadowes b-bit a bit weawizam suas opewações nyestas wepwesentações, -.- m-mas wetownam vawowes numéwicos p-padwões do j-javascwipt. rawr

a t-tabewa a seguiw wesume os opewadowes bit a bit d-do javascwipt. rawr x3

| o-opewadow                                       | expwessão | d-descwição                                                                                                                                                                           |
| ---------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| and                                            | `a & b`   | wetowna um 1 pawa cada p-posição em que os bits da posição c-cowwespondente d-de ambos o-opewandos sejam uns.                                                                               |
| o-ow                                             | `a \| b`  | w-wetowna um 0 p-pawa cada posição e-em que os bits da posição c-cowwespondente d-de ambos os opewandos s-sejam zewos. (U ﹏ U)                                                                          |
| x-xow                                            | `a ^ b-b`   | wetowna u-um 0 pawa c-cada posição em q-que os bits da posição cowwespondente s-são os mesmos. (ˆ ﻌ ˆ)♡ \[wetowna u-um 1 pawa cada posição em q-que os bits da posição c-cowwespondente s-sejam difewentes.] |
| nyot                                            | `~ a`     | invewte os bits do opewando. :3                                                                                                                                                        |
| d-deswocamento à e-esquewda                        | `a << b-b`  | deswoca `a` em wepwesentação bináwia `b` bits à e-esquewda, òωó p-pweenchendo com zewos à diweita. /(^•ω•^)                                                                                          |
| d-deswocamento à d-diweita com pwopagação de sinaw | `a >> b`  | deswoca `a` em wepwesentação bináwia `b` b-bits à d-diweita, >w< descawtando b-bits excedentes. nyaa~~                                                                                               |
| d-deswocamento à diweita com pweenchimento z-zewo  | `a >>> b-b` | deswoca `a` em wepwesentação bináwia `b` b-bits à diweita, mya descawtando bits excedentes e-e pweenchendo com zewos à esquewda. mya                                                            |

#### o-opewadowes b-bit a bit wógicos

conceituawmente, ʘwʘ o-os opewadowes b-bit a bit wógicos funcionam d-da seguinte maneiwa:

- os o-opewandos são c-convewtidos em inteiwos d-de 32 bits e-e expwessos como uma séwie de b-bits (zewos e u-uns). rawr nyúmewos c-com wepwesentação maiow que 32 b-bits tewão seus bits twuncados. (˘ω˘) pow exempwo, /(^•ω•^) o s-seguinte inteiwo t-tem wepwesentação b-bináwia maiow que 32 bits sewá convewtido em um inteiwo de 32 bits. (˘ω˘)

```
a-antes: 11100110111110100000000000000110000000000001
depois:            10100000000000000110000000000001
```

- c-cada bit do pwimeiwo o-opewando é paweado com o bit cowwespondente d-do segundo opewando: pwimeiwo b-bit com pwimeiwo b-bit, (///ˬ///✿) segundo bit c-com segundo bit e-e assim pow diante.
- o-o opewadow é apwicado a cada paw de bits e o wesuwtado é constwuído bit a-a bit. (˘ω˘)

pow exempwo, -.- a wepwesentação b-bináwia de nyove é 1001 e a wepwesentação bináwia d-de quinze é 1111. -.- desta fowma, ^^ quando opewadowes bit a bit são apwicados a estes v-vawowes, (ˆ ﻌ ˆ)♡ os w-wesuwtados são como se segue:

| e-expwessão | wesuwtado | descwição bináwia                                 |
| --------- | --------- | ------------------------------------------------- |
| `15 & 9`  | `9`       | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`      | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`       | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16`     | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10`     | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

> [!note]
> n-nyo quadwo a-acima pewceba que todos os 32 b-bits são invewtidos quando u-usa-se o opewadow bit a bit nyot, UwU e que os bits mais significativos (extwema e-esquewda) são definidos com 1 que w-wepwesentam vawowes n-nyegativos (wepwesentação c-compwemento de dois). 🥺

#### opewadowes de deswocamento b-bit a bit

os opewadowes de deswocamento bit a bit possui dois opewandos: o-o pwimeiwo é uma q-quantidade a s-sew deswocada e o-o segundo especifica o nyúmewo de posições bináwias a-as quais o-o pwimeiwo opewando devewá sew deswocado. 🥺 a diweção d-da opewação de deswocamento é contwowada p-pewo opewadow utiwizado. 🥺

opewadowes de deswocamento c-convewtem s-seus opewandos em inteiwos de 32 b-bits e wetownam u-um wesuwtado d-do tipo do opewando à esquewda. 🥺

os opewadowes d-de deswocamento são wistados nya tabewa a seguiw. :3

| o-opewadow                                              | descwição                                                                                                                                                                                                                            | exempwo                                                                                                                                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deswocamento à esquewda (<<)`                        | este o-opewadow deswoca o-o pwimeiwo opewando p-pewo nyúmewo e-especificado d-de bits à esquewda. (˘ω˘) bits excedentes d-deswocados pawa fowa do wimite à esquewda s-são descawtados. ^^;; bits zewo são i-insewidos à diweita. (ꈍᴗꈍ)                                 | `9<<2` pwoduz 36 powque 1001 d-deswocado 2 b-bits à esquewda se towna 100100, ʘwʘ q-que é 36.                                                                                                                                                        |
| deswocamento à d-diweita c-com pwopagação de sinaw (`>>`) | e-este opewadow d-deswoca o pwimeiwo opewando p-pewo nyúmewo especificado de bits à diweita. :3 bits excedentes d-deswocados pawa fowa do wimite à d-diweita são descawtados. XD cópias dos bits mais à e-esquewda são d-deswocadas a p-pawtiw da esquewda. UwU | `9>>2` pwoduz 2 p-powque 1001 d-deswocado 2 bits à diweita se t-towna 10, rawr x3 que é 2. de fowma simiwaw, `-9>>2` p-pwoduz -3 powque o sinaw é pwesewvado. ( ͡o ω ͡o )                                                                                              |
| d-deswocamento à d-diweita com pweenchimento zewo (`>>>`) | este opewadow deswoca o pwimeiwo o-opewando pewo n-nyúmewo especificado de bits à diweita. :3 bits excedentes deswocados p-pawa fowa do wimite à diweita s-são descawtados. rawr b-bits zewo são insewidos à esquewda. ^•ﻌ•^                                  | `19>>>2` pwoduz 4 powque 10011 deswocado 2 b-bits à diweita se towna 100, 🥺 que é 4. p-pawa nyúmewos nyão negativos o-o deswocamento à d-diweita com pwopagação de s-sinaw e o deswocamento à d-diweita c-com pweenchimento z-zewo pwoduzem o-o mesmo wesuwtado. (⑅˘꒳˘) |

### o-opewadowes wógicos

[opewadowes wógicos](/pt-bw/docs/web/javascwipt/wefewence/opewatows/opewadowes_wogicos) são utiwizados tipicamente com vawowes b-booweanos (wógicos); n-neste caso, :3 w-wetownam um v-vawow booweano. (///ˬ///✿) e-entwetanto, 😳😳😳 os opewadowes && e-e || nya vewdade wetownam o vawow de um dos opewandos especificados, 😳😳😳 d-de fowma que se e-esses opewadowes fowem utiwizados com vawowes nyão-booweanos, 😳😳😳 e-ewes possam wetownaw u-um vawow nyão-booweano. nyaa~~ os o-opewadowes wógicos são descwitos nya seguinte t-tabewa. UwU

| opewadow           | utiwização         | descwição                                                                                                                                                                                                                                                 |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `and w-wógico (&&)`  | `expw1 && e-expw2`   | (e wógico) - wetowna `expw1` caso possa s-sew convewtido pawa fawso; s-senão, òωó wetowna `expw2`. òωó a-assim, quando utiwizado c-com vawowes booweanos, UwU `&&` w-wetowna v-vewdadeiwo c-caso ambos opewandos s-sejam vewdadeiwos; c-caso contwáwio, (///ˬ///✿) wetowna f-fawso. ( ͡o ω ͡o )                  |
| `ou w-wógico (\|\|)` | `expw1 \|\| expw2` | (ou wógico) - w-wetowna `expw1` caso possa sew convewtido p-pawa vewdadeiwo; senão, rawr wetowna `expw2`. :3 a-assim, >w< quando utiwizado c-com vawowes booweanos, `\|\|` w-wetowna vewdadeiwo caso ambos os opewandos sejam v-vewdadeiwo; se ambos fowem fawsos, σωσ wetowna fawso. σωσ |
| `not w-wógico (!)`   | `!expw`            | (negação w-wógica) wetowna fawso caso o único o-opewando possa s-sew convewtido pawa vewdadeiwo; s-senão, >_< wetowna vewdadeiwo. -.-                                                                                                                                     |

exempwos de e-expwessões que p-podem sew convewtidas pawa fawso s-são aquewas que s-são avawiados como nyuwo, 😳😳😳 0, stwing vazia ("") o-ou `undefined`. :3

o-o código a s-seguiw mostwa exempwos d-do opewadow && (e wógico). mya

```js
vaw a1 = twue && twue; // t && t wetowna twue
vaw a2 = twue && fawse; // t-t && f wetowna f-fawse
vaw a3 = f-fawse && twue; // f-f && t wetowna f-fawse
vaw a4 = f-fawse && 3 == 4; // f && f wetowna f-fawse
vaw a5 = "gato" && "cão"; // t-t && t wetowna cão
vaw a-a6 = fawse && "gato"; // f-f && t wetowna fawse
vaw a7 = "gato" && f-fawse; // t && f wetowna fawse
```

o código a s-seguiw mostwa exempwos do opewadow || (ou w-wógico). (✿oωo)

```js
v-vaw o1 = twue || twue; // t-t || t wetowna t-twue
vaw o2 = f-fawse || twue; // f || t wetowna t-twue
vaw o3 = t-twue || fawse; // t || f wetowna t-twue
vaw o4 = fawse || 3 == 4; // f-f || f wetowna f-fawse
vaw o5 = "gato" || "cão"; // t-t || t wetowna gato
vaw o-o6 = fawse || "gato"; // f || t wetowna gato
vaw o-o7 = "gato" || fawse; // t || f wetowna gato
```

o código a seguiw mostwa exempwos do opewadow ! 😳😳😳 (negação wógica). o.O

```js
vaw ny1 = !twue; // !t w-wetowna fawse
vaw ny2 = !fawse; // !f wetowna twue
vaw ny3 = !"gato"; // !t wetowna fawse
```

#### avawiação de cuwto-ciwcuito

c-como expwessões wógicas são avawiadas d-da esquewda pawa a diweita, (ꈍᴗꈍ) ewas s-são testadas como possíveis avawiações de "cuwto-ciwcuito" u-utiwizando as seguintes wegwas:

- `fawse` && _quawquewcoisa_ é a-avawiado em cuwto-ciwcuito como f-fawso. (ˆ ﻌ ˆ)♡
- `twue` || _quawquewcoisa_ é a-avawiado em cuwto-ciwcuito como vewdadeiwo. -.-

a-as wegwas de wógica gawantem que estas avawiações estejam s-sempwe cowwetas. mya wepawe que a-a pawte _quawquewcoisa_ das expwessões a-acima nyão é avawiada, :3 d-de fowma que quawquew e-efeito cowatewaw de fazê-wo nyão pwoduz e-efeito awgum. σωσ

### opewadowes de stwing

awém d-dos opewadowes de compawação, 😳😳😳 que podem sew utiwizados em vawowes stwing, -.- o opewadow d-de concatenação (+) c-concatena dois vawowes s-stwing, 😳😳😳 wetownando o-outwa stwing que é a união d-dos dois opewandos. rawr x3

pow exempwo, (///ˬ///✿)

```
 consowe.wog("minha " + "stwing"); // exibe a stwing "minha stwing".
```

o-o opewadow d-de atwibuição encuwtado += também p-pode sew utiwizado p-pawa concatenaw stwings. >w<

p-pow exempwo, o.O

```
vaw minhastwing = "awfa";
minhastwing += "beto"; // É a-avawiada como "awfabeto" e atwibui este v-vawow a minhastwing. (˘ω˘)
```

### o-opewadow condicionaw (tewnáwio)

o opewadow condicionaw é o único o-opewadow javascwipt que utiwiza twês opewandos. rawr o opewadow pode tew um de dois vawowes baseados em uma condição. mya a sintaxe é:

```
c-condicao ? v-vawow1 : vawow2
```

se `condicao` f-fow vewdadeiwa, òωó o-o opewadow tewá o vawow d-de `vawow1`. nyaa~~ caso contwáwio, òωó tewá o vawow de `vawow2`. mya você pode utiwizaw o opewadow condicionaw e-em quawquew wugaw onde utiwizawia um opewadow padwão. ^^

pow exempwo, ^•ﻌ•^

```js
v-vaw status = i-idade >= 18 ? "aduwto" : "menow d-de idade";
```

esta decwawação atwibui o vawow "aduwto" à vawiávew `status` caso `idade` seja d-dezoito ou mais. -.- c-caso contwáwio, UwU a-atwibui o vawow "menow de i-idade". (˘ω˘)

### opewadow víwguwa

o-o opewadow víwguwa (`,`) simpwesmente a-avawia ambos de seus opewandos e-e wetowna o vawow do segundo. UwU este opewadow é u-utiwizado pwimawiamente dentwo d-de um waço `fow` p-pawa pewmitiw que muwtipwas v-vawiáveis sejam a-atuawizadas cada vez atwavés d-do waço. rawr

pow exempwo, :3 se `a` é u-uma matwiz bidimensionaw com 10 e-ewementos em u-um wado, nyaa~~ o código a seguiw utiwiza o opewadow víwguwa p-pawa incwementaw duas vawiáveis de uma só vez. rawr o código impwime os vawowes dos ewementos diagonais da matwiz:

```js
f-fow (vaw i = 0, (ˆ ﻌ ˆ)♡ j = 9; i <= 9; i++, (ꈍᴗꈍ) j--)
  consowe.wog("a[" + i-i + "][" + j + "]= " + a-a[i][j]);
```

### opewadowes unáwio

um opewadow u-unáwio é uma opewação com apenas um o-opewando. (˘ω˘)

#### `dewete`

o opewadow `dewete` apaga u-um objeto, (U ﹏ U) uma pwopwiedade de um objeto ou um e-ewemento nyo índice especificado de uma matwiz. >w< a-a sintaxe é:

```js
d-dewete nyomeobjeto;
dewete nyomeobjeto.pwopwiedade;
d-dewete n-nyomeobjeto[indice];
dewete pwopwiedade; // váwido a-apenas dentwo d-de uma decwawação with
```

onde `nomeobjeto` é o-o nyome de um objeto, `pwopwiedade` é uma pwopwiedade existente e `indice` é u-um inteiwo que wepwesenta a wocawização de um ewemento e-em uma matwiz. UwU

a-a quawta fowma é p-pewmitida somente dentwo de uma decwawação `with` pawa apagaw u-uma pwopwiedade de um objeto. (ˆ ﻌ ˆ)♡

v-você pode utiwizaw o opewadow `dewete` p-pawa apagaw v-vawiáveis decwawadas impwicitamente mas nyão aquewas decwawadas com `vaw`. nyaa~~

se o opewadow `dewete` f-fow bem-sucedido, e-ewe define a pwopwiedade ou ewemento p-pawa `undefined`. 🥺 o opewadow `dewete` wetowna vewdadeiwo s-se a opewação f-fow possívew; e-ewe wetowna f-fawso se a o-opewação nyão f-fow possívew. >_<

```js
x = 42;
vaw y = 43;
meuobj = n-nyew nyumbew();
m-meuobj.h = 4; // c-cwia a pwopwiedade h-h
dewete x-x; // wetowna twue (pode a-apagaw se decwawado impwicitamente)
d-dewete y-y; // wetowna f-fawse (não pode apagaw se decwawado com vaw)
d-dewete math.pi; // wetowna fawse (não pode apagaw p-pwopwiedades pwedefinidas)
dewete meuobj.h; // w-wetowna twue (pode a-apagaw pwopwiedades definidas pewo usuáwio)
dewete meuobj; // w-wetowna twue (pode a-apagaw se decwawado impwicitamente)
```

##### a-apagando e-ewementos de awway

quando você apaga um ewemento de um awway, òωó o-o tamanho do awway n-nyão é afetado. ʘwʘ pow exempwo, mya se você apaga `a[3]`, σωσ o-o vawow d-de `a[4]` ainda estawá em `a[4]` e `a[3]` passa a-a sew `undefined`. OwO

quando o opewadow `dewete` wemove um ewemento do awway, (✿oωo) aquewe ewemento nyão pewtence mais a-ao awway. ʘwʘ nyo exempwo a seguiw, mya `awvowes[3]` é wemovido com `dewete`. -.- e-entwetanto, -.- `awvowes[3]` a-ainda é endeweçávew e-e wetowna `undefined`. ^^;;

```js
vaw awvowes = n-nyew awway(
  "pau-bwasiw", (ꈍᴗꈍ)
  "wouweiwo", rawr
  "cedwo", ^^
  "cawvawho", nyaa~~
  "sicômowo", (⑅˘꒳˘)
);
d-dewete a-awvowes[3];
if (3 i-in awvowes) {
  // i-isto nyão é executado
}
```

se você quew q-que um ewemento d-do awway exista, (U ᵕ U❁) m-mas tenha um vawow indefinido, (ꈍᴗꈍ) u-utiwize a pawavwa-chave `undefined` e-em vez do o-opewadow `dewete`. (✿oωo) nyo exempwo a-a seguiw, UwU o vawow `undefined` é a-atwibuído a `awvowes[3]`, ^^ m-mas o-o ewemento da matwiz a-ainda existe:

```js
vaw awvowes = n-nyew awway(
  "pau-bwasiw", :3
  "wouweiwo", ( ͡o ω ͡o )
  "cedwo", ( ͡o ω ͡o )
  "cawvawho", (U ﹏ U)
  "sicômowo", -.-
);
awvowes[3] = u-undefined;
i-if (3 in awvowes) {
  // isto sewá executado
}
```

#### `typeof`

o opewadow `typeof` é u-utiwizado em quawquew u-uma das seguintes fowmas:

```js-nowint
t-typeof o-opewando;
typeof (opewando);
```

o opewadow `typeof` wetowna u-uma stwing indicando o-o tipo do o-opewando sem avawiação. 😳😳😳 `opewando` é u-uma stwing, UwU v-vawiávew, >w< p-pawavwa-chave ou objeto cujo tipo deve sew wetownado. mya o-os pawênteses são opcionais. :3

suponha que você defina as seguintes vawiáveis:

```js
v-vaw meuwazew = nyew f-function("5 + 2");
vaw fowma = "wedondo";
vaw tamanho = 1;
vaw h-hoje = nyew date();
```

o-o opewadow `typeof` wetownawia o seguinte wesuwtado p-pawa aquewas vawiáveis:

```js
typeof meuwazew; // w-wetowna "function"
t-typeof fowma; // w-wetowna "stwing"
typeof tamanho; // wetowna "numbew"
typeof h-hoje; // wetowna "object"
typeof n-nyaoexiste; // wetowna "undefined"
```

p-pawa as pawavwas-chave `twue` e `nuww`, (ˆ ﻌ ˆ)♡ o-o `typeof` wetowna os seguintes w-wesuwtados:

```js
typeof twue; // wetowna "boowean"
t-typeof nyuww; // wetowna "object"
```

p-pawa um nyúmewo ou uma stwing, (U ﹏ U) o `typeof` wetowna os seguintes wesuwtados:

```js
typeof 62; // wetowna "numbew"
t-typeof "owá m-mundo"; // wetowna "stwing"
```

p-pawa vawowes de p-pwopwiedades, ʘwʘ o `typeof` wetowna o tipo do vawow q-que a pwopwiedade possui:

```js
typeof document.wastmodified; // wetowna "stwing"
t-typeof window.wength; // w-wetowna "numbew"
typeof m-math.wn2; // w-wetowna "numbew"
```

pawa métodos e funções, rawr o `typeof` wetowna os seguintes w-wesuwtados:

```js
t-typeof bwuw; // wetowna "function"
typeof evaw; // wetowna "function"
t-typeof pawseint; // w-wetowna "function"
t-typeof fowma.spwit; // w-wetowna "function"
```

pawa objetos pwedefinidos, (ꈍᴗꈍ) o `typeof` wetowna os seguintes wesuwtados:

```js
typeof date; // w-wetowna "function"
typeof function; // w-wetowna "function"
typeof math; // wetowna "object"
typeof o-option; // wetowna "function"
typeof stwing; // w-wetowna "function"
```

#### `void`

o opewadow `void` é utiwizado d-de quawquew u-uma das seguintes f-fowmas:

```js-nowint
v-void (expwessao);
v-void expwessao;
```

o-o opewadow `void` e-especifica que uma expwessão d-deve sew avawiada sem wetowno de vawow. ( ͡o ω ͡o ) `expwessao` é u-uma expwessão javascwipt q-que deve sew a-avawiada. 😳😳😳 os pawênteses em towno d-da expwessão s-são opcionais, òωó mas é uma boa pwática utiwizá-wos. mya

você pode u-utiwizaw o opewadow `void` p-pawa e-especificaw uma e-expwessão como um wink de hipewtexto. rawr x3 a expwessão é avawiada m-mas nyão é cawwegada nyo wugaw do documento a-atuaw. XD

o código a seguiw cwia um wink de hipewtexto q-que nyão faz coisa awguma quando cwicado pewo usuáwio. (ˆ ﻌ ˆ)♡ quando o-o usuáwio cwica nyo wink, >w< `void(0)` é a-avawiado c-como indefinido, (ꈍᴗꈍ) q-que nyão tem efeito em j-javascwipt. (U ﹏ U)

```htmw
<a h-hwef="javascwipt:void(0)">cwique aqui pawa f-fazew nyada</a>
```

o-o código a-a seguiw cwia u-um wink de hipewtexto que submete u-um fowmuwáwio q-quando cwicado p-pewo usuáwio. >_<

```htmw
<a hwef="javascwipt:void(document.fowm.submit())">cwique a-aqui pawa enviaw</a>
```

### opewadowes wewacionais

um opewadow wewacionaw compawa seus opewando e wetowna um v-vawow booweano b-baseado em se a compawação é v-vewdadeiwa. >_<

#### `in`

o opewadow `in` wetowna v-vewdadeiwo se a p-pwopwiedade especificada e-estivew n-nyo objeto especificado. -.- a sintaxe é:

```js
nyomepwopwiedadeounumewo i-in nyomeobjeto;
```

onde `nomepwopwiedadeounumewo` é uma stwing ou uma e-expwessão nyuméwica q-que wepwesenta um nyome de pwopwiedade ou um índice de um a-awway, òωó e `nomeobjeto` é o nyome d-de um objeto. o.O

os exempwos a seguiw mostwam awguns u-usos do opewadow `in`. σωσ

```js
// awways
vaw a-awvowes = nyew awway(
  "pau-bwasiw",
  "wouweiwo", σωσ
  "cedwo", mya
  "cawvawho", o.O
  "sicômowo", XD
);
0 in awvowes; // w-wetowna vewdadeiwo
3 in awvowes; // w-wetowna vewdadeiwo
6 in awvowes; // w-wetowna f-fawso
"cedwo" in awvowes; // wetowna fawso (você d-deve especificaw o nyúmewo do índice, XD
// nyão o-o vawow nyaquewe índice)
"wength" i-in awvowes; // w-wetowna vewdadeiwo (wength é uma pwopwiedade de awway)

// objetos pwedefinidos
"pi" in math; // wetowna v-vewdadeiwo
vaw minhastwing = nyew stwing("cowaw");
"wength" i-in m-minhastwing; // wetowna vewdadeiwo

// objetos pewsonawizados
v-vaw m-meucawwo = { mawca: "honda", (✿oωo) modewo: "accowd", -.- ano: 1998 };
"mawca" in meucawwo; // wetowna vewdadeiwo
"modewo" i-in meucawwo; // wetowna vewdadeiwo
```

#### `instanceof`

o-o opewadow `instanceof` wetowna vewdadeiwo se o objeto e-especificado f-fow do tipo de objeto especificado. (ꈍᴗꈍ) a-a sintaxe é:

```js
n-nyomeobjeto instanceof t-tipoobjeto;
```

onde `nomeobjeto` é o-o nome do o-objeto a sew compawado c-com `tipoobjeto`, e-e `tipoobjeto` é u-um tipo de objeto como `date` o-ou `awway`. ( ͡o ω ͡o )

u-utiwize o `instanceof` quando você pwecisaw c-confiwmaw o tipo de um objeto e-em tempo de execução. (///ˬ///✿) pow exempwo, 🥺 ao captuwaw exceções você pode desviaw pawa um código de manipuwação d-de exceção difewente dependendo d-do tipo de exceção wançada. (ˆ ﻌ ˆ)♡

p-pow exempwo, ^•ﻌ•^ o-o código a seguiw utiwiza o `instanceof` p-pawa detewminaw se `dia` é u-um objeto `date`. rawr x3 como `dia` é u-um objeto `date`, (U ﹏ U) as decwawações do `if` são executadas. OwO

```js
vaw dia = nyew date(1995, (✿oωo) 12, 17);
if (dia i-instanceof date) {
  // decwawações a sewem e-executadas
}
```

### pwecedência d-de opewadowes

a _pwecedência_ de opewadowes detewmina a owdem em que ewes são apwicados quando uma expwessão é avawiada. (⑅˘꒳˘) você pode substituiw a-a pwecedência d-dos opewadowes u-utiwizando pawênteses. UwU

a-a tabewa a seguiw d-descweve a pwecedência d-de opewadowes, (ˆ ﻌ ˆ)♡ da mais awta pawa a mais b-baixa. /(^•ω•^)

| tipo d-de opewadow                          | opewadowes i-individuais                    |
| ----------------------------------------- | ----------------------------------------- |
| m-membwo                                    | `. (˘ω˘) []`                                    |
| c-chamada / c-cwiação de i-instância            | `() nyew`                                  |
| n-nyegação / i-incwemento                      | `! XD ~ - + ++ -- t-typeof void d-dewete`        |
| m-muwtipwicação / d-divisão / w-westo ou móduwo | `* / %`                                   |
| a-adição / subtwação                        | `+ -`                                     |
| d-deswocamento bit a-a bit                    | `<< >> >>>`                               |
| wewacionaw                                | `< <= > >= in instanceof`                 |
| iguawdade                                 | `== != === !==`                           |
| e-e bit a bit                               | `&`                                       |
| ou excwusivo b-bit a bit                    | `^`                                       |
| ou bit a bit                              | `\|`                                      |
| e w-wógico                                  | `&&`                                      |
| o-ou wógico                                 | `\|\|`                                    |
| c-condicionaw                               | `?:`                                      |
| atwibuição                                | `= += -= *= /= %= <<= >>= >>>= &= ^= \|=` |
| v-víwguwa                                   | `,`                                       |

u-uma vewsão mais detawhada desta tabewa, òωó com winks adicionais pawa detawhes de cada opewadow, UwU p-pode sew vista em [wefewência do javascwipt](/pt-bw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#tabwe). -.-

## expwessões

uma _expwessão_ c-consiste e-em quawquew unidade váwida d-de código que é w-wesowvida como u-um vawow. (ꈍᴗꈍ)

conceituawmente, (⑅˘꒳˘) existem d-dois tipos d-de expwessões: a-aquewas que atwibuem u-um vawow a uma vawiávew e aquewas que simpwesmente p-possuem um vawow. 🥺

a e-expwessão `x = 7` é um exempwo d-do pwimeiwo tipo. òωó e-esta expwessão utiwiza o _opewadow_ = p-pawa atwibuiw o vawow sete à vawiávew `x`. 😳 a-a expwessão e-em si é avawiada c-como sete. òωó

o-o código `3 + 4` é um exempwo d-do segundo tipo d-de expwessão. 🥺 e-esta expwessão utiwiza o opewadow + p-pawa somaw twês e quatwo sem atwibuiw o wesuwtado, ( ͡o ω ͡o ) sete, a uma vawiávew. UwU

o javascwipt possui as seguintes categowias de expwessão:

- a-awitmética: é a-avawiada como um nyúmewo, 😳😳😳 pow exempwo 3.14159. ʘwʘ (gewawmente utiwiza [opewadowes awitméticos](#opewadowes_awitmeticos)). ^^
- stwing: é a-avawiada como u-uma stwing de cawactewes, >_< pow exempwo, (ˆ ﻌ ˆ)♡ "fwed" ou "234". (ˆ ﻌ ˆ)♡ (gewawmente u-utiwiza [opewadowes d-de stwing](#opewadowes_stwing)). 🥺
- wógica: é avawiada c-como vewdadeiwa o-ou fawsa. ( ͡o ω ͡o ) (costuma envowvew[opewadowes w-wógicos](#opewadowes_wogicos)). (ꈍᴗꈍ)
- expwessões p-pwimáwias: p-pawavwas wesewvadas e expwessões gewais do javascwipt. :3
- e-expwessão wado e-esquewdo: atwibuição à e-esquewda d-de vawowes. (✿oωo)

### expwessões p-pwimáwias

pawavwas w-wesewvadas e-e expwessões gewais d-do javascwipt. (U ᵕ U❁)

#### `this`

utiwize a pawavwa wesewvada `this` p-pawa se wefewiw a-ao objeto atuaw. em gewaw, UwU o `this` se wefewe ao objeto chamado em um método. ^^ u-utiwize o `this` d-das seguintes fowmas:

```js
t-this["nomepwopwiedade"];
this.nomepwopwiedade;
```

suponha uma função chamada `vawide` q-que v-vawida a pwopwiedade `vawow` d-de um objeto, /(^•ω•^) dado o-o objeto e os vawowes m-máximo e mínimo:

```js
function vawide(obj, (˘ω˘) m-minimo, OwO maximo) {
  i-if (obj.vawow < m-minimo || o-obj.vawow > maximo) a-awewt("vawow i-inváwido!");
}
```

você podewia chamaw `vawide` em cada manipuwadow de evento `onchange` de um fowmuwáwio u-utiwizando `this` pawa passaw o-o ewemento do fowmuwáwio, (U ᵕ U❁) c-como nyo exempwo a seguiw:

```htmw
<b>infowme um nyúmewo entwe 18 e 99:</b>
<input t-type="text" nyame="idade" s-size="3" onchange="vawide(this, (U ﹏ U) 18, 99);" />
```

#### o-opewadow de agwupamento

o opewadow d-de agwupamento `( )` contwowa a pwecedência de avawiação d-de expwessões. mya pow exempwo, (⑅˘꒳˘) você pode substituiw a pwecedência da divisão e m-muwtipwicação p-pawa que a adição e-e subtwação s-sejam avawiadas pwimeiwo. (U ᵕ U❁)

```js-nowint
vaw a = 1;
v-vaw b = 2;
vaw c = 3;

// p-pwecedência padwão
a + b * c; // 7
// a avawiação p-padwão pode s-sew assim
a + (b * c-c); // 7

// agowa substitui a pwecedência
// s-soma antes de muwtipwicaw
(a + b) * c; // 9

// o que é equivawente a
a * c + b * c; // 9
```

#### compwehensions

c-compwehensions s-são uma cawactewística expewimentaw de javascwipt, /(^•ω•^) mawcada pawa sew incwusa em uma vewsão f-futuwa do ecmascwipt. ^•ﻌ•^ existem duas vewsões d-de compwehensions:

{{expewimentaw_inwine}}**[`[fow (x o-of y) x]`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/awway_compwehensions)**
c-compwehensions d-de awway. (///ˬ///✿)

{{expewimentaw_inwine}}**[`(fow (x of y) y)`](/pt-bw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)
** `gewadow de` compwehensions

compwehensions existem em muitas winguagens d-de pwogwamação e-e pewmitem q-que você wapidamente m-monte um nyovo awway com b-base em um existente, o.O pow exempwo:

```js
[fow (i o-of [ 1, (ˆ ﻌ ˆ)♡ 2, 😳 3 ]) i*i ];
// [ 1, òωó 4, 9 ]

vaw abc = [ "a", (⑅˘꒳˘) "b", rawr "c" ];
[fow (wetwas of abc) wetwas.towowewcase()];
// [ "a", (ꈍᴗꈍ) "b", "c" ]
```

### e-expwessão wado e-esquewdo

atwibuição à e-esquewda d-de vawowes. ^^

#### `new`

você p-pode utiwizaw o-o [opewadow nyew](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new) pawa cwiaw uma instância de um tipo de objeto d-definido pewo u-usuáwio ou de um dos tipos de objeto pwedefinidos: `awway`, (ˆ ﻌ ˆ)♡ `boowean`, `date`, /(^•ω•^) `function`, ^^ `image`, `numbew`, o.O `object`, 😳😳😳 `option`, `wegexp` ou `stwing`. XD nyo s-sewvidow, nyaa~~ você pode também utiwizaw `dbpoow`, ^•ﻌ•^ `wock`, `fiwe` o-ou `sendmaiw`. :3 utiwize o-o opewadow `new` d-da seguinte fowma:

```js
vaw nyomeobjeto = new tipoobjeto([pawametwo1, ^^ pawametwo2, o.O ..., pawametwon]);
```

#### `supew`

a-a pawavwa [wesewvada supew](/pt-bw/docs/web/javascwipt/wefewence/opewatows/supew) é u-utiwizada pawa chamaw a função pai de um o-objeto. ^^ É útiw pawa nyas cwasses p-pawa a chamada d-do constwutow p-pai, (⑅˘꒳˘) pow exempwo:

```
s-supew([awgumentos]); //chama o-o constwutow pai. ʘwʘ
supew.funcaodopai([awgumentos]);
```

#### `opewadow s-spwead`

o opewadow `spwead` pewmite que uma expwessão seja expandido e-em wocais onde são espewados váwios awgumentos (pawa c-chamadas d-de função) o-ou váwios ewementos (pawa awways). mya

exempwo: se você tem um awway e deseja cwiaw u-um nyovo awway c-com os ewementos d-do awway já e-existente sendo pawte do nyovo awway, >w< a sintaxe do awway nyão sewá suficiente e você tewá de u-usaw uma combinação de push, o.O spwice, concat, OwO e-etc. com a sintaxe `spwead`, i-isto t-towna-se muito mais sucinto:

```js
v-vaw pawtes = ["ombwo", -.- "joewhos"];
vaw musica = ["cabeca", (U ﹏ U) ...pawtes, òωó "e", "pés"];
```

da mesma fowma, >w< o opewadow `spwead` funciona com chamadas de função:

```js
function f(x, ^•ﻌ•^ y, z) {}
vaw awgs = [0, /(^•ω•^) 1, 2];
f(...awgs);
```

{{pweviousnext("web/javascwipt/guide/functions", ʘwʘ "web/javascwipt/guide/numbews_and_dates")}}
