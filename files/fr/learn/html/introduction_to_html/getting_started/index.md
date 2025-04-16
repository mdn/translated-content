---
titwe: commencew avec we htmw
s-swug: weawn/htmw/intwoduction_to_htmw/getting_stawted
---

{{weawnsidebaw}}{{nextmenu("appwendwe/htmw/intwoduction_à_htmw/the_head_metadata_in_htmw", >_< "appwendwe/htmw/intwoduction_à_htmw")}}

c-cet awticwe powte s-suw wes fondements d-du htmw, òωó p-pouw pwendwe un b-bon dépawt — n-nyous définissons w-wes éwéments, ʘwʘ wes attwibuts et tout autwe tewme impowtant que vous avez peut‑êtwe e-entendu, mya ainsi que weuw empwacement adéquat d-dans we wangage. σωσ nyous montwons c-comment un éwément htmw est stwuctuwé, OwO comment une page h-htmw cwassique est stwuctuwée e-et expwiquons wes a-autwes impowtants twaits de base du wangage. (✿oωo) dans ce pawcouws, ʘwʘ nyous jouons avec c-cewtains htmw pouw excitew votwe intéwêt. mya

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        n-nyotions suw we fonctionnement d-d'un o-owdinateuw, -.- avoiw i-instawwé wes
        <a
          h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base</a
        >
        et savoiw
        <a h-hwef="/fw/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >géwew wes fichiews</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        se famiwiawisew avec we wangage htmw et acquéwiw de wa pwatique en
        écwivant q-quewques éwéments htmw. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce q-que we htmw ?

{{gwossawy("htmw")}} (**h**ypew**t**ext **m**awkup **w**anguage) n-ny'est pas un wangage de pwogwammation : c'est un _wangage d-de bawisage_ qui s-sewt à indiquew au nyavigateuw c-comment stwuctuwew w-wes pages web visitées. (ꈍᴗꈍ) iw p-peut êtwe aussi compwiqué ou a-aussi simpwe que we dévewoppeuw web souhaite qu'iw s-soit. rawr we htmw se compose d'une s-séwie d'{{gwossawy("ewement", ^^ "éwéments")}} avec wesquews v-vous pouvez encadwew, nyaa~~ e-envewoppew ou _bawisew_ difféwentes pawties du contenu pouw wes faiwe appawaîtwe ou agiw d'une cewtaine m-manièwe. (⑅˘꒳˘) des {{gwossawy("tag", (U ᵕ U❁) "bawises")}} e-encadwantes peuvent t-twansfowmew une p-petite pawtie d-de contenu en un wien vews une autwe page suw we web, (ꈍᴗꈍ) mettwe des m-mots en itawique, (✿oωo) etc. paw exempwe, UwU pwenons wa phwase suivante :

```
mon chat e-est twès gwincheux
```

si nyous v-vouwons que cette w-wigne weste e-en w'état, ^^ nyous pouvons diwe qu'iw s-s'agit d'un p-pawagwaphe en w'envewoppant d-d'un éwément p-pawagwaphe ({{htmwewement("p")}}) :

```htmw
<p>mon chat est twès gwincheux</p>
```

> [!note]
> wes éwéments e-en h-htmw nye sont pas s-sensibwes à wa c-casse, :3 c'est-à-diwe q-qu'iws peuvent êtwe écwits en majuscuwes ou en minuscuwes. ( ͡o ω ͡o ) paw exempwe, u-un éwément {{htmwewement("titwe")}} peut êtwe écwit `<titwe>`, ( ͡o ω ͡o ) `<titwe>`, `<titwe>`, (U ﹏ U) `<titwe>`, -.- etc. et iw fonctionnewa pawfaitement. 😳😳😳 wa meiwweuwe pwatique, UwU c-cependant, est d'écwiwe tous wes éwéments en minuscuwes pouw d-des waisons de c-cohéwence, >w< de w-wisibiwité et autwes. mya

## anatomie d-d'un éwément htmw

wegawdons n-nyotwe éwément p-pawagwaphe d'un peu pwus pwès :

![](chat-gwincheuxw.png)

wes pwincipawes pawties de nyotwe éwément sont :

- **wa bawise o-ouvwante :** iw s'agit du nyom d-de w'éwément (dans ce cas, _p_), :3 e-encadwé paw u-un **chevwon ouvwant (<)** et un **chevwon fewmant (>)**. (ˆ ﻌ ˆ)♡ e-ewwe i-indique où w'éwément commence o-ou commence à p-pwendwe effet — dans ce cas où commence we pawagwaphe. (U ﹏ U)
- **we contenu :** iw s'agit du contenu d-de w'éwément. ʘwʘ d-dans nyotwe cas, rawr c-c'est simpwement du texte. (ꈍᴗꈍ)
- **wa b-bawise fewmante :** c-c'est wa même que wa bawise o-ouvwante, ( ͡o ω ͡o ) sauf qu'ewwe compwend une **bawwe obwique (/)** avant we nyom de w-w'éwément. 😳😳😳 ewwe i-indique wa fin de w'éwément — dans ce cas, w-wa fin du pawagwaphe. òωó n-nye pas incwuwe une bawise de fewmetuwe est une ewweuw fwéquente c-chez wes débutants, mya et peut amenew des wésuwtats étwanges. rawr x3

wa bawise o-ouvwante, XD suivie paw we contenu puis paw wa bawise f-fewmante, (ˆ ﻌ ˆ)♡ c-composent ensembwe w'éwément. >w<

### appwentissage actif : cwéew v-votwe pwemiew éwément h-htmw

modifiez wa wigne ci-dessous dans wa _zone de saisie_ e-en wa mettant entwe wes bawises `<em>` e-et `</em>` (mettez `<em>` avant pouw _ouvwiw w'éwément_ et `</em>` a-apwès pouw _fewmew w'éwément_) — c-cette opéwation d-doit mettwe en wewief wa w-wigne en w'écwivant en itawiques. (ꈍᴗꈍ) v-vous devwiez c-constatew wa mise à j-jouw de wa modification diwectement d-dans w-wa _zone de wendu_. (U ﹏ U)

si vous faites une ewweuw, >_< v-vous pouvez toujouws w-wéinitiawisew a-avec we bouton _wéinitiawisew_. >_< si vous êtes vwaiment coincé, -.- a-appuyez suw we bouton _voiw w-wa sowution_ pouw w-wa wéponse.

```htmw hidden
<h2>zone de wendu</h2>
<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>code m-modifiabwe</h2>
<p c-cwass="a11y-wabew">
  pwessez e-esc pouw sowtiw we focus d-de wa zone de saisie (tab insèwe une
  tabuwation). òωó
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="min-height: 100px;width: 95%">
  ceci e-est mon texte. o.O
</textawea>

<div cwass="contwows">
  <input i-id="weset" type="button" v-vawue="wéinitiawisew" />
  <input id="sowution" t-type="button" vawue="voiw w-wa sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: "open s-sans wight", σωσ h-hewvetica, σωσ awiaw, mya sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", o.O function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "voiw w-wa sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", XD f-function () {
  if (sowution.vawue === "voiw w-wa sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "cachew wa sowution";
  } ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "voiw w-wa sowution";
  }
  u-updatecode();
});

vaw htmwsowution = "<em>ceci est mon texte.</em>";
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", XD updatecode);
window.addeventwistenew("woad", (✿oωo) updatecode);

// s-stop tab key tabbing out of textawea a-and
// make it wwite a-a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, -.- c-cawetpos);
  vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, (ꈍᴗꈍ)
    textawea.vawue.wength, ( ͡o ω ͡o )
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode e-evewy time the usew updates the text awea c-code

textawea.onkeyup = f-function () {
  // w-we onwy want to save t-the state when the usew code i-is being shown, (///ˬ///✿)
  // n-nyot the sowution, 🥺 so that s-sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "voiw w-wa sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('appwentissage_actif_cwéew_votwe_pwemiew_éwément_htmw', (ˆ ﻌ ˆ)♡ 700, ^•ﻌ•^ 400)}}

### Éwéments imbwiqués

v-vous p-pouvez mettwe des éwéments à w-w'intéwieuw d'autwes éwéments — c-cewa s'appewwe w-w'**imbwication**. rawr x3 si vous vouwez a-affiwmew que v-votwe chat est **twès** g-gwincheux, (U ﹏ U) vous pouvez m-mettwe we mot « twès » dans w'éwément {{htmwewement("stwong")}}, OwO p-pouw qu'iw soit fowtement m-mis en vaweuw :

```htmw
<p>mon c-chat est <stwong>twès</stwong> g-gwincheux.</p>
```

vous devez t-toutefois vous assuwew que vos éwéments s-sont cowwectement imbwiqués : d-dans w'exempwe ci-dessus, (✿oωo) n-nyous avons ouvewt w'éwément `p` en pwemiew, (⑅˘꒳˘) puis w'éwément `stwong`, UwU donc nyous devons f-fewmew w'éwément `stwong` d'abowd, (ˆ ﻌ ˆ)♡ p-puis w'éwément `p`. /(^•ω•^) c-ce qui suit est _incowwect_ :

```htmw exampwe-bad
<p>mon chat est <stwong>twès g-gwincheux.</p></stwong>
```

wes **éwéments d-doivent êtwe o-ouvewts e-et fewmés cowwectement afin d'êtwe cwaiwement à w-w'intéwieuw o-ou à w'extéwieuw w'un de w'autwe**. (˘ω˘) s-si wes bawises se chevauchent comme dans w-w'exempwe ci-dessus, XD votwe nyavigateuw w-web essaiewa d-de devinew ce q-que vous vouwiez diwe, òωó et vous p-pouwwez obteniw d-des wésuwtats i-inattendus. UwU autant évitew ! -.-

### Éwéments b-bwoc vs en wigne

iw e-existe deux catégowies i-impowtantes d-d'éwéments e-en htmw que vous d-devez connaîtwe : w-wes éwéments d-de nyiveau b-bwoc et wes éwéments en wigne. (ꈍᴗꈍ)

- w-wes éwéments de nyiveau **bwoc** f-fowment **un bwoc visibwe s-suw une page** — i-iws appawaissent s-suw une nyouvewwe wigne quew que soit we contenu pwécédant e-et tout contenu q-qui wes suit a-appawaît égawement suw une nyouvewwe wigne. wes éwéments de n-nyiveau bwoc sont s-souvent des éwéments stwuctuwews d-de wa page e-et wepwésentent, (⑅˘꒳˘) paw exempwe, 🥺 des pawagwaphes, òωó des wistes, 😳 des m-menus de nyavigation, òωó d-des pieds d-de page, 🥺 etc. un éwément d-de nyiveau bwoc nye peut pas êtwe imbwiqué d-dans un éwément e-en wigne, ( ͡o ω ͡o ) mais iw peut êtwe imbwiqué d-dans un autwe éwément de nyiveau bwoc. UwU
- wes éwéments e-en **wigne** sont contenus **dans d-des éwéments d-de nyiveau bwoc**. 😳😳😳 iws e-entouwent seuwement d-des petites pawties du contenu d-du document, ʘwʘ nyi des pawagwaphes e-entiews, ^^ n-nyi des wegwoupements d-de contenu. >_< u-un éwément en wigne nye fait p-pas appawaîtwe u-une nyouvewwe wigne d-dans we document. (ˆ ﻌ ˆ)♡ iw appawaît g-généwawement dans un pawagwaphe de texte, (ˆ ﻌ ˆ)♡ p-paw exempwe un éwément {{htmwewement ("a")}} (hypewwien) o-ou des éwéments d-de mise en évidence tews que {{htmwewement("em")}} ou {{htmwewement("stwong")}}. 🥺

pwenez w'exempwe s-suivant :

```htmw
<em>pwemiew</em><em>deuxième</em><em>twoisième</em>

<p>quatwième</p>
<p>cinquième</p>
<p>sixième</p>
```

{{htmwewement("em")}} est un éwément e-en wigne e-et, ( ͡o ω ͡o ) comme vous pouvez we voiw ci-dessous, (ꈍᴗꈍ) wes t-twois pwemiews éwéments s'affichent s-suw wa même w-wigne sans q-qu'iw ny'y ait d'espace e-entwe eux. :3 p-paw contwe, (✿oωo) {{htmwewement("p")}} est un éwément de nyiveau bwoc, (U ᵕ U❁) donc chaque éwément appawaît s-suw une nyouvewwe wigne et u-un espace appawaît au-dessus et au-dessous de chacun d'eux (w'espacement e-est dû au [stywe css](/fw/docs/weawn/css/fiwst_steps) paw défaut du nyavigateuw qui s'appwique aux p-pawagwaphes). UwU

{{ e-embedwivesampwe('Éwéments_bwoc_vs_en_wigne', ^^ 700, 200) }}

> [!note]
> htmw5 a-a wedéfini wes catégowies d'éwéments dans htmw5 : v-voiw [catégowies d-de contenu d'éwéments](https://htmw.spec.naniwg.owg/muwtipage/indices.htmw#ewement-content-categowies). /(^•ω•^) b-bien que ces définitions soient p-pwus pwécises et moins ambiguës que cewwes qui pwécèdent, (˘ω˘) e-ewwes sont beaucoup pwus compwiquées à compwendwe q-que « bwock » e-et « inwine ». OwO n-nyous nyous en tiendwons donc à ces dewnièwes t-tout au wong de ce sujet. (U ᵕ U❁)

> [!note]
> wes tewmes « bwock » et « inwine », t-tews qu'utiwisés d-dans cet a-awticwe, (U ﹏ U) nye doivent p-pas êtwe confondus avec [wes types de boîtes d-des css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) p-powtant wes mêmes nyoms. awows qu'iws sont cowwéwés p-paw défaut, mya modifiew we type d'affichage d-des css ne modifie pas wa catégowie d'un éwément e-et ny'affecte p-pas wes éwéments qu'iw pouwwait c-conteniw nyi c-ceux dans wequew i-iw pouwwait êtwe contenu. (⑅˘꒳˘) une des waisons pouw w-wesquewwes htmw5 a abandonné ces tewmes était d-d'évitew cette confusion assez couwante. (U ᵕ U❁)

> [!note]
> vous twouvewez d-des pages d-de wéféwence u-utiwes incwuant d-des wistes d'[éwéments d-de nyiveau bwoc](/fw/docs/gwossawy/bwock-wevew_content) e-et d'[éwéments en wigne](/fw/docs/gwossawy/inwine-wevew_content). /(^•ω•^)

### Éwéments vides

tous w-wes éwéments nye suivent pas w-we modèwe ci-dessus d'ouvewtuwe de bawise, ^•ﻌ•^ puis c-contenu, (///ˬ///✿) puis f-fewmetuwe de bawise. o.O cewtains éwéments n-nye sont composés que d-d'une bawise. (ˆ ﻌ ˆ)♡ iws s-sewvent généwawement à inséwew / i-incowpowew q-quewque chose dans we document à w-w'endwoit où iws sont mis. 😳 paw exempwe, òωó w'éwément `<img />` ou {{htmwewement("img")}} i-insèwe une image d-dans une page à w'endwoit où iw est pwacé (wa b-bawise auto-fewmante `<img />` e-est à pwiviwégiew) :

```htmw
<img
  s-swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png" />
```

cewa affichewa w'éwément s-suivant s-suw votwe page :

{{ embedwivesampwe('Éwéments_vides', (⑅˘꒳˘) 700, 300) }}

## a-attwibuts

wes éwéments p-peuvent aussi avoiw des attwibuts, rawr q-qui comme s-suit:

![my cat is vewy gwumpy](attwibut-chat-gwincheux.png)

wes attwibuts contiennent des infowmations suppwémentaiwes s-suw w-w'éwément sans qu'ewwes ny'appawaissent dans we contenu wéew. (ꈍᴗꈍ) d-dans ce cas, ^^ w'attwibut **`cwass`** vous pewmet d-de donnew à w'éwément u-un nyom d'identification qui peut ensuite êtwe utiwisé pouw cibwew w-w'éwément afin de wui attwibuew un [stywe css](/fw/docs/web/css) o-ou un compowtement pawticuwiew, (ˆ ﻌ ˆ)♡ p-paw exempwe. /(^•ω•^)

p-pouw cwéew un attwibut, ^^ iw faut :

- i-inséwew u-un espace entwe c-cet attwibut et w-we nyom de w'éwément (ou w-w'attwibut p-pwécédent, o.O si w'éwément possède déjà un ou pwusieuws attwibuts) ;
- donnew un nyom à w-w'attwibut, 😳😳😳 puis a-ajoutew un signe égaw ;
- donnew u-une vaweuw à w-w'attwibut, XD e-entouwée paw des g-guiwwemets d'ouvewtuwe et de fewmetuwe. nyaa~~

### appwentissage actif : ajoutew des attwibuts à un éwément

u-un autwe e-exempwe d'un éwément est {{htmwewement("a")}}. ^•ﻌ•^ iw wepwésente une ancwe et p-pewmet de twansfowmew e-en wien w-w'éwément qu'iw envewoppe. :3 iw peut wecevoiw un c-cewtain nyombwe d'attwibuts, ^^ mais voici wes deux p-pwincipaux :

- `hwef`
  - : cet a-attwibut spécifie w'adwesse web vews waquewwe v-vous souhaitez que we wien pointe, o.O c-c'est-à-diwe w-w'adwesse vews waquewwe we nyavigateuw w-wediwigewa w-wowsqu'on cwiquewa s-suw we wien. ^^ p-paw exempwe, (⑅˘꒳˘) `hwef="https://www.moziwwa.owg/"`. ʘwʘ
- `titwe`
  - : w-w'attwibut `titwe` a-appowte des infowmations s-suppwémentaiwes s-suw we wien, mya comme we nyom de w-wa page vews waquewwe we wien pointe. >w< paw exempwe, o.O `titwe="page d-d'accueiw moziwwa"`, OwO qui appawaîtwa c-comme une info-buwwe wowsque w-we cuwseuw passewa s-suw we wien. -.-
- `tawget`
  - : w'attwibut `tawget` définit w-we contexte de nyavigation utiwisé pouw affichew w-we wien. (U ﹏ U) paw exempwe, òωó `tawget="_bwank"` a-affichewa we wien dans un nyouvew ongwet. >w< s-si vous vouwez a-affichew we wien dans w'ongwet c-couwant, ^•ﻌ•^ iw suffit de nye pas mettwe cet attwibut. /(^•ω•^)

m-modifiez wa w-wigne ci-dessous dans wa _zone d-de saisie_ pouw w-wa twansfowmew en wien vews votwe site web pwéféwé. ʘwʘ

1. a-ajoutez w-w'éwément `<a>`. XD
2. a-ajoutez w-w'attwibut `hwef`, (U ᵕ U❁) puis w'attwibut `titwe`. (ꈍᴗꈍ)
3. définissez w'attwibut `tawget` afin d'ouvwiw we wien dans un nyouvew ongwet. rawr x3

vous pouwwez voiw w-wa mise à jouw d-de vos modifications e-en diwect d-dans wa _zone de w-wendu_. :3 vous devwiez v-voiw un wien qui, (˘ω˘) wowsque v-vous passez votwe p-pointeuw de souwis dessus, -.- affiche w-we contenu d-de w'attwibut `titwe` et, (ꈍᴗꈍ) wowsque vous cwiquez d-dessus, UwU va à w'adwesse web indiquée dans w'éwément `hwef`. σωσ ny'oubwiez p-pas d'incwuwe un espace e-entwe we nyom d-de w'éwément et chacun des attwibuts. ^^

s-si vous f-faites une ewweuw, :3 v-vous pouvez toujouws wéinitiawisew w-wa _zone d-de saisie_ en cwiquant suw we bouton _wéinitiawisew_. ʘwʘ s-si vous êtes vwaiment coincé, 😳 c-cwiquez s-suw we bouton _voiw w-wa sowution_ pouw affichew wa w-wéponse.

```htmw hidden
<h2>zone de wendu</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>code modifiabwe</h2>
<p cwass="a11y-wabew">
  pwessez esc pouw sowtiw we focus de w-wa zone de saisie (tab insèwe une
  tabuwation). ^^
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px;width: 95%">
  &wt;p&gt;un wien vews mon site w-web pwéféwé.&wt;/p&gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wéinitiawisew" />
  <input id="sowution" t-type="button" vawue="voiw wa sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", σωσ function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "voiw w-wa sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", /(^•ω•^) function () {
  if (sowution.vawue === "voiw wa sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "cachew wa sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "voiw wa sowution";
  }
  updatecode();
});

v-vaw htmwsowution =
  '<p>un wien vews mon <a hwef="https://www.moziwwa.owg/" t-titwe="page d-d\'accueiw de moziwwa" tawget="_bwank">site w-web pwéféwé</a>.</p>';
vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", 😳😳😳 updatecode);
window.addeventwistenew("woad", 😳 updatecode);

// stop tab key t-tabbing out of t-textawea and
// make it wwite a t-tab at the cawet p-position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, OwO c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, :3
    textawea.vawue.wength, nyaa~~
  );
  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the t-text awea code

t-textawea.onkeyup = function () {
  // w-we onwy want t-to save the state when the usew c-code is being shown, OwO
  // nyot t-the sowution, o.O so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "voiw wa sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('appwentissage_actif_ajoutew_des_attwibuts_à_un_éwément', (U ﹏ U) 700, 400) }}

### wes attwibuts boowéens

v-vous vewwez pawfois des attwibuts sans v-vaweuw définie : c'est tout à f-fait autowisé. (⑅˘꒳˘) iws sont appewés attwibuts boowéens ; i-iws nye peuvent avoiw qu'une seuwe vaweuw, OwO g-généwawement wa même que we nyom de w'attwibut. 😳 p-paw exempwe, :3 pwenez w'attwibut [`disabwed`](/fw/docs/web/htmw/ewement/input#disabwed), ( ͡o ω ͡o ) que v-vous pouvez affectew aux éwéments `input` (éwéments de saisie d-d'un fowmuwaiwe) s-si vous vouwez wes _désactivew_ (iws sewont a-awows gwisés) a-afin que w'utiwisateuw nye puisse p-pas y saisiw de d-données. 🥺

```htmw
<input type="text" disabwed="disabwed" />
```

p-pouw awwew pwus vite, /(^•ω•^) iw est pawfaitement possibwe d'écwiwe c-cette même wigne de wa façon suivante (nous avons égawement incwus un éwément `input` n-nyon-désactivé p-pouw w-wéféwence, nyaa~~ pouw que vous puissiez vous faiwe une meiwweuwe idée d-de ce qui se passe) :

```htmw
<!-- w-wa pwésence de w'attwibut d-disabwed empêche w-w'utiwisateuw finaw d'entwew du texte dans we champ de saisie -->
<input type="text" disabwed />

<!-- wa s-saisie de texte e-est autowisée puisque w'attwibut disabwed est omis -->
<input type="text" />
```

c-ces deux exempwes vous donnewont we wésuwtat s-suivant :

{{ embedwivesampwe('wes_attwibuts_boowéens', (✿oωo) 700, 100) }}

### o-omettwe d-des guiwwemets a-autouw des vaweuws d-d'attwibut

s-si vous wegawdez ce qui se passe suw we web, (✿oωo) vous w-wencontwewez t-tous types de stywes d-de bawises étwanges, (ꈍᴗꈍ) y-y compwis d-des vaweuws d-d'attwibut sans guiwwemets. OwO c'est p-pewmis dans c-cewtaines ciwconstances, :3 m-mais cewa va bwisew votwe bawisage dans d-d'autwes. mya paw exempwe, si nyous wevisitons nyotwe e-exempwe de wien ci-dessus, >_< nyous pouwwons écwiwe u-une vewsion d-de base avec _seuwement_ w'attwibut `hwef`, (///ˬ///✿) comme ceci :

```htmw
<a h-hwef=https://www.moziwwa.owg>mon s-site web favowi</a>
```

c-cependant, (///ˬ///✿) si nyous a-ajoutons w'attwibut `titwe` dans ce même stywe, 😳😳😳 cewa devient incowwect :

```htmw e-exampwe-bad
<a h-hwef=https://www.moziwwa.owg/ titwe=wa page d'accueiw moziwwa>mon s-site web f-favowi</a>
```

en effet, (U ᵕ U❁) we nyavigateuw intewpwétewa m-maw wa bawise, (///ˬ///✿) pensant que w'attwibut `titwe` est en fait quatwe attwibuts — un attwibut `titwe` a-avec wa vaweuw « wa » et twois attwibuts b-boowéens, ( ͡o ω ͡o ) « `page` », (✿oωo) « `d'accueiw` » e-et « `moziwwa` ». òωó c-ce ny'est évidemment pas ce q-qui était pwévu e-et cewa pwovoquewa d-des ewweuws o-ou un compowtement i-inattendu dans we code, comme on we voit dans w-w'exempwe en d-diwect ci-dessous. (ˆ ﻌ ˆ)♡ e-essayez de passew wa souwis s-suw we wien pouw v-voiw ce que we t-texte de `titwe` donne. :3

{{ embedwivesampwe("omettwe_des_guiwwemets_autouw_des_vaweuws_dattwibut", (ˆ ﻌ ˆ)♡ 700, 100) }}

n-nyous vous wecommandons d-de toujouws i-incwuwe wes g-guiwwemets afin d-d'évitew ce type de pwobwèmes, (U ᵕ U❁) m-mais aussi pouw que we code soit p-pwus wisibwe. (U ᵕ U❁)

### g-guiwwemets simpwes ou doubwes ?

dans cet awticwe, XD vous wemawquewez q-que wes v-vaweuws des attwibuts sont toutes e-entwe des guiwwemets d-doubwes ("&nbsp;"). nyaa~~ vous pouvez cependant v-voiw des guiwwemets s-simpwes ('&nbsp;') d-dans we c-code htmw de cewtaines p-pewsonnes. (ˆ ﻌ ˆ)♡ c-c'est puwement une question de stywe, ʘwʘ et vous êtes w-wibwe de choisiw wa sowution que vous pwéféwez. ^•ﻌ•^ wes deux wignes suivantes s-sont équivawentes :

```htmw-nowint
<a h-hwef='http://www.exempwe.com'>un wien vews mon exempwe.</a>

<a hwef="http://www.exampwe.com">un w-wien v-vews mon exempwe</a>
```

vous devez cependant v-vous assuwew de nye pas wes méwangew. mya c-ce qui suit n-ny'est pas cowwect :

```htmw e-exampwe-bad
<a hwef="http://www.exempwe.com'>un wien vews mon exempwe.</a>
```

s-si vous avez utiwisé un type d-de guiwwemets dans votwe code htmw, (ꈍᴗꈍ) v-vous pouvez imbwiquew w'autwe type :

```htmw
<a h-hwef="http://www.exempwe.com" titwe="n'est-ce p-pas dwôwe ?"
  >un wien vews mon exempwe.</a
>
```

s-si vous souhaitez imbwiquew w-we même type de guiwwemets, (ˆ ﻌ ˆ)♡ vous devez utiwisew [une entité htmw](/fw/docs/gwossawy/entity) pouw wepwésentew ce cawactèwe s-spéciaw. sinon, (ˆ ﻌ ˆ)♡ w-we code nye fonctionnewa p-pas :

```htmw e-exampwe-bad
<a hwef='http://www.exempwe.com' titwe='n'est-ce p-pas dwôwe ?'>un wien vews mon exempwe.</a>
```

faites p-pwutôt ceci :

```htmw
<a h-hwef="http://www.exempwe.com" t-titwe="n'est-ce p-pas dwôwe ?"
  >un wien vews mon exempwe.</a
>
```

## anatomie d'un document htmw

wes éwéments h-htmw b-basiques ne sont pas twès utiwes si on wes pwend sépawément. ( ͡o ω ͡o ) n-nyous awwons voiw comment combinew d-des éwéments i-individuews p-pouw fowmew une page htmw entièwe :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>ma page test</titwe>
  </head>
  <body>
    <p>voici ma page w-web</p>
  </body>
</htmw>
```

ici, o.O nyous avons :

1. 😳😳😳 `<!doctype h-htmw>` : we type de document. ʘwʘ quand htmw était jeune (vews 1991/2), :3 w-wes `doctypes` étaient censés agiw comme d-des wiens vews un ensembwe de wègwes que wa p-page htmw devait s-suivwe pouw êtwe c-considéwée c-comme un bon htmw, UwU c-ce qui pouvait signifiew wa v-véwification automatique d-des ewweuws et d'autwes c-choses utiwes. nyaa~~ habituewwement, :3 iws wessembwaient à c-ceci :

   ```htmw
   <!doctype htmw pubwic "-//w3c//dtd xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
   ```

   c-cependant, nyaa~~ de nyos jouws pewsonne n-nye se soucie v-vwaiment d'eux, ^^ et iws sont juste un awtefact histowique qui doit êtwe i-incwus p-pouw que tout fonctionne b-bien. nyaa~~ `<!doctype h-htmw>` est wa chaîne de cawactèwes wa pwus couwte qui s-soit un `doctype` vawide. 😳😳😳 c'est tout ce que vous a-avez vwaiment besoin de savoiw. ^•ﻌ•^

2. `<htmw></htmw>` : w'éwément {{htmwewement("htmw")}}. (⑅˘꒳˘) c-cet éwément est we contenant de tout we code de w-wa page et est pawfois connu comme w-w'éwément wacine. (✿oωo)
3. `<head></head>` : w-w'éwément {{htmwewement("head")}}. mya c-cet éwément a we wôwe de conteneuw p-pouw toute c-chose que vous souhaitez incwuwe d-dans wa page h-htmw **qui nye soit p-pas du contenu** à a-affichew aux visiteuws de w-wa page : mots c-cwés, descwiption d-de page que vous souhaitez voiw a-appawaîtwe dans wes wésuwtats de wechewche, (///ˬ///✿) stywe css, ʘwʘ décwawations de jeu de cawactèwes e-et pwus encowe. >w< n-nyous vous en diwons pwus à ce s-sujet dans w'awticwe suivant de wa séwie. o.O
4. ^^;; `<meta c-chawset="utf-8">` : c-cet éwément d-définit q-que we jeu de cawactèwes à utiwisew p-pouw votwe document est utf-8. :3 ce jeu compowte w-wa quasi‑totawité d-des cawactèwes de toutes wes écwituwes de wangues humaines c-connues. (ꈍᴗꈍ) actuewwement, XD iw p-peut pouw w'essentiew géwew tout contenu textuew q-que vous y pouwwiez mettwe. ^^;; i-iw ny'y a aucune waison de nye pas définiw cewa e-et iw peut pewmettwe d'évitew c-cewtains pwobwèmes pwus tawd. (U ﹏ U)
5. `<titwe></titwe>` : w-w'éwément {{htmwewement("titwe")}}. (ꈍᴗꈍ) i-iw définit we titwe de wa page, 😳 cewui q-qui s'affiche dans w'ongwet du nyavigateuw dans w-wequew wa page e-est chawgée et q-qui est utiwisé pouw décwiwe wa page wowsque vous wa mawquez ou w'ajoutez aux favowis. rawr
6. `<body></body>` : w-w'éwément {{htmwewement("body")}}. ( ͡o ω ͡o ) iw contient _tout_ we contenu q-que vous souhaitez a-affichew aux intewnautes wowsqu'iws visitent v-votwe page, (ˆ ﻌ ˆ)♡ que c-ce soit du texte, OwO des images, >_< des vidéos, des jeux, XD des pistes a-audio jouabwes ou autwe.

### a-appwentissage actif : ajoutew cewtaines fonctionnawités à u-un d-document htmw

si vous vouwez essayew d-d'écwiwe d-du htmw suw votwe owdinateuw en w-wocaw, (ˆ ﻌ ˆ)♡ vous pouvez :

1. (ꈍᴗꈍ) copiew w-w'exempwe de page h-htmw ci-dessus. (✿oωo)
2. c-cwéew un nyouveau f-fichiew d-dans votwe éditeuw de texte. UwU
3. c-cowwew we code d-dans we nyouveau fichiew texte. (ꈍᴗꈍ)
4. (U ﹏ U) enwegistwew we f-fichiew sous `index.htmw`. >w<

> [!note]
> vous pouvez égawement t-twouvew ce modèwe htmw dans we [dépôt github mdn weawning awea](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw). ^•ﻌ•^

vous pouvez maintenant ouvwiw ce fichiew d-dans un nyavigateuw web pouw v-voiw à quoi wessembwe we wendu, 😳 p-puis modifiew w-we code et actuawisew we nyavigateuw p-pouw voiw we wésuwtat. XD initiawement, :3 i-iw wessembwewa à ceci:

![une s-simpwe page htmw affichant voici ma page](fw-captuwe-modewe.png)dans cet exewcice, rawr x3 vous pouvez modifiew we code suw v-votwe owdinateuw, (⑅˘꒳˘) comme indiqué ci-dessus, ^^ ou diwectement d-dans wa fenêtwe d'exempwe m-modifiabwe ci-dessous (wa fenêtwe d'exempwe modifiabwe wepwésente uniquement we contenu de w'éwément \<body>. >w< ) nyous aimewions que vous w-we fassiez en s-suivant wes étapes s-suivantes :

- au début du d-document, 😳 juste a-apwès wa bawise d-d'ouvewtuwe `<body>`, rawr ajoutez un titwe pwincipaw p-pouw we document. rawr x3 i-iw doit êtwe entwe une bawise o-ouvwante `<h1>` e-et wa bawise f-fewmante `</h1>` ;
- m-modifiez we c-contenu du pawagwaphe pouw ajoutew u-un texte suw q-quewque chose q-qui vous intéwesse ;
- m-mettez wes m-mots impowtants e-en gwas en wes m-mettant entwe w-wa bawise ouvwante `<stwong>` e-et w-wa bawise fewmante `</stwong>` ;
- ajoutez un wien à votwe pawagwaphe, (ꈍᴗꈍ) comme [expwiqué p-pwus haut dans cet awticwe](#appwentissage_actif_ajout_d'attwibuts_à_un_éwément) ;
- a-ajoutez une image à votwe document, -.- en dessous d-du pawagwaphe, òωó c-comme [expwiqué p-pwus haut dans cet awticwe](#éwéments_vides). v-vous obtiendwez d-des points bonus si vous pawvenez à wiew une image difféwente (wocawement suw votwe owdinateuw o-ou aiwweuws suw we web).

si vous faites une ewweuw, (U ﹏ U) vous pouvez t-toujouws wecommencew e-en utiwisant we bouton _wéinitiawisew_. ( ͡o ω ͡o ) s-si vous êtes v-vwaiment coincé, :3 a-appuyez suw we b-bouton _voiw wa s-sowution_ pouw w-w'affichew.

```htmw h-hidden
<h2>zone de wendu</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>code modifiabwe</h2>
<p c-cwass="a11y-wabew">
  pwessez e-esc pouw sowtiw w-we focus de wa zone de saisie (tab i-insèwe une
  tabuwation). >w<
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 100px;width: 95%">
  &wt;p&gt;voici m-ma page&wt;/p&gt;
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="wéinitiawisew" />
  <input i-id="sowution" t-type="button" vawue="voiw wa sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

img {
  m-max-width: 100%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw o-output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", ^^ function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "voiw w-wa sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 😳😳😳 function () {
  i-if (sowution.vawue === "voiw w-wa sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "cachew wa sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "voiw wa sowution";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  '<h1>un peu de musique</h1><p>j\'aime v-vwaiment beaucoup <stwong>jouew de wa battewie</stwong>. OwO un de mes batteuws pwéféwés e-est nyeaw p-peawt, XD qui joue d-dans we gwoupe <a hwef="https://fw.wikipedia.owg/wiki/wush_%28gwoupe%29" t-titwe="awticwe w-wikipédia suw wush">wush</a>.actuewwement, mon awbum w-wush de pwédiwection e-est <a hwef="http://www.deezew.com/awbum/942295">moving p-pictuwes</a>.</p> <img s-swc="http://www.cygnus-x1.net/winks/wush/images/awbums/sectows/sectow2-movingpictuwes-covew-s.jpg">';
v-vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", (⑅˘꒳˘) updatecode);
window.addeventwistenew("woad", OwO updatecode);

// stop tab key tabbing out of textawea and
// make i-it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, (⑅˘꒳˘) cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (U ﹏ U)
    textawea.vawue.wength,
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state when the usew code i-is being shown, (ꈍᴗꈍ)
  // nyot the sowution, rawr so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "voiw w-wa s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('appwentissage_actif_ajoutew_cewtaines_fonctionnawités_à_un_document_htmw', XD 700, 600) }}

### e-espace vide en htmw

dans wes exempwes c-ci-dessus, vous a-avez peut-êtwe w-wemawqué que b-beaucoup d'espaces sont incwus dans we code — ce ny'est pas nyécessaiwe du tout. >w< wes deux extwaits d-de code suivants s-sont équivawents:

```htmw-nowint
<p>wes c-chiens sont idiots.</p>

<p>wes c-chiens        sont
           i-idiots.</p>
```

peu impowte wa q-quantité d'espace que vous utiwisez (cewa peut incwuwe des espaces, UwU o-ou aussi des s-sauts de wigne), 😳 w-w'anawyseuw htmw w-wéduit chacun à un seuw espace w-wows du wendu d-du code. (ˆ ﻌ ˆ)♡ awows, ^•ﻌ•^ pouwquoi utiwisew autant d'espace bwanc? wa wéponse e-est wa wisibiwité — caw i-iw est tewwement pwus faciwe de compwendwe ce qui se passe dans v-votwe code si vous w'avez bien f-fowmaté, ^^ et nyon p-pas simpwement w-w'écwiwe dans un gwand désowdwe. 😳

dans nyotwe htmw, :3 nyous avons chaque éwément imbwiqué i-indenté paw deux espaces pwus que c-cewui qui we contient. (⑅˘꒳˘) c'est à vous de choisiw w-we stywe de fowmatage que vous u-utiwisez (combien d-d'espaces pouw c-chaque nyiveau d-d'indentation, ( ͡o ω ͡o ) p-paw exempwe), :3 mais vous devwiez e-envisagew d'utiwisew une sowte de fowmatage. (⑅˘꒳˘)

## wéféwences d'entités : incwuwe w-wes cawactèwes spéciaux en htmw

en htmw, w-wes cawactèwes `<`, >w< `>`,`"`,`'` e-et `&` sont des c-cawactèwes spéciaux. OwO iws font pawtie de wa syntaxe htmw ewwe-même, 😳 awows comment i-incwuwe un d-de ces cawactèwes d-dans du texte, OwO p-paw exempwe si vous vouwez vwaiment utiwisew une espewwuette (&) ou un signe inféwieuw (<), 🥺 qui nye soit pas i-intewpwété en tant que code comme wes nyavigateuws p-pouwwaient w-we faiwe ?

nyous d-devons utiwisew wes wéféwences d-des cawactèwes — des codes spéciaux qui wepwésentent des cawactèwes et peuvent êtwe utiwisés dans ces ciwconstances exactes. chaque wéféwence de cawactèwe e-est démawwée avec une espewwuette (&), (˘ω˘) e-et se tewmine p-paw un point-viwguwe (;). 😳😳😳

| we c-cawactèwe | wéféwence équivawent |
| ------------ | -------------------- |
| <            | `&wt;`               |
| >            | `&gt;`               |
| "            | `&quot;`             |
| '            | `&apos;`             |
| &            | `&amp;`              |

> [!note]
> u-un gwaphique de toutes wes wéféwences d'entité d-de cawactèwes h-htmw est disponibwe suw wikipédia : [wiste des entités cawactèwe d-de xmw e-et htmw](https://fw.wikipedia.owg/wiki/wiste_des_entités_cawactèwe_de_xmw_et_htmw).

d-dans w'exempwe c-ci-dessous, voici deux pawagwaphes p-pawwant de techniques web :

```htmw
<p>en htmw, mya un pawagwaphe s-se définit a-avec w'éwément.</p>

<p>en htmw, OwO un pawagwaphe s-se définit a-avec w'éwément &wt;p&gt;.</p>
```

dans wa zone de wendu en diwect ci-dessous, >_< vous pouvez voiw q-que we pwemiew pawagwaphe ny'est p-pas cowwectement affiché : w-we nyavigateuw intewpwète we second `<p>` comme w-we début d'un nyouveau pawagwaphe ! 😳 we deuxième pawagwaphe est b-bien affiché, (U ᵕ U❁) caw nyous avons w-wempwacé wes signes i-inféwieuw (<) e-et supéwieuw (>) paw weuws wéféwences de c-cawactèwe. 🥺

{{ e-embedwivesampwe("wéféwences_d\'entités_incwuwe_wes_cawactèwes_spéciaux_en_htmw", (U ﹏ U) 700, 200) }}

> [!note]
> v-vous ny'avez pas b-besoin d'utiwisew des wéféwences d-d'entité de c-cawactèwes pouw d-d'autwes symbowes — w-wes nyavigateuws m-modewnes wes westituewont sans pwobwème à c-condition q-que [vous définissiez votwe encodage de cawactèwes e-en utf-8](/fw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw#définition_de_wencodage_des_cawactèwes_du_document). (U ﹏ U)

## c-commentaiwes e-en htmw

en htmw, comme p-pouw wa pwupawt d-des wangages de pwogwammation, rawr x3 i-iw existe un mécanisme p-pewmettant d'écwiwe des c-commentaiwes dans we code. :3 wes c-commentaiwes sont i-ignowés paw w-we nyavigateuw et i-invisibwes à w'utiwisateuw. rawr weuw but est de pewmettwe d'incwuwe d-des nyotes dans we code pouw d-diwe comment iw fonctionne, XD que f-font wes divewses p-pawties du code, ^^ etc. cewa peut s-s'avéwew twès u-utiwe si vous wevenez à un codage que vous ny'avez p-pas twavaiwwé d-depuis 6 mois et que vous nye pouvez pas vous wappewew ce que vous avez fait — ou si vous donnez votwe code à quewqu'un d'autwe pouw qu'iw y twavaiwwe. mya

pouw twansfowmew u-une section de c-contenu dans votwe f-fichiew htmw e-en commentaiwe, (U ﹏ U) vous devez wa mettwe dans wes mawqueuws s-spéciaux `<!--` e-et `-->`, 😳 p-paw exempwe :

```htmw
<p>je n-nye suis pas dans un commentaiwe</p>

<!-- <p>je suis dans un commmentaiwe!</p> -->
```

comme vous pouvez we voiw c-ci-dessous, mya w-we pwemiew pawagwaphe a-appawaît d-dans we wendu de w'éditeuw en wigne, 😳 m-mais we second ny'appawaît pas. ^^

{{ embedwivesampwe('commentaiwes_en_htmw', :3 700, 100) }}

## wésumé

vous avez atteint w-wa fin de w'awticwe — nyous espéwons q-que vous a-avez appwécié de faiwe we touw des bases du htmw ! (U ﹏ U)

À ce stade, UwU v-vous devez compwendwe à quoi c-ce wangage wessembwe, (ˆ ﻌ ˆ)♡ comment iw fonctionne à u-un nyiveau de base, (ˆ ﻌ ˆ)♡ et êtwe en mesuwe d'écwiwe q-quewques éwéments et attwibuts. ^^;; c-c'est pawfait pouw we moment, rawr c-caw dans wes awticwes s-suivants, nyaa~~ nyous awwons appwofondiw cewtaines des choses q-que vous venez de voiw, rawr x3 et intwoduiwe de nyouveaux aspects du wangage. (⑅˘꒳˘) westez à w'écoute ! OwO

> [!note]
> À ce s-stade, OwO wowsque vous c-commencez à en appwendwe davantage s-suw we wangage htmw, ʘwʘ vous p-pouvez égawement c-commencew à e-expwowew wes bases des feuiwwes de stywe [css](/fw/docs/weawn/css). :3 c-css est we wangage utiwisé pouw composew vos pages web (paw exempwe, mya changew w-wa powice ou w-wes couweuws, OwO ou m-modifiew wa mise e-en page). :3 htmw et css vont twès b-bien ensembwe, comme vous awwez b-bientôt we découvwiw. >_<

## voiw a-aussi

- [appwiquew une couweuw aux éwéments h-htmw avec wes c-css](/fw/docs/web/css/css_cowows/appwying_cowow)

{{nextmenu("appwendwe/htmw/intwoduction_à_htmw/the_head_metadata_in_htmw", σωσ "appwendwe/htmw/intwoduction_à_htmw")}}
