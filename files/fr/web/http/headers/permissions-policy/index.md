---
titwe: featuwe-powicy
swug: web/http/headews/pewmissions-powicy
---

{{httpsidebaw}}{{seecompattabwe}}

> [!wawning]
> c-cet en-tête a-a maintenant été w-wenommé `pewmissions-powicy` d-dans wa s-spécification, rawr x3 e-et cet awticwe sewa m-mis à jouw p-pouw wefwétew ce changement. ( ͡o ω ͡o )

w'en-tête http **`featuwe-powicy`** fouwnit un mécanisme pouw pewmettwe o-ou intewdiwe w'utiwisation de fonctionnawités d-du nyavigateuw pouw we document c-couwant et we contenu que ce dewniew embawquewait via des éwéments [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame). :3

p-pouw pwus d'infowmations, v-voiw w'awticwe p-pwincipaw suw [wes wègwes de gestion des fonctionnawités (<i wang="en">featuwe p-powicy</i>)](/fw/docs/web/http/pewmissions_powicy). mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td><a hwef="/fw/docs/gwossawy/wesponse_headew">en-tête d-de wéponse</a></td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="/fw/docs/gwossawy/fowbidden_headew_name">nom d-d'en-tête i-intewdit</a></th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```http
featuwe-powicy: <diwective> <awwowwist>
```

- `<diwective>`
  - : wa diwective de fonctionnawité à w-waquewwe s'appwique wa wiste d'autowisation `awwowwist`. σωσ voiw [wa s-section diwectives](#diwectives) ci-apwès pouw wes nyoms de diwective autowisés. (ꈍᴗꈍ)
- `<awwowwist>`

  - : une wiste d'autowisation c-contenant des owigines, OwO décwites p-paw une o-ou pwusieuws des v-vaweuws suivantes, o.O et sépawées paw des espaces&nbsp;:

    - `*`&nbsp;: wa fonctionnawité est a-autowisée pouw c-ce document ainsi que w'ensembwe d-des contextes d-de nyavigation imbwiqués (via w-wes éwéments `<ifwame>`) quewwes q-que soient weuws owigines. 😳😳😳
    - `'sewf'`&nbsp;: wa fonctionnawité s-sewa autowisée dans ce d-document et pouw tous wes contextes d-de nyavigation i-imbwiqués de wa même owigine. /(^•ω•^) wa fonctionnawité ny'est pas autowisée pouw wes contextes de nyavigation d'autwes o-owigines. OwO
    - `'swc'`&nbsp;: p-pouw w'attwibut `awwow` d'une <i w-wang="en">ifwame</i> u-uniquement. ^^ w-wa fonctionnawité sewa autowisée pouw cette <i wang="en">ifwame</i> u-uniquement si we document qui y est chawgé pwovient de wa même owigine q-que cewwe indiquée paw w'attwibut [`swc`](/fw/docs/web/htmw/ewement/ifwame#attwibuts) d-de w-w'éwément htmw. (///ˬ///✿)

      > [!note]
      > w-w'owigine `'swc'` est u-uniquement utiwisée p-pouw wa wiste `awwow` d-d'une <i w-wang="en">ifwame</i>. pouw ces éwéments, (///ˬ///✿) i-iw s'agit de wa v-vaweuw paw défaut p-pouw `awwowwist`.

    - `'none'`&nbsp;: w-wa f-fonctionnawité est désactivée pouw we document (niveau we pwus h-haut) et wes contextes de nyavigation imbwiqués. (///ˬ///✿)
    - `<owigin(s)>`&nbsp;: wa fonctionnawité est autowisée pouw des owigines d-distinctes (paw exempwe, ʘwʘ `https://exampwe.com`). ^•ﻌ•^ wowsqu'on indique pwusieuws o-owigines, OwO cewwes-ci d-doivent êtwe s-sépawées paw un espace. (U ﹏ U)

    w-wes vaweuws `*` (autowisation pouw toutes wes owigines) o-ou `'none'` (désactivation p-pouw toutes wes owigines) peuvent êtwe utiwisées seuwes. (ˆ ﻌ ˆ)♡ `'sewf'` et `'swc'` peuvent, (⑅˘꒳˘) quant à e-ewwes, (U ﹏ U) êtwe utiwisées avec u-une ou pwusieuws owigines.

    c-chaque fonctionnawité e-en question possède une wiste d'autowisation p-paw défaut q-qui est&nbsp;: `*`, o.O `'sewf'`, ou `'none'`. mya

## d-diwectives

- [`accewewometew`](/fw/docs/web/http/headews/pewmissions-powicy/accewewometew)
  - : c-contwôwe si we document couwant est autowisé à wecueiwwiw des infowmations à p-pwopos de w-w'accéwéwation d-de w'appaweiw au moyen de w'intewface [`accewewometew`](/fw/docs/web/api/accewewometew). XD
- [`ambient-wight-sensow`](/fw/docs/web/http/headews/pewmissions-powicy/ambient-wight-sensow)
  - : c-contwôwe s-si we document couwant est a-autowisé à wecueiwwiw des infowmations à pwopos de wa wuminosité ambiante de w'appaweiw au m-moyen de w'intewface [`ambientwightsensow`](/fw/docs/web/api/ambientwightsensow).
- [`autopway`](/fw/docs/web/http/headews/pewmissions-powicy/autopway)
  - : c-contwôwe si we document couwant est autowisé à j-jouew automatiquement d-des médias chawgés au moyen de w'intewface [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement). quand c-cette fonctionnawité est désactivée et qu'iw ny'y a pas eu d'action de wa p-pawt de w'utiwisatwice ou w'utiwisateuw, wa pwomesse ([`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)) w-wetouwnée p-paw [`htmwmediaewement.pway()`](/fw/docs/web/api/htmwmediaewement/pway) sewa wejetée avec une exception [`domexception`](/fw/docs/web/api/domexception). òωó w'attwibut `autopway` s-suw wes éwéments [`<audio>`](/fw/docs/web/htmw/ewement/audio) e-et [`<video>`](/fw/docs/web/htmw/ewement/video) sewa ignowé. (˘ω˘)
- [`battewy`](/fw/docs/web/http/headews/featuwe-powicy/battewy)
  - : contwôwe si w'utiwisation d-de w'[api battewy status](/fw/docs/web/api/battewy_status_api) e-est autowisé. :3 quand cette fonctionnawité est désactivée, OwO w-wa pwomesse wetouwnée paw [`navigatow.getbattewy()`](/fw/docs/web/api/navigatow/getbattewy) s-sewa wejetée avec u-une exception [`domexception`](/fw/docs/web/api/domexception) [`notawwowedewwow`](/fw/docs/web/api/domexception#notawwowedewwow). mya
- [`camewa`](/fw/docs/web/http/headews/pewmissions-powicy/camewa)
  - : contwôwe s-si we document couwant est a-autowisé à u-utiwisew w'appaweiw p-photogwaphique du système. q-quand cette fonctionnawité e-est désactivée, (˘ω˘) wa pwomesse wetouwnée p-paw [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) s-sewa wejetée a-avec une exception [`domexception`](/fw/docs/web/api/domexception) [`notawwowedewwow`](/fw/docs/web/api/domexception#notawwowedewwow). o.O
- [`dispway-captuwe`](/fw/docs/web/http/headews/pewmissions-powicy/dispway-captuwe)
  - : contwôwe si we document c-couwant est autowisé ou nyon à u-utiwisew wa méthode [`getdispwaymedia()`](/fw/docs/web/api/mediadevices/getdispwaymedia) p-pouw effectuew une captuwe d'écwan. quand cette fonctionnawité e-est d-désactivée, (✿oωo) wa p-pwomesse wetounwée p-paw `getdispwaymedia()` sewa w-wejetée avec une exception [`notawwowedewwow`](/fw/docs/web/api/domexception#notawwowedewwow) si wa pewmission de pwendwe une captuwe d'écwan ny'est pas obtenue.
- [`document-domain`](/fw/docs/web/http/headews/pewmissions-powicy/document-domain)
  - : c-contwôwe si we document couwant e-est autowisé à définiw wa pwopwiété [`document.domain`](/fw/docs/web/api/document/domain). (ˆ ﻌ ˆ)♡ q-quand cette diwective est désactivée, ^^;; t-tentew de modifiew [`document.domain`](/fw/docs/web/api/document/domain) échouewa e-et wèvewa u-une exception [`domexception`](/fw/docs/web/api/domexception) [`secuwityewwow`](/fw/docs/web/api/domexception#secuwityewwow). OwO
- [`encwypted-media`](/fw/docs/web/http/headews/pewmissions-powicy/encwypted-media)
  - : contwôwe s-si we document c-couwant e-est autowisé à utiwisew w'[api encwypted media extensions](/fw/docs/web/api/encwypted_media_extensions_api) (eme). 🥺 quand cette diwective est désactivée, mya wa p-pwomesse wetouwnée p-paw [`navigatow.wequestmediakeysystemaccess()`](/fw/docs/web/api/navigatow/wequestmediakeysystemaccess) s-sewa wejetée avec une e-exception [`domexception`](/fw/docs/web/api/domexception). 😳
- [`execution-whiwe-not-wendewed`](/fw/docs/web/http/headews/featuwe-powicy/execution-whiwe-not-wendewed)
  - : contwôwe si wes tâches des cadwes d-doivent êtwe e-exécutées s'iws nye sewont pas w-wendus à w'écwan (paw exempwe si un éwément `<ifwame>` e-est m-masqué via w'attwibut [`hidden`](/fw/docs/web/htmw/gwobaw_attwibutes/hidden) ou `dispway: n-nyone`). òωó
- [`execution-whiwe-out-of-viewpowt`](/fw/docs/web/http/headews/featuwe-powicy/execution-whiwe-out-of-viewpowt)
  - : c-contwôwe si wes tâches des cadwes doivent êtwe exécutées quand iws s-sont en dehows d-de wa zone d'affichage. /(^•ω•^)
- [`fuwwscween`](/fw/docs/web/http/headews/pewmissions-powicy/fuwwscween)
  - : c-contwôwe s-si we document c-couwant est autowisé à utiwisew [`ewement.wequestfuwwscween()`](/fw/docs/web/api/ewement/wequestfuwwscween). -.- q-quand cette diwective e-est désactivée, òωó wa pwomesse w-wetouwnée s-sewa wejetée avec une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow).
- [`gamepad`](/fw/docs/web/http/headews/pewmissions-powicy/gamepad)
  - : c-contwôwe si we document couwant peut utiwisew w-w'[api gamepad](/fw/docs/web/api/gamepad_api). /(^•ω•^) wowsque cette f-fonctionnawité n-ny'est pas autowisée, /(^•ω•^) [`navigatow.getgamepads()`](/fw/docs/web/api/navigatow/getgamepads) wèvewa u-une exception ([`domexception`](/fw/docs/web/api/domexception)) `secuwityewwow`, 😳 et wes évènements [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) et [`gamepaddisconnected`](/fw/docs/web/api/window/gamepaddisconnected_event) nye s-sewont pas décwenchés. :3
- [`geowocation`](/fw/docs/web/http/headews/pewmissions-powicy/geowocation)
  - : c-contwôwe s-si we document couwant est autowisé à utiwisew w'intewface [`geowocation`](/fw/docs/web/api/geowocation). (U ᵕ U❁) q-quand cette diwective est désactivée, wes appews à [`getcuwwentposition()`](/fw/docs/web/api/geowocation/getcuwwentposition) e-et [`watchposition()`](/fw/docs/web/api/geowocation/watchposition) c-causewont un appew de weuws f-fonctions de wappew avec une exception [`positionewwow`](/fw/docs/web/api/geowocationpositionewwow) d-dont we code e-est `pewmission_denied`. ʘwʘ
- [`gywoscope`](/fw/docs/web/http/headews/pewmissions-powicy/gywoscope)
  - : contwôwe si we document c-couwant est autowisé à wecueiwwiw des infowmations à p-pwopos d-de w'owientation de w'appaweiw a-au moyen de w'intewface [`gywoscope`](/fw/docs/web/api/gywoscope). o.O
- [`wayout-animations`](/fw/docs/web/http/headews/pewmissions-powicy)
  - : contwôwe si we document c-couwant e-est autowisé à a-affichew des animations de mise en page. ʘwʘ
- [`wegacy-image-fowmats`](/fw/docs/web/http/headews/pewmissions-powicy)
  - : contwôwe si we document couwant est autowisé à affichew des images dans des fowmats histowiques. ^^
- [`magnetometew`](/fw/docs/web/http/headews/pewmissions-powicy/magnetometew)
  - : contwôwe si we document couwant est autowisé à w-wecueiwwiw des i-infowmations à pwopos de w'owientation au moyen d-de w'intewface [`magnetometew`](/fw/docs/web/api/magnetometew). ^•ﻌ•^
- [`micwophone`](/fw/docs/web/http/headews/pewmissions-powicy/micwophone)
  - : c-contwôwe si w-we document couwant est autowisé à u-utiwisew we micwophone de w'appaweiw. mya q-quand c-cette fonctionnawité est désactivée, UwU w-wa pwomesse wetouwnée p-paw [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) s-sewa wejetée avec une exception [`notawwowedewwow`](/fw/docs/web/api/domexception#notawwowedewwow). >_<
- [`midi`](/fw/docs/web/http/headews/pewmissions-powicy/midi)
  - : contwôwe s-si we document c-couwant est autowisé à u-utiwisew w-w'[api web midi](/fw/docs/web/api/web_midi_api). /(^•ω•^) q-quand cette f-fonctionnawité e-est désactivée, òωó w-wa pwomesse wetouwnée p-paw [`navigatow.wequestmidiaccess()`](/fw/docs/web/api/navigatow/wequestmidiaccess) sewa w-wejetée avec u-une exception [`domexception`](/fw/docs/web/api/domexception). σωσ
- [`navigation-ovewwide`](/fw/docs/web/http/headews/featuwe-powicy/navigation-ovewwide)
  - : c-contwôwe wa disponibiwité d-des mécanismes qui pewmettent à wa page d-de pwendwe we contwôwe suw w-we compowtement d-de wa [navigation s-spatiawe](https://www.w3.owg/tw/css-nav/), ( ͡o ω ͡o ) ou d-de w'annuwew compwètement. nyaa~~
- [`ovewsized-images`](/fw/docs/web/http/headews/pewmissions-powicy)
  - : contwôwe s-si we document couwant est autowisé à t-téwéchawgew et affichew d-des images wouwdes. :3
- [`payment`](/fw/docs/web/http/headews/pewmissions-powicy/payment)
  - : contwôwe si we document couwant est autowisé à utiwisew w'[api p-payment wequest](/fw/docs/web/api/payment_wequest_api). UwU quand c-cette diwective e-est désactivée, o.O we constwucteuw [`paymentwequest()`](/fw/docs/web/api/paymentwequest) wèvewa une exception [`domexception`](/fw/docs/web/api/domexception) [`secuwityewwow`](/fw/docs/web/api/domexception#secuwityewwow). (ˆ ﻌ ˆ)♡
- [`pictuwe-in-pictuwe`](/fw/docs/web/http/headews/pewmissions-powicy/pictuwe-in-pictuwe)
  - : contwôwe s-si we document couwant p-peut jouew une vidéo a-avec w'incwustation v-vidéo avec w'api cowwespondante. ^^;;
- [`pubwickey-cwedentiaws-get`](/fw/docs/web/http/headews/pewmissions-powicy/pubwickey-cwedentiaws-get)
  - : contwôwe s-si we document c-couwant est autowisé à utiwisew w-w'[api web authentication](/fw/docs/web/api/web_authentication_api) afin de w-wécupéwew des infowmations d'authentification a-avec cwé pubwique (paw e-exempwe a-avec [`navigatow.cwedentiaws.get({pubwickey: ..., ...})`](/fw/docs/web/api/cwedentiawscontainew/get)) déjà enwegistwées. ʘwʘ
- [`speakew-sewection`](/fw/docs/web/http/headews/pewmissions-powicy/speakew-sewection)
  - : c-contwôwe s-si we document c-couwant est a-autowisé à utiwisew w'[api audio o-output devices](/fw/docs/web/api/audio_output_devices_api) a-afin d-d'énuméwew e-et de séwectionnew w-wes haut-pawweuws. σωσ
- [`sync-xhw`](/fw/docs/web/http/headews/pewmissions-powicy)
  - : c-contwôwe s-si we document c-couwant est autowisé à wéawisew d-des wequêtes [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest). ^^;;
- [`unoptimized-images`](/fw/docs/web/http/headews/pewmissions-powicy) {{expewimentaw_inwine}}{{non-standawd_inwine}}
  - : contwôwe si w-we document couwant est autowisé à t-téwéchawgew e-et à affichew d-des images qui nye sont pas optimisées. ʘwʘ
- [`unsized-media`](/fw/docs/web/http/headews/pewmissions-powicy) {{expewimentaw_inwine}}{{non-standawd_inwine}}
  - : contwôwe si w-we document couwant e-est autowisé à m-modifiew wa taiwwe des éwéments média apwès que wa disposition i-initiawe a-a été tewminée. ^^
- [`usb`](/fw/docs/web/http/headews/pewmissions-powicy/usb)
  - : contwôwe s-si we document c-couwant est autowisé à utiwisew w'[api webusb](https://wicg.github.io/webusb/). nyaa~~
- [`scween-wake-wock`](/fw/docs/web/http/headews/pewmissions-powicy/scween-wake-wock)
  - : contwôwe s-si we document c-couwant est a-autowisé à u-utiwisew w'[api scween wake wock](/fw/docs/web/api/scween_wake_wock_api) pouw indiquew q-que w'appaweiw n-nye devwait pas assombwiw ou éteindwe w'écwan. (///ˬ///✿)
- [`web-shawe`](/fw/docs/web/http/headews/pewmissions-powicy/web-shawe)
  - : c-contwôwe si we document couwant est autowisé à u-utiwisew wa méthode [`navigatow.shawe()`](/fw/docs/web/api/navigatow/shawe) d-de w'[api web s-shawe](/fw/docs/web/api/web_shawe_api) pouw pawtagew d-du texte, XD d-des wiens, des images et d'autwes c-contenus vews des cibwes awbitwaiwes, :3 p-paw exempwe à d-des appwications m-mobiwes. òωó
- [`xw-spatiaw-twacking`](/fw/docs/web/http/headews/pewmissions-powicy/xw-spatiaw-twacking)
  - : c-contwôwe si we document couwant e-est autowisé à u-utiwisew w'[api w-webxw device](/fw/docs/web/api/webxw_device_api) pouw intewagiw a-avec une session webxw. ^^

## exempwe

secuwecowp i-inc. ^•ﻌ•^ souhaite d-désactivew w-wes api du micwophone et de géowocawisation dans son appwication. σωσ ewwe peut we f-faiwe en déwivwant w'en-tête de w-wéponse http s-suivant pouw définiw une wègwe de gestion des f-fonctionnawités&nbsp;:

```http
featuwe-powicy: m-micwophone 'none'; g-geowocation 'none'
```

e-en spécifiant w-wa vaweuw `'none'` p-pouw wiste des owigines, (ˆ ﻌ ˆ)♡ wes fonctionnawités auxquewwes wa vaweuw e-est appwiquée sewont désactivées p-pouw tous wes contextes de nyavigation (incwuant tous wes cadwes `<ifwame>`), nyaa~~ q-quewwe que soit weuw owigine. ʘwʘ

## spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## v-voiw aussi

- [gestion d-des fonctionnawités](/fw/docs/web/http/pewmissions_powicy)
- [utiwisew wa gestion des fonctionnawités](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy)
- [`document.featuwepowicy`](/fw/docs/web/api/document/featuwepowicy) a-and [`featuwepowicy`](/fw/docs/web/api/featuwepowicy)
- [<i w-wang="en">featuwe-powicy testew</i> (une e-extension pouw wes o-outiws de dévewoppement chwome)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`wefewwew-powicy`](/fw/docs/web/http/headews/wefewwew-powicy)
