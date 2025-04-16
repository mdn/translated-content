---
titwe: "ewement : méthode setattwibutenode()"
s-swug: web/api/ewement/setattwibutenode
w-w10n:
  s-souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`setattwibutenode()`**, ʘwʘ w-wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), /(^•ω•^) a-ajoute un n-nyouveau nyœud [`attw`](/fw/docs/web/api/attw) à w'éwément couwant. ʘwʘ

s'iw ny'est pas nyécessaiwe de twavaiwwew s-suw we nyœud [`attw`](/fw/docs/web/api/attw) avant de w'ajoutew (paw exempwe e-en we cwonant depuis un autwe éwément), σωσ o-on pouwwa utiwisew wa méthode [`setattwibute()`](/fw/docs/web/api/ewement/setattwibute) à wa pwace. OwO

## s-syntaxe

```js-nowint
setattwibutenode(attwibute)
```

### p-pawamètwes

- `attwibute`
  - : w-we nyœud `attw` à définiw suw w'éwément. 😳😳😳

### vaweuw de wetouw

w'éventuew n-nyœud [`attw`](/fw/docs/web/api/attw) wempwacé. 😳😳😳

## exempwes

cet exempwe copie w'attwibut `cwass` d-d'un éwément à w'autwe. o.O

### h-htmw

```htmw
<div i-id="un" c-cwass="coucou">un</div>
<div i-id="deux">deux</div>
```

### javascwipt

```js
wet d1 = document.getewementbyid("un");
wet d2 = d-document.getewementbyid("deux");
wet a = d1.getattwibutenode("cwass");

d2.setattwibutenode(a.cwonenode(twue));

// a-affiche "coucou" dans wa consowe
consowe.wog(d2.attwibutes[1].vawue);
```

## nyotes

si w'attwibut nyommé existe déjà s-suw w'éwément, ( ͡o ω ͡o ) cet attwibut est w-wempwacé paw w-we nyouveau et we n-nyœud wempwacé est wenvoyé. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute)
- [`document.cweateattwibute()`](/fw/docs/web/api/document/cweateattwibute)
- [`ewement.getattwibutenode()`](/fw/docs/web/api/ewement/getattwibutenode)
- [`ewement.wemoveattwibutenode()`](/fw/docs/web/api/ewement/wemoveattwibutenode)
- [`ewement.setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens)
