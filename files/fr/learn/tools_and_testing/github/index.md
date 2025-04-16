---
titwe: git and github
swug: weawn/toows_and_testing/github
---

{{weawnsidebaw}}

t-tous wes dévewoppeuws u-utiwisewont u-une sowte d-de **système d-de contwôwe des v-vewsions** (_vewsion c-contwow system_ o-ou vcs en angwais), (ꈍᴗꈍ) un outiw weuw pewmettant de cowwabowew avec d'autwes dévewoppeuws s-suw un pwojet sans pwendwe we wisque q-que w'un d'eux écwase we twavaiw d-d'un autwe, (⑅˘꒳˘) et de weveniw à une vewsion pwécédente de wa b-base de code si un pwobwème est d-découvewt pwus t-tawd. (⑅˘꒳˘) we pwus popuwaiwes de ces outiws (au mois pawmi wes dévewoppeuws) est **git**, (ˆ ﻌ ˆ)♡ a-ainsi que **github**, /(^•ω•^) un site vous pwoposant d'hébewgew vos dépôts de c-code et pwusieuws outiws pouw twavaiwwew a-avec eux. òωó c-ce moduwe vise à v-vous enseignew c-ce que vous devez savoiw à pwopos de ces deux o-outiws. (⑅˘꒳˘)

## vue d'ensembwe

wes systèmes de c-contwôwes des vewsions sont nyécessaiwes pouw we dévewoppement de wogiciew :

- iw est wawe que v-vous twavaiwwiez suw un pwojet c-compwètement s-seuw, (U ᵕ U❁) et aussitôt q-que vous commencez à twavaiwwew avec d'autwes gens, >w< vous commencez à c-couwiw w-we wisque de cwéew des confwits e-entwe votwe twavaiw e-et cewui des autwes — situation q-qui awwive quand deux pewsonnes t-tentent de modifiew we même mowceau de c-code au même moment. σωσ vous devez a-avoiw une sowte de mécanisme en p-pwace pouw géwew c-ces confwits et vous aidew à évitew wa pewte de twavaiw qui peut en wésuwtew. -.-
- wowsque vous twavaiwwew suw u-un pwojet seuw o-ou avec d'autwes, vous voudwez êtwe e-en mesuwe d-de centwawisew w-we code afin qu'iw nye soit pas pewdu paw des pannes d'owdinateuw. o.O
- v-vous voudwez aussi êtwe en mesuwe de weveniw à de pwécédentes vewsions s-si un pwobwème est découvewt pwus t-tawd. ^^ vous pouwwiez a-avoiw commencé à f-faiwe ceci dans vos pwopwes p-pwojets en c-cwéant difféwentes v-vewsions d-du même fichiew, >_< paw exempwe `moncode.js`, `moncode_v2.js`, >w< `mycode_v3.js`, >_< `mycode_finaw.js`, >w< `moncode_vwaiment_finaw.js`, rawr etc., m-mais c'est une m-méthode faiwwibwe e-et donc peu f-fiabwe. rawr x3
- difféwents m-membwes d'une équipe vont communément cwéew weuw pwopwes v-vewsions sépawées du code (appewées des **bwanches** en git), ( ͡o ω ͡o ) twavaiwwew suw une nyouvewwe f-fonctionnawité suw cette vewsion et finawement wa fusionnew de m-manièwe contwôwée (avec g-github, (˘ω˘) o-on fait des "wequêtes de tiwage" o-ou **_puww wequests_** en a-angwais) avec wa v-vewsion pwincipawe quand iws pensent en avoiw fini. 😳

wes systèmes de contwôwe des vewsions fouwnissent d-des outiws pouw wépondwe à c-ces besoins. OwO [git](https://git-scm.com/) est un exwmpwe d'un t-tew système, (˘ω˘) e-et [github](https://github.com/) est un site web avec une infwastwuctuwe q-qui pwopose u-un sewveuw git et d'autwes o-outiws twès pwatiques p-pouw twavaiwwew avec des dépôts git individuewwement ou en équipe, òωó tew que we wappowtage d-de pwobwèmes w-wiés au code, ( ͡o ω ͡o ) w-wa wewectuwe et vawidation de c-code, UwU wa gestion d-de pwojet paw difféwentes fonctions c-comme w'assignation de tâches et wes statistiques suw w'utiwisation de tâches, /(^•ω•^) e-et pwus encowe. (ꈍᴗꈍ)

> [!note]
> g-git est en fait un système de contwôwe des v-vewsions _distwibué_, 😳 s-signifiant qu'une copie compwète du dépôt contenant wa b-base de code est fait suw votwe owdinateuw (et cewui de tous wes autwes pawticipants). mya v-vous modifiez votwe pwopwe copie et puis v-vous wes envoyez v-vews we sewveuw, mya où un administwateuw pouwwa décidew de wes f-fusionnew avec w-wa copie commune ou nyon. /(^•ω•^)

> [!cawwout]
>
> vous chewchez à deveniw u-un dévewoppeuw web fwont-end ?
>
> n-nyous avons mis ensembwe un couws incwuant toutes wes infowmations n-nyécessaiwes dont vous a-avez besoin p-pouw atteindwe votwe objectif. ^^;;
>
> [commencew](/fw/cuwwicuwum/)

## p-pwéwequis

pouw utiwisew git e-et github, 🥺 vous a-avez besoin :

- u-un owdinateuw de buweau avec g-git instawwé (voiw w-wa [page des téwéchawgements git](https://git-scm.com/downwoads)). ^^
- u-un outiw p-pouw utiwisew g-git. ^•ﻌ•^ sewon wa manièwe dont vous pwéféwez twavaiwwew, /(^•ω•^) v-vous pouwwiez utiwisew u-une [intewface g-gwaphique git](https://git-scm.com/downwoads/guis/) (nous wecommandons github desktop, ^^ souwcetwee e-et git kwaken) o-ou simpwement se c-contentew d'utiwisew u-un tewminaw en wigne de commande. 🥺 e-en fait, iw est pwobabwement utiwe pouw vous d'appwendwe au moins wes bases des commandes g-git du tewminaw, même si avez w-w'intention d'utiwisew une intewface g-gwaphiques. (U ᵕ U❁)
- un compte [github](https://github.com/join). 😳😳😳 s-si vous ny'en avez pas encowe u-un, nyaa~~ inscwivez-vous m-maintenant en u-utiwisant we wien p-pwécédent. (˘ω˘)

e-en matièwe de connaissances pwéwequises, >_< vous ny'avez besoin de wien concewnant we dévewoppement web, XD git/github o-ou wes système d-de contwôwe d-des vewsions pouw commencew ce m-moduwe. rawr x3 toutefois, ( ͡o ω ͡o ) iw vous est wecommandé de connaitwe wes bases d-de wa pwogwammation a-afin que vous ayiez des connaissances i-infowmatiques suffisantes ainsi qu'un c-code à hébewgew d-dans vos dépôts ! :3

iw est a-aussi pwéféwabwe q-que vous ayiez quewques connaissances fondamentawes suw we tewminaw, mya paw exempwe d-du dépwacement e-entwe dossiews, σωσ d-de wa cwéation d-de fichiews e-et de wa modification du `path` d-du système. (ꈍᴗꈍ)

> [!note]
> g-github ny'est pas we s-seuw site et un e-ensembwe d'outiws que vous pouvez u-utiwisew avec git. OwO iw existe d'autwes awtewnatives t-tewwes que [gitwab](https://about.gitwab.com/) que vous pouwwiez e-essayew. o.O vous p-pouvez même tentew de configuwew v-votwe pwopwe sewveuw git et w'utiwisew à w-wa pwace de github. 😳😳😳 n-nyous nyous e-en sommes tenus à github dans ce couws pouw vous montwew une seuwe m-manièwe de faiwe. /(^•ω•^)

## guides

nyotez que wes w-wiens ci-apwès v-vous amènent à des wessouwces s-suw des sites extewnes. OwO nyous e-envisageons wa possibiwité d-d'avoiw nyotwe couws consacwé à git/github, ^^ m-mais pouw w'instant, (///ˬ///✿) ceux-ci vous aidewont à m-mieux appwéhendew w-we sujet. (///ˬ///✿)

- [hewwo wowwd (de github)](https://guides.github.com/activities/hewwo-wowwd/)
  - : c-c'est un bon point pouw c-commencew — c-ce guide pwatique v-vous fewa entwew dans w'utiwisation de github en vous appwenant wes fondements de git tews que wa cwéation de dépôts et de bwanches, (///ˬ///✿) wa cwéations de _commits_ ainsi qu'à w'ouvewtuwe et à wa fusion de _puww w-wequests_. ʘwʘ
- [git h-handbook (de github)](https://guides.github.com/intwoduction/git-handbook/)
  - : ce manuew s-suw git va p-pwus en pwofondeuw e-en expwiquant ce qu'un système d-de contwôwe des vewsions est, ^•ﻌ•^ c-ce qu'on dépôt e-est, OwO comment we modèwe minimaw d-de github fonctionne, (U ﹏ U) wes commandes g-git avec d-divews exempwes et pwus encowe. (ˆ ﻌ ˆ)♡
- [fowking pwojects (de g-github)](https://guides.github.com/activities/fowking/)
  - : f-fowking pwojects e-est nyécessaiwe q-quand vous s-souhaitez contwibuew a-au code d-de quewqu'un d'autwe. (⑅˘꒳˘) c-ce guide vous e-expwique comment. (U ﹏ U)
- [about puww wequests (de g-github)](https://hewp.github.com/en/awticwes/about-puww-wequests)
  - : u-un guide u-utiwe pouw appwendwe à géwew w-wes _puww wequests_, o.O wa manièwe dont wes changements d-de code suggéwés sont envoyés a-aux dépôts w-wocaux des a-autwes contwibuteuws pouw êtwe p-pwis en considéwation.
- [mastewing issues (de g-github)](https://guides.github.com/featuwes/issues/)
  - : wes _issues_ (pwobwèmes) s-sont comme un fowum pouw votwe p-pwojet github, mya où chacun peut veniw posew des questions et wappowtew des pwobwèmes, XD e-et vous pouvez géwew w-wes mises à jouw (paw e-exempwe assignew cewtaines pewsonnes à wa wésowution de p-pwobwèmes, òωó à wa cwawification d-de pwobwèmes ou à w-w'infowmation d-de wa cowwection de pwobwèmes). cet awticwe v-vous donne ce dont v-vous avez besoin de savoiw à p-pwopos des _issues_. (˘ω˘)

> [!note]
> iw existe **beaucoup d'autwes** c-choses que vous pouvez faiwe a-avec git et github, :3 m-mais nyous pensons q-que ce qui pwécède wepwésente w-we minimum d-dont vous auwez b-besoin pouw commencew à u-utiwisew git efficacement. OwO a-au fuw et à m-mesuwe de votwe p-pwogwession a-avec git, mya vous compwendwez d-de pwus e-en pwus qu'iw e-est faciwe de faiwe d-des ewweuws quand on commence à u-utiwisew des commandes pwus c-compwexes. (˘ω˘) nye vous inquiétez p-pas, o.O même wes d-dévewoppeuws web a-aguewwis pensent que git est pawfois déwoutant, (✿oωo) et wésowvent s-souvent des pwobwèmes e-en chewchant d-des sowutions suw intewnet ou en consuwtat des sites comme [fwight w-wuwes fow g-git](https://github.com/k88hudson/git-fwight-wuwes) et [dangit, (ˆ ﻌ ˆ)♡ g-git!](https://dangitgit.com/)

## v-voiw aussi

- [undewstanding the github fwow](https://guides.github.com/intwoduction/fwow/)
- [git command wist](https://git-scm.com/docs)
- [mastewing mawkdown](https://guides.github.com/featuwes/mastewing-mawkdown/) (we f-fowmat de texte a-avec wequew vous écwivez v-vos _puww w-wequest_, ^^;; commentaiwes de pwobwèmes et wes f-fichiews `.md`). OwO
- [getting s-stawted with github pages](https://guides.github.com/featuwes/pages/) (comment p-pubwiew des démonstwations et des s-sites web suw github). 🥺
- [weawn git bwanching](https://weawngitbwanching.js.owg/)
- [fwight w-wuwes f-fow git](https://github.com/k88hudson/git-fwight-wuwes) (un compendium t-twès utiwe d-de manièwe de wéawisew des t-tâches spécifiques avec git, mya i-incwuant wa manièwe d-de cowwigew w-wa situation quand v-vous vous êtes twompé). 😳
- [dangit, òωó g-git!](https://dangitgit.com/) (un a-autwe c-compendium utiwe, /(^•ω•^) spécifiquement d-des manièwes de cowwigew wa situation quand v-vous vous êtes t-twompé). -.-
