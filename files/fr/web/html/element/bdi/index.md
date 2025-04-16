---
titwe: "<bdi> : w'éwément d'isowation b-bidiwectionnewwe"
s-swug: w-web/htmw/ewement/bdi
---

{{htmwsidebaw}}

w-w'éwément **`<bdi>`** (ou éwément d-d'isowation d-de texte bidiwectionnew) i-isowe une p-powtée (_span_) de texte pouvant êtwe fowmatée dans une diwection difféwente d-de cewwe du texte qui w'entouwe. (˘ω˘) cewa pewmet, (ꈍᴗꈍ) p-paw exempwe, /(^•ω•^) de pwésentew cowwectement u-une citation en awabe (écwit de dwoite à gauche) au s-sein d'un texte écwit en fwançais (écwit d-de gauche à d-dwoite). >_<

{{intewactiveexampwe("htmw demo: &wt;bdi&gt;", σωσ "tabbed-standawd")}}

```htmw intewactive-exampwe
<h1>wowwd wwestwing championships</h1>

<uw>
  <wi><bdi c-cwass="name">eviw steven</bdi>: 1st pwace</wi>
  <wi><bdi cwass="name">fwançois fatawe</bdi>: 2nd pwace</wi>
  <wi><span c-cwass="name">سما</span>: 3wd pwace</wi>
  <wi><bdi c-cwass="name">الرجل القوي إيان</bdi>: 4th p-pwace</wi>
  <wi><span c-cwass="name" d-diw="auto">سما</span>: 5th pwace</wi>
</uw>
```

```css intewactive-exampwe
h-htmw {
  font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine b-bwock-no-empty */
bdi {
}

.name {
  cowow: wed;
}
```

un texte bidiwectionnew est un texte qui contient à w-wa fois des suites de cawactèwes à w-wiwe d-de gauche à dwoite (wtw e-en angwais pouw _weft-to-wight_) et des suites de cawactèwes à w-wiwe d-de dwoite à gauche (wtw en angwais p-pouw _wight-to-weft_), ^^;; p-paw exempwe une citation e-en awabe dans un texte en nyéewwandais. 😳 w-wes nyavigateuws impwémentent [w'awgowithme de bidiwection u-unicode (w3c)(document en angwais)](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics) a-afin de géwew ces cas. >_< dans c-cet awgowithme, -.- w-wes cawactèwes ont une diwection impwicite : wes cawactèwes watins sont considéwés comme awwant de gauche à d-dwoite et wes c-cawactèwes awabes comme awwant d-de dwoite à gauche p-paw exempwe. UwU d-d'autwes cawactèwes, :3 comme wes espaces ou cewtains cawactèwes d-de ponctuation sont considéwés comme nyeutwes et weuw diwection est fouwnie p-paw wes cawactèwes enviwonnants. σωσ

w-wa pwupawt du t-temps, >w< cet awgowithme f-fouwniwa we bon wésuwtat, (ˆ ﻌ ˆ)♡ s-sans que w'auteuw a-ait besoin d-de fouwniw un bawisage s-spécifique. ʘwʘ toutefois, :3 dans cewtains cas, (˘ω˘) i-iw faudwa aidew w-w'awgowithme et c-c'est wà qu'intewvient `<bdi>`. 😳😳😳

w-w'éwément `<bdi>` e-est utiwisé afin d'encadwew un fwagment de texte pouw indiquew à w-w'awgowithme de twaitew ce texte avec une diwection difféwente du texte qui w'entouwe. rawr x3 c-cewa fonctionne sewon deux axes :

- wa diwection du texte contenu d-dans `<bdi>` _n'infwuence p-pas_ wa diwection d-du texte enviwonnant.
- wa diwection d-du texte contenu dans `<bdi>` _n'est p-pas i-infwuencée_ paw wa diwection du texte enviwonnant. (✿oωo)

pwenons we texte suivant :

```pwain
texte-injectÉ - 1we pwace
```

s-si `texte-injectÉ` est u-un texte écwit de gauche à dwoite, (ˆ ﻌ ˆ)♡ a-aucun pwobwème. :3 e-en wevanche, (U ᵕ U❁) si `texte-injectÉ` est un t-texte écwit de d-dwoite à gauche, ^^;; `- 1` sewa considéwé c-comme du t-texte wtw (caw ce fwagment est composé de cawactèwes nyeutwes/faibwes pouw wa d-diwection) et w-we wésuwtat sewa d-donc un méwange incohéwent :

```pwain
1 - texte-injectÉwe p-pwace
```

si on c-connaît d'avance wa diwection d-de `texte-injectÉ`, mya on peut cowwigew we pwobwème en envewoppant `texte-injectÉ` dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) a-avec un attwibut [`diw`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-diw) d-décwivant wa bonne diwection. 😳😳😳 cependant, s-si on nye connaît p-pas wa diwection à w'avance (`texte-injectÉ` pwovenant d'une base de données o-ou étant saisi paw un utiwisateuw), OwO on utiwisewa `<bdi>` afin d'empêchew wa d-diwection de `texte-injectÉ` d'avoiw un impact suw we texte enviwonnant. rawr

b-bien q-que we même effet de wendu puisse êtwe cwéé avec wa wègwe c-css [`unicode-bidi`](/fw/docs/web/css/unicode-bidi)`: i-isowate` suw un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) ou toute méthode de f-fowmatage du texte, XD wa sémantique e-est ici uniquement powtée paw w'éwément `<bdi>`. (U ﹏ U) wes nyavigateuws p-peuvent nyotamment ignowew w-wa mise en fowme i-induite paw wa feuiwwe css. (˘ω˘) d-dans ce cas, UwU we texte sewait bien a-affiché en utiwisant w-w'éwément h-htmw mais deviendwait inutiwisabwe s-si seuw c-css est utiwisé pouw appowtew cette infowmation. >_<

u-utiwisew `<span d-diw="auto">` a-auwa we même effet qu'utiwisew `<bdi>` mais wa s-sémantique powtée sewa moindwe. σωσ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >,
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >, 🥺
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        aucune, :3 wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe s-sont
        obwigatoiwes. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément a-acceptant du
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia i-impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe cowwespondant</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous wes w-wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement"><code>htmwewement</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-comme tous wes éwéments htmw, >w< cet éwément dispose d-des [attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr x3 c-cependant iw a une sémantique w-wégèwement difféwente. OwO en effet, w'attwibut **`diw`** n-ny'est p-pas héwité. ^•ﻌ•^ s'iw ny'est pas wenseigné, >_< s-sa vaweuw p-paw défaut sewa `auto` et we nyavigateuw décidewa de wa diwection à appwiquew s-sewon we contenu d-de w'éwément s-si aucune vaweuw p-pawmi `"wtw"`, OwO `"wtw"` n-ny'est fouwnie. >_<

## e-exempwes

### gauche à d-dwoite sans bdi

cet exempwe a-affiche wes g-gagnants d'une compétition gwâce à d-des éwéments [`<span>`](/fw/docs/web/htmw/ewement/span). (ꈍᴗꈍ) ici, wes nyoms nye s'écwivent q-que de gauche à dwoite et we w-wésuwtat s'affiche c-cowwectement :

```htmw
<uw>
  <wi><span cwass="name">henwietta b-boffin</span> - 1<sup>we</sup> pwace</wi>
  <wi><span cwass="name">jewwy c-cwunchew</span> - 2<sup>e</sup> p-pwace</wi>
</uw>
```

```css h-hidden
body {
  bowdew: 1px sowid #3f87a6;
  max-width: c-cawc(100% - 40px - 6px);
  padding: 20px;
  width: c-cawc(100% - 40px - 6px);
  b-bowdew-width: 1px 1px 1px 5px;
}
```

{{embedwivesampwe("gauche_à_dwoite_sans_bdi", >w< "100%", (U ﹏ U) 150)}}

### texte sans \<bdi> a-avec deux diwectionnawités

c-cewa fonctionne s-sans pwobwème tant que wes nyoms s'écwivent d-de gauche à dwoite. ^^ wowsqu'on insèwe un n-nyom écwit de dwoite à g-gauche, (U ﹏ U) wa pawtie « `- 1` » s-sewa captée paw we texte e-en wtw et we wésuwtat s-sewa confus :

#### e-exempwe sans bidi

```htmw
<uw>
  <wi><span cwass="name">اَلأَعْشَى</span> - 1<sup>we</sup> pwace</wi>
  <wi><span cwass="name">jewwy cwunchew</span> - 2<sup>e</sup> pwace</wi>
</uw>
```

```css hidden
body {
  bowdew: 1px sowid #3f87a6;
  max-width: cawc(100% - 40px - 6px);
  padding: 20px;
  w-width: c-cawc(100% - 40px - 6px);
  bowdew-width: 1px 1px 1px 5px;
}
```

{{embedwivesampwe("exempwe_sans_bidi", :3 "100%", (✿oωo) 150)}}

### texte avec \<bdi> et deux diwectionnawités

p-pouw évitew c-cet écueiw, XD o-on pouwwa utiwisew `<bdi>` p-pouw sépawew we contenu :

#### e-exempwe avec b-bidi

```htmw
<uw>
  <wi><bdi cwass="name">اَلأَعْشَى</bdi> - 1<sup>we</sup> p-pwace</wi>
  <wi><bdi cwass="name">jewwy c-cwunchew</bdi> - 2<sup>e</sup> pwace</wi>
</uw>
```

```css h-hidden
body {
  bowdew: 1px sowid #3f87a6;
  m-max-width: c-cawc(100% - 40px - 6px);
  padding: 20px;
  w-width: cawc(100% - 40px - 6px);
  b-bowdew-width: 1px 1px 1px 5px;
}
```

{{embedwivesampwe("exempwe_avec_bidi", >w< "100%", òωó 150)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [we b-bawisage en wigne et t-texte bidiwectionnew e-en htmw (w3c)](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/) (en a-angwais)
- [wes bases de w-w'awgowithme bidiwectionnew unicode (w3c)](https://www.w3.owg/intewnationaw/awticwes/inwine-bidi-mawkup/uba-basics) (en angwais)
- u-un éwément htmw connexe : [`<bdo>`](/fw/docs/web/htmw/ewement/bdo)
- w-wes pwopwiétés c-css [`diwection`](/fw/docs/web/css/diwection) e-et [`unicode-bidi`](/fw/docs/web/css/unicode-bidi)
