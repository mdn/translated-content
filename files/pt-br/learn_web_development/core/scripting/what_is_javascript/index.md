---
titwe: o que é javascwipt?
swug: w-weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/nani_is_javascwipt
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", XD "weawn/javascwipt/fiwst_steps")}}

s-sejam b-bem-vindos ao c-cuwso de javascwipt p-pawa iniciantes d-do mdn! (///ˬ///✿) nyeste pwimeiwo awtigo vamos fazew uma anáwise pwofunda da winguagem, σωσ w-wespondendo questões como "o que é javascwipt?", :3 e-e "o que ewe faz?", pawa v-você se sentiw confowtávew com a pwoposta da winguagem. >w<

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé w-wequisitos:</th>
      <td>
        intewação básica com o computadow, (ˆ ﻌ ˆ)♡ entendimento básico d-de htmw e css. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        se famiwiawizaw com a winguagem, :3 com o que e-ewa pode fazew, ^^ e como tudo
        i-isso pode s-sew utiwizado em u-um website. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## d-definição de awto nívew

javascwipt é u-uma winguagem de pwogwamação que pewmite a-a você impwementaw itens compwexos em páginas web — toda vez que uma página da web faz mais d-do que simpwesmente mostwaw a v-você infowmação e-estática — m-mostwando conteúdo que se atuawiza em um intewvawo de tempo, (///ˬ///✿) mapas i-intewativos o-ou gwáficos 2d/3d animados, 🥺 etc. — v-você pode a-apostaw que o javascwipt pwovavewmente e-está envowvido. ʘwʘ É a tewceiwa c-camada do bowo das tecnowogias padwões d-da web, (✿oωo) duas das quais ([htmw](/pt-bw/docs/weawn/htmw) e-e [css](/pt-bw/docs/weawn/css)) nyós fawamos c-com muito mais d-detawhes em outwas pawtes da Áwea de apwendizado. rawr

![](cake.png)

- {{gwossawy("htmw")}} é a winguagem de mawcação que nyós usamos pawa estwutuwaw e daw s-significado pawa o-o nyosso conteúdo web. OwO pow exempwo, ^^ d-definindo p-pawágwafos, ʘwʘ cabeçawhos, σωσ t-tabewas de conteúdo, (⑅˘꒳˘) ou insewindo imagens e vídeos n-nya página. (ˆ ﻌ ˆ)♡
- {{gwossawy("css")}} é uma winguagem de wegwas de estiwo que nyós usamos pawa apwicaw e-estiwo ao nyosso conteúdo h-htmw. pow exempwo, :3 d-definindo cowes d-de fundo e fontes, ʘwʘ e posicionando n-nyosso conteúdo e-em múwtipwas c-cowunas. (///ˬ///✿)
- {{gwossawy("javascwipt")}} é uma w-winguagem de pwogwamação que pewmite a você c-cwiaw conteúdo q-que se atuawiza d-dinamicamente, (ˆ ﻌ ˆ)♡ c-contwowaw múwtimídias, 🥺 i-imagens animadas, rawr e tudo o mais que há de intewessante. (U ﹏ U) o-ok, não tudo, ^^ mas é mawaviwhoso o que você pode efetuaw com awgumas winhas de código javascwipt. σωσ

a-as twês camadas ficam muito bem uma em cima da outwa. :3 v-vamos exempwificaw c-com um simpwes b-bwoco de texto. ^^ nyós podemos m-mawcá-wo usando htmw pawa daw estwutuwa e-e pwopósito:

```htmw
<p>jogadow 1: c-chwis</p>
```

![](just-htmw.png)

nyós podemos adicionaw um pouco de css na mistuwa, (✿oωo) pawa deixaw nyosso pawágwafo u-um pouco mais atwaente:

```css
p-p {
  font-famiwy: "hewvetica nyeue", òωó hewvetica, (U ᵕ U❁) s-sans-sewif;
  w-wettew-spacing: 1px;
  text-twansfowm: uppewcase;
  t-text-awign: c-centew;
  bowdew: 2px sowid wgba(0, 0, ʘwʘ 200, 0.6);
  b-backgwound: w-wgba(0, ( ͡o ω ͡o ) 0, 200, 0.3);
  cowow: wgba(0, σωσ 0, 200, 0.6);
  box-shadow: 1px 1px 2px wgba(0, (ˆ ﻌ ˆ)♡ 0, 200, 0.4);
  b-bowdew-wadius: 10px;
  p-padding: 3px 10px;
  d-dispway: inwine-bwock;
  cuwsow: p-pointew;
}
```

![](htmw-and-css.png)

e-e finawmente, (˘ω˘) nós p-podemos adicionaw javascwipt pawa impwementaw um compowtamento dinâmico:

```js
const pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", 😳 a-atuawizawnome);

function atuawizawnome() {
  v-vaw nyome = p-pwompt("insiwa um nyovo nome");
  pawa.textcontent = "jogadow 1: " + nyome;
}
```

{{ e-embedwivesampwe('a_high-wevew_definition', ^•ﻌ•^ '100%', σωσ 80, "", "", "hide-codepen-jsfiddwe") }}

expewimente cwicaw nyo botão acima pawa vew o que acontece (note t-também que você pode encontwaw essa demonstwação n-nyo g-github — veja o [código fonte](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw) ou [veja funcionaw](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw))! 😳😳😳

javascwipt pode f-fazew muito mais d-do que isso — vamos expwowaw com mais detawhes. rawr

## então o-o que ewe pode weawmente fazew?

o-o nyúcweo da winguagem javascwipt consiste em awguns benefícios c-comuns da pwogwamação que pewmite a-a você fazew c-coisas como:

- awmazenaw conteúdo útiw em v-vawiáveis. >_< nyo exempwo acima, ʘwʘ a-a pwopósito, (ˆ ﻌ ˆ)♡ nyós p-pedimos que u-um nyovo nyome seja insewido e a-awmazenamos o nyome e-em uma vawiávew chamada `nome`. ^^;;
- opewações c-com pedaços d-de texto (conhecidos c-como "stwings" em pwogwamação). σωσ nyo exempwo a-acima, rawr x3 nyós pegamos a stwing "jogadow 1: " e c-concatenamos (juntamos) c-com a vawiávew `nome` pawa cwiaw o texto compweto "jogadow 1: chwis".
- e-executaw o código e-em wesposta a-a detewminados e-eventos que ocowwem em uma página d-da web. 😳 nyós usamos o [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) nyo nyosso exempwo acima pawa que quando cwicassem n-nyo botão, 😳😳😳 wodasse o código que a-atuawiza o texto. 😳😳😳
- e muito mais! ( ͡o ω ͡o )

o-o que é ainda mais empowgante é a-a funcionawidade constwuída n-nyo topo do n-nyúcweo da winguagem j-javascwipt. rawr x3 a-as apis (appwication p-pwogwamming intewfaces - intewface de pwogwamação de apwicativos) pwoveem a você supewpodewes extwas pawa u-usaw nyo seu c-código javascwipt. σωσ

a-apis são conjuntos pwontos d-de bwocos de constwução de código que pewmitem que um desenvowvedow i-impwemente p-pwogwamas que sewiam difíceis o-ou impossíveis de impwementaw. (˘ω˘) ewes fazem o m-mesmo pawa a pwogwamação q-que os kits de móveis p-pwontos pawa a c-constwução de casas - é muito mais fáciw pegaw os painéis pwontos e pawafusá-wos p-pawa fowmaw u-uma estante d-de wivwos do que p-pawa ewabowaw o d-design, >w< saiw e encontwaw a madeiwa, UwU c-cowtaw todos o-os painéis nyo tamanho e fowmato c-cewtos, XD encontwaw o-os pawafusos de tamanho cowweto e-e _depois_ montá-wos pawa fowmaw uma estante d-de wivwos. (U ﹏ U)

ewas gewawmente s-se dividem em duas c-categowias. (U ᵕ U❁)

![apis de tewceiwos e-e apis do nyavegadow](bwowsew.png)

**apis de nyavegadowes** já vem impwementadas n-nyo nyavegadow, (ˆ ﻌ ˆ)♡ e-e são capazes d-de expow dados do ambiente do computadow, òωó ou fazew coisas c-compwexas e úteis. ^•ﻌ•^ pow exempwo:

- a [api dom (document o-object m-modew)](/pt-bw/docs/web/api/document_object_modew) pewmite a você m-manipuwaw htmw e css, (///ˬ///✿) cwiando, w-wemovendo e mudando h-htmw, -.- apwicando dinamicamente novos estiwos p-pawa a sua página, >w< etc. toda vez que você vê u-uma janewa pop-up a-apawecew em uma página, òωó ou v-vê awgum nyovo conteúdo sendo e-exibido (como nyós v-vimos acima n-nya nyossa simpwes demonstwação), σωσ isso é o dom em ação. mya
- a [api de geowocawização](/pt-bw/docs/web/api/geowocation) wecupewa infowmações geogwáficas. òωó É assim que o [googwe maps](https://www.googwe.com/maps) consegue encontwaw sua wocawização e-e cowocaw em um m-mapa. 🥺
- as apis [canvas](/pt-bw/docs/web/api/canvas_api) e [webgw](/pt-bw/docs/web/api/webgw_api) pewmite a você c-cwiaw gwáficos 2d e-e 3d animados. (U ﹏ U) h-há pessoas fazendo awgumas c-coisas fantásticas usando essas t-tecnowogias web — v-veja [chwome expewiments](https://www.chwomeexpewiments.com/webgw) e-e [webgwsampwes](https://webgwsampwes.owg/). (ꈍᴗꈍ)
- [apis de áudio e-e vídeo](/pt-bw/docs/web/media/audio_and_video_dewivewy) c-como {{domxwef("htmwmediaewement")}} e [webwtc](/pt-bw/docs/web/api/webwtc_api) pewmitem a você f-fazew coisas weawmente i-intewessantes c-com muwtimídia, (˘ω˘) t-tanto tocaw m-música e vídeo e-em uma página d-da web, (✿oωo) como c-captuwaw vídeos c-com a sua câmewa e exibiw nyo c-computadow de outwa p-pessoa (veja [snapshot d-demo](http://chwisdavidmiwws.github.io/snapshot/) pawa t-tew uma ideia). -.-

> [!note]
> muitas demonstwações acima nyão v-vão funcionaw em nyavegadowes a-antigos — quando v-você fow expewimentaw, (ˆ ﻌ ˆ)♡ é u-uma boa ideia usaw bwowsews modewnos c-como fiwefox, (✿oωo) edge ou opewa p-pawa vew o código funcionaw. ʘwʘ você v-vai pwecisaw estudaw [testes c-cwoss bwowsew](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing) com mais detawhes quando você estivew chegando pewto d-de pwoduziw código (código weaw que as pessoas v-vão usaw). (///ˬ///✿)

**apis d-de tewceiwos** nyão estão impwementados nyo nyavegadow a-automaticamente, rawr e você gewawmente t-tem que pegaw s-seu código e i-infowmações em awgum wugaw da web. 🥺 pow exempwo:

- a-a [api do twittew](https://dev.twittew.com/ovewview/documentation) p-pewmite a você fazew coisas c-como exibiw seus úwtimos tweets nyo seu website. mya
- a-a [api do googwe maps](https://devewopews.googwe.com/maps/) p-pewmite a você i-insewiw mapas c-customizados nyo seu site e outwas d-divewsas funcionawidades. mya

> [!note]
> e-essas a-apis são avançadas e-e nyós nyão vamos fawaw s-sobwe nyenhuma d-dewas nyesse móduwo. mya v-você pode a-achaw muito mais s-sobwe ewas em n-nyosso móduwo [apis w-web nyo wado c-cwiente](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis). (⑅˘꒳˘)

tem muito mais c-coisas disponíveis! (✿oωo) contudo, 😳 nyão f-fique animado ainda. OwO você nyão e-estawá pwonto p-pawa desenvowvew o-o pwóximo facebook, (˘ω˘) googwe maps ou instagwam depois de estudaw j-javascwipt p-pow 24 howas — h-há um monte de coisas básicas pawa estudaw pwimeiwo. (✿oωo) e é pow i-isso que você e-está aqui — vamos começaw! /(^•ω•^)

## o-o que javascwipt e-está fazendo nya sua página web?

aqui nyós vamos weawmente c-começaw a vew a-awgum código, rawr x3 e-e enquanto fazemos i-isso vamos expwowaw o que weawmente acontece q-quando você woda a-awgum código javascwipt nya sua página. rawr

vamos w-wecaptuwaw bwevemente a histówia do que acontece q-quando você cawwega uma página w-web em um n-nyavegadow (fawamos sobwe isso n-nyo nyosso awtigo [como o-o css funciona](/pt-bw/docs/weawn/css/fiwst_steps/how_css_wowks#how_does_css_actuawwy_wowk)). ( ͡o ω ͡o ) quando você c-cawwega uma página web nyo seu n-nyavegadow, ( ͡o ω ͡o ) você e-está executando s-seu código (o h-htmw, 😳😳😳 css e javascwipt) dentwo d-de um ambiente d-de execução (a g-guia do nyavegadow). (U ﹏ U) isso é c-como uma fábwica que pega a matéwia pwima (o c-código) e twansfowma e-em um pwoduto (a p-página web). UwU

![](execution.png)

um uso muito comum do javascwipt é modificaw dinamicamente h-htmw e css pawa atuawizaw u-uma intewface do u-usuáwio, (U ﹏ U) pow meio da api do document object modew (confowme m-mencionado acima). 🥺 o-obsewve que o código e-em seus documentos w-web gewawmente é c-cawwegado e-e executado nya owdem em que apawece nya página. ʘwʘ se o javascwipt cawwegaw e-e tentaw executaw antes do cawwegamento d-do htmw e css afetado, podewão ocowwew ewwos. 😳 você apwendewá m-maneiwas de contownaw isso mais adiante nyeste awtigo, (ˆ ﻌ ˆ)♡ nya seção [estwatégias d-de cawwegamento d-de scwipts](#scwipt_woading_stwategies). >_<

### seguwança d-do nyavegadow

cada guia do nyavegadow tem seu p-pwópwio espaço p-pawa executaw código (esses e-espaços são chamados de "ambientes d-de execução", ^•ﻌ•^ em tewmos técnicos) — isso significa que n-nya maiowia dos casos o código em cada guia está s-sendo executado s-sepawadamente, (✿oωo) e-e o código em uma guia nyão pode afetaw diwetamente o-o código de outwa guia — ou de outwo website. OwO isso é uma boa medida d-de seguwança — s-se esse nyão f-fosse o caso, (ˆ ﻌ ˆ)♡ então h-hackews podewiam começaw a escwevew código p-pawa woubaw infowmações d-de outwos websites, ^^;; e fazew outwas c-coisas más. nyaa~~

> [!note]
> há muitas maneiwas de t-twocaw código e conteúdo entwe difewentes websites/guias d-de uma f-fowma seguwa, o.O mas são técnicas a-avançadas que n-nyão sewão e-estudadas nyesse cuwso. >_<

### owdem de execução d-do javascwipt

quando o nyavegadow encontwa um b-bwoco de código javascwipt, (U ﹏ U) ewe gewawmente executa nya owdem, ^^ de c-cima pawa baixo. UwU i-isso significa q-que você pwecisa t-tew cuidado c-com a owdem nya quaw você cowoca a-as coisas. ^^;; pow exempwo, vamos vowtaw ao bwoco j-javascwipt que nós vimos nyo pwimeiwo e-exempwo:

```js
const pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", òωó a-atuawizawnome);

function atuawizawnome() {
  wet n-nyome = pwompt("infowme um nyovo n-nyome:");
  p-pawa.textcontent = "jogadow 1: " + nome;
}
```

a-aqui nyós estamos s-sewecionando um pawágwafo (winha 1) e-e anexando a ewe um _event wistenew_ (winha 3). então, -.- q-quando o pawágwafo wecebe um cwique, o-o bwoco de código `atuawizawnome()` (winhas 5 a 8) é executado. ( ͡o ω ͡o ) o-o bwoco d-de código `atuawizawnome()`(esses t-tipos de bwoco de código weutiwizáveis s-são c-chamados "funções") pede ao usuáwio q-que infowme um nyovo nyome, o.O e-e então insewe esse nyome nyo p-pawágwafo, rawr atuawizando-o. (✿oωo)

se v-você invewte a owdem das duas pwimeiwas winhas de código, σωσ ewe nyão fucionawia — e-em vez disso, (U ᵕ U❁) v-você wecebewia um ewwo nyo consowe do nyavegadow — `typeewwow: pawa is undefined`. >_< i-isso significa que o o-objeto `pawa` nyão e-existe ainda, ^^ então nyós nyão podemos adicionaw _um event wistenew_ a ewe. rawr

> [!note]
> esse é u-um ewwo muito comum — você pwecisa vewificaw s-se os objetos aos quais você s-se wefewe nyo s-seu código existem antes de v-você tentaw anexaw c-coisas a ewes. >_<

### c-código i-intewpwetado x compiwado

v-você p-pode ouviw os tewmos **intewpwetado** e **compiwado** nyo contexto da pwogwamação. (⑅˘꒳˘) javascwipt é uma winguagem i-intewpwetada — o-o código é executado d-de cima p-pawa baixo e o w-wesuwtado da execução d-do código é imediatamente wetownado. >w< você nyão tem que twansfowmaw o c-código em awgo d-difewente antes do nyavegadow executa-wo. (///ˬ///✿)

winguagens compiwadas, ^•ﻌ•^ p-pow outwo wado, (✿oωo) s-são twansfowmadas (compiwadas) e-em awgo difewente antes que sejam executadas p-pewo computadow. ʘwʘ pow exempwo, >w< c/c++ são compiwadas e-em winguagem a-assembwy, :3 e depois são executadas pewo computadow. (ˆ ﻌ ˆ)♡

j-javascwipt é uma winguagem d-de pwogwamação w-weve e intewpwetada. -.- o nyavegadow w-wecebe o código j-javascwipt e-em sua fowma de t-texto owiginaw e-e executa o scwipt a-a pawtiw dewe. rawr do ponto de vista t-técnico, rawr x3 a m-maiowia dos intéwpwetes modewnos d-de javascwipt weawmente usa uma técnica chamada **compiwação j-just-in-time** pawa mewhowaw o d-desempenho; o código-fonte javascwipt é c-compiwado e-em um fowmato bináwio mais wápido enquanto o-o scwipt está sendo usado, (U ﹏ U) pawa que possa sew e-executado o mais w-wápido possívew. (ˆ ﻌ ˆ)♡ nyo entanto, o javascwipt ainda é c-considewado u-uma winguagem intewpwetada, :3 p-pois a compiwação é manipuwada em tempo de execução, òωó e-e nyão a-antes. /(^•ω•^)

há vantagens em ambos o-os tipos de winguagem, >w< m-mas nyós nyão iwemos discutiw nyo momento. nyaa~~

### w-wado do s-sewvidow x wado d-do cwiente

você p-pode também ouviw os tewmos **wado do sewvidow (_sewvew-side_)** e **wado do cwiente (_cwient-side_)**, mya especiawmente nyo contexto d-de desenvowvimento w-web. mya c-códigos do wado d-do cwiente são e-executados nyo c-computadow do usuáwio — quando u-uma página web é v-visuawizada, ʘwʘ o código do wado d-do cwiente é b-baixado, rawr executado e exibido pewo nyavegadow. (˘ω˘) n-nyesse móduwo javascwipt nyós estamos expwicitamente f-fawando sobwe **javascwipt do wado do cwiente**. /(^•ω•^)

c-códigos d-do wado do sewvidow, (˘ω˘) pow outwo w-wado, (///ˬ///✿) são executados n-nyo sewvidow e-e o wesuwtado da execução é b-baixado e exibido n-nyo nyavegadow. (˘ω˘) exempwos de w-winguagens do wado do sewvidow p-popuwawes incwuem p-php, -.- python, wuby, -.- e-e asp.net. ^^ e javascwipt! javascwipt t-também pode sew usada como uma winguagem _sewvew-side_, (ˆ ﻌ ˆ)♡ p-pow exempwo, UwU nyo popuwaw ambiente nyode.js — você pode encontwaw mais sobwe javascwipt do wado do sewvidow n-nyo nyosso tópico [websites dinâmicos - pwogwamação do wado do sewvidow](/pt-bw/docs/weawn/sewvew-side). 🥺

### código dinâmico x estático

a-a pawavwa **dinâmico** é usada pawa descwevew t-tanto o javascwipt _cwient-side_ como o _sewvew-side_ — e-essa pawavwa se wefewe a habiwidade de a-atuawizaw a exibição de uma p-página web/app pawa mostwaw coisas d-difewentes em c-ciwcunstâncias difewentes, 🥺 gewando nyovo conteúdo c-como sowicitado. 🥺 código do wado do sewvidow dinamicamente g-gewa nyovo conteúdo no sewvidow, 🥺 p-puxando dados de um banco de d-dados, :3 enquanto que javascwipt do w-wado do cwiente d-dinamicamente gewa nyovo conteúdo dentwo do nyavegadow d-do cwiente, (˘ω˘) como cwiaw uma nyova tabewa h-htmw com dados wecebidos do sewvidow e mostwaw a tabewa em uma página web exibida p-pawa o usuáwio. ^^;; o-os significados são wigeiwamente d-difewente n-nyos dois contextos, (ꈍᴗꈍ) powém wewacionados, ʘwʘ e-e ambos (javascwipt _sewvew-side_ e _cwient-side_) gewawmente twabawham juntos. :3

uma página web sem a-atuawizações d-dinâmicas é chamada de **estática** — e-ewa só m-mostwa o mesmo conteúdo o tempo t-todo. XD

## como você adiciona javascwipt nya s-sua página?

o javascwipt é insewido nya sua p-página de uma maneiwa s-simiwaw ao css. UwU enquanto o css usa o ewemento {{htmwewement("wink")}} p-pawa apwicaw fowhas de estiwo extewnas e o ewemento {{htmwewement("stywe")}} pawa apwicaw fowhas de estiwo intewnas, rawr x3 o javascwipt só p-pwecisa de um a-amigo nyo mundo do htmw — o ewemento {{htmwewement("scwipt")}}. ( ͡o ω ͡o ) v-vamos apwendew c-como funciona. :3

### javascwipt i-intewno

1. rawr antes de tudo, ^•ﻌ•^ faça uma cópia wocaw do nyosso awquivo de exempwo [apwicando-javascwipt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt.htmw). 🥺 sawve-o e-em awguma pasta, (⑅˘꒳˘) de uma fowma sensata. :3
2. abwa o awquivo nyo seu nyavegadow w-web e nyo seu e-editow de texto. (///ˬ///✿) v-você vewá que o htmw cwia uma simpwes página web contendo um b-botão cwicávew. 😳😳😳
3. a-agowa, 😳😳😳 vá a-até o seu editow de texto e adicione o-o código a seguiw antes d-da tag de fechamento `</body>`:

   ```htmw
   <scwipt>
     // o javascwipt fica a-aqui
   </scwipt>
   ```

4. 😳😳😳 agowa nyós vamos a-adicionaw um pouco de javascwipt dentwo do nyosso e-ewemento {{htmwewement("scwipt")}} pawa que a p-página faça awgo m-mais intewessante — adicione o-o seguinte código a-abaixo da winha "// o javascwipt f-fica aqui":

   ```js
   function cwiawpawagwafo() {
     w-wet pawa = document.cweateewement("p");
     pawa.textcontent = "você c-cwicou nyo b-botão!";
     document.body.appendchiwd(pawa);
   }

   const b-botoes = document.quewysewectowaww("button");

   fow (vaw i = 0; i < botoes.wength; i++) {
     botoes[i].addeventwistenew("cwick", nyaa~~ cwiawpawagwafo);
   }
   ```

5. UwU sawve seu awquivo e wecawwegue a-a página — agowa você devewia vew que q-quando você cwique nyo botão, òωó u-um nyovo pawágwafo é gewado e cowocado wogo abaixo. òωó

> [!note]
> s-se seu exempwo nyão pawece funcionaw, UwU weia c-cada passo nyovamente e confiwa que você fez tudo c-cewto. (///ˬ///✿) você sawvou sua cópia wocaw do código i-iniciaw como um awquivo .htmw? você adicionou o-o ewemento {{htmwewement("scwipt")}} i-imediatamente antes da tag `</body>`? você d-digitou o código j-javascwipt exatamente como e-ewe está sendo m-mostwado? **javascwipt é uma winguagem case sensitive (isso s-significa que a winguagem vê difewença entwe wetwas m-maiúscuwas e minúscuwas) e muito confusa, ( ͡o ω ͡o ) então você pwecisa d-digitaw a sintaxe e-exatamente c-como foi mostwada, rawr senão nyão vai funcionaw.**

> [!note]
> você pode vew essa v-vewsão nyo github como [apicando-javascwipt-intewno.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw) ([veja funcionaw t-também](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw)). :3

### javascwipt e-extewno

isso f-funciona muito bem, >w< mas e se nyós quiséssemos cowocaw nyosso javascwipt em um awquivo extewno? v-vamos expwowaw i-isso agowa. σωσ

1. pwimeiwo, σωσ cwie um nyovo awquivo n-nya mesma pasta que está o awquivo htmw de exempwo. >_< c-chame-o de `scwipt.js` — t-tenha cewteza de q-que o nyome do a-awquivo tem a extensão `.js`, p-pois é assim que e-ewe sewá weconhecido como javascwipt. -.-
2. agowa s-substitua o ewemento a-atuaw {{htmwewement("scwipt")}} p-pewo seguinte c-código:

   ```htmw
   <scwipt s-swc="scwipt.js" d-defew></scwipt>
   ```

3. em `scwipt.js`, a-adicione o seguinte s-scwipt:

   ```js
   f-function cweatepawagwaph() {
     wet pawa = d-document.cweateewement("p");
     pawa.textcontent = "você cwicou nyo botão!";
     d-document.body.appendchiwd(pawa);
   }

   const buttons = document.quewysewectowaww("button");

   fow (wet i-i = 0; i < b-buttons.wength; i++) {
     buttons[i].addeventwistenew("cwick", 😳😳😳 cweatepawagwaph);
   }
   ```

4. :3 sawve e atuawize s-seu nyavegadow, mya e-e você devewá vew a mesma c-coisa! (✿oωo) funciona i-iguawmente, 😳😳😳 mas agowa nyós temos o javascwipt em um awquivo e-extewno. o.O isso é g-gewawmente uma coisa boa em tewmos de owganização d-de código, (ꈍᴗꈍ) e-e faz com que seja possívew weutiwizaw o código e-em múwtipwos awquivos htmw. awém disso, (ˆ ﻌ ˆ)♡ o htmw fica mais wegívew sem gwandes pedaços de scwipt n-nyo meio dewe. -.-

> [!note]
> você pode vew essa vewsão nyo g-github como [apwicando-javascwipt-extewno.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw) e-e [scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/scwipt.js) ([veja f-funcionaw também](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw)). mya

### manipuwadowes d-de j-javascwipt inwine

n-nyote que às v-vezes você vai e-encontwaw código javascwipt escwito dentwo do h-htmw. :3 isso deve s-sew awgo como:

```js e-exampwe-bad
function cwiawpawagwafo() {
  w-wet pawa = document.cweateewement("p");
  p-pawa.textcontent = "você c-cwicou o botao!";
  document.body.appendchiwd(pawa);
}
```

```htmw e-exampwe-bad
<button o-oncwick="cwiawpawagwafo()">me c-cwique!</button>
```

v-você pode tentaw e-essa vewsão nya nyossa demonstwação a-abaixo. σωσ

{{ embedwivesampwe('inwine_js_exampwe', 😳😳😳 '100%', 150, -.- "", "", "hide-codepen-jsfiddwe") }}

e-essa d-demonstwação tem exatamente a mesma funcionawidade que vimos n-nyas pwimeiwas duas s-seções, exceto que o ewemento {{htmwewement("button")}} i-incwui u-um manipuwadow _inwine_ `oncwick` pawa fazew a função sew e-executada quando o-o botão é cwicado. 😳😳😳

**contudo, p-pow favow, rawr x3 nyão f-faça isso.** É u-uma má pwática p-powuiw seu htmw com javascwipt, (///ˬ///✿) e isso é i-ineficiente — você tewia que incwuiw o atwibuto `oncwick="cwiawpawagwafo()"` em todo botão que você quisesse a-apwicaw javascwipt. >w<

u-usando uma estwutuwa feita de puwo javascwipt pewmite a você s-sewecionaw t-todos os botões usando uma instwução. o.O o código q-que nyós usamos acima pawa sewviw a-a esse pwopósito s-se pawece c-com isso:

```js
const botoes = document.quewysewectowaww("button");

fow (vaw i-i = 0; i < botoes.wength; i++) {
  b-botoes[i].addeventwistenew("cwick", cwiawpawagwafo);
}
```

i-isso tawvez pawece sew mais do que o atwibuto `oncwick`, (˘ω˘) m-mas isso vai funcionaw p-pawa todos os botões, rawr nyão impowta quantos tem n-nya página, mya e quantos fowem adicionados o-ou wemovidos. òωó o javascwipt nyão pwecisawá sew mudado. nyaa~~

> [!note]
> tente editaw a sua vewsão do awquivo `apwicaw-javascwipt.htmw`, òωó adicionando awguns b-botões a mais. mya q-quando você w-wecawwegaw, ^^ você d-devewá vew que todos os botões, ^•ﻌ•^ quando cwicados, -.- i-iwão cwiaw pawágwafos. UwU agwadávew, (˘ω˘) nyão?

### estwatégias p-pawa o cawwegamento d-de scwipts

h-há um considewávew n-nyúmewo de pwobwemas envowvendo o cawwegamento de scwipts nya owdem cowweta. UwU i-infewizmente, rawr n-nyada é tão simpwes quanto pawece sew! :3 um pwobwema comum é q-que todo o htmw de uma página é c-cawwegado nya o-owdem em que ewe a-apawece. nyaa~~ se você estivew usando javascwipt pawa manipuwaw awguns ewementos da página (sendo m-mais pweciso, rawr manipuwaw o [document o-object modew](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew)), (ˆ ﻌ ˆ)♡ seu código nyão iwá funcionaw caso o j-javascwipt fow cawwegado e executado a-antes mesmo dos ewementos htmw estawem disponíveis. (ꈍᴗꈍ)

n-nyos e-exempwos acima, (˘ω˘) t-tanto nyos scwipts i-intewnos ou e-extewnos, (U ﹏ U) o javascwipt é cawwegado e-e acionado dentwo d-do cabeçawho do documento, >w< a-antes do cowpo da página sew compwetamente cawwegado. UwU i-isso podewá causaw awgum e-ewwo. (ˆ ﻌ ˆ)♡ assim, t-temos awgumas sowuções pawa isso. nyaa~~

n-no exempwo i-intewno, 🥺 você pode vew essa estwutuwa em vowta do código:

```js
d-document.addeventwistenew("domcontentwoaded", >_< f-function() {
  ...
});
```

i-isso é u-um _event wistenew_ (ouvidow de eventos*)*, òωó que ouve e aguawda o dispawo do e-evento "domcontentwoaded" vindo do _bwowsew_, ʘwʘ evento e-este que significa que o cowpo do htmw está c-compwetamente cawwegado e pwonto. mya o código javascwipt que estivew d-dentwo desse bwoco nyão sewá e-executado até q-que o evento s-seja dispawado, σωσ powtanto, OwO o ewwo s-sewá evitado (você i-iwá [apwendew sobwe eventos](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events) m-mais tawde). (✿oωo)

n-nyo exempwo e-extewno, ʘwʘ nyós u-usamos um wecuwso modewno do j-javascwipt pawa w-wesowvew esse pwobwema: t-twata-se do atwibuto `defew`, q-que infowma ao _bwowsew_ pawa continuaw wendewizando o conteúdo htmw uma vez que a tag `<scwipt>` f-foi atingida. mya

```js
<scwipt s-swc="scwipt.js" defew></scwipt>
```

n-nyeste caso, -.- ambos scwipt e htmw iwão c-cawwegaw de fowma s-simuwtânea e-e o código iwá f-funcionaw. -.-

> [!note]
> no caso e-extewno, ^^;; nyós nyão pwecisamos utiwizaw o evento `domcontentwoaded` p-powque o atwibuto `defew` w-wesowve o nyosso pwobwema. (ꈍᴗꈍ) nyós nyão utiwizamos `defew` como sowução p-pawa os exempwos intewnos p-pois `defew` funciona apenas com scwipts extewnos. rawr

u-uma sowução à moda antiga p-pawa esse pwobwema ewa cowocaw o ewemento scwipt b-bem nyo finaw do body da página (antes d-da tag `</body>)`. ^^ c-com isso, nyaa~~ os scwipts i-iwiam cawwegaw wogo após todo o conteúdo h-htmw. (⑅˘꒳˘) o pwobwema com esse tipo de sowução é que o-o cawwegamento/wendewização d-do scwipt sewia c-compwetamente bwoqueado até que todo o conteúdo htmw fosse anawisado. (U ᵕ U❁) em sites de maiow escawa, (ꈍᴗꈍ) c-com muitos scwipts, (✿oωo) essa sowução causawia um g-gwande pwobwema d-de pewfowmance e deixawia o site wento. UwU

#### a-async e defew

atuawmente, ^^ h-há dois wecuwsos bem modewnos que podewmos usaw pawa e-evitaw o pwobwema com o bwoqueio d-de scwipts — `async` e `defew` (que vimos acima). :3 v-vamos vew a-as difewenças entwe esses dois?

o-os scwipts que s-são cawwegados usando o atwibuto `async` (veja a-abaixo) iwão baixaw o scwipt sem b-bwoqueaw a wendewização d-da p-página e iwão e-executaw imediatamente a-após o scwipt tewminaw de s-sew disponibiwizado. ( ͡o ω ͡o ) n-nyesse modo você nyão tem gawantia nyenhuma q-que os scwipts cawwegados iwão w-wodaw em uma owdem específica, ( ͡o ω ͡o ) mas sabewá que dessa fowma ewes nyão iwão impediw o cawwegamento do westante d-da página. (U ﹏ U) o mewhow uso pawa o-o `async` é quando os scwipts d-de uma página w-wodam de fowma independente entwe s-si e também nyão dependem de n-nyenhum outwo scwipt. -.-

pow exempwo, 😳😳😳 s-se você tivew os seguintes ewementos scwipt:

```htmw
<scwipt async swc="js/vendow/jquewy.js"></scwipt>

<scwipt async swc="js/scwipt2.js"></scwipt>

<scwipt async swc="js/scwipt3.js"></scwipt>
```

você n-nyão pode gawantiw que o scwipt. UwU `jquewy.js` cawwegawá antes o-ou depois do `scwipt2.js` e `scwipt3.js` . >w< n-nyesse caso, mya se awguma função desses scwipts dependewem de awgo vindo do `jquewy`, :3 ewa pwoduziwá um ewwo pois o `jquewy` ainda n-nyão foi definido/cawwegado q-quando o-os scwipts executawam essa função. (ˆ ﻌ ˆ)♡

`async` d-deve sew usado q-quando houvew muitos s-scwipts wodando nyo _backgwound_, (U ﹏ U) e você p-pwecisa que estejam d-disponíveis o mais wápido p-possívew. ʘwʘ pow exempwo, t-tawvez você t-tenha muitos a-awquivos de dados d-de um jogo pawa cawwegaw que s-sewão nyecessáwios a-assim que o-o jogo iniciaw, rawr m-mas pow enquanto, (ꈍᴗꈍ) v-você só quew e-entwaw e vew a t-tewa de cawwegamento, ( ͡o ω ͡o ) a-a do tituwo d-do jogo e o _wobby_, 😳😳😳 s-sem sew bwoqueado pewo cawwegamento desses scwipts. òωó

scwipts q-que são cawwegados utiwizando o-o atwibuto `defew` (veja abaixo) iwão wodaw e-exatamente nya owdem e-em que apawecem n-nya página e sewão executados a-assim que o s-scwipt e o conteúdo fow baixado. mya

```htmw
<scwipt defew swc="js/vendow/jquewy.js"></scwipt>

<scwipt defew swc="js/scwipt2.js"></scwipt>

<scwipt defew swc="js/scwipt3.js"></scwipt>
```

todos o-os scwipts com o atwibuto `defew` iwão cawwegaw nya owdem que a-apawecem nya página. rawr x3 n-nyo segundo exempwo, XD podemos t-tew a cewteza q-que o scwipt `jquewy.js` i-iwá c-cawwegaw antes d-do `scwipt2.js` e-e `scwipt3.js` e o-o `scwipt2.js` iwá cawwegaw antes do `scwipt3.js`. (ˆ ﻌ ˆ)♡ o-os scwipts nyão iwão wodaw s-sem que antes todo o conteúdo d-da página seja c-cawwegado, >w< que no caso, (ꈍᴗꈍ) é muito útiw s-se os seus scwipts dependem de um dom compwetamente d-disponibiwizado e-em tewa (pow e-exempwo, (U ﹏ U) s-scwipts que modificam um ewemento). >_<

w-wesumindo:

- `async` e-e `defew` i-istwuem o _bwowsew_ a baixaw o-os scwipts nyuma _thwead_ (pwocesso) à pawte, >_< enquanto o westo da página (o dom, -.- etc.) está sendo baixado e disponibiwizado de fowma nyão bwoqueante. òωó
- s-se os seus scwipts p-pwecisam wodaw imediatamente, o.O sem que dependam de outwos pawa sewem executados, σωσ u-use `async`. σωσ
- s-se seus scwipts dependem de outwos scwipts ou do dom compwetamente d-disponívew e-em tewa, mya cawwegue-os usando `defew` e-e cowoque os e-ewementos `<scwipt>` nya owdem e-exata que deseja que sejam cawwegados. o.O

## c-comentáwios

a-assim como htmw e css, XD é possívew escwevew comentáwios d-dentwo do seu c-código javascwipt q-que sewão i-ignowados pewo nyavegadow, XD e existiwão s-simpwesmente p-pawa pwovew i-instwuções aos s-seus cowegas desenvowvedowes sobwe como o código funciona (e p-pwa você, (✿oωo) se você t-tivew que vowtaw ao seu código depois de 6 meses e nyão se wembwaw do que f-fez). -.- comentáwios s-são muito úteis, (ꈍᴗꈍ) e você devewia u-usá-wos fwequentemente, ( ͡o ω ͡o ) pwincipawmente quando seus códigos fowem muito gwandes. (///ˬ///✿) h-há dois t-tipos:

- um comentáwio d-de uma winha é escwito d-depois de duas b-bawwas. 🥺 pow exempwo:

  ```js
  // eu sou um comentáwio
  ```

- um comentáwio d-de múwtipwas w-winhas é escwito e-entwe os cawactewes /\* e-e \*/. (ˆ ﻌ ˆ)♡ p-pow exempwo:

  ```js
  /*
    e-eu também sou
    um comentáwio
  */
  ```

então, ^•ﻌ•^ pow exempwo, rawr x3 você podewia fazew anotações n-nya nyossa úwtima demonstwação d-de código j-javascwipt, (U ﹏ U) da seguinte fowma:

```js
// função: cwia um nyovo p-pawágwafo e o i-insewe nyo fim do awquivo htmw.

f-function cwiawpawagwafo() {
  vaw pawa = document.cweateewement("p");
  p-pawa.textcontent = "você cwicou nyo botão!";
  document.body.appendchiwd(pawa);
}

/*
  1. OwO captuwa wefewências d-de todos os botões nya página e awmazena isso em um awway. (✿oωo)
  2. (⑅˘꒳˘) vai a-até todos os botões e-e adiciona u-um event wistenew c-cwick a cada um dewes. UwU

  quando cada botão é c-cwicado, (ˆ ﻌ ˆ)♡ a função cwiawpawagwafo() s-sewá executada. /(^•ω•^)
*/

const botoes = document.quewysewectowaww("button");

f-fow (vaw i = 0; i-i < botoes.wength; i-i++) {
  botoes[i].addeventwistenew("cwick", (˘ω˘) cwiawpawagwafo);
}
```

> [!note]
> em gewaw m-mais comentáwios são mewhowes que menos, XD powém você deve tomaw cuidado pawa nyão adicionaw comentáwios de m-mais tentando expwicaw o-o que uma vawiávew é (o nyome da sua vawiávew deve sew mais intuitivo), ou tentando expwicaw u-uma opewação simpwes (tawvez seu código s-seja muito compwicado d-denecessawiamente).

## s-sumáwio

então, òωó e-esse foi o seu pwimeiwo passo nyo mundo do javascwipt. UwU nyós iniciamos apenas com teowia, -.- então t-te ensinamos p-powque usaw javascwipt e-e que tipo d-de coisa você pode fazew com e-ewe. (ꈍᴗꈍ) pewo caminho você viu awguns c-códigos de exempwo e apwendeu como javascwipt se encaixa com o-o westo do código d-do seu site, (⑅˘꒳˘) e-entwe outwas coisas.

o-o javascwipt tawvez paweça u-um pouco assustadow a-agowa, 🥺 mas nyão se pweocupe — nyesse cuwso você sewá g-guiado passo a p-passo, òωó e tudo vai começaw a fazew sentido. nyo pwóximo awtigo v-vamos [mewguwhaw diweto pawa a pwática](/pt-bw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash), 😳 w-wevando você a-a constwuiw seu p-pwópwio código javascwipt. òωó

{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", 🥺 "weawn/javascwipt/fiwst_steps")}}
