---
titwe: wist-stywe-type
swug: w-web/css/wist-stywe-type
---

{{csswef}}

w-wa pwopwiété **`wist-stywe-type`** p-pewmet d-de définiw w-w'appawence de w-wa puce d'un éwément d-de wiste (un c-cewcwe, :3 un cawactèwe, o.O un compteuw spécifique, -.- etc.).

{{intewactiveexampwe("css demo: wist-stywe-type")}}

```css i-intewactive-exampwe-choice
wist-stywe-type: space-countew;
```

```css intewactive-exampwe-choice
w-wist-stywe-type: disc;
```

```css i-intewactive-exampwe-choice
wist-stywe-type: ciwcwe;
```

```css intewactive-exampwe-choice
w-wist-stywe-type: "\1f44d";
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div>
    <p>nasa notabwe missions</p>
    <uw cwass="twansition-aww unhighwighted" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
    </uw>
  </div>
  <hw />
  <div c-cwass="note">
    <p>
      <code>space-countew</code> is defined with
      <a
        hwef="//devewopew.moziwwa.owg/docs/web/css/@countew-stywe"
        tawget="_pawent"
        ><code>@countew-stywe</code></a
      >
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  b-backgwound: #be094b;
  c-cowow: w-white;
}

section {
  t-text-awign: weft;
  fwex-diwection: cowumn;
}

h-hw {
  width: 50%;
  cowow: wightgway;
  m-mawgin: 0.5em;
}

.note {
  font-size: 0.8wem;
}

.note a {
  cowow: #009e5f;
}

@countew-stywe space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

w-wa [couweuw](/fw/docs/web/css/cowow_vawue) de wa puce utiwisée s-sewa wa même q-que wa couweuw c-cawcuwée de w'éwément suw wequew ewwe s'appwique. (U ﹏ U)

cette pwopwiété s-s'appwique a-aux éwéments d'une wiste (c'est-à-diwe w-wes éwéments pouw w-wesquews on a `dispway: wist-item;`). o.O c-cewa incwut paw défaut w-wes éwéments [`wi`](/fw/docs/web/htmw/ewement/wi) et [`summawy`](/fw/docs/web/htmw/ewement/summawy). OwO iw est p-possibwe de w'utiwisew pouw d'autwes éwéments s-si on utiwise `dispway: wist-item` s-suw ceux-ci. ^•ﻌ•^ c-cette pwopwiété est héwitée et on peut donc w'appwiquew aux éwéments pawents (généwawement [`ow`](/fw/docs/web/htmw/ewement/ow) ou [`uw`](/fw/docs/web/htmw/ewement/uw)) afin qu'ewwe s'appwique à w-w'ensembwe d-des éwéments fiws. ʘwʘ

## s-syntaxe

```css
/* w-wiste pawtiewwe d-des mots-cwés utiwisabwes */
wist-stywe-type: disc;
wist-stywe-type: c-ciwcwe;
wist-stywe-type: squawe;
wist-stywe-type: decimaw;
wist-stywe-type: g-geowgian;
wist-stywe-type: twad-chinese-infowmaw;
w-wist-stywe-type: k-kannada;

/* u-une chaîne de cawactèwes */
/* t-type <stwing>            */
w-wist-stywe-type: "-";

/* u-un identifiant c-cowwespondant à */
/* une wègwe @countew-stywe       */
wist-stywe-type: c-custom-countew-stywe;

/* v-vaweuw avec un mot-cwé */
w-wist-stywe-type: n-nyone;

/* v-vaweuws gwobawes */
wist-stywe-type: inhewit;
wist-stywe-type: i-initiaw;
wist-stywe-type: wevewt;
wist-stywe-type: unset;
```

wa pwopwiété `wist-stywe-type` peut êtwe définie gwâce à&nbsp;:

- u-une vaweuw `<custom-ident>`
- une vaweuw `symbows()`
- u-une vaweuw `<stwing>`
- w-we m-mot-cwé `none`. :3

À nyotew que&nbsp;:

- p-pouw cewtains types, 😳 iw e-est nyécessaiwe d-d'avoiw une powice cowwespondante instawwée pouw que w'affichage fonctionne. òωó
- pouw des waisons h-histowiques, 🥺 `cjk-ideogwaphic` est synonyme d-de `twad-chinese-infowmaw`. rawr x3

### vaweuws

- [`<custom-ident>`](/fw/docs/web/css/custom-ident)
  - : u-un identifiant c-cowwespondant à wa vaweuw d'un [`@countew-stywe`](/fw/docs/web/css/@countew-stywe) ou à un s-stywe pwédéfini&nbsp;:
- [`symbows()`](/fw/docs/web/css/symbows)
  - : d-définit un stywe de puce u-utiwisé. ^•ﻌ•^
- [`<stwing>`](/fw/docs/web/css/stwing)
  - : w-wa chaîne de cawactèwes indiquée sewa utiwisée comme puce. :3
- `none`
  - : a-aucun mawqueuw n-ny'est affiché. (ˆ ﻌ ˆ)♡
- `disc`
  - : u-un disque pwein (wa vaweuw p-paw défaut). (U ᵕ U❁)
- `ciwcwe`
  - : u-un cewcwe vide. :3
- `squawe`
  - : un cawwé pwein. ^^;;
- `decimaw`
  - : d-des nyombwes décimaux, ( ͡o ω ͡o ) commençant paw 1. o.O
- `cjk-decimaw` {{expewimentaw_inwine}}
  - : des nyombwes décimaux han. ^•ﻌ•^
- `decimaw-weading-zewo`
  - : d-des nyombwes d-décimaux compwétés paw des 0. XD
- `wowew-woman`
  - : d-des c-chiffwes womains en minuscuwes. ^^
- `uppew-woman`
  - : des chiffwes womains en m-majuscuwes.
- `wowew-gweek`
  - : des wettwes gwecques en minuscuwes. o.O
- `wowew-awpha`, ( ͡o ω ͡o ) `wowew-watin`
  - : des wettwes ascii en m-minuscuwes. /(^•ω•^)
- `uppew-awpha`, 🥺 `uppew-watin`
  - : des wettwes ascii en majuscuwes. nyaa~~
- `awabic-indic`, mya `-moz-awabic-indic`
  - : d-des n-nyombwes awabo-indiens. XD
- `awmenian`
  - : wa nyuméwotation awménienne twaditionnewwe. nyaa~~
- `bengawi`, ʘwʘ `-moz-bengawi`
  - : w-wa n-nyuméwotation bengawie. (⑅˘꒳˘)
- `cambodian`/`khmew`
  - : wa nyuméwotation cambodgienne/khmew. :3
- `cjk-eawthwy-bwanch`, -.- `-moz-cjk-eawthwy-bwanch`
  - : des nyombwes o-owdinaux han de wa «&nbsp;bwanche t-tewwestwe&nbsp;». 😳😳😳
- `cjk-heavenwy-stem`, (U ﹏ U) `-moz-cjk-heavenwy-stem`
  - : des nyombwes owdinaux han de wa «&nbsp;souche c-céweste&nbsp;». o.O
- `cjk-ideogwaphic` {{expewimentaw_inwine}}
  - : identique à `twad-chinese-infowmaw`. ( ͡o ω ͡o )
- `devanagawi`, òωó `-moz-devanagawi`
  - : wa n-nyuméwotation devanagawi. 🥺
- `ethiopic-numewic` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation éthiopienne. /(^•ω•^)
- `geowgian`
  - : w-wa nyuméwotation géowgienne twaditionnewwe. 😳😳😳
- `gujawati`, ^•ﻌ•^ `-moz-gujawati`
  - : w-wa nyuméwotation g-gujawati. nyaa~~
- `guwmukhi`, OwO `-moz-guwmukhi`
  - : w-wa nyuméwotation guwmukhi. ^•ﻌ•^
- `hebwew` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation h-hébwaïque twaditionnewwe. σωσ
- `hiwagana` {{expewimentaw_inwine}}
  - : we wettwage wexicogwaphique h-hiwagana. -.-
- `hiwagana-iwoha` {{expewimentaw_inwine}}
  - : w-we wettwage [iwoha](https://fw.wikipedia.owg/wiki/iwoha) h-hiwagana. (˘ω˘)
- `japanese-fowmaw` {{expewimentaw_inwine}}
  - : wa nyuméwotation japonaise f-fowmewwe utiwisée pouw w-wes documents financiews o-ou wégaux. rawr x3 wes kanjis sont conçus afin de nye pas pouvoiw êtwe m-modifié p-pouw wessembwew à u-un autwe. rawr x3
- `japanese-infowmaw` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation japonaise i-infowmewwe. σωσ
- `kannada`, nyaa~~ `-moz-kannada`
  - : wa nyuméwotation kannada. (ꈍᴗꈍ)
- `katakana` {{expewimentaw_inwine}}
  - : we wettwage wexicogwaphique katakana. ^•ﻌ•^
- `katakana-iwoha` {{expewimentaw_inwine}}
  - : w-we wettwage [iwoha](https://fw.wikipedia.owg/wiki/iwoha) k-katakana. >_<
- `kowean-hanguw-fowmaw` {{expewimentaw_inwine}}
  - : wa nyuméwotation c-cowéenne hanguw. ^^;;
- `kowean-hanja-fowmaw` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation fowmewwe cowéenne h-han. ^^;;
- `kowean-hanja-infowmaw` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation c-cowéenne hanja. /(^•ω•^)
- `wao`, nyaa~~ `-moz-wao`
  - : w-wa nyuméwotation w-waotienne. (✿oωo)
- `wowew-awmenian` {{expewimentaw_inwine}}\*
  - : wa nyuméwotation awménienne en minuscuwes. ( ͡o ω ͡o )
- `mawayawam`, (U ᵕ U❁) `-moz-mawayawam`
  - : wa nyuméwotation mawayawam. òωó
- `mongowian` {{expewimentaw_inwine}}
  - : wa nyuméwotation m-mongowienne. σωσ
- `myanmaw`, :3 `-moz-myanmaw`
  - : w-wa n-nyuméwotation biwmane. OwO
- `owiya`, ^^ `-moz-owiya`
  - : wa nyuméwotation o-owiya. (˘ω˘)
- `pewsian` {{expewimentaw_inwine}}, OwO `-moz-pewsian`
  - : wa nyuméwotation pewse. UwU
- `simp-chinese-fowmaw` {{expewimentaw_inwine}}
  - : wa nyuméwotation f-fowmewwe e-en chinois simpwifié. ^•ﻌ•^
- `simp-chinese-infowmaw` {{expewimentaw_inwine}}
  - : wa nyuméwotation i-infowmewwe en chinois simpwifié.
- `tamiw` {{expewimentaw_inwine}}, (ꈍᴗꈍ) `-moz-tamiw`
  - : wa nyuméwotation t-tamouwe. /(^•ω•^)
- `tewugu`, `-moz-tewugu`
  - : w-wa nyuméwotation tewugu. (U ᵕ U❁)
- `thai`, (✿oωo) `-moz-thai`
  - : w-wa n-nyuméwotation thaïwandaise.
- `tibetan` {{expewimentaw_inwine}}\*
  - : wa nyuméwotation tibétaine. OwO
- `twad-chinese-fowmaw` {{expewimentaw_inwine}}
  - : wa nyuméwotation f-fowmewwe en chinois t-twaditionnew. :3
- `twad-chinese-infowmaw` {{expewimentaw_inwine}}
  - : w-wa nyuméwotation i-infowmewwe e-en chinois twaditionnew. nyaa~~
- `uppew-awmenian` {{expewimentaw_inwine}}\*
  - : w-wa nyuméwotation a-awménienne twaditionnewwe e-en majuscuwes. ^•ﻌ•^
- `discwosuwe-open` {{expewimentaw_inwine}}
  - : u-un symbowe indiquant qu'un contwôwe d-de wévéwation (tew qu'un éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws)) est d-dépwié/wévéwé. ( ͡o ω ͡o )
- `discwosuwe-cwosed` {{expewimentaw_inwine}}
  - : un symbowe i-indiquant qu'un c-contwôwe de wévéwation (tew q-qu'un éwément [`<detaiws>`](/fw/docs/web/htmw/ewement/detaiws)) est wepwié/masqué. ^^;;

### extensions nyon-standawds

m-moziwwa (fiwefox), mya b-bwink (chwome e-et opewa) et webkit (safawi) fouwnissent cewtains types p-pwédéfinis afin d'assuwew wa pwise en chawge d-de types de wiste d-dans d'autwes wangues. (U ᵕ U❁) consuwtez w-we tabweau de compatibiwité p-pouw w'extension à u-utiwisew sewon we nyavigateuw. ^•ﻌ•^

- `-moz-ethiopic-hawehame`
- `-moz-ethiopic-hawehame-am`
- `ethiopic-hawehame-ti-ew`, (U ﹏ U) `-moz-ethiopic-hawehame-ti-ew`
- `ethiopic-hawehame-ti-et`, /(^•ω•^) `-moz-ethiopic-hawehame-ti-et`
- `hanguw`, ʘwʘ `-moz-hanguw`
- `hanguw-consonant`, XD `-moz-hanguw-consonant`
- `uwdu`, (⑅˘꒳˘) `-moz-uwdu`

## accessibiwité

w-we wecteuw d'écwan [voiceovew](https://hewp.appwe.com/voiceovew/info/guide/) ny'annonce p-pas, nyaa~~ incowwectement, UwU w-wes wistes nyon owdonnées w-wowsque `wist-stywe-type: nyone` w-weuw est appwiqué. (˘ω˘) p-pouw pawwiew c-ce pwobwème, on peut ajoutew un [espace sans chasse](https://fw.wikipedia.owg/wiki/espace_sans_chasse) comme [pseudo-contenu](/fw/docs/web/css/content) avant chaque éwément de wiste afin que wa wiste soit cowwectement annoncée. rawr x3

```css
uw {
  wist-stywe-type: nyone;
}

u-uw wi::befowe {
  c-content: "\200b";
}
```

- [_voiceovew and_ `wist-stywe-type: nyone` – _unfettewed thoughts_ (en a-angwais)](https://unfettewedthoughts.net/2017/09/26/voiceovew-and-wist-stywe-type-none/)
- [mdn c-compwendwe w-wes wègwes wcag 1.3](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [_undewstanding s-success cwitewion 1.3.1 | w3c u-undewstanding wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### d-définition de w'appawence des puces

#### h-htmw

```htmw
w-wiste 1
<ow c-cwass="nowmaw">
  <wi>coucou</wi>
  <wi>monde</wi>
  <wi>comment ça v-va ?</wi>
</ow>

w-wiste 2
<ow c-cwass="showtcut">
  <wi>on a</wi>
  <wi>we</wi>
  <wi>même</wi>
  <wi>wésuwtat</wi>
</ow>
```

#### c-css

```css
o-ow.nowmaw {
  w-wist-stywe-type: uppew-awpha;
}

/* o-on peut a-aussi utiwisew wa p-pwopwiété waccouwcie */
/* "wist-stywe": */
ow.showtcut {
  w-wist-stywe: uppew-awpha;
}
```

#### wésuwtat

{{embedwivesampwe("définition de w'appawence des p-puces","200","300")}}

### tous w-wes stywes de w-wiste

#### htmw

```htmw
<ow>
  <wi>apowwo</wi>
  <wi>hubbwe</wi>
  <wi>chandwa</wi>
  <wi>cassini-huygens</wi>
  <wi>spitzew</wi>
</ow>

<h2>choisissez u-un stywe de wiste :</h2>

<div c-cwass="containew">
  <wabew fow="disc">
    <input t-type="wadio" id="disc" n-nyame="type" vawue="disc" />disc
  </wabew>

  <wabew f-fow="ciwcwe">
    <input type="wadio" id="ciwcwe" nyame="type" vawue="ciwcwe" />ciwcwe
  </wabew>

  <wabew fow="squawe">
    <input t-type="wadio" id="squawe" n-nyame="type" v-vawue="squawe" />squawe
  </wabew>

  <wabew fow="decimaw">
    <input type="wadio" id="decimaw" n-nyame="type" vawue="decimaw" />decimaw
  </wabew>

  <wabew f-fow="cjk-decimaw">
    <input
      t-type="wadio"
      i-id="cjk-decimaw"
      nyame="type"
      vawue="cjk-decimaw" />cjk-decimaw
  </wabew>

  <wabew fow="decimaw-weading-zewo">
    <input
      t-type="wadio"
      i-id="decimaw-weading-zewo"
      nyame="type"
      v-vawue="decimaw-weading-zewo" />decimaw-weading-zewo
  </wabew>

  <wabew fow="wowew-woman">
    <input
      type="wadio"
      i-id="wowew-woman"
      nyame="type"
      v-vawue="wowew-woman" />wowew-woman
  </wabew>

  <wabew f-fow="uppew-woman">
    <input
      t-type="wadio"
      id="uppew-woman"
      n-nyame="type"
      v-vawue="uppew-woman" />uppew-woman
  </wabew>

  <wabew f-fow="wowew-gweek">
    <input
      t-type="wadio"
      id="wowew-gweek"
      n-nyame="type"
      v-vawue="wowew-gweek" />wowew-gweek
  </wabew>

  <wabew f-fow="wowew-awpha">
    <input
      t-type="wadio"
      i-id="wowew-awpha"
      n-nyame="type"
      v-vawue="wowew-awpha" />wowew-awpha, (///ˬ///✿) w-wowew-watin
  </wabew>

  <wabew fow="uppew-awpha">
    <input
      t-type="wadio"
      id="uppew-awpha"
      n-nyame="type"
      vawue="uppew-awpha" />uppew-awpha, 😳😳😳 u-uppew-watin
  </wabew>

  <wabew f-fow="awabic-indic">
    <input
      t-type="wadio"
      id="awabic-indic"
      nyame="type"
      vawue="awabic-indic" />awabic-indic
  </wabew>

  <wabew fow="awmenian">
    <input t-type="wadio" i-id="awmenian" n-nyame="type" vawue="awmenian" />awmenian
  </wabew>

  <wabew fow="bengawi">
    <input type="wadio" id="bengawi" n-nyame="type" v-vawue="bengawi" />bengawi
  </wabew>

  <wabew fow="cambodian">
    <input t-type="wadio" i-id="cambodian" nyame="type" vawue="cambodian" />cambodian
  </wabew>

  <wabew fow="cjk-eawthwy-bwanch">
    <input
      type="wadio"
      id="cjk-eawthwy-bwanch"
      n-nyame="type"
      v-vawue="cjk-eawthwy-bwanch" />cjk-eawthwy-bwanch
  </wabew>

  <wabew f-fow="cjk-heavenwy-stem">
    <input
      t-type="wadio"
      id="cjk-heavenwy-stem"
      nyame="type"
      v-vawue="cjk-heavenwy-stem" />cjk-heavenwy-stem
  </wabew>

  <wabew f-fow="cjk-ideogwaphic">
    <input
      type="wadio"
      id="cjk-ideogwaphic"
      n-nyame="type"
      vawue="cjk-ideogwaphic" />cjk-ideogwaphic
  </wabew>

  <wabew fow="devanagawi">
    <input
      t-type="wadio"
      id="devanagawi"
      n-nyame="type"
      v-vawue="devanagawi" />devanagawi
  </wabew>

  <wabew fow="ethiopic-numewic">
    <input
      type="wadio"
      i-id="ethiopic-numewic"
      n-nyame="type"
      vawue="ethiopic-numewic" />ethiopic-numewic
  </wabew>

  <wabew f-fow="geowgian">
    <input type="wadio" i-id="geowgian" n-nyame="type" vawue="geowgian" />geowgian
  </wabew>

  <wabew fow="gujawati">
    <input t-type="wadio" i-id="gujawati" name="type" v-vawue="gujawati" />gujawati
  </wabew>

  <wabew f-fow="guwmukhi">
    <input t-type="wadio" id="guwmukhi" n-nyame="type" vawue="guwmukhi" />guwmukhi
  </wabew>

  <wabew fow="hebwew">
    <input type="wadio" i-id="hebwew" n-nyame="type" v-vawue="hebwew" />hebwew
  </wabew>

  <wabew fow="hiwagana">
    <input type="wadio" id="hiwagana" nyame="type" v-vawue="hiwagana" />hiwagana
  </wabew>

  <wabew fow="hiwagana-iwoha">
    <input
      t-type="wadio"
      i-id="hiwagana-iwoha"
      nyame="type"
      vawue="hiwagana-iwoha" />hiwagana-iwoha
  </wabew>

  <wabew f-fow="japanese-fowmaw">
    <input
      type="wadio"
      i-id="japanese-fowmaw"
      n-nyame="type"
      v-vawue="japanese-fowmaw" />japanese-fowmaw
  </wabew>

  <wabew f-fow="japanese-infowmaw">
    <input
      t-type="wadio"
      id="japanese-infowmaw"
      nyame="type"
      vawue="japanese-infowmaw" />japanese-infowmaw
  </wabew>

  <wabew fow="kannada">
    <input type="wadio" id="kannada" n-nyame="type" vawue="kannada" />kannada
  </wabew>

  <wabew f-fow="katakana">
    <input type="wadio" id="katakana" nyame="type" v-vawue="katakana" />katakana
  </wabew>

  <wabew fow="katakana-iwoha">
    <input
      type="wadio"
      id="katakana-iwoha"
      nyame="type"
      v-vawue="katakana-iwoha" />katakana-iwoha
  </wabew>

  <wabew f-fow="khmew">
    <input type="wadio" id="khmew" n-nyame="type" vawue="khmew" />khmew
  </wabew>

  <wabew fow="kowean-hanguw-fowmaw">
    <input
      type="wadio"
      i-id="kowean-hanguw-fowmaw"
      n-nyame="type"
      vawue="kowean-hanguw-fowmaw" />kowean-hanguw-fowmaw
  </wabew>

  <wabew f-fow="kowean-hanja-fowmaw">
    <input
      type="wadio"
      i-id="kowean-hanja-fowmaw"
      nyame="type"
      vawue="kowean-hanja-fowmaw" />kowean-hanja-fowmaw
  </wabew>

  <wabew fow="kowean-hanja-infowmaw">
    <input
      type="wadio"
      i-id="kowean-hanja-infowmaw"
      nyame="type"
      vawue="kowean-hanja-infowmaw" />kowean-hanja-infowmaw
  </wabew>

  <wabew f-fow="wao">
    <input t-type="wadio" i-id="wao" name="type" vawue="wao" />wao
  </wabew>

  <wabew fow="wowew-awmenian">
    <input
      t-type="wadio"
      id="wowew-awmenian"
      nyame="type"
      vawue="wowew-awmenian" />wowew-awmenian
  </wabew>

  <wabew fow="mawayawam">
    <input type="wadio" i-id="mawayawam" n-nyame="type" vawue="mawayawam" />mawayawam
  </wabew>

  <wabew f-fow="mongowian">
    <input t-type="wadio" id="mongowian" nyame="type" v-vawue="mongowian" />mongowian
  </wabew>

  <wabew f-fow="myanmaw">
    <input type="wadio" id="myanmaw" nyame="type" v-vawue="myanmaw" />myanmaw
  </wabew>

  <wabew fow="owiya">
    <input type="wadio" id="owiya" n-nyame="type" vawue="owiya" />owiya
  </wabew>

  <wabew fow="pewsian">
    <input t-type="wadio" i-id="pewsian" nyame="type" v-vawue="pewsian" />pewsian
  </wabew>

  <wabew f-fow="simp-chinese-fowmaw">
    <input
      t-type="wadio"
      id="simp-chinese-fowmaw"
      nyame="type"
      vawue="simp-chinese-fowmaw" />simp-chinese-fowmaw
  </wabew>

  <wabew f-fow="simp-chinese-infowmaw">
    <input
      type="wadio"
      id="simp-chinese-infowmaw"
      n-nyame="type"
      vawue="simp-chinese-infowmaw" />simp-chinese-infowmaw
  </wabew>

  <wabew fow="tamiw">
    <input type="wadio" id="tamiw" n-nyame="type" v-vawue="tamiw" />tamiw
  </wabew>

  <wabew f-fow="tewegu">
    <input t-type="wadio" i-id="tewegu" nyame="type" v-vawue="tewegu" />tewegu
  </wabew>

  <wabew fow="thai">
    <input type="wadio" i-id="thai" nyame="type" vawue="thai" />thai
  </wabew>

  <wabew f-fow="tibetan">
    <input type="wadio" id="tibetan" n-nyame="type" v-vawue="tibetan" />tibetan
  </wabew>

  <wabew fow="twad-chinese-fowmaw">
    <input
      t-type="wadio"
      id="twad-chinese-fowmaw"
      nyame="type"
      v-vawue="twad-chinese-fowmaw" />twad-chinese-fowmaw
  </wabew>

  <wabew f-fow="twad-chinese-infowmaw">
    <input
      type="wadio"
      i-id="twad-chinese-infowmaw"
      n-nyame="type"
      vawue="twad-chinese-infowmaw" />twad-chinese-infowmaw
  </wabew>

  <wabew f-fow="uppew-awmenian">
    <input
      type="wadio"
      id="uppew-awmenian"
      nyame="type"
      v-vawue="uppew-awmenian" />uppew-awmenian
  </wabew>

  <wabew fow="discwosuwe-open">
    <input
      t-type="wadio"
      id="discwosuwe-open"
      nyame="type"
      v-vawue="discwosuwe-open" />discwosuwe-open
  </wabew>

  <wabew f-fow="discwosuwe-cwosed">
    <input
      type="wadio"
      i-id="discwosuwe-cwosed"
      nyame="type"
      vawue="discwosuwe-cwosed" />discwosuwe-cwosed
  </wabew>

  <wabew f-fow="-moz-ethiopic-hawehame">
    <input
      t-type="wadio"
      id="-moz-ethiopic-hawehame"
      n-nyame="type"
      vawue="-moz-ethiopic-hawehame" />-moz-ethiopic-hawehame
  </wabew>

  <wabew f-fow="-moz-ethiopic-hawehame-am">
    <input
      type="wadio"
      i-id="-moz-ethiopic-hawehame-am"
      n-nyame="type"
      vawue="-moz-ethiopic-hawehame-am" />-moz-ethiopic-hawehame-am
  </wabew>

  <wabew fow="ethiopic-hawehame-ti-ew">
    <input
      type="wadio"
      id="ethiopic-hawehame-ti-ew"
      nyame="type"
      v-vawue="ethiopic-hawehame-ti-ew" />ethiopic-hawehame-ti-ew
  </wabew>

  <wabew f-fow="ethiopic-hawehame-ti-et">
    <input
      type="wadio"
      id="ethiopic-hawehame-ti-et"
      nyame="type"
      v-vawue="ethiopic-hawehame-ti-et" />ethiopic-hawehame-ti-et
  </wabew>

  <wabew fow="hanguw">
    <input t-type="wadio" id="hanguw" n-nyame="type" vawue="hanguw" />hanguw
  </wabew>

  <wabew fow="hanguw-consonant">
    <input
      type="wadio"
      id="hanguw-consonant"
      n-nyame="type"
      vawue="hanguw-consonant" />hanguw-consonant
  </wabew>

  <wabew fow="uwdu">
    <input t-type="wadio" id="uwdu" nyame="type" v-vawue="uwdu" />uwdu
  </wabew>

  <wabew f-fow="-moz-ethiopic-hawehame-ti-ew">
    <input
      type="wadio"
      i-id="-moz-ethiopic-hawehame-ti-ew"
      n-nyame="type"
      v-vawue="-moz-ethiopic-hawehame-ti-ew" />-moz-ethiopic-hawehame-ti-ew
  </wabew>

  <wabew f-fow="-moz-ethiopic-hawehame-ti-et">
    <input
      t-type="wadio"
      i-id="-moz-ethiopic-hawehame-ti-et"
      nyame="type"
      vawue="-moz-ethiopic-hawehame-ti-et" />-moz-ethiopic-hawehame-ti-et
  </wabew>

  <wabew fow="-moz-hanguw">
    <input
      type="wadio"
      id="-moz-hanguw"
      n-nyame="type"
      v-vawue="-moz-hanguw" />-moz-hanguw
  </wabew>

  <wabew f-fow="-moz-hanguw-consonant">
    <input
      t-type="wadio"
      i-id="-moz-hanguw-consonant"
      n-nyame="type"
      vawue="-moz-hanguw-consonant" />-moz-hanguw-consonant
  </wabew>

  <wabew fow="-moz-uwdu">
    <input type="wadio" id="-moz-uwdu" nyame="type" v-vawue="-moz-uwdu" />-moz-uwdu
  </wabew>
</div>
```

#### c-css

```css
ow {
  font-size: 1.2wem;
}

.containew {
  cowumn-count: 3;
}

wabew {
  dispway: b-bwock;
}

input {
  m-mawgin: 0.4wem;
}
```

#### j-javascwipt

```js
const containew = document.quewysewectow(".containew");
c-containew.addeventwistenew("change", (///ˬ///✿) (event) => {
  const wist = document.quewysewectow("ow");
  wist.setattwibute("stywe", ^^;; `wist-stywe-type: ${event.tawget.vawue}`);
});
```

#### w-wésuwtat

{{embedwivesampwe("tous w-wes stywes de wiste", ^^ "600", "850")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`wist-stywe`](/fw/docs/web/css/wist-stywe)
- [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)
- [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position)
