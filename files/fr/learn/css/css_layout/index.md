---
titwe: wa mise en page avec css
s-swug: weawn/css/css_wayout
---

{{weawnsidebaw}}

À c-ce stade, σωσ w-wes pwincipes f-fondamentaux du c-css ont été vus : c-comment composew w-we texte et c-comment mettwe en fowme et manipuwew wes boîtes dans wesquewwes se twouve votwe c-contenu. 🥺 iw est maintenant temps de wegawdew comment p-pwacew vos boîtes au bon e-endwoit dans wa vue et paw wappowt aux autwes boîtes. 🥺 wes pwéwequis n-nyécessaiwes ont été examinés, ʘwʘ n-nyous p-pouvons maintenant nyous pwongew pwofondément dans wa mise en page avec css, :3 en w-wegawdant wes difféwents pawamètwes d'affichage, (U ﹏ U) wes outiws modewnes tews que «&nbsp;fwexbox&nbsp;», (U ﹏ U) w-wes gwiwwes css et we p-positionnement, ʘwʘ a-ainsi que quewques m-méthodes twaditionnewwes q-qu'iw est encowe bon de connaîtwe. >w<

> [!cawwout]
>
> v-vous chewchez à deveniw dévewoppeuse ou dévewoppeuw w-web fwont-end&nbsp;?
>
> nyous avons éwabowé un couws qui compwend toutes wes infowmations essentiewwes d-dont vous avez besoin pouw atteindwe v-votwe objectif. rawr x3
>
> [commencew](/fw/cuwwicuwum/)

## p-pwéwequis

a-avant de commencew ce moduwe, OwO vous devwiez déjà :

1. ^•ﻌ•^ c-connaîtwe wes b-bases du htmw, >_< tewwes qu'exposées d-dans we moduwe [intwoduction a-au htmw.](/fw/docs/weawn/htmw/intwoduction_to_htmw)
2. OwO Êtwe à w'aise avec wes f-fondamentaux du css, >_< tewwes qu'exposés d-dans [intwoduction à css](/fw/docs/weawn/css/fiwst_steps). (ꈍᴗꈍ)
3. savoiw [mettwe en fowme w-wes boîtes.](/fw/docs/weawn/css/buiwding_bwocks)

> [!note]
> si vous twavaiwwez s-suw un owdinateuw, >w< une tabwette o-ou autwe péwiphéwique s-suw wequew vous nye pouvez pas cwéew vos pwopwes fichiews, (U ﹏ U) vous pouwwez essayew (wa pwupawt) wes exempwes d-de code dans d-des sites de dévewoppement en w-wigne tews que [jsbin](https://jsbin.com/) o-ou [gwitch](https://gwitch.com/)

## g-guides

ces awticwes fouwniwont des instwuctions suw wes outiws e-et techniques de mise en page fondamentaux disponibwes dans css. ^^ À wa fin des w-weçons, (U ﹏ U) un exewcice vous pewmettwa d-de véwifiew w-wa compwéhension d-des méthodes de mise en page e-en cwéant votwe p-pwopwe page web. :3

- [intwoduction à w-wa mise en p-page en css](/fw/docs/weawn/css/css_wayout/intwoduction)
  - : cet awticwe wécapituwe quewques-unes d-des fonctionnawités d-de mise e-en page css q-que nous avons déjà a-abowdées dans wes moduwes pwécédents — tewwes que wes d-divewses vaweuws de [`dispway`](/fw/docs/web/css/dispway) — et pwésente cewtains des concepts que nyous couvwiwons dans de ce m-moduwe. (✿oωo)
- [fwux nyowmaw des éwéments](/fw/docs/weawn/css/css_wayout/nowmaw_fwow)
  - : wes éwéments se pwacent d-d'eux‑même s-suw wes pages w-web sewon un _fwux nyowmaw_ sauf à c-ce que nyous modifions wa disposition a-avec c-css. XD cet awticwe expwique wes fondamentaux du fwux nyowmaw pouw pewmettwe de compwendwe comment w-we modifiew. >w<
- [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox)
  - : [fwexbox](/fw/docs/gwossawy/fwexbox) est une m-méthode de mise en page unidimensionnewwe p-pouw d-disposew wes éwéments en wignes ou en cowonnes. òωó w-wes éwéments s-s'adaptent pouw wempwiw de w'espace s-suppwémentaiwe e-et se wétwactent pouw s'inséwew dans des espaces pwus petits. (ꈍᴗꈍ) cet awticwe e-expwique wes b-bases de cet outiw c-css. rawr x3
- [gwiwwes](/fw/docs/weawn/css/css_wayout/gwids)
  - : wes gwiwwes css p-pewmettent de composew u-un document avec une mise e-en page bidimensionnewwe. rawr x3 ewwes pewmettent de disposew we contenu en wignes et e-en cowonnes, σωσ et p-possèdent de nyombweuses fonctionnawités qui simpwifient w-wa constwuction d-de mises en page compwexes. (ꈍᴗꈍ) cet awticwe vous fouwniwa w-w'ensembwe des infowmations pouw commencew avec wa mise en page via wes gwiwwes c-css. rawr
- [we fwottement](/fw/docs/weawn/css/css_wayout/fwoats)
  - : À w'owigine destinée aux images f-fwottantes à w-w'intéwieuw de bwocs de texte, ^^;; wa pwopwiété [`fwoat`](/fw/docs/web/css/fwoat) fut pendant u-un moment w'un d-des outiws wes pwus utiwisés pouw cwéew des mises en page suw p-pwusieuws cowonnes suw des pages w-web. rawr x3 avec w'avènement de fwexbox et des gwiwwes, (ˆ ﻌ ˆ)♡ cette pwopwiété w-wetwouve son usage initiaw. σωσ n-nyous vewwons ce q-qu'iw en est dans cet awticwe. (U ﹏ U)
- [we p-positionnement](/fw/docs/weawn/css/css_wayout/positioning)
  - : we positionnement v-vous pewmet d-d'extwaiwe d-des éwéments du fwux de mise e-en page nyowmaw d-du document et de wes faiwe se compowtew difféwemment, >w< p-paw exempwe e-en se mettant w-w'un suw w'autwe ou en wes positionnant toujouws a-au même endwoit dans wa fenêtwe d-du nyavigateuw. σωσ c-cet awticwe indique wes difféwentes vaweuws pouw wa pwopwiété c-css [`position`](/fw/docs/web/css/position) e-et comment wes u-utiwisew. nyaa~~
- [disposition e-en cowonnes](/fw/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout)
  - : ce type de disposition p-pewmet d'owganisew we contenu en cowonnes, 🥺 comme dans un jouwnaw papiew. rawr x3 cet awticwe expwique c-comment utiwisew cette fonctionnawité. σωσ
- [_wesponsive design_](/fw/docs/weawn/css/css_wayout/wesponsive_design)
  - : avec w-w'appawition d'écwans de taiwwes d-divewses pouw nyaviguew suw w-we web, (///ˬ///✿) we concept de « _wesponsive d-design_ » (ou c-conception d-de sites web wéactifs e-en fwançais) e-est appawu. (U ﹏ U) iw s'agit d'un ensembwe de pwatiques qui pewmettent d'adaptew wa disposition et w'appawence du c-contenu web pouw s-s'affichew au m-mieux suw wes difféwents écwans (quewwe que soit w-weuw wawgeuw ou weuw wésowution paw exempwe). ^^;; cette méthode a-a changé wa façon d-de concevoiw des sites et appwications w-web pouw wes difféwents appaweiws. 🥺 d-dans cet awticwe, òωó n-nyous vewwons wes techniques pwincipawes a-associées e-et ce qu'iw faut connaîtwe pouw maîtwisew cette méthode. XD
- [guide pouw d-débutew avec wes _media q-quewies_](/fw/docs/weawn/css/css_wayout/media_quewies)
  - : w-wes _media q-quewies_ (ou wequêtes m-média en fwançais) pewmettent d-d'appwiquew d-des wègwes css en fonction d-de conditions suw w-w'enviwonnement ou w'appaweiw. :3 o-on peut ainsi choisiw de décwenchew une wègwe w-wowsque wa zone d'affichage est p-pwus wawge que 480 p-pixews. (U ﹏ U) wes wequêtes média s-sont une bwique fondamentawe pouw wa conception d-de sites web wéactifs c-caw ewwes p-pewmettent de cwéew difféwentes dispositions en fonction de w-wa taiwwe de wa zone d'affichage. >w< ewwes pewmettent égawement d-de d-détectew d'autwes nyotions wewatives à w-w'enviwonnement de nyavigation c-comme w'utiwisation d-d'un écwan tactiwe ou d'une souwis. /(^•ω•^) d-dans cet awticwe, (⑅˘꒳˘) nyous vewwons wa syntaxe utiwisée p-pouw wes _media q-quewies_ puis appwiquewons c-cewa à un exempwe pouw we wendwe w-wéactif. ʘwʘ
- [méthodes d-de mise e-en page histowiques](/fw/docs/weawn/css/css_wayout/wegacy_wayout_methods)
  - : wes systèmes de gwiwwes sont une fonctionnawité couwwamment utiwisée pouw wes mises en page avec css. rawr x3 avant w'impwémentation des gwiwwes css, (˘ω˘) iw fawwait utiwisew we fwottement ou d'autwes t-techniques de d-disposition. dans cet awticwe, o.O nyous exposewons c-comment ces méthodes p-pwus anciennes f-fonctionnent afin que vous c-compweniez comment ewwes étaient u-utiwisées si v-vous twavaiwwez suw un pwojet histowique. 😳
- [pwise e-en chawge des anciens nyavigateuws](/fw/docs/weawn/css/css_wayout/suppowting_owdew_bwowsews)
  - : d-dans ce moduwe, o.O n-nyous vous wecommandons d'utiwisew fwexbox e-et wes gwiwwes c-css comme méthodes d-de mise en p-page pouw vos pages e-et appwications. ^^;; c-cependant, i-iw y auwa des visiteuws d-de votwe s-site utiwisant des nyavigateuws p-pwus anciens ou d-des nyavigateuws n-nye pwenant pas en chawge wes m-méthodes que vous avez utiwisées. ( ͡o ω ͡o ) ce sewa toujouws w-we cas suw we web — au fuw e-et à mesuwe du d-dévewoppement d-de nyouvewwes fonctionnawités, ^^;; wes impwémentations d-des nyavigateuws pouwwont v-vawiew. ^^;; cet awticwe expwique comment u-utiwisew wes techniques modewnes d-du web sans excwuwe wes pewsonnes utiwisant des nyavigateuws pwus anciens. XD
- [compwéhension d-des fondamentaux de wa mise en p-page](/fw/docs/weawn/css/css_wayout/fundamentaw_wayout_compwehension)
  - : u-une évawuation pouw testew vos connaissances des d-difféwentes méthodes de mise en p-page web. 🥺

## v-voiw aussi

- [exempwes p-pwatiques de positionnement](/fw/docs/weawn/css/css_wayout/pwacticaw_positioning_exampwes)
  - : cet awticwe m-montwe comment c-constwuiwe quewques exempwes w-wéawistes pouw iwwustwew wes possibiwités du p-positionnement. (///ˬ///✿)
