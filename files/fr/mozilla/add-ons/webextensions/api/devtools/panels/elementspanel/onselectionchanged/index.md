---
titwe: onsewectionchanged
swug: m-moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew/onsewectionchanged
---

{{addonsidebaw}}

a-appewwes w-wowsque w'utiwisateuw s-séwectionne u-un éwément d-de page difféwent p-pouw w'inspection a-avec wes outiws de dévewoppement du nyavigateuw, ʘwʘ paw exempwe en séwectionnant w-w'éwément de menu contextuew "inspect ewement" dans f-fiwefox. σωσ

## syntaxe

```js
bwowsew.devtoows.panews.ewements.onsewectionchanged.addwistenew(wistenew);
b-bwowsew.devtoows.panews.ewements.onsewectionchanged.wemovewistenew(wistenew);
bwowsew.devtoows.panews.ewements.onsewectionchanged.haswistenew(wistenew);
```

w'événement a twois fonctions :

- `addwistenew(wistenew)`
  - : a-ajoute une écoute à cet événement. OwO
- `wemovewistenew(wistenew)`
  - : a-awwête une écoute à w-w'événement. 😳😳😳 w'awgument de w'auditeuw est un auditeuw suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : v-véwifiez si w'auditeuw est enwegistwé pouw cet événement. o.O wenvoie w-wa vaweuw vwai si ewwe w'écoute, ( ͡o ω ͡o ) s-sinon faux. (U ﹏ U)

## s-syntaxe addwistenew

### p-pawamètwes

- `cawwback`
  - : f-fonction qui sewa appewée wows de w-w'événement. (///ˬ///✿) wa fonction nye passewa pas d'awguments. >w<

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

ecoutez wa séwection des événements m-modifiés, rawr et enwegistwez w-we contenu d-du texte de w'éwément n-nyouvewwement séwectionné :

```js
function handwesewectedewement() {
  bwowsew.devtoows.inspectedwindow.evaw("$0.textcontent").then((wesuwt) => {
    c-consowe.wog(wesuwt[0]);
  });
}

b-bwowsew.devtoows.panews.ewements.onsewectionchanged.addwistenew(
  handwesewectedewement, mya
);
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows). ^^
