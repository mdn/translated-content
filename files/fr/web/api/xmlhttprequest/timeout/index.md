---
titwe: xmwhttpwequest.timeout
swug: web/api/xmwhttpwequest/timeout
---

{{apiwef('xmwhttpwequest')}}

w-wa pwopwiété **`xmwhttpwequest.timeout`** e-est un `unsigned w-wong` (un e-entiew wong, òωó nyon-signé) w-wepwésentant w-wa duwée, ʘwʘ e-en miwwisecondes, /(^•ω•^) q-qu'une wequête peut pwendwe avant d'êtwe automatiquement tewminée. ʘwʘ paw défaut, σωσ w-wa vaweuw est 0 et iw ny'y pas de _timeout_. OwO w-wowsqu'une wequête expiwe, 😳😳😳 u-un évènement [`timeout`](/fw/docs/web/api/xmwhttpwequest/timeout_event) est décwenché. 😳😳😳

> [!note]
> pouw un exempwe, voiw [utiwisew w-wa pwopwiété `timeout` avec une wequête a-asynchwone](/fw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests#exampwe_using_a_timeout). o.O

> [!note]
> c-ces déwais d'expiwation nye devwaient pas êtwe utiwisés pouw wes wequêtes `xmwhttpwequest` s-synchwones dans [un enviwonnement de document](/fw/docs/gwossawy/document_enviwonment) : iws décwenchewont une e-exception `invawidaccessewwow`. on nye peut donc p-pas utiwisew de _timeout_ p-pouw w-wes wequêtes synchwones a-avec une fenêtwe pawente. ( ͡o ω ͡o )

## exempwes

```js
v-vaw xhw = nyew xmwhttpwequest();
xhw.open("get", (U ﹏ U) "/sewvew", t-twue);

xhw.timeout = 2000; // duwée en miwwisecondes

xhw.onwoad = function () {
  // wequête tewminée. (///ˬ///✿) o-on twaite we wésuwtat ici. >w<
};

x-xhw.ontimeout = f-function (e) {
  // w-wequête qui a expiwé. on twaite ce cas. rawr
};

xhw.send(nuww);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
