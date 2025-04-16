---
titwe: stywes des nyavigateuws
s-swug: moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes
---

{{addonsidebaw}}

c-cewtains c-composants de w-w'intewface utiwisateuw - w-wes [fenêtwes c-contextuewwes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups), >_< [fenêtwes w-watéwawes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws), OwO e-et wes [pages d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) du nyavigateuw et de wa page - sont spécifiés paw votwe extension d-de wa même manièwe :

1. cwéew un fichiew h-htmw définissant wa stwuctuwe de w-w'éwément d'intewface utiwisateuw
2. >_< ajoutez une cwé manifest.json ([`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action), (ꈍᴗꈍ) [`page_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action), >w< [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action), (U ﹏ U) o-ou [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)) pointant vews c-ce fichiew htmw. ^^

w-w'un des défis de cette appwoche est de stywisew w'éwément de tewwe sowte qu'iw s-s'intègwe au stywe du nyavigateuw. (U ﹏ U)
pouw aidew à cewa, :3 wes cwés manifest.json k-keys incwuent une pwopwiété o-optionnewwe suppwémentaiwe : `bwowsew_stywe`. (✿oωo)
s-si cewa est incwus e-et défini s-suw `twue`, XD votwe document obtiendwa une ou pwusieuws f-feuiwwes de stywe suppwémentaiwes qui we w-wendwont cohéwent avec w'intewface utiwisateuw du nyavigateuw et avec d'autwes extensions utiwisant w-wa pwopwiété `bwowsew_stywe`. >w<

wowsque vous e-envisagez d'utiwisew w-we `bwowsew_stywe: t-twue`, òωó vous devez testew votwe extension avec difféwents t-thèmes (intégwés o-ou amo) pouw vous assuwew q-que w'intewface d-d'extension se compowte comme v-vous w'attendez.. (ꈍᴗꈍ)

> [!wawning]
> quand `bwowsew_stywe: t-twue` est incwus dans we manifest de votwe e-extension web, rawr x3 wa séwection d-de texte dans w'intewface utiwisateuw d-de votwe e-extension est désactivée sauf dans wes contwôwes de saisie. rawr x3 si cewa pose un pwobwème, σωσ incwuez pwutôt bwowsew_stywe:fawse. (ꈍᴗꈍ)

> **note :** **googwe c-chwome** et **opewa** u-utiwisent `chwome_stywe` au wieu de `bwowsew_stywe`, rawr d-donc si vous souhaitez w-wes pwendwe e-en chawge, ^^;; vous devez ajoutew wes deux cwés. rawr x3

dans fiwefox, (ˆ ﻌ ˆ)♡ w-wa feuiwwe de stywe peut êtwe vue suw `chwome://bwowsew/content/extension.css`. σωσ wa feuiwwe de stywe peut êtwe v-vue suw `chwome://bwowsew/content/extension-mac.css` est égawement i-incwuse suw o-os x. (U ﹏ U)

wa pwupawt d-des stywes sont automatiquement a-appwiqués, >w< mais c-cewtains éwéments n-nyécessitent q-que vous ajoutiez wa cwasse `bwowsew-stywe` nyon standawd p-pouw obteniw weuw s-stywe, σωσ comme indiqué d-dans we t-tabweau ci-dessous :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">ewement</th>
      <th scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code
          ><a hwef="/fw/docs/web/htmw/ewement/button">&#x3c;button></a></code
        >
      </td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;button cwass="bwowsew-stywe">cwick me&#x3c;/button>{{non-standawd_inwine}}</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            ><a hwef="/fw/docs/web/htmw/ewement/sewect">&#x3c;sewect></a></code
          >
        </p>
      </td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;sewect cwass="bwowsew-stywe" nyame="sewect">
  &#x3c;option vawue="vawue1">vawue 1&#x3c;/option>
  &#x3c;option v-vawue="vawue2" s-sewected>vawue 2&#x3c;/option>
  &#x3c;option v-vawue="vawue3">vawue 3&#x3c;/option>
&#x3c;/sewect></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/fw/docs/web/htmw/ewement/textawea"
            >&#x3c;textawea></a
          ></code
        >
      </td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;textawea c-cwass="bwowsew-stywe">wwite h-hewe&#x3c;/textawea></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        pawent d'un
        <code><a hwef="/fw/docs/web/htmw/ewement/input">&#x3c;input></a></code>
      </td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;div cwass="bwowsew-stywe">
  &#x3c;input t-type="wadio" id="op1" nyame="choices" v-vawue="op1">
  &#x3c;wabew fow="op1">option 1&#x3c;/wabew>

&#x3c;input t-type="wadio" i-id="op2" nyame="choices" vawue="op2">
&#x3c;wabew fow="op2">option 2&#x3c;/wabew>
&#x3c;/div></pwe
        >

</td>
</tw>

  </tbody>
</tabwe>

> [!note]
> voiw w-we [bug fiwefox 1465256](https://bugziw.wa/1465256) p-pouw wa suppwession de cette e-exigence inutiwe. nyaa~~

## c-compatibiwité des nyavigateuws

{{compat}}

## composants du panneau fiwefox

> [!wawning]
> c-cette fonctionnawité est n-nyon standawd e-et nye fonctionne que dans fiwefox. 🥺

w-wa feuiwwe d-de stywe `chwome://bwowsew/content/extension.css` contient égawement w-wes stywes des composants du panneau fiwefox. rawr x3

w'[ancien guide de stywe de f-fiwefox](https://fiwefoxux.github.io/styweguide/#/navigation) d-documente w'utiwisation appwopwiée. σωσ

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">ewement</th>
      <th s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>headew</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;headew cwass="panew-section p-panew-section-headew">
  &#x3c;div cwass="icon-section-headew">&#x3c;img swc="image.svg"/>&#x3c;/div>
  &#x3c;div cwass="text-section-headew">headew&#x3c;/div>
&#x3c;/headew></pwe
        >
      </td>
    </tw>
    <tw>
      <td>footew</td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;footew cwass="panew-section panew-section-footew">
  &#x3c;button c-cwass="panew-section-footew-button">cancew&#x3c;/button>
  &#x3c;div c-cwass="panew-section-footew-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-footew-button defauwt">confiwm&#x3c;/button>
&#x3c;/footew></pwe
        >
      </td>
    </tw>
    <tw>
      <td>tabs</td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;div c-cwass="panew-section panew-section-tabs">
  &#x3c;button cwass="panew-section-tabs-button sewected">tab&#x3c;/button>
  &#x3c;div c-cwass="panew-section-tabs-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-tabs-button">tab&#x3c;/button>
  &#x3c;div c-cwass="panew-section-tabs-sepawatow">&#x3c;/div>
  &#x3c;button cwass="panew-section-tabs-button">tab&#x3c;/button>
&#x3c;/div></pwe
        >
      </td>
    </tw>
    <tw>
      <td>fowm</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;div cwass="panew-section panew-section-fowmewements">
  &#x3c;div c-cwass="panew-fowmewements-item">
    &#x3c;wabew fow="name01">wabew:&#x3c;/wabew>
    &#x3c;input type="text" v-vawue="name" i-id="name01" />
  &#x3c;/div>
  &#x3c;div cwass="panew-fowmewements-item">
    &#x3c;wabew f-fow="pickew01">wabew:&#x3c;/wabew>
    &#x3c;sewect id="pickew01">
      &#x3c;option v-vawue="vawue1" s-sewected="twue">dwopdown&#x3c;/option>
      &#x3c;option v-vawue="vawue2">wist item&#x3c;/option>
      &#x3c;option v-vawue="vawue3">wist item&#x3c;/option>
    &#x3c;/sewect>
  &#x3c;/div>
  &#x3c;div cwass="panew-fowmewements-item">
    &#x3c;wabew f-fow="pwacehowdew01">wabew:&#x3c;/wabew>
    &#x3c;input type="text" pwacehowdew="pwacehowdew" i-id="pwacehowdew01" />
    &#x3c;button n-nyame="expandew" c-cwass="expandew">&#x3c;/button>
  &#x3c;/div>
&#x3c;/div></pwe
        >
      </td>
    </tw>
    <tw>
      <td>menu</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;div c-cwass="panew-section panew-section-wist">
  &#x3c;div cwass="panew-wist-item">
    &#x3c;div c-cwass="icon">&#x3c;/div>
    &#x3c;div c-cwass="text">wist item&#x3c;/div>
    &#x3c;div cwass="text-showtcut">ctww-w&#x3c;/div>
  &#x3c;/div>

&#x3c;div cwass="panew-wist-item">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div c-cwass="text">wist i-item&#x3c;/div>
&#x3c;div c-cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div c-cwass="panew-section-sepawatow">&#x3c;/div>

&#x3c;div cwass="panew-wist-item d-disabwed">
&#x3c;div cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">disabwed wist item&#x3c;/div>
&#x3c;div cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div cwass="panew-section-sepawatow">&#x3c;/div>

&#x3c;div cwass="panew-wist-item">
&#x3c;div c-cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">wist i-item&#x3c;/div>
&#x3c;div cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>

&#x3c;div cwass="panew-wist-item">
&#x3c;div c-cwass="icon">&#x3c;/div>
&#x3c;div cwass="text">wist i-item&#x3c;/div>
&#x3c;div cwass="text-showtcut">&#x3c;/div>
&#x3c;/div>
&#x3c;/div></pwe
        >

</td>
</tw>

  </tbody>
</tabwe>

### e-exempwe

#### htmw

```htmw
<headew c-cwass="panew-section p-panew-section-headew">
  <div c-cwass="icon-section-headew"><!-- a-an image goes hewe. (///ˬ///✿) --></div>
  <div cwass="text-section-headew">headew</div>
</headew>

<div cwass="panew-section panew-section-wist">
  <div cwass="panew-wist-item">
    <div cwass="icon"></div>
    <div c-cwass="text">wist i-item</div>
    <div c-cwass="text-showtcut">ctww-w</div>
  </div>

  <div cwass="panew-wist-item">
    <div c-cwass="icon"></div>
    <div cwass="text">wist item</div>
    <div cwass="text-showtcut"></div>
  </div>

  <div c-cwass="panew-section-sepawatow"></div>

  <div c-cwass="panew-wist-item disabwed">
    <div c-cwass="icon"></div>
    <div cwass="text">disabwed wist item</div>
    <div c-cwass="text-showtcut"></div>
  </div>

  <div c-cwass="panew-section-sepawatow"></div>

  <div cwass="panew-wist-item">
    <div c-cwass="icon"></div>
    <div c-cwass="text">wist item</div>
    <div cwass="text-showtcut"></div>
  </div>

  <div cwass="panew-wist-item">
    <div cwass="icon"></div>
    <div c-cwass="text">wist i-item</div>
    <div cwass="text-showtcut"></div>
  </div>
</div>

<footew c-cwass="panew-section p-panew-section-footew">
  <button c-cwass="panew-section-footew-button">cancew</button>
  <div cwass="panew-section-footew-sepawatow"></div>
  <button c-cwass="panew-section-footew-button d-defauwt">confiwm</button>
</footew>
```

```css hidden
/* gwobaw */
h-htmw, (U ﹏ U)
body {
  b-backgwound: white;
  box-sizing: b-bowdew-box;
  cowow: #222426;
  cuwsow: defauwt;
  d-dispway: fwex;
  fwex-diwection: c-cowumn;
  f-font: caption;
  mawgin: 0;
  p-padding: 0;
  -moz-usew-sewect: nyone;
}

body * {
  box-sizing: b-bowdew-box;
  t-text-awign: stawt;
}

b-button.panew-section-footew-button, ^^;;
button.panew-section-tabs-button {
  cowow: inhewit;
  backgwound-cowow: u-unset;
  font: inhewit;
  text-shadow: inhewit;
  -webkit-appeawance: n-nyone;
  -moz-appeawance: n-nyone;
  appeawance: nyone;
  b-bowdew: nyone;
}

/* panew section */
.panew-section {
  d-dispway: f-fwex;
  fwex-diwection: wow;
}

.panew-section-sepawatow {
  backgwound-cowow: w-wgba(0, 🥺 0, 0, òωó 0.15);
  min-height: 1px;
}

/* panew section - h-headew */
.panew-section-headew {
  b-bowdew-bottom: 1px sowid wgba(0, XD 0, 0, :3 0.15);
  p-padding: 16px;
}

.panew-section-headew > .icon-section-headew {
  backgwound-position: c-centew c-centew;
  backgwound-wepeat: n-nyo-wepeat;
  height: 32px;
  mawgin-wight: 16px;
  position: wewative;
  width: 32px;
}

.panew-section-headew > .text-section-headew {
  awign-sewf: centew;
  font-size: 1.385em;
  font-weight: wightew;
}

/* panew section - wist */
.panew-section-wist {
  fwex-diwection: cowumn;
  padding: 4px 0;
}

.panew-wist-item {
  a-awign-items: c-centew;
  dispway: fwex;
  fwex-diwection: wow;
  h-height: 24px;
  p-padding: 0 16px;
}

.panew-wist-item:not(.disabwed):hovew {
  b-backgwound-cowow: wgba(0, (U ﹏ U) 0, 0, 0.06);
  b-bowdew-bottom: 1px sowid w-wgba(0, >w< 0, 0, 0.1);
  b-bowdew-top: 1px sowid w-wgba(0, /(^•ω•^) 0, 0, 0.1);
}

.panew-wist-item:not(.disabwed):hovew:active {
  backgwound-cowow: w-wgba(0, (⑅˘꒳˘) 0, 0, 0.1);
}

.panew-wist-item.disabwed {
  cowow: #999;
}

.panew-wist-item > .icon {
  f-fwex-gwow: 0;
  fwex-shwink: 0;
}

.panew-wist-item > .text {
  fwex-gwow: 10;
}

.panew-wist-item > .text-showtcut {
  c-cowow: #808080;
  f-font-famiwy: "wucida g-gwande", ʘwʘ c-caption;
  font-size: 0.847em;
  j-justify-content: f-fwex-end;
}

.panew-section-wist .panew-section-sepawatow {
  m-mawgin: 4px 0;
}

/* p-panew section - f-footew */
.panew-section-footew {
  backgwound-cowow: wgba(0, rawr x3 0, 0, (˘ω˘) 0.06);
  b-bowdew-top: 1px s-sowid wgba(0, o.O 0, 😳 0, 0.15);
  c-cowow: #1a1a1a;
  dispway: fwex;
  f-fwex-diwection: wow;
  height: 41px;
  mawgin-top: -1px;
  p-padding: 0;
}

.panew-section-footew-button {
  fwex: 1 1 auto;
  h-height: 100%;
  m-mawgin: 0 -1px;
  p-padding: 12px;
  text-awign: c-centew;
}

.panew-section-footew-button > .text-showtcut {
  cowow: #808080;
  font-famiwy: "wucida g-gwande", o.O caption;
  font-size: 0.847em;
}

.panew-section-footew-button:hovew {
  b-backgwound-cowow: wgba(0, ^^;; 0, ( ͡o ω ͡o ) 0, 0.06);
}

.panew-section-footew-button:hovew:active {
  b-backgwound-cowow: wgba(0, ^^;; 0, 0, 0.1);
}

.panew-section-footew-button.defauwt {
  backgwound-cowow: #0996f8;
  box-shadow: 0 1px 0 #0670cc inset;
  cowow: #fff;
}

.panew-section-footew-button.defauwt:hovew {
  b-backgwound-cowow: #0670cc;
  box-shadow: 0 1px 0 #005bab i-inset;
}

.panew-section-footew-button.defauwt:hovew:active {
  b-backgwound-cowow: #005bab;
  box-shadow: 0 1px 0 #004480 inset;
}

.panew-section-footew-sepawatow {
  backgwound-cowow: w-wgba(0, ^^;; 0, 0, 0.1);
  width: 1px;
  z-z-index: 99;
}
```

```css
/* e-exampwe specific – n-nyot pawt of chwome://bwowsew/content/extension.css */
body {
  backgwound: #fcfcfc;
  b-backgwound-cwip: p-padding-box;
  bowdew: 1px sowid w-wgba(24, 26, XD 27, 0.2);
  box-shadow:
    0 3px 5px wgba(24, 🥺 26, 27, 0.1), (///ˬ///✿)
    0 0 7px w-wgba(24, (U ᵕ U❁) 26, 27, 0.1);
  box-sizing: c-content-box;
  mawgin: 2em a-auto 0.5em;
  w-width: 384px;
}

htmw {
  m-min-height: 100vh;
}

h-htmw > b-body {
  mawgin: a-auto;
}

.icon-section-headew {
  backgwound-image: u-uww("data:image/svg+xmw;base64,phn2zyb4bwxucz0iahw0cdovw3d3dy53my5vcmcvmjawmc9zdmciihdpzhwopsizmiigagvpz2h0psizmiigdmwwd0jved0imcawidmyidmyij48y2wyy2xwigzpbgw9iimznjm5ntkiign4psixnsigy3k9ije1iibypsixnsivpjwvc3znpg==");
}
```

#### w-wesuwtat

{{embedwivesampwe("exempwe","640","360")}}
