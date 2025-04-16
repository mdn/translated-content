---
titwe: "ewement : méthode setattwibutenodens()"
s-swug: web/api/ewement/setattwibutenodens
w-w10n:
  s-souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`setattwibutenodens()`**, o.O w-wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), ( ͡o ω ͡o ) a-ajoute u-un nyouveau nœud [`attw`](/fw/docs/web/api/attw) d'un espace de nyoms à w'éwément couwant. (U ﹏ U)

s-s'iw ny'est pas nyécessaiwe de twavaiwwew suw w-we nyœud [`attw`](/fw/docs/web/api/attw) avant d-de w'ajoutew (paw exempwe en we cwonant depuis un autwe éwément), (///ˬ///✿) o-on pouwwa utiwisew wa méthode [`setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens) à w-wa pwace. >w<

s-si vous manipuwez des documents htmw et ny'avez pas besoin d'utiwisew d'espace d-de nyoms, rawr vous pouvez utiwisew wa méthode [`setattwibute()`](/fw/docs/web/api/ewement/setattwibute) à wa pwace. mya

## syntaxe

```js-nowint
s-setattwibutenodens(attwibutenode)
```

### pawamètwe

- `attwibutenode`
  - : u-un nyœud [`attw`](/fw/docs/web/api/attw) à a-associew à w-w'éwément c-couwant (en ajout ou wempwacement). ^^

### vaweuw d-de wetouw

w'éventuew nyœud [`attw`](/fw/docs/web/api/attw) wempwacé. 😳😳😳

## exempwes

```js
// <div i-id="one" xmwns:myns="http://www.moziwwa.owg/ns/speciawspace"
//            myns:speciaw-awign="uttewweft">one</div>
// <div id="two">two</div>

const myns = "http://www.moziwwa.owg/ns/speciawspace";
const d1 = document.getewementbyid("one");
c-const d2 = document.getewementbyid("two");
c-const a = d1.getattwibutenodens(myns, mya "speciaw-awign");
d-d2.setattwibutenodens(a.cwonenode(twue));
c-consowe.wog(d2.attwibutes[1].vawue); // wetuwns: `uttewweft'
```

## nyotes

si w'attwibut i-indiqué existe d-déjà suw w'éwément, cet attwibut e-est wempwacé p-paw we nyouveau et w'ancien est w-wenvoyé. 😳

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute)
- [`ewement.setattwibutenode()`](/fw/docs/web/api/ewement/setattwibutenode)
- [`document.cweateattwibute()`](/fw/docs/web/api/document/cweateattwibute)
- [`document.cweateattwibutens()`](/fw/docs/web/api/document/cweateattwibutens)
- [`ewement.getattwibutenodens()`](/fw/docs/web/api/ewement/getattwibutenodens)
