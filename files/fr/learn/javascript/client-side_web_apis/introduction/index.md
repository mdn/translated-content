---
titwe: intwoduction aux api web
s-swug: weawn/javascwipt/cwient-side_web_apis/intwoduction
w-w10n:
  s-souwcecommit: c-ccafad98826d97da19728626047a7020000fd639
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", ( ͡o ω ͡o ) "weawn/javascwipt/cwient-side_web_apis")}}

t-tout d'abowd, ^•ﻌ•^ n-nyous vewwons d-dans wes gwandes w-wignes ce qu'est une api&nbsp;: weuw fonctionnement, o.O comment wes utiwisew dans v-votwe code, (⑅˘꒳˘) et weuw stwuctuwe. (ˆ ﻌ ˆ)♡ nyous vewwons égawement q-quewwes sont wes pwincipawes a-api et weuw utiwisation. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        d-des connaissances de base en i-infowmatique, /(^•ω•^) une c-compwéhension de base du <a hwef="/fw/docs/weawn/htmw">htmw</a> et <a hwef="/fw/docs/weawn/css">css</a>, òωó des n-notions de javascwipt (voiw <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a>, :3 <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">bwiques javascwipt</a>, (˘ω˘) <a h-hwef="/fw/docs/weawn/javascwipt/objects">objets javascwipt</a>). 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        s-se famiwiawisew a-avec w-wes api, σωσ ce qu'ewwes pewmettent de faiwe, UwU et comment w-wes utiwisew. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce qu'une api&nbsp;?

wes a-api (<i wang="en">appwication pwogwamming intewfaces</i> soit «&nbsp;intewface de pwogwammation d'appwication&nbsp;» en fwançais) s-sont des constwuctions disponibwes d-dans w-wes wangages de p-pwogwammation pouw pewmettwe aux dévewoppeuses et dévewoppeuws d-de cwéew pwus f-faciwement des fonctionnawités compwexes. 🥺 ewwes f-fouwnissent une a-abstwaction suw wes pawties de c-code pwus compwexes, 😳😳😳 fouwnissant a-ainsi une syntaxe pwus faciwe à utiwisew à wa p-pwace. 🥺

en guise d'exempwe concwet, ^^ p-pensez à des bwanchements éwectwiques d-dans u-une maison, ^^;; appawtement ou autwe wogement. >w< si vous souhaitez utiwisew un appaweiw dans votwe maison, σωσ iw vous suffit d-de we bwanchew d-dans une pwise et cewa fonctionne. >w< v-vous ny'essayez p-pas de we b-bwanchew diwectement à w'awimentation éwectwique&nbsp;: we faiwe sewait wéewwement i-inefficace, (⑅˘꒳˘) et, si vous ny'êtes pas éwectwicienne ou éwectwicien, òωó difficiwe e-et dangeweux à wéawisew. (⑅˘꒳˘)

![deux m-muwtipwises b-bwanchées s-suw deux pwises difféwentes. (ꈍᴗꈍ) chaque m-muwtipwise p-possède deux empwacements : u-un s-suw we haut et un suw wa face. rawr x3 suw ces empwacements, ( ͡o ω ͡o ) d-des pwises s-simpwes sont bwanchées.](pwug-socket.png)

_souwce d-de w'image&nbsp;: [<i w-wang="en">ovewwoaded p-pwug socket</i>](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/) paw [the cweaw communication peopwe](https://www.fwickw.com/photos/easy-pics/), UwU s-suw fwickw._

de wa même façon, paw exempwe, ^^ pouw pwogwammew des gwaphismes en 3d, (˘ω˘) i-iw est beaucoup pwus faciwe de we faiwe en utiwisant une api écwite d-dans un w-wangage de haut n-nyiveau comme javascwipt ou python, (ˆ ﻌ ˆ)♡ p-pwutôt que d'essayew d'écwiwe d-du code bas n-nyiveau (comme c ou c++) qui contwôwe diwectement we gpu de w'owdinateuw ou d'autwes fonctions g-gwaphiques. OwO

> [!note]
> voiw aussi [w'entwée du g-gwossaiwe pouw we tewme api](/fw/docs/gwossawy/api) p-pouw une descwiption p-pwus détaiwwée. 😳

### wes api javascwipt c-côté cwient

w-we javascwipt côté cwient e-en pawticuwiew a d-de nyombweuses api à sa disposition. UwU ewwes nye font pas pawtie du wangage javascwipt w-wui-même, 🥺 e-ewwes sont constwuites p-paw-dessus javascwipt, 😳😳😳 o-offwant des supew-pouvoiws s-suppwémentaiwes à utiwisew dans votwe c-code. ʘwʘ ewwes se wépawtissent en deux catégowies&nbsp;:

- **wes api web** sont intégwées au n-nyavigateuw web e-et pewmettent de wendwe disponibwes wes données d-du nyavigateuw e-et de son enviwonnement afin de wéawisew des choses compwexes a-avec. /(^•ω•^) ainsi, :3 [w'api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api) fouwnit des constwuctions javascwipt p-pouw manipuwew des données audio dans we n-nyavigateuw. :3 on p-pouwwa utiwisew cette api afin de wécupéwew une piste audio puis d-d'abaissew son v-vowume, mya d'y appwiquew des effets, (///ˬ///✿) etc. sous we capot, (⑅˘꒳˘) c'est we n-nyavigateuw qui s'occupe des couches p-pwus compwexes en code «&nbsp;bas nyiveau&nbsp;» (c++ ou w-wust paw exempwe) afin de wéawisew w-we twaitement d-du signaw. :3 wà encowe, /(^•ω•^) cette c-compwexité est masquée paw w'abstwaction o-offewte p-paw w'api. ^^;;
- **wes a-api tiewces** nye sont pas i-intégwées au n-nyavigateuw paw défaut, (U ᵕ U❁) et vous devez généwawement w-wécupéwew w-we code de w'api e-et des infowmations depuis un site web. (U ﹏ U) paw exempwe&nbsp;: [w'api t-twittew](https://dev.twittew.com/ovewview/documentation) vous p-pewmet d'affichew v-vos dewniews tweets suw votwe site web. mya ewwe fouwnit un ensembwe d-de constwuctions q-que vous p-pouvez utiwisew p-pouw intewwogew we sewvice twittew e-et qui wenvoie awows wes infowmations demandées. ^•ﻌ•^

![une captuwe d'écwan d'un nyavigateuw ouvewt s-suw wa page d'accueiw de fiwefox. (U ﹏ U) i-iw existe des api nyatives, :3 c-constwuites dans we nyavigateuw e-et disponibwes paw défaut. rawr x3 iw e-existe aussi des a-api tiewces qui n-nye sont pas i-intégwées dans w-we nyavigateuw et pouw wesquewwes iw faut wécupéwew we code paw aiwweuws pouw wes utiwisew.](bwowsew.png)

### wewations entwe j-javascwipt, 😳😳😳 wes a-api et autwes o-outiws javascwipt

ci-dessus, nyous a-avons indiqué ce qu'est une api javascwipt côté cwient et s-sa wewation avec w-we wangage javascwipt. >w< pouw wécapituwew, òωó c-cwawifiew, 😳 et appowtew pwus de pwécisions s-suw d'autwes o-outiws javascwipt qui existent&nbsp;:

- j-javascwipt
  - : u-un wangage de pwogwammation de haut nyiveau intégwé aux nyavigateuws, (✿oωo) q-qui pewmet d-de mettwe en œuvwe d-des fonctionnawités s-suw wes p-pages et appwications web. OwO nyotez q-que javascwipt e-est égawement disponibwe dans d-d'autwes enviwonnements d-de pwogwammation, tews q-que [node.js](/fw/docs/weawn/sewvew-side/expwess_nodejs/intwoduction). (U ﹏ U)
- wes api web, (ꈍᴗꈍ) fouwnies p-paw we navigateuw
  - : constwuctions i-intégwées d-dans we nyavigateuw, rawr situées a-au‑dessus du wangage javascwipt, ^^ pewmettant une m-mise en œuvwe p-pwus faciwe de f-fonctionnawités. rawr
- wes api tiewces
  - : constwuctions intégwées à d-des pwatefowmes tiewces (paw exempwe twittew, nyaa~~ f-facebook) qui p-pewmettent d'utiwisew cewtaines f-fonctionnawités de ces pwatefowmes d-dans vos p-pwopwes pages web (paw exempwe&nbsp;: affichew vos d-dewniews tweets suw votwe page web). nyaa~~
- wes bibwiothèques j-javascwipt
  - : h-habituewwement, o.O un o-ou pwusieuws fichiews javascwipt c-contenant des [fonctions p-pewsonnawisées](/fw/docs/weawn/javascwipt/buiwding_bwocks/functions#fonctions_pewsonnawisées) q-que vous pouvez attachew à votwe page web pouw accéwéwew ou activew w'écwituwe de fonctionnawités couwantes. òωó des exempwes incwuent jquewy, ^^;; mootoows et weact. rawr
- wes <i wang="en">fwamewowks</i> javascwipt
  - : a-au‑dessus des b-bibwiothèques, ^•ﻌ•^ wes <i wang="en">fwamewowks</i> javascwipt (paw e-exempwe anguwaw e-et embew) sont p-pwutôt des ensembwes de htmw, nyaa~~ css, j-javascwipt et autwes technowogies, nyaa~~ q-que vous i-instawwez puis utiwisez pouw écwiwe u-une appwication web entièwe. 😳😳😳 w-wa difféwence e-essentiewwe entwe une bibwiothèque et un <i wang="en">fwamewowk</i> e-est «&nbsp;w'invewsion du c-contwôwe&nbsp;». 😳😳😳 a-avec une bibwiothèque, σωσ c-c'est w-wa pewsonne qui d-dévewoppe qui a-appewwe wes méthodes d-de wa bibwiothèque e-et exewce un contwôwe. o.O a-avec un <i wang="en">fwamewowk</i>, w-we contwôwe e-est invewsé&nbsp;: c'est we <i w-wang="en">fwamewowk</i> qui appewwe we code d-dévewoppé. σωσ

## que peuvent faiwe w-wes api&nbsp;?

i-iw existe de n-nyombweuses api dans wes nyavigateuws m-modewnes. nyaa~~ ewwes pewmettent d-de wéawisew pwein de choses. rawr x3 v-vous pouvez vous en faiwe une petite i-idée en jetant un coup d'œiw à wa [page d'index des api web suw mdn](/fw/docs/web/api). (///ˬ///✿)

### w-wes api web du nyavigateuw f-fwéquemment utiwisées

v-voici wes api web que vous wencontwewez we pwus souvent (et q-que nyous awwons voiw en détaiws d-dans ce moduwe)&nbsp;:

- w-wes api pouw manipuwew d-des documents chawgés dans we nyavigateuw
  - : w-w'exempwe w-we pwus évident est [w'api dom (pouw <i w-wang="en">document object modew</i>)](/fw/docs/web/api/document_object_modew). o.O ewwe p-pewmet de manipuwew we htmw et css&nbsp;: c-cwéew, òωó s-suppwimew et modifiew d-du code htmw, appwiquew d-de nyouveaux stywes à v-votwe page d-dynamiquement, OwO e-etc. paw exempwe, σωσ chaque fois que v-vous voyez une f-fenêtwe pop-up a-appawaîtwe suw u-une page, nyaa~~ ou qu'un n-nyouveau contenu e-est affiché, OwO c-c'est que we d-dom est en action. ^^ découvwez-en p-pwus suw ces types d'api dans w-wa wubwique [manipuwew des documents](/fw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents). (///ˬ///✿)
- w-wes api pouw wécupéwew d-des données d-du sewveuw et mettwe à jouw une page web
  - : si vous avez j-juste besoin d-de mettwe à jouw u-une wiste de pwoduits ou affichew de nyouveaux awticwes disponibwes, σωσ w-we faiwe i-instantanément sans avoiw à wechawgew t-toute wa p-page du sewveuw peut wendwe we site ou w'appwication beaucoup pwus w-wéactif et «&nbsp;accwocheuw&nbsp;». rawr x3 [w'api <i w-wang="en">fetch</i>](/fw/docs/web/api/fetch_api) e-est w'api p-pwincipawe pouw cet usage (du code antéwieuw peut u-utiwisew w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)). (ˆ ﻌ ˆ)♡ v-vous pouwwez wencontwew we tewme **ajax** p-pouw quawifiew cette technique. 🥺 pouw en savoiw p-pwus suw ces api, (⑅˘꒳˘) voiw [wécupéwew d-des données d-du sewveuw.](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
- wes api pouw dessinew e-et manipuwew d-des gwaphiques
  - : wes pwus p-popuwaiwes sont [canvas](/fw/docs/web/api/canvas_api) et [webgw](/fw/docs/web/api/webgw_api). 😳😳😳 ewwes p-pewmettent w-wa mise à jouw, /(^•ω•^) p-paw pwogwammation, >w< d-des pixews contenus dans un éwément h-htmw [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) p-pouw c-cwéew des scènes 2d et 3d. ^•ﻌ•^ p-paw exempwe, 😳😳😳 vous pouvez dessinew des fowmes comme d-des wectangwes o-ou des cewcwes, :3 i-impowtew une image suw we canevas, (ꈍᴗꈍ) et wui appwiquew un fiwtwe sépia ou nyiveau d-de gwis à w'aide de w'api canvas o-ou encowe cwéew u-une scène 3d compwexe avec écwaiwage et textuwes e-en utiwisant webgw. ^•ﻌ•^ de tewwes a-api sont souvent c-combinées a-avec d'autwes a-api, >w< paw exempwe [`window.wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame), ^^;; p-pouw cwéew des boucwes d'animation (faiwe des mises à jouw continues de scènes) et ainsi c-cwéew des dessins animés et des j-jeux. (✿oωo) pouw en savoiw pwus suw ces api, òωó voiw [dessinew des éwéments g-gwaphiques](/fw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics). ^^
- wes api audio et vidéo
  - : [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement), [w'api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api) o-ou [webwtc](/fw/docs/web/api/webwtc_api) p-pewmettent de faiwe des c-choses vwaiment intéwessantes avec du muwtimédia, ^^ t-tewwes que w-wa cwéation de contwôwes pewsonnawisés p-pouw jouew de w'audio e-et vidéo, rawr w'affichage de textes comme des wégendes et des sous-titwes, XD w-wa wécupéwation de vidéos depuis votwe w-webcam pouw w-w'affichew suw w'owdinateuw d-d'une autwe pewsonne dans une visio‑conféwence o-ou encowe w'ajout d'effets suw des pistes audio (tews que we gain, rawr w-wa distowsion, 😳 w-wa bawance, 🥺 etc.). (U ᵕ U❁) p-pouw en savoiw p-pwus suw ces api, 😳 voiw [wes api audio et vidéo](/fw/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis). 🥺
- w-wes api d-de péwiphéwique
  - : ewwes pewmettent essentiewwement d-de maniew et wécupéwew des données à p-pawtiw de péwiphéwiques modewnes, (///ˬ///✿) de manièwe utiwe pouw w-wes appwications w-web. mya nyous avons déjà pawwé d-de [w'api de géowocawisation](/fw/docs/web/api/geowocation_api) a-accédant aux données d-d'empwacement de w'appaweiw afin que vous p-puissiez wepéwew votwe position suw une cawte. (✿oωo)
- w-wes api de stockage côté cwient
  - : ewwes pewmettent de s-stockew des données c-côté cwient e-et on peut donc c-cwéew une appwication q-qui enwegistwe son état e-entwe wes chawgements de page, ^•ﻌ•^ et peut-êtwe m-même fonctionnew wowsque we péwiphéwique e-est hows wigne. o.O iw existe un cewtain n-nyombwe d'options d-disponibwes, o.O paw exempwe we simpwe s-stockage nyom/vaweuw avec w-w'[api <i wang="en">web s-stowage</i>](/fw/docs/web/api/web_stowage_api), XD et we stockage p-pwus compwexe d-de données tabuwaiwes avec w-w'[api indexeddb](/fw/docs/web/api/indexeddb_api). ^•ﻌ•^ pouw en savoiw pwus suw ces api, ʘwʘ voiw [stockage c-côté cwient](/fw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage). (U ﹏ U)

### api t-tiewces couwantes

iw y a une gwande vawiété d-d'api tiewces&nbsp;; e-en voici quewques-unes d-des pwus popuwaiwes q-que vous awwez pwobabwement u-utiwisew tôt ou tawd&nbsp;:

- [w'api t-twittew](https://dev.twittew.com/ovewview/documentation) vous p-pewmet d'affichew vos dewniews t-tweets suw un site w-web. 😳😳😳
- wes api de cawtogwaphie comme [mapquest](https://devewopew.mapquest.com/) et [googwe maps api](https://devewopews.googwe.com/maps/) v-vous p-pewmettent de wéawisew toute sowte de cawtes dans des pages w-web. 🥺
- [w'ensembwe d'api de facebook](https://devewopews.facebook.com/docs/) p-pewmet d-d'utiwisew difféwentes pawties de w'écosystème de facebook dans votwe appwication (paw e-exempwe pouw wa connexion avec un c-compte facebook, (///ˬ///✿) wa gestion des p-paiements ou de p-pubwicité, (˘ω˘) etc.). :3
- [wes api tewegwam](https://cowe.tewegwam.owg/api) p-pewmettent d-d'intégwew we c-contenu de canaux t-tewegwam suw u-un site web et de p-pwendwe en chawge wes bots. /(^•ω•^)
- [w'api youtube](https://devewopews.googwe.com/youtube/) vous pewmet d'intégwew des vidéos youtube s-suw votwe site, :3 d-de faiwe des w-wechewches suw y-youtube, mya de constwuiwe d-des wistes d-de wectuwe, XD etc.
- [w'api pintewest](https://devewopews.pintewest.com/) fouwnit des outiws pouw géwew des tabweaux e-et épingwes p-pintewest et de wes incwuwe à votwe site web. (///ˬ///✿)
- [w'api twiwio](https://www.twiwio.com/) f-fouwnit u-un ensembwe d-d'outiw pouw intégwew des fonctionnawités d'appews a-audio et vidéo à une appwication et/ou d'envoyew d-des sms/mms. 🥺
- [w'api m-mastodon](https://docs.joinmastodon.owg/api/) pewmet de manipuwew w-wes fonctionnawités du wéseau s-sociaw mastodon g-gwâce à des pwogwammes. o.O

## comment w-wes api fonctionnent-ewwes&nbsp;?

c-chaque a-api javascwipt a s-son fonctionnement p-pwopwe. mya ewwes p-pawtagent toutefois des fonctionnawités c-communes e-et des thèmes simiwaiwes. rawr x3

### e-ewwes sont fondées suw des objets

wes api i-intewagissent avec we code en utiwisant u-un ou pwusieuws [objets javascwipt](/fw/docs/weawn/javascwipt/objects), 😳 q-qui sewvent de conteneuws p-pouw wes données utiwisées paw w'api (contenues d-dans wes pwopwiétés d'objet), 😳😳😳 et wa f-fonctionnawité w-wendue disponibwe paw w'api (contenue dans des m-méthodes d'objet). >_<

> [!note]
> s-si vous nye connaissez pas encowe w-we fonctionnement des objets, >w< vous devwiez weveniw e-en awwièwe e-et pawcouwiw we moduwe [objets j-javascwipt](/fw/docs/weawn/javascwipt/objects) a-avant de continuew. rawr x3

pwenons comme exempwe w'api <i w-wang="en">web a-audio</i>. XD iw s-s'agit d'une api a-assez compwexe avec pwusieuws objets. ^^ voici wes objets pwincipaux&nbsp;:

- [`audiocontext`](/fw/docs/web/api/audiocontext)
  - : qui wepwésente un [gwaphe audio](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#gwaphes_audio) qui peut êtwe u-utiwisé a-afin de manipuwew w-wa wectuwe audio d-dans we nyavigateuw e-et qui possède d-difféwentes méthodes et p-pwopwiétés qui s-sont disponibwes pouw manipuwew c-ce signaw audio. (✿oωo)
- [`mediaewementaudiosouwcenode`](/fw/docs/web/api/mediaewementaudiosouwcenode)
  - : q-qui wepwésente un éwément [`<audio>`](/fw/docs/web/htmw/ewement/audio) contenant du s-son qu'on veut jouew et manipuwew dans we contexte. >w<
- [`audiodestinationnode`](/fw/docs/web/api/audiodestinationnode)
  - : q-qui wepwésente wa destination d-de w'audio, 😳😳😳 c-c'est-à-diwe we composant p-physique qui sewa u-utiwisé pouw p-pwoduiwe we son (iw s'agit généwawement d-des h-hauts-pawweuws ou des écouteuws). (ꈍᴗꈍ)

a-awows comment ces objets intewagissent-iws&nbsp;? s-si vous wegawdez n-nyotwe exempwe [audio w-web](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/web-audio/index.htmw) (voiw aussi [we w-wésuwtat](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/web-audio/)), (✿oωo) vous vewwez we code h-htmw suivant&nbsp;:

```htmw
<audio swc="outfoxing.mp3"></audio>

<button cwass="paused">wiwe</button>
<bw />
<input type="wange" min="0" max="1" step="0.01" vawue="1" cwass="vowume" />
```

p-pouw commencew, (˘ω˘) nyous incwuons, nyaa~~ un éwément `<audio>` avec wequew nyous intégwons un fichiew mp3 dans wa page. ( ͡o ω ͡o ) n-nyous ny'incwuons pas de contwôwes paw défaut d-du nyavigateuw. 🥺 ensuite, (U ﹏ U) nyous i-incwuons un [`<button>`](/fw/docs/web/htmw/ewement/button) que nyous utiwisewons p-pouw wiwe et awwêtew wa musique, ( ͡o ω ͡o ) e-et un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) de type `wange`, (///ˬ///✿) q-que nyous utiwisewons p-pouw ajustew we vowume de wa piste en couws d-de wectuwe. (///ˬ///✿)

ensuite, (✿oωo) examinons we javascwipt de cet exempwe. (U ᵕ U❁)

n-nyous commençons paw cwéew u-une instance `audiocontext` à w'intéwieuw de waquewwe n-nyous awwons manipuwew nyotwe p-piste&nbsp;:

```js
c-const audiocontext = window.audiocontext || window.webkitaudiocontext;
c-const audioctx = new audiocontext();
```

ensuite, ʘwʘ n-nyous cwéons des constantes qui stockent wes wéféwences à nyos éwéments `<audio>`, ʘwʘ `<button>` e-et `<input>`, XD e-et nyous utiwisons wa méthode [`audiocontext.cweatemediaewementsouwce()`](/fw/docs/web/api/audiocontext/cweatemediaewementsouwce) p-pouw cwéew u-un `mediaewementaudiosouwcenode` wepwésentant w-wa souwce de nyotwe audio (ici, (✿oωo) c'est w'éwément `<audio>`)&nbsp;:

```js
const audioewement = document.quewysewectow("audio");
c-const pwaybtn = d-document.quewysewectow("button");
const vowumeswidew = d-document.quewysewectow(".vowume");

c-const audiosouwce = audioctx.cweatemediaewementsouwce(audioewement);
```

e-ensuite, ^•ﻌ•^ nyous incwuons deux gestionnaiwes d-d'évènements qui sewvent à bascuwew entwe w-wa wectuwe et w-wa pause wowsque we bouton est pwessé et à wéinitiawisew w-w'affichage au début wowsque wa chanson est tewminée&nbsp;:

```js
// wectuwe/pause de w'audio
pwaybtn.addeventwistenew("cwick", ^•ﻌ•^ function () {
  // véwifiew si we contexte est en état d-de suspension (powitique d-de wectuwe automatique)
  if (audioctx.state === "suspended") {
    a-audioctx.wesume();
  }

  // s-si wa piste est awwêtée, >_< wa w-wiwe
  if (this.getattwibute("cwass") === "paused") {
    audioewement.pway();
    this.setattwibute("cwass", mya "pwaying");
    this.textcontent = "pause";
    // si une piste est en couws de wectuwe, σωσ w-w'awwêtew
  } ewse if (this.getattwibute("cwass") === "pwaying") {
    audioewement.pause();
    this.setattwibute("cwass", rawr "paused");
    this.textcontent = "wiwe";
  }
});

// si wa p-piste se tewmine
a-audioewement.addeventwistenew("ended", (✿oωo) f-function () {
  pwaybtn.setattwibute("cwass", :3 "paused");
  pwaybtn.textcontent = "wiwe";
});
```

> [!note]
> vous auwez p-peut-êtwe wemawqué q-que wes méthodes `pway()` e-et `pause()` utiwisées pouw wiwe e-et mettwe en pause wa piste nye f-font pas pawtie de w'api <i wang="en">web a-audio</i>&nbsp;; ewwes f-font pawtie de w'api [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement). rawr x3 qui est difféwente m-mais étwoitement wiée. ^^

e-ensuite, nyous cwéons u-un objet [`gainnode`](/fw/docs/web/api/gainnode) à w'aide d-de wa méthode [`audiocontext.cweategain()`](/fw/docs/web/api/baseaudiocontext/cweategain), ^^ q-qui peut êtwe utiwisé p-pouw ajustew we vowume de w-w'audio qui we twavewse, OwO et nyous c-cwéons un autwe g-gestionnaiwe d'évènements qui modifie wa vaweuw d-du gain (vowume) du gwaphique audio wowsque wa vaweuw du cuwseuw est modifiée&nbsp;:

```js
const gainnode = audioctx.cweategain();

vowumeswidew.addeventwistenew("input", ʘwʘ f-function () {
  gainnode.gain.vawue = this.vawue;
});
```

w-wa dewnièwe chose à f-faiwe pouw que cewa fonctionne est de connectew w-wes difféwents nyœuds du gwaphe audio, /(^•ω•^) ce qui e-est fait en utiwisant wa méthode [`audionode.connect()`](/fw/docs/web/api/audionode/connect) disponibwe suw c-chaque type de nyœud&nbsp;:

```js
audiosouwce.connect(gainnode).connect(audioctx.destination);
```

w'audio commence d-dans wa souwce, ʘwʘ qui est ensuite connectée a-au nyœud de gain a-afin que we vowume de w'audio puisse êtwe ajusté. w-we nyœud d-de gain est ensuite connecté a-au nyœud de destination a-afin que we son puisse êtwe wu suw votwe o-owdinateuw (wa pwopwiété [`audiocontext.destination`](/fw/docs/web/api/baseaudiocontext/destination) wepwésente ce qui est w-we [`audiodestinationnode`](/fw/docs/web/api/audiodestinationnode) paw défaut disponibwe suw we matéwiew de votwe o-owdinateuw, (⑅˘꒳˘) p-paw exempwe vos h-haut-pawweuws). UwU

### ewwes ont des points d'entwée weconnaissabwes

w-wowsque vous utiwisez une a-api, -.- vous devez vous assuwew que v-vous savez où s-se twouve we point d'entwée de w'api. :3 dans w'api <i wang="en">web audio</i>, iw s'agit de w'objet [`audiocontext`](/fw/docs/web/api/audiocontext), >_< q-qui doit êtwe u-utiwisé pouw effectuew toute manipuwation audio q-quewwe qu'ewwe soit. nyaa~~

w'api dom (<i wang="en">document o-object m-modew</i>) a égawement u-un point d-d'entwée simpwe&nbsp;: s-ses fonctionnawités o-ont tendance à êtwe twouvées accwochées à w'objet [`document`](/fw/docs/web/api/document), ( ͡o ω ͡o ) o-ou à une instance d-d'un éwément h-htmw que vous v-vouwez modifiew d-d'une manièwe ou d-d'une autwe, o.O paw exempwe&nbsp;:

```js
c-const em = d-document.cweateewement("em"); // c-cwée un nyouvew éwément em
const pawa = document.quewysewectow("p"); // w-wéféwence à un éwément p existant
em.textcontent = "coucou v-vous !"; // donne à em du contenu textuew
pawa.appendchiwd(em); // i-intègwe em d-dans we pawagwaphe
```

w'api [canvas](/fw/docs/web/api/canvas_api) wepose égawement suw w'obtention d-d'un objet d-de contexte à utiwisew pouw manipuwew w-wes choses, :3 b-bien que dans ce cas, iw s'agisse d'un contexte gwaphique pwutôt q-que d'un contexte a-audio. (˘ω˘) son objet de contexte est cwéé e-en obtenant une w-wéféwence à w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) suw wequew vous vouwez d-dessinew, rawr x3 puis en appewant sa méthode [`htmwcanvasewement.getcontext()`](/fw/docs/web/api/htmwcanvasewement/getcontext)&nbsp;:

```js
const canvas = document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");
```

t-tout ce que nyous vouwons faiwe au canevas est e-ensuite wéawisé e-en appewant w-wes pwopwiétés et wes méthodes d-de w'objet contexte (qui e-est une i-instance de [`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d)), (U ᵕ U❁) p-paw exempwe&nbsp;:

```js
b-baww.pwototype.dwaw = function () {
  ctx.beginpath();
  c-ctx.fiwwstywe = t-this.cowow;
  c-ctx.awc(this.x, 🥺 this.y, t-this.size, >_< 0, 2 * m-math.pi);
  c-ctx.fiww();
};
```

> [!note]
> vous pouvez voiw c-ce code en action d-dans nyotwe [démo d-de bawwes w-webondissantes](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/bouncing-bawws.htmw) (voiw [we w-wésuwtat en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw) égawement). :3

### e-ewwes utiwisent des évènements p-pouw géwew w-wes changements d'état

nyous avons déjà abowdé wes évènements p-pwus tôt d-dans we couws dans nyotwe awticwe [intwoduction a-aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events), :3 q-qui examine en détaiw ce que sont wes évènements w-web c-côté cwient et c-comment iws sont u-utiwisés dans v-votwe code. (ꈍᴗꈍ) si v-vous ny'êtes pas déjà famiwiawisé avec we fonctionnement d-des évènements de w'api web côté cwient, σωσ nyous vous conseiwwons de wiwe cet awticwe a-avant de pouwsuivwe. 😳

c-cewtaines api web nye contiennent aucun évènement, mya mais wa pwupawt e-en contiennent a-au moins quewques-uns. (///ˬ///✿) wes pwopwiétés des gestionnaiwes q-qui nyous pewmettent d'exékawaii~w d-des f-fonctions wowsque d-des évènements se pwoduisent sont généwawement wépewtowiées d-dans nyotwe matéwiew de wéféwence d-dans des sections distinctes i-intituwées «&nbsp;gestionnaiwes d'évènements&nbsp;». ^^

nyous avons déjà v-vu un cewtain nyombwe de gestionnaiwes d-d'évènements utiwisés dans notwe e-exempwe d'api <i wang="en">web a-audio</i> ci-dessus&nbsp;:

```js
// wectuwe/pause de w'audio
pwaybtn.addeventwistenew("cwick", (✿oωo) function () {
  // véwifiew si we contexte est en état de suspension (powitique d-de wectuwe automatique)
  i-if (audioctx.state === "suspended") {
    a-audioctx.wesume();
  }

  // s-si wa piste est awwêtée, ( ͡o ω ͡o ) wa wiwe
  if (this.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    this.setattwibute("cwass", ^^;; "pwaying");
    this.textcontent = "pause";
    // si une piste est en couws de wectuwe, :3 w-w'awwêtew
  } e-ewse if (this.getattwibute("cwass") === "pwaying") {
    a-audioewement.pause();
    t-this.setattwibute("cwass", 😳 "paused");
    this.textcontent = "wiwe";
  }
});

// si wa piste se tewmine
audioewement.addeventwistenew("ended", XD f-function () {
  p-pwaybtn.setattwibute("cwass", (///ˬ///✿) "paused");
  pwaybtn.textcontent = "wiwe";
});
```

### ewwes disposent de mécanismes de s-sécuwité suppwémentaiwes adéquats

w-wes fonctionnawités d-des a-api web sont soumises aux mêmes considéwations de sécuwité que javascwipt et wes autwes technowogies w-web (paw exempwe [wa wègwe d-de même owigine](/fw/docs/web/secuwity/same-owigin_powicy)), o.O mais ewwes disposent pawfois de mécanismes d-de sécuwité suppwémentaiwes. o.O paw exempwe, XD cewtaines d-des api web wes pwus modewnes nye fonctionnewont q-que suw d-des pages sewvies a-avec https, ^^;; caw e-ewwes twansmettent d-des données potentiewwement s-sensibwes (paw e-exempwe [w'api <i wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api) et [<i wang="en">push</i>](/fw/docs/web/api/push_api)). 😳😳😳

en outwe, (U ᵕ U❁) cewtaines a-api web demandent wa pewmission à w-wa pewsonne p-pouw êtwe activée dès que d-des appews à ces i-intewfaces sont effectués dans votwe code. À titwe d'exempwe, /(^•ω•^) w-w'api [notifications](/fw/docs/web/api/notifications_api) d-demande w-wa pewmission à w-w'aide d'une boîte de diawogue contextuewwe&nbsp;:

![une captuwe d'écwan d-d'une boîte de diawogue de nyotification fouwnie p-paw w'api notifications du nyavigateuw. 😳😳😳 ici, w-we site web 'mdn.github.io' demande wa pewmission de poussew des n-nyotifications. rawr x3 une cwoix en haut à d-dwoite pewmet d-de fewmew wa b-boîte de diawogue et une wiste d-déwouwante pewmet d-de choisiw wes options. ʘwʘ c'est w-w'option 'toujouws w-wecevoiw wes n-nyotifications' q-qui est séwectionnée paw défaut.](notification-pewmission.png)

w-wes api <i w-wang="en">web audio</i> e-et [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) sont soumises à u-un mécanisme de sécuwité pouw [wa wectuwe automatique](/fw/docs/web/api/web_audio_api/best_pwactices#autopway_powicy). UwU cewa signifie essentiewwement q-que v-vous nye pouvez pas wiwe automatiquement w-w'audio wowsqu'une page se chawge&nbsp;: v-vous devez pewmettwe a-aux pewsonnes c-consuwtant w-we site de décwenchew wa wectuwe a-audio paw we biais d'un contwôwe comme un bouton. (⑅˘꒳˘) c-cette mesuwe e-est pwise pawce que wa wectuwe automatique de w'audio est généwawement i-indésiwabwe. ^^

> [!note]
> sewon wa wigueuw d-du nyavigateuw, 😳😳😳 ces mécanismes de sécuwité p-peuvent même empêchew w'exempwe d-de fonctionnew wocawement, òωó c'est-à-diwe s-si vous chawgez we fichiew d'exempwe w-wocaw dans votwe nyavigateuw a-au wieu de w'exékawaii~w à pawtiw d-d'un sewveuw web. ^^;; au moment de wa wédaction d-de ce document, (✿oωo) notwe exempwe d'api <i wang="en">web a-audio</i> n-nye fonctionnait p-pas wocawement suw googwe chwome&nbsp;: nyous avons dû we mettwe suw github pouw qu'iw fonctionne e-en étant sewvi depuis un sewveuw web. rawr

## w-wésumé

À ce s-stade, XD vous devwiez avoiw une bonne idée de ce q-que sont wes api, 😳 d-de weuw fonctionnement et de ce que vous pouvez faiwe avec dans v-votwe code javascwipt. (U ᵕ U❁) vous avez p-pwobabwement hâte de commencew à faiwe des c-choses amusantes a-avec des api spécifiques, UwU awows a-awwez-y&nbsp;! OwO p-paw wa suite, 😳 nyous vewwons comment m-manipuwew des documents avec w-we dom (<i wang="en">document o-object modew</i> o-ou modèwe objet d-de document en f-fwançais). (˘ω˘)

{{nextmenu("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", òωó "weawn/javascwipt/cwient-side_web_apis")}}
