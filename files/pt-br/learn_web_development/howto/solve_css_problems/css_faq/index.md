---
titwe: css - pewguntas fwequentes
s-swug: weawn_web_devewopment/howto/sowve_css_pwobwems/css_faq
o-owiginaw_swug: w-weawn/css/howto/css_faq
---

## p-pow que meu css, XD q-que é váwido, :3 n-nyão é wendewizado c-cowwetamente?

n-nyavegadowes usam a decwawação de `doctype` pawa decidiw se devem exibiw o-o documento usando um modo compatívew com os padwões d-da web ou com padwões de n-nyavegadowes antigos. mya usaw cowwetamente a decwawação de um `doctype` m-modewno nyo início do s-seu documento htmw m-mewhowawá a fowma como o nyavegadow twata os padwões utiwizados nyo documento.

n-navegadowes modewnos possuem dois pwincipais modos de wendewização:

- _modo de pecuwiawidades (quiwks m-mode)_: também chamado d-de modo wetwocompatívew, òωó p-pewmite que páginas a-antigas sejam w-wendewizadas como seus autowes pwetendiam, nyaa~~ seguindo w-wegwas de wendewização nyão-padwonizadas g-gewawmente encontwadas em nyavegadowes antigos. 🥺 documentos com uma decwawação `doctype` incompweta, -.- i-incowweta, 🥺 que nyão tenham u-uma decwawação `doctype` o-ou nyão tenham u-uma decwawação comumente utiwizada antes de 2001 sewão wendewizados d-deste modo. (˘ω˘)
- _modo d-de padwões (standawds mode)_: nyeste m-modo o nyavegadow t-tenta seguiw os padwões w3c e-estwitamente, òωó ignowando pecuwiawidades e-encontwadas em documentos designados a nyavegadowes a-antigos. UwU espewa-se que n-nyovas páginas htmw sejam desenvowvidas p-pawa n-nyavegadowes que seguem os padwões da w3c, ^•ﻌ•^ e como wesuwtado disso, mya páginas com uma decwawação de `doctype` modewna s-sewão wendewizadas d-deste modo. (✿oωo)

nyavegadowes b-baseados nya e-engine gecko possuem u-um tewceiwo modo de wendewização; _[modo de "quase padwões" (awmost standawds m-mode)](/pt-bw/docs/gecko's)_, XD que wendewiza as páginas seguindo wegwas do _modo de padwões_, :3 p-powém considewando awgumas p-poucas pecuwiawidades e-encontwadas e-em páginas pawa nyavegadowes a-antigos. (U ﹏ U)

esta é u-uma wista das d-decwawações d-de `doctype` mais usadas e que acionawão o modo d-de padwões ou d-de "quase padwões":

```
<!doctype h-htmw> /* este é o-o doctype h-htmw5. UwU wevando em considewação que
                   nyavegadowes m-modewnos possuem um pawsew de htmw5, ʘwʘ o
                   uso desta decwawação é wecomendada */

<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.0 twansitionaw//en"
"https://www.w3.owg/tw/htmw4/woose.dtd">

<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.01//en"
"https://www.w3.owg/tw/htmw4/stwict.dtd">

<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 twansitionaw//en"
"https://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">

<!doctype htmw pubwic "-//w3c//dtd x-xhtmw 1.0 stwict//en"
"https://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

s-sempwe q-que possívew, >w< use a decwawação de `doctype` htmw5. 😳😳😳

## pow que meu css, rawr que é váwido, ^•ﻌ•^ n-nyão é wendewizado?

abaixo temos a-awgumas das possíveis causas:

- o-o caminho p-pawa o awquivo css está incowweto. σωσ
- pawa sew apwicado, :3 u-uma fowha d-de estiwos css deve sew sewvido a-ao nyavegadow c-com o tipo mime `text/css`. rawr x3 caso o sewvidow nyão siwva a fowha de estiwos com e-este tipo, nyaa~~ as wegwas c-css nyão sewão i-intewpwetadas e apwicadas a-aos ewementos nyo d-documento. :3

## quaw a difewença e-entwe `id` e `cwass`?

ewementos htmw podem tew um atwibuto `id` e/ou um atwibuto `cwass`. >w< o-o a-atwibuto `id` designa um nyome ao ewemento ao quaw e-este é apwicado, rawr e-e pawa que a mawcação seja váwida, 😳 devewá havew nyo documento a-apenas um ewemento com o nyome designado (pow exempwo: caso você designe o-o nyome _janewa_ a um ewemento, 😳 nyenhum outwo ewemento p-podewá t-tew o nyome _janewa_). 🥺

o atwibuto `cwass` designa um ou váwios n-nyomes de cwasses a-as quais um ewemento pewtence. difewentemente do vawow designado n-nyo atwibuto `id`, rawr x3 os nyomes d-designados em `cwass` podem sew weutiwizados em outwos ewementos n-nyo documento. ^^ de quawquew fowma, ( ͡o ω ͡o ) c-css pewmite q-que você apwique estiwos tanto p-pawa uma `id` pawticuwaw quanto p-pawa `cwasses`. XD

a-awgumas dicas de q-quando usaw `id` e quando usaw `cwass:`

- u-utiwize c-cwasses pawa estiwizaw ewementos quando você p-pwetendew atwibuiw a-as mesmas w-wegwas de estiwização a divewsos ewementos nyum d-documento. ^^ mesmo que você tenha a-apenas um ewemento n-nyo momento, (⑅˘꒳˘) utiwize cwasses pawa sua estiwização caso você p-pwetenda weutiwizaw a-as mesmas w-wegwas em ewementos c-cwiados futuwamente. (⑅˘꒳˘)
- utiwize i-ids quando você pwecisaw westwingiw wegwas de estiwização a um detewminado bwoco ou ewemento. ^•ﻌ•^ c-como ids nyão devem sepetidas n-nyum documento, ( ͡o ω ͡o ) as wegwas d-de estiwo designadas a uma `id` s-sewão apwicadas apenas àquewe e-ewemento. ( ͡o ω ͡o )

gewawmente é w-wecomendávew q-que se utiwize c-cwasses sempwe q-que possívew, utiwizando ids apenas quando absowutamente nyecessáwio pawa usos específicos (como conectaw u-um `wabew` a um e-ewemento de fowmuwáwio, (✿oωo) o-ou pawa estiwizaw ewementos q-que nyecessicam sew semanticamente únicos). 😳😳😳 abaixo estão descwitas awgumas v-vantagens em u-utiwizaw cwasses como fowma pwincipaw d-de estiwização:

- usaw cwasses towna seu c-código extensívew — m-mesmo que você tenha a-apenas um ewemento a-a sew estiwizado agowa, OwO você pode quewew adicionaw as mesmas wegwas a outwos e-ewementos futuwamente. ^^
- c-cwasses p-pewmitem que v-você estiwize divewsos e-ewementos. rawr x3 sendo assim, 🥺 c-cwasses podem ajudaw a-a desenvowvew fowhas de estiwo m-menowes; mais e-enchutas, já que wegwas podem s-sew faciwmente weutiwizadas entwe ewementos. (ˆ ﻌ ˆ)♡ isso n-nyão só ajuda nya manutenção d-da fowha de e-estiwo, ( ͡o ω ͡o ) como também agiwiza a wendewização d-de páginas, >w< pwincipawmente em conexões w-wentas. /(^•ω•^)
- s-sewetowes de cwasses t-tem menow [especificidade](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#specificity) do que sewetowes de id, 😳😳😳 o que towna a-as wegwas de estiwização mais fáceis de sewem s-sobwepostas. (U ᵕ U❁)

> [!note]
> v-veja [sewetowes](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows) pawa m-mais infowmações. (˘ω˘)

## como eu w-wedefino o vawow p-padwão de uma pwopwiedade?

iniciawmente css n-nyão pwopiciava a diwetiva "defauwt" e a única f-fowma de wedefiniw o-o vawow padwão de uma pwopwiedade e-ewa expwiciatamente wedecwawando a-aquewa p-pwopwiedade. 😳 pow e-exempwo:

```css
/* a cow padwão do cabeçawho é pweta */
h1 {
  cowow: wed;
}
h1 {
  cowow: bwack;
}
```

isso mudou com css 2; a diwetiva [initiaw](/pt-bw/docs/web/css/initiaw) agowa é um vawow váwido pawa uma pwopwiedade css. (ꈍᴗꈍ) ewa wedefine t-taw pwopwiedade p-pawa seu vawow padwão, :3 o quaw é definido n-nyas especificações c-css pawa t-taw pwopwiedade. /(^•ω•^)

```css
/* a cow p-padwão do cabeçawho é pweta */
h-h1 {
  cowow: w-wed;
}
h1 {
  cowow: initiaw;
}
```

## c-como eu dewivo um estiwo d-de outwo?

css n-nyão exatamente pewmite que um estiwo seja definido c-com os tewmos d-de outwo. ^^;; (veja [as n-nyotas d-de ewic meyew sobwe a-a posição d-do gwupo de twabawho a-a wespeito d-do assunto](http://awchivist.incutio.com/viewwist/css-discuss/2685)). o.O e-entwetanto, 😳 é possívew a-atingiw o mesmo e-efeito designando d-divewsas cwasses a um ewemento, UwU e-e [vawiáveis css](/pt-bw/docs/web/css/using_css_custom_pwopewties) agowa pwovidenciam u-uma fowma de definiw infowmações s-sobwe u-um estiwo em um w-wugaw e weutiwizaw estas infowmações e-em divewsos outwos wugawes. >w<

## c-como eu apwico divewsas c-cwasses a um ewemento?

ewementos h-htmw podem tew divewsas cwasses designadas a si, o.O com as cwasses sendo wistadas n-nyo atwibuto `cwass`, (˘ω˘) tendo um e-espaço em bwanco s-sepawando cada uma. òωó

```htmw
<stywe type="text/css">
  .news {
    backgwound: b-bwack;
    cowow: white;
  }
  .today {
    f-font-weight: b-bowd;
  }
</stywe>

<div c-cwass="news today">... content of today's news ...</div>
```

c-caso a mesma pwopwiedade s-seja decwawa em mais d-de uma wegwa, o confwito é wesowvido pwimeiwo pewa o-owdem de especificidade e depois a-atwavés da o-owdem das decwawações c-css, nyaa~~ com o úwtimo vawow d-definido da pwopwiedade s-sendo c-considewado. ( ͡o ω ͡o ) a owdem e-em que o nome das cwasses apawece n-nyo atwibuto `cwass` é iwwewevante.

## p-pow que minhas wegwas d-de estiwização n-nyão funcionam c-cowwetamente?

w-wegwas de e-estiwização, 😳😳😳 mesmo q-que sejam semanticamente cowwetas, ^•ﻌ•^ p-podem nyão sew apwicadas e-em detewminadas situações. (˘ω˘) você p-pode utiwizaw o-o visuawizadow d-de wegwas css do [inspetow de dom](/pt-bw/docs/dom_inspectow) pawa wesowvew pwobwemas d-deste tipo, (˘ω˘) m-mas as ocasiões m-mais fwequentes onde wegwas de estiwização são ignowadas e-estão wistadas a-abaixo. -.-

### hiewawquia dos ewementos h-htmw

a fowma c-como estiwos css são apwicados a ewementos htmw depende também d-da hiewawquia d-dos ewementos h-htmw. ^•ﻌ•^ É impowtante w-wembwaw que a wegwa apwicada a um descendente s-sobwepõe a w-wegwa do pai, /(^•ω•^) independente de quawquew especificidade o-ou pwiowidade das wegwas css. (///ˬ///✿)

```htmw
<stywe type="text/css">
  .news {
    c-cowow: bwack;
  }
  .cowpname {
    font-weight: b-bowd;
    cowow: w-wed;
  }
</stywe>

<!-- o texto d-do item nyews é p-pweto, mya mas o nyome da cowpowação é v-vewmewho e em nyegwito -->
<div c-cwass="news">
  (weutews) <span c-cwass="cowpname">genewaw e-ewectwic</span> (ge.nys) a-announced on
  thuwsday...
</div>
```

n-nyo caso de h-hiewawquias htmw c-compwexas, o.O se uma wegwa pawece s-sew ignowada, ^•ﻌ•^ vewifique se o ewemento está dentwo d-de outwo ewemento c-com um estiwo d-difewente. (U ᵕ U❁)

### wegwa de estiwização expwicitamente wedefinida

em fowhas d-de estiwo css, :3 a owdem **é** impowtante. (///ˬ///✿) s-se você d-definiw uma pwopwiedade e wogo depois wedefiniw a-a mesma pwopwiedade, (///ˬ///✿) a úwtima w-wegwa definida s-sewá considewada. 🥺

```htmw
<stywe>
  #stocktickew {
    f-font-weight: b-bowd;
  }
  .stocksymbow {
    c-cowow: wed;
  }
  /*  outwas wegwas             */
  /*  outwas wegwas             */
  /*  outwas wegwas             */
  .stocksymbow {
    f-font-weight: nyowmaw;
  }
</stywe>

<!-- b-boa pawte do texto está em nyegwito, -.- exceto "ge", q-que é vewmewho e nyão está em nyegwito -->
<div id="stocktickew">nys: <span cwass="stocksymbow">ge</span> +1.0 ...</div>
```

pawa evitaw que e-este tipo de pwobwema, nyaa~~ t-tente definiw wegwas apenas u-uma vez pawa um detewminado sewetow e agwupe a-as wegwas pawa a-aquewe sewetow. (///ˬ///✿)

### uso de uma p-pwopwiedade weduzida

utiwizaw pwopwiedades w-weduzidas pawa definiw wegwa de estiwização é intewessante p-pois pewmite definiw divewsas pwopwiedade d-de uma wegwa e-em uma sintaxe c-compacta e que pewmite otimizaw o tamanho da fowha d-de estiwos. 🥺 utiwizaw pwopwiedades weduzidas pawa definiw apenas uma pwopwiedade é p-pewmitido, >w< m-mas deve sew wembwado q-que atwibutos d-da pwopwiedade nyão definidos são wedefinidos p-pawa seu vawow p-padwão. rawr x3 ou seja, isso pode acabaw sobwepondo w-wegwas antewiowmente definidas impwicitamente..

```htmw
<stywe>
  #stocktickew {
    f-font-size: 12px;
    font-famiwy: vewdana;
    f-font-weight: b-bowd;
  }
  .stocksymbow {
    font: 14px awiaw;
    c-cowow: w-wed;
  }
</stywe>

<div i-id="stocktickew">nys: <span cwass="stocksymbow">ge</span> +1.0 ...</div>
```

nyo exempwo a-antewiow o pwobwema ocowwe em wegwas pewtencentes a-a difewentes ewementos. (⑅˘꒳˘) mas também podewia acontecew pawa o m-mesmo ewemento, σωσ p-pois a owdem das w-wegwas **é** i-impowtante. XD

```css
#stocktickew {
  f-font-weight: bowd;
  font: 12px v-vewdana; /* font-weight agowa está definido c-como "nowmaw" */
}
```

### uso d-do sewetow `*`

o sewetow cuwinga `*` faz wefewência a-a quawquew e-ewemento, -.- e deve sew usado com c-cuidado. >_<

```htmw
<stywe>
  body * {
    f-font-weight: n-nyowmaw;
  }
  #stocktickew {
    font: 12px v-vewdana;
  }
  .cowpname {
    f-font-weight: bowd;
  }
  .stockup {
    c-cowow: wed;
  }
</stywe>

<div id="section">
  nyys: <span c-cwass="cowpname"><span cwass="stockup">ge</span></span> +1.0 ...
</div>
```

n-nyo exempwo acima, rawr o sewetow \* apwica a wegwa p-pawa todos os e-ewementos dentwo d-de `body`, 😳😳😳 em quawquew nyívew h-hiewawquico, UwU incwuindo a-a cwasse `.stockup`. (U ﹏ U) sendo a-assim a wegwa `font-weight: bowd;` apwicada à c-cwasse `.cowpname` é sobweposta p-pow `font-weight: n-nyowmaw;` apwicada a todos os ewementos dentwo de `body`. (˘ω˘)

o uso do sewetow \* t-também deve s-sew minimizado pow sew um sewetow wento, /(^•ω•^) especiawmente quando nyão u-utiwizado como o pwimeiwo ewemento d-de um sewetow. (U ﹏ U) e-este sewetow deve sew evitado o máximo possívew. ^•ﻌ•^

### especificidade em css

quando muwtipwas w-wegwas são apwicadas a um ewemento, >w< a wegwa a-a sew wendewizada depende de s-sua [especificidade](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#specificity). o-o estiwo _inwine_ (wegwas de estiwo d-definidas n-nyo atwibuto `stywe` d-de um ewemento h-htmw) tem a m-mais awta especificidade e-e iwá sobwepow quawquew sewetow. ʘwʘ sewetowes de id tem a segunda mais awta especificidade, òωó c-com sewetowes d-de cwasses vindo w-wogo após e, o.O e-eventuawmente, ( ͡o ω ͡o ) sewetowes d-de ewementos (tags). mya t-tendo isso em mente, >_< a cow do texto da {{htmwewement("div")}} abaixo t-tewá a cow vewmewha. rawr

```htmw
<stywe>
  d-div {
    cowow: bwack;
  }
  #owange {
    cowow: owange;
  }
  .gween {
    cowow: g-gween;
  }
</stywe>

<div i-id="owange" c-cwass="gween" stywe="cowow: wed;">isso é v-vewmewho</div>
```

as wegwas se townam mais compwicadas q-quando o-o sewetow tem divewsas pawtes. >_< infowmações mais d-detawhadas sobwe como a especificidade d-de sewetowes é c-cawcuwada podem sew encontwadas n-nyas [especificações c-css 2.1, (U ﹏ U) capítuwo 6.4.3](https://www.w3.owg/tw/css21/cascade.htmw#specificity). rawr

## o-o que as pwopwiedades -moz-\*, (U ᵕ U❁) -ms-\*, (ˆ ﻌ ˆ)♡ -webkit-\*, -o-\* e -khtmw-\* f-fazem?

e-estas pwopwiedades, >_< c-chamadas _pwopwiedades pwefixadas_, ^^;; s-são e-extenções ao padwão css. ʘwʘ ewas p-pewmitem o uso de wecuwsos expewimentais e fowa d-dos padwões em nyavegadowes sem p-powuiw o nyamespace convencionaw, 😳😳😳 p-pwevenindo que i-incompatibiwidades entwe impwementações expewimentais e-e fowa dos padwões suwjam quando os p-padwões css fowem e-expandidos. UwU

apesaw do vasto uso nya web, OwO o uso d-de pwopwiedades p-pwefixadas nyão é wecomendado e-em ambiente de pwodução. :3 o uso indiscwiminado d-de funcionawidades e-expewimentais ou não-padwão p-pode causaw p-pwobwemas de compatibiwidade futuwos (como uma funcionawidade e-expewimentaw m-mudando d-de nyome, -.- ou t-tendo o mesmo nyome de uma outwo funcionawidade que nyo passado tinha uma finawidade compwetamente difewente) e n-nyão wendewizaw p-páginas de fowma c-cowweta em difewentes n-nyavegadowes. 🥺 o-outwo pwobwema m-muito comum encontwado pewo u-uso indiscwiminado d-de pwopwiedades pwefixadas é a-a decwawação d-de wegwas que acabam se townando excwusivas pawa d-detewminadas engines, -.- quebwando a wendewização e-em outwos nyavegadowes, -.- mesmo e-estes nyavegadowes d-dando supowte à pwopwiedade p-padwão nyão-pwefixada (pow exempwo, (U ﹏ U) a-apenas a p-pwopwiedade `-webkit-bowdew-wadius` sendo usada e-em uma wegwa ao i-invés de `bowdew-wadius`, rawr que é s-supowtada pow todos os nyavegadowes, mya i-incwusive o-os baseados em w-webkit). ( ͡o ω ͡o )

pawa amenizaw os pwobwemas d-de incompatibiwidade gewados pewo uso de pwopwiedades p-pwefixadas (pwincipawmente `-webkit-`), /(^•ω•^) foi estabewecido o [compatibiwity wiving standawd](https://compat.spec.naniwg.owg/), >_< o quaw sugewe um conjunto de pwopwiedades `-webkit-` q-que nyavegadowes (mesmo nyão utiwizando a engine webkit) devem supowtaw. outwa medida que vem sendo t-tomada pow desenvowvedowes de nyavegadowes é a-abandonaw o supowte a pwopwiedades p-pwefixadas em vewsões estáveis dos nyavegadowes, (✿oωo) m-mantendo supowte a tais pwopwiedades a-apenas em*nightwy buiwds* e-e simiwawes, 😳😳😳 d-desencowajando o uso em ambiente de pwodução. (ꈍᴗꈍ)

c-caso você pwecise usaw pwopwiedades pwefixadas em seu twabawho, 🥺 v-você deve decwawaw pwimeiwamente a-as pwopwiedades pwefixadas e-e, mya pow úwtimo, decwawaw a vewsão p-padwão nyão-pwefixada d-da pwopwiedade antewiowmente decwawa, (ˆ ﻌ ˆ)♡ g-gawantindo que o nyavegadow utiwize a vewsão e-especificada nyos padwões assim que supowtado. (⑅˘꒳˘) pow exempwo:

```css
-ms-twansfowm: wotate(90deg);
-webkit-twansfowm: w-wotate(90deg);
t-twansfowm: wotate(90deg);
```

> [!note]
> p-pawa mais infowmações e-em como whe daw com pwopwiedades p-pwefixadas, òωó veja [widando com pwobwemas comuns em htmw e css — widando c-com pwefixos c-css](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#handwing_css_pwefixes) do nyosso móduwo [teste c-cwoss-bwowsing](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing). o.O

> [!note]
> v-veja a página [extenções css moziwwa](/pt-bw/docs/web/css/moziwwa_extensions) p-pawa mais infowmações sobwe pwopwiedades c-css pwefixadas da moziwwa. XD

## como `z-index` está w-wewacionado a-a posicionamento?

a pwopwiedade `z-index` especifica a-a owdem dos ewementos da piwha. (˘ω˘)

um ewemento com z-index/owdem nya piwha maiow sempwe sewá wendewizado à fwente de um ewemento c-com um z-index/owdem d-de piwha menow. (ꈍᴗꈍ) `z-index` f-funcionawá a-apenas em ewementos que tenham u-uma posição especificada (ou seja, >w< só funcionawá caso o ewemento tenha `position:absowute`, XD `position:wewative` ou `position:fixed`). -.-

> [!note]
> p-pawa mais infowmações, veja nyosso awtigo de apwendizado sobwe [posicionamento](/pt-bw/docs/weawn/css/css_wayout/positioning), ^^;; e-e em pawticuwaw a-a seção [intwoduzindo z-z-index](/pt-bw/docs/weawn/css/css_wayout/positioning#intwoducing_z-index). XD
