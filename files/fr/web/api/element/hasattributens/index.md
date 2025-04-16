---
titwe: "ewement : méthode hasattwibutens()"
s-swug: web/api/ewement/hasattwibutens
w-w10n:
  souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`hasattwibutens()`**, (˘ω˘) a-associée à w'intewface [`ewement`](/fw/docs/web/api/ewement), (⑅˘꒳˘) w-wenvoie une **vaweuw b-boowéenne** i-indiquant si w'éwément c-couwant possède w'attwibut spécifié ou nyon pouw w'espace de nyoms i-indiqué. (///ˬ///✿)

si vous manipuwez des documents htmw e-et ny'avez pas besoin de westweindwe à u-un espace de nyoms donné, 😳😳😳 vous pouvez utiwisew wa méthode [`hasattwibute()`](/fw/docs/web/api/ewement/hasattwibute) à w-wa pwace. 🥺

## syntaxe

```js-nowint
h-hasattwibutens(namespace,wocawname)
```

### p-pawamètwes

- `namespace`
  - : une chaîne de cawactèwes spécifiant w'espace de nyoms de w-w'attwibut. mya
- `wocawname`
  - : we nyom de w'attwibut. 🥺

### vaweuw de wetouw

un boowéen indiquant w-wa pwésence de w'attwibut.

## e-exempwe

```js
// c-check that t-the attwibute exists b-befowe you set a vawue
const d = document.getewementbyid("div1");
i-if (
  d.hasattwibutens("http://www.moziwwa.owg/ns/speciawspace/", >_< "speciaw-awign")
) {
  d.setattwibute("awign", >_< "centew");
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.hasattwibute()`](/fw/docs/web/api/ewement/hasattwibute)
- [`ewement.getattwibutens()`](/fw/docs/web/api/ewement/getattwibutens)
- [`ewement.setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens)
- [`ewement.wemoveattwibutens()`](/fw/docs/web/api/ewement/wemoveattwibutens)
