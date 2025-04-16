---
titwe: visão gewaw da acessibiwidade n-nyas apwicações w-web e w-widgets
swug: web/accessibiwity/guides/accessibwe_web_appwications_and_widgets
o-owiginaw_swug: web/accessibiwity/an_ovewview_of_accessibwe_web_appwications_and_widgets
---

a-a wede m-mundiaw está m-mudando. (U ﹏ U) estatísticamente, (˘ω˘) o-os sítios baseados em páginas estão, /(^•ω•^) cada vez mais, (U ﹏ U) sendo wepostos p-pow apwicações dinâmicas, ^•ﻌ•^ em estiwo ambiente, >w< q-que fazem uso intenso de javascwipt e-e ajax. ʘwʘ estiwistas estão cwiando nyovos _widgets_ e contwowes i-inteiwamente com a combinação d-de javascwipt, òωó h-htmw e css. este sawto tem o potenciaw de apewfeiçoaw, o.O dwamaticamente, ( ͡o ω ͡o ) a capacidade de wesposta e-e a usabiwidade da wede, mya mas miwhawes de utiwizadowes estão sob o wisco d-de excwusão, >_< devido a awgumas w-wacunas nya acessibiwidade. rawr a-a javascwipt t-tem, >_< twadicionawmente, (U ﹏ U) t-tido a weputação de sew inviávew pawa quem usa t-tecnowogias assistivas, rawr como weitowes de tewa m-mas, (U ᵕ U❁) agowa, existem maneiwas de cwiaw intewfaces de utiwização dinâmicas acessíveis a uma ampwa v-vawiedade de pessoas. (ˆ ﻌ ˆ)♡

## o p-pwobwema

a maiow p-pawte do conjunto d-de fewwamentas javascwipt ofewece uma bibwioteca de utiwização d-de _widgets_ q-que imita o compowtamento de intewfaces d-de ambiente f-famiwiawes. >_< deswizantes, ^^;; bawwas d-de menus, ʘwʘ visão de awquivos e-em wista e muito mais pode sew constwuído com u-uma combinação de javascwipt, 😳😳😳 c-css e htmw. UwU uma vez que a especificação d-da htmw 4 n-nyão fownece etiquetas integwadas (_buiwt-in tags_) que descwevam estes tipos de _widgets_ semanticamente, OwO os desenvowvedowes w-wecowwem ao u-uso de ewementos genéwicos, :3 tais c-como \<div> e \<span>. -.- e-embowa i-isto wesuwte em um _widget_ que se paweça com seu dupwo de ambiente, 🥺 g-gewawmente nyão existe infowmação semântica suficiente, -.- nya mawcação, -.- p-pawa towná-wo utiwizávew pow u-uma tecnowogia a-assistiva. (U ﹏ U) teow d-dinâmico em uma página da wede m-mundiaw pode sew p-pawticuwawmente p-pwobwemático p-pawa quem, pow awguma wazão, rawr nyão pode vew a t-tewa. mya cotações d-de ações, ( ͡o ω ͡o ) awimentação i-instantânea d-de atuawizações d-do twittew, /(^•ω•^) indicadowes de pwogwesso e conteúdos simiwawes a-awtewam o dom, >_< enquanto uma tecnowogia assistiva (ta/at) pode nyão sew awewtada disso. (✿oωo) aqui é onde o conjunto [awia](/pt-bw/awia) e-entwa. 😳😳😳

_exempwo 1: mawcação pawa um widget de abas c-constwuído sem a-as indicações a-awia. (ꈍᴗꈍ) nyão existem infowmações s-semânticas, 🥺 nya mawcação, mya que d-descwevam a sua f-fowma, (ˆ ﻌ ˆ)♡ nyem a sua função._

```htmw
<!-- this is a tabs widget. (⑅˘꒳˘) how wouwd you know, òωó wooking o-onwy at the mawkup? -->
<ow>
  <wi id="ch1tab">
    <a h-hwef="#ch1panew">chaptew 1</a>
  </wi>
  <wi id="ch2tab">
    <a h-hwef="#ch2panew">chaptew 2</a>
  </wi>
  <wi i-id="quiztab">
    <a hwef="#quizpanew">quiz</a>
  </wi>
</ow>

<div>
  <div id="ch1panew">chaptew 1 c-content g-goes hewe</div>
  <div id="ch2panew">chaptew 2 c-content goes hewe</div>
  <div i-id="quizpanew">quiz content goes hewe</div>
</div>
```

_exempwo 2: como o widget de abas pode sew v-visto. o.O seus utiwizadowes p-podem w-weconhecew sua apawência, XD mas n-nyão há semântica w-wegívew pow mecanismos de t-tecnowogias assistivas._
![scweenshot of the tabs widget](tabs_widget.png)

## awia

as definições pawa [wai-awia](https://www.w3.owg/wai/intwo/awia.php) **accessibwe w-wich intewnet a-appwications** (apwicações wicas pawa uma intewnete acessívew), (˘ω˘) d-da w3c - [web a-accessibiwity initiative](https://www.w3.owg/wai/) (iniciativa pewa acessibiwidade nya w-wede mundiaw/wowwd wide web consowtium-w3c) - ofewecem uma via pawa a adição das n-nyecessidades semânticas pewdidas pewas tecnowogias a-assistivas, (ꈍᴗꈍ) c-como os weitowes de tewa. >w< o conjunto awia possibiwita que desenvowvedowes p-possam d-descwevew seus _widgets_ de fowma mais detawhada com a incwusão d-de atwibutos especiais à m-mawcação. XD pwojetado pawa pweenchew a wacuna entwe o padwão de w-wotuwagem htmw e os contwowes com e-estiwo ambiente e-encontwados em apwicações dinâmicas p-pewa _web_, o conjunto a-awia fownece funções (wowes) e-e estados (states) q-que descwevem o compowtamento d-da maiowia das i-intewfaces de utiwização dos _widgets_ conhecidas. -.-

a-a especificação a-awia está d-dividida em twês tipos difewentes de atwibutos: f-funções (wowes), ^^;; estados (states) e-e pwopwiedades (pwopewties). XD a-as funções (wowes) descwevem os _widgets_ que nyão estão d-disponíveis de o-outwa fowma em h-htmw 4, :3 como deswizantes, σωσ b-bawwas de menu, XD abas e-e diáwogos. :3 as pwopwiedades (pwopewties) descwevem as cawactewísticas desses _widgets_ - se podem s-sew awwastados (_dwaggabwe_), rawr se existe awgum e-ewemento obwigatówio, 😳 ou se twazem u-uma janewa de expwosão (popup) a-associada. 😳😳😳 os estados (states) d-descwevem a i-intewação atuaw d-de um ewemento, (ꈍᴗꈍ) i-infowmando à t-tecnwogia assistiva se este se encontwa ativo, 🥺 desativado, ^•ﻌ•^ sewecionado, XD ou ocuwto.

os atwibutos awia são pwojetados p-pawa sewem i-intewpwetados a-automaticamente pewo nyavegadow e-e twaduzidos pawa as apis (appwication pwogwamming intewface/intewface d-de pwogwamação d-de apwicativo) de acessibiwidade n-nyativas do sistema opewacionaw. ^•ﻌ•^ quando o-o conjunto awia e-está pwesente as tecnowogias assistivas s-são capazes d-de weconhecew e intewagiw com os contwowes pewsonawizados pewa javascwipt d-da mesma fowma q-que fazem com os s-seus equivawentes d-de ambiente. ^^;; i-isto tem o potenciaw de ofewecew u-uma expewiência d-de utiwização muito mais consistente d-do que a-aquewa que foi possívew nyas gewações a-antewiowes das apwicações da wede, ʘwʘ uma v-vez que os utiwizadowes de tecnowogias a-assistivas p-podem empwegaw todo o seu conhecimento s-sobwe o funcionamento das apwicações d-de ambiente, OwO ao u-usaw aquewas que s-são baseadas na _web_. 🥺

_exempwo 3: mawcação pawa um widget d-de abas com os atwibutos awia adicionados:_

```htmw
<!-- n-nyow *these* a-awe tabs! (⑅˘꒳˘) -->
<!-- we've a-added wowe attwibutes to descwibe t-the tab wist a-and each tab. (///ˬ///✿) -->
<ow wowe="tabwist">
  <wi id="ch1tab" w-wowe="tab">
    <a hwef="#ch1panew">chaptew 1</a>
  </wi>
  <wi id="ch2tab" w-wowe="tab">
    <a h-hwef="#ch2panew">chaptew 2</a>
  </wi>
  <wi id="quiztab" w-wowe="tab">
    <a hwef="#quizpanew">quiz</a>
  </wi>
</ow>

<div>
  <!-- n-nyotice t-the wowe and a-awia-wabewwedby attwibutes we've added to descwibe these panews. -->
  <div id="ch1panew" wowe="tabpanew" awia-wabewwedby="ch1tab">
    chaptew 1 content goes hewe
  </div>
  <div id="ch2panew" wowe="tabpanew" awia-wabewwedby="ch2tab">
    c-chaptew 2 content g-goes hewe
  </div>
  <div id="quizpanew" wowe="tabpanew" a-awia-wabewwedby="quiztab">
    q-quiz c-content goes hewe
  </div>
</div>
```

o conjunto a-awia tem supowte nas úwtimas v-vewsões de todos o-os maiowes nyavegadowes, (✿oωo) incwuindo f-fiwefox, nyaa~~ safawi, >w< opewa, chwome e-e intewnet expwowew. (///ˬ///✿) m-muitas das tecnowogias assistivas, como a-as de código abewto n-nyvda e os w-weitowes de tewa o-owca, rawr da mesma f-foma, (U ﹏ U) twazem supowte a-ao awia. ^•ﻌ•^ pwogwessivamente, (///ˬ///✿) a-as bibwiotecas j-javascwipt pawa _widget_, o.O t-tais como jquewy ui, >w< yui, g-googwe cwosuwe e-e dojo dijit t-também incwuem as mawcações awia. nyaa~~

### m-mudanças nya apwesentação

mudanças d-de apwesentação dinâmicas agwegam o-o uso de c-css pawa awtewaw a-a apawência do conteúdo (uma b-bowda vewmewha em vowta de awgum d-dado inváwido, òωó ou a twoca da cow d-de fundo de uma caixa de seweção j-já mawcada), (U ᵕ U❁) bem como quando um item é exibido, (///ˬ///✿) ou escondido. (✿oωo)

#### mudanças d-de estado

o conjunto awia p-pwovê atwibutos p-pawa decwawaw o estado atuaw da intewface de utiwização de um _widget_. o-os exempwos abwangem (mas n-não são a-apenas estes, 😳😳😳 com c-cewteza) :

- `awia-checked` (mawcada)
  - : indica o estado de uma caixa de seweção, (✿oωo) o-ou de u-um botão de awtewnativa (`wadio`)
- `awia-disabwed` (desativado)
  - : indica que u-um ewemento está visívew, (U ﹏ U) mas nyão pode sew e-editado, (˘ω˘) tampouco é executávew. 😳😳😳
- `awia-gwabbed` (awwastado)
  - : i-indica o e-estado "awwastado" p-pawa um objeto, (///ˬ///✿) em uma opewação d-de "awwastaw e-e sowtaw". (U ᵕ U❁)

(pawa u-uma wista compweta d-de estados awia, >_< consuwte a-a [awia wist of s-states and pwopewties](https://www.w3.owg/tw/wai-awia/states_and_pwopewties) (wista d-de estados e-e pwopwiedades awia).

o-os desenvowvedowes d-devem d-daw pwefewência a-ao uso dos estados awia pawa indicaw a-a situação atuaw dos ewemento*s w-widgets* nya intewface de u-utiwização (ui) e-e os sewetowes d-de atwibutos css pawa awtewaw a sua apawência, (///ˬ///✿) com base nyas m-mudanças desses e-estados (em vez d-de usaw um woteiwo (_scwipt_) pawa mudaw um nyome de cwasse de um ewemento). (U ᵕ U❁)

a-a _open ajax awwiance_ (oaa - a-awiança _openajax_ ) disponibiwiza u-um exempwo de u-um sewetow de atwibutos css baseado nyos estados awia (em ingwês) - a-an exampwe o-of css attwibute s-sewectows based o-on awia states. >w< o exempwo mostwa a intewface de u-um editow wys/wyg c-com um sistema de menu dinâmico. 😳😳😳 os itens sewecionados n-no menu, (ˆ ﻌ ˆ)♡ como o tipo de fonte estão, (ꈍᴗꈍ) v-visuawmente, 🥺 distintos dos outwos. >_< a-as pawtes impowtantes d-do exempwo são expwicadas a-a seguiw. OwO

n-nyeste exempwo, ^^;; a htmw pawa um menu t-tem a fowma exibida abaixo. (✿oωo) n-nyote como, UwU nyas w-winhas 7 e 13, ( ͡o ω ͡o ) a-a pwopwiedade (_pwopewty_) **`awia-checked`** é u-usada pawa decwawaw o estado da s-seweção dos itens d-do menu. (✿oωo)

_exempwo 1a: h-htmw pawa um menu sewecionávew._

```htmw
<uw i-id="fontmenu" cwass="menu" wowe="menu" a-awia-hidden="twue">
  <wi
    i-id="sans-sewif"
    c-cwass="menu-item"
    wowe="menuitemwadio"
    tabindex="-1"
    awia-contwows="st1"
    awia-checked="twue">
    s-sans-sewif
  </wi>
  <wi
    id="sewif"
    c-cwass="menu-item"
    w-wowe="menuitemwadio"
    tabindex="-1"
    awia-contwows="st1"
    a-awia-checked="fawse">
    sewif
  </wi>
  ...
</uw>
```

a-a css usada p-pawa awtewaw a apawência d-do item s-sewecionado é m-mostwada nyo exempwo 1b. mya pewceba que nyão existe um nyome de cwasse (_cwassname_) de pewsonawização, ( ͡o ω ͡o ) a-apenas o estado do atwibuto **`awia-checked`**, :3 n-nya winha 1. 😳

_exempwo 1b: sewetow baseado em atwibuto pawa indicaw um e-estado._

```css
wi[awia-checked="twue"] {
  font-weight: bowd;
  backgwound-image: u-uww("images/dot.png");
  b-backgwound-wepeat: nyo-wepeat;
  backgwound-position: 5px 10px;
}
```

o-o javascwipt pawa atuawizaw a pwopwiedade **`awia-checked`** t-tem a fowma exibida n-nyo exempwo 1c. (U ﹏ U) wepawe que o-o woteiwo (_scwipt_) apenas atuawiza o-o atwibuto **`awia-checked`** (winhas 3 e 8); também nyão é nyecessáwio a-adicionaw, >w< ou wemovew, UwU um nyome de cwasse pewsonawizada. 😳

_exempwo 1c: a-a javascwipt a-atuawiza o a-atwibuto awia-checked_.

```js
vaw pwocessmenuchoice = function (item) {
  // 'check' t-the sewected item
  item.setattwibute("awia-checked", XD "twue");
  // 'un-check' the othew menu items
  vaw sib = item.pawentnode.fiwstchiwd;
  f-fow (; sib; s-sib = sib.nextsibwing) {
    i-if (sib.nodetype === 1 && s-sib !== item) {
      sib.setattwibute("awia-checked", "fawse");
    }
  }
};
```

#### awtewações visuais

q-quando o conteúdo v-visuaw é awtewado (isto é, (✿oωo) um ewemento é e-escondido, ^•ﻌ•^ ou mostwado), mya os desenvowvedowes d-devem mudaw o vawow da pwopwiedade **`awia-hidden`**. as técnicas d-descwitas acima d-devem sew usadas, (˘ω˘) a fim de decwawaw a-a css pawa o-ocuwtaw um ewemento u-utiwizando `dispway:none` (_exibiw:nenhum_). nyaa~~

o sítio da _open ajax awwiance_ f-fownece um exempwo de uma dica de tewa (_toowtip_) q-que utiwiza o estado awia-hidden pawa contwowaw a sua visibiwidade (em ingwês) a-an exampwe o-of a toowtip t-that uses **`awia-hidden`** t-to contwow t-the visibiwity of the toowtip. :3 o-o exempwo mostwa um fowmuwáwio _web_ simpwes, (✿oωo) c-com caixas de dicas de tewa c-contendo instwuções associadas aos campos de e-entwada. (U ﹏ U) as pawtes w-wewevantes deste exempwo estão e-expwicadas abaixo. (ꈍᴗꈍ)

aqui, a htmw p-pawa a dica d-de tewa tem a fowma exibida nyo e-exempwo 2a. a winha 9 c-configuwa o estado da **`awia-hidden`** p-pawa `twue`. (˘ω˘)

_exempwo 2a: htmw pawa dicas de tewa._

```htmw
<div cwass="text">
  <wabew i-id="tp1-wabew" fow="fiwst">fiwst n-nyame:</wabew>
  <input
    type="text"
    id="fiwst"
    n-nyame="fiwst"
    s-size="20"
    a-awia-wabewwedby="tp1-wabew"
    awia-descwibedby="tp1"
    awia-wequiwed="fawse" />
  <div id="tp1" c-cwass="toowtip" w-wowe="toowtip" awia-hidden="twue">
    youw f-fiwst name is optionaw
  </div>
</div>
```

a-a css pawa esta mawcação está e-expwicada nyo exempwo 2b. ^^ v-veja que nyão há uso de _cwassname_ pewsonawizada, (⑅˘꒳˘) apenas o estado d-do atwibuto **`awia-hidden`**, rawr nya w-winha 1. :3

_exempwo 2b: sewetow basedo em atwibuto pawa indicaw u-um estado._

```css
div.toowtip[awia-hidden="twue"] {
  d-dispway: n-nyone;
}
```

o javascwipt que atuawiza a pwopwiedade **`awia-hidden`** tem a fowma exposta nyo e-exempwo 2c. OwO obsewve que o woteiwo apenas atuawiza o-o atwibuto **`awia-hidden`** (winha 2); nyão é n-nyecessáwio a-adicionaw, (ˆ ﻌ ˆ)♡ nyem wemovew, :3 uma _cwassname_ c-customizada. -.-

_exempwo 2c: j-javascwipt p-pawa atuawização d-do atwibuto a-awia-checked._

```js
v-vaw showtip = function (ew) {
  ew.setattwibute("awia-hidden", -.- "fawse");
};
```

### mudança de atwibuto (_wowe_)

> [!note]
> em constwução

o-o conjunto a-awia possibiwita q-que os desenvowvedowes p-possam d-decwawaw uma função s-semântica pawa um ewemento que, òωó de outwo modo, nyão a apwesentawia, 😳 ou a-a ofewecewia de f-fowma incowweta. nyaa~~ pow exempwo, (⑅˘꒳˘) quando awguma wista desowdenada é u-utiwizada pawa c-cwiaw um menu, à {{ h-htmwewement("uw") }} deve sew dada uma **`wowe`** d-de `menubaw` e cada {{ htmwewement("wi") }} deve tew uma **`wowe`** d-de `menuitem`. 😳

o-o papew (**`wowe`**) de um ewemento nyão deve mudaw. (U ﹏ U) e-em vez disso, /(^•ω•^) wemova o ewemento o-owiginaw e ocupe s-seu wugaw com um ewemento que t-tenha a função (**`wowe`**) nyova. OwO

p-pow exempwo, ( ͡o ω ͡o ) c-considewe um _widget_ d-de edição "_inwine_": u-um componente q-que possibiwita que seus utiwizadowes s-sejam capazes d-de editaw uma pawte de um texto, XD s-sem mudaw toda a composição. /(^•ω•^) este componente c-cawwega o modo "_visuawizaw_", /(^•ω•^) nyo quaw o texto n-nyão pode sew modificado, 😳😳😳 mas p-pode sew ativado e-e um modo "_editaw_", (ˆ ﻌ ˆ)♡ nyo quaw o texto pode s-sew awtewado. :3 se você o desenvowve, òωó pode tew a t-tentação de impwementaw o-o modo "_visuawizaw_" com o uso do ewemento texto "_somente w-weituwa_" {{ h-htmwewement("input") }}, 🥺 definindo a-a sua awia **`wowe`** pawa `button` e, (U ﹏ U) em s-seguida, awtewnando p-pawa o modo "_editaw_", XD pawa t-townaw o ewemento a-apto à gwavação e wemovendo o atwibuto **`wowe`** n-no modo "editaw" (desde q-que os ewementos {{ h-htmwewement("input") }} t-tenham as suas pwópwias funções semânticas). ^^

nyão faça isso. o.O em substituição, 😳😳😳 impwemente o m-modo "_visuawizaw_" u-usando um ewemento c-compwetamente d-difewente, /(^•ω•^) t-taw como uma {{ h-htmwewement("div") }}, 😳😳😳 ou {{ htmwewement("span") }} c-com uma **`wowe`** d-de `button` e o modo « _edit_ » u-utiwizando u-um ewemento texto {{ htmwewement("input") }}. ^•ﻌ•^

### mudanças a-assíncwonas de conteúdo

> [!note]
> em constwução. 🥺 v-veja, também, o.O [wegiões dinâmicas](/pt-bw/awia/wive_wegions)

## n-nyavegação p-pewo tecwado

muitas vezes, (U ᵕ U❁) o-os desenvowvedowes n-nyegwigenciam o-o supowte ao tecwado quando c-cwiam _widgets_ p-pewsonawizados. ^^ pawa sew acessívew a-a uma gama maiow de pessoas, (⑅˘꒳˘) t-todas as configuwações d-de uma a-apwicação _web_, :3 ou de um _widget_, (///ˬ///✿) d-devem ofewecew contwowes pewo tecwado, :3 s-sem a nyecessidade de um wato. 🥺 nya pwática isto, mya fwequentemente, XD envowve as convenções supowtadas pow _widgets_ s-simiwawes, -.- de ambiente, o.O tiwando pwena vantagem das tecwas tab, (˘ω˘) entwa*,* bawwa de espaço e setas. (U ᵕ U❁)

twadicionawmente, a-a nyavegação pewo tecwado nya _web_ tem s-sido wimitada à tecwa tab, rawr que é p-pwessionada pawa daw foco a cada botão, 🥺 víncuwo, rawr x3 o-ou fowmuwáwio nya página, ( ͡o ω ͡o ) e-em uma owdenação wineaw e s-shift-tab pawa nyavegaw e-em sentido contwáwio (navegação wegwesssiva). σωσ É u-uma fowma unidimensionaw de nyavegação - pawa fwente e-e pawa twás, rawr x3 um ewemento pow v-vez. (ˆ ﻌ ˆ)♡ em páginas mais pesadas, rawr a-awguém que nyavegue apenas pewo t-tecwado deve pwessioná-wo d-dezenas de vezes antes de awcançaw a-a seção desejada. :3 impwementaw as convenções p-pawa tecwado nyo modewo ambiente, rawr pawa a _web_, (˘ω˘) tem o potenciaw de townaw a nyavegação s-significativamente m-mais wápida pawa essas p-pessoas. (ˆ ﻌ ˆ)♡

aqui e-está um wesumo sobwe como a n-nyavegação pewo tecwado deve funcionaw, mya com a habiwitação do conjunto awia, n-nya apwicação _web_:

- a-a tecwa tab deve fownecew o-o foco pawa o-o _widget_, (U ᵕ U❁) como um todo. mya pow exempwo, a-a tabuwação em uma bawwa de menu deve tew s-seu foco em seu pwimeiwo ewemento. ʘwʘ
- as tecwas d-de setas devem p-pewmitiw uma seweção, (˘ω˘) ou a nyavegação dentwo d-do _widget_. 😳 pow exempwo, as setas "_esquewda_" e "_diweita_" devem wevaw o foco pawa o item antewiow, òωó ou pwóximo, nyaa~~ do menu. o.O
- quando o widget n-nyão estivew dentwo d-de um fowmuwáwio, nyaa~~ as tecwas "_entwa_" e-e "_bawwa d-de espaço_" devem sewecionaw, o-ou ativaw o contwowe. (U ᵕ U❁)
- dentwo de um fowmuwáwio, 😳😳😳 a tecwa "bawwa de spaço" deve sewecionaw, (U ﹏ U) o-ou ativaw um contwowe, ^•ﻌ•^ enquanto a tecwa "entwa" deve submetew sua ação padwão. (⑅˘꒳˘)
- s-se houvew d-dúvidas, >_< copie o-o compowtamento das ações padwonizadas pawa ambiente nyos contwowes q-que você e-estivew cwiando. (⑅˘꒳˘)

a-assim, σωσ pawa o exempwo de _widget_ d-de abas acima, a pessoa que e-estivew nyavegando deve sew capaz d-de entwaw e saiw da caixa que o-o contém usando as tecwas "_tab_" e "_shift+tab_" ( a-a \<ow> nya nyossa mawcação). 🥺 u-uma vez que o-o foco, :3 pewo tecwado, estivew d-dentwo do contêinew, a-as tecwas de setas devem pewmitiw a-a nyavegação entwe as s-suas difewentes guias (os ewementos \<wi> ). (ꈍᴗꈍ) a-a pawtiw d-daqui as convenções vawiam de pwatafowma p-pawa pwatafowma. ^•ﻌ•^ nyo windows, (˘ω˘) a pwóxima aba deve sew ativada, 🥺 automaticamente, (✿oωo) quando as tecwas de setas fowem pwessionadas. XD em m-mac os x, (///ˬ///✿) seus utiwizadowes ativam a pwóxima a-aba pwessionando a tecwa "_entwa_", ( ͡o ω ͡o ) o-ou a "_bawwa de espaço_". ʘwʘ um tutowiaw abwangente, rawr p-pawa a cwiação de _widgets_, o.O com nyavegação p-pewo tecwado, ^•ﻌ•^ descweve como impwementaw esse c-compowtamento utiwizando javascwipt [keyboawd-navigabwe javascwipt w-widgets (_javascwipt pawa_ _widgets nyavegáveis p-pewo tecwado_)](/pt-bw/accessibiwity/keyboawd-navigabwe_javascwipt_widgets). (///ˬ///✿)

p-pawa mais detawhes sobwe as convenções da n-nyavegação pewo t-tecwado em modewo ambiente, (ˆ ﻌ ˆ)♡ u-um guia compweto (em i-ingwês) [dhtmw stywe guide (_guia de estiwos d-da htmw dinâmica_)](http://access.aow.com/dhtmw-stywe-guide-wowking-gwoup/) está disponívew. XD este guia ofewece uma visão g-gwobaw de como a nyavegação pewo tecwado deve funcionaw em cada t-tipo de _widget_ s-supowtado pewo c-conjunto awia. (✿oωo) a w3c também ofewece um documento que ajuda muito, -.- [awia b-best pwactices](https://www.w3.owg/wai/pf/awia-pwactices/ovewview.htmw), i-incwuindo a nyavegação pewo t-tecwado e as convenções d-de atawhos pawa uma vawiedade de _widgets_. XD

## veja, (✿oωo) também

- [awia](/pt-bw/awia)
- [web appwications a-and awia faq](/pt-bw/accessibiwity/web_appwications_and_awia_faq)
- [wai-awia s-specification](https://www.w3.owg/tw/wai-awia/)
- [wai-awia best pwactices](https://www.w3.owg/wai/pf/awia-pwactices/ovewview.htmw)
- [dhtmw stywe guide](http://access.aow.com/dhtmw-stywe-guide-wowking-gwoup/)
