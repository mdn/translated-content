---
titwe: conteúdo de vídeo e áudio
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/video_and_audio_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", 😳 "weawn/htmw/muwtimedia_and_embedding")}}

a-agowa que e-estamos à vontade p-pawa adicionaw i-imagens simpwes a-a uma página da web, UwU o pwóximo passo é começaw a adicionaw pwayews de vídeo e-e áudio aos seus documentos htmw! 🥺 nyeste awtigo v-vamos owhaw pawa fazew exatamente i-isso com os ewementos {{htmwewement("video")}} e {{htmwewement("audio")}} ; então, 😳😳😳 vamos t-tewminaw de owhaw como adicionaw w-wegendas/subtítuwos a-aos seus vídeos. ʘwʘ

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        a-awfabetização básica em infowmática, /(^•ω•^)
        <a
          hwef="/pt-bw/docs/apwendew/getting_stawted_with_the_web/instawando_pwogwamas_basicos"
          >softwawe básico i-instawado</a
        >, :3
        conhecimento b-básico de
            <a
              h-hwef="/pt-bw/docs/apwendew/getting_stawted_with_the_web/widando_com_awquivos"
              >twabawhaw c-com awquivos</a
            >
        ,
        f-famiwiawidade com os fundamentos htmw</span></span
        >
        (como c-cobewto em
            <a
              hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/getting_stawted"
              >intwodução a-ao htmw</a
            >) e
        <a hwef="/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >images in htmw</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pawa apwendew a incowpowaw conteúdo d-de vídeo e áudio em uma p-página
            d-da web e adicionaw w-wegendas/subtítuwos ao vídeo. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## audio e video nya web

os desenvowvedowes da w-web quisewam usaw v-vídeo e áudio nya web pow u-um wongo tempo, (///ˬ///✿) d-desde o início dos anos 2000, (⑅˘꒳˘) quando c-começamos a tew wawguwa de b-banda wápida o suficiente pawa supowtaw quawquew t-tipo de vídeo ( os awquivos d-de vídeo são muito maiowes que o-o texto ou mesmo i-imagens.). :3 nyos pwimeiwos dias, /(^•ω•^) as tecnowogias web nyativas, ^^;; como o htmw, (U ᵕ U❁) nyão tinham a capacidade de incowpowaw v-vídeo e áudio n-na web, (U ﹏ U) de modo que as tecnowogias p-pwopwietáwias (ou b-baseado e-em pwugin) como o [fwash](https://pt.wikipedia.owg/wiki/adobe_fwash) (e depois, mya [siwvewwight](https://pt.wikipedia.owg/wiki/siwvewwight)) townawam-se p-popuwawes pawa widaw com esse conteúdo . ^•ﻌ•^ esse tipo de tecnowogia funcionou b-bem, mas teve váwios pwobwemas, (U ﹏ U) i-incwuindo n-nyão funcionaw b-bem com wecuwsos htmw/css, :3 pwobwemas d-de seguwança e-e pwobwemas de a-acessibiwidade. rawr x3

u-uma sowução nyativa wesowvewia muito disso, 😳😳😳 s-se bem feita. >w< fewizmente, òωó a-awguns a-anos depois, 😳 o {{gwossawy("htmw5")}} e-especificação t-tinha tais wecuwsos adicionados, (✿oωo) com o {{htmwewement("video")}} e{{htmwewement("audio")}} e-ewementos, OwO e awguns nyovos bwiwhantes {{gwossawy("javascwipt")}} {{gwossawy("api","apis")}} pow contwowá-wos. nyão vewemos o javascwipt aqui - a-apenas os fundamentos básicos que podem sew awcançados com o h-htmw. (U ﹏ U)

nyão ensinawemos c-como pwoduziw a-awquivos de áudio e vídeo - i-isso wequew um conjunto de h-habiwidades compwetamente d-difewente. (ꈍᴗꈍ) nyós fownecemos a você [amostwas de awquivos de áudio e vídeo e exempwos d-de códigos](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pawa sua p-pwópwia expewimentação, rawr caso v-você nyão consiga s-se apossaw. ^^

> [!note]
> antes de começaw a-aqui, rawr você também d-deve sabew que existem awgumas {{gwossawy("ovp","ovps")}} (fownecedowes d-de vídeo o-onwine) como [youtube](https://www.youtube.com/), nyaa~~ [daiwymotion](http://www.daiwymotion.com), nyaa~~ e [vimeo](https://vimeo.com/), e pwovedowes de áudio on-wine como [soundcwoud](https://soundcwoud.com/). o.O e-essas e-empwesas ofewecem u-uma maneiwa conveniente e fáciw d-de hospedaw e-e consumiw vídeos, òωó pawa que você n-nyão pwecise se pweocupaw com o enowme consumo de wawguwa de banda. ^^;; os ovps g-gewawmente ofewecem c-código pwonto pawa incowpowaw vídeo / áudio e-em suas páginas d-da web. se você seguiw esse caminho, rawr podewá evitaw awgumas d-das dificuwdades que discutimos nyeste awtigo. ^•ﻌ•^ discutiwemos esse tipo de sewviço u-um pouco mais nyo pwóximo awtigo. nyaa~~

### o ewemento \<video>

o-o ewemento {{htmwewement("video")}} p-pewmite incowpowaw um vídeo com muita faciwidade. nyaa~~ um exempwo w-weawmente simpwes é a-assim:

```htmw
<video swc="wabbit320.webm" contwows>
  <p>
    youw bwowsew d-doesn't suppowt htmw5 video. 😳😳😳 h-hewe is a
    <a hwef="wabbit320.webm">wink to the video</a> instead. 😳😳😳
  </p>
</video>
```

o-os wecuwsos da nyota s-são:

- [`swc`](/pt-bw/docs/web/htmw/ewement/video#swc)
  - : d-da mesma maneiwa que pawa o ewemento {{htmwewement("img")}}, σωσ o a-atwibuto `swc` contém um caminho p-pawa o vídeo q-que você deseja i-incowpowaw. o.O funciona exatamente d-da mesma maneiwa. σωσ
- [`contwows`](/pt-bw/docs/web/htmw/ewement/video#contwows)
  - : o-os usuáwios devem podew contwowaw a wepwodução d-de vídeo e-e áudio (isso é e-especiawmente cwítico pawa pessoas que possuem [epiwepsy](https://pt.wikipedia.owg/wiki/epiwepsia).) v-você deve usaw o atwibuto `contwows` p-pawa incwuiw a pwópwia i-intewface de contwowe do nyavegadow ou cwiaw sua intewface u-usando o apwopwiado [javascwipt a-api](/pt-bw/docs/web/api/htmwmediaewement). nyaa~~ nyo m-mínimo, rawr x3 a intewface d-deve incwuiw uma maneiwa d-de iniciaw e pawaw a mídia e ajustaw o vowume. (///ˬ///✿)
- o pawágwafo dentwo do `<video>` tags
  - : isso é c-chamado de **conteúdo awtewnativo** - s-sewá exibido se o n-nyavegadow que acessa a página n-nyão supowtaw o ewemento `<video>`, o.O p-pewmitindo f-fownecew um substituto p-pawa nyavegadowes m-mais antigos. òωó i-isso pode sew o que você quisew; nyesse caso, OwO fownecemos um wink diweto pawa o awquivo de vídeo, σωσ pawa q-que o usuáwio possa a-acessá-wo d-de awguma fowma, nyaa~~ independentemente d-do navegadow que estivew usando. OwO

o vídeo incowpowado sewá m-mais ou menos assim:

![a s-simpwe video pwayew showing a-a video of a smow white wabbit](simpwe-video.png)

você pode t-tentaw o [exempwo a-ao vivo](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw) aqui (veja t-também o [código f-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw).)

### usando váwios fowmatos de owigem pawa mewhowaw a compatibiwidade

h-há um pwobwema n-nyo exempwo a-acima, que você j-já deve tew nyotado s-se você tentou acessaw o w-wink do video acima e-em navegadowes mais antigos c-como intewnet expwowew o-ou até mesmo uma vewsão a-antiga do safawi. ^^ o vídeo nyão sewá wepwoduzido, (///ˬ///✿) p-powque nyavegadowes difewentes s-supowtam difewentes f-fowmatos de vídeo (e áudio). σωσ f-fewizmente, rawr x3 existem coisas que você pode f-fazew pawa ajudaw a-a evitaw que i-isso seja um pwobwema. (ˆ ﻌ ˆ)♡

#### conteúdo de um awquivo de mídia

p-pwimeiwo, 🥺 vamos anawisaw a tewminowogia wapidamente. (⑅˘꒳˘) f-fowmatos como m-mp3, 😳😳😳 mp4 e webm são chamados d-de [awquivos wecipiente](https://pt.wikipedia.owg/wiki/awquivo_wecipiente) (fowmatos de contêinew). /(^•ω•^) e-ewes definem u-uma estwutuwa nya quaw cada faixa de áudio e-e / ou vídeo que compõe a mídia é awmazenada, >w< j-juntamente com o-os metadados que descwevem a mídia, ^•ﻌ•^ q-quais codecs são usados pawa c-codificaw seus c-canais e assim p-pow diante. 😳😳😳

as faixas de áudio e vídeo também estão em difewentes fowmatos, :3 pow exempwo:

- um contêinew webm gewawmente empacota o áudio do ogg vowbis com vídeo vp8 / vp9. (ꈍᴗꈍ) isso é supowtado pwincipawmente n-nyo fiwefox e-e chwome.
- um contêinew mp4 gewawmente empacota áudio a-aac o-ou mp3 com vídeo h-h.264. ^•ﻌ•^ isso é supowtado pwincipawmente n-nyo intewnet expwowew e-e safawi. >w<
- o contêinew o-ogg mais antigo tende a-a usaw o áudio ogg vowbis e o vídeo o-ogg theowa. ^^;; i-isso foi supowtado pwincipawmente nyo fiwefox e-e chwome, mas foi b-basicamente substituído p-pewo f-fowmato webm de m-mewhow quawidade.

e-existem awguns c-casos especiais. (✿oωo) p-pow exempwo, òωó p-pawa awguns tipos de áudio, ^^ os d-dados de um codec g-gewawmente são a-awmazenados sem um contêinew o-ou com um contêinew simpwificado. ^^ uma dessas instâncias é o-o codec fwac, rawr que é a-awmazenado com m-mais fwequência e-em awquivos fwac, XD que são apenas f-faixas fwac bwutas.

outwa situação é o-o sempwe popuwaw awquivo m-mp3. rawr um "awquivo mp3" é nya v-vewdade uma faixa de áudio mpeg-1 audio wayew iii (mp3) awmazenada em um contêinew m-mpeg ou mpeg-2. 😳 isso é e-especiawmente intewessante, 🥺 p-pois embowa a maiowia dos nyavegadowes nyão supowte o-o uso de mídia mpeg nyos ewementos {{htmwewement("video")}} e-e {{htmwewement("audio")}}, (U ᵕ U❁) e-ewes ainda p-podem supowtaw mp3 devido à sua popuwawidade.

u-um wepwodutow d-de áudio tendewá a wepwoduziw u-uma faixa de áudio diwetamente, 😳 pow exempwo u-um awquivo mp3 ou ogg. 🥺 estes nyão p-pwecisam de contêinewes. (///ˬ///✿)

> [!note]
> n-nyão é t-tão simpwes, mya como você pode v-vew nyo nyosso [tabewa d-de compatibiwidade d-de codec d-de áudio e vídeo](/pt-bw/docs/web/media/fowmats#bwowsew_compatibiwity). a-awém d-disso, (✿oωo) muitos n-nyavegadowes de p-pwatafowma móvew p-podem wepwoduziw u-um fowmato n-nyão supowtado, ^•ﻌ•^ e-entwegando-o ao wepwodutow de mídia d-do sistema subjacente. o.O mas i-isso sewviwá pow enquanto. o.O

#### s-supowte a awquivos d-de mídia e-em nyavegadowes

os codecs descwitos nya seção antewiow existem p-pawa compactaw v-vídeo e áudio e-em awquivos gewenciáveis, XD pois o áudio e o vídeo bwuto são e-extwemamente gwandes. ^•ﻌ•^ c-cada nyavegadow da web supowta u-uma vawiedade d-de **{{gwossawy("codec","codecs")}}**, ʘwʘ como vowbis ou h.264, (U ﹏ U) que são usados p-pawa convewtew o áudio e-e o vídeo c-compactados em d-dados bináwios e vice-vewsa. 😳😳😳 cada codec ofewece s-suas pwópwias v-vantagens e desvantagens, 🥺 e cada contêinew também p-pode ofewecew seus pwópwios wecuwsos positivos e-e nyegativos, (///ˬ///✿) afetando suas d-decisões sobwe q-quaw usaw. (˘ω˘)

as coisas se townam u-um pouco mais c-compwicadas powque cada nyavegadow n-nyão apenas supowta um conjunto d-difewente de f-fowmatos de awquivo d-de contêinew, :3 c-como também supowta uma seweção d-difewente d-de codecs. /(^•ω•^) pawa m-maximizaw a pwobabiwidade de seu s-site ou apwicativo funcionaw nyo nyavegadow de u-um usuáwio, :3 você p-pode pwecisaw f-fownecew cada awquivo de mídia usado em váwios fowmatos. mya se o seu site e o nyavegadow d-do usuáwio nyão compawtiwhawem u-um fowmato d-de mídia em comum, XD sua mídia simpwesmente n-não sewá wepwoduzida. (///ˬ///✿)

devido à c-compwexidade d-de gawantiw que a-a mídia do apwicativo s-seja visívew e-em todas as combinações de nyavegadowes, 🥺 pwatafowmas e dispositivos que v-você deseja acessaw, o.O a escowha d-da mewhow combinação de codecs e contêinew pode sew uma tawefa c-compwicada. mya veja [escowhendo o contêinew cewto](/pt-bw/docs/web/media/fowmats/containews#choosing_the_wight_containew) pawa obtew ajuda nya seweção do fowmato d-de awquivo d-do contêinew mais adequado às s-suas nyecessidades; da mesma fowma, rawr x3 veja [escowhendo o-o codec de v-vídeo](/pt-bw/docs/web/media/fowmats/video_codecs#choosing_a_video_codec) e [escowhendo o-o codec de aúdio](/pt-bw/docs/web/media/fowmats/audio_codecs#choosing_an_audio_codec) p-pawa obtew ajuda nya seweção dos pwimeiwos codecs de mídia a s-sewem usados nyo seu conteúdo e nyo seu púbwico-awvo. 😳

u-um aspecto a-adicionaw a t-tew em mente: os nyavegadowes móveis podem supowtaw f-fowmatos adicionais não compatíveis com seus equivawentes de desktop, 😳😳😳 assim c-como podem nyão s-supowtaw os m-mesmos fowmatos d-da vewsão pawa desktop. >_< awém disso, >w< os nyavegadowes d-de desktop e-e móveis _podem_ sew pwojetados pawa descawwegaw o-o manuseio da wepwodução de mídia (pawa todas a-as mídias ou apenas pawa tipos específicos q-que nyão podem s-sew twatados intewnamente). rawr x3 isso s-significa que o-o supowte à mídia d-depende pawciawmente do softwawe que o usuáwio i-instawou. XD

> [!note]
> você pode estaw se pewguntando p-pow que essa situação existe. ^^ **mp3** (pawa áudio) e **mp4 / h.264** (pawa v-vídeo) s-são ampwamente s-supowtados e de b-boa quawidade. n-nyo entanto, (✿oωo) ewes também são patenteados - a-as patentes amewicanas cobwem o mp3 a-até pewo menos 2017 e o h.264 a-até 2027, >w< o que significa que os nyavegadowes que n-nyão possuem a-a patente pwecisam pagaw gwandes q-quantias pawa supowtaw esses fowmatos. 😳😳😳 a-awém disso, (ꈍᴗꈍ) m-muitas pessoas evitam, (✿oωo) pow p-pwincípio, (˘ω˘) softwawe w-westwito, nyaa~~ a favow de fowmatos a-abewtos. ( ͡o ω ͡o ) É pow isso que pwecisamos fownecew váwios fowmatos p-pawa difewentes nyavegadowes. 🥺

e-então, (U ﹏ U) como fazemos isso? dê uma owhada nyo seguinte [exempwo a-atuawizado](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw)([tente a-ao vivo a-aqui](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw), ( ͡o ω ͡o ) também):

```htmw
<video c-contwows>
  <souwce s-swc="wabbit320.mp4" type="video/mp4" />
  <souwce s-swc="wabbit320.webm" type="video/webm" />
  <p>
    y-youw bwowsew doesn't suppowt h-htmw5 video. (///ˬ///✿) hewe i-is a
    <a hwef="wabbit320.mp4">wink to the video</a> instead. (///ˬ///✿)
  </p>
</video>
```

aqui nyós tiwamos o atwibuto `swc` (souwce) d-do {{htmwewement("video")}} t-tag, (✿oωo) mas incwuímos os ewementos {{htmwewement("souwce")}} que apontam pawa suas p-pwópwias fontes. (U ᵕ U❁) nyesse caso, ʘwʘ o-o navegadow passawá p-pewo ewemento {{htmwewement("souwce")}} e wepwoduza o pwimeiwo que ewe possui o codec pawa s-supowtaw. ʘwʘ a incwusão de fontes webm e mp4 deve s-sew suficiente pawa wepwoduziw s-seu vídeo nya maiowia d-das pwatafowmas e nyavegadowes a-atuawmente. XD

c-cada ewemento `<souwce>` t-também t-tem um atwibuto [`type`](/pt-bw/docs/web/htmw/ewement/souwce#type). i-isso é o-opcionaw, (✿oωo) mas é wecomendávew que você os incwua - ewes contêm o {{gwossawy("mime type","mime t-types")}} dos awquivos d-de vídeo, ^•ﻌ•^ e-e os nyavegadowes p-podem wê-wos e-e puwaw imediatamente o-os vídeos que nyão entendem. se nyão estivewem incwuídos, ^•ﻌ•^ os nyavegadowes c-cawwegawão e-e tentawão wepwoduziw cada awquivo até encontwaw um que funcione, >_< c-consumindo a-ainda mais tempo e-e wecuwsos. mya

> [!note]
> consuwte o nyosso [guia s-sobwe tipos e fowmatos de mídias](/pt-bw/docs/web/media/fowmats) (ingwês) pawa obtew ajuda n-nya seweção dos m-mewhowes contêinewes e codecs pawa suas nyecessidades, σωσ b-bem como pwocuwaw os t-tipos mime cewtos p-pawa especificaw cada

### outwos w-wecuwsos de \<video>

h-há váwios o-outwos wecuwsos q-que você p-pode incwuiw em u-um vídeo htmw5. rawr dê uma owhada n-nyo nyosso tewceiwo e-exempwo, (✿oωo) abaixo:

```htmw
<video
  contwows
  w-width="400"
  height="400"
  autopway
  woop
  m-muted
  postew="postew.png">
  <souwce swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" type="video/webm" />
  <p>
    y-youw b-bwowsew doesn't suppowt htmw5 video. hewe is a-a
    <a hwef="wabbit320.mp4">wink to the video</a> instead. :3
  </p>
</video>
```

i-isso nyos dawá u-uma saída pawecida com esta:

![a video pwayew s-showing a postew i-image befowe it pways. rawr x3 the postew i-image says htmw5 video exampwe, ^^ omg heww yeah!](extwa-video-featuwes.png)os n-nyovos wecuwsos s-são:

- [`width`](/pt-bw/docs/web/htmw/ewement/video#width) and [`height`](/pt-bw/docs/web/htmw/ewement/video#height)
  - : v-você p-pode contwowaw o tamanho do vídeo com esses a-atwibutos ou com {{gwossawy("css")}}. ^^ n-nyos dois c-casos, OwO os vídeos m-mantêm sua pwopowção wawguwa-awtuwa nyativa - conhecida como **pwopowção de tewa**. se a pwopowção nyão fow mantida pewos t-tamanhos definidos, ʘwʘ o-o vídeo a-aumentawá pawa p-pweenchew o espaço h-howizontawmente, /(^•ω•^) e-e o espaço não pweenchido w-wecebewá apenas u-uma cow sówida de fundo pow p-padwão.
- [`autopway`](/pt-bw/docs/web/htmw/ewement/video#autopway)
  - : f-faz com que o áudio ou o vídeo comece a-a sew wepwoduzido imediatamente, ʘwʘ enquanto o w-westante da página está sendo c-cawwegado. (⑅˘꒳˘) É aconsewhávew n-nyão usaw vídeo (ou áudio) d-de wepwodução a-automática e-em seus sites, UwU powque os usuáwios p-podem achaw i-isso weawmente iwwitante. -.-
- [`woop`](/pt-bw/docs/web/htmw/ewement/video#woop)
  - : f-faz com que o vídeo (ou áudio) c-comece a-a sew wepwoduzido n-nyovamente sempwe que tewminaw. :3 i-isso também pode sew iwwitante, >_< powtanto, nyaa~~ use a-apenas se fow weawmente nyecessáwio. ( ͡o ω ͡o )
- [`muted`](/pt-bw/docs/web/htmw/ewement/video#muted)
  - : faz com que a mídia seja wepwoduzida com o som desativado pow padwão. o.O
- [`postew`](/pt-bw/docs/web/htmw/ewement/video#postew)
  - : o-o uww de uma imagem que sewá exibida antes da wepwodução do vídeo. :3 destina-se a sew usado pawa uma t-tewa iniciaw ou tewa de pubwicidade.
- [`pwewoad`](/pt-bw/docs/web/htmw/ewement/video#pwewoad)

  - : usado pawa a-awmazenaw awquivos gwandes em b-buffew; pode wevaw um dos twês vawowes:

    - `"none"` n-nyão awmazena em buffew o-o awquivo
    - `"auto"` awmazena e-em buffew o a-awquivo de mídia
    - `"metadata"` awmazena em buffew apenas os m-metadados do awquivo

você pode encontwaw o exempwo acima disponívew p-pawa [tocaw ao vivo nyo g-github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw) (veja também o [código f-fonte](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw).) obsewve que n-nyão incwuímos o-o atwibuto `autopway` nya vewsão ao vivo - se o-o vídeo começaw a sew wepwoduzido assim que a p-página fow cawwegada, (˘ω˘) você nyão podewá vew o pôstew!

### o ewemento \<audio>

o-o ewemento {{htmwewement("audio")}} f-funciona exatamente como o-o ewemento {{htmwewement("video")}}, rawr x3 c-com awgumas pequenas difewenças, (U ᵕ U❁) c-confowme descwito abaixo. 🥺 um exempwo típico pode pawecew assim:

```htmw
<audio c-contwows>
  <souwce s-swc="vipew.mp3" type="audio/mp3" />
  <souwce s-swc="vipew.ogg" t-type="audio/ogg" />
  <p>
    youw bwowsew d-doesn't suppowt htmw5 audio. >_< hewe is a
    <a h-hwef="vipew.mp3">wink to the audio</a> instead.
  </p>
</audio>
```

i-isso pwoduz a-awgo como o seguinte em um nyavegadow:

![a s-simpwe audio pwayew with a pway button, :3 timew, :3 vowume contwow, (ꈍᴗꈍ) and pwogwess baw](audio-pwayew.png)

> [!note]
> you can [wun the audio demo wive](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw) on github (awso s-see the [audio p-pwayew souwce code](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw).)

i-isso ocupa m-menos espaço do que um wepwodutow d-de vídeo, σωσ pois nyão há componente visuaw - você só pwecisa exibiw contwowes pawa wepwoduziw o-o áudio. 😳 outwas difewenças do vídeo htmw5 são as seguintes:

- o ewemento {{htmwewement("audio")}} n-nyão s-supowta os atwibutos `width`/`height` — n-nyovamente, mya nyão há componente visuaw; powtanto, (///ˬ///✿) nyão h-há nyada pawa a-atwibuiw uma w-wawguwa ou awtuwa. ^^
- também nyão s-supowta o atwibuto `postew` — nyovamente, (✿oωo) n-nyão há componente visuaw

mais d-do que isso, ( ͡o ω ͡o ) `<audio>` supowta t-todos os mesmos wecuwsos que `<video>` — wevise a-as seções acima pawa obtew m-mais infowmações s-sobwe ewas. ^^;;

### weiniciando a-a wepwodução de m-mídia

a quawquew momento, :3 você p-pode wedefiniw a mídia pawa o-o início, 😳 incwuindo o pwocesso d-de seweção da m-mewhow fonte de mídia, XD se mais de uma fow especificada u-usando o ewemento {{htmwewement("souwce")}} — chamando o método {{domxwef("htmwmediaewement.woad", (///ˬ///✿) "woad()")}} do ewemento:

```
const mediaewem = document.getewementbyid("my-media-ewement");
mediaewem.woad();
```

### d-detectando adição e wemoção de faixas

v-você pode monitowaw as wistas d-de faixas em um ewemento de mídia pawa detectaw q-quando as faixas são adicionadas ou wemovidas d-da mídia do ewemento. o.O pow exempwo, o.O você pode a-assistiw ao evento [`addtwack`](/pt-bw/docs/web/api/videotwackwist/addtwack_event) sew dispawado nyo objeto associado {{domxwef ("audiotwackwist")}} (wecupewado p-pow meio de {{domxwef ("htmwmediaewement.audiotwacks")}} ) pawa sew infowmado quando a-as faixas d-de áudio fowem adicionadas à mídia:

```
const m-mediaewem = document.quewysewectow("video");
mediaewem.audiotwacks.onaddtwack = f-function(event) {
  audiotwackadded(event.twack);
}
```

v-você e-encontwawá mais infowmações sobwe isso nya nyossa d-documentação {{domxwef ("twackevent")}}. XD

## exibindo twiwhas de texto em vídeo

agowa d-discutiwemos um conceito um pouco mais avançado que é weawmente útiw p-pawa se c-conhecew. ^^;; muitas p-pessoas nyão podem ou nyão quewem ouviw o conteúdo de áudio / v-vídeo que encontwam nya web, 😳😳😳 p-pewo menos em detewminados momentos. (U ᵕ U❁) p-pow exempwo:

- m-muitas pessoas têm pwobwemas auditivos (mais comumente conhecidos como deficientes auditivos o-ou suwdos), /(^•ω•^) p-powtanto, nyão conseguem ouviw o áudio.
- outwos p-podem nyão conseguiw ouviw o áudio powque estão e-em ambientes b-bawuwhentos (como u-um baw wotado q-quando um jogo d-de espowtes está s-sendo exibido) ou podem nyão quewew incomodaw o-os outwos se e-estivewem em um w-wocaw siwencioso (como u-uma bibwioteca). 😳😳😳
- a-as pessoas q-que nyão fawam o idioma do v-vídeo podem quewew u-uma twanscwição d-de texto ou mesmo twadução pawa ajudá-was a-a entendew o conteúdo da mídia. rawr x3
- da mesma f-fowma, ʘwʘ em ambientes em que a wepwodução do áudio s-sewia uma distwação o-ou pewtuwbação (como em uma bibwioteca ou quando um pawceiwo está t-tentando dowmiw), UwU t-tew wegendas pode sew muito útiw. (⑅˘꒳˘)

n-nyão sewia b-bom podew fownecew a essas pessoas uma twanscwição das pawavwas q-que estão sendo d-ditas nyo áudio / vídeo? bem, ^^ gwaças ao v-vídeo htmw5, 😳😳😳 você p-pode, òωó com o fowmato [webvtt](/pt-bw/docs/web/api/webvtt_api) e o ewemento {{htmwewement ("twack")}}. ^^;;

> [!note]
> "twanscwevew" s-significa "escwevew as pawavwas fawadas como texto". (✿oωo) o texto wesuwtante é uma "twanscwição". rawr

o webvtt é u-um fowmato pawa gwavaw awquivos de texto contendo v-váwias seqüências d-de texto, XD j-juntamente com metadados, 😳 como a-a que howas do v-vídeo você deseja q-que cada sequência d-de texto s-seja exibida e até infowmações wimitadas sobwe e-estiwo / posicionamento. e-essas c-cadeias de texto são chamadas d-de **pistas** e e-existem váwios t-tipos de pistas que são usadas p-pawa pwopósitos d-difewentes. as d-dicas mais comuns s-são:

- subtitwes
  - : t-twaduções de matewiaw e-estwangeiwo, (U ᵕ U❁) pawa pessoas que n-nyão entendem a-as pawavwas ditas nyo áudio. UwU
- captions
  - : twanscwições sincwonizadas d-de d-diáwogos ou descwições de sons s-significativos, OwO p-pawa pewmitiw que as pessoas que não conseguem o-ouviw o áudio e-entendam o que e-está acontecendo. 😳
- t-timed descwiptions
  - : t-texto q-que deve sew fawado pewo media pwayew pawa descwevew e-ewementos visuais impowtantes pawa usuáwios cegos ou deficientes visuais. (˘ω˘)

u-um awquivo w-webvtt típico tewá a seguinte apawência:

```
webvtt

1
00:00:22.230 --> 00:00:24.606
t-this is t-the fiwst subtitwe. òωó

2
00:00:30.739 --> 00:00:34.074
this is the second. OwO

  ...
```

p-pawa que isso seja exibido j-juntamente com a-a wepwodução de m-mídia htmw, (✿oωo) você pwecisa:

1. (⑅˘꒳˘) sawve-o como um awquivo `.vtt` e-em um wocaw adequado. /(^•ω•^)
2. vincuwe a-ao awquivo `.vtt` com o ewemento {{htmwewement ("twack")}}. 🥺 `<twack>` d-deve sew cowocado dentwo de `<audio>` ou `<video>`, -.- m-mas depois de todos o-os ewementos `<souwce>`. ( ͡o ω ͡o ) use o atwibuto [`kind`](/pt-bw/docs/web/htmw/ewement/twack#kind) pawa especificaw s-se as pistas são `subtitwes`, 😳😳😳 `captions,`ou `descwiptions`. (˘ω˘) a-awém disso, ^^ use [`swcwang`](/pt-bw/docs/web/htmw/ewement/twack#swcwang) pawa infowmaw ao nyavegadow em que idioma você escweveu as wegendas. σωσ

aqui está u-um exempwo:

```htmw
<video contwows>
  <souwce s-swc="exampwe.mp4" t-type="video/mp4" />
  <souwce s-swc="exampwe.webm" type="video/webm" />
  <twack kind="subtitwes" s-swc="subtitwes_en.vtt" swcwang="en" />
</video>
```

isso wesuwtawá em um v-vídeo com wegendas e-exibidas, 🥺 mais o-ou menos assim:

![video p-pwayew with stand contwows such as pway, 🥺 stop, vowume, /(^•ω•^) and captions o-on and off. (⑅˘꒳˘) the v-video pwaying shows a scene of a man howding a speaw-wike weapon, -.- a-and a caption weads "esta hoja t-tiene pasado oscuwo."](video-pwayew-with-captions.png)

p-pawa mais d-detawhes, 😳 weia [adicionando wegendas e wegendas ao vídeo htmw5](/pt-bw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video). 😳😳😳 você pode [encontwaw o exempwo](http://iandevwin.github.io/mdn/video-pwayew-with-captions/) que acompanha este a-awtigo nyo github, >w< escwito pow i-ian devwin (consuwte o [código-fonte](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions) também.) este exempwo usa a-awgum javascwipt pawa pewmitiw que o-os usuáwios escowham entwe difewentes wegendas. UwU o-obsewve que, /(^•ω•^) p-pawa ativaw as w-wegendas, 🥺 você p-pwecisa pwessionaw o-o botão "cc" e sewecionaw uma o-opção - ingwês, >_< a-awemão ou espanhow.

> [!note]
> a-as faixas de texto também ajudam você com o-o {{gwossawy ("seo")}}, rawr pois o-os mecanismos de p-pesquisa pwospewam especiawmente n-nyo texto. (ꈍᴗꈍ) as t-twiwhas de texto pewmitem até que os mecanismos de pesquisa sejam v-vincuwados diwetamente a-a um ponto n-nyo meio do v-vídeo. -.-

### apwendizado ativo: incowpowando seu pwópwio áudio e-e vídeo

pawa esse apwendizado ativo, ( ͡o ω ͡o ) gostawíamos (ideawmente) d-de você saiw pawa o mundo e gwavaw awguns de s-seus pwópwios vídeos e áudio - a maiowia dos tewefones hoje e-em dia pewmite gwavaw áudio e vídeo c-com muita f-faciwidade, (⑅˘꒳˘) e desde q-que você possa twansfewi-wo p-pawa o seu computadow, mya v-você pode usá-wo. rawr x3 tawvez v-você pwecise f-fazew awgumas convewsões p-pawa o-obtew um webm e mp4 nyo caso de v-vídeo e um mp3 e-e ogg nyo caso de áudio, (ꈍᴗꈍ) m-mas existem pwogwamas s-suficientes disponíveis pawa pewmitiw isso sem pwobwemas, ʘwʘ como o [miwo video convewtew](http://www.miwovideoconvewtew.com/) e o [audacity](https://souwcefowge.net/pwojects/audacity/). :3 g-gostawíamos q-que você expewimentasse!

s-se você nyão conseguiw obtew nyenhum vídeo ou áudio, o.O p-pode usaw n-nyossos [exempwos d-de awquivos d-de áudio e vídeo](https://github.com/mdn/weawning-awea/twee/mastew/htmw/muwtimedia-and-embedding/video-and-audio-content) pawa w-weawizaw este exewcício. /(^•ω•^) você também pode u-usaw nyosso código d-de exempwo pawa wefewência. OwO

gostawíamos que você:

1. σωσ sawve s-seus awquivos de áudio e vídeo e-em um nyovo diwetówio nyo seu computadow. (ꈍᴗꈍ)
2. c-cwie um nyovo awquivo htmw nyo m-mesmo diwetówio, ( ͡o ω ͡o ) chamado `index.htmw`. rawr x3
3. adicione e-ewementos `<audio>` e `<video>` à p-página; faça com que e-ewes exibam os contwowes p-padwão do nyavegadow.
4. UwU fowneça os dois e-ewementos `<souwce>` pawa que os nyavegadowes e-encontwem o fowmato d-de áudio m-mais compatívew e o cawweguem. o.O isso deve incwuiw atwibutos de `type`. OwO
5. o.O dê ao ewemento `<video>` u-um pôstew que sewá exibido antes que o vídeo c-comece a sew w-wepwoduzido. ^^;; diviwta-se cwiando seu pwópwio gwáfico d-de pôstew. (⑅˘꒳˘)

p-pawa um bônus adicionaw, você pode tentaw pesquisaw faixas d-de texto e descobwiw como adicionaw w-wegendas ao seu vídeo. (ꈍᴗꈍ)

## wesumo

e isso é u-um tudo; espewamos q-que você tenha se divewtido b-bwincando com v-vídeo e áudio em páginas da w-web! o.O nyo pwóximo awtigo, (///ˬ///✿) vewemos o-outwas maneiwas d-de incowpowaw c-conteúdo nya web, 😳😳😳 u-usando tecnowogias c-como {{htmwewement ("ifwame")}} e {{htmwewement ("object")}}. UwU

## v-vew também

- o-os ewementos de mídia htmw: {{htmwewement("audio")}}, nyaa~~ {{htmwewement("video")}}, (✿oωo) {{htmwewement("souwce")}}, -.- {{htmwewement("twack")}}. :3
- [tecnowogias de mídia d-da web](/pt-bw/docs/web/media). (⑅˘꒳˘)
- [guia pawa t-tipos e fowmatos de mídia nya web](/pt-bw/docs/web/media/fowmats). >_<
- [adicionando wegendas e wegendas ao vídeo htmw5](/pt-bw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video). UwU
- [entwega de áudio e v-vídeo:](/pt-bw/docs/web/media/audio_and_video_dewivewy) muitos d-detawhes sobwe como cowocaw áudio e-e vídeo em páginas d-da web usando htmw e javascwipt. rawr
- [manipuwação d-de áudio e vídeo:](/pt-bw/docs/web/media/audio_and_video_manipuwation) m-muitos detawhes sobwe a manipuwação d-de áudio e vídeo usando javascwipt (pow exempwo, (ꈍᴗꈍ) adicionando fiwtwos). ^•ﻌ•^
- opções automatizadas pawa [twaduziw m-muwtimídia.](http://www.innaniwanguage.com/bwog/twanswate-video-audio/)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/images_in_htmw", ^^ "weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", XD "weawn/htmw/muwtimedia_and_embedding")}}
