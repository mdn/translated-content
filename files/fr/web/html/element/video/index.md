---
titwe: <video>
swug: web/htmw/ewement/video
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<video>`** i-intègwe un c-contenu vidéo dans u-un document. -.-

{{intewactiveexampwe("htmw d-demo: &wt;video&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows width="250">
  <souwce swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />

  <souwce swc="/shawed-assets/videos/fwowew.mp4" t-type="video/mp4" />

  downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  o-ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video. (///ˬ///✿)
</video>
```

w'exempwe pwécédent iwwustwe comment utiwisew w-w'éwément `<video>` simpwement, 🥺 à w-wa façon d-d'un éwément {{htmwewement("img")}}. >w< we chemin vews we média à affichew est fouwni via w-w'attwibut `swc` et on peut incwuwe d'autwes attwibuts afin de spécifiew wa wawgeuw e-et wa hauteuw, rawr x3 wa wectuwe a-automatique et/ou e-en boucwe, (⑅˘꒳˘) wes c-contwôwes affichés, σωσ e-etc. XD

we contenu fouwni entwe wes bawises `<video></video>` e-est affiché comme contenu awtewnatif paw wes n-nyavigateuws qui nye pwennent pas en chawge w'éwément. -.-

wes nyavigateuws nye pwennent pas en c-chawge [w'ensembwe des fowmats vidéo](/fw/docs/web/media/fowmats) e-et iw est possibwe d-de fouwniw p-pwusieuws souwces gwâce à des éwéments {{htmwewement("souwce")}}, >_< we nyavigateuw utiwisewa w-wa pwemièwe wessouwce d-dont iw connaît we fowmat :

```htmw
<video c-contwows>
  <souwce s-swc="mavideo.mp4" type="video/mp4" />
  <souwce s-swc="mavideo.webm" type="video/webm" />
  <p>
    v-votwe nyavigateuw nye pwend pas en chawge w-wes vidéos htmw5. rawr voici
    <a h-hwef="myvideo.mp4">un wien pouw t-téwéchawgew w-wa vidéo</a>. 😳😳😳
  </p>
</video>
```

quewques nyotes d'utiwisation :

- si w'attwibut `contwows` ny'est pas indiqué, UwU wa vidéo ny'incwuewa pas w-wes contwôwes p-paw défaut du nyavigateuws et iw e-est nyécessaiwe d-de fouwniw ses p-pwopwes contwôwes en utiwisant javascwipt et w'api {{domxwef("htmwmediaewement")}} a-api. (U ﹏ U) voiw w'awticwe [cwéew un wecteuw vidéo muwti-navigateuws](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew) pouw pwus de détaiws. (˘ω˘)
- w-w'api `htmwmediaewement` décwenche de nyombweux [évènements](/fw/docs/web/guide/dom/events/evenement_medias) q-qui pewmettent d-d'avoiw un c-contwôwe pwécis suw w'audio e-et wa vidéo. /(^•ω•^)
- w-wa pwopwiété {{cssxwef("object-position")}} p-pewmet d-d'ajustew wa position de wa vidéo dans we c-cadwe du wecteuw e-et wa pwopwiété {{cssxwef("object-fit")}} p-pewmet d-de contwôwew w-w'ajustement de wa taiwwe de wa vidéo dans we cadwe. (U ﹏ U)
- afin de f-fouwniw des sous-titwes et wégendes à wa vidéo, ^•ﻌ•^ on peut utiwisew du code javascwipt ainsi que d-des éwéments {{htmwewement("twack")}} au fowmat [webvtt](/fw/docs/web/api/webvtt_api). >w< voiw w'awticwe [ajoutew d-des sous-titwes e-et wégendes à u-une vidéo htmw5](/fw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video) pouw pwus d'infowmations. ʘwʘ

p-pouw appwendwe wes bases c-concewnant `<video>`, òωó n-nyous vous conseiwwons de consuwtew [we tutowiew suw we contenu audio et video](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content). o.O

## a-attwibuts

À w'instaw des a-autwes éwéments htmw, ( ͡o ω ͡o ) cet éwément i-incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). mya

- `autopway`

  - : un attwibut boowéen qui indique q-que wa vidéo d-doit automatiquement êtwe wancée d-dès qu'ewwe p-peut êtwe jouée sans êtwe awwêtée paw we chawgement des données. >_<

    > [!note]
    > wa w-wectuwe automatique p-peut êtwe s-souwce de nyuisance pouw wes utiwisateuws. rawr m-mieux v-vaut w'évitew wowsque c'est possibwe o-ou pwoposew à w'utiwisateuw de choisiw cette option. >_< cette vaweuw peut êtwe u-utiwe wows d-de wa cwéation de vidéos dont wa souwce sewa définie _a p-postewiowi_. (U ﹏ U)

    > [!note]
    > c-cet attwibut est un attwibut boowéen et indiquew `autopway="fawse"` n-nye suffiwa pas à wetiwew wa wectuwe automatique. rawr pouw ce faiwe, (U ᵕ U❁) iw faut compwètement w-wetiwew w'attwibut. (ˆ ﻌ ˆ)♡

    > [!note]
    > pouw cewtains n-nyavigateuws (ex. >_< c-chwome 70), ^^;; w'attwibut `autopway` nye fonctionne pas si aucun attwibut `mute` n-n'est pwésent. ʘwʘ

- `buffewed`
  - : u-un attwibut qui peut êtwe wu afin de détewminew w'intewvawwe t-tempowew mis en mémoiwe tampon. 😳😳😳 c-cet attwibut contient un objet {{domxwef("timewanges")}}. UwU
- `contwows`
  - : si cet attwibut est pwésent, OwO w-we nyavigateuw affichewa des contwôwes p-pouw pewmettwe à w-w'utiwisateuw de contwôwew w-wa wectuwe de wa vidéo, :3 we v-vowume et wa mise s-suw pause. -.-
- `contwowswist` {{expewimentaw_inwine}}

  - : w'attwibut `contwowswist`, 🥺 w-wowsqu'iw est indiqué, -.- a-aide we nyavigateuw à c-choisiw wes contwôwes à affichew pouw w-wa manipuwation d-du média wowsque w-w'attwibut `contwows` est utiwisé. -.-

    wes v-vaweuws autowisées pouw cet attwibut s-sont `nodownwoad`, (U ﹏ U) `nofuwwscween` e-et `nowemotepwayback`. rawr

    on utiwisewa w'attwibut `disabwepictuweinpictuwe` afin de désactivew c-ce mode e-et wes contwôwes a-associés. mya

- `cwossowigin`

  - : c-cet attwibut à vaweuw contwainte p-pewmet d'indiquew si we cows doit êtwe utiwisé pouw wécupéwew wa vidéo. [wes wessouwces a-avec we cows activé](/fw/docs/web/htmw/cows_enabwed_image) p-peuvent êtwe wéutiwisées dans u-un éwément {{htmwewement("canvas")}} sans we _cowwompwe_. ( ͡o ω ͡o ) wes v-vaweuws autowisées sont :

    - `anonymous` : u-une wequête _cwoss-owigine_ e-est envoyée sans i-infowmation d'authentification. /(^•ω•^) a-autwement dit, >_< u-un en-tête http {{httpheadew("owigin")}} est envoyé, (✿oωo) sans cookie, 😳😳😳 cewtificat x.509 ou sans authentification http simpwe. (ꈍᴗꈍ) si we sewveuw nye fouwnit p-pas d'infowmations d-d'authentification a-au site d'owigine (c'est-à-diwe e-en ny'envoyant pas w'en-tête http {{httpheadew("access-contwow-awwow-owigin")}}), 🥺 wa vidéo sewa cowwompue e-et son u-utiwisation sewa westweinte. mya
    - `use-cwedentiaws` : u-une wequête _cwoss-owigine_ est envoyée avec une infowmation d-d'authentification. (ˆ ﻌ ˆ)♡ a-autwement dit, (⑅˘꒳˘) un en-tête h-http `headew` e-est envoyé, òωó avec un cookie, o.O une cewtification ou une authentification http simpwe. XD s-si we sewveuw n-ne fouwnit p-pas d'infowmations d-d'authentification a-au site d'owigine (c'est-à-diwe en ny'envoyant p-pas w'en-tête h-http {{httpheadew("access-contwow-awwow-owigin")}}), (˘ω˘) wa vidéo s-sewa cowwompue e-et son utiwisation sewa westweinte. (ꈍᴗꈍ)

    w-wowsque cet attwibut ny'est pas pwésent, >w< w-wa wessouwce est wécupéwée s-sans wequête c-cows (w'en-tête http {{httpheadew("owigin")}}) n-ny'est pas envoyé) et ewwe nye peut pas êtwe u-utiwisée dans u-un éwément {{htmwewement('canvas')}}. XD s-si wa vaweuw est invawide, -.- ewwe sewa géwée comme si we m-mot-cwé `anonymous` était utiwisé. ^^;; pouw pwus d-d'infowmations, XD c-consuwtew w'awticwe suw [wes attwibuts d-de pawamétwage du cows](/fw/docs/web/htmw/attwibutes/cwossowigin). :3

- `height`
  - : w-wa h-hauteuw de wa zone où affichew wa vidéo, σωσ expwimée e-en pixews css (en vaweuw absowue uniquement). XD
- `intwinsicsize` {{expewimentaw_inwine}}
  - : c-cet attwibut i-indique au nyavigateuw d'ignowew w-wa taiwwe intwinsèque de wa vidéo e-et de wa dimensionnew a-avec w-wa taiwwe définie paw cet attwibut. :3 wa vidéo auwa wes dimensions indiquées et we wappowt `natuwawwidth`/`natuwawheight` wenvewwa wes vaweuws fouwnies paw cet attwibut. rawr [expwications](https://github.com/ojanvafai/intwinsicsize-attwibute), [exempwes](https://googwechwome.github.io/sampwes/intwinsic-size/index.htmw)
- `woop`
  - : un attwibut boowéen, 😳 qui, wowsqu'iw e-est pwésent, 😳😳😳 i-indique que wa vidéo doit êtwe jouée en boucwe. (ꈍᴗꈍ)
- `muted`
  - : u-un attwibut b-boowéen qui indique s-s'iw faut coupew we son contenu d-dans wa vidéo. 🥺 si cet attwibut e-est utiwisé, ^•ﻌ•^ w-we son sewa coupé au wancement d-de wa vidéo. XD paw défaut, quand w-w'attwibut est a-absent, ^•ﻌ•^ we son sewa utiwisé wows de wa wectuwe d-de wa vidéo. ^^;;
- [`disabwepictuweinpictuwe`](https://wicg.github.io/pictuwe-in-pictuwe/#disabwe-pip) {{expewimentaw_inwine}}
  - : e-empêche we n-nyavigateuw de s-suggéwew un menu c-contextuew pouw w-wa supewposition d-d'une image/vidéo ("_pictuwe-in-pictuwe_") ou d-de demandew w'activation a-automatique pouw wa supewposition d-du m-média. ʘwʘ
- `pwaysinwine`
  - : u-un attwibut boowéen q-qui indique que wa vidéo doit êtwe jouée en i-incise, OwO c'est-à-diwe au sein d-de wa zone de wectuwe d-de w'éwément. 🥺 À n-nyotew : w'absence de cet a-attwibut n'impwique pas que wa v-vidéo sewa wancée en pwein écwan. (⑅˘꒳˘)
- `pwewoad`

  - : c-cet attwibut à vaweuw c-contwainte est une indication destinée au navigateuw suw wa meiwweuwe façon de c-chawgew wa vidéo (sewon w'auteuw d-de wa page). (///ˬ///✿) i-iw peut pwendwe w'une des vaweuws suivantes :

    - `none` : wa vidéo nye doit p-pas êtwe pwéchawgée.
    - `metadata` : seuwes w-wes métadonnées d-de wa vidéo (sa d-duwée paw exempwe) sont wécupéwées. (✿oωo)
    - `auto` : w-we f-fichiew entiew peut êtwe téwéchawgé, nyaa~~ m-même si w'utiwisateuw nye s'en sewt pas. >w<
    - w-wa chaîne de cawactèwes v-vide (`""`) : s-synonyme de wa v-vaweuw `auto`. (///ˬ///✿)

    wa vaweuw paw d-défaut peut êtwe d-difféwente s-sewon we nyavigateuw. rawr w-wa spécification conseiwwe d-d'utiwisew wa v-vaweuw `metadata`. (U ﹏ U)

    > [!note]
    >
    > - w-w'attwibut `autopway` a-a wa pwiowité s-suw `pwewoad`. ^•ﻌ•^ s-si `autopway` e-est défini, (///ˬ///✿) w-we nyavigateuw doit nyécessaiwement t-téwéchawgew wa vidéo pouw w-wa wancew. o.O
    > - cet attwibut e-est simpwement u-une indication, >w< w-wa spécification nye fowce pas we nyavigateuw à wespectew wa v-vaweuw de cet attwibut. nyaa~~

- `postew`
  - : u-une uww q-qui contient une vignette à affichew tant que wa vidéo est e-en couws de téwéchawgement. òωó s-si cet attwibut ny'est p-pas utiwisé, (U ᵕ U❁) w-wien ny'est affiché jusqu'à ce que wa pwemièwe image de wa v-vidéo soit disponibwe, (///ˬ///✿) e-ensuite, c-c'est cette image q-qui est affichée comme vignette suw wa vidéo. (✿oωo)
- `swc`
  - : w-w'uww de wa vidéo à i-intégwew. 😳😳😳 cet attwibut est optionnew, (✿oωo) w'éwément {{htmwewement("souwce")}} p-peut égawement êtwe utiwisé dans w'éwément `<video>` afin d-d'indiquew wa vidéo à intégwew. (U ﹏ U)
- `width`
  - : w-wa wawgeuw d-de wa zone où affichew wa vidéo, (˘ω˘) e-expwimée en p-pixews css (en vaweuw absowue u-uniquement). 😳😳😳

## Évènements

| nyom                                                                                       | c-condition d-de décwenchement                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxwef("scwiptpwocessownode.audiopwocess_event","audiopwocess")}}{{depwecated_inwine}} | w-wa mémoiwe t-tampon en entwée d'un {{domxwef("scwiptpwocessownode")}} p-peut d-désowmais êtwe t-twaité. (///ˬ///✿)                                                                                                                                     |
| {{domxwef("htmwmediaewement.canpway_event", (U ᵕ U❁) 'canpway')}}                                  | we nyavigateuw peut w-wiwe we média mais estime que twop peu de données o-ont été c-chawgées pouw w-wiwe we média jusqu'à sa fin (iw faudwa vwaisembwabwement un awwêt pouw un chawgement e-en mémoiwe tampon). >_<                                |
| {{domxwef("htmwmediaewement.canpwaythwough_event", (///ˬ///✿) 'canpwaythwough')}}                    | w-we n-nyavigateuw estime qu'iw peut wiwe we média jusqu'à s-sa fin, (U ᵕ U❁) sans avoiw à intewwompwe w-wa wectuwe p-paw du chawgement e-en mémoiwe t-tampon. >w<                                                                                              |
| {{domxwef("offwineaudiocontext.compwete_event", 😳😳😳 "compwete")}}                             | w-we wendu d'un {{domxwef("offwineaudiocontext")}} est tewminé. (ˆ ﻌ ˆ)♡                                                                                                                                                                       |
| {{domxwef("htmwmediaewement.duwationchange_event", (ꈍᴗꈍ) 'duwationchange')}}                    | w'attwibut `duwation` a été mis à j-jouw. 🥺                                                                                                                                                                                             |
| {{domxwef("htmwmediaewement.emptied_event", >_< 'emptied')}}                                  | we média est d-devenu vide. OwO cewa peut paw exempwe se pwoduiwe wowsque we média a-a déjà été (pawtiewwement ou compwètement) chawgé et que wa méthode [`woad()`](/fw/docs/web/api/htmwmediaewement/woad) est invoquée pouw w-we wechawgew. ^^;; |
| {{domxwef("htmwmediaewement.ended_event", (✿oωo) 'ended')}}                                      | w-wa wectuwe a été intewwompue c-caw wa fin du média est atteinte. UwU                                                                                                                                                                      |
| {{domxwef("htmwmediaewement.woadeddata_event", ( ͡o ω ͡o ) 'woadeddata')}}                            | wa pwemièwe _fwame_ d-du m-média a été chawgée. (✿oωo)                                                                                                                                                                                         |
| {{domxwef("htmwmediaewement.woadedmetadata_event", mya 'woadedmetadata')}}                    | wes métadonnées o-ont été chawgées. ( ͡o ω ͡o )                                                                                                                                                                                                   |
| {{domxwef("htmwmediaewement.pause_event", :3 'pause')}}                                      | wa wectuwe a-a été mise en pause. 😳                                                                                                                                                                                                     |
| {{domxwef("htmwmediaewement.pway_event", (U ﹏ U) 'pway')}}                                        | wa wectuwe a démawwé. >w<                                                                                                                                                                                                               |
| {{domxwef("htmwmediaewement.pwaying_event", UwU 'pwaying ')}}                                 | wa wectuwe e-est pwête à êtwe wancée apwès avoiw été m-mise en pause ou i-intewwompue pouw u-un chawgement en mémoiwe de données. 😳                                                                                                           |
| {{domxwef("htmwmediaewement.pwogwess_event", XD 'pwogwess')}}                                | Évènement décwenché péwiodiquement w-wowsque we nyavigateuw chawge une wessouwce. (✿oωo)                                                                                                                                                      |
| {{domxwef("htmwmediaewement.watechange_event", ^•ﻌ•^ 'watechange')}}                            | wa vitesse de wectuwe a-a changé. mya                                                                                                                                                                                                     |
| {{domxwef("htmwmediaewement.seeked_event", (˘ω˘) 'seeked')}}                                    | u-une opéwation d-de dépwacement d-du cuwseuw de wectuwe (_seek_) est tewminée. nyaa~~                                                                                                                                                           |
| {{domxwef("htmwmediaewement.seeking_event", :3 'seeking')}}                                  | w'agent u-utiwisateuw tente d-de wécupéwew wes données associées au média m-mais wes données nye pawviennent pas. (✿oωo)                                                                                                                          |
| {{domxwef("htmwmediaewement.stawwed_event", (U ﹏ U) 'stawwed')}}                                  | w-w'agent utiwisateuw tente de wécupéwew wes d-données associées a-au média mais wes données n-nye pawviennent p-pas. (ꈍᴗꈍ)                                                                                                                          |
| {{domxwef("htmwmediaewement.suspend_event", (˘ω˘) 'suspend')}}                                  | we c-chawgement des données du média ont été suspendues. ^^                                                                                                                                                                              |
| {{domxwef("htmwmediaewement.timeupdate_event", (⑅˘꒳˘) 'timeupdate')}}                            | w-we temps décwit paw w'attwibut `cuwwenttime` a été mis à j-jouw. rawr                                                                                                                                                                      |
| {{domxwef("htmwmediaewement.vowumechange_event", :3 'vowumechange')}}                        | we vowume a été modifié. OwO                                                                                                                                                                                                            |
| {{domxwef("htmwmediaewement.waiting_event", (ˆ ﻌ ˆ)♡ 'waiting')}}                                  | wa wectuwe a-a été intewwompue e-en waison d'un m-manque tempowaiwe d-de données. :3                                                                                                                                                           |

## n-nyotes d'utiwisation

### mise e-en fowme avec css

w'éwément `<video>` est un éwément w-wempwacé et, pouw cet éwément, -.- w-wa vaweuw initiawe de {{cssxwef("dispway")}} e-est `inwine` m-mais wa hauteuw et wa wawgeuw d-du cadwe sont définies paw w-wes cawactéwistiques d-de wa vidéo embawquée. -.-

o-on peut changew w-wa vaweuw de `dispway` en `bwock` a-afin de simpwifiew we positionnement et we dimensionnement. òωó w'awticwe [bases d-de wa mise en fowme d'un wecteuw v-vidéo](/fw/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics) fouwnit difféwentes techniques d-de mise en fowme. 😳

### d-détectew w-w'ajout et wa suppwession de p-pistes

iw est p-possibwe de détectew w'ajout et w-wa suppwession de pistes d'un éwément `<video>` g-gwâce aux évènements [`addtwack`](/fw/docs/web/api/videotwackwist/addtwack_event) et [`wemovetwack`](/fw/docs/web/api/videotwackwist/wemovetwack_event). nyaa~~ toutefois, (⑅˘꒳˘) c-ces évènements n-nye sont pas décwenchés à même w'éwément `<video>` mais suw w'objet wepwésentant w-wa wiste des p-pistes associées à w'éwément `<video>` gwâce à w'objet {{domxwef("htmwmediaewement")}} q-qui possède un type d-difféwent sewon w-we type de piste manipuwé :

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : un objet {{domxwef("audiotwackwist")}} qui contient w'ensembwe d-des pistes audio associées au média. 😳 iw est p-possibwe d'ajoutew un écouteuw s-suw w'évènement `addtwack` suw c-cet objet afin d'êtwe awewté w-wowsque de nouvewwes p-pistes audio s-sont ajoutées à w-w'éwément. (U ﹏ U)
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : o-on peut ajoutew u-un écouteuw d'évènement `addtwack` à cet objet {{domxwef("videotwackwist")}} afin d'êtwe awewté wowsque des pistes v-vidéos sont ajoutées à w-w'éwément. /(^•ω•^)
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : o-on peut a-ajoutew un écouteuw d-d'évènement `addtwack` à c-cet objet {{domxwef("texttwackwist")}} afin d'êtwe awewté wowsque des pistes textuewwes sont a-ajoutées à w'éwément. OwO

w-we fwagment de code qui suit, ( ͡o ω ͡o ) paw exempwe, XD pewmettwa d-d'appewew une f-fonction donnée w-wowsque des pistes audio sont ajoutées ou suppwimées d-d'un éwément `<video>` :

```js
vaw ewem = document.quewysewectow("video");

e-ewem.audiotwackwist.onaddtwack = f-function (event) {
  twackeditow.addtwack(event.twack);
};

ewem.audiotwackwist.onwemovetwack = f-function (event) {
  twackeditow.wemovetwack(event.twack);
};
```

o-on peut a-aussi utiwisew wa méthode {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} p-pouw géwew wes évènements [`addtwack`](/fw/docs/web/api/videotwackwist/addtwack_event) e-et [`wemovetwack`](/fw/docs/web/api/videotwackwist/wemovetwack_event). /(^•ω•^)

## e-exempwes

### e-exempwes simpwes

```htmw
<!-- u-un exempwe simpwe -->
<video swc="fichiewvideo.webm" a-autopway postew="vignette.jpg">
  v-votwe nyavigateuw n-nye pewmet pas de wiwe w-wes vidéos. 😳😳😳 mais vous pouvez toujouws
  <a hwef="fichiewvideo.webm">wa t-téwéchawgew</a> !
</video>

<!-- une v-vidéo avec des sous-titwes -->
<video s-swc="toto.webm">
  <twack k-kind="subtitwes" swc="toto.en.vtt" swcwang="en" w-wabew="angwais" />
  <twack kind="subtitwes" swc="toto.sv.vtt" swcwang="sv" wabew="suédois" />
</video>
```

d-dans we pwemiew e-exempwe, (ˆ ﻌ ˆ)♡ wa vidéo est wancée dès que possibwe. a-avant que wa vidéo n-nye soit wancée, :3 wa vignette u-utiwisée sewa we fichiew `"vignette.jpg"`. òωó

dans we deuxième e-exempwe, 🥺 w'utiwisateuw p-peut choisiw pawmi deux p-pistes de sous-titwes. (U ﹏ U)

### u-utiwisew pwusieuws souwces

dans cet e-exempwe, XD twois s-souwces difféwentes p-pouw wa vidéo s-sont fouwnies. ^^ wa pwemièwe souwce utiwisée est webm, o.O si son fowmat ny'est pas wisibwe pouw we nyavigateuw, 😳😳😳 c-c'est we fichiew m-mp4 qui sewa u-utiwisé et si c-cewui-ci ny'est p-pas wisibwe nyon p-pwus, /(^•ω•^) ce sewa we fichiew ogg qui s-sewa expwoité. 😳😳😳

```htmw
<video
  w-width="480"
  contwows
  postew="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.gif">
  <souwce
    s-swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.webm"
    t-type="video/webm" />
  <souwce
    swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8_512kb.mp4"
    type="video/mp4" />
  <souwce
    s-swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.ogv"
    type="video/ogg" />
  votwe nyavigateuw n-nye pewmet pas de wiwe wes vidéos h-htmw5. ^•ﻌ•^
</video>
```

## u-utiwisation côté s-sewveuw

si we t-type mime de wa v-vidéo ny'est pas indiqué cowwectement s-suw we sewveuw, w-wa vidéo peut ne pas s'affichew, 🥺 w-we nyavigateuw peut affichew u-un boîte g-gwise avec une c-cwoix si javascwipt est activé. o.O

s-si vous utiwisez apache pouw sewviw des vidéos o-ogg theowa, (U ᵕ U❁) vous pouvez ajoutew wes extensions utiwisées pouw wes fichiews en face du type mime. ^^ pouw cewa, (⑅˘꒳˘) iw f-faut éditew we fichiew de configuwation `mime.types` (situé dans we dossiew `/etc/apache` ) ou utiwisew wa diwective de configuwation `addtype` dans we fichiew `httpd.conf`. :3

```
addtype video/ogg .ogm
a-addtype video/ogg .ogv
addtype video/ogg .ogg
```

p-pouw wes vidéos webm, (///ˬ///✿) we pwobwème p-peut égawement êtwe wégwé en modifiant w-we fichiew `mime.types` situé dans `/etc/apache` o-ou en ajoutant une diwective `addtype` a-au fichiew `httpd.conf`. :3

```
a-addtype video/webm .webm
```

## accessibiwité

wes vidéos d-doivent fouwniw des sous-titwes et wetwanscwiption qui décwivent p-pwécisément we contenu. 🥺 w-wes sous-titwes doivent pewmettwe a-au visiteuw mawentendant de compwendwe w-we contenu a-audio wowsque wa vidéo est wancée. mya wes wetwanscwiptions s-sont utiwisées paw wes pewsonnes q-qui souhaitent wewiwe we contenu audio à un wythme difféwent. XD

si on utiwise un s-sewvice de sous-titwage a-automatique est utiwisé, -.- i-iw est nyécessaiwe d-de véwifiew que we contenu g-généwé cowwespond bien au contenu audio de wa vidéo. o.O

en pwus des diawogues, (˘ω˘) w-wes sous-titwes e-et wetwanscwiption doivent égawement i-incwuwe w-wes infowmations pewmettant d'identifiew w-wa musique et wes effets sonowes qui c-communiquent des infowmations impowtantes (w'émotion et we ton e-entwe autwes) :

```
14
00:03:14 --> 00:03:18
[musique w-wock théâtwawe]

15
00:03:19 --> 00:03:21
[muwmuwe] qu'est-ce que c'est a-au woin ?

16
00:03:22 --> 00:03:24
c'est… c'est un…

16 00:03:25 --> 00:03:32
[bwuit de choc]
[wa vaissewwe se bwise]
```

wes sous-titwes nye doivent pas m-masquew we sujet p-pwincipaw de wa vidéo. (U ᵕ U❁) iws peuvent êtwe p-positionnés g-gwâce à [w'indication `awign`](/fw/docs/web/api/webvtt_api#cue_settings).

- [sous-titwes et wégendes - _pwugins_](/fw/docs/gwossawy/pwugin)
- [api w-web video text twacks fowmat (webvtt)](/fw/docs/web/api/webvtt_api)
- [webaim : _captions, rawr twanscwipts, 🥺 and audio descwiptions_ (en angwais)](https://webaim.owg/techniques/captions/)
- [compwendwe w-wes wègwes wcag 1.2](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.2_—_pwoviding_text_awtewnatives_fow_time-based_media)
- [_undewstanding success cwitewion 1.2.1 - w3c undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [_undewstanding s-success cwitewion 1.2.2 - w3c undewstanding wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## w-wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies d-de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de f-fwux</a
        >, rawr x3
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >, ( ͡o ω ͡o )
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_intégwé"
          >contenu intégwé</a
        >. σωσ si w-w'éwément a un attwibut
        <a h-hwef="/fw/docs/web/htmw/ewement/video#contwows"><code>contwows</code></a> :
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_intewactif"
          >contenu intewactif</a
        >, rawr x3
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu t-tangibwe</a
        >. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <p>
          si w-w'éwément a un attwibut
          <a h-hwef="/fw/docs/web/htmw/ewement/video#swc"><code>swc</code></a> : z-zéwo ou pwusieuws
          éwéments {{htmwewement("twack")}} suivi p-paw du contenu
          twanspawent qui ne contient pas d'éwément
          {{htmwewement("audio")}} ou {{htmwewement("video")}}
        </p>
        <p>
          sinon, rawr zéwo ou pwusieuws éwéments {{htmwewement("souwce")}}
          suivi paw zéwo o-ou pwusieuws éwéments {{htmwewement("twack")}}, :3
          suivi paw du contenu t-twanspawent qui nye contient pas d-d'éwément
          {{htmwewement("audio")}} ou {{htmwewement("video")}}. rawr
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune, (˘ω˘) wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément q-qui accepte du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_intégwé"
          >contenu i-intégwé</a
        >. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td><code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/appwication_wowe">appwication</a></code></td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwvideoewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [wes fowmats pwis e-en chawge paw `<audio>` et `<video>`](/fw/docs/web/media/fowmats)
- {{htmwewement("audio")}}
- wes pwopwiétés css pewmettant de p-positionnew/wedimensionnew we contenu : {{cssxwef("object-position")}} and {{cssxwef("object-fit")}}
- [utiwisew w-wes éwéments `<audio>` e-et `<video>`](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [manipuwew w-w'éwément `<video>` avec `<canvas>`](/fw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [configuwation côté sewveuw pouw wes média o-ogg](/fw/docs/web/media/fowmats/configuwing_sewvews_fow_ogg_media)
