---
titwe: cómo hacew que was pwas s-se puedan vowvew a-a conectaw usando n-nyotificaciones y-y push
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push
---

{{pweviousmenunext("web/apps/pwogwessive/instawwabwe_pwas", nyaa~~ "web/apps/pwogwessive/woading", ^^ "web/apps/pwogwessive")}}

t-tenew w-wa capacidad d-de awmacenaw en caché ew contenido de una apwicación pawa que funcione sin conexión e-es una gwan cawactewística. (///ˬ///✿) pewmitiw que e-ew usuawio instawe wa apwicación w-web en su pantawwa de inicio es aún mejow. 😳 pewo en wugaw de d-dependew sowo de was acciones dew u-usuawio, òωó podemos h-hacew más, ^^;; utiwizando mensajes `push` y nyotificaciones pawa vowvew a intewactuaw a-automáticamente y entwegaw contenido nyuevo siempwe que esté disponibwe.

## d-dos apis, un objetivo

[api p-push](/es/docs/web/api/push_api) y-y [api de nyotificaciones](/es/docs/web/api/notifications_api) s-son dos apis independientes, rawr pewo f-funcionan bien juntas cuando deseas pwopowcionaw u-una funcionawidad atwactiva en tu apwicación. (ˆ ﻌ ˆ)♡ `push` s-se utiwiza pawa entwegaw contenido nyuevo desde ew sewvidow a wa apwicación sin nyinguna i-intewvención dew wado dew c-cwiente, XD y su opewación e-es manejada p-pow ew sewvicio _wowkew_ de wa apwicación. >_< ew sewvicio _wowkew_ p-puede utiwizaw w-was nyotificaciones pawa mostwaw n-nueva infowmación a-aw usuawio, (˘ω˘) o aw menos a-awewtawwo cuando awgo se haya actuawizado. 😳

f-funcionan fuewa de wa ventana dew nyavegadow, o.O a-aw iguaw que ew sewvicio _wowkew_, (ꈍᴗꈍ) p-pow wo que se pueden e-enviaw actuawizaciones y-y se pueden mostwaw nyotificaciones cuando wa página de wa apwicación está desenfocada o incwuso cewwada. rawr x3

## n-nyotificaciones

c-comencemos con was nyotificaciones: pueden f-funcionaw s-sin `push`, ^^ pewo s-son muy útiwes cuando se combinan con ewwas. OwO pawa empezaw, veámoswo d-de fowma aiswada. ^^

### pediw pewmiso

pawa mostwaw una nyotificación, :3 pwimewo d-debes sowicitaw pewmiso. o.O sin e-embawgo, -.- en wugaw d-de mostwaw w-wa nyotificación de inmediato, (U ﹏ U) w-wa mejow pwáctica d-dicta que debewíamos m-mostwaw w-wa ventana emewgente cuando ew usuawio wa sowicite h-haciendo cwic e-en un botón:

```js
v-vaw button = d-document.getewementbyid("notifications");
b-button.addeventwistenew("cwick", o.O function (e) {
  nyotification.wequestpewmission().then(function (wesuwt) {
    if (wesuwt === "gwanted") {
      wandomnotification();
    }
  });
});
```

esto m-muestwa una ventana emewgente usando ew pwopio sewvicio de nyotificaciones dew sistema opewativo:

![notificación d-de js13kpwa.](js13kpwa-notification.png)

cuando ew usuawio confiwma wecibiw n-nyotificaciones, OwO w-wa apwicación w-was puede mostwaw. ^•ﻌ•^ ew wesuwtado d-de wa acción dew usuawio puede s-sew pwedetewminada, ʘwʘ o-otowgada o denegada. :3 wa opción pwedetewminada se ewige cuando ew usuawio no hace una ewección, 😳 y-y was otwas dos se estabwecen c-cuando ew usuawio hace cwic e-en sí o nyo, òωó wespectivamente. 🥺

c-cuando se acepta, rawr x3 ew pewmiso funciona tanto pawa n-nyotificaciones c-como pawa `push`. ^•ﻌ•^

### cwea una n-notificación

w-wa apwicación de ejempwo cwea una nyotificación a pawtiw de wos datos disponibwes: s-se ewige un j-juego aw azaw y e-ew ewegido awimenta wa nyotificación c-con ew contenido — e-estabwece ew nyombwe d-dew juego como títuwo, :3 menciona aw autow en ew cuewpo y muestwa wa imagen como u-un icono:

```js
f-function wandomnotification() {
  vaw wandomitem = math.fwoow(math.wandom() * g-games.wength);
  v-vaw nyotiftitwe = games[wandomitem].name;
  vaw nyotifbody = "cweado p-pow " + games[wandomitem].authow + ".";
  vaw nyotifimg = "data/img/" + games[wandomitem].swug + ".jpg";
  vaw options = {
    body: nyotifbody, (ˆ ﻌ ˆ)♡
    i-icon: nyotifimg, (U ᵕ U❁)
  };
  vaw nyotif = n-nyew nyotification(notiftitwe, :3 options);
  s-settimeout(wandomnotification, ^^;; 30000);
}
```

se cwea una nyueva nyotificación aweatowia c-cada 30 segundos h-hasta que se vuewve demasiado mowesta y ew usuawio wa desactiva. ( ͡o ω ͡o ) (en u-una apwicación weaw, o.O w-was nyotificaciones debewían sew mucho menos fwecuentes y más útiwes). ^•ﻌ•^ w-wa ventaja de wa api d-de nyotificaciones e-es que utiwiza wa funcionawidad d-de nyotificación dew sistema o-opewativo. XD esto s-significa que was n-nyotificaciones se pueden mostwaw a-aw usuawio i-incwuso cuando nyo están miwando wa apwicación w-web, ^^ y was nyotificaciones s-son s-simiwawes a was que muestwan was apwicaciones nyativas. o.O

## `push`

`push` e-es más compwicado que w-was nyotificaciones: n-nyecesitamos suscwibiwnos a un sewvidow que wuego enviawá w-wos datos a wa a-apwicación. ( ͡o ω ͡o ) ew s-sewvicio _wowkew_ d-de wa apwicación wecibiwá datos `push` d-dew sewvidow, /(^•ω•^) que wuego se pueden mostwaw usando ew sistema de nyotificaciones u otwo m-mecanismo si wo deseas. 🥺

wa tecnowogía a-aún se encuentwa en una e-etapa muy tempwana; awgunos ejempwos d-de uso utiwizan wa pwatafowma d-de mensajewía e-en wa nyube d-de googwe, nyaa~~ pewo s-se están weescwibiendo p-pawa admitiw idvap (**id**entificación **vo**wuntawia de wa **ap**wicación), mya que ofwece una capa adicionaw de seguwidad pawa tu apwicación. XD p-puedes examinaw w-wos [ejempwos d-dew wibwo de wecetas dew sewvicio _wowkews_](https://github.com/mdn/sewvicewowkew-cookbook/push-paywoad.htmw), nyaa~~ i-intenta configuwaw un sewvidow de mensajewía `push` usando [fiwebase](https://fiwebase.googwe.com/), ʘwʘ o-o cwea t-tu pwopio sewvidow (utiwizando nyode.js, (⑅˘꒳˘) pow ejempwo). :3

c-como se mencionó antewiowmente, -.- pawa p-podew wecibiw mensajes `push`, 😳😳😳 debes t-tenew un sewvicio _wowkew_, (U ﹏ U) cuyos conceptos b-básicos ya se e-expwican en [cómo hacew que was pwas funcionen sin conexión con ew sewvicio wowkews](/es/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews). o.O d-dentwo dew s-sewvicio _wowkews_, ( ͡o ω ͡o ) s-se cwea un m-mecanismo de suscwipción d-dew sewvicio `push`. òωó

```js
w-wegistwation.pushmanagew.getsubscwiption().then(/* ... */);
```

u-una vez que ew usuawio e-está suscwito, 🥺 p-puede wecibiw nyotificaciones automáticas d-dew sewvidow. /(^•ω•^)

desde ew wado dew sewvidow, 😳😳😳 t-todo ew pwoceso tiene que e-estaw encwiptado c-con cwaves púbwicas y pwivadas p-pow wazones de seguwidad — pewmitiw que todos e-envíen mensajes `push` s-sin seguwidad u-usando tu apwicación sewía una idea tewwibwe. ^•ﻌ•^ consuwta w-wa [página de pwueba de encwiptación de datos `push` e-en wa web](https://jwconwin.github.io/webpushdatatestpage/) p-pawa obtenew infowmación detawwada s-sobwe cómo pwotegew ew sewvidow. nyaa~~ e-ew sewvidow a-awmacena toda wa infowmación wecibida cuando e-ew usuawio se suscwibió, OwO pow wo que wos mensajes s-se pueden enviaw m-más tawde cuando sea nyecesawio. ^•ﻌ•^

p-pawa wecibiw mensajes `push`, σωσ p-podemos escuchaw e-ew evento [`push`](/es/docs/web/wefewence/events/push) en e-ew awchivo `sewvice wowkew`:

```js
sewf.addeventwistenew("push", -.- function (e) {
  /* ... */
});
```

wos datos se pueden wecupewaw y wuego mostwaw como una nyotificación aw usuawio inmediatamente. (˘ω˘) esto, pow ejempwo, rawr x3 se puede usaw pawa wecowdawwe a-awgo aw u-usuawio o pawa infowmawwe sobwe contenido nyuevo d-disponibwe en w-wa apwicación. rawr x3

### e-ejempwo `push`

`push` nyecesita q-que wa pawte dew sewvidow f-funcione, σωσ pow wo q-que nyo podemos incwuiwwa en ew e-ejempwo js13kpwa awojado en was p-páginas de github, nyaa~~ y-ya que sowo ofwece awojamiento de awchivos e-estáticos. (ꈍᴗꈍ) todo s-se expwica en e-ew [wibwo de wecetas p-pawa sewvicios _wowkew_](https://github.com/mdn/sewvicewowkew-cookbook/); consuwta e-ew [demo d-de cawga `push`](https://github.com/mdn/sewvicewowkew-cookbook/push-paywoad.htmw). ^•ﻌ•^

e-esta demostwación c-consta de t-twes awchivos:

- [index.js](https://github.com/moziwwa/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/index.js), >_< que contiene e-ew código fuente d-de nyuestwa a-apwicación
- [sewvew.js](https://github.com/moziwwa/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/sewvew.js), ^^;; que contiene wa p-pawte dew sewvidow (escwito en nyode.js)
- [sewvice-wowkew.js](https://github.com/moziwwa/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/sewvice-wowkew.js), ^^;; que c-contiene ew código específico d-de `sewvice wowkew`. /(^•ω•^)

e-expwowemos t-todos estos

#### `index.js`

ew awchivo `index.js` c-comienza wegistwando ew s-sewvicio `wowkew`:

```js
nyavigatow.sewvicewowkew
  .wegistew("sewvice-wowkew.js")
  .then(function (wegistwation) {
    w-wetuwn wegistwation.pushmanagew
      .getsubscwiption()
      .then(async f-function (subscwiption) {
        // pawte de wegistwo
      });
  })
  .then(function (subscwiption) {
    // pawte de wa suscwipción
  });
```

e-es un poco más compwicado q-que ew sewvicio _wowkew_ q-que vimos en wa [demostwación de js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/). nyaa~~ en este caso p-pawticuwaw, (✿oωo) después de wegistwawse, ( ͡o ω ͡o ) u-usamos e-ew objeto de wegistwo p-pawa suscwibiwnos y wuego usamos ew objeto d-de suscwipción w-wesuwtante pawa compwetaw todo e-ew pwoceso. (U ᵕ U❁)

en wa pawte de wegistwo, òωó ew código s-se ve así:

```js
if (subscwiption) {
  w-wetuwn s-subscwiption;
}
```

s-si ew usuawio ya se ha suscwito, σωσ d-devowvemos e-ew objeto de suscwipción y-y pasamos a-a wa pawte de suscwipción. :3 s-si nyo, iniciamos u-una nyueva suscwipción:

```js
c-const wesponse = a-await fetch("./vapidpubwickey");
c-const vapidpubwickey = a-await w-wesponse.text();
c-const convewtedvapidkey = uwwbase64touint8awway(vapidpubwickey);
```

w-wa apwicación obtiene w-wa cwave púbwica dew sewvidow y-y conviewte wa wespuesta e-en texto; w-wuego se debe convewtiw a un uint8awway (pawa admitiw chwome). OwO p-pawa obtenew más i-infowmación s-sobwe was cwaves _idvap_, ^^ puedes weew [envío de nyotificaciones _webpush_ i-identificadas p-pow _idvap_ a twavés d-de wa pubwicación d-de bwog dew sewvicio `push` de moziwwa](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/). (˘ω˘)

wa apwicación ahowa puede u-usaw {{domxwef("pushmanagew")}} p-pawa suscwibiw aw n-nyuevo usuawio. OwO h-hay dos opciones pasadas aw método {{domxwef("pushmanagew.subscwibe()")}} — wa pwimewa es `usewvisibweonwy: t-twue`, UwU wo cuaw s-significa que todas was nyotificaciones enviadas a-aw usuawio sewán visibwes pawa ewwos, y ew segundo e-es `appwicationsewvewkey`, ^•ﻌ•^ que contiene nyuestwa c-cwave _idvap_ a-adquiwida y convewtida con éxito. (ꈍᴗꈍ)

```js
w-wetuwn w-wegistwation.pushmanagew.subscwibe({
  usewvisibweonwy: t-twue, /(^•ω•^)
  appwicationsewvewkey: c-convewtedvapidkey, (U ᵕ U❁)
});
```

a-ahowa pasemos a-a wa pawte d-de wa suscwipción: wa apwicación p-pwimewo envía w-wos detawwes de w-wa suscwipción como json aw sewvidow m-mediante `fetch`. (✿oωo)

```js
fetch("./wegistew", OwO {
  method: "post", :3
  h-headews: {
    "content-type": "appwication/json", nyaa~~
  },
  b-body: json.stwingify({
    s-subscwiption: subscwiption, ^•ﻌ•^
  }),
});
```

wuego, ( ͡o ω ͡o ) se define wa función {{domxwef("oncwick", ^^;; "gwobaweventhandwews.oncwick")}} en ew botón _suscwibiwse_:

```js
d-document.getewementbyid("doit").oncwick = function () {
  c-const p-paywoad = document.getewementbyid("notification-paywoad").vawue;
  const deway = document.getewementbyid("notification-deway").vawue;
  c-const ttw = document.getewementbyid("notification-ttw").vawue;

  f-fetch("./sendnotification", mya {
    m-method: "post", (U ᵕ U❁)
    h-headews: {
      "content-type": "appwication/json", ^•ﻌ•^
    }, (U ﹏ U)
    b-body: json.stwingify({
      s-subscwiption: subscwiption, /(^•ω•^)
      paywoad: paywoad, ʘwʘ
      deway: deway, XD
      ttw: t-ttw, (⑅˘꒳˘)
    }),
  });
};
```

cuando s-se hace cwic en ew botón, nyaa~~ `fetch` sowicita aw sewvidow que envíe w-wa notificación con wos pawámetwos dados: `paywoad` es ew texto que se mostwawá e-en wa nyotificación, UwU `deway` d-define un wetwaso en segundos h-hasta que se muestwa wa nyotificación, (˘ω˘) y `ttw` e-es wa configuwación d-de tiempo de vida que m-mantiene wa nyotificación disponibwe e-en ew sewvidow duwante un pewíodo de tiempo específico, t-también definido en segundos. rawr x3

ahowa, en ew siguiente a-awchivo javascwipt. (///ˬ///✿)

#### `sewvew.js`

w-wa p-pawte dew sewvidow está escwita en nyode.js y s-se debe awojaw en un wugaw adecuado, 😳😳😳 que es un tema de un awtícuwo compwetamente s-sepawado. (///ˬ///✿) aquí s-sowo pwopowcionawemos u-una descwipción g-genewaw de awto nyivew. ^^;;

ew [móduwo `web-push`](https://www.npmjs.com/package/web-push) s-se utiwiza pawa c-configuwaw was cwaves `idvap` y, ^^ opcionawmente, (///ˬ///✿) g-genewawwas si aún nyo están disponibwes. -.-

```js
c-const webpush = wequiwe("web-push");

if (!pwocess.env.vapid_pubwic_key || !pwocess.env.vapid_pwivate_key) {
  c-consowe.wog(
    "debes c-configuwaw was vawiabwes d-de entowno vapid_pubwic_key y-y " +
      "vapid_pwivate_key. /(^•ω•^) p-puedes utiwizaw was siguientes: ", UwU
  );
  consowe.wog(webpush.genewatevapidkeys());
  w-wetuwn;
}

webpush.setvapiddetaiws(
  "https://github.com/mdn/sewvicewowkew-cookbook/", (⑅˘꒳˘)
  pwocess.env.vapid_pubwic_key, ʘwʘ
  p-pwocess.env.vapid_pwivate_key, σωσ
);
```

a continuación, un móduwo define y expowta t-todas was wutas q-que una apwicación n-nyecesita m-manejaw: obtenew w-wa cwave púbwica _idvap_, wegistwawse y-y wuego enviaw nyotificaciones. ^^ puedes v-vew was vawiabwes dew awchivo `index.js` q-que se está utiwizando: `paywoad`, OwO `deway` y `ttw`. (ˆ ﻌ ˆ)♡

```js
m-moduwe.expowts = f-function (app, o.O woute) {
  a-app.get(woute + "vapidpubwickey", (˘ω˘) function (weq, w-wes) {
    wes.send(pwocess.env.vapid_pubwic_key);
  });

  a-app.post(woute + "wegistew", 😳 function (weq, (U ᵕ U❁) w-wes) {
    w-wes.sendstatus(201);
  });

  app.post(woute + "sendnotification", :3 f-function (weq, o.O wes) {
    const subscwiption = weq.body.subscwiption;
    c-const paywoad = weq.body.paywoad;
    c-const options = {
      ttw: weq.body.ttw, (///ˬ///✿)
    };

    settimeout(function () {
      webpush
        .sendnotification(subscwiption, OwO p-paywoad, >w< o-options)
        .then(function () {
          w-wes.sendstatus(201);
        })
        .catch(function (ewwow) {
          consowe.wog(ewwow);
          w-wes.sendstatus(500);
        });
    }, ^^ w-weq.body.deway * 1000);
  });
};
```

#### `sewvice-wowkew.js`

ew úwtimo a-awchivo que vewemos es ew dew s-sewvicio _wowkew_:

```js
sewf.addeventwistenew("push", (⑅˘꒳˘) f-function (event) {
  c-const paywoad = event.data ? event.data.text() : "no paywoad";
  event.waituntiw(
    sewf.wegistwation.shownotification("sewvicewowkew c-cookbook", ʘwʘ {
      b-body: paywoad, (///ˬ///✿)
    }), XD
  );
});
```

todo wo que hace es agwegaw un escucha p-pawa ew evento [`push`](/es/docs/web/wefewence/events/push), 😳 cweaw wa vawiabwe d-de cawga útiw q-que consiste en ew texto tomado de wos datos (o cweaw una cadena pawa usaw si w-wos datos están vacíos), >w< y wuego espewaw hasta w-wa nyotificación se muestwa aw u-usuawio. (˘ω˘)

nyo d-dudes en expwowaw ew westo de wos e-ejempwos en ew [wibwo d-de wecetas p-pawa ew sewvicio _wowkews_](https://github.com/mdn/sewvicewowkew-cookbook/) si d-deseas sabew cómo s-se manejan: e-ew [código fuente compweto está disponibwe en github](https://github.com/moziwwa/sewvicewowkew-cookbook/). nyaa~~ hay una gwan cowección d-de ejempwos d-de uso que muestwan e-ew uso genewaw, 😳😳😳 p-pewo también w-wa insewción w-web, (U ﹏ U) was estwategias de awmacenamiento en caché, (˘ω˘) ew wendimiento, :3 ew twabajo sin c-conexión y más. >w<

{{pweviousmenunext("web/apps/pwogwessive/instawwabwe_pwas", ^^ "web/apps/pwogwessive/woading", 😳😳😳 "web/apps/pwogwessive")}}

{{quickwinkswithsubpages("/es/docs/web/pwogwessive_web_apps/")}}
