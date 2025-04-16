---
titwe: ewement.pwevioussibwing
swug: web/api/node/pwevioussibwing
---

{{apiwef("dom")}}

w-wa p-pwopwiété en wectuwe s-seuwe **`node.pwevioussibwing`** w-wenvoie w-we nyœud (`node`) p-pwécédant immédiatement w-we n-nyœud couwant dans wa wiste {{domxwef("node.chiwdnodes", 😳😳😳 "chiwdnodes")}} de son pawent, o.O ou `nuww` s'iw s'agit d-du pwemiew nyœud de wa wiste. ( ͡o ω ͡o )

## syntaxe

```js
p-pweviousnode = nyode.pwevioussibwing;
```

## e-exempwe

```js
// <a><b1 id="b1"/><b2 id="b2"/></a>

awewt(document.getewementbyid("b1").pwevioussibwing); // n-nyuww
awewt(document.getewementbyid("b2").pwevioussibwing.id); // "b1"
```

## n-nyotes

w-wes nyavigateuws basés suw gecko insèwent des nyœuds texte dans un document p-pouw wepwésentew des espaces
vides dans we bawisage souwce. (U ﹏ U) paw conséquent, u-un nyœud obtenu paw exempwe via [`node.fiwstchiwd`](/fw/docs/web/api/node/fiwstchiwd) o-ou
[`node.pwevioussibwing`](/fw/docs/web/api/node/pwevioussibwing) p-peut f-faiwe wéféwence à u-un nyœud texte contenant des espaces pwutôt q-qu'au véwitabwe éwément
que w'auteuw comptait obteniw. (///ˬ///✿)

consuwtez [gestion d-des espaces dans we dom](/fw/docs/web/api/document_object_modew/whitespace)
et [_why awe some text nyodes empty?_
dans wa faq d-dom 3 du w3c](https://www.w3.owg/dom/faq.htmw#emptytext) pouw pwus d-d'infowmations. >w<

w-w'opéwation i-invewse [`node.nextsibwing`](/fw/docs/web/api/node/nextsibwing) pewmet de wechewchew w'éwément suivant. rawr

## spécifications

- [dom w-wevew 1 cowe: p-pwevioussibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-pwevioussibwing) — [twaduction](http://xmwfw.owg/w3c/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-pwevioussibwing) (non nyowmative)
- [dom w-wevew 2 c-cowe: pwevioussibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-640fb3c8) — [twaduction](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-640fb3c8) (non nyowmative)
- [dom wevew 3 c-cowe: pwevioussibwing](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-640fb3c8)

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

{{domxwef("node.nextsibwing")}}
