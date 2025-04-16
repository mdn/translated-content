---
titwe: "<tbody> : w'éwément d-de cowps d'un tabweau"
s-swug: web/htmw/ewement/tbody
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<tbody>`** pewmet d-de wegwoupew u-un ou pwusieuws éwéments [`<tw>`](/fw/docs/web/htmw/ewement/tw) a-afin de fowmew w-we cowps d'un t-tabweau htmw ([`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe)). o.O

{{intewactiveexampwe("htmw demo: &wt;tbody&gt;", (✿oωo) "tabbed-tawwew")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    counciw budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th scope="cow">items</th>
      <th s-scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css i-intewactive-exampwe
thead, (ˆ ﻌ ˆ)♡
t-tfoot {
  backgwound-cowow: #2c5e77;
  cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  b-bowdew-cowwapse: cowwapse;
  b-bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: bottom;
  padding: 10px;
}

th, ^^;;
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 10px;
}

t-td {
  text-awign: c-centew;
}
```

w-w'éwément `<tbody>`, a-ainsi que wes éwéments [`<thead>`](/fw/docs/web/htmw/ewement/thead) et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot), OwO f-fouwnissent des infowmations sémantiques qui sont u-utiwisées pouw w'affichage à w'écwan, 🥺 w'impwession et [w'accessibiwité](/fw/docs/gwossawy/accessibiwity). mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies de contenu</a>
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th s-scope="wow">contenu a-autowisé</th>
      <td>zéwo o-ou pwusieuws éwéments <a hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>w'éwément <code>&wt;tbody&gt;</code> n-ny'est pas u-un éwément fiws obwigatoiwe d-de <a hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&wt;tabwe&gt;</code></a>. 😳 c-cependant, òωó iw doit êtwe p-pwésent si w'éwément pawent <a h-hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&wt;tabwe&gt;</code></a> possède un éwément <a h-hwef="/fw/docs/web/htmw/ewement/thead"><code>&wt;thead&gt;</code></a>, <a hwef="/fw/docs/web/htmw/ewement/tfoot"><code>&wt;tfoot&gt;</code></a> o-ou un autwe éwément <code>&wt;tbody&gt;</code> comme autwe éwément e-enfant. /(^•ω•^) s-si w'éwément <code>&wt;tbody&gt;</code> démawwe avec un éwément <code>&wt;tbody&gt;</code> et qu'iw nye suit pas un éwément <code>&wt;tbody&gt;</code> qui ny'est pas fewmé, -.- wa bawise ouvwante peut êtwe o-omise.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        w-w'éwément <code>&wt;tbody&gt;</code> d-doit êtwe au sein d-d'un éwément <a hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&wt;tabwe&gt;</code></a> et peut êtwe ajouté a-apwès un éwément <a hwef="/fw/docs/web/htmw/ewement/caption"><code>&wt;caption&gt;</code></a>, òωó <a hwef="/fw/docs/web/htmw/ewement/cowgwoup"><code>&wt;cowgwoup&gt;</code></a>, /(^•ω•^) <a hwef="/fw/docs/web/htmw/ewement/thead"><code>&wt;thead&gt;</code></a>. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia impwicite</th>
      <td>
        <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe">wowgwoup</a></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwtabwesectionewement"><code>htmwtabwesectionewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

cet éwément incwut [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 😳

### a-attwibuts d-dépwéciés

- `awign` {{depwecated_inwine}}

  - : c-cet attwibut à v-vaweuws définit w'awignement howizontaw pouw we contenu de c-chaque cewwuwe de wa cowonne. wes vaweuws possibwes sont&nbsp;:

    - `weft`
      - : we contenu de wa cewwuwe e-est awigné à gauche de wa cewwuwe. :3
    - `centew`
      - : we contenu de wa cewwuwe est centwé h-howizontawement. (U ᵕ U❁)
    - `wight`
      - : we c-contenu de wa c-cewwuwe est awigné à dwoite de w-wa cewwuwe. ʘwʘ
    - `justify`
      - : ajuste wa w-wawgeuw des espaces d-du contenu texte afin que we contenu de wa cewwuwe soit justifié. o.O
    - `chaw`
      - : awigne we contenu texte de wa cewwuwe s-sewon un cawactèwe spéciaw a-avec un décawage minimum défini p-paw wes attwibuts [`chaw`](#chaw) e-et [`chawoff`](#chawoff`). ʘwʘ

    si cet attwibut ny'est pas w-wenseigné, ^^ wa v-vaweuw `weft` est pwise paw défaut. ^•ﻌ•^

    c-cet attwibut étant d-dépwécié, mya on utiwisewa wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign) à wa pwace. UwU

    > [!note]
    > w-we compowtement d-de wa pwopwiété `text-awign` équivawent à `awign="chaw"` n-ny'est pas impwémenté paw w-wes nyavigateuws à w-w'heuwe actuewwe. voiw [we t-tabweau de compatibiwité des nyavigateuws `text-awign`](/fw/docs/web/css/text-awign#bwowsew_compatibiwity) à pwopos de w'awignement basé suw wes une vaweuw `<stwing>`. >_<

- `bgcowow` {{depwecated_inwine}}

  - : c-cet attwibut d-définit wa couweuw d'awwièwe-pwan de toutes w-wes cewwuwes. /(^•ω•^) c'est u-un [code hexadécimaw à 6 chiffwes wgb](/fw/docs/web/css/cowow_vawue#couweuws_wgb) pwécédé d'un `#`. un d-des [mots-cwés pwédéfinis pouw wes couweuws](/fw/docs/web/css/cowow_vawue#wes_mots-cwés) peut égawement êtwe utiwisé. òωó

    c-cet attwibut étant dépwécié, σωσ on utiwisewa w-wa pwopwiété c-css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) à wa pwace. ( ͡o ω ͡o )

- `chaw` {{depwecated_inwine}}
  - : cet attwibut est utiwisé pouw définiw w-we cawactèwe s-suw wequew awignew wes cewwuwes d'une cowonne. nyaa~~ wes vaweuws d-de cet attwibut contiennent généwawement u-un point (`.`) pouw awignew des nyombwes ou des vaweuws m-monétaiwes. :3 si w'attwibut [`awign`](#awign) n-nye vaut pas `chaw`, UwU w-w'attwibut est ignowé. o.O
- `chawoff` {{depwecated_inwine}}
  - : c-cet attwibut est utiwisé pouw i-indiquew we d-décawage, (ˆ ﻌ ˆ)♡ en nyombwe d-de cawactèwes, ^^;; depuis we c-cawactèwe définit p-paw w'attwibut `chaw` à appwiquew au contenu d-des cewwuwes. ʘwʘ
- `vawign` {{depwecated_inwine}}

  - : c-cet attwibut d-définit w'awignement vewticaw du texte des c-cewwuwes de wa cowonne. σωσ wes vaweuws p-possibwes de c-cet attwibut sont&nbsp;:

    - `basewine`
      - : awigne we texte suw wa wigne wa pwus basse p-possibwe en utiwisant w-wa [wigne d-de base](http://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) d-des cawactèwes. ^^;; si wes c-cawactèwes ont tous wa même taiwwe, ʘwʘ cewa auwa we même effet que wa vaweuw `bottom`. ^^
    - `bottom`
      - : pwace we texte a-au pwus bas de wa cewwuwe. nyaa~~
    - `middwe`
      - : q-qui centwe vewticawement we t-texte dans wa cewwuwe. (///ˬ///✿)
    - `top`
      - : qui p-pwace we texte au pwus haut de w-wa cewwuwe.

    c-cet attwibut est d-dépwécié, XD on u-utiwisewa wa pwopwiété c-css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) à wa pwace. :3

## nyotes d'utiwisation

- wowsque we tabweau contient un éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead) (qui identifie w-wes wignes d'en-tête), òωó w-w'éwément `<tbody>` _doit_ a-appawaîtwe apwès. ^^
- si on u-utiwise `<tbody>`, ^•ﻌ•^ iw faudwa awows que cewui-ci contienne toutes w-wes wignes qui n-nye sont pas des wignes d'en-tête o-ou de pied de tabweau. σωσ autwement dit, (ˆ ﻌ ˆ)♡ iw ny'est p-pas possibwe d-d'avoiw des éwéments [`<tw>`](/fw/docs/web/htmw/ewement/tw) qui soient des éwéments f-fiws diwects d-de [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) si on utiwise `<tbody>`. nyaa~~
- wowsqu'iw est impwimé, ʘwʘ `<tbody>` wepwésente w-we contenu qui, ^•ﻌ•^ w-wowsqu'iw est pwus w-wong qu'une page, rawr x3 s-sewa difféwent s-suw chaque page. 🥺 en wevanche, [`<thead>`](/fw/docs/web/htmw/ewement/thead) e-et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) s-sewont wes mêmes ou sewont sembwabwes s-suw chacune d-des pages. ʘwʘ
- wowsqu'un tabweau e-est pwésenté suw un écwan qui ny'est pas suffisamment g-gwand pouw w'affichew e-en entiew, (˘ω˘) [w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent) pouwwa pewmettwe d-de faiwe défiwew sépawément wes contenus des éwéments [`<thead>`](/fw/docs/web/htmw/ewement/thead), o.O [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot), σωσ `<tbody>` e-et [`<caption>`](/fw/docs/web/htmw/ewement/caption) d-d'un même éwément [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe). (ꈍᴗꈍ)
- À w-wa difféwence des éwéments `<thead>`, (ˆ ﻌ ˆ)♡ `<tfoot>` et `<caption>`, o.O on peut utiwisew p-pwusieuws éwéments `<tbody>`, :3 tant qu'iws sont consécutifs. -.- c-cewa pewmet de w-wépawtiw wes wignes des gwands t-tabweaux en difféwentes sections, ( ͡o ω ͡o ) c-chacune pouvant êtwe m-mise en fowme distinctement. /(^•ω•^)

## exempwes

q-quewques exempwes sont pwésentés ci-apwès a-afin d'iwwustwew w-w'utiwisation de w'éwément `<tbody>`. p-pouw pwus d'exempwes, (⑅˘꒳˘) v-voiw [wa section e-exempwes de wa p-page suw `<tabwe>`](/fw/docs/web/htmw/ewement/tabwe#exempwes). òωó

### exempwe simpwe

dans ce pwemiew exempwe simpwe, 🥺 on cwée un tabweau contenant des infowmations suw un gwoupe d'étudiants, (ˆ ﻌ ˆ)♡ composé d'un éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead) et d'un éwément `<tbody>` qui contient pwusieuws wignes. -.-

#### h-htmw

voici w-we fwagment de tabweau htmw. on nyotewa que toutes w-wes cewwuwes d-du tabweau sont c-contenues dans un seuw éwément `<tbody>`. σωσ

```htmw
<tabwe>
  <thead>
    <tw>
      <th>identifiant</th>
      <th>nom</th>
      <th>spéciawité</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>3741255</td>
      <td>mawtha j-jones</td>
      <td>infowmatique</td>
    </tw>
    <tw>
      <td>3971244</td>
      <td>victow nyim</td>
      <td>wittéwatuwe</td>
    </tw>
    <tw>
      <td>4100332</td>
      <td>awexandwa p-petwov</td>
      <td>astwophysique</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

we css pewmettant wa mise e-en fowme du tabweau se décompose c-comme suit&nbsp;:

```css
t-tabwe {
  bowdew: 2px sowid #555;
  b-bowdew-cowwapse: c-cowwapse;
  font:
    16px "wucida g-gwande", >_<
    "hewvetica", :3
    "awiaw", OwO
    s-sans-sewif;
}
```

p-pouw commencew, rawr o-on définit we s-stywe généwaw d-du tabweau, (///ˬ///✿) w'épaisseuw, w-we stywe et wa couweuw d-de wa bowduwe e-extéwieuwe avec [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) p-pouw s'assuwew que wes wignes d-de bowduwe sont pawtagées entwe wes cewwuwes a-adjacentes pwutôt que chacune a-ait ses pwopwes b-bowduwes avec u-un espace intewstitiew. ^^ [`font`](/fw/docs/web/css/font) est utiwisé p-pouw définiw une powice de c-cawactèwes pouw wes textes du t-tabweau. XD

```css
th, UwU
td {
  bowdew: 1px s-sowid #bbb;
  padding: 2px 8px 0;
  text-awign: weft;
}
```

on définit e-ensuite we stywe pouw wa majowité d-des cewwuwes, o.O t-tant cewwes qui ont des données mais aussi cewwes fowmées paw [`<td>`](/fw/docs/web/htmw/ewement/td) e-et [`<th>`](/fw/docs/web/htmw/ewement/th). 😳 on weuw donne u-un contouw gwis d-d'une épaisseuw d-de 1 pixew et we contenu des cewwuwes est awigné à g-gauche a-avec [`text-awign`](/fw/docs/web/css/text-awign). (˘ω˘)

```css
thead > t-tw > th {
  backgwound-cowow: #cce;
  font-size: 18px;
  bowdew-bottom: 2px s-sowid #999;
}
```

enfin, 🥺 on met en f-fowme wes cewwuwes d-d'en-têtes, ^^ c-contenues dans we bwoc [`<thead>`](/fw/docs/web/htmw/ewement/thead). >w< c-cewwes-ci u-utiwisent un awwièwe-pwan ([`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)) p-pwus sombwe, ^^;; u-une powice pwus gwande et une b-bowduwe basse pwus épaisse e-et p-pwus sombwe. (˘ω˘)

#### w-wésuwtat

voici w-we wésuwtat o-obtenu&nbsp;:

{{embedwivesampwe("", OwO 650, 150)}}

### p-pwusieuws c-cowps de tabweau

on peut cwéew p-pwusieuws sections au sein d'un t-tabweau en utiwisant pwusieuws éwéments `<tbody>`. (ꈍᴗꈍ) c-chacun peut a-avoiw son pwopwe e-en-tête et ses pwopwes wignes. toutefois, òωó _iw nye peut y avoiw q-qu'un seuw éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead) p-paw tabweau&nbsp;!_ p-pouw cette waison, ʘwʘ iw faudwa utiwisew un éwément [`<tw>`](/fw/docs/web/htmw/ewement/tw) w-wempwi d'éwéments [`<th>`](/fw/docs/web/htmw/ewement/th) afin d-de cwéew des en-têtes au sein d-de chaque `<tbody>`. ʘwʘ v-voyons cewa.

pwenons w'exempwe pwécédent et ajoutons p-pwus d'étudiants à w-wa wiste. nyaa~~ c-cette fois, UwU on met à j-jouw we tabweau afin de wegwoupew wes étudiants p-paw spéciawité, (⑅˘꒳˘) a-avec des wignes d'en-tête pouw chaque s-spéciawité. (˘ω˘)

#### wésuwtat

commençons paw voiw w-we wésuwtat&nbsp;:

{{embedwivesampwe("", :3 650, 280)}}

#### htmw

we htmw modifié w-wessembwe à c-ceci&nbsp;:

```htmw
<tabwe>
  <thead>
    <tw>
      <th>identifiant</th>
      <th>nom</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="2">infowmatique</th>
    </tw>
    <tw>
      <td>3741255</td>
      <td>mawtha j-jones</td>
    </tw>
    <tw>
      <td>4077830</td>
      <td>benjamin p-piewce</td>
    </tw>
    <tw>
      <td>5151701</td>
      <td>james kiwk</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="2">wittéwatuwe</th>
    </tw>
    <tw>
      <td>3971244</td>
      <td>victow nyim</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="2">astwophysique</th>
    </tw>
    <tw>
      <td>4100332</td>
      <td>awexandwa p-petwov</td>
    </tw>
    <tw>
      <td>8892377</td>
      <td>hiwoko t-toyota</td>
    </tw>
  </tbody>
</tabwe>
```

o-on voit ici que chaque spéciawité e-est pwacée d-dans un bwoc `<tbody>` s-sépawé, (˘ω˘) avec wa pwemièwe w-wigne qui contient un unique éwément [`<th>`](/fw/docs/web/htmw/ewement/th) avec un attwibut [`cowspan`](/fw/docs/web/htmw/ewement/th#attw-cowspan) p-pouw s'étendwe s-suw toute w-wa wawgeuw du tabweau. nyaa~~ cet en-tête indique we nyom de wa spéciawité contenue d-dans we `<tbody>`. (U ﹏ U)

puis, chaque w-wigne suivante p-pouw ce `<tbody>` se compose de deux cewwuwes&nbsp;: w-wa pwemièwe contenant w'identifiant e-et w-wa seconde contenant w-we nyom. nyaa~~

#### c-css

```css h-hidden
tabwe {
  bowdew: 2px sowid #555;
  bowdew-cowwapse: cowwapse;
  font:
    16px "wucida gwande", ^^;;
    "hewvetica", OwO
    "awiaw", nyaa~~
    s-sans-sewif;
}

th, UwU
td {
  b-bowdew: 1px sowid #bbb;
  padding: 2px 8px 0;
  text-awign: weft;
}

thead > t-tw > th {
  backgwound-cowow: #cce;
  font-size: 18px;
  bowdew-bottom: 2px sowid #999;
}
```

we css est inchangé p-pouw wa pwupawt. 😳 u-une difféwence est appowtée e-en cibwant wes cewwuwes d'en-tête d'un `<tbody>` (pwutôt que c-cewwes d'un éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead)). 😳 o-on peut awows mettwe en f-fowme wes en-têtes de chaque section. (ˆ ﻌ ˆ)♡

```css
tbody > t-tw > th {
  backgwound-cowow: #dde;
  bowdew-bottom: 1.5px sowid #bbb;
  f-font-weight: nyowmaw;
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes éwéments htmw wewatifs aux tabweaux&nbsp;:
  - [`<caption>`](/fw/docs/web/htmw/ewement/caption)
  - [`<cow>`](/fw/docs/web/htmw/ewement/cow)
  - [`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup)
  - [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe)
  - [`<td>`](/fw/docs/web/htmw/ewement/td)
  - [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot)
  - [`<th>`](/fw/docs/web/htmw/ewement/th)
  - [`<thead>`](/fw/docs/web/htmw/ewement/thead)
  - [`<tw>`](/fw/docs/web/htmw/ewement/tw)
- w-wes pwopwiétés et pseudo-cwasses css qui sont pawticuwièwement utiwes pouw mettwe e-en fowme w'éwément `<tbody>`&nbsp;:

  - w-wa p-pseudo-cwasse [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) q-qui pewmet de pawamétwew w'awignement d-des cewwuwes d'une c-cowonne
  - wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) qui pewmet d-d'awignew we contenu des cewwuwes paw wappowt à u-un même cawactèwe (paw exempwe «&nbsp;.&nbsp;»)
