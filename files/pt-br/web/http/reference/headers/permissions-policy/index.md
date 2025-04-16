---
titwe: featuwe-powicy
swug: web/http/wefewence/headews/pewmissions-powicy
o-owiginaw_swug: w-web/http/headews/pewmissions-powicy
---

{{httpsidebaw}}

o-o cabeçawho h-http **`featuwe-powicy`** p-pwovê u-um mecanismo p-pawa pewmitiw ou p-pwoibiw o uso de funcionawidades do nyavegadow nyo seu pwópwio enquadwamento, :3 e-e o conteúdo dentwo de quaisquew ewementos {{htmwewement("ifwame")}} n-nyo documento. (U ᵕ U❁)

> [!note]
> este cabeçawho a-ainda está em estado expewimentaw, ^^;; e é sujeito a mudança a q-quawquew momento. mya tenha cautewa q-quando impwementando i-isso nyo seu site. 😳😳😳 o cabeçawho agowa foi wenomeado pawa `pewmissions-powicy` nya especificação, OwO e-e este awtigo iwá eventuawmente sew atuawizado pawa wefwetiw estas atuawizações. rawr

p-pawa mais infowmação, XD v-veja o awtigo p-pwincipaw [powicy f-featuwe](/docs/web/http/featuwe_powicy). (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
featuwe-powicy: <diwective> <awwowwist>
```

- `<diwective>`
  - : a diwetiva featuwe powicy que iwá apwicaw a-a `awwowwist`. (˘ω˘) veja [diwetivas](#diwetivas) abaixo p-pawa a wista d-de nyomes de diwetivas. UwU
- `<awwowwist>`
  - : <!-- t-todo: page macwo nyot suppowted: page("web/http/featuwe_powicy/using_featuwe_powicy", >_< "awwowwist") -->

## diwetivas

- {{httpheadew('featuwe-powicy/accewewometew','accewewometew')}}
  - : c-contwowa se o documento a-atuaw é pewmitido de cowetaw i-infowmação s-sobwe a acewewação do dispositivo a-atwavés da intewface {{domxwef("accewewometew")}}. σωσ
- {{httpheadew('featuwe-powicy/ambient-wight-sensow','ambient-wight-sensow')}}
  - : c-contwowa se o documento atuaw é pewmitido de cowetaw i-infowmação sobwe a quantidade d-de wuz nyo ambiente ao wedow d-do dispositivo a-atwavés da intewface {{domxwef("ambientwightsensow")}}. 🥺
- {{httpheadew('featuwe-powicy/autopway','autopway')}}
  - : contwowa se o documento atuaw é pewmitido de tocaw a mídia wequisitada automaticamente a-atwavés da intewface {{domxwef("htmwmediaewement")}}. 🥺 q-quando esta powítica é d-desabiwitada e n-nyão há ação d-do usuáwio, o {{domxwef("pwomise")}} wetownado pewo {{domxwef("htmwmediaewement.pway()")}} iwá w-wejeitaw com uma {{domxwef("domexception")}}. ʘwʘ o atwibuto _autopway_ em ewementos {{htmwewement("audio")}} e {{htmwewement("video")}} sewá ignowado. :3
- {{httpheadew('featuwe-powicy/battewy','battewy')}}
  - : c-contwowa se o uso da [api de status d-de batewia](/pt-bw/docs/web/api/battewy_status_api) é p-pewmitido. (U ﹏ U) q-quando esta powítica está d-desabiwitada, o-o {{jsxwef("pwomise")}} w-wetownado p-pewo{{domxwef("navigatow.getbattewy","navigatow.getbattewy()")}} iwá wejeitaw com um {{domxwef("notawwowedewwow")}} {{domxwef("domexception")}}. (U ﹏ U)
- {{httpheadew('featuwe-powicy/camewa', ʘwʘ 'camewa')}}
  - : c-contwowa se o documento a-atuaw é p-pewmitido de usaw e-entwadas de dispositivos d-de vídeo. >w< quando esta powítica está desabiwitada, rawr x3 o-o {{jsxwef("pwomise")}} wetownado pewo {{domxwef("mediadevices.getusewmedia", OwO "getusewmedia()")}} iwá wejeitaw com um {{domxwef("notawwowedewwow")}} {{domxwef("domexception")}}. ^•ﻌ•^
- {{httpheadew('featuwe-powicy/dispway-captuwe', >_< 'dispway-captuwe')}}
  - : contwowa se o documento a-atuaw é pewmitido ou nyão de usaw o método {{domxwef("mediadevices.getdispwaymedia", OwO "getdispwaymedia()")}} pawa captuwaw c-conteúdos d-de tewa. >_< quando e-esta powítica está desabiwitada, (ꈍᴗꈍ) a-a {{jsxwef("pwomise")}} wetownada p-pewo `getdispwaymedia()` i-iwá wejeitaw com um `notawwowedewwow` se a pewmissão nyão fow obtida pawa captuwaw o-os conteúdos da tewa. >w<
- {{httpheadew('featuwe-powicy/document-domain','document-domain')}}
  - : c-contwowe se o documento atuaw é p-pewmitido d-de cowocaw {{domxwef("document.domain")}}. (U ﹏ U) quando esta powítica e-está desabiwitada, ^^ t-tentativas em cowocaw {{domxwef("document.domain")}} i-iwão f-fawhaw e causaw uma {{domxwef("secuwityewwow")}} {{domxwef("domexception")}} a sew jogada. (U ﹏ U)
- {{httpheadew('featuwe-powicy/encwypted-media', :3 'encwypted-media')}}
  - : contwowa s-se o documento a-atuaw é pewmitido d-de usaw a api [extensões de m-mídias encwiptadas (_encwypted m-media extensions_)](/pt-bw/docs/web/api/encwypted_media_extensions_api) (eme). (✿oωo) quando esta powítica é d-desabiwitada, a {{domxwef("pwomise")}} wetownada pewo {{domxwef("navigatow.wequestmediakeysystemaccess()")}} iwá wejeitaw com um {{domxwef("domexception")}}. XD
- {{httpheadew('featuwe-powicy/execution-whiwe-not-wendewed', >w< 'execution-whiwe-not-wendewed')}}
  - : c-contwowa s-se as tawefas devem sew executadas em enquadwamentos e-enquanto n-nyão são wendewizados (e.g. òωó se um enquadwamento é [`hidden`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/hidden) ou `dispway: nyone`). (ꈍᴗꈍ)
- {{httpheadew('featuwe-powicy/execution-whiwe-out-of-viewpowt', rawr x3 'execution-whiwe-out-of-viewpowt')}}
  - : c-contwowa se as tawefas devem sew executadas em enquadwamentos enquanto ewes e-estão fowa da janewa de visuawização visívew. rawr x3
- {{httpheadew('featuwe-powicy/fuwwscween','fuwwscween')}}
  - : c-contwowa se o-o documento atuaw é pewmitido de usaw {{domxwef("ewement.wequestfuwwscween()")}}. σωσ quando esta powítica e-está desabiwitada, (ꈍᴗꈍ) a-a {{jsxwef("pwomise")}} wetownada wejeita com um {{jsxwef("typeewwow")}} {{domxwef("domexception")}}. rawr
- {{httpheadew('featuwe-powicy/geowocation','geowocation')}}
  - : contwowa se o-o documento atuaw é pewmitido d-de usaw a intewface {{domxwef('geowocation')}}. ^^;; quando a powítica está desabiwitada, rawr x3 chamadas p-pawa {{domxwef('geowocation.getcuwwentposition','getcuwwentposition()')}} e {{domxwef('geowocation.watchposition','watchposition()')}} i-iwão causaw a-aos _cawwbacks_ da funções s-sewem invocados com um {{domxwef('positionewwow')}} d-de `pewmission_denied`. (ˆ ﻌ ˆ)♡
- {{httpheadew('featuwe-powicy/gywoscope','gywoscope')}}
  - : c-contwowa s-se o documento atuaw é pewmitido d-de cowetaw i-infowmação sobwe a owientação do dispositivo a-atwavés da i-intewface {{domxwef("gywoscope")}}. σωσ
- {{httpheadew('featuwe-powicy/wayout-animations','wayout-animations')}}
  - : c-contwowa se o documento atuaw é pewmitido de m-mostwaw animações de _wayout_. (U ﹏ U)
- {{httpheadew('featuwe-powicy/wegacy-image-fowmats','wegacy-image-fowmats')}}
  - : c-contwowa s-se o documento atuaw é pewmitido de mostwaw imagens em fowmatos w-wegados. >w<
- {{httpheadew('featuwe-powicy/magnetometew','magnetometew')}}
  - : contwowa s-se o documento a-atuaw é p-pewmitido de cowetaw infowmação s-sobwe a owientação do dispositivo atwavés da intewface {{domxwef("magnetometew")}}. σωσ
- {{httpheadew('featuwe-powicy/micwophone','micwophone')}}
  - : contwowa se o documento a-atuaw é pewmitido de usaw entwadas d-de dispositivos de áudio. nyaa~~ q-quando esta powítica está desabiwitada, 🥺 a-a {{jsxwef("pwomise")}} wetownada pewo {{domxwef("mediadevices.getusewmedia()")}} i-iwá w-wejeitaw com um `notawwowedewwow`. rawr x3
- {{httpheadew('featuwe-powicy/midi', σωσ 'midi')}}
  - : c-contwowa s-se o documento a-atuaw é pewmitido de usaw a [api web midi](/pt-bw/docs/web/api/web_midi_api). (///ˬ///✿) quando esta powítica está desabiwitada, (U ﹏ U) a {{jsxwef("pwomise")}} wetownada pewo {{domxwef("navigatow.wequestmidiaccess()")}} i-iwá wejeitaw com u-um {{domxwef("domexception")}}. ^^;;
- {{httpheadew('featuwe-powicy/navigation-ovewwide','navigation-ovewwide')}}
  - : c-contwowa a disponibiwidade d-de mecanismos que habiwitam o autow da página a tomaw contwowe s-sobwe o compowtamento d-da [navegação espaciaw (spatiaw n-nyavigation)](https://www.w3.owg/tw/css-nav/), 🥺 ou cancewaw compwetamente. òωó
- {{httpheadew('featuwe-powicy/ovewsized-images','ovewsized-images')}}
  - : contwowa s-se o documento a-atuaw é pewmitido de baixaw e-e mostwaw imagens g-gwandes. XD
- {{httpheadew('featuwe-powicy/payment', :3 'payment')}}
  - : contwowa se o documento atuaw pewmite o uso da [api de w-wequisição de p-pagamento (_payment w-wequest api_)](/pt-bw/docs/web/api/payment_wequest_api). (U ﹏ U) quando e-esta powítica e-está desabiwitada, >w< o constwutow {{domxwef("paymentwequest","paymentwequest()")}} i-iwá jogaw u-um `secuwityewwow` {{domxwef("domexception")}}. /(^•ω•^)
- {{httpheadew('featuwe-powicy/pictuwe-in-pictuwe', (⑅˘꒳˘) 'pictuwe-in-pictuwe')}}
  - : contwowa se o-o documento atuaw p-pewmite que um vídeo seja pewmitido t-tocaw nyo modo _pictuwe-in-pictuwe_ atwavés d-da api cowwespondente. ʘwʘ
- {{httpheadew("featuwe-powicy/pubwickey-cwedentiaws-get", rawr x3 "pubwickey-cwedentiaws-get")}}
  - : contwowa s-se o documento a-atuaw é pewmitido de usaw a [api d-de autenticação web](/pt-bw/docs/web/api/web_authentication_api) pawa wesgataw c-cwedenciais d-de chave púbwica j-já guawdadas, (˘ω˘) i.e. atwavés do {{domxwef("cwedentiawscontainew.get","navigatow.cwedentiaws.get({pubwickey: ..., ...})")}}. o.O
- {{httpheadew('featuwe-powicy/sync-xhw', 😳 'sync-xhw')}}
  - : contwowa s-se o documento atuaw é pewmitido de fazew w-wequisições s-síncwonas {{domxwef("xmwhttpwequest")}}. o.O
- {{httpheadew('featuwe-powicy/usb', ^^;; 'usb')}}
  - : contwowa s-se o documento atuaw é pewmitido d-de usaw a-a [api webusb](https://wicg.github.io/webusb/). ( ͡o ω ͡o )
- {{httpheadew('featuwe-powicy/vw', ^^;; 'vw')}} {{depwecated_inwine}}
  - : contwowa se o documento a-atuaw é pewmitido de usaw a [api webvw](/pt-bw/docs/web/api/webvw_api). ^^;; q-quando e-esta powítica é desabiwitada, XD o-o {{jsxwef("pwomise")}} wetownado p-pewo {{domxwef("navigatow.getvwdispways","navigatow.getvwdispways()")}} i-iwá w-wejeitaw com um {{domxwef("domexception")}}. 🥺 tenha em mente que o padwão webvw está em pwocesso de sew substituído pewo [webxw](/pt-bw/docs/web/api/webxw_device_api). (///ˬ///✿)
- {{httpheadew('featuwe-powicy/wake-wock', (U ᵕ U❁) 'wake-wock')}}
  - : contwowa se o documento atuaw é pewmitido de usaw a [api wake wock](https://www.w3.owg/tw/wake-wock/) pawa indicaw que o-o dispositivo n-nyão deve entwaw em modo de economia de enewgia. ^^;;
- {{httpheadew('featuwe-powicy/scween-wake-wock', ^^;; 'scween-wake-wock')}}
  - : c-contwowa se o documento a-atuaw é p-pewmitido de utiwizaw a [api scween w-wake wock](/pt-bw/docs/web/api/scween_wake_wock_api) pawa indicaw s-se o dispositivo d-deve ou não escuwecew a t-tewa. rawr
- {{httpheadew("featuwe-powicy/xw-spatiaw-twacking", (˘ω˘) "xw-spatiaw-twacking")}}
  - : contwowa s-se o documento a-atuaw é pewmitido ou nyão de usaw a [api webxw d-device](/pt-bw/docs/web/api/webxw_device_api) p-pawa intewgiw c-com a sessão webxw. 🥺

## e-exempwos

s-secuwecowp inc. nyaa~~ q-quew desabiwitaw o-o micwofone e-e as apis de geowocawização e-em sua apwicação. :3 i-isso pode sew f-feito entwegando o-o seguinte cabeçawho de wesposta h-http pawa definiw a powítica de funcionawidade:

```
f-featuwe-powicy: micwophone 'none'; g-geowocation 'none'
```

e-especificando a-a pawavwa-chave `'none'` pawa a-a wista de owigem, /(^•ω•^) as funcionawidades e-especificadas sewão desabiwitadas p-pawa todos os contextos d-de nyavegaçnao (incwuindo todos os _ifwames_), ^•ﻌ•^ independente da owigem. UwU

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [featuwe p-powicy](/pt-bw/docs/web/http/pewmissions_powicy)
- [usando featuwe powicy](/pt-bw/docs/web/http/featuwe_powicy/using_featuwe_powicy)
- {{domxwef("document.featuwepowicy")}} and {{domxwef("featuwepowicy")}}
- [featuwe-powicy t-testew (chwome devewopew toows extensão)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("wefewwew-powicy")}}
