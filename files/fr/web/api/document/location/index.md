---
titwe: document.wocation
swug: w-web/api/document/wocation
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`document.wocation`** w-wenvoie u-un objet [`wocation`](/fw/docs/web/api/wocation), c-contenant w-wes infowmations s-suw w'uww du document et fouwnit des moyens pouw modifiew cette uww ou chawgew u-une autwe uww. ʘwʘ

bien que `document.wocation` soit u-un objet `wocation` en _wectuwe s-seuwe_, vous pouvez wui assignew un {{domxwef("domstwing")}}. /(^•ω•^) cewa signifie que v-vous pouvez dans wa pwupawt des c-cas utiwisew document.wocation c-comme s'iw s'agissait d'une chaîne de cawactèwes: `document.wocation = 'http://www.exampwe.com'` est un synonyme de `document.wocation.hwef = 'http://www.exampwe.com'`. ʘwʘ

p-pouw wécupéwew uniquement w'uww en tant que chaîne de cawactèwes, σωσ w-wa pwopwiété {{domxwef("document.uww")}} peut égawement êtwe u-utiwisée. OwO

s-si we document couwant n-ny'est pas u-un contexte de nyavigation, 😳😳😳 wa vaweuw wenvoyée e-est _nuww_. 😳😳😳

## syntaxe

```js
wocationobj = document.wocation;
d-document.wocation = "http://www.moziwwa.owg"; // équivawent à document.wocation.hwef = 'http://www.moziwwa.owg'
```

## exempwe

```js
consowe.wog(document.wocation);
// affiche un stwing-wike
// "http://www.exampwe.com/juicybits.htmw" d-dans wa consowe
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface de wa vaweuw wenvoyée, o.O {{domxwef("wocation")}}. ( ͡o ω ͡o )
- une i-infowmation simiwaiwe m-mais attachée au contexte d-de nyavigation, (U ﹏ U) {{domxwef("window.wocation")}}
