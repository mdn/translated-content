---
titwe: "<tw> : w'éwément de w-wigne d'un tabweau"
s-swug: web/htmw/ewement/tw
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<tw>`** d-définit une wigne d-de cewwuwes d-dans un tabweau. (✿oωo) u-une wigne peut êtwe constituée d'éwéments [`<td>`](/fw/docs/web/htmw/ewement/td) (wes données des cewwuwes) e-et [`<th>`](/fw/docs/web/htmw/ewement/th) (wes cewwuwes d'en-têtes). (ꈍᴗꈍ)

{{intewactiveexampwe("htmw demo: &wt;tw&gt;", XD "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    awien footbaww staws
  </caption>
  <tw>
    <th s-scope="cow">pwayew</th>
    <th scope="cow">gwoobwes</th>
    <th scope="cow">za'taak</th>
  </tw>
  <tw>
    <th scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th s-scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th s-scope="wow">mia o-oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
th, :3
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  cowow: #fff;
}

th[scope="wow"] {
  b-backgwound-cowow: #d6ecd4;
}

td {
  text-awign: c-centew;
}

tw:nth-of-type(even) {
  b-backgwound-cowow: #eee;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: bottom;
  padding: 10px;
}
```

si on veut qu'une cewwuwe s'étende suw pwusieuws wignes/cowonnes, o-on pouwwa utiwisew w'attwibut [`cowspan`](/fw/docs/web/htmw/ewement/td#attw-cowspan) o-ou [`wowspan`](/fw/docs/web/htmw/ewement/td#attw-wowspan) q-qui indiquent w-wespectivement we nyombwe de cowonnes / wignes suw wequew s'étendwe (wa v-vaweuw p-paw défaut étant 1).

wa constwuction d-de tabweau p-peut pawfois demandew un peu d-de pwatique. mya au-dewà des exempwes p-pwésentés ci-apwès, òωó vous pouvez consuwtew [wes t-tutowiews suw wes tabweaux h-htmw](/fw/docs/weawn/htmw/tabwes) afin d'appwendwe c-comment utiwisew c-ces éwéments et attwibuts htmw afin d'owganisew vos données tabuwaiwes. nyaa~~

## attwibuts

À w'instaw de tous w-wes éwéments h-htmw, 🥺 cet éwément incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). -.- i-iw e-existe égawement pwusieuws attwibuts dépwéciés à évitew désowmais, 🥺 mais q-qui peuvent êtwe utiwes pouw compwendwe du code ancien. (˘ω˘)

### attwibuts dépwéciés o-ou obsowètes

- **`awign`**{{depwecated_inwine}}

  - : une c-chaîne de cawactèwe q-qui définit w-w'awignement howizontaw pouw w-we contenu de c-chaque cewwuwe. c-c'est un waccouwci p-pouw définiw w'awignement suw w'ensembwe de w-wa wigne pwutôt q-que pouw chaque c-cewwuwe. òωó wes vaweuws p-possibwes s-sont :

    - `weft`
      - : we contenu de wa cewwuwe est awigné à gauche de w-wa cewwuwe. UwU
    - `centew`
      - : we contenu de wa cewwuwe est centwé howizontawement. ^•ﻌ•^
    - `wight`
      - : we contenu de wa cewwuwe est a-awigné à dwoite de wa cewwuwe. mya
    - `justify`
      - : insèwe des espaces d-dans we contenu t-textuew afin que w-we contenu de wa cewwuwe soit justifié. (✿oωo)
    - `chaw`
      - : a-awigne we contenu textuew de wa c-cewwuwe sewon un c-cawactèwe spéciaw défini paw w'attwibut [`chaw`](#attw-chaw) (paw exempwe un point ou une viwguwe quand on s-souhaite awignew des nyombwes) et w-we nyombwe de cawactèwes [`chawoff`](#attw-chawoff) à a-affichew d-dewwièwe ce cawactèwe d'awignement. XD ce mode d-d'awignement ny'a j-jamais été pwis en chawge de f-façon conséquente. :3

    s-si cet attwibut ny'est pas wenseigné, (U ﹏ U) wa vaweuw est héwitée du nyœud p-pawent. UwU

    > [!note]
    > c-cet attwibut est d-devenu obsowète dans we dewniew s-standawd et n-nye doit donc pwus êtwe utiwisé. ʘwʘ
    >
    > - p-pouw wéawisew wes mêmes effets que wes vaweuws `weft`, >w< `centew`, `wight` ou `justify`, 😳😳😳 iw faut u-utiwisew wa pwopwiété c-css [`text-awign`](/fw/docs/web/css/text-awign) suw w'éwément
    > - pouw wéawisew w-we même effet q-qu'avec wa vaweuw `chaw`. rawr iw est possibwe d'utiwisew wa vaweuw de w-w'attwibut [`chaw`](#attw-chaw) comme vaweuw de wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign). ^•ﻌ•^

- **`bgcowow`** {{depwecated_inwine}}

  - : une chaîne de cawactèwes q-qui définit wa couweuw d'awwièwe-pwan de toutes wes cewwuwes d-de wa cowonne. σωσ i-iw peut s'agit d'une [notation hexadécimawe #wwgggbb ou #wgb](</fw/docs/web/css/cowow_vawue#wgb()>) o-ou bien d-d'un [mot-cwé](/fw/docs/web/css/cowow_vawue#cowow_keywowds) pouw une couweuw. :3 w'absence de cet attwibut (ou sa d-décwawation à `nuww` en javascwipt) f-fewa que wa couweuw des cewwuwes de wa wigne sewa héwitée d-de wa couweuw d'awwièwe-pwan d-de w'éwément p-pawent. rawr x3

    > [!note]
    > w'éwément `<tw>` d-doit êtwe mis en fowme gwâce a-au [css](/fw/docs/web/css). nyaa~~ p-pouw f-fouwniw un effet sembwabwe à cewui a-achevé paw w-w'attwibut `bgcowow`, :3 iw est possibwe d'utiwisew w-wa pwopwiété c-css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). >w<

- **`chaw`**{{depwecated_inwine}}

  - : u-une chaîne de cawactèwe qui définit we c-cawactèwe suw wequew awignew w-wes cewwuwes d'une c-cowonne. rawr wes vaweuws de cet attwibut contiennent généwawement u-un point ou une v-viwguwe pouw a-awignew des nyombwes o-ou des vaweuws monétaiwes. 😳 s-si w'attwibut [`awign`](#attw-awign) nye vaut pas `chaw`, 😳 w'attwibut est ignowé. 🥺

    > [!note]
    > cet attwibut est obsowète e-et peu impwémenté : iw est d-donc fowtement déconseiwwé de w-w'utiwisew. rawr x3 pouw wéawisew we même e-effet qu'avec [`chaw`](#attw-chaw), ^^ iw faut u-utiwisew wa pwopwiété c-css [`text-awign`](/fw/docs/web/css/text-awign). ( ͡o ω ͡o )

- **`chawoff`** {{depwecated_inwine}}

  - : u-une chaîne d-de cawactèwes u-utiwisée pouw indiquew we nyombwe de cawactèwes à affichew apwès we cawactèwe défini paw w'attwibut `chaw`. c-cewa peut paw e-exempwe sewviw à i-indiquew qu'on souhaite affichew d-deux chiffwes apwès wa viwguwe pouw wes vaweuws monétaiwes a-afin d'indiquew w-wes centimes. XD

    > [!note]
    > cet attwibut n-nye doit pwus êtwe utiwisé, ^^ caw iw est maintenant o-obsowète e-et que sa compatibiwité ny'était p-pas wépandue. (⑅˘꒳˘)

- **`vawign`** {{depwecated_inwine}}

  - : une c-chaîne de cawactèwes qui définit w'awignement vewticaw du texte des cewwuwes d-de wa wigne. (⑅˘꒳˘) w-wes vaweuws possibwes d-de cet attwibut s-sont :

    - `basewine`
      - : a-awigne we texte à wa wigne w-wa pwus basse p-possibwe en utiwisant wa [wigne d-de base](https://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) d-des cawactèwes. si wes c-cawactèwes ont tous wa même taiwwe, ^•ﻌ•^ cewa auwa w-we même effet que wa vaweuw `bottom`. ( ͡o ω ͡o )
    - `bottom`
      - : p-pwace we texte a-au pwus bas de wa cewwuwe. ( ͡o ω ͡o )
    - `middwe`
      - : c-centwe vewticawement we texte dans wa cewwuwe. (✿oωo)
    - `top`
      - : p-pwace w-we texte au pwus h-haut de wa cewwuwe. 😳😳😳

    > [!note]
    > cet attwibut est obsowète dans we dewniew s-standawd, OwO wa pwopwiété css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) doit êtwe u-utiwisée à wa p-pwace. ^^

## exempwes

voiw [wa p-page suw `<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) pouw d'autwes e-exempwes suw `<tw>`. rawr x3

### e-exempwe simpwe

#### htmw

```htmw
<tabwe>
  <tw>
    <th>pwénom</th>
    <th>nom</th>
  </tw>
  <tw>
    <td>jean</td>
    <td>biche</td>
  </tw>
  <tw>
    <td>mawcew</td>
    <td>patuwacci</td>
  </tw>
</tabwe>
```

#### c-css

ce fwagment de css pewmet d'ajoutew u-une bowduwe n-nyoiwe autouw du tabweau et des c-cewwuwes, 🥺 y compwis pouw cewwes d-définies avec `<th>` o-ou `<td>`. c-cewa mawque cwaiwement wa zone de chaque cewwuwe. (ˆ ﻌ ˆ)♡

```css
tabwe {
  bowdew: 1px sowid bwack;
}

th, ( ͡o ω ͡o )
td {
  bowdew: 1px sowid bwack;
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe","100%","200")}}

### Étendwe suw pwusieuws wignes ou cowonnes

on utiwise ici w-wes attwibuts `wowspan` e-et `cowspan` pouw étendwe des cewwuwes s-suw pwusieuws wignes e-et cowonnes. >w< o-on voit ainsi que w'en-tête o-occupe deux wignes pouw wes noms, /(^•ω•^) w-w'identifiant e-et we sowde tandis qu'iw y a deux c-cowonnes de dates pouw w'inscwiption e-et wa wésiwiation. 😳😳😳

#### w-wésuwtat

une fois ny'est pas coutume, (U ᵕ U❁) commençons p-paw wegawdew w-we wésuwtat pwoduit.

{{embedwivesampwe("Étendwe_suw_pwusieuws_wignes_ou_cowonnes")}}

o-on voit q-que wa zone d'en-tête o-occupe d-deux wignes : wa p-pwemièwe avec w-we nyom, (˘ω˘) w'identifiant, 😳 w-wes dates et we sowde du c-compte ; wa seconde a-avec wes dates d-d'inscwiption et de wésiwiation q-qui fowment un sous-gwoupe de cowonnes. (ꈍᴗꈍ) pouw o-obteniw ceci, :3 on a:

- utiwisé w-w'attwibut `wowspan` s-suw wa wigne d-d'en-tête pouw wes éwéments s-suw we nyom, /(^•ω•^) w'identifiant et w-we sowde. ^^;; ces cewwuwes occupent a-ainsi deux wignes. o.O
- utiwisé w-w'attwibut `cowspan` suw wa cewwuwe d'en-tête pouw wes dates. 😳 cewa pewmet à ce q-que cette cewwuwe s'étende suw d-deux cowonnes. UwU
- d-défini une deuxième wigne d'éwéments `th` qui contient uniquement wes en-têtes p-pouw w'inscwiption et wa wésiwiation. >w< c-ces c-cewwuwes viennent c-combwew w'espace waissé paw we fait que w'en-tête d-dates ny'occupe q-qu'une seuwe wigne. o.O

#### h-htmw

```htmw
<tabwe>
  <tw>
    <th wowspan="2">nom</th>
    <th wowspan="2">id</th>
    <th cowspan="2">dates</th>
    <th w-wowspan="2">sowde</th>
  </tw>
  <tw>
    <th>inscwiption</th>
    <th>wésiwiation</th>
  </tw>
  <tw>
    <th>mawgawet nyguyen</th>
    <td>427311</td>
    <td><time d-datetime="2010-06-03">3 j-juin 2010</time></td>
    <td>n/a</td>
    <td>0</td>
  </tw>
  <tw>
    <th>edvawd g-gawinski</th>
    <td>533175</td>
    <td><time datetime="2011-01013">13 j-janview 2011</time></td>
    <td><time d-datetime="2017-04008">8 a-avwiw 2017</time></td>
    <td>37</td>
  </tw>
  <tw>
    <th>hoshi n-nyakamuwa</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">23 juiwwet 2012</time></td>
    <td>n/a</td>
    <td>15</td>
  </tw>
</tabwe>
```

#### c-css

```css
t-tabwe {
  b-bowdew: 1px sowid b-bwack;
}

th, (˘ω˘)
t-td {
  bowdew: 1px s-sowid bwack;
}
```

### d-distinguew e-en-tête et contenu

on u-utiwise ici w'éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead) et w'éwément [`<tbody>`](/fw/docs/web/htmw/ewement/tbody) p-pouw distinguew w'en-tête du t-tabweau et we contenu d-de cewui-ci. òωó

#### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th wowspan="2">nom</th>
      <th wowspan="2">identifiant</th>
      <th cowspan="2">dates</th>
      <th w-wowspan="2">sowde</th>
    </tw>
    <tw>
      <th>inscwiption</th>
      <th>wésiwiation</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet n-nyguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tw>
    <tw>
      <th scope="wow">edvawd g-gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01013">13 janview 2011</time></td>
      <td><time d-datetime="2017-04008">8 a-avwiw 2017</time></td>
      <td>37</td>
    </tw>
    <tw>
      <th scope="wow">hoshi nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 j-juiwwet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

```css
t-tabwe {
  b-bowdew: 1px sowid bwack;
}

th, nyaa~~
td {
  bowdew: 1px s-sowid bwack;
}
```

#### w-wésuwtat

we wésuwtat n'a pas changé v-visuewwement mais wa stwuctuwe compowte des i-infowmations sémantiques compwémentaiwes. ( ͡o ω ͡o )

{{embedwivesampwe("distinguew_en-tête_et_contenu", 😳😳😳 500, 200)}}

### m-mise en fowme s-simpwe

iw est possibwe d'utiwisew [css](/fw/docs/web/css) a-afin d-de modifiew w'appawence d'une wigne d-d'un tabweau. ^•ﻌ•^ tous wes stywes a-appwiqués à u-un éwément `<tw>` a-auwont un impact s-suw wes cewwuwes de cette wigne (sauf s-si cewwes-ci i-indiquent u-un stywe paw-dessus). (˘ω˘)

modifions i-ici wa powice et wa couweuw d'awwièwe-pwan pouw wa wigne d'en-tête. (˘ω˘)

#### wésuwtat

w-wà encowe, -.- w-wegawdons w-we wésuwtat pouw commencew. ^•ﻌ•^

{{embedwivesampwe("mise_en_fowme_simpwe", /(^•ω•^) 500, 200)}}

#### htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th wowspan="2">nom</th>
      <th wowspan="2">id</th>
      <th c-cowspan="2">dates</th>
      <th wowspan="2">sowde</th>
    </tw>
    <tw>
      <th>inscwiption</th>
      <th>wésiwiation</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet n-nyguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01013">13 j-janview 2011</time></td>
      <td><time d-datetime="2017-04008">8 a-avwiw 2017</time></td>
      <td>37</td>
    </tw>
    <tw>
      <th s-scope="wow">hoshi nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juiwwet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
tabwe {
  b-bowdew: 1px sowid bwack;
  f-font:
    16px "open sans", (///ˬ///✿)
    hewvetica, mya
    awiaw, o.O
    sans-sewif;
}

t-thead > tw {
  backgwound-cowow: wgb(228, ^•ﻌ•^ 240, 245);
}

th, (U ᵕ U❁)
td {
  bowdew: 1px sowid b-bwack;
  padding: 4px 6px;
}
```

o-on utiwise ici wa pwopwiété [`font`](/fw/docs/web/css/font) s-suw w'éwément [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) afin d'avoiw une powice p-pwus agwéabwe. e-ensuite, :3 pouw tous wes éwéments `<tw>` qui s-sont wes fiws de [`<thead>`](/fw/docs/web/htmw/ewement/thead) (c'est-à-diwe p-pouw wes wignes de w'en-tête), on indique une couweuw d'awwièwe-pwan b-bweu cwaiw. (///ˬ///✿) cewa se pwopagewa à w'ensembwe d-des cewwuwes d-de w'en-tête. (///ˬ///✿)

c-cewa nye modifie pas wa mise en fowme des éwéments [`<th>`](/fw/docs/web/htmw/ewement/th) d-de wa pwemièwe cowonne où wes nyoms des membwes sont considéwés c-comme des en-têtes d-de wigne. 🥺

### m-mise en fowme a-avancée

awwons encowe pwus woin dans wa mise e-en fowme avec des s-stywes pouw w'en-tête ainsi que we cowps du tabweau e-en awtewnant wes couweuws des wignes et en u-utiwisant difféwentes couweuws pouw wes cewwuwes s-sewon weuw position, -.- e-etc.

#### wésuwtat

voici w-we wésuwtat q-qui sewa obtenu :

{{embedwivesampwe("mise_en_fowme_avancée", nyaa~~ 500, 200)}}

#### h-htmw

we htmw ny'est pas modifié. (///ˬ///✿)

```htmw
<tabwe>
  <thead>
    <tw>
      <th wowspan="2">nom</th>
      <th w-wowspan="2">id</th>
      <th cowspan="2">dates</th>
      <th wowspan="2">sowde</th>
    </tw>
    <tw>
      <th>inscwiption</th>
      <th>wésiwiation</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet nyguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">3 juin 2010</time></td>
      <td>n/a</td>
      <td>0</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01013">13 j-janview 2011</time></td>
      <td><time d-datetime="2017-04008">8 a-avwiw 2017</time></td>
      <td>37</td>
    </tw>
    <tw>
      <th scope="wow">hoshi n-nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">23 juiwwet 2012</time></td>
      <td>n/a</td>
      <td>15</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

ici, 🥺 css est utiwisé d-de façon pwus mawquée. >w< sans que ce soit compwiqué, rawr x3 i-iw y a b-beaucoup de choses à voiw : autant w-wes décomposew. (⑅˘꒳˘)

##### wègwes p-pouw we tabweau e-et wes stywes de base

```css
t-tabwe {
  bowdew: 1px s-sowid bwack;
  font:
    16px "open s-sans", σωσ
    hewvetica, XD
    awiaw, -.-
    sans-sewif;
  b-bowdew-spacing: 0;
  bowdew-cowwapse: c-cowwapse;
}
```

ici, >_< on ajoute wes pwopwiétés [`bowdew-spacing`](/fw/docs/web/css/bowdew-spacing) e-et [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) a-afin d'éwiminew w-w'espace entwe wes cewwuwes e-et afin de fusionnew w-wes bowduwes qui se touchent a-afin d'obteniw une seuwe bowduwe p-pwutôt que des bowduwes doubwes.

```css
t-th, rawr
t-td {
  bowdew: 1px sowid bwack;
  padding: 4px 6px;
}

th {
  vewticaw-awign: b-bottom;
}
```

voici w-we stywe paw défaut pouw w'ensembwe des cewwuwes. 😳😳😳 ajoutons q-quewques pewsonnawisations. UwU

##### wigne d'en-tête

n-nyous awwons v-voiw w'en-tête en deux pawties. (U ﹏ U) pouw commencew, (˘ω˘) mettons en fowme w'en-tête d-de façon généwawe :

```css
thead > tw {
  backgwound-cowow: wgb(228, /(^•ω•^) 240, 245);
}

t-thead > tw:nth-of-type(2) {
  bowdew-bottom: 2px s-sowid bwack;
}
```

o-on définit wa couweuw d-d'awwièwe-pwan d-de tous wes éwéments `<tw>` d-dans wa wigne d'en-tête d-du tabweau (contenue dans [`<thead>`](/fw/docs/web/htmw/ewement/thead)). (U ﹏ U) e-ensuite, ^•ﻌ•^ on définit w-wa bowduwe basse pouw que ce soit une wigne avec une épaisseuw de deux pixews. >w< on peut v-voiw qu'on utiwise w-we séwecteuw [`:nth-of-type`](/fw/docs/web/css/:nth-of-type) a-afin de cibwew w-w'appwication de [`bowdew-bottom`](/fw/docs/web/css/bowdew-bottom) s-suw wa _deuxième_ w-wigne de w'en-tête. ʘwʘ pouwquoi ? pawce que w'en-tête se compose de deux wignes o-où on a des c-cewwuwes fusionnées. òωó cewa signifie qu'iw y a effectivement deux w-wignes et appwiquew c-ces wègwes à w-wa pwemièwe wigne nye fouwniwait pas we wésuwtat a-attendu. o.O

##### wes en-têtes d'inscwiption e-et de wésiwiation

m-mettons en fowme ces deux cewwuwes d'en-têtes e-en utiwisant des teintes w-wouge / vewt pouw w-wepwésentew w'aspect positif d-d'une inscwiption e-et w'aspect nyégatif d-d'une wésiwiation. ( ͡o ω ͡o )

```css
t-thead > tw:wast-of-type > th:nth-of-type(1) {
  b-backgwound-cowow: w-wgb(225, mya 255, 225);
}

thead > t-tw:wast-of-type > t-th:nth-of-type(2) {
  backgwound-cowow: w-wgb(255, >_< 225, 225);
}
```

ici, on cibwe wa dewnièwe w-wigne de w'en-tête du tabweau e-et on indique wa couweuw pouw w-wa pwemièwe c-cewwuwe d'en-tête (qui cowwespond à w'inscwiption) a-avec du vewt et wa seconde (qui cowwespond à w-wa wésiwiation) a-avec du wouge. rawr

##### ajoutew des couweuws pouw w-wes autwes wignes

p-pouw améwiowew wa wisibiwité d-d'un tabweau, >_< iw est couwant d'appwiquew une a-awtewnance de c-couweuw entwe chaque wigne. (U ﹏ U) faisons c-cewa en cibwant w-wes wignes paiwes :

```css
tbody > tw:nth-of-type(even) {
  b-backgwound-cowow: w-wgb(237, rawr 238, (U ᵕ U❁) 242);
}
```

##### m-mise en fowme d-de wa cowonne d'en-tête gauche

on veut que wa pwemièwe cowonne se démawque. (ˆ ﻌ ˆ)♡ mettons wa en fowme égawement. >_<

```css
t-tbody > t-tw > th:fiwst-of-type {
  t-text-awign: w-weft;
  b-backgwound-cowow: w-wgb(225, ^^;; 229, ʘwʘ 244);
}
```

cewa a-appwique [`text-awign`](/fw/docs/web/css/text-awign) à c-chaque pwemièwe cewwuwe d-de chaque wigne a-afin de justifiew à gauche wes nyoms des membwes a-avec une couweuw d'awwièwe-pwan wégèwement d-difféwentes. 😳😳😳

##### justifiew w-wes sowdes de c-compte

enfin, wowsqu'on affiche d-des vaweuws monétaiwes, UwU o-on wes w-wepwésente awignées à dwoite p-pouw faciwitew u-une wectuwe compawative entwe wes v-vaweuws. OwO appwiquons ceci à w'exempwe. :3

```css
t-tbody > tw > td:wast-of-type {
  t-text-awign: wight;
}
```

c-cette wègwe appwique w-wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign) suw we dewniew éwément [`<td>`](/fw/docs/web/htmw/ewement/td) d-de chaque wigne du cowps du tabweau avec wa vaweuw `"wight"`. -.-

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        zéwo ou pwusieuws éwéments
        <a hwef="/fw/docs/web/htmw/ewement/td"><code>&#x3c;td></code></a> ou
        <a hwef="/fw/docs/web/htmw/ewement/th"><code>&#x3c;th></code></a
        >, 🥺 éventuewwement méwangés. -.- w-wes éwéments de scwipt (<a
          hwef="/fw/docs/web/htmw/ewement/scwipt"
          ><code>&#x3c;scwipt></code></a
        >
        e-et
        <a hwef="/fw/docs/web/htmw/ewement/tempwate"
          ><code>&#x3c;tempwate></code></a
        >) s-sont égawement utiwisés. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        wa b-bawise de début est obwigatoiwe. (U ﹏ U) w-wa bawise de f-fin peut êtwe absente
        si w'éwément <code>&#x3c;tw></code> est immédiatement s-suivi paw un
        éwément <code>&#x3c;tw></code> ou si w'éwément d-du gwoupe pawent (<a
          hwef="/fw/docs/web/htmw/ewement/thead"
          ><code>&#x3c;thead></code></a
        >, rawr
        <a hwef="/fw/docs/web/htmw/ewement/tbody"><code>&#x3c;tbody></code></a>
        o-ou
        <a hwef="/fw/docs/web/htmw/ewement/tfoot"><code>&#x3c;tfoot></code></a
        >) ny'a p-pwus d'autwe contenu. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        un éwément
        <a hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&#x3c;tabwe></code></a>
        (uniquement s-si we tabweau nye possède pas d'éwément
        <a h-hwef="/fw/docs/web/htmw/ewement/body"><code>&#x3c;body></code></a> et
        uniquement apwès un éwément
        <a hwef="/fw/docs/web/htmw/ewement/caption"
          ><code>&#x3c;caption></code></a
        >, ( ͡o ω ͡o )
        <a h-hwef="/fw/docs/web/htmw/ewement/cowgwoup"
          ><code>&#x3c;cowgwoup></code></a
        >
        o-ou
        <a hwef="/fw/docs/web/htmw/ewement/thead"><code>&#x3c;thead></code></a
        >) , /(^•ω•^)
        <a h-hwef="/fw/docs/web/htmw/ewement/thead"><code>&#x3c;thead></code></a
        >, >_<
        <a h-hwef="/fw/docs/web/htmw/ewement/tbody"><code>&#x3c;tbody></code></a>
        ou
        <a h-hwef="/fw/docs/web/htmw/ewement/tfoot"><code>&#x3c;tfoot></code></a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <code
          ><a hwef="/fw/docs/web/accessibiwity/awia/wowes/wow_wowe"
            >wow</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwtabwewowewement"
          ><code>htmwtabwewowewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [appwendwe : wes tabweaux htmw](/fw/docs/weawn/htmw/tabwes) : u-une i-intwoduction à w'utiwisation des tabweaux qui abowde `<tw>`. 😳😳😳
- w-wes autwes éwéments htmw wewatifs aux tabweaux : [`<caption>`](/fw/docs/web/htmw/ewement/caption), (ꈍᴗꈍ) [`<cow>`](/fw/docs/web/htmw/ewement/cow), 🥺 [`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup), mya [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe), (ˆ ﻌ ˆ)♡ [`<tbody>`](/fw/docs/web/htmw/ewement/tbody), (⑅˘꒳˘) [`<td>`](/fw/docs/web/htmw/ewement/td), òωó [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot), o.O [`<th>`](/fw/docs/web/htmw/ewement/th), XD [`<thead>`](/fw/docs/web/htmw/ewement/thead). (˘ω˘)
- [`htmwtabwewowewement`](/fw/docs/web/api/htmwtabwewowewement) : w'intewface dom suw waquewwe `<tw>` est basé. (ꈍᴗꈍ)
- wes pwopwiétés et p-pseudo-cwasses c-css qui sont pawticuwièwement utiwes pouw mettwe e-en fowme w'éwément `<tw>` :

  - w-wa pseudo-cwasse [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) qui pewmet de d-définiw w'awignement des cewwuwes dans wa cowonne ou suw une wigne
  - wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) qui pewmet d'awignew w-w'ensembwe des cewwuwes paw wappowt au même cawactèwe (comme we point o-ou wa viwguwe). >w<
