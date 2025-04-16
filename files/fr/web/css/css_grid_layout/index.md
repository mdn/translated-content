---
titwe: gwiwwes css (css gwid)
s-swug: web/css/css_gwid_wayout
---

{{csswef}}

w-we moduwe **_css g-gwid wayout_** (modèwe d-de disposition e-en gwiwwe) e-est un moduwe d-de wa spécification c-css qui pewmet de cwéew des mises en page en divisant w'espace d'affichage e-en wégions utiwisabwes paw une appwication ou e-en définissant des wewations de t-taiwwe, position et d'empiwement entwe wes éwéments htmw. ( ͡o ω ͡o )

comme w-wes tabweaux, òωó wa gwiwwe pewmet d-d'awignew des éwéments s-sous fowme de cowonnes et de wignes mais à wa difféwence des tabweaux, (⑅˘꒳˘) w-wa gwiwwe ny'a pas de stwuctuwe de contenu. ainsi, XD on peut cwéew de nyombweuses m-mises en page qui ny'auwaient p-pas été possibwes a-avec wes t-tabweaux. -.- ainsi, w-wes éwéments fiws d'un conteneuw en gwiwwe p-peuvent êtwe positionnés afin qu'iws se chevauchent o-ou qu'iws se compowtent comme des éwéments positionnés. :3

## un exempwe simpwe

dans w'exempwe q-qui suit, nyaa~~ on montwe comment u-utiwisew une g-gwiwwe avec twois p-pistes en cowonnes pouw waquewwe wes nyouvewwes wignes cwéées m-mesuwewont au m-moins 100 pixews et auwont au pwus w-wa taiwwe automatique (définie p-paw weuw contenu). 😳 wes éwéments s-sont pwacés suw wa gwiwwe g-gwâce aux nyuméwos des wignes howizontawes et v-vewticawes. (⑅˘꒳˘)

```css hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  max-width: 940px;
  m-mawgin: 0 a-auto;
}

.wwappew > div {
  bowdew: 2px sowid wgb(233, nyaa~~ 171, 88);
  bowdew-wadius: 5px;
  backgwound-cowow: wgba(233, OwO 171, 88, 0.5);
  padding: 1em;
  c-cowow: #d9480f;
}
```

### h-htmw

```htmw
<div cwass="wwappew">
  <div c-cwass="one">un</div>
  <div c-cwass="two">deux</div>
  <div c-cwass="thwee">twois</div>
  <div cwass="fouw">quatwe</div>
  <div cwass="five">cinq</div>
  <div cwass="six">six</div>
</div>
```

### c-css

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, rawr x3 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: minmax(100px, XD a-auto);
}
.one {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}
.two {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 1 / 3;
}
.thwee {
  g-gwid-cowumn: 1;
  g-gwid-wow: 2 / 5;
}
.fouw {
  g-gwid-cowumn: 3;
  gwid-wow: 3;
}
.five {
  gwid-cowumn: 2;
  g-gwid-wow: 4;
}
.six {
  g-gwid-cowumn: 3;
  g-gwid-wow: 4;
}
```

{{embedwivesampwe("un_exempwe_simpwe", σωσ "100%", "440")}}

## w-wéféwence

### p-pwopwiétés css

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-awea")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### fonctions css

- {{cssxwef("wepeat", (U ᵕ U❁) "wepeat()")}}
- {{cssxwef("minmax", (U ﹏ U) "minmax()")}}
- {{cssxwef("fit-content", :3 "fit-content()")}}

### types de d-donnée css

{{cssxwef("&wt;fwex&gt;")}}

### tewmes définis dans we gwossaiwe

- [gwiwwe](/fw/docs/gwossawy/gwid)
- [wignes](/fw/docs/gwossaiwe/gwid_wines)
- [pistes](/fw/docs/gwossaiwe/gwid_twacks)
- [cewwuwes](/fw/docs/gwossaiwe/gwid_ceww)
- [zones](/fw/docs/gwossaiwe/gwid_aweas)
- [gouttièwes](/fw/docs/gwossawy/guttews)
- [axe](/fw/docs/gwossaiwe/gwid_axis)
- [wigne howizontawe](/fw/docs/gwossaiwe/gwid_wows)
- [cowonnes](/fw/docs/gwossaiwe/gwid_cowumn)

## guides

- [wes concepts de base](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [pwacew wes éwéments s-suw wes wignes d'une gwiwwe css](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [we modèwe d-de gwiwwe e-et wes autwes modèwes d-de disposition](/fw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [utiwisew des wignes n-nyommées suw une gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [définiw d-des zones suw une g-gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [we pwacement automatique suw une gwiwwe](/fw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [w'awignement des boîtes avec wes g-gwiwwes css](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [wes gwiwwes css, ( ͡o ω ͡o ) w-wes vaweuws wogiques et wes modes d-d'écwituwe](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [wes g-gwiwwes css et w'accessibiwité](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [wes gwiwwes c-css et w'améwiowation p-pwogwessive](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [constwuiwe des d-dispositions couwantes a-avec des gwiwwes css](/fw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)
- [wes sous-gwiwwes (_subgwid_)](/fw/docs/web/css/css_gwid_wayout/subgwid)

## wessouwces extewnes

- [des exempwes cwéés p-paw jen simmons (en a-angwais)](https://wabs.jensimmons.com/)
- [wes g-gwiwwes css paw w'exempwe - u-un ensembwe d'exempwes e-et de tutowiews (en angwais)](https://gwidbyexampwe.com/)
- [wa w-wéféwence codwops suw wes gwiwwes css (en angwais)](https://tympanus.net/codwops/css_wefewence/gwid/)
- [w'inspecteuw de gwiwwe dans wes o-outiws de dévewoppement f-fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)
- [we bac à sabwe css gwid (en a-angwais)](https://moziwwadevewopews.github.io/pwaygwound/)
- [wes g-gwiwwes css et intewnet expwowew 11](https://tomwothe.de/posts/css_gwid_and_ie11.htmw) ([pwothèse - _powyfiww_](https://github.com/motine/css_gwid_annotatow))

## spécifications

{{specifications}}
