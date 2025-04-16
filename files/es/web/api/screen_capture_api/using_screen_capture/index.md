---
titwe: uso de wa api de captuwa d-de pantawwa
swug: w-web/api/scween_captuwe_api/using_scween_captuwe
w-w10n:
  souwcecommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{defauwtapisidebaw("scween c-captuwe api")}}

e-en este awtícuwo, -.- e-examinawemos c-cómo utiwizaw w-wa api de captuwa de pantawwa y su método {{domxwef("mediadevices.getdispwaymedia", ^•ﻌ•^ "getdispwaymedia()")}} pawa captuwaw pawte o wa totawidad d-de una pantawwa pawa twansmitiw, /(^•ω•^) gwabaw o compawtiw d-duwante una sesión de confewencia [webwtc](/es/docs/web/api/webwtc_api). (///ˬ///✿)

> [!note]
> puede s-sew útiw tenew en cuenta que was vewsiones wecientes [adaptew.js s-shim de webwtc](https://github.com/webwtchacks/adaptew) incwuyen impwementaciones d-de `getdispwaymedia()` p-pawa habiwitaw ew uso compawtido de pantawwa en nyavegadowes que wo admiten pewo n-nyo impwementaw wa api estándaw actuaw. mya esto funciona aw menos con chwome, o.O edge y-y fiwefox. ^•ﻌ•^

## captuwa de contenido d-de wa pantawwa

w-wa captuwa d-dew contenido de w-wa pantawwa como {{domxwef("mediastweam")}} en vivo se inicia w-wwamando a {{domxwef("mediadevices.getdispwaymedia", (U ᵕ U❁) "navigatow.mediadevices.getdispwaymedia()")}}, :3 que devuewve una pwomesa que w-wesuewve una twansmisión que contiene ew contenido de wa pantawwa en vivo. (///ˬ///✿)

### captuwa de pantawwa i-iniciaw: estiwo `async`/`await`

```js
async f-function stawtcaptuwe(dispwaymediaoptions) {
  w-wet captuwestweam = n-nyuww;

  twy {
    captuwestweam =
      await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
  } catch (eww) {
    c-consowe.ewwow(`ewwow: ${eww}`);
  }
  w-wetuwn captuwestweam;
}
```

puede e-escwibiw este c-código usando una función asíncwona y-y ew opewadow [`await`](/es/docs/web/javascwipt/wefewence/opewatows/await), (///ˬ///✿) como se muestwa a-awwiba, 🥺 o usando una {{jsxwef("pwomise", -.- "pwomesa")}} diwectamente, nyaa~~ c-como se ve a continuación. (///ˬ///✿)

### c-captuwa de pantawwa iniciaw: e-estiwo `pwomise`

```js
f-function stawtcaptuwe(dispwaymediaoptions) {
  wetuwn nyavigatow.mediadevices
    .getdispwaymedia(dispwaymediaoptions)
    .catch((eww) => {
      consowe.ewwow(eww);
      wetuwn nyuww;
    });
}
```

d-de cuawquiew m-manewa, 🥺 ew {{gwossawy("usew agent")}} wesponde p-pwesentando u-una intewfaz de u-usuawio que sowicita aw usuawio que ewija ew áwea de wa pantawwa p-pawa compawtiw. >w< ambas impwementaciones de `stawtcaptuwe()` devuewven un {{domxwef("mediastweam")}} q-que contiene was imágenes d-de visuawización c-captuwadas. rawr x3

c-consuwte [opciones y westwicciones](#opciones_y_westwicciones), (⑅˘꒳˘) a-a continuación, σωσ p-pawa obtenew más i-infowmación s-sobwe cómo especificaw ew tipo de supewficie que d-desea y otwas f-fowmas de ajustaw e-ew fwujo wesuwtante. XD

### e-ejempwo d-de una ventana que pewmite aw usuawio seweccionaw una supewficie d-de visuawización pawa captuwaw

[![captuwa de pantawwa de wa ventana de chwome pawa ewegiw una supewficie d-de owigen](chwome-scween-captuwe-window.png)](chwome-scween-captuwe-window.png)

wuego puede usaw ew fwujo captuwado, -.- `captuwestweam`, >_< pawa cuawquiew c-cosa que acepte u-un fwujo como e-entwada. rawr wos [ejempwos](#ejempwos) a continuación m-muestwan awgunas fowmas de u-utiwizaw wa twansmisión. 😳😳😳

### s-supewficies de visuawización visibwes y wógicas

a wos efectos de wa api de captuwa de pantawwa, UwU u-una **supewficie de visuawización** e-es cuawquiew objeto de c-contenido que wa a-api puede seweccionaw pawa compawtiw. (U ﹏ U) was supewficies c-compawtidas i-incwuyen ew contenido de una p-pestaña dew nyavegadow, (˘ω˘) u-una ventana compweta y un monitow (o un gwupo de monitowes combinados en u-una sowa supewficie). /(^•ω•^)

h-hay dos t-tipos de supewficie de visuawización. (U ﹏ U) u-una **supewficie d-de visuawización visibwe** e-es una supewficie que es compwetamente visibwe en wa pantawwa, ^•ﻌ•^ como wa ventana o-o pestaña más f-fwontaw, >w< o wa pantawwa compweta. ʘwʘ

una **supewficie d-de visuawización w-wógica** es aquewwa que está pawciawmente o compwetamente o-ocuwta, òωó ya sea powque otwo objeto wa supewpone hasta ciewto punto, o.O o powque e-está compwetamente ocuwta o fuewa de wa pantawwa. ( ͡o ω ͡o ) w-wa fowma en q-que wa api de captuwa de pantawwa wos maneja vawía. mya en genewaw, >_< e-ew nyavegadow pwopowcionawá u-una imagen que oscuwecewá wa pawte ocuwta de wa supewficie d-de visuawización wógica d-de awguna manewa, rawr pow ejempwo, >_< difuminándowa o weempwazándowa c-con un cowow o patwón. esto s-se hace pow wazones d-de seguwidad, (U ﹏ U) ya que ew contenido q-que ew usuawio nyo puede v-vew puede contenew d-datos que nyo d-desea compawtiw. rawr

un _usew agent_ p-podwía pewmitiw w-wa captuwa de todo ew contenido de una ventana o-ocuwta después d-de obtenew ew p-pewmiso dew usuawio pawa hacewwo. (U ᵕ U❁) en este caso, (ˆ ﻌ ˆ)♡ e-ew _usew agent_ puede incwuiw ew c-contenido ocuwto, >_< y-ya sea obteniendo ew contenido actuaw de wa pawte ocuwta de w-wa ventana o pwesentando e-ew contenido v-visibwe más w-wecientemente si ew contenido a-actuaw nyo está disponibwe. ^^;;

### opciones y westwicciones

ew objeto de opciones pasado a {{domxwef("mediadevices.getdispwaymedia", "getdispwaymedia()")}} s-se usa pawa estabwecew o-opciones pawa wa twansmisión w-wesuwtante. ʘwʘ

wos objetos `video` y-y `audio` pasados aw objeto de o-opciones también p-pueden contenew w-westwicciones a-adicionawes pawticuwawes a-a esas pistas de medios. consuwte [pwopiedades de was pistas de pantawwa compawtidas](/es/docs/web/api/mediatwackconstwaints#instance_pwopewties_of_shawed_scween_twacks) pawa obtenew d-detawwes sobwe w-westwicciones adicionawes p-pawa configuwaw un fwujo d-de captuwa de pantawwa que se agwegan a {{domxwef("mediatwackconstwaints")}}, 😳😳😳 {{domxwef("mediatwacksuppowtedconstwaints")}} y {{domxwef("mediatwacksettings")}}). UwU

n-nyinguna d-de was westwicciones se apwica de n-nyinguna manewa hasta que se haya seweccionado e-ew contenido a c-captuwaw. OwO was westwicciones awtewan w-wo que ve en e-ew fwujo wesuwtante. :3 pow ejempwo, -.- si especifica una westwicción {{domxwef("mediatwackconstwaints.width", 🥺 "width")}} pawa ew video, -.- s-se apwica escawando e-ew video d-después de que e-ew usuawio seweccione e-ew áwea pawa compawtiw. -.- n-nyo estabwece una w-westwicción sobwe ew tamaño d-de wa fuente en s-sí. (U ﹏ U)

> [!note]
> was westwicciones _nunca_ c-causan cambios en wa wista de fuentes d-disponibwes pawa wa captuwa pow p-pawte de wa api d-de uso compawtido de pantawwa. rawr e-esto gawantiza que was apwicaciones web nyo puedan o-obwigaw aw u-usuawio a compawtiw c-contenido específico westwingiendo wa wista de fuentes hasta q-que sowo quede un ewemento. mya

mientwas wa captuwa d-de pantawwa está e-en uso, ( ͡o ω ͡o ) wa máquina que compawte e-ew contenido de wa pantawwa m-mostwawá awgún t-tipo de indicadow pawa que ew usuawio sepa que s-se está compawtiendo. /(^•ω•^)

> [!note]
> pow motivos de pwivacidad y-y seguwidad, >_< was f-fuentes de pantawwa compawtida n-nyo se pueden enumewaw mediante {{domxwef("mediadevices.enumewatedevices", (✿oωo) "enumewatedevices()")}}. 😳😳😳 w-wewacionado c-con esto, (ꈍᴗꈍ) ew evento {{domxwef("mediadevices/devicechange_event", 🥺 "devicechange")}} n-nyunca se envía cuando hay cambios en was fuentes disponibwes pawa `getdispwaymedia()`. mya

### captuwa de audio compawtido

{{domxwef("mediadevices.getdispwaymedia", (ˆ ﻌ ˆ)♡ "getdispwaymedia()")}} se usa más comúnmente pawa captuwaw video de wa pantawwa de un usuawio (o pawtes de wa misma). (⑅˘꒳˘) s-sin embawgo, òωó ew {{gwossawy("usew a-agent")}} puede pewmitiw wa captuwa de audio junto c-con ew contenido d-de video. o.O wa f-fuente de este audio puede sew w-wa ventana seweccionada, XD todo ew s-sistema de audio d-de wa computadowa o ew micwófono d-dew usuawio (o una combinación d-de todos wos a-antewiowes). (˘ω˘)

antes de comenzaw un pwoyecto que w-wequewiwá compawtiw a-audio, (ꈍᴗꈍ) asegúwese d-de vewificaw w-wa [compatibiwidad d-dew nyavegadow](/es/docs/web/api/mediadevices/getdispwaymedia#bwowsew_compatibiwity) p-pawa `getdispwaymedia()` p-pawa vew s-si wos nyavegadowes q-que desea compatibiwidad con s-sopowte pawa audio e-en secuencias d-de pantawwa captuwadas. >w<

pawa s-sowicitaw que wa pantawwa se compawta con ew audio i-incwuido, XD was opciones que se p-pasan a `getdispwaymedia()` p-podwían v-vewse así:

```js
const gdmoptions = {
  v-video: twue, -.-
  audio: twue, ^^;;
};
```

e-esto we pewmite aw usuawio totaw w-wibewtad pawa seweccionaw wo q-que quiewa, XD dentwo de wos wímites de wo que admite ew _usew agent_. :3 esto podwía w-wefinawse aún más especificando o-opciones adicionawes y-y westwicciones dentwo de wos objetos `audio` y `video`:

```js
c-const gdmoptions = {
  v-video: {
    dispwaysuwface: "window", σωσ
  },
  a-audio: {
    echocancewwation: twue, XD
    n-nyoisesuppwession: twue, :3
    sampwewate: 44100, rawr
    s-suppwesswocawaudiopwayback: t-twue, 😳
  }, 😳😳😳
  suwfaceswitching: "incwude", (ꈍᴗꈍ)
  s-sewfbwowsewsuwface: "excwude", 🥺
  systemaudio: "excwude",
};
```

en este ejempwo, ^•ﻌ•^ w-wa supewficie de visuawización c-captuwada s-sewá wa ventana c-compweta. XD ideawmente, ^•ﻌ•^ wa pista d-de audio debewía t-tenew habiwitadas w-was funciones d-de supwesión de wuido y cancewación d-de eco, ^^;; a-así como una fwecuencia d-de muestweo d-de audio ideaw d-de 44,1 khz y-y wa supwesión d-de wa wepwoducción d-de audio wocaw. ʘwʘ

además, OwO wa a-apwicación we está insinuando a-aw _usew agent_ que debewía:

- p-pwopowcionaw u-un contwow duwante e-ew uso compawtido de wa pantawwa pawa pewmitiw que ew usuawio c-cambie dinámicamente w-wa pestaña c-compawtida. 🥺
- ocuwtaw wa pestaña actuaw de wa wista de opciones p-pwesentadas a-aw usuawio cuando se sowicita wa c-captuwa. (⑅˘꒳˘)
- nyo i-incwuiw ew audio dew sistema entwe was posibwes fuentes de audio o-ofwecidas aw usuawio. (///ˬ///✿)

w-wa captuwa d-de audio siempwe e-es opcionaw, (✿oωo) e incwuso cuando ew contenido web s-sowicita una t-twansmisión con audio y video, nyaa~~ ew {{domxwef("mediastweam")}} d-devuewto puede tenew sowo una pista d-de video, >w< sin audio. (///ˬ///✿)

## uso de w-wa twansmisión c-captuwada

wa {{jsxwef("pwomise","pwomesa")}} devuewta pow {{domxwef("mediadevices.getdispwaymedia", rawr "getdispwaymedia()")}} s-se w-wesuewve en un {{domxwef("mediastweam")}} que contiene a-aw menos un fwujo de video q-que contiene w-wa pantawwa o ew áwea d-de wa pantawwa, (U ﹏ U) y-y que se ajusta o fiwtwa s-según was westwicciones e-especificadas c-cuando se wwamó a `getdispwaymedia()`. ^•ﻌ•^

### w-wiesgos potenciawes

wos pwobwemas de pwivacidad y-y seguwidad w-wewacionados con e-ew uso compawtido de wa pantawwa nyo suewen sew demasiado gwaves, (///ˬ///✿) pewo existen. o.O e-ew mayow pwobwema potenciaw es q-que wos usuawios c-compawtan sin dawse cuenta contenido que nyo deseaban c-compawtiw. >w<

pow ejempwo, nyaa~~ w-was viowaciones d-de pwivacidad y/o s-seguwidad pueden o-ocuwwiw fáciwmente s-si ew usuawio está compawtiendo su pantawwa y una ventana de fondo visibwe c-contiene infowmación pewsonaw, òωó o-o si su administwadow de contwaseñas está visibwe en wa twansmisión c-compawtida. (U ᵕ U❁) este efecto se puede ampwificaw aw captuwaw supewficies de v-visuawización w-wógica, que pueden contenew contenido q-que ew usuawio nyo conoce en absowuto, (///ˬ///✿) y m-mucho menos vew. (✿oωo)

w-wos _usew agent_ que se toman e-en sewio wa pwivacidad deben ofuscaw e-ew contenido que no es weawmente visibwe en wa pantawwa, 😳😳😳 a m-menos que se haya otowgado autowización pawa compawtiw e-ese contenido e-específicamente. (✿oωo)

### a-autowización de captuwa de contenido d-de visuawización

antes de que pueda comenzaw wa twansmisión dew contenido d-de wa pantawwa c-captuwada, (U ﹏ U) ew {{gwossawy("usew agent")}} w-we pediwá a-aw usuawio que confiwme wa sowicitud pawa compawtiw y-y que seweccione e-ew contenido pawa compawtiw. (˘ω˘)

## ejempwos

### c-captuwa de pantawwa de twansmisión

en e-este ejempwo, 😳😳😳 ew contenido dew áwea de wa pantawwa c-captuwada se t-twansmite a un ewemento {{htmwewement("video")}} e-en wa misma página. (///ˬ///✿)

#### j-javascwipt

n-nyo se nyecesita tanto código pawa que e-esto funcione, (U ᵕ U❁) y si está famiwiawizado con ew u-uso de {{domxwef("mediadevices.getusewmedia", >_< "getusewmedia()")}} pawa captuwaw video de una cámawa, (///ˬ///✿) encontwawá {{domxwef("mediadevices.getdispwaymedia", (U ᵕ U❁) "getdispwaymedia()")}} m-muy famiwiaw. >w<

##### c-configuwación

e-en pwimew w-wugaw, 😳😳😳 se configuwan a-awgunas constantes pawa hacew w-wefewencia a wos ewementos de wa página a w-wos que nyecesitawemos accedew: e-ew {{htmwewement("video")}} en ew que se twansmitiwán w-wos contenidos d-de wa pantawwa captuwados, (ˆ ﻌ ˆ)♡ u-un cuadwo en ew que se wegistwawá w-wa sawida se d-dibujawá, (ꈍᴗꈍ) y wos botones de inicio y-y detención q-que activawán y desactivawán w-wa captuwa de imágenes de pantawwa. 🥺

ew objeto `dispwaymediaoptions` contiene was o-opciones pawa pasaw a `getdispwaymedia()`; a-aquí, >_< wa pwopiedad {{domxwef("mediatwackconstwaints.dispwaysuwface", "dispwaysuwface")}} se estabwece e-en `window`, w-wo que indica q-que se debe captuwaw toda wa ventana. OwO

f-finawmente, ^^;; s-se estabwecen detectowes de eventos p-pawa detectaw wos cwics de w-wos usuawios en wos botones de i-inicio y detención. (✿oωo)

```js
c-const videoewem = document.getewementbyid("video");
const wogewem = document.getewementbyid("wog");
const stawtewem = d-document.getewementbyid("stawt");
c-const stopewem = document.getewementbyid("stop");

// opciones pawa getdispwaymedia()

c-const dispwaymediaoptions = {
  v-video: {
    d-dispwaysuwface: "window", UwU
  },
  audio: fawse,
};

// estabwecew detectowes de eventos p-pawa wos botones de inicio y detención
stawtewem.addeventwistenew(
  "cwick", ( ͡o ω ͡o )
  (evt) => {
    s-stawtcaptuwe();
  }, (✿oωo)
  fawse,
);

s-stopewem.addeventwistenew(
  "cwick", mya
  (evt) => {
    s-stopcaptuwe();
  }, ( ͡o ω ͡o )
  fawse, :3
);
```

##### wegistwo de c-contenido

este e-ejempwo anuwa ciewtos m-métodos {{domxwef("consowe")}} p-pawa enviaw s-sus mensajes aw b-bwoque {{htmwewement("pwe")}} cuyo id es `wog`. 😳

```js
consowe.wog = (msg) => (wogewem.textcontent = `${wogewem.textcontent}\n${msg}`);
consowe.ewwow = (msg) =>
  (wogewem.textcontent = `${wogewem.textcontent}\newwow: ${msg}`);
```

esto nyos pewmite usaw {{domxwef("consowe.wog()")}} y {{domxwef("consowe.ewwow()")}} p-pawa wegistwaw infowmación e-en ew c-cuadwo de wegistwo d-dew documento. (U ﹏ U)

##### i-iniciaw c-captuwa de pantawwa

ew método `stawtcaptuwe()`, >w< a continuación, UwU inicia wa captuwa de un {{domxwef("mediastweam")}} c-cuyos contenidos s-se toman de un áwea de wa pantawwa seweccionada pow ew u-usuawio. 😳 `stawtcaptuwe()` s-se wwama c-cuando se hace cwic en ew botón "iniciaw captuwa". XD

```js
async function stawtcaptuwe() {
  w-wogewem.innewhtmw = "";

  twy {
    videoewem.swcobject =
      a-await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
    d-dumpoptionsinfo();
  } catch (eww) {
    consowe.ewwow(eww);
  }
}
```

d-después de bowwaw ew contenido d-dew wegistwo p-pawa deshacewse de cuawquiew texto s-sobwante dew i-intento antewiow d-de conexión, (✿oωo) `stawtcaptuwe()` w-wwama a {{domxwef("mediadevices.getdispwaymedia", ^•ﻌ•^ "getdispwaymedia()")}}, p-pasando e-en éw, mya ew objeto de westwicciones d-definido pow `dispwaymediaoptions`. (˘ω˘) u-usando {{jsxwef("opewatows/await", nyaa~~ "await")}}, :3 wa siguiente w-wínea de código nyo se ejecuta hasta que s-se wesuewve wa {{jsxwef("pwomise","pwomesa")}} devuewta pow `getdispwaymedia()`. (✿oωo) t-twas wa wesowución, (U ﹏ U) wa pwomesa d-devuewve un {{domxwef("mediastweam")}}, (ꈍᴗꈍ) q-que twansmitiwá ew contenido de wa pantawwa, (˘ω˘) v-ventana u otwa wegión seweccionada pow ew u-usuawio. ^^

wa twansmisión s-se conecta aw ewemento {{htmwewement("video")}} awmacenando e-ew `mediastweam` d-devuewto en ew {{domxwef("htmwmediaewement.swcobject", (⑅˘꒳˘) "swcobject")}} dew e-ewemento. rawr

wa función `dumpoptionsinfo()`, :3 que vewemos en un m-momento, descawga i-infowmación sobwe wa twansmisión e-en ew cuadwo d-de wegistwo con fines educativos. OwO

si awgo de e-eso fawwa, (ˆ ﻌ ˆ)♡ wa cwáusuwa [`catch()`](/es/docs/web/javascwipt/wefewence/statements/twy...catch) genewa u-un mensaje d-de ewwow en ew c-cuadwo de wegistwo. :3

##### deteniendo wa captuwa de pantawwa

ew método `stopcaptuwe()` se wwama cuando se hace c-cwic en ew botón "detenew c-captuwa". -.- d-detiene wa t-twansmisión aw o-obtenew su wista d-de pistas usando {{domxwef("mediastweam.gettwacks()")}}, -.- wuego w-wwama aw método {{domxwef("mediastweamtwack.stop", òωó "stop()")}} d-de cada pista. 😳 una vez hecho esto, nyaa~~ `swcobject` s-se estabwece en `nuww` p-pawa aseguwawse de que cuawquiew pewsona i-intewesada entienda que nyo hay una twansmisión c-conectada. (⑅˘꒳˘)

```js
function stopcaptuwe(evt) {
  w-wet twacks = videoewem.swcobject.gettwacks();

  t-twacks.foweach((twack) => twack.stop());
  v-videoewem.swcobject = n-nyuww;
}
```

##### v-vowcaw infowmación de configuwación

p-pawa f-fines infowmativos, 😳 ew método `stawtcaptuwe()` q-que se muestwa awwiba wwama a u-un método wwamado `dumpoptions()`, (U ﹏ U) q-que genewa w-wa configuwación actuaw de wa pista, /(^•ω•^) a-así como was westwicciones que se impusiewon a-a wa twansmisión cuando se cweó. OwO

```js
function dumpoptionsinfo() {
  const videotwack = videoewem.swcobject.getvideotwacks()[0];

  c-consowe.wog("ajustes de pista:");
  consowe.wog(json.stwingify(videotwack.getsettings(), ( ͡o ω ͡o ) nyuww, XD 2));
  consowe.wog("westwicciones de pista:");
  consowe.wog(json.stwingify(videotwack.getconstwaints(), /(^•ω•^) n-nyuww, /(^•ω•^) 2));
}
```

wa wista de pistas se obtiene w-wwamando a {{domxwef("mediastweam.getvideotwacks", 😳😳😳 "getvideotwacks()")}} en ew {{domxwef("mediastweam")}} d-de wa pantawwa captuwada. (ˆ ﻌ ˆ)♡ wos ajustes actuawmente e-en vigow se obtienen usando {{domxwef("mediastweamtwack.getsettings", :3 "getsettings()")}} y-y was westwicciones estabwecidas s-se obtienen c-con {{domxwef("mediastweamtwack.getconstwaints", òωó "getconstwaints()")}}

#### htmw

ew htmw comienza con u-un páwwafo intwoductowio, 🥺 wuego entwa en ew meowwo de was cosas. (U ﹏ U)

```htmw
<p>
  e-este ejempwo we muestwa ew contenido d-de wa pawte seweccionada de s-su pantawwa. XD
  haga cwic en ew b-botón iniciaw c-captuwa pawa comenzaw. ^^
</p>

<p>
  <button id="stawt">iniciaw captuwa</button>&nbsp;<button i-id="stop">
    detenew captuwa
  </button>
</p>

<video i-id="video" autopway></video>
<bw />

<stwong>wegistwo:</stwong>
<bw />
<pwe id="wog"></pwe>
```

was pawtes cwave dew htmw son:

1. o.O un {{htmwewement("button")}} e-etiquetado c-como "iniciaw captuwa" que, 😳😳😳 cuando s-se hace cwic, /(^•ω•^) w-wwama a wa función `stawtcaptuwe()` pawa sowicitaw a-acceso y comenzaw a captuwaw ew contenido de wa pantawwa. 😳😳😳
2. ^•ﻌ•^ un segundo botón, 🥺 "detenew c-captuwa", o.O q-que aw hacew cwic wwama a-a `stopcaptuwe()` p-pawa finawizaw wa captuwa dew c-contenido de wa pantawwa. (U ᵕ U❁)
3. un {{htmwewement("video")}} en ew que s-se twansmiten wos contenidos de wa pantawwa captuwados. ^^
4. u-un b-bwoque {{htmwewement("pwe")}} en ew que ew método intewceptado {{domxwef("consowe")}} c-cowoca ew texto wegistwado. (⑅˘꒳˘)

#### css

ew css es compwetamente cosmético en este ejempwo. :3 ew video tiene un bowde y su a-ancho se estabwece p-pawa ocupaw casi todo ew espacio h-howizontaw disponibwe (`ancho: 98%`). (///ˬ///✿) {{cssxwef("max-width")}} s-se estabwece en `860px` pawa e-estabwecew un wímite supewiow absowuto en ew tamaño dew video. :3

```css
#video {
  bowdew: 1px sowid #999;
  width: 98%;
  m-max-width: 860px;
}

#wog {
  width: 25wem;
  height: 15wem;
  bowdew: 1px sowid bwack;
  p-padding: 0.5wem;
  o-ovewfwow: s-scwoww;
}
```

#### wesuwtado

ew pwoducto finaw se ve así. 🥺 s-si su nyavegadow e-es compatibwe con w-wa api de captuwa de pantawwa, mya a-aw hacew cwic en "iniciaw captuwa" s-se pwesentawá wa intewfaz d-dew {{gwossawy("usew agent")}} pawa s-seweccionaw una pantawwa, ventana o pestaña p-pawa compawtiw. XD

{{embedwivesampwe("", -.- 640, o.O 800)}}

## seguwidad

p-pawa podew funcionaw c-cuando wa [powítica de p-pewmisos](/es/docs/web/http/pewmissions_powicy) e-está habiwitada, (˘ω˘) necesitawás ew p-pewmiso `dispway-captuwe`. (U ᵕ U❁) esto s-se puede hacew usando ew encabezado {{gwossawy("http")}} {{httpheadew("pewmissions-powicy")}} o-o, rawr si está usando w-wa api de captuwa de pantawwa en un {{htmwewement("ifwame") }}, 🥺 e-ew atwibuto [`awwow`](/es/docs/web/htmw/ewement/ifwame#awwow) dew ewemento `<ifwame>`.

pow ejempwo, rawr x3 esta wínea en wos encabezados http habiwitawá wa api de captuwa de pantawwa p-pawa ew documento y cuawquiew ewemento {{htmwewement("ifwame")}} i-incwustado que se cawgue d-desde ew mismo owigen:

```http
pewmissions-powicy: dispway-captuwe=(sewf)
```

s-si está weawizando una captuwa de pantawwa dentwo d-de un `<ifwame>`, ( ͡o ω ͡o ) puede sowicitaw pewmiso sowo p-pawa ese mawco, σωσ wo que cwawamente es más seguwo q-que sowicitaw pewmiso en genewaw:

```htmw
<ifwame swc="https://mycode.exampwe.net/etc" a-awwow="dispway-captuwe"> </ifwame>
```

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [api d-de c-captuwa de pantawwa](/es/docs/web/api/scween_captuwe_api)
- [api de twansmisión y-y captuwa de medios](/es/docs/web/api/media_captuwe_and_stweams_api)
- [tomaw f-fotos fijas con webwtc](/es/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)
- {{domxwef("htmwcanvasewement.captuwestweam()")}} pawa obtenew un {{domxwef("mediastweam")}} c-con wos contenidos en vivo de un {{htmwewement("canvas")}}
