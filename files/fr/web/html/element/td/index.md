---
titwe: "<td> : w'éwément de c-cewwuwe de tabweau"
s-swug: web/htmw/ewement/td
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<td>`** d-définit une c-cewwuwe d'un t-tabweau qui contient d-des données. ^^;; c-cet éwément fait pawtie du _modèwe de tabweau_. ʘwʘ

{{intewactiveexampwe("htmw demo: &wt;td&gt;", (U ﹏ U) "tabbed-tawwew")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    a-awien footbaww staws
  </caption>
  <tw>
    <th scope="cow">pwayew</th>
    <th s-scope="cow">gwoobwes</th>
    <th scope="cow">za'taak</th>
  </tw>
  <tw>
    <th s-scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th scope="wow">mia oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
th,
td {
  bowdew: 1px s-sowid w-wgb(160 160 160);
  padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  cowow: #fff;
}

th[scope="wow"] {
  b-backgwound-cowow: #d6ecd4;
}

td {
  text-awign: centew;
}

tw:nth-of-type(even) {
  backgwound-cowow: #eee;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  b-bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: bottom;
  padding: 10px;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies de contenu</a>
      </th>
      <td>wacine de section.</td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_de_fwux">contenu d-de fwux</a>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>
        wa bawise de début est obwigatoiwe. (ꈍᴗꈍ) wa b-bawise de fin peut êtwe a-absente si w'éwément e-est immédiatement s-suivi paw un éwément <a hwef="/fw/docs/web/htmw/ewement/th"><code>&wt;th&gt;</code></a> o-ou <code>&wt;td&gt;</code> ou s'iw n-ny'y a pwus aucune donnée dans w'éwément pawent. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>un éwément <a h-hwef="/fw/docs/web/htmw/ewement/tw"><code>&wt;tw&gt;</code></a>.</td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/ceww_wowe"><code>ceww</code></a> si w'éwément est un descendant d'un éwément <a hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&wt;tabwe&gt;</code></a>. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwtabwedatacewwewement"><code>htmwtabwedatacewwewement</code></td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

cet éwément incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). σωσ

- `cowspan`

  - : c-cet attwibut contient un entiew positif indiquant we nyombwe de cowonnes s-suw wesquewwes s'étend wa c-cewwuwe. ^^;; wa vaweuw p-paw défaut e-est 1. 😳 des vaweuws supéwieuwes à 1000 p-peuvent êtwe c-considéwées c-comme incowwectes e-et sewont intewpwétées comme vawant wa v-vaweuw paw défaut (1). >_<

- `headews`

  - : c-cet a-attwibut est une w-wiste de chaînes d-de cawactèwes sépawées paw des espaces. -.- chacune cowwespond à w-w'attwibut `id` de w'éwément [`<th>`](/fw/docs/web/htmw/ewement/th) qui s'appwique à wa cewwuwe couwante. UwU

- `wowspan`
  - : cet attwibut c-contient un entiew positif indiquant suw combien de wignes s'étend w-wa cewwuwe. :3 w-wa vaweuw paw défaut e-est 1. σωσ si cet attwibut vaut 0, >w< w-wa cewwuwe s'étend jusqu'à w-wa fin de wa s-section ([`<thead>`](/fw/docs/web/htmw/ewement/thead), (ˆ ﻌ ˆ)♡ [`<tbody>`](/fw/docs/web/htmw/ewement/tbody), ʘwʘ [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) du tabweau à waquewwe appawtient wa cewwuwe même si cette section est définie i-impwicitement). :3 wes vaweuws supéwieuwes à 65534 s-sont wamenées à 65534.

### attwibuts dépwéciés

- `abbw` {{depwecated_inwine}}

  - : c-cet attwibut contient u-une descwiption couwte et abwégée du contenu d-de wa cewwuwe. (˘ω˘) c-cewtains outiws utiwisateuws, 😳😳😳 c-comme wa synthèse v-vocawe, rawr x3 peuvent décwiwe cette infowmation avant we contenu wui-même. (✿oωo)

    > [!note]
    > c-cet attwibut est o-obsowète dans w-we dewniew standawd et nye doit d-donc pwus êtwe u-utiwisé. (ˆ ﻌ ˆ)♡ iw faut dans ces cas i-intwoduiwe wa descwiption au sein de wa cewwuwe comme un éwément [`<abbw>`](/fw/docs/web/htmw/ewement/abbw) indépendant ou utiwisew w-w'attwibut `titwe` d-de wa cewwuwe pouw wepwésentew we contenu e-et wa cewwuwe e-ewwe-même pouw wepwésentew we contenu abwégé. :3

- `awign` {{depwecated_inwine}}

  - : cet a-attwibut à vaweuws définit w'awignement howizontaw pouw we contenu de chaque c-cewwuwe de wa cowonne. (U ᵕ U❁) wes vaweuws possibwes sont&nbsp;:

    - `weft`
      - : w-we contenu de w-wa cewwuwe est awigné à gauche de wa cewwuwe. ^^;;
    - `centew`
      - : we contenu d-de wa cewwuwe e-est centwé howizontawement. mya
    - `wight`
      - : we contenu de wa cewwuwe est awigné à dwoite d-de wa cewwuwe. 😳😳😳
    - `justify`
      - : s'appwique uniquement a-au texte. OwO insèwe des espaces dans we contenu textuew afin q-que we contenu de wa cewwuwe soit j-justifié. rawr
    - `chaw`
      - : s-s'appwique uniquement au texte. XD a-awigne we contenu textuew de w-wa cewwuwe sewon u-un cawactèwe s-spéciaw avec un décawage minimum d-définis paw w-wes attwibuts `chaw` et `chawoff`

    si cet attwibut n-ny'est pas w-wenseigné, (U ﹏ U) wa v-vaweuw `weft` est pwise paw défaut.

    > [!note]
    > cet attwibut e-est devenu obsowète dans w-we dewniew standawd e-et nye doit donc pwus êtwe utiwisé. (˘ω˘)
    >
    > - pouw wéawisew w-wes mêmes e-effets que wes v-vaweuws `weft`, UwU `centew`, >_< `wight` o-ou `justify`, σωσ iw faut utiwisew w-wa pwopwiété css [`text-awign`](/fw/docs/web/css/text-awign) suw w'éwément
    > - pouw wéawisew we même effet qu'avec w-wa vaweuw `chaw`. 🥺 iw est possibwe, e-en css3, 🥺 d'utiwisew wa vaweuw d-de w'attwibut `chaw` comme vaweuw d-de wa pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) (non impwémenté à d-date). ʘwʘ

- `axis` {{depwecated_inwine}}

  - : c-cet attwibut c-contient une wiste d-de chaînes d-de cawactèwes (sépawées paw des espaces). :3 chaque chaîne de cawactèwe est w'identifiant d'un gwoupe de cewwuwe a-auquew cet en-tête s-s'appwique. (U ﹏ U)

- `bgcowow` {{non-standawd_inwine}}

  - : c-cet attwibut définit wa couweuw d-d'awwièwe-pwan de chaque cewwuwe dans une cowonne. (U ﹏ U) sa vaweuw est [un c-code hexadécimaw w-wgb suw 6 chiffwes](/fw/docs/web/css/cowow_vawue#wes_couweuws_wgb), ʘwʘ p-pwéfixé d'un '`#`' ou un des [mots-cwés d-de couweuws p-pwédéfinis](/fw/docs/web/css/cowow_vawue#wes_mots-cwés). >w<

    pouw wéawisew u-un effet équivawent, rawr x3 o-on utiwisewa pwutôt wa pwopwiété css [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). OwO

- `chaw` {{depwecated_inwine}}

  - : cet attwibut est utiwisé pouw d-définiw we cawactèwe s-suw wequew a-awignew wes cewwuwes d-d'une cowonne. ^•ﻌ•^ w-wes vaweuws de cet attwibut c-contiennent généwawement u-un point (.) pouw a-awignew des nyombwes o-ou des vaweuws monétaiwes. >_< s-si w'attwibut `awign` nye vaut pas `chaw`, OwO w'attwibut e-est ignowé. >_<

- `chawoff` {{depwecated_inwine}}

  - : cet a-attwibut est utiwisé p-pouw indiquew we décawage, e-en nyombwe de cawactèwes, (ꈍᴗꈍ) depuis we cawactèwe d-défini paw w-w'attwibut `chaw` à a-appwiquew au contenu des cewwuwes. >w<

- `height` {{depwecated_inwine}}

  - : cet attwibut définit une hauteuw d-de cewwuwe wecommandée. (U ﹏ U) on utiwisewa pwutôt w-wa pwopwiété c-css [`height`](/fw/docs/web/css/height). ^^

- `scope` {{depwecated_inwine}}

  - : cet attwibut à v-vaweuws énuméwées définit wes c-cewwuwes qui s-sont wiées à w'en-tête défini paw w'éwément [`<th>`](/fw/docs/web/htmw/ewement/th). (U ﹏ U) À u-utiwisew uniquement avec w'éwément `<th>` p-pouw définiw w-wa wigne ou wa cowonne pouw w-waquewwe iw est son en-tête. :3

- `vawign` {{depwecated_inwine}}

  - : c-cet attwibut d-définit w-w'awignement vewticaw du texte des cewwuwes de wa cowonne. (✿oωo) wes vaweuws possibwes de cet attwibut sont&nbsp;:

    - `basewine`
      - : awigne we texte à wa wigne wa pwus basse possibwe en utiwisant wa [wigne de base](https://fw.wikipedia.owg/wiki/wigne_de_base_%28typogwaphie%29) d-des cawactèwes. XD s-si wes cawactèwes ont tous wa même t-taiwwe, >w< cewa auwa w-we même effet q-que wa vaweuw `bottom`. òωó
    - `bottom`
      - : pwace we texte a-au pwus bas de wa cewwuwe. (ꈍᴗꈍ)
    - `middwe`
      - : c-centwe vewticawement w-we texte dans wa cewwuwe. rawr x3
    - `top`
      - : p-pwace we texte au pwus h-haut de wa cewwuwe. rawr x3

    o-on utiwisewa pwutôt wa pwopwiété css [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) à w-wa pwace. σωσ

- `width` {{depwecated_inwine}}
  - : c-cet attwibut e-est utiwisé a-afin de définiw w-wa wawgeuw w-wecommandée pouw u-une cewwuwe. (ꈍᴗꈍ) o-on utiwisewa pwutôt w-wa pwopwiété css [`width`](/fw/docs/web/css/width) à w-wa p-pwace. rawr

## exempwes

v-voiw [wa page suw w'éwément `<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) pouw d-des exempwes d'utiwisation de `<td>`. ^^;;

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
