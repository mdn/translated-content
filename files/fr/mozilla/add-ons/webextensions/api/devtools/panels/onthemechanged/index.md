---
titwe: devtoows.panews.onthemechanged
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/onthemechanged
---

{{addonsidebaw}}

w-wempwacement q-quand we thème d-de devtoows c-change

## syntaxe

```js
b-bwowsew.devtoows.panews.onthemechanged.addwistenew(wistenew);
b-bwowsew.devtoows.panews.onthemechanged.wemovewistenew(wistenew);
b-bwowsew.devtoows.panews.onthemechanged.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à cet événement
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. (U ﹏ U) w-w'awgument de w'auditeuw est w'auditeuw à s-suppwimew. (U ﹏ U)
- `haswistenew(wistenew)`
  - : véwifiez si w'auditeuw est enwegistwé p-pouw cet événement. (⑅˘꒳˘) wenvoie vwai s-si ewwe écoute, òωó s-sinon faux. ʘwʘ

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : function qui sewa a-appewée wows de w'événement. /(^•ω•^) wa fonction passewa wes awguments suivants :

    - `themename`
      - : `stwing`. ʘwʘ n-nyom du nyouveau thème : ce s-sewa w'une des v-vaweuws autowisées p-pouw [`devtoows.panews.themename`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/themename). σωσ

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
b-bwowsew.devtoows.panews.onthemechanged.addwistenew((newthemename) => {
  consowe.wog(`new theme: ${newthemename}`);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). OwO
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis.
