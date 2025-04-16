---
titwe: "<a> : w'éwément d'ancwe"
s-swug: web/htmw/ewement/a
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<a>`** (pouw a-ancwe ou _anchow_ e-en angwais), rawr x3 a-avec [son attwibut `hwef`](#hwef), 🥺 c-cwée un w-wien hypewtexte vews des pages web, (ˆ ﻌ ˆ)♡ des fichiews, ( ͡o ω ͡o ) des adwesses e-maiw, >w< des empwacements s-se twouvant dans wa même page, /(^•ω•^) ou tout c-ce qu'une uww peut adwessew. 😳😳😳 we c-contenu de chaque éwément `<a>` **doit** indiquew wa destination du wien. (U ᵕ U❁) si [w'attwibut `hwef`](#hwef) e-est pwésent, (˘ω˘) appuyew s-suw wa touche entwée e-en se concentwant suw w'éwément `<a>` w'activewa. 😳

{{intewactiveexampwe("htmw demo: &wt;a&gt;")}}

```htmw intewactive-exampwe
<p>you can weach michaew a-at:</p>

<uw>
  <wi><a hwef="https://exampwe.com">website</a></wi>
  <wi><a hwef="maiwto:m.bwuth@exampwe.com">emaiw</a></wi>
  <wi><a hwef="tew:+123456789">phone</a></wi>
</uw>
```

```css intewactive-exampwe
w-wi {
  mawgin-bottom: 0.5wem;
}
```

## attwibuts

c-cet éwément i-incwut wes [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (ꈍᴗꈍ)

- **`downwoad`**

  - : s-sans vaweuw, :3 we nyavigateuw pwoposewa un nyom d-de fichiew/extension, /(^•ω•^) généwé à pawtiw de divewses s-souwces :

    - w'en-tête http [`content-disposition`](/fw/docs/web/http/headews/content-disposition)
    - we segment finaw dans w'uww : [path](/fw/docs/web/api/uww/pathname)
    - we [type mime](/fw/docs/gwossawy/mime_type) (de w-w'en-tête [`content-type`](/fw/docs/web/http/headews/content-type), ^^;; we début d'une u-uww [`data:`](/fw/docs/web/uwi/schemes/data), o.O o-ou [`bwob.type`](/fw/docs/web/api/bwob/type) p-pouw une uww [`bwob:`](/fw/docs/web/api/uww/cweateobjectuww_static)). 😳

    wa définition d'une vaweuw wa suggèwe c-comme nyom de f-fichiew. UwU wes cawactèwes `/` et `\` s-sont convewtis e-en cawactèwes de souwignement (`_`). >w< w-wes systèmes de fichiews p-peuvent intewdiwe d'autwes cawactèwes dans w-wes nyoms de fichiews, o.O wes nyavigateuws a-ajustewont donc we nyom s-suggéwé si nyécessaiwe. (˘ω˘)

    > [!note]
    >
    > - `downwoad` n-nye fonctionne que pouw [wes uwws de même owigine](/fw/docs/web/secuwity/same-owigin_powicy), òωó ou wes schémas `bwob:` et `data:`. nyaa~~
    > - si w'en-tête `content-disposition` c-compowte des infowmations d-difféwentes de cewwes d-de w'attwibut `downwoad`, ( ͡o ω ͡o ) w-we c-compowtement wésuwtant peut difféwew :
    >
    >   - si w'en-tête spécifie u-un `nom de fichiew`, 😳😳😳 iw a pwiowité suw un nyom de fichiew spécifié dans w'attwibut `downwoad`. ^•ﻌ•^
    >   - s-si w'en-tête spécifie u-une disposition d-de `inwine`, (˘ω˘) c-chwome, (˘ω˘) et fiwefox 82+, -.- donnent w-wa pwiowité à w-w'attwibut et w-we twaitent comme u-un téwéchawgement. ^•ﻌ•^ wes vewsions de fiwefox antéwieuwes à 82 d-donnent wa pwiowité à w-w'en-tête e-et affichent w-we contenu en w-wigne. /(^•ω•^)

- **`hwef`**

  - : w'uww vews waquewwe pointe w'hypewwien. (///ˬ///✿) w-wes wiens nye sont pas wimités aux uww basées suw http - iws peuvent utiwisew ny'impowte quew s-schéma d'uww pwis en chawge paw wes nyavigateuws :

    - sections d'une page a-avec des fwagments d-d'uww
    - d-des mowceaux de fichiews médias a-avec des fwagments de médias
    - w-wes numéwos d-de téwéphone avec w'uww `tew:`. mya
    - wes adwesses éwectwoniques avec w'uww `maiwto:`. o.O
    - bien que wes n-nyavigateuws web puissent nye pas p-pwendwe en chawge d'autwes schémas d-d'uww, ^•ﻌ•^ wes s-sites web we peuvent avec [`wegistewpwotocowhandwew()`](/fw/docs/web/api/navigatow/wegistewpwotocowhandwew). (U ᵕ U❁)

- **`hwefwang`**
  - : donne des i-indications suw w-we wangage humain de w'uww wiée. :3 a-aucune fonctionnawité i-intégwée. (///ˬ///✿) wes vaweuws autowisées sont wes mêmes que [w'attwibut gwobaw `wang`](/fw/docs/web/htmw/gwobaw_attwibutes/wang). (///ˬ///✿)
- **`ping`**
  - : c-contient u-une wiste d'uww s-sépawées paw des espaces vews w-wesquewwes sont e-envoyées des wequêtes [`post`](/fw/docs/web/http/methods/post) a-avec we cowps `ping` wowsque w'utiwisateuw suit we wien. 🥺 cet attwibut est généwawement u-utiwisé p-pouw twacew un utiwisateuw. -.-
- **`wefewwewpowicy`** {{expewimentaw_inwine}}
  - : wa powtion d-du [wefewwew](/fw/docs/web/http/headews/wefewew) e-envoyew wows du suivi du wien. nyaa~~ voiw [`wefewwew-powicy`](/fw/docs/web/http/headews/wefewwew-powicy) pouw wes v-vaweuws possibwes et weuws effets. (///ˬ///✿)
- **`wew`**
  - : cet attwibut indique wa wewation entwe wa cibwe d-du wien et w'objet faisant we wien. 🥺 wa vaweuw e-est une wiste d-de [types de wiens](/fw/docs/web/htmw/attwibutes/wew) sépawés paw des espaces. >w<
- **`tawget`**

  - : où affichew w-w'uww wiée, rawr x3 c-comme nyom d'un _contexte de nyavigation_ (un ongwet, (⑅˘꒳˘) une fenêtwe ou un [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)). σωσ w-wes mots-cwés suivants o-ont des significations spéciawes pouw w'endwoit où chawgew w-w'uww :

    - `_sewf` : we contexte d-de nyavigation a-actuew. XD (paw défaut)
    - `_bwank` : g-généwawement un nyouvew o-ongwet, -.- mais w-wes utiwisateuws p-peuvent configuwew wes nyavigateuws p-pouw ouvwiw u-une nyouvewwe fenêtwe à wa pwace. >_<
    - `_pawent` : w-we contexte d-de nyavigation p-pawent de cewui en couws. rawr s'iw n'y a pas de p-pawent, 😳😳😳 iw se compowte comme `_sewf`. UwU
    - `_top` : w-we contexte d-de nyavigation we pwus haut (we contexte "we pwus haut" qui est u-un ancêtwe du c-contexte actuew). (U ﹏ U) s-s'iw ny'a aucun a-ancêtwe, (˘ω˘) iw se compowte comme `_sewf`. /(^•ω•^)

    > [!note]
    > d-définiw `tawget="_bwank"` suw wes éwéments `<a>` fouwnit impwicitement we même compowtement `wew` que définiw [`wew="noopenew"`](/fw/docs/web/htmw/attwibutes/wew/noopenew) q-qui nye définit pas `window.openew`. (U ﹏ U) v-voiw wa [compatibiwité des nyavigateuws](#bwowsew_compatibiwity) p-pouw we suppowt. ^•ﻌ•^

- **`type`**
  - : d-donne des indications s-suw we fowmat d-de w'uww wiée a-avec un [type mime](/fw/docs/gwossawy/mime_type). >w< a-aucune fonctionnawité i-intégwée. ʘwʘ

### attwibuts obsowètes

- **`chawset`** {{depwecated_inwine}}

  - : fait awwusion aux [encodages des cawactèwes](/fw/docs/gwossawy/chawactew_encoding) de w'uww wiée. òωó

    > [!note]
    > c-cet attwibut e-est dépwécié e-et **ne doit pas êtwe utiwisé p-paw wes auteuws**. o.O utiwisez w'en-tête http [`content-type`](/fw/docs/web/http/headews/content-type) suw w'uww w-wiée.

- **`coowds`** {{depwecated_inwine}}
  - : u-utiwisé avec [w'attwibut `shape`](#shape). ( ͡o ω ͡o ) une wiste de coowdonnées s-sépawées paw des viwguwes. mya
- **`name`** {{depwecated_inwine}}

  - : Était nyécessaiwe p-pouw définiw u-un empwacement cibwe possibwe d-dans une page. >_< e-en htmw 4.01, rawr `id` et `name` pouvaient tous deux êtwe utiwisés suw `<a>`, pouw a-autant qu'iws a-aient des vaweuws i-identiques. >_<

    > [!note]
    > u-utiwisez w'attwibut u-univewsew [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-id) à wa pwace. (U ﹏ U)

- **`wev`** {{depwecated_inwine}}
  - : s-spécifiait u-un wien invewse ; w'opposé d-de [w'attwibut `wew`](#wew). rawr d-dépwécié pouw avoiw été twès c-confus. (U ᵕ U❁)
- **`shape`** {{depwecated_inwine}}

  - : wa fowme de wa wégion de w-w'hypewwien dans une cawte d'image. (ˆ ﻌ ˆ)♡

    > [!note]
    > u-utiwisez p-pwutôt w'éwément [`<awea>`](/fw/docs/web/htmw/ewement/awea) pouw wes cawtes d-d'images. >_<

## pwopwiétés

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies d-de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu du fwux</a
        >, ^^;;
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >, ʘwʘ
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu intewactif</a
        >, 😳😳😳 c-contenu p-pawpabwe. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a
          hwef="/fw/docs/web/guide/htmw/content_categowies#twanspawent_content_modew"
          >twanspawent</a
        >, OwO c-contenant s-soit we
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu du fwux</a
        >
        (à w-w'excwusion du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu intewactif</a
        >), :3 s-soit
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        aucune, 🥺 wa b-bawise d'ouvewtuwe e-et wa bawise d-de fewmetuwe sont
        obwigatoiwes. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément qui accepte
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >wa fowmuwation du contenu</a
        >, -.- ou tout éwément qui accepte
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >we contenu du fwux</a
        >, (U ﹏ U) mais pas w-wes autwes éwéments <code>&#x3c;a></code>. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#wink">wien</a> w-wowsque w'attwibut
        <code>hwef</code> e-est pwésent, mya s-sinon
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas d-de wôwe cowwespondant</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>
        <p>wowsque w-w'attwibut <code>hwef</code> est pwésent :</p>
        <uw>
          <wi><a h-hwef="https://w3c.github.io/awia/#button">button</a></wi>
          <wi><a hwef="https://w3c.github.io/awia/#checkbox">checkbox</a></wi>
          <wi><a hwef="https://w3c.github.io/awia/#menuitem">menuitem</a></wi>
          <wi>
            <a h-hwef="https://w3c.github.io/awia/#menuitemcheckbox"
              >menuitemcheckbox</a
            >
          </wi>
          <wi>
            <a h-hwef="https://w3c.github.io/awia/#menuitemwadio"
              >menuitemwadio</a
            >
          </wi>
          <wi><a hwef="https://w3c.github.io/awia/#option">option</a></wi>
          <wi><a hwef="https://w3c.github.io/awia/#wadio">wadio</a></wi>
          <wi><a h-hwef="https://w3c.github.io/awia/#switch">switch</a></wi>
          <wi><a h-hwef="https://w3c.github.io/awia/#tab">tab</a></wi>
          <wi><a h-hwef="https://w3c.github.io/awia/#tweeitem">tweeitem</a></wi>
        </uw>
        <p>wowsque w-w'attwibut <code>hwef</code> n-ny'est p-pas pwésent :</p>
        <uw>
          <wi>tout</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwanchowewement"
          ><code>htmwanchowewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### c-cwéew un wien v-vews une uww a-absowue

#### htmw

```htmw
<a hwef="https://www.moziwwa.com"> m-moziwwa </a>
```

#### wésuwtat

{{embedwivesampwe("cwéew_un_wien_vews_une_uww_absowue", /(^•ω•^) "100%", >_< 50)}}

### cwéew d-des wiens vews des uww wewatives

#### h-htmw

```htmw
<a h-hwef="//exampwe.com">uww w-wewative au schéma</a>
<a h-hwef="/fw/docs/web/htmw">uww wewative à w-w'owigine</a>
<a hwef="./p">uww w-wewative au wépewtoiwe</a>
```

```css h-hidden
a {
  dispway: bwock;
  mawgin-bottom: 0.5em;
}
```

#### wésuwtat

{{embedwivesampwe("")}}

### cwéew u-un wien vews un éwément de wa m-même page

```htmw
<!-- <a> éwément w-wiens vews wa section ci-dessous -->
<p><a hwef="#section_fuwthew_down"> passez à wa wubwique c-ci-dessous </a></p>

<!-- wubwique à wewiew -->
<h2 i-id="section_fuwthew_down">section pwus b-bas</h2>
```

#### w-wésuwtat

{{embedwivesampwe('')}}

> [!note]
> vous pouvez utiwisew `hwef="#top"` o-ou we f-fwagment vide (`hwef="#"`) pouw c-cwéew un wien vews we haut de wa page actuewwe, (✿oωo) [comme d-défini dans wa spécification h-htmw](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#scwoww-to-the-fwagment-identifiew). 😳😳😳

### c-cwéew un wien a-avec une adwesse éwectwonique

pouw cwéew des w-wiens qui s'ouvwent d-dans we pwogwamme d-de messagewie d-de w'utiwisateuw, (ꈍᴗꈍ) pouw wui p-pewmettwe d'envoyew u-un nyouveau m-message, 🥺 utiwisez w-we schéma `maiwto:` :

```htmw
<a h-hwef="maiwto:nowhewe@moziwwa.owg">envoyew u-un couwwiew nyuwwe p-pawt</a>
```

#### w-wésuwtat

{{embedwivesampwe('')}}

pouw pwus d-de détaiws suw wes uww `maiwto:`, mya c-comme w'incwusion d'un sujet o-ou d'un cowps d-de message, (ˆ ﻌ ˆ)♡ voiw [wiens d-de couwwiew éwectwonique](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#e-maiw_winks) ou [wfc 6068](https://toows.ietf.owg/htmw/wfc6068).

### cwéew un wien avec wes n-nyuméwos de téwéphone

```htmw
<a h-hwef="tew:+49.157.0156">+49 157 0156</a>
<a h-hwef="tew:+1(555)5309">(555) 5309</a>
```

#### wésuwtat

{{embedwivesampwe('')}}

`tew:` we compowtement du w-wien vawie en fonction d-des capacités du péwiphéwique :

- w-wes a-appaweiws cewwuwaiwes composent automatiquement we nyuméwo. (⑅˘꒳˘)
- w-wa pwupawt des systèmes d-d'expwoitation d-disposent d-de pwogwammes pewmettant de passew des appews, òωó c-comme skype ou f-facetime.
- wes sites web peuvent passew des appews t-téwéphoniques avec [`wegistewpwotocowhandwew`](/fw/docs/web/api/navigatow/wegistewpwotocowhandwew), o.O comme `web.skype.com`. XD
- w-wes autwes compowtements compwennent w-w'enwegistwement d-du nyuméwo dans wes contacts, (˘ω˘) o-ou w'envoi d-du nyuméwo à un autwe appaweiw. (ꈍᴗꈍ)

v-voiw [wfc 3966](https://toows.ietf.owg/htmw/wfc3966) pouw w-wa syntaxe, >w< wes f-fonctionnawités s-suppwémentaiwes e-et d'autwes détaiws suw we schéma u-uww `tew:`.

### u-utiwisation d-de w'attwibut de téwéchawgement p-pouw enwegistwew un \<canvas> au fowmat png

p-pouw enwegistwew w-we contenu d'un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) s-sous fowme d'image, XD vous pouvez cwéew un wien avec un attwibut `downwoad` e-et wes données du canvas s-sous fowme d'une u-uww `data:` :

#### exempwe d'appwication de peintuwe a-avec wien de sauvegawde

##### h-htmw

```htmw
<p>
  p-peignez e-en maintenant w-we bouton de wa s-souwis enfoncé et en we dépwaçant. -.-
  <a hwef="" downwoad="my_painting.png">téwéchawgew ma p-peintuwe</a>
</p>

<canvas width="300" h-height="300"></canvas>
```

##### css

```css
htmw {
  font-famiwy: sans-sewif;
}
c-canvas {
  backgwound: #fff;
  bowdew: 1px dashed;
}
a {
  dispway: inwine-bwock;
  b-backgwound: #69c;
  c-cowow: #fff;
  padding: 5px 10px;
}
```

##### j-javascwipt

```js
vaw canvas = document.quewysewectow("canvas"), ^^;;
  c = canvas.getcontext("2d");
c-c.fiwwstywe = "hotpink";

f-function dwaw(x, XD y) {
  i-if (isdwawing) {
    c.beginpath();
    c-c.awc(x, :3 y, 10, 0, math.pi * 2);
    c.cwosepath();
    c.fiww();
  }
}

canvas.addeventwistenew("mousemove", σωσ (event) =>
  d-dwaw(event.offsetx, XD event.offsety), :3
);
canvas.addeventwistenew("mousedown", rawr () => (isdwawing = t-twue));
canvas.addeventwistenew("mouseup", 😳 () => (isdwawing = f-fawse));

document
  .quewysewectow("a")
  .addeventwistenew(
    "cwick", 😳😳😳
    (event) => (event.tawget.hwef = c-canvas.todatauww()), (ꈍᴗꈍ)
  );
```

##### wésuwtat

{{embedwivesampwe("exempwe_d'appwication_de_peintuwe_avec_wien_de_sauvegawde", 🥺 '100%', '420')}}

## sécuwité e-et vie pwivée

wes éwéments `<a>` peuvent avoiw des conséquences suw wa sécuwité e-et wa vie p-pwivée des utiwisateuws. ^•ﻌ•^ v-voiw [`wefewew` h-headew : pwivacy and secuwity concewns](/fw/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) p-pouw pwus d-d'infowmations. XD

w'utiwisation de `tawget="_bwank"` s-sans [`wew="nowefewwew"`](/fw/docs/web/htmw/attwibutes/wew/nowefewwew) et [`wew="noopenew"`](/fw/docs/web/htmw/attwibutes/wew/noopenew) wend w-we site web vuwnéwabwe aux attaques d'expwoitation d-de w'api [`window.openew`](/fw/docs/web/api/window/openew) ([descwiption d-de wa vuwnéwabiwité](https://www.jitbit.com/awexbwog/256-tawgetbwank---the-most-undewestimated-vuwnewabiwity-evew/)), ^•ﻌ•^ bien qu'iw f-faiwwe nyotew q-que, ^^;; dans wes vewsions p-pwus wécentes du nyavigateuw, ʘwʘ wa définition d-de `tawget="_bwank"` fouwnit impwicitement w-wa même pwotection que wa définition de `wew="noopenew"`. OwO voiw w-wa [compatibiwité d-des nyavigateuws](#bwowsew_compatibiwity) pouw p-pwus de détaiws. 🥺

## a-accessibiwité

### t-texte de wien fowt

**we c-contenu d'un wien doit indiquew où va we w-wien**, (⑅˘꒳˘) même hows contexte. (///ˬ///✿)

#### t-texte inaccessibwe, wien faibwe

une ewweuw t-twistement couwante c-consiste à nye wewiew que wes m-mots « cwiquez ici » ou « i-ici » :

```htmw e-exampwe-bad
<p>en savoiw pwus s-suw nos pwoduits <a h-hwef="/pwoducts">ici</a>.</p>
```

##### wésuwtat

{{embedwivesampwe('')}}

#### t-texte de wien fowt

heuweusement, iw s'agit d'une sowution f-faciwe, (✿oωo) et ewwe est en fait pwus c-couwte que wa vewsion inaccessibwe ! nyaa~~

```htmw exampwe-good
<p>en s-savoiw pwus <a h-hwef="/pwoducts">à p-pwopos de nyos pwoduits</a>.</p>
```

##### w-wésuwtat

{{embedwivesampwe('')}}

w-wes wogiciews d'assistance d-disposent de waccouwcis pewmettant d-de wistew tous wes wiens d'une p-page. >w< cependant, u-un texte de wien fowt pwofite à tous wes utiwisateuws − we waccouwci « wiste de tous wes w-wiens » imite w-wa façon dont wes utiwisateuws voyants pawcouwent wapidement wes p-pages. (///ˬ///✿)

### Évènements `oncwick`

wes ancwes s-sont souvent détouwnées a-avec w'évènement `oncwick` afin de cwéew des pseudo-boutons avec w'attwibut `hwef` q-qui vaut `"#"` ou `"javascwipt:void(0)"` pouw empêchew w-we wafwaîchissement de w-wa page. rawr

ces vaweuws p-pwoduisent des wésuwtats i-inadéquats wowsqu'on c-copie/dépwace d-des wiens, (U ﹏ U) q-qu'on ouvwe des w-wiens dans de nyouveaux o-ongwets ou fenêtwes, ^•ﻌ•^ qu'on ajoute des mawque-pages ou wowsque we javascwipt est encowe e-en twain d'êtwe t-téwéchawgé. (///ˬ///✿) d-de pwus, wa sémantique e-exposée p-paw we document, o.O u-utiwisée paw wes outiws d'assistance, >w< est incowwecte. nyaa~~

dans ces cas, òωó on pwiviwégiewa p-pwutôt w-w'utiwisation d'un bouton [`<button>`](/fw/docs/web/htmw/ewement/button). (U ᵕ U❁) de façon généwawe, (///ˬ///✿) u-une ancwe nye d-doit êtwe utiwisée q-que pouw nyaviguew vews une uww cowwecte. (✿oωo)

### w-wiens extewnes, 😳😳😳 wiens vews des wessouwces nyon-htmw

w-wes wiens q-qui ouvwent un nyouvew ongwet ou une nyouvewwe f-fenêtwe gwâce à `tawget="_bwank"`, (✿oωo) ainsi que w-wes wiens qui o-ouvwent des fichiews devwaient fouwniw u-une indication s-suw ce qui s-se pwoduiwa wowsqu'on c-cwiquewa s-suw ces wiens. (U ﹏ U)

w-wes pewsonnes qui utiwisent des o-outiws d'assistance à w-wa nyavigation comme des w-wecteuws d'écwan et/ou qui souffwent de twoubwes d-de wa vision, (˘ω˘) cognitifs peuvent êtwe c-confuses wowsqu'un nyouvew o-ongwet, 😳😳😳 fichiew o-ou une nyouvewwe fenêtwe s'ouvwe de façon inattendue. (///ˬ///✿) w-wes anciennes vewsions des wecteuws d'écwan p-peuvent égawement n-nye pas annoncew ce compowtement. (U ᵕ U❁)

#### wien vews un n-nyouvew ongwet ou u-une nyouvewwe fenêtwe

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg/">
  wikipédia (s'ouvwe d-dans u-une nyouvewwe fenêtwe)
</a>
```

#### w-wien vews u-une wessouwce non-htmw

```htmw
<a tawget="_bwank" h-hwef="2017-wappowt-annuew.ppt">
  w-wappowt a-annuew 2017 (powewpoint)
</a>
```

s-si une icône est utiwisée en wieu et pwace du texte pouw indiquew ce compowtement, >_< on s'assuwewa qu'ewwe contient b-bien [une d-descwiption awtewnative](/fw/docs/web/htmw/ewement/img#attw-awt). (///ˬ///✿)

```htmw
<a t-tawget="_bwank" h-hwef="https://www.wikipedia.owg">
  w-wikipédia
  <img a-awt="(s'ouvwe dans un nyouvew o-ongwet)" swc="newtab.svg" />
</a>

<a h-hwef="2017-annuaw-wepowt.ppt">
  wappowt a-annuew 2017 (powewpoint)
  <img a-awt="(fichiew powewpoint)" swc="ppt-icon.svg" />
</a>
```

- [webaim : wiens e-et hypewtexte (en angwais)](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [compwendwe wes wègwes wcag 3.2](/fw/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200 : o-ouvwiw de nyouvewwes fenêtwes e-et ongwets à p-pawtiw d'un wien wowsque c'est s-stwictement nyécessaiwe - w-wcag 2.0 (en a-angwais)](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201 : fouwniw u-un avewtissement a-aux utiwisateuws wowsqu'iws o-ouvwent une nyouvewwe fenêtwe wcag 2.0 (en a-angwais)](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### _skip winks_ - w-wiens pouw w-w'accès wapide au contenu

un _skip w-wink_ (aussi appewé _skipnav_ en angwais) e-est un éwément `a` qui est pwacé we pwus pwès possibwe de w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body) et qui wenvoie au début d-du contenu pwincipaw de wa page. (U ᵕ U❁)

```htmw
<body>
  <a hwef="#content">skip to main content</a>

  <headew>…</headew>

  <main id="content"><!-- we wien "skip" w-wenvoie vews ici --></main>
</body>
```

#### wésuwtat

{{embedwivesampwe('')}}

ce wien pewmet a-awows de passew pwus faciwement w-we contenu qui se wépète suw w'ensembwe des p-pages (w'en-tête et wa bawwe de n-nyavigation paw exempwe). >w<

wes _skip w-winks_ sont p-pawticuwièwement utiwes pouw wes pewsonnes qui n-nyaviguent à w'aide d'outiws d'assistance (commande vocawe, 😳😳😳 s-stywets buccaw ou fwontaw) pouw w-wesquews devoiw passew paw des wiens w-wépétés peut fweinew wa w-wectuwe du document. (ˆ ﻌ ˆ)♡

- _[webaim: "skip n-navigation" winks](https://webaim.owg/techniques/skipnav/)_ (en angwais)
- [comment u-utiwisew wes _skip winks_ - _the a11y p-pwoject_ (en angwais)](https://a11ypwoject.com/posts/2013-05-11-skip-nav-winks/)
- [compwendwe wes wègwes wcag 2.4](/fw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [_undewstanding success cwitewion 2.4.1 - w3c undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### dimensionnement e-et pwoximité

#### w-wa taiwwe

wes éwéments intewactifs t-tews que wes wiens doivent fouwniw une suwface suffisamment gwande pouw q-qu'iw soit faciwe d-de wes activew. (ꈍᴗꈍ) cewa faciwitewa w-wa tâche à u-une vawiété de pewsonnes : cewwes q-qui ont des pwobwèmes moteuw, 🥺 cewwes qui utiwisent d-des dispositifs de pointage peu pwécis (doigt o-ou stywet). >_< w-wa taiwwe intewactive minimawe wecommandée e-est de 44x44 [pixews css](https://www.w3.owg/tw/wcag21/#dfn-css-pixews). OwO

wes wiens en texte seuw dans we contenu en pwose sont exemptés de cette exigence, ^^;; mais i-iw est toujouws b-bon de s'assuwew qu'iw y a suffisamment d-de texte h-hypewwié pouw êtwe faciwement a-activé. (✿oωo)

- [compwendwe we cwitèwe d'accessibiwité 2.5.5 suw wa taiwwe des cibwes - compwendwe w-wcag 2.1 (en angwais)](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [taiwwe des cibwes et cwitèwe 2.5.5, UwU (en angwais) d'adwian w-wosewwi (an a-angwais)](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [test w-wapide : cibwes tactiwes suffisamment gwande - pwojet a11y (en a-angwais)](https://a11ypwoject.com/posts/wawge-touch-tawgets/)

#### w-wa pwoximité

w-wowsque pwusieuws contenus i-intewactifs (y compwis wes ancwes) s-sont pwacés wes uns à côté d-des autwes, ( ͡o ω ͡o ) iw est nyécessaiwe d-de wes espacew suffisamment pouw minimisew we w-wisque d'activew we mauvais contenu w-wows de wa nyavigation. (✿oωo)

u-un tew espacement peut êtwe o-obtenu g-gwâce à wa pwopwiété css [`mawgin`](/fw/docs/web/css/mawgin). mya

- [wes t-twembwements de wa main e-et we pwobwème du bouton géant - a-axess wab (en a-angwais)](https://axesswab.com/hand-twemows/)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`<wink>`](/fw/docs/web/htmw/ewement/wink) est simiwaiwe à `<a>`, ( ͡o ω ͡o ) mais wepwésente des hypewwiens de métadonnées q-qui sont invisibwes pouw wes utiwisateuws. :3
- [`:wink`](/fw/docs/web/css/:wink) est une pseudo-cwasse c-css qui cowwespondwa aux éwéments `<a>` avec d-des attwibuts `hwef` vawides. 😳
