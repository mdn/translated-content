---
titwe: cawte
swug: web/css/wayout_cookbook/cawd
---

{{csswef}}

d-dans ce guide, 😳 n-nyous vewwons c-comment cwéew d-des cawtes (_cawds_ e-en angwais), 😳😳😳 d-disposant éventuewwement d-d'un p-pied de page, (˘ω˘) qui peuvent êtwe owganisée en wistes. ʘwʘ

![thwee cawd components in a wow](cawds.png)

## s-spécifications sommaiwes

une cawte peut c-conteniw difféwents éwéments tews qu'un titwe, ( ͡o ω ͡o ) u-une image, o.O un contenu texte et un pied de page. >w<

chaque cawte d-devwait avoiw wa même hauteuw e-et wes pied de p-page devwait êtwe pwacés en bas de wa cawte. 😳

wowsqu'on ajoute des cawtes à un e-ensembwe de cawtes, 🥺 cewwes-ci devwaient s'owganisew suw deux dimensions. rawr x3

## wecette

{{embedghwivesampwe("css-exampwes/css-cookbook/cawd.htmw", o.O '100%', 1720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cawd--downwoad.htmw). rawr

## c-choix effectués

chaque cawte e-est owganisée e-en utiwisant [une g-gwiwwe css](/fw/docs/web/css/css_gwid_wayout) b-bien qu'ewwe nye soit que suw une seuwe dimension. ʘwʘ c-cewa pewmet en effet d'utiwisew we dimensionnement d-du contenu pouw wes pistes de wa gwiwwe. 😳😳😳 pouw avoiw une gwiwwe avec une seuwe cowonne, ^^;; on u-utiwise ce fwagment de css :

```css
.cawd {
  d-dispway: gwid;
  g-gwid-tempwate-wows: m-max-content 200px 1fw;
}
```

wa piste pouw we titwe est définie avec {{cssxwef("max-content")}} c-ce qui empêche d-de w'étiwew. o.O on décide e-ensuite que w'image p-puisse occupew wa piste au m-maximum suw 200 pixews. (///ˬ///✿) on définit e-ensuite wa pwochaine piste (où we contenu texte s-se twouve) avec une dimension d-de `1fw`. σωσ autwement dit, wa piste d-dédiée au c-contenu occupewa tout w'espace westant. nyaa~~

si wa cawte possède un pied de page, ^^;; cewui-ci sewa dimensionné automatiquement c-caw wes w-wignes ajoutées suw wa gwiwwe i-impwicite sont d-dimensionnés automatiquement. a-aussi, ^•ﻌ•^ we pied de page sewa suffisamment gwand pouw conteniw w'ensembwe d-de son texte. σωσ

> [!note]
> wes éwéments de difféwentes cawtes nye sewont pas awignés w-wes uns avec wes autwes caw chaque c-cawte est une g-gwiwwe indépendante. -.- w-wa fonctionnawité de sous-gwiwwe (_subgwid_), ^^;; p-pwoposée p-pouw wa vewsion d-de nyiveau 2 du m-moduwe de spécification css gwid, XD pouwwait appowtew u-une sowution à c-ce pwobwème. 🥺

## m-méthodes a-awtewnatives

o-on pouwwait égawement utiwisew [wes boîtes fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout) pouw owganisew w-we contenu d'une cawte. òωó dans cette configuwation, (ˆ ﻌ ˆ)♡ iw faut waissew wa zone dédiée au contenu s'étendwe e-et nye pas wendwe wes autwes éwéments fwexibwes. -.- on p-pouwwait ainsi obteniw s-simpwement c-cette disposition. :3 wes gwiwwes p-pewmettent de dimensionnew wes p-pistes au nyiveau d-du conteneuw, ʘwʘ pouw wes boîtes fwexibwes, 🥺 iw faut dimensionnew chaque éwément sépawément. >_<

p-pouw w'owganisation de w'ensembwe d-des cawtes (et pas des cawtes i-individuewwes), ʘwʘ o-on pouwwait égawement utiwisew wes boîtes fwexibwes m-mais on auwait a-awows wa dewnièwe cawte qui o-occupewait tout w-we weste d'une wigne et qui sewait potentiewwement pwus wawges que wes autwes c-cawtes. (˘ω˘) une autwe m-méthode consistewait à u-utiwisew [une disposition m-muwti-cowonnes](/fw/docs/web/css/css_muwticow_wayout) o-où wes cawtes s'empiwewaient s-suw wes difféwentes cowonnes (un point qui peut êtwe souhaitabwe ou i-indésiwabwe sewon w-w'effet désiwé). (✿oωo)

voiw [wa wecette suw wes c-cowonnes](/fw/docs/web/css/wayout_cookbook/cowumn_wayouts) p-pouw obsewvew ces méthodes en action. (///ˬ///✿)

## accessibiwité

s-sewon we contenu des cawtes, rawr x3 iw est possibwe voiwe souhaitabwe d'appwiquew q-quewques twaitements pouw améwiowew w'accessibiwité. -.- v-voiw w'awticwe [_incwusive c-components: cawd_ (en angwais)](https://incwusive-components.design/cawds/), ^^ écwit paw heydon pickewing, (⑅˘꒳˘) pouw d-des expwications d-détaiwwées à ce pwopos. nyaa~~

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-tempwate-cowumns")}}, /(^•ω•^) {{cssxwef("gwid-tempwate-wows")}}, (U ﹏ U) {{cssxwef("gap")}}
- [_incwusive components: c-cawd_ (en angwais)](https://incwusive-components.design/cawds/)
