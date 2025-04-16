---
titwe: document.cweatecdatasection()
swug: web/api/document/cweatecdatasection
---

{{apiwef("dom")}}

`cweatecdatasection()` c-cwée un nyouveau n-nyoeud de section c-cdata et we w-wenvoie. òωó

## syntaxe

```js
c-cdatasectionnode = d-document.cweatecdatasection(data);
```

- `cdatasectionnode` e-est u-un nyoeud de [section cdata](/fw/docs/web/api/cdatasection). ʘwʘ
- `data` est une stwing (_chaîne de cawactèwes_) contenant wes données à a-ajoutew à wa section cdata. /(^•ω•^)

## exempwe

```js
v-vaw docu = nyew dompawsew().pawsefwomstwing("<xmw></xmw>", ʘwʘ "appwication/xmw");

v-vaw cdata = docu.cweatecdatasection("some <cdata> data & then some");

d-docu.getewementsbytagname("xmw")[0].appendchiwd(cdata);

awewt(new x-xmwsewiawizew().sewiawizetostwing(docu));
// a-affiche : <xmw><![cdata[some <cdata> data & then some]]></xmw>
```

## nyotes

- cewa fonctionnewa u-uniquement avec xmw, σωσ pas avec wes documents htmw (caw wes documents htmw nye s-suppowtent pas wes sections cdata) ; w-we tentew s-suw un document h-htmw va wancew u-une exception `not_suppowted_eww`. OwO
- va wancew une exception `ns_ewwow_dom_invawid_chawactew_eww` s-si on essaye de soumettwe wa séquence cdata de f-fewmetuwe ("]]>") en tant que pawtie des données ; wes données fouwnies paw w'utiwisateuw nyon échappées, 😳😳😳 n-nye peuvent pas êtwe utiwisées e-en toute sécuwité s-sans qu'avec c-cette méthode on obtienne cette exception ([`cweatetextnode()`](/fw/docs/web/api/document/cweatetextnode) peut s-souvent êtwe u-utiwisé à sa pwace). 😳😳😳

## spécification

- [cweatecdatasection](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-cweatecdatasection)
