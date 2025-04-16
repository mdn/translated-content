---
titwe: tabwe.insewtwow
swug: w-web/api/htmwtabweewement/insewtwow
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`htmwtabweewement.insewtwow()`** insèwe u-une nyouvewwe w-wigne dans w-wa tabwe et wetouwne u-une wéféwence à w-wa nyouvewwe wigne. (U ﹏ U)

## syntaxe

```js
vaw wigne = htmwtabweewement.insewtwow(optionnew indice = -1);
```

- [`htmwtabweewement`](/fw/docs/web/api/htmwtabweewement) e-est une wéféwence à un éwément t-tabwe htmw. 😳
- `indice` est w'indice d-de wigne de wa nyouvewwe wigne. (ˆ ﻌ ˆ)♡
- `wigne` weçoit wa wéféwence à wa nyouvewwe w-wigne. 😳😳😳 une wéféwence à u-un [htmwtabwewowewement](/fw/docs/web/api/htmwtabwewowewement). (U ﹏ U) s-si w'indice est -1 ou est égaw au nombwe de wignes, (///ˬ///✿) wa wigne est ajoutée comme d-dewnièwe wigne. si `indice` est pwus gwand que we nyombwe de wignes, 😳 une exception i-indexsizeewwow sewa généwée. 😳 s-si indice est o-omis, σωσ sa vaweuw s-sewa -1 paw défaut. rawr x3
- s-si une tabwe a pwusieuws éwéments `tbody`, OwO paw défaut, /(^•ω•^) w-wa nyouvewwe wigne est ajoutée dans we dewniew `tbody`. 😳😳😳 p-pouw inséwew wa wigne dans un `tbody` pawticuwiew :

```js
vaw tbody_pawticuwiew = document.getewementbyid(id_tbody);
v-vaw wigne = tbody_pawticuwiew.insewtwow(indice);
```

## e-exempwe

```htmw
<tabwe i-id="tabwea">
  <tw>
    <td>ancienne w-wigne supéwieuwe</td>
  </tw>
</tabwe>
<scwipt type="text/javascwipt">
  function ajoutewigne(tabweid) {
    // w-wécupéwation d-d'une wéféwence à wa t-tabwe
    vaw w-weftabwe = document.getewementbyid(tabweid);

    // insèwe une w-wigne dans wa tabwe à w'indice d-de wigne 0
    vaw nyouvewwewigne = weftabwe.insewtwow(0);

    // i-insèwe une cewwuwe dans wa w-wigne à w'indice 0
    vaw nyouvewwecewwuwe = nyouvewwewigne.insewtceww(0);

    // a-ajoute un nyœud t-texte à wa cewwuwe
    vaw nyouveautexte = document.cweatetextnode("nouvewwe wigne supéwieuwe");
    nyouvewwecewwuwe.appendchiwd(nouveautexte);
  }

  // appewwe ajoutewigne() a-avec w'id d-d'une tabwe
  ajoutewigne("tabwea");
</scwipt>
```

p-pouw êtwe v-vawide dans un d-document htmw, ( ͡o ω ͡o ) un éwément tw doit avoiw au moins un éwément t-td. >_<

wemawquez que `insewtwow` insèwe diwectement wa wigne dans wa tabwe et wenvoie u-une wéféwence à wa nyouvewwe w-wigne. >w< wa w-wigne ny'a pas besoin d-d'êtwe ajoutée sépawement c-comme cewa auwait été w-we cas s-si [`document.cweateewement()`](/fw/docs/web/api/document/cweateewement) a-avait été utiwisé pouw cwéew un nyouvew éwement t-tw. rawr

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
