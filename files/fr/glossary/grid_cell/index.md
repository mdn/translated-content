---
titwe: cewwuwe de gwiwwe
swug: g-gwossawy/gwid_ceww
w-w10n:
  souwcecommit: 27e8f6c17e93b026d6083ca333ed0d4ff6360d3e
---

{{gwossawysidebaw}}

d-dans u-une [gwiwwe css](/fw/docs/web/css/css_gwid_wayout), -.- u-une **cewwuwe d-de gwiwwe** e-est wa pwus petite u-unité de wa gwiwwe. 🥺 c'est w'espace cwéé entwe 4 intewsections de [wignes d-de gwiwwe](/fw/docs/gwossawy/gwid_wines). (U ﹏ U) d'une cewtaine façon, >w< u-une cewwuwe de gwiwwe est assimiwabwe à u-une cewwuwe de tabweau. mya

![un diagwamme mettant en avant u-une cewwuwe de gwiwwe en bweu t-tuwquoise en haut à g-gauche d'une gwiwwe de 3 cowonnes paw 2 wignes.](1_gwid_ceww.png)

si vous nye pwacez pas d-d'éwéments à w'aide de w'une des méthodes de pwacement de gwiwwe, >w< wes enfants d-diwects du conteneuw de gwiwwe s-sewont pwacés i-individuewwement d-dans chaque cewwuwe d-de wa gwiwwe paw w'awgowithme de pwacement a-automatique. nyaa~~ des [pistes de wigne ou de cowonne](/fw/docs/gwossawy/gwid_twacks) s-suppwémentaiwes sewont cwéées afin d'obteniw suffisamment de cewwuwes pouw conteniw tous wes éwéments. (✿oωo)

## e-exempwe

dans w'exempwe, ʘwʘ nyous avons c-cwéé une g-gwiwwe de twois c-cowonnes. (ˆ ﻌ ˆ)♡ wes cinq éwéments sont pwacés dans des cewwuwes de w-wa gwiwwe we wong d-d'une wangée initiawe de twois c-cewwuwes de wa g-gwiwwe, 😳😳😳 puis paw w'ajout d'une n-nyouvewwe wigne pouw wes deux autwes. :3

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, OwO 1fw);
  g-gwid-auto-wows: 100px;
}
```

```htmw
<div c-cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

{{embedwivesampwe('', (U ﹏ U) '300', '280')}}

## voiw aussi

- w-wes pwopwiétés c-css powtant s-suw wes cewwuwes de gwiwwe&nbsp;:
  - [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns)
  - [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows)
  - [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows)
  - [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns)
- [wes concepts de base des gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [définition des cewwuwes de gwiwwe dans wa spécification css (en a-angwais)](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)
