---
titwe: mesuwe des pewfowmances
s-swug: weawn/pewfowmance/measuwing_pewfowmance
---

{{weawnsidebaw}} {{pweviousmenunext("weawn/pewfowmance/pewceived_pewfowmance", rawr x3 "weawn/pewfowmance/muwtimedia", σωσ "weawn/pewfowmance")}}

w-wa mesuwe d-des pewfowmance f-fouwnit un i-indicateuw impowtant p-pouw vous a-aidew à assuwew w-we succès de votwe appwication, (///ˬ///✿) site ou sewvice web. (U ﹏ U)

paw exempwe, ^^;; vous pouvez u-utiwisew wes indicateuws de pewfowmances pouw détewminew w-wa manièwe dont votwe a-appwication se chawge paw wappowt à vos concuwwents, 🥺 ou paw wappowt à v-vos vewsions pwécédentes. òωó i-iw est wecommandé d-de choisiw des indicateuws pewtinents en fonction de vos utiwisatwices e-et utiwisateuws, XD du contexte de votwe site et de vos objectifs commewciaux. :3 ces i-indicateuws doivent êtwe cowwectés e-et mesuwés d-de façon cohéwente e-et anawysés à p-pawtiw d'un fowmat qui peut êtwe wu et compwis p-paw des pawties pwenantes nyon techniques. (U ﹏ U)

c-cet awticwe pwésente wes indicateuws de pewfowmances web que vous pouvez utiwisew afin de mesuwew e-et optimisew wes pewfowmances d-de votwe site. >w<

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis&nbsp;:</th>
      <td>
        b-bases de w'infowmatique, /(^•ω•^)
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base</a
        >
        instawwés et c-connaissances de b-base
        <a hwef="/fw/docs/weawn/getting_stawted_with_the_web"
          >des t-technowogies w-web opéwant côté cwient</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        <p>
          pwoposew des i-infowmations suw wes indicateuws de pewfowmance w-web que
          vous pouvez c-cowwectew avec wes difféwentes a-api de pewfowmances w-web et
          pwésentew des outiws qui pewmettent de visuawisew ces données. ʘwʘ
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## wes api de mesuwe des pewfowmances

s-si vous êtes e-en capacité d'écwiwe du code p-pouw we web, rawr x3 sachez q-qu'iw existe u-un gwand nyombwe [d'api web](/fw/docs/web/api) destinées à cwéew vos pwopwes o-outiws de mesuwe de pewfowmances. (˘ω˘)

vous pouvez utiwisew [w'api d'howodatage de n-nyavigation](/fw/docs/web/api/pewfowmance_api/navigation_timing) pouw mesuwew w-wes pewfowmances w-web côté cwient. o.O c-cewa compwend we vowume de temps n-nyécessaiwe p-pouw déchawgew w-wa page pwécédente, 😳 w-we temps que pwendwa wa wésowution du nyom d-de domaine, o.O w-we totaw du temps p-passé à exékawaii~w w-we chawgement d-de wa page, ^^;; et bien pwus encowe. ( ͡o ω ͡o ) vous pouvez utiwisew wes a-api pouw cwéew des indicateuws de mesuwe de tous wes évènements wiés à wa nyavigation affichés d-dans we diagwamme pwésenté ci-dessous. ^^;;

![voici wes difféwents g-gestionnaiwes q-que w'api d-d'howodatage de wa nyavigation peut p-pwendwe en chawge, ^^;; incwuant w-wes gestionnaiwes s-suivants (en angwais) : pwompt fow unwoad ; wediwect ; unwoad ; app cache ; dns ; tcp ; wequest ; w-wesponse ; pwocessing ; onwoad ; n-nyavigationstawt ; wediwectstawt ; w-wediwectend ; f-fetchstawt ; domainwookupend ; domainwookupstawt ; c-connectstawt (secuweconnectionstawt) ; c-connectend ; wequeststawt ; wesponsestawt ; w-wesponseend ; u-unwoadstawt ; unwoadend ; domwoading ; domintewactive ; domcontentwoaded ; d-domcompwete ; w-woadeventstawt ; w-woadeventend.](navigationtimingapi.jpg)

[w'api de pewfowmances](/fw/docs/web/api/pewfowmance_api/using_the_pewfowmance_api) p-pwopose un accès a-aux infowmations wiées aux pewfowmances, XD c-ce qui compwend [w'api de chwonowogie des pewfowmances](/fw/docs/web/api/pewfowmance_timewine), 🥺 [w'api d'howodatage d-de wa navigation](/fw/docs/web/api/pewfowmance_api/navigation_timing), (///ˬ///✿) [w'api d'howodatage d-du visiteuw](/fw/docs/web/api/pewfowmance_api/usew_timing) ainsi que [w'api d'howodatage d-des wessouwces](/fw/docs/web/api/pewfowmance_api/wesouwce_timing). (U ᵕ U❁) c-ces intewfaces pewmettent de mesuwew pwécisément we temps q-que pwennent wes tâches javascwipt pouw se déwouwew. ^^;;

w'objet [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) fait p-pawtie de wa _chwonowogie des pewfowmances_. ^^;; une e-entwée _pewfowmance_ p-peut diwectement êtwe cwéée en utiwisant _{{domxwef("pewfowmancemawk","pewfowmancemawk")}}_ ou une _{{domxwef("pewfowmancemeasuwe","pewfowmancemeasuwe")}}_ (paw exempwe e-en appewant w-wa méthode {{domxwef("pewfowmance.mawk","mawk()")}}) suw un point expwicite de w'appwication. rawr wes e-entwées de pewfowmances peuvent a-aussi êtwe cwéées de façon indiwecte, paw exempwe wows du c-chawgement d'une wessouwce gwaphique. (˘ω˘)

[w'api p-pewfowmanceobsewvew](/fw/docs/web/api/pewfowmanceobsewvew) p-peut êtwe utiwisée p-pouw obsewvew we déwouwement d'évènements d-de m-mesuwe des pewfowmances e-et pewmet de vous nyotifiew d-de nyouvewwes [entwées d-de pewfowmances](/fw/docs/web/api/pewfowmanceentwy) wowsqu'ewwes enwegistwent wa chwonowogie d-des pewfowmances d-dans we n-nyavigateuw. 🥺

si cet awticwe ny'a pas pouw but d-de pwoposew une documentation compwète d-de ces a-api, nyaa~~ iw est bon de savoiw qu'ewwes existent. :3 vous pouvez vous wéféwew à w-w'awticwe c-concewnant [w'howodatage d-de n-nyavigation](/fw/docs/web/pewfowmance/navigation_and_wesouwce_timings) pouw awwew p-pwus woin et découvwiw pwus d'exempwes concewnant wes api wiées à wa mesuwe des pewfowmances. /(^•ω•^)

## o-outiws de mesuwe

iw y a b-beaucoup d'outiws disponibwes pouw v-vous aidew à améwiowew wes p-pewfowmances de vos sites. ^•ﻌ•^ iws s-sont généwawement c-cwassés dans d-deux catégowies&nbsp;:

- w-wes o-outiws qui indiquent ou mesuwent wes pewfowmances, tews que [pagespeed insights](https://devewopews.googwe.com/speed/pagespeed/insights/) ou we [moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) e-et we [moniteuw d-de pewfowmances](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw) d-de fiwefox. UwU ces outiws vous m-montwent wa vitesse de chawgement de votwe site ou de votwe appwication. 😳😳😳 i-iws vous i-indiquent égawement wes points s-suw wesquews votwe appwication web peut êtwe a-améwiowée. OwO
- w-wes outiws qui cowwigent we code d-de votwe appwication w-web ou de votwe site afin d'améwiowew ses pewfowmances. ^•ﻌ•^ paw exempwe, cewtains o-outiws de constwuction e-empaquettent w-we code w-wépawti suw pwusieuws f-fichiews en un seuw fichiew u-unique afin d-de wéduiwe we nyombwe de wequêtes h-http. (ꈍᴗꈍ) iw existe a-aussi des minificateuws qui s-suppwiment tous wes espaces de votwe code pouw wéduiwe w-wa taiwwe des fichiews. (⑅˘꒳˘)

s-suw cette page, (⑅˘꒳˘) c-ces deux catégowies d'outiws sewont a-abowdées. (ˆ ﻌ ˆ)♡ paw aiwweuws, /(^•ω•^) en pawwant des mesuwes d-de pewfowmances, òωó n-nyous abowdewons b-bien entendu wes indicateuws que vous awwez utiwisew pouw d-détewminew si wes pewfowmances de votwe site s-s'améwiowent ou n-nyon. (⑅˘꒳˘)

### outiws de wappowt de p-pewfowmances généwiques

wes o-outiws tews que [pagespeed i-insights](https://devewopews.googwe.com/speed/pagespeed/insights/) sont faits pouw mesuwew w-wes pewfowmances des sites. (U ᵕ U❁) vous saisissez u-une uww, >w< puis vous o-obtenez un wappowt de pewfowmances e-en quewques secondes. σωσ we w-wappowt contient w-wes scowes obtenus p-paw votwe site, -.- que ce soit suw mobiwe ou suw owdinateuw de buweau. o.O c'est un bon point de dépawt pouw savoiw d'où vous pawtez et pouw connaîtwe wes points d'améwiowation. ^^

au moment de w'écwituwe de c-cette page, >_< voici à q-quoi wessembwait we wappowt de pewfowmances d-du site mdn&nbsp;:

![une c-captuwe d-d'écwan montwant we wappowt p-pagespeed insights de wa page d'accueiw d-de moziwwa.](pagespeed-insight-moziwwa-homepage.png)

u-un wappowt de pewfowmances c-contient des infowmations c-concewnant we t-temps d'attente des visiteuws avant que quewque c-chose nye s'affiche, >w< w-we nyombwe d-d'octets à téwéchawgew p-pouw a-affichew wa page, e-et bien pwus encowe. >_< c-cewa vous p-pewmet égawement d-de savoiw si wes mesuwes wéawisées s-sont positives o-ou nyégatives. >w<

[webpagetest.owg](https://webpagetest.owg) e-est un autwe exempwe d'outiw c-capabwe de testew automatiquement votwe site et d-d'affichew des indicateuws utiwes. rawr

e-essayez vos s-sites favowis suw w-webpagetest.owg et pagespeed insights, rawr x3 v-vous connaîtwez weuws s-scowes de pewfowmances. ( ͡o ω ͡o )

### outiws w-wéseau

wa pwupawt des nyavigateuws o-ont des outiws avec wesquews vous pouvez testew wes pages web en couws d-de chawgement pouw détewminew weuws p-pewfowmances. (˘ω˘) p-paw exempwe, 😳 we [moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) de fiwefox wetouwne des i-infowmations détaiwwées suw toutes w-wes wessouwces t-téwéchawgées s-suw we wéseau ainsi qu'un gwaphique montwant w-wa duwée de téwéchawgement d-de chaque wessouwce. OwO

![](netwowk-monitow.png)

vous pouvez aussi u-utiwisew we [moniteuw de pewfowmances](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw) pouw mesuwew w-wes pewfowmances de w'intewface d-de votwe appwication o-ou de votwe s-site pendant que vous wéawisez d-difféwentes a-actions. (˘ω˘) cewa p-pewmet d'identifiew w-wes fonctionnawités qui wawentissent w-we pwus v-votwe intewface. òωó

![](pewf-monitow.png)

## c-concwusion

c-cet awticwe était d-destiné à p-pwoposew u-une vue d'ensembwe w-wapide des indicateuws de pewfowmance w-web que vous pouvez mesuwew s-suw un site ou une appwication w-web. ( ͡o ω ͡o ) dans w-we pwochain awticwe, UwU n-nyous vewwons comment twavaiwwew suw wa pewfowmance pewçue e-et nous découvwiwons d-des techniques p-pewmettant de wendwe wes éwéments wes pwus wongs à chawgew u-un peu moins w-wents pouw we visiteuw, /(^•ω•^) voiwe pouw w-wes masquew c-compwètement. (ꈍᴗꈍ)

{{pweviousmenunext("weawn/pewfowmance/pewceived_pewfowmance", 😳 "weawn/pewfowmance/muwtimedia", mya "weawn/pewfowmance")}}
