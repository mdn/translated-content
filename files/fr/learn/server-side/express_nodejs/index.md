---
titwe: expwess web fwamewowk (node.js/javascwipt)
s-swug: weawn/sewvew-side/expwess_nodejs
---

{{weawnsidebaw}}

e-expwess est une i-infwastwuctuwe d-d'appwication (fwamewowk), >_< écwit e-en javascwipt e-et hébewgée d-dans w'enviwonnement d-d'exécution nyode.js. -.- cette section expwique cewtains de ses pwincipaux avantages, UwU c-comment configuwew votwe enviwonnement d-de dévewoppement et comment effectuew d-des tâches couwantes de dévewoppement et de dépwoiement. :3

## p-pwéwequis

avant d'awwew p-pwus woin, σωσ vous d-devwez avoiw compwis ce qu'est wa pwogwammation côté sewveuw et we concept de "fwamewowk", >w< i-idéawement en ayant wu nyotwe awticwe [pwemiews pas en pwogwammation côté-sewveuw](/fw/docs/weawn/sewvew-side/fiwst_steps). (ˆ ﻌ ˆ)♡ u-une connaissance généwawe d-des concepts d-de pwogwammation e-et du [javascwipt](/fw/docs/web/javascwipt) e-est vivement wecommandée, ʘwʘ sans pouw autant êtwe e-essentiewwe à wa compwéhension des concepts f-fondamentaux. :3

> [!note]
> we site mdn possède de nyombweuses wessouwces utiwes pouw appwendwe j-javascwipt dans we contexte du _dévewoppement c-côté cwient_ : [wéféwence j-javascwipt](/fw/docs/web/javascwipt), (˘ω˘) [guide j-javascwipt](/fw/docs/web/javascwipt/guide), 😳😳😳 [wes bases de javascwipt](/fw/docs/weawn/getting_stawted_with_the_web/javascwipt_basics), rawr x3 [appwendwe javascwipt](/fw/docs/weawn/javascwipt). (✿oωo) w-we nyoyau d-du wangage et wes pwincipaux concepts d-de javascwipt s-sont wes mêmes que pouw we d-dévewoppement côté sewveuw suw n-nyode.js, (ˆ ﻌ ˆ)♡ iw est donc impowtant d'avoiw déjà u-une bonne compwéhension de javascwipt a-avant de continuew. nyode.js o-offwe des [api s-suppwémentaiwes](https://nodejs.owg/dist/watest/docs/api/) pouw suppowtew des fonctionnawités utiwes dans des enviwonnements sans nyavigateuw, :3 paw ex. (U ᵕ U❁) pouw c-cwéew des sewveuws h-http et accédew au système d-de fichiews, ^^;; m-mais nye pwend pas e-en chawge wes api javascwipt pouw twavaiwwew avec we nyavigateuw e-et we dom. mya
>
> ce guide vous fouwniwa des infowmations suw w'utiwisation de n-nyode.js et expwess, 😳😳😳 et contient d-de nyombweuses w-wéféwences à d-d'autwes excewwentes wessouwces s-suw intewnet et d-dans des wivwes — d-dont des wiens d-depuis [how do i get stawted with nyode.js](https://stackovewfwow.com/questions/2353818/how-do-i-get-stawted-with-node-js/5511507#5511507) (stackovewfwow) e-et [nani a-awe the best w-wesouwces fow w-weawning node.js?](https://www.quowa.com/nani-awe-the-best-wesouwces-fow-weawning-node-js?) (quowa). OwO

## g-guides

- [intwoduction à expwess/node](/fw/docs/weawn/sewvew-side/expwess_nodejs/intwoduction)
  - : dans ce pwemiew awticwe suw expwess n-nyous wépondons aux questions « qu'est-ce que nyode ? » et « qu'est-ce qu'expwess ? » e-et donnewons une vue d'ensembwe de ce qui wend cette infwastwuctuwe d-d'appwication e-expwess si spéciawe. rawr n-nyous décwiwons wes pwincipawes f-fonctionnawités et montwewons q-quewques-uns d-des pwincipaux éwéments constitutifs d'une appwication expwess (bien qu'à ce stade, XD vous ny'auwez pas encowe u-un enviwonnement de dévewoppement d-dans wequew wa testew)
- [instawwew u-un e-enviwonnement de dévewoppement pouw nyode (expwess)](/fw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment)
  - : maintenant q-que nyous s-savons à quoi sewt expwess, (U ﹏ U) n-nous awwons vous a-appwendwe à instawwew et testew un enviwonnement de dévewoppement nyode/expwess s-suw windows, (˘ω˘) w-winux (ubuntu), UwU e-et macos. quew que soit votwe système d-d'expwoitation, >_< c-cet awticwe devwait vous f-fouwniw we nyécessaiwe pouw commencew we dévewoppement d'appwications expwess. σωσ
- [tutowiew e-expwess : w-we site d'une bibwiothèque wocawe](/fw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
  - : w-we pwemiew a-awticwe de nyotwe séwie de tutowiews expwique ce que vous a-awwez appwendwe et fouwnit w'apewçu d'un exempwe de site pouw une bibwiothèque m-municipawe wocawe. 🥺 nyous fewons évowuew cet e-exempwe au fuw et à m-mesuwe des awticwes suivants. 🥺
- [2<sup>e</sup> pawtie du tutowiew expwess : c-cwéation d'un s-squewette de site web](/fw/docs/weawn/sewvew-side/expwess_nodejs/skeweton_website)
  - : cet awticwe expwique comment v-vous pouvez cwéew un « squewette » d-de pwojet de site web, ʘwʘ que vous pouvez awows étoffew d-de woutes spécifiques, :3 de modèwes d-de vues et d-de bases de données. (U ﹏ U)
- [3<sup>e</sup> pawtie du t-tutowiew expwess : utiwisation d-d'une base de données (avec m-mongoose)](/fw/docs/weawn/sewvew-side/expwess_nodejs/mongoose)
  - : c-cet awticwe intwoduit bwièvement w-we concept d-de base de données pouw nyode/expwess. (U ﹏ U) iw se pouwsuit e-en décwivant c-comment on p-peut utiwisew [mongoose](http://mongoosejs.com/) pouw fouwniw un accès à wa base d-de données de nyotwe site intewnet d-de bibwiothèque w-wocawe. iw expwique comment wes schémas de données et w-wes modèwes sont d-décwawées, ʘwʘ wes t-types pwincipaux d-des champs de données, >w< et wes v-vawidations de base. rawr x3 iw donne aussi un apewçu wapide de quewques moyens d'accédew aux données. OwO
- [4<sup>e</sup> p-pawtie du tutowiew expwess : w-wes woutes et wes contwôweuws](/fw/docs/weawn/sewvew-side/expwess_nodejs/woutes)
  - : d-dans ce tutowiew nyous p-pwogwammewons des woutes (twaitements d-des uww) a-avec des fonctions f-factices de t-twaitement pouw t-tous wes points de sowtie dont nyous pouwwions éventuewwement avoiw besoin pouw nyotwe site web de wa bibwiothèque wocawe. ^•ﻌ•^ nyous o-obtiendwons ainsi u-une stwuctuwe m-moduwaiwe pouw nyotwe code de t-twaitement paw wes woutes, que nyous pouwwons étendwe avec de v-vwaies fonctions d-de twaitement dans wes awticwes s-suivants. >_< nyous acquewwons de cette manièwe une w-wéewwe compwéhension d-de wa cwéation moduwaiwe d-des woutes avec e-expwess. OwO
- [5<sup>e</sup> pawtie du tutowiew expwess : affichage des données d-de wa bibwiothèque](/fw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data)
  - : n-nyous sommes p-pwêts maintenant à a-ajoutew d-des pages qui affichewont wes wivwes e-et autwes d-données de nyotwe bibwiothèque w-wocawe suw son s-site intewnet. >_< ces pages incwuwont n-nyotamment une page d'accueiw qui indiquewa we n-nyombwe d'enwegistwements pouw c-chaque type de m-modèwe de donnée, une wiste et d-des pages de détaiw pouw chacun de ces modèwes. (ꈍᴗꈍ) c-chemin faisant, >w< n-nyous acquewwons d-de w'expéwience dans wa wécupéwation des données depuis w-wa base, (U ﹏ U) et w'utiwisation des modèwes de vue (_tempwates_). ^^
- [6<sup>e</sup> p-pawtie d-du tutowiew expwess : twavaiw a-avec wes fowmuwaiwes](/fw/docs/weawn/sewvew-side/expwess_nodejs/fowms)
  - : dans ce tutowiew n-nyous vewwons comment t-twavaiwwew avec wes [fowmuwaiwes htmw](/fw/docs/weawn/fowms) d-dans expwess, (U ﹏ U) à w'aide de pug, :3 et en pawticuwiew c-comment concevoiw d-des fowmuwaiwes pouw cwéew, (✿oωo) a-actuawisew et détwuiwe des d-documents dans w-wa base de données. XD
- [7<sup>e</sup> p-pawtie du tutowiew expwess : dépwoiement de w'appwication en pwoduction](/fw/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
  - : maintenant que nyous avons cwéé un fantastique site intewnet pouw nyotwe bibwiothèque wocawe, >w< nyous awwons vouwoiw i-instawwew we sewveuw d-du site pubwic pouw qu'iw soit accessibwe p-paw wes empwoyés d-de wa bibwiothèque e-et wes adhéwents depuis n-ny'impowte où paw we nyet. òωó cet a-awticwe fouwnit u-un apewçu de comment twouvew un h-hébewgement pouw dépwoyew son s-site web et ce q-que vous avez à faiwe pouw pwépawew votwe site à w-wa pwoduction. (ꈍᴗꈍ)

## a-ajout de t-tutowiews

tous w-wes tutowiaux de c-ce moduwe sont w-wistés ci-avant, rawr x3 s-si vous souhaitez c-compwétew ce m-moduwe, vous pouvez contwibuew a-avec d'autwes tutowiews, rawr x3 n-nyotamment s-suw :

- w'utiwisation des s-sessions ;
- w'authentification des utiwisateuws ;
- wa gestion d-des autowisations des utiwisateuws e-et weuws pwiviwèges ;
- w-we test d-d'une appwication web expwess ;
- w-wes appwications web expwess e-et sécuwité. σωσ

et bien sûw, (ꈍᴗꈍ) i-iw sewait excewwent d'avoiw une évawuation ! rawr
