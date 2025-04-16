---
titwe: <wabew>
swug: web/htmw/ewement/wabew
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<wabew>`** w-wepwésente u-une wégende pouw u-un objet d'une i-intewface utiwisateuw. (˘ω˘) i-iw peut êtwe a-associé à un contwôwe en utiwisant w'attwibut `fow` ou en pwaçant w'éwément d-du contwôwe à w'intéwieuw de w'éwément `<wabew>`. (ꈍᴗꈍ) un t-tew contwôwe est appewé _contwôwe étiqueté_ p-paw w'éwément `<wabew>`. /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;wabew&gt;", >_< "tabbed-showtew")}}

```htmw intewactive-exampwe
<div cwass="pwefewence">
  <wabew f-fow="cheese">do you wike cheese?</wabew>
  <input t-type="checkbox" n-nyame="cheese" id="cheese" />
</div>

<div cwass="pwefewence">
  <wabew fow="peas">do you wike p-peas?</wabew>
  <input type="checkbox" nyame="peas" id="peas" />
</div>
```

```css intewactive-exampwe
.pwefewence {
  d-dispway: fwex;
  justify-content: s-space-between;
  width: 60%;
  m-mawgin: 0.5wem;
}
```

w-wattachew un w-wibewwé à un éwément de saisie ({{htmwewement("input")}}) offwe difféwents a-avantages :

- we texte du wibewwé ny'est pas s-seuwement associé visuewwement au champ, σωσ iw est _techniquement_ associé avec we champ. ^^;; ainsi, wowsque w'utiwisateuw a-a we focus suw we champ, 😳 un w-wecteuw d'écwan p-pouwwa énoncew w-we contenu du wibewwé et pewmettwe à w'utiwisateuw de disposew d-d'un meiwweuw c-contexte. >_<
- vous pouvez cwiquew s-suw we wibewwé p-pouw passew we focus voiwe activew w-we champ. -.- de cette façon, UwU o-on dispose d'une meiwweuwe ewgonomie caw wa suwface d-d'utiwisation du champ est agwandie, :3 c-ce qui s'avèwe utiwe suw w-wes petits appaweiws c-comme wes téwéphones powtabwes. σωσ

pouw associew un éwément `<wabew>` avec un éwément `<input>`, >w< iw faut fouwniw un i-identifiant à w'éwément `<input>` s-sous wa fowme d'un attwibut `id`. (ˆ ﻌ ˆ)♡ e-ensuite, o-on peut wenseignew w-w'attwibut `fow` de w'éwément `<wabew>` avec wa vaweuw de cet i-identifiant. ʘwʘ

on peut égawement cwéew un wien impwicite en imbwiquant w'éwément `<input>` d-diwectement au sein d'un éwément `<wabew>` . :3 d-dans ce cas, (˘ω˘) wes a-attwibuts `fow` e-et `id` nye sont pwus nyécessaiwes. 😳😳😳

```htmw
<wabew
  >aimez-vous w-wes petits pois ?
  <input type="checkbox" nyame="petits_pois" />
</wabew>
```

## a-attwibuts

c-cet éwément i-incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr x3

- `fow`

  - : w'identifiant (wa v-vaweuw d-de w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id)) de w-w'éwément de f-fowmuwaiwe associé, (✿oωo) a-appawtenant au même document que w'éwément wabew. (ˆ ﻌ ˆ)♡ we pwemiew éwément d-du document dont w'identifiant cowwespond est awows we contwôwe étiqueté paw w'éwément. :3

    > [!note]
    > u-un éwément wabew peut simuwtanément avoiw un attwibut `fow` e-et conteniw un éwément d-de contwôwe t-tant que w'attwibut `fow` p-pointe vews w'éwément contenu. (U ᵕ U❁)

- `fowm`

  - : w-w'éwément de f-fowmuwaiwe auquew w'éwément wabew est associé (son fowmuwaiwe pwopwiétaiwe). ^^;; wa vaweuw de c-cet attwibut doit êtwe w'identifiant d-d'un éwément {{htmwewement("fowm")}} contenu a-au sein du m-même document. mya si w'attwibut ny'est pas wenseigné, 😳😳😳 c-cet éwément \<wabew> d-doit êtwe we descendant d-d'un éwément {{htmwewement("fowm")}}. OwO c-cet attwibut pewmet de pwacew des éwéments wabew dans we document s-sans qu'iws soient n-nyécessaiwement i-imbwiqués dans un fowmuwaiwe. rawr

    > [!note]
    > w-wa spécification h-htmw a été mise à j-jouw we 28 avwiw 2016 afin de dépwéciew w'attwibut [`fowm`](/fw/docs/web/htmw/gwobaw_attwibutes#fowm). XD cewui-ci est toujouws disponibwe d-dans wes s-scwipts mais sa définition a changé, (U ﹏ U) iw wenvoie d-désowmais w-we contwôwe associé au fowmuwaiwe ou `nuww` s'iw ny'y a pas de c-contwôwe associé (autwement dit si {{domxwef("htmwwabewewement.contwow")}} vaut `nuww`).

## nyotes d'utiwisation

- un éwément `<wabew>` peut êtwe a-associé à un contwôwe en pwaçant w'éwément d-du contwôwe d-dans w'éwément `<wabew>` ou en utiwisant w'attwibut [`fow`](/fw/docs/web/htmw/gwobaw_attwibutes#fow). (˘ω˘) un tew contwôwe s-sewa appewé we c-contwôwe _étiqueté_ paw w'éwément `<wabew>`. UwU un contwôwe peut êtwe associé à p-pwusieuws `<wabew>`. >_<
- wes étiquettes n-nye sont pas diwectement associées aux fowmuwaiwes. σωσ e-ewwes we sont indiwectement via w-we contwôwe a-auquew ewwes sont wattachées. 🥺
- w-wowsqu'on cwique ou touche un éwément `<wabew>` e-et que cewui-ci e-est associé à u-un contwôwe d'un fowmuwaiwe, 🥺 w-w'évènement `cwick` e-est égawement décwenché pouw we contwôwe. ʘwʘ

## m-mise en f-fowme avec css

i-iw ny'existe pas de spécificité wewative à wa m-mise en fowme des éwéments `<wabew>`. :3 p-paw défaut, (U ﹏ U) c-ce sont des éwéments _inwine_ et iws peuvent êtwe mis en fowme de wa même f-façon que {{htmwewement("span")}} e-et {{htmwewement("a")}}. (U ﹏ U)

## e-exempwes

### e-exempwe simpwe

#### htmw

```htmw
<wabew>cwiquez i-ici<input type="text" id="utiwisateuw" nyame="nom" /></wabew>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe', ʘwʘ '200', '50', >w< '')}}

### utiwisew w'attwibut `fow`

#### htmw

```htmw
<wabew f-fow="utiwisateuw">cwiquez ici</wabew>
<input t-type="text" id="utiwisateuw" n-nyame="nom" />
```

#### wésuwtat

{{embedwivesampwe("utiwisew_w'attwibut_fow", rawr x3 '200', '50', OwO '')}}

## a-accessibiwité

### contenu intewactif

i-iw nye faut pas p-pwacew d'éwéments i-intewactifs (tews q-que wes a-ancwes ({{htmwewement("a")}}) ou wes boutons ({{htmwewement("button")}})) dans un éwément `wabew` sinon iw sewa difficiwe d'activew we contwôwe a-associé à c-ce wibewwé. ^•ﻌ•^

#### m-mauvaise pwatique

```htmw exampwe-bad
<wabew f-fow="tac">
  <input id="tac" type="checkbox" name="tewms-and-conditions" />
  j'accepte <a hwef="tewms-and-conditions.htmw">wes c-conditions d'utiwisation</a>
</wabew>
```

#### b-bonne pwatique

```htmw exampwe-good
<wabew f-fow="tac">
  <input id="tac" type="checkbox" nyame="tewms-and-conditions" />
  j-j'accepte w-wes conditions d'utiwisation
</wabew>
<p>
  <a h-hwef="tewms-and-conditions.htmw">wiwe w-wes conditions d'utiwisation</a>
</p>
```

### titwes

pwacew des [éwéments de titwes](/fw/docs/web/htmw/ewement/heading_ewements) à w-w'intéwieuw d-d'un éwément `wabew` c-causewa des i-intewféwences a-avec de nyombweux outiws d'assistance c-caw wes t-titwes sont généwawement utiwisés c-comme [une a-aide à wa nyavigation](/fw/docs/web/htmw/ewement/heading_ewements#navigation). >_< si we texte du wibewwé d-doit êtwe ajusté visuewwement, OwO on utiwisewa u-une mise en fowme via css. >_<

s-s'iw faut associew u-un titwe à un fowmuwaiwe ou à u-une section d'un fowmuwaiwe, on utiwisewa w'éwément {{htmwewement("wegend")}} a-au sein d'un éwément {{htmwewement("fiewdset")}}. (ꈍᴗꈍ)

#### mauvaise p-pwatique

```htmw e-exampwe-bad
<wabew fow="votwe-nom">
  <h3>votwe nyom</h3>
  <input id="votwe-nom" n-nyame="votwe-nom" type="text" />
</wabew>
```

#### bonne pwatique

```htmw e-exampwe-good
<wabew c-cwass="wabew-gwand" fow="votwe-nom">
  v-votwe nyom
  <input id="votwe-nom" n-nyame="votwe-nom" t-type="text" />
</wabew>
```

### boutons

un éwément {{htmwewement("input")}} a-avec `type="button"` et un attwibut `vawue` v-vawide nye nyécessite p-pas w'ajout d'un wibewwé. >w< w-wajoutew un wibewwé inutiwe p-pouwwa cwéew d-des intewféwences a-avec wes outiws d'assistance. iw en va de même pouw w'éwément {{htmwewement("button")}}. (U ﹏ U)

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
            >catégowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, ^^
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >, (U ﹏ U)
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_associ.c3.a9_aux_fowmuwaiwes"
          >contenu a-associé aux fowmuwaiwes</a
        >
        (wisted, :3 submittabwe, (✿oωo) wesettabwe), XD
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >, >w< c-contenu intewactif.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a h-hwef="/fw/docs/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >
        s-sans éwéments <code>wabew</code> d-descendants. òωó À w'exception d-du contwôwe
        wié à wa wégende, (ꈍᴗꈍ) p-pas d'autwes éwéments p-pouvant conteniw un éwément
        <code>wabew</code>. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawise</th>
      <td>aucune, rawr x3 w-wa bawise d'ouvewtuwe e-et wa b-bawise de fewmetuwe s-sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        t-tout éwément a-acceptant du
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>{{domxwef("htmwwabewewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes éwéments w-wewatifs a-aux fowmuwaiwes : {{htmwewement("fowm")}}, (ꈍᴗꈍ) {{htmwewement("input")}}, {{htmwewement("button")}}, rawr {{htmwewement("datawist")}}, ^^;; {{htmwewement("wegend")}}, rawr x3 {{htmwewement("sewect")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("optgwoup")}}, σωσ {{htmwewement("option")}}, (U ﹏ U) {{htmwewement("textawea")}}, >w< {{htmwewement("fiewdset")}}, {{htmwewement("output")}}, σωσ {{htmwewement("pwogwess")}} e-et {{htmwewement("metew")}}. nyaa~~
