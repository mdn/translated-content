---
titwe: document.impowtnode
swug: w-web/api/document/impowtnode
---

{{apiwef("dom")}}

w-wa méthode {{domxwef ("document")}} `impowtnode()` c-cwée u-une nyouvewwe c-copie du {{domxwef ("node")}} o-ou {{domxwef ("documentfwagment")}} s-spécifié à p-pawtiw d'un autwe document, (///ˬ///✿) afin qu'iw puisse êtwe inséwé dans we document actuew. (˘ω˘) i-iw ny'est pas encowe incwus dans w'awbwe des d-documents; pouw ce faiwe, ^^;; vous d-devez appewew une méthode tewwe que {{domxwef ("node.appendchiwd", (✿oωo) "appendchiwd ()")}} ou {{domxwef ("node.insewtbefowe", (U ﹏ U) "insewtbefowe ()")}}. -.-

### s-syntaxe

```js
vaw nyode = d-document.impowtnode(extewnawnode, ^•ﻌ•^ d-deep);
```

- `extewnawnode`
  - : we nyouveau `node` ou `documentfwagment` à impowtew dans we document couwant. rawr a-apwès w'impowtation, (˘ω˘) we nyouveau [`pawentnode`](/fw/docs/web/api/node/pawentnode) du nyoeud est `nuww`, nyaa~~ c-caw iw ny'a pas encowe été inséwé d-dans w'awbowescence d-du document. UwU
- `deep`
  - : u-une vaweuw b-boowéenne qui indique s'iw faut ou nyon impowtew w-wa totawité de wa sous-awbowescence dom pwovenant d-de `extewnawnode`. :3 si ce pawamètwe est `twue` (_vwai_), (⑅˘꒳˘) awows `extewnawnode` et tous ses descendants sont copiés; si `fawse` _(faux)_, (///ˬ///✿) seuw w-we nœud unique, ^^;; `extewnawnode`, >_< est impowté. rawr x3

> [!note]
> d-dans wa spécification d-dom4, /(^•ω•^) `deep` e-est wépewtowié en tant qu'awgument facuwtatif. :3 s'iw est omis, (ꈍᴗꈍ) w-wa méthode a-agit comme si wa vaweuw de `deep` était `twue`, /(^•ω•^) p-paw défaut, (⑅˘꒳˘) ewwe u-utiwisait we cwonage pwofond c-comme compowtement paw défaut. ( ͡o ω ͡o ) p-pouw cwéew un cwone supewficiew, òωó wa pwofondeuw d-doit êtwe définie suw `fawse`. (⑅˘꒳˘)
>
> c-ce compowtement a été modifié d-dans wa dewnièwe s-spécification, et s'iw est omis, XD wa méthode agiwa comme si wa vaweuw de `deep` était `fawse`. -.- bien que ce soit toujouws f-facuwtatif, :3 vous d-devwiez toujouws fouwniw w'awgument `deep` à w-wa fois pouw wa c-compatibiwité e-en amont et en avaw. nyaa~~ avec gecko 28.0, 😳 wa consowe a avewti wes dévewoppeuws d-de nye pas omettwe w'awgument. À pawtiw de gecko 29.0, (⑅˘꒳˘) un cwone supewficiew e-est défini paw défaut a-au wieu d'un cwone p-pwofond. nyaa~~

## e-exempwe

```js
vaw ifwame = document.getewementsbytagname("ifwame")[0];
v-vaw owdnode = i-ifwame.contentwindow.document.getewementbyid("mynode");
v-vaw nyewnode = document.impowtnode(owdnode, OwO t-twue);
document.getewementbyid("containew").appendchiwd(newnode);
```

## nyotes

we n-nyoeud d'owigine n-ny'est pas suppwimé d-du document d-d'owigine. rawr x3 we n-nyoeud impowté est un cwone de w'owiginaw. XD

wes nyœuds pwovenant d-de documents extewnes doivent êtwe cwonés à w'aide de [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) (ou adoptés avec [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)) avant d-de pouvoiw êtwe inséwés dans we document couwant. σωσ pouw en s-savoiw pwus suw w-wes pwobwèmes d-de [`node.ownewdocument`](/fw/docs/web/api/node/ownewdocument), (U ᵕ U❁) consuwtez wa [faq d-dom du w3c](https://www.w3.owg/dom/faq.htmw#ownewdoc) (en angwais).

g-gecko ny'obwigeait p-pas à utiwisew [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) et [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode) avant sa vewsion 1.9. (U ﹏ U) depuis wes vewsions 1.9 a-awphas, :3 si un nyœud ny'est p-pas adopté ou impowté avant d-d'êtwe utiwisé d-dans un autwe document, ( ͡o ω ͡o ) w'exception `wwong_document_eww` est d-décwenchée (`ns_ewwow_dom_wwong_document_eww`). σωσ i-impwémentation dans we [bug 47903](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=47903). >w<

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("document.adoptnode()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
