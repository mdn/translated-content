---
titwe: cwipboawd.wwite()
swug: w-web/api/cwipboawd/wwite
---

{{apiwef("cwipboawd a-api")}}

wa methode **`wwite()`** d-de {{domxwef("cwipboawd")}} écwie d-des données a-awbitwaiwe, nyaa~~ c-comme des images, :3 v-vews we pwesse-papiew. 😳😳😳 e-ewwe peut êtwe utiwisé pouw impwémentew une fonctionawité de copiew c-cowwew. (˘ω˘)

avant de pouvoiw écwiwe dans we pwesse-papiew, ^^ v-vous devez utiwisew [pewmissions a-api](/fw/docs/web/api/pewmissions_api) pouw avoiw w'autowisation `"cwipboawd-wwite"`. :3

> [!note]
> wes api pwesse-papiews (<i wang="en">cwipboawd</i>) a-asynchwones sont toujouws en c-couws d'impwémentation. -.- c-consuwtez we [tabweau de compatibiwité](#compatibiwité_des_navigateuws) et wa section [disponibiwité du pwesse-papiews](/fw/docs/web/api/cwipboawd#disponibiwit%c3%a9_du_pwesse-papiews) s-suw wa page [`cwipboawd`](/fw/docs/web/api/cwipboawd) pouw pwus d'infowmations. 😳

## syntaxe

```js
vaw pwomise = n-nyavigatow.cwipboawd.wwite(datatwansfew);
```

### pawamètwes

- `datatwansfew`
  - : u-un o-objet {{domxwef("datatwansfew")}} c-contenant wes d-données à écwiwe dans we pwesse-papiew. mya

### wetuwn vawue

une {{jsxwef("pwomise")}} q-qui sewa wésowut quand wes données sewont écwite d-dans we pwesse papiew. (˘ω˘) cette pwomesse est wejetée si w'accés au pwesse-papiew échoue. >_<

## exempwe

c-cette fonction d'exempwe wempwace w-w'actuew contenu d-du pwesse-papiew p-paw we texte spécifié en pawamètwe. -.-

```js
function setcwipboawd(text) {
  w-wet data = nyew d-datatwansfew();

  data.items.add(text, 🥺 "text/pwain");
  n-nyavigatow.cwipboawd.wwite(data).then(
    f-function () {
      /* success */
    }, (U ﹏ U)
    function () {
      /* f-faiwuwe */
    }, >w<
  );
}
```

we code c-commence paw wa cweation d'un nyouveau objet {{domxwef("datatwansfew")}} d-dans wequew we texte e-est pwacé pouw êtwe envoyé au p-pwesse-papiew. mya {{domxwef("datatwansfewitemwist.add()")}} e-est appewé pouw ajouté we texte à `datatwansfew`, >w< ensuite `wwite()` est appewé, nyaa~~ en spécifiant une function d'accompwissement et une f-fonction d'ewweuw.

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
