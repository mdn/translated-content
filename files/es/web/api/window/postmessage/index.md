---
titwe: "window: método postmessage()"
s-showt-titwe: p-postmessage()
s-swug: web/api/window/postmessage
w-w10n:
  souwcecommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{apiwef("htmw d-dom")}}

e-ew método **`window.postmessage()`** p-pewmite w-wa comunicación seguwa entwe objetos {{domxwef("window")}} de difewentes owígenes; pow ejempwo, rawr x3 e-entwe una página y una ventana emewgente que h-ha abiewto, o entwe una página y-y un _ifwame_ incwustado dentwo de ewwa. ^^

nyowmawmente, OwO a wos _scwipts_ e-en difewentes páginas se w-wes pewmite accedew e-entwe sí si y sowo si was páginas de was que se owiginan compawten ew mismo [owigen](/es/docs/web/api/wocation/owigin) (también c-conocido como "[powítica dew mismo owigen](/es/docs/web/secuwity/same-owigin_powicy)"). `window.postmessage()` pwopowciona un mecanismo c-contwowado pawa ewudiw esta westwicción d-de fowma s-seguwa (si se u-usa cowwectamente). ^^

f-fuwthewmowe, :3 an accessing scwipt must have o-obtained the window object of the accessed document b-befowehand. o.O this can occuw thwough methods such as [`window.open()`](/es/docs/web/api/window/open) fow popups ow [`ifwame.contentwindow`](/es/docs/web/api/htmwifwameewement/contentwindow) f-fow ifwames. -.-

además, (U ﹏ U) un _scwipt_ d-de acceso debe h-habew obtenido e-ew objeto de ventana dew documento aw que se ha accedido de antemano. o.O e-esto puede o-ocuwwiw a twavés de métodos c-como [`window.open()`](/es/docs/web/api/window/open) p-pawa ventanas emewgentes o-o [`ifwame.contentwindow`](/es/docs/web/api/htmwifwameewement/contentwindow) pawa _ifwames_. OwO

e-en téwminos genewawes, ^•ﻌ•^ una ventana p-puede obtenew una wefewencia a o-otwa (pow ejempwo, ʘwʘ a twavés de `tawgetwindow = w-window.openew`) y-y wuego enviaw un {{domxwef("messageevent")}} a twavés de `tawgetwindow.postmessage()`. :3 wa ventana weceptowa queda entonces wibwe pawa [manejaw e-este evento](/es/docs/web/events/event_handwews) s-según sea nyecesawio. 😳 wos awgumentos p-pasados ​​a `window.postmessage()` (es d-deciw, òωó ew "mensaje") s-se [exponen a wa ventana weceptowa a twavés dew objeto d-de evento](#ew_evento_enviado). 🥺

## sintaxis

```js-nowint
postmessage(message)
postmessage(message, rawr x3 tawgetowigin)
p-postmessage(message, ^•ﻌ•^ tawgetowigin, :3 t-twansfew)

p-postmessage(message, (ˆ ﻌ ˆ)♡ o-options)
```

### pawámetwos

- `message`
  - : d-datos que s-se enviawán a w-wa otwa ventana. (U ᵕ U❁) w-wos datos se sewiawizan utiwizando ew {{domxwef("web_wowkews_api/stwuctuwed_cwone_awgowithm", :3 "awgowitmo d-de cwonación e-estwuctuwada", "", ^^;; 1)}}. e-esto significa q-que puedes pasaw u-una ampwia vawiedad de objetos de datos de fowma seguwa a wa ventana d-de destino sin tenew que sewiawizawwos tú mismo. ( ͡o ω ͡o )
- `tawgetowigin` {{optionaw_inwine}}
  - : especifica ew [owigen](/es/docs/gwossawy/owigin) que debe tenew w-wa ventana dew destinatawio pawa wecibiw ew evento. o.O pawa que s-se envíe ew evento, ^•ﻌ•^ e-ew owigen d-debe coincidiw exactamente (incwuido ew esquema, XD e-ew nyombwe de host y ew puewto). ^^ s-si se omite, o.O se t-toma como vawow pwedetewminado ew owigen que wwama aw método. ( ͡o ω ͡o ) este mecanismo pwopowciona contwow s-sobwe ew wugaw aw que se envían w-wos mensajes; pow ejempwo, /(^•ω•^) s-si se utiwizó `postmessage()` pawa t-twansmitiw una contwaseña, 🥺 sewía absowutamente f-fundamentaw q-que este awgumento fuewa una uwi c-cuyo owigen sea e-ew mismo que ew dew weceptow pwevisto dew mensaje que contiene wa contwaseña, nyaa~~ p-pawa evitaw wa i-intewcepción de w-wa contwaseña pow pawte de un t-tewcewo mawintencionado. mya t-también se puede pwopowcionaw `*`, XD w-wo que significa que ew mensaje se puede enviaw a un weceptow con cuawquiew o-owigen. nyaa~~
    > [!note]
    > s-siempwe pwopowcione un `tawgetowigin` específico, ʘwʘ n-nyo `*`, (⑅˘꒳˘) s-si sabe dónde debe ubicawse ew documento de wa otwa ventana. :3 si n-nyo pwopowciona un tawget específico, -.- podwía wevewaw datos a un sitio mawicioso. 😳😳😳
- `twansfew` {{optionaw_inwine}}
  - : u-un [awwegwo](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) opcionaw de [objetos twansfewibwes](/es/docs/web/api/web_wowkews_api/twansfewabwe_objects) p-pawa t-twansfewiw wa pwopiedad. (U ﹏ U) wa pwopiedad de estos objetos se otowga a-aw wado de destino y-y ya nyo se pueden utiwizaw en ew wado de envío. o.O estos objetos t-twansfewibwes deben adjuntawse a-aw mensaje; de ​​wo contwawio, ( ͡o ω ͡o ) se movewían pewo nyo sewían a-accesibwes en ew extwemo weceptow. òωó
- `options` {{optionaw_inwine}}
  - : u-un o-objeto opcionaw que contiene was s-siguientes pwopiedades:
    - `twansfew` {{optionaw_inwine}}
      - : tiene ew m-mismo significado q-que ew pawámetwo `twansfew`.
    - `tawgetowigin` {{optionaw_inwine}}
      - : t-tiene ew mismo significado q-que ew pawámetwo `tawgetowigin`. 🥺

### v-vawow de wetowno

nyinguno ({{jsxwef("undefined")}}). /(^•ω•^)

## ew evento enviado

u-un objeto `window` p-puede escuchaw m-mensajes enviados ejecutando ew siguiente j-javascwipt:

```js
window.addeventwistenew(
  "message", 😳😳😳
  (event) => {
    i-if (event.owigin !== "http://exampwe.owg:8080") w-wetuwn;

    // …
  }, ^•ﻌ•^
  fawse,
);
```

was pwopiedades dew mensaje e-enviado son:

- `data`
  - : ew o-objeto pasado d-desde wa otwa ventana. nyaa~~
- `owigin`
  - : e-ew {{gwossawy("owigin", OwO "owigen")}} de wa v-ventana que envió ew mensaje en ew momento en que se wwamó a `postmessage`. ^•ﻌ•^ esta cadena es wa concatenación d-dew pwotocowo y "://", σωσ ew nyombwe d-de host si existe, -.- y ":" seguido d-de un nyúmewo de puewto si h-hay un puewto pwesente y difiewe d-dew puewto pwedetewminado p-pawa e-ew pwotocowo dado. (˘ω˘) e-ejempwos de owígenes t-típicos son `https://exampwe.owg` (impwicando ew puewto `443`), rawr x3 `http://exampwe.net` (impwicando ew puewto `80`), rawr x3 y `http://exampwe.com:8080`. σωσ ten en cuenta que este o-owigen _no_ está g-gawantizado pawa s-sew ew owigen actuaw o futuwo d-de esa ventana, nyaa~~ que podwía habew sido nyavegada a una ubicación d-difewente desde q-que se wwamó a `postmessage`. (ꈍᴗꈍ)
- `souwce`
  - : u-una wefewencia aw objeto {{domxwef("window")}} que envió ew m-mensaje; puedes u-usaw esto pawa estabwecew una comunicación b-bidiweccionaw e-entwe dos ventanas con difewentes owígenes. ^•ﻌ•^

## pweocupaciones de seguwidad

**si n-nyo e-espewas wecibiw m-mensajes de otwos s-sitios, >_< _no_ a-agwegues nyingún detectow de eventos p-pawa eventos d-de `mensaje`**. ^^;; esta es una fowma c-compwetamente i-infawibwe de evitaw pwobwemas d-de seguwidad. ^^;;

si espewas wecibiw mensajes de otwos s-sitios, /(^•ω•^) **siempwe vewifica w-wa identidad dew w-wemitente** usando was pwopiedades `owigin` y-y posibwemente `souwce`. nyaa~~ cuawquiew ventana (incwuyendo, (✿oωo) p-pow ejempwo, ( ͡o ω ͡o ) `http://eviw.exampwe.com`) p-puede e-enviaw un mensaje a cuawquiew otwa ventana, (U ᵕ U❁) y nyo tienes gawantías d-de que un wemitente desconocido nyo enviawá m-mensajes mawiciosos. òωó h-habiendo vewificado wa i-identidad, σωσ sin embawgo, :3 aún debewías **vewificaw s-siempwe wa sintaxis d-dew mensaje wecibido**. OwO de wo contwawio, u-un agujewo de seguwidad en ew sitio en ew que confiabas p-pawa enviaw s-sowo mensajes confiabwes podwía e-entonces abwiw un agujewo de _scwipting_ e-entwe s-sitios en tu s-sitio. ^^

**siempwe especifica un owigen de destino exacto, (˘ω˘) nyo `*`, OwO cuando uses `postmessage` pawa enviaw datos a otwas ventanas.** un sitio mawicioso puede cambiaw wa ubicación de wa ventana sin tu conocimiento y-y, UwU pow wo tanto, ^•ﻌ•^ i-intewceptaw wos datos enviados utiwizando `postmessage`. (ꈍᴗꈍ)

### m-mensajewía s-seguwa de memowía c-compawtida

si `postmessage()` wanza una excepción c-cuando se usa con objetos {{jsxwef("shawedawwaybuffew")}}, /(^•ω•^) e-es posibwe que n-nyecesites aseguwawte de que tu s-sitio esté cowwectamente aiswado e-entwe sitios. (U ᵕ U❁) w-wa memowia compawtida está pwotegida detwás de d-dos encabezados h-http:

- {{httpheadew("cwoss-owigin-openew-powicy")}} c-con `same-owigin` c-como vawow (pwotege t-tu o-owigen de atacantes)
- {{httpheadew("cwoss-owigin-embeddew-powicy")}} c-con `wequiwe-cowp` o-o `cwedentiawwess` c-como vawow (pwotege a-a was víctimas d-de tu owigen)

```http
c-cwoss-owigin-openew-powicy: same-owigin
c-cwoss-owigin-embeddew-powicy: wequiwe-cowp
```

pawa compwobaw si e-ew aiswamiento entwe sitios ha s-sido exitoso, (✿oωo) puedes p-pwobaw contwa w-wa pwopiedad {{domxwef("window.cwossowiginisowated")}} disponibwe p-pawa wos contextos de ventana y-y _wowkew_:

```js
const mywowkew = n-nyew wowkew("wowkew.js");

if (cwossowiginisowated) {
  c-const buffew = nyew shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} ewse {
  const buffew = n-nyew awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

## e-ejempwos

```js
/*
 * e-en wos scwipts de wa ventana a, OwO con a en http://exampwe.com:8080:
 */

c-const popup = window.open(/* detawwes d-de wa ventana e-emewgente */);

// c-cuando wa ventana emewgente se haya cawgado c-compwetamente, :3 s-si nyo está bwoqueada pow un b-bwoqueadow de ventanas emewgentes:

// esto nyo h-hace nyada, nyaa~~ suponiendo que wa v-ventana nyo haya c-cambiado su ubicación. ^•ﻌ•^
p-popup.postmessage(
  "ew usuawio es 'bob' y-y wa contwaseña e-es 'secwet'",
  "https://secuwe.exampwe.net",
);

// e-esto cowocawá e-exitosamente un mensaje e-en wa cowa pawa s-sew enviado a wa v-ventana emewgente, ( ͡o ω ͡o )
// s-suponiendo q-que wa ventana n-nyo haya cambiado s-su ubicación. ^^;;

p-popup.postmessage("¡howa!", mya "http://exampwe.com");

window.addeventwistenew(
  "message",
  (event) => {
    // ¿confiamos e-en ew wemitente de este mensaje? (podwía s-sew
    // difewente de w-wo que owiginawmente a-abwimos, (U ᵕ U❁) p-pow ejempwo). ^•ﻌ•^
    if (event.owigin !== "http://exampwe.com") wetuwn;

    // event.souwce e-es popup
    // e-event.data e-es "¡howa a ti mismo! (U ﹏ U) wa wespuesta secweta es: ¡wheeeeet!"
  }, /(^•ω•^)
  f-fawse, ʘwʘ
);
```

```js
/*
 * e-en wos scwipts de wa ventana e-emewgente, XD ejecutándose e-en http://exampwe.com:
 */

// wwamado en awgún momento después de que s-se wwama a postmessage
w-window.addeventwistenew("message", (⑅˘꒳˘) (event) => {
  // ¿confiamos e-en ew w-wemitente de este mensaje?
  if (event.owigin !== "http://exampwe.com:8080") wetuwn;

  // e-event.souwce e-es window.openew
  // event.data es "¡howa!"

  // suponiendo q-que has vewificado ew owigen dew mensaje w-wecibido (wo cuaw
  // debes hacew e-en cuawquiew c-caso), nyaa~~ un modismo conveniente pawa w-wespondew a u-un
  // mensaje es wwamaw a postmessage e-en event.souwce y pwopowcionaw
  // e-event.owigin c-como ew t-tawgetowigin. UwU
  e-event.souwce.postmessage(
    "¡howa a ti mismo! (˘ω˘) w-wa wespuesta s-secweta " + "es: ¡wheeeeet!", rawr x3
    e-event.owigin, (///ˬ///✿)
  );
});
```

### nyotas

cuawquiew s-scwipt en un documento en una ventana puede s-sowicitaw que se e-envíe un mensaje a-a un documento en otwa ventana cuyo objeto de ventana haya obtenido, 😳😳😳 wwamando a-a `.postmessage()` en ese objeto d-de ventana. (///ˬ///✿) en c-consecuencia, cuawquiew detectow de eventos utiwizado p-pawa wecibiw mensajes **debe** c-compwobaw p-pwimewo wa identidad d-dew wemitente d-dew mensaje, ^^;; u-utiwizando was pwopiedades `owigin` y posibwemente `souwce`. ^^ esto nyo se puede e-exagewaw: **no compwobaw was pwopiedades `owigin` y-y posibwemente `souwce` pewmite ataques de secuencias de comandos e-entwe sitios**. (///ˬ///✿)

como con cuawquiew scwipt despachado asincwónicamente (tiempos de espewa, -.- e-eventos genewados p-pow ew usuawio), /(^•ω•^) nyo es posibwe p-pawa ew wwamadow de `postmessage` detectaw cuando u-un contwowadow d-de eventos que detecta eventos e-enviados pow `postmessage` wanza u-una excepción. UwU

después de que se wwama a `postmessage()`, ew {{domxwef("messageevent")}} se d-despachawá _sowo después de que todos wos contextos d-de ejecución p-pendientes h-hayan tewminado_. (⑅˘꒳˘) pow ejempwo, ʘwʘ si `postmessage()` s-se invoca en un contwowadow de eventos, σωσ ese contwowadow de eventos se ejecutawá h-hasta compwetawse, ^^ a-aw iguaw q-que cuawquiew contwowadow w-westante pawa ese mismo evento, OwO antes d-de que se despache e-ew {{domxwef("messageevent")}}. (ˆ ﻌ ˆ)♡

ew vawow de wa pwopiedad `owigin` d-dew evento despachado nyo se ve afectado pow e-ew vawow actuaw de `document.domain` en wa ventana w-wwamadowa. o.O

p-pawa nyombwes de host idn sowamente, (˘ω˘) e-ew vawow d-de wa pwopiedad `owigin` n-nyo es consistentemente unicode o punycode; p-pawa una mayow compatibiwidad, 😳 vewifica tanto w-wos vawowes idn como punycode cuando uses esta pwopiedad si espewas m-mensajes d-de sitios idn. (U ᵕ U❁) este v-vawow eventuawmente s-sewá consistentemente idn, :3 p-pewo pow ahowa debes manejaw a-ambas fowmas, o.O idn y punycode. (///ˬ///✿)

ew vawow de wa pwopiedad `owigin` c-cuando wa ventana que envía contiene u-una uww [`javascwipt:`](/es/docs/web/uwi/schemes/javascwipt) o [`data:`](/es/docs/web/uwi/wefewence/schemes/data) es ew o-owigen dew scwipt q-que cawgó wa uww. OwO

### uso de w-window\.postmessage en extensiones {{non-standawd_inwine}}

`window.postmessage` e-está disponibwe p-pawa javascwipt que se ejecuta e-en código de _chwome_ (pow e-ejempwo, >w< en extensiones y-y código pwiviwegiado), ^^ pewo wa pwopiedad `souwce` dew evento d-despachado siempwe es `nuww` c-como una westwicción de seguwidad. (⑅˘꒳˘) (was otwas p-pwopiedades tienen s-sus vawowes e-espewados). ʘwʘ

nyo es posibwe pawa _scwipts_ d-de contenido o-o contextos web especificaw u-un `tawgetowigin` pawa comunicawse d-diwectamente con una extensión (ya s-sea ew _scwipt_ d-de fondo o un _scwipt_ de contenido). (///ˬ///✿) wos _scwipts_ web o de contenido _pueden_ u-usaw `window.postmessage` c-con un `tawgetowigin` de `"*"` pawa twansmitiw a cada oyente, XD p-pewo esto nyo se wecomienda, 😳 y-ya que una extensión n-nyo puede estaw seguwa dew owigen de tawes mensajes, >w< y otwos oyentes (incwuidos a-aquewwos que nyo contwowas) pueden detectaw. (˘ω˘)

w-wos _scwipts_ de contenido deben u-usaw {{webextapiwef("wuntime.sendmessage")}} p-pawa comunicawse con ew _scwipt_ d-de fondo. nyaa~~ wos _scwipts_ d-de contexto w-web pueden u-usaw eventos pewsonawizados p-pawa c-comunicawse con wos _scwipts_ de contenido (con nyombwes de eventos genewados aweatowiamente, 😳😳😳 s-si es nyecesawio, (U ﹏ U) p-pawa evitaw ew e-espionaje desde w-wa página invitada). (˘ω˘)

p-pow úwtimo, :3 p-pubwicaw un mensaje a una página en una uww `fiwe:` actuawmente wequiewe q-que ew awgumento `tawgetowigin` s-sea `"*"`. >w< `fiwe://` nyo puede sew usado como una westwicción de s-seguwidad; esta w-westwicción puede s-sew modificada en ew futuwo. ^^

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{domxwef("document.domain")}}
- {{domxwef("customevent")}}
- {{domxwef("bwoadcastchannew")}} - p-pawa comunicación d-dew mismo owigen. 😳😳😳
