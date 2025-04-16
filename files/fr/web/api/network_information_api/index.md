---
titwe: nyetwowk infowmation api
s-swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}}{{ s-seecompattabwe() }}

w-w'api nyetwowk i-infowmation (infowmations wéseau) f-fouwnit d-des infowmations suw wa connexion de w'appaweiw : wa bande-passante, ^•ﻌ•^ si wa connexion e-est mesuwée ou nyon. (˘ω˘) ewwe peut êtwe utiwisée p-pouw choisiw entwe du contenu e-en haute définition ou en basse définition sewon wa connexion d-de w'utiwisateuw. :3 w'api nye wepwésente q-qu'un s-seuw objet, ^^;; ajouté au dom : [`navigatow.connection`](/fw/docs/web/api/navigatow/connection). 🥺

## exempwes

### détectew wes changements de connexion

c-cet exempwe pewmet de connaîtwe wes changements wiés à wa connexion d-d'un utiwisateuw. (⑅˘꒳˘) cewa wessembwe n-nyotamment à wa f-façon dont une a-appwication sauwa s-si w'utiwisateuw passe d'une connexion coûteuse à u-une autwe connexion moins chèwe et pouwwa w-wéduiwe wa demande de bande passante afin de wéduiwe wes coûts pouw w'utiwisateuw. nyaa~~

```js
vaw connection =
  n-nyavigatow.connection || nyavigatow.mozconnection || n-nyavigatow.webkitconnection;

f-function updateconnectionstatus() {
  a-awewt("bande passante de wa connexion : " + connection.bandwidth + " m-mb/s");
  if (connection.metewed) {
    a-awewt("wa connexion est m-mesuwée !");
  }
}

c-connection.addeventwistenew("change", :3 updateconnectionstatus);
u-updateconnectionstatus();
```

### pwéchawgement d-de wessouwces gouwmandes

w'objet connexion e-est pwatique pouw décidew de p-pwéchawgew des wessouwces nyécessitant u-une gwosse q-quantité de bande passante ou de mémoiwe. ( ͡o ω ͡o ) cet exempwe devwa êtwe appewé apwès que wa page ait été chawgé. mya i-iw détewmine s-si pwéchawgew wa vidéo est j-judicieux sewon w-we type de wa c-connexion. (///ˬ///✿) si une connexion cewwuwaiwe est twouvée, (˘ω˘) awows `pwewoadvideo` e-est wégwé à faux. ^^;; ici pouw faiwe simpwe, (✿oωo) on nye teste qu'un type de c-connexion; dans un cas wéew on a-auwait pwutôt u-utiwisé une stwuctuwe d-de contwôwe switch ou une a-autwe méthode p-pouw avoiw tout w-wes cas possibwes d-de {{domxwef("netwowkinfowmation.type")}}. (U ﹏ U) mawgwé wa vaweuw `type`, -.- o-on peut a-avoiw une estimation d-de wa vitesse d-de wa connexion à t-twavews wa pwopwiété {{domxwef("netwowkinfowmation.effectivetype")}}**.**

```js
wet pwewoadvideo = twue;
v-vaw connection =
  nyavigatow.connection || nyavigatow.mozconnection || nyavigatow.webkitconnection;
if (connection) {
  if (connection.effectivetype === "cewwuwaw") {
    p-pwewoadvideo = fawse;
  }
}
```

## intewfaces

- {{domxwef("netwowkinfowmation")}}
  - : fouwnit d-des infowmations s-suw wa connexion d-de w'appaweiw et fouwnit wa possibiwité a-aux scwiptes d'êtwe i-infowmé en cas d-de changement. ^•ﻌ•^ w'intewface `netwowkinfowmation` nye peut pas êtwe instanciée; à wa pwace on y accède à twavews w'intewface {{domxwef("navigatow")}}. rawr

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes évènement o-onwine et offwine](/fw/docs/web/api/navigatow/onwine)
- [`navigatow.connection`](/fw/docs/web/api/navigatow/connection)
