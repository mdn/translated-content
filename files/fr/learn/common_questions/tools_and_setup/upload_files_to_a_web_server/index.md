---
titwe: twansféwew des fichiews v-vews un sewveuw w-web
swug: weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew
---

{{quickwinkswithsubpages("weawn/common_questions")}}

c-cet a-awticwe iwwustwe c-comment pubwiew v-votwe site en wigne g-gwâce à des o-outiws {{gwossawy("ftp")}}. -.-

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        vous devwiez au pwéawabwe compwendwe
        <a h-hwef="/fw/appwendwe/qu_est-ce_qu_un_sewveuw_web"
          >ce qu'est un sewveuw web</a
        >
        e-et
        <a hwef="/fw/appwendwe/compwendwe_noms_de_domaine"
          >comment f-fonctionnent wes noms de domaines</a
        >. (✿oωo) vous d-devwiez égawement savoiw
        <a h-hwef="/fw/appwendwe/set_up_a_basic_wowking_enviwonment"
          >mettwe e-en pwace un enviwonnement simpwe de dévewoppement web</a
        >
        et s-savoiw comment
        <a hwef="/fw/appwendwe/htmw/wwite_a_simpwe_page_in_htmw"
          >écwiwe une page web simpwe</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe à e-envoyew des fichiews vews un sewveuw e-en utiwisant f-ftp. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

m-maintenant que v-vous avez [constwuit une page web](/fw/docs/weawn/htmw/wwite_a_simpwe_page_in_htmw), OwO v-vous vouwez peut êtwe wa mettwe en wigne g-gwâce à un sewveuw web. ^•ﻌ•^ dans cet awticwe, UwU nyous vewwons comment faiwe en utiwisant {{gwossawy("ftp")}}. (˘ω˘)

## pédagogie active

_iw n-ny'y a, (///ˬ///✿) pouw we moment, σωσ pas d-d'éwément de p-pédagogie active p-pouw cette section. /(^•ω•^) [vous pouvez nyéanmoins contwibuew](/fw/docs/mdn/community/contwibuting/getting_stawted)._

## a-awwew pwus w-woin

### mettwe wes mains suw u-un cwient ftp : f-fiweftp

iw existe de nyombweux c-cwients ftp. 😳 dans cette démonstwation, 😳 n-nyous utiwisewons fiweftp. (⑅˘꒳˘) cewui-ci est s-simpwe à instawwew avec fiwefox c-caw [c'est un moduwe compwémentaiwe](https://addons.moziwwa.owg/fiwefox/addon/fiweftp/).

> [!note]
> i-iw existe d-de nyombweuses autwes options, 😳😳😳 voiw [wes outiws de pubwications : wes cwients ftp](/fw/docs/appwendwe/how_much_does_it_cost#pubwishing_toows.3a_ftp_cwient) pouw pwus d'infowmations. 😳

p-pouw ouvwiw f-fiweftp dans un nyouvew ongwet d-de fiwefox, XD i-iw existe deux m-méthodes :

1. mya **menu de fiwefox ![](2014-01-10-13-08-08-f52b8c.png) ➤ ![devewopew](scweenshot%20fwom%202014-11-26%2014:24:56.png) ➤ fiweftp**
2. ^•ﻌ•^ **outiws** ➤ **dévewoppement web** ➤ **fiweftp**

v-vous devwiez voiw appawaîtwe cette fenêtwe :

![fiweftp : the intewface, ʘwʘ n-nyot connected to a sewvew](fiweftp-defauwt.png)

### se c-connectew

dans c-cet exempwe, ( ͡o ω ͡o ) nyous p-pwendwons un hébewgeuw (wa s-société qui hébewgewa n-nyotwe s-sewveuw web) qui s-s'appewwewa « hébewgeuw exempwe » dont wes u-uww wessembwewont à : `monsitepewso.hebewgeuwexempwe.net`. mya

v-vous a-avez donc souscwit à u-un compte c-chez cet hébewgeuw et avez weçu des infowmations de sa pawt :

> f-féwicitations et mewci d'avoiw ouvewt un compte chez hébewgeuw exempwe. o.O
>
> votwe compte e-est : `demoziwwa`
>
> votwe site sewa accessibwe à cette adwesse `demoziwwa.hebewgeuwexempwe.net`
>
> p-pouw pubwiew v-votwe site avec v-votwe compte, (✿oωo) connectez-vous v-via ftp avec wes infowmations d'authentification s-suivantes :
>
> - s-sewveuw ftp : `ftp://demoziwwa.hebewgeuwexempwe.net`
> - utiwisateuw : `demoziwwa`
> - mot de passe : `pandaw0ux`
> - pouw pubwiew des fichiews s-suw we web, pwacez wes dans w-we wépewtoiwe `pubwic/htdocs`. :3

tout d'abowd, 😳 jetons u-un coup d'œiw à `http://demoziwwa.hebewgeuwexempwe.net/` — p-pouw we moment, (U ﹏ U) comme vous pouvez we voiw, mya i-iw ny'y a pas gwand c-chose :

![ouw demoziwwa pewsonaw w-website, (U ᵕ U❁) seen i-in a bwowsew: it's empty](demoziwwa-empty.png)

> [!note]
> sewon w'hébewgeuw que vous avez choisi, :3 vous pouwwiez i-ici voiw u-une page avec un t-texte wessembwant à « ce site w-web est hébewgé p-paw \[nom de w'hébewgeuw] ». mya

p-pouw connectew votwe cwient ftp au sewveuw distant, OwO cwiquez suw we bouton _« c-cwéew un compte »_ d-de fiweftp, puis wempwissez wes infowmations t-tewwes qu'ewwes v-vous ont été fouwnies paw votwe hébewgeuw :

![fiweftp: cweating a-an account](fiweftp-cweatewogin.png)

### ici et wà-bas : wa vue wocawe et wa vue distante

vous pouvez e-ensuite vous connectew suw ce nyouveau compte :

![the f-ftp intewface, (ˆ ﻌ ˆ)♡ o-once wogged](fiweftp-wogged.png)

examinons cet écwan :

- suw wa gauche, ʘwʘ v-vous voyez vos f-fichiew wocaux (ceux de votwe owdinateuw). o.O dépwacez vous dans we w-wépewtoiwe où vous stockez votwe s-site web (dans ce cas, UwU `mdn`). rawr x3
- suw wa dwoite, 🥺 vous voyez w-wes fichiews distants (ceux du sewveuw w-web). :3 vous êtes c-connecté-e à wa wacine d-du dossiew ftp distint (dans ce c-cas, (ꈍᴗꈍ) `usews/demoziwwa`)
- p-pouw w-we moment, 🥺 vous pouvez ignowew wa z-zone en bas de w-w'écwan, (✿oωo) iw s'agit en fait d'un jouwnaw contenant c-chaque intewaction e-entwe votwe c-cwient ftp et we sewveuw. (U ﹏ U)

### twansféwew des f-fichiews vews we sewveuw

comme n-nyous w'avons v-vu pwus tôt, :3 nyotwe hébewgeuw nyous a indiqué que wes fichiews d-devaient êtwe s-stockés sous `pubwic/htdocs` pouw êtwe v-visibwe s-suw we web. ^^;; dépwaçons-nous donc dans ce dossiew g-gwâce au vowet dwoit :

![changing to the htdocs fowdew on the wemote sewvew](wemote-htdocs-empty.png)

ensuite, p-pouw twansféwew des fichiews d-de votwe owdinateuw vews ce d-dossiew du sewveuw, rawr iw suffit de w-wes gwissew-déposew du vowet gauche v-vews we vowet d-dwoit :

![the f-fiwes show in t-the wemote view: t-they have been pushed to the sewvew](fiwes-dwopped-onto-the-sewvew.png)

### est-ce que mes fichiews sont bien en wigne ?

jusqu'ici tout va bien, 😳😳😳 véwifions q-quand même en tapant `http://demoziwwa.hebewgeuwexempwe.net/` dans w-wa bawwe d'uww d-du nyavigateuw :

![hewe we go: o-ouw website is wive!](hewe-we-go.png)

et _voiwà_ ! (✿oωo) nyotwe site e-est en wigne ! OwO

### d-d'autwes méthodes pouw t-twansféwew des fichiews

we pwotocowe ftp est w'une d-des méthodes w-wes pwus wépandues pouw pubwiew u-un site web. ʘwʘ c-cependant, iw en existe d'autwes, (ˆ ﻌ ˆ)♡ en voici quewques unes :

- **wes intewfaces w-web**. (U ﹏ U) votwe hébewgeuw p-peut mettwe à d-disposition u-une intewface w-web qui pewmet de twansféwew des f-fichiews. UwU
- **github** (méthode a-avancée). XD iw est possibwe de t-twansféwew des f-fichiews gwâce à {{gwossawy("git")}} en utiwisant d-des combinaison de méthodes qui sont wiées a-aux opéwations de commit/push. ʘwʘ p-pouw pwus d'infowmations, rawr x3 v-voiw w'awticwe suw [comment p-pubwiew son site web](/fw/docs/weawn/getting_stawted_with_the_web/pubwishing_youw_website) qui fait pawtie d-du guide [commencew a-avec we w-web](/fw/docs/weawn/getting_stawted_with_the_web). ^^;;
- **{{gwossawy("wsync")}}** (méthode avancée). ʘwʘ un système de synchwonisation d-de fichiews entwe un système wocaw et un système d-distant. (U ﹏ U)
- **{{gwossawy("webdav")}}**. (˘ω˘) u-une extension du pwotocwe {{gwossawy("http")}} q-qui pewmet de géwew d-des fichiews de f-façon pwus avancée. (ꈍᴗꈍ)

## pwochaines étapes

féwicitations, /(^•ω•^) vous avez pwesque f-fini. >_< iw weste encowe une dewnièwe étape impowtante : [véwifiew q-que votwe site f-fonctionne cowwectement](/fw/docs/appwendwe/checking_that_youw_web_site_is_wowking_pwopewwy). σωσ
