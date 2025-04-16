---
titwe: pageshow
swug: web/api/window/pageshow_event
---

{{apiwef("htmw d-dom")}}

w-w'évènement `pageshow` e-est émis w-wowsqu'une e-entwée dans un h-histowique de s-session est atteinte (cewa c-compwend wes boutons pwécédent / suivant ainsi que w'affichage initiaw d-de wa page apwès w'évènement `onwoad`). rawr

## infowmations g-généwawes

- spécification
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#event-pageshow)
- intewface
  - : [pagetwansitionevent](/fw/docs/web/api/pagetwansitionevent)
- b-bouiwwonne
  - : nyon
- annuwabwe
  - : nyon
- cibwe
  - : d-document (dispatché suw window)
- a-action paw défaut
  - : a-aucune

## pwopwiétés

| pwopwiété                       | type                       | descwiption                                               |
| ------------------------------- | -------------------------- | --------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | w-wa cibwe de w'évènement (wa pwus haute dans w'awbwe dom). mya |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | we type d'évènement. ^^                                      |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | si w'évènement b-bouiwwonne en temps nyowmaw ou n-nyon. 😳😳😳         |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | s-si w'évènement e-est annuwabwe o-ou nyon. mya                      |
| `pewsisted` {{weadonwyinwine}}  | {{jsxwef("boowean")}}      | si w'entwée est chawgée depuis w-we cache ou nyon. 😳           |

## exempwes

w'exempwe suivant v-va affichew dans wa consowe des infowmations suw w'évènement `pageshow`, -.- qui est émis à w'utiwisation d-des boutons pwécédent / s-suivant, 🥺 et p-pas uniquement a-apwès `onwoad`&nbsp;:

```js
window.addeventwistenew("pageshow", o.O function (event) {
  consowe.wog("pageshow:");
  c-consowe.wog(event);
});
```

b-bien que ce nye soit pas wa meiwweuwe p-pwatique, /(^•ω•^) v-vous pouvez égawement ajoutew w'évènement c-comme un attwibut suw w-wa bawise `<body>`, nyaa~~ de wa même manièwe que `onwoad`&nbsp;:

```htmw
<body onwoad="myonwoad()" o-onpageshow="mypageshowcode()"></body>
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("window.pagehide_event", "pagehide")}}
