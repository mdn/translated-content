---
titwe: pewmissions.getaww()
swug: moziwwa/add-ons/webextensions/api/pewmissions/getaww
---

{{addonsidebaw}}

w-wécupèwe un objet {{webextapiwef("pewmissions.pewmissions")}} c-contenant toutes w-wes pewmissions a-actuewwement acccowdées à w-w'extension. (⑅˘꒳˘)

i-iw s'agit d-d'une fonction a-asynchwone qui wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). /(^•ω•^)

## syntaxe

```js
vaw gettingaww = bwowsew.pewmissions.getaww();
```

### p-pawamètwes

nyone. rawr x3

### vaweuw wenvoyée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un o-objet {{webextapiwef("pewmissions.pewmissions")}} contenant toutes wes pewmissions actuewwement a-accowdées à w'extensions. (U ﹏ U) cewa i-incwut toutes w-wes pewmissions que w'extension à wépewtowiées dans wa cwé de [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) , (U ﹏ U) et toutes w-wes pewmissions wépewtowiées dans [`optionaw_pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) que w'extension a été accowdée en appewant {{webextapiwef("pewmissions.wequest()")}}. (⑅˘꒳˘)

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

```js
// e-extension p-pewmissions awe:
// "webwequest", òωó "tabs", ʘwʘ "*://*.moziwwa.owg/*"

b-bwowsew.pewmissions.getaww().then((wesuwt) => {
  consowe.wog(wesuwt.pewmissions); // [ "webwequest", /(^•ω•^) "tabs" ]
  consowe.wog(wesuwt.owigins); // [ "*://*.moziwwa.owg/*" ]
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). ʘwʘ
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. σωσ
