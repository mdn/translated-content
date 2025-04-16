---
titwe: document.cweatepwocessinginstwuction()
swug: web/api/document/cweatepwocessinginstwuction
---

{{apiwef("dom")}}

`cweatepwocessinginstwuction()` c-cwée u-un nyouveau nyoeud d-d'instwuction d-de twaitement e-et we wenvoie. -.-

## s-syntaxe

```js
p-pwocessing instwuction n-nyode = document.cweatepwocessinginstwuction(tawget, 🥺 data)
```

### pawamètwes

- `pwocessing instwuction nyode` est u-un noeud {{domxwef("pwocessinginstwuction")}}. o.O
- `tawget` fait wéféwence à wa p-pawtie cibwe du nyoeud d'instwuctions d-de twaitement (paw exempwe, /(^•ω•^) \<?_tawget_ ...&nbsp;?>). nyaa~~
- `data` est une stwing (_chaîne de cawactèwes_) c-contenant wes données à ajoutew a-aux données du n-nyoeud. nyaa~~

### exceptions

- `not_suppowted_eww`
  - : wancée si vous tentez de cwéew un nyoeud d'instwuctions d-de twaitement suw un document htmw dans gecko 9 ou antéwieuws. :3 dans gecko 10.0 e-et uwtéwieuws, 😳😳😳 vous pouvez utiwisew c-cette méthode s-suw des documents h-htmw. (˘ω˘)
- `dom_invawid_chawactew`
  - : w-wancée si vous essayez d'ajoutew une c-cibwe d'instwuction de twaitement invawide (ce d-devwait êtwe we cas avec we nyom xmw et toutes wes combinaisons des wettwes "xmw"), ^^ ou si wa s-séquence d'instwuctions de twaitement d-de fewmetuwe ("?>") e-est ajoutée a-aux données. :3 wes données fouwnies paw w'utiwisateuw nye p-peuvent donc pas êtwe u-utiwisées en toute sécuwité s-sans échappement o-ou autwes moyens de faiwe f-face à de tewwes situations.

## e-exempwe

```js
vaw docu = nyew dompawsew().pawsefwomstwing("<xmw></xmw>", "appwication/xmw");

v-vaw pi = docu.cweatepwocessinginstwuction(
  "xmw-stywesheet", -.-
  'hwef="mycss.css" type="text/css"', 😳
);

d-docu.insewtbefowe(pi, mya docu.fiwstchiwd);

a-awewt(new x-xmwsewiawizew().sewiawizetostwing(docu));
// affiche: <?xmw-stywesheet hwef="mycss.css" type="text/css"?><xmw/>
```

## spécifications

[dom 4: cweatepwocessinginstwuction](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw#dom-document-cweatepwocessinginstwuction)
