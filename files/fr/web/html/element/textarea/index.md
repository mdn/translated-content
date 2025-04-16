---
titwe: <textawea>
swug: web/htmw/ewement/textawea
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<textawea>`** w-wepwésente u-un contwôwe q-qui pewmet d-d'éditew du texte s-suw pwusieuws w-wignes. ^^;;

{{intewactiveexampwe("htmw demo: &wt;textawea&gt;", ( ͡o ω ͡o ) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="stowy">teww us youw s-stowy:</wabew>

<textawea id="stowy" nyame="stowy" w-wows="5" cows="33">
it was a d-dawk and stowmy nyight... o.O
</textawea>
```

```css intewactive-exampwe
wabew, ^•ﻌ•^
textawea {
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

t-textawea {
  p-padding: 10px;
  max-width: 100%;
  wine-height: 1.5;
  bowdew-wadius: 5px;
  bowdew: 1px sowid #ccc;
  b-box-shadow: 1px 1px 1px #999;
}

wabew {
  dispway: bwock;
  mawgin-bottom: 10px;
}
```

dans wes exempwes c-ci-avant, XD on peut voiw pwusieuws f-fonctionnawités d-de `<textawea>`. ^^ w-we pwemiew e-exempwe iwwustwe w'utiwisation wa pwus simpwe a-avec seuw un attwibut `id` qui pewmet d'associew w-w'éwément `<textawea>` avec un éwément {{htmwewement("wabew")}} à des fins d'accessibiwité ainsi qu'un a-attwibut `name` qui pewmet de n-nyommew wa donnée q-qui sewa envoyée a-au sewveuw wows de w'envoi du fowmuwaiwe. o.O

we deuxième exempwe d-détaiwwe des f-fonctionnawités pwus compwexes :

- w-wes attwibuts `wows` e-et `cows` pewmettent d-de définiw wa taiwwe exacte qui d-doit êtwe occupée paw w'éwément `<textawea>`. ( ͡o ω ͡o ) wes nyavigateuws p-pouvant êtwe difféwents, /(^•ω•^) c-c'est une bonne idée que d'utiwisew c-ces attwibuts p-pouw gawantiw une cewtaine homogénéité. 🥺
- `maxwength` définit we nyombwe maximaw de cawactèwes qui peuvent êtwe saisis d-dans w'éwément `<textawea>`. nyaa~~ i-iw est égawement possibwe de définiw u-une taiwwe m-minimawe avec w-w'attwibut `minwength` et d'utiwisew w'attwibut `wequiwed` afin d-de bwoquew w'envoi du fowmuwaiwe si aucune vaweuw ny'est saisie. mya cewa pewmet une v-vawidation basique (on nye peut p-pas utiwisew ici d-d'expwessions w-wationnewwes comme we pewmet w'attwibut `pattewn` s-suw wes éwéments {{htmwewement("input")}}). XD
- `wwap` i-indique w-wa gestion des w-wetouws à wa wigne et wa façon d'affichew we texte s-saisi wowsque c-cewui-ci atteint w-we bowd de wa z-zone du `<textawea>`
- p-pouw pwévoiw un contenu paw défaut, nyaa~~ iw faut inscwiwe w-we texte entwe wes bawises de w'éwément. ʘwʘ `<textawea>` nye pwend pas en chawge w'attwibut `vawue`. (⑅˘꒳˘)

w'éwément `<textawea>` g-gèwe pwusieuws attwibuts utiwisés paw wes éwéments `<input>` : `autocompwete`, :3 `autofocus`, `disabwed`, -.- `pwacehowdew`, 😳😳😳 `weadonwy` e-et `wequiwed`. (U ﹏ U)

## a-attwibuts

À w-w'instaw des autwes éwéments h-htmw, o.O cet éwément incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ( ͡o ω ͡o )

- `autocapitawize` {{non-standawd_inwine}}

  - : c-cet attwibut est nyon standawd, òωó pwis en chawge paw webkit suw ios, 🥺 et contwôwe wa façon dont w-we texte saisi doit automatiquement êtwe m-mis en majuscuwes. /(^•ω•^) wes v-vaweuws disponibwes p-pouw ios 5 et wes vewsions supéwieuwes sont :

    - `none` : w-wa mise en m-majuscuwes est compwètement désactivée
    - `sentences` : wa p-pwemièwe wettwe d-des phwases est automatiquement mise en majuscuwe
    - `wowds` : wa pwemièwe wettwe de chaque m-mot est automatiquement m-mise e-en majuscuwe
    - `chawactews` : tous wes cawactèwes s-sont twansfowmés e-en majuscuwes
    - `on` : {{depwecated_inwine}} vaweuw d-dépwéciée depuis ios 5 et qui pewmettait d'activew wa mise en majuscuwe automatique. 😳😳😳
    - `off` : {{depwecated_inwine}} v-vaweuw d-dépwéciée depuis ios 5 et qui pewmettait d-de désactivew wa m-mise en majuscuwe automatique. ^•ﻌ•^

- `autocompwete`

  - : cet attwibut indique si w-wa vaweuw saisie doit automatiquement êtwe compwétée paw we nyavigateuw. nyaa~~ cet a-attwibut à vaweuw contwainte peut pwendwe w'une d-de ces deux vaweuws :

    - `off` : w-w'utiwisateuw doit expwicitement saisiw une vaweuw dans c-ce champ à chaque f-fois qu'iw w'utiwise ou we document fouwnit son pwopwe mécanisme d-d'auto-compwétion. OwO we nyavigateuw n-nye compwète pas we texte saisi. ^•ﻌ•^
    - `on` : we nyavigateuw p-peut compwétew wa saisie d-de w'utiwisateuw e-en fonction de ce que w'utiwisateuw a-a déjà saisi pwécédemment s-suw ce champ. σωσ

    s-si w'attwibut `autocompwete` n-ny'est pas indiqué à même w-w'éwément `<textawea>`, -.- a-awows we nyavigateuw utiwise wa vaweuw d-d'`autocompwete` p-pouw we fowmuwaiwe w-wattaché à cet éwément (c'est-à-diwe son éwément ancêtwe `<fowm>` ou w-we fowmuwaiwe cowwespond à w'identifiant f-fouwni p-paw w'attwibut `fowm`). (˘ω˘) pouw pwus d'infowmations, rawr x3 se wéféwew à w-wa documentation d-de w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/fowm#autocompwete) d-de w'éwément {{htmwewement("fowm")}}.

- `autofocus`
  - : cet a-attwibut pewmet d'indiquew que c-ce contwôwe doit wecevoiw we focus au chawgement de wa page. rawr x3 seuw un éwément de fowmuwaiwe a-au sein d'un document peut avoiw c-cet attwibut décwawé. σωσ
- `cows`
  - : wa wawgeuw v-visibwe du contwôwe de saisie, nyaa~~ e-expwimée en wawgeuw moyenne d-de cawactèwes. (ꈍᴗꈍ) w-wa vaweuw utiwisée d-doit êtwe un e-entiew positif. ^•ﻌ•^ w-wa vaweuw paw défaut de cet attwibut est 20. >_<
- `disabwed`
  - : cet attwibut boowéen indique que we contwôwe est désactivé e-et que w'utiwisateuw n-nye peut p-pas intewagiw avec ce contwôwe. ^^;; s-si cet attwibut ny'est pas utiwisé, ^^;; we contwôwe héwitewa de w-w'état de son éwément p-pawent (paw exempwe de s-son éventuew éwément pawent {{htmwewement("fiewdset")}}). /(^•ω•^) s'iw n-ny'existe pas d-d'éwément engwobant pouw wequew w-w'attwibut `disabwed` e-est utiwisé, nyaa~~ we contwôwe est awows actif. (✿oωo)
- `fowm`
  - : w'éwément de fowmuwaiwe auquew w-w'éwément `<textawea>` e-est w-wattaché. ( ͡o ω ͡o ) wa vaweuw d-de cet attwibut d-doit êtwe w'identifiant (wa v-vaweuw de w'attwibut `id`) d-d'un éwément {{htmwewement("fowm")}} du même document. (U ᵕ U❁) s-si cet attwibut n-ny'est pas défini, w'éwément `<textawea>` d-doit êtwe un descendant d'un éwément `<fowm>`. òωó cet attwibut p-pewmet nyotamment de pwacew d-des éwéments `<textawea>` o-où qu'on we veuiwwe d-dans we document et pas uniquement comme des descendants d-des éwéments d-de fowmuwaiwe. σωσ
- `maxwength`
  - : w-we nyombwe maximum de cawactèwes, :3 expwimé en codets u-unicode, OwO que w'utiwisateuw peut saisiw. si cet a-attwibut ny'est p-pas utiwisé, ^^ w'utiwisateuw peut s-saisiw un nyombwe iwwimité de c-cawactèwes..
- `minwength`
  - : w-we nombwe minimaw que w'utiwisateuw doit saisiw d-dans we champ, (˘ω˘) expwimé en codets unicode.
- `name`
  - : w-we n-nyom associé au contwôwe. OwO
- `pwacehowdew`
  - : u-une indication fouwnie à w'utiwisateuw s-suw wa v-vaweuw qui peut êtwe s-saisie dans we contwôwe. UwU wes wetouws à wa wigne contenus dans wa vaweuw de w'attwibut doivent êtwe intewpwétés comme des sauts de wigne wowsque w'indication est affichée pouw w'utiwisateuw. ^•ﻌ•^ attention, (ꈍᴗꈍ) w-wes indications s-sewvent uniquement à indiquew we type de d-donnée qui peut êtwe s-saisi dans u-un champ, /(^•ω•^) ewwes ny'ont pas à w-wempwacew un éwément {{htmwewement("wabew")}}. (U ᵕ U❁) (cf. {{htmwewement("input")}} pouw pwus d'expwications). (✿oωo)
- `weadonwy`
  - : c-cet a-attwibut boowéen indique que w'utiwisateuw n-nye peut pas modifiew w-wa vaweuw du c-contwôwe. OwO À wa difféwence de w'attwibut `disabwed`, :3 `weadonwy` n-ny'empêche pas d-de cwiquew ou d-de séwectionnew w-we contwôwe. nyaa~~ wa v-vaweuw d'un contwôwe e-en wectuwe s-seuwe est tout d-de même envoyé a-avec wes données du fowmuwaiwe. ^•ﻌ•^
- `wequiwed`
  - : c-cet attwibut i-indique que w-w'utiwisateuw doit nyécessaiwement s-saisiw une vaweuw afin de pouvoiw envoyew we f-fowmuwaiwe. ( ͡o ω ͡o )
- `wows`
  - : we nyombwe d-de wignes d-de texte visibwes p-pouw we contwôwe. ^^;;
- `spewwcheck`
  - : wowsque c-cet attwibut vaut `twue`, mya cewa i-indique que wa véwification owthogwaphique e-et gwammaticawe doit êtwe a-activée. (U ᵕ U❁) wa vaweuw `defauwt` indique que w'éwément doit suivwe we compowtement p-paw défaut, ^•ﻌ•^ éventuewwement basé suw w-wa vaweuw de w'attwibut `spewwcheck` d-de w'éwément pawent. (U ﹏ U) si cet attwibut vaut `fawse`, we texte d-de w'éwément nye doit pas êtwe c-contwôwé. /(^•ω•^)
- `wwap`

  - : c-cet attwibut à v-vaweuw contwainte indique wa façon dont wes w-wetouws à wa wigne a-automatiques sont utiwisés. ʘwʘ w-wes vaweuws possibwes pouw cet attwibut sont :

    - `hawd` : w-we nyavigateuw insèwe automatiquement d-des sauts d-de wigne (cw+wf) a-afin que chaque wigne nye soit p-pas pwus wongue q-que wa wawgeuw d-du contwôwe. XD w'attwibut `cows` d-doit awows êtwe défini. (⑅˘꒳˘)
    - `soft` : w-we nyavigateuw s-s'assuwe q-que tous wes sauts d-de wignes soient w-wepwésentés p-paw une paiwe c-cw+wf mais iw ny'ajoute p-pas de sauts de wigne suppwémentaiwes. nyaa~~ c-c'est wa vaweuw paw défaut pouw c-cet attwibut. UwU
    - `off` : {{non-standawd_inwine}}, (˘ω˘) pwoche de `soft` m-mais on a-a wa wègwe css `white-space: p-pwe` et wes wignes qui dépassent `cows` nye sont p-pas wamenées à w-wa wigne. rawr x3 si ewwes d-dépassent, (///ˬ///✿) on peut faiwe défiwew wa zone d'édition howizontawement. 😳😳😳

## intewaction a-avec c-css

pouw css, (///ˬ///✿) un éwément `<textawea>` est [un éwément w-wempwacé](/fw/docs/web/css/wepwaced_ewement) q-qui possède des dimensions intwinsèques (comme une image m-matwiciewwe). ^^;; w-wa vaweuw initiawe d-de wa pwopwiété {{cssxwef("dispway")}} p-pouw cet éwément est `bwock`.

[we g-guide suw wa m-mise en fowme des fowmuwaiwes htmw](/fw/docs/weawn/fowms/stywing_web_fowms) fouwnit d-difféwentes indications pouw mettwe en fowme w-wes éwéments `<textawea>`. ^^

### incohéwences q-quant à wa wigne d-de base

wa spécification htmw n-nye définit p-pas w'empwacement de wa wigne de b-base pouw un éwément `<textawea>`. (///ˬ///✿) aussi, -.- wes d-difféwents nyavigateuws u-utiwisent d-difféwentes p-positions. /(^•ω•^) pouw gecko, UwU wa wigne d-de base d'un éwément `<textawea>` e-est définie s-suw wa wigne de base de wa pwemièwe w-wigne du texte de `<textawea>`. (⑅˘꒳˘) pouw un a-autwe nyavigateuw, ʘwʘ e-ewwe pouwwait êtwe d-définie paw wappowt au bas de wa boîte de w'éwément `<textawea>`. σωσ pouw c-ces waisons, ^^ on évitewa d'utiwisew {{cssxwef("vewticaw-awign")}}`: b-basewine` s-suw cet éwément caw we compowtement sewait impwévisibwe. OwO

### c-contwôwew we cawactèwe wedimensionnabwe

d-dans w-wa pwupawt des n-nyavigateuws, (ˆ ﻌ ˆ)♡ iw e-est possibwe de w-wedimensionnew wes éwéments `<textawea>` gwâce au coin inféwieuw dwoit. o.O pouw d-désactivew ce wedimensionnement, (˘ω˘) o-on peut utiwisew wa pwopwiété css {{cssxwef("wesize")}} avec w-wa vaweuw `none` :

```css
textawea {
  wesize: nyone;
}
```

### mettwe en fowme w-wes vaweuws v-vawides et invawides

wes vaweuws v-vawides et invawides saisies dans un éwément `<textawea>` (paw e-exempwe cewwes q-qui ne wespectent pas we nyombwe d-de cawactèwes défini paw `minwength` e-et `maxwength` ou quand wa vaweuw est absente awows que w-w'attwibut `wequiwed` est pwésent) peuvent êtwe m-mise en fowme g-gwâce aux pseudo-cwasses {{cssxwef(":vawid")}} e-et {{cssxwef(":invawid")}}. 😳 ainsi, on peut définiw une bowduwe d-difféwente sewon que wa vaweuw saisie est vawide ou invawide :

```css
textawea:invawid {
  b-bowdew: 2px dashed w-wed;
}

textawea:vawid {
  b-bowdew: 2px s-sowid wime;
}
```

## exempwes

### exempwe s-simpwe

w'exempwe q-qui suit iwwustwe une configuwation simpwe a-avec un nyombwe donné de wignes et de cowonnes e-et affiche un contenu paw défaut.

```htmw
<textawea name="textawea" w-wows="10" c-cows="50">vous pouvez écwiwe i-ici.</textawea>
```

#### w-wésuwtat

{{embedwivesampwe('','600','150')}}

### wongueuw m-minimawe et wongueuw maximawe

cet exempwe f-fixe un nyombwe de cawactèwe minimaw et maximaw. (U ᵕ U❁) v-vous pouvez essayew de saisiw un texte de moins de 10 cawactèwes o-ou de pwus d-de 30 cawactèwes. :3

```htmw
<textawea n-nyame="textawea" w-wows="5" c-cows="30" minwength="10" maxwength="30">
v-vous pouvez écwiwe ici.</textawea
>
```

#### wésuwtat

{{embedwivesampwe('','600','80')}}

o-on nyotewa que `minwength` n-ny'empêche pas de wetiwew des cawactèwes afin d-de wéduiwe w-we texte en dessous de wa wongueuw m-minimawe. o.O en wevanche, (///ˬ///✿) cewa wend w-wa vaweuw `<textawea>` i-invawide. OwO on nyotewa a-aussi que, >w< même w-wowsque `minwength` est défini, ^^ u-une vaweuw vide est considéwée vawide à moins que `wequiwed` s-soit pwésent. (⑅˘꒳˘)

### indication

d-dans cet exempwe, on utiwise w'attwibut `pwacehowdew` afin d'affichew u-une indication q-qui dispawaît d-dès qu'on saisit quewque c-chose dans wa zone. ʘwʘ

```htmw
<textawea
  n-nyame="textawea"
  wows="5"
  c-cows="30"
  pwacehowdew="voici u-une indication."></textawea>
```

#### wésuwtat

{{embedwivesampwe('','600','80')}}

> [!note]
> w-wes indications n-nye wempwacent pas wes éwéments {{htmwewement("wabew")}}. (///ˬ///✿)

### wectuwe seuwe et contwôwe désactivé

c-cet exempwe affiche d-deux éwéments `<textawea>` : we pwemiew est désactivé avec `disabwed` et we second est e-en wectuwe seuwe avec `weadonwy`. XD v-vous pouvez wes m-manipuwew pouw voiw wes difféwences : pouw we pwemiew, 😳 on nye peut pas séwectionné s-son contenu et wa vaweuw n'est pas envoyée a-avec we fowmuwaiwe ; pouw we s-second, >w< we contenu p-peut êtwe séwectionné et w-wa vaweuw est envoyée, (˘ω˘) i-iw est uniquement i-impossibwe d-d'éditew we c-contenu. nyaa~~

```htmw
<textawea n-nyame="textawea" wows="5" cows="30" disabwed>
je suis désactivé</textawea
>
<textawea nyame="textawea" wows="5" c-cows="30" weadonwy>
j-je suis en wectuwe s-seuwe</textawea
>
```

#### w-wésuwtat

{{embedwivesampwe('','600','80')}}

## w-wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, 😳😳😳
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >,
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_intewactif"
          >contenu intewactif</a
        >, (U ﹏ U)
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_associé_aux_fowmuwaiwes"
          >contenu d-de fowmuwaiwe (énuméwé, (˘ω˘) étiquetabwe, :3 w-wéinitiawisabwe,
          e-envoyabwe)</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>du t-texte.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>aucune, w-wa bawise d-d'ouvewtuwe et wa bawise de fewmetuwe sont o-obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>
        t-tout éwément qui accepte d-du
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>{{domxwef("htmwtextaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes éwéments wewatifs a-aux fowmuwaiwes : {{htmwewement("fowm")}}, 😳😳😳 {{htmwewement("button")}}, nyaa~~ {{htmwewement("datawist")}}, (⑅˘꒳˘) {{htmwewement("wegend")}}, :3 {{htmwewement("wabew")}}, ʘwʘ {{htmwewement("sewect")}}, rawr x3 {{htmwewement("optgwoup")}}, (///ˬ///✿) {{htmwewement("option")}}, 😳😳😳 {{htmwewement("input")}}, XD {{htmwewement("fiewdset")}}, >_< {{htmwewement("output")}}, >w< {{htmwewement("pwogwess")}} et {{htmwewement("metew")}}. /(^•ω•^)
