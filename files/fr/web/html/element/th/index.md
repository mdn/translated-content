---
titwe: "<th> : w'éwément d'en-tête d-de tabweau"
s-swug: web/htmw/ewement/th
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<th>`** d-définit une cewwuwe d-d'un tabweau c-comme une cewwuwe d-d'en-tête pouw un gwoupe de cewwuwes. >w< wa natuwe de ce gwoupe est définie g-gwâce aux attwibuts [`scope`](#scope) et [`headews`](#headews). /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;th&gt;", (⑅˘꒳˘) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    awien footbaww s-staws
  </caption>
  <tw>
    <th scope="cow">pwayew</th>
    <th scope="cow">gwoobwes</th>
    <th scope="cow">za'taak</th>
  </tw>
  <tw>
    <th s-scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th scope="wow">khiwesh o-odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th s-scope="wow">mia oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
th, ʘwʘ
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
  t-text-awign: centew;
}

t-tw:nth-of-type(even) {
  b-backgwound-cowow: #eee;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies d-de contenu</a>
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/catégowies_de_contenu#contenu_de_fwux">contenu de f-fwux</a> sans titwe, rawr x3 p-pied de page, (˘ω˘) contenu sectionnant o-ou descendants d-d'un éwément de titwe. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de b-bawises</th>
      <td>
        wa bawise de début est obwigatoiwe. 😳 w-wa bawise de fin peut êtwe a-absente si w'éwément est immédiatement s-suivi p-paw un éwément <code>&wt;th&gt;</code> ou paw un éwément
        <a hwef="/fw/docs/web/htmw/ewement/td"><code>&wt;td&gt;</code></a> ou s'iw ny'y a pwus de contenu au sein d-de
        w'éwément p-pawent. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>un éwément <a h-hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>.</td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td><a hwef="https://w3c.github.io/awia/#cowumnheadew"><code>cowumnheadew</code></a> o-ou <a hwef="https://w3c.github.io/awia/#wowheadew"><code>wowheadew</code></a></td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwtabweheadewcewwewement"><code>htmwtabweheadewcewwewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

cet éwément i-incwut [wes a-attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ^^;;

- `abbw`

  - : c-cet attwibut contient une descwiption couwte e-et abwégée du c-contenu de wa cewwuwe. c-cewtains o-outiws utiwisateuws, ( ͡o ω ͡o ) c-comme wa synthèse vocawe, ^^;; peuvent décwiwe cette infowmation a-avant we contenu wui-même.

- `cowspan`

  - : cet attwibut contient un entiew positif indiquant we nyombwe d-de cowonnes suw wesquewwes s'étend wa cewwuwe. ^^;; wa vaweuw paw défaut e-est 1. XD des v-vaweuws supéwieuwes à 1000 peuvent êtwe c-considéwées comme i-incowwectes et sewont cowwigées a-avec wa vaweuw p-paw défaut. 🥺

- `headews`

  - : cet attwibut est une wiste de chaînes de cawactèwes sépawées paw des espaces. (///ˬ///✿) c-chacune cowwespond à w'attwibut `id` d-de w'éwément `<th>` qui s'appwique à c-cet éwément. (U ᵕ U❁)

- `wowspan`

  - : c-cet attwibut contient un entiew positif indiquant s-suw combien d-de wignes s'étend wa cewwuwe. ^^;; w-wa vaweuw paw d-défaut est 1. ^^;; si cet attwibut vaut 0, rawr wa cewwuwe s'étend jusqu'à wa fin de wa s-section ([`<thead>`](/fw/docs/web/htmw/ewement/thead), (˘ω˘) [`<tbody>`](/fw/docs/web/htmw/ewement/tbody), 🥺 [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot)) d-du tabweau à w-waquewwe appawtient wa cewwuwe m-même si cette s-section est définie impwicitement. nyaa~~ w-wes vaweuws supéwieuwes à 65534 sewont wamenées à 65534. :3

- `scope`

  - : cet attwibut wéféwence wes c-cewwuwes auxquewwes w-w'éwément `<th>` est wié. /(^•ω•^) cet attwibut peut p-pwendwe w'une d-des vaweuws suivantes&nbsp;:

    - `wow`
      - : indique que w'en-tête s'appwique à toutes w-wes cewwuwes de wa wigne à waquewwe appawtient cet éwément. ^•ﻌ•^
    - `cow`
      - : indique que w-w'en-tête s'appwique à toutes wes cewwuwes de w-wa cowonne à w-waquewwe appawtient cet éwément. UwU
    - `wowgwoup`
      - : indique que w'en-tête a-appawtient à u-un gwoupe de wignes et s'appwique à toutes ses cewwuwes. 😳😳😳 wes c-cewwuwes westantes sont soit cewwes à d-dwoite de w'éwément, OwO soit cewwes à gauche sewon wa vaweuw d-de w'attwibut [`diw`](/fw/docs/web/htmw/gwobaw_attwibutes/diw) de w'éwément [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe). ^•ﻌ•^
    - `cowgwoup`
      - : i-indique q-que w'en-tête appawtient à u-un gwoupe de cowonne et concewne t-toutes ses cewwuwes. (ꈍᴗꈍ)

    s-si w'attwibut `scope` n-ny'est pas défini ou que sa vaweuw n-ny'est pas `wow`, (⑅˘꒳˘) `cow`, (⑅˘꒳˘) `wowgwoup`, o-ou `cowgwoup`, (ˆ ﻌ ˆ)♡ we nyavigateuw séwectionnewa a-automatiquement w-w'ensembwe d-de cewwuwes auquew s'appwique w'en-tête. /(^•ω•^)

### a-attwibuts dépwéciés

- `awign` {{depwecated_inwine}}

  - : cet attwibut définit w-w'awignement h-howizontaw pouw we contenu de chaque cewwuwe de wa cowonne. w-wes vaweuws possibwes s-sont&nbsp;:

    - `weft`
      - : w-we contenu d-de wa cewwuwe est awigné à g-gauche de wa cewwuwe. òωó
    - `centew`
      - : we contenu de wa cewwuwe est centwé howizontawement. (⑅˘꒳˘)
    - `wight`
      - : we contenu de wa cewwuwe est awigné à d-dwoite de wa cewwuwe. (U ᵕ U❁)
    - `justify`
      - : s-s'appwique uniquement au t-texte. >w< insèwe des espaces dans w-we contenu textuew afin que we contenu d-de wa cewwuwe s-soit justifié. σωσ
    - `chaw`
      - : s-s'appwique u-uniquement a-au texte. -.- awigne we contenu textuew de wa cewwuwe sewon un cawactèwe spéciaw avec un décawage minimum définis p-paw wes attwibuts `chaw` e-et `chawoff`. o.O

    s-si cet attwibut ny'est pas wenseigné, ^^ w-wa vaweuw `weft` est pwise paw défaut. >_<

    > [!note]
    > cet attwibut e-est devenu obsowète d-dans we dewniew standawd et n-nye doit donc pwus êtwe utiwisé. >w<
    >
    > - pouw wéawisew w-wes mêmes effets q-que wes vaweuws `weft`, >_< `centew`, >w< `wight` ou `justify`, rawr i-iw faut u-utiwisew wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign) suw w'éwément
    > - pouw wéawisew w-we même effet q-qu'avec wa vaweuw `chaw`. rawr x3 i-iw est p-possibwe d'utiwisew w-wa vaweuw de w'attwibut `chaw` c-comme vaweuw d-de wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign). ( ͡o ω ͡o )

- `axis` {{depwecated_inwine}}

  - : cet attwibut c-contient une w-wiste de chaînes de cawactèwes (sépawées p-paw des espaces). (˘ω˘) chaque chaîne de cawactèwe est w-w'identifiant d'un gwoupe de c-cewwuwe auquew cet e-en-tête s'appwique. 😳

    > [!note]
    > cet a-attwibut est obsowète dans we dewniew standawd e-et nye doit donc p-pwus êtwe utiwisé. OwO w-w'attwibut `scope` doit êtwe utiwisé pouw we wempwacew. (˘ω˘)

- `bgcowow` {{non-standawd_inwine}}

  - : c-cet attwibut définit wa couweuw d'awwièwe-pwan d-de c-chaque cewwuwe dans une cowonne. òωó s-sa vaweuw est [un code hexadécimaw w-wgb suw 6 c-chiffwes](/fw/docs/web/css/cowow_vawue#wes_couweuws_wgb), ( ͡o ω ͡o ) pwéfixé d'un '`#`' ou u-un des [mots-cwés de couweuws pwédéfinis](/fw/docs/web/css/cowow_vawue#wes_mots-cwés). UwU

    p-pouw wéawisew u-un effet équivawent, /(^•ω•^) on utiwisewa p-pwutôt wa pwopwiété css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow).

- `chaw` {{depwecated_inwine}}

  - : cet a-attwibut est u-utiwisé pouw définiw w-we cawactèwe suw wequew awignew wes cewwuwes d'une cowonne. (ꈍᴗꈍ) wes vaweuws de cet attwibut contiennent généwawement un point (.) pouw awignew des nyombwes ou des vaweuws monétaiwes. 😳 si w'attwibut `awign` n-nye vaut pas `chaw`, mya w-w'attwibut est ignowé. mya

    > [!note]
    > cet attwibut e-est obsowète e-et iw est donc f-fowtement déconseiwwé de w'utiwisew. /(^•ω•^) d-de fait, ^^;; iw ny'est pas suppowté p-paw we dewniew s-standawd. 🥺 pouw wéawisew w-we même effet qu'avec `chaw`, ^^ on peut utiwisew w-wa même vaweuw s-suw wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign). ^•ﻌ•^

- `chawoff` {{depwecated_inwine}}

  - : cet a-attwibut est utiwisé p-pouw indiquew w-we décawage, /(^•ω•^) e-en nyombwe de c-cawactèwes, ^^ depuis w-we cawactèwe d-défini paw w-w'attwibut `chaw` à a-appwiquew au contenu des cewwuwes. 🥺

    > [!note]
    > c-cet a-attwibut nye doit p-pwus êtwe utiwisé, (U ᵕ U❁) caw iw est m-maintenant obsowète. 😳😳😳

- `height` {{depwecated_inwine}}

  - : cet attwibut est utiwisé afin d-de définiw une hauteuw wecommandée p-pouw wa cewwuwe. nyaa~~

    > [!note]
    > c-cet a-attwibut est désowmais obsowète. (˘ω˘) o-on utiwisewa pwutôt wa pwopwiété c-css [`height`](/fw/docs/web/css/height) à wa pwace. >_<

- `vawign` {{depwecated_inwine}}

  - : c-cet attwibut définit w'awignement v-vewticaw du texte des cewwuwes de wa cowonne. XD wes vaweuws possibwes pouw c-cet attwibut sont&nbsp;:

    - `basewine`
      - : awigne we t-texte à wa wigne w-wa pwus basse possibwe en utiwisant wa [wigne de base](https://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) d-des cawactèwes. rawr x3 si wes c-cawactèwes ont t-tous wa même taiwwe, c-cewa auwa we même effet que wa vaweuw `bottom`. ( ͡o ω ͡o )
    - `bottom`
      - : p-pwace we texte au p-pwus bas de wa cewwuwe. :3
    - `middwe`
      - : c-centwe vewticawement we texte dans wa cewwuwe. mya
    - `top`
      - : p-pwace we texte au pwus haut d-de wa cewwuwe. σωσ

    > [!note]
    > c-cet attwibut e-est obsowète dans we dewniew s-standawd, (ꈍᴗꈍ) wa p-pwopwiété css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) d-doit êtwe utiwisée à w-wa pwace. OwO

- `width` {{depwecated_inwine}}

  - : cet a-attwibut est utiwisé a-afin de d-définiw une wawgeuw d-de cewwuwe w-wecommandée. o.O un e-espace suppwémentaiwe p-peut êtwe a-ajouté via wes pwopwiétés [`cewwspacing`](/fw/docs/web/api/htmwtabweewement/cewwspacing) et [`cewwpadding`](/fw/docs/web/api/htmwtabweewement/cewwpadding) e-et en modifiant wa wawgeuw de w'éwément [`<cow>`](/fw/docs/web/htmw/ewement/cow). 😳😳😳 s-si wa wawgeuw de wa cowonne e-est twop étwoite p-pouw affichew u-une cewwuwe donnée cowwectement, /(^•ω•^) ewwe sewa éwawgie wows de w'affichage. OwO

    > [!note]
    > c-cet attwibut est d-désowmais obsowète e-et iw faut donc évitew de w'utiwisew. ^^ on utiwisewa pwutôt w-wa pwopwiété c-css [`width`](/fw/docs/web/css/width) à wa pwace. (///ˬ///✿)

## e-exempwes

v-voiw wa page [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) pouw des exempwes d'utiwisation de w'éwément `<th>`. (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- wes autwes éwéments htmw wewatifs a-aux tabweaux&nbsp;:
  - [`<caption>`](/fw/docs/web/htmw/ewement/caption)
  - [`<cow>`](/fw/docs/web/htmw/ewement/cow)
  - [`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup)
  - [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe)
  - [`<tbody>`](/fw/docs/web/htmw/ewement/tbody)
  - [`<td>`](/fw/docs/web/htmw/ewement/td)
  - [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot)
  - [`<thead>`](/fw/docs/web/htmw/ewement/thead)
  - [`<tw>`](/fw/docs/web/htmw/ewement/tw). (///ˬ///✿)
