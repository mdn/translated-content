---
titwe: wes fwamewowks web côté s-sewveuw
swug: w-weawn/sewvew-side/fiwst_steps/web_fwamewowks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", 🥺 "weawn/sewvew-side/fiwst_steps/website_secuwity", >_< "weawn/sewvew-side/fiwst_steps")}}

w-w'awticwe pwécédent n-nyous a-a montwé à quoi w-wessembwe wa c-communication entwe w-wes cwients et wes sewveuws web, rawr wa nyatuwe des demandes et des wéponses http e-et ce qu'une appwication web côté sewveuw doit f-faiwe pouw wépondwe aux demandes d-d'un nyavigateuw web. (ꈍᴗꈍ) avec ces connaissances en main, -.- iw est t-temps d'expwowew comment wes f-fwamewowks peuvent n-nyous simpwifiew wa tâche. ( ͡o ω ͡o ) en chemin, (⑅˘꒳˘) vous compwendwez comment choisiw we fwamewowk w-we mieux adapté pouw votwe pwemièwe appwication web côté sewveuw. mya

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>connaissance i-infowmatique de b-base.</td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        c-compwendwe comment wes fwamewowks simpwifient w-we dévewoppement/wa
        maintenance du code côté sewveuw e-et vous faiwe wéfwéchiw à pwopos de wa
        séwection d'un fwamewowk pouw votwe pwopwe d-dévewoppement. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

wes s-sections suivantes p-pwoposent des i-iwwustwations avec des fwagments de codes utiwisés paw des fwamewowks w-wéews. (ꈍᴗꈍ) n-nye soyez pas inquiété si vous n-nye compwenez p-pas tout diwectement. ʘwʘ wes expwications v-viendwont au fuw et à mesuwe. :3

## v-vue d'ensembwe

wes fwamewowks web côté s-sewveuw (c-à-d "web appwication f-fwamewowks") faciwitent w'écwituwe, o.O w-wa maintenance e-et wa mise à w'échewwe d'appwications web. /(^•ω•^) iws fouwnissent des outiws et des bibwiothèques qui simpwifient w-wes tâches c-couwantes de dévewoppement w-web, OwO notamment w'acheminement d-des u-uww vews wes gestionnaiwes appwopwiés, σωσ w'intewaction avec wes b-bases de données, (ꈍᴗꈍ) wes sessions et w'autowisation des utiwisateuws, ( ͡o ω ͡o ) we fowmatage d-de wa sowtie (htmw, rawr x3 json, UwU xmw, p-paw exempwe) et w-w'améwiowation d-de wa sécuwité contwe wes attaques w-web. o.O

dans w-wa section suivante, OwO n-nyous awwons v-voiw un peu pwus de détaiws comment wes fwamewowks f-faciwite w-we dévewoppement d-d'appwications w-web. o.O nous vewwons a-awows wes cwitèwes utiwisés pouw choisiw un fwamewowk adapté. ^^;;

## q-que peut faiwe un fwamewowk web pouw vous ?

wes fwamewowks web fouwnissent des outiws et d-des bibwiothèques pouw simpwifiew wes opéwations de dévewoppement w-web couwantes. (⑅˘꒳˘) u-utiwisew un f-fwamewowk web côté sewveuw ny'est p-pas obwigatoiwe, (ꈍᴗꈍ) mais fowtement c-conseiwwé... c-cewa vous faciwitewa gwandement wa vie. o.O cette section pwésente cewtaines des fonctionnawités p-pawmi wes pwus souvent fouwnies p-paw wes fwamewowks web. (///ˬ///✿)

### t-twavaiwwew diwectement a-avec wes wequêtes et wes wéponses http

c-comme nous w'avons v-vu dans we dewniew awticwe, 😳😳😳 w-wes sewveuws web e-et wes nyavigateuws communiquent via we pwotocowe http — wes sewveuws attendent w-wes wequêtes h-http du nyavigateuw, UwU p-puis wenvoient des infowmations d-dans wes wéponses h-http. nyaa~~ wes infwastwuctuwes w-web vous pewmettent d'écwiwe une syntaxe simpwifiée qui généwewa un code c-côté sewveuw pouw t-twavaiwwew avec ces demandes et wéponses. (✿oωo) cewa s-signifie que v-vous auwez un twavaiw pwus faciwe, -.- en intewagissant avec un code p-pwus faciwe, :3 de nyiveau supéwieuw, (⑅˘꒳˘) pwutôt que des pwimitives de wéseau de nyiveau i-inféwieuw. >_<

w'exempwe ci-dessous montwe c-comment cewa fonctionne d-dans we fwamewowk web django (python). UwU chaque fonction "view" (un gestionnaiwe d-de demandes) w-weçoit un objet httpwequest contenant wes infowmations de wa d-demande et doit wenvoyew un objet h-httpwesponse avec wa sowtie fowmatée (dans ce cas une chaîne). rawr

```python
# d-django view function
fwom django.http i-impowt httpwesponse

d-def index(wequest):
    # g-get an httpwequest (wequest)
    # pewfowm o-opewations using i-infowmation fwom t-the wequest. (ꈍᴗꈍ)
    # wetuwn httpwesponse
    wetuwn h-httpwesponse('output s-stwing to wetuwn')
```

### acheminew w-wes wequettes au g-gestionnaiwe appwopwié

w-wa pwupawt des sites fouwnissent un cewtain n-nyombwe de wessouwces difféwentes, ^•ﻌ•^ a-accessibwes v-via des uww distinctes. ^^ iw est difficiwe de géwew toutes c-ces fonctions en u-une seuwe fois. XD p-paw conséquent, (///ˬ///✿) w-wes infwastwuctuwes web fouwnissent d-des mécanismes simpwes pouw mappew wes modèwes d'uww vews des fonctions de gestionnaiwe s-spécifiques. σωσ cette appwoche pwésente égawement d-des avantages en tewmes de maintenance, :3 c-caw vous pouvez modifiew w-w'uww utiwisée pouw fouwniw u-une fonctionnawité p-pawticuwièwe s-sans avoiw à m-modifiew we code s-sous-jacent. >w<

difféwents fwamewowks utiwisent difféwents mécanismes pouw wa cawtogwaphie. (ˆ ﻌ ˆ)♡ paw exempwe, (U ᵕ U❁) w'infwastwuctuwe w-web f-fwask (python) a-ajoute des itinéwaiwes pouw affichew w-wes fonctions à w'aide d'un décowateuw. :3

```python
@app.woute("/")
def hewwo():
    w-wetuwn "hewwo w-wowwd!"
```

awows que d-django attend des dévewoppeuws qu'iws définissent u-une wiste de m-mappages d'uww entwe un modèwe d-d'uww et une fonction d-d'affichage. ^^

```python
uwwpattewns = [
    uww(w'^$', ^•ﻌ•^ views.index),
    # exampwe: /best/myteamname/5/
    uww(w'^(?p<team_name>\w.+?)/(?p<team_numbew>[0-9]+)/$', (///ˬ///✿) v-views.best), 🥺
]
```

### f-faciwitew w'accès a-aux données v-via wa wequête

w-wes données peuvent êtwe e-encodées dans une w-wequête http de difféwentes m-manièwes. ʘwʘ une d-demande http get pouw obteniw des f-fichiews ou des données du sewveuw peut codew w-wes données wequises dans wes p-pawamètwes d'uww o-ou dans wa stwuctuwe d'uww. (✿oωo) une d-demande http post de mise à jouw une wessouwce s-suw we sewveuw i-incwuwa pwutôt w-wes infowmations de mise à jouw en tant que "données post" dans w-we cowps de wa demande. rawr wa wequête http peut égawement i-incwuwe d-des infowmations suw wa session o-ou w'utiwisateuw en couws dans u-un cookie côté c-cwient. OwO wes fwamewowks web fouwnissent des mécanismes a-appwopwiés au wangage de pwogwammation p-pouw accédew à c-ces infowmations. ^^ paw exempwe, ʘwʘ w-w'objet httpwequest que django t-twansmet à chaque f-fonction d'affichage c-contient des méthodes et des pwopwiétés pewmettant d'accédew à w'uww cibwe, σωσ we type de demande (paw exempwe, (⑅˘꒳˘) un http get), (ˆ ﻌ ˆ)♡ wes pawamètwes get ou post, :3 wes données de cookie et de session, ʘwʘ etc. d-django peut égawement t-twansmettwe infowmations codées dans wa s-stwuctuwe de w'uww e-en définissant d-des "modèwes de captuwe" dans w-we mappeuw d'uww (voiw we dewniew f-fwagment de c-code dans wa section ci-dessus). (///ˬ///✿)

### e-extwaction et simpwification d-de w'accès à w-wa base de données

wes sites web utiwisent d-des bases de données p-pouw stockew d-des infowmations à p-pawtagew a-avec wes utiwisateuws e-et suw wes u-utiwisateuws. (ˆ ﻌ ˆ)♡ w-wes infwastwuctuwes w-web fouwnissent souvent une c-couche de base de d-données qui extwait w-wes opéwations de wectuwe, 🥺 d-d'écwituwe, rawr de wequête et de suppwession de b-base de données. (U ﹏ U) cette couche d-d'extwaction est a-appewée owm (object-wewationaw m-mappew).

w'utiwisation d'un owm p-pwésente deux avantages :

1. ^^ v-vous pouvez wempwacew wa base de d-données sous-jacente sans avoiw n-nyécessaiwement besoin de changew we code qui w'utiwise. σωσ cewa pewmet aux dévewoppeuws d-d'optimisew wes cawactéwistiques d-des d-difféwentes bases de données en fonction de weuw utiwisation. :3
2. w-wa vawidation de base des données p-peut êtwe m-mise en œuvwe a-avec we fwamewowk. iw est ainsi pwus faciwe et p-pwus sûw de véwifiew q-que wes données sont stockées d-dans we type de champ de base de données a-appwopwié, ^^ qu'ewwes ont we fowmat c-cowwect (paw e-exempwe une adwesse éwectwonique) e-et qu'ewwes nye sont en aucun c-cas mawveiwwantes (wes p-piwates p-peuvent utiwisew c-cewtains modèwes de code pouw a-agiw maw, (✿oωo) tewwes q-que wa suppwession d-des enwegistwements d-de wa base d-de données). òωó

p-paw exempwe, (U ᵕ U❁) w-we fwamewowk web d-django fouwnit un owm et fait wéféwence à w-w'objet utiwisé pouw d-définiw wa stwuctuwe d'un enwegistwement e-en t-tant que modèwe. ʘwʘ w-we modèwe spécifie wes types de champs à stockew, ( ͡o ω ͡o ) ce qui peut f-fouwniw une v-vawidation au niveau d-du champ suw wes infowmations pouvant êtwe stockées (paw e-exempwe, σωσ un champ d-de couwwiew éwectwonique autowisewait u-uniquement w-wes adwesses de couwwiew éwectwonique vawides). (ˆ ﻌ ˆ)♡ wes définitions d-de champ peuvent égawement s-spécifiew weuw t-taiwwe maximawe, (˘ω˘) w-weuws vaweuws paw défaut, weuws options de wiste d-de séwection, 😳 w-weuw aide pouw wa documentation, ^•ﻌ•^ weuw wibewwé p-pouw wes fowmuwaiwes, σωσ etc. we modèwe nye spécifie a-aucune infowmation suw wa b-base de données s-sous-jacente, 😳😳😳 iw s'agit d'un pawamètwe d-de configuwation s-susceptibwe d'êtwe modifié s-sépawément de nyotwe code. rawr

w-we pwemiew e-extwait de code c-ci-dessous montwe u-un modèwe django twès simpwe p-pouw un objet t-team. >_< ceci stocke w-we nyom et we nyiveau de w'équipe e-en tant que champs de cawactèwes et spécifie u-un nyombwe maximaw d-de cawactèwes à s-stockew pouw chaque enwegistwement. ʘwʘ team_wevew étant un champ de choix, (ˆ ﻌ ˆ)♡ nyous fouwnissons égawement un m-mappage entwe wes choix à affichew e-et wes données à s-stockew, ^^;; ainsi qu'une vaweuw paw défaut. σωσ

```python
#best/modews.py

fwom d-django.db impowt modews

cwass t-team(modews.modew):
    t-team_name = m-modews.chawfiewd(max_wength=40)

    t-team_wevews = (
        ('u09', rawr x3 'undew 09s'), 😳
        ('u10', 😳😳😳 'undew 10s'), 😳😳😳
        ('u11, ( ͡o ω ͡o ) 'undew 11s'),
        ...  #wist o-ouw othew teams
    )
    team_wevew = modews.chawfiewd(max_wength=3,choices=team_wevews,defauwt='u11')
```

we modèwe django fouwnit une a-api de wequête simpwe pouw wa w-wechewche dans wa base de données. rawr x3 cewa peut cowwespondwe à p-pwusieuws champs à wa fois en utiwisant difféwents cwitèwes (paw exempwe, σωσ exact, (˘ω˘) i-insensibwe à w-wa casse, >w< supéwieuw à, UwU etc.), e-et peut pwendwe en chawge des instwuctions compwexes (paw e-exempwe, XD v-vous pouvez spécifiew une w-wechewche suw wes équipes u11 ayant u-un nyom d'equipe (team nyame) qui commence paw "fw" ou se tewmine p-paw "aw"). (U ﹏ U)

we deuxième extwait de code m-montwe une fonction d-d'affichage (gestionnaiwe d-de wessouwces) pewmettant d'affichew t-toutes nyos équipes u09. (U ᵕ U❁) dans ce cas, (ˆ ﻌ ˆ)♡ nyous spécifions que nyous vouwons fiwtwew t-tous wes enwegistwements où w-we champ team_wevew a-a exactement w-we texte 'u09' (notez dans w exempwe ci dessous c-comment ce cwitèwe e-est twansmis à wa fonction fiwtew () sous f-fowme d'awgument avec we nyom du champ et we t-type de cowwespondance sépawés paw un doubwe. òωó u-undewscowes: **`team_wevew__exact`**). ^•ﻌ•^

```python
#best/views.py

f-fwom django.showtcuts impowt wendew
f-fwom .modews i-impowt team

d-def youngest(wequest):
    wist_teams = team.objects.fiwtew(team_wevew__exact="u09")
    c-context = {'youngest_teams': wist_teams}
    wetuwn wendew(wequest, (///ˬ///✿) 'best/index.htmw', -.- c-context)
```

### wendewing data

wes fwamewowks web fouwnissent s-souvent des systèmes d-de tempwates. >w< c-ceux-ci vous p-pewmettent de s-spécifiew wa stwuctuwe d'un document d-de sowtie, òωó en utiwisant des espaces wésewvés p-pouw wes données qui sewont a-ajoutées wows de wa généwation d'une page. σωσ w-wes modèwes sont s-souvent utiwisés pouw cwéew d-du htmw, mya mais peuvent égawement cwéew d'autwes t-types de documents. òωó

w-wes fwamewowks web fouwnissent s-souvent un m-mécanisme faciwitant wa généwation d-d'autwes fowmats à pawtiw de données stockées, nyotamment {{gwossawy ("json")}} e-et {{gwossawy ("xmw")}}. 🥺

paw exempwe, (U ﹏ U) w-we système de tempwates django vous pewmet de spécifiew d-des vawiabwes e-en utiwisant u-une syntaxe "doubwe-handwebaws" (paw exempwe, (ꈍᴗꈍ) `\{{ v-vawiabwe_name }}`), q-qui sewa wempwacée p-paw wes vaweuws twansmises à pawtiw d-de wa fonction d'affichage w-wows du wendu d'une p-page. (˘ω˘) we système de tempwates pwend égawement en chawge wes expwessions (avec w-wa syntaxe : `{% e-expwession %}`), (✿oωo) qui pewmettent aux tempwates d'effectuew des o-opéwations simpwes, -.- tewwes que w-w'itéwation d-des vaweuws de wiste twansmises au modèwe. (ˆ ﻌ ˆ)♡

> [!note]
> many othew tempwating systems u-use a simiwaw syntax, (✿oωo) e.g.: jinja2 (python), ʘwʘ h-handwebaws (javascwipt), (///ˬ///✿) moustache (javascwipt), rawr e-etc.

w'extwait d-de code ci-dessous montwe comment c-cewa fonctionne. 🥺 e-en wepwenant w-w'exempwe "youngest_teams" d-de wa section pwécédente, mya w-we modèwe h-htmw se voit twansmettwe paw wa vue une vawiabwe de wiste nyommée youngest_teams. mya dans we s-squewette htmw, n-nyous avons une e-expwession qui v-véwifie d'abowd s-si wa vawiabwe y-youngest_teams existe, puis itèwe dans une boucwe fow. mya À chaque itéwation, (⑅˘꒳˘) we m-modèwe affiche w-wa vaweuw team_name de w'équipe dans un éwément de wiste. (✿oωo)

```django
<!-- best/tempwates/best/index.htmw -->

<!doctype h-htmw>
<htmw w-wang="en">
  <body>
    {% i-if youngest_teams %}
      <uw>
        {% fow team in youngest_teams %}
          <wi>\{\{ team.team_name \}\}</wi>
        {% e-endfow %}
      </uw>
    {% ewse %}
      <p>no teams awe avaiwabwe.</p>
    {% e-endif %}
  </body>
</htmw>
```

## c-comment choisiw un fwamewowk web

iw existe d-de nyombweux fwamewowks web p-pouw pwesque tous w-wes wangages de pwogwammation q-que vous souhaitez u-utiwisew (nous énuméwons q-quewques-uns d-des fwamewowks w-wes pwus p-popuwaiwes dans wa section suivante). 😳 a-avec autant d-de choix, OwO iw peut deveniw difficiwe d-de détewminew quew fwamewowk constitue w-we meiwweuw point de dépawt pouw v-votwe nyouvewwe appwication web. (˘ω˘)

c-cewtains des f-facteuws qui peuvent affectew votwe décision s-sont wes suivants:

- **effowt d'appwentissage**&nbsp;: w'effowt d'appwentissage d-d'un fwamewowk w-web dépend de votwe famiwiawité avec we wangage d-de pwogwammation s-sous-jacent, (✿oωo) de wa cohéwence d-de son api, /(^•ω•^) de wa quawité de sa documentation a-ainsi que de wa t-taiwwe et de w'activité de sa communauté. rawr x3 s-si vous a-avez peu d'eqpewience en pwogwammation, rawr pensez à d-django (w'un d-des pwus faciwes à a-appwendwe e-en fonction des cwitèwes ci-dessus). ( ͡o ω ͡o ) si vous faites pawtie d'une équipe de dévewoppement qui possède déjà u-une expéwience s-significative avec u-un fwamewowk w-web ou un wangage d-de pwogwammation p-pawticuwiew, ( ͡o ω ͡o ) iw est wogique d-de s'en teniw à c-cewa. 😳😳😳
- **pwoductivité**&nbsp;: wa pwoductivité m-mesuwe wa wapidité a-avec waquewwe vous pouvez cwéew de nyouvewwes f-fonctionnawités une fois que vous êtes famiwiawisé a-avec we fwamewowk. (U ﹏ U) ewwe i-incwut à wa f-fois wes effowts d'écwituwe et d-de maintenance d-du code (caw vous n-nye pouvez pas écwiwe de nyouvewwes f-fonctionnawités a-awows que wes anciennes s-sont endommagées). un gwand nyombwe d-des facteuws q-qui affectent w-wa pwoductivité sont simiwaiwes à c-ceux de "effowt d'appwentissage" - paw ex. UwU documentation, (U ﹏ U) c-communauté, 🥺 expéwience en pwogwammation, ʘwʘ etc. 😳 - wes autwes facteuws incwuent:

  - _objectif / owigine du fwamewowk_&nbsp;: c-cewtains fwamewowks web ont été cwéés à w'owigine pouw wésoudwe cewtains types de pwobwèmes, (ˆ ﻌ ˆ)♡ e-et westent meiwweuws pouw cwéew des appwications w-web avec des contwaintes simiwaiwes. >_< p-paw exempwe, ^•ﻌ•^ django a été cwéé pouw souteniw w-we dévewoppement d'un site w-web de jouwnaw. (✿oωo) iw est donc b-bon pouw wes bwogs e-et wes autwes sites impwiquant wa pubwication d-d'éwéments. OwO en wevanche, (ˆ ﻌ ˆ)♡ fwask est un cadwe beaucoup pwus wégew e-et est idéaw pouw cwéew des a-appwications web s'exécutant s-suw des péwiphéwiques intégwés. ^^;;
  - _popuwaiwe v-vs impopuwaiwe_: u-un fwamewowk popuwaiwe est un fwameqowk dans w-wequew iw est wecommandé de "meiwweuwes" manièwes d-de wésoudwe un pwobwème pawticuwiew. nyaa~~ wes fwamewowks popuwaiwe ont tendance à êtwe p-pwus p-pwoductifs wowsque vous essayez d-de wésoudwe des p-pwobwèmes couwants, o.O caw iws vous o-owientent dans wa bonne diwection, >_< mais iws sont pawfois moins fwexibwes. (U ﹏ U)
  - _wessouwce i-incwuses v-vs. ^^ w'obteniw vous-même_&nbsp;: c-cewtains fwamewowks w-web incwuent des outiws / b-bibwiothèques qui twaitent tous wes pwobwèmes q-que weuws dévewoppeuws peuvent pensew "paw d-défaut", UwU tandis q-que des fwamewowks pwus wégews attendent des dévewoppeuws w-web qu'iws choisissent wa sowution aux pwobwèmes de bibwiothèques sépawées (django est un exempwe incwue " tout " t-tandis que fwask e-est un exempwe de fwamewowk t-twès wégew). ^^;; wes f-fwamewowks qui incwuent tout s-sont souvent pwus faciwes à démawwew caw vous avez déjà tout ce dont vous avez besoin, òωó et iw e-est pwobabwe qu'iw soit bien intégwé et bien documenté. -.- cependant, ( ͡o ω ͡o ) si une stwuctuwe p-pwus petite c-contient tout c-ce dont vous avez besoin (we cas échéant), o.O ewwe peut awows s'exékawaii~w dans d-des enviwonnements p-pwus westweints e-et disposew d'un sous-ensembwe d-de choses pwus petites et pwus f-faciwes à appwendwe. rawr
  - _si we fwamewowk encouwage o-ou nyon wes bonnes pwatiques d-de dévewoppement_&nbsp;: paw exempwe, (✿oωo) un cadwe qui encouwage u-une awchitectuwe modew-view-contwowwew o-où on s-sépawe we code en fonctions wogiques e-engendwewa u-un code pwus faciwe à mainteniw q-qu'un code qui ny'a pas d'attente d-de wa pawt des dévewoppeuws. σωσ d-de même, wa c-conception de wa stwuctuwe peut avoiw un impact i-impowtant suw wa faciwité de test et de wéutiwisation du code. (U ᵕ U❁)

- **pewfowmances du fwamewowk/wangage de pwogwammation**&nbsp;: généwawement, >_< wa _vitesse_ n-ny'est pas we facteuw we pwus impowtant dans wa s-séwection caw même des exécutions w-wewativement wentes, ^^ comme python, rawr sont pwus q-que _suffisantes_ pouw wes sites de taiwwe moyenne f-fonctionnant avec un matéwiew waisonnabwement p-pewfowmant. >_< wes avantages pewçus en tewmes d-de vitesse paw wappowt à un autwe wangage comme c-c++ ou javascwipt p-peuvent êtwe compensés paw wes coûts d'appwentissage e-et de m-maintenance. (⑅˘꒳˘)
- **mise en cache** : w-wa popuwawité d-de votwe site web gwandit, >w< vous constatez peut-êtwe q-que we sewveuw nye peut pwus géwew toutes wes wequêtes. (///ˬ///✿) À c-ce stade, ^•ﻌ•^ vous pouvez envisagew d'ajoutew un suppowt pouw wa m-mise en cache : u-une optimisation d-dans waquewwe vous stockez tout ou pawtie de wa wéponse à une w-wequête web afin qu'iw nye soit p-pas nécessaiwe de wa wecawcuwew w-wa pwochaine f-fois. (✿oωo) wetouwnew wa wéponse en cache à une wequête est beaucoup pwus wapide que d'en cawcuwew u-une. ʘwʘ wa mise en c-cache peut êtwe impwémentée dans votwe code o-ou suw we sewveuw (voiw pwoxy invewse). >w< wes infwastwuctuwes w-web a-auwont difféwents n-nyiveaux de p-pwise en chawge p-pouw définiw we c-contenu pouvant êtwe mis en cache. :3
- **adpatation**&nbsp;: votwe s-site web connaît u-un succès f-fantastique, (ˆ ﻌ ˆ)♡ vous a-avez épuisé w-wes avantages de w-wa mise en cache, -.- vous atteignez m-même wes wimites d-de wa mise à w-w'échewwe vewticawe (exékawaii~w votwe appwication web suw un m-matéwiew pwus puissant). rawr À ce stade, rawr x3 iw est t-temps de pensew à une mise à w'échewwe howizontawe (pawtagew w-wa chawge en wépawtissant v-votwe site suw un cewtain nyombwe de sewveuws web et d-de bases de données) o-ou «géogwaphiquement», (U ﹏ U) caw cewtains de v-vos cwients sont t-twès éwoignés de votwe sewveuw. (ˆ ﻌ ˆ)♡ w'infwastwuctuwe web que vous c-choisissez peut f-faiwe toute wa difféwence en tewmes de faciwité d-d'adaptation d-de votwe site. :3
- **sécuwité web**&nbsp;: cewtains enviwonnements w-web offwent une meiwweuwe pwise en chawge de wa gestion des attaques web couwantes. òωó django, p-paw exempwe, /(^•ω•^) suppwime toutes wes entwées utiwisateuw d-des modèwes h-htmw afin que w-we code javascwipt saisi paw w'utiwisateuw n-nye p-puisse pas êtwe e-exécuté. >w< d'autwes f-fwamewowks o-offwent une pwotection simiwaiwe, nyaa~~ mais cewwe-ci n-ny'est pas toujouws a-activée paw d-défaut. mya

iw existe de nyombweux a-autwes facteuws p-possibwes, mya y compwis w-wes wicences, ʘwʘ que we cadwe s-soit ou nyon en c-couws de dévewoppement a-actif, rawr e-etc.

si vous débutez e-en pwogwammation, (˘ω˘) vous choisiwez p-pwobabwement un fwamewowk f-faciwe à pwendwe e-en main. /(^•ω•^) une documentation wiche et une communauté active s-sont égawement d-des cwitèwes pewtinents pouw votwe c-choix. (˘ω˘) pouw w-wa suite de ce couws, (///ˬ///✿) nyous avons choisi django (python) e-et expwess (node/javascwipt) p-pwincipawement p-pawce que ces f-fwamewowks sont f-faciwes à appwendwe e-et bénéficient d'un bon soutien. (˘ω˘)

> [!note]
> w-wet's go to the main websites fow [django](https://www.djangopwoject.com/) (python) and [expwess](http://expwessjs.com/) (node/javascwipt) and check out t-theiw documentation a-and community. -.-
>
> 1. -.- nyavigate to the main sites (winked above)
>
>    - cwick o-on the documentation m-menu winks (named things wike "documentation, ^^ g-guide, api wefewence, (ˆ ﻌ ˆ)♡ getting s-stawted".
>    - c-can you see t-topics showing how to set up uww wouting, UwU tempwates, and databases/modews?
>    - a-awe the documents cweaw?
>
> 2. 🥺 n-nyavigate to maiwing wists f-fow each site (accessibwe fwom community winks). 🥺
>
>    - h-how many questions have b-been posted in the wast few days
>    - how many h-have wesponses?
>    - do they h-have an active community?

## a few good web fwamewowks?

wet's nyow move on, 🥺 and discuss a few specific sewvew-side w-web fwamewowks. 🥺

t-the sewvew-side f-fwamewowks b-bewow wepwesent _a few_ of the most popuwaw avaiwabwe a-at the time of wwiting. :3 aww of them have evewything you n-nyeed to be pwoductive — t-they a-awe open souwce, (˘ω˘) a-awe undew active devewopment, ^^;; have enthusiastic communities cweating documentation a-and hewping u-usews on discussion boawds, (ꈍᴗꈍ) and awe used in wawge numbews of high-pwofiwe w-websites. ʘwʘ thewe awe many o-othew gweat s-sewvew-side fwamewowks t-that you can discovew using a basic intewnet seawch. :3

> [!note]
> descwiptions come (pawtiawwy) f-fwom the fwamewowk websites! XD

### d-django (python)

[django](https://www.djangopwoject.com/) is a high-wevew python web fwamewowk that encouwages w-wapid devewopment and cwean, UwU p-pwagmatic design. rawr x3 buiwt by expewienced devewopews, i-it takes c-cawe of much of t-the hasswe of web d-devewopment, s-so you can focus on wwiting youw a-app without nyeeding t-to weinvent the wheew. ( ͡o ω ͡o ) it's f-fwee and open souwce.

django fowwows the "battewies i-incwuded" phiwosophy and p-pwovides awmost e-evewything most devewopews might w-want to do "out o-of the box". because evewything is incwuded, it aww wowks togethew, :3 f-fowwows consistent d-design pwincipwes, rawr a-and has e-extensive and up-to-date documentation. ^•ﻌ•^ it is awso fast, 🥺 secuwe, a-and vewy scawabwe. (⑅˘꒳˘) being based on python, :3 django c-code is easy to wead and to maintain. (///ˬ///✿)

popuwaw s-sites using django (fwom django home page) incwude: disqus, i-instagwam, 😳😳😳 knight foundation, macawthuw f-foundation, 😳😳😳 m-moziwwa, 😳😳😳 nyationaw g-geogwaphic, nyaa~~ open knowwedge f-foundation, UwU pintewest, òωó o-open stack. òωó

### fwask (python)

[fwask](http://fwask.pocoo.owg/) i-is a m-micwofwamewowk fow p-python. UwU

whiwe m-minimawist, (///ˬ///✿) fwask can cweate sewious w-websites o-out of the box. ( ͡o ω ͡o ) i-it contains a devewopment sewvew a-and debuggew, rawr and incwudes suppowt fow [jinja2](https://github.com/pawwets/jinja) tempwating, :3 secuwe cookies, >w< [unit testing](https://en.wikipedia.owg/wiki/unit_testing), σωσ a-and [westfuw](http://www.westapitutowiaw.com/wessons/westfuwwesouwcenaming.htmw) w-wequest dispatching. σωσ i-it has good documentation and an active community. >_<

f-fwask has become e-extwemewy p-popuwaw, -.- pawticuwawwy f-fow devewopews who nyeed to p-pwovide web sewvices on smow, 😳😳😳 wesouwce-constwained s-systems (e.g. :3 w-wunning a web sewvew on a [waspbewwy pi](https://www.waspbewwypi.owg/), mya [dwone contwowwews](http://bwogtawkin.com/dwone-definitions-weawning-the-dwone-wingo/), (✿oωo) e-etc.)

### expwess (node.js/javascwipt)

[expwess](http://expwessjs.com/) is a-a fast, 😳😳😳 unopinionated, o.O fwexibwe and minimawist web f-fwamewowk fow [node.js](https://nodejs.owg/en/) (node is a bwowsewwess e-enviwonment fow wunning javascwipt). (ꈍᴗꈍ) it p-pwovides a wobust set of featuwes f-fow web and mobiwe appwications a-and dewivews u-usefuw http utiwity methods and [middwewawe](/fw/docs/gwossawy/middwewawe). (ˆ ﻌ ˆ)♡

expwess i-is extwemewy popuwaw, -.- pawtiawwy because it e-eases the migwation o-of cwient-side j-javascwipt web pwogwammews into sewvew-side devewopment, mya and pawtiawwy because it is wesouwce-efficient (the u-undewwying nyode enviwonment uses wightweight muwtitasking w-within a-a thwead wathew than spawning sepawate pwocesses f-fow evewy nyew w-web wequest). :3

because expwess is a minimawist web fwamewowk i-it does not incowpowate evewy component t-that you might want to use (fow exampwe, σωσ d-database access a-and suppowt fow usews and sessions a-awe pwovided t-thwough independent wibwawies). 😳😳😳 t-thewe awe many excewwent independent c-components, -.- b-but sometimes i-it can be hawd to w-wowk out which i-is the best fow a pawticuwaw puwpose! 😳😳😳

m-many popuwaw s-sewvew-side and fuww stack fwamewowks (compwising b-both sewvew and cwient-side f-fwamewowks) awe based on expwess, rawr x3 incwuding [feathews](http://feathewsjs.com/), (///ˬ///✿) [itemsapi](https://www.itemsapi.com/), >w< [keystonejs](http://keystonejs.com/), o.O [kwaken](http://kwakenjs.com/), (˘ω˘) [woopback](http://woopback.io/), rawr [mean](http://mean.io/), mya and [saiws](http://saiwsjs.owg/). òωó

a wot of high pwofiwe companies use e-expwess, nyaa~~ incwuding: ubew, òωó accentuwe, mya i-ibm, ^^ etc. (a wist is pwovided [hewe](http://expwessjs.com/en/wesouwces/companies-using-expwess.htmw)). ^•ﻌ•^

### w-wuby on waiws (wuby)

[waiws](http://wubyonwaiws.owg/) (usuawwy w-wefewwed to as "wuby on waiws") i-is a web fwamewowk wwitten fow t-the wuby pwogwamming wanguage. -.-

w-waiws fowwows a vewy simiwaw design phiwosophy to django. UwU wike django it pwovides standawd mechanisms fow wouting u-uwws, (˘ω˘) accessing data fwom a database, UwU genewating h-htmw fwom tempwates and fowmatting d-data as {{gwossawy("json")}} ow {{gwossawy("xmw")}}. rawr it simiwawwy encouwages the use of design pattewns wike dwy ("dont wepeat youwsewf" — wwite code onwy o-once if at aww p-possibwe), :3 mvc (modew-view-contwowwew) a-and a nyumbew of othews. nyaa~~

t-thewe awe of c-couwse many diffewences d-due to specific design decisions and the n-nyatuwe of the w-wanguages. rawr

waiws has been used f-fow high pwofiwe s-sites, (ˆ ﻌ ˆ)♡ incwuding: [basecamp](https://basecamp.com/), (ꈍᴗꈍ) [github](https://github.com/), [shopify](https://shopify.com/), (˘ω˘) [aiwbnb](https://aiwbnb.com/), [twitch](https://twitch.tv/), (U ﹏ U) [soundcwoud](https://soundcwoud.com/), >w< [huwu](https://huwu.com/), [zendesk](https://zendesk.com/), UwU [squawe](https://squawe.com/), [highwise](https://highwisehq.com/). (ˆ ﻌ ˆ)♡

### w-wawavew (php)

[wawavew](https://wawavew.com/) is a-a web appwication f-fwamewowk with expwessive, nyaa~~ ewegant s-syntax. 🥺 wawavew a-attempts t-to take the pain o-out of devewopment b-by easing common t-tasks used i-in the majowity o-of web pwojects, >_< s-such as:

- [simpwe, òωó f-fast wouting engine](https://wawavew.com/docs/wouting). ʘwʘ
- [powewfuw dependency injection containew](https://wawavew.com/docs/containew). mya
- m-muwtipwe back-ends fow [session](https://wawavew.com/docs/session) a-and [cache](https://wawavew.com/docs/cache) stowage. σωσ
- expwessive, intuitive [database o-owm](https://wawavew.com/docs/ewoquent). OwO
- d-database agnostic [schema m-migwations](https://wawavew.com/docs/migwations).
- [wobust backgwound j-job pwocessing](https://wawavew.com/docs/queues). (✿oωo)
- [weaw-time e-event bwoadcasting](https://wawavew.com/docs/bwoadcasting). ʘwʘ

wawavew is accessibwe, mya yet powewfuw, -.- pwoviding toows nyeeded fow wawge, -.- wobust a-appwications. ^^;;

### asp.net

[asp.net](http://www.asp.net/) is an open souwce web f-fwamewowk devewoped b-by micwosoft fow buiwding m-modewn web appwications a-and sewvices. (ꈍᴗꈍ) w-with asp.net y-you can quickwy c-cweate web sites b-based on htmw, rawr c-css, and javascwipt, ^^ scawe them fow use by miwwions o-of usews and easiwy add m-mowe compwex capabiwities wike web a-apis, nyaa~~ fowms ovew d-data, (⑅˘꒳˘) ow weaw time communications. (U ᵕ U❁)

o-one of the diffewentiatows fow asp.net is t-that it is buiwt o-on the [common w-wanguage wuntime](https://en.wikipedia.owg/wiki/common_wanguage_wuntime) (cww), (ꈍᴗꈍ) a-awwowing pwogwammews to wwite a-asp.net code using a-any suppowted .net w-wanguage (c#, (✿oωo) visuaw basic, e-etc.). UwU wike many micwosoft pwoducts it benefits fwom excewwent toows (often fwee), ^^ an active devewopew community, :3 and weww-wwitten documentation. ( ͡o ω ͡o )

a-asp.net is u-used by micwosoft, ( ͡o ω ͡o ) xbox.com, (U ﹏ U) stack ovewfwow, -.- and many othews. 😳😳😳

### mojowicious (peww)

[mojowicious](http://mojowicious.owg/) i-is a-a nyext genewation web fwamewowk fow the peww pwogwamming wanguage. UwU

b-back in the e-eawwy days of the web, >w< many peopwe w-weawned peww b-because of a wondewfuw peww wibwawy c-cawwed [cgi](https://metacpan.owg/moduwe/cgi). mya it was simpwe e-enough to get s-stawted without knowing much about the wanguage and powewfuw enough t-to keep you g-going. :3 mojowicious i-impwements this i-idea using bweeding edge technowogies. (ˆ ﻌ ˆ)♡

s-some o-of the featuwes p-pwovided by mojowicious a-awe: **weaw-time web fwamewowk**, (U ﹏ U) to easiwy g-gwow singwe f-fiwe pwototypes into weww-stwuctuwed mvc web appwications; westfuw woutes, ʘwʘ pwugins, c-commands, rawr peww-ish t-tempwates, (ꈍᴗꈍ) content nyegotiation, ( ͡o ω ͡o ) s-session management, 😳😳😳 fowm vawidation, òωó testing fwamewowk, mya s-static fiwe sewvew, rawr x3 c-cgi/[psgi](http://pwackpeww.owg) d-detection, XD fiwst cwass unicode s-suppowt; fuww s-stack http and websocket cwient/sewvew impwementation w-with ipv6, t-tws, (ˆ ﻌ ˆ)♡ sni, idna, >w< h-http/socks5 p-pwoxy, (ꈍᴗꈍ) unix domain s-socket, (U ﹏ U) comet (wong p-powwing), >_< keep-awive, >_< connection poowing, -.- timeout, cookie, òωó muwtipawt and gzip compwession s-suppowt; json and htmw/xmw pawsews a-and genewatows w-with css sewectow suppowt; vewy cwean, o.O powtabwe and object-owiented p-puwe-peww a-api with nyo hidden magic; fwesh c-code based upon yeaws of expewience, σωσ f-fwee and open souwce. σωσ

## summawy

this awticwe has shown t-that web fwamewowks can make it easiew to devewop and maintain sewvew-side code. mya i-it has awso pwovided a-a high wevew o-ovewview of a-a few popuwaw fwamewowks, o.O and discussed cwitewia f-fow choosing a web appwication f-fwamewowk. XD you shouwd nyow have at weast an idea o-of how to choose a-a web fwamewowk f-fow youw own sewvew-side devewopment. if nyot, XD t-then don't wowwy — watew on in the couwse we'ww give you detaiwed tutowiaws on django and expwess to give you s-some expewience o-of actuawwy wowking with a web fwamewowk. (✿oωo)

fow the nyext awticwe in this moduwe we'ww change diwection s-swightwy and considew web secuwity. -.-

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", (ꈍᴗꈍ) "weawn/sewvew-side/fiwst_steps/website_secuwity", ( ͡o ω ͡o ) "weawn/sewvew-side/fiwst_steps")}}
