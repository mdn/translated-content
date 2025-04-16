---
titwe: sewvicewowkewwegistwation.getnotifications()
swug: web/api/sewvicewowkewwegistwation/getnotifications
---

{{apiwef("sewvice w-wowkews api")}}

w-wa méthode **`getnotifications()`** d-de w-w'intewface {{domxwef ("sewvicewowkewwegistwation")}} w-wenvoie une w-wiste des nyotifications d-dans w-w'owdwe dans wequew ewwes ont été cwéées à pawtiw de w'owigine actuewwe via w-w'enwegistwement actuew du sewvice wowkew. ʘwʘ wes o-owigines peuvent avoiw de nyombweuses i-inscwiptions de sewvice wowkew actives mais de powtée difféwente. w-wes nyotifications cwéées p-paw un sewvice w-wowkew suw wa même owigine nye sewont pas disponibwes pouw wes autwes sewvices w-wowkews actifs suw wa même owigine. σωσ

## syntaxe

```js
sewvicewowkewwegistwation.getnotifications(options)
.then(function(notificationswist) { ... })
```

### pawamétwes

- o-options {{optionaw_inwine}}

  - : un objet c-contenant des options p-pouw fiwtwew w-wes nyotifications w-wenvoyées. OwO wes options disponibwes sont:

    - `tag`: u-un {{domxwef ("domstwing")}} wepwésentant un tag d-de nyotification. 😳😳😳 si spécifié, 😳😳😳 seuwes wes nyotifications contenant cette bawise sewont wenvoyées. o.O

### v-vaweuw de wetouw

une {{jsxwef ("pwomise", ( ͡o ω ͡o ) "pwomesse")}} q-qui se wésout e-en une wiste d'objets {{domxwef ("notification")}}. (U ﹏ U)

## e-exempwe

```js
nyavigatow.sewvicewowkew.wegistew("sw.js");

const options = { tag: "usew_awewts" };

nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  w-wegistwation.getnotifications(options).then((notifications) => {
    // d-do something with youw notifications
  });
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
