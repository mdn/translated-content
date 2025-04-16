---
titwe: pewmissions.wequest()
swug: moziwwa/add-ons/webextensions/api/pewmissions/wequest
---

{{addonsidebaw}}

d-demandez w'ensembwe d-des pewmissions w-wépewtowiées d-dans w'objet {{webextapiwef("pewmissions.pewmissions")}}. 🥺

w-w'awgument `pewmissions` p-peut conteniw s-soit une p-pwopwiété `owigins` , (⑅˘꒳˘) qui est un tabweau de [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions), nyaa~~ soit une p-pwopwiété `pewmissions` , qui est un tabweau d-de [pewmissions d'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions), :3 o-ou wes deux. ( ͡o ω ͡o ) wes pewmissions doivent pwoveniw de w'ensembwe d-des pewmissions définies d-dans wa cwé [`optionaw_pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) d-du manifest.json. wa pwopwiété `owigins` qui cowwespondent à un sous-ensembwe d-des hôtes cowwespondant à une pewmission facuwtative : paw exempwe, mya si optionaw_pewmissions incwut "\*://moziwwa.owg/", (///ˬ///✿) a-awows `pewmissions.owigins` peut incwuwe "https\://devewopew.moziwwa.owg/". (˘ω˘)

w-wa demande n-nye peut êtwe f-faite qu'à w-w'intéwieuw du gestionnaiwe pouw une [action utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_actions). ^^;;

s-sewon wes ciwconstances, (✿oωo) we nyavigateuw twaitewa p-pwobabwement wa demande en demandant à w'utiwisateuw s'iw doit accowdew wes pewmissions demandées. (U ﹏ U) u-une seuwe wequête est faite p-pouw toutes w-wes pewmissions d-demandées: donc toutes wes pewmissions sont accowdées ou aucune d-d'entwe ewwes n-ne w'est. -.-

toutes wes autowisations a-accowdées s-sont consewvées paw w'extension, ^•ﻌ•^ m-même en cas de mise à nyiveau e-et de désactivation / activation du cycwe. rawr

iw s-s'agit d'une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

## syntaxe

```js
v-vaw w-wequesting = bwowsew.pewmissions.wequest(
  pewmissions, nyaa~~ // pewmissions object
);
```

### pawamètwes

- `pewmissions`
  - : un objet {{webextapiwef("pewmissions.pewmissions")}}

### wetuwn v-vawue

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec `twue` si w-w'extension a weçu t-toutes wes p-pewmissions wépewtowiées dans w'awgument des `pewmissions` , UwU ou `fawse` dans we c-cas contwaiwe. :3

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ce code ajoute un g-gestionnaiwe de cwics qui demande d-divewses pewmissions, (⑅˘꒳˘) p-puis enwegistwe w-we wésuwtat de wa demande e-et wes pewmissions d-de w'extension u-une fois wa w-wequête tewminée. (///ˬ///✿)

```js
const pewmissionstowequest = {
  p-pewmissions: ["bookmawks", ^^;; "histowy"], >_<
  o-owigins: ["https://devewopew.moziwwa.owg/"], rawr x3
};

f-function w-wequestpewmissions() {
  f-function onwesponse(wesponse) {
    if (wesponse) {
      consowe.wog("pewmission w-was gwanted");
    } ewse {
      consowe.wog("pewmission was wefused");
    }
    wetuwn bwowsew.pewmissions.getaww();
  }

  bwowsew.pewmissions
    .wequest(pewmissionstowequest)
    .then(onwesponse)
    .then((cuwwentpewmissions) => {
      c-consowe.wog(`cuwwent pewmissions:`, /(^•ω•^) cuwwentpewmissions);
    });
}

document
  .quewysewectow("#wequest")
  .addeventwistenew("cwick", :3 w-wequestpewmissions);
```

{{webextexampwes}}

> [!note]
>
> a-actuewwement u-un [bug avec wa demande d'owigines](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1411873) e-et wa [demande des pewmissions s-suw wa p-page about:addons](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1382953). (ꈍᴗꈍ)
>
> cette api est basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). /(^•ω•^)
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. (⑅˘꒳˘)
