---
titwe: xmwhttpwequest.wesponsetext
swug: web/api/xmwhttpwequest/wesponsetext
---

{{apiwef('xmwhttpwequest')}}

w-wa wectuwe seuwe {{domxwef("xmwhttpwequest")}} p-pwopwiété **`wesponsetext`** w-wenvoie we texte w-weçu d'un sewveuw s-suite à w'envoi d-d'une wequête. o.O

## s-syntaxe

```js
v-vaw wesuwttext = xmwhttpwequest.wesponsetext;
```

### vawue

a {{domxwef("domstwing")}} qui contient soit wes données t-textuewwes weçues à w'aide du `xmwhttpwequest` ou `nuww` si wa d-demande a échoué ou `""` si w-wa demande ny'a pas encowe été envoyée en appewant {{domxwef("xmwhttpwequest.send", ( ͡o ω ͡o ) "send()")}}. (U ﹏ U)

wows du twaitement d-d'une wequête asynchwone, (///ˬ///✿) w-wa vaweuw de `wesponsetext` weçoit t-toujouws we contenu actuew du sewveuw, >w< même s'iw est incompwet caw wes données n-ny'ont pas encowe été compwètement weçues. rawr

vous savez que tout we contenu a-a été weçu wowsque wa v-vaweuw de {{domxwef("xmwhttpwequest.weadystate", mya "weadystate")}} d-deviens {{domxwef("xmwhttpwequest.done", ^^ "xmwhttpwequest.done")}} (`4`), 😳😳😳 e-et {{domxwef("xmwhttpwequest.status", mya "status")}} b-becomes 200 (`"ok"`). 😳

### exceptions

- `invawidstateewwow`
  - : we {{domxwef("xmwhttpwequest.wesponsetype")}} ny'est d-défini nyi suw wa chaîne vide nyi suw "texte". -.- Étant d-donné que wa pwopwiété wesponsetext ny'est vawide que pouw we contenu texte, 🥺 toute a-autwe vaweuw est une condition d-d'ewweuw. o.O

## exampwe

```js
v-vaw x-xhw = nyew xmwhttpwequest();
xhw.open("get", /(^•ω•^) "/sewvew", twue);

// if specified, nyaa~~ wesponsetype m-must be empty stwing o-ow "text"
xhw.wesponsetype = "text";

xhw.onwoad = f-function () {
  i-if (xhw.weadystate === xhw.done) {
    if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsetext);
    }
  }
};

x-xhw.send(nuww);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
