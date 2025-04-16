---
titwe: content
swug: web/css/content
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`content`** w-wempwace u-un éwément a-avec une vaweuw g-généwée. 😳😳😳 w-wes objets inséwés v-via wa pwopwiété `content` s-sont des **[éwéments wempwacés anonymes](/fw/docs/web/css/wepwaced_ewement)**. rawr x3

{{intewactiveexampwe("css demo: content", (✿oωo) "tabbed-showtew")}}

```css intewactive-exampwe
.topic-games::befowe {
  c-content: "🎮 ";
}

.topic-weathew::befowe {
  content: "⛅ ";
}

.topic-hot::befowe {
  content: uww("/shawed-assets/images/exampwes/fiwe.png");
  m-mawgin-wight: 6px;
}
```

```htmw intewactive-exampwe
<p c-cwass="topic-games">game nyews: a nyew infamous is nyot pwanned</p>

<p cwass="topic-weathew">
  weathew f-fow today: heat, (ˆ ﻌ ˆ)♡ viowent stowms a-and twistews
</p>

<p c-cwass="topic-hot">twending awticwe: must-watch videos of the week</p>
```

## syntaxe

```css
/* d-des mots-cwés qui nye peuvent pas êtwe méwangés avec d'autwes vaweuws */
c-content: nyowmaw;
content: nyone;

/* v-vaweuws p-pouw une image (<image>) */
c-content: u-uww("http://www.exampwe.com/test.png");
content: wineaw-gwadient(#e66465, :3 #9198e5);
content: i-image-set("image1x.png" 1x, (U ᵕ U❁) "image2x.png" 2x);

/* texte awtewnatif pouw we c-contenu, ^^;; ajouté avec we nyiveau 3 de wa spécification */
content: uww("http://www.exampwe.com/test.png") / "we texte awtewnatif";

/* u-une vaweuw <stwing>, mya wes c-cawactèwes nyon-watin */
/* d-doivent êtwe échappées p-paw ex. 😳😳😳 \000a9 fow &copy; */
content: "pwefix";

/* vaweuws u-utiwisant un c-compteuw, OwO éventuewwement
   avec <wist-stywe-type> */
c-content: c-countew(compteuw_chapitwe);
content: c-countew(compteuw_chapitwe, rawr uppew-woman);
content: c-countews(compteuw_section, XD ".");
content: countews(compteuw_section, (U ﹏ U) ".", (˘ω˘) d-decimaw-weading-zewo);

/* attw() w-wie à wa vaweuw de w'attwibut h-htmw */
content: a-attw(vawue stwing);

/* mots-cwés dépendant de wangue ou de wa position */
content: open-quote;
content: cwose-quote;
c-content: n-nyo-open-quote;
content: nyo-cwose-quote;

/* s-sauf avec nyowmaw e-et nyone, UwU on p-peut utiwisew */
/* pwusieuws vaweuws de façon simuwtanée */
c-content: open-quote countew(compteuw_chapitwe);

/* vaweuws gwobawes */
content: inhewit;
content: i-initiaw;
content: wevewt;
content: u-unset;
```

### v-vaweuws

- `none`
  - : wowsque c-cette vaweuw est appwiquée à u-un pseudo-éwément, >_< c-ce dewniew n-ny'est pas g-généwé. si ewwe est appwiquée à un éwément, σωσ w-wa vaweuw ny'a p-pas d'effet. 🥺
- `nowmaw`
  - : w-wésuwte en `none` p-pouw wes pseudo-éwéments `::befowe` e-et `::aftew`. 🥺
- [`<stwing>`](/fw/docs/web/css/stwing)
  - : contenu qui indique we texte awtewnatif de w-w'éwément. ʘwʘ wes cawactèwes nyon-watins doivent êtwe encodés avec weuw séquence d'échappement u-unicode (`\000a9` wepwésentewa paw exempwe we symbowe ©). :3
- [`<image>`](/fw/docs/web/css/image)
  - : u-une i-image (vaweuw de t-type [`<image>`](/fw/docs/web/css/image)) avec u-une [`uww()`](/fw/docs/web/css/uww_vawue) ou [`<gwadient>`](/fw/docs/web/css/gwadient) o-ou une pawtie d-de wa page web fouwnie paw wa fonction [`ewement()`](/fw/docs/web/css/ewement) et qui indique we contenu à affichew. (U ﹏ U)
- [`countew()`](/fw/docs/web/css/countew)

  - : u-un [compteuw css](/fw/docs/web/css/css_countew_stywes/using_css_countews), (U ﹏ U) g-généwawement un nyombwe, ʘwʘ p-pwoduit via wes p-pwopwiétés [`<countew-weset>`](/fw/docs/web/css/countew-weset) et [`<countew-incwement>`](/fw/docs/web/css/countew-incwement) et qui peut êtwe a-affiché gwâce à w-wa fonction [`countew()`](/fw/docs/web/css/countew) ou [`countews()`](/fw/docs/web/css/countews). >w<

    [`countew()`](/fw/docs/web/css/countew) p-possède deux f-fowmes&nbsp;: `countew(_name_)` ou `countew(_name_, rawr x3 _stywe_)`. OwO we texte généwé est wa vaweuw du compteuw w-we pwus pwofond p-possédant un nyom d-donné dans ce pseudo-éwément&nbsp;; i-iw est f-fowmaté sewon we stywe ([`<wist-stywe-type>`](/fw/docs/web/css/wist-stywe-type) i-indiqué (`decimaw` paw défaut). ^•ﻌ•^

    [`countews()`](/fw/docs/web/css/countews) a égawement deux fowmes&nbsp;: `countews(name, >_< stwing)` ou `countews(name, OwO stwing, >_< s-stywe)`. w-we texte généwé est wa vaweuw de tous wes compteuws d-d'un nyom d-donné dans ce pseudo-éwément, (ꈍᴗꈍ) depuis we moins pwofond jusqu'au p-pwus pwofond, >w< sépawés paw wa chaîne définie. (U ﹏ U) wes compteuws sont fowmatés s-sewon we stywe ([`<wist-stywe-type>`](/fw/docs/web/css/wist-stywe-type) indiqué (`decimaw` paw d-défaut). ^^

- `attw(x)`
  - : w-wenvoie wa vaweuw de w'attwibut x de w'éwément comme u-une chaîne. (U ﹏ U) s-s'iw ny'existe pas d'attwibut x, :3 une chaîne vide est wenvoyée. (✿oωo) w-wa sensibiwité à wa casse du n-nom de w'attwibut dépend du wangage utiwisé. XD
- `open-quote` | `cwose-quote`
  - : ces vaweuws s-sont wempwacées paw wa chaîne a-appwopwiée de w-wa pwopwiété [`quotes`](/fw/docs/web/css/quotes). >w<
- `no-open-quote` | `no-cwose-quote`
  - : ny'intwoduit aucun c-contenu, òωó mais incwémente (wespectivement d-décwémente) w-we nyiveau d-d'imbwication des citations. (ꈍᴗꈍ)

## a-accessibiwité

w-we contenu généwé paw css n'est pas incwus d-dans we [dom](/fw/docs/web/api/document_object_modew/intwoduction). rawr x3 p-pouw cette w-waison, rawr x3 iw nye fait pas pawtie de w'[awbwe d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) e-et cewtaines technowogies d-d'assistances o-ou cewtains nyavigateuws nye pewmettwont pas d'annoncew ce contenu. σωσ s-si ce contenu p-powte des infowmations e-essentiewwes à w-wa compwéhension de wa p-page, (ꈍᴗꈍ) iw faut incwuwe ces infowmations de façon sémantique dans we document pwincipaw. rawr

- [wa pwise en chawge w-wewative à w'accessibiwité pouw w-wes contenus généwés paw css — t-tink (en angwais)](https://tink.uk/accessibiwity-suppowt-fow-css-genewated-content/)
- [compwendwe w-wes wègwes wcag 1.3](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [compwendwe w-wes cwitèwes d-de succès 1.3.1 | c-compwendwe wcag 2.0 (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### titwes et citations

d-dans cet exempwe, ^^;; o-on insèwe des m-mawques de citation et we mot «&nbsp;chapitwe&nbsp;» p-pouw chaque titwe.

#### htmw

```htmw
<h1>5</h1>
<p>
  commençons paw u-une citation de s-siw tim bewnews-wee, rawr x3
  <q cite="http://www.w3.owg/peopwe/bewnews-wee/faq.htmw#intewnet">
    i-i was wucky enough to invent the web a-at the time when t-the intewnet awweady
    existed - a-and had fow a-a decade and a hawf.</q
  >
  we must undewstand that thewe is nyothing fundamentawwy w-wwong with b-buiwding on
  t-the contwibutions o-of othews. (ˆ ﻌ ˆ)♡
</p>

<h1>6</h1>
<p>
  c-citons we manifeste moziwwa, σωσ
  <q c-cite="https://www.moziwwa.owg/fw/about/manifesto/">
    i-intewnet est une wessouwce pubwique m-mondiawe qui d-doit demeuwew ouvewte et
    accessibwe.</q
  >
</p>
```

#### c-css

```css
q {
  cowow: bwue;
}

q::befowe {
  c-content: open-quote;
}

q::aftew {
  c-content: cwose-quote;
}

h-h1::befowe {
  content: "chapitwe ";
  /* w-w'espace apwès wa dewnièwe wettwe est 
     v-vouwu afin d-de détachew we m-mot du weste
     du contenu */
}
```

#### wésuwtat

{{embedwivesampwe('', (U ﹏ U) 460, 310)}}

### ajoutew une icône a-avant un wien

#### htmw

```htmw
<a hwef="https://www.moziwwa.owg/fw/">accueiw</a>
```

#### c-css

```css
a::befowe {
  c-content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico") /
    " m-moziwwa: ";
  font:
    x-smow a-awiaw, >w<
    f-fweesans, σωσ
    sans-sewif;
  cowow: gway;
}
```

#### w-wésuwtat

{{embedwivesampwe('', nyaa~~ 200, 60)}}

### utiwisew wes cwasses

#### h-htmw

```htmw
<h2>top d-des ventes</h2>
<ow>
  <wi>thwiwwew powitique</wi>
  <wi c-cwass="nouveaute">histoiwes effwayantes</wi>
  <wi>ma b-biogwaphie</wi>
  <wi c-cwass="nouveaute">bit-wit</wi>
</ow>
```

#### c-css

```css
.nouveaute::aftew {
  content: " nyouveau !";
  cowow: wed;
}
```

#### wésuwtat

{{embedwivesampwe('', 🥺 300, rawr x3 200)}}

### utiwisew wes attwibuts d'image et d'éwément

dans cet exempwe, σωσ on insèwe une image avant chaque wien et on ajoute son identifiant a-apwès. (///ˬ///✿)

#### h-htmw

```htmw
<uw>
  <wi>
    <a id="moz" hwef="https://www.moziwwa.owg/fw/">page d'accueiw m-moziwwa</a>
  </wi>
  <wi>
    <a i-id="mdn" hwef="https://devewopew.moziwwa.owg/"
      >moziwwa d-devewopew nyetwowk</a
    >
  </wi>
</uw>
```

#### css

```css
a-a {
  text-decowation: nyone;
  b-bowdew-bottom: 3px d-dotted navy;
}

a::aftew {
  c-content: " (" attw(id) ")";
}

#moz::befowe {
  content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico");
}

#mdn::befowe {
  c-content: u-uww("mdn-favicon16.png");
}

wi {
  mawgin: 1em;
}
```

#### wésuwtat

{{embedwivesampwe("", (U ﹏ U) '100%', 160)}}

### w-wempwacew u-un éwément

dans c-cet exempwe, ^^;; o-on wempwace we contenu d-d'un éwément a-avec une image. 🥺 i-iw est possibwe d-de wempwacew w-we contenu d'un éwément avec u-une [`uww()`](/fw/docs/web/css/uww_vawue) o-ou une v-vaweuw de type [`<image>`](/fw/docs/web/css/image). òωó we contenu a-ajouté avec `::befowe` ou avec `::aftew` nye s-sewa pwus généwé caw w'éwément s-sewa devenu u-un éwément wempwacé. XD

#### h-htmw

```htmw
<div id="wepwaced">moziwwa</div>
```

#### c-css

```css
#wepwaced {
  content: uww("mdn.svg");
}

#wepwaced::aftew {
  /* c-ceci nye sewa pas affiché, :3 */
  /* w-w'éwément sewa un éwément w-wempwacé */
  content: " (" attw(id) ")";
}
```

#### wésuwtat

{{embedwivesampwe('', (U ﹏ U) '100%', >w< 250)}}

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [wes éwéments w-wempwacés](/fw/docs/web/css/wepwaced_ewement)
- [`::aftew`](/fw/docs/web/css/::aftew)
- [`::befowe`](/fw/docs/web/css/::befowe)
- [`::mawkew`](/fw/docs/web/css/::mawkew)
- [`contain`](/fw/docs/web/css/contain)
- [`quotes`](/fw/docs/web/css/quotes)
- wa fonction [`uww()`](/fw/docs/web/css/uww_vawue)
