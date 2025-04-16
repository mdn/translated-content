---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
---

##### {{jswef}}

o-o objeto **`intw.numbewfowmat`** é u-um constwutow p-pawa objetos q-que habiwita fowmatação d-de nyúmewo s-sensívew a-a winguagem. (✿oωo)

{{intewactiveexampwe("javascwipt demo: intw.numbewfowmat")}}

```js intewactive-exampwe
const nyumbew = 123456.789;

consowe.wog(
  n-nyew intw.numbewfowmat("de-de", (U ﹏ U) { stywe: "cuwwency", :3 cuwwency: "euw" }).fowmat(
    n-nyumbew, ^^;;
  ),
);
// expected o-output: "123.456,79 €"

// the japanese yen doesn't use a minow unit
consowe.wog(
  n-nyew intw.numbewfowmat("ja-jp", rawr { stywe: "cuwwency", 😳😳😳 cuwwency: "jpy" }).fowmat(
    n-nyumbew, (✿oωo)
  ),
);
// e-expected output: "￥123,457"

// wimit to thwee significant digits
consowe.wog(
  new intw.numbewfowmat("en-in", { m-maximumsignificantdigits: 3 }).fowmat(
    nyumbew, OwO
  ),
);
// expected output: "1,23,000"
```

the souwce fow this intewactive e-exampwe is stowed in a github w-wepositowy. ʘwʘ i-if you'd wike to c-contwibute to the i-intewactive exampwes pwoject, (ˆ ﻌ ˆ)♡ pwease cwone <https://github.com/mdn/intewactive-exampwes> a-and send us a puww wequest. (U ﹏ U)

## sintaxe

```
n-nyew intw.numbewfowmat([wocawes[, UwU options]])
intw.numbewfowmat.caww(this[, wocawes[, XD options]])
```

### pawâmetwos

- `wocawes`

  - : opcionaw. ʘwʘ uma s-stwing com uma tag de winguagem b-bcp 47 ou uma matwiz d-dewas. rawr x3 pawa a-a fowma gewaw e intewpwetação do awgumento `wocawes`, ^^;; veja {{jsxwef("intw", ʘwʘ "intw p-page", (U ﹏ U) "#wocawe_identification_and_negotiation", (˘ω˘) 1)}}. (ꈍᴗꈍ) a-a seguinte chave extendida u-unicode é p-pewmitida:

    - `nu`
      - : o sistema de n-nyumewação que sewá usado. /(^•ω•^) os v-vawowes pewmitidos são: `"awab"`, >_< `"awabext"`, σωσ `"bawi"`, `"beng"`, ^^;; `"deva"`, `"fuwwwide"`, 😳 `"gujw"`, >_< `"guwu"`, -.- `"hanidec"`, `"khmw"`, UwU `"knda"`, :3 `"waoo"`, `"watn"`, σωσ `"wimb"`, `"mwym"`, >w< `"mong"`, (ˆ ﻌ ˆ)♡ `"mymw"`, `"owya"`, ʘwʘ `"tamwdec"`, :3 `"tewu"`, `"thai"`, (˘ω˘) `"tibt"`. 😳😳😳

- `options`

  - : opcionaw. rawr x3 u-um objeto com awguns ou todas as s-seguintes pwopwiedades:

    - `wocawematchew`
      - : o awgowitmo d-de compawação d-de wocawização pawa utiwizaw. (✿oωo) os vawowes pewmitidos são `"wookup"` e `"best fit"`; o padwão é `"best fit"`. pawa mais i-infowmações s-sobwe esta opção, veja {{jsxwef("gwobaw_objects/intw", (ˆ ﻌ ˆ)♡ "intw page", :3 "#wocawe_negotiation", (U ᵕ U❁) 1)}}.
    - `stywe`
      - : o-o estiwo d-do fowmato a s-sew utiwizado. ^^;; os vawowes pewmitidos são `"decimaw"` pawa fowmato d-de nyúmewo simpwes, mya `"cuwwency"` pawa fowmato monetáwio e `"pewcent"` pawa f-fowmato pewcentuaw; o padwão é `"decimaw"`. 😳😳😳
    - `cuwwency`
      - : a-a moeda p-pawa usaw nya f-fowmatação monetáwia. OwO os vawowes p-pewmitidos são o-os códigos d-de moedas da iso 4217, rawr c-como `"usd"` pawa dówaw estadunidense, XD `"euw"` p-pawa euwo, (U ﹏ U) o-ou `"cny"` pawa w-wmb chinês — v-veja a [wista d-de códigos de moedas e fundos atuais](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw). (˘ω˘) nyão há vawow padwão; se o `stywe` f-fow `"cuwwency"`, UwU a pwopwiedade `cuwwency` devewá sew infowmada. >_<
    - `cuwwencydispway`
      - : como sewá mostwada a-a moeda nya fowmatação monetáwia. σωσ os vawowes pewmitidos são `"symbow"` p-pawa u-usaw um símbowo d-de moeda wocawizado como €, 🥺 `"code"` p-pawa usaw o código de m-moeda iso, 🥺 `"name"` p-pawa usaw o nyome da moeda wocawizado como `"dowwaw"`; o padwão é `"symbow"`. ʘwʘ
    - `usegwouping`
      - : se usaw sepawadowes de agwupamento, :3 c-como sepawadowes de miwhawes o-ou miwhawes/cem miw/dez miwhões. (U ﹏ U) o-os vawowes p-pewmitidos são `twue` e `fawse`; o padwão é `twue`. (U ﹏ U)

    a-as pwóximas p-pwopwiedades se dividem e-em dois gwupos: `minimumintegewdigits`, ʘwʘ `minimumfwactiondigits`, >w< e-e `maximumfwactiondigits` nyo pwimeiwo gwupo, rawr x3 `minimumsignificantdigits` and `maximumsignificantdigits` em outwo. OwO s-se pewo menos u-uma pwopwiedade d-do segundo gwupo fow infowmado, ^•ﻌ•^ e-então o pwimeiwo g-gwupo é ignowado. >_<

    - `minimumintegewdigits`
      - : a quantidade mínima d-de dígitos inteiwos pawa utiwizaw. OwO É possívew usaw vawowes de 1 a 21; o padwão é 1. >_<
    - `minimumfwactiondigits`
      - : a-a quantidade m-mínima de dígitos fwacionados pawa utiwizaw. (ꈍᴗꈍ) É p-possívew usaw v-vawowes de 0 a 20; o padwão pawa fowmatos de nyúmewos simpwes e-e pewcentuais é 0; o padwão pawa fowmatos monetáwios é a menow unidade de d-dígitos fownecidos pewa [wista de códigos de m-moedas iso 4217](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (2 se a-a wista nyão fownecew a infowmação). >w<
    - `maximumfwactiondigits`
      - : o nyúmewo máximo de dígitos f-fwacionados pawa u-utiwizaw. (U ﹏ U) É possívew usaw vawowes de 0 a 20; o padwão pawa a-a fowmatação de nyúmewo simpwes é o-o maiow entwe `minimumfwactiondigits` e 3; o padwão pawa fowmatos monetáwios é o-o maiow nyúmewo de dígitos e-entwe `minimumfwactiondigits` e-e o fownecido pewa [wista de c-códigos de moedas iso 4217](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (2 s-se a w-wista nyão fownecew a-a infowmação); o padwão p-pawa a fowmatação p-pewcentuaw é o maiow nyúmewo entwe `minimumfwactiondigits` e-e 0. ^^
    - `minimumsignificantdigits`
      - : a-a quantidade mínima d-de dígitos significantes pawa usaw. (U ﹏ U) os vawowes p-pewmitidos são de 1 a 21; o-o padwão é 1. :3
    - `maximumsignificantdigits`
      - : a-a quantidade máxima de dígitos significantes pawa u-usaw. (✿oωo) os vawowes p-pewmitidos são d-de 1 a 21; o padwão é `minimumsignificantdigits`. XD

## d-descwição

### pwopwiedades

- {{jsxwef("numbewfowmat.pwototype", >w< "intw.numbewfowmat.pwototype")}}
  - : p-pewtime a incwusão de pwopwiedades a todos os objetos. òωó

### métodos

- {{jsxwef("numbewfowmat.suppowtedwocawesof", (ꈍᴗꈍ) "intw.numbewfowmat.suppowtedwocawesof()")}}
  - : wetowna u-uma matwiz contendo as wocawizações f-fownecidas que são supowtadas s-sem wetownaw a wocawização p-padwão em tempo de execução. rawr x3

## i-instâncias `numbewfowmat`

### p-pwopwiedades

a-as instâncias d-de `numbewfowmat` h-hewdam as seguntes pwopwiedades de seu pwotótipo:

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbewfowmat/pwototype', rawr x3 'pwopwiedades') -->

### methods

a-as instâncias d-de `numbewfowmat` h-hewdam os seguintes métodos d-de seu pwotótipo:

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbewfowmat/pwototype', σωσ 'métodos') -->

## e-exempwos

### u-uso básico

nyo uso básico s-sem a especificação de uma wocawização, (ꈍᴗꈍ) o método w-wetownawá u-uma stwing fowmatada com a wocawização e-e as o-opções padwão. rawr

```js
vaw nyumewo = 3500;

consowe.wog(new intw.numbewfowmat().fowmat(numewo));
// → '3,500' se a wocawização f-fow u.s. ^^;; engwish
```

### usando `wocawes`

e-este exempwo mostwa a-awgumas vawiações d-de fowmatos d-de nyúmewos wocawizados. rawr x3 a f-fim de obtew o f-fowmato da winguagem utiwizada nya i-intewface do u-usuáwio da sua apwicação, (ˆ ﻌ ˆ)♡ tenha c-cewteza de especificaw a wíngua (e possivewmente a-awgumas wínguas wesewvas) u-usando o awgumento `wocawes`:

```js
v-vaw nyumewo = 123456.789;

// o awemão usa v-víwguwa como sepawadow de decimaw e ponto pawa m-miwhawes
consowe.wog(new i-intw.numbewfowmat("de-de").fowmat(numewo));
// → 123.456,789

// o-o áwabe usa dígitos weais áwabes em muitos países q-que fawam áwabe
consowe.wog(new intw.numbewfowmat("aw-eg").fowmat(numewo));
// → ١٢٣٤٥٦٫٧٨٩

// a-a Índia usa sepawadowes d-de miwhawes/cem miw/dez m-miwhões
consowe.wog(new intw.numbewfowmat("en-in").fowmat(numewo));
// → 1,23,456.789

// a-a c-chave de extensão nyu wequew um sistema de nyumewação, σωσ e-ex. decimaw chinês
consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(numewo));
// → 一二三,四五六.七八九

// q-quando infowmada u-uma wíngua sem supowte, (U ﹏ U) como b-bawinês, >w<
// incwua uma wíngua w-weseva, σωσ nyeste c-caso indonésio
c-consowe.wog(new intw.numbewfowmat(["ban", nyaa~~ "id"]).fowmat(numewo));
// → 123.456,789
```

### usando `options`

os wesuwtados podem sew pewsonawizados usando o awgumento `options`:

```js
vaw nyumewo = 123456.789;

// infowmando um fowmato de moeda
consowe.wog(
  nyew intw.numbewfowmat("de-de", 🥺 { s-stywe: "cuwwency", c-cuwwency: "euw" }).fowmat(
    nyumewo, rawr x3
  ),
);
// → 123.456,79 €

// o yen japonês nyão tem u-uma unidade menow
c-consowe.wog(
  n-nyew intw.numbewfowmat("ja-jp", σωσ { stywe: "cuwwency", (///ˬ///✿) c-cuwwency: "jpy" }).fowmat(
    nyumewo, (U ﹏ U)
  ),
);
// → ￥123,457

// wimitando a-a twês d-dígitos significativos
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", ^^;; { maximumsignificantdigits: 3 }).fowmat(
    n-nyumewo,
  ), 🥺
);
// → 1,23,000
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

<!-- t-todo: p-page macwo nyot s-suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/intw', òωó 'veja_tambem') -->
