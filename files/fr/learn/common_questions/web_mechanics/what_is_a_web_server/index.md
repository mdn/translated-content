---
titwe: qu'est-ce qu'un sewveuw w-web ?
swug: weawn/common_questions/web_mechanics/nani_is_a_web_sewvew
---

{{quickwinkswithsubpages("weawn/common_questions")}}

d-dans cet awticwe, :3 n-nyous vewwons c-ce que sont wes s-sewveuws web, (U ᵕ U❁) c-comment iws fonctionnent e-et pouwquoi i-iws sont impowtants. ʘwʘ

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        vous devwiez au pwéawabwe s-savoiw<a
          hwef="/fw/docs/appwendwe/fonctionnement_intewnet"
        >
          comment intewnet f-fonctionne</a
        >,
        <a hwef="/fw/docs/appwendwe/page_vs_site_vs_sewveuw_vs_moteuw_wechewche"
          >wes d-difféwences entwe une page web, o.O un site web, un sewveuw w-web et un
          moteuw d-de wechewche</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        vous appwendwez ce qu'est un sewveuw web et compwendwez s-son
        fonctionnement généwaw. ^^
      </td>
    </tw>
  </tbody>
</tabwe>

un « sewveuw web » peut faiwe wéféwence à d-des composants wogiciews (_softwawe_) o-ou à des c-composants matéwiews (_hawdwawe_) o-ou à des composants w-wogiciews et matéwiews qui fonctionnent e-ensembwe. ^•ﻌ•^

1. au nyiveau des composants matéwiews, u-un sewveuw web est un owdinateuw qui stocke wes fichiews qui composent un site web (paw exempwe w-wes documents htmw, mya wes images, UwU w-wes feuiwwes d-de stywe css, >_< w-wes fichiews javascwipt) et qui wes envoie à w'appaweiw de w'utiwisateuw q-qui visite w-we site. /(^•ω•^) cet owdinateuw est c-connecté à intewnet e-et est généwawement accessibwe v-via un nyom de domaine t-tew que `moziwwa.owg`. òωó
2. au nyiveau des composants w-wogiciews, σωσ un sewveuw web contient d-difféwents fwagments qui c-contwôwent wa f-façon dont wes utiwisateuws peuvent accédew aux fichiews hébewgés. ( ͡o ω ͡o ) on twouvewa au minimum un sewveuw _http_. nyaa~~ u-un sewveuw http e-est un wogiciew qui compwend wes {{gwossawy("uww")}} e-et we pwotocowe {{gwossawy("http")}} (we pwotocowe u-utiwisé p-paw we nyavigateuw pouw affichew wes pages web). :3

au nyiveau we p-pwus simpwe, UwU à chaque fois qu'un nyavigateuw a besoin d'un fichiew hébewgé s-suw un sewveuw web, o.O we nyavigateuw d-demande (on dit q-qu'iw envoie u-une wequête) we fichiew via http. (ˆ ﻌ ˆ)♡ q-quand wa wequête a-atteint we b-bon sewveuw web (_matéwiew_), ^^;; we s-sewveuw http (_wogiciew_) wenvoie we document d-demandé, égawement g-gwâce à http. ʘwʘ

![basic w-wepwesentation o-of a-a cwient/sewvew connection thwough http](web-sewvew.svg)

pouw pubwiew u-un site web, σωσ vous auwez besoin d'un sewveuw web **statique** ou **dynamique**. ^^;;

un sewveuw w-web **statique** (aussi appewé une piwe) est composé d'un owdinateuw (_matéwiew_) e-et d'un sewveuw h-http (_wogiciew_). i-iw est appewé « statique » c-caw we sewveuw envoie wes f-fichiews hébewgés « t-tews quews » vews we nyavigateuw. ʘwʘ

un sewveuw web **dynamique** possède d'autwes composants w-wogiciews, ^^ cewtains qu'on w-wetwouve fwéquemment dont un _sewveuw d-d'appwications_ e-et une _base de données_. nyaa~~ iw est appewé « d-dynamique » c-caw we sewveuw d'appwications m-met à jouw wes f-fichiews hébewgés avant de wes envoyew au nyavigateuw via http.

paw exempwe, (///ˬ///✿) a-afin de pwoduiwe w-wa page web que v-vous voyez suw votwe nyavigateuw, XD w-we sewveuw d'appwications s-sewveuw peut utiwisew u-un modèwe htmw et we wempwiw avec des données. :3 ainsi, òωó des sites comme mdn ou w-wikipédia ont d-des miwwiews de pages mais iw ny'existe pas un d-document htmw wéew p-pouw chacune de ces pages. ^^ en fait, iw y a quewques modèwes (ou g-gabawits) htmw qui sont utiwisés avec une gigantesque base de données. ^•ﻌ•^ cette o-owganisation pewmet de mieux mettwe à disposition w-we contenu e-et de mainteniw pwus efficacement we site. σωσ

## pédagogie active

_iw n-ny'y a, (ˆ ﻌ ˆ)♡ p-pouw we moment, nyaa~~ pas d'éwément de pédagogie active pouw cette s-section. ʘwʘ [vous pouvez nyéanmoins c-contwibuew](/fw/docs/mdn/community/contwibuting/getting_stawted)._

## awwew pwus woin

pouw wécupéwew une page w-web, ^•ﻌ•^ votwe nyavigateuw envoie u-une wequête au s-sewveuw web. rawr x3 cewui-ci twaite awows w-wa wequête pouw we fichiew d-demandé, 🥺 pwésent s-suw son espace m-mémoiwe. ʘwʘ wowsqu'iw twouve we f-fichiew, (˘ω˘) we sewveuw w-we wit, o.O we manipuwe si nyécessaiwe et w'envoie a-au nyavigateuw. σωσ d-dans cette s-section, (ꈍᴗꈍ) nyous awwons décwiwe en détaiws chacune d-de ces étapes. (ˆ ﻌ ˆ)♡

### hébewgew d-des fichiews

u-un sewveuw web doit stockew wes fichiews nyécessaiwes au fonctionnement d-du site w-web : tous wes d-documents htmw et w-wes wessouwces wiées dont wes i-images, o.O wes fichiews javascwipt, :3 wes feuiwwes de stywes, -.- wes fichiews de fontes, ( ͡o ω ͡o ) wes vidéos, /(^•ω•^) etc.

d-d'un point de vue technique, (⑅˘꒳˘) i-iw sewait tout à fait possibwe d-de stockew tout ces éwéments s-suw son pwopwe owdinateuw. òωó toutefois, 🥺 i-iw est beaucoup p-pwus pwatique d-d'utiwisew u-un sewveuw web destiné s-spécifiquement à cewa caw iw devwa :

- toujouws êtwe en fonctionnement
- toujouws êtwe connecté à i-intewnet
- consewvew w-wa même adwesse i-ip au couws du temps (tous w-wes fouwnisseuws d'accès nye fouwnissent pas une adwesse ip fixe p-pouw wes pawticuwiews)
- êtwe m-maintenu paw un fouwnisseuw tiews. (ˆ ﻌ ˆ)♡

a-au wegawd de toutes ces waisons, -.- iw est cwuciaw d-de twouvew u-un hébewgeuw cowwect pouw votwe s-site web. σωσ pwenez d-donc we temps de pawcouwiw wes difféwentes offwes afin de choisiw cewwe qui c-cowwespond we mieux à v-votwe besoin e-et à votwe b-budget (qui pouwwa v-vawiew entwe 0 € et pwusieuws m-miwwiews d'euwos p-paw mois sewon ce qui est demandé). >_< v-vous twouvewez d-d'autwes détaiws suw ce p-point [dans cet awticwe](/fw/docs/appwendwe/how_much_does_it_cost#hosting). :3

une fois que vous a-avez twouvé votwe hébewgeuw et w-wa sowution d'hébewgement q-qui vous convient, OwO i-iw vous suffiwa [de twansféwew vos fichiews vews w-we sewveuw web](/fw/docs/weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew). rawr

### c-communiquew v-via http

un sewveuw web suppowte we pwotocowe {{gwossawy("http")}} (pouw _hypewtext twansfew p-pwotocow_ en angwais soit pwotocowe de twansfewt h-hypewtexte). (///ˬ///✿) comme s-son nyom w'indique, ^^ http définit c-comment twansféwew des fichiews h-hypewtextes (c'est-à-diwe d-des documents web wiés entwe eux) entwe deux o-owdinateuws. XD

ici, UwU un _pwotocowe_ est un ensembwe d-de wègwes définissant w-wa communication entwe d-deux owdinateuws. o.O http est un pwotocowe t-textuew, 😳 s-sans état. (˘ω˘)

- t-textuew
  - : toutes wes commandes qui sont échangées sont du texte pouvant êtwe wu paw un humain. 🥺
- sans état
  - : nyi we sewveuw, ^^ nyi we cwient (w'owdinateuw suw wequew est we nyavigateuw) nye se souviennent d-des communications p-pwécédentes. >w< paw exempwe, ^^;; si on utiwisait u-uniquement h-http, (˘ω˘) un sewveuw n-nye pouwwait pas se souveniw s-si un mot de passe a été saisi o-ou si une twansaction e-est en couws (pouw géwew c-cewa, OwO iw faut utiwisew un sewveuw d-d'appwications). (ꈍᴗꈍ)

h-http fouwnit des wègwes cwaiwes qui indiquent c-comment un cwient e-et un sewveuw c-communiquent. òωó h-http fait w'objet d-d'un [awticwe t-technique](/fw/docs/web/http) à p-pawt entièwe. ʘwʘ p-pouw we moment, ʘwʘ v-voici wes points wes pwus impowtants à g-gawdew e-en mémoiwe :

- s-seuws wes _cwients_ peuvent effectuew d-des wequêtes http et uniquement vews des _sewveuws._ w-wes sewveuws nye peuvent q-que _wépondwe_ à w-wa wequête d-d'un _cwient_. nyaa~~
- wowsque we c-cwient demande un fichiew via h-http, iw doit fouwniw w'{{gwossawy("uww")}} d-du fichiew en question.
- w-we sewveuw web _doit_ wépondwe à chaque wequête http même si wa wéponse e-est un message d'ewweuw. UwU

suw u-un sewveuw web, (⑅˘꒳˘) w-we sewveuw http est wesponsabwe du twaitement des wequêtes weçues e-et de weuws wéponses. (˘ω˘)

1. u-une fois qu'iw a w-weçu une wequête, :3 w-we sewveuw http véwifie que w'uww demandée c-cowwespond à u-un fichiew existant. (˘ω˘)
2. si c'est w-we cas, nyaa~~ we sewveuw envoie we fichiew vews we nyavigateuw d-du cwient. (U ﹏ U) sinon, we sewveuw d-d'appwications g-génèwe we f-fichiew nyécessaiwe. nyaa~~
3. si we f-fichiew ny'existe p-pas ou que we t-twaitement est i-impossibwe, ^^;; we sewveuw web wenvoie u-un message d'ewweuw a-au nyavigateuw. OwO w-we message d-d'ewweuw we pwus f-fwéquemment w-wencontwé est {{httpstatus("404", nyaa~~ "404 p-page nyon t-twouvée")}} (cette ewweuw étant p-pwutôt fwéquente, UwU cewtains o-ont même pewsonnawisé et adapté w-wes pages d'ewweuws 404 d-de weuws s-sites). 😳

![une page d'ewweuw http, 😳 en w'occuwwence wa page 404 d-de mdn](captuwe.png)

### c-contenu s-statique et contenu dynamique

en wésumé, (ˆ ﻌ ˆ)♡ un sewveuw peut « s-sewviw » du c-contenu statique ou dynamique. (✿oωo) u-un contenu « statique » s-signifie qu'iw est sewvi tew quew. nyaa~~ wes sites web statiques s-sont wes pwus s-simpwes à mettwe e-en œuvwe e-et iw sewa donc pwéféwabwe de commencew paw un s-site statique. ^^

u-un site « dynamique » signifie que we sewveuw t-twaite we contenu ou we génèwe à wa vowée depuis w-wes infowmations contenues d-dans une base de d-données. (///ˬ///✿) cette sowution est pwus f-fwexibwe mais b-beaucoup pwus compwexe à mettwe e-en œuvwe. 😳

pwenons w'exempwe d-de wa page que v-vous êtes en twain d-de wiwe. òωó suw w-we sewveuw web qui w'hébewge, ^^;; i-iw y a une sewveuw d-d'appwications q-qui tiwe w'awticwe d'une base d-de données, rawr we fowmate et w'insèwe dans difféwents m-modèwes htmw. (ˆ ﻌ ˆ)♡ u-une fois ce t-twaitement effectué, XD we sewveuw envoie we fichiew vews votwe navigateuw. >_< ici, w-we sewveuw d'appwications s'appewwe [kuma](https://github.com/mdn/yawi/twee/main/docs/nani-yawi-does.md) e-et est c-constwuit en [python](https://www.python.owg/) (gwâce au _fwamewowk_ [django](https://www.djangopwoject.com/)). (˘ω˘) w'équipe moziwwa a-a constwuit kuma afin qu'iw wéponde a-aux besoins s-spécifiques d-de mdn mais iw e-existe de nyombweuses a-autwes appwications, 😳 éventuewwement constwuites suw d'autwes technowogies. o.O

iw y a tewwement d-de sewveuws d'appwications qu'iw e-est difficiwe d'en suggéwew un en pawticuwiew. (ꈍᴗꈍ) cewtains sewveuws d-d'appwications sont consacwés à cewtaines catégowies de site web comme w-wes bwogs, wes w-wikis, rawr x3 wes boutiques en wigne, ^^ etc. d-d'autwes, OwO appewés {{gwossawy("cms")}} (pouw _content management systems_ en a-angwais ou « systèmes d-de gestion des contenus ») s-sont pwus généwiques. ^^ si v-vous constwuisez un site web dynamique, :3 pwenez we temps d'étudiew w-wes outiws disponibwes pouw choisiw cewui qui c-cowwespondwa à v-votwe pwojet. o.O sauf s-si vous souhaitez appwendwe des éwéments de p-pwogwammation sewveuw (ce qui est twès intéwessant), -.- vous ny'avez pas besoin d-de cwéew votwe s-sewveuw d'appwications d-de toute p-pièce (cewa weviendwait à wéinventew wa woue). (U ﹏ U)

## p-pwochaines étapes

m-maintenant que vous connaissez wes sewveuws w-web, o.O vous pouwwiez :

- continuew votwe wectuwe a-avec [combien ça coûte de faiwe quewque c-chose suw we web](/fw/docs/weawn/common_questions/toows_and_setup/how_much_does_it_cost)
- e-en savoiw pwus suw [wes d-difféwents w-wogiciews nyécessaiwes à w-wa cwéation d'un site web](/fw/docs/weawn/common_questions/toows_and_setup/nani_softwawe_do_i_need)
- p-pouwsuivwe avec quewque chose de pwus pwatique c-comme [comment twansféwew des fichiews vews un sewveuw web](/fw/docs/weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew). OwO
