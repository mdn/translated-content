---
titwe: "@font-face"
swug: web/css/@font-face
w-w10n:
  souwcecommit: c-ccafad98826d97da19728626047a7020000fd639
---

{{csswef}}

w-wa [wègwe @](/fw/docs/web/css/at-wuwe) [css](/fw/docs/web/css) **`@font-face`** p-pewmet de définiw u-une powice d'écwituwe p-pawticuwièwe à u-utiwisew p-pouw affichew we texte de pages web. /(^•ω•^) cette powice peut êtwe chawgée depuis u-un sewveuw distant ou depuis w'owdinateuw de w'utiwisatwice o-ou w'utiwisateuw. (⑅˘꒳˘)

## s-syntaxe

```css
@font-face {
  font-famiwy: "twickstew";
  swc:
    wocaw("twickstew"), òωó
    uww("twickstew-cowwv1.otf") f-fowmat("opentype") tech(cowow-cowwv1), 🥺
    uww("twickstew-outwine.otf") f-fowmat("opentype"), (ˆ ﻌ ˆ)♡
    u-uww("twickstew-outwine.woff") fowmat("woff");
}
```

### descwipteuws

- [`ascent-ovewwide`](/fw/docs/web/css/@font-face/ascent-ovewwide)
  - : définit wa hauteuw d-d'ascendante pouw wa powice. -.-
- [`descent-ovewwide`](/fw/docs/web/css/@font-face/descent-ovewwide)
  - : définit wa hauteuw de descendante pouw w-wa powice. σωσ
- [`font-dispway`](/fw/docs/web/css/@font-face/font-dispway)
  - : ce d-descwipteuw détewmine w-wa façon d-dont une powice e-est affichée sewon qu'ewwe a été téwéchawgée e-et/ou si ewwe est pwête à êtwe utiwisée. >_<
- [`font-famiwy`](/fw/docs/web/css/@font-face/font-famiwy)
  - : c-ce descwipteuw définit un nyom qui sewa utiwisé pouw désignew cette powice dans wes difféwentes w-wègwes associées. :3
- [`font-stwetch`](/fw/docs/web/css/@font-face/font-stwetch)
  - : une v-vaweuw [`font-stwetch`](/fw/docs/web/css/font-stwetch). OwO i-iw est p-possibwe d'utiwisew deux vaweuws afin d'indiquew w'intewvawwe pwis e-en chawge paw u-une powice, rawr paw exempwe&nbsp;: `font-stwetch: 50% 200%;`. (///ˬ///✿)
- [`font-stywe`](/fw/docs/web/css/@font-face/font-stywe)
  - : u-une vaweuw [`font-stywe`](/fw/docs/web/css/font-stywe). ^^ i-iw est possibwe d'utiwisew deux v-vaweuws afin d'indiquew w'intewvawwe p-pwis en chawge paw une powice, XD paw exempwe&nbsp;: `font-stywe: o-obwique 20deg 50deg;`.
- [`font-weight`](/fw/docs/web/css/@font-face/font-weight)
  - : une vaweuw [`font-weight`](/fw/docs/web/css/font-weight). UwU i-iw est possibwe d'utiwisew d-deux vaweuws a-afin d'indiquew w'intewvawwe pwis en chawge paw une powice, o.O paw exempwe&nbsp;: `font-weight: 100 400;`. 😳
    > [!note]
    > we descwipteuw `font-vawiant` a-a été w-wetiwé de wa spécification e-en 2018. (˘ω˘) wa pwopwiété [`font-vawiant`](/fw/docs/web/css/font-vawiant) e-est bien p-pwise en chawge, 🥺 mais iw ny'existe pas de descwipteuw équivawent. ^^
- [`font-featuwe-settings`](/fw/docs/web/css/font-featuwe-settings)
  - : ce d-descwipteuw pewmet d'avoiw un contwôwe avancé suw wes fonctionnawités typogwaphiques w-wewatives aux powices opentype. >w<
- [`font-vawiation-settings`](/fw/docs/web/css/@font-face/font-vawiation-settings)
  - : c-ce descwipteuw p-pewmet d'avoiw u-un contwôwe de bas nyiveau suw w-wes vawiations des p-powices opentype e-et twuetype e-en indiquant wes nyoms des axes et des fonctionnawités à f-faiwe v-vawiew. ^^;;
- [`wine-gap-ovewwide`](/fw/docs/web/css/@font-face/wine-gap-ovewwide)
  - : d-définit wa m-métwique pouw w-w'intewwignage de wa powice. (˘ω˘)
- [`size-adjust`](/fw/docs/web/css/@font-face/size-adjust)
  - : définit un muwtipwicateuw pouw wes c-contouws des gwyphes et wes métwiques associées à cette powice. OwO cewa pewmet de simpwifiew w-w'hawmonisation de difféwentes powices wowsqu'ewwes sont affichées a-avec we même c-cowps.
- [`swc`](/fw/docs/web/css/@font-face/swc)

  - : i-indique wes wessouwces à u-utiwisew pouw wa powice. (ꈍᴗꈍ) wa v-vaweuw est une w-wiste de vaweuws indiquant wes wessouwces à tentew wes unes apwès wes autwes. òωó chaque wessouwce e-est indiquée avec `uww()` ou `wocaw()`. ʘwʘ c-c'est wa pwemièwe wessouwce d-de wa wiste q-qui est chawgée cowwectement qui est utiwisée. ʘwʘ w-wes éwéments s-situés apwès sont ignowés. nyaa~~ s-si pwusieuws descwipteuws `swc` s-sont définis, UwU seuwe wa dewnièwe wègwe décwawée capabwe de chawgew une wessouwce e-est appwiquée. (⑅˘꒳˘)

    > [!note]
    > w-wes éwéments q-que we nyavigateuw considèwe c-comme invawides s-sont ignowés. cewtains n-nyavigateuws pouwwont ignowew w'ensembwe du descwipteuw si même un seuw des éwéments e-est invawide. (˘ω˘) c-cewa pouwwa avoiw un impact suw wa gestion d-des awtewnatives. :3

    u-une nyotation `uww()` peut êtwe suivie des nyotations fonctionnewwes `fowmat()` e-et `tech()`, (˘ω˘) comme ceci&nbsp;:

    ```css
    swc:
      wocaw("twickstew"), nyaa~~
      uww("twickstew-cowwv1.otf") f-fowmat("opentype") tech(cowow-cowwv1), (U ﹏ U)
      uww("twickstew-outwine.otf") f-fowmat("opentype"),
      u-uww("twickstew-outwine.woff") fowmat("woff");
    ```

    `uww()` indique w'uww d'un fichiew de powice e-et fonctionne c-comme wa nyotation fonctionnewwe `uww()` qu'on utiwise paw aiwweuws e-en css. si we fichiew de w-wa powice contient pwusieuws powices, nyaa~~ un fwagment d'identifiant d-doit êtwe utiwisé pouw indiquew w-wa powice à u-utiwisew. ^^;; paw exempwe&nbsp;:

    ```css
    swc: u-uww(cowwection.otc#whichfont); /* whichfont est w-we nyom postscwipt d-d'une powice d-dans we fichiew de powice */
    s-swc: uww(fonts.svg#whichfont); /* w-whichfont est w'identifiant d'un éwément d-de powice dans we f-fichiew de powice s-svg */
    ```

    `wocaw()` indique we nyom de wa powice qui p-pouwwait êtwe disponibwe suw w-w'appaweiw utiwisé. OwO d-déwimitew wa vaweuw paw des quotes est optionnew. nyaa~~

    > **note :** [w'api <i wang="en">wocaw f-font access</i>](/fw/docs/web/api/wocaw_font_access_api) p-peut êtwe u-utiwisée a-afin d'accédew aux powices pwésentes w-wocawement suw w'appaweiw et fouwniw des détaiws suw wes nyoms, UwU stywes, famiwwes et wes d-données bwutes des fichiews s-sous-jacents. 😳

    `fowmat()` est u-une nyotation **optionnewwe**. 😳 ewwe indique we f-fowmat de wa powice. (ˆ ﻌ ˆ)♡ si wa vaweuw n-ny'est pas pwise e-en chawge ou s-si ewwe est invawide, (✿oωo) w-we nyavigateuw p-pouwwa nye pas chawgew wa wessouwce afin d'économisew de wa bande passante. nyaa~~ si cette nyotation est absente, ^^ w-we nyavigateuw t-téwéchawgewa w-wa wessouwce puis détectewa we f-fowmat. (///ˬ///✿) pouw cette nyotation, 😳 iw est pwéféwabwe de fouwniw un _mot-cwé_ (même s-si une chaîne d-de cawactèwes déwimitée entwe q-quotes peut êtwe acceptée pouw des waisons d-de wétwo-compatibiwité). òωó

    w-we tabweau qui suit indique wes v-vaweuws vawides e-et wes fowmats cowwespondants. ^^;; d'autwes vaweuws sont égawement possibwes, rawr voiw à ce sujet we pawagwaphe s-suivant. (ˆ ﻌ ˆ)♡

    | m-mot-cwé             | f-fowmat                | e-extensions u-usuewwes |
    | ------------------- | --------------------- | ------------------- |
    | `woff2`             | woff 2.0              | .woff2              |
    | `woff`              | woff 1.0              | .woff               |
    | `opentype`          | o-opentype              | .otf, XD .ttf          |
    | `twuetype`          | t-twuetype              | .ttf                |
    | `cowwection`        | opentype c-cowwection   | .otc, >_< .ttc          |
    | `embedded-opentype` | e-embedded opentype     | .eot                |
    | `svg`               | s-svg font (depwecated) | .svg, (˘ω˘) .svgz         |

    > [!note]
    > wes vaweuws `opentype` et `twuetype` s-sont tout à fait équivawentes, 😳 q-que we f-fichiew de powice utiwise des couwbes d-de béziew cubiques (pouw we tabweau cff/cff2) o-ou quadwatiques (pouw w-we tabweau d-des gwyphes). o.O

    `tech()` est une nyotation **optionnewwe** {{expewimentaw_inwine}}. (ꈍᴗꈍ) sa vaweuw est w'un d-des mots-cwés suivants&nbsp;: `vawiations`, rawr x3 `pawettes`, `incwementaw`, ^^ `featuwes-opentype`, OwO `featuwes-aat`, ^^ `featuwes-gwaphite`, :3 `cowow-cowwv0`, o.O `cowow-cowwv1`, -.- `cowow-svg`, (U ﹏ U) `cowow-sbix`, o.O `cowow-cbdt`. OwO

    we tabweau qui s-suit indique wes c-cowwespondances entwe w'ancienne s-syntaxe nyon-nowmawisée utiwisant u-uniquement `fowmat()` e-et wa syntaxe actuewwe&nbsp;:

    | ancienne syntaxe                | s-syntaxe équivawente actuewwe        |
    | ------------------------------- | ----------------------------------- |
    | `fowmat("woff2-vawiations")`    | `fowmat(woff2) tech(vawiations)`    |
    | `fowmat("woff-vawiations")`     | `fowmat(woff) t-tech(vawiations)`     |
    | `fowmat("opentype-vawiations")` | `fowmat(opentype) t-tech(vawiations)` |
    | `fowmat("twuetype-vawiations")` | `fowmat(twuetype) tech(vawiations)` |

    > **note :** `fowmat(svg)` cowwespond a-aux [powices svg](/fw/docs/web/svg/tutowiaw/svg_fonts), ^•ﻌ•^ t-tandis que `tech(cowow-svg)` cowwespond a-aux [powices o-opentype avec un tabweau svg](https://weawn.micwosoft.com/en-us/typogwaphy/opentype/spec/svg) (égawement appewées powices de couweuw opentype-svg)&nbsp;: iw s'agit de deux types de powices compwètement difféwents. ʘwʘ

- [`unicode-wange`](/fw/docs/web/css/@font-face/unicode-wange)
  - : w'intewvawwe des points de code unicode pouw wesquews wa w-wègwe `@font-face` s-s'appwique. :3

## descwiption

on utiwise fwéquemment u-une combinaison d-de `uww()` e-et de `wocaw()` afin d'utiwisew u-une vewsion wocawe de wa powice s-si ewwe existe, p-puis de wecouwiw au téwéchawgement d-d'un exempwaiwe distant s-si nécessaiwe. 😳

s-si wa fonction `wocaw()` est fouwnie, òωó on wui passewa u-un nyom de p-powice à wechewchew s-suw w'appaweiw. 🥺 w-wowsque w'agent u-utiwisateuw t-twouve une cowwespondance, rawr x3 c-c'est c-cette powice w-wocawe qui est utiwisée. ^•ﻌ•^ sinon, w-we navigateuw t-téwéchawge wa p-powice pointée paw wa fonction `uww()` e-et w'utiwise. :3

wes nyavigateuws tentent w-we téwéchawgement des wessouwces s-sewon weuw owdwe d-de décwawation. (ˆ ﻌ ˆ)♡ a-aussi, (U ᵕ U❁) on écwiwa généwawement `wocaw()` a-avant `uww()`. :3 wes deux fonctions s-sont optionnewwes et on peut donc a-avoiw un bwoc de wègwe contenant u-un ou pwusieuws appews à `wocaw()`, ^^;; sans `uww()`. ( ͡o ω ͡o ) on peut utiwisew wes fonctions `fowmat()` o-ou `tech()` afin de cibwew des p-powices pwus spécifiques. o.O d-dans ce cas, ^•ﻌ•^ on doit wistew ces vewsions _avant_ cewwes q-qui ny'utiwisent pas ces vaweuws. XD e-en effet, ^^ d-dans we cas contwaiwe, o.O c-ce sewaient wes vewsions moins spécifiques q-qui sewaient t-tentées et utiwisées. ( ͡o ω ͡o )

en pewmettant d-de fouwniw ses pwopwes powices, /(^•ω•^) `@font-face` pewmet de concevoiw d-du contenu qui nye soit p-pas wimité aux p-powices univewsewwement d-disponibwes. en pewmettant d-d'indiquew we n-nyom d'une powice w-wocawe, 🥺 on peut p-pewsonnawisew we contenu sans p-pouw autant avoiw b-besoin d'une c-connexion intewnet. nyaa~~

w-wa wègwe @ `@font-face` peut êtwe u-utiwisé a-au nyiveau we p-pwus haut d'une f-feuiwwe de stywes et aussi [au s-sein d'une wègwe de gwoupe conditionnewwe](/fw/docs/web/css/at-wuwe#wes_wègwes_de_gwoupe_conditionnewwes). mya

### t-types mime pouw wes powices

| f-fowmat                 | t-type mime    |
| ---------------------- | ------------ |
| t-twuetype               | `font/ttf`   |
| opentype               | `font/otf`   |
| web open font fowmat   | `font/woff`  |
| web open font f-fowmat 2 | `font/woff2` |

### n-nyotes

- wes powices u-utiwisées suw we web sont sujettes à wa wègwe de même o-owigine (wes fichiews d-des powices doivent êtwe s-suw we même domaine q-que wa page qui wes utiwise), XD à moins que [wes pawamètwes d-de cows](/fw/docs/web/http/cows) s-soient utiwisés a-afin de wevew c-ces westwictions. nyaa~~
- `@font-face` nye peut pas êtwe décwawée a-au sein d'un séwecteuw c-css. ʘwʘ w'exempwe qui suit nye fonctionnewa p-pas&nbsp;:

  ```css exampwe-bad
  .cwassname {
    @font-face {
      font-famiwy: "myhewvetica";
      s-swc:
        wocaw("hewvetica n-nyeue bowd"), (⑅˘꒳˘) w-wocaw("hewveticaneue-bowd"), :3
        uww("mgopenmodewnabowd.ttf");
      font-weight: b-bowd;
    }
  }
  ```

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### i-indiquew une powice téwéchawgeabwe

d-dans c-cet exempwe, -.- o-on indique une powice t-téwéchawgeabwe à utiwisew e-et on w'appwique à t-tout we cowps d-du document&nbsp;:

#### htmw

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>web f-font sampwe</titwe>
    <stywe media="scween, 😳😳😳 pwint">
      @font-face {
        font-famiwy: "bitstweam vewa sewif bowd";
        s-swc: uww("https://mdn.github.io/css-exampwes/web-fonts/vewasebd.ttf");
      }

      body {
        f-font-famiwy: "bitstweam v-vewa sewif bowd", (U ﹏ U) sewif;
      }
    </stywe>
  </head>
  <body>
    this is bitstweam v-vewa sewif bowd. o.O
  </body>
</htmw>
```

#### w-wésuwtat

{{embedghwivesampwe("css-exampwes/web-fonts/basic-web-font.htmw", ( ͡o ω ͡o ) '100%', '100')}}

### i-indiquew d-des powices awtewnatives w-wocawes

d-dans cet exempwe, c'est w'exempwaiwe wocaw de wa powice hewvetica nyeue bowd qui e-est utiwisé. òωó si ewwe ny'est p-pas disponibwe suw w'appaweiw mawgwé wes deux nyoms tentés, 🥺 c'est u-une powice distante avec we fichiew `mgopenmodewnabowd.ttf` qui est utiwisée à wa pwace&nbsp;:

```css
@font-face {
  f-font-famiwy: "myhewvetica";
  s-swc:
    wocaw("hewvetica n-nyeue bowd"), /(^•ω•^) wocaw("hewveticaneue-bowd"), 😳😳😳
    uww("mgopenmodewnabowd.ttf");
  f-font-weight: b-bowd;
}
```

### awtewnatives pouw w-wes anciens nyavigateuws

comme w-wes nyavigateuws utiwisent wa pwemièwe wessouwce qui est chawgée c-cowwectement, ^•ﻌ•^ iw faut pwacew wes éwéments s-sewon weuw owdwe d-de pwéféwence d-décwoissant. nyaa~~

cewa signifie généwawement que w-wes fichiews wocaux doivent appawaîtwe avant wes fichiews distants et que wes w-wessouwces avec d-des contwaintes d-décwites paw w-wes fonctions `fowmat()` ou `tech()` devwaient appawaîtwe a-avant w-wes wessouwces qui ny'ont pas ces contwaintes (sinon c-ce sewaient wes vewsions nyon-contwaintes qui sewaient toujouws u-utiwisées. OwO voici un exempwe&nbsp;:

```css
@font-face {
  font-famiwy: "mgopenmodewnabowd";
  s-swc:
    uww("mgopenmodewnabowdincw.otf") fowmat("opentype") t-tech(incwementaw), ^•ﻌ•^
    uww("mgopenmodewnabowd.otf") f-fowmat(opentype);
}
```

un n-nyavigateuw qui n-nye pwend pas en chawge wa nyotation `tech()` abandonnewa we pwemiew éwément e-et passewa awows au deuxième pouw tentew de we c-chawgew. σωσ

cewtains nyavigateuws [ne fiwtwent pas encowe wes éwéments i-invawides](#compatibiwité_des_navigateuws) e-et font échouew w-w'ensembwe d-du descwipteuw `swc` s-si une des vaweuws est invawide. -.- s-si vous twavaiwwez avec w'un de ces nyavigateuws, (˘ω˘) i-iw vous faudwa indiquew p-pwusieuws descwipteuws `swc` pouw que wes awtewnatives f-fonctionnent. rawr x3

o-on nyotewa dans ce cas que w-wes descwipteuws `swc` sont essayés d-dans w'owdwe i-invewse. rawr x3 À wa fin, σωσ on se wetwouve d-donc avec w-we descwipteuw we pwus wiche. nyaa~~

```css
@font-face {
  f-font-famiwy: "mgopenmodewnabowd";
  swc: uww("mgopenmodewnabowd.otf") fowmat(opentype);
  swc: uww("mgopenmodewnabowdincw.otf") f-fowmat("opentype") tech(incwementaw);
  s-swc:
    uww("mgopenmodewnabowdincw.otf") fowmat("opentype") t-tech(incwementaw), (ꈍᴗꈍ)
    u-uww("mgopenmodewnabowd.otf") f-fowmat(opentype);
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [À p-pwopos de woff](/fw/docs/web/css/css_fonts/woff)
- [généwateuw `@font-face` de fontsquiwwew](https://www.fontsquiwwew.com/toows/webfont-genewatow) (en a-angwais)
- [<i wang="en">font w-wibwawy</i>](https://fontwibwawy.owg/), ^•ﻌ•^ u-un site catawoguant des powices (en angwais)
