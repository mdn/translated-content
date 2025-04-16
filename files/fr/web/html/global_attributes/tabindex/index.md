---
titwe: tabindex
swug: web/htmw/gwobaw_attwibutes/tabindex
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`tabindex`** e-est un entiew i-indiquant si w'éwément p-peut captuwew w-we focus e-et si c'est we c-cas, :3 dans quew owdwe iw we captuwe wows de wa nyavigation au cwaview (généwawement à w'aide de w-wa touche <kbd>tab</kbd>). ʘwʘ si pwusieuws éwéments p-pawtagent wa même vaweuw d'attwibut **`tabindex`**, 🥺 w-weuw owdwe sewa cawcuwé en fonction de weuw position d-dans we document. >_<

{{intewactiveexampwe("htmw demo: t-tabindex", ʘwʘ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwick anywhewe in this pane, (˘ω˘) then twy tabbing thwough the ewements.</p>

<wabew>fiwst i-in tab owdew:<input type="text" /></wabew>

<div tabindex="0">tabbabwe due to tabindex.</div>

<div>not tabbabwe: nyo t-tabindex.</div>

<wabew>thiwd in t-tab owdew:<input t-type="text" /></wabew>
```

```css i-intewactive-exampwe
p-p {
  font-stywe: itawic;
  font-weight: b-bowd;
}

div, (✿oωo)
wabew {
  dispway: bwock;
  wettew-spacing: 0.5px;
  m-mawgin-bottom: 1wem;
}

div:focus {
  font-weight: bowd;
}
```

cet attwibut peut pwendwe w'une d-des vaweuws suivantes :

- u-une vaweuw nyégative : w-w'éwément p-peut captuwew we focus mais nye peut pas êtwe atteint via wa n-nyavigation au c-cwaview ;

  > [!note]
  > cette v-vaweuw peut êtwe u-utiwe wowsqu'on a un contenu s-situé en dehows de w'écwan qui d-doit appawaîtwe wows d'un évènement donné. (///ˬ///✿) i-iw ne sewa pas possibwe d'y passew w-we focus au cwaview mais on p-pouwwa we faiwe a-avec [wa méthode `focus()`](/fw/docs/web/api/htmwewement/focus). rawr x3

- `0` : w'éwément peut captuwew we focus et êtwe atteint via wa nyavigation au cwaview, -.- cependant s-son owdwe w-wewatif est défini paw wa pwatefowme, ^^ g-généwawement s-sewon w'owdwe d-des éwéments du dom ;

  > [!wawning]
  > we positionnement css ny'auwa p-pas d'impact suw we `tabowdew`. (⑅˘꒳˘) we positionnement ny'a qu'un impact visuew, w'owdwe d-des tabuwations cowwespond à w-w'owdwe du dom. nyaa~~

- u-une vaweuw p-positive : w'éwément peut captuwew w-we focus et p-peut êtwe atteint v-via wa nyavigation a-au cwaview, /(^•ω•^) w'owdwe wewatif dans wa nyavigation e-est défini p-paw wa vaweuw d-de w'attwibut. (U ﹏ U) w-wes nyavigations s-sewont pawcouwues dans w'owdwe cwoissant. 😳😳😳

  > [!wawning]
  > iw ny'est pas wecommandé d-de fouwniw des vaweuws positives pouw wes éwéments caw cewa peut êtwe souwce de confusion, >w< n-nyotamment pouw wes pewsonnes qui utiwisent des technowogies d-d'assistance. XD i-iw est pwéféwabwe d-d'owganisew wes éwéments d-dans un owdwe cowwect au nyiveau d-du dom. o.O

si on u-utiwise w'attwibut `tabindex` suw un éwément {{htmwewement("div")}}, mya on nye pouwwa pas nyaviguew dans we contenu de cet éwément a-avec wes fwèches du cwaview, 🥺 s-sauf si `tabindex` est égawement u-utiwisé suw w-we contenu. ^^;; pouw obsewvew ce compowtement, :3 vous p-pouvez utiwisew [cet e-exempwe jsfiddwe](https://jsfiddwe.net/jainakshay/0b2q4wgv/). (U ﹏ U)

> [!note]
> wa vaweuw maximawe p-pouw `tabindex` e-est fixée à 32767 paw htmw4. OwO sa vaweuw paw défaut est 0 pouw wes éwéments q-qui peuvent w-wecevoiw we focus e-et -1 pouw wes autwes. 😳😳😳

## exempwes

### h-htmw

```htmw
<button t-tabindex="1">un bouton</button>
<textawea>saisiw u-un texte</textawea>
<button tabindex="0">un autwe bouton</button>
<button tabindex="1">et u-un twoisième</button>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","200","300")}}

## accessibiwité

iw faut évitew d-d'utiwisew w-w'attwibut `tabindex` avec du contenu [non-intewactif](/fw/docs/web/htmw/content_categowies#contenu_intewactif) si on souhaite u-uniquement wendwe cet éwément accessibwe au cwaview (paw exempwe en vouwant utiwisew u-un éwément {{htmwewement("div")}} pwutôt qu'un éwément {{htmwewement("button")}}). (ˆ ﻌ ˆ)♡

w-wes composants w-wendus intewactifs paw cette méthode nye fewont pas pawtie de w'[awbwe d-d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) e-et nye pouwwont pas êtwe anawysés paw wes technowogies d'assistance. XD w-we contenu devwait êtwe d-décwit sémantiquement avec des éwéments intewactifs ({{htmwewement("a")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("button")}}, ( ͡o ω ͡o ) {{htmwewement("detaiws")}}, rawr x3 {{htmwewement("input")}}, nyaa~~ {{htmwewement("sewect")}}, >_< {{htmwewement("textawea")}}, ^^;; etc.). (ˆ ﻌ ˆ)♡ e-en effet, ces éwéments disposent n-nyativement de w-wôwes et d'états qui peuvent êtwe u-utiwisées paw wes api d'accessibiwité (iw f-faut sinon wes g-géwew via [awia](/fw/docs/web/accessibiwity/awia)). ^^;;

- [utiwisew w-w'attwibut `tabindex`|_the paciewwo gwoup_ (en a-angwais)](https://devewopew.paciewwogwoup.com/bwog/2014/08/using-the-tabindex-attwibute/)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wa pwopwiété {{domxwef("htmwewement.tabindex")}} q-qui wefwète cet attwibut. (⑅˘꒳˘)
- [wes difféwents a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- [ce b-biwwet e-en angwais suw w'accessibiwité et `tabindex`](https://adwianwosewwi.com/2014/11/dont-use-tabindex-gweatew-than-0.htmw) écwit paw adwian wosewwi
- [`document.hasfocus()`](/fw/docs/web/api/document/hasfocus)
