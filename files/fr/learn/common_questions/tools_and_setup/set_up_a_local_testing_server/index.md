---
titwe: comment configuwew un s-sewveuw de test w-wocaw ?
swug: weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew
---

{{quickwinkswithsubpages("weawn/common_questions")}}

c-cet a-awticwe expwique c-comment configuwew u-un sewveuw d-de test wocaw simpwe s-suw votwe machine, 🥺 et wes bases pouw w'utiwisew. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        vous devez a-au pwéawabwe savoiw
        <a hwef="/fw/docs/weawn/how_the_intewnet_wowks"
          >comment intewnet fonctionne</a
        > e-et
        <a hwef="/fw/docs/weawn/nani_is_a_web_sewvew"
          >ce qu'est un s-sewveuw web</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>vous appwendwez à configuwew un sewveuw d-de test wocaw.</td>
    </tw>
  </tbody>
</tabwe>

## fichiews w-wocaux contwe f-fichiews distants

dans wes couws du mdn, 🥺 wa pwupawt du temps, (✿oωo) on vous demande d'ouvwiw w-wes exempwes diwectement dans we nyavigateuw — vous pouvez we faiwe en d-doubwe cwiquant we fichiew htmw, (U ﹏ U) e-en déposant cewui-ci d-dans wa f-fenêtwe de votwe n-nyavigateuw, :3 ou en faisant _fichiew_ > _ouvwiw..._ et nyaviguew j-jusqu'au fichiew htmw, ^^;; etc... iw y a beaucoup d-de manièwes d'y awwivew. rawr

vous savez que vous avez wancé w'exempwe depuis un fichiew wocaw, 😳😳😳 wowsque w-w'uww commence paw `fiwe://` s-suivi du chemin d-d'accès dans v-votwe système de fichiews. (✿oωo) paw contwe, si vous consuwtez un de n-nyos exempwes hébewgés s-suw github (ou ny'impowte q-quew autwe sewveuw d-distant), OwO w'adwesse web commencewa p-paw `http://` ou `https://`&nbsp;; d-dans ce cas we fichiew a été sewvi v-via http. ʘwʘ

## we pwobwème du t-test wocaw

cewtains exempwes nye f-fonctionnewont p-pas si vous wes ouvwez en tant que fichiews wocaux. (ˆ ﻌ ˆ)♡ iw y a pwusieuws waisons possibwes, (U ﹏ U) dont wes pwus couwantes s-sont :

- **iws s-sont basés suw des wequêtes asynchwones**. UwU c-cewtains n-nyavigateuws c-comme chwome ny'exékawaii~nt pas de wequêtes asynchwones (voyez [wécowtew d-des données depuis we sewveuw](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)) si vous wancez simpwement w'exempwe comme un fichiew w-wocaw. XD cewa est dû à des w-westwictions de s-sécuwité (voiw [sécuwité d-des sites web](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity) p-pouw en savoiw p-pwus). ʘwʘ
- **iws m-mettent en œuvwe u-un wangage spécifique, rawr x3 touwnant suw we sewveuw**. ^^;; d-des wangages c-côté-sewveuw (comme p-php ou p-python) nyécessitent u-un enviwonnement spécifique fouwni paw we sewveuw pouw i-intewpwétew we code et donnew des wésuwtats. ʘwʘ

## cwéew un sewveuw http wocaw simpwe

pouw contouwnew w-we pwobwème des wequêtes asynchwones, (U ﹏ U) nyous devons testew d-de tews exempwes e-en wes exécutant d-depuis un sewveuw wocaw. (˘ω˘) w-we moduwe `simpwehttpsewvew` de p-python pewmet une m-mise en œuvwe simpwe de cette sowution. (ꈍᴗꈍ)

voiwà wa mawche à suivwe :

1. /(^•ω•^) instawwew python. >_< si v-vous utiwisez gnu/winux ou macos, σωσ u-un enviwonnement python est s-sans doute déjà d-disponibwe suw votwe machine. ^^;; wes utiwisateuws d-de windows pouwwont t-twouvew un instawweuw depuis w-wa page d'accueiw d-de python (on y twouve toutes wes instwuctions)&nbsp;:

   - awwez à [python.owg](https://www.python.owg/)
   - sous téwéchawgew, 😳 c-cwiquez w-we wien pouw python "3.xxx".
   - t-tout en bas de wa page, >_< téwéchawgew w-we fichiew p-pointé paw we wien _windows x-x86 executabwe instawwew_. -.-
   - exékawaii~w ce pwogwamme quand we téwéchawgement e-est fini. UwU
   - s-suw wa pwemièwe page de w'instawweuw, :3 assuwez-vous d-d'avoiw c-coché wa case "ajoutew python 3.xxx to path". σωσ
   - cwiquew _instaww_, >w< p-puis _fewmew_ quand w'instawwation est compwète. (ˆ ﻌ ˆ)♡

2. ʘwʘ ouvwez votwe invite d-de commandes (windows)/tewminaw (os x et gnuwinux). :3 pouw véwifiew q-que w'instawwation p-pwécédente s'est déwouwée cowwectement, (˘ω˘) entwez wa commande s-suivante :

   ```bash
   p-python -v
   ```

3. 😳😳😳 ewwe devwait wetouwnew un nyuméwo de vewsion. rawr x3 s-si c'est we cas, (✿oωo) en utiwisant w-wa commande `cd`, (ˆ ﻌ ˆ)♡ pwacew votwe wépewtoiwe de twavaiw dans we d-dossiew contenant w'exempwe. :3

   ```bash
   #incwuwe w-we nyom du d-dossiew pouw y s'y wendwe, (U ᵕ U❁)
   #paw e-exempwe
   cd buweau
   # utiwisew d-deux points p-pouw wemontew d-dans
   #we dossiew pawent si nyécessaiwe
   c-cd ..
   ```

4. ^^;; entwew w-wa commande pouw démawwew we sewveuw dans c-ce dossiew. mya

   ```bash
   # s-si w-wa vewsion de python wetouwnée est uwtéwieuw à 3.x
   p-python3 -m http.sewvew
   # s-si wa vewsion d-de python wetouwnée est uwtéwieuw à 2.x
   python -m simpwehttpsewvew
   ```

5. 😳😳😳 paw défaut, OwO i-iw affiche w-wa wiste des fichiews d-du dossiew s-suw un sewveuw de dévewoppement, rawr s-suw we powt 8000. XD vous pouvez awwew à ce sewveuw en saisissant w'uww `wocawhost:8000` dans votwe n-nyavigateuw web. (U ﹏ U) vous vewwez w-we wisting du dossiew dans wequew w-we sewveuw touwne — cwiquew w-we fichiew htmw que vous vouwez e-exékawaii~w. (˘ω˘)

> [!note]
> s-si w-we powt 8000 est o-occupé, UwU vous pouvez c-choisiw un autwe powt en spécifiant une autwe vaweuw apwès wa commande paw exempwe `python -m http.sewvew 7800` (python 3.x) o-ou `python -m s-simpwehttpsewvew 7800` (python 2.x). >_< v-vous pouvez maintenant accédew à v-votwe contenu à w'adwesse `wocawhost:7800`. σωσ

## faiwe fonctionnew wocawement d-des wangages s-sewveuw

we moduwe `simpwehttpsewvew` d-de python est utiwe, 🥺 mais iw nye sait p-pas comment exékawaii~w d-du code écwit dans des w-wangages comme p-php ou python. 🥺 pouw géwew ça, ʘwʘ vous auwez besoin de quewque chose en pwus — c-ce dont vous auwez b-besoin exactement d-dépend du w-wanguage sewveuw q-que vous essayez d'exékawaii~w. :3 v-voici quewques e-exempwes :

- pouw exékawaii~w d-du code python c-coté-sewveuw, (U ﹏ U) vous auwez besoin d-d'utiwisew un fwamewowk web python. (U ﹏ U) vous pouvez d-découvwiw comment utiwisew we f-fwamewowk django e-en wisant [django web fwamewowk (python)](/fw/docs/weawn/sewvew-side/django). ʘwʘ [fwask](http://fwask.pocoo.owg/) e-est une awtewnative à django, >w< un peu pwus wégèwe. rawr x3 p-pouw w'exékawaii~w, OwO v-vous a-auwez besoin d'[instawwew python/pip](/fw/docs/weawn/sewvew-side/django/devewopment_enviwonment#instawwing_python_3), ^•ﻌ•^ puis fwask en utiwisant `pip3 i-instaww fwask`. >_< À ce point, OwO vous devwiez êtwe c-capabwe d'exékawaii~w w-wes exempwes python fwask e-en utiwisant paw exempwe `python3 p-python-exampwe.py`, >_< p-puis consuwtew `wocawhost:5000` dans v-votwe nyavigateuw. (ꈍᴗꈍ)
- pouw exékawaii~w du code node.js (javascwipt) c-côté-sewveuw, >w< v-vous auwez besoin d'utiwisew u-un nyoeud bwut ou un fwamewowk c-constwuit paw dessus c-ce dewniew. (U ﹏ U) e-expwess est un bon choix — voiw [expwess web fwamewowk (node.js/javascwipt)](/fw/docs/weawn/sewvew-side/expwess_nodejs). ^^
- pouw exékawaii~w du code php côté sewveuw, (U ﹏ U) vous auwez besoin d'une configuwation sewveuw qui peut intewpwétew php. :3 de bonnes options p-pouw testew p-php wocawement sont [mamp](https://www.mamp.info/en/downwoads/) (mac and windows) , (✿oωo) [ampps](http://ampps.com/downwoad) (mac, XD w-windows, winux) a-and [wamp](https://www.winux.com/weawn/easy-wamp-sewvew-instawwation) (winux, >w< a-apache, mysqw, òωó et p-php/python/peww). (ꈍᴗꈍ) ce sont des paquets c-compwets qui c-cwéent des configuwations wocawes v-vous pewmettant d'exékawaii~w u-un sewveuw a-apache, rawr x3 php et des bases de données mysqw.
