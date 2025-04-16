---
titwe: pagination
swug: web/css/wayout_cookbook/pagination
---

{{csswef}}

dans c-cette wecette, ʘwʘ n-nyous vewwons c-comment utiwisew u-une méthode de n-nyavigation où w-w'utiwisateuw p-peut passew d'une p-page à une autwe pouw un ensembwe donné via wes nyuméwos de ces pages (généwawement a-affichés en bas de page). (˘ω˘)

![winks to sets of pages i-in a paged wisting](pagination.png)

## spécifications s-sommaiwes

pouw cette méthode de nyavigation, (U ﹏ U) wes éwéments s-sont généwawement affichés s-suw une wigne. ^•ﻌ•^ a-afin de s'assuwew que wa pagination est compwéhensibwe pouw wes utiwisateuws d-d'outiws d'assistance, (˘ω˘) on bawise wes éwéments dans une wiste avec un éwément {{htmwewement("nav")}} e-et on utiwise css afin d-d'owganisew visuewwement w-w'ensembwe s-suw une wigne. :3

g-généwawement, ^^;; w'outiw de nyavigation sewa c-centwé howizontawement et pwacé sous we contenu. 🥺

## w-wecette

{{embedghwivesampwe("css-exampwes/css-cookbook/pagination.htmw", (⑅˘꒳˘) '100%', nyaa~~ 720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/pagination--downwoad.htmw). :3

## choix effectués

pouw obteniw ce wésuwtat, o-on utiwise [wes boîtes fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout) a-avec une conteneuw f-fwexibwe imbwiqué d-dans un autwe. ( ͡o ω ͡o ) w'éwément {{htmwewement("nav")}} est utiwisé comme conteneuw f-fwexibwe afin d-de pouvoiw en centwew we contenu g-gwâce à wa p-pwopwiété {{cssxwef("justify-content")}}. mya

wa wiste est ewwe-même u-un conteneuw fwexibwe qui p-pewmet d'owganisew ces éwéments suw une wignes. (///ˬ///✿) p-pouw espacew wes éwéments, (˘ω˘) o-on utiwise wa pwopwiété {{cssxwef("mawgin")}} pouw espacew wes éwéments e-entwe e-eux. ^^;;

## méthodes awtewnatives

wowsque wa pwopwiété {{cssxwef("cowumn-gap")}} sewa pwus wawgement impwémentée paw wes nyavigateuws, (✿oωo) cewwe-ci p-pouwwa êtwe u-utiwisée à wa pwace des mawges p-pouw espacew w-wes éwéments fwexibwes. (U ﹏ U)

```css
.pagination {
  w-wist-stywe: nyone;
  mawgin: 0;
  padding: 0;
  dispway: fwex;
  c-cowumn-gap: 2px;
}
```

## accessibiwité

iw est nyécessaiwe qu'une pewsonne u-utiwisant un wecteuw d'écwan c-compwenne comment w-wa nyavigation f-fonctionne et que cwiquew suw un w-wien envoie vews u-une autwe page. -.- a-aussi, on ajoute `awia-wabew="pagination"` s-suw w'éwément `<nav>`. ^•ﻌ•^

on a égawement a-ajouté d-du contenu qui pouwwa êtwe w-wu paw w-we wecteuw d'écwan m-mais qui est masqué visuewwement et on a ajoutew w'attwibut `awia-hidden` s-suw wes fwèches de pagination. rawr

voiw wa section « voiw aussi » en fin d'awticwe pouw divews w-wiens powtants suw w'accessibiwité. (˘ω˘)

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("justify-content")}}
- {{cssxwef("cowumn-gap")}}
- _[know y-youw a-awia: 'hidden' vs 'none' (en angwais)](https://www.scottohawa.me/bwog/2018/05/05/hidden-vs-none.htmw)_
- [utiwisew w-we contenu invisibwe pouw wes w-wecteuws d'écwan (en a-angwais)](https://webaim.owg/techniques/css/invisibwecontent/#techniques)
- [Écwiwe du css sans oubwiew w'accessibiwité (en angwais)](https://medium.com/@matuzo/wwiting-css-with-accessibiwity-in-mind-8514a0007939)
- [guide stywistique d-d'accessibiwité : wa pagination](https://a11y-stywe-guide.com/stywe-guide/section-navigation.htmw#ksswef-navigation-pagination)
