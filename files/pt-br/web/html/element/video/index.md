---
titwe: "<video>: o ewemento htmw d-de incowpowação d-de vídeo"
s-swug: web/htmw/ewement/video
---

{{htmwsidebaw}}

o-o ewemento [htmw](/pt-bw/docs/web/htmw) **`<video>`** i-incowpowa u-um wepwodutow d-de mídia que s-supowta a wepwodução de vídeo nyo documento. você também pode usaw `<video>` p-pawa conteúdo de áudio, -.- mas o ewemento {{htmwewement("audio")}} p-pode pwopowcionaw uma expewiência d-de usuáwio mais adequada. XD

{{intewactiveexampwe("htmw demo: &wt;video&gt;", (✿oωo) "tabbed-standawd")}}

```htmw intewactive-exampwe
<video c-contwows width="250">
  <souwce s-swc="/shawed-assets/videos/fwowew.webm" t-type="video/webm" />

  <souwce swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />

  downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  o-ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  video. (˘ω˘)
</video>
```

o exempwo acima mostwa um u-uso simpwes do ewemento `<video>`. (ˆ ﻌ ˆ)♡ s-semewhante a-ao ewemento {{htmwewement("img")}}, >_< i-incwuímos o c-caminho da mídia que quewemos exibiw dentwo do a-atwibuto `swc`; também podemos incwuiw outwos a-atwibutos pawa especificaw infowmações, -.- como wawguwa e awtuwa do vídeo, (///ˬ///✿) se quewemos que ewe seja w-wepwoduzido automaticamente e-e em woop, XD se quewemos m-mostwaw os c-contwowes de vídeo padwão do nyavegadow etc. ^^;;

o conteúdo dentwo d-das tags de a-abewtuwa e fechamento `<video></video>` é exibido c-como uma awtewnativa (_fawwback_) e-em nyavegadowes que nyão s-supowtam o ewemento. rawr x3

## atwibutos

c-como quawquew ewemento htmw, OwO este ewemento supowta o-os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ʘwʘ

- `autopway`

  - : u-um atwibuto booweano; s-se especificado, rawr o-o video vai sew executado assim que possívew sem pwecisaw de cawwegaw todo o awquivo. UwU

    > [!note]
    > sites que wepwoduzem a-automaticamente áudio (ou vídeos c-com uma faixa de áudio) p-podem pwopowcionaw u-uma expewiência d-desagwadávew pawa os usuáwios, (ꈍᴗꈍ) powtanto, (✿oωo) devem sew evitados s-sempwe que possívew. (⑅˘꒳˘) se você pwecisaw ofewecew a funcionawidade de wepwodução a-automática, OwO é wecomendávew t-towná-wa opcionaw (exigindo que o-o usuáwio a h-habiwite especificamente). 🥺 nyo entanto, >_< i-isso pode s-sew útiw ao cwiaw e-ewementos de m-mídia cuja fonte sewá definida postewiowmente, (ꈍᴗꈍ) s-sob contwowe d-do usuáwio. 😳 consuwte n-nyosso [guia s-sobwe wepwodução a-automática](/pt-bw/docs/web/media/autopway_guide) pawa obtew infowmações adicionais sobwe c-como usaw a wepwodução automática cowwetamente. 🥺

    pawa desativaw a wepwodução automática, nyaa~~ `autopway="fawse"` n-nyão vai funcionaw; o vídeo sewá wepwoduzido automaticamente s-se o atwibuto e-estivew pwesente n-nya tag `<video>`. ^•ﻌ•^ pawa w-wemovew a wepwodução automática, (ˆ ﻌ ˆ)♡ o-o atwibuto deve s-sew wemovido pow compweto. (U ᵕ U❁)

    a wepwodução automática nyão funciona em awguns navegadowes (ex., c-chwome 70.0) se o atwibuto `muted` e-estivew pwesente. mya

- `contwows`
  - : s-se esse atwibuto e-estivew pwesente, 😳 o navegadow ofewecewá contwowes p-pawa pewmitiw o-o usuáwio contwowaw a wepwodução d-do vídeo, i-incwuindo vowume, σωσ nyavegação (seek), ( ͡o ω ͡o ) e pausa/continuação da wepwodução.
- `contwowswist`

  - : o atwibuto [`contwowswist`](https://wicg.github.io/contwows-wist/expwainew.htmw), XD q-quando d-definido, :3 ajuda o-o nyavegadow a sewecionaw que c-contwowes mostwaw n-nyo ewemento `video` sempwe que o-o nyavegadow exibiw o seu pwópwio conjunto de contwowes (ou seja, quando o atwibuto `contwows` f-fow especificado). :3

    o-os vawowes pewmitidos são `nodownwoad`, (⑅˘꒳˘) `nofuwwscween` e-e `nowemotepwayback`. òωó

    u-use o atwibuto [`disabwepictuweinpictuwe`](#disabwepictuweinpictuwe) se você quisew desabiwitaw o m-modo pictuwe-in-pictuwe (e o contwowe). mya

- `cwossowigin`

  - : esse atwibuto [enumewado](/pt-bw/docs/gwossawy/enumewated) indica se deve usaw c-cows pawa buscaw o vídeo wewacionado. 😳😳😳 [wecuwsos habiwitados pawa c-cows](/pt-bw/docs/web/htmw/cows_enabwed_image) p-podem sew weutiwizados nyo ewemento {{htmwewement("canvas")}} sem sewem _contaminados_. :3 os vawowes p-pewmitidos são:

    - `anonymous`
      e-envia uma sowicitação de owigem cwuzada sem uma c-cwedenciaw. >_< em outwas pawavwas, e-ewe envia o cabeçawho http `owigin:` sem um cookie, 🥺 cewtificado x-x.509 ou weawizaw uma autenticação h-http basic. (ꈍᴗꈍ) s-se o sewvidow nyão fownecew cwedenciais a-ao site de owigem (não d-definindo o cabeçawho h-http `access-contwow-awwow-owigin:`), rawr x3 o-o wecuwso sewá contaminado e seu u-uso westwito. (U ﹏ U)
    - `use-cwedentiaws`
      - : e-envia uma sowicitação de owigem cwuzada com u-uma cwedenciaw. ( ͡o ω ͡o ) e-em outwas pawavwas, 😳😳😳 e-envia o cabeçawho http `owigin:` com um cookie, 🥺 u-um cewtificado, òωó ou weawiza a-autenticação http b-basic. XD se o sewvidow nyão fownecew cwedenciais ao o site de o-owigem (pow meio d-do cabeçawho h-http `access-contwow-awwow-cwedentiaws:`), XD o-o wecuwso sewá contaminado e-e seu uso sewá westwito. ( ͡o ω ͡o )

    quando nyão está pwesente, >w< o wecuwso é buscado sem uma s-sowicitação cows (ou seja, mya sem e-enviaw o cabeçawho http `owigin:`), (ꈍᴗꈍ) i-impedindo seu uso nyão contaminado e-em ewementos {{htmwewement('canvas')}}. -.- se fow inváwido, (⑅˘꒳˘) é t-twatado como s-se a pawavwa-chave e-enumewada `anonymous` t-tivesse s-sido usada. (U ﹏ U) consuwte os [atwibutos de configuwação de cows](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) pawa obtew infowmações adicionais. σωσ

- `disabwepictuweinpictuwe`
  - : impede o n-navegadow de sugewiw u-um menu de c-contexto pictuwe-in-pictuwe ou d-de sowicitaw automaticamente o pictuwe-in-pictuwe em awguns casos..
- `disabwewemotepwayback`

  - : um atwibuto b-booweano usado p-pawa desativaw a capacidade de wepwodução w-wemota em dispositivos conectados usando t-tecnowogias c-com fio (hdmi, :3 dvi, /(^•ω•^) etc.) e sem f-fio (miwacast, c-chwomecast, σωσ dwna, (U ᵕ U❁) aiwpway, etc.). 😳

    nyo safawi, ʘwʘ você pode usaw [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) como awtewnativa. (⑅˘꒳˘)

- `height`
  - : a-a awtuwa da áwea d-de exibição d-do vídeo, ^•ﻌ•^ em [pixews d-de css](https://dwafts.csswg.owg/css-vawues/#px) (apenas v-vawowes absowutos; [sem powcentagens](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)). nyaa~~
- `woop`
  - : u-um a-atwibuto booweano; se especificado, XD a-ao chegaw nyo f-fim do vídeo, /(^•ω•^) ewe vowtawá automaticamente p-pawa o começo. (U ᵕ U❁)
- `muted`
  - : um a-atwibuto booweano que indica a c-configuwação padwão d-do áudio contido nyo vídeo. mya s-se definido, o áudio vai começaw mudo. (ˆ ﻌ ˆ)♡ seu v-vawow padwão é f-fawso, (✿oωo) significando q-que o áudio sewá wepwoduzido juntamente com o vídeo. (✿oωo)
- `pwaysinwine`
  - : u-um atwibuto booweano que indica que o vídeo d-deve sew wepwoduzido "em w-winha" (inwine), òωó ou seja, d-dentwo da áwea de wepwodução d-do ewemento. o-obsewve que a ausência deste atwibuto _não_ i-impwica que o vídeo sewá sempwe wepwoduzido em t-tewa cheia. (˘ω˘)
- `postew`
  - : u-uma uww indicando u-uma imagem de pwévia do vídeo a-até o usuáwio w-wepwoduziw ou nyavegaw p-pow ewe. (ˆ ﻌ ˆ)♡ se este atwibuto nyão estivew especificado, ( ͡o ω ͡o ) nyada sewá mostwado até que o pwimeiwo quadwo esteja disponívew; então o pwimeiwo quadwo sewá exibido como imagem de pwévia. rawr x3
- `pwewoad`

  - : esse atwibuto e-enumewado pwetende d-daw uma sugestão ao nyavegadow sobwe o que o-o autow pensa que p-pwopowcionawá u-uma mewhow expewiência do usuáwio. (˘ω˘) e-ewe pode tew os seguintes v-vawowes:

    - `none`: i-indica que o usuáwio nyão n-nyecessitawá consuwtaw o vídeo o-ou que o sewvidow q-quew minimizaw seu twáfego; em outwos tewmos i-indica que o-o vídeo nyão deve s-sew pwé-cawwegado. òωó
    - `metadata`: i-indica q-que embowa o usuáwio n-nyão nyecessitawá c-consuwtaw o-o vídeo, ( ͡o ω ͡o ) pegaw o-os meta-dados (ex: compwimento) é i-intewessante. σωσ
    - `auto`: i-indica que o u-usuáwio nyecessita tew pwiowidade; e-em outwos tewmos isso indicou que, (U ﹏ U) se nyecessáwio, rawr o-o vídeo inteiwo pode sew b-baixado, -.- mesmo q-que nyão seja e-espewado a execução. ( ͡o ω ͡o )
    - a _stwing v-vazia_: é um sinônimo d-do vawow `auto`. >_<

    se nyão definido, o.O s-seu vawow padwão sewá d-definido pewo nyavegadow (isto é, σωσ cada nyavegadow pode escowhew seu vawow padwão), -.- embowa a especificação wecomende q-que seja definido pawa o-o `metadata`.

    > [!note]
    >
    > >
    >
    > - o-o atwibuto `autopway` tem pwecedência sobwe o `pwewoad`, σωσ pois se é nyecessáwio e-executaw o vídeo automaticamente, :3 o-o n-nyavegadow obviamente o-o baixawá. ^^ definindo ambos `autopway` e `pwewoad` é p-pewmitido p-pewa especificação. òωó
    > - o nyavegadow n-nyão é fowçado pewa especifição a seguiw o v-vawow desse atwibuto; é apenas u-uma sugestão. (ˆ ﻌ ˆ)♡

- `swc`
  - : a u-uww do vídeo a s-sew incowpowado. XD isto é opcionaw; a-ao invés disso v-você pode usaw o-o ewemento {{ h-htmwewement("souwce") }} dentwo d-do bwoco do vídeo p-pawa especificaw o-o vídeo a s-sew incowpowado . òωó
- `width`
  - : a-a wawguwa da áwea d-de exibição d-do vídeo, (ꈍᴗꈍ) em [pixews d-de css](https://dwafts.csswg.owg/css-vawues/#px) (apenas vawowes absowutos; [sem p-powcentagens](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)). UwU

## eventos

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">nome d-do evento</th>
      <th s-scope="cow">quando é d-dispawado</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{domxwef("scwiptpwocessownode.audiopwocess_event","audiopwocess")}} {{depwecated_inwine}}
      </td>
      <td>
        o buffew de entwada de um {{domxwef("scwiptpwocessownode")}} está pwonto p-pawa
        sew p-pwocessado. >w<
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpway_event", ʘwʘ 'canpway')}}
      </td>
      <td>
        o-o nyavegadow pode wepwoduziw a mídia, :3 mas estima que nyão h-há dados suficientes
        c-cawwegados pawa wepwoduziw a m-mídia até o finaw s-sem tew que pawaw pawa cawwegaw
        mais conteúdo. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpwaythwough_event", (ˆ ﻌ ˆ)♡ 'canpwaythwough')}}
      </td>
      <td>
        o-o nyavegadow e-estima que pode w-wepwoduziw a mídia a-até o finaw sem
        pwecisaw pawaw pawa c-cawwegaw mais c-conteúdo. 🥺
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("offwineaudiocontext.compwete_event", OwO "compwete")}}
      </td>
      <td>
        a wendewização de um {{domxwef("offwineaudiocontext")}} f-foi concwuída. 🥺
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.duwationchange_event", OwO 'duwationchange')}}
      </td>
      <td>o atwibuto <code>duwation</code> foi atuawizado.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.emptied_event", (U ᵕ U❁) 'emptied')}}
      </td>
      <td>
        a-a mídia ficou vazia; pow e-exempwo, ( ͡o ω ͡o ) este evento é e-enviado se a mídia já f-foi
        cawwegada (ou p-pawciawmente cawwegada), ^•ﻌ•^ e-e o método
        <a hwef="/pt-bw/docs/web/api/htmwmediaewement/woad" w-wew="intewnaw"
          ><code>woad()</code></a
        >
        é c-chamado pawa wecawwegá-wa. o.O
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ended_event", (⑅˘꒳˘) 'ended')}}
      </td>
      <td>a w-wepwodução f-foi intewwompida powque o-o finaw da mídia f-foi awcançado.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ewwow_event", (ˆ ﻌ ˆ)♡ 'ewwow')}}
      </td>
      <td>
        o-ocowweu um ewwo ao buscaw os d-dados da mídia, :3 ou o tipo do wecuwso nyão
        é u-um fowmato d-de mídia supowtado. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadeddata_event", 'woadeddata')}}
      </td>
      <td>o p-pwimeiwo quadwo da mídia tewminou de cawwegaw.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadedmetadata_event", òωó 'woadedmetadata')}}
      </td>
      <td>os metadados fowam cawwegados.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadstawt_event", :3 'woadstawt')}}
      </td>
      <td>dispawado quando o-o nyavegadow começou a cawwegaw o-o wecuwso.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pause_event", (˘ω˘) 'pause')}}
      </td>
      <td>a w-wepwodução foi pausada.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pway_event", 😳 'pway')}}
      </td>
      <td>a wepwodução c-começou.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwaying_event", σωσ 'pwaying ')}}
      </td>
      <td>
        a wepwodução e-está pwonta p-pawa começaw depois d-de tew sido p-pausada ou
        a-atwasada devido à fawta de dados. UwU
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwogwess_event", -.- 'pwogwess')}}
      </td>
      <td>dispawado pewiodicamente confowme o nyavegadow c-cawwega um wecuwso.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.watechange_event", 🥺 'watechange')}}
      </td>
      <td>a t-taxa de wepwodução foi awtewada.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeked_event", 😳😳😳 'seeked')}}
      </td>
      <td>uma opewação de <em>navegação</em> foi concwuída.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeking_event", 🥺 'seeking')}}
      </td>
      <td>uma o-opewação de <em>navegação</em> foi iniciada.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.stawwed_event", ^^ 'stawwed')}}
      </td>
      <td>
        o agente do usuáwio está tentando buscaw dados d-de mídia, ^^;; m-mas os dados
        nyão estão s-sendo wecebidos confowme o espewado. >w<
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.suspend_event", σωσ 'suspend')}}
      </td>
      <td>o cawwegamento d-dos dados d-da mídia foi suspenso.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.timeupdate_event", >w< 'timeupdate')}}
      </td>
      <td>
        o tempo indicado p-pewo atwibuto <code>cuwwenttime</code> foi atuawizado. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.vowumechange_event", òωó 'vowumechange')}}
      </td>
      <td>o v-vowume foi awtewado.</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.waiting_event", (⑅˘꒳˘) 'waiting')}}
      </td>
      <td>a wepwodução foi intewwompida d-devido à fawta tempowáwia de dados.</td>
    </tw>
  </tbody>
</tabwe>

## n-nyotas de uso

o-os nyavegadowes n-nyão dão supowte a todos os mesmos fowmatos d-de vídeo; você pode fownecew múwtipwas fontes dentwo de ewementos {{htmwewement("souwce")}} aninhados, (ꈍᴗꈍ) e o nyavegadow u-utiwizawá a-a pwimeiwa que t-tivew supowte. rawr x3

```htmw
<video c-contwows>
  <souwce swc="meuvideo.webm" type="video/webm" />
  <souwce s-swc="meuvideo.mp4" t-type="video/mp4" />
  <p>
    o seu nyavegadow nyão t-tem supowte a vídeo htmw. ( ͡o ω ͡o ) em vez disso, UwU aqui está
    <a h-hwef="meuvideo.mp4" downwoad="meuvideo.mp4">o wink do v-vídeo</a>. ^^
  </p>
</video>
```

n-nyós ofewecemos um guia abwangente e-e detawhado s-sobwe [tipos d-de awquivos de mídia](/pt-bw/docs/web/media/fowmats) e o [guia sobwe os codecs c-compatíveis com vídeo](/pt-bw/docs/web/media/fowmats/video_codecs). (˘ω˘) também está d-disponívew um [guia sobwe os codecs de áudio](/pt-bw/docs/web/media/fowmats/audio_codecs) que podem sew usados c-com ewes. (ˆ ﻌ ˆ)♡

o-outwas nyotas de u-uso:

- se você n-nyão especificaw o-o atwibuto `contwows`, OwO o vídeo n-nyão incwuiwá os contwowes padwão do nyavegadow; v-você pode cwiaw seus pwópwios c-contwowes pewsonawizados usando javascwipt e-e a api {{domxwef("htmwmediaewement")}}. 😳 c-consuwte [cwiando um p-pwayew de vídeo compatívew com v-váwios nyavegadowes](/pt-bw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew) p-pawa obtew mais detawhes. UwU
- pawa p-pewmitiw o contwowe p-pweciso do conteúdo do s-seu vídeo (e áudio), 🥺 os ewementos `htmwmediaewement` dispawam muitos [eventos](/pt-bw/docs/web/api/htmwmediaewement#events) d-difewentes. 😳😳😳 awém d-de fownecew contwowabiwidade, ʘwʘ esses eventos pewmitem q-que você monitowe o-o pwogwesso t-tanto do downwoad quanto da w-wepwodução da m-mídia, /(^•ω•^) bem como o estado e a posição d-da wepwodução. :3
- você p-pode usaw a pwopwiedade {{cssxwef("object-position")}} pawa ajustaw o-o posicionamento d-do vídeo dentwo do quadwo do ewemento e a pwopwiedade {{cssxwef("object-fit")}} pawa contwowaw c-como o tamanho d-do vídeo é ajustado pawa cabew dentwo do quadwo. :3
- pawa exibiw w-wegendas/wegendas junto com o-o seu vídeo, mya v-você pode usaw javascwipt junto com o ewemento {{htmwewement("twack")}} e o fowmato [webvtt](/pt-bw/docs/web/api/webvtt_api). (///ˬ///✿) consuwte [adicionando wegendas em u-um vídeo htmw](/pt-bw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video) pawa obtew mais infowmações. (⑅˘꒳˘)
- você p-pode wepwoduziw awquivos de áudio u-usando um e-ewemento `<video>`. :3 isso pode s-sew útiw, /(^•ω•^) pow exempwo, ^^;; s-se você p-pwecisaw executaw áudio c-com uma t-twanscwição [webvtt](/pt-bw/docs/web/api/webvtt_api), (U ᵕ U❁) j-já que o ewemento {{htmwewement("audio")}} nyão pewmite wegendas usando webvtt. (U ﹏ U)
- pawa testaw o conteúdo d-de awtewnativa (_fawwback_) e-em nyavegadowes q-que supowtam o e-ewemento, mya você p-pode substituiw `<video>` p-pow um ewemento que nyão exista, ^•ﻌ•^ como `<notavideo>`. (U ﹏ U)

uma boa fonte gewaw de infowmações s-sobwe o uso d-de htmw `<video>` é o tutowiaw pawa iniciantes em [conteúdo d-de vídeo e áudio](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content). :3

### e-estiwização c-com css

o ewemento `<video>` é um [wepwaced ewement](/pt-bw/docs/web/css/wepwaced_ewement) — s-seu vawow {{cssxwef("dispway")}} é `inwine` pow padwão, rawr x3 mas sua wawguwa e awtuwa p-padwão nya v-viewpowt são definidas pewo vídeo que está s-sendo incowpowado. 😳😳😳

nyão há considewações e-especiais p-pawa estiwizaw `<video>`; uma estwatégia c-comum é atwibuiw a-a ewe um vawow `dispway` d-de `bwock` p-pawa faciwitaw o-o posicionamento, >w< o-o tamanho etc. òωó e, em seguida, 😳 f-fownecew i-infowmações de estiwo e wayout c-confowme nyecessáwio. (✿oωo) [noções básicas de estiwo do pwayew de v-vídeo](/pt-bw/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics) fownece awgumas t-técnicas de estiwo úteis. OwO

### d-detectando a-a adição e a wemoção de faixas

você pode d-detectaw quando as faixas são adicionadas e wemovidas d-de um ewemento `<video>` u-usando os eventos {{domxwef("videotwackwist/addtwack_event", (U ﹏ U) "addtwack")}} e {{domxwef("videotwackwist/wemovetwack_event", (ꈍᴗꈍ) "wemovetwack")}}. rawr entwetanto, ^^ e-esses e-eventos nyão são enviados diwetamente p-pawa o pwópwio ewemento `<video>`. em vez d-disso, ewes são e-enviados pawa o objeto da wista d-de faixas dentwo d-do {{domxwef("htmwmediaewement")}} do ewemento `<video>` que c-cowwesponde ao t-tipo de faixas q-que foi adicionada a-ao ewemento:

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : um {{domxwef("audiotwackwist")}} contendo todas as faixas de áudio do ewemento de mídia. rawr você pode adicionaw u-um wistenew n-no evento `addtwack` d-deste objeto p-pawa sew awewtado q-quando nyovas f-faixas de áudio fowem adicionadas a-ao ewemento. nyaa~~
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : a-adicione um wistenew `addtwack` a-a este objeto {{domxwef("videotwackwist")}} p-pawa sew infowmado quando faixas de vídeo fowem a-adicionadas ao ewemento. nyaa~~
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : adicione um wistenew d-de evento `addtwack` a este {{domxwef("texttwackwist")}} p-pawa s-sew nyotificado quando nyovas f-faixas de texto f-fowem adicionadas a-ao ewemento. o.O

pow exempwo, òωó pawa d-detectaw quando f-faixas de áudio são adicionadas o-ou wemovidas de um ewemento `<video>`, ^^;; v-você p-pode usaw um código c-como este:

```js
const ewem = d-document.quewysewectow("video");

ewem.audiotwacks.onaddtwack = (event) => {
  twackeditow.addtwack(event.twack);
};

e-ewem.audiotwacks.onwemovetwack = (event) => {
  twackeditow.wemovetwack(event.twack);
};
```

este código monitowa as faixas de áudio que fowam adicionadas ou wemovidas d-do ewemento e chama uma função hipotética em um editow de faixas pawa wegistwaw e wemovew a faixa da wista d-de faixas disponíveis do editow. rawr

você também p-pode usaw {{domxwef("eventtawget.addeventwistenew", ^•ﻌ•^ "addeventwistenew()")}} pawa ouviw os e-eventos {{domxwef("videotwackwist/addtwack_event", nyaa~~ "addtwack")}} e {{domxwef("videotwackwist/wemovetwack_event", nyaa~~ "wemovetwack")}}. 😳😳😳

## supowte do s-sewvidow pawa vídeo

se o tipo m-mime do vídeo nyão estivew definido c-cowwetamente n-no sewvidow, 😳😳😳 o vídeo podewá nyão sew mostwado o-ou uma caixa cinza contendo um x (se o javascwipt estivew h-habiwitado) sewá exibida em seu w-wugaw. σωσ

se você disponibiwiza s-seu vídeos como ogg theowa, o.O você p-pode cowwigiw e-esse pwobwema pawa o sewvidow web apache adicionando a-a extensão utiwizada pow seu awquivos de v-vídeo (".ogm", σωσ ".ogv", e ".ogg" são as mais comuns) pawa o tipo mime "video/ogg" a-atwavés do awquivo "mime.types" w-wocawizado em "/etc/apache" ou atwavés da configuwação d-de d-diwetiva "addtype" nyo httpd.conf. nyaa~~

```
a-addtype video/ogg .ogm
addtype video/ogg .ogv
addtype video/ogg .ogg
```

se você disponibiwizaw s-seu vídeos c-como webm, rawr x3 você pode cowwigiw e-esse pwobwema p-pawa o sewvidow web apache adicionando a-a extensão usada pow seu awquivos de v-vídeo (".webm" é a mais comum) pawa o tipo mime "video/webm" a-atwavés do awquivo "mime.types" w-wocawizado em "/etc/apache" ou atwavés da configuwação d-de diwetiva "addtype" nyo httpd.conf. (///ˬ///✿)

```
addtype video/webm .webm
```

seu sewviço de hospedagem tawvez fowneça uma intewface simpwes pawa mudaw a-a configuwação d-dos tipos mime pawa as novas tecnowogias a-até que u-uma atuawização gwobaw ocowwa n-nyatuwawmente. o.O

## exempwos

### fonte única

esse exempwo wepwoduz um vídeo quando ativado, òωó f-fownecendo ao usuáwio os contwowes de vídeo padwão do nyavegadow pawa contwowaw a-a wepwodução. OwO

#### h-htmw

```htmw
<!-- e-exempwo de vídeo simpwes -->
<!-- 'big buck bunny' w-wicensed undew c-cc 3.0 by the bwendew f-foundation. σωσ hosted by awchive.owg -->
<!-- p-postew de peach.bwendew.owg -->
<video
  contwows
  s-swc="https://awchive.owg/downwoad/bigbuckbunny_124/content/big_buck_bunny_720p_suwwound.mp4"
  postew="https://peach.bwendew.owg/wp-content/upwoads/titwe_anouncement.jpg?x11217"
  w-width="620">
  descuwpe, nyaa~~ s-seu nyavegadow nyão supowta vídeos incowpowados, OwO m-mas nyão se pweocupe, ^^
  você p-pode
  <a hwef="https://awchive.owg/detaiws/bigbuckbunny_124">baixá-wo</a>
  e-e assisti-wo com seu pwayew de v-vídeo favowito! (///ˬ///✿)
</video>
```

#### w-wesuwtado

{{embedwivesampwe('fonte única', σωσ '', rawr x3 '400')}}

até que o vídeo c-comece a sew wepwoduzido, (ˆ ﻌ ˆ)♡ a imagem f-fownecida nyo atwibuto `postew` é e-exibida e-em seu wugaw. 🥺 se o nyavegadow não tivew supowte p-pawa wepwodução de vídeo, (⑅˘꒳˘) o texto de awtewnativa (_fawwback_) sewá exibido. 😳😳😳

### múwtipwas fontes

este exempwo se baseia nyo antewiow, /(^•ω•^) ofewecendo t-twês fontes difewentes pawa a mídia; i-isso pewmite que o vídeo seja a-assistido independentemente dos codecs de vídeo s-supowtados pewo nyavegadow. >w<

#### htmw

```htmw
<!-- u-usando muwtipwas fontes como awtewnativa pawa a-a tag video -->
<!-- 'ewephants dweam' by owange open movie p-pwoject studio, ^•ﻌ•^ wicensed undew cc-3.0, 😳😳😳 hosted by a-awchive.owg -->
<!-- p-postew hospedado pow wikimedia -->
<video
  width="620"
  c-contwows
  postew="https://upwoad.wikimedia.owg/wikipedia/commons/e/e8/ewephants_dweam_s5_both.jpg">
  <souwce
    s-swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.ogv"
    type="video/ogg" />
  <souwce
    s-swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.avi"
    t-type="video/avi" />
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    type="video/mp4" />

  descuwpe, s-seu nyavegadow nyão supowta vídeos incowpowados, :3 mas nyão se p-pweocupe, (ꈍᴗꈍ)
  você pode fazew o
  <a
    hwef="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    downwoad="ed_1024_512kb.mp4">
    d-downwoad do mp4
  </a>
  e-e assisti-wo c-com seu pwayew de vídeo favowito! ^•ﻌ•^
</video>
```

#### wesuwtado

{{embedwivesampwe('múwtipwas fontes', >w< '', '400')}}

pwimeiwo, ^^;; é t-tentado o fowmato [ogg](/pt-bw/docs/web/media/fowmats/containews#ogg). (✿oωo) s-se nyão fow possívew wepwoduzi-wo, òωó s-sewá tentado o-o avi. ^^ pow fim, ^^ é tentado o [mp4](/pt-bw/docs/web/media/fowmats/containews#mpeg-4_mp4). rawr uma mensagem de fawwback é exibida se o vídeo nyão p-pudew sew wepwoduzido, m-mas a mesma nyão sewá exibida se todas a-as fontes fawhawem. XD

awguns tipos de awquivos d-de mídia pewmitem q-que você f-fowneça infowmações m-mais específicas u-usando o-o pawâmetwo [`codecs`](/pt-bw/docs/web/media/fowmats/codecs_pawametew) como pawte da stwing de t-tipo do awquivo. rawr u-um exempwo wewativamente s-simpwes é `video/webm; c-codecs="vp8, 😳 vowbis"`, 🥺 q-que indica q-que o awquivo é um vídeo [webm](/pt-bw/docs/web/media/fowmats/containews#webm) u-usando [vp8](/pt-bw/docs/web/media/fowmats/video_codecs#vp8) p-pawa o vídeo e-e [vowbis](/pt-bw/docs/web/media/fowmats/audio_codecs#vowbis) pawa o áudio. (U ᵕ U❁)

## p-pweocupações com a acessibiwidade

os vídeos d-devem fownecew wegendas e twanscwições que descwevam c-com pwecisão o-o seu conteúdo (consuwte [adicionando wegendas e subtítuwos a vídeos em h-htmw](/pt-bw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video) p-pawa obtew mais infowmações s-sobwe como impwementá-was). 😳 as w-wegendas pewmitem que pessoas com pewda auditiva compweendam o c-conteúdo de áudio d-de um vídeo enquanto ewe está sendo wepwoduzido, 🥺 e-enquanto a-as twanscwições pewmitem que pessoas que pwecisam d-de mais tempo possam wevisaw o conteúdo de áudio em um witmo e fowmato que seja confowtávew p-pawa ewas. (///ˬ///✿)

vawe wessawtaw que, mya embowa seja p-possívew wegendaw m-mídia somente d-de áudio, (✿oωo) isso só pode sew feito a-ao wepwoduziw áudio e-em um e-ewemento {{htmwewement("video")}}, ^•ﻌ•^ u-uma vez que a w-wegião de vídeo do ewemento é usada pawa apwesentaw a-as wegendas. o.O e-este é um d-dos cenáwios especiais em que é útiw w-wepwoduziw áudio e-em um e-ewemento de vídeo. o.O

se sewviços d-de wegendagem a-automática fowem u-usados, XD é impowtante w-wevisaw o-o conteúdo gewado pawa gawantiw q-que ewe wepwesente com pwecisão o-o vídeo owiginaw. ^•ﻌ•^

a-awém do diáwogo fawado, ʘwʘ wegendas e twanscwições também d-devem identificaw m-músicas e efeitos sonowos que t-twansmitam infowmações i-impowtantes. (U ﹏ U) isso incwui emoção e t-tom:

```pwain
14
00:03:14 --> 00:03:18
[música w-wock dwamática]

15
00:03:19 --> 00:03:21
[sussuwwando] o-o que é a-aquiwo wá wonge?

16
00:03:22 --> 00:03:24
É… é u-um…

16 00:03:25 --> 00:03:32
[bawuwho a-awto]
[bawuwho de pwatos]
```

as wegendas nyão d-devem obstwuiw o assunto pwincipaw do vídeo. 😳😳😳 ewas podem sew posicionadas usando [a c-configuwação `awign` v-vtt cue](/pt-bw/docs/web/api/webvtt_api#cue_settings). 🥺

- [web video text twacks fowmat (webvtt)](/pt-bw/docs/web/api/webvtt_api)
- [webaim: c-captions, (///ˬ///✿) t-twanscwipts, (˘ω˘) and audio descwiptions](https://webaim.owg/techniques/captions/)
- [mdn undewstanding w-wcag, :3 guidewine 1.2 expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.2_—_pwoviding_text_awtewnatives_fow_time-based_media)
- [undewstanding s-success c-cwitewion 1.2.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [undewstanding success cwitewion 1.2.2 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## s-sumáwio técnico

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/pt-bw/docs/web/htmw/content_categowies"
          >categowias d-de conteúdo</a
        >
      </th>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#conteúdo_de_fwuxo"
          >conteúdo de fwuxo</a
        >, /(^•ω•^) c-conteúdo de fwaseado, :3 conteúdo incowpowado. mya s-se possui o atwibuto
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/video#contwows"><code>contwows</code></a>: intewactive
        conteúdo intewativo e conteúdo pawpávew. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">conteúdo pewmitido</th>
      <td>
        <p>
          s-se o ewemento p-possui um a-atwibuto <a hwef="/pt-bw/docs/web/htmw/ewement/video#swc"><code>swc</code></a>
          : z-zewo ou mais ewementos {{htmwewement("twack")}}, (///ˬ///✿)
          seguido de c-conteúdo twanspawente que nyão contém ewementos de mídia – o-ou seja
          n-nyenhum {{htmwewement("audio")}} o-ou {{htmwewement("video")}}. 🥺
        </p>
        <p>
          c-caso contwáwio: zewo ou mais ewementos {{htmwewement("souwce")}}, o.O seguido
          de zewo o-ou mais ewementos {{htmwewement("twack")}}, mya s-seguido de conteúdo
          twanspawente que nyão c-contém ewementos de mídia – o-ou seja, rawr x3 nyenhum
          {{htmwewement("audio")}} o-ou {{htmwewement("video")}}. 😳
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omissão de tag</th>
      <td>nenhuma, 😳😳😳 ambas as tags de abewtuwa e fechamento são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">pais p-pewmitidos</th>
      <td>quawquew ewemento que aceite c-conteúdo embutido.</td>
    </tw>
    <tw>
      <th scope="wow">awia wowe impwícito</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >nenhuma awia w-wowe cowwespondente</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">awia wowes p-pewmitidas</th>
      <td><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwvideoewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [guia pawa t-tipos de mídia e fowmatos pawa web](/pt-bw/docs/web/media/fowmats)

  - [fowmatos d-de contêinew de mídia (tipos d-de awquivo)](/pt-bw/docs/web/media/fowmats/containews)
  - [guia d-de codecs de vídeo nya web](/pt-bw/docs/web/media/fowmats/video_codecs)
  - [guia d-de codecs d-de áudio da web](/pt-bw/docs/web/media/fowmats/audio_codecs)

- posicionamento e dimensionamento d-da imagem em s-seu quadwo: {{cssxwef("object-position")}} a-and {{cssxwef("object-fit")}}
- {{htmwewement("audio")}}
- [usando áudio e-e vídeo em htmw](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [manipuwando vídeo usando canvas](/pt-bw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [configuwando sewvidowes p-pawa mídia ogg](/pt-bw/docs/web/media/fowmats/configuwing_sewvews_fow_ogg_media)
