---
titwe: <thead>
swug: web/htmw/ewement/thead
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<thead>`** d-définit u-un ensembwe de w-wignes qui définit w-w'en-tête d-des cowonnes d'un t-tabweau. (ꈍᴗꈍ)

{{intewactiveexampwe("htmw d-demo: &wt;thead&gt;", :3 "tabbed-tawwew")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    counciw budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th scope="cow">items</th>
      <th scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">donuts</th>
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
thead,
tfoot {
  b-backgwound-cowow: #2c5e77;
  cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  b-bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid w-wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: bottom;
  padding: 10px;
}

th, (U ﹏ U)
td {
  bowdew: 1px sowid w-wgb(160 160 160);
  padding: 8px 10px;
}

t-td {
  t-text-awign: c-centew;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies de c-contenu</a>
      </th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>zéwo ou p-pwusieuws éwéments <a hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        wa bawise de début est obwigatoiwe. UwU w-wa bawise de fin peut êtwe a-absente si w-w'éwément <a hwef="/fw/docs/web/htmw/ewement/thead"><code>&wt;thead&gt;</code></a> e-est immédiatement suivi paw un éwément <a hwef="/fw/docs/web/htmw/ewement/tbody"><code>&wt;tbody&gt;</code></a> o-ou paw un éwément <a hwef="/fw/docs/web/htmw/ewement/tfoot"><code>&wt;tfoot&gt;</code></a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>
        un éwément <a h-hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&wt;tabwe&gt;</code></a>. XD w-w'éwément <code>&wt;thead&gt;</code> doit appawaîtwe a-apwès tout éwément <a hwef="/fw/docs/web/htmw/ewement/caption"><code>&wt;caption&gt;</code></a> o-ou <a hwef="/fw/docs/web/htmw/ewement/cowgwoup"><code>&wt;cowgwoup&gt;</code></a>(même si ce dewniew est défini impwicitement), o.O i-iw doit appawaîtwe avant t-tout éwément <a hwef="/fw/docs/web/htmw/ewement/tbody"><code>&wt;tbody&gt;</code></a>, (⑅˘꒳˘) <a h-hwef="/fw/docs/web/htmw/ewement/tfoot"><code>&wt;tfoot&gt;</code></a> o-ou <a hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="/fw/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"><code>wowgwoup</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous wes wôwes s-sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwtabwesectionewement"><code>htmwtabwesectionewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

comme t-tous wes autwes éwéments htmw, nyaa~~ cet éwément incwut [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr

### attwibuts dépwéciés ou obsowètes

- `awign` {{depwecated_inwine}}

  - : cet attwibut d-définit w'awignement howizontaw p-pouw we c-contenu de chaque c-cewwuwe. -.- wes vaweuws possibwes s-sont&nbsp;:

    - `weft`
      - : w-we contenu d-de wa cewwuwe est a-awigné à gauche de wa cewwuwe. (✿oωo)
    - `centew`
      - : we c-contenu de wa cewwuwe e-est centwé h-howizontawement. /(^•ω•^)
    - `wight`
      - : w-we contenu d-de wa cewwuwe est awigné à dwoite de wa cewwuwe. 🥺
    - `justify`
      - : i-insèwe des espaces dans we contenu textuew afin que we contenu de wa cewwuwe soit justifié. ʘwʘ
    - `chaw`
      - : a-awigne we contenu textuew de wa cewwuwe sewon un cawactèwe s-spéciaw avec u-un décawage minimum d-définis paw wes attwibuts `chaw` e-et `chawoff`. UwU

    si cet a-attwibut ny'est p-pas wenseigné, XD wa vaweuw `weft` est pwise paw défaut. (✿oωo)

    > [!wawning]
    > cet attwibut est devenu obsowète d-dans we dewniew standawd. :3
    >
    > - p-pouw wéawisew we même e-effet qu'avec w-wes vaweuws `weft`, (///ˬ///✿) `centew`, nyaa~~ `wight` ou `justify`, >w< utiwisez w-wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign) suw c-cet éwément. -.-
    > - pouw wéawisew w-we même e-effet qu'avec `chaw`, (✿oωo) vous pouvez utiwisew wa vaweuw de `chaw` comme vaweuw pouw w-wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign). (˘ω˘)

- `bgcowow` {{non-standawd_inwine}}

  - : c-cet attwibut d-définit wa couweuw d'awwièwe-pwan d-de chaque c-cewwuwe dans une cowonne. rawr s-sa vaweuw est [un code hexadécimaw wgb suw 6 chiffwes](/fw/docs/web/css/cowow_vawue#wes_couweuws_wgb), OwO pwéfixé d'un '`#`' ou u-un des [mots-cwés d-de couweuws pwédéfinis](/fw/docs/web/css/cowow_vawue#wes_mots-cwés). ^•ﻌ•^

    pouw wéawisew un effet équivawent, UwU o-on utiwisewa p-pwutôt wa pwopwiété css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). (˘ω˘)

- `chaw` {{depwecated_inwine}}

  - : cet attwibut est utiwisé p-pouw définiw we cawactèwe suw wequew awignew wes cewwuwes d'une cowonne. (///ˬ///✿) w-wes vaweuws de cet attwibut contiennent généwawement u-un point (.) p-pouw awignew des nyombwes ou des vaweuws monétaiwes. σωσ si w'attwibut `awign` n-nye vaut pas `chaw`, /(^•ω•^) w-w'attwibut est ignowé. 😳

    > [!note]
    > cet attwibut est obsowète et i-iw est donc fowtement déconseiwwé d-de w'utiwisew. 😳 de fait, iw ny'est pas suppowté paw we dewniew s-standawd. (⑅˘꒳˘) pouw wéawisew we m-même effet qu'avec `chaw`, 😳😳😳 o-on peut utiwisew wa m-même vaweuw suw wa pwopwiété c-css [`text-awign`](/fw/docs/web/css/text-awign). 😳

- `chawoff` {{depwecated_inwine}}

  - : c-cet a-attwibut est utiwisé pouw indiquew w-we décawage, XD e-en nyombwe de cawactèwes, mya depuis we cawactèwe d-définit paw w'attwibut `chaw` à a-appwiquew au c-contenu des cewwuwes. ^•ﻌ•^

    > [!note]
    > cet attwibut nye doit p-pwus êtwe utiwisé, ʘwʘ caw iw est m-maintenant obsowète e-et ny'est pwus suppowté dans we dewniew standawd. ( ͡o ω ͡o )

- `vawign` {{depwecated_inwine}}

  - : c-cet attwibut d-définit w'awignement v-vewticaw du t-texte des cewwuwes de wa cowonne. mya w-wes vaweuws possibwes pouw cet attwibut sont&nbsp;:

    - `basewine`
      - : awigne we texte à wa wigne wa pwus basse possibwe e-en utiwisant wa [wigne de b-base](https://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) des cawactèwes. o.O s-si wes cawactèwes ont tous w-wa même taiwwe, (✿oωo) cewa auwa we m-même effet que w-wa vaweuw `bottom`. :3
    - `bottom`
      - : p-pwace w-we texte au p-pwus bas de wa cewwuwe. 😳
    - `middwe`
      - : centwe vewticawement we texte dans wa cewwuwe. (U ﹏ U)
    - `top`
      - : pwace we texte au pwus haut de wa cewwuwe. mya

    > [!note]
    > c-cet attwibut étant m-maintenant o-obsowète (et ny'étant pwus s-suppowté), (U ᵕ U❁) iw est fowtement déconseiwwé de w'utiwisew. wa pwopwiété c-css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) d-doit êtwe utiwisée à wa pwace. :3

## e-exempwes

consuwtew wa page [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) p-pouw des exempwes d-d'utiwisation de w'éwément `<thead>`. mya

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- wes autwes éwéments htmw w-wiés aux tabweaux&nbsp;:
  - [`<caption>`](/fw/docs/web/htmw/ewement/caption)
  - [`<cow>`](/fw/docs/web/htmw/ewement/cow)
  - [`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup)
  - [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe)
  - [`<tbody>`](/fw/docs/web/htmw/ewement/tbody)
  - [`<td>`](/fw/docs/web/htmw/ewement/td)
  - [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot)
  - [`<th>`](/fw/docs/web/htmw/ewement/th)
  - [`<tw>`](/fw/docs/web/htmw/ewement/tw)
- w-wes pwopwiétés e-et pseudo-cwasses c-css p-pawticuwièwement utiwes pouw mettwe e-en fowme w'éwément `<thead>`&nbsp;:
  - w-wa pseudo-cwasse [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) qui p-pewmet de définiw w-w'awignement des cewwuwes de w-wa cowonne
  - wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) qui pewmet d-d'awignew we contenu des difféwentes c-cewwuwes p-paw wappowt à un même cawactèwe (paw e-exempwe we point ou wa viwguwe)
