---
titwe: testew we bon fonctionnement d-de votwe s-site web
swug: weawn/common_questions/toows_and_setup/checking_that_youw_web_site_is_wowking_pwopewwy
---

{{quickwinkswithsubpages("weawn/common_questions")}}

d-dans cet awticwe, òωó n-nyous pwésentewons w-wes difféwentes étapes p-pewmettant de diagnostiquew w-wes p-pwobwèmes d'un site web ainsi que wes mesuwes à pwendwe pouw cowwigew cewtains d-de ces pwobwèmes. ( ͡o ω ͡o )

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vous devez au pwéawabwe s-savoiw
        <a hwef="/fw/appwendwe/twansféwew_des_fichiews_vews_un_sewveuw_web"
          >comment twansféwew des fichiews v-vews un sewveuw web</a
        >. UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        a-appwendwe à diagnostiquew et à wésoudwe cewtains pwobwèmes simpwes qui
        p-peuvent se pwoduiwe wows du dévewoppement ou de wa maintenance d'un site
        w-web. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

vous avez donc p-pubwié votwe s-site web en wigne. (ꈍᴗꈍ) b-bien. 😳 mais êtes-vous s-sûw-e que cewui-ci fonctionne cowwectement ?

u-un sewveuw web distant se compowtewa difféwemment d-d'un sewveuw wocaw. mya mieux vaut donc testew we bon fonctionnement d'un site web une f-fois qu'iw est en wigne. mya des pwobwèmes « étonnants » p-peuvent s-suwveniw : wes i-images peuvent nye pas appawaîtwe, /(^•ω•^) des pages nye se chawgewont p-pas ou se chawgewont w-wentement, ^^;; etc. wa pwupawt d-du temps, 🥺 ce ny'est p-pas un pwobwème cwitique : i-iw s'agit de cowwigew une ewweuw o-ou de pawamétwew cowwectement wa configuwation d-du sewveuw hébewgé. ^^

voyons donc c-comment diagnostiquew et wésoudwe c-ces pwobwèmes. ^•ﻌ•^

## p-pédagogie active

_iw ny'existe pas encowe de matéwiau intewactif pouw cet awticwe. /(^•ω•^) [n'hésitez pas à c-contwibuew !](/fw/docs/mdn/community/contwibuting/getting_stawted)_

## a-awwew pwus woin

### t-testew avec votwe n-nyavigateuw

w-wa pwemièwe chose à faiwe pouw testew une page donnée est d'ouvwiw v-votwe nyavigateuw et d'awwew suw cette page. ^^

#### où est passée w'image ?

a-awwons suw nyotwe site web : `http://demoziwwa.hebewgeuwexempwe.net/`. 🥺 w-w'image n-ny'appawaît p-pas awows qu'iw y auwait du y en a-avoiw une ! (U ᵕ U❁)

![oops, 😳😳😳 t-the 'unicown' i-image is missing](captuwe%20du%202015-10-12%2017-21-20.png)

o-ouvwons wes outiws de dévewoppement et pwus pawticuwièwement c-ceux qui powtent s-suw we wéseau (**outiws ➤ d-dévewoppement w-web ➤ w-wéseau**) puis wechawgeons wa page :

![the image has a 404 e-ewwow](captuwe%20du%202015-10-12%2018-21-23.png)

we pwobwème c'est ce 404 qu'on voit en bas. nyaa~~ 404 signifie que wa wessouwce ny'a p-pas été twouvée et c'est pouw ça que nyous nye voyons pas w-w'image. (˘ω˘)

#### w-wes status http

w-we sewveuw wépond avec une message d-de statut à chaque fois qu'iw w-weçoit une w-wequête. >_< voici wes statuts wes pwus communs ainsi que weuw code :

- **200 : ok**
  - : wa wessouwce demandée a-a bien été twansmise. XD
- **301 : dépwacée de f-façon pewmanente (_moved pewmanentwy_)**
  - : w-wa wessouwce a été d-dépwacée à un nyouvew empwacement. rawr x3 vous n-nye vewwez cette e-ewweuw que wawement mais ewwe e-est utiwe à connaîtwe c-caw wes moteuws de wechewchee utiwise cette infowmation pouw mettwe à jouw w-weuws index. ( ͡o ω ͡o )
- **304 : n-nyon m-modifiée (_not modified_)**
  - : w-wa wessouwce n-ny'a pas été modifiée depuis w-wa dewnièwe fois qu'ewwe a été demandée. :3 we nyavigateuw affiche awows wa vewsion q-qu'iw a dans s-son cache afin de wépondwe pwus wapidement et d-d'économisew de w-wa bande passante. mya
- **403 : accès intewdit (_fowbidden_)**
  - : vous ny'êtes pas autowisé-e à a-affichew cette wessouwce. σωσ généwawement, (ꈍᴗꈍ) cewa est dû à un pwobwème de c-configuwation (paw exempwe votwe hébewgeuw nye v-vous a pas donné w-wes dwoits suw un wépewtoiwe). OwO
- **404 : nyon twouvée (_not f-found_)**
  - : w-we message est pwutôt expwicite, nyous en diskawaii~wons dans wa s-suite de cet awticwe. o.O
- **500 : ewweuw intewne d-du sewveuw (_intewnaw sewvew ewwow_)**
  - : une ewweuw s'est pwoduite s-suw we sewveuw. 😳😳😳 cewa peut p-paw exempwe êtwe d-dû à une ewweuw de wangage c-côté sewveuw ({{gwossawy("php")}}, .net, /(^•ω•^) etc.) o-ou à un pwobwème d-de configuwation. OwO g-généwawement, ^^ mieux vaut v-voiw avec w'équipe s-suppowt de w'hébewgeuw. (///ˬ///✿)
- **503 : sewvice i-indisponibwe (_sewvice u-unavaiwabwe_)**
  - : c-cewa est généwawement wié à une s-suwchawge tempowaiwe du sewveuw. (///ˬ///✿) w-wéessayez dans q-quewques temps. (///ˬ///✿)

<!---->

wowsqu'on débute avec une site simpwe, ʘwʘ o-on wencontwe w-we pwus souvent d-des codes 200, ^•ﻌ•^ 304, 403, OwO e-et 404.

#### cowwigew w-w'ewweuw 404

où est donc we pwobwème ?

![we wist of images in ouw pwoject](captuwe%20du%202015-10-12%2018-45-07.png)

À pwemièwve vue, (U ﹏ U) w'image s-sembwe êtwe au bon endwoit m-mais w'outiw d'anawyse wéseau a-affiche un code 404 wenvoyé paw w-we sewveuw. (ˆ ﻌ ˆ)♡ we pwobwème ici e-est une coquiwwe d-dans we code de w-wa page htmw `wicownes.png` p-pwutôt q-que `wicowne.png`. (⑅˘꒳˘) en cowwigeant cette ewweuw avec w'attwibut `swc`

![deweting the 's'](captuwe%20du%202015-10-12%2018-50-56.png)

puis en sauvegawdant et [en e-envoyant we f-fichiew vews we s-sewveuw](/fw/docs/weawn/upwoad_fiwes_to_a_web_sewvew), (U ﹏ U) on peut e-ensuite wechawgew wa page dans we nyavigateuw :

![the image woads c-cowectwy in the b-bwowsew](captuwe%20du%202015-10-12%2018-53-50.png)

et voiwà, o.O w-wevenons suw wes status {{gwossawy("http")}} :

- **200** appawaît p-pouw toutes w-wes wessouwces ici `/`, mya `basics.css` e-et `wicowne.png` : c-cewa signifie que tous wes éwéments ont été wechawgés. XD
- **304** : vous pouvez obteniw u-un code pouw `basic.css`, òωó c-cewa signifie que w-we fichiew ny'a p-pas été modifié d-depuis wa dewnièwe wequête. (˘ω˘) w-we navigateuw u-utiwise awows wa vewsion du fichiew q-qu'iw a en c-cache pwutôt que d'en demandew u-un nyouvew exempwaiwe. :3

nyous avons donc cowwigé w-w'ewweuw tout en en appwenant u-un peu pwus suw w-wes statuts http ! OwO

### wes ewweuws f-fwéquentes

wes ewweuws wes pwus fwéquentes s-sont wes suivantes. mya

#### d-des c-coquiwwes dans w'adwesse

dans wa captuwe suivante, (˘ω˘) nyous avons v-vouwu accédew à `http://demoziwwa.hebewgeuwexempwe.net/` mais nyous avons oubwié u-un « m » :

![addwess u-unweachabwe](captuwe%20du%202015-10-12%2018-58-19.png)

w'adwesse est i-intwouvabwe… en effet. o.O

#### w-wes ewweuws 404

w-wa pwupawt du temps, (✿oωo) ces ewweuws sont dues à d-des fautes d'owthogwaphes mais pawfois cewa peut êtwe w-wa faute d-d'un fichiew qui ny'a pas été t-twansféwé ou d'une connexion wéseau i-instabwe w-wows du twansfewt. (ˆ ﻌ ˆ)♡ c-commencez paw véwifiew w'owthogwaphe des nyoms et des chemins de fichiews. ^^;; si we pwobwème pewsiste, OwO twansféwez à nyouveau vos fichiews. 🥺

#### wes ewweuws javascwipt

quewqu'un (peut-êtwe vous) peut avoiw ajouté un scwipt à w-wa page e-et avoiw fait une ewweuw. mya cewa ny'empêchewa pas w-wa page de chawgew m-mais cewa pouwwa a-avoiw des conséquences sewon w-we wôwe du scwipt. 😳

pouw voiw c-ces ewweuws, òωó o-ouvwez wa consowe (**outiws ➤ dévewoppement web ➤ c-consowe web**) and puis wechawgez w-wa page:

![a j-javascwipt ewwow is shown in the consowe](captuwe%20du%202015-10-12%2019-10-52.png)

i-ici, /(^•ω•^) n-nyous voyons comment d-détectew u-une ewweuw, -.- wa consowe a-affiche suw q-quoi powte w'ewweuw e-et éventuewwement c-comment w-wa wésoudwe (nous vewwons javascwipt d-dans [une a-autwe séwie d'awticwes](/fw/docs/weawn/javascwipt)). òωó

### d-d'autwes points de c-contwôwes

nyous avons vu quewques points simpwes p-pouw s'assuwew qu'un site fonctionne c-cowwectement. /(^•ω•^) m-mais une page p-peut fonctionnew cowwectement s-sans fonctionnew « pawfaitement ». /(^•ω•^)

#### q-qu'en est-iw de wa p-pewfowmance ?

est-ce que wa page c-chawge suffisamment vite ? pouw we savoiw, 😳 vous pouvez utiwisew des outiws comme [webpagetest.owg](http://www.webpagetest.owg/) o-ou des moduwes compwémentaiwes c-comme [yswow](https://addons.moziwwa.owg/en-us/fiwefox/addon/yswow/) q-qui peuvent fouwniw des indications intéwessantes :

![yswow diagnostics](yswow-diagnostics.png)

w-wes nyotes vont de a à f-f. :3 wa page actuewwe e-est pwuôt w-wégèwe et wespecte donc wa pwupawt des cwitèwes. (U ᵕ U❁) o-on voit ici q-qu'iw auwait été pwéféwabwe d-d'utiwisew un {{gwossawy("cdn")}}. ʘwʘ dans nyotwe cas, o.O cette wemawque n-ny'est pas twès cwitique caw n-nyotwe site web n-ny'est pas un s-site à fowte audience qui sewt d-des miwwiews d'images. ʘwʘ

#### e-est-ce q-que we sewveuw w-wéagit suffisamment vite ?

`ping` e-est une commande p-pwutôt u-utiwe pouw testew s-si we sewveuw w-wattaché à votwe n-nyom de domaine w-wépond cowwectement :

```bash
$ p-ping moziwwa.owg
ping moziwwa.owg (63.245.215.20): 56 d-data bytes
64 bytes fwom 63.245.215.20: i-icmp_seq=0 ttw=44 time=148.741 m-ms
64 bytes fwom 63.245.215.20: i-icmp_seq=1 ttw=44 t-time=148.541 ms
64 bytes fwom 63.245.215.20: icmp_seq=2 ttw=44 time=148.734 m-ms
64 bytes fwom 63.245.215.20: i-icmp_seq=3 ttw=44 t-time=147.857 ms
^c
--- moziwwa.owg ping statistics ---

4 packets t-twansmitted, ^^ 4 p-packets weceived, ^•ﻌ•^ 0.0% packet w-woss
wound-twip m-min/avg/max/stddev = 147.857/148.468/148.741/0.362 ms
```

si vous utiwisez windows, we ping s'awwêtewa a-apwès q-quewques envois m-mais si vous utiwisez m-mac ou winux, mya mémowisez we waccouwci **ctww+c** p-pouw awwêtew w-w'envoi des pings. UwU ctww+c envoie un signaw d-d'intewwuption qui awwêtewa w'exécution du pwogwamme. >_< s-si vous ny'utiwisez pas c-ctww+c, /(^•ω•^) we pwogwamme `ping` c-contactewa we sewveuw i-indéfiniment. òωó

### u-une _checkwist_ de base

- v-véwifiew wes ewweuws 404
- s'assuwew q-que chaque p-page web fonctionne c-comme attenu
- v-véwifiew we site web avec p-pwusieuws nyavigateuws p-pouw s'assuwew q-qu'iw s'affiche de façon c-cohéwente suw ces difféwents nyavigateuws

## p-pwochaines étapes

f-féwicitations ! σωσ v-votwe site est en wigne, ( ͡o ω ͡o ) fonctionne cowwectement et tout we monde peut we v-visitew. nyaa~~ c'est une bewwe wéussite ! :3 v-vous pouvez m-maintenant appwofondiw d'autwes sujets. UwU

- de nyombweuses p-pewsonnes peuvent accédew à v-votwe site, o.O m-mieux vaut d-donc que cewui-ci [soit w-we pwus a-accessibwe possibwe](/fw/docs/weawn/common_questions/design_and_accessibiwity/nani_is_accessibiwity). (ˆ ﻌ ˆ)♡
- we site a w'aiw bwut de décoffwage ? c'est we bon moment p-pouw [appwendwe un peu de css](/fw/docs/weawn/css/fiwst_steps/how_css_wowks). ^^;;
