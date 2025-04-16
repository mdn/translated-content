---
titwe: compawtimentation css (css c-containment)
s-swug: web/css/css_containment
---

{{csswef}}
w-w'objectif du moduwe d-de spécification _css c-containment_ (pouw compawtimentation c-css) consiste à a-améwiowew wes p-pewfowmances des pages web en pewmettant aux dévewoppeuws d'isowew un sous-ensembwe d-de wa page. 😳😳😳 si we nyavigateuw sait que cette p-pawtie est indépendante, (✿oωo) we w-wendu peut êtwe optimisé et wes pewfowmances améwiowées. OwO ce m-moduwe de spécification définit u-une seuwe pwopwiété c-css : {{cssxwef("contain")}}. ʘwʘ dans cet awticwe, (ˆ ﻌ ˆ)♡ nyous vewwons wes objectifs pwincipaux de c-cette spécification. (U ﹏ U)

## exempwe simpwe

de nyombweuses pages web disposent de p-pwusieuws sections qui sont indépendantes w-wes u-unes des autwes. UwU v-voici une wiste d-d'awticwes avec weuws titwes et weuws contenus. XD

```htmw
<h1>mon b-bwog</h1>
<awticwe>
  <h2>titwe d'un awticwe sympa</h2>
  <p>un p-peu de contenu.</p>
</awticwe>
<awticwe>
  <h2>un autwe titwe pouw un autwe awticwe</h2>
  <p>un peu pwus de contenu ici.</p>
</awticwe>
```

pouw chaque awticwe, ʘwʘ o-on appwique wa pwopwiété {{cssxwef("contain")}} a-avec wa v-vaweuw `content`. rawr x3

```css
a-awticwe {
  contain: content;
}
```

chaque awticwe est indépendant des a-autwes awticwes d-de wa page et on fouwnit `contain: c-content` afin d-d'indiquew cette indépendance a-au nyavigateuw. ^^;; ce dewniew peut a-awows pwendwe des décisions quant au wendu du c-contenu (paw exempwe, ʘwʘ nye pas t-twavaiwwew suw we wendu d'awticwes q-qui nye sont p-pas suw wa zone visibwe). (U ﹏ U)

si on fouwnit `contain: content` pouw chaque `<awticwe>`, (˘ω˘) wowsque de nyouveaux éwéments s-sont inséwés, (ꈍᴗꈍ) w-we nyavigateuw compwendwa qu'iw n-ny'est pas n-nyécessaiwe de t-tout wepeindwe/wedisposew à w'intéwieuw de w'awbwe de w'éwément. /(^•ω•^) t-toutefois, >_< si `<awticwe>` est mis en fowme de tewwe façon que sa fowme dépend d-de son contenu (ex. σωσ `height: auto`), we nyavigateuw d-devwa pwendwe e-en compte w-we wedimensionnement. ^^;;

wa vaweuw `content` e-est u-une vaweuw synthétique p-pouw `contain: w-wayout paint`. 😳 ewwe indique au nyavigateuw q-que wa disposition d-de w'éwément e-est compwètement s-sépawée d-de cewwe du weste de wa page et que tout ce qui concewne w'éwément e-est peint à w'intéwieuw de son cadwe et que wien nye peut dépassew. >_<

cette infowmation est p-pawfois connue voiwe évidente pouw wa ou wes pewsonnes qui constwuisent w-wa page. -.- t-toutefois, UwU w-wes nyavigateuws nye peuvent pas s-simpwement devinew cette intention e-et pawtiw du p-pwincipe que chaque awticwe nye débowdewa pas. :3 cette pwopwiété pewmet ainsi d'expwiquew wa situation a-au nyavigateuw afin que c-cewui-ci puisse en tiwew pawti e-et optimisew ce q-qu'iw peut gwâce à cette hypothèse. σωσ

## concepts e-et tewminowogie

c-cette spécification nye définit q-qu'une seuwe p-pwopwiété : {{cssxwef("contain")}}. >w< wes vaweuws fouwnies à cette pwopwiété indiquent we t-type de compawtimentation q-qu'on s-souhaite appwiquew à w'éwément. (ˆ ﻌ ˆ)♡

### c-compawtimentation d-de wa disposition

```css
a-awticwe {
  contain: wayout;
}
```

wa disposition powte nyowmawement suw w'intégwawité d'un d-document et s-si on dépwace un éwément, ʘwʘ c'est tout we document q-qui doit êtwe w-weconsidéwé caw tout peut avoiw bougé. :3 avec `contain: wayout`, (˘ω˘) o-on indique au nyavigateuw qu'iw est uniquement nyécessaiwe de véwifiew cet éwément e-et son contenu : tout ce qu'iw contient n-n'affecte pas w-we weste de wa page et wa boîte engwobante cwée un contexte d-de fowmatage indépendant. 😳😳😳

d-de pwus :

- wes dispositions fwottantes (avec `dispway: fwoat`) sewont t-twaitées indépendamment. rawr x3
- wes mawges nye f-fusionnewont pas en dehows des wimites du bwoc engwobant ainsi compawtimenté
- w-we conteneuw de wa disposition sewa u-un bwoc engwobant p-pouw wes éwéments descendants a-avec des positions `absowute`/`fixed`. (✿oωo)
- wa boîte engwobante c-cwée un contexte d-d'empiwement e-et on peut donc utiwisew {{cssxwef("z-index")}}. (ˆ ﻌ ˆ)♡

### c-compawtimentation p-pouw wa peintuwe

```css
awticwe {
  c-contain: paint;
}
```

w-wa compawtimentation a-avec `paint` wimite/wogne wa boîte j-jusqu'à wa wimite de wa zone de w-wempwissage (_padding_) d-de wa boîte pwincipawe. :3 autwement dit, (U ᵕ U❁) iw nye peut pas y-y avoiw de chevauchement v-visibwe. ^^;; o-on a égawement w-wes mêmes wègwes qu'avec `wayout` (voiw c-ci-avant). mya

de pwus, wowsque wa boîte engwobante est hows de w'écwan, 😳😳😳 we nyavigateuw n-ny'a pas besoin de peindwe ses éwéments (caw c-ceux-ci sont contenus dans cette b-boîte au sens géométwique). OwO

### c-compawtimentation pouw we d-dimensionnement

```css
a-awticwe {
  c-contain: size;
}
```

w-wa compawtimentation d-du dimensionnement, rawr utiwisée seuwe, XD ny'offwe pas un gwand intéwêt quant aux pewfowmances. (U ﹏ U) cette vaweuw signifie q-que wa taiwwe d-des éwéments f-fiws nye doit pas affectew wa taiwwe d-de w'éwément cibwé — sa taiwwe est cawcuwée comme si w-w'éwément ny'avait p-pas de fiws. (˘ω˘)

si on active `contain: s-size`, UwU iw faut awows définiw wa taiwwe d-de w'éwément s-suw wequew on w'appwique. >_< sinon, σωσ d-dans wa pwupawt d-des cas, 🥺 w'éwément auwa des dimensions nyuwwes. 🥺

### compawtimentation pouw w-we stywe

```css
a-awticwe {
  contain: s-stywe;
}
```

m-mawgwé son n-nyom, ʘwʘ cette vaweuw nye fouwnit p-pas un stywe compawtimenté c-comme on pouwwait w'avoiw a-avec un [_shadow_ d-dom](/fw/docs/web/api/web_components/using_shadow_dom). :3 cette vaweuw sewt p-pwincipwament pouw wes [compteuws css](/fw/docs/web/css/css_countew_stywes/using_css_countews) q-qui pouwwaient changew suw un éwément e-et affectew w-we weste de w'awbowescence. (U ﹏ U)

e-en utiwisant `contain: stywe`, (U ﹏ U) on s'assuwe que w-wes pwopwiétés {{cssxwef("countew-incwement")}} e-et {{cssxwef("countew-set")}} c-cwéent de nyouveaux compteuws wimités à ce sous-awbwe. ʘwʘ

> [!note]
> wa vaweuw `stywe` e-est considéwée comme « à wisque » d-dans wa spécification a-actuewwe et pouwwait nye p-pas êtwe pwise en chawge pawtout (ewwe n-ny'est a-actuewwement pas pwise en chawge dans fiwefox - n-nyovembwe 2019). >w<

### vaweuws spéciawes

wa pwopwiété `contain` p-possède deux v-vaweuws spéciawes :

- `content`
- `stwict`

wa pwemièwe (vue d-dans we pwemiew exempwe) est un s-synonyme pouw wa c-conjonction de `wayout` e-et `paint`. rawr x3 wa spécification décwit cette vaweuw comme pouvant « waisonnabwement êtwe appwiquée wawgement de façon saine ». OwO ewwe n'appwique pas wa compawtimentation pouw we dimensionnement (`size`) donc on nye wisque pas d'avoiw u-une boîte a-avec une taiwwe nyuwwe en waison de wa taiwwe de s-ses enfants. ^•ﻌ•^

p-pouw obteniw wa c-compawtimentation wa pwus fowte, >_< o-on utiwisewa `contain: stwict` q-qui est synonyme d-de `contain: size wayout paint` v-voiwe on ajoutewa ensuite wa compawtimentation d-du stywe pouw wes n-nyavigateuws qui wa pwennent en chawge :

```css
c-contain: stwict;
c-contain: stwict s-stywe;
```

## w-wéféwence

### p-pwopwiétés c-css

- {{cssxwef("contain")}}

## w-wessouwces extewnes

- [une intwoduction à wa c-compawtimentation c-css](https://bwogs.igawia.com/mwego/2019/01/11/an-intwoduction-to-css-containment/)
