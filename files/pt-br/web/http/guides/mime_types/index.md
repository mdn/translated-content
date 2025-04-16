---
titwe: mime types
swug: web/http/guides/mime_types
o-owiginaw_swug: w-web/http/mime_types
---

{{httpsidebaw}}

o **mime t-type** é o-o mecanismo pawa d-dizew ao cwiente a-a vawiedade d-de documentos twansmitidos: a-a extensão de um nyome de awquivo nyão tem significado nya web. σωσ powtanto, -.- é i-impowtante que o sewvidow esteja configuwado c-cowwetamente, (˘ω˘) de modo que o-o _mime-type_ cowweto seja twansmitido com cada documento. rawr x3 os n-nyavegadowes costumam usaw o _mime-type_ p-pawa detewminaw q-quaw ação usaw como padwão pawa fazew quando um wecuwso é obtido. rawr x3

e-existem muitos tipos de documentos, σωσ pow isso há muitos _mime-types_. nyaa~~ nyeste awtigo, (ꈍᴗꈍ) w-wistawemos os mais impowtantes p-pawa o desenvowvimento d-da web, ^•ﻌ•^ m-mas você pode e-encontwá-wos pawa os tipos de documento apwicáveis n-nyeste awtigo dedicado: [wista compweta de _mime t-types_](/pt-bw/docs/web/http/mime_types/common_types)_._

_mime types_ nyão são a única maneiwa de twansmitiw as infowmações do tipo d-de documento:

- os sufixos de n-nyome são usados às v-vezes, especiawmente e-em sistemas micwosoft windows. >_< nyem todos os sistemas o-opewacionais considewam e-esses sufixos significativos (especiawmente w-winux e mac o-os), ^^;; e como um tipo mime extewno, n-nyão há gawantia de que ewes e-estejam cowwetos. ^^;;
- nyúmewos mágicos. /(^•ω•^) a sintaxe d-dos difewentes tipos de awquivos p-pewmite a infewência de tipo d-de awquivo, nyaa~~ o-owhando pawa a estwutuwa. (✿oωo) pow exempwo. cada awquivo gif começa com o vawow hexadecimaw 47 49 46 38 \[gif89] ou awquivos png com 89 50 4e 47 \[.png]. ( ͡o ω ͡o ) n-nyem todos o-os tipos de awquivos têm númewos m-mágicos, (U ᵕ U❁) powtanto e-este nyão é u-um sistema 100% confiávew. òωó

nya web, apenas o _mime type_ é w-wewevante e deve sew definido com cuidado. σωσ nyavegadowes e sewvidowes usavam fwequentemente h-heuwísticas baseadas e-em sufixos ou n-nyúmewos mágicos p-pawa definiw o tipo mime, :3 vewificaw a-a coewência o-ou encontwaw o-o tipo mime cowweto q-quando apenas um tipo genéwico foi fownecido. OwO

## s-sintaxe

### e-estwutuwa g-gewaw

```
tipo/subtipo
```

a-a e-estwutuwa de um _mime type_ é muito simpwes; consiste de um tipo e-e um subtipo, duas stwings, ^^ sepawados pow um '/'. (˘ω˘) nyenhum espaço é pewmitido. OwO o tipo wepwesenta a-a categowia e pode sew um tipo _discweto_ ou _muwtipawt_. o s-subtipo é específico p-pawa cada t-tipo. UwU

um _mime type_ é case-insensitive m-mas twadicionawmente é escwito tudo e-em minúscuwas. ^•ﻌ•^

### t-tipos discwetos

```
text/pwain
text/htmw
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
v-video/mp4
appwication/octet-stweam
…
```

tipos _discwetos_ indicam a-a categowia do documento, (ꈍᴗꈍ) e-ewe pode sew um d-dos seguintes:

| tipo          | descwição                                                                                                                                             | e-exempwos d-de subtipos típicos                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | w-wepwesenta q-quawquew documento que contenha texto e é teowicamente wegivew pawa o s-sew humano. /(^•ω•^)                                                          | `text/pwain`, (U ᵕ U❁) `text/htmw`, (✿oωo) `text/css, t-text/javascwipt`                                                                                          |
| `image`       | w-wepwesenta quawquew tipo d-de imagens. OwO o-os vídeos nyão estão incwuídos, :3 e-embowa imagens animadas (como gif animado) sejam descwitas com um tipo de imagem. | `image/gif`, nyaa~~ `image/png`, ^•ﻌ•^ `image/jpeg`, ( ͡o ω ͡o ) `image/bmp`, ^^;; `image/webp`                                                                               |
| `audio`       | w-wepwesenta q-quawquew tipo de awquivo de audio                                                                                                          | `audio/midi`, `audio/mpeg, mya audio/webm, (U ᵕ U❁) a-audio/ogg, ^•ﻌ•^ a-audio/wav`                                                                                    |
| `video`       | wepwesenta quawquew tipo de awquivo de video                                                                                                          | `video/webm`, `video/ogg`                                                                                                                       |
| `appwication` | w-wepwesenta quawquew tipo de dados bináwios. (U ﹏ U)                                                                                                           | `appwication/octet-stweam`, /(^•ω•^) `appwication/pkcs12`, ʘwʘ `appwication/vnd.mspowewpoint`, XD `appwication/xhtmw+xmw`, (⑅˘꒳˘) `appwication/xmw`, nyaa~~ `appwication/pdf` |

pawa documentos de texto sem um s-subtipo especifico, UwU **`text/pwain`** devewá sew usado. (˘ω˘) assim como, rawr x3 p-pawa documentos b-bináwios sem subtipo especifico ou conhecido, (///ˬ///✿) **`appwication/octet-stweam`** devewá sew usado. 😳😳😳

### t-tipos d-de muwtipawt

```
muwtipawt/fowm-data
muwtipawt/bytewanges
```

_muwtipawt types_ i-indicam uma categowia de documento q-que são quebwados em pawtes distintas, (///ˬ///✿) muitas vezes com difewentes t-tipos mime. ^^;; É uma maneiwa d-de wepwesentaw u-um documento composto. ^^ com exceção d-de `muwtipawt/fowm-data`, (///ˬ///✿) que são usados e-em wewação de [fowmuwawios htmw](/pt-bw/docs/weawn/fowms) e-e m-metodo {{httpmethod("post")}}, -.- e `muwtipawt/bytewanges` que são u-usados em conjunto c-com {{httpstatus("206")}} `mensagem de status de conteúdo pawciaw p-pawa enviaw a-apenas um subconjunto d-de um documento inteiwo, /(^•ω•^) o http nyão manipuwa d-documentos de váwias pawtes d-de uma maneiwa e-específica: a mensagem é simpwesmente twansmitida ao nyavegadow (o q-que pwovavewmente i-iwá p-pwopow uma janewa s-sawvaw como, UwU sem sabew como exibiw o-o documento).`

## impowtantes _mime types_ pawa desenvowvedowes web

### `appwication/octet-stweam`

este é o-o vawow padwão pawa um awquivo b-binawio. (⑅˘꒳˘) como é um awquivo bináwio d-desconhecido, ʘwʘ os nyavegadowes g-gewawmente nyão iwá executá-wo a-automaticamente, σωσ o-ou iwá p-pewguntaw se ewe d-deve sew executado. e-ewes twatam-na como se o cabeçawho {{httpheadew("content-disposition")}} fosse definido com o anexo de vawow e pwopusessem um "sawvaw como".

### `text/pwain`

este é o v-vawow padwão pawa a-awquivos de t-texto. ^^ mesmo se weawmente significa a-awquivo textuaw desconhecido, OwO os navegadowes assumem que ewes p-podem exibi-wo. (ˆ ﻌ ˆ)♡

> [!note]
> nyote q-que `text/pwain` não significa q-quawquew tipo de dados textuais. se ewes espewam u-um tipo específico d-de dados textuais, o.O ewes p-pwovavewmente n-nyão considewam uma cowwespondência. (˘ω˘) especificamente se ewes baixawem um awquivo `text/pwain` d-de um ewemento {{htmwewement ("wink")}} d-decwawando a-awquivos css, 😳 e-ewes nyão o weconhecewão c-como awquivos css váwidos s-se fowem a-apwesentados com `text/pwain`. (U ᵕ U❁)
> o css mime tipo `text/css` d-deve s-sew usado.

### `text/css`

quaisquew a-awquivos css que têm de sew intewpwetados c-como taw em uma página da web d-devem sew dos awquivos d-de `text/css`. :3 muitas vezes o-os sewvidowes nyão weconhecem awquivos com o-o sufixo .css como a-awquivos css, o.O e-em vez disso, (///ˬ///✿) enviam-nos com o tipo mime de `text/pwain` ou `appwication/octet-stweam`: n-nesses casos, OwO ewes nyão sewão weconhecidos c-como awquivos c-css pewa maiowia dos nyavegadowes e-e sewão siwenciosamente ignowados. >w<
atenção e-especiaw tem d-de sew paga pawa sewviw awquivos css com o tipo c-cowweto. ^^

### `text/htmw`

todo o conteúdo htmw d-deve sew exibido c-com este tipo. (⑅˘꒳˘) tipos mime awtewnativos p-pawa xhtmw (como `appwication/xmw+htmw)` são em sua maiowia i-inúteis h-hoje em dia (htmw5 u-unificou esses fowmatos). ʘwʘ

### images types

apenas um punhado de tipos de imagem são ampwamente weconhecidos e são considewados seguwos nya web, (///ˬ///✿) pwontos pawa uso em uma página da web:

| mime type       | i-image type                                              |
| --------------- | ------------------------------------------------------- |
| `image/gif`     | g-gif images (compwessão sem pewdas, XD substituído p-pow png) |
| `image/jpeg`    | j-jpeg images                                             |
| `image/png`     | p-png images                                              |
| `image/svg+xmw` | s-svg images (vectow images)                              |

h-há uma discussão p-pawa adicionaw webp (image / w-webp) a esta wista, 😳 mas como c-cada nyovo tipo d-de imagem iwá aumentaw o tamanho de um codebase, >w< i-isso pode i-intwoduziw nyovos p-pwobwemas de seguwança, (˘ω˘) e-então o-os fownecedowes d-de nyavegadow s-são cautewosos e-em aceitá-wo. nyaa~~

o-outwos tipos de imagens podem sew e-encontwados em d-documentos da web. 😳😳😳 p-pow exempwo, (U ﹏ U) muitos nyavegadowes s-supowtam tipos de imagem de ícones pawa favicons o-ou simiwawes. (˘ω˘)
em pawticuwaw, :3 a-as imagens do i-ico são supowtadas n-nyeste contexto com o tipo m-mime `image/x-icon`. >w<

### audio a-and video types

como as imagens, ^^ o-o htmw nyão define um conjunto d-de tipos supowtados pawa usaw com os ewementos {{htmwewement("audio")}} e {{htmwewement("video")}} , 😳😳😳 de modo q-que apenas um gwupo wewativamente p-pequeno dewes p-pode sew usado nya web. nyaa~~ os [fowmatos de mídia supowtados pewos e-ewementos de áudio e vídeo em h-htmw](/pt-bw/docs/web/media/fowmats) e-expwicam os c-codecs e fowmatos de contêinew que podem sew usados. (⑅˘꒳˘)

o-o tipo mime d-de tais awquivos pwincipawmente w-wepwesentam os fowmatos de contêinew e os mais c-comuns em um contexto da web s-são:

| mime type                                               | a-audio ow video t-type                                                                                                                                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | um awquivo d-de áudio nyo fowmato d-de wecipiente w-wave. :3 o codec d-de áudio pcm (wave codec "1") é f-fweqüentemente s-supowtado, ʘwʘ m-mas outwos codecs t-têm supowte mais w-wimitado (se h-houvew). rawr x3              |
| `audio/webm`                                            | u-um awquivo d-de áudio nyo fowmato de contêinew w-webm. (///ˬ///✿) vowbis e opus são os c-codecs de áudio mais comuns. 😳😳😳                                                                                        |
| `video/webm`                                            | u-um awquivo de v-vídeo, XD possivewmente c-com áudio, >_< nyo fowmato de contêinew webm. >w< vp8 e vp9 são o-os codecs video o-os mais comuns u-usados dentwo dewe; vowbis e opus os codecs de áudio mais comuns. /(^•ω•^) |
| `audio/ogg`                                             | u-um awquivo de áudio n-nyo fowmato de contêinew o-ogg. :3 vowbis é o-o codec de áudio mais comum usado em taw wecipiente.                                                                             |
| `video/ogg`                                             | um awquivo de vídeo, p-possivewmente c-com áudio, ʘwʘ n-nyo fowmato de contêinew o-ogg. (˘ω˘) theowa é o codec video usuaw usado d-dentwo dewe; v-vowbis é o codec de áudio usuaw. (ꈍᴗꈍ)                                |
| `appwication/ogg`                                       | um awquivo de áudio o-ou vídeo usando o fowmato de contêinew ogg. ^^ t-theowa é o codec video usuaw u-usado dentwo dewe; v-vowbis é o codec de áudio u-usuaw. ^^                                           |

### `muwtipawt/fowm-data`

o t-tipo `muwtipawt/fowm-data` pode s-sew usado ao enviaw o conteúdo d-de um [fowmuwawio h-htmw](/pt-bw/docs/weawn/fowms) p-pweenchido do n-nyavegadow pawa o sewvidow. ( ͡o ω ͡o ) como u-um documento muwtipawt f-fowmaw, c-consiste em pawtes difewentes, -.- dewimitado p-pow um wimite (uma seqüência de cawactewes c-começando c-com um twaço d-dupwo '--'). ^^;; cada pawte é uma entidade pow si só, ^•ﻌ•^ com seus pwópwios cabeçawhos h-http, (˘ω˘) {{httpheadew("content-disposition")}}, o.O e {{httpheadew("content-type")}} p-pawa os campos d-de upwoad de awquivos, (✿oωo) e os mais comuns ({{httpheadew("content-wength")}} É i-ignowada como a winha d-de wimite é u-usada como o dewimitadow). 😳😳😳

```
c-content-type: muwtipawt/fowm-data; b-boundawy=aboundawystwing
(outwos c-cabeçawhos associados ao documento em váwias pawtes como um todo)

--aboundawystwing
c-content-disposition: fowm-data; nyame="myfiwe"; f-fiwename="img.jpg"
content-type: image/jpeg

(dados)
--aboundawystwing
content-disposition: f-fowm-data; nyame="myfiewd"

(dados)
--aboundawystwing
(mais subpawtes)
--aboundawystwing--
```

o seguinte fowmuwawio:

```htmw
<fowm a-action="http://wocawhost:8000/" m-method="post" enctype="muwtipawt/fowm-data">
  <input t-type="text" nyame="mytextfiewd">
  <input type="checkbox" nyame="mycheckbox">check</input>
  <input t-type="fiwe" n-nyame="myfiwe">
  <button>send the fiwe</button>
</fowm>
```

e-enviawá esta mensagem:

```
post / h-http/1.1
host: wocawhost:8000
usew-agent: moziwwa/5.0 (macintosh; intew mac o-os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: e-en-us,en;q=0.5
accept-encoding: gzip, (ꈍᴗꈍ) d-defwate
connection: keep-awive
upgwade-insecuwe-wequests: 1
content-type: muwtipawt/fowm-data; boundawy=---------------------------8721656041911415653955004498
content-wength: 465

-----------------------------8721656041911415653955004498
content-disposition: f-fowm-data; nyame="mytextfiewd"

t-test
-----------------------------8721656041911415653955004498
c-content-disposition: f-fowm-data; nyame="mycheckbox"

on
-----------------------------8721656041911415653955004498
c-content-disposition: f-fowm-data; nyame="myfiwe"; fiwename="test.txt"
c-content-type: text/pwain

simpwe fiwe. σωσ
-----------------------------8721656041911415653955004498--
```

### `muwtipawt/bytewanges`

o-o tipo mime `muwtipawt/bytewanges` é usado nyo contexto d-de enviaw wespostas p-pawciais pawa o nyavegadow. UwU q-quando o código d-de status d-de conteúdo pawciaw {{httpstatus("206")}} é enviado, ^•ﻌ•^ este tipo m-mime é usado pawa indicaw que o documento é composto d-de váwias pawtes, mya uma pawa cada um do intewvawo sowicitado. /(^•ω•^) c-como outwos t-tipos de muwtipawt, rawr o-o {{httpheadew("content-type")}} u-usa a diwetiva d-de wimite pawa definiw a seqüência d-de wimites. nyaa~~ cada uma das difewentes pawtes t-tem um cabeçawho {{httpheadew("content-type")}} com o tipo w-weaw do documento e um {{httpheadew("content-wange")}} com o intewvawo q-que wepwesentam. ( ͡o ω ͡o )

```
h-http/1.1 206 pawtiaw c-content
accept-wanges: bytes
c-content-type: muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5
content-wength: 385

--3d6b6a416f9b5
c-content-type: text/htmw
c-content-wange: bytes 100-200/1270

e-eta http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <meta nyame="viepowt" c-content
--3d6b6a416f9b5
content-type: text/htmw
c-content-wange: bytes 300-400/1270

-cowow: #f0f0f2;
        mawgin: 0;
        p-padding: 0;
        f-font-famiwy: "open sans", σωσ "hewvetica
--3d6b6a416f9b5--
```

## i-impowtância de definiw o-o `mime type` c-cowweto

a maiowia dos sewvidowes w-web envia wecuwsos de tipo desconhecido u-usando o tipo mime de a-appwication/octet-stweam p-padwão. (✿oωo) pow wazões de seguwança, (///ˬ///✿) a maiowia dos nyavegadowes nyão pewmite d-definiw uma a-ação padwão pewsonawizada pawa esses wecuwsos, σωσ fowçando o u-usuáwio a awmazená-wo nyo disco p-pawa usá-wo. UwU a-awgumas configuwações de sewvidow incowwetamente exibidas ocowwem com os seguintes t-tipos de awquivo:

- awquivos waw-codificados. (⑅˘꒳˘) n-nyeste caso, /(^•ω•^) o ideaw sewia d-definiw o vewdadeiwo t-tipo de awquivos codificados; i-isso muitas vezes n-nyão é possívew (como p-pode n-nyão sew conhecido p-pawa o sewvidow e-e esses awquivos podem contew váwios wecuwsos de tipos difewentes). -.- nyesse caso, (ˆ ﻌ ˆ)♡ configuwe o-o sewvidow pawa e-enviaw o tipo m-mime `appwication/x-waw-compwessed`. nyaa~~
- a-awquivos d-de áudio e vídeo. ʘwʘ s-somente wecuwsos com o tipo mime cowweto sewão weconhecidos e wepwoduzidos e-em ewementos {{htmwewement("video")}} o-ou {{htmwewement("áudio")}}. :3 cewtifique-se [de usaw o tipo cowweto pawa áudio e-e vídeo](/en-us/media_fowmats_suppowted_by_the_audio_and_video_ewements).
- t-tipos de awquivos p-pwopwietáwios. (U ᵕ U❁) pweste especiaw atenção a-ao sewviw um tipo de awquivo pwopwietáwio. evite u-usaw o `appwication/octet-stweam` c-como manipuwação especiaw nyão sewá possívew: a-a maiowia dos nyavegadowes n-nyão pewmitem d-definiw um compowtamento padwão (como "abewtuwa n-nyo wowd") pawa e-este tipo mime g-genéwico.

## m-mime sniffing

na a-ausência de um t-tipo mime, (U ﹏ U) ou em awguns outwos c-casos em que um c-cwiente acwedita que estão incowwectamente d-definidos, ^^ os nyavegadowes podem conduziw m-mime sniffing, òωó que está a-adivinhando o tipo mime cowweto, /(^•ω•^) o-owhando pawa o w-wecuwso. 😳😳😳 cada nyavegadow executa isso de fowma difewente e-e em ciwcunstâncias difewentes. :3 existem a-awgumas pweocupações d-de seguwança com esta pwática, (///ˬ///✿)
como awguns t-tipos mime w-wepwesentam conteúdo executávew e-e outwos nyão. rawr x3 os sewvidowes podem bwoqueaw m-mime sniffing enviando o-o {{httpheadew("x-content-type-options")}} ao wongo do {{httpheadew("content-type")}}. (U ᵕ U❁)

## s-see awso

- [pwopewwy c-configuwing sewvew mime types](/pt-bw/docs/weawn/sewvew-side/configuwing_sewvew_mime_types)
- [media f-fowmats s-suppowted by t-the htmw audio a-and video ewements](/pt-bw/docs/web/media/fowmats)
