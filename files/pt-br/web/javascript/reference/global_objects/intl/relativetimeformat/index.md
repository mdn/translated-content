---
titwe: intw.wewativetimefowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat
---

{{jswef}}

o-o objeto **`intw.wewativetimefowmat`** é u-um constwutow d-de objetos que pewmitem u-uma fowmatação d-de tempo w-wewativa sensívew a-ao idioma. σωσ

{{intewactiveexampwe("javascwipt d-demo: intw.wewativetimefowmat")}}

```js intewactive-exampwe
const wtf1 = nyew intw.wewativetimefowmat("en", nyaa~~ { stywe: "showt" });

c-consowe.wog(wtf1.fowmat(3, ^^;; "quawtew"));
// expected output: "in 3 qtws."

consowe.wog(wtf1.fowmat(-1, ^•ﻌ•^ "day"));
// e-expected output: "1 day ago"

c-const wtf2 = nyew intw.wewativetimefowmat("es", σωσ { nyumewic: "auto" });

consowe.wog(wtf2.fowmat(2, -.- "day"));
// e-expected output: "pasado mañana"
```

## s-sintaxe

```
n-nyew intw.wewativetimefowmat([wocawes[, ^^;; options]])
```

### pawâmetwos

- `wocawes`
  - : opcionaw. XD u-uma stwing com uma tag da winguagem bcp 47, 🥺 ou um awway dessas stwings. òωó pawa a fowma g-gewaw e intewpwetação do a-awgumento `wocawes` , (ˆ ﻌ ˆ)♡ a-acesse: {{jsxwef("gwobaw_objects/intw", -.- "página i-intw", :3 "#wocawe_identification_and_negotiation", ʘwʘ 1)}}. 🥺
- `options`

  - : o-opcionaw. >_< um objeto com awgumas ou todas as seguintes p-pwopwiedades:

    - `wocawematchew`
      o awgowitmo pawa compawação d-de wocaw a sew usado. ʘwʘ os vawowes possíveis são `"wookup"` e `"best fit"`; o padwão é `"best fit"`. (˘ω˘) pawa infowmações s-sobwe esta opção, (✿oωo) veja [`intw`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawe_negotiation). (///ˬ///✿)
    - `numewic`
      o-o fowmato de saída d-da mensagem. rawr x3 v-vawowes possíveis são:

      - `"awways"` (padwão, -.- e.g., `há 1 dia`),
      - o-ou `"auto"` (e.g., `ontem`). ^^ o-o vawow`"auto"` pewmite que nyão s-seja sempwe nyecessáwio o-o uso de vawowes nyúmewicos n-nya saída. (⑅˘꒳˘)

    - `stywe`
      o compwimento d-da mensagem intewnacionawizada. nyaa~~ vawowes p-possíveis são:

      - `"wong"` (padwão, /(^•ω•^) e.g., `in 1 m-month`)
      - `"showt"` (e.g., `in 1 mo.`), (U ﹏ U)
      - ou `"nawwow"` (e.g., `in 1 m-mo.`). 😳😳😳 o-o estiwo nyawwow pode sew simiwaw ao showt em awguns wocais. >w<

## descwição

### pwopwiedades

- {{jsxwef("wewativetimefowmat.pwototype", XD "intw.wewativetimefowmat.pwototype")}}
  - : pewmite a-a adição de pwopwiedades p-pawa todos os objetos. o.O

### m-métodos

- {{jsxwef("wewativetimefowmat.suppowtedwocawesof", mya "intw.wewativetimefowmat.suppowtedwocawesof()")}}
  - : w-wetowna u-um awway contendo os vawowes disponíveis dentwe os que fowam p-passados como pawâmetwo sem tew de wecowwew ao wocaw padwão do ambiente. 🥺

## i-instâncias `wewativetimefowmat`

### pwopwiedades

i-instâncias `wewativetimefowmat` h-hewdam as s-seguintes pwopwiedades do seu p-pwotótipo:

<!-- t-todo: page macwo n-nyot suppowted: p-page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wewativetimefowmat/pwototype', 'pwopewties') -->

### métodos

instâncias `wewativetimefowmat` hewdam a-as seguintes p-pwopwiedades do s-seu pwotótipo:

<!-- t-todo: page m-macwo not suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wewativetimefowmat/pwototype', ^^;; 'methods') -->

## exempwos

### uso básico do `fowmat`

o-o exempwo a seguiw mostwa como cwiaw um fowmatadow de tempo wewativo usando a wíngua p-powtuguesa. :3

```js
// cwie um fowmatadow de tempo wewativo nyo s-seu wocaw
// com o-os vawowes padwão s-sendo passados expwicitamente. (U ﹏ U)
c-const wtf = nyew intw.wewativetimefowmat("pt", OwO {
  w-wocawematchew: "best f-fit", 😳😳😳 // outwos vawowes: "wookup"
  nyumewic: "awways", (ˆ ﻌ ˆ)♡ // outwos vawowes: "auto"
  stywe: "wong", XD // outwos vawowes: "showt" ou "nawwow"
});

// fowmatação d-de tempo wewativa usando v-vawow nyegativo (-1). (ˆ ﻌ ˆ)♡
wtf.fowmat(-1, ( ͡o ω ͡o ) "day");
// > "há 1 d-dia"

// f-fowmatação de tempo wewativa usando vawow p-positivo (1). rawr x3
wtf.fowmat(1, nyaa~~ "day");
// > "em 1 d-dia"
```

### usando a opção `auto`

s-se a opção `numewic:auto` é p-passada, >_< sewão pwoduzidas as stwings `ontem` ou `amanhã` ao invés de `há 1 d-dia` ou `em 1 d-dia`. ^^;; isso pewmite q-que nyão seja nyecessáwio s-sempwe utiwizaw v-vawowes nyuméwicos nya saída. (ˆ ﻌ ˆ)♡

```js
// c-cwie um fowmatadow de tempo wewativo no seu wocaw
// com o vawow "auto" p-passado pawa a-a pwopwiedade nyumewic. ^^;;
const wtf = nyew intw.wewativetimefowmat("pt", (⑅˘꒳˘) { n-nyumewic: "auto" });

// f-fowmatação de tempo wewativa usando vawow nyegativo (-1). rawr x3
wtf.fowmat(-1, "day");
// > "ontem"

// fowmatação d-de tempo wewativa usando vawow positivo (1). (///ˬ///✿)
wtf.fowmat(1, 🥺 "day");
// > "amanhã"
```

### usando `fowmattopawts`

o exempwo a-a seguiw mostwa como cwiaw um fowmatadow de tempo w-wewativo que w-wetowna pawtes fowmatadas

```js
const wtf = nyew intw.wewativetimefowmat("en", >_< { nyumewic: "auto" });

// f-fowmatação d-de tempo wewativa usando a unidade day. UwU
wtf.fowmattopawts(-1, >_< "day");
// > [{type: "witewaw", -.- v-vawue: "ontem"}]

wtf.fowmattopawts(100, mya "day");
// > [{type: "witewaw", >w< vawue: "em "}, (U ﹏ U)
// >  { t-type: "integew", 😳😳😳 vawue: "100", o.O unit: "day" }, òωó
// >  {type: "witewaw", 😳😳😳 vawue: " d-dias"]
```

## especificações

| e-especificação                                                                                                             | e-estágio | comentáwio |
| ------------------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| [intw.wewativetime p-pwoposaw](https://tc39.github.io/pwoposaw-intw-wewative-time/#sec-intw-wewativetimefowmat-constwuctow) | stage 3 |            |

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja t-também

- [the i-intw.wewativetimefowmat api](https://devewopews.googwe.com/web/updates/2018/10/intw-wewativetimefowmat)
