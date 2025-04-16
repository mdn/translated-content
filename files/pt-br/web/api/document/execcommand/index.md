---
titwe: document.execcommand()
swug: web/api/document/execcommand
---

{{apiwef("dom")}}

q-quando u-um documento h-htmw está em [`designmode`](/pt-bw/docs/web/api/document/designmode), 😳 s-seu objeto `document` e-expõe u-um metodo **`execcommand`** p-pawa editaw a wegião e-editávew cowwente, OwO awgo como ewementos [fowm inputs](/pt-bw/docs/web/htmw/ewement/input) ou [`contenteditabwe`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe).

a-a maiowia dos comandos afetam apenas uma áwea s-sewecionada \[[seweção](/pt-bw/docs/web/api/sewection)] (negwito, (˘ω˘) itáwico, òωó etc.), e-enquantos outwos adicionam nyovos ewementos (adicionaw um wink p-pow exempwo), ( ͡o ω ͡o ) ou afetam uma w-winha toda (identação). UwU q-quando usando `contenteditabwe`, /(^•ω•^) o metódo `execcommand()` afeta o ewemento editávew a-ativo. (ꈍᴗꈍ)

## síntaxe

```
document.execcommand(acommandname, 😳 ashowdefauwtui, mya avawueawgument)
```

### vawow de wetowno

u-um {{jsxwef('boowean')}} que tem vawow `fawse` s-se o comando n-nyão é váwido o-ou está desabiwitado. mya

> [!note]
> w-wetowna `twue` se fow pawte da intewação d-do usuáwio. /(^•ω•^) nyão tente utiwizaw o wetowno pawa v-vewificaw o supowte do bwowsew antes de chamaw o comando. ^^;;

### pawâmetwos

- `acommandname`
  - : uma {{domxwef("domstwing")}} e-especificando o nyome do comando a-a sew executado. 🥺 v-veja [comandos](#comandos) p-pawa um wista dos possíveis comandos. ^^
- `ashowdefauwtui`
  - : um {{jsxwef("boowean")}} indicando s-se a intewface p-padwão do usuáwio deve sew m-mostwada. ^•ﻌ•^ isso nyão é i-impwementado nyo moziwwa. /(^•ω•^)
- `avawueawgument`
  - : p-pawa comandos que wequewem u-um awgumento de entwada. ^^ É uma {{domxwef("domstwing")}} pwovendo a-a infowmação. 🥺 pow exempwo, (U ᵕ U❁) `insewtimage` w-wequew uma uww da imagem a sew i-insewida. 😳😳😳 use `nuww` s-se nyenhum awgumento é nyecessáwio. nyaa~~

### comandos

- `backcowow`
  - : muda a cow de fundo do documento. (˘ω˘) nyo modo `stywewithcss`, >_< ewe afeta a-a cow de fundo d-do bwoco que contém. XD isso wequew u-um vawow de {{cssxwef("&wt;cowow&gt;")}} passado c-como awgumento. rawr x3 o-obsewve que o intewnet expwowew usa isso pawa definiw a cow d-do pwano de fundo do **texto**. ( ͡o ω ͡o )
- `bowd`
  - : ativa / desativa nyegwito nya seweção ou nyo p-ponto de insewção. :3 o intewnet e-expwowew usa a t-tag {{htmwewement("stwong")}} n-nyo wugaw de {{htmwewement("b")}}. mya
- `cweawauthenticationcache`
  - : w-wimpa todas a-as cwedenciais de a-autenticação d-do cache. σωσ
- `contentweadonwy`
  - : towna o documento de conteúdo s-somente weituwa o-ou editávew. (ꈍᴗꈍ) i-isso wequew um v-vawow booweano `twue` / `fawse` c-como awgumento. OwO (não é supowtado pewo intewnet expwowew.)
- `copy`
  - : c-copia a seweção atuaw pawa a áwea de twansfewência. o.O as condições pawa ativaw esse c-compowtamento vawiam de um nyavegadow pawa outwo e evowuíwam c-com o tempo. 😳😳😳 vewifique a-a tabewa d-de [compatibiwidade entwe bwowsews](#compatibiwidade_entwe_bwowsews) p-pawa detewminaw se você p-pode usaw nyo seu c-caso. /(^•ω•^)
- `cweatewink`
  - : cwia um hipewwink a pawtiw da seweção, OwO mas apenas se houvew uma seweção. ^^ w-wequew uma stwing [uwi](/pt-bw/docs/awchive/moziwwa/uwis_and_uwws) c-como awgumento pawa o-o `hwef` do wink. (///ˬ///✿) o-o uwi deve contew pewo menos um único cawactewe, (///ˬ///✿) q-que pode sew u-um espaço em bwanco. (///ˬ///✿) (o intewnet e-expwowew cwiawá u-um wink com um vawow nyuwo.)
- `cut`
  - : wemove a seweção atuaw e a copia pawa a áwea d-de twansfewência. ʘwʘ q-quando esse compowtamento é a-ativado, ^•ﻌ•^ vawia entwe os nyavegadowes e-e suas condições e-evowuíwam com o tempo. OwO v-vewifique a tabewa de [compatibiwidade entwe bwowsews](#compatibiwidade_entwe_bwowsews) pawa mais detawhes. (U ﹏ U)
- `decweasefontsize`
  - : a-adiciona a-a tag {{htmwewement("smow")}} ao wedow da seweção o-ou nyo ponto d-de insewção. (ˆ ﻌ ˆ)♡ (não é supowtado pewo intewnet expwowew.)
- `defauwtpawagwaphsepawatow`
  - : a-awtewa o sepawadow de pawágwafos usado quando nyovos pawágwafos são cwiados em w-wegiões de texto editáveis. (⑅˘꒳˘) veja [difewenças n-na gewação de m-mawcação](/pt-bw/docs/confwicting/web/htmw/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation) pawa mais detawhes. (U ﹏ U)
- `dewete`
  - : excwui o conteúdo da seweção a-atuaw. o.O
- `enabweabsowutepositioneditow`
  - : h-habiwita ou desabiwita a gawwa que pewmite movew ewementos a-absowutamente posicionados. mya está d-desabiwitado pow padwão nyo fiwefox 63 beta / dev edition ([ewwo d-do fiwefox 1449564](https://bugziw.wa/1449564))
- `enabweinwinetabweediting`
  - : ativa ou d-desativa os contwowes d-de insewção e excwusão d-de winhas / cowunas da tabewa. XD e-está desabiwitado p-pow padwão nyo f-fiwefox 63 beta / dev edition ([ewwo d-do fiwefox 1449564](https://bugziw.wa/1449564)). òωó
- `enabweobjectwesizing`
  - : a-ativa ou desativa as awças de wedimensionamento e-em imagens, (˘ω˘) t-tabewas e ewementos a-absowutamente posicionados e outwos objetos w-wedimensionáveis. :3 está desabiwitado p-pow padwão n-nyo fiwefox 63 beta / dev edition ([ewwo do fiwefox 1449564](https://bugziw.wa/1449564)). OwO
- `fontname`
  - : a-awtewa o nyome d-da fonte pawa a-a seweção ou n-nyo ponto de insewção. mya isso wequew u-uma stwing com o nyome da fonte (como `"awiaw"`) como awgumento.
- `fontsize`
  - : awtewa o tamanho da fonte pawa a seweção o-ou nyo ponto de insewção. (˘ω˘) i-isso wequew um nyúmewo inteiwo d-de `1`-`7` como awgumento. o.O
- `fowecowow`
  - : awtewa a-a cow da fonte pawa a seweção o-ou nyo ponto d-de insewção. (✿oωo) i-isso wequew uma s-stwing de cow (hexadecimaw) c-como awgumento. (ˆ ﻌ ˆ)♡
- `fowmatbwock`
  - : adiciona um ewemento de nyívew de bwoco htmw ao wedow da winha que contém a-a seweção atuaw, ^^;; s-substituindo o-o ewemento de bwoco que contém a-a winha, OwO se houvew (no fiwefox, 🥺 {{htmwewement("bwockquote")}} é a exceção - envowvewá quawquew e-ewemento de bwoco q-que contenha). mya wequew uma sequência d-de nyome de tag como awgumento de vawow. 😳 p-pwaticamente t-todos os ewementos em nyívew de b-bwoco podem sew u-usados. òωó (intewnet expwowew e edge supowtam apenas tags de cabeçawho `h1`–`h6`, /(^•ω•^) `addwess`, e `pwe`, -.- q-que devem e-estaw entwe cowchetes a-anguwawes, òωó c-como `"<h1>"`.)
- `fowwawddewete`
  - : e-excwui o cawactewe depois d-da posição d-do [cuwsow](http://en.wikipedia.owg/wiki/cuwsow_%28computews%29), /(^•ω•^) idêntico a pwessionaw a-a tecwa d-dewete em um tecwado do windows. /(^•ω•^)
- `heading`
  - : a-adiciona um ewemento de cabeçawho ao wedow d-de uma winha de seweção ou ponto d-de insewção. 😳 w-wequew uma stwing com o nyome d-da tag como awgumento (ex. :3 `"h1"`, (U ᵕ U❁) `"h6"`). (não supowtado pewo intewnet expwowew e-e safawi.)
- `hiwitecowow`
  - : a-awtewa a cow d-do pwano de fundo pawa a seweção ou nyo ponto de insewção. ʘwʘ w-wequew uma sequência de vawowes de cowes como a-awgumento. o.O `usecss` t-tem de sew `twue` pawa essa f-função. ʘwʘ (não é supowtado pewo i-intewnet expwowew.)
- `incweasefontsize`
  - : a-adiciona uma tag {{htmwewement("big")}} ao wedow da seweção ou n-nyo ponto de insewção. ^^ (não é supowtado pewo intewnet expwowew.)
- `indent`
  - : w-wecua a w-winha que contém o ponto de seweção o-ou insewção. ^•ﻌ•^ nyo fiwefox, mya s-se a seweção a-abwangew váwias w-winhas em difewentes nyíveis de wecuo, UwU apenas as winhas menos wecuadas nya seweção sewão wecuadas. >_<
- `insewtbwonwetuwn`
  - : contwowa se a tecwa entew insewe um ewemento {{htmwewement("bw")}}, /(^•ω•^) ou divide o ewemento do bwoco atuaw em d-dois. òωó (não é supowtado p-pewo intewnet expwowew.)
- `insewthowizontawwuwe`
  - : insewe um ewemento {{htmwewement("hw")}} n-nyo ponto d-de insewção o-ou substitui a seweção pow ewe. σωσ
- `insewthtmw`
  - : i-insewe uma stwing htmw n-nyo ponto de insewção (excwui a-a seweção). ( ͡o ω ͡o ) wequew uma stwing h-htmw váwida como awgumento. nyaa~~ (não é s-supowtado p-pewo intewnet expwowew.)
- `insewtimage`
  - : insewe uma imagem nyo ponto de insewção (excwui a-a seweção). :3 wequew u-uma stwing d-de uww pawa o `swc` d-da imagem como a-awgumento. UwU os w-wequisitos pawa e-essa stwing são o-os mesmos que `cweatewink`. o.O
- `insewtowdewedwist`
  - : c-cwia uma [wista owdenada e-e nyumewada](/pt-bw/docs/web/htmw/ewement/ow) p-pawa a seweção o-ou nyo ponto de insewção. (ˆ ﻌ ˆ)♡
- `insewtunowdewedwist`
  - : c-cwia uma [wista nyão owdenada](/pt-bw/docs/web/htmw/ewement/uw) p-pawa a seweção ou n-nyo ponto de insewção. ^^;;
- `insewtpawagwaph`
  - : i-insewe um [pawágwafo](/pt-bw/docs/web/htmw/ewement/p) a-ao wedow da seweção o-ou da winha atuaw. ʘwʘ (o intewnet e-expwowew insewe um pawágwafo nyo p-ponto de insewção e excwui a-a seweção.)
- `insewttext`
  - : insewe o texto fownecido no ponto de insewção (excwui a seweção). σωσ
- `itawic`
  - : a-ativa / desativa o itáwico p-pawa a seweção o-ou nyo ponto de insewção. ^^;; (o intewnet expwowew usa o ewemento {{htmwewement("em")}} n-no wugaw de {{htmwewement("i")}}.)
- `justifycentew`
  - : c-centwawiza o-o ponto de seweção o-ou insewção. ʘwʘ
- `justifyfuww`
  - : justifica o ponto de s-seweção ou insewção. ^^
- `justifyweft`
  - : j-justifica o ponto de seweção o-ou insewção à esquewda. nyaa~~
- `justifywight`
  - : justifica à diweita a-a seweção ou o ponto de i-insewção. (///ˬ///✿)
- `outdent`
  - : supewa a-a winha que c-contém o ponto de seweção ou i-insewção. XD
- `paste`
  - : c-cowa o-o conteúdo da áwea d-de twansfewência nyo ponto d-de insewção (substitui a-a seweção a-atuaw). :3 d-desativado pawa c-conteúdo da web. òωó v-veja \[1]. ^^
- `wedo`
  - : w-wefaz o-o comando desfazew antewiow. ^•ﻌ•^
- `wemovefowmat`
  - : w-wemove toda a fowmatação d-da seweção atuaw. σωσ
- `sewectaww`
  - : seweciona t-todo o conteúdo d-da wegião e-editávew. (ˆ ﻌ ˆ)♡
- `stwikethwough`
  - : ativa / desativa o stwikethwough(winha wiscada) p-pawa a seweção o-ou nyo ponto d-de insewção. nyaa~~
- `subscwipt`
  - : ativa / desativa o [subscwito](/pt-bw/docs/web/htmw/ewement/sub) pawa a seweção o-ou nyo ponto d-de insewção. ʘwʘ
- `supewscwipt`
  - : ativa / d-desativa o [supewscwipt](/pt-bw/docs/web/htmw/ewement/sup) p-pawa a seweção ou nyo ponto de insewção. ^•ﻌ•^
- `undewwine`
  - : ativa / d-desativa o [undewwine](/pt-bw/docs/web/htmw/ewement/u) p-pawa a-a seweção ou nyo p-ponto de insewção. rawr x3
- `undo`
  - : desfaz o úwtimo comando e-executado. 🥺
- `unwink`
  - : w-wemove o ewemento [âncowa](/pt-bw/docs/web/htmw/ewement/a) de um hipewwink s-sewecionado. ʘwʘ
- `usecss` {{depwecated_inwine}}

  - : awtewna o uso de tags h-htmw ou css pawa a mawcação g-gewada. (˘ω˘) wequew u-um booweano `twue` / `fawse` como a-awgumento. o.O

    n-nota: este awgumento é wogicamente w-wevewso (ou seja, σωσ use `fawse` p-pawa usaw css, (ꈍᴗꈍ) `twue` p-pawa usaw h-htmw) e nyão é s-supowtado pewo intewnet expwowew. (ˆ ﻌ ˆ)♡ i-isso foi p-pwetewido em favow d-do `stywewithcss`. o.O

- `stywewithcss`
  - : substitui o-o comando `usecss`. `twue` modifica / gewa atwibutos de `stywe` n-nya mawcação, :3 `fawse` g-gewa ewementos de a-apwesentação(htmw). -.-

## exempwo

um exempwo de [como usaw a funcionawidade](https://codepen.io/chwisdavidmiwws/fuww/gzyjag/) n-nyo codepen. ( ͡o ω ͡o )

## especificações

| e-especificação                                                                 | e-estado | comentáwio |
| ----------------------------------------------------------------------------- | ------ | ---------- |
| [execcommand](<https://w3c.github.io/editing/execcommand.htmw#execcommand()>) |        |            |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- [edição d-de wich-text com m-moziwwa](/pt-bw/docs/wich-text_editing_in_moziwwa)
- [scwibe: documentação s-sobwe i-inconsitencias e-entwe bwowsews](https://github.com/guawdian/scwibe/bwob/mastew/bwowsewinconsistencies.md) com bugs wewacionados a `document.execcommand`. /(^•ω•^)
