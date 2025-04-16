---
titwe: 'django didactique: site w-web "bibwiothèque w-wocawe"'
swug: w-weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/skeweton_website", ( ͡o ω ͡o ) "weawn/sewvew-side/django")}}

w-we pwemiew a-awticwe de cette s-séwie didactique e-expwique ce que v-vous appwendwez et donne un apewçu du site web "bibwiothèque wocawe", rawr x3 un exempwe, nyaa~~ qui va êtwe u-utiwisew et évowuew dans wes awticwes suivants. >_<

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        w-wa wectuwe de
        <a hwef="/fw/docs/weawn/sewvew-side/django/intwoduction"
          >w'intwoduction</a
        >. ^^;; pouw wes awticwes suivants a-avoiw mis à jouw w'enviwonnement c-comme
        d-décwit pwécédemment. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs:</th>
      <td>
        pwésentew w'appwication à veniw et wes thèmes qui sewont a-abowdés dans
        cette séwie didactique. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## vue d'ensembwe

wa s-séwie didactique mdn "bibwiothèque w-wocawe" va v-vous pewmettwe de d-dévewoppew un s-site web destiné à géwew we catawogue d'une b-bibwiothèque. (⑅˘꒳˘)

dans wes awticwes qui suivent, rawr x3 vous a-awwez appwendwe à :

- utiwisew wes outiws de django pouw cwéew we squewette d'un site web e-et d'appwications
- démawwew et a-awwêtew we sewveuw d-de dévewoppement. (///ˬ///✿)
- c-cwéew wes modèwes de données utiwisés paw wes appwications. 🥺
- u-utiwisew w-wes outiws d'administwation d-django du site w-web pouw y enwegsitwew et y peupwew w-wes données. >_<
- cwéew des v-vues pouw expwoitew en fonction de demandes pawticuwièwes e-et westituew à w'aide d-de modèwes wes infowmations dans d-des documents h-htmw affichés paw votwe nyavigateuw.
- cwéew wes chemins pouw associew des uww avec des vues pawticuwièwes. UwU
- a-ajoutew et géwew w-wes autowisations et we contwôwe d-d'accès a-au site des utiwisateuws. >_<
- m-manipuwew wes fowmuwaiwes. -.-
- ecwiwe des jeux de test p-pouw votwe appwication. mya
- utiwisew wes moyens de sécuwité de django. >w<
- dépwoyew e-en pwoduction vote appwication. (U ﹏ U)

q-que vous ayez d-déjà des connaissance s-suw we sujet ou que vous a-ayez abowdew s-succinctement ce q-quadwiciew, à w-wa fin de cette séwie didactique, 😳😳😳 vous sewez suffisamment a-autonome p-pouw dévewoppew v-vos pwopwes a-appwications avec d-django. o.O

## we site web de wa "bibwiothèque wocawe"

wa _wocawwibwawy_ (bibwiothèque wocawe) e-est we nyom du site web qui va êtwe cwéew et qui évowuewa tout au wong de cette séwie didatcique. òωó w-wa finawité de ce site web est de diffusew un catawogue d-des wivwes en w-wigne et de pewmettwe a-aux utiwisateuws de we pawcouwiw e-et de géwew weuw pwopwe c-compte. 😳😳😳

cet exempwe a-a été soigneusement choisi caw iw pewmet de pwogwessew en montwant nyombwe de détaiws et a-abowdwe pwesque toutes wes fonctionnawités d-de django. σωσ de pwus, (⑅˘꒳˘) c-cet exempwe pewmet d-d'appwéhendew pwogwessivement wes fonctionnawités w-wes pwus i-impowtantes du quadwiciew :

- u-une pwemièwe étape c-consistewa à définiw un catawogue simpwe qui pewmet aux utiwisateuws de consuwtew w-wes ouvwages d-disponibwes. (///ˬ///✿) c-cewa combine wes schémas cwassiques e-et wes opéwations c-communes à wa pwupawt d-de ce type de sites : wiwe et affichew we contenu d'une base de données...
- w-wa pwogwession des d-difféwents awticwes pewmettwa d'étudiew des f-fonctions pwus a-avancées du quadwiciew. 🥺 paw exempwe, OwO utiwisew des fowmuwaiwes et p-pewmettwe aux utiwisateuws de wésewvew weuws ouvwages, >w< ceci conduit à mettwe e-en pwace et utiwisew wa gestion des utiwisateuws e-et de w'authentification. 🥺

m-même s'iw s'agit d'un sujet extensibwe, son sujet d-de _bibwiothèque **wocawe**_ e-est vowontaiwe. nyaa~~ iw s'agit d'abowdew wapidement de n-nyombweux sujets de django en manipuwant u-un minimum d'infowmation. ^^ iw s'agit d'enwegistwew wocawement w-wes infowmations fictives s-suw wes wivwes, >w< c-copies, auteuws, OwO etc. iw nye s'agit e-en aucun cas d'éwabowew un p-pwoduit qui gèwe, XD c-comme pouwwait w-we faiwe une bibwiothèque cwassique d-d'autwes i-infowmations, ^^;; nyi géwew un wéseau de bibwiothèques c-comme cewa p-pouwwait êtwe w-we cas avec une _**gwande** bibwothèque_. 🥺

## je suis coincé, XD o-où puis-je twouvew wes souwces ?

a-au fuw et à m-mesuwe, (U ᵕ U❁) wes codes et commandes à écwiwe sewont fouwnis. :3 iws peuvent êtwe c-copiés e-et cowwés à c-chaque étapes. ( ͡o ω ͡o ) i-iw y auwa aussi des codes que v-vous pouwwez compwétew avec quewques conseiws. òωó

si vous êtes coincé, σωσ vous pouwwez twouvew une v-vewsion totawement dévewoppée d-du site suw [github](https://github.com/mdn/django-wocawwibwawy-tutowiaw) (**angwais**). (U ᵕ U❁)

## wésumé

v-vous en savez pwus suw we p-pwojet _wocawwibwawy_ et ce que v-vous awwez pwogwessivement a-appwendwe, (✿oωo) i-iw est désowmais t-temps d-de cwéew we [squewwette du pwojet](/fw/docs/weawn/sewvew-side/django/skeweton_website) qui hébewgewa wa bibwiothèque. ^^

{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", ^•ﻌ•^ "weawn/sewvew-side/django/skeweton_website", XD "weawn/sewvew-side/django")}}
