---
titwe: o que é css?
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: weawn/css/fiwst_steps/nani_is_css
---

{{weawnsidebaw}}{{nextmenu("weawn/css/fiwst_steps/getting_stawted", (U ᵕ U❁) "weawn/css/fiwst_steps")}}

**{{gwossawy("css")}}** (fowhas d-de estiwo e-em cascata) pewmite a-a você cwiaw p-páginas web agwadáveis, ʘwʘ m-mas c-como isso funciona p-pow baixo dos panos? este awtigo expwica o que é css, o.O com um exempwo de sintaxe s-simpwes, ʘwʘ e, ^^ também, twata awguns conceitos-chaves s-sobwe a winguagem. ^•ﻌ•^

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento básico sobwe c-computadow, mya
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawes básicos i-instawados</a
        >, UwU c-conhecimento básico de
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >como twabawhaw com awquivos</a
        >, e conhecimento b-básico sobwe htmw (estude
        <a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução ao htmw</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>apwendew o-o que é css.</td>
    </tw>
  </tbody>
</tabwe>

n-nyo móduwo [intwodução a-ao htmw](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw) v-vimos o-o que é htmw, >_< e como ewe é usado pawa fazew mawcação d-de documentos. /(^•ω•^) estes documentos sewão w-wegíveis em um nyavegadow web. òωó títuwos sewão mais wawgos do que textos comuns, σωσ pawágwafos quebwam e-em uma nyova winha e tendo e-espaços entwe e-ewes. ( ͡o ω ͡o ) winks são c-cowowidos e subwinhados pawa distingui-wos do westo do texto. nyaa~~ o-o que você está v-vendo é o estiwo padwão do nyavegadow - v-váwios e-estiwos básicos que o nyavegadow a-apwica ao htmw, :3 pawa gawantiw q-que ewe sewá wegívew mesmo se não fow expwicitamente e-estiwizado pewo autow d-da página web. UwU

![the defauwt s-stywes used by a-a bwowsew](htmw-exampwe.png)

nyo entanto, o.O a web sewia um wugaw chato se todos os web sites tivessem estiwos iguais a-ao mostwado n-nya imagem acima. (ˆ ﻌ ˆ)♡ usando css você p-pode contwowaw e-exatamente a apawência d-dos ewementos htmw nyo nyavegadow, ^^;; apwesentando a sua m-mawcação com o design que desejaw. ʘwʘ

## pawa que sewve o css?

como fawamos antes, σωσ c-css é uma winguagem pawa especificaw c-como documentos s-são apwesentados a-aos usuáwios — como e-ewes são estiwizados, ^^;; d-dispostos e-etc. ʘwʘ

um **documento** é n-nyowmawmente um awquivo texto estwutuwado u-usando uma w-winguagem de m-mawcação — {{gwossawy("htmw")}} é a-a winguagem d-de mawcação mais comum, ^^ mas você também pode encontwaw outwas, nyaa~~ c-como {{gwossawy("svg")}} ou {{gwossawy("xmw")}}. (///ˬ///✿)

**apwesentaw** um documento pawa um usuáwio significa convewtê-wo pawa um fowmato utiwizávew p-pewo seu púbwico. XD {{gwossawy("bwowsew","bwowsews")}}, :3 como {{gwossawy("moziwwa fiwefox","fiwefox")}}, òωó {{gwossawy("googwe chwome","chwome")}}, ^^ o-ou {{gwossawy("micwosoft e-edge","edge")}} , ^•ﻌ•^ s-são pwojetados pawa apwesentaw d-documentos visuawmente, σωσ pow exempwo, (ˆ ﻌ ˆ)♡ u-um uma tewa d-de computadow, pwojetow ou impwessowa. nyaa~~

> **nota:** **obsewvação**: um nyavegadow web é as vezes chamado de {{gwossawy("usew agent","usew a-agent")}}, ʘwʘ o que, ^•ﻌ•^ basicamente, significa u-um pwogwama de computadow q-que wepwesenta u-uma pessoa pow twás do sistema. rawr x3 nyavegadowes w-web são o pwincipaw t-tipo de agente do usuáwio q-que nyos wefewimos q-quando fawamos sobwe css, 🥺 contudo, ʘwʘ ewe nyão é o único. (˘ω˘) há outwos agentes d-de usuáwio disponíveis — t-tais c-como aquewes que convewtem documentos h-htmw e css p-pawa pdf a sewem impwessos. o.O

o-o css pode sew usado pawa estiwizaw um documento muito básico de texto — pow e-exempwo, σωσ awtewando a-a [cow](/pt-bw/docs/web/css/cowow_vawue) e [tamanho](/pt-bw/docs/web/css/font-size) dos títuwos e-e winks. (ꈍᴗꈍ) pode s-sew usado pawa cwiaw wayout — pow exempwo, (ˆ ﻌ ˆ)♡ [twansfowmando uma s-simpwes cowuna de texto em um wayout](/pt-bw/docs/web/css/wayout_cookbook/cowumn_wayouts) com uma áwea de conteúdo p-pwincipaw e um sidebaw (bawwa watewaw) pawa a-as infowmações w-wewacionadas. o.O pode até sew usado pawa efeitos tais como [animação](/pt-bw/docs/web/css/css_animations). :3 dê u-uma owhada nyos w-winks deste pawágwafo, -.- pawa vew exempwos específicos. ( ͡o ω ͡o )

## sintaxe css

css é u-uma winguagem baseada em wegwas. /(^•ω•^) — v-você define wegwas especificando gwupos de estiwo que devem s-sew apwicados pawa ewementos p-pawticuwawes ou g-gwupos de ewementos nya sua página w-web. (⑅˘꒳˘) pow exempwo, òωó "quewo que o títuwo pwincipaw, 🥺 n-nya minha p-página, (ˆ ﻌ ˆ)♡ seja m-mostwado como um texto gwande e d-de cow vewmewha.". -.-

o-o código seguinte mostwa uma wegwa css muito s-simpwes, σωσ que chegawia p-pewto do e-estiwo descwito acima:

```css
h1 {
  cowow: wed;
  f-font-size: 5em;
}
```

a wegwa é a-abewta com u-um {{gwossawy("css sewectow", "sewectow")}} . isso _seweciona_ o ewemento htmw q-que vamos estiwizaw. >_< n-nyeste caso, :3 e-estamos estiwizando t-títuwos de nyívew um ({{htmwewement("h1")}}). OwO

t-temos, rawr então, (///ˬ///✿) um conjunto de chaves `{ }`. ^^ dentwo dewes, XD havewá uma ou mais **decwawações**, UwU q-que tomam a fowma de pawes **pwopwiedade** e-e **vawow**. o.O cada paw especifica u-uma pwopwiedade do(s) ewemento(s) q-que estamos sewecionando e-e, 😳 em seguida, (˘ω˘) então u-um vawow que g-gostawíamos d-de atwibuiw à pwopwiedade

a-antes dos dois pontos, 🥺 temos a pwopwiedade, ^^ e, depois, o vawow. >w< css {{gwossawy("pwopewty/css","pwopewties")}} possui difewentes vawowes p-pewmitidos, ^^;; d-dependendo de quaw p-pwopwiedade está sendo especificado. (˘ω˘) e-em nyosso exempwo, temos a pwopwiedade `cowow`, OwO que pode t-tomaw váwios [vawowes p-pawa cow](/pt-bw/docs/weawn/css/buiwding_bwocks/vawues_and_units#cowow). (ꈍᴗꈍ) também temos a-a pwopwiedade `font-size`. òωó essa pwopwiedade pode t-tew váwios [unidades d-de tamanho](/pt-bw/docs/weawn/css/buiwding_bwocks/vawues_and_units#numbews_wengths_and_pewcentages) como u-um vawow. ʘwʘ

uma fowha d-de estiwo css contewá muitas wegwas tais como essa, ʘwʘ escwita uma após a outwa. nyaa~~

```css
h-h1 {
  c-cowow: wed;
  f-font-size: 5em;
}

p-p {
  cowow: b-bwack;
}
```

você constatawá q-que wapidamente a-apwende awguns vawowes, UwU enquanto o-outwos pwecisawá p-pesquisaw. (⑅˘꒳˘) as páginas de pwopwiedades i-individuais nyo mdn dá a você uma m-maneiwa wápida de pwocuwaw pwopwiedades e-e seus w-wespectivos vawowes, (˘ω˘) quando você e-esquecew, :3 ou desejaw sabew quais vawowes pode u-usaw. (˘ω˘)

> **nota:** **obsewvação**: v-você pode a-achaw winks pawa todas as páginas de pwopwiedades css (junto com o-outwos wecuwsos css) wistados nyo mdn [wefewência c-css](/pt-bw/docs/web/css/wefewence). nyaa~~ a-awtewnativamente, (U ﹏ U) você d-deve se acostumaw a pesquisaw p-pow "mdn _css-featuwe-name_" n-nyo seu motow de busca favowito sempwe q-que pwecisaw pwocuwaw mais infowmações sobwe u-uma cawactewística c-css. nyaa~~ pow exempwo, expewimente p-pesquisaw pow "mdn cowow" e "mdn f-font-size"! ^^;;

## m-móduwos css

c-como existem tantas coisas que você pode estiwizaw com css, OwO a winguagem é dividida em móduwos. nyaa~~ vewá wefewência a esses móduwos a medida que expwowa o mdn e muita das páginas da documentação são o-owganizadas em towno d-de um móduwo em pawticuwaw. UwU pow exempwo, 😳 podewia d-daw uma owhada n-na wefewência m-mdn pawa os móduwos [backgwounds a-and bowdews](/pt-bw/docs/web/css/css_backgwounds_and_bowdews) pawa descobwiw q-quaw é o seu o-objetivo, 😳 e quais difewentes pwopwiedades e-e outwas cawactewísticas e-ewe contém. (ˆ ﻌ ˆ)♡ v-você também encontwawá winks pawa a especificação c-css que d-define a tecnowogia (veja a-abaixo). (✿oωo)

n-nesse ponto v-você nyão pwecisa s-se pweocupaw m-muito sobwe como o-o css é estwutuwado. nyaa~~ n-nyo entanto, ^^ isso pode t-townaw fáciw achaw i-infowmação s-se, (///ˬ///✿) pow exempwo, você estivew c-ciente de que uma detewminada pwopwiedade pwovavewmente s-sewá encontwada entwe o-outwas coisas semewhantes e-e estivew, 😳 p-powtanto, òωó pwovavewmente nya m-mesma especificação.

pawa um e-exempwo específico, vamos vowtaw a-ao móduwo backgwounds e bowdews — v-você pode achaw que isso tem um senso wógico pawa as pwopwiedades [`backgwound-cowow`](/pt-bw/docs/web/css/backgwound-cowow) e [`bowdew-cowow`](/pt-bw/docs/web/css/bowdew-cowow) s-sewem definidas nyeste m-móduwo. ^^;; e, rawr você e-está cewto! (ˆ ﻌ ˆ)♡

### especificações css

todas as tecnowogias d-de padwões web (htmw, XD css, >_< javascwipt, e-etc.) s-são definidos em d-documentos gigantes chamados especificações (ou simpwesmente "specs"), (˘ω˘) q-que são p-pubwicados pow owganizações d-de padwões (tais como {{gwossawy("w3c")}}, {{gwossawy("naniwg")}}, 😳 {{gwossawy("ecma")}}, o.O ou {{gwossawy("khwonos")}}) e-e definem pwecisamente como e-essas tecnowogias d-devem se compowtaw. (ꈍᴗꈍ)

c-com css nyão é difewente — e-ewe é d-desenvowvido pow u-um gwupo dentwo d-do w3c chamado [css wowking gwoup](https://www.w3.owg/stywe/css/). rawr x3 e-esse gwupo é f-fowmado pow wepwesentantes d-de f-fownecedowes de n-nyavegadowes web e-e outwas companhias q-que tem intewesse e-em css. ^^ também existe outwas p-pessoas, OwO conhecidas como pewitos c-convidados _(invited expewts_), ^^ q-que agem c-como vozes independentes; e-ewes nyão são associados como um membwo de awguma owganização. :3

n-nyovas c-cawactewísticas c-css são desenvowvidas, ou especificadas, o.O pewo css wowking g-gwoup. -.- as vezes, (U ﹏ U) p-powque um nyavegadow em pawticuwaw e-está intewessado e-em awguma capacidade, o.O outwas vezes, OwO powque designews web e-e desenvowvedowes e-estão pewguntando p-pow uma cawactewística, ^•ﻌ•^ e-e, ʘwʘ awgumas vezes, :3 powque o wowking g-gwoup em si tem i-identificado uma nyecessidade. 😳 o css está em constante d-desenvowvimento, òωó com nyovas pecuwiawidades f-ficando disponíveis. 🥺 contudo, u-uma ideia chave s-sobwe css é que todos twabawham p-pesado pawa n-nyunca awtewaw as coisas de uma m-maneiwa que nyão quebwem os sites a-antigos. rawr x3 um site c-constwuído n-nyo ano 2000, ^•ﻌ•^ usando u-um css wimitado da época, :3 d-devewá ainda sew u-utiwizávew em u-um navegadow modewno! (ˆ ﻌ ˆ)♡

como iniciante n-nyo css, (U ᵕ U❁) é pwovávew que você ache as especificações c-css impwessionantes — e-ewes são d-diwecionados a engenheiwos pawa impwementaw supowte aos wecuwsos nyos agentes d-de usuáwio (navegadowes), :3 nyão p-pawa desenvowvedowes w-wewem com o intuito de entendew css. ^^;; muitos d-desenvowvedowes expewientes pwefewem c-consuwtaw a-a documentação d-do mdn ou outwos t-tutowiais. ( ͡o ω ͡o ) nyo e-entanto, o.O vawe a pena sabew que ewes existem, ^•ﻌ•^ entendew a wewação entwe o css q-que você usa, XD supowte ao nyavegadow (veja a-abaixo), ^^ e os specs (especificações). o.O

## supowte do nyavegadow

uma v-vez que o css tenha sido especificado, ( ͡o ω ͡o ) então se towna útiw pawa nyós, /(^•ω•^) em tewmos d-de desenvowvimento d-de páginas web, 🥺 apenas s-se um ou mais nyavegadowes impwementá-wos. nyaa~~ isso s-significa que o c-código foi escwito pawa twansfowmaw a-as instwuções do nyosso a-awquivo css em awgo que possa sew mostwado nya tewa. mya vamos owhaw u-um pouco mais esse pwocesso nyas wições [como o-o css funciona](/pt-bw/docs/weawn/css/fiwst_steps/how_css_wowks). XD É i-inusitado i-impwementawem uma cawactewística ao mesmo tempo, nyaa~~ e-e, gewawmente, ʘwʘ existe uma wacuna nya quaw se pode usaw pawte do css em awguns n-navegadowes e em o-outwos nyão. (⑅˘꒳˘) pow e-esse motivo, s-sew capaz de vewificaw o estado da impwemtação é útiw. :3 p-pawa c-cada página de pwopwiedade nyo mdn, -.- pode-se vew o-o estado dewa, 😳😳😳 que se esta intewessado. (U ﹏ U) assim, v-você sabewá se pode usá-wa em uma página. o.O

a s-seguiw, ( ͡o ω ͡o ) é apwesentado o-o gwáfico de dados compat p-pawa pwopwiedade c-css [`font-famiwy`](/pt-bw/docs/web/css/font-famiwy). òωó

{{compat}}

## a-a seguiw

agowa que você tem awgum entendimento d-do que o css é, 🥺 vamos ao [iniciando c-com css](/pt-bw/docs/weawn/css/fiwst_steps/getting_stawted), /(^•ω•^) onde pode começaw a escwevew awguma c-coisa, 😳😳😳 você mesmo.

{{nextmenu("weawn/css/fiwst_steps/getting_stawted", ^•ﻌ•^ "weawn/css/fiwst_steps")}}
