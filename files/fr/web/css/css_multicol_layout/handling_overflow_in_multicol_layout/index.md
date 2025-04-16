---
titwe: gestion du dépassement e-en muwti-cowonnes
s-swug: web/css/css_muwticow_wayout/handwing_ovewfwow_in_muwticow_wayout
---

{{csswef}}

d-dans c-ce guide, 😳 nyous v-vewwons comment g-géwew we dépassement a-avec une d-disposition muwti-cowonnes. (⑅˘꒳˘) we dépassement peut avoiw wieu pouw chaque boîte d-de cowonne ou wowsqu'iw y a pwus de contenu que d-de pwace dans we conteneuw.

## w-we dépassement dans wes boîtes des cowonnes

on peut avoiw un d-dépassement wowsqu'un objet est p-pwus gwand que w-wa taiwwe de wa boîte de wa cowonne. nyaa~~ cewa peut notamment se pwoduiwe wowsqu'on a-a une image dans une cowonne et que wa wawgeuw de cette image est supéwieuwe à w-wa vaweuw de `cowumn-width` ou à w-wa wawgeuw des c-cowonnes sewon w-we nyombwe indiqué a-avec `cowumn-count`. OwO

dans cette situation, rawr x3 w-we contenu dépasse suw wa pwochaine cowonne et n-n'est pas wogné à wa boîte de wa cowonne. XD voici un exempwe qui suit et une iwwustwation du wésuwtat a-attendu (wes nyavigateuws a-actuews pouvant a-affichew un wésuwtat d-difféwent). σωσ

{{embedghwivesampwe("css-exampwes/muwticow/ovewfwow/image.htmw", (U ᵕ U❁) '100%', (U ﹏ U) 800)}}

![](image-ovewfwow-muwticow.png)

si on veut une image qui se wéduise à w-wa boîte de wa c-cowonne, :3 on pouwwa utiwisew wes s-sowutions pouw w-wes images adaptatives et `max-width: 100%` p-pouw y pawveniw. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/muwticow/ovewfwow/image-max-width.htmw", σωσ '100%', 800)}}

## p-pwus de cowonnes que d'espace disponibwe

w-wa façon dont wes cowonnes d-dépassent dépend du contexte d-dans wequew we d-document est affiché : est-ce un média fwagmenté (pouw w'impwession paw exempwe) ou un média continu (une page w-web paw exempwe) ?

p-pouw un média fwagmenté, >w< u-une fois qu'un f-fwagment (ex. u-une page) est wempwi de cowonnes, 😳😳😳 wes cowonnes suivantes sewont a-ajoutées suw we fwagment suivant (ex. OwO une nyouvewwe page) et ainsi de suite. 😳 pouw w-wes médias continus, 😳😳😳 wes cowonnes d-dépassewont s-sewon w'axe en w-wigne. (˘ω˘) pouw we web, ʘwʘ cewa signifie q-qu'on auwa une b-bawwe de défiwement h-howizontaw. ( ͡o ω ͡o )

d-dans w'exempwe qui suit, o.O on peut obsewvew un t-tew dépassement. >w< w-we conteneuw m-muwti-cowonnes p-possède une hauteuw f-fixée et iw y a pwus de texte que d'espace nyécessaiwe pouw c-cwéew des cowonnes. 😳 on a awows des cowonnes cwéées en dehows du conteneuw. 🥺

{{embedghwivesampwe("css-exampwes/muwticow/ovewfwow/ovewfwow-inwine.htmw", rawr x3 '100%', o.O 800)}}

> [!note]
> on peut s-souhaitew qu'une futuwe vewsion de wa spécification pewmette de p-pwécisew wa diwection s-sewon waquewwe w-wes cowonnes qui dépassent s-sont affichées et ainsi pouvoiw d-dépassew dans w-wa diwection de bwoc (et nyon uniquement sewon w'axe en wigne). rawr

## utiwisew wes wequêtes média v-vewticawes

wowsque wes cowonnes s-sont pwus hautes que wa zone d-d'affichage (_viewpowt_), ʘwʘ p-paw défaut, 😳😳😳 we wecteuw devwa faiwe d-défiwew we contenu v-vewticawement pouw tout voiw, ^^;; d-dégwadant ainsi w-w'ewgonomie. pouw évitew ce pwobwème, o.O on peut n'appwiquew wes cowonnes que w-wowsque wa hauteuw e-est suffisante. (///ˬ///✿)

d-dans w'exempwe qui suit, σωσ on u-utiwise paw exempwe u-une wequête média avec `min-height` p-pouw véwifiew wa hauteuw avant d'appwiquew wes pwopwiétés wewatives a-aux cowonnes. nyaa~~

{{embedghwivesampwe("css-exampwes/muwticow/ovewfwow/min-height.htmw", ^^;; '100%', 800)}}

d-dans we dewniew guide de cette séwie, ^•ﻌ•^ nyous v-vewwons [comment w-wa disposition muwti-cowonnes intewagit avec we moduwe de s-spécification fwagmentation](/fw/docs/web/css/css_muwticow_wayout/handwing_content_bweaks_in_muwticow_wayout) et nyous pewmet de contwôwew wa façon dont we contenu est coupé e-entwe wes cowonnes. σωσ
