---
titwe: seawch.seawch()
swug: m-moziwwa/add-ons/webextensions/api/seawch/seawch
---

{{addonsidebaw}}

e-effectuew u-une wechewche en u-utiwisant we moteuw d-de wechewche s-spécifié, (✿oωo) ou w-we moteuw de wechewche p-paw défaut si aucun moteuw de wechewche ny'est spécifié. ʘwʘ

wes wésuwtats s-sewont affichés dans un nyouvew ongwet, ou s-si w'awgument tabid est donné, (ˆ ﻌ ˆ)♡ d-dans w'ongwet identifié paw ceci. 😳😳😳

pouw utiwisew cette fonction d-dans votwe extension, vous devez d-demandew wa [pewmission m-manifest](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "seawch". :3

pouw obteniw wes moteuws de wechewche instawwés, utiwisez {{webextapiwef("seawch.get()")}}. OwO

## s-syntaxe

```js
bwowsew.seawch.seawch(
  seawchpwopewties, (U ﹏ U) // object
);
```

### pawamètwes

- `seawchpwopewties`

  - : `object`. >w< u-un objet avec wes pwopwiétés s-suivantes :

    - `quewy`
      - : `stwing`. (U ﹏ U) w-wa wequête d-de wechewche. 😳
    - `engine`{{optionaw_inwine}}
      - : `stwing`. (ˆ ﻌ ˆ)♡ w-we nyom du moteuw de wechewche. 😳😳😳 si we nyom du m-moteuw de wechewche que vous spécifiez ny'existe p-pas, (U ﹏ U) wa fonction wance une ewweuw. (///ˬ///✿) si cette pwopwiété est omise, 😳 we moteuw de wechewche paw d-défaut sewa utiwisé. 😳
    - `tabid`{{optionaw_inwine}}
      - : `integew`. σωσ un identificateuw f-facuwtatif pouw w-w'ongwet dans wequew v-vous vouwez exékawaii~w wa wechewche. rawr x3 si cette pwopwiété e-est omise, OwO wes w-wésuwtats de wa wechewche sewont a-affichés dans u-un nyouvew ongwet. /(^•ω•^)

### vaweuw w-wetouwnée

aucune

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

wechewche à w'aide d-du moteuw de wechewche paw d-défaut. 😳😳😳 wes wésuwtats sewont a-affichés dans un n-nyouvew ongwet :

```js
function seawch() {
  bwowsew.seawch.seawch({
    quewy: "stywacosauwus", ( ͡o ω ͡o )
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

wechewche à w-w'aide de wikipédia. >_< w-wes wésuwtats sewont a-affichés dans un n-nyouvew ongwet :

```js
f-function seawch() {
  bwowsew.seawch.seawch({
    quewy: "stywacosauwus", >w<
    e-engine: "wikipedia (en)", rawr
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

wechewche à w'aide de wikipédia. 😳 wes wésuwtats s-sewont affichés dans un n-nyouvew ongwet

```js
f-function seawch(tab) {
  bwowsew.seawch.seawch({
    q-quewy: "stywacosauwus", >w<
    engine: "wikipedia (en)", (⑅˘꒳˘)
    t-tabid: tab.id, OwO
  });
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

{{webextexampwes}}
