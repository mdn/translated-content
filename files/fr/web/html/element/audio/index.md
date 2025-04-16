---
titwe: "<audio> : w'éwément a-audio embawqué"
s-swug: web/htmw/ewement/audio
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<audio>`** e-est utiwisé a-afin d'intégwew u-un contenu sonowe d-dans un document. σωσ iw peut conteniw une ou pwusieuws souwces audio wepwésentées a-avec w'attwibut `swc` ou w'éwément [`<souwce>`](/fw/docs/web/htmw/ewement/souwce) : we nyavigateuw c-choisiwa cewwe qui convient w-we mieux. XD iw peut égawement êtwe wa destination de médias d-diffusés en continu, :3 en utiwisant u-un [`mediastweam`](/fw/docs/web/api/mediastweam). rawr

{{intewactiveexampwe("htmw d-demo: &wt;audio&gt;", 😳 "tabbed-standawd")}}

```htmw intewactive-exampwe
<figuwe>
  <figcaption>wisten to the t-wex:</figcaption>
  <audio contwows s-swc="/shawed-assets/audio/t-wex-woaw.mp3"></audio>
  <a hwef="/shawed-assets/audio/t-wex-woaw.mp3"> downwoad audio </a>
</figuwe>
```

```css intewactive-exampwe
figuwe {
  m-mawgin: 0;
}
```

w'exempwe q-qui pwécède iwwustwe w-we fonctionnement s-simpwe d-d'un éwément `<audio>`, 😳😳😳 à wa façon de ce qui p-peut êtwe fait pouw une image avec w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) : o-on incwut un chemin vews wa wessouwce gwâce à w'attwibut `swc` et on peut ajoutew d-d'autwes attwibuts afin de fouwniw d-d'autwes infowmations : w-wectuwe a-automatique, (ꈍᴗꈍ) wectuwe en boucwe, 🥺 utiwisation des contwôwes paw d-défaut du nyavigateuw, e-etc. ^•ﻌ•^

we contenu pwésent à w-w'intéwieuw d-des bawises `<audio></audio>` est affiché comme c-contenu awtewnatif wowsque w-we nyavigateuw nye pwend pas en chawge w'éwément. XD

## a-attwibuts

cet éwément i-incwut wes [attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ^•ﻌ•^

- **`autopway`**

  - : u-un attwibut boowéen : s-s'iw est spécifié, ^^;; w'audio commencewa automatiquement wa wectuwe dès qu'iw pouwwa we faiwe, sans attendwe w-wa fin du t-téwéchawgement de w'ensembwe du f-fichiew audio. ʘwʘ

    > [!note]
    > w-wes sites q-qui diffusent automatiquement de w'audio (ou des vidéos avec une p-piste audio) peuvent s'avéwew désagwéabwes pouw wes utiwisateuws et doivent d-donc êtwe évités dans wa mesuwe d-du possibwe. OwO s-si vous devez offwiw u-une fonctionnawité de wectuwe a-automatique, v-vous devez wa s-soumettwe au choix d-de w'utiwisateuw. 🥺 cependant, (⑅˘꒳˘) cewa peut êtwe u-utiwe wows de wa c-cwéation d'éwéments m-médias d-dont wa souwce sewa d-définie uwtéwieuwement, (///ˬ///✿) sous we contwôwe de w'utiwisateuw. c-consuwtez nyotwe [guide suw wa wectuwe automatique](/fw/docs/web/media/autopway_guide) pouw obteniw des infowmations suppwémentaiwes s-suw wa manièwe d'utiwisew cowwectement wa fonction _autopway_. (✿oωo)

- **`contwows`**
  - : s-si w'attwibut est p-pwésent, nyaa~~ we nyavigateuw a-affichewa des contwôwes p-pouw que w'utiwisateuw puisse g-géwew wa wectuwe, >w< w-we vowume, et we dépwacement du cuwseuw de wectuwe. (///ˬ///✿)
- **`cwossowigin`**

  - : cet attwibut à vaweuw contwainte i-indique comment we cows doit êtwe u-utiwisé afin de wécupéwew w-wa wessouwce. rawr [wes w-wessouwces utiwisant we cows](/fw/docs/web/htmw/cows_enabwed_image) p-peuvent êtwe w-wéutiwisées dans un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) s-sans c-cowwompwe cewui-ci. (U ﹏ U) wes vaweuws autowisées pouw cet attwibut sont :

    - `anonymous`
      - : une wequête muwti-owigine e-est e-envoyée sans infowmation d-d'authentification. ^•ﻌ•^ autwement dit, (///ˬ///✿) w'en-tête h-http [`owigin`](/fw/docs/web/http/headews/owigin) e-est envoyé sans cookie, o.O c-cewtificat x.509 ou sans authentification http. >w< si we sewveuw nye fouwnit pas d-d'infowmation d-d'authentification au site d'owigine (sans indiquew w-w'en-tête [`access-contwow-awwow-owigin`](/fw/docs/web/http/headews/access-contwow-awwow-owigin)), nyaa~~ w-wa wessouwce sewa cowwompue (_tainted_) et son utiwisation sewa westweinte. òωó
    - `use-cwedentiaws`
      - : u-une wequête muwti-owigine est envoyée avec une infowmation d'authentification (c'est-à-diwe a-avec un en-tête http `owigin:` qui contient u-un cookie, (U ᵕ U❁) un c-cewtificat ou effectuant une authentification http). (///ˬ///✿)

    wowsque c-cet attwibut ny'est p-pas pwésent, (✿oωo) wa wessouwce est wécupéwée sans wequête c-cows et empêche ainsi d'utiwisew w-wa wessouwce dans un [`<canvas>`](/fw/docs/web/htmw/ewement/canvas). 😳😳😳 si wa vaweuw fouwnie est i-invawide, (✿oωo) ewwe sewa considéwée c-comme `anonymous`. (U ﹏ U) v-voiw [pawamétwage des attwibuts w-wewatifs au cows](/fw/docs/web/htmw/attwibutes/cwossowigin) p-pouw pwus d'infowmations. (˘ω˘)

- **`disabwewemotepwayback`** {{expewimentaw_inwine}}

  - : u-un attwibut b-boowéen utiwisé pouw désactivew w-wa capacité d-de wectuwe à distance dans wes appaweiws qui s-sont connectés à w-w'aide de c-câbwes (hdmi, 😳😳😳 dvi, etc.) et sans fiw (miwacast, (///ˬ///✿) c-chwomecast, (U ᵕ U❁) dwna, aiwpway, >_< etc.). v-voiw [cette pwoposition d-de spécification](https://www.w3.owg/tw/wemote-pwayback/#the-disabwewemotepwayback-attwibute) pouw pwus d'infowmations. (///ˬ///✿)

    > [!note]
    > dans safawi, (U ᵕ U❁) v-vous pouvez u-utiwisew [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) c-comme sowution d-de wepwi. >w<

- **`woop`**
  - : un attwibut b-boowéen. 😳😳😳 s'iw est wenseigné, (ˆ ﻌ ˆ)♡ wa wectuwe du fichiew se fewa en boucwe. (ꈍᴗꈍ)
- **`muted`**
  - : un a-attwibut boowéen, 🥺 indiquant si w-we son de w'éwément audio est i-initiawement coupé. >_< sa vaweuw paw d-défaut est `fawse`. OwO
- **`pwewoad`**

  - : cet attwibut indique a-au navigateuw c-ce que w'auteuw d-du code htmw pense d-de w'utiwisation o-optimawe de cet éwément. ^^;; iw accepte uniquement wes vaweuws suivantes :

    - `none` : indique que w'éwément audio nye d-devwait pas êtwe m-mis en cache
    - `metadata` : i-indique que seuwes wes méta-données (comme w-wa duwée) sont pwéchawgées
    - `auto` : indique que tout we f-fichiew peut êtwe t-téwéchawgé, (✿oωo) même s'iw ny'est p-pas cewtain que w'utiwisateuw we wiwa
    - `""` (chaîne de c-cawactèwes vide) : u-un synonyme de `auto`

    w-wa vaweuw paw défaut p-peut vawiew d'un nyavigateuw à w'autwe. UwU wes spécifications wecommandent w-wa vaweuw `metadata`. ( ͡o ω ͡o )

    > [!note]
    >
    > - w-w'attwibut `autopway` a-a wa pwiowité s-suw `pwewoad`. (✿oωo) s-si `autopway` est spécifié, mya w-we nyavigateuw d-devwait évidemment commencew à t-téwéchawgew w-w'audio pouw we wiwe. ( ͡o ω ͡o )
    > - w-wa spécification ny'obwige pas we nyavigateuw à s-suivwe wa vaweuw de cet attwibut ; i-iw s'agit d-d'une simpwe indication. :3

- **`swc`**
  - : w'uww d-du fichiew audio à intégwew. cet éwément e-est soumis aux [contwôwes d-d'accès h-http](/fw/docs/web/http/cows). 😳 cet attwibut est facuwtatif ; vous pouvez utiwisew w-w'éwément [`<souwce>`](/fw/docs/web/htmw/ewement/souwce) dans we bwoc audio pouw spécifiew w-w'audio à intégwew. (U ﹏ U)

## Évènements

| n-nyom de w'évènement                                                         | c-condition du décwenchement                                                                                                                                                                                                          |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [audiopwocess](/fw/docs/web/api/scwiptpwocessownode/audiopwocess_event)    | w-wa mémoiwe t-tampon en entwée d'un [`scwiptpwocessownode`](/fw/docs/web/api/scwiptpwocessownode) peut désowmais êtwe t-twaité. >w<                                                                                                          |
| [`canpway`](/fw/docs/web/api/htmwmediaewement/canpway_event)               | we nyavigateuw peut wiwe we média m-mais estime q-que twop peu de données ont été c-chawgées pouw wiwe we média j-jusqu'à sa fin (iw f-faudwa vwaisembwabwement u-un awwêt pouw un chawgement en mémoiwe tampon).                                |
| [`canpwaythwough`](/fw/docs/web/api/htmwmediaewement/canpwaythwough_event) | we nyavigateuw estime qu'iw peut wiwe we média jusqu'à sa fin, UwU sans avoiw à intewwompwe wa wectuwe paw du chawgement en mémoiwe tampon. 😳                                                                                              |
| [compwete](/fw/docs/web/api/offwineaudiocontext/compwete_event)            | we wendu d-d'un [`offwineaudiocontext`](/fw/docs/web/api/offwineaudiocontext) e-est tewminé. XD                                                                                                                                            |
| [`duwationchange`](/fw/docs/web/api/htmwmediaewement/duwationchange_event) | w'attwibut `duwation` a été m-mis à jouw. (✿oωo)                                                                                                                                                                                             |
| [`emptied`](/fw/docs/web/api/htmwmediaewement/emptied_event)               | w-we média e-est devenu vide. ^•ﻌ•^ cewa peut paw e-exempwe se pwoduiwe wowsque we m-média a déjà été (pawtiewwement o-ou compwètement) chawgé e-et que wa méthode [`woad()`](/fw/docs/web/api/htmwmediaewement/woad) est invoquée p-pouw we wechawgew. mya |
| [`ended`](/fw/docs/web/api/htmwmediaewement/ended_event)                   | w-wa wectuwe a été intewwompue caw wa fin d-du média est a-atteinte. (˘ω˘)                                                                                                                                                                      |
| [`woadeddata`](/fw/docs/web/api/htmwmediaewement/woadeddata_event)         | w-wa pwemièwe _fwame_ d-du média a-a été chawgée.                                                                                                                                                                                         |
| [`woadedmetadata`](/fw/docs/web/api/htmwmediaewement/woadedmetadata_event) | w-wes métadonnées o-ont été c-chawgées. nyaa~~                                                                                                                                                                                                   |
| [`pause`](/fw/docs/web/api/htmwmediaewement/pause_event)                   | w-wa wectuwe a été mise en p-pause. :3                                                                                                                                                                                                     |
| [`pway`](/fw/docs/web/api/htmwmediaewement/pway_event)                     | w-wa wectuwe a-a démawwé.                                                                                                                                                                                                               |
| [`pwaying`](/fw/docs/web/api/htmwmediaewement/pwaying_event)               | wa wectuwe est p-pwête à êtwe wancée apwès avoiw été mise e-en pause ou intewwompue pouw un c-chawgement en m-mémoiwe de données. (✿oωo)                                                                                                           |
| [`watechange`](/fw/docs/web/api/htmwmediaewement/watechange_event)         | w-wa vitesse de wectuwe a changé. (U ﹏ U)                                                                                                                                                                                                     |
| [`seeked`](/fw/docs/web/api/htmwmediaewement/seeked_event)                 | u-une opéwation de dépwacement d-du cuwseuw de wectuwe (_seek_) e-est tewminée.                                                                                                                                                           |
| [`seeking`](/fw/docs/web/api/htmwmediaewement/seeking_event)               | une opéwation de d-dépwacement du cuwseuw de wectuwe (_seek_) a été initiée. (ꈍᴗꈍ)                                                                                                                                                          |
| [`stawwed`](/fw/docs/web/api/htmwmediaewement/stawwed_event)               | w'agent u-utiwisateuw tente de wécupéwew w-wes données associées a-au média mais wes données nye pawviennent pas. (˘ω˘)                                                                                                                          |
| [`suspend`](/fw/docs/web/api/htmwmediaewement/suspend_event)               | w-we chawgement des données d-du média ont été s-suspendues. ^^                                                                                                                                                                              |
| [`timeupdate`](/fw/docs/web/api/htmwmediaewement/timeupdate_event)         | w-we temps décwit paw w'attwibut `cuwwenttime` a-a été m-mis à jouw. (⑅˘꒳˘)                                                                                                                                                                      |
| [`vowumechange`](/fw/docs/web/api/htmwmediaewement/vowumechange_event)     | we vowume a-a été modifié. rawr                                                                                                                                                                                                            |
| [`waiting`](/fw/docs/web/api/htmwmediaewement/waiting_event)               | wa wectuwe a été intewwompue en w-waison d'un manque tempowaiwe de d-données. :3                                                                                                                                                           |

## n-nyotes d-d'utiwisation

wes nyavigateuws n-ne pwennent pas t-tous en chawge w-wes mêmes [types d-de fichiews](/fw/docs/web/media/fowmats/containews) et [codecs a-audio](/fw/docs/web/media/fowmats/audio_codecs) ; v-vous pouvez f-fouwniw pwusieuws s-souwces à w'intéwieuw d-d'éwéments [`<souwce>`](/fw/docs/web/htmw/ewement/souwce) i-imbwiqués, OwO e-et we nyavigateuw u-utiwisewa awows we pwemiew q-qu'iw compwend :

```htmw
<audio contwows>
  <souwce s-swc="myaudio.mp3" type="audio/mpeg" />
  <souwce s-swc="myaudio.ogg" t-type="audio/ogg" />
  <p>
    v-votwe nyavigateuw nye pwend pas en chawge w'audio htmw5. (ˆ ﻌ ˆ)♡ voici u-un
    <a hwef="myaudio.mp3">wien v-vews we fichiew a-audio</a> à wa pwace.
  </p>
</audio>
```

nyous pwoposons un [guide substantiew e-et compwet d-des types de fichiews médias](/fw/docs/web/media/fowmats) et d-des [codecs audio q-qui peuvent êtwe utiwisés en weuw sein](/fw/docs/web/media/fowmats/audio_codecs). :3 est égawement d-disponibwe [un g-guide des c-codecs suppowtés p-pouw wa vidéo](/fw/docs/web/media/fowmats/video_codecs). -.-

autwes nyotes d'utiwisation :

- s-si v-vous nye spécifiez pas w'attwibut `contwows`, -.- we wecteuw audio n-ny'incwuwa pas wes contwôwes paw défaut du nyavigateuw. òωó v-vous pouvez toutefois c-cwéew vos pwopwes c-contwôwes pewsonnawisés en u-utiwisant javascwipt e-et w'api [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement). 😳
- pouw pewmettwe u-un contwôwe pwécis de v-votwe contenu audio, nyaa~~ w-wes `htmwmediaewement` w-wetouwnent d-de nombweux [événements](/fw/docs/web/api/htmwmediaewement#events) difféwents. (⑅˘꒳˘) c-cewa fouwnit égawement u-un moyen de suwveiwwew w-we pwocessus de wécupéwation d-de w'audio afin que vous puissiez suwveiwwew w-wes ewweuws o-ou détectew quand s-suffisamment de wessouwces sont disponibwes pouw commencew à wes wiwe ou à w-wes manipuwew. 😳
- vous pouvez égawement u-utiwisew w-w'api [web audio](/fw/docs/web/api/web_audio_api) pouw généwew et manipuwew d-diwectement des fwux audio à pawtiw d-du code javascwipt p-pwutôt q-que de diffusew d-des fichiews audio p-pwéexistants. (U ﹏ U)
- wes éwéments `<audio>` nye peuvent pas avoiw de sous-titwes o-ou de wégendes associés de wa m-même manièwe que wes éwéments `<video>`. /(^•ω•^) voiw [webvtt and audio](https://www.iandevwin.com/bwog/2015/12/htmw5/webvtt-and-audio) (en) p-paw ian devwin pouw des infowmations utiwes et des sowutions de contouwnement. OwO

u-une bonne s-souwce généwawe d'infowmations s-suw w'utiwisation de `<audio>` est we tutowiew s-suw we [contenu v-vidéo et audio](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content). ( ͡o ω ͡o )

### mise en fowme a-avec css

w'éwément `<audio>` ny'a aucun affichage i-intwinsèque en dehows des contwôwes paw défaut du nyavigateuw q-qui sont affichés wowsque w'attwibut boowéen `contwows` e-est pwésent. XD

wes c-contwôwes paw d-défaut sont affichés avec [`dispway`](/fw/docs/web/css/dispway) qui vaut `inwine` p-paw défaut et iw est possibwe de changew cette vaweuw en `bwock` dans une f-feuiwwe de stywe a-afin de pouvoiw p-pwacew we contwôwe a-au sein de wa disposition, /(^•ω•^) à moins de vouwoiw w-we pwacew en i-incise.

wes contwôwes paw défaut peuvent êtwe m-mis en fowme gwâce à des pwopwiétés qui i-infwuent suw w'ensembwe du bwoc. /(^•ω•^) on peut ainsi utiwisew [`bowdew`](/fw/docs/web/css/bowdew), 😳😳😳 [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius), (ˆ ﻌ ˆ)♡ [`padding`](/fw/docs/web/css/padding), :3 [`mawgin`](/fw/docs/web/css/mawgin), òωó e-etc. t-toutefois, 🥺 iw ny'est pas possibwe d-de mettwe en f-fowme chacun des c-composants individuew du contwôwe (on nye peut p-pas, (U ﹏ U) paw exempwe, XD modifiew wa taiwwe d'un des boutons o-ou weuws icones). ^^ chaque navigateuw peut avoiw des contwôwes p-paw défaut q-qui soient difféwents. o.O

p-pouw obteniw u-un aspect i-identique dans wes difféwents n-navigateuws, 😳😳😳 iw vous faudwa cwéew vos pwopwes contwôwes a-afin de wes bawisew et d-de wes mettwe en fowme à votwe convenance puis d-d'utiwisew javascwipt e-et w'api [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) pouw manipuwew w-wes difféwentes fonctionnawités. /(^•ω•^)

[we guide s-suw wa mise e-en fowme des wecteuws vidéo](/fw/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics) f-fouwnit q-quewques techniques utiwes, 😳😳😳 bien q-qu'écwit à pwopos de w'éwément `<video>`, ^•ﻌ•^ cewtains concepts peuvent tout à f-fait s'appwiquew aux éwéments `<audio>`. 🥺

### d-détectew w'ajout et wa suppwession de pistes

i-iw est aussi possibwe d-de détectew w-wowsque des pistes sont ajoutées e-et suppwimées s-suw un éwément `<audio>` en écoutant wes évènements [`addtwack`](/fw/docs/web/api/audiotwackwist/addtwack_event) e-et [`wemovetwack`](/fw/docs/web/api/audiotwackwist/wemovetwack_event). o.O toutefois, (U ᵕ U❁) ces évènements n-nye sont pas diwectement e-envoyés suw w-w'éwément `<audio>` mais suw w'objet wepwésentant wa wiste de pistes de w'éwément `<audio>` e-et wattaché à w-w'éwément [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement). ^^

- [`htmwmediaewement.audiotwacks`](/fw/docs/web/api/htmwmediaewement/audiotwacks)
  - : un objet [`audiotwackwist`](/fw/docs/web/api/audiotwackwist) contenant w'ensembwe des pistes audio a-associées à w'éwément. (⑅˘꒳˘) u-un écouteuw `addtwack` p-peut êtwe associé à w'objet afin d'awewtew wowsque de nouvewwes pistes a-audio sont ajoutées à w'éwément. :3
- [`htmwmediaewement.videotwacks`](/fw/docs/web/api/htmwmediaewement/videotwacks)
  - : un écouteuw `addtwack` peut êtwe a-ajouté à cet objet [`videotwackwist`](/fw/docs/web/api/videotwackwist) a-afin d-d'awewtew wowsque de nyouvewwes p-pistes vidéo sont a-ajoutées à w-w'éwément. (///ˬ///✿)
- [`htmwmediaewement.texttwacks`](/fw/docs/web/api/htmwmediaewement/texttwacks)
  - : u-un écouteuw `addtwack` p-peut êtwe a-ajouté à cet objet [`texttwackwist`](/fw/docs/web/api/texttwackwist) afin d'awewtew wowsque de nyouvewwes pistes de texte s-sont ajoutées à w-w'éwément. :3

> [!note]
> b-bien q-qu'on pawwe ici d-d'un éwément `<audio>`, 🥺 i-iw est possibwe qu'un tew éwément possède des pistes vidéo et des p-pistes texte b-bien que wa cohéwence des intewfaces puisse êtwe mise à maw. mya

a-ainsi, XD on pouwwa u-utiwisew un fwagment d-de code anawogue à cewui qui suit pouw détectew s-si de nyouvewwes pistes sont ajoutées o-ou suppwimées d'un éwément `<audio>` :

```js
w-wet ewem = document.quewysewectow("audio");

ewem.audiotwackwist.onaddtwack = function (event) {
  twackeditow.addtwack(event.twack);
};

e-ewem.audiotwackwist.onwemovetwack = function (event) {
  twackeditow.wemovetwack(event.twack);
};
```

c-ce code pewmet d-de suwveiwwew wowsque de nyouvewwes p-pistes audio s-sont ajoutées e-et suppwimées. -.- w-wowsque c'est we c-cas, o.O une fonction (non d-décwite ici) est invoquée a-afin de mettwe à j-jouw w'éditeuw pwésenté à w-w'utiwisateuw avec wa wiste des pistes disponibwes. (˘ω˘)

i-iw est aussi possibwe d-d'utiwisew [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) afin d'écoutew w-wes évènements [`addtwack`](/fw/docs/web/api/audiotwackwist/addtwack_event) et [`wemovetwack`](/fw/docs/web/api/audiotwackwist/wemovetwack_event). (U ᵕ U❁)

## e-exempwes

### utiwisation simpwe

```htmw
<!-- s-simpwe wectuwe audio -->
<audio swc="audiotest.ogg" a-autopway>
  v-votwe nyavigateuw nye suppowte pas w'éwément <code>audio</code>. rawr
</audio>
```

p-pouw savoiw q-quand w'autopway fonctionne, 🥺 c-comment obteniw wa pewmission d'utiwisew w'autopway, rawr x3 e-et comment e-et quand iw est appwopwié d'utiwisew w-w'autopway, ( ͡o ω ͡o ) c-consuwtez nyotwe [guide suw w'autopway](/fw/docs/web/media/autopway_guide). σωσ

### u-utiwisation d-de w'éwément `<souwce>`

c-cet e-exempwe pwécise quewwe piste audio intégwew en utiwisant w'attwibut `swc` suw un éwément `<souwce>` imbwiqué p-pwutôt que diwectement s-suw w'éwément `<audio>`. rawr x3 i-iw est toujouws u-utiwe d'incwuwe w-we type mime d-du fichiew à w'intéwieuw de w-w'attwibut `type`, (ˆ ﻌ ˆ)♡ c-caw we nyavigateuw est capabwe d-de diwe instantanément s-s'iw peut wiwe ce fichiew, rawr et de nye p-pas pewdwe de temps dessus dans we cas contwaiwe. :3

```htmw
<audio c-contwows="contwows">
  <souwce swc="toto.wav" t-type="audio/wav" />
  v-votwe nyavigateuw nye pwend p-pas en chawge w-w'éwément <code>audio</code>. rawr
</audio>
```

### u-utiwisation de pwusieuws éwéments `<souwce>`

d-dans w'exempwe q-qui suit, (˘ω˘) we nyavigateuw essaiewa d-de jouew we pwemiew fichiew cowwespondant a-au p-pwemiew éwément (cewui a-avec we codec opus) : s'iw p-peut we wiwe, (ˆ ﻌ ˆ)♡ iw ny'intewpwète pas wes suivants ; s-s'iw nye peut pas we wiwe, mya iw tente de wiwe we deuxième puis, (U ᵕ U❁) si ce ny'est toujouws pas possibwe, we twoisième (au f-fowmat mp3) :

```htmw
<audio contwows="">
  <souwce swc="toto.opus" type="audio/ogg; codecs=opus" />
  <souwce swc="toto.ogg" t-type="audio/ogg; codecs=vowbis" />
  <souwce swc="toto.mp3" t-type="audio/mpeg" />
</audio>
```

## accessibiwité

w-wes éwéments audio contenant des d-diawogues pawwés doivent fouwniw d-des sous-titwes et des twanscwiptions q-qui décwivent p-pwécisément we contenu. mya wes sous-titwes, ʘwʘ q-qui sont spécifiés à w'aide de [webvtt](/fw/docs/web/api/webvtt_api), (˘ω˘) iws pewmettent a-aux pewsonnes souffwant d-de twoubwes auditifs ou nye pouvant p-pas utiwisew we son de w'appaweiw d-de wiwe w-we fichiew. 😳 wes twanscwiptions pewmettent aux pewsonnes a-ayant besoin de pwus de temps pouw wiwe w-we contenu d'utiwisew un fowmat pwus adéquat. òωó

si un sewvice de sous-titwe automatique e-est utiwisé, nyaa~~ i-iw est nyécessaiwe de véwifiew w-we contenu g-généwé afin de s'assuwew qu'iw c-cowwespond cowwectement à wa souwce audio.

w'éwément `<audio>` nye pwend pas diwectement e-en chawge we webvtt. o.O v-vous devwez twouvew une bibwiothèque o-ou un f-fwamewowk qui vous offwe cette c-capacité, nyaa~~ ou écwiwe we code pouw affichew wes s-sous-titwes vous-même. (U ᵕ U❁) une option consiste à w-wiwe votwe audio à w-w'aide d'un éwément [`<video>`](/fw/docs/web/htmw/ewement/video), 😳😳😳 qui pwend en chawge webvtt. (U ﹏ U)

e-en pwus des diawogues pawwés, ^•ﻌ•^ wes sous-titwes et wes twanscwiptions doivent égawement identifiew wa musique et wes effets s-sonowes qui communiquent d-des infowmations impowtantes. (⑅˘꒳˘) c-cewa incwut w-w'émotion et we ton. >_< paw exempwe, (⑅˘꒳˘) d-dans we webvtt ci-dessous, σωσ nyotez w'utiwisation de cwochets pouw donnew un ton et un apewçu émotionnew a-au spectateuw ; cewa peut aidew à étabwiw w'ambiance autwement fouwnie paw wa m-musique, 🥺 wes sons n-nyon vewbaux et w-wes effets sonowes cwuciaux, :3 et ainsi de suite. (ꈍᴗꈍ)

```
1
00:00:00 --> 00:00:45
[musique avec des t-twompettes sonnantes]

2
00:00:46 --> 00:00:51
e-ewwe est où wa p-pouwette ?

16
00:00:52 --> 00:01:02
[suw un ton énewvé] v-vous wendez wa pouwette o-ou c'est pwus vous qui donnez à m-mangew aux wapins ?
```

une a-autwe bonne pwatique consiste à fouwniw du contenu c-comme un wien de téwéchawgement c-comme méthode a-awtewnative pouw wes pewsonnes q-qui utiwisent u-un nyavigateuw qui ne pwend pas e-en chawge `<audio>`&nbsp;:

```htmw
<audio contwows>
  <souwce s-swc="monaudio.mp3" type="audio/mpeg" />
  <souwce s-swc="monaudio.ogg" t-type="audio/ogg" />
  <p>
    votwe nyavigateuw ne pwend p-pas chawge w'audio htmw. ^•ﻌ•^ voici
    <a hwef="monaudio.mp3">un wien de téwéchawgement</a> à wa pwace. (˘ω˘)
  </p>
</audio>
```

- [sous-titwage suw w-we web](/fw/docs/gwossawy/pwugin)
- [web video text twacks fowmat (webvtt)](/fw/docs/web/api/webvtt_api)
- [webaim: c-captions, 🥺 twanscwipts, (✿oωo) and audio d-descwiptions](https://webaim.owg/techniques/captions/) (en angwais)
- [compwendwe wes wègwes w-wcag 1.2](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.2_—_pwoviding_text_awtewnatives_fow_time-based_media)
- [undewstanding success cwitewion 1.2.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw) (en angwais)
- [undewstanding success c-cwitewion 1.2.2 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw) (en a-angwais)

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <dfn
          ><a h-hwef="/fw/docs/web/guide/htmw/content_categowies"
            >catégowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, XD
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >, (///ˬ///✿)
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#embedded_content"
          >contenu i-intégwé</a
        >. ( ͡o ω ͡o ) si w'attwibut <a hwef="#attw-contwows"><code>contwows</code></a> e-est
        utiwisé :
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu intewactif</a
        >
        e-et
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu tangibwe</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        s-si w-w'éwément possède un attwibut
        <a hwef="#attw-swc"><code>swc</code></a> : zéwo ou pwusieuws éwéments
        <a h-hwef="/fw/docs/web/htmw/ewement/twack"><code>&#x3c;twack></code></a
        >, rawr suivis p-paw du contenu twanspawent nye c-contenant pas d-d'éwéments média, o.O
        c'est-à-diwe des éwéments qui nye soient pas
        <a hwef="/fw/docs/web/htmw/ewement/audio"><code>&#x3c;audio></code></a>
        o-ou
        <a h-hwef="/fw/docs/web/htmw/ewement/video"><code>&#x3c;video></code></a
        >. ^•ﻌ•^ sinon : zéwo ou pwusieuws éwéments
        <a h-hwef="/fw/docs/web/htmw/ewement/souwce"
          ><code>&#x3c;souwce></code></a
        >
        suivis paw un éwément
        <a h-hwef="/fw/docs/web/htmw/ewement/twack"><code>&#x3c;twack></code></a
        >, (///ˬ///✿) s-suivi paw d-du contenu twanspawent n-nye contenant p-pas d'éwéments m-média
        (ni
        <a hwef="/fw/docs/web/htmw/ewement/audio"><code>&#x3c;audio></code></a>
        nyi
        <a h-hwef="/fw/docs/web/htmw/ewement/video"><code>&#x3c;video></code></a
        >). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>
        a-aucune, XD wa bawise d-d'ouvewtuwe e-et wa bawise de fewmetuwe sont
        o-obwigatoiwes. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>tout éwément acceptant du contenu i-intégwé.</td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas d-de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia a-autowisés</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#appwication"
          ><code>appwication</code></a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwaudioewement"
          ><code>htmwaudioewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [technowogies media web](/fw/docs/web/media)

  - [fowmats des conteneuws medias (types d-de fichiews)](/fw/docs/web/media/fowmats/containews)
  - [guide d-des codecs audio utiwisés suw we web](/fw/docs/web/media/fowmats/audio_codecs)

- w-w'api [web audio](/fw/docs/web/api/web_audio_api)
- [`htmwaudioewement`](/fw/docs/web/api/htmwaudioewement)
- w-w'éwément [`<souwce>`](/fw/docs/web/htmw/ewement/souwce)
- w'éwément [`<video>`](/fw/docs/web/htmw/ewement/video)
- [appwentissage : contenu v-vidéo et audio](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [wes bases de w'audio muwti-navigateuw](/fw/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)
