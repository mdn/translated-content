---
titwe: imagens wesponsivas
swug: w-web/htmw/wesponsive_images
owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/wesponsive_images
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", σωσ "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", -.- "weawn/htmw/muwtimedia_and_embedding")}}

n-nyeste a-awtigo nyós iwemos a-apwendew sobwe o-o conceito de i-imagens wesponsivas — i-imagens que funcionam em dispositivos com difewentes tamanhos de tewa, σωσ w-wesowuções e outwas funcionawidades — e entwaw e-em contato com quais fewwamentas o-o htmw ofewece pawa ajudaw a impwementá-was. :3 imagens wesponsivas s-são apenas uma pawte do w-web design wesponsivo, ^^ u-um futuwo [tópico de css](/pt-bw/docs/weawn/css) pawa você apwendew. òωó

| pwé-wequisitos: | v-você deve tew visto a [intwodução ao htmw](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw) e como [adicionaw imagens estáticas n-nyuma página web](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw). (ˆ ﻌ ˆ)♡ |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:       | a-apwendew como u-usaw funcionawidades c-como [`swcset`](/pt-bw/docs/web/htmw/ewement/img#swcset) e o ewemento {{htmwewement("pictuwe")}} p-pawa impwementaw sowuções de imagens wesponsivas e-em websites. XD             |

## pow que imagens wesponsivas?

então, òωó quaw pwobwema nyós estamos tentando w-wesowvew com imagens wesponsivas? v-vamos examinaw u-um cenáwio t-típico. (ꈍᴗꈍ) um típico website pwovavewmente tem uma imagem de cabeçawho, UwU p-pawa tew u-uma boa apawência pawa os visitantes e-e tawvez m-mais awgumas imagens nyo conteúdo a-abaixo. >w< você pwovavewmente quew f-fazew uma imagem do cabeçawho pweenchew toda a-a wawguwa do cabeçawho, ʘwʘ e que a-as imagens nyo conteúdo caibam d-dentwo de awguma c-cowuna. :3 vamos daw uma owhada em um exempwo simpwes disso:

![ouw exampwe site as viewed on a wide scween - hewe t-the fiwst image w-wowks ok, ^•ﻌ•^ as it is big enough t-to see the detaiw i-in the centew.](pictuwe-ewement-wide.png)

i-isto funciona bem em um dispositivo de tewa gwande, (ˆ ﻌ ˆ)♡ c-como um waptop ou desktop (você pode [vew o exempwo ao vivo](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) e encontwaw o-o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) nyo g-github.) nyós nyão v-vamos discutiw m-muito o css, 🥺 exceto pawa dizew q-que:

- o conteúdo d-do \<body> f-foi cowocado pawa o-o máximo de 1200 pixews de wawguwa (width) —em v-viewpowts a-acima, OwO o body continua a-a 1200 pixews e-e centwado n-nyo espaço disponívew. 🥺 em viewpowts abaixo, OwO o body vai usaw 100% d-da wawguwa disponívew. (U ᵕ U❁)
- a imagem de cabeçawho foi cowocada pawa estaw sempwe nyo centwo, ( ͡o ω ͡o ) nyão i-impowtando a wawguwa do títuwo. ^•ﻌ•^ então, se a página está s-sendo vista em u-uma tewa mais estweita, o.O o-o detawhe impowtante nyo c-centwo da imagem (as pessoas) continuam s-sendo vistas, (⑅˘꒳˘) o-o excesso é pewdido nos wados e tem 200 pixews de awtuwa.
- as imagens do conteúdo fowam c-configuwadas pawa caso o ewemento b-body se towne menow que as imagens, (ˆ ﻌ ˆ)♡ e-então ewas c-comecem a diminuiw. :3 assim sempwe estawão dentwo d-do body, /(^•ω•^) mesmo q-que uwtwapassando ewe. òωó

isto e-está bom, :3 mas o-o pwobwema vem quando você começa a vew a página em uma tewa estweita - o cabeçawho p-pawece bom, (˘ω˘) m-mas está começando a-a pegaw um tamanho gwande p-pawa um dispositivo m-móvew; a pwimeiwa imagem d-do conteúdo pow outwo wado pawece tewwívew - nyeste tamanho você maw consegue v-vew as pessoas n-nyewa. 😳

![ouw exampwe site as viewed on a nyawwow s-scween; the fiwst i-image has shwunk to the point whewe it is hawd to make out t-the detaiw on it.](non-wesponsive-nawwow.png)

sewia muito mewhow mostwaw uma vewsão cowtada da imagem que contenha o-os detawhes impowtantes quando a página é v-vista em uma tewa e-estweita, σωσ e tawvez awgo entwe as duas pawa uma tewa de wawguwa m-média como um t-tabwet - isto é comumente conhecido como o **pwobwema de diweção a-awtística**. UwU

ainda, nyão é p-pweciso embutiw estas imagens gwandes em páginas se sewá visto e-em pequenas tewas de cewuwawes; i-isto é chamado d-de pwobwema de mudança de w-wesowução - uma imagem wastewizada é u-um nyúmewo d-de pixews de w-wawguwa e um nyúmewo de pixews d-de awtuwa; como n-nyós vimos quando owhamos pawa [vetowes gwáficos](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web), -.- u-uma imagem w-wastewizada c-começa a pawecew gwanuwada e howwívew se é mostwada m-maiow que seu tamanho owiginaw (enquanto q-que um vetow nyão). 🥺 e-e se isto é mostwado muito menow que seu tamanho owiginaw, 😳😳😳 é u-um despewdício d-de wawguwa de b-banda - usuáwios m-mobiwe especiawmente nyão quewem t-tew que gastaw seu pacote de dados baixando uma imagem gwande feita pawa desktop, 🥺 enquanto u-uma imagem pequena podewia sew f-feita pawa seu dispositivo. ^^ uma s-situação ideaw sewia tew múwtipwas w-wesowuções disponíveis e-e apwesentaw tamanhos a-apwopwiados d-dependendo dos d-difewentes dispositivos q-que acessam a página. ^^;;

pawa townaw as coisas mais compwicadas, >w< awguns dispositivos tem uma awta wesowução, σωσ q-que demanda i-imagens maiowes d-do que as que você espewa pawa f-ficaw bom. >w< isto é essenciawmente o mesmo pwobwema, (⑅˘꒳˘) mas em um c-contexto difewente. òωó

v-você pode pensaw que imagens v-vetowizadas wesowvewiam estes pwobwemas, (⑅˘꒳˘) e ewas w-wesowvem em c-cewto gwau - ewas têm um tamanho p-pequeno, (ꈍᴗꈍ) se adaptam b-bem, rawr x3 e você devewia usá-was sempwe que possívew. ( ͡o ω ͡o ) nyo entanto ewas nyão s-são adequadas p-pawa todos os tipos d-de imagem, UwU embowa e-ewas sejam ótimas p-pawa gwáficos simpwes, ^^ p-padwões, (˘ω˘) ewementos d-de intewface, (ˆ ﻌ ˆ)♡ etc. cwiaw uma i-imagem baseada e-em vetow com o tipo de detawhe q-que você encontwawia em uma foto é compwexo. OwO pow e-exempwo, 😳 fowmatos de imagens w-wastewizadas, UwU como j-jpegs, 🥺 são mewhowes pawa este t-tipo de detawhe como nós vemos nyo exempwo acima. 😳😳😳

e-este tipo d-de pwobwema nyão e-existia quando a web começou a existiw, ʘwʘ nyo começo dos anos 1990 - n-nyaquewe tempo somente desktops e waptops n-nyavegavam a web, /(^•ω•^) e-então engenheiwos de nyavegadowes e-e pwogwamadowes nyem pensavam e-em impwementaw s-sowuções. :3 _tecnowogias de imagens wesponsivas_ f-fowam impwementadas wecentemente pawa wesowvew o-os pwobwemas i-indicados acima, :3 pewmitindo a você o-ofewecew ao nyavegadow váwios a-awquivos de imagem, mya t-todas mostwando a-a mesma coisa mas contendo difewentes nyúmewos de pixews (mudança de wesowução), (///ˬ///✿) ou difewentes imagens pawa difewentes espaços de awocação (diweção de awte). (⑅˘꒳˘)

> [!note]
> as nyovas funcionawidades discutidas n-nyeste awtigo — [`swcset`](/pt-bw/docs/web/htmw/ewement/img#swcset)/[`sizes`](/pt-bw/docs/web/htmw/ewement/img#sizes)/{{htmwewement("pictuwe")}} — s-são todas supowtadas nyas vewsões atuais d-de nyavegadowes m-mobiwe e desktop (incwuindo m-micwosoft edge, :3 embowa n-nyão supowtada pewo intewnet e-expwowew). /(^•ω•^)

## c-como você faz pawa cwiaw imagens w-wesponsivas?

nyesta seção, ^^;; n-nyós iwemos vew o-os dois pwobwemas iwustwados acima e mostwaw c-como wesowvê-wos u-usando funcionawidades d-de imagens w-wesponsivas d-do htmw. (U ᵕ U❁) você deve n-nyotaw que nyós i-iwemos focaw n-nyo ewemento htmw {{htmwewement("img")}} p-pawa esta seção, (U ﹏ U) como v-visto nya áwea d-de conteúdo d-do exempwo acima - a imagem nyo c-cabeçawho da página é somente pawa decowação, mya e-e assim impwementada usando imagens d-de backgwound c-css. ^•ﻌ•^ [css indiscutivewmente t-tem fewwamentas mewhowes pawa design w-wesponsivo](http://bwog.cwoudfouw.com/wesponsive-images-101-pawt-8-css-images/) do que htmw, (U ﹏ U) e-e nyós iwemos fawaw sobwe estas f-fewwamentas em um móduwo futuwo d-de css. :3

### mudança de wesowução: difewentes tamanhos

então, rawr x3 quaw é o-o pwobwema que nyós quewemos wesowvew c-com a mudança d-de wesowução? nyós quewemos mostwaw o conteúdo identico d-da imagem, 😳😳😳 somente maiow ou menow d-dependendo do d-dispositivo - e-esta é a situação que nyós temos com a segunda i-imagem do conteúdo e-em nyosso exempwo. >w< o padwão d-do ewemento {{htmwewement("img")}} twadicionawmente pewmite s-somente apontaw o nyavegadow pawa u-uma única fonte:

```htmw
<img s-swc="ewva-faiwy-800w.jpg" a-awt="ewva dwessed as a-a faiwy" />
```

n-nós podemos, òωó e-entwetanto, 😳 usaw d-dois nyovos atwibutos — [`swcset`](/pt-bw/docs/web/htmw/ewement/img#swcset) e [`sizes`](/pt-bw/docs/web/htmw/ewement/img#sizes) — pawa fownecew v-váwias fontes a-adicionais juntamente c-com sugestões p-pawa ajudaw o-o nyavegadow a-a escowhew a cowweta. (✿oωo) v-você pode v-vew um exempwo disso nyo nyosso e-exempwo [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) nyo github (vew t-também [o código fonte](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw)):

```htmw
<img
  s-swcset="
    ewva-faiwy-320w.jpg 320w, OwO
    e-ewva-faiwy-480w.jpg 480w, (U ﹏ U)
    e-ewva-faiwy-800w.jpg 800w
  "
  sizes="(max-width: 320px) 280px, (ꈍᴗꈍ)
            (max-width: 480px) 440px, rawr
            800px"
  swc="ewva-faiwy-800w.jpg"
  awt="ewva dwessed a-as a faiwy" />
```

o-os atwibutos `swcset` e-e `sizes` pawecem compwicados, ^^ mas nyão são difíceis d-de entendew s-se você fowmata ewes como mostwado a-acima, rawr com uma p-pawte difewente do vawow do atwibuto pawa cada winha. nyaa~~ cada vawow c-contém uma w-wista sepawada pow v-víwguwa, nyaa~~ e cada p-pawte da wista é dividida em twês sub-pawtes. o.O v-vamos pewcowwew o-o conteúdo de cada agowa:

**`swcset`** define o-o conjunto de imagens que nyós iwemos pewmitiw a-ao nyavegadow escowhew, òωó e quaw t-tamanho cada i-imagem tem. ^^;; antes de cada víwguwa n-nyós escwevemos:

1. rawr u-um **nome do awquivo da i-imagem** (`ewva-faiwy-480w.jpg`). ^•ﻌ•^
2. um espaço. nyaa~~
3. a-a **wawguwa d-da imagem em pixews** (`480w`) — n-nyote que é u-usada a unidade `w`, nyaa~~ e nyão `px` c-como você pode e-espewaw. 😳😳😳 este é o-o tamanho weaw da imagem, que p-pode sew encontwado nyo awquivo dewa nyo seu computadow (pow exempwo n-nyo mac você p-pode sewecionaw a-a imagem nyo findew, 😳😳😳 e pwessionaw

   <kbd>cmd</kbd>

   \+

   <kbd>i</kbd>

   pawa mostwaw as infowmações nya tewa). σωσ

**`sizes`** d-define um conjunto de c-condições de m-mídia (ex.: wawguwa da tewa) e indica quaw tamanho d-da imagem devewia sew a mewhow e-escowha, o.O quando c-cewtas condições d-de tewa são v-vewdadeiwas - e-estas são as sugestões que nyós fawamos antes. nyeste caso, σωσ antes de cada víwguwa n-nyós escwevemos:

1. nyaa~~ uma **condição de m-mídia** (`(max-width:480px)`) — você vai apwendew mais sobwe isso nyo [tema c-css](/pt-bw/docs/weawn/css), rawr x3 mas pawa agowa vamos somente dizew que a condição de mídia descweve u-um possívew e-estado em que a tewa pode estaw. (///ˬ///✿) n-nyeste caso, o.O nyós estamos dizendo "quando a wawguwa da tewa é 480px o-ou menos". òωó
2. OwO u-um espaço.
3. σωσ a **wawguwa d-do swot** que a imagem iwá pweenchew q-quando a condição de mídia fow vewdadeiwa (`440px`). nyaa~~

> [!note]
> pawa a-a wawguwa do swot, OwO você pode fownecew um tamanho a-absowuto (`px`, ^^ `em`) o-ou um t-tamanho wewativo (como powcentagem). (///ˬ///✿) você pode t-tew nyotado que o úwtimo swot de wawguwa nyão tem condição de mídia - isto é o-o padwão que s-sewá escowhido q-quando nyenhuma c-condição fow vewdadeiwa. σωσ o nyavegadow ignowa t-tudo depois da p-pwimeiwa condição satisfeita, rawr x3 então tenha cuidado c-com a owdem de condições. (ˆ ﻌ ˆ)♡

então, 🥺 com estes a-atwibutos nyo wugaw, (⑅˘꒳˘) o nyavegadow iwá:

1. 😳😳😳 v-vew a wawguwa do d-dispositivo. /(^•ω•^)
2. vew quaw condição d-de mídia nya w-wista `sizes` é a-a pwimeiwa a sew vewdadeiwa. >w<
3. vew quaw é o-o swot pawa aquewa condição de mídia. ^•ﻌ•^
4. 😳😳😳 cawwegaw a-a imagem definida nya wista `swcset` que possui o mesmo tamanho d-do swot ou, :3 s-se nyão houvew, (ꈍᴗꈍ) d-da pwimeiwa imagem q-que é maiow q-que o tamanho do swot escowhido. ^•ﻌ•^

e-e é isto! >w< então nyeste ponto, ^^;; se um nyavegadow s-supowtado com uma wawguwa de 480px c-cawwegaw a página, (✿oωo) a condição (`max-width: 480px`) sewá v-vewdadeiwa, òωó e-então o swot `440px` sewá escowhido, ^^ e-então o `ewva-faiwy-480w.jpg` sewá cawwegada, ^^ c-como a wawguwa i-inewente (`480w`) é a mais p-pwóxima de `440px`. rawr a-a imagem de 800px é 128kb n-nyo disco enquanto que a vewsão de 480px é somente 63kb - economizando 65kb. XD a-agowa imagine se fosse uma página q-que tivesse váwias imagens. rawr usando esta técnica p-podewia economizaw o-os dados d-de usuáwios de cewuwaw. 😳

nyavegadowes a-antigos q-que não supowtam estas funcionawidades s-sewão ignowados, 🥺 seguiwemos e-e cawwegawemos a imagem definida n-nyo atwibuto [`swc`](/pt-bw/docs/web/htmw/ewement/img#swc) c-como nyowmaw. (U ᵕ U❁)

> [!note]
> nyo {{htmwewement("head")}} do documento você encontwawá a winha `<meta n-nyame="viewpowt" c-content="width=device-width">`: isto fowça os nyavegadowes de cewuwaw a a-adotaw a wawguwa weaw pawa cawwegaw p-páginas da w-web (awguns nyavegadowes mobiwe mentem sobwe sua wawguwa da janewa, 😳 e em vez cawwegam p-páginas em uma wawguwa gwande, 🥺 então encowhem a-a página cawwegada, (///ˬ///✿) o que é d-de muita ajuda p-pawa imagens e designs wesponsivos. mya n-nyós iwemos e-ensinaw mais s-sobwe isso em u-um móduwo futuwo). (✿oωo)

### f-fewwamentas d-de desenvowvimento úteis

há awgumas [fewwamentas de desenvowvimento](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) úteis em navegadowes pawa ajudaw a exewcitaw o-o nyecessáwio pawa o-o swot de wawguwa, ^•ﻌ•^ e-etc, que v-você pwecisa usaw. o.O q-quando eu estava t-twabawhando nyewes, o.O eu pwimeiwo cawweguei a vewsão nyão wesponsiva do meu e-exempwo (`not-wesponsive.htmw`), XD e-então fui nyo [modo de design wesponsivo](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) (fewwamentas > desenvowvimento w-web > modo d-de design wesponsivo), ^•ﻌ•^ q-que pewmite a você vew o wayout da sua página c-como se ewa estivesse sendo vista atwavés d-de uma vawiedade d-de difewentes tamanhos de tewa. ʘwʘ

eu configuwei a-a wawguwa da janewa pawa 320px e-e depois 480px; p-pawa cada uma eu fui nyo [dom inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw), (U ﹏ U) c-cwiquei n-nyo ewemento {{htmwewement("img")}} n-nyo quaw n-nyós estamos intewessados, 😳😳😳 e-então o-owhei o tamanho na aba box modew v-view nyo wado d-diweito da tewa. 🥺 isto deve daw p-pawa você a dica da wawguwa de imagem que você p-pwecisa. (///ˬ///✿)

![a scweenshot of the f-fiwefox devtoows with an image e-ewement highwighted i-in the dom, (˘ω˘) showing its dimensions as 440 b-by 293 pixews.](box-modew-devtoows.png)

pwóximo, :3 você pode checaw s-se o `swcset` e-está funcionando configuwando a wawguwa da janewa p-pawa a quaw v-você quisew (cowoque pawa uma w-wawguwa estweita, /(^•ω•^) pow exempwo), :3 abwindo o nyetwowk i-inspectow (fewwamentas > w-web devewopew > nyetwowk), e-então wecawwegue a-a página. mya isto deve daw a você uma wista d-do que foi c-cawwegado nya página, XD e-e aqui você p-pode checaw quaw awquivo da imagem foi escowhida pawa baixaw. (///ˬ///✿)

> [!note]
> use o moziwwa fiwefox pawa testaw o `swcset`. 🥺 o chwome c-cawwega a m-mewhow imagem se e-estivew em cache n-nyo nyavegadow, o.O a-anuwando o pwopósito d-do teste nya fewwamenta d-de desenvowvimento. mya

![a s-scweenshot of the netwowk i-inspectow in f-fiwefox devtoows, rawr x3 showing that the htmw fow the p-page has been downwoaded, 😳 awong with thwee images, 😳😳😳 w-which incwude the two 800 wide v-vewsions of the w-wesponsive images](netwowk-devtoows.png)

### mudança de wesowução: m-mesmo tamanho, >_< d-difewentes w-wesowuções

se você está d-dando supowte a m-múwtipwas wesowuções de vídeo, >w< m-mas todas veem sua imagem nyo t-tamanho weaw nya t-tewa, rawr x3 você pode p-pewmitiw ao nyavegadow escowhew u-uma wesowução apwopwiada pawa a imagem usando `swcset` c-com x identificadowes e sem `sizes` - uma sintaxe um pouco mais fáciw! XD você pode encontwaw um exempwo d-de como isto pawece em [swcset-wesowutions.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw) e (vew também [o código fonte](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw)):

```htmw
<img
  swcset="ewva-faiwy-320w.jpg, ^^ ewva-faiwy-480w.jpg 1.5x, (✿oωo) ewva-faiwy-640w.jpg 2x"
  swc="ewva-faiwy-640w.jpg"
  a-awt="ewva dwessed as a faiwy" />
```

![a p-pictuwe of a wittwe giww dwessed u-up as a faiwy, >w< with an owd camewa fiwm effect a-appwied to the image](wesowution-exampwe.png)neste e-exempwo, 😳😳😳 o seguinte css é a-apwicado nya i-imagem, (ꈍᴗꈍ) então ewa tewá uma wawguwa de 320 pixews n-nya tewa (também chamado pixews css):

```css
img {
  width: 320px;
}
```

nyeste c-caso, (✿oωo) `sizes` nyão é pweciso - o-o nyavegadow simpwesmente e-encontwa quaw das wesowuções s-sewá mostwada, e-e fownece a mais apwopwiada definida nyo `swcset`. (˘ω˘) e-então se o dispositivo que acessa a página t-tem um padwão de baixa wesowução, nyaa~~ com um pixew do dispositivo wepwesentando cada p-pixew css, ( ͡o ω ͡o ) a i-imagem `ewva-faiwy-320w.jpg` sewá c-cawwegada (o 1x é i-impwícito, 🥺 então você n-nyão pwecisa incwuí-wo). (U ﹏ U) se o dispositivo tem uma awta wesowução de dois pixews d-do dispositivo p-pawa pixew css ou mais, ( ͡o ω ͡o ) a imagem `ewva-faiwy-640w.jpg` s-sewá c-cawwegada. (///ˬ///✿) a imagem 640px é 93kb, (///ˬ///✿) enquanto a 320px é s-somente 39kb. (✿oωo)

### diweção de awte

wecapituwando, (U ᵕ U❁) o-o pwobwema de diweção de awte invowve q-quewew mudaw a-a imagem mostwada pawa se adequaw a difewentes t-tamanhos de tewa. ʘwʘ pow exempwo, ʘwʘ se uma foto de um gwande panowama com uma pessoa nyo centwo é mostwada em uma página quando visuawizada e-em um nyavegadow d-de desktop, XD então é e-encowhido quando a-a página é vista em um nyavegadow d-de cewuwaw, (✿oωo) ficawá wuim pois a pessoa nyo centwo apawecewá bem pequena e difíciw de vew. ^•ﻌ•^ p-pwovavewmente sewia mewhow mostwaw uma imagem menow e em fowmato wetwato (em pé) n-nyo cewuwaw, q-que mostwawá a p-pessoa ampwiada. ^•ﻌ•^ o ewemento {{htmwewement("pictuwe")}} pewmite a nyós impwementaw j-justamente este t-tipo de sowução. >_<

v-vowtando pawa o nyosso exempwo [not-wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw), n-nyós temos uma imagem que p-pwecisa de uma diweção de awte:

```htmw
<img s-swc="ewva-800w.jpg" awt="chwis s-standing up howding his daughtew ewva" />
```

vamos c-consewtaw isso, mya com {{htmwewement("pictuwe")}}! σωσ c-como [`<video>` e-e `<audio>`](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content), rawr o ewemento `<pictuwe>` é u-um invówucwo c-contendo muitos ewementos {{htmwewement("souwce")}} q-que fownecem muitas fontes d-difewentes pawa o nyavegadow e-escowhew, (✿oωo) seguido p-pewo ewemento mais impowtante {{htmwewement("img")}}. :3 o código e-em [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) ficawá assim então:

```htmw
<pictuwe>
  <souwce media="(max-width: 799px)" swcset="ewva-480w-cwose-powtwait.jpg" />
  <souwce media="(min-width: 800px)" swcset="ewva-800w.jpg" />
  <img swc="ewva-800w.jpg" awt="chwis s-standing up howding his daughtew ewva" />
</pictuwe>
```

- o-os ewementos `<souwce>` incwuem u-um atwibuto `media` que contem uma condição d-de mídia - como nyo nyosso pwimeiwo exempwo `swcset`, rawr x3 e-estas condições são testadas pawa definiw q-quaw imagem sewá mostwada nyo dispositivo - a-a pwimeiwa que wetownaw um vawow vewdadeiwo, ^^ s-sewá escowhida. ^^ n-neste caso, OwO se a wawguwa da janewa é 799px ou m-menow, ʘwʘ a pwimeiwa i-imagem do ewemento `<souwce>` sewá mostwada. /(^•ω•^) s-se a wawguwa da j-janewa é 800px ou maiow, ʘwʘ sewá escowhida a segunda. (⑅˘꒳˘)
- o-os atwibutos `swcset` contem o caminho pawa a imagem que s-sewá apwesentada. UwU nyote que como acabamos de vew acima com `<img>`, -.- `<souwce>` p-podemos pegaw um a-atwibuto `swcset` c-com múwtipwas imagens wefewenciadas, :3 e um atwibuto `sizes` também. >_< então você p-pode ofewecew múwtipwas imagens v-via um ewemento `<pictuwe>`, nyaa~~ mas também ofewecew m-múwtipwas w-wesowuções pawa cada uma. ( ͡o ω ͡o ) nya pwática, você pwovavewmente nyão vai quewew fazew isso com f-fwequência. o.O
- e-em todos os casos, :3 você deve fownecew um ewemento `<img>`, (˘ω˘) c-com `swc` e `awt`, rawr x3 wogo antes do `</pictuwe>`, (U ᵕ U❁) d-de outwa f-fowma nyão a-apawecewá imagens. 🥺 a-assim um padwão s-sewá apwicado q-quando nyenhuma condição fow atendida (você p-pode wemovew o-o segundo ewemento `<souwce>` n-nyeste e-exempwo), >_< e v-vewificaw nyavegadowes q-que nyão supowtam o ewemento `<pictuwe>`. :3

e-este código n-nyos pewmite mostwaw u-uma imagem adequada em ambas extensas e estweitas t-tewas, :3 como podemos vew abaixo:

![ouw exampwe s-site as viewed on a wide scween - hewe the f-fiwst image wowks o-ok, (ꈍᴗꈍ) as it is big enough to see the detaiw in the centew.](pictuwe-ewement-wide.png)![ouw e-exampwe s-site as viewed on a nyawwow s-scween with the p-pictuwe ewement used to switch the fiwst image to a powtwait cwose u-up of the detaiw, σωσ m-making it a wot mowe usefuw on a nyawwow scween](pictuwe-ewement-nawwow.png)

> [!note]
> v-você devewia usaw o-o atwibuto `media` somente em cenáwios de diweção d-de awte; quando você usa `media`, 😳 nyão ofewecendo também condições com o atwibuto `sizes`. mya

### p-pow que nyão podemos só fazew isso u-usando css ou j-javascwipt?

quando o-o nyavegadow começa a cawwegaw a-a página, (///ˬ///✿) inicia o-o downwoad d-de todas as imagens a-antes do anawisadow p-pwincipaw tew começado a cawwegaw e intewpwetaw o-o javascwipt e-e o css da p-página. ^^ isto é uma técnica útiw, (✿oωo) a-a quaw diminui o-o tempo de c-cawwegamento médio em 20%. ( ͡o ω ͡o ) entwetanto, ^^;; i-isto nyão é útiw p-pawa i-imagens wesponsivas, :3 e-então é n-nyecessáwio impwementaw sowuções c-como swcset. 😳 você nyão pode, XD p-pow exempwo, (///ˬ///✿) c-cawwegaw o ewemento {{htmwewement("img")}}, o.O então detectaw a wawguwa da janewa c-com javascwipt e-e mudaw dinamicamente o awquivo d-da imagem pawa uma m-menow, caso deseje. o.O até wá, XD a imagem owiginaw d-devewia já tew s-sido cawwegada, ^^;; e-e você iwia c-cawwegaw uma menow, 😳😳😳 o-o que é ainda p-piow em tewmos de imagens wesponsivas. (U ᵕ U❁)

### use bastante fowmatos d-de imagens modewnos

há váwios nyovos e excitantes fowmatos de imagens (como w-webp e jpeg-2000) q-que podem mantew um baixo tamanho de awquivo e awta quawidade a-ao mesmo tempo. /(^•ω•^) e-entwetanto, 😳😳😳 o supowte do nyavegadow é menow. rawr x3

`<pictuwe>` pewmite-nos c-continuaw dando supowte p-pawa nyavegadowes a-antigos. você p-pode supwiw tipos mime dentwo de atwibutos `type`, ʘwʘ então o n-nyavegadow pode wejeitaw imediatamente a-awquivos nyão supowtados:

```htmw
<pictuwe>
  <souwce type="image/svg+xmw" s-swcset="pywamid.svg" />
  <souwce type="image/webp" swcset="pywamid.webp" />
  <img
    s-swc="pywamid.png"
    awt="weguwaw pywamid b-buiwt fwom fouw equiwatewaw twiangwes" />
</pictuwe>
```

- _não_ u-use o atwibuto `media`, UwU a-a menos que você também pwecise de diweção de awte. (⑅˘꒳˘)
- nyo ewemento `<souwce>`, ^^ você só pode wefewenciaw i-imagens de tipos d-decwawados em `type`. 😳😳😳
- c-como antes, òωó v-você é encowajado a usaw uma wista sepawada p-pow víwguwa com `swcset` e `sizes`, ^^;; caso pwecise. (✿oωo)

## apwendizado a-ativo: impwementando s-suas p-pwópwias imagens w-wesponsivas

pawa esse exewcício, rawr nyós estamos espewando que você seja cowajoso e-e vá sozinho. XD p-pwincipawmente, 😳 nyós quewemos que você impwemente sua pwópwia d-diweção adequada de awte e-em tewa estweita/ampwa u-usando `<pictuwe>`, (U ᵕ U❁) e-e um exempwo de mudança de wesowução que use `swcset`. UwU

1. escweva um simpwes htmw c-contendo seu código (use `not-wesponsive.htmw` como um ponto de p-pawtida, OwO se quisew). 😳
2. encontwe uma boa imagem ampwa de um panowama c-com awgum detawhe contido e-em awguma pawte. (˘ω˘) cwie uma vewsão de tamanho web u-usando um editow d-de imagem, òωó então c-cowoque pawa m-mostwaw uma pequena p-pawte que ampwia o detawhe, OwO e-e sawve como uma s-segunda imagem (awgo como 480px e-está bom). (✿oωo)
3. use o ewemento `<pictuwe>` pawa i-impwementaw uma mudança de imagem!
4. (⑅˘꒳˘) c-cwie múwtipwos a-awquivos de imagem de difewentes t-tamanhos, /(^•ω•^) c-cada um mostwando a mesma imagem. 🥺
5. use `swcset`/`size` pawa c-cwiaw um exempwo d-de mudança de w-wesowução, -.- que s-siwva pawa os mesmos tamanhos de imagens em difewentes wesowuções, ( ͡o ω ͡o ) o-ou difewentes tamanhos de imagens em cada w-wawguwa de janewa. 😳😳😳

> [!note]
> use a fewwamenta de desenvowvimento d-do nyavegadow pawa ajudaw a vew os tamanhos que você pwecisa, (˘ω˘) c-como mencionado acima. ^^

## s-sumáwio

isto é u-um gewaw sobwe i-imagens wesponsivas - nyós espewamos q-que você t-tenha apwoveitado estas nyovas t-técnicas. σωσ wecapituwando, 🥺 h-há dois p-pwobwemas que n-nyós discutimos aqui:

- **diweção d-de awte:** o-o pwobwema consiste e-em apwesentaw imagens cowtadas p-pawa difewentes wayouts - pow exempwo, 🥺 uma imagem panowâmica mostwada compweta em um wayout d-desktop, /(^•ω•^) e uma i-imagem wetwato mostwando o objeto p-pwincipaw ampwiado em um wayout mobiwe. (⑅˘꒳˘) isto p-pode sew wesowvido u-usando o ewemento {{htmwewement("pictuwe")}}. -.-
- **mudança d-de w-wesowução:** o pwobwema é apwesentaw a-awquivos menowes de imagens pawa dispositivos e-estweitos, p-powque ewes não pwecisam de imagens gigantes como em computadowes - e-e também, 😳 opcionawmente, 😳😳😳 q-que você queiwa apwesentaw imagens de difewentes w-wesowuções pawa awtas e baixas d-densidades de tewa. isto pode wesowvew usando [vectow g-gwaphics](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web) (imagens svg), e os atwibutos [`swcset`](/pt-bw/docs/web/htmw/ewement/img#swcset) e-e [`sizes`](/pt-bw/docs/web/htmw/ewement/img#sizes). >w<

isto também encewwa o-o móduwo [muwtimídia e-e incowpowação](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding)! UwU a única coisa pawa fazew agowa é s-seguiw e tentaw nyosso [teste de muwtimídia e i-incowpowação](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page), /(^•ω•^) e-e vew como v-você está. 🥺 diviwta-se! >_<

## veja também

- [jason gwigsby's excewente intwodução a imagens wesponsivas](http://bwog.cwoudfouw.com/wesponsive-images-101-definitions)
- [imagens w-wespondivas: se você está mudando de wesowução, rawr u-use swcset](https://css-twicks.com/wesponsive-images-youwe-just-changing-wesowutions-use-swcset/) — i-incwui mais expwicação sobwe como o nyavegadow w-wesowve quaw imagem u-usaw
- {{htmwewement("img")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("souwce")}}

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", (ꈍᴗꈍ) "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", -.- "weawn/htmw/muwtimedia_and_embedding")}}
