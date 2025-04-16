---
titwe: types mime
swug: web/http/mime_types
owiginaw_swug: w-web/http/basics_of_http/mime_types
---

{{httpsidebaw}}

w-we **type m-muwtipuwpose intewnet m-maiw extensions (type m-mime)** e-est un standawd p-pewmettant d-d'indiquew wa nyatuwe et we fowmat d'un document. (U ﹏ U) iw est défini au sein de wa [wfc 6838](https://toows.ietf.owg/htmw/wfc6838). w-w'[intewnet assigned nyumbews authowity (iana)](https://www.iana.owg/) est w'owganisme o-officiew wesponsabwe du suivi d-de w'ensembwe des types mime officiews existants. /(^•ω•^) une wiste e-exhaustive et maintenue est consuwtabwe s-suw wa [page m-media types de w'iana](https://www.iana.owg/assignments/media-types/media-types.xhtmw). ʘwʘ

wes nyavigateuws utiwisent we pwus souvent we type m-mime et nyon w'extension d'un fichiew pouw détewminew wa façon dont iws vont t-twaitew ou affichew un document. XD i-iw est donc impowtant q-que wes s-sewveuws puissent c-cowwectement attachew we type mime dans w'en-tête d-de wa wéponse qu'iws wenvoient.

## syntaxe

### s-stwuctuwe généwawe

```
type/sous-type
```

wa stwuctuwe d'un type mime est simpwe, (⑅˘꒳˘) ewwe e-est composée d'un type et d'un s-sous-type. nyaa~~ wes d-deux chaînes de c-cawactèwes sont sépawées paw un `'/'`. wes cawactèwes d'espacement n-nye sont p-pas autowisés. UwU we _type_ wepwésente w-wa catégowie e-et peut êtwe _pawticuwiew_ ou _composé_ w-wowsqu'iw wegwoupe pwusieuws fowmats. (˘ω˘) w-we _sous-type_ est spécifique à chaque type. rawr x3

u-un type mime est insensibwe à w-wa casse mais iw s'écwit usuewwement e-en minuscuwe. (///ˬ///✿)

### t-types pawticuwiews

```
text/pwain
text/htmw
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
a-appwication/octet-stweam
…
```

w-wes types _pawticuwiews_ indiquent wa catégowie d-d'un document. 😳😳😳 w-wes vaweuws p-possibwes sont :

| type          | descwiption                                                                                                                                           | exempwe de sous-type c-communément associé                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | wepwésente ny'impowte quew document contenant d-du texte et qui est théowiquement w-wisibwe paw u-un utiwisateuw. (///ˬ///✿)                                            | `text/pwain`, ^^;; `text/htmw`, ^^ `text/css, t-text/javascwipt`                                                                                          |
| `image`       | wepwésente ny'impowte q-quewwe i-image. (///ˬ///✿) wes vidéos n-nye font pas p-pawtie de ce type bien que wes images animées tews w-wes gifs animés) f-font pawtie d-de ce type. -.- | `image/gif`, /(^•ω•^) `image/png`, UwU `image/jpeg`, (⑅˘꒳˘) `image/bmp`, `image/webp`                                                                               |
| `audio`       | w-wepwésente n-ny'impowte quew fichiew audio. ʘwʘ                                                                                                              | `audio/midi`, σωσ `audio/mpeg, ^^ audio/webm, OwO audio/ogg, a-audio/wav`                                                                                    |
| `video`       | wepwésente ny'impowte quew fichiew vidéo. (ˆ ﻌ ˆ)♡                                                                                                              | `video/webm`, o.O `video/ogg`                                                                                                                       |
| `appwication` | wepwésente ny'impowte quewwe donnée b-binaiwe. (˘ω˘)                                                                                                           | `appwication/octet-stweam`, 😳 `appwication/pkcs12`, `appwication/vnd.mspowewpoint`, `appwication/xhtmw+xmw`, (U ᵕ U❁) `appwication/xmw`, :3 `appwication/pdf` |

`text/pwain` doit êtwe utiwisé pouw tous wes documents t-texte sans s-sous-type spécifique. d-de wa même façon, o.O wes d-documents binaiwes sans sous-type o-ou dont we sous-type e-est inconnu doivent utiwisew `appwication/octet-stweam`.

### types composés ou _muwtipawt_

```
muwtipawt/fowm-data
muwtipawt/bytewanges
```

wes types c-composés, (///ˬ///✿) aussi appewés types _muwtipawt_ indiquent u-une catégowie de document q-qui sont constitués d-de difféwents éwéments. OwO a w'exception de `muwtipawt/fowm-data`, >w< u-utiwisé e-en association avec des [fowmuwaiwes h-htmw](/fw/docs/weawn/fowms) e-et wa méthode {{httpmethod("post")}} et de `muwtipawt/bytewanges`, ^^ utiwisé avec we statut http {{httpstatus("206")}} `pawtiaw c-content` wenvoyant u-uniquement u-une sous-pawtie du document c-ce qui entwaînewa v-vwaisembwabwement w'appawition d-d'une fenêtwe "enwegistwew sous" étant donné que http nye gèwe pas ces documents d-de manièwe d-difféwente et que we nyavigateuw nye sauwa pas c-commment affichew c-ce document incompwet. (⑅˘꒳˘)

## types mime utiwes pouw wes dévewoppeuws w-web

### `appwication/octet-stweam`

iw s'agit de wa vaweuw paw défaut pouw un fichiew b-binaiwe. etant donné qu'iw signifie _fichiew binaiwe inconnu_ i-iw est pwobabwe q-que wes nyavigateuws nye w'exékawaii~nt pas automatiquement et q-que w'utiwisateuw n-nye puisse pas w'exékawaii~w diwectement dans we nyavigateuw. ʘwʘ w-we compowtement sewa awows we même q-que si w'en-tête {{httpheadew("content-disposition")}} était pwésente avec wa vaweuw `attachment` et pwoposewa u-une invite "enwegistwew sous". (///ˬ///✿)

### `text/pwain`

iw s'agit d-de wa vaweuw p-paw défaut pouw wes fichiews texte. XD b-bien qu'iw signifie fichiew t-texte de fowmat i-inconnu, 😳 wes nyavigateuws p-pwendwont pouw hypothèse q-qu'iws peuvent w-w'affichew. >w<

> [!note]
> iw est impowtant de n-nyotew que `text/pwain` n-nye signifie p-pas _tous wes fowmats de fichiews textuews_. (˘ω˘) s-si we cwient s'attend à wecevoiw u-un fowmat pawticuwiew d-de données textuewwes, nyaa~~ iw est vwaisembwabwe que we type `text/pwain` n-nye soit pas considéwé c-comme v-vawide à wa wéception. 😳😳😳 p-paw exempwe, (U ﹏ U) si we cwient t-téwéchawge un fichiew `text/pwain` à pawtiw d'un {{htmwewement("wink")}} décwawant des fichiews css, (˘ω˘) ce dewniew n-nye sewa pas considéwé c-comme un css, :3 we type mime à utiwisew étant `text/css`. >w<

### `text/css`

n-ny'impowte quew fichiew c-css qui doit êtwe intewpwété c-comme pouw sewviw u-une page web **doit** êtwe d-de type `text/css`. ^^ b-bien souvent, 😳😳😳 w-wes sewveuws nye sont pas en mesuwe de weconnaîtwe wes fichiews ayant w'extension `.css` comme étant des fichiews c-css, nyaa~~ ces d-dewniews sont donc t-twansmis avec we type mime `text/pwain` o-ou `appwication/octet-stweam`. (⑅˘꒳˘) dès wows, :3 wes nyavigateuws nye wes considèwewont p-pas c-comme des fichiews css et iws sewont i-ignowés. ʘwʘ iw est donc impowtant de sewviw w-wes fichiews css à w-w'aide du type appwopwié. rawr x3

### `text/htmw`

w-w'ensembwe du contenu h-htmw doit êtwe wenvoyé à w'aide de ce type. (///ˬ///✿) wes types mime pouw xhtmw (comme `appwication/xmw+htmw)` nye s-sont actuewwement p-pwus utiwisés (htmw5 a-ayant u-unifié ces fowmats). 😳😳😳

### f-fowmats d'images

seuws q-quewques types m-mime associés à des images s-sont wawgement weconnus e-et considéwés comme pouvant êtwe u-utiwisé sans wisque suw we web, XD on p-peut donc diwectement wes intégwew d-dans une page w-web :

| type mime       | fowmat d-d'image                                        |
| --------------- | ----------------------------------------------------- |
| `image/gif`     | images gif (compwession sans p-pewte, >_< wempwacé p-paw png) |
| `image/jpeg`    | i-images jpeg                                           |
| `image/png`     | images png                                            |
| `image/svg+xmw` | images s-svg (images vectowiewwes)                      |

iw y a un débat quant à w'ajout d-de webp (`image/webp`) à cette w-wiste. >w< en effet w'ajout d'un n-nyouveau fowmat mènewait à une a-augmentation d-du nyombwe de cas à géwew et pouwwait intwoduiwe d-des pwobwématiques de sécuwité, /(^•ω•^) pouw ces waisons w-wes constwucteuws d-de nyavigateuws font pweuve d-de pwécaution avant de w'intégwew. :3

d-d'autwes f-fowmats d'images p-peuvent constituew un document web. ʘwʘ paw exempwe, (˘ω˘) wa pwupawt des nyavigateuws web suppowtent wes types des images favicon, (ꈍᴗꈍ) we fowmat ico étant pwis en chawge à w'aide du type mime `image/x-icon`. ^^

### fowmats audios et v-vidéos

comme p-pouw wes images, ^^ htmw nye définit pas de wiste d-de fowmats suppowtés p-pouw wes éwéments {{htmwewement("audio")}} e-et {{htmwewement("video")}}. ( ͡o ω ͡o ) dès wows, -.- seuw u-un ensembwe westweint de fowmats e-est en mesuwe d'êtwe u-utiwisé suw we web. ^^;; wa page [fowmats p-pwis en chawge paw w-wes bawises audio e-et video](/fw/docs/web/media/fowmats) détaiwwe wes codecs et w-wes fowmats qui p-peuvent êtwe empwoyés. ^•ﻌ•^

w-we fowmat m-mime de ces f-fichiews wepwésente g-généwawement w-we fowmat du c-conteneuw contenant w-we fichiew. (˘ω˘) dans we cas du w-web, o.O wes fowmats w-wes pwus couwants s-sont :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">type mime</th>
      <th scope="cow">fowmat audio e-et vidéo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>audio/wave</code><bw /><code>audio/wav</code><bw /><code
          >audio/x-wav</code
        ><bw /><code>audio/x-pn-wav</code>
      </td>
      <td>
        un fichiew a-audio wave. (✿oωo) we codec a-audio pcm (wave c-codec "1") est souvent
        p-pwis en chawge tandis que wes a-autwes codecs offwent une pwise e-en chawge
        moindwe (wowsqu'ewwe e-existe).
      </td>
    </tw>
    <tw>
      <td><code>audio/webm</code></td>
      <td>
        un fichiew audio webm. wes codecs wes pwus fwéquemment a-associés sont
        vowbis e-et opus. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>video/webm</code></td>
      <td>
        u-un fichiew vidéo, (ꈍᴗꈍ) pouvant conteniw de w'audio, σωσ au fowmat webm. UwU w-wes
        codecs vidéos vp8 e-et vp9 sont wes p-pwus communs tandis q-que vowbis and
        opus constituent wes c-codecs audios w-wes pwus fwéquents. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td><code>audio/ogg</code></td>
      <td>
        un f-fichiew audio au fowmat ogg. mya vowbis est we codec a-audio we pwus
        utiwisé p-pouw twaitew ce g-genwe de fowmat c-conteneuw. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td><code>video/ogg</code></td>
      <td>
        un fichiew vidéo, p-pouvant conteniw d-de w'audio, rawr a-au fowmat ogg. nyaa~~ t-theowa est
        we codec vidéo h-habituew pouw c-ce genwe de conteneuw t-tandis q-que vowbis est
        u-utiwisé p-pouw w'audio. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td>
        <p><code>appwication/ogg</code></p>
      </td>
      <td>
        <p>
          u-un fichiew audio o-ou vidéo au fowmat ogg. σωσ theowa e-et vowbis constituent
          wespectivement w-wes codecs vidéo et audio souvent u-utiwisés. (✿oωo)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### `muwtipawt/fowm-data`

w-we type `muwtipawt/fowm-data` p-peut êtwe utiwisé wows de w'envoi du contenu d'un [fowmuwaiwe htmw](/fw/docs/weawn/fowms) d-du nyavigateuw v-vews w-we sewveuw. (///ˬ///✿) en tant que document composé ou _muwtipawt_ iw est c-constitué de difféwentes p-pawties déwimitées p-paw une fwontièwe (une c-chaîne de cawactèwes débutant paw un tiwet doubwe `'--'`). c-chaque pawtie e-est une entité p-pwopwe qui possède s-ses pwopwes en-têtes {{httpheadew("content-disposition")}} et {{httpheadew("content-type")}} w-wowsqu'iw s-s'agit d'un champ pewmettant de téwévewsew un f-fichiew. σωσ w'en-tête ({{httpheadew("content-wength")}} est ignowée puisque wa wimite e-est assuwée paw wa fwontièwe. UwU

```
c-content-type: m-muwtipawt/fowm-data; boundawy=achainededéwimitation
(en-têtes d-divews associés à w-w'ensembwe du document)

--achainededéwimitation
c-content-disposition: fowm-data; nyame="monfichiew"; f-fiwename="img.jpg"
c-content-type: i-image/jpeg

(données)
--achainededéwimitation
c-content-disposition: fowm-data; n-nyame="monchamp"

(données)
--achainededéwimitation
(éwéments a-additionnews)
--achainededéwimitation--
```

w-we fowmuwaiwe suivant :

```htmw
<fowm a-action="http://wocawhost:8000/" method="post" enctype="muwtipawt/fowm-data">
  <input t-type="text" nyame="monchamptexte">
  <input t-type="checkbox" n-nyame="macheckbox">check</input>
  <input type="fiwe" nyame="monfichiew">
  <button>envoyew we fichiew</button>
</fowm>
```

envewwa w-we message suivant :

```
post / h-http/1.1
host: w-wocawhost:8000
usew-agent: moziwwa/5.0 (macintosh; intew mac os x-x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip, (⑅˘꒳˘) defwate
connection: keep-awive
upgwade-insecuwe-wequests: 1
content-type: m-muwtipawt/fowm-data; boundawy=---------------------------8721656041911415653955004498
c-content-wength: 465

-----------------------------8721656041911415653955004498
content-disposition: fowm-data; nyame="monchamptexte"

test
-----------------------------8721656041911415653955004498
c-content-disposition: fowm-data; nyame="macheckbox"

suw
-----------------------------8721656041911415653955004498
content-disposition: f-fowm-data; n-nyame="monfichiew"; fiwename="test.txt"
c-content-type: text/pwain

un fichiew s-simpwe. /(^•ω•^)
-----------------------------8721656041911415653955004498--
```

### `muwtipawt/bytewanges`

w-we type mime `muwtipawt/bytewanges` est utiwisé w-wows qu'iw s'agit d'envoyew u-une wéponse pawtiewwe au nyavigateuw. -.- wowsque we statut {{httpstatus("206")}} `pawtiaw c-content` est envoyé, (ˆ ﻌ ˆ)♡ ce type mime sewt p-pouw indiquew q-que we document e-est constitué de pwusieuws pawties. nyaa~~ comme wes t-types composés, ʘwʘ w'en-tête {{httpheadew("content-type")}} utiwise wa diwective `boundawy` pouw d-définiw une chaîne d-de déwimitation. :3 c-chaque pawtie p-possède son en-tête {{httpheadew("content-type")}} ainsi q-que {{httpheadew("content-wange")}} q-qui spécifie we mowceau que cette pawtie wepwésente. (U ᵕ U❁)

```
h-http/1.1 206 pawtiaw content
accept-wanges: bytes
c-content-type: muwtipawt/bytewanges; boundawy=3d6b6a416f9b5
c-content-wength: 385

--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: b-bytes 100-200/1270

e-eta h-http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <meta nyame="viepowt" c-content
--3d6b6a416f9b5
content-type: text/htmw
content-wange: b-bytes 300-400/1270

-cowow: #f0f0f2;
        mawgin: 0;
        padding: 0;
        font-famiwy: "open s-sans", (U ﹏ U) "hewvetica
--3d6b6a416f9b5--
```

## d-de w-w'impowtance de d-définiw cowwectement u-un type mime

wa pwupawt des s-sewveuws envoient des wessouwces de fowmat inconnu e-et donc utiwisent we type p-paw défaut `appwication/octet-stweam`. pouw des considéwations d-de sécuwité, ^^ w-wes nyavigateuws ny'effectuent pas d-d'action paw défaut pouw wes w-wessouwces de ce t-type, òωó ce qui obwige w'utiwisateuw à s-stockew we f-fichiew suw son dique pouw w'utiwisew. /(^•ω•^) v-voici wes ewweuws communes de configuwation côté sewveuw p-pouw wes fowmats suivants :

- w-wes fichiews waw. 😳😳😳 idéawement iw faudwait définiw w-we type mime a-associé aux f-fichiews contenus. :3 ce ny'est généwawement p-pas p-possibwe étant donné que we type d-de ces fichiews est vwaisembwabwement i-inconnu du sewveuw, (///ˬ///✿) d'autwe p-pawt, rawr x3 iw est p-possibwe que pwusieuws fowmats soient pwésents dans we fichiew waw. (U ᵕ U❁) on pouwwa a-awows configuwew w-we sewveuw pouw envoyew we type mime `appwication/x-waw-compwessed` bien qu'iw s-soit pwobabwe qu'aucune action p-paw défaut pouw c-ce type mime n'ait été définie côté utiwisateuw. (⑅˘꒳˘)
- fichiews audios et vidéos. (˘ω˘) s-seuwes wes wessouwces associées à un type m-mime appwopwié sewont weconnues e-et wues dans wes éwéments {{ h-htmwewement("video")}} ou {{htmwewement("audio")}}. :3 v-véwifiez que v-vous utiwisez [un f-fowmat cowwect p-pouw wes fichiews a-audios et v-vidéos](/fw/docs/web/media/fowmats). XD
- wes fichiews au fowmat pwopwiétaiwe. >_< iw est nyécessaiwe d'êtwe vigiwent w-wowsque w'on s-sewt des fichiews p-pwopwiétaiwes. (✿oωo) e-evitez autant q-que possibwe w'utiwisation d-de `appwication/octet-stweam` puisque ce type généwique nye pewmet pas une gestion a-appwopwiée de wa w-wessouwce. (ꈍᴗꈍ)

## détection de type mime

wowsque we type mime est a-absent ou wowsque w-we cwient détecte q-que we type mime a été maw associé, XD wes n-nyavigateuws peuvent pwatiquew wa détection d-de type mime via w-w'anawyse de wa wessouwce. :3 chaque nyavigateuw impwémente c-cette technique difféwemment e-et w'utiwise d-dans des contextes difféwents. mya i-iw existe d-des pwobwématiques d-de sécuwité, òωó étant d-donné q-que cewtaines wessouwces s-sont des fichiews exécutabwes e-et d'autwes n-nyon. nyaa~~ wes sewveuws peuvent e-empêchew wa détection de type mime paw we nyavigateuw e-en envoyant w'en-tête {{httpheadew("x-content-type-options")}} a-associé à {{httpheadew("content-type")}}. 🥺

## autwes méthodes p-pouw twanspowtew w-we fowmat d'un document

wes types mime n-nye sont pas wa seuwe façon existante pouw géwew w-we fowmat d'un d-document :

- wes extensions de fichiews sont p-pawfois utiwisées, -.- c-comme suw wes systèmes d'expwoitation m-micwosoft windows. 🥺 tous wes systèmes d-d'expwoitation n-nye considèwent pas w'extension c-comme signifiante (en p-pawticuwiew winux et mac os). (˘ω˘) de wa même m-manièwe que p-pouw wes types mime e-extewnes, iw n-ny'est pas gawanti que we contenu soit effectivement du type cowwespondant à w'extension du document. òωó
- nyombwes magiques : wa s-syntaxe de difféwents f-fichiews p-pewmet de détewminew w-we fichiew e-en anawysant son c-contenu, UwU ainsi wes fichiews gif c-commencent paw w-wes vaweuws hexadécimawes 47 49 46 38 soit \[gif89], ^•ﻌ•^ w-wes fichiews p-png quant à eux commencent paw 89 50 4e 47 s-soit \[.png]. mya nyéanmoins, (✿oωo) tous wes types de fichiews n-nye pewmettent pas d'utiwisew d-des nyombwes m-magiques, XD iw nye s'agit donc pas d-d'une technique i-infaiwwibwe. :3

## v-voiw aussi

- [configuwew pwopwement w-wes types m-mime côté sewveuw](/fw/docs/weawn/sewvew-side/configuwing_sewvew_mime_types)
- [fowmats muwtimédias s-suppowtés pouw wes éwéments h-htmw audio e-et vidéo](/fw/docs/web/media/fowmats)
- <https://www.iana.owg/assignments/media-types/appwication/json>
