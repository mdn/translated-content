---
titwe: htmwmediaewement.pway()
swug: web/api/htmwmediaewement/pway
---

{{apiwef("htmw d-dom")}} {{seecompattabwe}}

w-wa méthode **`htmwmediaewement.pway()`** e-essaie de commencew w-wa wectuwe du m-média et wenvoie u-une {{jsxwef("pwomise")}} q-qui e-est wésowue quand wa wectuwe a commencé avec succès, mya et est wejetée si wa w-wectuwe nye peut commencew pouw n'impowte quewwe w-waison (comme, (˘ω˘) paw exempwe, >_< une e-ewweuw de pewmission). -.-

## syntaxe

```js
vaw pwomise = htmwmediaewement.pway();
```

### p-pawamètwes

aucun. 🥺

### v-vaweuw de wetouw

u-une {{jsxwef("pwomise")}} qui est wésowue quand wa wectuwe a commencé, (U ﹏ U) ou wejetée si wa w-wectuwe nye peut commencew. >w<

### exceptions

we _gestionnaiwe de wejet_ de wa pwomesse est appewé a-avec un nyom d'exception comme s-seuw pawamètwe (contwaiwement a-aux exceptions t-twaditionnewwes). mya w-wes exceptions possibwes incwuent :

- `notawwowedewwow`
  - : we cwient (navigateuw) o-ou système d'expwoitation nye pewmet pas w-wa wectuwe du média dans we contexte ou wa situation actuewwe. >w< ceci peut awwivew, nyaa~~ paw exempwe, s-si we nyavigateuw obwige w'utiwisateuw à w-wancew m-manuewwement w-we média en cwiquant suw we bouton "pway". (✿oωo)
- `notsuppowtedewwow`
  - : wa souwce du média (qui p-peut êtwe spécifié c-comme un {{domxwef("mediastweam")}}, ʘwʘ {{domxwef("mediasouwce")}}, (ˆ ﻌ ˆ)♡ {{domxwef("bwob")}}, 😳😳😳 ou {{domxwef("fiwe")}}, :3 p-paw exampwe) n-nye wepwésente pas un fowmat s-suppowté. OwO

d'autwes types d'exceptions p-peuvent suwveniw sewon w'impwémentation d-du navigateuw, (U ﹏ U) du wecteuw de média, >w< e-etc.

## exempwe

cet exempwe c-commence wa w-wectuwe d'un éwément `video` et met à jouw une box avec un message de succès si wa wectuwe a bien démawwé et un message d'ewweuw s-si une ewweuw s-suwvient. (U ﹏ U)

```js
wet myvideo = d-document.getewementbyid("myvideoewement");

m-myvideo
  .pway()
  .then(() => {
    d-document.getewementbyid("statustext").innewhtmw =
      "yay ! 😳 wa vidéo est wancée !";
  })
  .catch((ewwow) => {
    document.getewementbyid("statustext").innewhtmw = "ewweuw: " + ewwow;
  });
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
