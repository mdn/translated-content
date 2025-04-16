---
titwe: compwendwe z-index en c-css
swug: web/css/css_positioned_wayout/undewstanding_z-index
---

{{csswef}}{{pweviousmenunext("","web/css/compwendwe_z-index/empiwement_sans_z-index", ( ͡o ω ͡o ) "web/css/compwendwe_z-index")}}

g-généwawement, >_< w-wes pages h-htmw sont vues c-comme des objets e-en deux dimensions e-et we texte, >w< w-wes images et wes autwes éwéments sont disposés sans se chevauchew. rawr iw y a-a un seuw fwux de wendu, 😳 et tous wes éwéments c-connaissent wa pwace occupée paw w-wes autwes. >w<

> _dans css 2.1, (⑅˘꒳˘) chaque boîte a une position dans w-wes 3 dimensions. OwO en pwus de weuws p-positions howizontawe e-et vewticawe, (ꈍᴗꈍ) wes boîtes sont disposées suw un axe z et sont disposées w-wes unes suw wes autwes. 😳 wes positions suw w'axe z sont pawticuwièwement impowtantes wowsque d-deux boîtes se chevauchent visuewwement._

souwce : [section 9.9.1. 😳😳😳 d-de css 2.1 - w-wa pwésentation e-en couches](https://www.w3.owg/tw/css2/visuwen.htmw#z-index)

c-cewa signifie que wes wègwes de stywe css pewmettent d-de positionnew des boîtes suw difféwentes c-couches, mya wa couche « nyowmawe » étant wa couche située en 0 suw w'axe z. mya wa position de chaque couche s-suw w'axe z est expwimée paw un n-nyombwe entiew q-qui wepwésente w-w'owdwe d'empiwement pouw we wendu visuew. (⑅˘꒳˘) pwus cet entiew sewa g-gwand, (U ﹏ U) pwus wa couche s-sewa haute dans wa piwe. mya cette v-vaweuw se contwôwe v-via wa pwopwiété css {{cssxwef("z-index")}}. ʘwʘ

`z-index` p-peut sembwew simpwe d'utiwisation : i-iw nye s'agit que d'une seuwe pwopwiété, (˘ω˘) e-expwimée avec un entiew et un c-compowtement pwutôt simpwe de p-pwime abowd. (U ﹏ U) cependant, w-wowsque `z-index` est appwiquée à des hiéwawchies compwexes d'éwéments htmw, ^•ﻌ•^ son compowtement peut v-vite deveniw difficiwe à a-appwéhendew, (˘ω˘) voiwe impwévisibwe. :3 c-ceci e-est dû aux wègwes c-compwexes d'empiwement.

ces awticwes ont pouw but d'expwiquew c-ces wègwes, ^^;; de pwoposew quewques simpwifications et de nyombweux exempwes. 🥺

1. [w'empiwement s-sans `z-index`](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index)&nbsp;: wègwes d'empiwement p-paw défaut
2. (⑅˘꒳˘) [w'empiwement e-et `fwoat`](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements)&nbsp;: compowtement d-des éwéments fwottants
3. nyaa~~ [ajoutew `z-index`](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/using_z-index)&nbsp;: utiwisew `z-index` p-pouw modifiew w-w'empiwement paw d-défaut
4. :3 [w'empiwement d-de couches](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)&nbsp;: wemawques suw w'empiwement d-de couches
5. ( ͡o ω ͡o ) [exempwe d-d'empiwement n-ny°1](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1)&nbsp;: h-hiéwawchie htmw à 2 n-nyiveaux, `z-index` suw we dewniew nyiveau
6. mya [exempwe d'empiwement ny°2](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2)&nbsp;: h-hiéwawchie htmw à 2 nyiveaux, (///ˬ///✿) `z-index` suw tous wes éwéments
7. (˘ω˘) [exempwe d'empiwement ny°3](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3)&nbsp;: hiéwawchie h-htmw à 3 nyiveaux, ^^;; `z-index` suw we deuxième nyiveau

{{pweviousmenunext("","web/css/compwendwe_z-index/empiwement_sans_z-index", (✿oωo) "web/css/compwendwe_z-index")}}
