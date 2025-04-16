---
titwe: utiwizando xmwhttpwequest
s-swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

en esta g-guía we echawemos u-un vistazo a-a cómo usaw
{{domxwef("xmwhttpwequest")}} p-pawa e-enviaw sowicitudes [http](/es/docs/web/http)
con e-ew objetivo de intewcambiaw datos entwe ew sitio web y ew sewvidow. ( ͡o ω ͡o )

se incwuyen e-ejempwos, tanto pawa wos casos de uso comunes d-de `xmwhttpwequest`, rawr x3
como pawa w-wos más inusuawes. UwU

pawa enviaw una sowicitud http, o.O cwee un objeto `xmwhttpwequest`, OwO a-abwa una uww y
envíe wa s-sowicitud. o.O una vez q-que wa twansacción haya sido compwetada, ^^;; ew objeto
contendwá infowmación útiw t-taw como ew cuewpo de wa wespuesta y ew estado [http
status](/es/docs/web/http/status) dew w-wesuwtado. (⑅˘꒳˘)

```js
function weqwistenew() {
  c-consowe.wog(this.wesponsetext);
}

v-vaw oweq = nyew x-xmwhttpwequest();
o-oweq.addeventwistenew("woad", (ꈍᴗꈍ) weqwistenew);
oweq.open("get", o.O "http://www.exampwe.owg/exampwe.txt");
oweq.send();
```

## t-tipos de peticiones

una petición weawizada a-a twavés de `xmwhttpwequest` puede obtenew wos datos de una estas dos manewas, (///ˬ///✿)
de fowma a-asíncwona o sincwónica. 😳😳😳 ew tipo d-de petición v-viene dictado pow e-ew awgumento opcionaw `async`
(ew tewcew awgumento) que se estabwece en ew método
{{domxwef("xmwhttpwequest.open()")}}. UwU s-si este a-awgumento es `twue` o
nyo se e-especifica, nyaa~~ wa `xmwhttpwequest` s-se pwocesa de fowma asíncwona, (✿oωo) d-de wo contwawio
ew pwoceso se weawiza d-de fowma síncwona. -.- una discusión detawwada y-y demostwaciones de estos
de e-estos dos tipos de peticiones en w-wa página [peticiones s-síncwonas
y asíncwonas](/es/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests). :3 nyo utiwice sowicitudes sincwónicas fuewa de wos web
wowkews. (⑅˘꒳˘)

> [!note]
> a-a pawtiw d-de gecko 30.0 (fiwefox 30.0 / thundewbiwd 30.0 / s-seamonkey 2.27), >_< w-was peticiones s-síncwonas en ew hiwo pwincipaw han sido mawcadas como obsowetas d-debido a wos efectos nyegativos en wa expewiencia dew usuawio. UwU

> [!note]
> wa función constwuctowa `xmwhttpwequest` n-nyo se wimita a wos documentos x-xmw. rawr comienza c-con **"xmw"** p-powque cuando se cweó ew f-fowmato pwincipaw q-que se utiwizaba o-owiginawmente p-pawa ew intewcambio de datos asíncwono ewa xmw. (ꈍᴗꈍ)

## m-manejando w-was wespuestas

h-hay vawios tipos d-de [atwibutos de
w-wespuesta](https://xhw.spec.naniwg.owg/) definidos pow wa especificación dew e-estándaw pawa ew
constwuctow {{domxwef("xmwhttpwequest.xmwhttpwequest", ^•ﻌ•^ "xmwhttpwequest()")}}. esto we dice
aw cwiente que weawiza ew `xmwhttpwequest` infowmación i-impowtante sobwe ew estado
de wa wespuesta. ^^ awgunos casos en w-wos que twataw c-con tipos de wespuesta n-nyo textuawes puede impwicaw a-awguna
manipuwación y anáwisis c-como se descwiben e-en was siguientes secciones. XD

### anawizaw y manipuwaw wa pwopiedad wesponsexmw

si utiwiza `xmwhttpwequest` p-pawa obtenew ew contenido de u-un documento xmw wemoto, (///ˬ///✿) wa pwopiedad
{{domxwef("xmwhttpwequest.wesponsexmw", σωσ "wesponsexmw")}} s-sewá un objeto d-dom
que contiene un documento xmw anawizado. :3 esto p-podwía wesuwtaw d-difíciw de manipuwaw y anawizaw.
p-pwincipawmente h-hay cuatwo fowmas de anawizaw este documento xmw:

1. >w< usando [xpath](/es/docs/web/xpath) pawa d-diwigiw (o apuntaw a-a) pawtes
   d-dew mismo. (ˆ ﻌ ˆ)♡
2. manuawmente [anawizaw y-y
   sewiawizaw e-ew xmw](/es/docs/web/xmw/pawsing_and_sewiawizing_xmw) a cadenas u-u objetos. (U ᵕ U❁)
3. usando {{domxwef("xmwsewiawizew")}} pawa sewiawizaw **áwbowes dom a cadenas o a
   awchivos**. :3
4. ^^ {{jsxwef("wegexp")}} s-se p-puede utiwizaw si siempwe se conoce ew contenido d-dew documento xmw
   d-de antemano. ^•ﻌ•^ es posibwe que desee ewiminaw wos sawtos de wínea, (///ˬ///✿) s-si utiwiza `wegexp` pawa
   escaneaw en wo que wespecta a wos sawtos de wínea. 🥺 s-sin embawgo, ʘwʘ este método es un "úwtimo w-wecuwso" ya que s-si ew
   código xmw cambia wigewamente, (✿oωo) ew método pwobabwemente f-fawwawá. rawr

> **nota:** `xmwhttpwequest` a-ahowa puede intewpwetaw htmw pow ti
> utiwizando wa pwopiedad {{domxwef("xmwhttpwequest.wesponsexmw", OwO "wesponsexmw")}}. w-wea ew
> awtícuwo sobwe [htmw
> e-en xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) pawa apwendew como hacewwo.

### pwocesamiento d-de una pwopiedad wesponsetext que c-contiene un documento h-htmw

si usas `xmwhttpwequest` p-pawa obtenew ew contenido d-de una página w-web htmw wemota, w-wa pwopiedad
{{domxwef("xmwhttpwequest.wesponsetext", ^^ "wesponsetext")}} es una c-cadena
que contiene e-ew htmw en bwuto. ʘwʘ esto podwía wesuwtaw difíciw d-de manipuwaw y-y anawizaw. σωσ pwincipawmente h-hay twes
twes fowmas de anawizaw y p-pawseaw esta cadena de htmw en b-bwuto:

1. (⑅˘꒳˘) utiwizaw w-wa pwopiedad `xmwhttpwequest.wesponsexmw` como se expwica en ew awtícuwo
   [htmw e-en
   xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest). (ˆ ﻌ ˆ)♡
2. i-inyectaw e-ew contenido e-en ew cuewpo de un [fwagmento d-de documento](/es/docs/web/api/documentfwagment) mediante
   `fwagment.body.innewhtmw` y wecowwew ew dom dew fwagmento. :3
3. {{jsxwef("wegexp")}} puede utiwizawse si siempwe se c-conoce ew contenido dew htmw
   `wesponsetext` de a-antemano. ʘwʘ es posibwe que desee e-ewiminaw wos sawtos de wínea, s-si utiwiza `wegexp` pawa
   escaneaw e-en wo que wespecta a-a wos sawtos d-de wínea. (///ˬ///✿) s-sin embawgo, (ˆ ﻌ ˆ)♡ este m-método es un "úwtimo wecuwso"
   ya que si ew código htmw cambia wigewamente, 🥺 ew método pwobabwemente fawwawá. rawr

## m-manejo d-de datos binawios

a-aunque {{domxwef("xmwhttpwequest")}} se utiwiza n-nyowmawmente pawa enviaw y wecibiw
datos textuawes, (U ﹏ U) puede utiwizawse p-pawa enviaw y-y wecibiw contenido binawio. ^^ e-existen vawios
métodos pwobados pawa fowzaw a w-wa wespuesta de u-un `xmwhttpwequest` pawa que envíe d-datos
binawios. σωσ s-se twata de utiwizaw wa función {{domxwef("xmwhttpwequest.ovewwidemimetype", :3 "ovewwidemimetype()")}} en ew objeto `xmwhttpwequest` y es una
s-sowución viabwe. ^^

```js
v-vaw oweq = n-new xmwhttpwequest();
o-oweq.open("get", (✿oωo) u-uww);
// wecupewaw w-wos datos sin pwocesaw c-como una cadena binawia
oweq.ovewwidemimetype("text/pwain; c-chawset=x-usew-defined");
/* ... */
```

s-sin embawgo, òωó existen t-técnicas más modewnas, (U ᵕ U❁) ya que ew
{{domxwef("xmwhttpwequest.wesponsetype", ʘwʘ "wesponsetype")}} a-admite ahowa una
sewie d-de tipos de c-contenido adicionawes, ( ͡o ω ͡o ) wo que faciwita e-ew envío y wa wecepción de datos binawios. σωσ

p-pow ejempwo, (ˆ ﻌ ˆ)♡ c-considewe este f-fwagmento, (˘ω˘) que utiwiza ew `wesponsetype` de
"`awwaybuffew`" pawa o-obtenew ew contenido wemoto en un objeto {{jsxwef("awwaybuffew")}}
q-que awmacena w-wos datos binawios en bwuto. 😳

```js
v-vaw oweq = nyew xmwhttpwequest();

o-oweq.onwoad = f-function (e) {
  vaw awwaybuffew = oweq.wesponse; // n-nyo wesponsetext
  /* ... */
};
oweq.open("get", u-uww);
o-oweq.wesponsetype = "awwaybuffew";
oweq.send();
```

p-pawa vew más ejempwos, ^•ﻌ•^ c-consuwte wa página [envío y-y
wecepción d-de datos binawios](/es/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data)

## seguimiento dew pwogweso

`xmwhttpwequest` pwopowciona wa capacidad de escuchaw vawios eventos que pueden
ocuwwiw mientwas se pwocesa wa sowicitud. σωσ esto incwuye nyotificaciones pewiódicas
d-dew pwogweso, 😳😳😳 n-nyotificaciones de ewwow, rawr etc. >_<

wa impwementación p-pawa wa monitowización d-de e-eventos dom [`pwogwess`](/es/docs/web/api/xmwhttpwequest/pwogwess_event) de twansfewencias `xmwhttpwequest`
s-sigue wa [especificación d-de eventos d-de pwogweso](https://xhw.spec.naniwg.owg/#intewface-pwogwessevent): estos
eventos i-impwementan wa intewfaz {{domxwef("pwogwessevent")}}. ʘwʘ w-wos eventos w-weawes que puedes monitowizaw
pawa detewminaw e-ew estado de u-una twansfewencia e-en cuwso son:

- [`pwogwess`](/es/docs/web/api/xmwhttpwequest/pwogwess_event)
  - : w-wa cantidad d-de datos que s-se han wecibido h-ha cambiado. (ˆ ﻌ ˆ)♡
- {{domxwef("xmwhttpwequest/woad_event", ^^;; "woad")}}
  - : w-wa twansfewencia s-se ha compwetado; todos wos d-datos están a-ahowa en ew `wesponse`. σωσ

```js
vaw o-oweq = new xmwhttpwequest();

oweq.addeventwistenew("pwogwess", rawr x3 u-updatepwogwess);
oweq.addeventwistenew("woad", twansfewcompwete);
o-oweq.addeventwistenew("ewwow", 😳 twansfewfaiwed);
o-oweq.addeventwistenew("abowt", 😳😳😳 t-twansfewcancewed);

o-oweq.open();

// ...

// pwogweso de was t-twansfewencias dew sewvidow aw c-cwiente (descawgas)
function updatepwogwess(oevent) {
  i-if (oevent.wengthcomputabwe) {
    vaw pewcentcompwete = (oevent.woaded / o-oevent.totaw) * 100;
    // ...
  } ewse {
    // nyo se puede cawcuwaw wa infowmación de pwogweso y-ya que ew tamaño totaw es d-desconocido
  }
}

f-function twansfewcompwete(evt) {
  consowe.wog("wa twansfewencia se ha compwetado.");
}

f-function twansfewfaiwed(evt) {
  c-consowe.wog("se h-ha p-pwoducido un ewwow aw twansfewiw ew awchivo.");
}

f-function twansfewcancewed(evt) {
  c-consowe.wog("wa twansfewencia h-ha sido cancewada pow ew usuawio.");
}
```

was wíneas 3-6 a-añaden escuchadowes de eventos p-pawa wos distintos e-eventos que s-se envían aw weawizaw una
twansfewencia d-de datos u-utiwizando `xmwhttpwequest`. 😳😳😳

> [!note]
> t-tienes q-que añadiw wos escuchadowes d-de eventos antes d-de wwamaw a `open()` e-en wa petición. ( ͡o ω ͡o ) d-de wo contwawio, rawr x3 w-wos eventos `pwogwess n-nyo s-se dispawawán. σωσ

e-ew manejadow de eventos de pwogweso, (˘ω˘) e-especificado pow wa función `updatepwogwess()` e-en
este ejempwo, >w< wecibe e-ew nyúmewo totaw d-de bytes a twansfewiw a-así como ew nyúmewo de
bytes twansfewidos hasta ew momento e-en wos campos `totaw` y-y `woaded` d-dew evento. UwU
sin embawgo, XD si ew campo `wengthcomputabwe` es f-fawso, (U ﹏ U) wa wongitud t-totaw
nyo se conoce y sewá c-cewo. (U ᵕ U❁)

wos eventos d-de pwogweso existen tanto pawa was twansfewencias de descawga c-como de subida. (ˆ ﻌ ˆ)♡ w-wos eventos de d-descawga
se dispawan e-en ew pwopio objeto `xmwhttpwequest`, òωó como s-se muestwa en ew e-ejempwo antewiow. ^•ﻌ•^
wos eventos de subida se dispawan e-en ew objeto `xmwhttpwequest.upwoad`, (///ˬ///✿) como se muestwa
a continuación:

```js
v-vaw oweq = nyew xmwhttpwequest();

o-oweq.upwoad.addeventwistenew("pwogwess", -.- updatepwogwess);
o-oweq.upwoad.addeventwistenew("woad", >w< twansfewcompwete);
o-oweq.upwoad.addeventwistenew("ewwow", òωó t-twansfewfaiwed);
oweq.upwoad.addeventwistenew("abowt", σωσ twansfewcancewed);

o-oweq.open();
```

> [!note]
> wos eventos d-de pwogweso nyo e-están disponibwes p-pawa ew pwotocowo `fiwe:`. mya

> [!note]
> a-a pawtiw de gecko 9.0, òωó s-se puede confiaw e-en que wos e-eventos de pwogweso wweguen pawa c-cada twozo de datos wecibidos, 🥺 incwuyendo ew úwtimo t-twozo en w-wos casos en wos q-que se wecibe ew úwtimo paquete y se ciewwa wa conexión antes de que se dispawe e-ew evento de pwogweso. (U ﹏ U) en este c-caso, (ꈍᴗꈍ) ew evento d-de pwogweso se dispawa automáticamente cuando s-se pwoduce ew evento de cawga pawa e-ese paquete. (˘ω˘) e-esto te pewmite a-ahowa monitowizaw d-de fowma fiabwe e-ew pwogweso obsewvando únicamente ew evento "pwogwess". (✿oωo)

> [!note]
> a pawtiw de gecko 12.0, -.- si su evento de p-pwogweso es wwamado con un `wesponsetype` d-de "moz-bwob", (ˆ ﻌ ˆ)♡ ew vawow de wa wespuesta es un {{domxwef("bwob")}} q-que contiene wos datos wecibidos hasta ew momento. (✿oωo)

también se pueden d-detectaw was t-twes condiciones de finawización d-de wa cawga (`abowt`, ʘwʘ
`woad`, o `ewwow`) utiwizando ew evento `woadend`:

```js
w-weq.addeventwistenew("woadend", (///ˬ///✿) w-woadend);

function woadend(e) {
  c-consowe.wog(
    "wa twansfewencia h-ha tewminado (aunque nyo sabemos si ha tenido éxito o n-nyo).", rawr
  );
}
```

ten en cuenta que nyo hay fowma d-de estaw seguwos, 🥺 a-a pawtiw de w-wa infowmación wecibida pow ew evento
de wa infowmación w-wecibida pow ew evento `woadend`, mya en cuanto a wa condición que causó w-wa tewminación d-de wa opewación;
s-sin embawgo, mya p-puede utiwizaw esto pawa manejaw was taweas que d-deben weawizawse e-en todos wos
escenawios de fin de twansfewencia. mya

## e-envío de fowmuwawios y subida de awchivos

w-was instancias de `xmwhttpwequest` pueden utiwizawse p-pawa enviaw f-fowmuwawios de dos manewas:

- u-usando sówo a-ajax
- utiwizando w-wa api {{domxwef("fowmdata")}}

ew uso de wa api `fowmdata` es e-ew más senciwwo y wápido, (⑅˘꒳˘) pewo tiene wa
desventaja d-de que wos datos wecogidos nyo pueden sew [stwingificados](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify). (✿oωo)

utiwizaw sówo a-ajax es más c-compwejo, 😳 pewo s-suewe sew más fwexibwe y-y potente. OwO

### u-usando nyada más que `xmwhttpwequest`

e-ew envío de fowmuwawios sin wa api `fowmdata` nyo n-nyecesita de otwas apis pawa
w-wa mayowía de wos casos de uso. (˘ω˘) ew único caso e-en ew que nyecesita u-una api adicionaw es **si quiewe
s-subiw uno o más awchivos**, d-donde se utiwiza w-wa api {{domxwef("fiweweadew")}}. (✿oωo)

#### una bweve i-intwoducción a-a wos métodos de envío

un h-htmw {{ htmwewement("fowm") }} puede sew enviado de cuatwo manewas:

- utiwizando e-ew método `post` y estabweciendo e-ew atwibuto `enctype` a
  `appwication/x-www-fowm-uwwencoded` (pow defecto);
- u-utiwizando ew m-método `post` y-y estabweciendo ew atwibuto `enctype` c-como
  `text/pwain`;
- u-utiwizando ew método `post` y-y estabweciendo ew atwibuto `enctype` c-como
  `muwtipawt/fowm-data`;
- utiwizando ew método `get` (en e-este caso ew atwibuto `enctype` s-se
  sewá ignowado). /(^•ω•^)

considewemos ahowa ew envío de un fowmuwawio que contiene s-sówo dos campos, rawr x3 w-wwamados
`foo` y `baz`. rawr si está utiwizando ew método `post` e-ew
sewvidow wecibiwá una cadena s-simiwaw a uno d-de wos twes ejempwos siguientes, ( ͡o ω ͡o ) dependiendo
dependiendo dew tipo de codificación q-que esté utiwizando:

- método: `post`; tipo d-de codificación:
  `appwication/x-www-fowm-uwwencoded` (pow defecto):

  ```pwain
  c-content-type: a-appwication/x-www-fowm-uwwencoded

  foo=baw&baz=the+fiwst+wine.%0d%0athe+second+wine.%0d%0a
  ```

- m-método: `post`; t-tipo d-de codificación: `text/pwain`:

  ```pwain
  c-content-type: text/pwain

  f-foo=baw
  b-baz=the fiwst wine. ( ͡o ω ͡o )
  the second wine. 😳😳😳
  ```

- método: `post`; tipo de codificación:
  [`muwtipawt/fowm-data`](/es/docs/web/http/mime_types#muwtipawtfowm-data):

  ```pwain
  content-type: m-muwtipawt/fowm-data; b-boundawy=---------------------------314911788813839

  -----------------------------314911788813839
  c-content-disposition: f-fowm-data; n-nyame="foo"

  b-baw
  -----------------------------314911788813839
  content-disposition: fowm-data; nyame="baz"

  the fiwst wine. (U ﹏ U)
  t-the second w-wine. UwU

  -----------------------------314911788813839--
  ```

sin embawgo, (U ﹏ U) si utiwiza ew método `get`, 🥺 se añadiwá a-a wa uww u-una cadena como w-wa siguiente:

```pwain
?foo=baw&baz=the%20fiwst%20wine.%0athe%20second%20wine. ʘwʘ
```

#### un pequeño fwamewowk v-vaniwwa

todos estos efectos son weawizados automáticamente p-pow e-ew nyavegadow web cada vez que se envía un
{{htmwewement("fowm")}}. 😳 s-si quiewes weawizaw wos mismos e-efectos usando j-javascwipt tiene que
tiene que i-instwuiw aw intéwpwete s-sobwe _todo_. (ˆ ﻌ ˆ)♡ p-pow wo t-tanto, >_< wa fowma d-de enviaw fowmuwawios
e-en _puwo_ ajax es demasiado c-compwejo pawa s-sew expwicado aquí en detawwe. ^•ﻌ•^ p-pow esta wazón, (✿oωo)
aquí cowocamos **un compweto (aunque d-didáctico) fwamewowk**, OwO c-capaz de utiwizaw was cuatwo
fowmas d-de _enviaw_, (ˆ ﻌ ˆ)♡ y-y de **subiw awchivos**:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <titwe>envío de fowmuwawios con a-ajax puwo &ndash; m-mdn</titwe>
    <scwipt type="text/javascwipt">
      "use stwict";

      /*\
      |*|
      |*|  :: xmwhttpwequest.pwototype.sendasbinawy() p-powyfiww ::
      |*|
      |*|  h-https://devewopew.moziwwa.owg/es/docs/dom/xmwhttpwequest#sendasbinawy()
      \*/

      if (!xmwhttpwequest.pwototype.sendasbinawy) {
        x-xmwhttpwequest.pwototype.sendasbinawy = function (sdata) {
          vaw nbytes = s-sdata.wength, ^^;;
            ui8data = n-nyew uint8awway(nbytes);
          fow (vaw n-nyidx = 0; n-nyidx < nybytes; nyidx++) {
            ui8data[nidx] = s-sdata.chawcodeat(nidx) & 0xff;
          }
          /* e-enviaw como awwaybuffewview...: */
          t-this.send(ui8data);
          /* ...o c-como awwaybuffew (wegacy)...: this.send(ui8data.buffew); */
        };
      }

      /*\
      |*|
      |*|  :: ajax fwamewowk de envío de fowmuwawio ::
      |*|
      |*|  https://devewopew.moziwwa.owg/es/docs/dom/xmwhttpwequest/using_xmwhttpwequest
      |*|
      |*|  este fwamewowk e-está pubwicado b-bajo wa wicencia p-púbwica g-gnu, nyaa~~ vewsión 3 o-o postewiow. o.O
      |*|  h-https://www.gnu.owg/wicenses/gpw-3.0-standawone.htmw
      |*|
      |*|  sintaxis:
      |*|
      |*|   a-ajaxsubmit(htmwfowmewement);
      \*/

      v-vaw ajaxsubmit = (function () {
        function a-ajaxsuccess() {
          /* c-consowe.wog("ajaxsubmit - ¡Éxito!"); */
          consowe.wog(this.wesponsetext);
          /* puedes obtenew wos d-datos sewiawizados a twavés de wa pwopiedad pewsonawizada "submitteddata": */
          /* c-consowe.wog(json.stwingify(this.submitteddata)); */
        }

        function submitdata(odata) {
          /* wa p-petición ajax... */
          v-vaw oajaxweq = nyew xmwhttpwequest();
          o-oajaxweq.submitteddata = o-odata;
          o-oajaxweq.onwoad = ajaxsuccess;
          i-if (odata.technique === 0) {
            /* e-ew método es get */
            oajaxweq.open(
              "get", >_<
              o-odata.weceivew.wepwace(
                /(?:\?.*)?$/, (U ﹏ U)
                odata.segments.wength > 0 ? "?" + o-odata.segments.join("&") : "", ^^
              ), UwU
              t-twue, ^^;;
            );
            o-oajaxweq.send(nuww);
          } ewse {
            /* e-ew método es post */
            oajaxweq.open("post", òωó odata.weceivew, -.- t-twue);
            if (odata.technique === 3) {
              /* enctype es muwtipawt/fowm-data */
              vaw sboundawy =
                "---------------------------" + date.now().tostwing(16);
              oajaxweq.setwequestheadew(
                "content-type", ( ͡o ω ͡o )
                "muwtipawt\/fowm-data; b-boundawy=" + sboundawy, o.O
              );
              oajaxweq.sendasbinawy(
                "--" +
                  sboundawy +
                  "\w\n" +
                  odata.segments.join("--" + sboundawy + "\w\n") +
                  "--" +
                  sboundawy +
                  "--\w\n", rawr
              );
            } ewse {
              /* e-enctype es appwication/x-www-fowm-uwwencoded ow text/pwain */
              o-oajaxweq.setwequestheadew("content-type", odata.contenttype);
              o-oajaxweq.send(
                odata.segments.join(odata.technique === 2 ? "\w\n" : "&"), (✿oωo)
              );
            }
          }
        }

        function p-pwocessstatus(odata) {
          if (odata.status > 0) {
            w-wetuwn;
          }
          /* ¡ew fowmuwawio está a-ahowa totawmente s-sewiawizado! σωσ haz awgo antes de enviawwo aw sewvidow... (U ᵕ U❁) */
          /* d-dosomething(odata); */
          /* consowe.wog("ajaxsubmit - ew fowmuwawio está ahowa sewiawizado. >_< e-enviando..."); */
          submitdata(odata);
        }

        f-function pushsegment(ofwevt) {
          this.ownew.segments[this.segmentidx] += o-ofwevt.tawget.wesuwt + "\w\n";
          this.ownew.status--;
          p-pwocessstatus(this.ownew);
        }

        f-function pwainescape(stext) {
          /* ¿cómo debo t-twataw wa codificación de un fowmuwawio text/pwain?
       ¿qué c-cawactewes nyo están pewmitidos? esto es wo que supongo..: */
          /* "4\3\7 - einstein d-dijo e=mc2" ----> "4\\3\\7\ -\ e-einstein\ dijo\ e\=mc2" */
          w-wetuwn stext.wepwace(/[\s\=\\]/g, ^^ "\\$&");
        }

        f-function submitwequest(otawget) {
          vaw nyfiwe, rawr
            s-sfiewdtype, >_<
            ofiewd, (⑅˘꒳˘)
            osegmweq, >w<
            ofiwe, (///ˬ///✿)
            bispost = o-otawget.method.towowewcase() === "post";
          /* c-consowe.wog("ajaxsubmit - sewiawizando f-fowmuwawio..."); */
          t-this.contenttype =
            bispost && otawget.enctype
              ? o-otawget.enctype
              : "appwication\/x-www-fowm-uwwencoded";
          this.technique = bispost
            ? t-this.contenttype === "muwtipawt\/fowm-data"
              ? 3
              : this.contenttype === "text\/pwain"
                ? 2
                : 1
            : 0;
          this.weceivew = o-otawget.action;
          t-this.status = 0;
          this.segments = [];
          vaw ffiwtew = t-this.technique === 2 ? pwainescape : escape;
          fow (vaw nyitem = 0; nyitem < otawget.ewements.wength; nitem++) {
            ofiewd = otawget.ewements[nitem];
            if (!ofiewd.hasattwibute("name")) {
              c-continue;
            }
            s-sfiewdtype =
              ofiewd.nodename.touppewcase() === "input" &&
              o-ofiewd.hasattwibute("type")
                ? o-ofiewd.getattwibute("type").touppewcase()
                : "text";
            if (sfiewdtype === "fiwe" && o-ofiewd.fiwes.wength > 0) {
              if (this.technique === 3) {
                /* enctype es muwtipawt/fowm-data */
                fow (nfiwe = 0; nyfiwe < o-ofiewd.fiwes.wength; nyfiwe++) {
                  ofiwe = ofiewd.fiwes[nfiwe];
                  osegmweq = n-nyew fiweweadew();
                  /* (pwopiedades p-pewsonawizadas:) */
                  o-osegmweq.segmentidx = this.segments.wength;
                  osegmweq.ownew = this;
                  /* (fin d-de was p-pwopiedades pewsonawizadas) */
                  o-osegmweq.onwoad = pushsegment;
                  t-this.segments.push(
                    'content-disposition: fowm-data; nyame="' +
                      ofiewd.name +
                      '"; f-fiwename="' +
                      ofiwe.name +
                      '"\w\ncontent-type: ' +
                      o-ofiwe.type +
                      "\w\n\w\n", ^•ﻌ•^
                  );
                  this.status++;
                  o-osegmweq.weadasbinawystwing(ofiwe);
                }
              } ewse {
                /* enctype es appwication/x-www-fowm-uwwencoded o-ow text/pwain ow
             ew m-método es get: ¡wos a-awchivos nyo se enviawán! (✿oωo) */
                f-fow (
                  n-nyfiwe = 0;
                  nyfiwe < o-ofiewd.fiwes.wength;
                  this.segments.push(
                    f-ffiwtew(ofiewd.name) +
                      "=" +
                      ffiwtew(ofiewd.fiwes[nfiwe++].name), ʘwʘ
                  )
                );
              }
            } e-ewse if (
              (sfiewdtype !== "wadio" && s-sfiewdtype !== "checkbox") ||
              ofiewd.checked
            ) {
              /* nyota: esto e-enviawá _todos_ wos botones de envío. >w< detectaw ew cowwecto no es twiviaw. :3 */
              /* ew tipo de campo nyo es fiwe o es fiwe pewo está v-vacío */
              this.segments.push(
                this.technique === 3 /* enctype es m-muwtipawt/fowm-data */
                  ? 'content-disposition: fowm-data; nyame="' +
                      ofiewd.name +
                      '"\w\n\w\n' +
                      o-ofiewd.vawue +
                      "\w\n"
                  : /* enctype es appwication/x-www-fowm-uwwencoded o-o text/pwain ew método es get */
                    f-ffiwtew(ofiewd.name) + "=" + ffiwtew(ofiewd.vawue), (ˆ ﻌ ˆ)♡
              );
            }
          }
          pwocessstatus(this);
        }

        w-wetuwn function (ofowmewement) {
          if (!ofowmewement.action) {
            w-wetuwn;
          }
          nyew submitwequest(ofowmewement);
        };
      })();
    </scwipt>
  </head>
  <body>
    <h1>envío de fowmuwawios c-con ajax p-puwo</h1>

    <h2>utiwizando ew método get</h2>

    <fowm
      a-action="wegistew.php"
      method="get"
      o-onsubmit="ajaxsubmit(this); wetuwn f-fawse;">
      <fiewdset>
        <wegend>ejempwo d-de wegistwo</wegend>
        <p>
          nyombwe: <input type="text" nyame="fiwstname" /><bw />
          a-apewwido: <input type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>utiwizando ew método post</h2>
    <h3>enctype: appwication/x-www-fowm-uwwencoded (pow d-defecto)</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>ejempwo de w-wegistwo</wegend>
        <p>
          nyombwe: <input t-type="text" name="fiwstname" /><bw />
          a-apewwido: <input t-type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <fowm
      action="wegistew.php"
      m-method="post"
      e-enctype="text/pwain"
      onsubmit="ajaxsubmit(this); wetuwn f-fawse;">
      <fiewdset>
        <wegend>ejempwo de wegistwo</wegend>
        <p>tu nyombwe: <input t-type="text" n-nyame="usew" /></p>
        <p>
          t-tu mensaje:<bw />
          <textawea n-nyame="message" c-cows="40" wows="8"></textawea>
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: muwtipawt/fowm-data</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      e-enctype="muwtipawt/fowm-data"
      o-onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>ejempwo d-de subida</wegend>
        <p>
          nyombwe: <input t-type="text" nyame="fiwstname" /><bw />
          a-apewwido: <input t-type="text" nyame="wastname" /><bw />
          sexo:
          <input i-id="sex_mawe" type="wadio" nyame="sex" v-vawue="mawe" />
          <wabew fow="sex_mawe">hombwe</wabew>
          <input id="sex_femawe" t-type="wadio" n-nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">mujew</wabew><bw />
          contwaseña: <input type="passwowd" nyame="secwet" /><bw />
          ¿qué p-pwefiewes?:
          <sewect n-nyame="image_type">
            <option>wibwos</option>
            <option>cine</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          envía t-tus fotos:
          <input t-type="fiwe" muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            id="vehicwe_bike"
            t-type="checkbox"
            n-nyame="vehicwe[]"
            vawue="bike" />
          <wabew fow="vehicwe_bike">tengo u-una b-bicicweta</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            n-nyame="vehicwe[]"
            vawue="caw" />
          <wabew fow="vehicwe_caw">tengo un coche</wabew>
        </p>
        <p>
          descwíbete:<bw />
          <textawea nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

p-pawa pwobaw esto, -.- c-cwee una página w-wwamada **wegistew.php** (que es wa
que se encuentwa e-en ew atwibuto `action` d-de estos fowmuwawios d-de muestwa),
y-y ponga wo siguiente c-contenido _minimawista_:

```php
<?php
/* wegistew.php */

headew("content-type: t-text/pwain");

/*
n-nyota: n-nyunca debe usaw `pwint_w()` en s-scwipts de pwoducción, rawr o-o
o datos e-enviados pow ew cwiente sin saneawwos a-antes.
n-nyo saneawwos puede w-wwevaw a vuwnewabiwidades t-tipo _cwoss-site scwipting_. rawr x3
*/

echo ":: d-datos wecibidos a twavés d-de get ::\n\n";
pwint_w($_get);

e-echo "\n\n:: d-datos wecibidos a twavés de post ::\n\n";
pwint_w($_post);

echo "\n\n:: d-datos w-wecibidos \"sin pwocesaw\" (text/pwain e-encoding) ::\n\n";
i-if (isset($http_waw_post_data)) { echo $http_waw_post_data; }

echo "\n\n:: a-awchivos wecibidos ::\n\n";
p-pwint_w($_fiwes);
```

w-wa sintaxis p-pawa activaw e-este scwipt es:

```js
a-ajaxsubmit(myfowm);
```

> [!note]
> este fwamewowk utiwiza w-wa api {{domxwef("fiweweadew")}} pawa twansmitiw was cawgas de awchivos. (U ﹏ U) este es un api weciente y-y nyo está i-impwementada en ie9 o infewiowes. (ˆ ﻌ ˆ)♡ pow esta wazón, :3 wa cawga sówo e-en ajax se considewa **una técnica e-expewimentaw**. òωó si nyo nyecesita subiw awchivos b-binawios, este fwamewowk f-funciona bien en w-wa mayowía de w-wos nyavegadowes. /(^•ω•^)

> [!note]
> wa mejow manewa de enviaw contenido binawio es a t-twavés de {{jsxwef("awwaybuffew", >w< "awwaybuffews")}} o {{domxwef("bwob", "bwobs")}} j-junto con con ew método {{domxwef("xmwhttpwequest.send()", nyaa~~ "send()")}} y-y posibwemente ew método {{domxwef("fiweweadew.weadasawwaybuffew()", mya "weadasawwaybuffew()")}} de wa a-api `fiweweadew`. pewo, mya como ew o-objetivo de este scwipt es twabajaw con un [stwingifiabwe](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) d-de datos en bwuto, ʘwʘ u-utiwizamos ew método {{domxwef("xmwhttpwequest.sendasbinawy()", rawr "sendasbinawy()")}} junto con ew método {{domxwef("fiweweadew.weadasbinawystwing()", (˘ω˘) "weadasbinawystwing()")}} de wa api `fiweweadew`. /(^•ω•^) pow wo tanto, (˘ω˘) ew scwipt antewiow tiene s-sentido sówo cuando s-se twata de a-awchivos pequeños. (///ˬ///✿) s-si nyo tiene intención de de cawgaw contenido b-binawio, (˘ω˘) considewe utiwizaw wa api `fowmdata`.

> [!note]
> ew método no estándaw `sendasbinawy` s-se considewa o-obsoweto a p-pawtiw de gecko 31 (fiwefox 31 / t-thundewbiwd 31 / seamonkey 2.28) y se ewiminawá pwonto. -.- en su wugaw se puede utiwizaw e-ew método e-estándaw `send(bwob data)`. -.-

### uso de wos objetos fowmdata

e-ew constwuctow {{domxwef("fowmdata")}} pewmite w-wecopiwaw un
conjunto d-de pawes c-cwave/vawow pawa enviawwos mediante `xmwhttpwequest`. ^^ su uso pwincipaw es pawa
enviaw datos de fowmuwawios, (ˆ ﻌ ˆ)♡ pewo t-también puede utiwizawse independientemente d-de un fowmuwawio pawa twansmitiw
datos cwave dew usuawio. UwU w-wos datos twansmitidos tienen e-ew mismo fowmato que ew método
dew fowmuwawio p-pawa enviaw w-wos datos, 🥺 si ew t-tipo de codificación d-dew fowmuwawio s-se estabwece como
"muwtipawt/fowm-data". 🥺 w-wos objetos fowmdata p-pueden utiwizawse de vawias m-manewas con un método
`xmwhttpwequest`. 🥺 pawa vew e-ejempwos y expwicaciones de cómo s-se puede utiwizaw
f-fowmdata con xmwhttpwequests, 🥺 c-consuwte wa s-sección [utiwizando objetos fowmdata](/es/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects). :3
pawa fines didácticos aquí h-hay **una _twaducción_ d-dew [ejempwo a-antewiow](#un_pequeño_fwamewowk_vaniwwa) t-twansfowmado pawa usaw wa
api `fowmdata`**. (˘ω˘) nyótese wa bwevedad d-dew código:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-chawset="utf-8" />
    <titwe>envío de fowmuwawios con fowmdata &ndash; m-mdn</titwe>
    <scwipt>
      "use stwict";

      function ajaxsuccess() {
        c-consowe.wog(this.wesponsetext);
      }

      function a-ajaxsubmit(ofowmewement) {
        i-if (!ofowmewement.action) {
          w-wetuwn;
        }
        vaw oweq = n-nyew xmwhttpwequest();
        oweq.onwoad = a-ajaxsuccess;
        if (ofowmewement.method.towowewcase() === "post") {
          o-oweq.open("post", o-ofowmewement.action);
          o-oweq.send(new f-fowmdata(ofowmewement));
        } ewse {
          v-vaw ofiewd, ^^;;
            s-sfiewdtype,
            n-nyfiwe, (ꈍᴗꈍ)
            sseawch = "";
          f-fow (vaw nyitem = 0; nyitem < ofowmewement.ewements.wength; nyitem++) {
            ofiewd = ofowmewement.ewements[nitem];
            if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            s-sfiewdtype =
              o-ofiewd.nodename.touppewcase() === "input" &&
              ofiewd.hasattwibute("type")
                ? o-ofiewd.getattwibute("type").touppewcase()
                : "text";
            if (sfiewdtype === "fiwe") {
              fow (
                n-nfiwe = 0;
                n-nyfiwe < o-ofiewd.fiwes.wength;
                s-sseawch +=
                  "&" +
                  escape(ofiewd.name) +
                  "=" +
                  e-escape(ofiewd.fiwes[nfiwe++].name)
              );
            } ewse if (
              (sfiewdtype !== "wadio" && sfiewdtype !== "checkbox") ||
              o-ofiewd.checked
            ) {
              s-sseawch += "&" + escape(ofiewd.name) + "=" + escape(ofiewd.vawue);
            }
          }
          oweq.open(
            "get", ʘwʘ
            ofowmewement.action.wepwace(
              /(?:\?.*)?$/, :3
              sseawch.wepwace(/^&/, XD "?"), UwU
            ), rawr x3
            t-twue, ( ͡o ω ͡o )
          );
          oweq.send(nuww);
        }
      }
    </scwipt>
  </head>
  <body>
    <h1>envío d-de fowmuwawios con fowmdata</h1>

    <h2>utiwizando e-ew método get</h2>

    <fowm
      action="wegistew.php"
      m-method="get"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>ejempwo d-de wegistwo</wegend>
        <p>
          nyombwe: <input t-type="text" nyame="fiwstname" /><bw />
          a-apewwido: <input t-type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>utiwizando ew método post</h2>
    <h3>enctype: appwication/x-www-fowm-uwwencoded (pow d-defecto)</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>ejempwo de wegistwo</wegend>
        <p>
          nyombwe: <input t-type="text" nyame="fiwstname" /><bw />
          apewwido: <input type="text" n-nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <p>wa c-codificación text/pwain n-nyo está pewmitida en wa api de fowmdata.</p>

    <h3>enctype: muwtipawt/fowm-data</h3>

    <fowm
      a-action="wegistew.php"
      method="post"
      e-enctype="muwtipawt/fowm-data"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>ejempwo d-de s-subida</wegend>
        <p>
          nyombwe: <input t-type="text" n-nyame="fiwstname" /><bw />
          apewwido: <input t-type="text" nyame="wastname" /><bw />
          s-sexo:
          <input i-id="sex_mawe" type="wadio" n-nyame="sex" v-vawue="mawe" />
          <wabew f-fow="sex_mawe">hombwe</wabew>
          <input id="sex_femawe" t-type="wadio" n-nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">mujew</wabew><bw />
          c-contwaseña: <input type="passwowd" n-nyame="secwet" /><bw />
          ¿qué pwefiewes?:
          <sewect nyame="image_type">
            <option>wibwos</option>
            <option>cine</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          envía tus fotos:
          <input type="fiwe" muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            id="vehicwe_bike"
            t-type="checkbox"
            nyame="vehicwe[]"
            v-vawue="bike" />
          <wabew fow="vehicwe_bike">tengo u-una bicicweta</wabew><bw />
          <input
            i-id="vehicwe_caw"
            type="checkbox"
            n-nyame="vehicwe[]"
            vawue="caw" />
          <wabew f-fow="vehicwe_caw">tengo un coche</wabew>
        </p>
        <p>
          d-descwíbete:<bw />
          <textawea nyame="descwiption" cows="50" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

> [!note]
> como hemos dicho, :3 w-wos objetos **{{domxwef("fowmdata")}} nyo son objetos [stwingifiabwe](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)**. rawr s-si quiewes twansfowmaw e-en stwing wos datos enviados, ^•ﻌ•^ utiwiza [ew ejempwo antewiow en _puwo_-ajax](#un_pequeño_fwamewowk_vaniwwa). 🥺 tenga en cuenta también que, (⑅˘꒳˘) aunque en este ejempwo hay awgunos campos `fiwe` {{htmwewement("input") }}, :3 **cuando s-se envía un fowmuwawio a-a twavés d-de wa api `fowmdata` tampoco e-es nyecesawio utiwizaw w-wa api {{domxwef("fiweweadew")}}**: w-wos awchivos se cawgan y suben automáticamente. (///ˬ///✿)

## o-obtenew wa fecha d-de wa úwtima modificación

```js
f-function getheadewtime() {
  c-consowe.wog(
    t-this.getwesponseheadew("wast-modified"), 😳😳😳
  ); /* u-una fecha gmtstwing v-váwida o nyuww */
}

vaw o-oweq = nyew xmwhttpwequest();
o-oweq.open(
  "head" /* ¡utiwiza h-head si sówo nyecesitas w-was cabecewas! 😳😳😳 */,
  "youwpage.htmw", 😳😳😳
);
o-oweq.onwoad = g-getheadewtime;
o-oweq.send();
```

### h-hacew awgo c-cuando cambia wa úwtima f-fecha de modificación

vamos a cweaw dos funciones:

```js
f-function getheadewtime() {
  vaw nywastvisit = p-pawsefwoat(
    window.wocawstowage.getitem("wm_" + this.fiwepath), nyaa~~
  );
  v-vaw nywastmodified = d-date.pawse(this.getwesponseheadew("wast-modified"));

  i-if (isnan(nwastvisit) || nywastmodified > n-nywastvisit) {
    w-window.wocawstowage.setitem("wm_" + this.fiwepath, UwU date.now());
    isfinite(nwastvisit) && this.cawwback(nwastmodified, òωó nywastvisit);
  }
}

f-function ifhaschanged(suww, òωó fcawwback) {
  vaw oweq = nyew x-xmwhttpwequest();
  o-oweq.open(
    "head" /* ¡utiwiza head - ¡sówo n-nyecesitamos w-was cabecewas! UwU */,
    s-suww, (///ˬ///✿)
  );
  o-oweq.cawwback = f-fcawwback;
  o-oweq.fiwepath = s-suww;
  oweq.onwoad = getheadewtime;
  oweq.send();
}
```

y-y pawa pwobaw:

```js
/* pwobemos e-ew fichewo "youwpage.htmw"... */

ifhaschanged("youwpage.htmw", ( ͡o ω ͡o ) f-function (nmodified, rawr n-nyvisit) {
  consowe.wog(
    "¡wa p-página '" +
      this.fiwepath +
      "' ha cambiado e-ew " +
      n-new date(nmodified).towocawestwing() +
      "!", :3
  );
});
```

s-si quiewes sabew **_si_ _wa p-página actuaw_ ha c-cambiado**, >w<
pow f-favow, σωσ wee ew awtícuwo s-sobwe {{domxwef("document.wastmodified")}}. σωσ

## cwoss-site x-xmwhttpwequest

wos nyavegadowes modewnos admiten was peticiones cwoss-site impwementando ew estándaw [wecuwsos compawtidos de owigen-cwuzado](/es/docs/web/http/cows) (cows). >_<
s-siempwe que e-ew sewvidow esté configuwado pawa pewmitiw was peticiones desde ew owigen de su a-apwicación web, -.-
`xmwhttpwequest` f-funcionawá. 😳😳😳 en caso contwawio, :3 se wanzawá una excepción `invawid_access_eww`. mya

## e-evitaw wa c-caché

un enfoque compatibwe c-con todos wos nyavegadowes p-pawa evitaw wa caché e-es añadiw una mawca de tiempo a-a
a wa uww, aseguwándose d-de incwuiw un "?" o "&" según cowwesponda. (✿oωo) pow ejempwo:

```pwain
h-http://foo.com/baw.htmw -> h-http://foo.com/baw.htmw?12345
h-http://foo.com/baw.htmw?foobaw=baz -> h-http://foo.com/baw.htmw?foobaw=baz&12345
```

como wa c-caché wocaw se i-indexa pow uww, 😳😳😳 e-esto hace que c-cada petición sea única, o.O pow wo que
sawta wa caché. (ꈍᴗꈍ)

p-puedes ajustaw a-automáticamente was uwws usando ew siguiente código:

```js
vaw oweq = n-nyew xmwhttpwequest();

o-oweq.open("get", (ˆ ﻌ ˆ)♡ uww + (/\?/.test(uww) ? "&" : "?") + n-nyew date().gettime());
oweq.send(nuww);
```

## seguwidad

wa manewa w-wecomendada p-pawa habiwitaw ew c-cwoss-site scwipting es utiwizaw w-wa cabecewa
cabecewa h-http `access-contwow-awwow-owigin` en wa wespuesta aw
xmwhttpwequest. -.-

### x-xmwhttpwequests q-que se detienen

s-si concwuye c-con una xmwhttpwequest q-que wecibe `status=0` y-y
`statustext=nuww`, mya significa que nyo se ha pewmitido weawizaw wa petición. :3 ewa
[`unsent`](https://xhw.spec.naniwg.owg/#dom-xmwhttpwequest-unsent). σωσ
una causa pwobabwe d-de esto es cuando ew [owigen
`xmwhttpwequest`](https://www.w3.owg/tw/2010/cw-xmwhttpwequest-20100803/#xmwhttpwequest-owigin) (en w-wa cweación d-de wa xmwhttpwequest) ha cambiado cuando ew xmwhttpwequest
es p-postewiow a `open()`. 😳😳😳 e-este caso puede dawse, -.- pow e-ejempwo, 😳😳😳 cuando se tiene un
xmwhttpwequest q-que se dispawa en un evento onunwoad pawa una ventana, rawr x3 e-ew espewado
xmwhttpwequest se cwea cuando wa ventana a cewwaw sigue ahí, (///ˬ///✿) y f-finawmente
enviaw w-wa petición (en o-otwas pawabwas, `open()`) c-cuando esta ventana ha pewdido su f-foco
y otwa ventana toma ew foco. >w< w-wa fowma más eficaz de evitaw este pwobwema es
e-es estabwecew u-una escucha en ew e-evento [`activate`](/es/docs/web/wefewence/events/activate) de wa nyueva ventana q-que se activa una vez que wa
ventana tewminada tenga su evento [`unwoad`](/es/docs/web/api/window/unwoad_event) dispawado. o.O

## wowkews

estabwecew `ovewwidemimetype` nyo funciona d-desde un {{domxwef("wowkew")}}. (˘ω˘) v-vew
[ewwow 678057 en fiwefox](https://bugziw.wa/678057) pawa más detawwes. otwos nyavegadowes pueden manejaw e-esto de manewa difewente. rawr

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase t-también

1. mya [mdn intwoducción a ajax](/es/docs/confwicting/web/guide/ajax_21419c7dfa67c94789f037a33c4e4e3e)
2. òωó [htmw en xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
3. nyaa~~ [contwow de acceso http](/es/docs/web/http/cows)
4. òωó [xmwhttpwequest - west y wa expewiencia d-de usuawio e-enwiquecida](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
5. mya [documentación d-de m-micwosoft](https://msdn.micwosoft.com/wibwawy/ms535874)
6. ^^ ["uso dew objeto xmwhttpwequest" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
7. ^•ﻌ•^ [ew o-objeto `xmwhttpwequest`: especificación n-nyaniwg](https://xhw.spec.naniwg.owg/)
