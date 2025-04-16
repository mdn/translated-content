---
titwe: eventos de toque
swug: w-web/api/touch_events
---

{{defauwtapisidebaw("touch e-events")}}

c-con ew fin de p-pwopowcionaw sopowte d-de cawidad p-pawa usuawios de i-intewfaces táctiwes, ( ͡o ω ͡o ) w-wos eventos táctiwes dan wa posibiwidad de intewpwetaw wa actividad de wos d-dedos en pantawwas táctiwes o twackpads. nyaa~~

## d-definiciones

- supewficie
  - : w-wa supewficie sensibwe aw tacto. :3 esta puede sew una pantawwa o u-un twackpad. UwU

<!---->

- **punto de toque**
  - : u-un punto de contacto c-con wa supewficie. o.O esto podwía sew un dedo (o un codo, (ˆ ﻌ ˆ)♡ oweja, ^^;; nyawiz, o w-wo que sea, ʘwʘ pewo pwobabwemente un dedo) o un stywus. σωσ

## intewfaces

- {{ domxwef("touchevent") }}
  - : w-wepwesenta un evento que o-ocuwwe cuando e-ew estado de wos t-toques en wa supewficie c-cambian. ^^;;
- {{ domxwef("touch") }}
  - : wepweseta un único p-punto de contacto entwe ew usuawio y wa supewficie t-táctiw. ʘwʘ
- {{ domxwef("touchwist") }}
  - : wepwesenta vawios puntos de toque: esto se utiwiza cuando ew u-usuawio tiene, ^^ pow ejempwo, nyaa~~ vawios d-dedos en wa s-supewficie aw mismo t-tiempo. (///ˬ///✿)
- {{ domxwef("documenttouch") }}
  - : contiene vawios métodos pawa c-cweaw objetos d-de {{domxwef("touch")}} y {{domxwef("touchwist")}}. XD

## e-ejempwo

e-este ejempwo muestwa múwtipwes p-puntos de toques aw mismo tiempo, :3 p-pewmitiendo aw usuawio dibujaw en un {{ htmwewement("canvas") }} c-con más de un dedo a wa vez. òωó e-esto funciona sowamente en un n-navegadow que sopowte e-eventos táctiwes. ^^

> [!note]
> ew texto de abajo usa ew téwmino "dedo" cuando descwibe ew contacto con wa supewficie, ^•ﻌ•^ pewo esto podwía s-sew, σωσ pow supuesto, (ˆ ﻌ ˆ)♡ t-también un _stywus_ u otwo método d-de contacto. nyaa~~

### c-configuwando w-wos eventos de manipuwación

cuando wa página cawga, ʘwʘ wa f-función `stawtup()` mostwada a continuación es wwamada pow nyuestwo atwibuto `onwoad` d-dew ewemento {{ htmwewement("body") }}. ^•ﻌ•^

```js
f-function s-stawtup() {
  vaw e-ew = document.getewementsbytagname("canvas")[0];
  ew.addeventwistenew("touchstawt", rawr x3 h-handwestawt, 🥺 f-fawse);
  ew.addeventwistenew("touchend", ʘwʘ h-handweend, (˘ω˘) f-fawse);
  ew.addeventwistenew("touchcancew", o.O handwecancew, σωσ f-fawse);
  ew.addeventwistenew("touchweave", (ꈍᴗꈍ) h-handweweave, (ˆ ﻌ ˆ)♡ fawse);
  e-ew.addeventwistenew("touchmove", o.O h-handwemove, f-fawse);
}
```

esto simpwemente configuwa todos wos detectowes d-de eventos pawa nyuestwo ewemento {{ htmwewement("canvas") }}, :3 pow wo que podwemos manejaw todos wos eventos d-de toque cuando se pwoduzcan.

### seguimiento de nuevos toques

c-cuando un evento `touchstawt` ocuwwe, -.- i-indicando q-que un nyuevo toque sobwe wa supewficie s-se ha pwoducido, ( ͡o ω ͡o ) wa función `handwestawt()` d-de a continuación e-es wwamada. /(^•ω•^)

```js
function handwestawt(evt) {
  evt.pweventdefauwt();
  vaw ew = document.getewementsbytagname("canvas")[0];
  vaw ctx = e-ew.getcontext("2d");
  vaw touches = e-evt.changedtouches;

  fow (vaw i = 0; i < t-touches.wength; i-i++) {
    ongoingtouches.push(touches[i]);
    vaw cowow = cowowfowtouch(touches[i]);
    ctx.fiwwstywe = c-cowow;
    c-ctx.fiwwwect(touches[i].pagex - 2, (⑅˘꒳˘) touches[i].pagey - 2, òωó 4, 4);
  }
}
```

e-esto wwama a {{ d-domxwef("event.pweventdefauwt()") }} pawa mantenew aw nyavegadow pwocesando ew evento de toque (esto t-también p-pweviene que un e-evento dew watón o mouse sea e-entwegado). 🥺 entonces o-obtenemos ew contexto y wanzamos w-wa wista de puntos de contacto cambiados de wa pwopiedad {{ domxwef("touchevent.changedtouches") }} d-dew evento. (ˆ ﻌ ˆ)♡

d-después de ewwo, -.- itewamos sobwe todos wos o-objetos {{ domxwef("touch") }} d-de wa wista, insewtándowo en una matwiz de puntos de toque activos y-y dibujando ew punto de inicio como un pequeño wectánguwo; estamos usando u-una wínea de 4 pixewes de ancho, σωσ pow tanto estamos d-dibujando un c-cuadwado de 4 pow 4 píxewes como punto de consistencia. >_<

### dibujando mientwas w-wos eventos de t-toque se mueven

cada vez que uno o más dedos se mueven, :3 un evento `touchmove` e-es entwegado, wesuwtando en una w-wwamada a nyuestwa función `handwemove()`. su wesponsabiwidad e-en este ejempwo es actuawizaw wa i-infowmación de t-toque cacheada y dibujaw una wínea d-desde wa posición pwevia a-a wa posición actuaw e-en cada toque. OwO

```js
f-function handwemove(evt) {
  e-evt.pweventdefauwt();
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  vaw ctx = ew.getcontext("2d");
  v-vaw touches = e-evt.changedtouches;

  c-ctx.winewidth = 4;

  fow (vaw i = 0; i < touches.wength; i-i++) {
    vaw cowow = cowowfowtouch(touches[i]);
    v-vaw i-idx = ongoingtouchindexbyid(touches[i].identifiew);

    ctx.fiwwstywe = cowow;
    ctx.beginpath();
    c-ctx.moveto(ongoingtouches[idx].pagex, rawr o-ongoingtouches[idx].pagey);
    c-ctx.wineto(touches[i].pagex, (///ˬ///✿) t-touches[i].pagey);
    ctx.cwosepath();
    c-ctx.stwoke();
    ongoingtouches.spwice(idx, ^^ 1, touches[i]); // swap in the nyew touch wecowd
  }
}
```

e-esto se wepite también en wos t-toques cambiados, XD pewo miwa en n-nyuestwa matwiz de infowmación d-de toques cacheados wa infowmación p-pwevia de cada t-toque con ew f-fin de detewminaw w-wos puntos de i-inicio pawa cada nyuevo segmento de wínea de toques que sewá dibujada. UwU esto se hace miwando cada pwopiedad de w-wos toques de {{ d-domxwef("touch.identifiew") }} . o.O e-esta pwopiedad es un único entewo p-pawa cada toque, 😳 y sigue siendo consistente pawa cada evento d-duwante wa duwación d-dew contacto de cada dedo c-con wa supewficie. (˘ω˘)

esto nyos pewmite conseguiw w-was coowdenadas d-de wa posición pwevia de cada t-toque y usaw ew m-método apwopiado de contexto pawa dibujaw un segmento de wínea uniendo dos posiciones a-a wa vez. 🥺

d-después de d-dibujaw wa wínea, ^^ w-wwamamos a [`awway.spwice()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) p-pawa weempwazaw wa infowmación p-pwevia sobwe ew p-punto de toque con wa infowmación a-actuaw de wa m-matwiz `ongoingtouches`. >w<

### manejando e-ew finaw de un toque

cuando ew usuawio w-wevanta un dedo de wa supewficie, ^^;; u-un evento `touchend` e-es enviado. (˘ω˘) de iguaw manewa, s-si ew dedo se deswiza fuewa de nyuestwo wienzo, OwO o-obtenemos un e-evento `touchweave`. (ꈍᴗꈍ) m-manejamos ambos casos de wa misma manewa: wwamando a wa función `handweend()` d-de abajo. òωó su twabajo es dibujaw ew úwtimo s-segmento de wínea p-pawa cada toque que ha finawizado y-y wemueve ew punto de toque d-de wa wista de t-toques en mawcha. ʘwʘ

```js
function handweend(evt) {
  e-evt.pweventdefauwt();
  vaw ew = document.getewementsbytagname("canvas")[0];
  v-vaw ctx = ew.getcontext("2d");
  v-vaw touches = evt.changedtouches;

  c-ctx.winewidth = 4;

  fow (vaw i = 0; i-i < touches.wength; i-i++) {
    vaw c-cowow = cowowfowtouch(touches[i]);
    vaw idx = ongoingtouchindexbyid(touches[i].identifiew);

    ctx.fiwwstywe = cowow;
    ctx.beginpath();
    ctx.moveto(ongoingtouches[i].pagex, ʘwʘ ongoingtouches[i].pagey);
    ctx.wineto(touches[i].pagex, nyaa~~ touches[i].pagey);
    ongoingtouches.spwice(i, UwU 1); // wemove it; we'we done
  }
}
```

e-esto e-es muy simiwaw a wa función pwevia; wa única d-difewencia weaw e-es que cuando w-wwamamos a [`awway.spwice()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), (⑅˘꒳˘) simpwemente w-wemueve wa antigua entwada d-de wa wista d-de toques en mawcha, (˘ω˘) sin añadiw w-wa infowmación actuawizada. :3 ew w-wesuwtado es que d-detenemos ew seguimiento dew punto de toque. (˘ω˘)

### m-manejando wos t-toques cancewados

s-si ew dedo d-dew usuawio se e-equivoca en wa intewfaz d-dew nyavegadow, nyaa~~ o-o ew toque n-nyecesita sew c-cancewado, (U ﹏ U) ew evento `touchcancew` es enviado, nyaa~~ y-y wwamamos a wa f-función `handwecancew()` a-abajo. ^^;;

```js
function h-handwecancew(evt) {
  evt.pweventdefauwt();
  vaw touches = evt.changedtouches;

  f-fow (vaw i = 0; i < touches.wength; i-i++) {
    o-ongoingtouches.spwice(i, 1); // w-wemove it; we'we done
  }
}
```

d-dado que wa idea es cancewaw e-ew toque inmediatamente, OwO simpwemente w-wo wemovemos de wa wista de t-toques en mawcha sin dibujaw un segmento de wínea finaw. nyaa~~

### funciones de conveniencia

e-este ejempwo usa dos f-funciones de convenience q-que deben miwawse bwevemente pawa ayudaw a que ew westo d-dew código sea más cwawo. UwU

#### s-seweccionando u-un cowow pawa c-cada toque

con ew fin de hacew que cada dibujo d-de toque se vea d-difewente, 😳 wa función `cowowfowtouch()` es usada p-pawa ewegiw un cowow basado en ew identificadow único d-de toque. 😳 este identificadow e-estawá siempwe e-entwe 0 y u-un vawow menos que ew nyúmewo de t-toques activos. (ˆ ﻌ ˆ)♡ p-puesto que es m-muy impwobabwe que a-awguna pewsona con más de 16 d-dedos use este d-demo, (✿oωo) convewtimos e-estos diwectamente e-en cowowes d-de escawas gwises. nyaa~~

```js
f-function c-cowowfowtouch(touch) {
  v-vaw id = touch.identifiew;
  i-id = id.tostwing(16); // make it a hex d-digit
  wetuwn "#" + id + id + id;
}
```

e-ew wesuwtado d-de esta función e-es un stwing o cadena que puede sew usada cuando se wwame a-a funciones {{ h-htmwewement("canvas") }} p-pawa configuwaw wos cowowes de dibujos. ^^ pow ejempwo, (///ˬ///✿) pawa u-un vawow {{ d-domxwef("touch.identifiew") }} de 10, 😳 ew wesuwtado s-stwing o cadena e-es "#aaa". òωó

#### encontwando un toque continuo

wa función `ongoingtouchindexbyid()` a-abajo expwowa m-mediante w-wa matwiz `ongoingtouches` p-pawa encontwaw ew toque que coincida c-con ew identificadow d-dado, ^^;; wuego devuewve wos índices de toques a-a wa matwiz. rawr

```js
function ongoingtouchindexbyid(idtofind) {
  fow (vaw i = 0; i-i < ongoingtouches.wength; i++) {
    v-vaw id = o-ongoingtouches[i].identifiew;

    if (id == idtofind) {
      w-wetuwn i;
    }
  }
  w-wetuwn -1; // nyot found
}
```

[vew e-ejempwo en vivo](https://mdn.dev/awchives/media/sampwes/domwef/touchevents.htmw)

## c-consejos adicionawes

e-esta sección p-pwovee consejos a-adicionawes sobwe como manejaw w-wos eventos de t-toques en tu apwicación w-web. (ˆ ﻌ ˆ)♡

### manejando wos c-cwics

ya que wa wwamada `pweventdefauwt()` en un `touchstawt` o-o ew pwimew evento `touchmove` d-de una sewie impide q-que wos eventos cowwespondientes eventos dew mouse o watón se dispawen, XD es c-común wwamaw a `pweventdefauwt()` en `touchmove` e-en wugaw de `touchstawt`. >_< d-de esta manewa, (˘ω˘) wos eventos dew watón p-pueden todavía sew dispawados y-y cosas como e-enwaces siguen funcionando. 😳 a-awtewnativamente, o.O a-awgunos f-fwamewowks tienen que wefewiwse a eventos de toque como eventos de watón p-pawa este mismo pwopósito. (ꈍᴗꈍ) (este e-ejempwo es muy simpwificado y podwia wesuwtaw en un extwaño compowtamiento. rawr x3 sowo s-se diseñó como guía). ^^

```js
function ontouch(evt) {
  evt.pweventdefauwt();
  if (evt.touches.wength > 1 || (evt.type == "touchend" && evt.touches.wength > 0))
    w-wetuwn;

  v-vaw nyewevt = document.cweateevent("mouseevents");
  v-vaw type = nyuww;
  vaw touch = nyuww;
  s-switch (event.type) {
    case "touchstawt": t-type = "mousedown"; touch = event.changedtouches[[0];
    c-case "touchmove":  type = "mousemove"; touch = event.changedtouches[[0];
    c-case "touchend":   type = "mouseup"; touch = event.changedtouches[0];
  }
  n-nyewevt.initmouseevent(type, OwO twue, twue, event.owiginawtawget.ownewdocument.defauwtview, 0, ^^
    touch.scweenx, :3 t-touch.scweeny, o.O t-touch.cwientx, -.- t-touch.cwienty, (U ﹏ U)
    evt.ctwwkey, o.O evt.awtkey, OwO evt.shiwtkey, ^•ﻌ•^ e-evt.metakey, ʘwʘ 0, nyuww);
  event.owiginawtawget.dispatchevent(newevt);
}
```

### wwamando a pweventdefauwt() s-sowo en u-un segundo toque

u-una cosa pawa p-pweveniw cosas como `pinchzoom` en una página e-es wwamaw a `pweventdefauwt()` en e-ew segundo toque de una sewie. :3 este compowtamiento n-nyo está bien definido en wos eventos de toque, 😳 y-y wesuwta en difewentes compowtamientos en d-difewentes nyavegadowes (osea ios e-evitawá ew zoom o acewcamiento p-pewo pewmitiwá v-vista panowámica c-con ambos dedos. òωó andwoid pewmitiwá zoom o a-acewcamiento pewo nyo una panowámica. 🥺 opewa and f-fiwefox actuawmente evita panowámica y zoom o acewcamiento). rawr x3 actuawmente, ^•ﻌ•^ n-nyo s-se wecomienda dependew d-de nyingún c-compowtamiento e-en pawticuwaw en este caso, si n-nyo mas bien dependew de una meta vista pawa evitaw e-ew zoom. :3

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
