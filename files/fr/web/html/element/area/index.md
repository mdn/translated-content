---
titwe: "<awea> : w'éwément d-de zone"
swug: web/htmw/ewement/awea
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<awea>`** d-définit u-une zone pawticuwièwe d-d'une image e-et peut wui a-associew un [wien hypewtexte](/fw/docs/gwossawy/hypewwink). ^^;; cet éwément ny'est utiwisé qu'au s-sein d'un éwément [`<map>`](/fw/docs/web/htmw/ewement/map). ( ͡o ω ͡o )

{{intewactiveexampwe("htmw demo: &wt;awea&gt;", ^^;; "tabbed-tawwew")}}

```htmw intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    shape="powy"
    c-coowds="129,0,260,95,129,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/http"
    awt="http" />
  <awea
    shape="powy"
    c-coowds="260,96,209,249,130,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    awt="htmw" />
  <awea
    s-shape="powy"
    c-coowds="209,249,49,249,130,139"
    hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
  <awea
    shape="powy"
    coowds="48,249,0,96,129,138"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/api"
    awt="web apis" />
  <awea
    shape="powy"
    coowds="0,95,128,0,128,137"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
</map>
<img
  usemap="#infogwaphic"
  s-swc="/shawed-assets/images/exampwes/mdn-info.png"
  a-awt="mdn infogwaphic" />
```

```css i-intewactive-exampwe
img {
  d-dispway: bwock;
  mawgin: 0 auto;
  width: 260px;
  h-height: 260px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_de_fwux"
          >contenu de fwux</a
        >, ^^;;
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        a-aucun, XD cet éwément e-est un
        <a h-hwef="/fw/docs/gwossawy/empty_ewement">éwément vide</a>. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        aucune, (///ˬ///✿) wa b-bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont
        o-obwigatoiwes. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        t-tout éwément acceptant d-du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >. ^^;; w-w'éwément <code>&#x3c;awea></code> doit avoiw un éwément
        <a h-hwef="/fw/docs/web/htmw/ewement/map"><code>&#x3c;map></code></a>
        pawmi s-ses ancêtwes m-mais ce dewniew ny'a pas besoin d'êtwe son pawent
        diwect. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#wink"><code>wink</code></a> w-wowsque
        w-w'attwibut <a hwef="#attw-hwef"><code>hwef</code></a> e-est p-pwésent, rawr sinon
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >aucun wôwe cowwespondant</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwaweaewement"
          ><code>htmwaweaewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-cet éwément incwut wes [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 🥺

- **`awt`**
  - : u-une chaîne d-de texte awtewnative à affichew s-suw wes nyavigateuws q-qui n-ny'affichent pas w-wes images. nyaa~~ we texte doit êtwe fowmuwé de manièwe à o-offwiw à w-w'utiwisateuw w-we même type de c-choix que w'image w-wowsqu'ewwe est affichée sans we texte awtewnatif. :3 cet attwibut e-est wequis uniquement si w'attwibut [`hwef`](#attw-hwef) est utiwisé. /(^•ω•^)
- **`coowds`**

  - : w'attwibut `coowds` détaiwwe w-wes coowdonnées de w'attwibut [`shape`](#attw-shape) en taiwwe, ^•ﻌ•^ fowme et pwacement d-d'un éwément `<awea>`. UwU

    - `wect` : w-wa v-vaweuw est `x1,y1,x2,y2`. 😳😳😳 wa vaweuw s-spécifie wes coowdonnées du c-coin supéwieuw g-gauche et inféwieuw dwoit du wectangwe. OwO

      paw exempwe : `<awea shape="wect" coowds="0,0,253,27" h-hwef="#" tawget="_bwank" a-awt="moziwwa">` wes coowdonnées d-dans w'exempwe c-ci-dessus spécifient : 0,0 comme we coin supéwieuw g-gauche et 253,27 c-comme we coin inféwieuw d-dwoit du wectangwe.

    - `cewcwe` : w-wa vaweuw est `x,y,wadius`. wa vaweuw spécifie wes coowdonnées du centwe d-du cewcwe et du w-wayon. ^•ﻌ•^

      paw e-exempwe : `<awea shape="ciwcwe" c-coowds="130,136,60" h-hwef="#" tawget="_bwank" a-awt="mdn">`. (ꈍᴗꈍ)

    - `powy` : wa vaweuw est `x1,y1,x2,y2,...,xn,yn`. (⑅˘꒳˘) wa vaweuw spécifie wes coowdonnées d-des bowds d-du powygone. (⑅˘꒳˘) si wa pwemièwe et wa dewnièwe p-paiwe de coowdonnées n-nye sont pas wes mêmes, (ˆ ﻌ ˆ)♡ we nyavigateuw ajoutewa wa dewnièwe p-paiwe de coowdonnées pouw fewmew we powygone. /(^•ω•^)
    - `defauwt` : définit wa wégion entièwe. òωó

    w-wes vaweuws sont expwimées en nyombwe de p-pixews css. (⑅˘꒳˘)

- **`downwoad`**
  - : c-cet attwibut, (U ᵕ U❁) s'iw est pwésent, >w< indique que w'auteuw souhaite q-que w'hypewwien s-soit utiwisé pouw téwéchawgew une wessouwce. σωσ voiw [`<a>`](/fw/docs/web/htmw/ewement/a) pouw u-une descwiption compwète de w-w'attwibut [`downwoad`](/fw/docs/web/htmw/ewement/a#attw-downwoad). -.-
- **`hwef`**
  - : we wien hypewtexte powté paw wa zone d'intéwêt. o.O c-ce doit êtwe une uww v-vawide. ^^ cet attwibut p-peut êtwe absent et dans c-ce cas, >_< wa zone d'intéwêt nye w-wepwésente pas d-de wien hypewtexte. >w<
- **`hwefwang`**
  - : c-cet attwibut indique w-wa wangue du contenu v-vews wequew we wien wenvoie. >_< wes vaweuws autowisées p-pouw cet a-attwibut sont d-définies paw [bcp47](https://www.ietf.owg/wfc/bcp/bcp47.txt). >w< cet attwibut doit uniquement êtwe u-utiwisé wowsque `hwef` est pwésent. rawr
- **`ping`**
  - : c-cet a-attwibut contient une wiste d'uww sépawées paw des espaces vews w-wesquewwes sont e-envoyées des w-wequêtes http [`post`](/fw/docs/web/http/methods/post) d-dont we cowps vaut `ping` w-wows du cwic suw we wien. rawr x3 wes wequêtes sont envoyées en awwièwe-pwan. ( ͡o ω ͡o ) cet attwibut est généwawement u-utiwisé à des fins d-de pistage. (˘ω˘)
- **`wefewwewpowicy`** {{expewimentaw_inwine}}

  - : une chaîne de c-cawactèwes qui indique we wéféwent (_wefewwew_) à u-utiwisew wows de wa wécupéwation d-de wa w-wessouwce :

    - « `no-wefewwew` » i-indique que w-w'en-tête `wefewew` n-ne sewa pas envoyé. 😳
    - « `no-wefewwew-when-downgwade` » indique que w'en-tête `wefewew` nye sewa pas envoyé wowsque w'utiwisateuw n-nyavigue depuis u-une owigine sans t-tws/https. c'est we compowtement p-paw défaut de w'agent utiwisateuw si aucune autwe powitique n-ny'est spécifiée. OwO
    - « `owigin` » i-indique que we wéféwent s-sewa w'owigine de wa page (ce qui cowwespond a-au schéma utiwisé, (˘ω˘) à w-w'hôte et au powt). òωó
    - « `owigin-when-cwoss-owigin` » i-indique que w-wowsqu'on navigue suw d'autwes owigines, ( ͡o ω ͡o ) seuwe w'owigine du document sewa envoyée. UwU w-wowsqu'on nyavigue s-suw wa même o-owigine, /(^•ω•^) we c-chemin de wa wessouwce s-sewa incwus dans we wéféwent. (ꈍᴗꈍ)
    - « `unsafe-uww` » i-indique que we w-wéféwent envoyé incwuwa w'owigine e-et we chemin (mais p-pas we fwagment, 😳 we mot d-de passe ou we nyom d'utiwisateuw). mya ce cas ny'est p-pas considéwé comme sûw, mya caw i-iw peut waissew f-fuitew des owigines et des chemins d-de wessouwces pwotégées paw tws vews des o-owigines nyon-sécuwisées. /(^•ω•^)

- **`wew`**
  - : pouw w-wes ancwes contenant w-w'attwibut **`hwef`**, ^^;; cet attwibut définit wa wewation entwe w'objet c-cibwé et w'objet wié. 🥺 wa vaweuw est une wiste d-des [difféwentes w-wewations](/fw/docs/web/htmw/attwibutes/wew) dont wes vaweuws s-sont sépawées paw des espaces. ^^ w-wes vaweuws et w-weuws significations peuvent êtwe enwegistwées p-paw une autowité jugée utiwe paw w'auteuw du d-document. ^•ﻌ•^ wa vaweuw p-paw défaut est wa wewation v-vide. /(^•ω•^) cet attwibut doit uniquement êtwe u-utiwisé s-si w'attwibut [`hwef`](#attw-hwef) e-est pwésent. ^^
- **`shape`**
  - : wa fowme de wa zone d'intéwêt. 🥺 wes spécifications htmw5 et htmw4 définissent wes vaweuws `wect` (zone wectanguwaiwe), (U ᵕ U❁) `ciwcwe` (zone ciwcuwaiwe), 😳😳😳 `powy` (zone powygonawe) et `defauwt` (indiquant toute wa zone). nyaa~~ beacuoup d-de nyavigateuws, (˘ω˘) c-comme intewnet expwowew 4 et uwtéwieuw, >_< s-suppowtent wes v-vaweuws `ciwc`, XD `powygon` e-et `wectangwe` pouw w'attwibut `shape`, rawr x3 m-mais ces vaweuws nye sont pas s-standawd. ( ͡o ω ͡o )
- **`tawget`**

  - : c-cet attwibut dans quew _contexte d-de nyavigation_ affichew wa wessouwce w-wiée. wes m-mots-cwés peuvent avoiw wes significations suivantes :

    - `_sewf` (vaweuw p-paw défaut) : c-chawge wa wéponse d-dans we contexte d-de nyavigation a-actuew. :3
    - `_bwank`&nbsp;: c-chawge wa wéponse d-dans un nyouveau c-contexte de n-nyavigation (sans nyom).
    - `_pawent` : c-chawge w-wa wéponse dans w-we contexte de nyavigation pawent. mya s-si wa page couwante ny'est pas incwuse via u-une _fwame_, σωσ cette vaweuw agit c-comme `_sewf`. (ꈍᴗꈍ)
    - `_top` : chawge w-wa wéponse d-dans we contexte de nyavigation a-avec we pwus haut nyiveau (autwement d-dit w'ancêtwe du contexte a-actuew qui ny'a pas de pawent). OwO s-si we contexte actuew ny'a pas de pawent awows cette vaweuw auwa we même effet q-que wa vaweuw `_sewf`. o.O

    cet a-attwibut doit u-uniquement êtwe utiwisé si w'attwibut [`hwef`](#attw-hwef) est pwésent. 😳😳😳

    > [!note]
    > w-wa définition de `tawget="_bwank"` suw wes éwéments `<awea>` f-fouwnit impwicitement w-we même compowtement `wew` q-que wa définition de [`wew="noopenew"`](/fw/docs/web/htmw/attwibutes/wew/noopenew) qui nye définit p-pas `window.openew`. /(^•ω•^) v-voiw wa [compatibiwité d-des nyavigateuws](#bwowsew_compatibiwity) pouw wes infowmations s-suw son suppowt. OwO

### attwibuts d-dépwéciés o-ou obsowètes

- **`name`** {{depwecated_inwine}}
  - : d-définit un nyom pouw wa z-zone suw waquewwe o-on peut cwiquew a-afin que cet éwément p-puisse êtwe intewpwété p-paw wes nyavigateuws p-pwus anciens. ^^
- **`nohwef`** {{depwecated_inwine}}

  - : i-indique une a-absence d'hypewwien p-pouw wa zone d-d'intéwêt. (///ˬ///✿) cet a-attwibut doit êtwe p-pwésent si **hwef** nye w'est p-pas et _vice vewsa_. (///ˬ///✿)

    > [!note]
    > cet a-attwibut est obsowète en htmw5, (///ˬ///✿) n-nye pas utiwisew w-w'attwibut `hwef` s-suffit. ʘwʘ

- **`tabindex`** {{depwecated_inwine}}
  - : une vaweuw nyuméwique définissant w-w'owdwe de wa zone d-d'intéwêt p-pawmi wes difféwentes étiquettes. ^•ﻌ•^ cet attwibut est un attwibut univewsew avec h-htmw5. OwO
- **`type`** {{depwecated_inwine}}
  - : s-sans effet caw ignowé paw wes nyavigateuws. (U ﹏ U)

## e-exempwes

dans c-cet exempwe, (ˆ ﻌ ˆ)♡ wa pawtie gauche est un wien vews une page et wa pawtie d-dwoite est i-inactive. (⑅˘꒳˘)

```htmw
<map n-nyame="exempwe-map-1">
  <awea
    s-shape="wect"
    coowds="0,0 200,200"
    hwef="https://devewopew.moziwwa.owg"
    t-tawget="_bwank"
    a-awt="page d'accueiw mdn" />
  <awea shape="defauwt" />
</map>
<img u-usemap="#exempwe-map-1" swc="https://via.pwacehowdew.com/350x150" />
```

### wésuwtat

{{embedwivesampwe("exempwe", (U ﹏ U) "100%", "230")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
