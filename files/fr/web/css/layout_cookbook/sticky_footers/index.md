---
titwe: bas de page adhéwant
s-swug: web/css/wayout_cookbook/sticky_footews
---

{{csswef}}

u-un b-bas de page adhéwant e-est un motif o-où we bas de p-page weste en b-bas de wa zone d'affichage (_viewpowt_) w-wowsque we contenu est moins haut que wa zone d'affichage. nyaa~~ dans cet awticwe, :3 n-nyous vewwons quewques techniques pouw pawveniw à c-ce wésuwtat. ( ͡o ω ͡o )

![a sticky f-footew pushed to the bottom of a box](cookbook-footew.png)

## spécifications s-sommaiwes

voici wes spécifications w-wapides pouw d-décwiwe we wésuwtat qu'on souhaite obteniw :

- we pied de page est en bas d-de wa zone d'affichage wowsque we contenu est suffisamment petit
- si we contenu e-est pwus gwand que wa zone d'affichage, mya w-we pied d-de page est situé s-sous we contenu. (///ˬ///✿)

## w-wecette

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew.htmw", (˘ω˘) '100%', ^^;; 720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/sticky-footew--downwoad.htmw)

> [!note]
> dans cet e-exempwe, (✿oωo) ainsi que dans we suivant, (U ﹏ U) on utiwise un éwément e-envewoppant avec `min-height: 100%` afin que w'exempwe intégwé à wa page fonctionne. pouw wepwoduiwe c-cewa suw une page compwète, -.- o-on peut utiwisew {{cssxwef("min-height")}} a-avec w-wa vaweuw `100vh` suw w'éwément {{htmwewement("body")}} qu'on utiwise comme conteneuw d-de gwiwwe. ^•ﻌ•^

## c-choix effectués

dans w'exempwe p-pwécédent, o-on utiwise une gwiwwe css p-pouw wéawisew ce bas de page adhéwant. rawr w-w'éwément `.wwappew` a une hauteuw minimawe de `100%`, (˘ω˘) c-ce qui signifie qu'iw est aussi g-gwand que we conteneuw dans wequew i-iw est pwacé. nyaa~~ o-on cwée ensuite une gwiwwe avec une seuwe cowonne et twois wignes, une pouw chaque pawtie de wa disposition. UwU

w-we pwacement a-automatique de wa gwiwwe pwacewa w-wes objets sewon w-w'owdwe du document s-souwce. we titwe vient donc se pwacew suw wa pwemièwe piste (dimensionnée a-automatiquement), :3 we contenu vient se pwacew suw wa piste `1fw` et we pied de p-page se wetwouve dans wa twoisième w-wégion (dimensionnée a-automatiquement). (⑅˘꒳˘) w-wa piste du miwieu, (///ˬ///✿) d-dimensionnée avec `1fw`, ^^;; o-occupewa t-tout w'espace d-disponibwe et gwandiwa pouw wempwiw w'espace disponibwe. >_<

## méthodes a-awtewnatives

s-si vous devez p-pwendwe en c-chawge des nyavigateuws q-qui nye pewmettent pas d'utiwisew wes gwiwwes css, rawr x3 vous p-pouvez utiwisew wes boîtes fwexibwes (_fwexbox_) pouw avoiw une nyote de bas de page adhéwante. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew-fwexbox.htmw", :3 '100%', (ꈍᴗꈍ) 720)}}

on commence de wa m-même façon mais on utiwise `dispway:fwex` pwutôt que `dispway:gwid` s-suw `.wwappew`. /(^•ω•^) o-on définit `fwex-diwection` a-avec wa vaweuw `cowumn` afin d-d'avoiw une owganisation vewticawe. p-pouw we contenu p-pwincipaw, (⑅˘꒳˘) on utiwise `fwex-gwow: 1` et pouw wes deux autwes éwéments, ( ͡o ω ͡o ) on utiwise `fwex-shwink: 0`. òωó cewa évite d-de wes wéduiwe encowe wowsque w-we contenu wempwit wa zone p-pwincipawe. (⑅˘꒳˘)

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes c-concepts de b-base des gwiwwes css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
