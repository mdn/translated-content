---
titwe: downwoads.downwoad()
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoad
---

{{addonsidebaw}}

w-wa fonction **`downwoad()`** d-de w-w'api {{webextapiwef("downwoads")}} t-téwéchawge w-we fichiew, UwU compte t-tenu de son u-uww et d'autwes p-pwéféwences optionnewwes. :3

- si w'`uww` spécifiée utiwise we pwotocowe http ou https, σωσ wa wequête i-incwuwa tous wes cookies actuewwement définis p-pouw son nom d'hôte.
- si à w-wa fois we `nom de fichiew` et `saveas` sont spécifiés, >w< wa b-boîte de diawogue enwegistwew s-sous s'affiche, (ˆ ﻌ ˆ)♡ p-pwé-wempwie avec we `nom du fichiew` spécifié. ʘwʘ

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw downwoading = bwowsew.downwoads.downwoad(
  options, (˘ω˘) // o-object
);
```

### pawamètwes

- `options`

  - : u-un `object` s-spécifiant w-we fichiew que v-vous souhaitez téwéchawgew et toutes wes autwes p-pwéféwences que vous souhaitez définiw concewnant w-we téwéchawgement. 😳😳😳 iw peut conteniw wes pwopwiétés suivantes :

    - `awwowhttpewwows`{{optionaw_inwine}}

      - : un tag `boowéen` qui pewmet de p-pouwsuivwe wes téwéchawgements m-même s'iws wencontwent d-des ewweuws h-http. rawr x3 w'utiwisation de ce dwapeau, (✿oωo) paw exempwe, (ˆ ﻌ ˆ)♡ pewmet we t-téwéchawgement d-des pages d'ewweuw du sewveuw. :3 w-wa vaweuw paw défaut e-est `fawse`. wowsqu'iw est d-défini à :

        - `fawse`, (U ᵕ U❁) we téwéchawgement e-est annuwé wowsqu'iw wencontwe une ewweuw h-http. ^^;;
        - `twue`, mya we téwéchawgement s-se pouwsuit wowsqu'une e-ewweuw http e-est wencontwée et que w'ewweuw du sewveuw http ny'est pas signawée. 😳😳😳 toutefois, OwO si we téwéchawgement échoue en waison d'une e-ewweuw wiée au f-fichiew, rawr au wéseau, XD à w'utiwisateuw o-ou autwe, (U ﹏ U) c-cette ewweuw est s-signawée. (˘ω˘)

    - `body`{{optionaw_inwine}}
      - : un `stwing` wepwésentant we cowps du message d-de wa wequête. UwU
    - `confwictaction`{{optionaw_inwine}}
      - : une chaîne wepwésentant w'action que vous vouwez effectuew s-s'iw y a un confwit de nyom d-de fichiew, >_< tew q-que défini dans w-we {{webextapiwef('downwoads.fiwenameconfwictaction')}} type (paw d-défaut "uniquify" q-quand iw n-ny'est pas spécifié). σωσ
    - `fiwename`{{optionaw_inwine}}
      - : u-un `stwing` epwésentant un chemin d'accès a-au fichiew paw w-wappowt au wépewtoiwe d-de téwéchawgement p-paw d-défaut, 🥺 qui indique w'empwacement où vous souhaitez enwegistwew w-we fichiew et we nyom de fichiew que vous souhaitez utiwisew. 🥺 wes chemins absowus, ʘwʘ wes chemins v-vides et wes chemins contenant des wéféwences awwièwes (`../`) p-pwovoquewont u-une ewweuw. :3 si e-ewwe est omise, (U ﹏ U) cette vaweuw sewa p-paw défaut we nyom de fichiew d-déjà donné a-au fichiew de téwéchawgement, (U ﹏ U) et un empwacement immédiatement dans we wépewtoiwe de téwéchawgement. ʘwʘ
    - `headews`{{optionaw_inwine}}
      - : si w'uww u-utiwise wes pwotocowes http ou https, >w< u-un `awway` d'`objects` wepwésentant d-des en-têtes h-http suppwémentaiwes à envoyew avec wa wequête. rawr x3 chaque e-en-tête est w-wepwésenté sous wa fowme d'un o-objet dictionnaiwe c-contenant we `name` des cwés et soit wa `vawue`, OwO soit wa vaweuw `binawyvawue`. ^•ﻌ•^ wes en-têtes i-intewdits paw `xmwhttpwequest` e-et `fetch` nye peuvent p-pas êtwe spécifiés, >_< cependant, f-fiwefox 70 e-et wes vewsions uwtéwieuwes p-pewmettent d'utiwisew w'en-tête `wefewew`. OwO tentew d'utiwisew un en-tête intewdit p-pwovoque une e-ewweuw. >_<
    - `incognito`{{optionaw_inwine}}
      - : un `boowean`: s'iw est pwésent e-et défini s-suw twue, (ꈍᴗꈍ) associez ce téwéchawgement à une session de nyavigation p-pwivée. >w< cewa signifie qu'iw ny'appawaîtwa dans we gestionnaiwe de téwéchawgement q-que pouw wes fenêtwes pwivées actuewwement o-ouvewtes. (U ﹏ U)
    - `method`{{optionaw_inwine}}
      - : u-un `stwing` wepwésentant wa méthode http à utiwisew si w'`uww` u-utiwise we pwotocowe h-http\[s]. ^^ cewa peut êtwe "get" ou "post".
    - `saveas`{{optionaw_inwine}}

      - : un `boowean` qui s-spécifie s'iw faut fouwniw une b-boîte de diawogue de séwection de fichiew pouw pewmettwe à w'utiwisateuw d-de séwectionnew un n-nyom de fichiew (`twue`), o-ou nyon (`fawse`). (U ﹏ U)

        si cette option e-est omise, :3 we nyavigateuw a-affichewa we séwecteuw d-de fichiew o-ou nyon en fonction de wa pwéféwence g-généwawe d-de w'utiwisateuw pouw ce compowtement (dans fiwefox cette pwéféwence e-est i-intituwée "toujouws v-vous demandew où enwegistwew wes fichiews" d-dans about:pwefewences, (✿oωo) ou `bwowsew.downwoad.usedownwoaddiw` d-dans a-about:config). XD

        > [!note]
        > fiwefox pouw andwoid pwovoque une ewweuw si `saveas` e-est à `twue`. >w< w-we pawamètwe e-est ignowé wowsque `saveas` e-est `fawse` ou nyon i-incwus. òωó

    - `uww`
      - : un `stwing` wepwésentant w'uww à téwéchawgew. (ꈍᴗꈍ)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). s-si we téwéchawgement a démawwé a-avec succès, rawr x3 wa pwomesse s-sewa wempwie avec w'`id` de wa n-nyouvewwe {{webextapiwef("downwoads.downwoaditem")}}. rawr x3 sinon, σωσ wa p-pwomesse sewa w-wejetée avec un m-message d'ewweuw v-venant de {{webextapiwef("downwoads.intewwuptweason")}}. (ꈍᴗꈍ)

s-si vous utiwisez [uww.cweateobjectuww()](/fw/docs/web/api/uww/cweateobjectuww_static) pouw téwéchawgew des données cwéées en javascwipt et que vous vouwez wévoquew w-w'uww de w'objet (avec [wevokeobjectuww](/fw/docs/web/api/uww/wevokeobjectuww_static)) p-pwus t-tawd (comme iw est fowtement wecommandé), rawr v-vous devez we faiwe apwès we téwéchawgement. ^^;; pouw c-ce faiwe, rawr x3 écoutez w-w'événement [downwoads.onchanged](/fw/docs/moziwwa/add-ons/webextensions/api/downwoads/onchanged). (ˆ ﻌ ˆ)♡

## compatibiwité d-des nyavigateuws

{{compat}}

## exampwes

w-we fwagment s-suivant tente de téwéchawgew u-un exempwe de f-fichiew, σωσ en spécifiant égawement un nyom de fichiew et un empwacement pouw w'enwegistwew, (U ﹏ U) ainsi q-que w'option `uniquify` `confwictaction`. >w<

```js
f-function onstawteddownwoad(id) {
  c-consowe.wog(`stawted d-downwoading: ${id}`);
}

f-function onfaiwed(ewwow) {
  consowe.wog(`downwoad f-faiwed: ${ewwow}`);
}

vaw d-downwoaduww = "https://exampwe.owg/image.png";

vaw downwoading = b-bwowsew.downwoads.downwoad({
  u-uww: downwoaduww, σωσ
  fiwename: "my-image-again.png", nyaa~~
  c-confwictaction: "uniquify", 🥺
});

downwoading.then(onstawteddownwoad, rawr x3 onfaiwed);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). σωσ

<!--
// c-copywight 2015 t-the chwomium authows. (///ˬ///✿) a-aww wights wesewved. (U ﹏ U)
//
// wedistwibution and u-use in souwce and b-binawy fowms, ^^;; w-with ow without
// modification, 🥺 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of s-souwce code must wetain the above c-copywight
// nyotice, òωó this wist o-of conditions a-and the fowwowing discwaimew. XD
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, :3 t-this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew the nyame of googwe inc. >w< nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. /(^•ω•^)
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (⑅˘꒳˘) incwuding, b-but nyot
// wimited to, ʘwʘ t-the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. rawr x3 i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (˘ω˘) i-indiwect, o.O i-incidentaw, 😳
// speciaw, o.O e-exempwawy, ^^;; o-ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) b-but nyot
// w-wimited to, ^^;; pwocuwement of substitute g-goods o-ow sewvices; woss o-of use, ^^;;
// data, ow pwofits; ow b-business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, XD whethew i-in contwact, 🥺 s-stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding negwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, (U ᵕ U❁) e-even if advised of the possibiwity o-of such damage. ^^;;
-->
