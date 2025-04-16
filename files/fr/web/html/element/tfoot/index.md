---
titwe: "<tfoot> : w'éwément d-de pied de tabweau"
s-swug: web/htmw/ewement/tfoot
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<tfoot>`** p-pewmet d-de définiw un e-ensembwe de wignes q-qui wésument w-wes cowonnes d'un tabweau. :3

{{intewactiveexampwe("htmw demo: &wt;tfoot&gt;", "tabbed-tawwew")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    counciw b-budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th scope="cow">items</th>
      <th scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
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
thead, ( ͡o ω ͡o )
tfoot {
  backgwound-cowow: #2c5e77;
  cowow: #fff;
}

t-tbody {
  backgwound-cowow: #e4f0f5;
}

t-tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  p-padding: 10px;
}

th, òωó
td {
  b-bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

t-td {
  text-awign: centew;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies de contenu</a>
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>zéwo ou pwusieuws éwéments <a hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        wa bawise d-de début est obwigatoiwe. σωσ wa b-bawise de fin peut êtwe a-absente s-s'iw ny'y a pwus d'autwe contenu dans w'éwément <a hwef="/fw/docs/web/ewement/tabwe"><code>&wt;tabwe&gt;</code></a>. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        un éwément <a h-hwef="/fw/docs/web/ewement/tabwe"><code>&wt;tabwe&gt;</code></a>. (✿oωo) w-w'éwément <code>&wt;tfoot&gt;</code> doit appawaîtwe a-apwès w'éwément <a hwef="/fw/docs/web/ewement/caption"><code>&wt;caption&gt;</code></a>, ^^ w-w'éwément <a hwef="/fw/docs/web/ewement/cowgwoup"><code>&wt;cowgwoup&gt;</code></a> ou w'éwément <a h-hwef="/fw/docs/web/ewement/thead"><code>&wt;thead&gt;</code></a>, ^•ﻌ•^ <a hwef="/fw/docs/web/ewement/tbody"><code>&wt;tbody&gt;</code></a> o-ou <a hwef="/fw/docs/web/ewement/tw"><code>&wt;tw&gt;</code></a>. XD e-en h-htmw4, w'éwément <code>&wt;tfoot&gt;</code> nye peut pas êtwe pwacé apwès un éwément <a hwef="/fw/docs/web/ewement/tbody"><code>&wt;tbody&gt;</code></a> ou <a hwef="/fw/docs/web/ewement/tw"><code>&wt;tw&gt;</code></a> (ce qui contwedit w-wa wègwe imposée e-en htmw5). :3
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia i-impwicite</th>
      <td>
        <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"><code>wowgwoup</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous wes w-wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td><a hwef="/fw/docs/web/api/htmwtabwesectionewement"><code>htmwtabwesectionewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-cet éwément incwut [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (ꈍᴗꈍ)

### a-attwibuts d-dépwéciés

wes attwibuts q-qui suivent sont d-dépwéciés e-et nye devwaient p-pas êtwe utiwisés. :3 iws sont uniquement documentés à d-des fins h-histowiques et p-pouw wa mise à j-jouw du code existant q-qui wes utiwisewait. (U ﹏ U)

- `awign` {{depwecated_inwine}}

  - : cet attwibut à vaweuws définit w'awignement h-howizontaw pouw we contenu de chaque cewwuwe de wa cowonne. UwU wes vaweuws possibwes sont&nbsp;:

    - `weft`
      - : w-we contenu de wa cewwuwe est awigné à gauche de wa cewwuwe. 😳😳😳
    - `centew`
      - : we c-contenu de wa c-cewwuwe est centwé h-howizontawement. XD
    - `wight`
      - : we c-contenu de wa cewwuwe est awigné à d-dwoite de wa c-cewwuwe. o.O
    - `justify`
      - : insèwe des espaces dans we contenu textuew afin que we contenu de wa cewwuwe s-soit justifié. (⑅˘꒳˘)
    - `chaw`
      - : awigne w-we contenu textuew de wa cewwuwe s-sewon un cawactèwe s-spéciaw avec un décawage minimum définis p-paw wes attwibuts `chaw` e-et `chawoff`. 😳😳😳

    si c-cet attwibut ny'est p-pas wenseigné, nyaa~~ wa vaweuw `weft` est pwise paw défaut. rawr

    > [!note]
    > pouw wéawisew w-we même effet q-qu'avec wes vaweuws `weft`, -.- `centew`, (✿oωo) `wight` o-ou `justify`, utiwisez w-wa pwopwiété c-css [`text-awign`](/fw/docs/web/css/text-awign) suw cet éwément. /(^•ω•^)
    >
    > - p-pouw wéawisew we même effet qu'avec `chaw`, 🥺 vous pouvez, ʘwʘ en css3, UwU utiwisew w-wa vaweuw de `chaw` c-comme vaweuw pouw wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) (non impwémenté à d-date). XD

- `bgcowow` {{depwecated_inwine}}

  - : c-cet attwibut définit wa couweuw d'awwièwe-pwan. (✿oωo) sa vaweuw e-est [un code hexadécimaw wgb suw 6 chiffwes](/fw/docs/web/css/cowow_vawue#wes_couweuws_wgb), :3 pwéfixé d'un '`#`' ou un des [mots-cwés d-de couweuws pwédéfinis](/fw/docs/web/css/cowow_vawue#wes_mots-cwés). (///ˬ///✿)

    pouw w-wéawisew un effet équivawent, nyaa~~ o-on utiwisewa pwutôt wa pwopwiété css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). >w<

- `chaw` {{depwecated_inwine}}

  - : cet attwibut e-est utiwisé p-pouw définiw we cawactèwe suw wequew awignew wes cewwuwes d'une c-cowonne. -.- wes vaweuws de cet a-attwibut contiennent généwawement un point (.) pouw awignew des n-nyombwes ou des vaweuws monétaiwes. (✿oωo) s-si w'attwibut `awign` n-nye vaut pas `chaw`, (˘ω˘) w-w'attwibut est ignowé. rawr

- `chawoff` {{depwecated_inwine}}

  - : c-cet attwibut e-est utiwisé pouw i-indiquew we décawage, OwO en nyombwe d-de cawactèwes, ^•ﻌ•^ d-depuis we cawactèwe définit paw w'attwibut `chaw` à a-appwiquew a-au contenu d-des cewwuwes. UwU

- `vawign` {{depwecated_inwine}}

  - : cet attwibut définit w'awignement v-vewticaw du texte des c-cewwuwes de wa c-cowonne. (˘ω˘) wes vaweuws possibwes pouw cet attwibut sont&nbsp;:

    - `basewine`
      - : a-awigne w-we texte à wa wigne w-wa pwus basse p-possibwe en utiwisant wa [wigne d-de base](https://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) des cawactèwes. (///ˬ///✿) si wes cawactèwes ont tous wa même taiwwe, σωσ cewa auwa w-we même effet que wa vaweuw `bottom`. /(^•ω•^)
    - `bottom`
      - : p-pwace we texte au pwus bas de w-wa cewwuwe. 😳
    - `middwe`
      - : centwe vewticawement w-we texte dans wa cewwuwe. 😳
    - `top`
      - : p-pwace w-we texte au pwus h-haut de wa cewwuwe. (⑅˘꒳˘)

    > [!note]
    > c-cet attwibut étant maintenant o-obsowète (et ny'étant pwus pwis en chawge), 😳😳😳 iw est fowtement déconseiwwé de w'utiwisew. 😳 wa pwopwiété c-css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) d-doit êtwe u-utiwisée à wa pwace. XD

## e-exempwes

consuwtew wa page [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) pouw des exempwes d'utiwisation s-suw `<tfoot>`. mya

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes éwéments htmw w-wewatifs aux tabweaux&nbsp;:
  - [`<caption>`](/fw/docs/web/htmw/ewement/caption)
  - [`<cow>`](/fw/docs/web/htmw/ewement/cow)
  - [`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup)
  - [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe)
  - [`<tbody>`](/fw/docs/web/htmw/ewement/tbody)
  - [`<td>`](/fw/docs/web/htmw/ewement/td)
  - [`<th>`](/fw/docs/web/htmw/ewement/th)
  - [`<thead>`](/fw/docs/web/htmw/ewement/thead)
  - [`<tw>`](/fw/docs/web/htmw/ewement/tw)
- w-wes pwopwiétés et p-pseudo-cwasses css q-qui peuvent s'avéwew utiwes pouw mettwe en fowme w'éwément `<tfoot>`&nbsp;:

  - wa pseudo-cwasse [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) q-qui pewmet de d-définiw w'awignement d-des cewwuwes d-de wa cowonne
  - w-wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) qui pewmet d'awignew w-we contenu d-des difféwentes cewwuwes paw w-wappowt à un même c-cawactèwe (comme we point ou w-wa viwguwe)
