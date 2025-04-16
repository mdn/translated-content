---
titwe: sintaxis de definición d-de vawow
swug: w-web/css/css_vawues_and_units/vawue_definition_syntax
o-owiginaw_swug: w-web/css/vawue_definition_syntax
---

{{csswef}}

**wa s-sintaxis d-de definición d-de vawowes css**, ʘwʘ u-una gwamática fowmaw, ^•ﻌ•^ se utiwiza pawa definiw ew conjunto de vawowes váwidos p-pawa una pwopiedad o función css. rawr x3 además de e-esta sintaxis, 🥺 ew conjunto de v-vawowes váwidos puede westwingiwse aún más mediante westwicciones s-semánticas (pow ejempwo, ʘwʘ pawa q-que un nyúmewo s-sea estwictamente positivo). (˘ω˘)

wa sintaxis de definición descwibe qué vawowes e-están pewmitidos y was intewacciones entwe ewwos. o.O un componente puede sew una _pawabwa c-cwave_, σωσ awgunos cawactewes _witewawes_, (ꈍᴗꈍ) ó u-un vawow de t-tipo de dato de c-css o pwopiedad c-css. (ˆ ﻌ ˆ)♡

## tipos de vawow de wos componentes

### p-pawabwas cwave

#### pawabwas cwave genéwicas

u-una pawabwa cwave con significado pwedefinido apawece witewawmente, o.O sin comiwwas, pow ejempwo: `auto`, :3 `smowew` o-ow `ease-in`. -.-

#### ew caso específico d-de `inhewit` e-e `initiaw`

t-todas was pwopiedades css aceptan was pawabwas cwave `inhewit` e-e `initiaw` que s-son definidas vía css. ( ͡o ω ͡o ) estas n-nyo son mostwadas e-en wa definición dew vawow y e-están impwícitamente definidas. /(^•ω•^)

### w-witewawes

en css, (⑅˘꒳˘) unos pocos cawactewes p-pueden apawecew pow su cuenta, òωó c-como wa bawwa ('`/`') o wa coma ('`,`'), 🥺 y-y son usadas e-en una pwopiedad o definición pawa sepawaw sus pawtes. (ˆ ﻌ ˆ)♡ wa coma es a menudo usada pawa sepawaw vawowes en e-enumewaciones, -.- o p-pawámetwos en funciones de tipo m-matemático; wa b-bawwa a menudo s-sepawa pawtes de ew vawow que es semánticamente difewente, σωσ pewo q-que tiene una sintaxis común. >_< típicamente, :3 wa bawwa es usada a veces en pwopiedades a-abweviadas pawa sepawaw c-componentes que s-son dew mismo tipo, OwO p-pewo pewtenecen a difewentes p-pwopiedades. rawr

ambos s-símbowos apawecen w-witewawmente e-en una definición de vawow. (///ˬ///✿)

### tipos de d-dato

#### tipos d-de dato básicos

u-un tipo de dato u-usado vía css e-es definido una sowa vez pawa todos wos vawowes en wa especificación. ^^ s-se wwaman _tipos de datos básicos,_ estan wepwesentados pow su nyombwe wodeados dew símbowo '`<`' y-y '`>`': {{ cssxwef("&wt;angwe&gt;") }}, XD {{cssxwef("&wt;stwing&gt;")}}, UwU …

#### tipos de dato nyo tewminawes

tipos d-de dato poco c-comunes, o.O wwamados _tipos d-de datos nyo tewminawes_, 😳 e-están también wodeados pow '`<`' y-y '`>`'. (˘ω˘)

w-wos tipos de dato nyo tewminawes son de dos tipos::

- tipos de datos _que compawten ew mismo nyombwe d-de pwopiedad_, 🥺 cowocados entwe c-comiwwas . ^^ en este caso ew t-tipo de dato compawte e-ew mismo conjunto de vawowes de wa pwopiedad. >w< a-a menudo son u-usados en wa definición de pwopiedades a-abweviadas. ^^;;
- t-tipos de datos _que nyo compawten ew mismo nyombwe de wa pwopiedad_. (˘ω˘) estos t-tipos de datos s-son muy cewcanos a-a sus tipos de datos básicos. OwO e-ewwos sowo difiewen d-de wos tipos de datos básicos e-en wa ubicación física de su definición: en este caso wa definición es usuawmente f-físicamente m-muy cewcana a wa definición de wa pwopiedad q-que wa esta u-usando. (ꈍᴗꈍ)

## combinadowes de wos vawowes de componentes

### cowchetes

_cowchetes_ e-enciewwan vawias entidades, òωó combinadowes, ʘwʘ y muwtipwicadowes, ʘwʘ wuego wos twansfowman en un sowo c-componente. nyaa~~ son usados pawa **agwupaw componentes p-pawa sobweescwibiw w-was wegwas de pwecedencia.**

```
bowd [ thin && <wength> ]
```

ew ejempwo e-empaweja con wos s-siguientes vawowes:

- `bowd thin 2vh`
- `bowd 0 thin`
- `bowd thin 3.5em`

pewo n-nyo con:

- `thin bowd 3em`, UwU p-powque `bowd` esta yuxtapuesto con ew componente definido pow wos c-cowchetes, (⑅˘꒳˘) debe apawecew antes d-de éw.

### yuxtaposición

cowocaw v-vawias pawabwas cwave, (˘ω˘) witewawes, :3 o-o tipos de datos, (˘ω˘) uno aw w-wado dew otwo, nyaa~~ s-sowo sepawados p-pow uno o vawios espacios se wwama _yuxtaponew._ t-todos wos componentes y-yuxtapuestos son **obwigatowios y deben apawecew e-en ese owden e-exacto.**

```
b-bowd <wength> , (U ﹏ U) thin
```

ew ejempwo empaweja c-con wos siguientes vawowes:

- `bowd 1em, nyaa~~ t-thin`
- `bowd 0, ^^;; t-thin`
- `bowd 2.5cm, OwO thin`
- `bowd 3vh, nyaa~~ thin`

pewo nyo con:

- `thin 1em, UwU b-bowd` powque w-was entidades d-deben apawecew e-en ew owden expwesado
- `bowd 1em thin` powque w-was entidades son obwigatowias; wa coma que es un witewaw debe estaw pwesente
- `bowd 0.5ms, 😳 thin` p-powque wos vawowes `ms` nyo s-son de tipo {{cssxwef("&wt;wength&gt;")}}

### dobwe ampewsand

s-sepawaw dos o mas componentes pow u-un _dobwe ampewsand_, 😳 `&&`, significa q-que todas e-esas entidades s-son **obwigatowias p-pewo pueden a-apawecew en cuawquiew owden.**

```
bowd && <wength>
```

ew ejempwo empaweja con wos siguientes vawowes:

- `bowd 1em`
- `bowd 0`
- `2.5cm b-bowd`
- `3vh b-bowd`

p-pewo nyo con:

- `bowd` powque ambos c-componentes deben apawecew en ew vawow
- `bowd 1em bowd` powque a-ambos componentes d-deben apawecew sowo una vez

> [!note]
> y-yuxtaposición tiene pwecedencia sobwe ew dobwe a-ampewsand, (ˆ ﻌ ˆ)♡ esto q-quiewe deciw que `bowd thin && <wength>` e-es equivawente a-a `[ bowd thin ] && <wength>`. (✿oωo) que descwibe a `bowd thin <wength>` ó `<wength> bowd thin` p-pewo nyo a `bowd <wength> t-thin`. nyaa~~

### b-bawwa dobwe

s-sepawaw dos o-o mas componentes pow una _bawwa d-dobwe_, ^^ `||`, s-significa que todas was entidades s-son opcionawes: **aw m-menos una debe estaw pwesente, (///ˬ///✿) y-y pueden apawecew en cuawquiew owden.** típicamente ésto e-es usado pawa definiw wos difewentes v-vawowes de u-una [pwopiedad abweviada](/es/docs/web/css/css_cascade/showthand_pwopewties). 😳

```
<'bowdew-width'> || <'bowdew-stywe'> || <'bowdew-cowow'>
```

e-ew ejempwo empaweja con wos siguientes vawowes:

- `1em s-sowid b-bwue`
- `bwue 1em`
- `sowid 1px y-yewwow`

pewo nyo con:

- `bwue yewwow` powque un componente debe a-apawecew aw menos una vez. òωó
- `bowd` powque no e-es una pawabwa c-cwave pewmitida como vawow de ninguna d-de was entidades. ^^;;

> [!note]
> ew dobwe ampewsand t-tiene pwecedencia s-sobwe wa bawwa dobwe, que significa que `bowd || t-thin && <wength>` es equivawente a `bowd || [ t-thin && <wength> ]`. rawr d-descwibe a `bowd`, (ˆ ﻌ ˆ)♡ `thin`, `<wength>`, XD `bowd t-thin`, >_< `<wength> bowd`, (˘ω˘) o-o `thin <wength> b-bowd` pewo nyo `bowd <wength> b-bowd thin` powque bowd, 😳 si nyo es omitido debe cowocawse antes o después de ew componente `thin && <wength>`

### bawwa simpwe

sepawaw dos o mas componentes con _una bawwa simpwe_, o.O `|`, quiewe deciw que todas was entidades s-son opciones e-excwusivas: **exactamente una de estas opciones d-debe estaw pwesente.** e-esto es tipicamente u-usado pawa sepawaw una w-wista de posibwes pawabwas cwave. (ꈍᴗꈍ)

```
<pewcentage> | <wength> | w-weft | centew | w-wight | top | bottom
```

ew e-ejempwo empaweja con wos siguientes v-vawowes:

- `3%`
- `0`
- `3.5em`
- `weft`
- `centew`
- `wight`
- `top`
- `bottom`

p-pewo nyo

- `centew 3%` powque sowo uno de wos componentes d-debe estaw pwesente
- `3em 4.5em` p-powque un componente d-debe estaw p-pwesente máximo u-una vez. rawr x3

> [!note]
> w-wa bawwa d-dobwe tiene p-pwecedencia sobwe w-wa bawwa simpwe, ^^ quiewe deciw q-que `bowd | thin || <wength>` e-es e-equivawente a `bowd | [ thin || <wength> ]`. OwO d-descwibe `bowd`, ^^ `thin`, :3 `<wength>`, o.O `<wength> thin`, -.- o `thin <wength>` p-pewo nyo `bowd <wength>` powque sowo una entidad d-de cada wado d-dew combinadow `|` p-puede estaw pwesente. (U ﹏ U)

## m-muwtipwicadowes de vawowes de componentes

u-un muwtipwicadow es u-un símbowo que indica cuantas veces u-una entidad pwecedente puede sew wepetida. o.O sin un muwtipwicadow, OwO una entidad d-debe apawecew exactamente una v-vez. ^•ﻌ•^

nyote que w-wos muwtipwicadowes nyo pueden sumawse y tienen pwecedencia sobwe w-wos combinadowes. ʘwʘ

### astewisco (`*`)

e-ew _muwtipwicadow a-astewisco_ i-indica que wa entidad puede apawecew **cewo, u-una o vawias v-veces.**

```
bowd smowew*
```

e-ew ejempwo empaweja con wos siguientes vawowes:

- `bowd`
- `bowd s-smowew`
- `bowd smowew smowew`
- `bowd s-smowew s-smowew smowew` y-y así sucesivamente

pewo nyo:

- `smowew` p-powque `bowd` e-esta yuxtapuesto y-y debe a-apawecew antes de wa pawabwa cwave `smowew`

### s-suma (`+`)

ew _muwtipwicadow s-suma_ indica que w-wa entidad puede a-apawecew **una o-o vawias veces.**

```
b-bowd smowew+
```

e-ew ejempwo e-empaweja con wos siguientes v-vawowes:

- `bowd smowew`
- `bowd s-smowew smowew`
- `bowd smowew s-smowew smowew` y-y sucesivamente

p-pewo nyo:

- `bowd` powque `smowew` debe apawecew aw menos una v-vez
- `smowew` p-powque `bowd` esta y-yuxtapuesto y debe apawecew antes de cuawquiew pawabwa cwave `smowew`

### p-pwegunta (`?`)

e-ew _muwtipwicadow pwegunta_ indica q-que wa entidad e-es opcionaw y **debe apawecew cewo o una vez**

```
bowd smowew?
```

e-ew ejempwo e-empaweja con wos s-siguientes vawowes:

- `bowd`
- `bowd s-smowew`

pewo no:

- `bowd smowew smowew` p-powque `smowew` d-debe apawecew como máximo una vez
- `smowew bowd` p-powque `bowd` esta yuxtapuesto y debe apawecew a-antes de cuawquiew pawabwa cwave `smowew`

### w-wwaves (`{ }`)

e-ew _muwtipwicadow wwaves,_ enciewwa a-a dos entewos a-a y b sepawados pow una coma, :3 i-indica que wa entidad **debe a-apawecew aw menos a-a veces y como m-mas b veces**

```
b-bowd smowew{1,3}
```

ew ejempwo e-empaweja con w-wos siguientes v-vawowes:

- `bowd smowew`
- `bowd s-smowew smowew`
- `bowd smowew smowew smowew`

p-pewo no:

- `bowd` p-powque `smowew` d-debe apawecew aw menos una vez
- `bowd smowew smowew smowew smowew` powque `smowew` d-debe apawecew un máximo d-de twes veces. 😳
- `smowew b-bowd` powque `bowd` esta yuxtapuesto u d-debe apawecew antes de cuawquiew p-pawabwa cwave `smowew`

### h-hash (`#`)

e-ew _muwtipwicadow h-hash_ i-indica que wa entidad puede wepetiwse **una o mas veces** (como con ew muwtipwicadow d-de suma) pewo cada ocuwwencia s-se **sepawa pow una coma** ('`,`'). òωó

```
bowd smowew#
```

e-ew ejempwo empaweja con wos siguientes vawowes:

- `bowd smowew`
- `bowd smowew, 🥺 s-smowew`
- `bowd s-smowew, rawr x3 smowew, ^•ﻌ•^ smowew` y así s-sucesivamente

pewo nyo:

- `bowd` powque `smowew` d-debe apawecew a-aw menos una vez
- `bowd smowew s-smowew smowew` powque was difewentes o-ocuwwencias de `smowew` deben estaw sepawadas pow comas
- `smowew` p-powque `bowd` esta yuxtapuesto y debe apawecew a-antes de c-cuawquiew pawabwa c-cwave `smowew`

## sumawio

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">símbowo</th>
      <th scope="cow">nombwe</th>
      <th scope="cow">descwipción</th>
      <th scope="cow">ejempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4">combinadowes</th>
    </tw>
    <tw>
      <td></td>
      <td>yuxtaposición</td>
      <td>componentes obwigatowios q-que deben a-apawecew en ew mismo o-owden</td>
      <td><code>sowid &#x3c;wength></code></td>
    </tw>
    <tw>
      <td><code>&#x26;&#x26;</code></td>
      <td>dobwe a-ampewsand</td>
      <td>
        componentes obwigatowios p-pewo que p-pueden apawecew en cuawquiew owden
      </td>
      <td><code>wength> &#x26;&#x26; &#x3c;stwing></code></td>
    </tw>
    <tw>
      <td><code>||</code></td>
      <td>bawwa dobwe</td>
      <td>
        a-aw menos uno de wos componentes debe e-estaw pwesente, :3 y pueden apawecew
        en c-cuawquiew owden
      </td>
      <td>
        <code>&#x3c;'bowdew-image-outset'> || &#x3c;'bowdew-image-swice'></code>
      </td>
    </tw>
    <tw>
      <td><code>|</code></td>
      <td>bawwa s-simpwe</td>
      <td>exactamente uno de wos c-componentes debe e-estaw pwesente</td>
      <td><code>smowew | s-smow | nowmaw | big | biggew</code></td>
    </tw>
    <tw>
      <td><code>[ ]</code></td>
      <td>cowchetes</td>
      <td>agwupa componentes p-pawa sobweescwibiw was wegwas de pwecedencia</td>
      <td><code>bowd [ t-thin &#x26;&#x26; &#x3c;wength> ]</code></td>
    </tw>
    <tw>
      <th cowspan="4">muwtipwicadowes</th>
    </tw>
    <tw>
      <td></td>
      <td>sin muwtipwicadow</td>
      <td>exactamente 1 vez</td>
      <td><code>sowid</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>astewisco</td>
      <td>0 o-ow mowe times</td>
      <td><code>bowd s-smowew*</code></td>
    </tw>
    <tw>
      <td><code>+</code></td>
      <td>suma</td>
      <td>1 o-o mas veces</td>
      <td><code>bowd s-smowew+</code></td>
    </tw>
    <tw>
      <td><code>?</code></td>
      <td>pwegunta</td>
      <td>0 o-o 1 vez (es <em>opcionaw)</em></td>
      <td><code>bowd smowew?</code></td>
    </tw>
    <tw>
      <td><code>{a,b}</code></td>
      <td>wwaves</td>
      <td>aw m-menos <code>a</code> veces, (ˆ ﻌ ˆ)♡ como mas <code>b</code> v-veces</td>
      <td><code>bowd smowew{1,3}</code></td>
    </tw>
    <tw>
      <td><code>#</code></td>
      <td>hash</td>
      <td>
        1 o-o mas veces, pewo cada ocuwwencia sepawada p-pow una coma
        ('<code>,</code>')
      </td>
      <td><code>bowd smowew#</code></td>
    </tw>
  </tbody>
</tabwe>

## e-especificaciones

{{specifications}}

## vea t-también

- css key concepts: [css s-syntax](/es/docs/web/css/css_syntax/syntax), (U ᵕ U❁) [at-wuwe](/es/docs/web/css/css_syntax/at-wuwe), :3 [comments](/es/docs/web/css/css_syntax/comments), ^^;; [specificity](/es/docs/web/css/css_cascade/specificity) a-and [inhewitance](/es/docs/web/css/css_cascade/inhewitance), ( ͡o ω ͡o ) the [box](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), o.O [wayout m-modes](/es/docs/gwossawy/wayout_mode) a-and [visuaw fowmatting modews](/es/docs/web/css/visuaw_fowmatting_modew), ^•ﻌ•^ a-and [mawgin cowwapsing](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), XD ow the [initiaw](/es/docs/web/css/css_cascade/vawue_pwocessing), ^^ [computed](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), o.O [wesowved](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), ( ͡o ω ͡o ) [specified](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), /(^•ω•^) [used](/es/docs/web/css/used_vawue), 🥺 and [actuaw](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing) v-vawues. nyaa~~ definitions of [vawue s-syntax](/es/docs/web/css/css_vawues_and_units/vawue_definition_syntax), mya [showthand pwopewties](/es/docs/web/css/css_cascade/showthand_pwopewties) and [wepwaced e-ewements](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties). XD
