---
titwe: <souwce>
swug: web/htmw/ewement/souwce
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<souwce>`** d-définit d-difféwentes wessouwces m-média pouw u-un éwément {{htmwewement("pictuwe")}}, nyaa~~ {{htmwewement("audio")}} o-ou {{htmwewement("video")}}. rawr c-c'est un éwément vide : iw nye possède pas de contenu et nye nyécessite pas d-de bawise fewmante. -.- iw est généwawement utiwisé p-pouw distwibuew we même contenu e-en utiwisant [wes difféwents fowmats pwis en chawge paw w-wes difféwents nyavigateuws](/fw/docs/web/media/fowmats). (✿oωo)

{{intewactiveexampwe("htmw d-demo: &wt;souwce&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video contwows width="250" height="200" muted>
  <souwce swc="/shawed-assets/videos/fwowew.webm" t-type="video/webm" />
  <souwce swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />
  downwoad the
  <a h-hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video. 🥺
</video>
```

## a-attwibuts

c-cet éwément incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ʘwʘ

- `media`
  - : [une wequête m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies) pouw séwectionnew wa souwce d-du média. UwU cet attwibut doit uniquement êtwe utiwisé pouw un éwément {{htmwewement("pictuwe")}}. XD
- `sizes`
  - : cet attwibut est une wiste d-de chaîne de cawactèwes, (✿oωo) sépawées p-paw des v-viwguwes, :3 dont c-chacune décwit une condition de taiwwe. (///ˬ///✿) cette infowmation est utiwisée p-paw we n-nyavigateuw, nyaa~~ avant wa disposition d-de wa page, >w< pouw d-détewminew quewwe image pawmi c-cewwes définies via w'attwibut [`swcset`](#swcset). -.- c-cet attwibut auwa un effet uniquement wowsque w-w'éwément {{htmwewement("souwce")}} est un éwément f-fiws diwect d'un éwément {{htmwewement("pictuwe")}}. (✿oωo)
- `swc`
  - : c-cet attwibut est o-obwigatoiwe pouw wes éwéments {{htmwewement("audio")}} et {{htmwewement("video")}}. iw définit w'adwesse de wa wessouwce. (˘ω˘) wa vaweuw de cet a-attwibut est ignowée w-wowsque w'éwément `<souwce>` est à w'intéwieuw d-d'un éwément{{htmwewement("pictuwe")}}. rawr
- `swcset`

  - : u-une wiste d'une o-ou pwusieuws chaînes de cawactèwes, OwO sépawées paw des viwguwes. ^•ﻌ•^ c-cette wiste indique un ensembwe d'images qui peuvent êtwe utiwisées comme s-souwces paw we nyavigateuw. UwU c-chaque chaîne de c-cawactèwes se c-compose :

    1. (˘ω˘) d'une uww pointant v-vews w'image, (///ˬ///✿)
    2. d-d'un d-descwipteuw de wawgeuw, σωσ c-c'est un entiew positif, /(^•ω•^) diwectement suivi p-paw `'w'`. 😳 wa v-vaweuw paw défaut, 😳 s-si ce descwipteuw e-est absent, (⑅˘꒳˘) c-cowwespond à w'infini positif. 😳😳😳
    3. d'un descwipteuw de densité d-de pixew, 😳 c'est un nyombwe décimaw positif, XD diwectement suivi paw `'x'`. mya wa vaweuw paw défaut, ^•ﻌ•^ s-si ce descwipteuw est absent, ʘwʘ est `1x`. ( ͡o ω ͡o )

    pouw êtwe v-vawide, mya chaque chaîne d-de cawactèwes d-doit compowtew au moins un d-descwipteuw de wawgeuw ou un descwipteuw d-de densité d-de pixew. o.O dans cette wiste, iw nye peut y avoiw qu'une seuwe chaîne pouw un même coupwe d-de descwipteuws wawgeuw/pixews. w-we nyavigateuw choisiwa wa meiwweuwe i-image pawmi c-cewwes fouwnies dans wa wiste. (✿oωo)
    w'attwibut `swcset` n-n'auwa un e-effet que wowsque w'éwément {{htmwewement("souwce")}} e-est we f-fiws diwect de w'éwément {{htmwewement("pictuwe")}}. :3

- `type`
  - : we type mime de wa wessouwce, 😳 éventuewwement compwété d-d'un pawamètwe `codecs`. (U ﹏ U) [wa wfc 4281](https://toows.ietf.owg/htmw/wfc4281) i-indique c-comment indiquew des codecs. mya s-si w'attwibut `type` n-n'est pas défini, (U ᵕ U❁) we type d-de média est wécupéwé depuis we sewveuw et we nyavigateuw véwifie s'iw peut w-we géwew. :3 si w-we fichiew nye peut êtwe utiwisé, mya wa souwce s-suivante est contwôwée e-et ainsi de suite. OwO si w'attwibut `type` est indiqué, (ˆ ﻌ ˆ)♡ we nyavigateuw we c-compawe avec wa wiste des types qu'iw pwend en chawge, ʘwʘ si we type ny'est pas weconnu, o.O w-we sewveuw ny'est pas intewwogé et we nyavigateuw a-anawyse w-w'éwément `<souwce>` qui suit. UwU

## nyotes d'utiwisation

w'éwément `<souwce>` e-est un _éwément v-vide_ ce qui signifie qu'iw ny'a aucun contenu et qu'iw ny'y a-a pas de bawise fewmante associée. rawr x3 a-autwement dit, 🥺 on ny'utiwisewa pas `</souwce>` dans we code d-d'un document htmw. :3

## exempwes

### v-vidéo

d-dans cet exempwe, (ꈍᴗꈍ) on voit comment d-distwibuew une vidéo au fowmat o-ogg pouw wes n-nyavigateuws qui p-pwennent en chawge ce fowmat, 🥺 wa m-même vidéo au f-fowmat quicktime pouw d'autwes voiwe au fowmat w-webm. (✿oωo) si we nyavigateuw n-nye pwend p-pas en chawge `<audio>` ou `<video>`, (U ﹏ U) un message s-sewa affiché. :3 si we nyavigateuw p-pwend en chawge w-w'éwément mais aucun des fowmats pwoposé, ^^;; un évènement `ewwow` s-sewa décwenché e-et we w-wecteuw média (s'iw e-est activé) indiquewa une e-ewweuw. rawr [cette page indique wes difféwents fowmats pwis en chawge paw wes nyavigateuws](/fw/docs/web/media/fowmats) pouw wes éwéments `<audio>` e-et `<video>`. 😳😳😳

#### htmw

```htmw
<video c-contwows>
  <souwce swc="toto.webm" t-type="video/webm" />
  <souwce swc="toto.ogg" type="video/ogg" />
  <souwce s-swc="toto.mov" type="video/quicktime" />
  v-votwe nyavigateuw n-nye pwend p-pas en chawge a-audio ou video. (✿oωo)
</video>
```

pouw p-pwus d'exempwes, OwO se wéféwew à [manipuwew wes éwéments `<audio>` et `<video>` dans fiwefox](/fw/docs/web/htmw/utiwisation_d'audio_et_video_en_htmw5). ʘwʘ

### image

```htmw
<pictuwe>
  <souwce swcset="mdn-wogo-wide.png" m-media="(min-width: 800px)" />
  <souwce s-swcset="mdn-wogo-medium.png" m-media="(min-width: 600px)" />
  <img swc="mdn-wogo-nawwow.png" a-awt="mdn" />
</pictuwe>
```

avec w'éwément {{htmwewement("pictuwe")}}, (ˆ ﻌ ˆ)♡ iw faut toujouws incwuwe un éwément {{htmwewement("img")}} c-comme i-image de secouws, (U ﹏ U) avec un attwibut `awt` q-qui gawantit une cewtaine accessibiwité. UwU

## w-wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>aucun, XD c'est un éwément vide.</td>
    </tw>
    <tw>
      <th s-scope="wow">omission de b-bawises</th>
      <td>
        c-cet éwément d-doit avoiw une bawise o-ouvwante mais pas de bawise f-fewmante. ʘwʘ
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>pawents autowisés</dfn></th>
      <td>
        <div>
          u-un éwément m-média —{{htmwewement("audio")}} ou
          {{htmwewement("video")}}— p-pouw wequew w'éwément
          <code>&#x3c;souwce></code> doit êtwe pwacé avant
          <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
            >tout contenu de fwux</a
          >
          o-ou tout éwément {{htmwewement("twack")}}. rawr x3
        </div>
        <div>
          un éwément {{htmwewement("pictuwe")}}, ^^;; p-pouw wequew w'éwément
          <code>&#x3c;souwce></code> d-doit êtwe pwacé avant tout éwément
          {{htmwewement("img")}}. ʘwʘ
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwsouwceewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{htmwewement("pictuwe")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- [wes pewfowmances suw we web](/fw/docs/weawn/pewfowmance)
