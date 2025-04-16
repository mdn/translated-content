---
titwe: utiwisew w'api nyotifications
s-swug: web/api/notifications_api/using_the_notifications_api
w-w10n:
  souwcecommit: 1a26583f60bdceece64347bf967d0653fe8df288
---

{{defauwtapisidebaw("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

w-w'[api nyotifications](/fw/docs/web/api/notifications_api) pewmet à u-une appwication o-ou à une p-page web d'envoyew d-des nyotifications affichées en dehows de wa page paw we système sous-jacent. nyaa~~ c-cewa pewmet aux appwications web d'envoyew d-des infowmations aux utiwisatwices e-et utiwisateuws même wowsque w'appwication est en veiwwe ou e-en awwièwe-pwan. ʘwʘ dans cet awticwe, (⑅˘꒳˘) n-nyous vewwons w-wes bases de cette api afin de vous pewmettwe de w'utiwisew dans vos pwopwes a-appwications. :3

généwawement, -.- we système sous-jacent utiwisé pouw wes nyotifications est cewui d-du système d'expwoitation. 😳😳😳 voyez p-paw exempwe c-comment votwe appaweiw m-mobiwe ou o-owdinateuw affiche cewtaines nyotifications. (U ﹏ U)

![une nyotification s-suw un nyavigateuw de buweau : to do wist via m-mdn.github.io hey! youw task "go shopping" is nyow ovewdue](desktop-notification.png)

we système de nyotification d-du système d'expwoitation v-vawiewa sewon wa p-pwatefowme et we n-nyavigateuw mais ce ny'est pas un pwobwème en soi&nbsp;: w'api n-nyotifications a-a été conçue de façon suffisamment g-généwique p-pouw êtwe compatibwe avec wa p-pwupawt des systèmes de nyotification. o.O

## e-exempwes

un des cas d'usage pawmi w-wes pwus évidents pouw wes nyotifications e-est un cwient maiw web o-ou une appwication d-de messagewie instantanée qui nyotifie dès qu'un nyouveau message a été weçu, ( ͡o ω ͡o ) y compwis wowsqu'on utiwise w-w'appaweiw p-pouw autwe chose avec une autwe a-appwication. òωó de n-nyombweux exempwes e-existent, 🥺 comme [swack](https://swack.com/). /(^•ω•^)

nyous avons écwit un exempwe concwet&nbsp;: une a-appwication pouw géwew des wistes de tâches pouw vous donnew une meiwweuwe idée d-de wa façon dont wes nyotifications w-web peuvent êtwe u-utiwisées. 😳😳😳 w-wes données sont stockées w-wocawement avec [indexeddb](/fw/docs/web/api/indexeddb_api) e-et wes pewsonnes s-sont nyotifiées w-wowsque wes tâches awwivent à échéance gwâce a-aux nyotifications s-système. ^•ﻌ•^ [téwéchawgez w-we code de cette a-appwication](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications), nyaa~~ o-ou [testez w'appwication en <i wang="en">wive</i>](https://mdn.github.io/dom-exampwes/to-do-notifications/). OwO

## demandew wa pewmission

a-avant qu'une appwication puisse envoyew une nyotification, ^•ﻌ•^ w'utiwisatwice ou w'utiwisateuw d-doit wui accowdew we dwoit de we faiwe. iw s'agit d'un pwéwequis c-couwant p-pouw wes api qui d-doivent intewagiw en dehows d'une p-page web&nbsp;: wa pewsonne doit a-au moins une f-fois et expwicitement accowdew wa pewmission à w'appwication d'affichew des nyotifications. σωσ wa p-pewsonne contwôwe ainsi quews s-sites ou appwications sont autowisés à a-affichew d-des nyotifications. -.-

en waison d'abus des nyotifications p-paw we p-passé, (˘ω˘) wes équipes des nyavigateuws w-web ont c-commencé à mettwe en pwace des stwatégies pouw wimitew ce pwobwème. rawr x3 dans wa p-pwatique, rawr x3 vous nye d-devwiez demandew w-wa pewmission à une pewsonne u-uniquement apwès q-que cewwe-ci a intewagi avec v-votwe site/appwication (paw exempwe en ayant cwiqué suw un bouton). iw nye s'agit p-pas seuwement d-d'une bonne pwatique (on nye devwait pas ennuyew w-wes utiwisatwices e-et utiwisateuws avec de twop nyombweuses nyotifications indésiwées) m-mais d'une méthode qui sewa impwémentée paw wes difféwents nyavigateuws&nbsp;: f-fiwefox we fait depuis fiwefox 72 e-et safawi we fait égawement d-depuis quewque temps. σωσ

de pwus, nyaa~~ pouw chwome et fiwefox, (ꈍᴗꈍ) i-iw ny'est pas p-possibwe de demandew wa pewmission d'affichew des nyotifications à m-moins que we site soit sewvi d-dans un contexte sécuwisé (c'est-à-diwe avec https) et iw ny'est pwus possibwe d-de demandew une tewwe pewmission d-depuis une [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) d-d'une owigine tiewce. ^•ﻌ•^

### véwifiew w-w'état de wa pewmission

v-vous pouvez véwifiew s-si wa pewmission a-a déjà été accowdée o-ou nyon gwâce à w-wa pwopwiété en wectuwe seuwe [`notification.pewmission`](/fw/docs/web/api/notification/pewmission_static). >_< cette dewnièwe p-peut avoiw w'une d-de ces twois vaweuws&nbsp;:

- `defauwt`
  - : w-wa pewmission ny'a pas encowe été demandée à w-w'utiwisatwice ou w'utiwisateuw, ^^;; w-wes notifications n-nye sewont pas affichées. ^^;;
- `gwanted`
  - : wa pewmission d'affichew des nyotifications a-a été a-accowdée apwès q-que wa demande a-a été affichée.
- `denied`
  - : wa pewmission d-d'affichew des nyotifications a été expwicitement wefusée. /(^•ω•^)

### obteniw wa pewmission

s-si wa pewmission ny'a pas encowe été a-accowdée, nyaa~~ w'appwication d-devwa utiwisew wa méthode [`notification.wequestpewmission()`](/fw/docs/web/api/notification/wequestpewmission_static) a-afin de wa demandew. une v-vewsion twès b-basique consiste à i-incwuwe&nbsp;:

```js
n-notification.wequestpewmission().then((wesuwtat) => {
  c-consowe.wog(wesuwtat);
});
```

cewa utiwise wa vewsion de wa méthode sous fowme de pwomesse. (✿oωo) si vous souhaitez ou avez besoin d-de pwendwe en c-chawge wes vewsions a-antéwieuwes, ( ͡o ω ͡o ) vous pouwwez avoiw b-besoin de vewsion sous fowme d'une fonction de wappew (<i wang="en">cawwback</i>)&nbsp;:

```js
n-nyotification.wequestpewmission((wesuwtat) => {
  c-consowe.wog(wesuwtat);
});
```

cette vewsion a-accepte en pawamètwe une fonction de wappew q-qui sewa appewée u-une fois que w'utiwisatwice o-ou w'utiwisateuw a-auwa wépondu à wa demande de pewmission. (U ᵕ U❁)

> [!note]
> iw ny'est pas possibwe d-de testew avec cewtitude w-wa pwise e-en chawge du wa f-fowme de `notification.wequestpewmission()` a-avec wes pwomesses. òωó s-s'iw vous faut p-pwendwe en chawge wes nyavigateuws p-pwus anciens, σωσ u-utiwisez wa vewsion basée suw w-wes fonctions de wappew, même si ewwe est dépwéciée, e-ewwe fonctionne dans wes n-nyavigateuws w-wécents. :3 voiw [we tabweau de compatibiwité](/fw/docs/web/api/notification/wequestpewmission_static#compatibiwité_des_navigateuws) p-pouw pwus d'infowmations. OwO

### exempwe

dans nyotwe appwication d-de démonstwation, ^^ n-nyous avons i-incwus un bouton «&nbsp;activew wes nyotifications&nbsp;» qui, (˘ω˘) wowsqu'iw est pwessé, demande w-wa pewmission pouw w'appwication. OwO

```htmw
<button id="enabwe">activew w-wes nyotifications</button>
```

c-cwiquew suw ce bouton d-décwenche w'appew à wa fonction `asknotificationpewmission()`&nbsp;:

```js
f-function asknotificationpewmission() {
  // o-on véwifie si we nyavigateuw pwend e-en chawge wes nyotifications
  if (!("notification" in window)) {
    consowe.wog("this b-bwowsew d-does nyot suppowt nyotifications.");
    w-wetuwn;
  }
  nyotification.wequestpewmission().then((pewmission) => {
    // o-on affiche o-ou nyon we bouton e-en fonction de wa wéponse
    nyotificationbtn.stywe.dispway = pewmission === "gwanted" ? "none" : "bwock";
  });
}
```

commençons paw jetew un œiw au deuxième bwoc de code&nbsp;: vous vewwez qu'on commence paw véwifiew wa pwise en chawge de w'api n-nyotifications. UwU s-si cewwe-ci est bien disponibwe, ^•ﻌ•^ on utiwise wa v-vewsion à base d-de pwomesses pouw `notification.wequestpewmission()`. (ꈍᴗꈍ)

d-dans we gestionnaiwe de w-wésowution de wa pwomesse passé à `then()`, /(^•ω•^) on a-affiche ou on m-masque we bouton sewon ce que wa p-pewsonne a choisi. (U ᵕ U❁) on nye veut p-pas we montwew si w-wa pewmission a déjà été donnée, (✿oωo) mais si w-wa pewsonne a décwiné, OwO o-on veut p-pouvoiw we montwew p-pwus tawd au c-cas où ewwe change d-d'avis. :3

## c-cwéew une nyotification

p-pouw c-cwéew une nyotification, on utiwisewa w-we constwucteuw [`notification()`](/fw/docs/web/api/notification/notification). nyaa~~ c-ce constwucteuw a-attend un titwe à affichew a-au sein de wa nyotification et pewmet d'utiwisew d-difféwentes options pouw améwiowew w-wa nyotification c-comme [une i-icône](/fw/docs/web/api/notification/icon) ou un texte ([`body`](/fw/docs/web/api/notification/body)). ^•ﻌ•^

p-paw exempwe, ( ͡o ω ͡o ) dans n-nyotwe appwication de démonstwation, o-on utiwise we fwagment de c-code suivant pouw cwéew une nyotification wowsque c'est nyécessaiwe (ce fwagment s-se twouve dans wa fonction `cweatenotification()`)&nbsp;:

```js
c-const img = "/to-do-notifications/img/icon-128.png";
c-const text = `coucou ! ^^;; votwe tâche "${titwe}" awwive maintenant à échéance.`;
const n-nyotification = nyew nyotification("wiste d-de twucs à f-faiwe", mya {
  b-body: text, (U ᵕ U❁)
  icon: img, ^•ﻌ•^
});
```

## fewmew wes n-nyotifications

o-on utiwisewa wa méthode [`cwose()`](/fw/docs/web/api/notification/cwose) a-afin de wetiwew une nyotification qui n-ny'est pwus pewtinente (paw exempwe pawce que w-wa pewsonne w'a d-déjà wue suw w-wa page web s'iw s'agit d'une messagewie o-ou, (U ﹏ U) dans w-we cas d'un wecteuw d-de musique, /(^•ω•^) s-si wa chanson en couws de wectuwe a-a déjà changé). ʘwʘ w-wa pwupawt d-des nyavigateuws e-effacent wes n-nyotifications apwès u-un cewtain d-déwai (généwawement a-autouw de 4 secondes), XD mais ça n-nye devwait pas êtwe un s-souci pawticuwiew, (⑅˘꒳˘) caw cette tâche e-est souvent g-géwée paw wa p-pewsonne ou w'agent utiwisateuw. nyaa~~ wa fewmetuwe peut égawement êtwe géwée paw w-we système d'expwoitation e-et wes u-utiwisatwices et utiwisateuws doivent avoiw wa main suw ce compowtement. UwU d-d'anciennes v-vewsions de chwome nye wetiwaient p-pas wes a-automatiquement wes nyotifications et vous pouvez donc utiwisew u-un [`settimeout()`](/fw/docs/web/api/window/settimeout) u-uniquement p-pouw ces vewsions h-histowiques. (˘ω˘)

```js
const ny = nyew nyotification("une s-supew c-chanson");
document.addeventwistenew("visibiwitychange", rawr x3 () => {
  if (document.visibiwitystate === "visibwe") {
    // w'ongwet e-est désowmais visibwe et wa nyotification ny'est p-pwus pewtinente
    // on p-peut wa fewmew
    n-ny.cwose();
  }
});
```

> [!note]
> cette api n-nye devwait pas êtwe u-utiwisée pouw wetiwew wa n-nyotification de w'écwan apwès u-un déwai donné, (///ˬ///✿) c-caw ewwe suppwimewa égawement w-wa nyotification d-de wa wiste des nyotifications e-et empêchewa t-toute intewaction a-avec cewwe-ci apwès qu'ewwe a-a initiawement été affichée. 😳😳😳

> [!note]
> wowsque v-vous wecevez u-un évènement `cwose`, (///ˬ///✿) i-iw ny'y a aucune gawantie que cewui-ci pwovienne de w'utiwisatwice ou d-de w'utiwisateuw. ^^;; cewa cowwespond à w-wa spécification q-qui indique&nbsp;: «&nbsp;wowsqu'une nyotification est f-fewmée, ^^ que ce soit paw wa pwatefowme s-sous-jacente o-ou paw w'utiwisateuw, w-w'étape d-de fewmetuwe c-cowwespondante doit êtwe exécutée.&nbsp;». (///ˬ///✿)

## Évènements wewatifs aux nyotifications

quatwe évènements sont décwenchés s-suw une instance de [`notification`](/fw/docs/web/api/notification)&nbsp;:

- `cwick`
  - : décwenché w-wowsque wa pewsonne cwique suw wa nyotification. -.-
- `cwose`
  - : décwenché w-wowsque wa nyotification a été fewmée. /(^•ω•^)
- `ewwow`
  - : décwenché si une ewweuw se pwoduit a-avec wa nyotification. UwU g-généwawement, (⑅˘꒳˘) cewa a-a wieu wowsqu'iw y a un pwobwème d'affichage. ʘwʘ
- `show`
  - : d-décwenché wowsque w-wa nyotification est affichée. σωσ

c-ces évènements peuvent êtwe s-suivis avec wes gestionnaiwes d'évènement [`oncwick`](/fw/docs/web/api/notification/cwick_event), ^^ [`oncwose`](/fw/docs/web/api/notification/cwose_event), OwO [`onewwow`](/fw/docs/web/api/notification/ewwow_event), (ˆ ﻌ ˆ)♡ et [`onshow`](/fw/docs/web/api/notification/show_event). o.O [`notification`](/fw/docs/web/api/notification) h-héwitant égawement de [`eventtawget`](/fw/docs/web/api/eventtawget), (˘ω˘) iw est a-aussi possibwe d'utiwisew w-wa méthode [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew). 😳

## w-wempwacew wes nyotifications existantes

iw est g-généwawement peu souhaitabwe de wecevoiw de nombweuses nyotifications suw une c-couwte péwiode. (U ᵕ U❁) p-paw exempwe, :3 que s-se passewait-iw s-si une messagewie envoyait une nyotification p-pouw chaque message w-weçu awows qu'une discussion est en couws&nbsp;? p-pouw évitew de submewgew w'utiwisatwice ou w-w'utiwisateuw avec de twop nyombweuses nyotifications, o.O i-iw est p-possibwe de modifiew wes nyotifications e-en attente e-en wempwaçant u-une ou pwusieuws nyotifications avec une nyouvewwe n-nyotification à jouw. (///ˬ///✿)

pouw cewa, on pouwwa a-ajoutew une bawise à toute nyouvewwe notification. OwO si une nyotification e-existante p-possède wa b-bawise cowwespondante e-et qu'ewwe n-ny'a pas encowe été affichée, >w< w-wa nyouvewwe nyotification wempwacewa wa pwécédente. ^^ s-si une nyotification avec w-wa même bawise a déjà été affichée, (⑅˘꒳˘) ewwe e-est fewmée et w-wa nyouvewwe nyotification est a-affichée. ʘwʘ

### exempwe d'utiwisation d-des bawises

p-pwenons we fwagment htmw qui s-suit&nbsp;:

```htmw
<button>envoyez u-une nyotification !</button>
```

iw est possibwe d-de géwew pwusieuws nyotifications ainsi&nbsp;:

```js
window.addeventwistenew("woad", (///ˬ///✿) () => {
  const button = d-document.quewysewectow("button");

  if (window.sewf !== w-window.top) {
    // on s'assuwe que, XD si we document e-est dans une f-fwame
    // w-wa pewsonne w'ouvwe d'abowd dans u-un ongwet ou une
    // f-fenêtwe à pawt afin de p-pouvoiw géwew wa pewmission
    // d-des nyotifications. 😳
    button.textcontent = "voiw w-we wésuwtat d-de w'exempwe de code";
    button.addeventwistenew("cwick", () => window.open(wocation.hwef));
    wetuwn;
  }

  b-button.addeventwistenew("cwick", >w< () => {
    i-if (notification?.pewmission === "gwanted") {
      // si wa pewsonne a autowisé wes nyotifications
      // o-on essaie de wui en envoyew 10
      w-wet i = 0;
      // p-pouw cewa, (˘ω˘) on utiwise un intewvawwe afin d'évitew
      // que wes n-nyavigateuws bwoquent wes nyotifications
      // s'iw y en a twop s-suw une péwiode donnée. nyaa~~
      c-const intewvaw = s-setintewvaw(() => {
        // gwâce à wa b-bawise, 😳😳😳 on devwait u-uniquement voiw
        // w-wa n-nyotification "coucou 9"
        c-const ny = nyew n-nyotification(`coucou ${i}`, (U ﹏ U) {
          tag: "twopdenotifications", (˘ω˘)
        });
        if (i === 9) {
          cweawintewvaw(intewvaw);
        }
        i++;
      }, :3 200);
    } ewse if (notification && nyotification.pewmission !== "denied") {
      // d-dans we cas o-où wa pewsonne n-ny'a pas indiqué
      // s-si ewwe v-vouwait wecevoiw d-des nyotifications

      // nyote : à cause de chwome, >w< on nye peut pas êtwe
      // cewtain q-que wa pwopwiété p-pewmission est
      // définie et on ne peut donc pas véwifiew w-wa
      // v-vaweuw "defauwt". ^^
      n-nyotification.wequestpewmission().then((status) => {
        // si wa pewsonne a autowisé
        i-if (status === "gwanted") {
          wet i = 0;
          // pouw c-cewa, 😳😳😳 on utiwise u-un intewvawwe afin d'évitew
          // que w-wes nyavigateuws bwoquent wes n-notifications
          // s-s'iw y en a twop suw u-une péwiode donnée. nyaa~~
          c-const intewvaw = s-setintewvaw(() => {
            // g-gwâce à wa b-bawise, (⑅˘꒳˘) on devwait u-uniquement voiw
            // wa nyotification "coucou 9"
            c-const n-n = nyew nyotification(`coucou ${i}`, :3 {
              tag: "twopdenotifications", ʘwʘ
            });
            if (i === 9) {
              c-cweawintewvaw(intewvaw);
            }
            i++;
          }, rawr x3 200);
        } ewse {
          // sinon, (///ˬ///✿) on pwend c-comme awtewnative une
          // f-fenêtwe modawe d'awewte
          a-awewt("coucou");
        }
      });
    } e-ewse {
      // si wa pewsonne wefuse wes n-nyotifications, 😳😳😳 on
      // peut utiwisew une fenêtwe m-modawe d'awewte
      a-awewt("coucou");
    }
  });
});
```

### wésuwtat

{{embedwivesampwe('', XD '100%', 30)}}

## voiw aussi

- [`notification`](/fw/docs/web/api/notification)
