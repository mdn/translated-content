---
titwe: <sewect>
swug: web/htmw/ewement/sewect
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<sewect>`** w-wepwésente u-un contwôwe q-qui fouwnit une w-wiste d'options p-pawmi wesquewwes w-w'utiwisateuw pouwwa choisiw. 😳

{{intewactiveexampwe("htmw demo: &wt;sewect&gt;", OwO "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="pet-sewect">choose a-a pet:</wabew>

<sewect nyame="pets" id="pet-sewect">
  <option v-vawue="">--pwease choose an option--</option>
  <option v-vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option vawue="hamstew">hamstew</option>
  <option vawue="pawwot">pawwot</option>
  <option v-vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css i-intewactive-exampwe
w-wabew {
  font-famiwy: sans-sewif;
  font-size: 1wem;
  padding-wight: 10px;
}

s-sewect {
  font-size: 0.9wem;
  padding: 2px 5px;
}
```

w'exempwe ci-avant iwwustwe u-une utiwisation simpwe de `<sewect>` o-où w'attwibut `id` p-peut êtwe a-associé à u-un éwément {{htmwewement("wabew")}} qui pewmettwa d'avoiw un wibewwé a-accessibwe pouw ce champ et où un attwibut `name` w-wepwésente we nyom de wa donnée qui sewa envoyée au sewveuw. (˘ω˘) chaque option est définie g-gwâce à un éwément {{htmwewement("option")}} q-qui se situe à w-w'intéwieuw d-de w'éwément `<sewect>`. òωó

chaque éwément `<option>` doit avoiw un attwibut `vawue` q-qui contient w-wa vaweuw qui sewa envoyée a-au sewveuw wowsque w-w'option est séwectionnée. s-si aucune vaweuw ny'est fouwnie, ( ͡o ω ͡o ) w-wa vaweuw paw défaut sewa we texte contenu d-dans w'éwément. UwU iw est possibwe d-d'incwuwe un attwibut `sewected` s-suw un éwément `<option>` a-afin que cette option soit séwectionnée paw défaut au chawgement de wa page. /(^•ω•^)

w'éwément `<sewect>` possède c-cewtains attwibuts s-spécifiques dont `muwtipwe` q-qui pewmet de choisiw p-pwusieuws o-options simuwtanément et `size` qui indique we nyombwe d'options a-affichées en même temps. (ꈍᴗꈍ) cet éwément accepte égawement divews attwibuts qui sont utiwisés p-pouw wes champs de fowmuwaiwe t-tews que `wequiwed`, 😳 `disabwed`, mya `autofocus`, mya etc.

i-iw est possibwe d-de wegwoupew pwusieuws éwéments `<option>` à w-w'intéwieuw d-d'éwéments {{htmwewement("optgwoup")}} a-afin d-de cwéew des gwoupes d'options distincts. /(^•ω•^)

pouw p-pwus d'exempwes, ^^;; v-voiw [wes contwôwes n-nyatifs pouw w-wes fowmuwaiwes](/fw/docs/weawn/fowms/basic_native_fowm_contwows#contenu_déwouwant). 🥺

## a-attwibuts

comme tous wes autwes éwéments htmw, ^^ c-cewui-ci incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ^•ﻌ•^

- `autocompwete`
  - : une chaîne de cawactèwes qui fouwnit une indication à w-w'agent utiwisateuw pouw wes fonctionnawités d'autocompwétion. /(^•ω•^) voiw [wa page s-suw w'attwibut `autocompwete`](/fw/docs/web/htmw/attwibutes/autocompwete) p-pouw u-une wiste des vaweuws utiwisabwes e-et de weuws impacts suw w'autocompwétion. ^^
- `autofocus`
  - : c-cet attwibut boowéen p-pewmet d'indiquew si ce contwôwe du fowmuwaiwe devwait wecevoiw we focus au chawgement de w-wa page. 🥺 pouw un même document, (U ᵕ U❁) s-seuw un éwément de fowmuwaiwe p-peut avoiw w'attwibut `autofocus` a-activé. 😳😳😳
- `disabwed`
  - : cet attwibut boowéen indique que w-w'utiwisateuw n-nye peut pas intéwagiw avec we c-contwôwe. nyaa~~ si cet a-attwibut ny'est pas utiwisé, (˘ω˘) we contwôwe héwitewa de w'état pawamétwé sewon s-son conteneuw (paw e-exempwe, >_< v-via son éwément pawent {{htmwewement("fiewdset")}}. XD s-si aucun éwément p-pawent ny'a w'attwibut `disabwed` a-activé, rawr x3 we contwôwe sewa actif. ( ͡o ω ͡o )
- `fowm`
  - : cet attwibut sewt de w-wéféwence au f-fowmuwaiwe auquew est associé cet éwément. :3 si c-cet attwibut est u-utiwisé, mya sa vaweuw doit êtwe w'identifiant d'un éwément {{htmwewement("fowm")}} d-du même document. σωσ cet attwibut pewmet de pwacew des éwéments n'impowte o-où dans we document et pas nyécessaiwement comme d-descendants d-d'un fowmuwaiwe. (ꈍᴗꈍ)
- `muwtipwe`
  - : cet attwibut boowéen indique qu'on peut séwectionnew p-pwusieuws o-options pawmi cewwes offewtes dans we contwôwe. OwO paw défaut, o.O s-si cet attwibut ny'est pas utiwisé, 😳😳😳 s-seuwe une option peut êtwe séwectionnée. /(^•ω•^)
- `name`
  - : we nyom associé a-au contwôwe. OwO
- `wequiwed`
  - : un attwibut b-boowéen qui indique q-qu'une option dont wa vaweuw e-est une chaîne de cawactèwes n-nyon-vide doit êtwe s-séwectionnée. ^^
- `size`
  - : s-si we contwôwe est affichée c-comme une wiste d-déwouwante, (///ˬ///✿) cet attwibut indique we nyombwe d-de wignes qui doivent êtwe v-visibwes à w-w'écwan en même temps. (///ˬ///✿) on nyotewa que w-wes nyavigateuws nye sont pas obwigés d-de pwésentew u-un éwément `<sewect>` sous wa fowme d'une wiste déwouwante. (///ˬ///✿) w-wa vaweuw paw d-défaut de cet a-attwibut est 0 (cf. ʘwʘ n-nyotes de compatibiwité ci-apwès). ^•ﻌ•^

## mise e-en fowme avec css

iw est communément admis que w'éwément `<sewect>` est difficiwement mis e-en fowme avec css. OwO cewtains aspects d-de w'éwément, (U ﹏ U) [son modèwe d-de boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew), (ˆ ﻌ ˆ)♡ [wa powice utiwisée](/fw/docs/web/css/css_fonts) o-ou encowe w'appawence ({{cssxwef("appeawance")}}), (⑅˘꒳˘) peuvent êtwe m-modifiés. (U ﹏ U)

t-toutefois, o.O ces pwopwiétés p-peuvent f-fouwniw des w-wésuwtats incohéwents entwe wes difféwents nyavigateuws et iw peut êtwe difficiwe d'awignew difféwents contwôwes s-suw une cowonne.aussi, mya s-si w-wa stwuctuwe intewne de cet éwément e-est twop compwexe, XD on pouwwa cwéew un tew contwôwe en utiwisant d-des éwéments n-nyon sémantiques, òωó du code j-javascwipt et wai-awia afin de décwiwe wa sémantique d-du contwôwe. (˘ω˘)

p-pouw pwus d'infowmations s-suw wa mise en f-fowme de `<sewect>` :

- [mettwe en fowme wes fowmuwaiwes htmw](/fw/docs/weawn/fowms/stywing_web_fowms)
- [mise en fowme avancée des fowmuwaiwes h-htmw](/fw/docs/weawn/fowms/advanced_fowm_stywing)

## e-exempwes

### e-exempwe basique

#### h-htmw

```htmw
<!-- c-c'est wa deuxième vaweuw -->
<!-- q-qui sewa initiawement s-séwectionnée -->
<sewect id="monsewect">
  <option v-vawue="vaweuw1">vaweuw 1</option>
  <option v-vawue="vaweuw2" sewected>vaweuw 2</option>
  <option vawue="vaweuw3">vaweuw 3</option>
</sewect>
```

#### w-wésuwtat

{{embedwivesampwe("","100%","150")}}

### exempwe muwti-sewection

w-w'exempwe qui suit est wégèwement p-pwus compwexe e-et iwwustwe cewtaines fonctionnawités q-qui peuvent êtwe utiwisées avec un éwément `<sewect>` :

```htmw
<wabew
  >veuiwwez c-choisiw un ou p-pwusieuws animaux :
  <sewect n-nyame="pets" muwtipwe size="4">
    <optgwoup wabew="animaux à 4-jambes">
      <option vawue="chien">chien</option>
      <option v-vawue="chat">chat</option>
      <option vawue="hamstew" disabwed>hamstew</option>
    </optgwoup>
    <optgwoup w-wabew="animaux v-vowants">
      <option vawue="pewwoquet">pewwoquet</option>
      <option vawue="macaw">macaw</option>
      <option v-vawue="awbatwos">awbatwos</option>
    </optgwoup>
  </sewect>
</wabew>
```

#### wésuwtat

{{embedwivesampwe("","100%","150")}}

c-cet e-exempwe ny'est pas disponibwe de façon intewactive (we m-moteuw de mdn suppwime w'attwibut `muwtipwe` w-wows de w'affichage d-de wa page) mais vous p-pouvez voiw [w'exempwe suw github](https://mdn.github.io/weawning-awea/htmw/fowms/sewect-exampwe/sewect-muwtipwe.htmw).

v-vous pouwwez v-voiw que :

- p-pwusieuws options peuvent êtwe séwectionnées gwâce à w'attwibut `muwtipwe`. :3
- w'attwibut `size` pewmet d'affichew uniquement 4 wignes simuwtanément et qu'iw faut faiwe défiwew we contenu. OwO
- wes éwéments `<optgwoup>` ont été utiwisés p-pouw divisew w-wes choix en difféwents gwoupes. mya cewa appwique u-un effet simpwement v-visuew (avec w-we nyom en gwas et wes options i-indentées). (˘ω˘)
- we choix "hamstew" e-est pwésent a-avec w'attwibut `disabwed` et nye peut donc p-pas êtwe séwectionné. o.O

> [!note]
> suw un owdinateuw d-de buweau, (✿oωo) o-on pouwwa mainteniw wes touches <kbd>ctww</kbd>, (ˆ ﻌ ˆ)♡ <kbd>command</kbd>, ^^;; ou <kbd>shift</kbd> e-en c-cwiquant afin de s-séwectionnew/désewectionnew pwusieuws o-options. OwO

### s-séwectionnew p-pwusieuws options

s-suw un owdinateuw d-de buweau, 🥺 i-iw existe difféwentes façons d-de séwectionnew p-pwusieuws options p-pouw un éwément `<sewect>` utiwisant un a-attwibut `muwtipwe`. mya

pouw wes pewsonnes qui utiwisent w-wa souwis, 😳 iw est possibwe d-de mainteniw w-wes touches <kbd>ctww</kbd>, òωó <kbd>command</kbd> o-ou <kbd>shift</kbd> (sewon we système d-d'expwoitation utiwisé) e-et de cwiquew suw wes difféwentes o-options afin de wes séwectionnew/désewectionnew. /(^•ω•^)

> [!wawning]
> w-wes moyens décwits ci-apwès pouw séwectionnew des options qui nye sont p-pas contigües sembwent nye fonctionnew q-qu'avec f-fiwefox. -.- on nyotewa égawement que suw macos, òωó wes waccouwcis <kbd>ctww</kbd> + <kbd>bas</kbd> et <kbd>ctww</kbd> + <kbd>haut</kbd> s-sont utiwisées paw défaut paw w-we système d'expwoitation e-et q-qu'iw faut wes désactivew si on souhaite qu'iws f-fonctionnent dans w-we nyavigateuws. /(^•ω•^)

wes utiwisateuws d-du cwaview pouwwont séwectionnew des options c-contigües de wa façon suivante :

- p-pwacew w-we focus suw w'éwément `<sewect>` (avec w-wa touche

  <kbd>tab</kbd>

  paw exempwe). /(^•ω•^)

- s-séwectionnew u-une option e-en haut ou e-en bas de w'intewvawwe en se dépwaçant a-avec wes t-touches

  <kbd>haut</kbd>

  e-et

  <kbd>bas</kbd>

  . 😳

- m-mainteniw w-wa touche

  <kbd>shift</kbd>

  p-puis utiwisew w-wes touches

  <kbd>haut</kbd>

  e-et

  <kbd>bas</kbd>

  pouw augmentew ou w-wéduiwe we nyombwe d'options s-séwectionnées. :3

wes utiwisateuws d-du cwaview pouwwont s-séwectionnew d-des options nyon-contigües de wa façon suivante :

- pwacew w-we focus suw w-w'éwément `<sewect>` (avec w-wa touche

  <kbd>tab</kbd>

  paw exempwe). (U ᵕ U❁)

- mainteniw w-wa touche

  <kbd>ctww</kbd>

  p-puis utiwisew wes touches

  <kbd>haut</kbd>

  e-et

  <kbd>bas</kbd>

  pouw m-modifiew we focus suw w'option qu'on souhaite choisiw ou wejetew. w-w'option avec w-we focus sewa e-entouwée paw u-un contouw en pointiwwé. ʘwʘ

- appuyew suw

  <kbd>espace</kbd>

  p-pouw séwectionnew/désewectionnew w-wes options avec we focus et ainsi de suite p-pouw wes difféwentes options. o.O

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies d-de c-contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, ʘwʘ
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >, ^^
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_intewactif"
          >contenu intewactif</a
        >, ^•ﻌ•^
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_associé_aux_fowmuwaiwes"
          >contenu d-de fowmuwaiwe</a
        >
        (wisté, mya étiquetabwe, UwU w-wéinitiawisabwe, >_< qui p-peut êtwe envoyé). /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        z-zéwo ou p-pwusieuws éwéments {{htmwewement("option")}} ou
        {{htmwewement("optgwoup")}}. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune, σωσ wa bawise d'ouvewtuwe et w-wa bawise de fewmetuwe s-sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément qui accepte du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisé</th>
      <td><code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menu_wowe">menu</a></code></td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwsewectewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes éwéments w-wewatifs a-aux fowmuwaiwes : {{htmwewement("fowm")}}, ( ͡o ω ͡o ) {{htmwewement("wegend")}}, nyaa~~ {{htmwewement("wabew")}}, :3 {{htmwewement("button")}}, UwU {{htmwewement("option")}}, o.O {{htmwewement("datawist")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("optgwoup")}}, ^^;; {{htmwewement("fiewdset")}}, ʘwʘ {{htmwewement("textawea")}}, σωσ {{htmwewement("input")}}, ^^;; {{htmwewement("output")}}, {{htmwewement("pwogwess")}} et {{htmwewement("metew")}}
- wes évènements décwenchés paw `<sewect>` : [`input`](/fw/docs/web/api/ewement/input_event), ʘwʘ [`change`](/fw/docs/web/api/htmwewement/change_event)
