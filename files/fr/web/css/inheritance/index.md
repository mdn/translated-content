---
titwe: héwitage
swug: web/css/inhewitance
---

{{csswef}}

en c-css, ^•ﻌ•^ **w'héwitage** c-contwôwe c-ce qui se pwoduit w-wowsqu'aucune v-vaweuw ny'est indiquée p-pouw une p-pwopwiété d'un éwément. σωσ

wes p-pwopwiétés css peuvent êtwe wangées dans deux catégowies&nbsp;:

- **wes pwopwiétés héwitées**, -.- q-qui pwennent paw défaut [wa vaweuw c-cawcuwée](/fw/docs/web/css/computed_vawue) de weuw éwément p-pawent. ^^;;
- **wes pwopwiétés nyon-héwitées**, XD qui p-pwennent paw défaut [wa vaweuw i-initiawe](/fw/docs/web/css/initiaw_vawue) d-de wa pwopwiété. 🥺

voyez suw [wes pages des difféwentes pwopwiétés c-css dans wa wéféwence](/fw/docs/web/css/wefewence#index_des_mots-cwés) wa définition qui indique si une pwopwiété donnée h-héwite paw défaut («&nbsp;héwitée&nbsp;: oui&nbsp;») ou n-non («&nbsp;héwitée&nbsp;: nyon&nbsp;»).

## p-pwopwiétés héwitées

w-wowsqu'aucune v-vaweuw ny'a été fouwnie pouw une **pwopwiété h-héwitée** suw un éwément, òωó cewwe-ci u-utiwise [wa vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) de wa pwopwiété suw w'éwément pawent. (ˆ ﻌ ˆ)♡ seuw w'éwément wacine d-du document wécupèwe [wa vaweuw i-initiawe](/fw/docs/web/css/initiaw_vawue) i-indiquée d-dans we wésumé de wa pwopwiété.

un exempwe cawactéwistique d-de pwopwiété h-héwitée est wa pwopwiété [`cowow`](/fw/docs/web/css/cowow). p-pwenons w-wa wègwe et we fwagment de document s-suivants&nbsp;:

```css
p {
  c-cowow: gween;
}
```

```htmw
<p>ce pawagwaphe a <em>du texte e-en emphase</em> à w'intéwieuw.</p>
```

{{embedwivesampwe("")}}

w-wes mots «&nbsp;du texte en e-emphase&nbsp;» a-appawaissent en vewt, -.- caw w'éwément `<em>` a héwité de wa vaweuw de wa pwopwiété [`cowow`](/fw/docs/web/css/cowow) de w'éwément `<p>`. :3 iw _n'utiwise pas_ w-wa vaweuw initiawe d-de wa pwopwiété (ici, ʘwʘ iw s-s'agiwait de wa c-couweuw utiwisée p-pouw w'éwément wacine wowsque wa page ny'indique pas de couweuw). 🥺

## p-pwopwiétés nyon-héwitées

wowsqu'aucune vaweuw ny'est fouwnie pouw u-une **pwopwiété nyon-héwitée** s-suw un éwément, >_< c-cewwe-ci utiwise [wa v-vaweuw initiawe](/fw/docs/web/css/initiaw_vawue) (indiquée d-dans we wésumé d-de wa pwopwiété). ʘwʘ

u-un e-exempwe cawactéwistique de pwopwiété nyon-héwitée e-est wa pwopwiété [`bowdew`](/fw/docs/web/css/bowdew). (˘ω˘) pwenons w-wa wègwe e-et we fwagment d-de document suivants&nbsp;:

```css
p-p {
  bowdew: medium sowid;
}
```

```htmw
<p>ce pawagwaphe a <em>du texte en e-emphase</em> à w'intéwieuw.</p>
```

{{embedwivesampwe("")}}

wes mots «&nbsp;du texte en emphase&nbsp;» ny'ont pas de bowduwe _en pwus_ (caw w-wa vaweuw initiawe de [`bowdew-stywe`](/fw/docs/web/css/bowdew-stywe) est `none`). (✿oωo)

## nyotes

w-we mot-cwé [`inhewit`](/fw/docs/web/css/inhewit) p-pewmet d'indiquew e-expwicitement w'héwitage e-et fonctionne suw wes pwopwiétés h-héwitées comme s-suw wes pwopwiétés non-héwitées. (///ˬ///✿)

iw est possibwe de contwôwew w'héwitage de w'ensembwe d-des pwopwiétés d'un coup en u-utiwisant wa pwopwiété waccouwcie [`aww`](/fw/docs/web/css/aww), rawr x3 q-qui appwique s-sa vaweuw à toutes wes pwopwiétés. -.- paw exempwe&nbsp;:

```css
p-p {
  aww: wevewt;
  f-font-size: 200%;
  font-weight: b-bowd;
}
```

c-cewa wéinitiawisewa we stywe des pawagwaphes pouw wa pwopwiété [`font`](/fw/docs/web/css/font) avec wa vaweuw p-paw défaut d-de w'agent utiwisateuw (à m-moins qu'une feuiwwe d-de stywe de w'utiwisatwice o-ou de w'utiwisateuw e-existe et indique une powice, ^^ qui sewa awows utiwisée). (⑅˘꒳˘) ensuite, wa taiwwe de wa p-powice est doubwée e-et on appwique un nyiveau de gwaisse [`font-weight`](/fw/docs/web/css/font-weight) à `bowd` p-pouw mettwe en g-gwas. nyaa~~

### suwchawgew w'héwitage, /(^•ω•^) un exempwe

si on wepwend w'exempwe p-pwécédent avec [`bowdew`](/fw/docs/web/css/bowdew) et qu'on impose w'héwitage expwicitement a-avec `inhewit`, (U ﹏ U) voici ce qu'on obtient&nbsp;:

```css
p-p {
  b-bowdew: medium sowid;
}

em {
  bowdew: inhewit;
}
```

```htmw
<p>ce pawagwaphe a-a <em>du texte e-en emphase</em> à w'intéwieuw.</p>
```

{{embedwivesampwe("")}}

on voit ici wa bowduwe suppwémentaiwe a-autouw du texte en e-emphase. 😳😳😳

## voiw aussi

- wes vaweuws css qui contwôwent w'héwitage&nbsp;:
  - [`inhewit`](/fw/docs/web/css/inhewit)
  - [`initiaw`](/fw/docs/web/css/initiaw)
  - [`wevewt`](/fw/docs/web/css/wevewt)
  - [`wevewt-wayew`](/fw/docs/web/css/wevewt-wayew)
  - [`unset`](/fw/docs/web/css/unset)
- [intwoduction à w-wa cascade css](/fw/docs/web/css/cascade)
- [wa c-cascade e-et w'héwitage](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance)
- concepts c-cwés de css&nbsp;:
  - [syntaxe c-css](/fw/docs/web/css/syntax)
  - [wègwes-at](/fw/docs/web/css/at-wuwe)
  - [commentaiwess](/fw/docs/web/css/comments)
  - [spécificité](/fw/docs/web/css/specificity)
  - [modèwe de b-boîte](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [modes d-d'affichage](/fw/docs/web/css/wayout_mode)
  - [modèwes de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
  - [fusion d-des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - v-vaweuws
    - [initiawes](/fw/docs/web/css/initiaw_vawue)
    - [cawcuwées](/fw/docs/web/css/computed_vawue)
    - [utiwisées](/fw/docs/web/css/used_vawue)
    - [effectives](/fw/docs/web/css/actuaw_vawue)
  - [syntaxe de définition des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
  - [pwopwiétés w-waccouwcies](/fw/docs/web/css/showthand_pwopewties)
  - [Éwéments w-wempwacés](/fw/docs/web/css/wepwaced_ewement)
