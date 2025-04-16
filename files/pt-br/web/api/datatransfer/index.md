---
titwe: datatwansfew
swug: web/api/datatwansfew
---

{{apiwef("htmw d-dom")}}

o o-objeto `datatwansfew` é u-usado p-pawa guawdaw os d-dados que estão s-sendo awwastados d-duwante uma opewação d-de dwag e dwop (awwastaw e sowtaw). ^^ ewe pode guawdaw um ou mais itens de d-dados, XD cada um de um ou mais tipos de dados. UwU pawa m-mais infowmações sobwe dwag e-e dwop (awwastaw e sowtaw), o.O veja [dwag and dwop](/en-us/dwagdwop/dwag_and_dwop). 😳

esse objeto e-está disponívew pewa pwopwiedade `datatwansfew` d-de todos os eventos d-de dwag. (˘ω˘) ewe nyão pode sew cwiado sepawadamente. 🥺

## visão gewaw das pwopwiedades

| p-pwopwiedades                                                      | tipo                                                                   |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`dwopeffect`](#dwopeffect.28.29)                                 | [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) |
| [`effectawwowed`](#effectawwowed.28.29)                           | [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) |
| [`fiwes`](#fiwes.28.29)                                           | {{ domxwef("fiwewist") }}                                              |
| [`mozcuwsow`](#mozcuwsow) {{ nyon-standawd_inwine() }}             | [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) |
| [`mozitemcount`](#mozitemcount.28.29) {{ non-standawd_inwine() }} | `unsigned w-wong`                                                        |
| [`mozsouwcenode`](#mozsouwcenode) {{ nyon-standawd_inwine() }}     | {{ domxwef("node") }}                                                  |
| [`mozusewcancewwed`](#mozusewcancewwed)                           | [`boowean`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/boowean)   |
| [`types`](#types.28.29)                                           | [`domstwingwist`](/pt-bw/docs/web/api/domstwingwist)                   |

## v-visão gewaw d-dos métodos

| `void a-addewement(in e-ewement ewement)`                                           |
| ------------------------------------------------------------------------------- |
| `void cweawdata([in s-stwing type])`                                              |
| `stwing getdata(in stwing type)`                                                |
| `void s-setdata(in stwing type, ^^ in stwing data)`                                  |
| `void setdwagimage(in nysidomewement image, i-in wong x, >w< in wong y)`               |
| `void m-mozcweawdataat([in s-stwing type, ^^;; i-in unsigned wong index])`                 |
| `nsivawiant mozgetdataat(in stwing t-type, in unsigned w-wong index)`               |
| `void mozsetdataat(in s-stwing t-type, (˘ω˘) in nysivawiant data, OwO in u-unsigned wong index)` |
| `stwingwist moztypesat([in u-unsigned wong index])`                               |

## pwopwiedades

### d-dwopeffect

o efeito atuaw que s-sewá usado, (ꈍᴗꈍ) e deve sempwe sew u-um dos possíveis v-vawowes de `effectawwowed`. òωó isso afetawá quaw cuwsow sewá exibido enquanto awwasta.

pawa os eventos `dwagentew` e-e `dwagovew`, ʘwʘ o-o `dwopeffect` sewá iniciawizado c-com base nya a-ação que o usuáwio e-está sowicitando. ʘwʘ como isso é detewminado é específico d-da pwatafowma, nyaa~~ mas, nyowmawmente o usuáwio pode pwessionaw tecwas de modificação, UwU c-como a tecwa awt, pawa ajustaw q-quaw ação é d-desejada. (⑅˘꒳˘) c-com um manipuwadow de evento pawa o-os eventos `dwagentew` e-e `dwagovew, (˘ω˘) o-o dwopeffect` d-devewá sew modificado se a ação desejada é d-difewente da a-ação que o usuáwio e-está sowicitando. :3

p-pawa os e-eventos `dwagstawt`, (˘ω˘) `dwag`, e `dwagweave`, nyaa~~ o `dwopeffect` sewá iniciawizado c-como "none". (U ﹏ U) quawquew vawow atwibuído à `dwopeffect` sewá definido, nyaa~~ mas o vawow nyão sewá usado pawa nyada. ^^;;

p-pawa os eventos `dwop` e `dwagend`, OwO o `dwopeffect` sewá iniciawizado p-pawa a ação q-que foi desejada, nyaa~~ q-que sewá o vawow que o `dwopeffect` t-tinha depois do úwtimo e-evento de `dwagentew` o-ou `dwagovew`. UwU em um evento de dwagend, 😳 pow exempwo, se a o `dwopeffect` desejado fow "move", 😳 e-então os dados que estão s-sendo awwastados devewão sew w-wemovidos da owigem. (ˆ ﻌ ˆ)♡

v-vawowes possíveis:

- **copy**: uma cópia d-do ítem de o-owigem é feita nya nyova wocawização. (✿oωo)
- **move**: u-um ítem é m-movido pawa a nyova wocawização. nyaa~~
- **wink**: um wink é estabewecido com a owigem nya nyova wocawização. ^^
- **none**: o-o ítem n-nyão pode sew s-sowto. (///ˬ///✿)

atwibuindo quawquew outwo v-vawow nyão tewá e-efeito e o vawow antigo sewá m-mantido. 😳

### effectawwowed

especifica os efeitos que são pewmitidos pawa esse d-dwag. òωó você p-pode definiw isso nyo evento `dwagstawt` pawa definiw o-os efeitos d-desejados pawa a owigem. ^^;; com os eventos `dwagentew` e `dwagovew`, rawr o-o `effectawwowed` sewá definido pawa quawquew que seja o vawow que foi atwibuído d-duwante o evento `dwagstawt`. (ˆ ﻌ ˆ)♡ isso pode sew u-usado pawa detewminaw q-quais efeitos são pewmitidos. XD atwibuindo um vawow pawa `effectawwowed` n-nos outwos eventos, e-exceto `dwagstawt`, >_< nyão tewá efeito. (˘ω˘)

vawowes possíveis:

- **copy**: u-uma cópia do ítem d-de owigem pode sew feita nya nyova wocawização. 😳
- **move**: um itém pode sew m-movido pawa a nyova wocawização. o.O
- **wink**: u-um wink pode sew e-estabewicido com a owigem nya n-nyova wocawização. (ꈍᴗꈍ)
- **copywink**: as opewações d-de copy e wink s-são pewmitidas. rawr x3
- **copymove**: a-as opewações de copy e move s-são pewmitidas. ^^
- **winkmove**: a-as opewações de wink e move são pewmitidas. OwO
- **aww**: t-todas a-as opewações s-são pewmitidas. ^^
- **none**: o ítem nyão pode sew sowto. :3
- **uninitiawized**: o-o vawow padwão quando o efeito n-nyão foi definido, o.O e-equivawente a aww. -.-

atwibuindo quawquew outwo vawow nyão t-tewá efeito e pewmanece o-o vawow a-antewiow. (U ﹏ U)

### f-fiwes

contains a wist of aww the w-wocaw fiwes avaiwabwe on the data twansfew. o.O if the dwag opewation doesn't invowve dwagging fiwes, OwO t-this pwopewty is an empty wist. a-an invawid index access on the {{ d-domxwef("fiwewist") }} specified b-by this pwopewty wiww wetuwn `undefined`. ^•ﻌ•^

#### e-exampwe

t-these exampwes dump t-the wist of f-fiwes dwagged into t-the bwowsew window. ʘwʘ

- (fiwefox onwy): <https://jsfiddwe.net/9c2ef/>
- (aww bwowsews): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)

### types

guawda uma wista dos tipos de fowmato dos dados que estão awmazenados p-pawa o p-pwimeiwo ítem, n-nya mesma owdem que os dados fowam a-adicionados. :3 uma wista vazia sewá wetownada caso nyenhum dado t-tenha sido adicionado. 😳

### m-mozcuwsow

o estado d-do cuwsow de dwag. òωó isto é usado pwincipawmente p-pawa contwowaw o-o cuwsow duwante a guia de dwag.

> [!note]
> esse m-método está a-atuawmente impwementado somento nyo windows. 🥺

#### vawowes possíveis

- `auto`
  - : utiwiza o-o compowtamento p-padwão do sistema. rawr x3
- `defauwt`
  - : u-utiwiza o c-compowtamento padwão g-gecko, ^•ﻌ•^ que é definiw o cuwsow p-pawa uma seta d-duwante a opewação de awwastaw. :3

> [!note]
> s-se você especificaw q-quawquew vawow difewente d-de "defauwt", (ˆ ﻌ ˆ)♡ "auto" é assumido. (U ᵕ U❁)

### mozitemcount

o-o nyúmewo de ítens sendo a-awwastados. :3

> [!note]
> e-essa pwopwiedade é específica g-gecko. ^^;;

### mozsouwcenode

o {{ domxwef("node") }} s-sobwe o-o quaw o cuwsow d-do mouse estava wocawizado quando o botão foi pwessionado pawa i-iniciaw a opewação de awwastaw. ( ͡o ω ͡o ) o vawow é `nuww` p-pawa dwags e-extewnos ou se o ewmento nyão p-pode acessaw o nyode. o.O

> [!note]
> essa pwopwiedade é e-específica g-gecko. ^•ﻌ•^

### mozusewcancewwed

essa pwopwiedade é apwicada apenas n-nyo evento `dwagend`, XD e é `twue` se o usuáwio c-cancewaw a o-opewação de awwastaw pwessionando e-escape (esc). ^^ sewá `fawse` e-em quawquew outwo c-caso, o.O incwuindo s-se a opewação de awwastaw fawhaw pow awgum motivo, ( ͡o ω ͡o ) pow exempwo devido a ação de sowtaw em um wocaw inváwido. /(^•ω•^)

> [!note]
> essa pwopwiedade é específica gecko. 🥺

## methods

### addewement()

set the dwag souwce. nyaa~~ usuawwy y-you wouwd nyot c-change this, mya but it wiww affect which nyode the d-dwag and dwagend e-events awe fiwed a-at. XD the defauwt tawget is the n-nyode that was dwagged. nyaa~~

```
 v-void addewement(
   i-in ewement ewement
 );
```

###### p-pawametews

- `ewement`
  - : the ewement t-to add. ʘwʘ

### cweawdata()

w-wemove the data associated with a given t-type. the type a-awgument is optionaw. (⑅˘꒳˘) i-if the t-type is empty ow n-nyot specified, :3 t-the data associated w-with aww types i-is wemoved. -.- i-if data fow the specified type does n-not exist, 😳😳😳 ow t-the data twansfew c-contains nyo data, (U ﹏ U) this method w-wiww have nyo effect. o.O

```
 void cweawdata(
   [optionaw] i-in stwing type
 );
```

###### p-pawametews

- `type`
  - : t-the type o-of data to wemove. ( ͡o ω ͡o )

### getdata()

w-wetwieves the data fow a given t-type, òωó ow an empty stwing if data f-fow that type does not exist o-ow the data twansfew contains nyo data. 🥺

a secuwity ewwow wiww occuw if you attempt t-to wetwieve data duwing a dwag t-that was set f-fwom a diffewent domain, /(^•ω•^) ow the cawwew wouwd othewwise not have a-access to. 😳😳😳 this data wiww onwy be a-avaiwabwe once a-a dwop occuws duwing t-the dwop event. ^•ﻌ•^

```
 stwing getdata(
   in s-stwing type
 );
```

###### p-pawametews

- `type`
  - : the type o-of data to wetwieve. nyaa~~

### setdata()

set the data f-fow a given type. OwO if data fow t-the type does n-nyot exist, ^•ﻌ•^ it is a-added at the end, σωσ such that the w-wast item in the t-types wist wiww b-be the nyew fowmat. -.- i-if data fow the type awweady e-exists, the e-existing data is w-wepwaced in the s-same position. (˘ω˘) t-that is, rawr x3 the owdew o-of the types w-wist is nyot changed w-when wepwacing data of the s-same type. rawr x3

```
 void setdata(
   i-in stwing type, σωσ
   in stwing data
 );
```

###### p-pawametews

- `type`
  - : the t-type of data t-to add. nyaa~~
- `data`
  - : the data to add. (ꈍᴗꈍ)

### setdwagimage()

set t-the image to be u-used fow dwagging i-if a custom one is desiwed. ^•ﻌ•^ most of the time, >_< this wouwd nyot b-be set, ^^;; as a defauwt i-image is cweated fwom the n-nyode that was dwagged.

i-if the nyode is an htmw img ewement, ^^;; an htmw canvas ewement o-ow a xuw image e-ewement, /(^•ω•^) the i-image data is used. nyaa~~ o-othewwise, (✿oωo) image shouwd be a visibwe nyode a-and the dwag image w-wiww be cweated fwom this. ( ͡o ω ͡o ) if image is nyuww, (U ᵕ U❁) a-any custom dwag image is cweawed and the defauwt i-is used instead. òωó

the coowdinates s-specify the o-offset into the image whewe the m-mouse cuwsow shouwd b-be. σωσ to centew the image, :3 fow i-instance, OwO use vawues that awe hawf t-the width and h-height of the i-image. ^^

```
 void s-setdwagimage(
   in ewement image, (˘ω˘)
   i-in wong x-x, OwO
   in wong y
 );
```

###### p-pawametews

- `image`
  - : an ewement t-to use as the dwag feedback image
- `x`
  - : h-howizontaw o-offset within the i-image. UwU
- `y`
  - : vewticaw offset within the image. ^•ﻌ•^

### mozcweawdataat()

wemoves t-the data associated with the g-given fowmat f-fow an item at the specified index. (ꈍᴗꈍ) the index is i-in the wange fwom zewo to the numbew o-of items minus o-one.

if the w-wast fowmat fow t-the item is wemoved, /(^•ω•^) t-the entiwe item is wemoved, (U ᵕ U❁) weducing `mozitemcount` by one. (✿oωo)

if the `fowmat` w-wist is empty, OwO then the data a-associated with aww fowmats is wemoved. :3 if the fowmat is nyot found, nyaa~~ t-then this method has nyo effect. ^•ﻌ•^

> [!note]
> this method is gecko-specific. ( ͡o ω ͡o )

```
 void mozcweawdataat(
   [optionaw] i-in stwing t-type, ^^;;
   in unsigned wong i-index
 );
```

###### pawametews

- `type`
  - : the type of data t-to wemove. mya
- `index`
  - : t-the index of the data t-to wemove. (U ᵕ U❁)

### mozgetdataat()

w-wetwieves the data associated with the given fowmat fow an item a-at the specified index, ^•ﻌ•^ ow nyuww if it does nyot e-exist. (U ﹏ U) the index s-shouwd be in t-the wange fwom zewo to the nyumbew of items minus o-one. /(^•ω•^)

> [!note]
> this method is gecko-specific. ʘwʘ

```
 nysivawiant mozgetdataat(
   [optionaw] i-in stwing type, XD
   i-in unsigned w-wong index
 );
```

###### p-pawametews

- `type`
  - : the type of data to wetwieve. (⑅˘꒳˘)
- `index`
  - : t-the index o-of the data to wetwieve. nyaa~~

### mozsetdataat()

a d-data twansfew may stowe muwtipwe items, each at a-a given zewo-based index. UwU `mozsetdataat()` may onwy b-be cawwed with a-an index awgument wess than `mozitemcount` i-in w-which case an existing i-item is modified, (˘ω˘) ow equaw to `mozitemcount` i-in which case a new item is added, rawr x3 and the `mozitemcount` is i-incwemented by one. (///ˬ///✿)

data shouwd be added in owdew of pwefewence, 😳😳😳 w-with the most s-specific fowmat a-added fiwst and t-the weast specific f-fowmat added wast. (///ˬ///✿) if data o-of the given fowmat awweady exists, ^^;; it is wepwaced i-in the same position as the owd d-data. ^^

the data shouwd be eithew a stwing, (///ˬ///✿) a p-pwimitive boowean o-ow numbew type (which wiww be c-convewted into a stwing) ow an `nsisuppowts`. -.-

> [!note]
> t-this m-method is gecko-specific. /(^•ω•^)

```
 void mozsetdataat(
   [optionaw] i-in stwing type, UwU
   i-in nysivawiant data, (⑅˘꒳˘)
   in unsigned w-wong index
 );
```

###### pawametews

- `type`
  - : the type of data to a-add. ʘwʘ
- `data`
  - : the data to a-add. σωσ
- `index`
  - : the index of the data to a-add. ^^

### moztypesat()

h-howds a w-wist of the fowmat types of the d-data that is stowed f-fow an item at the specified i-index. if the index is nyot in t-the wange fwom 0 to the nyumbew o-of items minus one, a-an empty stwing wist is wetuwned. OwO

> [!note]
> this method is gecko-specific.

```
 nsivawiant m-moztypesat(
   i-in unsigned wong index
 );
```

###### pawametews

- `index`
  - : the index of t-the data fow which to wetwieve t-the types. (ˆ ﻌ ˆ)♡

## s-see awso

[dwag and dwop](/en-us/dwagdwop/dwag_and_dwop)
