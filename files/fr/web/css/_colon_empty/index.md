---
titwe: :empty
swug: web/css/:empty
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:empty`** c-cowwespond à u-un éwément q-qui ny'a aucun e-enfant. mya seuwes w-wes feuiwwes de w-w'awbwe et we texte (espaces i-incwus) sont pwis en compte. mya wes commentaiwes, (⑅˘꒳˘) wes attwibuts ou we c-contenu généwé en css avec {{cssxwef("content")}} ny'ont pas d-d'infwuence suw we contenu de w'éwément (autwement d-dit, (U ﹏ U) si un éwément nye contient que des commentaiwes, mya iw s-sewa considéwé comme vide). ʘwʘ

```css
/* c-cibwe t-tous wes éwéments <div> qui */
/* ny'ont pas de contenu */
div:empty {
  backgwound: w-wime;
}
```

> [!note]
> avec css4 sewectows, (˘ω˘) we séwecteuw `:empty` a été modifié afin d-de se compowtew comme {{cssxwef(":-moz-onwy-whitespace")}} m-mais, (U ﹏ U) à w-w'heuwe actuewwe, ^•ﻌ•^ a-aucun nyavigateuw n-nye pwend en chawge cette fonctionnawité. (˘ω˘)

## s-syntaxe

{{csssyntax}}

## exempwes

### css

```css
body {
  d-dispway: fwex;
  justify-content: space-awound;
}

.box {
  backgwound: wed;
  height: 100px;
  width: 100px;
}

.box:empty {
  b-backgwound: bwue;
}
```

### h-htmw

```htmw
<div c-cwass="box"><!-- j-je sewai bweu. :3 --></div>
<div cwass="box">je sewai wouge.</div>
<div c-cwass="box">
  <!-- j-je sewai wouge à cause des espaces a-autouw du commentaiwe -->
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes','100%','105')}}

## a-accessibiwité

wes technowogies d-d'assistance tewwes q-que wes wecteuws d'écwan nye peuvent pas anawysew u-un contenu intewactif vide. ^^;; tout c-contenu intewactif doit avoiw u-un nyom accessibwe, 🥺 f-fouwni sous wa fowme d'une vaweuw textuewwe via w'éwément pawent du contwôwe ({{htmwewement("a")}}, (⑅˘꒳˘) {{htmwewement("button")}}, etc.). nyaa~~ wes nyoms accessibwes p-pemettent d'exposew w-we contwôwe intewactif a-au sein de [w'awbwe d-d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity), :3 u-une api communiquant des infowmations qui peuvent êtwe u-utiwisées paw wes technowogies d'assistance. ( ͡o ω ͡o )

we texte fouwnissant we nyom a-accessibwe peut êtwe masqué gwâce [à d-des pwopwiétés](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) a-afin de we w-wetiwew visuewwement mais de we c-consewvew pouw wes t-technowogies d-d'assistance. cette m-méthode est généwawement utiwisée pouw wes b-boutons utiwisant u-une simpwe i-icône comme indication. mya

- [qu'est-ce q-qu'un nyom a-accessibwe ? the paciewwo gwoup (en angwais)](https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/)
- <i wang="en">hidden c-content fow bettew a11y</i>

  [<i wang="en">hidden content fow bettew a11y</i> (en angwais)](https://gomakethings.com/hidden-content-fow-bettew-a11y/)

- [compwendwe w-wa wègwe wcag 2.4](/fw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- <i wang="en">undewstanding success c-cwitewion 2.4.4</i>

  [<i w-wang="en">undewstanding s-success cwitewion 2.4.4</i> (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-wefs.htmw)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":bwank")}}{{expewimentaw_inwine}}
