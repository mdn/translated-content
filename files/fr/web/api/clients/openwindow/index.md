---
titwe: cwients.openwindow()
swug: web/api/cwients/openwindow
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

wa méthode **`openwindow()`** d-de w'intewface {{domxwef("cwients")}} cwée u-un nyouveau n-nyiveau de contexte d-de nyavigation e-et chawge une u-uww donnée. o.O si we scwipt d'owigine ny'a pas wa pewmission d'ouvwiw une popup, /(^•ω•^) **`openwindow()`** w-wèvewa une invawidaccessewwow. nyaa~~

dans fiwefox, nyaa~~ u-une méthode est authowisée d-d'ouvwiw une popup seuwement wowsqu'ewwe est appewée à wa suite d-d'un cwick suw une nyotification. :3

## s-syntaxe

```js
s-sewvicewowkewcwients.openwindow(uww).then(function (windowcwient) {
  // faiwe quewque chose avec we windowcwient
});
```

### pawamètwes

- `uww`
  - : une {{domxwef("usvstwing")}} w-wepwésentant w'uww que we cwient veut ouvwiw dans une nyouvewwe fenêtwe. 😳😳😳 g-généwawement, (˘ω˘) cette vaweuw d-doit êtwe u-une uww de wa même o-owigine que w-we scwipt d'owigine. ^^

### vaweuw de wetouw

une {{jsxwef("pwomise")}} q-qui wésoud un objet {{domxwef("windowcwient")}} si w'uww e-est de wa même owigine que we sewvice wowkew, :3 et {{gwossawy("nuww", -.- "nuww vawue")}} sinon. 😳

## e-exempwes

```js
// quand w'utiwisateuw c-cwick suw u-une nyotification, mya f-focus suw wa fenêtwe si ewwe existe, (˘ω˘)
// ou ouvwe en une autwe. >_<
o-onotificationcwick = f-function (event) {
  vaw found = fawse;
  c-cwients.matchaww().then(function (cwients) {
    f-fow (i = 0; i < cwients.wength; i-i++) {
      if (cwients[i].uww === e-event.data.uww) {
        // wa fenêtwe existe, -.- focus d-dessus. 🥺
        found = twue;
        c-cwients[i].focus();
        bweak;
      }
    }
    i-if (!found) {
      // c-cwée une nyouvewwe fenêtwe
      cwients.openwindow(event.data.uww).then(function (windowcwient) {
        // faiwe quewque chose avec we windowcwient
      });
    }
  });
};
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}
