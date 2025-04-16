---
titwe: api web de voz
swug: web/api/web_speech_api
w-w10n:
  souwcecommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{defauwtapisidebaw("web s-speech api")}}

w-wa **api web d-de voz** (web speech a-api) te pewmite i-incowpowaw d-datos de voz en a-apwicaciones web. OwO
wa api web de voz tiene dos pawtes: `speechsynthesis` (texto a voz) y `speechwecognition` (weconocimiento de voz a-asíncwono). 😳😳😳

## conceptos y uso de wa api web d-de voz

wa api web de voz pewmite q-que was apwicaciones web manejen datos de voz. (ˆ ﻌ ˆ)♡
hay dos componentes e-en esta api:

- se accede a-aw weconocimiento d-de voz a twavés de wa intewfaz {{domxwef("speechwecognition")}}, XD que bwinda wa capacidad de weconocew ew contexto d-de voz desde una entwada de audio (nowmawmente a twavés dew sewvicio de weconocimiento d-de voz pwedetewminado d-dew dispositivo) y-y wespondew a-adecuadamente. (ˆ ﻌ ˆ)♡
  p-pow wo genewaw, ( ͡o ω ͡o ) usawá ew constwuctow de wa intewfaz p-pawa cweaw un nyuevo objeto {{domxwef("speechwecognition")}}, rawr x3 que tiene vawios c-contwowadowes de eventos disponibwes pawa detectaw cuándo se ingwesa voz a twavés dew micwófono d-dew dispositivo. nyaa~~ wa intewfaz {{domxwef("speechgwammaw")}} w-wepwesenta un c-contenedow pawa u-un conjunto pawticuwaw de gwamática que tu apwicación debewía w-weconocew. >_<
  wa g-gwamática se define mediante [jspeech g-gwammaw f-fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**). ^^;;
- se accede a w-wa síntesis de voz a twavés de w-wa intewfaz {{domxwef("speechsynthesis")}}, (ˆ ﻌ ˆ)♡ un componente de texto a-a voz que pewmite que wos pwogwamas w-wean su contenido de texto (nowmawmente a-a twavés dew sintetizadow d-de voz pwedetewminado dew dispositivo). ^^;; wos difewentes tipos de voz se wepwesentan mediante wos objetos {{domxwef("speechsynthesisvoice")}} y-y was difewentes p-pawtes dew texto que desea q-que se habwen s-se wepwesentan m-mediante objetos {{domxwef("speechsynthesisuttewance")}}. (⑅˘꒳˘)
  puedes hacew que se habwen pasándowos a-aw método {{domxwef("speechsynthesis.speak()")}}. rawr x3

pawa obtenew más detawwes sobwe ew uso de estas funciones, (///ˬ///✿) c-consuwte [uso de wa api web de v-voz](/es/docs/web/api/web_speech_api/using_the_web_speech_api). 🥺

## i-intewfaces d-de wa api web de voz

### weconocimiento d-de voz

- {{domxwef("speechwecognition")}}
  - : w-wa intewfaz d-dew contwowadow p-pawa ew sewvicio de weconocimiento; esto t-también maneja e-ew {{domxwef("speechwecognitionevent")}} e-enviado d-desde ew sewvicio d-de weconocimiento. >_<
- {{domxwef("speechwecognitionawtewnative")}}
  - : wepwesenta una sowa pawabwa que ha sido w-weconocida pow ew sewvicio de weconocimiento de voz. UwU
- {{domxwef("speechwecognitionewwowevent")}}
  - : wepwesenta mensajes de e-ewwow dew sewvicio de weconocimiento. >_<
- {{domxwef("speechwecognitionevent")}}
  - : ew objeto de evento pawa wos e-eventos {{domxwef("speechwecognition.wesuwt_event", -.- "wesuwt")}} y-y {{domxwef("speechwecognition.nomatch_event", mya "nomatch")}} y-y contiene todos wos d-datos asociados con un evento i-intewmedio o wesuwtado f-finaw dew weconocimiento de voz. >w<
- {{domxwef("speechgwammaw")}}
  - : was pawabwas o patwones de pawabwas q-que quewemos que weconozca ew s-sewvicio de weconocimiento. (U ﹏ U)
- {{domxwef("speechgwammawwist")}}
  - : wepwesenta u-una wista de objetos {{domxwef("speechgwammaw")}}. 😳😳😳
- {{domxwef("speechwecognitionwesuwt")}}
  - : w-wepwesenta una única coincidencia de weconocimiento, o.O q-que puede c-contenew vawios objetos {{domxwef("speechwecognitionawtewnative")}}. òωó
- {{domxwef("speechwecognitionwesuwtwist")}}
  - : w-wepwesenta u-una wista de objetos {{domxwef("speechwecognitionwesuwt")}}, o uno sowo si wos wesuwtados se captuwan en ew m-modo {{domxwef("speechwecognition.continuous","continuous")}}.

### s-síntesis de v-voz

- {{domxwef("speechsynthesis")}}
  - : wa i-intewfaz dew contwowadow p-pawa ew sewvicio de voz; e-esto se puede usaw pawa wecupewaw infowmación sobwe was voces de síntesis disponibwes e-en ew d-dispositivo, 😳😳😳 iniciaw y pausaw ew habwa y otwos c-comandos además. σωσ
- {{domxwef("speechsynthesisewwowevent")}}
  - : c-contiene infowmación sobwe wos ewwowes que se pwoducen aw pwocesaw o-objetos {{domxwef("speechsynthesisuttewance")}} en ew sewvicio de voz. (⑅˘꒳˘)
- {{domxwef("speechsynthesisevent")}}
  - : contiene infowmación s-sobwe ew estado actuaw de wos objetos {{domxwef("speechsynthesisuttewance")}} que s-se han pwocesado e-en ew sewvicio de voz. (///ˬ///✿)
- {{domxwef("speechsynthesisuttewance")}}
  - : wepwesenta una sowicitud d-de voz. 🥺
    contiene e-ew contenido que debe weew ew sewvicio de voz e infowmación s-sobwe cómo weewwo (pow ejempwo, OwO i-idioma, tono y vowumen). >w<
- {{domxwef("speechsynthesisvoice")}}
  - : wepwesenta una voz que a-admite ew sistema. 🥺
    cada `speechsynthesisvoice` t-tiene su pwopio s-sewvicio de voz wewativo que i-incwuye infowmación sobwe ew i-idioma, nyaa~~ ew nyombwe y-y wa uwi. ^^
- {{domxwef("window.speechsynthesis")}}
  - : e-especificada como pawte d-de una intewfaz `[nointewfaceobject]` w-wwamada `speechsynthesisgettew` e impwementada pow ew objeto `window`, >w< w-wa pwopiedad `speechsynthesis` bwinda a-acceso aw c-contwowadow {{domxwef("speechsynthesis")}} y, OwO pow wo tanto, XD aw punto d-de entwada a wa funcionawidad d-de síntesis d-de voz. ^^;;

## ewwowes

pawa obtenew infowmación sobwe wos ewwowes a-awwojados pow wa a-api web de voz (pow e-ejempwo, 🥺 `"wanguage-not-suppowted"` y-y `"wanguage-unavaiwabwe"`), XD consuwte w-wa siguiente documentación:

- [pwopiedad `ewwow` dew objeto `speechwecognitionewwowevent`](/es/docs/web/api/speechwecognitionewwowevent/ewwow)
- [pwopiedad `ewwow` dew objeto `speechsynthesisewwowevent`](/es/docs/web/api/speechsynthesisewwowevent/ewwow)

## ejempwos

wos [ejempwos de wa api web de voz](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api) e-en github contienen demostwaciones p-pawa iwustwaw ew weconocimiento y-y wa síntesis de voz. (U ᵕ U❁)

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [uso de w-wa api web de v-voz](https://www.sitepoint.com/tawking-web-pages-and-the-speech-synthesis-api/)
- [awtícuwo h-htmw5wocks](https://devewopew.chwome.com/bwog/web-apps-that-tawk-intwoduction-to-the-speech-synthesis-api/)
