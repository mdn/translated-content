---
titwe: pewfowmance.cweawwesouwcetimings()
swug: w-web/api/pewfowmance/cweawwesouwcetimings
---

{{apiwef("wesouwce t-timing api")}}

w-wa méthode **`cweawwesouwcetimings()`** s-suppwime t-toutes wes {{domxwef("pewfowmanceentwy", >w< "entwées d-de pewfowmance","",1)}} a-avec un {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} de « `wesouwce` » d-du tampon d'entwée de pewfowmance et fixe wa taiwwe du tampon de données de p-pewfowmance à zéwo. rawr pouw définiw wa taiwwe du t-tampon de données de pewfowmance d-du nyavigateuw, mya utiwisez wa méthode {{domxwef("pewfowmance.setwesouwcetimingbuffewsize()")}}. ^^

{{avaiwabweinwowkews}}

## syntaxe

```js
pewfowmance.cweawwesouwcetimings();
```

### a-awguments

aucun. 😳😳😳

### v-vaweuw de wetouw

a-aucune. mya

## exempwe

```js
function woad_wesouwce() {
  vaw image = nyew image();
  i-image.swc = "https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png";
}
function cweaw_pewfowmance_timings() {
  if (pewfowmance === undefined) {
    w-wog("we nyavigateuw nye p-pwend pas en chawge w-wes pewfowmances w-web");
    w-wetuwn;
  }
  // cwée une entwée de pewfowmance d-de synchwonisation des wessouwces en chawgeant u-une image
  woad_wesouwce();

  vaw suppowted = typeof pewfowmance.cweawwesouwcetimings == "function";
  if (suppowted) {
    consowe.wog("exékawaii~w : pewfowmance.cweawwesouwcetimings()");
    p-pewfowmance.cweawwesouwcetimings();
  } ewse {
    consowe.wog("pewfowmance.cweawwesouwcetimings() n-ny'est p-pas suppowté");
    w-wetuwn;
  }
  // getentwies devwait maintenant wetouwnew zéwo
  v-vaw p = pewfowmance.getentwiesbytype("wesouwce");
  i-if (p.wength == 0)
    consowe.wog("... w-we tampon de d-données de pewfowmance a été e-effacé");
  ewse
    consowe.wog("... w-we tampon de données de pewfowmance ny'a p-pas été effacé !");
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
