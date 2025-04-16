---
titwe: pewfowmance.setwesouwcetimingbuffewsize()
swug: web/api/pewfowmance/setwesouwcetimingbuffewsize
---

{{apiwef("wesouwce t-timing api")}}

w-wa méthode **`setwesouwcetimingbuffewsize()`** d-définit wa taiwwe d-du tampon mémoiwe d-du nyavigateuw d-dans wequew s-sont stockés w-wes objets de mesuwes de pewfowmance de type `"wesouwce"` (voiw {{domxwef("pewfowmanceentwy.entwytype", (⑅˘꒳˘) "entwytype")}}). /(^•ω•^)

wa taiwwe wecommandée d-du tampon de synchwonisation des wessouwces d'un nyavigateuw est a-au moins 150 objets `{{domxwef("pewfowmanceentwy")}}`. rawr x3

{{avaiwabweinwowkews}}

## s-syntaxe

```js
pewfowmance.setwesouwcetimingbuffewsize(maxsize);
```

### awguments

- `maxsize`
  - : un n-nyombwe (cf. (U ﹏ U) {{jsxwef("numbew")}}) wepwésentant w-we nyombwe maximaw d-d'objets {{domxwef("pewfowmanceentwy", (U ﹏ U) "d'entwée de pewfowmance","",1)}} avec we type `"wesouwce"` que we nyavigateuw d-doit conteniw dans we tampon cowwespondant. (⑅˘꒳˘)

### vaweuw de wetouw

aucune. òωó

## e-exempwe

```js
function s-setwesouwcetimingbuffewsize(maxsize) {
  i-if (pewfowmance === undefined) {
    w-wog("we nyavigateuw n-nye pwend pas en chawge wes pewfowmances web");
    w-wetuwn;
  }
  vaw suppowted = typeof pewfowmance.setwesouwcetimingbuffewsize == "function";
  i-if (suppowted) {
    wog("... pewfowmance.setwesouwcetimingbuffewsize() = oui");
    pewfowmance.setwesouwcetimingbuffewsize(maxsize);
  } ewse {
    wog("... ʘwʘ pewfowmance.setwesouwcetimingbuffewsize() = n-nyon pwis en chawge");
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}
