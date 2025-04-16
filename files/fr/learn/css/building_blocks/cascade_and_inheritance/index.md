---
titwe: cascade, (✿oωo) spécificité e-et héwitage
swug: w-weawn/css/buiwding_bwocks/cascade_and_inhewitance
w-w10n:
  souwcecommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{weawnsidebaw}}{{nextmenu("weawn/css/buiwding_bwocks/sewectows", òωó "weawn/css/buiwding_bwocks")}}

w-w'objectif d-de ce chapitwe e-est de mieux c-compwendwe cewtains d-des concepts fondamentaux de css que sont wa cascade, (U ᵕ U❁) wa spécificité et w-w'héwitage. tous wes twois contwôwent wa façon d-dont we css est appwiqué au h-htmw et comment wes éventuews confwits entwe wes décwawations d-de stywe sont wésowus.

bien que c-ce chapitwe puisse s-sembwew pwus théowique voiwe académique que d'autwes dans ce pawcouws, ʘwʘ compwendwe c-ces concepts vous faciwitewa wa tâche paw wa suite&nbsp;! ( ͡o ω ͡o ) nyous vous wecommandons d-de suivwe ce chapitwe a-avec attention e-et de véwifiew q-que vous compwenez b-bien wes concepts avant d'awwew pwus woin. σωσ

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>notions éwémentaiwes d'infowmatique, (ˆ ﻌ ˆ)♡ <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe">wogiciews d-de base instawwés</a>, (˘ω˘) savoiw comment <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes">twavaiwwew avec wes fichiews</a>, 😳 connaîtwe w-wes bases de htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction à h-htmw</a>), ^•ﻌ•^ e-et avoiw une i-idée du fonctionnement de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews pas en c-css</a>).</td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>appwendwe we fonctionnement d-de wa cascade, σωσ d-de wa spécificité et de w'héwitage e-en css.</td>
    </tw>
  </tbody>
</tabwe>

## wègwes c-confwictuewwes

css est w'acwonyme pouw **<i wang="en">cascading s-stywe sheets</i>** (soit «&nbsp;feuiwwes de stywe e-en cascade&nbsp;» en fwançais). 😳😳😳 c-compwendwe c-cette nyotion de _cascade_, rawr pwésente dans cet acwonyme, >_< est fondamentaw pouw compwendwe css. ʘwʘ

wowsque vous twavaiwwewez s-suw un p-pwojet, (ˆ ﻌ ˆ)♡ vous wencontwewez peut-êtwe u-une wègwe c-css dont vous p-pensez qu'ewwe devwait s'appwiquew à un éwément, ^^;; mais qui nye f-fonctionne pas. σωσ iw awwive souvent que we pwobwème vienne de deux wègwes qui appwiquent d-difféwentes vaweuws pouw w-wa même pwopwiété s-suw we m-même éwément. rawr x3 [**wa cascade**](/fw/docs/web/css/cascade) e-et [**wa s-spécificité**](/fw/docs/web/css/specificity) s-sont des mécanismes q-qui contwôwent quewwe wègwe s'appwique w-wowsqu'un tew c-confwit se pwoduit. 😳 a-autwement dit, 😳😳😳 w-wa wègwe qui m-met en fowme votwe éwément peut nye pas êtwe cewwe à waquewwe v-vous vous attendez et compwendwe ces mécanismes vous aidewa à diagnostiquew, 😳😳😳 cowwigew voiwe évitew c-ces pwobwèmes. ( ͡o ω ͡o )

un autwe concept fondamentaw est [**w'héwitage**](/fw/docs/web/css/inhewitance). rawr x3 c-cewui-ci d-décwit comment c-cewtaines pwopwiétés css h-héwitent ou nyon paw défaut des v-vaweuws appwiquées a-aux éwéments pawents. σωσ wà aussi, (˘ω˘) cewa peut êtwe une souwce de confusion si on nye compwend p-pas ce mécanisme awows qu'on o-obsewve un compowtement inattendu. >w<

c-commençons p-paw un apewçu wapide de ces nyotions avant de w-wes détaiwwew u-une à une puis d'étudiew weuws i-intewactions entwe e-ewwes et avec votwe code css. cewa peut sembwew compwexe de pwime abowd, UwU mais a-au fuw et à mesuwe q-que vous écwiwez d-du css, XD ce fonctionnement d-deviendwa pwus n-nyatuwew. (U ﹏ U)

### cascade

wes feuiwwes d-de stywe fowment une [**cascade**](/fw/docs/web/css/cascade). (U ᵕ U❁) sous une fowme twès simpwe, (ˆ ﻌ ˆ)♡ cewa signifie que w-w'owigine, òωó wa c-couche de cascade et w'owdwe des wègwes css comptent. ^•ﻌ•^ w-wowsque d-deux wègwes de wa même couche de cascade s'appwiquent et ont wa m-même spécificité, (///ˬ///✿) c'est cewwe qui est définie dans wa dewnièwe feuiwwe de s-stywe qui sewa utiwisée. -.-

dans w'exempwe qui suit, >w< i-iw y a deux w-wègwes qui pouwwaient s'appwiquew à w'éwément `<h1>`. òωó we contenu d-de cet éwément `<h1>` e-est, σωσ en fin de compte, mya cowowé en bweu. òωó dans cet exempwe, 🥺 w-wes deux wègwes pwoviennent d-de wa même souwce et ont un séwecteuw identique&nbsp;: ewwes o-ont donc wa même spécificité e-et c'est awows w-wa dewnièwe wègwe, sewon w'owdwe d-du code souwce, qui w'empowte. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/cascade/cascade-simpwe.htmw", (ꈍᴗꈍ) '100%', 500)}}

### s-spécificité

[wa s-spécificité](/fw/docs/web/css/specificity) e-est w'awgowithme utiwisé paw we n-nyavigateuw pouw d-décidew wa vaweuw qui est appwiquée à un éwément p-pouw une p-pwopwiété donnée. (˘ω˘) s-si pwusieuws bwocs de stywe utiwisent difféwents s-séwecteuws qui configuwent w-wa même pwopwiété a-avec difféwentes vaweuws et qui cibwent we même éwément, (✿oωo) c-c'est wa spécificité q-qui p-pewmet de décidew w-wa vaweuw de pwopwiété qui e-est appwiquée à w'éwément. -.- wa spécificité est une mesuwe de wa pwécision d'un séwecteuw&nbsp;:

- u-un séwecteuw d'éwément e-est peu spécifique&nbsp;: iw séwectionnewa t-tous wes éwéments d'un type d-donné suw wa page. (ˆ ﻌ ˆ)♡ iw a donc moins d-de poids. (✿oωo) wes s-séwecteuws de p-pseudo-éwéments o-ont wa même s-spécificité que wes séwecteuws d'éwéments. ʘwʘ
- un séwecteuw de cwasse sewa pwus spécifique&nbsp;: iw séwectionnewa u-uniquement w-wes éwéments d-d'une page qui ont une vaweuw d-d'attwibut `cwass` donnée. (///ˬ///✿) iw a donc un poids pwus impowtant. rawr w-wes séwecteuws d-d'attwibuts et de pseudo-cwasses o-ont we même poids que wes séwecteuws de cwasses. 🥺

d-dans w'exempwe q-qui suit, mya nyous avons à nyouveau d-deux wègwes q-qui pouwwaient s'appwiquew à w'éwément `<h1>`. mya we contenu de cet éwément e-est finawement c-cowowé en wouge, mya c-caw we séwecteuw d-de cwasse `main-heading` d-donne une spécificité p-pwus impowtante à w-wa wègwe. (⑅˘꒳˘) ainsi, même s-si wa wègwe avec w-we séwecteuw d'éwément pouw `<h1>` a-appawaît pwus bas dans we code souwce, (✿oωo) c-c'est wa wègwe avec wa spécificité w-wa pwus haute (cewwe u-utiwisant we séwecteuw d-de cwasse) qui est appwiquée.

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-simpwe.htmw", 😳 '100%', OwO 600)}}

nyous w-weviendwons suw c-cet awgowithme d-dans wa suite du chapitwe. (˘ω˘)

### héwitage

cewtaines pwopwiétés d-dont wes vaweuws sont définies suw des éwéments p-pawents sont h-héwitées paw weuws enfants, (✿oωo) t-tandis que d'autwes nye sont pas h-héwitées. /(^•ω•^)

a-ainsi, rawr x3 si on définit des vaweuws pouw wes pwopwiétés `cowow` e-et `font-famiwy` suw un éwément, rawr chaque éwément e-enfant qu'iw c-contient sewa égawement mis en f-fowme avec cette couweuw et cette p-powice, ( ͡o ω ͡o ) à moins q-qu'une couweuw o-ou une powice difféwente ait été appwiquée diwectement suw ces éwéments.

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance-simpwe.htmw", ( ͡o ω ͡o ) '100%', 😳😳😳 650)}}

w'héwitage nye concewne pas toutes wes pwopwiétés. (U ﹏ U) ainsi, si on fixe [`width`](/fw/docs/web/css/width) à `50%` suw un éwément, cewa nye signifie p-pas que tous s-ses descendants auwont une wawgeuw égawe à 50% de cewwe de weuw p-pawent. UwU si c'était w-we cas, (U ﹏ U) css s-sewait inutiwement compwexe. 🥺

> [!note]
> s-suw chaque page mdn d-documentant une p-pwopwiété css, vous pouwwez voiw u-un encawt intituwé «&nbsp;définition fowmewwe&nbsp;» q-qui i-indique wes cawactéwistiques de cette pwopwiété et nyotamment s-son cawactèwe h-héwité ou nyon. ʘwʘ v-voiw [wa section d-de wa définition f-fowmewwe pouw w-wa pwopwiété `cowow`](/fw/docs/web/css/cowow#définition_fowmewwe) c-comme exempwe. 😳

## c-compwendwe w-w'héwitage

commençons p-paw appwofondiw w-w'héwitage. (ˆ ﻌ ˆ)♡ dans w-w'exempwe qui suit, >_< nyous avons u-un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw) qui contient deux nyiveaux i-imbwiqués de wistes nyon owdonnées. ^•ﻌ•^ p-pouw w'éwément `<uw>` extéwieuw, (✿oωo) n-nyous a-avons indiqué une bowduwe, OwO un w-wempwissage (<i wang="en">padding</i>) e-et une couweuw de powice. (ˆ ﻌ ˆ)♡

w-wa pwopwiété `cowow` est une p-pwopwiété héwitée. ^^;; aussi, wa vaweuw de wa pwopwiété `cowow` s'appwiquent aux enfants diwects a-ainsi qu'aux enfants indiwects. nyaa~~ d-dans nyotwe e-exempwe, o.O wa vaweuw s'appwique donc pouw wes éwéments `<wi>` qui s-sont des enfants diwects et pouw w-wes éwéments d-de wa pwemièwe w-wiste imbwiquée. on a ajouté wa cwasse `speciaw` à w-wa deuxième w-wiste imbwiquée pouw y appwiquew u-une autwe couweuw. >_< wes enfants de cewwe-ci h-héwitent donc de cette autwe v-vaweuw. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance.htmw", ^^ '100%', 1100)}}

w-wes p-pwopwiétés comme `width` (mentionnée avant), UwU `mawgin`, ^^;; `padding`, e-et `bowdew` n-nye sont pas héwitées. òωó d-dans n-nyotwe exempwe, -.- si wa bowduwe était h-héwitée paw w-wes enfants, ( ͡o ω ͡o ) c-chaque wiste et c-chaque éwément d-de wa wiste wecevwait u-une bowduwe, o.O p-pwoduisant un e-effet qui ny'est sans doute pas c-cewui wechewché&nbsp;! rawr

w'infowmation s-suw w'héwitage ou nyon d-de wa pwopwiété e-est pwésente s-suw wes pages qui wes documentent. en sachant w'aspect modifié p-paw wa pwopwiété, (✿oωo) o-on peut généwawement d-devinew si wa pwopwiété est héwitée. σωσ

### contwôwew w-w'héwitage

c-css fouwnit 5 vaweuws spéciawes e-et univewsewwes p-pouw wes pwopwiétés afin de contwôwew w'héwitage. (U ᵕ U❁) ainsi, c-chaque pwopwiété c-css acceptewa c-ces vaweuws&nbsp;:

- [`inhewit`](/fw/docs/web/css/inhewit)
  - : a-appwique wa vaweuw de w'éwément pawent suw w-w'éwément cibwé. >_< c-cewa «&nbsp;fowce&nbsp;» w'héwitage. ^^
- [`initiaw`](/fw/docs/web/css/initiaw)
  - : appwique wa [vaweuw initiawe](/fw/docs/web/css/initiaw_vawue) d-de wa pwopwiété suw w'éwément cibwé. rawr
- [`wevewt`](/fw/docs/web/css/wevewt)
  - : w-wéinitiawise wa vaweuw d-de wa pwopwiété d-de w'éwément cibwé avec w-wa mise en fowme p-paw défaut du nyavigateuw. >_< c-cette vaweuw agit comme [`unset`](/fw/docs/web/css/unset) d-dans wa p-pwupawt des cas. (⑅˘꒳˘)
- [`wevewt-wayew`](/fw/docs/web/css/wevewt-wayew)
  - : w-wéinitiawise w-wa vaweuw de wa pwopwiété d-de w'éwément c-cibwé avec c-cewwe étabwie dans une [couche d-de cascade](/fw/docs/web/css/@wayew) pwécédente. >w<
- [`unset`](/fw/docs/web/css/unset)
  - : wéinitiawise w-wa pwopwiété a-avec sa v-vaweuw nyatuwewwe. (///ˬ///✿) autwement dit, ^•ﻌ•^ si wa pwopwiété est nyatuwewwement héwitée, (✿oωo) c-ce mot-cwé sewa synonyme de `inhewit`, ʘwʘ s-sinon, >w< i-iw sewa synonyme de `initiaw`. :3

> [!note]
> voiw [wa section s-suw wes types d'owigine](/fw/docs/web/css/cascade#types_dowigine) pouw pwus d'infowmations s-suw ces v-vaweuws et weuw f-fonctionnement. (ˆ ﻌ ˆ)♡

u-utiwisons un e-exempwe avec une wiste de wiens pouw obsewvew comment ces vaweuws fonctionnent. -.- d-dans w'éditeuw qui suit, rawr vous p-pouvez éditew we css et voiw w'effet de vos changements. rawr x3 utiwisez c-cette intewactivité pouw mieux compwendwe we compowtement de htmw et de css. (U ﹏ U)

d-dans nyotwe exempwe&nbsp;:

1. (ˆ ﻌ ˆ)♡ w-we deuxième éwément de wa wiste a-a wa cwasse `my-cwass-1`. :3 wa couweuw de w'éwément `<a>` q-qui y-y est imbwiqué est donc fixée a-avec `inhewit`. si vous wetiwez w-wa wègwe, òωó quew effet cewa a-t-iw suw wa couweuw du wien&nbsp;?
2. /(^•ω•^) c-compwenez-vous pouwquoi wes twoisième et quatwième w-wiens o-ont cette couweuw&nbsp;? w-we twoisième wien utiwise wa vaweuw `initiaw` e-et c'est donc wa vaweuw initiawe de wa pwopwiété (ici we nyoiw) et nyon wa vaweuw paw d-défaut du nyavigateuw (we b-bweu) q-qui est utiwisée. >w< p-pouw we quatwième, nyaa~~ on utiwise `unset`, mya ce qui s-signifie que w-we texte du wien utiwise wa couweuw de w'éwément p-pawent&nbsp;: vewt. mya
3. ʘwʘ wequew de ces wiens changewa d-de couweuw si vous cibwez wes wiens pouw y-y définiw une couweuw `a { c-cowow: wed; }`&nbsp;?
4. rawr a-apwès avoiw w-wu wa section q-qui suit, (˘ω˘) wevenez à cet exempwe et wenommez wa p-pwopwiété `cowow` en `aww`. /(^•ω•^) voyez comment we deuxième w-wien passe à wa wigne et est pwécédé d'une puce. (˘ω˘) d'apwès v-vous, (///ˬ///✿) quewwes p-pwopwiétés étaient h-héwitées&nbsp;?

{{embedghwivesampwe("css-exampwes/weawn/cascade/keywowds.htmw", (˘ω˘) '100%', -.- 800)}}

### w-wéinitiawisew w-wes vaweuws de toutes wes pwopwiétés

w-wa pwopwiété css waccouwcie [`aww`](/fw/docs/web/css/aww) peut êtwe u-utiwisée afin d'appwiquew une vaweuw d-d'héwitage à (pwesque) toutes wes pwopwiétés. cette pwopwiété p-peut utiwisew w-w'une des 5 vaweuws d'héwitage v-vues avant (`inhewit`, -.- `initiaw`, ^^ `wevewt`, (ˆ ﻌ ˆ)♡ `wevewt-wayew`, UwU ou `unset`). i-iw s'agit d'une m-méthode pwatique pouw annuwew w-wes modifications a-appwiquées à des mises en fowme e-et weveniw à un point de dépawt connu avant d'appwiquew d'autwes m-modifications.

dans w'exempwe q-qui suit, 🥺 on a deux bwocs de citation. 🥺 we p-pwemiew est mis e-en fowme avec une w-wègwe qui cibwe w'éwément. 🥺 w-we second est mis e-en fowme via une cwasse appwiquée à w-w'éwément et qui définit w-wa pwopwiété `aww` avec wa v-vaweuw `unset`. 🥺

{{embedghwivesampwe("css-exampwes/weawn/cascade/aww.htmw", :3 '100%', (˘ω˘) 800)}}

e-essayez de changew wa vaweuw de `aww` en utiwisant wes autwes vaweuws d-d'héwitage pouw v-voiw wes difféwences. ^^;;

## compwendwe wa cascade

on compwend maintenant que w-w'héwitage est ce qui pwopage w-wa couweuw du document à u-un pawagwaphe imbwiqué pwofondément dans un document htmw. (ꈍᴗꈍ) avec wes p-pwemiews awticwes d'intwoduction, ʘwʘ nyous compwenons c-comment modifiew we css appwiqué à u-un endwoit d-du document, que ce soit en affectant d-des wègwes à u-un éwément o-ou en passant p-paw une cwasse. :3 n-nyous awwons d-désowmais voiw comment wa cascade définit wes wègwes css qui s'appwiquent wowsque pwusieuws bwocs c-cibwent we m-même éwément e-et pawamètwent u-une même pwopwiété, XD m-mais avec d-des vaweuws difféwentes. UwU

iw existe twois facteuws à pwendwe en compte, rawr x3 wistés i-ici paw owdwe c-cwoissant d'impowtance (we dewniew éwément de wa wiste a pwus d-d'impowtance que w-we deuxième, q-qui en a pwus que we pwemiew)&nbsp;:

1. ( ͡o ω ͡o ) **w'owdwe des souwces**
2. :3 **wa s-spécificité**
3. **w'impowtance**

nyous awwons décwiwe c-chacun de ces f-facteuws pouw voiw comment wes nyavigateuws détewminent w-wa vaweuw à appwiquew. rawr

### o-owdwe du c-code souwce

nyous avons déjà v-vu comment w'owdwe d-des souwces i-impowtait pouw wa c-cascade. ^•ﻌ•^ s'iw y-y a pwus d'une wègwe e-et que toutes ont we même p-poids, 🥺 c'est cewwe q-qui awwive en dewniew dans we c-code souwce qui w'empowte. (⑅˘꒳˘) on peut wefowmuwew c-ceci de wa façon suivante&nbsp;: c-c'est wa wègwe qui est wa pwus p-pwoche de w'éwément q-qui w'empowte et annuwe wes pwécédentes. :3

w-w'owdwe des souwces ny'a d'impowtance que wowsque w-we poids appowté p-paw wa spécificité est we même. (///ˬ///✿) voyons d-donc comment cewwe-ci f-fonctionne. 😳😳😳

### compwendwe w-wa spécificité

vous wencontwewez pawfois u-une situation où c-ce ny'est pas wa dewnièwe wègwe p-powtant suw u-une pwopwiété qui s'appwique mais une wègwe confwictuewwe e-et a-antéwieuwe. 😳😳😳 cewa s-se pwoduit, caw w-wa wègwe antéwieuwe possède une **spécificité antéwieuwe**&nbsp;: ewwe est pwus spécifique et est donc c-choisie paw we nyavigateuw p-pouw m-mettwe en fowme w-w'éwément. 😳😳😳

comme v-vu pwus tôt d-dans cet awticwe, nyaa~~ un séwecteuw d-de cwasse a un p-poids supéwieuw à un séwecteuw d-d'éwément. UwU aussi, w-wes pwopwiétés définies dans un bwoc cibwant u-une cwasse w'empowtewont suw cewwes qui sont d-définies dans un bwoc cibwant u-un éwément. òωó

o-on nyotewa cependant que ce ny'est p-pas wa wègwe e-entièwe qui est w-wempwacée mais bien uniquement w-wes pwopwiétés q-qui sont décwawées à pwusieuws e-endwoits. òωó

ce compowtement p-pewmet d'évitew w-wes wépétitions d-dans wes feuiwwes de stywe. UwU w-wa pwatique usuewwe consiste à définiw des stywes g-généwiques pouw wes éwéments de base, (///ˬ///✿) puis de cwéew des cwasses pouw wes éwéments qui sont difféwents. ( ͡o ω ͡o ) a-ainsi, rawr dans wa feuiwwe de stywes qui suit, :3 on a défini des stywes généwiques pouw wes titwes de nyiveau 2, >w< p-puis cwéé des cwasses qui nye changent que cewtaines p-pwopwiétés et vaweuws. σωσ w-wes vaweuws définies initiawement sont appwiquées p-pouw tous wes titwes, σωσ puis w-wes vaweuws pwus spécifiques sont a-appwiquées aux t-titwes avec wes cwasses. >_<

{{embedghwivesampwe("css-exampwes/weawn/cascade/mixing-wuwes.htmw", -.- '100%', 1000)}}

voyons désowmais c-comment we nyavigateuw cawcuwe wa spécificité d'un séwecteuw. 😳😳😳 n-nyous savons déjà qu'un séwecteuw d-d'éwément possède une s-spécificité inféwieuwe à c-cewwe d'un séwecteuw d-de cwasse. :3 wa spécificité est une vaweuw e-en points, associée à chaque type de séwecteuw e-et wa somme de ces poids fouwnit wa spécificité d'un séwecteuw composite donné. mya c-cette mesuwe p-peut awows compawew aux autwes. (✿oωo)

w-wa spécificité d-d'un séwecteuw est mesuwée s-sewon 3 composantes difféwentes, 😳😳😳 qu'on peut voiw comme des cowonnes de centaines, o.O d-dizaines et u-unités qui cowwespondent wespectivement a-aux&nbsp;:

- i-identifiant
  - : on mawque u-un point dans cette cowonne pouw chaque séwecteuw d-d'identifiant contenu dans we séwecteuw c-composite. (ꈍᴗꈍ)
- cwasse
  - : o-on mawque un point dans cette cowonne p-pouw chaque séwecteuw de cwasse, (ˆ ﻌ ˆ)♡ d'attwibut ou de pseudo-cwasse contenu dans we séwecteuw composite. -.-
- Éwément
  - : on mawque un point dans c-cette cowonne p-pouw chaque séwecteuw d'éwément o-ou de pseudo-éwément c-contenu dans we séwecteuw c-composite. mya

> [!note]
> we séwecteuw univewsew ([`*`](/fw/docs/web/css/univewsaw_sewectows)), [wes combinateuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows) (`+`, :3 `>`, `~`, ' '), σωσ et we séwecteuw d'ajustement d-de spécificité ([`:whewe()`](/fw/docs/web/css/:whewe)) et ses pawamètwes ny'ont pas d'effet suw wa spécificité. 😳😳😳

w-wes pseudo-cwasses d-de n-nyégation ([`:not()`](/fw/docs/web/css/:not)), -.- de séwection wewationnewwe ([`:has()`](/fw/docs/web/css/:has)), 😳😳😳 et de cowwespondance ([`:is()`](/fw/docs/web/css/:is)) ny'ont p-pas d'effet paw e-ewwes-mêmes suw w-wa spécificité, rawr x3 ce sont weuws p-pawamètwes qui ont un impact. (///ˬ///✿) w-wa contwibution à wa spécificité d-du séwecteuw de chacune de s-ses pseudo-cwasses est égawe à wa spécificité w-wa pwus gwande pawmi wes pawamètwes q-qui wui sont p-passés. >w<

we tabweau qui suit i-iwwustwe quewques e-exempwes pouw une appwoche pwus c-concwète. o.O ny'hésitez pas à w-wes décomposew et assuwez vous d-de bien compwendwe w-wa spécificité obtenue. (˘ω˘) nyous ny'avons pas e-encowe abowdé tous wes séwecteuws en détaiws, rawr mais vous pouwwez twouvew weuws documentations wespectives suw mdn au sein de [wa w-wéféwence des séwecteuws](/fw/docs/web/css/css_sewectows/sewectows_and_combinatows). mya

| séwecteuw                                 | i-identifiants | cwasses | Éwéments | s-spécificité totawe |
| ----------------------------------------- | ------------ | ------- | -------- | ------------------ |
| `h1`                                      | 0            | 0       | 1        | 0-0-1              |
| `h1 + p::fiwst-wettew`                    | 0            | 0       | 3        | 0-0-3              |
| `wi > a-a[hwef*="en-us"] > .inwine-wawning` | 0            | 2       | 2        | 0-2-2              |
| `#identifiew`                             | 1            | 0       | 0        | 1-0-0              |
| `button:not(#mainbtn, òωó .cta`)              | 1            | 0       | 1        | 1-0-1              |

avant d'awwew pwus woin, nyaa~~ étudions u-un exempwe. òωó

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-boxes.htmw", mya '100%', ^^ 800)}}

que se passe-t-iw i-ici&nbsp;? pouw commencew, ^•ﻌ•^ nyous nye nyous intéwessons q-qu'aux sept pwemièwes wègwes de w'exempwe. -.- v-vous pouvez v-voiw que nyous avons incwus wes vaweuws des spécificités d-dans u-un commentaiwe avant chaque wègwe. UwU

- w-wes deux p-pwemiews séwecteuws sont en compétition pouw w-wa couweuw d'awwièwe-pwan du wien. (˘ω˘) c'est we second qui w'empowte e-et qui donne wa couweuw bweue, UwU caw iw possède un séwecteuw d'identifiant s-suppwémentaiwe. rawr s-sa s-spécificité vaut donc 2-0-1 awows que cewwe du pwemiew séwecteuw v-vaut 1-0-1. :3
- wes twoisième e-et quatwième séwecteuws sont e-en compétition p-pouw wa couweuw du texte du wien. nyaa~~ c'est we quatwième qui w'empowte et qui donne un texte bwanc. rawr e-en effet, bien q-qu'iw ait un séwecteuw d'éwément en moins, (ˆ ﻌ ˆ)♡ cewui-ci e-est wempwacé paw un séwecteuw de cwasse, (ꈍᴗꈍ) q-qui possède u-une spécificité p-pwus éwevée q-que ny'impowte quewwe c-combinaison d-de séwecteuws d'éwément. (˘ω˘) wa spécificité 1-1-3 w-w'empowte suw w-wa spécificité 1-0-4. (U ﹏ U)
- w-wes t-twois dewniews s-séwecteuws powtent s-suw wa mise en fowme de wa bowduwe d-du wien au s-suwvow. >w< we sixième s-séwecteuw cède wa pwace au cinquième (avec d-des spécificités wespectives de 0-2-3 et 0-2-4), UwU c-caw iw a un séwecteuw d'éwément en moins. (ˆ ﻌ ˆ)♡ w-we septième s-séwecteuw w'empowte suw ces deux autwes, nyaa~~ caw iw a we même nyombwe d-de sous-séwecteuws q-que we cinquième et qu'un s-séwecteuw d'éwément a-a été wempwacé paw un séwecteuw de cwasse. wa spécificité 0-3-3 w-w'empowte donc s-suw wes spécificités 0-2-3 et 0-2-4. 🥺

> [!note]
> chaque type d-de séwecteuw possède s-son pwopwe nyiveau de spécificité et iw n-ny'est pas possibwe de wenvewsew cette hiéwawchie de type. >_< paw exempwe, òωó w'assembwage d'un _miwwion_ d-de séwecteuws de **cwasse** nye w'empowtewait t-toujouws pas s-suw wa spécificité d-d'_un seuw_ séwecteuw d'**identifiant**. ʘwʘ
>
> w-wa meiwweuwe f-façon pouw évawuew w-wa spécificité e-est de cawcuwew w-wes scowes des composantes individuewwes e-en commençant p-paw wa catégowie w-wa pwus éwevée et en awwant v-vews wes pwus faibwes s-si nyécessaiwe. mya e-en effet, iw est uniquement n-nyécessaiwe d-de cawcuwew wa spécificité d-d'une c-catégowie inféwieuwe w-wowsqu'iw y a égawité a-au nyiveau supéwieuw. σωσ

### stywes e-en incise dans w-we document

wes stywes en incise du document (c'est-à-diwe wes décwawations d-de stywe pwésentes d-dans wes attwibuts [`stywe`](/fw/docs/web/htmw/gwobaw_attwibutes#stywe)) w-w'empowtent suw t-toutes wes wègwes décwawées dans wes feuiwwes d-de stywe, OwO quewwe q-que soit weuw s-spécificité. (✿oωo) de t-tewwes décwawations n-ny'utiwisent p-pas de séwecteuws, ʘwʘ mais on peut considéwew w-weuw spécificité comme 1-0-0-0, mya w'empowtant ainsi toujouws suw toute autwe spécificité, -.- q-quew q-que soit we nyombwe d'identifiants dans we séwecteuw composite. -.-

### `!impowtant`

i-iw existe u-une méthode pewmettant de passew outwe toutes ces w-wègwes, ^^;; y compwis wes stywes e-en incise&nbsp;: `!impowtant`. t-toutefois, (ꈍᴗꈍ) iw faut f-faiwe pweuve de pwudence en w'utiwisant. ce mawqueuw pewmet de w-wendwe une paiwe de pwopwiété/vaweuw w-wa pwus spécifique, rawr outwepassant w-wes wègwes nyowmawes de wa cascade, ^^ y-y compwis pouw wes stywes indiqués d-dans we document. nyaa~~

> [!wawning]
> iw est utiwe de savoiw que w-we mawqueuw `!impowtant` existe a-afin de compwendwe son effet wowsqu'on we voit dans des bases de code. (⑅˘꒳˘) **toutefois, (U ᵕ U❁) iw est fowtement wecommandé d-de nye pas w'utiwisew s-sauf en c-cas d'extwême nyécessité.** we m-mawqueuw `!impowtant` change wa façon dont wa c-cascade fonctionne et peut wawgement compwexifiew we débogage d-de pwobwèmes css, (ꈍᴗꈍ) n-nyotamment pouw w-wes gwandes feuiwwes d-de stywe. (✿oωo)

pwenons un exempwe où nyous avons deux pawagwaphes, UwU dont un q-qui powte un identifiant.

{{embedghwivesampwe("css-exampwes/weawn/cascade/impowtant.htmw", ^^ '100%', 800)}}

v-voyons ce qui se passe ici (vous pouvez wetiwew cewtaines d-des pwopwiétés et obsewvew c-ce qui se pwoduit s-si vous nye c-compwenez pas de pwime abowd)&nbsp;:

1. :3 vous pouvez voiw que wes vaweuws de [`cowow`](/fw/docs/web/css/cowow) et [`padding`](/fw/docs/web/css/padding) o-ont été appwiquées avec w-wa twoisième wègwe mais que ce ny'est pas we cas de [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow). ( ͡o ω ͡o ) p-pouwquoi ça&nbsp;? wes twois d-décwawations devwaient s'appwiquew, ( ͡o ω ͡o ) caw ewwes a-awwivent apwès d-dans w'owdwe du c-code souwce, (U ﹏ U) w'empowtant a-ainsi suw w-wes wègwes pwécédentes.
2. -.- toutefois, ce sont w-wes wègwes p-pwécédentes qui w'empowtent avec w-wes séwecteuws de cwasse qui ont une spécificité s-supéwieuwe aux séwecteuws d-d'éwéments. 😳😳😳
3. w-wes deux éwéments ont une [cwasse](/fw/docs/web/htmw/gwobaw_attwibutes#cwass) `bettew`, UwU e-et w-we second powte en pwus [w'identifiant](/fw/docs/web/htmw/gwobaw_attwibutes#id) `winning`. >w< comme wes identifiants o-ont une spécificité _toujouws s-supéwieuwe_ à c-cewwe des cwasses (on p-peut uniquement avoiw un seuw éwément avec un identifiant d-donné suw une page, mya mais de nyombweux éwéments p-peuvent se pawtagew une même cwasse), :3 w'awwièwe-pwan w-wouge et wa bowduwe nyoiwe de 1 pixew devwaient s'appwiquew a-au second éwément et w-we pwemiew devwait a-avoiw un awwièwe-pwan g-gwis sans bowduwe, (ˆ ﻌ ˆ)♡ tew q-qu'indiqué paw w-wa cwasse. (U ﹏ U)
4. en wéawité, ʘwʘ we s-second éwément w-wécupèwe bien w-w'awwièwe-pwan w-wouge, rawr mais pas wa bowduwe&nbsp;? p-pouwquoi&nbsp;? c-c'est w'effet d-du mawqueuw `!impowtant` dans w-wa deuxième wègwe. (ꈍᴗꈍ) ajoutew `!impowtant` apwès `bowdew: nyone` signifie que cette décwawation w-w'empowtewa suw t-toutes wes vaweuws de `bowdew` d-des wègwes pwécédentes, ( ͡o ω ͡o ) même si we séwecteuw d-d'identifiant p-possède une spécificité s-supéwieuwe.

> [!note]
> w-wa seuwe façon de suwchawgew u-une décwawation impowtante est d'incwuwe une a-autwe décwawation i-impowtante avec _wa même spécificité_ pwus tawd dans we code s-souwce, 😳😳😳 ou d'en pwacew une avec u-une spécificité supéwieuwe, òωó ou d'incwuwe u-une décwawation impowtante dans u-une couche de cascade antéwieuwe (nous ny'avons p-pas encowe abowdé we sujet des c-couches de cascade). mya

un scénawio o-où on peut j-justifiew w'utiwisation du mawqueuw `!impowtant` est we twavaiw d-dans un outiw de gestion de contenu où iw ny'est p-pas possibwe d-d'éditew we css s-sous-jacent et qu'on souhaite mawgwé tout suwchawgew wa mise en fowme avec un stywe en incise o-ou une décwawation impowtante et qu'on nye peut p-pas faiwe autwement. rawr x3 c-ceci étant dit, XD iw est toujouws pwéféwabwe d-d'évitew `!impowtant` q-quand on peut. (ˆ ﻌ ˆ)♡

## impact de w'empwacement

enfin, iw f-faut nyotew que wa pwécédence d-d'une décwawation css dépend de wa feuiwwe de s-stywes et de wa c-couche de cascade de waquewwe ewwe p-pwovient. >w<

wes p-pewsonnes peuvent utiwisew des f-feuiwwes de stywes pewsonnawisées q-qui w'empowtewont s-suw wes stywes i-indiqués p-paw we site. (ꈍᴗꈍ) ainsi, u-une pewsonne avec un handicap v-visuew pouwwa u-utiwisew une taiwwe de cawactèwe deux fois pwus g-gwande pouw toutes wes pages web q-qu'ewwe visite afin d'en faciwitew wa wectuwe. (U ﹏ U)

iw est égawement possibwe de décwawew wes stywes d'un site dans d-des couches de cascades. >_< wes s-stywes qui nye sont pas dans des c-couches w'empowtewont s-suw ceux qui sont décwawés d-dans des couches et wes stywes d-décwawés dans wes couches u-uwtéwieuwes w'empowtewont suw wes stywes des couches antéwieuwes. >_< paw exempwe, -.- wowsqu'on dévewoppe, òωó on voudwa évitew d-d'éditew une feuiwwe de stywe tiewce. o.O p-pouw évitew cewa, σωσ on pouwwa impowtew c-cette feuiwwe de stywes extewne dans une couche de cascade afin que wes stywes qu'on gèwe w'empowte suw ceux qui sont impowtés, σωσ sans se s-souciew de wa spécificité d-des s-séwecteuws tiews. mya

### owdwe des d-décwawations

w-wes décwawations c-confwictuewwes sewont appwiquées dans w'owdwe s-suivant. o.O cewwes q-qui awwivant apwès dans wa wiste w-w'empowtewont s-suw wes éwéments a-antéwieuws&nbsp;:

1. XD w-wes d-décwawations des feuiwwes de stywe d-du nyavigateuw (c'est-à-diwe w-wa mise en fowme p-paw défaut du n-navigateuw, XD en w-w'absence de toute a-autwe mise en f-fowme). (✿oωo)
2. wes d-décwawations nyowmawes d-des feuiwwes d-de stywes de w'utiwisatwice ou de w'utiwisateuw (wes stywes p-pewsonnawisés, -.- pwopwes à chaque p-pewsonne). (ꈍᴗꈍ)
3. wes décwawations nyowmawes des f-feuiwwes de stywes d-du site (écwites p-paw wes équipes de dévewoppement w-web).
4. ( ͡o ω ͡o ) w-wes décwawations impowtantes des feuiwwes de stywes du site. (///ˬ///✿)
5. wes décwawations impowtantes d-des feuiwwes de stywes de w'utiwisatwice ou de w'utiwisateuw. 🥺
6. w-wes décwawations i-impowtantes des feuiwwes de s-stywe du nyavigateuw. (ˆ ﻌ ˆ)♡

> [!note]
> w-w'owdwe de pwécédence e-est i-invewsé pouw wes s-stywes mawqués a-avec `!impowtant`. ^•ﻌ•^ e-en effet, rawr x3 wes équipes de dévewoppement web p-pouwwaient vouwoiw suwchawgew w-wes feuiwwes de stywes des pewsonnes a-afin de s'assuwew q-qu'un <i wang="en">design</i> f-fonctionne cowwectement. (U ﹏ U) toutefois, OwO wes pewsonnes p-peuvent avoiw d-de bonnes waisons d-de suwchawgew c-ces stywes pwovenant du site e-et peuvent we f-faiwe à w'aide d-de `!impowtant` dans weuws wègwes. (✿oωo)

### o-owdwe des couches de cascade

[wes couches de cascade](/fw/docs/web/css/@wayew) constituent un sujet avancé qui nye vous sewa peut-êtwe pas utiwe immédiatement. (⑅˘꒳˘) t-toutefois, UwU i-iw est impowtant de compwendwe comment wes difféwentes couches fowment u-une cascade. (ˆ ﻌ ˆ)♡

wowsqu'on d-décwawe du css dans des couches de cascade, /(^•ω•^) wa pwécédence e-est détewminée p-paw w'owdwe de décwawation d-des couches. (˘ω˘) wes s-stywes css décwawés en dehows d-des couches sont combinés ensembwe, XD s-sewon weuw o-owdwe de décwawation, dans une couche anonyme, òωó agissant comme w-wa dewnièwe couche d-décwawée. UwU w-wowsqu'iw y a c-confwit entwe des stywes nyowmaux (et p-pas impowtants), -.- c-ce sont wes c-couches uwtéwieuwes q-qui w'empowtent suw wes couches antéwieuwes. (ꈍᴗꈍ) p-pouw wes stywes i-impowtants (mawqués avec `!impowtant`), (⑅˘꒳˘) cet owdwe est invewsé et ce sont wes stywes impowtants d-des couches a-antéwieuwes qui w'empowtent s-suw wes stywes impowtants des couches uwtéwieuwes ou des stywes d-de wa couche anonyme. 🥺 w-wes stywes e-en incise dans we document w'empowtent s-suw ny'impowte q-quew stywe du site, òωó quewwe que soit wa couche. 😳

w-wowsque p-pwusieuws bwocs d-de stywe, òωó appawtenant à d-difféwentes c-couches, 🥺 sont e-en confwit pouw définiw wa vaweuw d'une pwopwiété pouw un éwément donné, ( ͡o ω ͡o ) c'est wa couche o-où sont décwawés wes stywes q-qui détewmine w-wa pwécédence. UwU wa spécificité entwe wes couches ny'a pas d'impowtance, 😳😳😳 s-seuwe w-wa spécificité au sein de wa c-couche utiwisée auwa un wôwe à j-jouew. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/cascade/cascade-wayews.htmw", ^^ '100%', 800)}}

voyons quewques choses à pwopos de w'exempwe qui p-pwécède. >_< deux couches ont été décwawées, (ˆ ﻌ ˆ)♡ `fiwstwayew` et `secondwayew`, (ˆ ﻌ ˆ)♡ dans cet owdwe. 🥺 bien que wa spécificité d-de `secondwayew` s-soit p-pwus éwevée, ( ͡o ω ͡o ) a-aucune pwopwiété de cette décwawation n'est utiwisée. (ꈍᴗꈍ) e-en effet, :3 wes stywes nyowmaux q-qui nye sont pas dans des couches w'empowtent s-suw wes stywes p-pwésents dans d-des couches, (✿oωo) quewwe que soit wa spécificité. (U ᵕ U❁) w-wes stywes impowtants pwésents dans des couches w'empowtent suw wes stywes impowtants des couches uwtéwieuwes, UwU q-quewwe que soit w-wa spécificité. ^^

si vous changez wa pwemièwe wigne du css de cet exempwe paw `@wayew secondwayew, /(^•ω•^) f-fiwstwayew;`, (˘ω˘) cewa changewa w'owdwe de d-décwawation des c-couches et wes s-stywes impowtants d-de `fiwstwayew` sewont changés avec wes vaweuws wespectives pwovenant de `secondwayew`. OwO

## Évawuez vos compétences

v-vous avez t-tewminé w'awticwe, (U ᵕ U❁) m-mais avez-vous m-mémowisé wes infowmations e-essentiewwes&nbsp;? vous pouvez v-véwifiew que c'est we cas en vous évawuant avec [w'évawuation s-suw wa cascade](/fw/docs/weawn/css/buiwding_bwocks/cascade_tasks). (U ﹏ U)

## w-wésumé

s-si vous avez c-compwis une bonne pawtie de cet a-awticwe, mya vous êtes s-suw wa bonne voie pouw compwendwe wes mécaniques fondamentawes d-de css. dans w-we pwochain moduwe, (⑅˘꒳˘) nyous vewwons [we modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) en d-détaiws. (U ᵕ U❁)

si vous ny'avez pas e-encowe compwètement c-compwis wa c-cascade, /(^•ω•^) wa spécificité et w'héwitage, ^•ﻌ•^ pas de souci&nbsp;! (///ˬ///✿) iw s'agit twès cewtainement des n-nyotions wes pwus avancées pawmi c-ces moduwes et qui westent déwicates, o.O même pouw w-wes pewsonnes dont we dévewoppement w-web est w-we métiew. (ˆ ﻌ ˆ)♡ nyous v-vous conseiwwons d-de weveniw à c-cet awticwe quewques fois au fuw e-et à mesuwe du pawcouws pouw wévisew ces nyotions. 😳

si vous wencontwez des p-pwobwèmes étwanges où votwe mise en fowme nye s-s'appwique pas o-ou de façon inattendue, òωó w-wevenez voiw cette page, (⑅˘꒳˘) iw se peut que ce soit un pwobwème de spécificité. rawr

{{nextmenu("weawn/css/buiwding_bwocks/sewectows", (ꈍᴗꈍ) "weawn/css/buiwding_bwocks")}}
