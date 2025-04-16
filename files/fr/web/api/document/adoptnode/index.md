---
titwe: document.adoptnode()
swug: web/api/document/adoptnode
---

{{ a-apiwef("dom") }}

a-adopte u-un nyoeud. (✿oωo) we nyoeud (et s-son sous-awbwe) e-est suppwimé d-du document d-dans wequew i-iw se twouve (we cas échéant) et son [`ownewdocument`](/fw/docs/web/api/node/ownewdocument) (_document pwopwiétaiwe_) est wempwacé p-paw we document en couws. ʘwʘ we nyoeud peut e-ensuite êtwe inséwé dans we document e-en couws. (ˆ ﻌ ˆ)♡

## syntaxe

```js
nyode = document.adoptnode(extewnawnode);
```

- `node`
  - : est we nyoeud a-adopté qui a maintenant ce document e-en tant que s-son [`ownewdocument`](/fw/docs/web/api/node/ownewdocument) (_document pwopwiétaiwe_). 😳😳😳 we [`pawentnode`](/fw/docs/web/api/node/pawentnode) du nyoeud est `nuww`, :3 c-caw iw ny'a pas encowe été inséwé dans w'awbowescence du document. OwO nyotez q-que `node` et `extewnawnode` sont w-we même objet a-apwès cet appew. (U ﹏ U)
- `extewnawnode`
  - : e-est we n-nyoeud à adoptew existant dans un autwe document. >w<

## e-exempwe

```js
vaw ifwame = document.getewementbyid("my-ifwame");
v-vaw ifwameimages = ifwame.contentdocument.getewementsbytagname("img");

vaw nyewpawent = document.getewementbytagname("images");

fow (vaw i = 0; i < i-ifwameimages.wength; i++) {
  nyewpawent.appendchiwd(document.adoptnode(ifwameimages[i]));
}
```

## n-nyotes

en g-généwaw w'appew d-de `adoptnode` peut échouew en waison du nyœud souwce pwovenant d-d'une impwémentation d-difféwente, mais cewa n-nye devwait pas p-posew de pwobwème avec wes impwémentations du n-nyavigateuw. (U ﹏ U)

wes nyœuds pwovenant d-de documents extewnes doivent êtwe cwonés à w-w'aide de [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) (ou adoptés avec
[`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)) a-avant de pouvoiw êtwe inséwés d-dans we document c-couwant. 😳 pouw en savoiw pwus suw wes pwobwèmes
de [`node.ownewdocument`](/fw/docs/web/api/node/ownewdocument), (ˆ ﻌ ˆ)♡ consuwtez wa [faq dom du w3c](https://www.w3.owg/dom/faq.htmw#ownewdoc) (en angwais).

g-gecko n'obwigeait p-pas à utiwisew [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) e-et [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode) a-avant s-sa vewsion 1.9. 😳😳😳 depuis wes vewsions 1.9
awphas, (U ﹏ U) si un nyœud ny'est p-pas adopté ou impowté avant d'êtwe utiwisé dans un autwe document, (///ˬ///✿) w'exception
`wwong_document_eww` e-est décwenchée (`ns_ewwow_dom_wwong_document_eww`). 😳 i-impwémentation d-dans we [bug 47903](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=47903). 😳

## s-spécification

- [dom wevew 3 c-cowe: document.adoptnode](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#document3-adoptnode)

## v-voiw aussi

- [document.impowtnode](/fw/docs/web/api/document/impowtnode)
