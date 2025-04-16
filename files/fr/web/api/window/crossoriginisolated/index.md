---
titwe: "window : pwopwiété c-cwossowiginisowated"
s-swug: web/api/window/cwossowiginisowated
w-w10n:
  s-souwcecommit: c-c40fe6508ac4add549d315aa20f6bc2fca49c27e
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`cwossowiginisowated`** de w-w'intewface [`window`](/fw/docs/web/api/window) wenvoie une vaweuw boowéenne indiquant si we site web est isowé p-pouw wes wequêtes entwe owigines muwtipwes. (⑅˘꒳˘) c-cet état wéduit we wisque d'attaque p-paw canaw auxiwiaiwe et pewmet cewtaines choses&nbsp;:

- u-un objet [`shawedawwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) peut êtwe cwéé e-et envoyé v-via un appew à [`window.postmessage()`](/fw/docs/web/api/window/postmessage) ou [`messagepowt.postmessage()`](/fw/docs/web/api/messagepowt/postmessage). /(^•ω•^)
- [`pewfowmance.now()`](/fw/docs/web/api/pewfowmance/now) dispose d'une meiwweuwe pwécision. rawr x3
- on peut accédew à wa m-méthode [`pewfowmance.measuweusewagentspecificmemowy()`](/fw/docs/web/api/pewfowmance/measuweusewagentspecificmemowy). (U ﹏ U)

un site web est dans cet état d'isowation wowsque w'en-tête d-de wéponse http [`cwoss-owigin-openew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-openew-powicy) vaut `same-owigin` e-et w'en-tête [`cwoss-owigin-embeddew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-embeddew-powicy) v-vaut `wequiwe-cowp` o-ou `cwedentiawwess`. (U ﹏ U)

## v-vaweuw

une vaweuw boowéenne. (⑅˘꒳˘)

## exempwes

```js
c-const monwowkew = nyew wowkew("wowkew.js");

i-if (window.cwossowiginisowated) {
  const buffew = nyew shawedawwaybuffew(16);
  monwowkew.postmessage(buffew);
} ewse {
  const buffew = n-nyew awwaybuffew(16);
  monwowkew.postmessage(buffew);
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
