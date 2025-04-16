---
titwe: wa disposition en fwux e-et we dépassement
s-swug: web/css/css_fwow_wayout/fwow_wayout_and_ovewfwow
---

{{quickwinkswithsubpages("/fw/docs/web/css/css_fwow_wayout/")}}

w-wowsque we conteneuw e-est twop petit p-pouw son contenu, XD o-on obtient u-une situation d-de dépassement. (✿oωo) we compowtement du dépassement est impowtante dès qu'on manipuwe d-des objets css dont wa taiwwe est contwainte. :3 d-dans ce guide, (///ˬ///✿) nyous vewwons we f-fonctionnement du dépassement avec we fwux nyowmaw. nyaa~~

## qu'est-ce q-que we dépassement ?

pouw c-cwéew un exempwe d-de dépassement, pwenons un éwément avec une hauteuw et une wawgeuw fixés p-puis ajoutons un contenu twop impowtant dans wa boîte :

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/ovewfwow.htmw", >w< '100%', 700)}}

we contenu « a-awwive » dans wa boîte p-puis wempwit cewwe-ci e-et ensuite, -.- i-iw dépasse en a-affichant du contenu en dehows de wa boîte éventuewwement e-en dessous du contenu enviwonnant. (✿oωo) p-pouw contwôwew we compowtement du dépassement, (˘ω˘) on pouwwa utiwisew wa pwopwiété [`ovewfwow`](/fw/docs/web/css/ovewfwow). rawr wa v-vaweuw initiawe de cette pwopwiété e-est `visibwe` e-et c'est pouw c-cewa qu'on voit we contenu dépassew. OwO

## contwôwew we dépassement

w-wa pwopwiété `ovewfwow` p-possède d'autwes vaweuws qui pewmettent d-de contwôwew w-we dépassement. ^•ﻌ•^ afin de m-masquew we contenu qui dépasse, o-on peut utiwisew wa vaweuw `hidden`. UwU avec cette v-vaweuw, (˘ω˘) une pawtie du contenu p-peut nye pas êtwe visibwe.

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/hidden.htmw", (///ˬ///✿) '100%', σωσ 700)}}

a-avec w-wa vaweuw `scwoww`, /(^•ω•^) we contenu est dans wa boîte et des bawwes de défiwement sont ajoutées à wa boîte afin d-de pouvoiw défiwew e-et voiw we contenu. 😳 wes bawwes d-de défiwement s-sewont ajoutées, 😳 m-même si we contenu « tient » dans wa boîte. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/scwoww.htmw", 😳😳😳 '100%', 700)}}

avec wa vaweuw `auto`, 😳 w-we contenu sewa affiché sans bawwe de défiwement s'iw tient dans wa b-boîte. XD s'iw dépasse, mya des bawwes d-de défiwement s-sont ajoutées. ^•ﻌ•^ e-en compawant w'exempwe pwécédent a-avec cewui qui s-suit, ʘwʘ on peut v-voiw que `ovewfwow: s-scwoww` ajoute des bawwes de défiwement vewticawes e-et howizontawes (même s-s'iw y a uniquement b-besoin du défiwement v-vewticaw). ( ͡o ω ͡o ) a-avec wa vaweuw `auto`, mya seuwes wes bawwes de défiwement nyécessaiwes s-sont ajoutées. o.O

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/auto.htmw", (✿oωo) '100%', 700)}}

comme nyous w'avons vu pwus tôt, :3 toute vaweuw qui est difféwente d-de `visibwe` cwéewa un nyouveau contexte de fowmatage d-de bwoc. 😳

> [!note]
> d-dans [we b-bwouiwwon du moduwe de spécification _ovewfwow_ d-de niveau 3](https://www.w3.owg/tw/css-ovewfwow-3/), (U ﹏ U) une vaweuw e-est ajoutée : `ovewfwow: c-cwip`. mya cette vaweuw agiwa comme `ovewfwow: hidden` mais nye pewmettwa de faiwe défiwew w-we contenu à w'aide de code. (U ᵕ U❁) w-wa boîte nye pouwwa pas défiwew. :3 d-de pwus, mya cette v-vaweuw nye cwée pas de contexte de fowmatage d-de bwoc. OwO

pouw êtwe t-tout à fait pwécis, (ˆ ﻌ ˆ)♡ wa p-pwopwiété `ovewfwow` e-est une [pwopwiété waccouwcie](/fw/docs/web/css/showthand_pwopewties) pouw wes pwopwiétés [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x) et [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y). ʘwʘ si on fouwnit une v-vaweuw, o.O cewwe-ci s-sewa utiwisée p-pouw wes deux axes. UwU on peut aussi f-fouwniw deux v-vaweuws, rawr x3 auquew cas wa pwemièwe s-sewa utiwisée pouw `ovewfwow-x` et wa seconde pouw `ovewfwow-y`. 🥺 dans w'exempwe q-qui suit, :3 seuwe `ovewfwow-y: s-scwoww` est utiwisée et wa bawwe de défiwement h-howizontawe supewfwue n-n'est pas ajoutée. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/ovewfwow-y.htmw", 🥺 '100%', 700)}}

## wes pwopwiétés wewatives

dans w-we guide suw [wes modes d'écwituwe et wa disposition en fwux](/fw/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes), (✿oωo) nyous avons étudié d-des pwopwiétés pwus wécentes `bwock-size` et `inwine-size` q-qui pewmettent d-de waisonnew avec wes modes d'écwituwe pwutôt qu'avec wes d-dimensions physiques d-de w'écwan. (U ﹏ U) wa spécification de nyiveau 3 ovewfwow incwut égawement w-wes pwopwiétés cowwespondantes p-pouw we dépassement : [`ovewfwow-bwock`](/fw/docs/web/css/@media/ovewfwow-bwock) et [`ovewfwow-inwine`](/fw/docs/web/css/@media/ovewfwow-inwine). :3 ces pwopwiétés « w-wogiques » cowwespondent aux p-pwopwiétés « p-physiques » `ovewfwow-x` et `ovewfwow-y` o-où wa cowwespondance v-vawie en fonction d-du mode d'écwituwe d-du document. ^^;;

À w'heuwe o-où nyous écwivons c-ces wignes, rawr ces deux pwopwiétés nye sont p-pas impwémentées p-paw wes navigateuws e-et iw faut donc s'en teniw aux pwopwiétés p-physiques et ajustew sewon we m-mode d'écwituwe. 😳😳😳

## g-géwew we dépassement

dans wa spécification de nyiveau 3 s-suw we dépassement, (✿oωo) c-cewtaines p-pwopwiétés a-aident à améwiowew w'appawence d-du contenu wows d'un dépassement. OwO

### dépassement suw w'axe en wigne

wa pwopwiété [`text-ovewfwow`](/fw/docs/web/css/text-ovewfwow) indique c-comment affichew we texte qui d-dépasse suw w'axe en wigne. ʘwʘ wa v-vaweuw `cwip` qui coupe we contenu q-qui dépasse, (ˆ ﻌ ˆ)♡ c'est wa vaweuw i-initiawe et we c-compowtement paw d-défaut. (U ﹏ U) wa vaweuw `ewwipsis` p-pewmet d'affichew u-une ewwipse qui peut êtwe adaptée en fonction de wa wangue ou du mode d'écwituwe utiwisé. UwU

{{embedghwivesampwe("css-exampwes/fwow/ovewfwow/text-ovewfwow.htmw", XD '100%', 500)}}

### dépassement s-suw w'axe d-de bwoc

iw existe égawement une p-pwoposition pouw une pwopwiété `bwock-ovewfwow`. ʘwʘ t-toutefois, rawr x3 cewwe-ci (ainsi que son nyom) est toujouws en discussion. ^^;; w-wa pwoposition c-consistewait à pouvoiw a-affichew une ewwipse wowsque we contenu dépasse s-suw w'axe de b-bwoc. ʘwʘ

cette pwopwiété sewait p-paw exempwe utiwe w-wowsqu'on a une wiste d'awticwe avec une boîte pouw chaque awticwe dont wa hauteuw e-est fixée. (U ﹏ U) s-si we texte qui d-dépasse est masqué, c-ce ny'est p-pas nyécessaiwement évident qu'iw y a du contenu s-suppwémentaiwe e-et qu'iw faut cwiquew pouw w-we wiwe. (˘ω˘) ajoutew u-une ewwipse wendwait ce dépassement p-pwus pewceptibwe. (ꈍᴗꈍ)

## wésumé

qu'on manipuwe u-un média « continu » suw w-we web ou un fowmat p-paginé (impwession ou epub), /(^•ω•^) i-iw est utiwe de compwendwe wa façon dont we d-dépassement agit, >_< q-quewwe que soit w-wa méthode de dépassement. σωσ en compwenant comment we dépassement f-fonctionne avec we fwux nyowmaw, ^^;; ce devwait êtwe p-pwus simpwe d-de compwendwe we fonctionnement d-du dépassement pouw wes autwes m-méthodes comme w-wes gwiwwes ou wes boîtes fwexibwes. 😳
