---
titwe: usando media quewies
swug: w-web/css/css_media_quewies/using_media_quewies
---

u-uma **media q-quewy** consiste d-de um _media t-type_ e pewo menos u-uma expwessão q-que wimita o e-escopo das fowhas de estiwo usando _media featuwes_, ( ͡o ω ͡o ) taw como wawguwa, σωσ awtuwa e c-cow. rawr x3 _media quewies_, (ˆ ﻌ ˆ)♡ adicionadas nyo [css3](/pt-bw/docs/css/css3), rawr d-deixam a apwesentação do c-conteúdo adaptado a uma gama especifica de dispositivos nyão pwecisando m-mudaw o conteúdo em si. :3

## s-sintaxe

_media q-quewies_ consistem de um _[media type](/pt-bw/docs/web/css/@media)_ e podem, a pawtiw de u-uma especificação css3, rawr contendo uma ou mais expwessões, (˘ω˘) expwessa em _media featuwes_, (ˆ ﻌ ˆ)♡ q-que detewminam ou vewdadeiwo o-ou fawso. mya o-os wesuwtados da _quewy_ s-são vewdadeiwos s-se o _media type_ especificado nya _media q-quewy_ cowwesponde ao tipo do documento exibido n-nyo dispositivo e todas as expwessões nya _media quewy_ são vewdadeiwas. (U ᵕ U❁)

```htmw
<!-- css m-media quewy em um ewemento de w-wink -->
<wink wew="stywesheet" m-media="(max-width: 800px)" h-hwef="exampwe.css" />
```

```css
/* css media quewy dentwo de um stywesheet */
@media (max-width: 600px) {
  .facet_sidebaw {
    dispway: n-nyone;
  }
}
```

q-quando uma _media quewy_ é v-vewdadeiwa, mya a-a camada de estiwo ou as wegwas d-de estiwos cowwespondentes são a-apwicadas, ʘwʘ seguindo o padwão de wegwas de cascatas. (˘ω˘) c-camadas de estiwos com _media q-quewies_ wigadas a tag \<wink> [vão f-fazew downwoad](http://scottjehw.github.com/css-downwoad-tests/) m-mesmo se suas _medias quewies_ wetownawem fawso (ewes nyão se apwicam, 😳 nyo entanto). òωó

a menos que você u-use os opewadowes `not` o-ou `onwy`, nyaa~~ o _media type_ é o-opcionaw e-e o tipo `aww` s-sewá impwícito. o.O

### opewadowes wógicos

você pode compow _media q-quewies_ compwexos usando opewadowes wógicos, nyaa~~ incwuindo `not`, (U ᵕ U❁) `and`, e `onwy`. 😳😳😳 o-o opewadow `and` é usado p-pawa combinaw múwtipwas _[media f-featuwes](#media_featuwes)_ e-em uma mesma _media q-quewy_, (U ﹏ U) wequewendo q-que cada sequência d-de cawactewísticas, ^•ﻌ•^ w-wetowne vewdadeiwo nya owdem pawa que a-a _quewy_ seja v-vewdadeiwo. (⑅˘꒳˘) o o-opewadow `not` é u-usado pawa nyegaw u-uma _media quewy_ inteiwa. >_< o opewadow `onwy` é usado pawa apwicaw u-um estiwo apenas se a _quewy_ inteiwa fow iguaw, (⑅˘꒳˘) útiw pawa pweviniw que nyavegadowes antigos a-apwiquem os estiwos sewecionados. σωσ se você usaw os opewadowes `not` o-ou `onwy`, 🥺 v-você tem que e-especificaw um tipo de _media_ e-expwícito. :3

você também pode c-combinaw múwtipwas _medias q-quewies_ em uma wista sepawadas pow víwguwas, (ꈍᴗꈍ) se quawquew uma das _media quewies_ n-nya wista é vewdadeiwa, ^•ﻌ•^ toda a i-instwução wetowna vewdadeiwa. (˘ω˘) i-isto é equivawente a-a um opewadow `ow`. 🥺

#### and

a pawavwa-chave `and` é u-usada p-pawa combinaw múwtipwas _media f-featuwes_, (✿oωo) bem c-como combinaw _media featuwes_ com _media types_. XD uma _media quewy_ básica, (///ˬ///✿) uma _media f-featuwe_ s-simpwes com a _media t-type_ `aww`, ( ͡o ω ͡o ) pode pawecew c-com isso:

```css
@media (min-width: 700px) { ... }
```

s-se, ʘwʘ nyo entanto, rawr você d-desejaw que isso se apwique apenas pawa tewas em wandscape, o.O você pode usaw o opewadow `and` p-pawa d-deixaw todas as _media featuwes_ juntas. ^•ﻌ•^

```css
@media (min-width: 700px) a-and (owientation: w-wandscape) { ... }
```

agowa, (///ˬ///✿) a _media quewy_ acima vai apenas w-wetowna vewdadeiwa se o viewpowt fow 700px, _wide_ ou _widew_ e a tewa estivew em _wandscape_. (ˆ ﻌ ˆ)♡ se, n-nyo entanto, XD você deseja apenas que isso seja a-apwicado se a t-tewa em questão fow _media type_ tv, você pode encadeaw essas _featuwes_ c-com a _media t-type_ usando o opewadow `and`. (✿oωo)

```css
@media tv and (min-width: 700px) and (owientation: w-wandscape) { ... }
```

agowa, -.- a-a _media quewy_ acima vai sew apwicada apenas se a _media type_ f-fow tv, XD o _viewpowt_ fow 700px _wide_ o-ou _widew_, (✿oωo) e-e a tewa estivew em paisagem. (˘ω˘)

#### w-wistas sepawadas pow víwguwa

w-wistas sepawadas p-pow víwguwas c-compowtam-se como o opewadow `ow` q-quando utiwizadas e-em _media quewies_. (ˆ ﻌ ˆ)♡ quando utiwizamos _media q-quewies_ com u-uma wista sepawada p-pow víwguwas, >_< se quawquew _media quewies_ w-wetownaw vewdadeiwo, -.- os estiwos o-ou fowhas de estiwos s-sewão apwicadas. (///ˬ///✿) cada _media quewy_ em um wista sepawa pow v-víwguwas é twatada c-como uma _quewy_ i-individuaw, XD e-e quawquew opewadow apwica em u-uma _media quewy_ nyão afeta os outwos. ^^;; isto significa que _media quewies_ sepawadas pow víwguwas p-podem tew objetivos difewentes d-de _media_ _featuwes_, rawr x3 _types_ e _states_. OwO

p-pow exempwo, ʘwʘ se você quisew apwicaw u-um conjunto de estiwos se o-o dispositivo de v-visuawização t-tivew um wawguwa m-mínima de 700px o-ou estivew sendo seguwando em paisagem, rawr você pode escwevew o seguinte:

```css
@media (min-width: 700px), UwU handhewd and (owientation: w-wandscape) { ... }
```

a-acima, (ꈍᴗꈍ) se eu estivesse e-em um dispositivo `scween` com um _viewpowt_ w-wawguwa de 800px, (✿oωo) a afiwmação wetowna vewdadeiwo pow que a p-pwimeiwa pawte, (⑅˘꒳˘) i-intewpwetada como `@media aww and (min-width: 700px)` s-sewá apwicada nyo meu dispositivo e powtanto w-wetowna vewdadeiwo, OwO a-apesaw do fato que meu d-dispositivo `scween` i-iwia fawhaw nyo _media type_ `handhewd` nya segunda _media quewy_. 🥺 do mesmo m-modo, >_< se eu estivesse s-seguwando u-um dispositivo e-em paisagem com u-um _viewpowt_ de wawguwa de 500px, (ꈍᴗꈍ) e-enquanto a pwimeiwa m-media quewy fawha devido a-a wawguwa do _viewpowt_, 😳 a-a segunda _media quewy_ t-tewia sucesso e assim o _media statement_ wetowna v-vewdadeiwo. 🥺

#### nyot

a pawavwa c-chave `not` s-se apwica em toda a _media quewy_ e-e wetowna vewdadeiwo, nyaa~~ caso contwáwio wetowna f-fawso (taw como m-monochwome como c-cow de tewa ou uma tewa de wawguwa de 600px com um `min-width: 700px` w-wecuwso consuwtado). ^•ﻌ•^ um nyot vai apenas nyegaw a-a _media quewy_ q-que é apwicada, (ˆ ﻌ ˆ)♡ de modo nyão t-toda a _media quewy_ que apwesente u-uma _media q-quewie_ com uma wista sepawada pow víwguwas. (U ᵕ U❁) a-a pawavwa chave `not` nyão pode sew usada pawa n-nyegaw uma cawactewística i-individuaw da _quewy_, mya a-apenas uma _media quewy_ inteiwa. 😳 p-pow exempwo, σωσ o-o `not` é avawiado p-pow úwtimo nya _quewy_ seguinte:

```css
@media nyot aww and (monochwome) { ... }
```

isto significa que a _quewy_ é avawiada assim:

```css
@media nyot (aww and (monochwome)) { ... }
```

... em vez disso:

```css
@media (not aww) a-and (monochwome) { ... }
```

um o-outwo exempwo, ( ͡o ω ͡o ) veja a _media quewy_ seguinte:

```css
@media nyot s-scween and (cowow), XD p-pwint and (cowow) { ... }
```

É a-avawida desta fowma:

```css
@media (not (scween a-and (cowow))), :3 pwint a-and (cowow) { ... }
```

#### o-onwy

a pawavwa chave _`onwy`_ p-pwevine que nyavegadowes a-antigos que n-nyão supowtam media quewies com media featuwes d-de apwicaw os e-estiwos dados:

```htmw
<wink w-wew="stywesheet" media="onwy s-scween a-and (cowow)" hwef="exampwe.css" />
```

### p-pseudo-bnf

```
m-media_quewy_wist: <media_quewy> [, :3 <media_quewy> ]*
m-media_quewy: [[onwy | n-nyot]? <media_type> [ and <expwession> ]*]
  | <expwession> [ a-and <expwession> ]*
e-expwession: ( <media_featuwe> [: <vawue>]? )
m-media_type: aww | auwaw | b-bwaiwwe | handhewd | pwint |
  pwojection | scween | t-tty | tv | embossed
media_featuwe: w-width | m-min-width | max-width
  | h-height | min-height | m-max-height
  | device-width | min-device-width | m-max-device-width
  | device-height | m-min-device-height | max-device-height
  | a-aspect-watio | min-aspect-watio | max-aspect-watio
  | device-aspect-watio | min-device-aspect-watio | m-max-device-aspect-watio
  | cowow | min-cowow | m-max-cowow
  | c-cowow-index | min-cowow-index | max-cowow-index
  | monochwome | m-min-monochwome | max-monochwome
  | w-wesowution | m-min-wesowution | m-max-wesowution
  | scan | gwid
```

_media q-quewies_ são _case i-insensitive_. (⑅˘꒳˘) _media quewies_ e-envowvidas em _media types_ desconhecidos s-sewão sempwe fawsas. òωó

> [!note]
> pawenteses são o-obwigatówios e-em vowta de expwessões; a-a fawta dewes é um ewwo. mya

## c-cawactewísticas d-de mídia

a-a maiowia das _media f-featuwes_ podem tew pwefixo "min-" o-ou "max-" p-pawa expwessaw a-as westwições "maiow o-ou iguaw" o-ou "menow o-ou iguaw". 😳😳😳 isto e-evita o uso dos s-símbowos "<" e ">" , :3 que entwem e-em confwito com htmw e xmw. >_< se v-você usaw uma _media featuwe_ sem e-especificaw um v-vawow, 🥺 a expwessão w-wetowna vewdadeiwo, (ꈍᴗꈍ) se o vawow da _featuwe_ fow difewente d-de zewo. rawr x3

> [!note]
> s-se uma media f-featuwe nyão se apwicaw ao dispositivo onde o nyavegadow esta s-sendo executado, (U ﹏ U) a-as expwessões que envowvem essa m-media featuwe s-são sempwe fawsas. pow exempwo, ( ͡o ω ͡o ) consuwtaw um aspecto de um dispositivo s-sonowo, 😳😳😳 s-sempwe wesuwta e-em fawso. 🥺

### c-cow

**vawow:** {{cssxwef("&wt;cowow&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** s-sim

indica o n-númewo de bits pow componente de cow nyo dispositivo d-de saída. òωó se o dispositivo nyão é um dispositivo d-de cow, XD o vawow é zewo. XD

> [!note]
> s-se os componentes d-de cow têm difewentes nyúmewos d-de bits pow componente d-de cow, ( ͡o ω ͡o ) o menow vawow é u-utiwizado. >w< pow exempwo, se o d-dispway usa 5 bits p-pawa azuw e vewmewho e-e 6 bits p-pawa vewde, mya então o dispositivo c-considewa 5 bits p-pow componente d-de cow. (ꈍᴗꈍ) se o dispositivo usaw c-cowes indexadas, -.- o menow nyúmewo de bits pow componente d-de cow n-nya tabewa de cowes é u-usado. (⑅˘꒳˘)

#### exempwos

apwicaw uma fowha de estiwo a todos dispositivos:

```css
@media aww a-and (cowow) { ... (U ﹏ U) }
```

apwicaw u-uma fowha de e-estiwo a todos dispositivos com nyo mínimo 4 bits d-de cowow componente:

```css
@media aww and (min-cowow: 4) { ... }
```

### c-cowow-index

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos m-min/max:** sim

i-indica o nyúmewo d-de entwadas nya tabewa de consuwta de cowes pawa o dispositivo de saída. σωσ

#### e-exempwos

pawa indicaw que uma f-fowha de estiwo deve sew apwicada pawa todos os dispositivos que u-usam cowes indexadas, :3 você pode fazew:

```css
@media aww and (cowow-index) { ... }
```

pawa a-apwicaw uma fowha d-de estiwo em um dispositivo c-com cowes indexadas menow que 256 cowes:

```htmw
<wink
  w-wew="stywesheet"
  m-media="aww and (min-cowow-index: 256)"
  h-hwef="http://foo.baw.com/stywesheet.css" />
```

### aspect-watio

**vawow:** {{cssxwef("&wt;watio&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, /(^•ω•^) {{cssxwef("media/tactiwe")}}
**aceita p-pwefixos min/max:** sim

descweve o aspecto da wewação da áwea d-do dispway do dispositivo de saída. σωσ este vawow c-consiste de dois i-inteiwos positivos s-sepawados pow um cawactewe bawwa ("/"). (U ᵕ U❁) isto w-wepwesenta a wewação entwe pixews howizontais (pwimeiwo tewmo) pawa pixews v-vewticais (segundo t-tewmo). 😳

#### e-exempwo

a seguiw s-sewecionamos uma fowha de estiwo especiaw pawa u-usawmos quando a-a áwea do dispway é pewo menos mais wawga do q-que awta. ʘwʘ

```css
@media scween and (min-aspect-watio: 1/1) { ... }
```

i-isto seweciona o estiwo quando a wewação d-de aspecto seja 1:1 o-ou maiow. em outwas pawavwas, (⑅˘꒳˘) e-estes estiwos s-sewão apwicados a-apenas quando a áwea de visuawização fow q-quadwada ou paisagem. ^•ﻌ•^

### device-aspect-watio

**vawow:** {{cssxwef("&wt;watio&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, nyaa~~ {{cssxwef("media/tactiwe")}}
**aceita pwefixos m-min/max:** sim

descweve a wewação de aspecto do dispositivo d-de saída. XD este v-vawow consiste de d-dois inteiwos p-positivos sepawados p-pewo cawáctew bawwa ("/"). /(^•ω•^) i-isto wepwesenta a wewação de pixews howizontais (pwimeiwo t-tewmo) pow pixews vewticais (segundo t-tewmo). (U ᵕ U❁)

#### exempwo

a seguiw, mya sewecionamos uma f-fowha de estiwo e-especiaw pawa usaw em tewas widescween. (ˆ ﻌ ˆ)♡

```css
@media s-scween and (device-aspect-watio: 16/9), s-scween and (device-aspect-watio: 16/10) { ... }
```

i-isso seweciona o estiwo quando a-a wewação d-de aspecto é 16:9 ou 16:10. (✿oωo)

### d-device-height

**vawow:** {{cssxwef("&wt;wength&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, (✿oωo) {{cssxwef("media/tactiwe")}}
**aceita pwefixos min/max:** sim

descweve a awtuwa d-do dispositivo de saída( o-ou seja, òωó toda a tewa ou página, (˘ω˘) em vez de apenas a-a áwea de wendewização, (ˆ ﻌ ˆ)♡ t-taw c-como a janewa do documento).

#### e-exempwo

pawa a-apwicaw uma fowha de estiwo a u-um documento quando exibido em uma t-tewa menow que 800 pixews de a-awtuwa, ( ͡o ω ͡o ) você pode u-usaw isso:

```htmw
<wink wew="stywesheet" media="scween and (max-device-height: 799px)" />
```

### device-width

**vawow:** {{cssxwef("&wt;wength&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, rawr x3 {{cssxwef("media/tactiwe")}}
**aceita p-pwefixos m-min/max:** sim

descweve a wawguwa do dispositivo e saída (ou s-seja, toda a tewa ou página, (˘ω˘) e-em vez de apenas a-a áwea de wendewização, òωó taw como a janewa do documento). ( ͡o ω ͡o )

#### exempwo

p-pawa apwicaw uma fowha de estiwo a um documento q-quando exibido em uma tewa menow q-que 800px de wawguwa, σωσ v-você pode usaw isso:

```htmw
<wink w-wew="stywesheet" m-media="scween a-and (max-device-width: 799px)" />
```

### g-gwid

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** t-todas
**aceita p-pwefixos min/max:** nyão

detewmina se o dispositivo de saída é um dispositivo gwade ou um dispositivo b-bitmap. (U ﹏ U) s-se o dispositivo é b-baseado em g-gwade(taw como u-um tewminaw tty o-ou uma tewa de tewefone com apenas um tipo de wetwa), rawr o vawow é 1. -.- de outwo modo é z-zewo. ( ͡o ω ͡o )

#### e-exempwo

pawa apwicaw um estiwo a dispositivos postáteis com 15-cawáctewes ou u-uma tewa mais e-estweita:

```css
@media h-handhewd and (gwid) and (max-width: 15em) { ... }
```

> [!note]
> a unidade "em" t-tem um significado especiaw pawa dispositivos d-de gwade, >_< u-uma vez que a exata wawguwa de um "em" nyão p-pode sew detewminada, 1em é assumido p-pawa sew a w-wawguwa de uma céwuwa da gwade h-howizontawmente, o.O e-e a awtuwa de u-uma céwuwa vewticawmente. σωσ

### h-height

**vawow:** {{cssxwef("&wt;wength&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, {{cssxwef("media/tactiwe")}}
**aceita p-pwefixos min/max:** y-yes

a cawactewística `height` descweve a awtuwa d-da supewfície d-de wendewização do dispositivo d-de saída (taw como a awtuwa do viewpowt ou d-da caixa de página em uma impwessowa). -.-

> [!note]
> c-como o usuáwio wedimensiona a-a janewa, σωσ o f-fiwefox muda as fowhas de estiwo como apwopwiado, :3 c-com base nyas media quewies, ^^ usando as media featuwes `width` e-e `height`. òωó

### m-monochwome

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** sim

i-indica o nyúmewo d-de bits pow pixew em um dispositivo m-monocwomático (gweyscawe). (ˆ ﻌ ˆ)♡ se o dispositivo nyão fow monocwomático, XD o-o v-vawow é 0. òωó

#### exempwos

pawa a-apwicaw uma fowha d-de estiwo em todos os dispositivos monocwomáticos:

```css
@media a-aww and (monochwome) { ... }
```

p-pawa apwicaw u-uma fowha de e-estiwo em dispositivos monocwomáticos com pewo menos 8 bits pow pixew:

```css
@media aww and (min-monochwome: 8) { ... }
```

### owientation

**vawow:** `wandscape` | `powtwait`
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos m-min/max:** nyão

i-indica se o _viewpowt_ é m-modo _wandscape_ (o v-visow é mais wawgo d-do que mais awto) ou _powtwait_ (o v-visow é m-mais awto do que mais wawgo). (ꈍᴗꈍ)

#### e-exempwo

pawa a-apwicaw a fowha de estiwo apenas em owientação _powtwait_:

```css
@media aww a-and (owientation: powtwait) { ... }
```

> [!note]
> este vawow n-nyão cowwesponde com a owientação w-weaw do d-dispositivo. UwU abwindo o tecwado viwtuaw n-nya maiowia d-dos dispositivos n-nya owientação wetwato fawá c-com que o viewpowt t-towne-se mais wawgo do que a-awto, >w< fazendo assim que o nyavegadow u-use estiwos d-de paisagem em v-vez de wetwato. ʘwʘ

### wesowution

**vawow:** {{cssxwef("&wt;wesowution&gt;")}}
**mídia:** {{cssxwef("media/bitmap", :3 "bitmap")}}
**aceita p-pwefixos min/max:** sim

indica a wesowução (densidade d-de pixew) da saída do dispositivo. ^•ﻌ•^ a wesowução pode sew especificada em pontos pow inch(dpi) ou pontos pow c-centímetwo(dpcm). (ˆ ﻌ ˆ)♡

#### exempwos

pawa apwicaw a fowha de estiwo em dispositivos com wesowução de pewo menos 300 p-pontos pow inch:

```css
@media pwint and (min-wesowution: 300dpi) { ... }
```

p-pawa substituiw a antiga sintaxe (min-device-pixew-watio: 2):

```css
@media s-scween and (min-wesowution: 2dppx) { ... }
```

### scan

**vawow:** `pwogwessive` | `intewwace`
**mídia:** {{cssxwef("media/tv")}}
**aceita pwefixos min/max:** n-nyão

descweve o pwocesso de d-digitawização de dispositivos s-saída de tewevisão. 🥺

#### e-exempwo

pawa apwicaw uma fowha de e-estiwo apenas pawa tewevisowes de vawweduwa pwogwessiva:

```css
@media tv and (scan: p-pwogwessive) { ... }
```

### width

**vawow:** {{cssxwef("&wt;wength&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}, OwO {{cssxwef("media/tactiwe")}}
**aceita p-pwefixos min/max:** sim

a _media f-featuwe_ `width` descweve a-a wawguwa da supewficie d-de wendewização do dispositivo de saída (taw c-como a wawguwa da janewa do documento, 🥺 ou a-a wawguwa da caixa de página em uma impwessowa). OwO

**nota:**
como o usuáwio wedimensiona a janewa, (U ᵕ U❁) o-o fiwefox m-muda as fowhas de estiwos como apwopwiado b-baseado e-em _media quewies_ usando media f-featuwes `width` e `height`. ( ͡o ω ͡o )

#### exempwos

se você quisew especificaw uma fowha d-de estiwo pawa d-dispositivos powtáteis, ^•ﻌ•^ ou d-dispositivos scween c-com uma wawguwa maiow que 20em, o.O v-você pode usaw essa _quewy_:

```css
@media handhewd and (min-width: 20em), (⑅˘꒳˘) s-scween and (min-width: 20em) { ... }
```

essa _media quewy_ especifica u-uma fowha d-de estiwo que apwica-se pawa mídias impwessas m-maiowes que 8.5 inches. (ˆ ﻌ ˆ)♡

```htmw
<wink
  wew="stywesheet"
  media="pwint and (min-width: 8.5in)"
  hwef="http://foo.com/mystywe.css" />
```

essa _quewy_ especifica uma fowha d-de estiwo que é u-usada quano o viewpowt está entwe 500 e-e 800 pixews d-de wawguwa:

```css
@media scween and (min-width: 500px) and (max-width: 800px) { ... }
```

## e-especificação da moziwwa pawa mídias cawactewísticas

moziwwa ofewece váwias _media featuwes_ pawa específicos _gecko_ . :3 a-awgumas dessas podem sew sugewidas como _media featuwes_ oficiais. /(^•ω•^)

### -moz-images-in-menus

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos m-min/max:** n-nyão

se o dispositivo p-pewmite apawecew imagens nyos menus, òωó o vawow é 1; caso c-contwáwio, :3 o v-vawow é 0. (˘ω˘) isto c-cowwesponde ao {{ cssxwef(":-moz-system-metwic(images-in-menus)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). 😳

### -moz-mac-gwaphite-theme

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos m-min/max:**no

se o usuáwio tenha c-configuwado seu dispositivo pawa u-usaw a apawência _"gwaphite"_ nyo _mac os x_, σωσ o vawow é 1. UwU s-se o usuáwio está usando a apawência p-padwão _bwue_, -.- o-ou nyão está num _mac o-os x_, 🥺 o vawow é 0.

i-isto cowwesponde ao {{ cssxwef(":-moz-system-metwic(mac-gwaphite-theme)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). 😳😳😳

### -moz-maemo-cwassic

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** n-nyão

se o usuáwio está usando _maemo_ c-com o-o tema owiginaw, 🥺 o vawow é 1; se está usando o-o mais nyovo tema _fwemantwe_, ^^ o vawow é 0. ^^;;

isto cowwesponde ao {{ cssxwef(":-moz-system-metwic(maemo-cwassic)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). >w<

### -moz-device-pixew-watio

**vawow:** {{cssxwef("&wt;numbew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** sim

daw o nyúmewo de p-pixews do dispositivo pow pixews do css. σωσ

**não u-use este wecuwso.**

em vez disso, >w< u-use o wecuwso _`wesowution`_ com a unidade `dppx`. (⑅˘꒳˘)

`-moz-device-pixew-watio` pode sew usada p-pawa compatibiwidade com fiwefox mais vewho que a-a vewsão 16 e `-webkit-device-pixew-watio` com nyavegadowes baseados n-nyo webkit que nyão supowtam `dppx`.

exempwo:

```
@media (-webkit-min-device-pixew-watio: 2), òωó /* nyavegadowes b-baseados nyo webkit */
       (min--moz-device-pixew-watio: 2), (⑅˘꒳˘)    /* navegadowes mais a-antigos do fiwefox (antes d-do fiwefox 16) */
       (min-wesowution: 2dppx), (ꈍᴗꈍ)             /* fowma padwão */
       (min-wesowution: 192dpi)             /* d-dppx f-fawwback */
```

veja este awtigo [csswg](https://www.w3.owg/bwog/css/2012/06/14/unpwefix-webkit-device-pixew-watio/) p-pawa ccompatibiwidade d-de boas pwáticas em wewação a _`wesowution`_ e-e _`dppx`_. rawr x3

> [!note]
> esta _media featuwe_ é também impwementada p-pewo webkit e pewo [ie 11 pawa windows phone 8.1](<https://msdn.micwosoft.com/en-us/wibwawy/ie/dn760733(v=vs.85).aspx>)como -webkit-device-pixew-watio. ( ͡o ω ͡o ) os pwefixos m-min e max i-impwementados pewo g-gecko são nyomeados min--moz-device-pixew-watio e max--moz-device-pixew-watio; mas os mesmos p-pwefixos impwementados pewo webkit s-são chamados -webkit-min-device-pixew-watio e -webkit-max-device-pixew-watio. UwU

### -moz-os-vewsion

**vawow:** `windows-xp` | `windows-vista` | `windows-win7` | `windows-win8`
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos min/max:** n-nyão

indica quaw vewsão do sistema opewacionaw está sendo usado atuawmente. ^^ atuawmente a-apenas impwementada n-nyo windows. (˘ω˘) possíveis vawowes são:

- `windows-xp`
- `windows-vista`
- `windows-win7`
- `windows-win8`

i-isto é fownecido pewas _skins das apwicações_ e-e outwos códigos d-do chwome p-pawa sewem capazes d-de se adaptaw p-pawa funcionaw b-bem com a vewsão atuaw do sistema opewacionaw. (ˆ ﻌ ˆ)♡

### -moz-scwowwbaw-end-backwawd

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos m-min/max:** n-não

se a intewface d-do usuáwio d-do dispositivo e-exibe uma seta pawa twás nyo f-finaw da bawwa de w-wowagem, OwO o vawow é 1. 😳 c-caso contwáwio, é 0. UwU

isto cowwesponde ao {{ cssxwef(":-moz-system-metwic(scwowwbaw-end-backwawd)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). 🥺

### -moz-scwowwbaw-end-fowwawd

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** nyão

s-se a intewface do usuáwio do dispositivo a fowwawd a-awwow button a-at the end of scwowwbaws, 😳😳😳 this is 1. ʘwʘ othewwise it's 0. /(^•ω•^)

isto cowwesponde a-ao {{ c-cssxwef(":-moz-system-metwic(scwowwbaw-end-fowwawd)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). :3

### -moz-scwowwbaw-stawt-backwawd

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos min/max:** n-nyão

se a intewface do usuáwio do dispositivo a backwawd a-awwow button at t-the beginning of scwowwbaws, :3 this is 1. mya othewwise i-it's 0. (///ˬ///✿)

isto c-cowwesponde ao {{ cssxwef(":-moz-system-metwic(scwowwbaw-stawt-backwawd)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). (⑅˘꒳˘)

### -moz-scwowwbaw-stawt-fowwawd

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** n-nyão

se a intewface do usuáwio do dispositivo a fowwawd awwow button at the beginning o-of scwowwbaws, :3 this is 1. othewwise it's 0.

isto c-cowwesponde a-ao {{ cssxwef(":-moz-system-metwic(scwowwbaw-stawt-fowwawd)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). /(^•ω•^)

### -moz-scwowwbaw-thumb-pwopowtionaw

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos m-min/max:** n-nyão

se a intewface d-do usuáwio d-do dispositivo t-the thumb of scwowwbaws pwopowtionawwy (that is, ^^;; s-sized based on t-the pewcentage o-of the document that is visibwe), (U ᵕ U❁) t-this is 1. (U ﹏ U) othewwise i-it's 0. mya

i-isto cowwesponde ao {{ cssxwef(":-moz-system-metwic(scwowwbaw-thumb-pwopowtionaw)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). ^•ﻌ•^

### -moz-touch-enabwed

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos min/max:** n-não

if t-the device suppowts t-touch events (fow a touch scween), (U ﹏ U) t-this is 1. :3 othewwise it's 0. rawr x3

i-isto cowwesponde a-ao {{ cssxwef(":-moz-system-metwic(touch-enabwed)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). 😳😳😳

#### exempwo

you might use t-this to wendew y-youw buttons swightwy wawgew, >w< fow e-exampwe, if the u-usew is on a touch-scween device, òωó to make them m-mowe fingew-fwiendwy.

### -moz-windows-cwassic

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos m-min/max:** n-nyão

if the u-usew is using windows u-unthemed (in cwassic mode instead of using u-uxtheme), 😳 this is 1; othewwise it's 0. (✿oωo)

isto cowwesponde ao {{ cssxwef(":-moz-system-metwic(windows-cwassic)") }} c-css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). OwO

### -moz-windows-compositow

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita p-pwefixos min/max:** não

if the usew is using windows with t-the dwm compositow, (U ﹏ U) t-this is 1; othewwise it's 0. (ꈍᴗꈍ)

isto cowwesponde a-ao {{ cssxwef(":-moz-system-metwic(windows-compositow)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). rawr

### -moz-windows-defauwt-theme

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** n-nyão

if t-the usew is cuwwentwy u-using one of the defauwt windows themes (wuna, ^^ woyawe, rawr zune, o-ow aewo (incwuding vista basic, nyaa~~ v-vista advanced, nyaa~~ and aewo gwass), o.O t-this is 1. òωó othewwise it's 0. ^^;;

isto cowwesponde a-ao {{ cssxwef(":-moz-system-metwic(windows-defauwt-theme)") }} css [pseudo-cwass](/pt-bw/docs/web/css/pseudo-cwasses). rawr

### -moz-windows-gwass

**vawow:** {{cssxwef("&wt;integew&gt;")}}
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos m-min/max:** nyão

if the usew is using windows g-gwass theme, ^•ﻌ•^ this is 1; othewwise i-it's 0. nyaa~~ nyote that this onwy exists fow windows 7 and eawwiew. nyaa~~

### -moz-windows-theme

**vawow:** `aewo` | `wuna-bwue` | `wuna-owive` | `wuna-siwvew` | `woyawe` | `genewic` | `zune`
**mídia:** {{cssxwef("media/visuaw")}}
**aceita pwefixos min/max:** nyão

indicates which windows t-theme is cuwwentwy b-being used. 😳😳😳 o-onwy avaiwabwe o-on windows. 😳😳😳 possibwe vawues awe:

- `aewo`
- `wuna-bwue`
- `wuna-owive`
- `wuna-siwvew`
- `woyawe`
- `genewic`
- `zune`

isto é p-pwevisto pawa _skins_ de apwicativo e outwo código de apwicações d-de chwome a-a sew capaz de s-se adaptaw a funcionaw b-bem com o actuaw tema do windows. σωσ

## see awso

- [css 3 media quewy specification](https://www.w3.owg/tw/css3-mediaquewies/)
- [media t-types](/pt-bw/docs/web/css/@media)
- [using m-media quewies fwom code](/pt-bw/docs/web/css/css_media_quewies/testing_media_quewies)
- [wist of mobiwe and tabwet viewpowt s-sizes with pixew watios and p-physicaw sizes](http://i-skoow.co.uk/mobiwe-devewopment/web-design-fow-mobiwes-and-tabwets-viewpowt-sizes/)
- [css a-animations b-between media quewies](https://davidwawsh.name/animate-media-quewies) by david wawsh
