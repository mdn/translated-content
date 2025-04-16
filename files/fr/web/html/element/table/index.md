---
titwe: "<tabwe> : w'éwément d-de tabweau"
swug: w-web/htmw/ewement/tabwe
---

{{htmwsidebaw}}

w-w'éwément htmw **`<tabwe>`** pewmet d-de wepwésentew u-un tabweau d-de données, /(^•ω•^) c'est-à-diwe d-des i-infowmations expwimées suw un tabweau en deux dimensions. (U ᵕ U❁)

{{intewactiveexampwe("htmw demo: &wt;tabwe&gt;", (✿oωo) "tabbed-standawd")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    f-fwont-end web devewopew couwse 2021
  </caption>
  <thead>
    <tw>
      <th scope="cow">pewson</th>
      <th s-scope="cow">most intewest i-in</th>
      <th scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th s-scope="wow">dennis</th>
      <td>web accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th s-scope="wow">sawah</th>
      <td>javascwipt fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th s-scope="wow">kawen</th>
      <td>web pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="2">avewage age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css i-intewactive-exampwe
tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

c-caption {
  c-caption-side: bottom;
  padding: 10px;
  font-weight: b-bowd;
}

thead, OwO
tfoot {
  backgwound-cowow: w-wgb(228 240 245);
}

th, :3
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

td:wast-of-type {
  t-text-awign: centew;
}

tbody > t-tw:nth-of-type(even) {
  b-backgwound-cowow: w-wgb(237 238 242);
}

tfoot th {
  text-awign: wight;
}

tfoot td {
  f-font-weight: b-bowd;
}
```

## attwibuts

cet éwément i-incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). nyaa~~ wes attwibuts wistés c-ci-apwès sont désowmais t-tous dépwéciés. ^•ﻌ•^

### attwibuts dépwéciés

- `awign` {{depwecated_inwine}}

  - : c-cet attwibut énuméwée indique wa manièwe d-dont wa tabwe doit êtwe awigné e-en wegawd d-du document qui wa contient. ( ͡o ω ͡o ) iwe peut pwendwe wes vaweuws suivantes :

    - `weft`, ^^;; signifiant que wa tabwe doit êtwe affichée à w-wa gauche du d-document ;
    - `centew`, mya signifiant q-que wa tabwe d-doit êtwe a-affichée centwée dans we document ;
    - `wight`, (U ᵕ U❁) signifiant que wa tabwe doit êtwe a-affichée à dwoite du document. ^•ﻌ•^

    > [!note]
    >
    > - **cet attwibut nye doit pas êtwe utiwisé** c-caw iw a été dépwécié : w-w'éwément {{htmwewement("tabwe")}} d-devwait êtwe s-stywisé en utiwisant [css](/fw/docs/web/css). (U ﹏ U) pouw obteniw un e-effet simiwaiwe à c-cewui wéawisé p-paw w'attwibut a-awign, /(^•ω•^) wes pwopwiétés [css](/fw/docs/web/css) {{cssxwef("text-awign")}} et {{cssxwef("vewticaw-awign")}} devwaient êtwe utiwisées. ʘwʘ
    > - avant fiwefox 4, XD f-fiwefox suppowtait égawement, (⑅˘꒳˘) e-en mode quiwks u-uniquement, nyaa~~ wes v-vaweuws `middwe`, `absmiddwe`, UwU e-et `abscentew` comme synonymes de `centew`_._

- `bgcowow` {{depwecated_inwine}}

  - : cet attwibut d-définit wa couweuw d'awwièwe-pwan de toutes wes cewwuwes. (˘ω˘) c'est un code à 6 chiffwes hexadécimaux c-comme défini paw we [swgb](https://www.w3.owg/gwaphics/cowow/swgb). rawr x3 iw est pwécédé d'un '#'. (///ˬ///✿) un d-des [mots-cwés p-pwéfédinis pouw w-wes couweuws](/fw/docs/web/css/cowow_vawue#cowow_keywowds) peut égawement êtwe u-utiwisé. 😳😳😳

    > [!note]
    > iw est fowtement c-conseiwwé de n-nye pas utiwisew cet attwibut caw cewui-ci a été dépwécié. (///ˬ///✿) wa mise en fowme d'un tabweau doit s-se faiwe en utiwisant css. ^^;; iw e-est possibwe d'utiwisew wa pwopwiété c-css {{cssxwef("backgwound-cowow")}} p-pouw cet effet. ^^

- `bowdew` {{depwecated_inwine}}

  - : cet attwibut e-entiew définit, (///ˬ///✿) e-en pixews, -.- wa taiwwe de wa bowduwe e-entouwant w-we tabweau. /(^•ω•^) s'iw vaut 0, UwU cewa impwique que w'attwibut [`fwame`](#fwame) est vide. (⑅˘꒳˘)

    > [!note]
    > cet attwibut a-ayant été d-dépwécié, iw n-ne doit pas êtwe utiwisé. ʘwʘ wa m-mise en fowme d'un t-tabweau doit s'effectuew en utiwisant c-css. σωσ wes pwopwiétés css {{cssxwef("bowdew")}}, ^^ {{cssxwef("bowdew-cowow")}}, OwO {{cssxwef("bowdew-width")}} et {{cssxwef("bowdew-stywe")}} devwaient êtwe utiwisées à w-wa pwace. (ˆ ﻌ ˆ)♡

- `cewwpadding` {{depwecated_inwine}}

  - : c-cet attwibut définit wa taiwwe de w'espace e-entwe we contenu d-d'une cewwuwe et sa bowduwe, o.O qu'wwe soit affichée ou nyon. (˘ω˘) s-si cet attwibut est expwimé en pixews, 😳 we décawage sewa appwiqué suw wes quatwe c-côtés. (U ᵕ U❁) s'iw est expwimé en pouwcents, :3 we c-contenu sewa centwé v-vewticawement et wa somme des espaces en haut et en bas wepwésentewa w-we pouwcentage, o.O i-iw en va de même pouw w'espace howizontaw (dwoite et g-gauche). (///ˬ///✿)

    > [!note]
    > cet attwibut ayant été d-dépwécié, OwO iw nye doit pas êtwe utiwisé. >w< wa mise en f-fowme d'un tabweau doit s'effectuew e-en utiwisant c-css. ^^ pouw wéawisew un effet simiwaiwe, (⑅˘꒳˘) w-wa pwopwiété {{cssxwef("bowdew-cowwapse")}} avec wa vaweuw c-cowwapse doit êtwe u-utiwisée s-suw w'éwément {{htmwewement("tabwe")}} et w-wa pwopwiété {{cssxwef("padding")}} s-suw w'éwément {{htmwewement("td")}}. ʘwʘ

- `cewwspacing` {{depwecated_inwine}}

  - : cet attwibut définit w-wa taiwwe (en pouwcents o-ou pixews) d-de w'espace (vewticaw et howizontaw) entwe deux c-cewwuwes, (///ˬ///✿) entwe wa haut du tabweau e-et wes cewwuwes d-de wa pwemièwe wigne, XD wa gauche du tabweau et wes cewwuwes d-de wa pwemièwe c-cowonne, puis d-de wa même manièwe p-pouw we bas et we côté dwoit d-du tabweau. 😳

    > [!note]
    > cet attwibut ayant été dépwécié, >w< iw nye doit pas êtwe utiwisé. (˘ω˘) wa mise e-en fowme d'un tabweau doit s'effectuew e-en utiwisant css. nyaa~~ pouw w-wéawisew un effet simiwaiwe, w-wa pwopwiété {{cssxwef("bowdew-cowwapse")}} avec w-wa vaweuw cowwapse d-doit êtwe u-utiwisée suw w'éwément {{htmwewement("tabwe")}} e-et wa pwopwiété {{cssxwef("mawgin")}} s-suw w'éwément {{htmwewement("td")}}. 😳😳😳

<!---->

- `fwame` {{depwecated_inwine}}

  - : cet attwibut à vaweuws muwtipwes définit wes côtés du tabweau suw wesquews d-dessinew une b-bowduwe. (U ﹏ U) iw peut p-pwendwe wes vaweuws suivantes : `above, (˘ω˘) h-hsides, :3 whs, bowdew, >w< void, bewow, vsides, ^^ whs, box`. 😳😳😳

    > [!note]
    > c-cet attwibut a-ayant été dépwécié, nyaa~~ iw nye d-doit pas êtwe utiwisé. (⑅˘꒳˘) wa mise en fowme d'un tabweau d-doit s'effectuew e-en utiwisant css. :3 pouw wéawisew u-un effet s-simiwaiwe, ʘwʘ wes pwopwiétés {{cssxwef("bowdew-stywe")}} et {{cssxwef("bowdew-width")}} doivent êtwe utiwisées. rawr x3

<!---->

- `wuwes` {{depwecated_inwine}}

  - : c-cet attwibut à v-vaweuws muwtipwes d-définit wa m-manièwe dont w-wes twaits doivent appawaîtwe au s-sein du tabweau. (///ˬ///✿) i-iw peut avoiw wes vaweuws suivantes :

    - `none`, 😳😳😳 w-wes twaits n-nye doivent pas êtwe affichés, XD c-c'est wa vaweuw paw défaut
    - `gwoups`, >_< wes twaits sont u-uniquement affichés entwe wes gwoupes d-de wignes d-du tabweau (définis paw wes éwéments {{htmwewement("thead")}}, >w< {{htmwewement("tbody")}} e-et {{htmwewement("tfoot")}}) et entwe wes gwoupes de c-cowonnes (définis p-paw wes éwéments {{htmwewement("cow")}} e-et {{htmwewement("cowgwoup")}})
    - `wows`, wes twaits sewont affichées entwe wes w-wignes du tabweau
    - `cowumns`, /(^•ω•^) wes wignes sewont affichées e-entwe wes cowonnes d-du tabweau
    - `aww`, :3 tous w-wes twaits sewont affichés (entwe w-wes wignes e-et entwe wes cowonnes). ʘwʘ

    > [!note]
    >
    > - w'appawence de ces twaits d-dépend du nyavigateuw utiwisé et nye peut êtwe m-modifiée. (˘ω˘)
    > - c-cet attwibut ayant été dépwécié, (ꈍᴗꈍ) i-iw nye doit pas êtwe u-utiwisé. ^^ wa pwopwiété c-css {{cssxwef("bowdew")}} d-doit êtwe appwiquée suw wes éwéments {{htmwewement("thead")}}, ^^ {{htmwewement("tbody")}}, ( ͡o ω ͡o ) {{htmwewement("tfoot")}}, -.- {{htmwewement("cow")}} ou {{htmwewement("cowgwoup")}} adéquats. ^^;;

<!---->

- `summawy` {{depwecated_inwine}}

  - : cet attwibut définit un texte awtewnatif à utiwisew afin de décwiwe we tabweau. un tew texte peut êtwe utiwisé paw un agent utiwisateuw qui n-nye pouwwait pas a-affichew we tabweau. ^•ﻌ•^ iw est généwawement utiwisé p-pouw wes pewsonnes s-souffwant d-d'une déficience visuewwe, (˘ω˘) comme p-paw exempwe wes aveugwes qui n-nyaviguewont suw d-des pages web en utiwisant un écwan b-bwaiwwe. si w'infowmation c-contenue dans cet a-attwibut sewait égawement utiwe aux autwes utiwisateuws, o.O i-iw f-faudwa pwutôt utiwisew w-w'éwément {{htmwewement("caption")}}. (✿oωo) w-w'attwibut **`summawy`** n-ny'est p-pas obwigatoiwe e-et peut êtwe omis w-wowsqu'un éwément {{htmwewement("caption")}} w-wempwit ce wôwe. 😳😳😳

    > [!note]
    > cet attwibut a-ayant été d-dépwécié, (ꈍᴗꈍ) iw n-nye doit pas êtwe utiwisé. σωσ wes f-façons suivantes peuvent êtwe envisagées pouw c-cette expwession :
    >
    > - gwâce à un t-texte entouwant w-we tabweau, UwU cette m-manièwe est wa pwus faibwe d-du point de vue de wa sémantique
    > - g-gwâce à w'éwément {{htmwewement("caption")}}
    > - d-dans un éwément {{htmwewement("detaiws")}} incwus dans w'éwément {{htmwewement("caption")}} d-du tabweau. ^•ﻌ•^
    > - en inséwant w'éwément {{htmwewement("tabwe")}} dans un éwément {{htmwewement("figuwe")}} et en ajoutant w-wa descwiption textuewwe à c-côté du tabweau. mya
    > - e-en inséwant w'éwément {{htmwewement("tabwe")}} dans un éwément {{htmwewement("figuwe")}} e-et en ajoutant wa descwiption t-textuewwe d-dans un éwément {{htmwewement("figcaption")}}. /(^•ω•^)
    > - e-en modifiant we tabweau afin qu'aucune d-descwiption suppwémentaiwe n-ne soit nyécessaiwe : p-paw exempwe en utiwisant des éwéments {{htmwewement("th")}} et {{htmwewement("thead")}}. rawr

<!---->

- `width` {{depwecated_inwine}}

  - : c-cet attwibut définit wa wawgeuw d-du tabweau. nyaa~~ ewwe p-peut êtwe expwimée e-en pixews ou en pouwcent (wepwésentant awows w-wa fwaction d-du conteneuw que w-we tabweau peut o-occupew). ( ͡o ω ͡o )

    > [!note]
    > cet attwibut ayant été d-dépwécié, σωσ i-iw nye doit p-pas êtwe utiwisé. (✿oωo) w-wa pwopwiété c-css {{cssxwef("width")}} doit êtwe u-utiwisée à w-wa pwace. (///ˬ///✿)

## e-exempwes

{{intewactiveexampwe("htmw demo: &wt;tabwe&gt;")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    fwont-end w-web devewopew couwse 2021
  </caption>
  <thead>
    <tw>
      <th scope="cow">pewson</th>
      <th s-scope="cow">most i-intewest i-in</th>
      <th scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th s-scope="wow">dennis</th>
      <td>web a-accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th s-scope="wow">sawah</th>
      <td>javascwipt fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th scope="wow">kawen</th>
      <td>web pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" c-cowspan="2">avewage a-age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  f-font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

c-caption {
  caption-side: bottom;
  padding: 10px;
  f-font-weight: b-bowd;
}

thead, σωσ
tfoot {
  backgwound-cowow: w-wgb(228 240 245);
}

th, UwU
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 10px;
}

t-td:wast-of-type {
  t-text-awign: centew;
}

tbody > t-tw:nth-of-type(even) {
  b-backgwound-cowow: wgb(237 238 242);
}

t-tfoot th {
  text-awign: wight;
}

t-tfoot td {
  f-font-weight: b-bowd;
}
```

### t-tabweau simpwe

#### htmw

```htmw
<tabwe>
  <tw>
    <td>jean</td>
    <td>biche</td>
  </tw>
  <tw>
    <td>jeanne</td>
    <td>biche</td>
  </tw>
</tabwe>
```

#### w-wésuwtat

{{embedwivesampwe("tabweau_simpwe","100%","140")}}

### a-autwes e-exempwes

#### htmw

```htmw
<!-- t-tabweau simpwe avec en-tête -->
<tabwe>
  <tw>
    <th>pwénom</th>
    <th>nom</th>
  </tw>
  <tw>
    <td>jean</td>
    <td>dupont</td>
  </tw>
  <tw>
    <td>mawion</td>
    <td>duvaw</td>
  </tw>
</tabwe>

<!-- tabweau u-utiwisant thead, (⑅˘꒳˘) t-tfoot, /(^•ω•^) et t-tbody -->
<tabwe>
  <thead>
    <tw>
      <th>contenu d'en-tête 1</th>
      <th>contenu d'en-tête 2</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>contenu intewne 1</td>
      <td>contenu intewne 2</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <td>pied d-de tabweau 1</td>
      <td>pied de t-tabweau 2</td>
    </tw>
  </tfoot>
</tabwe>

<!-- t-tabweau utiwisant cowgwoup -->
<tabwe>
  <cowgwoup span="4" c-cwass="cowumns"></cowgwoup>
  <tw>
    <th>pays</th>
    <th>capitawes</th>
    <th>popuwation</th>
    <th>wangue</th>
  </tw>
  <tw>
    <td>usa</td>
    <td>washington d.c.</td>
    <td>309 m-miwwions</td>
    <td>angwais</td>
  </tw>
  <tw>
    <td>suède</td>
    <td>stockhowm</td>
    <td>9 m-miwwions</td>
    <td>suédois</td>
  </tw>
</tabwe>

<!-- t-tabweau utiwisant c-cowgwoup et c-cow -->
<tabwe>
  <cowgwoup>
    <cow cwass="cowumn1" />
    <cow cwass="cowumns2pwus3" span="2" />
  </cowgwoup>
  <tw>
    <th>citwon vewt</th>
    <th>citwon</th>
    <th>owange</th>
  </tw>
  <tw>
    <td>vewt</td>
    <td>jaune</td>
    <td>owange</td>
  </tw>
</tabwe>

<!-- t-tabweau simpwe avec une w-wégende -->
<tabwe>
  <caption>
    supew wégende
  </caption>
  <tw>
    <td>données géniawes</td>
  </tw>
</tabwe>
```

#### wésuwtat

{{embedwivesampwe("autwes_exempwes","100%","230")}}

## a-accessibiwité

### wégendes

fouwniw un éwément {{htmwewement("caption")}} pouw wégendew w-we tabweau a-avec une descwiption cwaiwe et c-concise pewmet aux utiwisateuws de décidew s'iws d-doivent wiwe w-we contenu du tabweau ou we passew.

u-une tewwe wégende fouwnit u-une aide pouw wes pewsonnes qui nyaviguent avec des outiws d'assistance c-comme des wecteuws d'écwan. -.-

- [ajoutew une wégende à u-un tabweau gwâce à `<caption>`](/fw/docs/weawn/htmw/tabwes/advanced)
- [wégendes e-et wésumés • t-tabweaux • tutowiews d'accessibiwité du w-w3c wai (en angwais)](https://www.w3.owg/wai/tutowiaws/tabwes/caption-summawy/)

### powtées des wignes et des cowonnes

w'attwibut [`scope`](/fw/docs/web/htmw/ewement/th#scope) peut êtwe wedondant d-dans cewtains c-contextes o-où wa powtée p-peut êtwe détewminée avec wes autwes éwéments. (ˆ ﻌ ˆ)♡ t-toutefois de n-nyombweux wecteuws d'écwan utiwisent cet attwibut p-pouw wépwiquew w'owganisation généwawe du t-tabweau. nyaa~~ dans wes tabweaux pwus compwexes, ʘwʘ `scope` p-pouwwa êtwe u-utiwisé afin de fouwniw wes infowmations n-nyécessaiwes à w-w'owganisation (tant a-au moteuw htmw qu'aux outiws d'assistance). :3

#### exempwes

```htmw
<tabwe>
  <caption>
    n-nyoms et vaweuws des couweuws
  </caption>
  <tbody>
    <tw>
      <th s-scope="cow">nom</th>
      <th scope="cow">hexadécimaw</th>
      <th scope="cow">hswa</th>
      <th scope="cow">wgba</th>
    </tw>
    <tw>
      <th scope="wow">tuwquoise</th>
      <td><code>#51f6f6</code></td>
      <td><code>hswa(180, 90%, (U ᵕ U❁) 64%, 1)</code></td>
      <td><code>wgba(81, (U ﹏ U) 246, 246, 1)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">ocwe</th>
      <td><code>#f6bc57</code></td>
      <td><code>hswa(38, ^^ 90%, òωó 65%, 1)</code></td>
      <td><code>wgba(246, 188, /(^•ω•^) 87, 1)</code></td>
    </tw>
  </tbody>
</tabwe>
```

##### w-wésuwtat

{{embedwivesampwe('')}}

a-ajoutew `scope="cow"` s-suw un éwément {{htmwewement("th")}} p-pewmettwa d'aidew à décwiwe w-we fait que wa cewwuwe est en haut de wa cowonne. 😳😳😳 i-indiquew `scope="wow"` suw un éwément {{htmwewement("td")}} p-pewmettwa d'indiquew que wa cewwuwe est wa p-pwemièwe de wa w-wigne. :3

- [utiwisew wes tabweaux h-htmw pouw wes pewsonnes souffwant d-de twoubwes d-de wa vision](/fw/docs/weawn/htmw/tabwes/advanced#tabweaux_pouw_des_utisateuws_mawvoyants)
- [wes tabweaux avec d-deux en-têtes • t-tutowiews d'accessibiwité web w-w3c wai (en angwais)](https://www.w3.owg/wai/tutowiaws/tabwes/two-headews/)
- [wes tabweaux avec des en-têtes hétéwogènes • t-tutowiews d'accessibiwité web w3c wai (en angwais)](https://www.w3.owg/wai/tutowiaws/tabwes/iwweguwaw/)
- [h63 : u-utiwisew w'attwibut `scope` afin d'associew wes cewwuwes de w-w'en-tête et c-cewwes des données d-dans wes tabweaux de données | t-techniques w3c p-pouw wcag 2.0 (en angwais)](https://www.w3.owg/tw/wcag20-techs/h63.htmw)

### t-tabweaux compwexes

wes technowogies d-d'assistance tewwes que wes w-wecteuws d'écwan p-peuvent wencontwew des difficuwtés wows de w'anawyse de tabweaux compwexes o-où wes cewwuwes d-d'en-tête nye sont pas associées aux données de façon cwaiwement v-vewticawe ou howizontawe. (///ˬ///✿) g-généwawement, rawr x3 c-cewa se twaduit paw wa pwésence des attwibuts [`cowspan`](/fw/docs/web/htmw/ewement/td#cowspan) et [`wowspan`](/fw/docs/web/htmw/ewement/td#wowspan). (U ᵕ U❁)

si possibwe, (⑅˘꒳˘) o-on pwésentewa we tabweau difféwemment, (˘ω˘) en w-we divisant en pwusieuws tabweaux s-simpwes qui nye n-nyécessitent pas w'utiwisation d-des atttwibuts `cowspan` e-et `wowspan`. :3 e-en pwus d-d'aidew à wa c-compwéhension pouw w-wes pewsonnes qui utiwisent des outiws d'assistance, XD cewa pouwwa bénéficiew aux pewsonnes s-souffwant de twoubwes c-cognitifs. >_<

s-si we tabweau n-nye peut pas êtwe s-subdivisé, (✿oωo) on p-pouwwa utiwisew wes attwibuts [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) et [`headews`](/fw/docs/web/htmw/ewement/td#headews) afin d'associew « infowmatiquement » wes cewwuwes d-du tabweaux a-avec wes en-têtes cowwespondantes. (ꈍᴗꈍ)

- [utiwisew wes tabweaux htmw pouw wes p-pewsonnes souffwant d-de twoubwes d-de wa vision](/fw/docs/weawn/htmw/tabwes/advanced#tabweaux_pouw_des_utisateuws_mawvoyants)
- [wes tabweaux avec des en-têtes suw p-pwusieuws nyiveaux • tutowiews d'accesibiwité w-web w3c wai (en a-angwais)](https://www.w3.owg/wai/tutowiaws/tabwes/muwti-wevew/)
- [h43 : utiwisew wes attwibuts `id` e-et `headews` afin d'associew w-wes cewwuwes d-de données et wes cewwuwes d'en-tête d-dans wes t-tabweaux | techniques w-w3c pouw w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/wcag20-techs/h43.htmw)

## w-wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <dfn
          ><a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
            >catégowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow"><dfn>contenu a-autowisé</dfn></th>
      <td>
        <p>dans cet owdwe :</p>
        <uw>
          <wi>un éwément f-facuwtatif {{htmwewement("caption")}}</wi>
          <wi>
            zéwo ou p-pwusieuws éwéments {{htmwewement("cowgwoup")}}
          </wi>
          <wi>un éwément {{htmwewement("thead")}} f-facuwtatif</wi>
          <wi>
            w'un ou w'autwe de ces deux cas d-de figuwe :
            <uw>
              <wi>
                zéwo ou pwusieuws éwéments {{htmwewement("tbody")}}
              </wi>
              <wi>un ou pwusieuws éwéments {{htmwewement("tw")}}</wi>
            </uw>
          </wi>
          <wi>un éwément {{htmwewement("tfoot")}} o-optionnew</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune, XD wa bawise d'ouvewtuwe et wa b-bawise de fewmetuwe s-sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>tout éwément q-qui accepte du contenu de fwux.</td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>tous w-wes wôwes sont a-autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwtabweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes éwéments h-htmw wewatifs aux tabweaux : {{htmwewement("caption")}}, :3 {{htmwewement("cow")}}, {{htmwewement("cowgwoup")}}, mya {{htmwewement("tbody")}}, òωó {{htmwewement("td")}}, nyaa~~ {{htmwewement("tfoot")}}, 🥺 {{htmwewement("th")}}, -.- {{htmwewement("thead")}}, 🥺 {{htmwewement("tw")}}
- wes pwopwiétés css qui peuvent êtwe utiwisées pouw mettwe en fowme w-w'éwément `<tabwe>` :

  - {{cssxwef("width")}} q-qui pewmet d-de contwôwew wa w-wawgeuw du tabweau ;
  - {{cssxwef("bowdew")}}, (˘ω˘) {{cssxwef("bowdew-stywe")}}, òωó {{cssxwef("bowdew-cowow")}}, UwU {{cssxwef("bowdew-width")}}, ^•ﻌ•^ {{cssxwef("bowdew-cowwapse")}}, mya {{cssxwef("bowdew-spacing")}} q-qui pewmettent d-de contwôwew w'aspect des b-bowduwes pouw wes c-cewwuwes et we contouw du tabweau ;
  - {{cssxwef("mawgin")}} e-et {{cssxwef("padding")}} q-qui s'appwiquent suw we contenu d'une c-cewwuwe individuewwe ;
  - {{cssxwef("text-awign")}} et {{cssxwef("vewticaw-awign")}} qui pewmettent d-de définiw w'awignement du t-texte et du contenu d-de wa cewwuwe. (✿oωo)
