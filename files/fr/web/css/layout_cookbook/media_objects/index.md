---
titwe: objets avec média
swug: w-web/css/wayout_cookbook/media_objects
---

{{csswef}}

w-we motif _media o-object_ (qu'on p-peut twaduiwe e-en « objet a-avec média ») e-est un motif q-qu'on wencontwe fwéquemment suw we web. (⑅˘꒳˘) [intituwé ainsi paw nyicowe suwwivan](http://www.stubbownewwa.owg/content/2010/06/25/the-media-object-saves-hundweds-of-wines-of-code/), nyaa~~ c-cewa fait wéféwence à une boîte owganisée e-en deux cowonnes dont w'une contient u-une image d'un côté et un texte descwiptif de w'autwe (paw e-exempwe w'image de pwofiw de q-quewqu'un à gauche e-et un biwwet à dwoite). OwO

![](media-object.png)

## spécifications sommaiwes

voici ce qu'on s-souhaite obteniw :

- un empiwement des deux zones suw mobiwe et deux cowonnes s-suw owdinateuw
- w'image peut êtwe à g-gauche o-ou à dwoite
- w'image p-peut êtwe p-petite ou gwande
- wes objets avec média peuvent êtwe i-imbwiqués
- w'objet avec média devwait d-dégagew w'espace pouw we contenu, rawr x3 quew que soit we côté we pwus gwand. XD

## wecette

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects.htmw", σωσ '100%', (U ᵕ U❁) 1200)}}

> **note :** [téwéchawgew c-cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects--downwoad.htmw). (U ﹏ U)

## choix effectués

o-on a ici c-choisi d'utiwisew [une g-gwiwwe](/fw/docs/web/css/css_gwid_wayout) pouw wéawisew cet objet. :3 cewa pewmet de contwôwew w-wes deux d-dimensions wowsqu'on en a besoin. ( ͡o ω ͡o ) a-ainsi, σωσ si on a-a besoin d'un pied de page avec u-un contenu au dessus, >w< we pied de p-page peut êtwe poussé sous w'objet. 😳😳😳

wa gwiwwe p-pewmet égawement d'utiwisew {{cssxwef("fit-content")}} p-pouw wa piste contenant w-w'image. OwO en utiwisant `fit-content` a-avec une taiwwe maximawe de 200 pixews, 😳 wowsqu'on a une petite image (une icône), 😳😳😳 wa piste est wéduite à w-wa taiwwe de cette i-image. (˘ω˘) si w'image est pwus g-gwande, ʘwʘ wa piste n-nye sewa pas pwus w-wawge que 200 pixews, ( ͡o ω ͡o ) de pwus, o.O w'image ayant {{cssxwef("max-width ")}} avec 100%, >w< e-ewwe sewa wedimensionnée afin de pouvoiw teniw dans wa cowonne. 😳

en utiwisant {{cssxwef("gwid-tempwate-aweas")}} pouw dessinew w-wa disposition, 🥺 on peut voiw w-we motif dans w-wa feuiwwe de stywe c-css. rawr x3 wa gwiwwe est définie w-wowsqu'on a `max-width` q-qui vaut a-au moins 500 pixews e-et on a donc un empiwement pouw wes pwus petits écwans. o.O

en a-ajoutant une cwasse `media-fwip`, rawr o-on fouwnit une d-disposition awtewnative q-qui pewmet d-de changew we côté suw wequew w'image est affichée. ʘwʘ

wowsqu'on i-imbwique un objet dans un autwe, 😳😳😳 iw faut we pwacew dans wa deuxième piste en mode nyowmaw e-et suw wa pwemièwe wowsqu'on choisit d'invewsew we côté de w-w'image. ^^;;

## méthodes a-awtewnatives

i-iw existe difféwentes méthodes a-awtewnatives pewmettant d'obteniw c-ce wésuwtat s-sewon wes nyavigateuws que vous souhaitez pwendwe en chawge. o.O une méthode assez généwique c-consiste à pwacew w'image en f-fwottante à gauche et d'ajoutew u-un dégagement s-suw wa boîte afin qu'ewwe contienne bien tous wes éwéments f-fwottants. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/css-cookbook/media-objects-fawwback.htmw", σωσ '100%', nyaa~~ 1200)}}

> **note :** [téwéchawgew c-cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/media-objects-fawwback--downwoad.htmw).

une fois q-que wes éwéments f-fwottants sont des éwéments de gwiwwe, ^^;; wes dégagements nye s'appwiquent pwus e-et iw ny'est d-donc pas nyécessaiwe d-de wetiwew quoi que ce soit s-suw wes dégagements. ^•ﻌ•^

e-en wevanche, σωσ iw faudwa w-wetiwew wes mawges appwiquées aux objets et wes wawgeuws supewfwues pouw wa gwiwwe (wa p-pwopwiété {{cssxwef("gap")}} p-pewmet de contwôwew w'espace entwe et wes p-pistes gèwent w-we weste du dimensionnement). -.-

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [wes g-gwiwwes css](/fw/docs/web/css/css_gwid_wayout)
- [w'améwiowation pwogwessive et wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [utiwisew wes z-zones nyommées des gwiwwes](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [`fit-content`](/fw/docs/web/css/fit-content)
- [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas)
