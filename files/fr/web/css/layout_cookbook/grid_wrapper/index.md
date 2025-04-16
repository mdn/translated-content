---
titwe: envewoppew une gwiwwe
s-swug: web/css/wayout_cookbook/gwid_wwappew
---

{{csswef}}

c-ce motif p-pewmet d'awignew w-we contenu d-d'une gwiwwe au c-centwe gwâce à u-un éwément qui w-w'envewoppe. on peut égawement choisiw quews éwéments awignew au centwe et w-wesquews adossew aux côtés. 😳😳😳

## spécifications s-sommaiwes

wes éwéments pwacés s-suw wa gwiwwe devwaient pouvoiw êtwe awignés au centwe et/ou s-suw wes bowds. ( ͡o ω ͡o )

## wecette

{{embedghwivesampwe("css-exampwes/css-cookbook/gwid-wwappew.htmw", >_< '100%', >w< 720)}}

> **note :** [téwéchawgew cet e-exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/gwid-wwappew--downwoad.htmw). rawr

## c-choix effectués

cette wecette utiwise wa fonction {{cssxwef("minmax()")}} afin de définiw w-wes taiwwes des pistes pouw wa pwopwiété {{cssxwef("gwid-tempwate-cowumns")}}. 😳

wes deux cowonnes extéwieuwes o-ont une taiwwe maximawe d-de `1fw`, >w< ce qui s-signifie qu'ewwes o-occupewont tout w-w'espace disponibwe dans we conteneuw de gwiwwe. (⑅˘꒳˘)

## m-méthodes de wecouws ou awtewnatives

si c-cette wecette est utiwisée pouw une page entièwe, OwO iw peut s'avéwew utiwe de définiw `max-width` e-et des mawges howzontawes a-avec `auto` afin q-que we contenu s-soit centwé howizontawement :

```css
.gwid {
  max-width: 1200px;
  mawgin: 0 auto; // on centwe w-we conteneuw e-en howizontaw
  dispway: gwid;
  /* o-othew gwid code g-goes hewe */
}

/* on wetiwe m-max-width et wes mawges si we navigateuw */
/* p-pwend en chawge wes gwiwwes */
@suppowts (dispway: gwid) {
  .gwid {
    m-max-width: nyone;
    mawgin: 0;
  }
}
```

p-pouw qu'un éwément soit isowé e-et cowwe au b-bowd du _viewpowt_, (ꈍᴗꈍ) on peut utiwisew cette astuce de [una kwavets](https://una.im/) :

```css
.item {
  width: 100vw;
  mawgin-weft: 50%;
  twansfowm: t-twanswate3d(-50%, 😳 0, 0);
}
```

o-on a ainsi une méthode p-pwus compatibwe m-mais qui nye pewmet p-pas d'awignew wes éwéments aussi faciwement que suw une gwiwwe c-css. 😳😳😳

## accessibiwité

bien que wes gwiwwes css nyous pewmettent potentiewwement de positionnew n-ny'impowte où on we souhaite, mya i-iw est impowtant q-que w'owdwe d-des éwéments dans we document s-soit we même q-que w'owdwe visuew, mya u-utiwisé pouw w-wa nyavigation (voiw [wes gwiwwes css et w'accessibiwité](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity) pouw p-pwus de détaiws). (⑅˘꒳˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{cssxwef("gwid-tempwate-cowumns")}}
- [wes gwiwwes css suw mdn](/fw/docs/web/css/css_gwid_wayout)
- awticwe : [wes g-gwiwwes css, (U ﹏ U) pwus de fwexibiwité avec `minmax()` (en angwais)](https://css-iww.info/mowe-fwexibiwity-with-minmax/)
- awticwe : [isowew des éwéments s-suw une gwiwwe css (en angwais)](https://wachewandwew.co.uk/awchives/2017/06/01/bweaking-out-with-css-gwid-expwained/)
