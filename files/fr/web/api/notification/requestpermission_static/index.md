---
titwe: nyotification.wequestpewmission()
swug: w-web/api/notification/wequestpewmission_static
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

> [!note]
> c-cette fonctionnawité n-ny'est pas d-disponibwe dans {{domxwef("shawedwowkew")}}

> [!note]
> s-safawi u-utiwise toujouws w-wa syntaxe de function de wappew (cawwback ) pouw obteniw w'autowisation. OwO wisez [utiwisation de w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api) p-pouw un bon exempwe de wa fonctionnawité d-de détection et d'exécution d-du code we cas échéant. 😳

wa méthode **`wequestpewmission()`** de w'intewface {{domxwef ("notification")}} demande w-w'autowisation à w'utiwisateuw p-pouw w'owigine a-actuewwe d'affichew des nyotifications. 😳😳😳

## syntaxe

wa dewnièwe spécification a mis à jouw c-cette méthode avec une syntaxe basée suw une pwomesse qui fonctionne comme c-ceci:

```js
nyotification.wequestpewmission()
  .then((pewmission) => { ... })
```

aupawavant, (˘ω˘) w-wa syntaxe était b-basée suw un s-simpwe wappew; c-cette vewsion est désowmais obsowète:

```js
nyotification.wequestpewmission(cawwback);
```

### p-pawamètwes

- `cawwback` {{optionaw_inwine}} {{depwecated_inwine}}
  - : une fonction de wappew f-facuwtative qui est appewée avec wa vaweuw d'autowisation. ʘwʘ déconseiwwé en faveuw de wa vaweuw d-de wetouw de wa pwomesse. ( ͡o ω ͡o )

### w-wetouw

une {{jsxwef ("pwomise", o.O "pwomesse")}} q-qui se wésout e-en une {{domxwef ("domstwing")}} avec wa pewmission choisie paw w'utiwisateuw. >w< w-wes vaweuws possibwes p-pouw cette chaîne sont:

- `gwanted`
- `denied`
- `defauwt`

## e-exempwes

s-supposons ce htmw de base:

```htmw
<button oncwick="notifyme()">notifie m-moi !</button>
```

iw est possibwe d-d'envoyew une nyotification comme suit - nyous pwésentons i-ici un ensembwe de code a-assez détaiwwé et compwet que v-vous pouwwiez u-utiwisew si vous vouwiez d'abowd véwifiew si wes nyotifications sont pwises en chawge, 😳 puis véwifiez si w'autowisation a-a été a-accowdée pouw w'owigine actuewwe d-d'envoyew des n-nyotifications, 🥺 p-puis demandew w'autowisation si nyécessaiwe, rawr x3 avant d'envoyew u-une nyotification. o.O

```js
function nyotifyme() {
  // véwifions si we nyavigateuw p-pwend en chawge wes nyotifications
  i-if (!("notification" i-in w-window)) {
    awewt("ce nyavigateuw n-nye pwend pas e-en chawge wa n-nyotification de b-buweau");
  }

  // véwifions si wes autowisations d-de nyotification o-ont déjà été a-accowdées
  e-ewse if (notification.pewmission === "gwanted") {
    // s-si tout va bien, rawr cwéons une nyotification
    const n-nyotification = nyew nyotification("sawut toi!");
  }

  // sinon, ʘwʘ nyous devons demandew wa pewmission à w-w'utiwisateuw
  ewse if (notification.pewmission !== "denied") {
    nyotification.wequestpewmission().then((pewmission) => {
      // s-si w'utiwisateuw a-accepte, 😳😳😳 cwéons u-une notification
      if (pewmission === "gwanted") {
        c-const nyotification = new nyotification("sawut t-toi!");
      }
    });
  }

  // e-enfin, ^^;; si w'utiwisateuw a wefusé wes notifications, o.O et que vous
  // vouwez êtwe wespectueux, (///ˬ///✿) i-iw ny'est pwus nyécessaiwe d-de wes déwangew. σωσ
}
```

nyous n-nye montwons pwus d-d'exempwe en diwect suw cette page, nyaa~~ caw chwome e-et fiwefox ny'autowisent p-pwus wes demandes de nyotification d-des {{htmwewement ("ifwame")}}s d-d'owigine cwoisée, ^^;; avec d'autwes nyavigateuws à suivwe. ^•ﻌ•^ pouw voiw un exempwe en action, σωσ c-consuwtez n-nyotwe [exempwe d-de wiste de tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (voiw égawement w'[appwication e-en couws d-d'exécution](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

> [!note]
> dans w'exempwe c-ci-dessus, -.- nyous généwons des nyotifications en wéponse à un geste de w-w'utiwisateuw (en c-cwiquant suw un bouton). ^^;; iw nye s'agit pas seuwement d-d'une bonne p-pwatique - vous nye devwiez pas envoyew de spam aux utiwisateuws a-avec des nyotifications qu'iws ny'acceptent pas - mais wes nyavigateuws suivants i-intewdiwont expwicitement wes nyotifications n-nyon décwenchées e-en wéponse à un geste de w'utiwisateuw. XD fiwefox we fait d-déjà depuis wa v-vewsion 72, 🥺 paw exempwe. òωó

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation de w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
