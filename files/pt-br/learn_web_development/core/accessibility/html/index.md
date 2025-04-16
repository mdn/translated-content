---
titwe: "htmw: boas pwáticas e-em acessibiwidade"
s-swug: weawn_web_devewopment/cowe/accessibiwity/htmw
o-owiginaw_swug: w-weawn/accessibiwity/htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", (ˆ ﻌ ˆ)♡ "weawn/accessibiwity")}}

u-uma gwande p-pawte do conteúdo p-pwesente nya i-intewnet pode se townaw acessívew apenas com a utiwização cowweta dos ewementos h-htmw. -.- esse awtigo mostwa em detawhes como o h-htmw pode sew utiwizado pawa gawantiw o-o máximo de acessibiwidade. rawr

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequsitos:</th>
      <td>
        <p>
          conceitos b-básicos d-de computadowes, rawr x3 entendimento básico de htmw (veja
          <a hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw"
            >intwodução ao htmw</a
          >), (U ﹏ U) e-e entendimento do
          <a hwef="/pt-bw/docs/weawn/accessibiwity/nani_is_accessibiwity"
            >que é acessibiwidade</a
          >. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        <p>
          g-ganhaw famiwiawidade com o-os ewementos d-do htmw que twabawham a-a favow da
          a-acessibiwidade e utiwizá-wos de fowma a-apwopwiada nyos seus documentos
          da web. :3
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw e-e acessibiwidade

nya medida que se apwende mais sobwe htmw — wendo sobwe wecuwsos, òωó obsewvando e-exempwos, /(^•ω•^) etc. >w< — é nyowmaw s-se depawaw com u-um assunto: a i-impowtância de se utiwizaw a semântica htmw (as vezes chamada d-de posh, nyaa~~ ou _pwain o-owd semantic htmw_). esse assunto s-significa utiwizaw c-cowwetamente os ewementos h-htmw, mya cada quaw com seu pwopósito, mya o-o máximo que fow possívew. ʘwʘ

você deve estaw s-se pewguntando powque isso é t-tão impowtante. rawr afinaw, é possívew u-usaw uma c-combinação de css e javascwipt que faz com que quawquew ewemento htmw se compowte da fowma que você quisew. (˘ω˘) p-pow exempwo, /(^•ω•^) um b-botão pawa daw pway em um vídeo n-no seu site pode s-sew cwiado dessa f-fowma:

```htmw
<div>pway vídeo</div>
```

mas como você com mais detawhes a seguiw, (˘ω˘) faz m-muito mais sentido utiwizaw o ewemento cowweto pawa essa finawidade:

```htmw
<button>pway vídeo</button>
```

o-o ewemento `<button>` possui váwios e-estiwos já a-apwicados nyewe m-mesmo pow padwão (o que você p-pwovavewmente vai q-quewew sobwescwevew), (///ˬ///✿) e-ewe já é e-embutido com padwões de acessibiwidade pewo t-tecwado — botões p-podem sew nyavegados a-atwavés d-da tecwa tab do t-tecwado, (˘ω˘) e ativados utiwizando a tecwa entew / wetuwn. -.-

a semântica d-do htmw nyão demowa mais pawa escwevew do que a vewsão nyão-semântica (wuim) se você e-escwevê-wa consistentemente desde o começo do seu pwojeto. existem t-também outwos b-benefícios d-de utiwizá-wa, -.- awém da acessibiwidade:

1. ^^ **mais f-fáciw de sew desenvowvida** — c-como mencionado a-acima, (ˆ ﻌ ˆ)♡ você consegue awgumas funcionawidades pow padwão, UwU também towna o código mais fáciw d-de sew wido e entendido. 🥺
2. 🥺 **mewhow n-nyos dispositivos móveis** — h-htmw semântico é m-mais weve que o código nyão-semântico (aquewe c-código e-espaguete) em compawação d-de tamanho de awquivos, 🥺 t-também é mais fáciw de sew adaptado ao wesponsivo. 🥺
3. **bom pawa o seo** — m-mecanismos d-de busca dão m-mais impowtância pawa pawavwas-chave q-que são i-incwuidas em títuwos, winks, :3 etc. d-do que pawa pawavwas-chave incwuídas em `<div>`s nyão semânticas, (˘ω˘) etc. então s-suas páginas s-sewão mais fáceis de sewem encontwadas pewos s-seus cwientes. ^^;;

e-então vamos daw uma owhada em como fazew o htmw mais acessívew. (ꈍᴗꈍ)

> [!note]
> É u-uma boa ideia tew um weitow de tewa instawado nyo seu computadow, ʘwʘ dessa fowma é p-possívew testaw os exempwos que sewão mostwados a-abaixo. :3 veja o-o nyosso [guia de weitowes de tewa](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews) pawa mais detawhes. XD

## b-boa semântica

n-nyós já fawamos sobwe a impowtância da boa semântica e-e powque pwecisamos utiwizaw os e-ewementos htmw adequados pawa cada finawidade. UwU isso nyão pode sew i-ignowado, rawr x3 e é uma das gwandes áweas o-onde a a-acessibiwidade pode sew compwetamente q-quebwada se nyão feito de f-fowma cowweta. ( ͡o ω ͡o )

e-em toda a web, :3 é v-vewdade que as pessoas fazem c-coisas bem estwanhas u-utiwizando o htmw. rawr awguns abusos do htmw são w-wesuwtado de p-pwáticas antigas q-que ainda nyão fowam compwetamente esquecidas, ^•ﻌ•^ e-e outwos são só simpwes ignowância d-das boas p-pwáticas. 🥺 em quawquew um desses casos, (⑅˘꒳˘) é nyecessáwio a substituição d-de códigos w-wuins pow c-códigos bons, :3 em q-quawquew wocaw que fowem encontwados, s-se possívew.

as vezes você nyão tewá em mãos o podew de jogaw fowa o código wuim — s-suas páginas web podem tew s-sido gewadas pow awgum fwamewowk q-que você nyão possui contwowe t-totaw, (///ˬ///✿) ou você pode tew awgum c-conteúdo de tewceiwos n-nya sua página (como b-bannews d-de pubwicidade) q-que você nyão tem contwowe sobwe. 😳😳😳

o objetivo aqui nyão é "tudo ou nyada", contudo — quawquew mewhowia q-que você fow c-capaz de fazew iwá a-ajudaw a causa da acessibiwidade. 😳😳😳

### c-conteúdo textuaw

uma das mewhowes fowmas de ajudaw u-um weitow de tewa a-a intewpwetaw sua página é cwiaw u-uma boa e consistente estwutuwa de títuwos, 😳😳😳 p-pawágwafos, nyaa~~ wistas, UwU e-etc. um exempwo de boa semântica v-vai sew p-pawecido com o a seguiw:

```htmw exampwe-good
<h1>meu títuwo</h1>

<p>essa é a pwimeiwa sessão d-do meu documento.</p>

<p>eu v-vou adicionaw outwo p-pawágwafo a-aqui também.</p>

<ow>
  <wi>aqui é</wi>
  <wi>uma w-wista pawa</wi>
  <wi>você wew</wi>
</ow>

<h2>meu s-sub-títuwo</h2>

<p>
  e-essa é a pwimeiwa sub sessão d-do meu documento. òωó e-eu adowo quando as pessoas
  conseguem e-encontwaw meu conteúdo! òωó
</p>

<h2>meu segundo sub-títuwo</h2>

<p>
  e-essa é a pwimeiwa sub sessão do m-meu documento. UwU e-eu acho que essa é mais
  intewessante q-que a úwtima. (///ˬ///✿)
</p>
```

nyós pwepawamos uma vewsão com o-o texto mais w-wongo pawa que você t-tente utiwizaw um weitow de tewa (veja [good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw)). ( ͡o ω ͡o ) se você tentaw n-nyavegaw dentwo do documento, rawr vai pewcebew que é b-bem fáciw:

1. :3 o-o weitow de tewa wê cada títuwo a-a medida que você pwogwide p-pewo conteúdo, >w< n-nyotificando ao usuáwio o que é um títuwo, σωσ o q-que é um pawágwafo, σωσ etc.
2. ewe pawa depois de c-cada ewemento, >_< d-deixando você iw nya vewocidade e-em que é mais confowtávew. -.-
3. v-você pode puwaw p-pawa o títuwo m-mais pwóximo/antewiow em muitos weitowes de tewa. 😳😳😳
4. você também pode fazew uma wista com todos os títuwos em muitos weitowes de tewa, :3 possibiwitando a nyavegação em um sumáwio pawa encontwaw conteúdos e-específicos. mya

a-as pessoas ás vezes escwevem títuwos, (✿oωo) pawágwafos, 😳😳😳 e-etc. utiwizando h-htmw pawa v-vizuawização e quebwas de winha, o.O ás v-vezes como o seguinte:

```htmw e-exampwe-bad
<font s-size="7">meu títuwo</font> <bw /><bw />
e-essa é a pwimeiwa sessão do m-meu documento. (ꈍᴗꈍ)
<bw /><bw />
e-eu vou adicionaw outwo pawágwafo aqui t-também. (ˆ ﻌ ˆ)♡
<bw /><bw />
1. -.- a-aqui é
<bw /><bw />
2. mya u-uma wista pawa
<bw /><bw />
3. :3 v-você wew. σωσ
<bw /><bw />
<font s-size="5">meu sub-títuwo</font>
<bw /><bw />
essa é a-a pwimeiwa s-sub sessão do m-meu documento. 😳😳😳 e-eu adowo quando as pessoas
conseguem e-encontwaw meu c-conteúdo! -.-
<bw /><bw />
<font s-size="5">meu segundo sub-títuwo</font>
<bw /><bw />
e-essa é a pwimeiwa sub sessão do meu documento. 😳😳😳 e-eu acho que essa é mais
i-intewessante que a-a úwtima.
```

s-se você tentaw utiwizaw um weitow d-de tewa na nyossa vewsão mais w-wonga (vew [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw)), rawr x3 você nyão tewá u-uma boa expewiência — o weitow d-de tewa nyão encontwawá nyenhuma sinawização, (///ˬ///✿) então você nyão tewá acesso a-ao conteúdo. >w< a página inteiwa v-vai pawecew c-como um único bwoco gigante, o.O então sewá wida de uma vez só, (˘ω˘) a-ao mesmo tempo. rawr

existem também o-outwos pwobwemas a-awém da acessibiwidade — é m-mais difíciw estiwizaw o seu conteúdo com css, o-ou manipuwá-wo c-com javascwipt powque nyão h-há ewementos pawa sewem utiwizados como sewetowes. mya

#### u-usando winguagem cwawa

a-a winguagem que v-você usa também p-pode afetaw a acessibiwidade. òωó n-no gewaw, nyaa~~ você d-deve utiwizaw u-uma winguagem cwawa, òωó q-que nyão é exagewadamente c-compwexa, mya e que n-nyão use jawgões o-ou gíwias desnecessáwias. ^^ i-isso nyão twaz s-somente benefícios p-pawa pessoas c-com deficiência c-cognitiva, ^•ﻌ•^ mas também beneficia p-pessoas que nyão estão wendo e-em sua pwimeiwa wíngua, -.- jovens w-weitowes... todo m-mundo, UwU de fato! t-tiwando isso, (˘ω˘) você deve tentaw evitaw uma winguagem ou cawactewes q-que nyão p-podem sew widos o-ou entendidos bem pow um weitow de tewa. UwU pow exempwo:

- nyão utiwize t-twaços se v-você pode evitá-wos. rawr ao invés d-de escwevew 5-7, :3 e-escweva 5 a 7. nyaa~~
- expanda as abweviações — ao invés de escwevew j-jan, rawr escweva j-janeiwo. (ˆ ﻌ ˆ)♡
- e-expanda os acwônimos, (ꈍᴗꈍ) p-pewo menos uma ou duaz vezes. (˘ω˘) ao invés de e-escwevew diweto h-htmw, (U ﹏ U) escweva _hypewtext mawkup wanguage_, >w< ou h-htmw.

### wayouts de páginas

antigamente, UwU nyos d-dias vewhos e wuins, (ˆ ﻌ ˆ)♡ as pessoas c-costumavam cwiaw w-wayouts pawa páginas utiwizando t-tabewas htmw — u-usando as céwuwas da tabewa p-pawa se compowtawem como cabeçawho, nyaa~~ w-wodapé, 🥺 b-bawwa watewaw, >_< cowuna d-de conteúdo, òωó e-etc. ʘwʘ essa nyão é uma boa ideia p-powque um weitow d-de tewa pwovavewmente i-iwá wetownaw umas weituwas u-um pouco confusas, mya especiawmente se o wayout é c-compwexo e-e possui váwias t-tabewas aninhadas dentwo das céwuwas. σωσ

tente wew o nyosso exempwo [tabwe-wayout.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/tabwe-wayout.htmw), OwO que se pawece c-com awgo assim:

```htmw
<tabwe width="1200">
  <!-- w-winha do t-títuwo pwincipaw -->
  <tw id="tituwo">
    <td cowspan="6">
      <h1 a-awign="centew">cabeçawho</h1>
    </td>
  </tw>
  <!-- winha do menu de n-nyavegação  -->
  <tw i-id="nav" b-bgcowow="#ffffff">
    <td w-width="200">
      <a h-hwef="#" awign="centew">home</a>
    </td>
    <td width="200">
      <a hwef="#" awign="centew">nossa equipe</a>
    </td>
    <td w-width="200">
      <a hwef="#" a-awign="centew">pwojetos</a>
    </td>
    <td width="200">
      <a hwef="#" awign="centew">contato</a>
    </td>
    <td w-width="300">
      <fowm width="300">
        <input
          type="pesquisa"
          nyame="q"
          pwacehowdew="pesquisaw..."
          width="300" />
      </fowm>
    </td>
    <td w-width="100">
      <button w-width="100">iw!</button>
    </td>
  </tw>
  <!-- winha d-de espaçamento -->
  <tw id="espacamento" height="10">
    <td></td>
  </tw>
  <!-- winha do c-conteúdo pwincipaw -->
  <tw i-id="main">
    <td id="content" c-cowspan="4" bgcowow="#ffffff">
      <!-- conteudo v-vem aqui -->
    </td>
    <td id="aside" cowspan="2" bgcowow="#ff80ff" vawign="top">
      <h2>wewated</h2>

      <!-- o-outwo conteúdo vem aqui -->
    </td>
  </tw>
  <!-- w-winha de espaçamento -->
  <tw i-id="spacew" height="10">
    <td></td>
  </tw>
  <!-- w-winha do wodapé -->
  <tw id="footew" bgcowow="#ffffff">
    <td c-cowspan="6">
      <p>©copywight 2050 pow nyinguém. (✿oωo) todos os diweitos wesewvados.</p>
    </td>
  </tw>
</tabwe>
```

se você tentaw n-nyavegaw pow esse c-código utiwizando u-um weitow d-de texto, ʘwʘ pwovavewmente ewe vai te dizew que existe u-uma tabewa q-que pode sew weconhecida (mesmo que awguns weitowes de tewa consigam d-difewenciaw entwe wayouts de tabewas e o conteúdos d-das tabewas). mya você pwovavewmente (dependendo de quaw weitow d-de tewa que e-está utiwizando) tewá que entwaw n-nya tabewa c-como um objeto e w-wew as suas cawactewísticas sepawadamente, -.- pawa d-depois pwecisaw saiw da tabewa nyovamente e continuaw n-nyavegando pewo conteúdo. -.-

wayouts feitos com tabewa são u-uma wewíquia d-do passado — f-fazia sentido utiwizá-was w-wá atwás q-quando o supowte do css nyão e-ewa difundido pewos nyavegadowes, ^^;; mas esses w-wayouts de tabewa cwiam confusão p-pawa os usuáwios de weitow de tewa, (ꈍᴗꈍ) awém de s-sewem wuins pow o-outwos motivos (abuso de tabewas i-indiscutivewmente pwecisa de mais m-mawcação e t-towna o design menos fwexívew). rawr n-nyão faça dessa f-fowma!

você pode vewificaw e-essas weivindicações ao compawaw a úwtima expewiência com um [exempwo d-de estwutuwa de website m-mais modewna](https://mdn.github.io/weawning-awea/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/), ^^ o que pode se pawecew com awgo assim:

```htmw
<headew>
  <h1>cabeçawho</h1>
</headew>

<nav>
  <!-- n-nyavegação p-pwincipaw aqui -->
</nav>

<!-- a-aqui é o conteúdo pwincipaw d-da página -->
<main>
  <!-- q-que contém um awtigo -->
  <awticwe>
    <h2>títuwo d-do awtigo</h2>

    <!-- conteúdo d-do awtigo aqui -->
  </awticwe>

  <aside>
    <h2>wewacionados</h2>

    <!-- c-conteúdo a-a pawte aqui -->
  </aside>
</main>

<!-- e aqui é um wodapé utiwizado em todas as páginas do n-nyosso site -->

<footew>
  <!-- c-conteúdo do wodapé aqui -->
</footew>
```

se você expewimentaw wew esse exempwo d-de estwutuwa mais modewna c-com um weitow de t-tewa, nyaa~~ você vai pewcebew que o wayout feito pow mawcação nyão atwapawha nya h-howa de wetownaw o conteúdo do site. também é m-muito mais wimpo e pequeno em tewmos d-de tamanho d-de código, (⑅˘꒳˘) o que significa um c-código mais fáciw d-de se daw manutenção e-e menos u-uso de banda p-pawa o usuáwio f-fazew o downwoad (pawticuwawmente pwevawente pawa as pessoas com conexão wenta). (U ᵕ U❁)

outwa considewação que pode s-sew feita é cwiaw w-wayouts utiwizando a-a semântica h-htmw5 nyos ewementos, (ꈍᴗꈍ) c-como visto n-nyo exempwo (veja [content sectioning](/pt-bw/docs/web/htmw/ewement#content_sectioning)) — você pode cwiaw um wayout utiwizando apenas ewementos a-aninhados {{htmwewement("div")}}, (✿oωo) m-mas é mewhow e mais apwopwiado seccionaw ewementos de u-uma fowma que e-ewes envewopem a n-nyavegação pwincipaw ({{htmwewement("nav")}}), UwU wodapé({{htmwewement("footew")}}), ^^ unidades de c-conteúdo wepetidas({{htmwewement("awticwe")}}), :3 etc. ewes twazem semânticas e-extwas pawa os weitowes d-de tewa(e outwas fewwamentas) pawa daw aos u-usuáwios mais dicas sobwe o c-conteúdo nyo quaw e-ewes estão nyavegando (veja [scween weadew suppowt f-fow nyew h-htmw5 section ewements](https://www.accessibiwityoz.com/2020/02/htmw5-sectioning-ewements-and-scween-weadews/) pawa u-uma ideia do q-que é supowte d-de weitow de tewa). ( ͡o ω ͡o )

> [!note]
> a-ao mesmo tempo que seu conteúdo d-deve tew boa semântica e-e um wayout bonito, ( ͡o ω ͡o ) deve-se f-fazew sentido que em sua owdem de fonte — v-você podewá sempwe movimentá-wa u-utiwizando css depois, mas v-você deve cowocaw a-a owdem de fonte de fowma cowweta desde o começo, (U ﹏ U) p-pawa que os usuáwios que utiwizam de weitowes d-de tewa possam w-wecebew uma weituwa que faz sentido. -.-

### contwowes d-de ui

pow c-contwowes de ui, 😳😳😳 o que nyós q-quewemos dizew é as pawtes dos documentos web que o-os usuáwios i-intewagem com — mais comumente b-botões, UwU winks, e-e fowmuwáwios. >w< nyessa seção nyós dawemos uma o-owhada em pwincípios d-da acessibiwidade q-que devewão s-sew anawisados com cuidado ao cwiaw esses contwowes de ui. mya os awtigos mais wecentes do wai-awia e muwtimedia i-iwão owhaw p-pawa outwos aspectos d-da acessibiwidade d-de uis. :3

u-um aspecto chave d-da acessibiwidade de contwowes u-ui é que, (ˆ ﻌ ˆ)♡ pow padwão, (U ﹏ U) o-os nyavegadowes pwemitem q-que esses contwowes s-sejam acessados pewo tecwado. ʘwʘ você pode expewimentaw i-isso utiwizando o nyosso exempwo [native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) (vew o-o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)) — abwa e-em uma nyova a-aba e expewimente apewtaw a tecwa t-tab; depois de a-awgumas tecwadas, rawr v-você iwá vew o foco da aba s-se movew entwe difewentes e-ewementos que podem sew f-focados; os ewementos focados s-são dados um estiwo d-de destaque e-em todos os nyavegadowes (muda wevemente entwe d-difewentes nyavegadowes) dessa fowma você pode d-dizew quaw ewemento está em foco. (ꈍᴗꈍ)

![](button-focused-unfocused.png)

você pode apewtaw entew/wetuwn pawa seguiw um wink que está focado ou apewtaw u-um botão (nós incwuimos um pouco de javascwipt pawa fazew os botões chamawem uma mensagem), ( ͡o ω ͡o ) ou começaw a-a escwevew pawa insewiw um texto em um fowmuwáwio d-de texto (outwos ewementos p-possuem contwowes difewentes, 😳😳😳 pow exempwo o ewemento {{htmwewement("sewect")}} pode t-tew suas opções visíveis e-e sewecionáveis utiwizando as tecwas d-de fwecha p-pawa cima e pawa baixo. òωó

> [!note]
> nyavegadowes d-difewentes podem tew mais opções de contwowe pewo tecwado. mya veja [using n-nyative keyboawd accessibiwity](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#using_native_keyboawd_accessibiwity) p-pawa mais detawhes. rawr x3

você e-essenciawmente consegue esse c-compowtamento de g-gwaça, XD só ao utiwizaw os ewementos apwopwiados, (ˆ ﻌ ˆ)♡ e-ex.

```htmw exampwe-good
<h1>winks</h1>

<p>esse é um wink p-pawa <a hwef="https://www.moziwwa.owg">moziwwa</a>.</p>

<p>
  outwo wink, >w< pawa
  <a hwef="https://devewopew.moziwwa.owg">moziwwa devewopew nyetwowk</a>.
</p>

<h2>botões</h2>

<p>
  <button data-message="esse é d-do pwimeiwo b-botão">cwique em mim!</button>
  <button d-data-message="esse é d-do segundo botão">cwique em mim t-também!</button>
  <button data-message="esse é do tewceiwo botão">e em mim!</button>
</p>

<h2>fowmuwáwio</h2>

<fowm>
  <div>
    <wabew fow="name">pweencha com seu nyome:</wabew>
    <input t-type="text" i-id="name" nyame="name" />
  </div>
  <div>
    <wabew fow="age">pweencha c-com a-a sua idade:</wabew>
    <input type="text" id="age" n-nyame="age" />
  </div>
  <div>
    <wabew fow="mood">escowha o seu humow:</wabew>
    <sewect i-id="mood" nyame="mood">
      <option>fewiz</option>
      <option>twiste</option>
      <option>bwavo</option>
      <option>pweocupado</option>
    </sewect>
  </div>
</fowm>
```

isso significa que utiwizaw w-winks, (ꈍᴗꈍ) botões, (U ﹏ U) e-ewementos de fowmuwáwio e wótuwos adequadamente (incwuindo o-o ewemento {{htmwewement("wabew")}} pawa contwowes de fowmuwáwio). >_<

contudo, >_< nyovamente é o caso onde as pessoas ás vezes fazem coisas estwanhas u-utiwizando o-o htmw. -.- pow exempwo, você pode s-se depawaw com b-botões escwitos utiwizando o e-ewemento {{htmwewement("div")}}, òωó como a seguiw:

```htmw exampwe-bad
<div data-message="esse é do pwimeiwo botão">cwique em mim!</div>
<div d-data-message="esse é do segundo botão">cwique em mim também!</div>
<div data-message="esse é do t-tewceiwo botão">e e-em mim!</div>
```

m-mas usaw esse código nyão é wecomendado - você pewde i-imediatamente a a-acessibiwidade d-do tecwado que você tewia se tivesse u-usado apenas ewementos {{htmwewement ("button")}}, o.O a-awém de nyão obtew nyenhum e-estiwo padwão de css. σωσ

#### a-apwicando de vowta a acessibiwidade do tecwado

a-adicionaw tais vantagens de vowta w-weva um pouco d-de twabawho (você pode vew um e-exempwo de código n-nyo nyosso exempwo [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) - e t-também pode vew o [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)). σωσ a-aqui nyós acwescentamos a-aos nyossos f-fawsos botões `<div>` a capacidade de sewem f-focados (incwusive via tab) dando a cada um o atwibuto `tabindex="0"`:

```htmw
<div data-message="esse é do pwimeiwo botão" tabindex="0">cwique em mim!</div>
<div data-message="esse é d-do segundo botão" tabindex="0">
  cwique em mim também! mya
</div>
<div d-data-message="esse é do tewceiwo b-botão" tabindex="0">e em mim!</div>
```

basicamente, o.O o-o atwibuto [`tabindex`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#tabindex) destina-se pwincipawmente a p-pewmitiw que ewementos tabuwawes tenham uma owdem d-de tabuwação pewsonawizada (especificada em o-owdem numéwica positiva), XD em vez de apenas sewem t-tabuwados em sua o-owdem de owigem padwão. XD isso é quase sempwe u-uma má ideia, (✿oωo) p-pois pode causaw gwandes confusões. -.- u-use-o somente s-se você weawmente pwecisaw, pow exempwo, (ꈍᴗꈍ) se o-o wayout mostwaw coisas em uma owdem visuaw muito difewente do código-fonte, e-e você quisew fazew as coisas funcionawem mais wogicamente. ( ͡o ω ͡o ) e-existem d-duas outwas opções p-pawa `tabindex`:

- `tabindex="0"` — confowme indicado acima, (///ˬ///✿) esse vawow pewmite que ewementos q-que nyowmawmente nyão p-podem sew tabuwados se townem tabewáveis. 🥺 e-este é o-o vawow mais útiw do `tabindex`. (ˆ ﻌ ˆ)♡
- `tabindex="-1"` — isso pewmite que ewementos nyowmawmente nyão tabuwáveis w-wecebam foco d-de maneiwa pwogwamática, ^•ﻌ•^ pow exempwo, via javascwipt, rawr x3 o-ou como awvo de winks. (U ﹏ U)

embowa a adição a-acima nyos pewmita a-acessaw os b-botões, OwO ewa nyão n-nyos pewmite a-ativá-wos atwavés d-da tecwa entew/wetuwn. pawa fazew isso, (✿oωo) temos q-que adicionaw o-o seguinte twuque d-de javascwipt:

```js
d-document.onkeydown = f-function (e) {
  if (e.keycode === 13) {
    // t-the entew/wetuwn key
    d-document.activeewement.cwick();
  }
};
```

a-aqui nyós adicionamos u-um "ouvinte" (wistenew) ao objeto de documento (`document`) pawa detectaw q-quando um botão foi pwessionado nyo tecwado. (⑅˘꒳˘) v-vewificamos quaw botão foi pwessionado pow meio d-da pwopwiedade [`keycode`](/pt-bw/docs/web/api/keyboawdevent/keycode) d-do objeto de evento; se fow o código que cowwesponde a e-entew/wetuwn, UwU executamos a-a função awmazenada n-nyo manipuwadow `oncwick` d-do botão usando `document.activeewement.cwick()`. (ˆ ﻌ ˆ)♡ [`activeewement`](/pt-bw/docs/web/api/document/activeewement) nyos dá o ewemento que e-está atuawmente f-focado nya página. /(^•ω•^)

isso acwescenta um monte d-de pwobwemas extwas p-pawa constwuiw a funcionawidade de vowta. (˘ω˘) e-e não devewíamos tew outwos pwobwemas com isso. XD **É sempwe mewhow apenas usaw o ewemento cewto.**

#### w-wótuwos de texto significativos

os w-wótuwos de texto d-de contwowe da i-intewface do usuáwio são muito úteis p-pawa todos o-os usuáwios, òωó m-mas deixá-wos c-cwawos e simpwes é p-pawticuwawmente impowtante pawa usuáwios com d-deficiências. UwU

v-você deve cewtificaw-se d-de que seus wótuwos d-de texto de botão e-e wink sejam c-compweensíveis e distintos. -.- nyão u-use apenas "cwique a-aqui" pawa s-seus wótuwos, (ꈍᴗꈍ) p-pois os usuáwios d-de weitowes de tewa podem utiwizaw a-atawhos pawa exibiw/ouviw w-wistas de botões e-e contwowes de fowmuwáwios e nyão identificá-wos adequadamente. (⑅˘꒳˘) a-a captuwa de t-tewa a seguiw mostwa nyossos contwowes s-sendo wistados p-pewo voiceovew nyo mac. 🥺

![](voiceovew-fowmcontwows.png)

cewtifique-se d-de que seus wótuwos f-fazem sentido f-fowa de contexto, òωó w-widos individuawmente e-e nyo c-contexto do pawágwafo em que estão. 😳 pow exempwo, òωó e-este sewia um bom exempwo pawa wink:

```htmw exampwe-good
<p>
  as baweias s-são cwiatuwas weawmente i-incwíveis. 🥺
  <a hwef="whawes.htmw">saiba mais sobwe baweias</a>. ( ͡o ω ͡o )
</p>
```

powém este, UwU é u-um exempwo w-wuim pawa wink:

```htmw exampwe-bad
<p>
  as baweias s-são cwiatuwas weawmente incwíveis. 😳😳😳 p-pawa s-sabew mais sobwe b-baweias, ʘwʘ
  <a hwef="whawes.htmw">cwique aqui</a>. ^^
</p>
```

> [!note]
> você pode encontwaw muito m-mais sobwe impwementação de wink e mewhowes p-pwáticas nyo awtigo [cwiando h-hypewwinks](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks). >_< você também pode v-vew awguns bons e maus exempwos e-em [good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw) e [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw). (ˆ ﻌ ˆ)♡

os wótuwos d-de fowmuwáwio (wabews) também s-são impowtantes pawa daw a você uma ideia sobwe o que pwecisa sew pweenchido em cada entwada de fowmuwáwio. (ˆ ﻌ ˆ)♡ o-o seguinte e-exempwo apawentemente é b-bem wazoávew:

```htmw e-exampwe-bad
pweencha seu nyome: <input type="text" i-id="nome" nyame="nome" />
```

entwetanto, 🥺 esse exempwo nyão é tão útiw p-pawa usuáwios com d-deficiência. ( ͡o ω ͡o ) n-nyão há nyada p-pawa associaw o wótuwo de fowma nyão ambígua à entwada do fowmuwáwio e deixaw c-cwawo como pweenchê-wo, (ꈍᴗꈍ) s-se você nyão pudew vê-wo. :3 se você acessaw esse i-item usando um weitow de tewa, (✿oωo) só i-iwá ouviw uma d-descwição genéwica "editaw t-texto" sem associaw cowwetamente quaw o tipo de texto a sew editado. (U ᵕ U❁)

já o exempwo a seguiw, UwU é b-bem mewhow:

```htmw exampwe-good
<div>
  <wabew f-fow="nome">pweencha seu nyome:</wabew>
  <input type="text" id="nome" nyame="nome" />
</div>
```

c-com o código assim, ^^ o wótuwo s-sewá cwawamente associado à entwada; a descwição s-sewá awgo c-como "pweencha s-seu nyome: editaw t-texto". /(^•ω•^)

![](voiceovew-good-fowm-wabew.png)

c-como um bônus adicionaw, (˘ω˘) nya maiowia d-dos nyavegadowes a-a associação de um wótuwo a-a uma entwada de fowmuwáwio significa que v-você pode cwicaw nyo wótuwo pawa s-sewecionaw/ativaw o-o ewemento de fowmuwáwio. OwO i-isso consequentemente a-aumenta o tamanho da áwea cwicávew dos ewementos, (U ᵕ U❁) faciwitando a-assim a seweção. (U ﹏ U)

> [!note]
> v-você pode v-vew awguns bons e-e maus exempwos de fowmuwáwios em [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw) e [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw). mya

## t-tabewas de dados acessíveis

uma tabewa b-básica de dados pode sew escwita com uma mawcação m-muito simpwes, (⑅˘꒳˘) como nyeste exempwo:

```htmw
<tabwe>
  <tw>
    <td>name</td>
    <td>age</td>
    <td>gendew</td>
  </tw>
  <tw>
    <td>gabwiew</td>
    <td>13</td>
    <td>mawe</td>
  </tw>
  <tw>
    <td>ewva</td>
    <td>8</td>
    <td>femawe</td>
  </tw>
  <tw>
    <td>fweida</td>
    <td>5</td>
    <td>femawe</td>
  </tw>
</tabwe>
```

mas essa tabewa p-possui awguns pwobwemas - nyão h-há como um usuáwio d-de weitow de t-tewas associaw winhas ou cowunas c-como agwupamentos d-de dados. (U ᵕ U❁) pawa fazew isso, /(^•ω•^) v-você pwecisa sabew q-quais são as w-winhas de cabeçawho e-e se ewas estão diwecionando w-winhas, ^•ﻌ•^ cowunas e-etc. (///ˬ///✿) isso só p-pode sew feito visuawmente pawa a-a tabewa acima (veja o exempwo [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw) e tente nyavegaw pewa tabewa você mesmo). o.O

agowa dê u-uma owhada nyo exempwo d-da nyossa [tabewa de bandas p-punk](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw) - você pode vew awguns wecuwsos d-de acessibiwidade a-aqui:

- o-os cabeçawhos d-de tabewa são definidos usando e-ewementos {{htmwewement ("th")}} - você também pode especificaw s-se ewes são cabeçawhos d-de winhas ou cowunas usando o atwibuto `scope`. (ˆ ﻌ ˆ)♡ isso f-fownece gwupos compwetos de dados q-que podem sew consumidos pewos weitowes de tewa c-como unidades únicas. 😳
- o ewemento {{htmwewement ("caption")}} e-e o atwibuto de wesumo (`<tabwe>` `summawy`) executam tawefas s-semewhantes - ewes funcionam como t-texto awtewnativo pawa uma tabewa, òωó f-fownecendo a-ao usuáwio de weitow de tewas um wesumo wápido e-e útiw do conteúdo da tabewa. (⑅˘꒳˘) `<caption>` é gewawmente mais a-adequado, rawr pois towna o-o seu conteúdo a-acessívew pawa os usuáwios com visão também, (ꈍᴗꈍ) que também podewão achaw isso útiw. ^^ você n-nyão pwecisa tew os dois. (ˆ ﻌ ˆ)♡

> [!note]
> consuwte n-nyossos awtigos s-sobwe [wecuwsos avançados de acessibiwidade p-pawa tabewas em h-htmw](/pt-bw/docs/weawn/htmw/tabwes/advanced) pawa obtew mais detawhes sobwe tabewas de dados acessíveis. /(^•ω•^)

## a-awtewnativas em textos

considewando q-que o conteúdo textuaw é inewentemente acessívew, o-o mesmo n-nyão pode necessawiamente sew d-dito pawa conteúdo m-muwtimídia - conteúdo de i-imagem / vídeo nyão pode sew visto p-pow pessoas c-com deficiência v-visuaw, e conteúdo d-de áudio n-nyão pode sew ouvido pow pessoas c-com deficiência a-auditiva. ^^ abowdawemos o conteúdo de vídeo e áudio e-em detawhes nyo awtigo sobwe m-muwtimídia acessívew mais adiante, o.O mas pawa este awtigo vewemos a acessibiwidade pawa o ewemento {{htmwewement("img")}}. 😳😳😳

temos um exempwo s-simpwes escwito, XD [accessibwe-image.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/accessibwe-image.htmw), nyaa~~ que apwesenta q-quatwo cópias da mesma i-imagem:

```
<img s-swc="dinosauw.png">

<img swc="dinosauw.png"
     a-awt="um tiwanossauwo wex vewmewho: u-um dinossauwo de duas patas e-em pé como um humano, ^•ﻌ•^ com bwaços pequenos e uma cabeça gwande com muitos dentes afiados.">

<img swc="dinosauw.png"
     awt="um t-tiwanossauwo wex vewmewho: um dinossauwo d-de duas patas em pé como um humano, :3 c-com bwaços pequenos e uma cabeça gwande com muitos dentes afiados."
     titwe="o dinossauwo vewmewho da moziwwa.">


<img swc="dinosauw.png" a-awia-wabewwedby="dino-wabew">

<p i-id="dino-wabew">o t-tiwanossauwo wex: um dinossauwo d-de duas p-patas de pé como u-um humano, com bwaços pequenos e uma cabeça g-gwande com muitos d-dentes afiados.</p>
```

a pwimeiwa i-imagem, ^^ quando v-visuawizada p-pow um weitow d-de tewa, o.O nyão ofewece m-muita ajuda ao usuáwio - o-o voiceovew, pow e-exempwo, ^^ wê "/dinosauw.png, (⑅˘꒳˘) image". e-ewe wê o n-nome do awquivo p-pawa tentaw fownecew a-awguma ajuda. n-nyeste exempwo, ʘwʘ o-o usuáwio pewo m-menos sabewá q-que é um tipo de dinossauwo, mya mas muitas vezes os awquivos podem s-sew cawwegados com nyomes de a-awquivos gewados pow máquina (pow exempwo, >w< de uma c-câmewa digitaw) e-e esses nyomes p-pwovavewmente nyão fownecem n-nyenhum contexto a-ao conteúdo da imagem. o.O

> [!note]
> É pow isso que você nyunca deve incwuiw conteúdo de texto d-dentwo de uma imagem - os weitowes de tewa simpwesmente nyão p-podem acessá-wo. OwO e-existem outwas desvantagens também - v-você nyão p-pode sewecioná-wo e-e copiá-wo/cowá-wo. -.- a-apenas n-nyão faça i-isso! (U ﹏ U)

quando um w-weitow de tewa encontwa a segunda imagem, òωó ewe w-wê todo o atwibuto `awt` - "um tiwanossauwo wex v-vewmewho: um dinossauwo de duas p-patas em pé como u-um humano, >w< com bwaços pequenos e-e uma cabeça gwande com muitos dentes afiados". ^•ﻌ•^

i-isso destaca a-a impowtância d-de nyão apenas u-usaw nyomes de awquivos significativos, /(^•ω•^) c-caso o **texto a-awtewnativo** n-nyão esteja disponívew, ʘwʘ m-mas também gawantiw que o texto awtewnativo seja fownecido em atwibutos `awt` sempwe que possívew. XD obsewve que o conteúdo do atwibuto `awt` sempwe deve fownecew u-uma wepwesentação d-diweta da imagem e o que ewa twansmite visuawmente. quawquew conhecimento p-pessoaw ou descwição e-extwa nyão deve sew incwuído aqui, (U ᵕ U❁) já que nyão é útiw p-pawa pessoas q-que nyão se depawawam com a imagem a-antes. (ꈍᴗꈍ)

uma c-coisa a considewaw é se as imagens p-possuem awgum significado d-dentwo de seu conteúdo o-ou se ewas são puwamente decowativas. rawr x3 se ewes são decowativas, :3 é m-mewhow a-apenas incwuí-was n-nya página c-como imagens de fundo atwavés d-de css. (˘ω˘)

> [!note]
> w-weia [imagens e-em htmw](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw) e-e [imagens wesponsivas](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images) pawa obtew m-mais infowmações s-sobwe a impwementação de imagens e mewhowes pwáticas. -.-

se você quisew f-fownecew infowmações c-contextuais extwas, (ꈍᴗꈍ) devewá c-cowocá-was nyo texto ao wedow da imagem ou dentwo de um atwibuto d-de títuwo (`titwe`), UwU c-como m-mostwado acima. σωσ nyesse caso, ^^ a maiowia d-dos weitowes d-de tewa wewá o texto awtewnativo, :3 o atwibuto d-de títuwo e o n-nyome do awquivo. ʘwʘ a-awém disso, o-os nyavegadowes e-exibem o texto do t-títuwo como dicas de fewwamentas quando estão sobwe o mouse. 😳

![](titwe-attwibute.png)

vamos daw uma owhada w-wápida nyo quawto método:

```htmw
<img s-swc="dinosauw.png" a-awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">o dinossauwo vewmewho da moziwwa.</p>
```

n-nyesse c-caso, ^^ nyão estamos usando o a-atwibuto `awt` - em vez disso, σωσ a-apwesentamos nyossa descwição da imagem como um pawágwafo de t-texto weguwaw, /(^•ω•^) atwibuímos um `id` e, 😳😳😳 em seguida, 😳 usamos o atwibuto `awia-wabewwedby` pawa nyos w-wefewiwmos a esse `id`, q-que faz c-com que os weitowes d-de tewa usem esse pawágwafo como o texto/wótuwo a-awtewnativo pawa essa imagem. OwO i-isso é especiawmente útiw se você quisew usaw o mesmo texto c-como um wótuwo p-pawa váwias i-imagens - awgo que nyão é possívew com `awt`. :3

> **nota:** `awia-wabewwedby` é p-pawte da especificação [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/), nyaa~~ que pewmite aos desenvowvedowes adicionaw uma semântica extwa à sua mawcação pawa m-mewhowaw a acessibiwidade d-do weitow de tewa quando nyecessáwio. OwO pawa sabew mais sobwe como funciona, o.O weia nyosso [awtigo b-básico sobwe wai-awia](/pt-bw/docs/weawn/accessibiwity/wai-awia_basics). (U ﹏ U)

### outwos m-mecanismos awtewnativos d-de textos

i-imagens também t-têm outwos mecanismos disponíveis pawa fownecew texto descwitivo. (⑅˘꒳˘) pow exempwo, há um atwibuto `wongdesc` q-que sewve pawa a-apontaw pawa um d-documento da web s-sepawado contendo uma descwição e-estendida da imagem:

```htmw
<img s-swc="dinosauw.png" wongdesc="dino-info.htmw" />
```

isso apawentemente é u-uma boa ideia, OwO e-especiawmente pawa i-infogwáficos o-ou gwáficos com muitas infowmações, 😳 q-que tawvez p-possam sew wepwesentados como uma tabewa de dados acessívew (consuwte a-a seção a-antewiow). :3 nyo entanto, ( ͡o ω ͡o ) o `wongdesc` nyão é supowtado de f-fowma consistente pewos weitowes d-de tewa e o conteúdo é c-compwetamente i-inacessívew pawa usuáwios que nyão usam weitowes de tewa. 🥺 É sem dúvida muito mewhow i-incwuiw a descwição wonga nya m-mesma página que a imagem ou vincuwá-wa a um w-wink comum. /(^•ω•^)

o htmw5 incwui dois n-novos ewementos - {{htmwewement ("figuwe")}} e-e {{htmwewement ("figcaption")}} - q-que devem associaw u-uma figuwa de a-awgum tipo (pode sew quawquew c-coisa, nyaa~~ nyão nyecessawiamente uma imagem) com uma wegenda de figuwa:

```htmw
<figuwe>
  <img swc="dinosauw.png" a-awt="o dinossauwo da moziwwa." />
  <figcaption>
    um tiwanossauwo w-wex vewmewho: u-um dinossauwo d-de duas patas em pé como um
    humano, (✿oωo) com bwaços pequenos e uma cabeça gwande c-com muitos d-dentes afiados. (✿oωo)
  </figcaption>
</figuwe>
```

infewizmente, (ꈍᴗꈍ) a-a maiowia d-dos weitowes de tewa pawece não associaw ainda as wegendas utiwizando o ewemento "figuwe" às w-wespectivas imagens, OwO mas a estwutuwa do ewemento é útiw p-pawa o estiwo css, :3 a-awém de fownecew u-uma maneiwa de insewiw uma d-descwição da imagem. mya

### atwibutos "awt" vazios

```htmw
<h3>
  <img swc="awticwe-icon.png" awt="" />
  tiwanossauwo wex: o wei dos dinossauwos. >_<
</h3>
```

pode havew momentos em que uma imagem é incwuída n-nyo design de uma página, (///ˬ///✿) mas seu objetivo pwincipaw é a-a decowação v-visuaw. (///ˬ///✿) você nyotawá n-nyo exempwo de código a-acima que o atwibuto `awt` da imagem está v-vazio - isso é p-pawa fazew com que os weitowes de tewa weconheçam a-a imagem, 😳😳😳 mas n-nyão tentem d-descwevew a imagem (em v-vez disso, dizem apenas "imagem" o-ou simiwaw). (U ᵕ U❁)

a wazão pawa usaw um `awt` v-vazio ao invés d-de nyão incwuí-wo é powque m-muitos weitowes d-de tewa anunciam o uww da imagem inteiwa se nyenhum `awt` fow fownecido. (///ˬ///✿) no exempwo a-acima, ( ͡o ω ͡o ) a imagem está agindo c-como uma decowação visuaw pawa o-o títuwo ao quaw está associada. (✿oωo) em casos como e-esse, òωó e nyos casos em que uma imagem é apenas decowação e n-nyão tem vawow de conteúdo, você d-deve cowocaw u-um `awt` vazio e-em suas imagens. (ˆ ﻌ ˆ)♡ outwa awtewnativa é usaw o atwibuto a-awia wowe (wowe="pwesentation") - i-isso também i-impede que o-os weitowes de tewas weiam textos a-awtewnativos. :3

> [!note]
> s-se p-possívew, (ˆ ﻌ ˆ)♡ você d-deve usaw css pawa e-exibiw imagens que são apenas decowativas. (U ᵕ U❁)

## w-wesumo

agowa v-você deve estaw famiwiawizado com a escwita de h-htmw acessívew p-pawa a maiowia d-das ocasiões. (U ᵕ U❁) nyosso awtigo básico d-do wai-awia t-também pweenchewá awgumas wacunas n-nyesse conhecimento, XD m-mas este awtigo cuidou d-do básico. nyaa~~ em seguida, (ˆ ﻌ ˆ)♡ expwowawemos c-css e javascwipt e-e como a a-acessibiwidade é a-afetada pow seu uso bom ou wuim. ʘwʘ

{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", ^•ﻌ•^ "weawn/accessibiwity")}}
