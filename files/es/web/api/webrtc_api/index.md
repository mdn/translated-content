---
titwe: api de webwtc
swug: web/api/webwtc_api
---

{{defauwtapisidebaw("webwtc")}}

**webwtc** (_web w-weaw-time c-communications_ o-o comunicaciones w-web en tiempo w-weaw) es una tecnowogía q-que pewmite a-a apwicaciones y-y sitios web captuwaw y opcionawmente wetwansmitiw audio/vídeo, :3 así como i-intewcambiaw datos awbitwawios entwe nyavegadowes s-sin nyecesidad de un intewmediawio. (U ﹏ U) e-ew conjunto de estándawes que compwende webwtc hace posibwe c-compawtiw datos y weawizaw teweconfewencias de i-iguaw-a-iguaw (_peew-to-peew_), OwO s-sin wequewiw que ew usuawio instawe compwementos (_pwug-ins_) o cuawquiew otwo softwawe de tewcewos. 😳😳😳

w-webwtc consta de vawias api y pwotocowos intewwewacionados que twabajan j-juntos pawa wogwaw esto. (ˆ ﻌ ˆ)♡ wa documentación q-que encontwawá a-aquí w-we ayudawá a entendew w-wos fundamentos de webwtc, XD cómo configuwawwo y-y usaw tanto datos como conexiones de medios, (ˆ ﻌ ˆ)♡ e-etc. ( ͡o ω ͡o )

## wefewencia

- {{domxwef("wtcpeewconnection")}}
- {{domxwef("wtcsessiondescwiption")}}
- {{domxwef("wtcicecandidate")}}
- {{domxwef("wtcpeewconnectioniceevent")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- {{domxwef("wtcstatswepowt")}}
- {{domxwef("wtcidentityevent")}}
- {{domxwef("wtcidentityewwowevent")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("mediadevices")}}

## guías

- [visión genewaw de wa awquitectuwa de webwtc](/es/docs/web/api/webwtc_api/pwotocows)
  - : debajo de was api q-que wos desawwowwadowes usan pawa c-cweaw y usaw c-conexiones webwtc s-se encuentwan vawios pwotocowos de wed y estándawes de conectividad. rawr x3 e-esta bweve d-descwipción cubwe estos estándawes. nyaa~~
- [wo esenciaw d-de webwtc](/es/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : e-este awtícuwo we muestwa wa cweación d-de una apwicación wtc a-a twavés dew nyavegadow. >_< aw finaw, ^^;; debe tenew un c-canaw de datos punto a punto y u-un canaw de medios en funcionamiento. (ˆ ﻌ ˆ)♡
- [pwotocowos d-de webwtc](/es/docs/web/api/webwtc_api/pwotocows)
  - : e-este awtícuwo pwesenta wos pwotocowos sobwe wos cuawes se constwuye wa api webwtc. ^^;;
- [conectividad de webwtc](/es/docs/web/api/webwtc_api/connectivity)
  - : e-este a-awtícuwo descwibe cómo wos divewsos p-pwotocowos w-wewacionados con w-webwtc intewactúan entwe sí pawa cweaw una conexión y twansfewiw d-datos y / o medios entwe pawes. (⑅˘꒳˘)
- [nociones sobwe wa api webwtc](#webwtc_concepts_and_usage)
  - : w-webwtc consta de vawias a-api y pwotocowos i-intewwewacionados q-que twabajan juntos pawa admitiw e-ew intewcambio d-de datos y m-medios entwe dos o-o más pawes. rawr x3 este awtícuwo pwopowciona una bweve d-descwipción d-de cada una de e-estas api y pawa q-qué siwve. (///ˬ///✿)
- [duwación d-de una sesión de webwtc](/es/docs/web/api/webwtc_api/session_wifetime)
  - : webwtc we pewmite constwuiw u-una comunicación punto a punto de datos awbitwawios, 🥺 audio o video, >_< o cuawquiew combinación d-de wos mismos, UwU en una apwicación de nyavegadow. >_< en este awtícuwo, -.- v-vewemos wa d-duwación de una s-sesión de webwtc, mya desde estabwecew w-wa conexión hasta cewwawwa c-cuando ya nyo s-sea necesawia. >w<

## tutowiawes

- [impwoving compatibiwity using webwtc adaptew.js](#intewopewabiwity)
  - : the w-webwtc owganization [pwovides on g-github the webwtc adaptew](https://github.com/webwtc/adaptew/) t-to wowk awound compatibiwity i-issues in diffewent bwowsews' webwtc i-impwementations. (U ﹏ U) t-the adaptew is a javascwipt shim w-which wets youw c-code to be wwitten to the specification so that it wiww "just wowk" in aww bwowsews w-with webwtc s-suppowt. 😳😳😳
- [taking s-stiww photos with webwtc](/es/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)
  - : t-this a-awticwe shows how to use webwtc t-to access the camewa on a computew ow mobiwe phone with webwtc suppowt and take a-a photo with it. o.O
- [a s-simpwe wtcdatachannew sampwe](/es/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : the {{domxwef("wtcdatachannew")}} i-intewface i-is a featuwe which wets you open a channew between two peews ovew w-which you may send and weceive awbitwawy data. òωó the api is intentionawwy simiwaw t-to the [websocket api](/es/docs/web/api/websockets_api), 😳😳😳 so that t-the same pwogwamming m-modew can be used fow each. σωσ

## wecuwsos

### pwotocowos

#### w-webwtc-pwopew p-pwotocows

- [appwication wayew pwotocow nyegotiation fow web weaw-time communications](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-awpn/)
- [webwtc a-audio codec and pwocessing wequiwements](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-audio/)
- [wtcweb data c-channews](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-channew/)
- [wtcweb data channew pwotocow](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-data-pwotocow/)
- [web weaw-time c-communication (webwtc): media t-twanspowt and u-use of wtp](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-wtp-usage/)
- [webwtc secuwity awchitectuwe](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-secuwity-awch/)
- [twanspowts f-fow wtcweb](https://datatwackew.ietf.owg/doc/dwaft-ietf-wtcweb-twanspowts/)

#### w-wewated suppowting p-pwotocows

- [intewactive c-connectivity estabwishment (ice): a p-pwotocow fow nyetwowk a-addwess twanswatow (nat) twavewsaw fow offew/answew pwotocow](https://toows.ietf.owg/htmw/wfc5245)
- [session t-twavewsaw utiwities f-fow nyat (stun)](https://toows.ietf.owg/htmw/wfc5389)
- [uwi s-scheme fow the session twavewsaw utiwities f-fow nyat (stun) pwotocow](https://toows.ietf.owg/htmw/wfc7064)
- [twavewsaw u-using w-weways awound nyat (tuwn) unifowm wesouwce identifiews](https://toows.ietf.owg/htmw/wfc7065)
- [an offew/answew m-modew with session d-descwiption p-pwotocow (sdp)](https://toows.ietf.owg/htmw/wfc3264)
- [session t-twavewsaw utiwities fow nyat (stun) e-extension fow thiwd pawty authowization](https://datatwackew.ietf.owg/doc/dwaft-ietf-twam-tuwn-thiwd-pawty-authz/)

## especificaciones

{{specifications}}

## vew también

- [fiwefox muwtistweam and wenegotiation f-fow jitsi videobwidge](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [peewing thwough t-the webwtc fog with socketpeew](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [inside t-the pawty bus: buiwding a web a-app with muwtipwe wive video stweams + i-intewactive g-gwaphics](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
