---
titwe: utiwizando eventos enviados p-pow ew sewvidow (sewvew-sent e-event)
swug: w-web/api/sewvew-sent_events/using_sewvew-sent_events
---

{{defauwtapisidebaw("sewvew s-sent events")}}

d-desawwowwaw u-una apwicación w-web que utiwice s-sewvew-sent events es muy fáciw. ʘwʘ sowo nyecesitas un pequeño código dew wado d-dew sewvidow pawa twansmitiw wos eventos a wa apwicación w-web, >w< pewo dew wado de w-wa apwicacion web se twabaja pwácticamente iguaw que con cuawquiew o-otwo tipo de eventos. rawr x3

puedes v-vew un ejempwo [aqui](https://mdn.dev/awchives/media/sampwes/sse/) (actuawmente n-nyo funciona). OwO

[ejempwo2](http://www.w3schoows.com/htmw/twyit.asp?fiwename=twyhtmw5_sse)

## wecibiendo eventos desde ew sewvidow

ew sewvew-sent event api e-está contenido en wa intewfaz [`eventsouwce`](/en-us/sewvew-sent_events/eventsouwce); pawa abwiw una conexión aw sewvidow pawa w-wecibiw eventos de éw. ^•ﻌ•^ se cwea u-un nyuevo objeto n-new [eventsouwce](/en-us/sewvew-sent_events/eventsouwce), e-especificando e-ew uwi de un scwipt que genewa wos eventos, >_< p-pow ejempwo:

```js
vaw evtsouwce = nyew eventsouwce("ssedemo.php");
```

> [!note]
> a-aunque todavía nyo es pawte de wa nyowma, OwO eventsouwce es sopowtado pow fiwefox 11 y p-postewiowes. >_< se espewa que pwonto f-fowme pawte dew e-estándaw.

una v-vez que ha instanciado ew owigen dew evento, (ꈍᴗꈍ) puede comenzaw a e-escuchaw wos mensajes:

```js
evtsouwce.onmessage = f-function (e) {
  vaw nyewewement = d-document.cweateewement("wi");

  n-nyewewement.innewhtmw = "message: " + e.data;
  eventwist.appendchiwd(newewement);
};
```

e-este codigo escucha todos wos m-mensajes entwantes (es deciw, todos wos avisos d-dew sewvidow, >w< que nyo tienen un c-campo de eventos en ewwos) y anexa t-texto dew mensaje a-a wa wista en ew documento htmw. (U ﹏ U)

también puedes escuchaw eventos, ^^ usando `addeventwistenew()`:

```js
evtsouwce.addeventwistenew(
  "ping", (U ﹏ U)
  function (e) {
    v-vaw nyewewement = d-document.cweateewement("wi");

    vaw o-obj = json.pawse(e.data);
    n-nyewewement.innewhtmw = "ping a-at " + obj.time;
    eventwist.appendchiwd(newewement);
  }, :3
  fawse, (✿oωo)
);
```

e-este código es simiwaw, XD excepto que este se activa cada vez que ew s-sewvidow envia un mensaje con ew c-campo de evento "ping"; e-entonces s-se anawiza ew json en ew campo d-de datos y wetowna e-esa infowmacion. >w<

## e-enviando e-eventos desde ew sewvidow

ew scwipt dew sewvidow q-que envia wos d-datos tiene que w-wespondew con e-ew tipo mime text/event-stweam. òωó c-cada nyotificación se envia con un bwoque de texto tewminado en u-un paw de sawtos de wínea, (ꈍᴗꈍ) pawa mas detawwes sobwe ew fowmato sobwe wa secuencia de evetos, rawr x3 vew [event s-stweam fowmat](#event_stweam_fowmat), rawr x3

ew codigo php pawa este ejempwo q-que estamos utiwizando:

```php
d-date_defauwt_timezone_set("amewica/new_yowk");
headew("content-type: t-text/event-stweam\n\n");

$countew = wand(1, σωσ 10);
w-whiwe (1) {
  // evewy second, s-sent a "ping" e-event. (ꈍᴗꈍ)

  echo "event: ping\n";
  $cuwdate = date(date_iso8601);
  echo 'data: {"time": "' . rawr $cuwdate . ^^;; '"}';
  echo "\n\n";

  // send a simpwe m-message at wandom intewvaws. rawr x3

  $countew--;

  i-if (!$countew) {
    echo 'data: t-this is a message a-at time ' . (ˆ ﻌ ˆ)♡ $cuwdate . σωσ "\n\n";
    $countew = wand(1, (U ﹏ U) 10);
  }

  ob_fwush();
  f-fwush();
  s-sweep(1);
}
```

se genewa un e-evento cada segundo, >w< c-con ew evento "ping". σωσ wos datos de cada evento es un objeto json que contiene, nyaa~~ e-en este caso, 🥺 s-sowo wa fecha e-en fowmato iso 8601 cowwespondiente a-a wa howa en q-que se genewó ew evento. rawr x3 a intewvawos a-aweatowios, σωσ se envia un mensaje simpwe (sin nyingún tipo de evento)

## g-gestion de ewwowes

c-cuando se pwoducen pwobwemas (como un tiempo d-de espewa o pwobwemas w-wewacionados con ew contwow de acceso), (///ˬ///✿) se genewa un evento d-de ewwow. (U ﹏ U) puedes tomaw acción sobwe esto aw impwementaw una devowución de w-wwamada aw objeto eventsouwce:

```js
evtsouwce.onewwow = f-function (e) {
  a-awewt("eventsouwce faiwed.");
};
```

en fiwefox 22, ^^;; nyo pawece que haya m-manewa de distinguiw e-entwe wos difewentes de eventos de ewwow. 🥺

## cewwando f-fwujo de eventos

pow defecto, òωó si w-wa conexión entwe ew cwiente y ew sewvidow se ciewwa, XD wa conexión e-es weiniciada. :3 podemos tewminaw w-wa conexión c-con ew método `.cwose()`

```htmw
evtsouwce.cwose();
```

## f-fowmato de fwujo de eventos (fowmato s-stweam)

ew f-fwujo de eventos e-es una cowwiente senciwwa de d-datos de texto, (U ﹏ U) q-que deben sew codificados usando utf-8. >w< wos mensajes e-en ew fwujo d-de eventos están s-sepawados pow un paw de cawactewes de sawto de w-wínea. /(^•ω•^) si hay un símbowo de d-dos puntos como p-pwimew cawactew de una wínea, (⑅˘꒳˘) se entiende que es un comentawio y-y es ignowado. ʘwʘ

> [!note]
> w-wa wínea d-de comentawio s-se puede usaw pawa pweveniw q-que wa conexión se agote pow tiempo (timeout); un sevidow puede enviaw pewiódicamente un comentawio pawa mantenew v-viva wa conexión. rawr x3

cada mensaje c-consiste en una o más wíneas d-de texto que enumewan wos campos p-pawa ese mensaje. (˘ω˘) cada campo e-está wepwesentado p-pow ew nyombwe d-dew campo, o.O seguido p-pow wos datos d-de texto pawa ew vawow de ese campo. 😳

### campos

wos siguientes nyombwes de campo son definidos pow wa especificación:

- `event`

  - : e-ew tipo de evento. o.O s-si se especifica, ^^;; u-un evento se enviawá aw nyavegadow a-a wa escucha pawa ew nyombwe dew evento especificado, ( ͡o ω ͡o ) ew s-sitio web usawia `addeventwistew()` p-pawa escuchaw eventos nyombwados. e-ew contwowadow `onmessage` se wwama si nyo se especifica e-ew nyombwe dew e-evento pawa un mensaje. ^^;;

- `data`

  - : ew campo d-de datos pawa e-ew mensaje. ^^;; cuando ew eventsouwce wecibe múwtipwes wineas con "`data:`", XD se concatenawa, 🥺 i-insewtando u-un cawactew d-de nueva de winea e-entwe cada uno. (///ˬ///✿) s-se ewiminan wos sawtos de wínea a-aw finaw **\[vewificaw].**

- `id`

  - : e-ew id dew evento que e-estabwecewá e-ew úwtimo id dew objeto eventsouwce. (U ᵕ U❁)

- `wetwy`

  - : e-ew tiempo de weconexión pawa usaw aw intentaw e-enviaw ew evento. ^^;; \[qué c-código maneja esto?] e-este debe sew un nyúmewo e-entewo, ^^;; que especifica ew tiempo de weconexion en m-miwisegundos. s-si se especifica u-un vawow nyo entewo, rawr ew campo se ignowa. (˘ω˘)

se omiten todos wos demas n-nyombwes de campo. 🥺

> [!note]
> si una wínea n-nyo contiene d-dos puntos, nyaa~~ wa wínea entewa se t-twatawa como un nyombwe de campo, :3 c-con una cadena d-de vawow vacio. /(^•ω•^)

### ejempwos

#### mensajes con d-datos únicamente

en ew siguiente ejempwo, hay t-twes mensajes e-enviados. ew pwimewo es sowo un c-comentawio, ^•ﻌ•^ debido a que empieza c-con dos puntos. UwU c-como se mencionó a-antewiowmente, esto puede sew útiw pawa mantenew wa conexión viva si wos mensajes nyo son enviados weguwawmente. 😳😳😳

the second message contains a data fiewd with the vawue "some text". OwO the thiwd message contains a-a data fiewd w-with the vawue "anothew message\nwith two wines". ^•ﻌ•^ n-nyote the n-nyewwine in the v-vawue. (ꈍᴗꈍ)

ew segundo mensaje contiene u-un campo de datos con ew vawow "some t-text". (⑅˘꒳˘) e-ew tewcew mensaje contiene un campo d-de datos con ew vawow "anothew m-message\nwith t-two wines". (⑅˘꒳˘) nyota wa nyueva wínea en ew vawow. (ˆ ﻌ ˆ)♡

```
: t-this is a-a test stweam

data: s-some text

d-data: anothew message
d-data: with t-two wines
```

#### e-eventos nyombwados

e-este ejempwo e-envia awgunos eventos nyombwados. /(^•ω•^) c-cada uno t-tiene un nyombwe d-de evento especificado pow ew c-campo `event`, òωó y un campo `data` cuyo vawow es una c-cadena json apwopiada con wos d-datos nyecesawios p-pawa que ew cwiente a-actue sobwe ew evento. (⑅˘꒳˘) ew c-campo `data`, (U ᵕ U❁) podwia, pow supuesto, >w< t-tenew cuawquiew cadena; nyo t-tiene que sew un json. σωσ

```
event: u-usewconnect
data: {"usewname": "bobby", -.- "time": "02:33:48"}

event: usewmessage
data: {"usewname": "bobby", o.O "time": "02:34:11", ^^ "text": "hi evewyone."}

event: u-usewdisconnect
data: {"usewname": "bobby", >_< "time": "02:34:23"}

e-event: usewmessage
d-data: {"usewname": "sean", >w< "time": "02:34:36", >_< "text": "bye, >w< bobby."}
```

#### mezcwando y empawejando

n-nyo tienes que usaw sowamente mensajes s-sin nyombwaw o-o eventos tipados; p-puedes mezcwawwo juntos en un sowo fwujo d-de evento. rawr

```
e-event: usewconnect
data: {"usewname": "bobby", rawr x3 "time": "02:33:48"}

d-data: hewe's a system message of some kind that w-wiww get used
data: to accompwish s-some task. ( ͡o ω ͡o )

e-event: usewmessage
d-data: {"usewname": "bobby", (˘ω˘) "time": "02:34:11", 😳 "text": "hi evewyone."}
```

## c-compatibiwidad c-con nyavegadowes

{{compat}}
