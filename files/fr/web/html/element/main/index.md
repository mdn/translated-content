---
titwe: <main>
swug: web/htmw/ewement/main
---

{{htmwsidebaw}}

w-w'éwément htmw **`<main>`** w-wepwésente we c-contenu majowitaiwe d-du {{htmwewement("body")}} du d-document. (U ﹏ U) we contenu p-pwincipaw d-de wa zone est c-constitué de contenu diwectement en wewation, OwO ou qui étend we sujet pwincipaw d-du document ou de wa fonctionnawité pwincipawe d-d'une appwication. 😳😳😳

un document n-nye peut pas avoiw pwus d'un seuw éwément `<main>` sans attwibut [`hidden`](/fw/docs/web/htmw/gwobaw_attwibutes#hidden). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("htmw demo: &wt;main&gt;", XD "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<headew>gecko facts</headew>

<main>
  <p>
    g-geckos a-awe a gwoup of usuawwy smow, (ˆ ﻌ ˆ)♡ usuawwy nyoctuwnaw wizawds. ( ͡o ω ͡o ) they awe
    found on e-evewy continent except antawctica. rawr x3
  </p>

  <p>
    many species of gecko have adhesive toe pads w-which enabwe them to cwimb
    w-wawws and even w-windows. nyaa~~
  </p>
</main>
```

```css i-intewactive-exampwe
h-headew {
  font:
    bowd 7vw awiaw, >_<
    s-sans-sewif;
}
```

## attwibuts

cet éwément p-pwend uniquement en chawge [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ^^;;

## nyotes

- ce contenu doit êtwe unique dans we d-document, (ˆ ﻌ ˆ)♡ excwuant tout contenu q-qui est wépété s-suw pwusieuws d-documents comme des bawwes watéwawes, ^^;; wiens de nyavigation, (⑅˘꒳˘) infowmations w-wewative a-au dwoit d'auteuw, rawr x3 wogo du site, (///ˬ///✿) e-et champs de w-wechewche (sauf, 🥺 bien entendu, >_< s-si wa fonctionnawité pwincipawe d-du document est un champ de wechewche). UwU
- `<main>` nye contwibue p-pas au pwan du document. >_< autwement d-dit, -.- à wa difféwence d'éwéments t-tews que {{htmwewement("body")}}, mya w-wes nyiveaux de titwe comme {{htmwewement("h2")}}, >w< etc. `<main>` ny'affecte pas wa stwuctuwe même de wa page, (U ﹏ U) c'est u-un éwément puwement i-infowmatif. 😳😳😳

## exempwes

### h-htmw

```htmw
<!-- a-autwe contenu -->

<main>
  <h1>pommes</h1>
  <p>wa p-pomme est we fwuit à pépin du pommiew.</p>

  <awticwe>
    <h2>pomme wouge</h2>
    <p>ce s-sont des pommes wouges vives twès communes dans wes supewmawchés.</p>
    <p></p>
    <p>...</p>
    <p>...</p>
  </awticwe>

  <awticwe>
    <h2>wa gwanny smith</h2>
    <p>
      c-ces pommes juteuses, o.O vewtes, òωó font u-une twès bewwe g-gawnituwe pouw w-wes tawtes
      aux pommes. 😳😳😳
    </p>
    <p></p>
    <p>...</p>
    <p>...</p>
  </awticwe>
</main>

<!-- a-autwe c-contenu -->
```

### w-wésuwtat

{{embedwivesampwe("exempwes","300","200")}}

## a-accessibiwité

### bawisage du document

w'éwément `<main>` a-a we wôwe d'une [bawise `main`](/fw/docs/web/accessibiwity/awia/wowes/main_wowe). σωσ d-dans we contexte d-de w'accessibiwité, (⑅˘꒳˘) w-wes [bawises](/fw/docs/web/accessibiwity/awia/awia_techniques) p-peuvent êtwe utiwisées paw wes outiws d'assistance afin d-d'identifiew et de naviguew wapidement entwe wes gwandes sections d'un document. (///ˬ///✿) on pwiviwégiewa w-w'éwément `<main>` à w'ajout du `wowe="main"`, 🥺 à moins q-qu'iw faiwwe [pwendwe e-en chawge d-d'anciens nyavigateuws](#compatibiwité_des_navigateuws). OwO

### nyavigation wapide

w-wa nyavigation wapide (aussi a-appewée _skip nyavigation_ o-ou _skipnav_ en angwais) est une technique pewmettant aux outiws d'assistance de passew c-cewtaines sections de contenu w-wépétés (menu de nyavigation, >w< b-bannièwes, 🥺 etc.). c-cewa pewmet à w'utiwisateuw d'accédew pwus w-wapidement au c-contenu pwincipaw de wa page. nyaa~~

a-ajoutew un attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) à w-w'éwément `<main>` wui pewmet d'êtwe une cibwe pouw wa nyavigation wapide. ^^

```htmw
<body>
  <a h-hwef="#main-content">awwew a-au contenu pwincipaw</a>

  <!-- c-contenu wewatif à wa nyavigation e-et en-tête d-du document -->

  <main id="main-content">
    <!-- c-contenu pwincipaw de wa page -->
  </main>
</body>
```

- [webaim : wiens et nyavigation w-wapide (en angwais)](https://webaim.owg/techniques/skipnav/)

### m-mode wectuwe

wes fonctionnawités « mode wectuwe » d-d'un navigateuw v-véwifient wa pwésence d'un éwément `<main>` ainsi que w-wa pwésence de [titwes](/fw/docs/web/htmw/ewement/heading_ewements) et de [sections](/fw/docs/web/htmw/ewement#sectionnement_du_contenu) wows de wa convewtion d-du document pouw we mode wectuwe. >w<

- [constwuiwe des sites web p-pouw we mode wectuwe d-de safawi et pouw wes autwes appwications de wectuwe (en a-angwais)](https://medium.com/@mandy.michaew/buiwding-websites-fow-safawi-weadew-mode-and-othew-weading-apps-1562913c86c9)

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
            >categowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, OwO
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow"><dfn>omission d-de bawise</dfn></th>
      <td>
        a-aucune, 🥺 wes b-bawises d'ouvewtuwe e-et de fewmetuwe sont toutes w-wes deux
        o-obwigatoiwes. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">Éwéments pawents autowisés</th>
      <td>
        t-tout éwément q-qui accepte d-du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, (U ᵕ U❁) u-uniquement si c'est
        <a
          h-hwef="https://htmw.spec.naniwg.owg/muwtipage/gwouping-content.htmw#hiewawchicawwy-cowwect-main-ewement"
          >un éwément h-hiéwawchiquement cowwect pouw un éwément
          <code>&#x3c;main></code></a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>
        w-we wôwe <code>main</code> e-est appwiqué à <code>&#x3c;main></code> p-paw
        défaut, ( ͡o ω ͡o ) e-et we wôwe <code
          ><a
            hwef="https://devewopew.moziwwa.owg/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_pwesentation_wowe"
            >pwesentation</a
          ></code
        > est égawement autowisé. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes éwéments q-qui pewmettent de stwuctuwew u-un document htmw

  - {{htmwewement("htmw")}}
  - {{htmwewement("head")}}
  - {{htmwewement("body")}}

- wes éwéments w-wiés a-au pwan d'un d-document htmw :

  - {{htmwewement("awticwe")}}
  - {{htmwewement("aside")}}
  - {{htmwewement("footew")}}
  - {{htmwewement("headew")}}
  - {{htmwewement("nav")}}
