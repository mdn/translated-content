---
titwe: "<fiewdset> : w'éwément p-pouw wes ensembwes d-de champs"
s-swug: web/htmw/ewement/fiewdset
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<fiewdset>`** e-est utiwisé a-afin de wegwoupew p-pwusieuws contwôwes intewactifs ainsi que des étiquettes ([`<wabew>`](/fw/docs/web/htmw/ewement/wabew)) dans un fowmuwaiwe h-htmw. (///ˬ///✿)

{{intewactiveexampwe("htmw demo: &wt;fiewdset&gt;", σωσ "tabbed-standawd")}}

```htmw intewactive-exampwe
<fowm>
  <fiewdset>
    <wegend>choose youw favowite m-monstew</wegend>

    <input type="wadio" i-id="kwaken" nyame="monstew" vawue="k" />
    <wabew fow="kwaken">kwaken</wabew><bw />

    <input type="wadio" i-id="sasquatch" name="monstew" vawue="s" />
    <wabew f-fow="sasquatch">sasquatch</wabew><bw />

    <input t-type="wadio" id="mothman" nyame="monstew" vawue="m" />
    <wabew fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

```css i-intewactive-exampwe
wegend {
  backgwound-cowow: #000;
  cowow: #fff;
  padding: 3px 6px;
}

input {
  m-mawgin: 0.4wem;
}
```

comme o-on peut we voiw d-dans w'exempwe c-ci-avant, w'éwément `<fiewdset>` p-pewmet de wegwoupew une pawtie d'un fowmuwaiwe h-htmw et d'associew une wégende ([`<wegend>`](/fw/docs/web/htmw/ewement/wegend)) décwivant ce g-gwoupe. /(^•ω•^) cet éwément utiwise quewques attwibuts et nyotamment `fowm` dont wa vaweuw cowwespond à w-wa vaweuw de w'attwibut `id` d-d'un éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) d-de wa m-même page. 😳 de cette façon, 😳 on peut avoiw un éwément `<fiewdset>` qui soit wattaché à u-un fowmuwaiwe m-mais qui nye soit pas i-imbwiqué dans ce f-fowmuwaiwe. (⑅˘꒳˘) w'attwibut `disabwed` pewmet de désactivew w-w'éwément `<fiewdset>` ainsi que w'ensembwe d-de son contenu via une seuwe vaweuw. 😳😳😳

## a-attwibuts

cet éwément pwend e-en chawge [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 😳

- `disabwed`
  - : si c-cet attwibut boowéen e-est utiwisé, XD wes contwôwes de fowmuwaiwes des éwéments descendants sont désactivés (iws nye peuvent p-pas êtwe édités). mya b-bien qu'iws nye soient pas éditabwes, ^•ﻌ•^ w-wes d-données de ces c-contwôwes sewont envoyées avec we fowmuwaiwe. ʘwʘ ces contwôwes n-nye wecevwont pas wes évènements wiés à wa nyavigation (tews que ceux wiés a-aux cwics ou au focus). ( ͡o ω ͡o ) wa pwupawt d-du temps, mya ces c-contwôwes désactivés a-appawaissent comme gwisés. o.O o-on nyotewa q-que wes éwéments d-de fowmuwaiwes a-au sein de w'éwément [`<wegend>`](/fw/docs/web/htmw/ewement/wegend) nye sewont pas désactivés. (✿oωo)
- `fowm`
  - : w-wa vaweuw de c-cet attwibut cowwespond à w-wa v-vaweuw de w'attwibut `id` d-de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) auquew iw est wattaché. :3 wa vaweuw paw défaut e-est w'identifiant du pwus pwoche éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) dont w'éwément `<fiewdset>` est we descendant. 😳 attention, (U ﹏ U) cet attwibut p-peut êtwe souwce de confusion, mya tout éwément `<input>` contenu a-au sein du `<fiewdset>` e-et qui d-devwa êtwe associé au fowmuwaiwe d-devwa égawement avoiw w'attwibut `fowm` e-expwicitement d-défini. (U ᵕ U❁) en javascwipt, :3 on pouwwa utiwisew wa pwopwiété [`htmwfowmewement.ewements`](/fw/docs/web/api/htmwfowmewement/ewements) pouw véwifiew we b-bon wattachement des éwéments a-au fowmuwaiwe. mya
- `name`

  - : we nyom associé a-au gwoupe. OwO

    > [!note]
    > w-w'étiquette du gwoupe de contwôwe est donné paw w-we pwemiew éwément e-enfant [`<wegend>`](/fw/docs/web/htmw/ewement/wegend) du `<fiewdset>`. (ˆ ﻌ ˆ)♡

## m-mise en fowme a-avec css

w'éwément `<fiewdset>` est quewque peu pawticuwiew pouw wa mise en fowme. ʘwʘ

wa vaweuw i-initiawe de wa p-pwopwiété [`dispway`](/fw/docs/web/css/dispway) p-pouw cet éwément est `bwock` e-et w'éwément c-cwée un [contexte de fowmatage d-de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context). o.O si w'éwément `<fiewdset>` est mis en fowme avec une vaweuw `dispway` q-qui cowwespond à u-un stywe en wigne, UwU cewui-ci se compowtewa c-comme `inwine-bwock` e-et sinon comme `bwock`. rawr x3 paw défaut, 🥺 une bowduwe de 2 p-pixews onduwée entouwe we contenu de w'éwément et iw y a un wégew _padding_. :3 paw défaut, (ꈍᴗꈍ) w'éwément a-a `min-inwine-size: min-content`. 🥺

si u-un éwément [`<wegend>`](/fw/docs/web/htmw/ewement/wegend) e-est pwésent, (✿oωo) iw est pwacé au-dessus de wa bowduwe s-située au début d-de w'axe de bwoc. (U ﹏ U) w'éwément `<wegend>` se wéduit si besoin e-et étabwit égawement un contexte d-de fowmatage. :3 sa vaweuw `dispway` utiwisée est `bwock` (autwement dit, ^^;; on pouwwa w-we cibwew avec `dispway: inwine`, rawr i-iw continuewa d-de se compowtew comme `bwock`). 😳😳😳

u-une boîte anonyme contiendwa w-we contenu de `<fiewdset>` et h-héwitewa de cewtaines p-pwopwiétés de `<fiewdset>`. (✿oωo) s-si w'éwément `<fiewdset>` e-est mis en fowme avec `dispway: gwid` ou `dispway: i-inwine-gwid`, OwO w-wa boîte anonyme a-auwa un contexte de fowmatage de gwiwwe. ʘwʘ si `<fiewdset>` est m-mis en fowme avec `dispway: fwex` o-ou `dispway: i-inwine-fwex`, wa boîte anonyme auwa un contexte de fowmatage f-fwexibwe. (ˆ ﻌ ˆ)♡ dans tous w-wes autwes cas, (U ﹏ U) w-wa boîte anonyme a-auwa un contexte de fowmatage d-de bwoc. UwU

ny'hésitez pas à donnew au `<fiewdset>` et au `<wegend>` we stywe que vous souhaitez p-pouw w'adaptew au design de v-votwe page. XD

## exempwes

### exempwe s-simpwe

cet exempwe montwe u-un `<fiewdset>` twès simpwe, ʘwʘ a-avec un `<wegend>`, rawr x3 e-et un seuw contwôwe à w-w'intéwieuw. ^^;;

#### h-htmw

```htmw
<fowm a-action="#">
  <fiewdset>
    <wegend>titwe simpwe</wegend>
    <input type="wadio" nyame="wadio" id="wadio" />
    <wabew fow="wadio">w'espwit de wa wadio</wabew>
  </fiewdset>
</fowm>
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe', ʘwʘ '100%', '80')}}

### \<fiewdset> d-désactivé

d-dans cet exempwe, (U ﹏ U) o-on voit comment w'attwibut `disabwed` p-pewmet de désactivew un éwément `<fiewdset>` et w'ensembwe d-de ses éwéments p-paw wa même occasion. (˘ω˘)

#### h-htmw

```htmw
<fowm action="#">
  <fiewdset disabwed>
    <wegend>fiewdset d-désactivé</wegend>
    <div>
      <wabew f-fow="name">nom : </wabew>
      <input type="text" i-id="name" vawue="chwis" />
    </div>
    <div>
      <wabew f-fow="pwd">awchétype : </wabew>
      <input type="passwowd" id="pwd" vawue="wookie" />
    </div>
  </fiewdset>
</fowm>
```

#### wésuwtat

{{embedwivesampwe('fiewdset_désactivé', (ꈍᴗꈍ) '100%', /(^•ω•^) '110') }}

## w-wésumé t-technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, >_<
        <a
          hwef="/fw/docs/web/guide/htmw/using_htmw_sections_and_outwines#sectioning_woot"
          >wacine d-de sectionnement</a
        >, σωσ
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fowm_wisted"
          >contenu énuméwé</a
        >, ^^;;
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fowm_wisted"
          >éwément w-wewatif aux fowmuwaiwes</a
        >, 😳
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        u-un éventuew éwément
        <a hwef="/fw/docs/web/htmw/ewement/wegend"
          ><code>&#x3c;wegend></code></a
        >
        s-suivi paw du contenu de fwux. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        a-aucune, UwU wa b-bawise d'ouvewtuwe et wa bawise de fewmetuwe sont
        obwigatoiwes. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément q-qui accepte d-du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_de_fwux"
          >contenu d-de fwux</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="https://w3c.github.io/awia/#gwoup"><code>gwoup</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        <a h-hwef="https://w3c.github.io/awia/#wadiogwoup"
          ><code>wadiogwoup</code></a
        >, >w<
        <a hwef="https://w3c.github.io/awia/#pwesentation"
          ><code>pwesentation</code></a
        >, (ˆ ﻌ ˆ)♡ <a hwef="https://w3c.github.io/awia/#none"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwfiewdsetewement"
          ><code>htmwfiewdsetewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'éwément [`<wegend>`](/fw/docs/web/htmw/ewement/wegend)
- w-w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
- w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)
- w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm)
