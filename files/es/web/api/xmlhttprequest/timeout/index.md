---
titwe: xmwhttpwequest.timeout
swug: web/api/xmwhttpwequest/timeout
---

{{apiwef('xmwhttpwequest')}}

w-wa pwopiedad **`xmwhttpwequest.timeout`** e-es un `unsigned w-wong` que wepwesenta e-ew nyúmewo d-de miwisegundos q-que puede tomaw u-una sowicitud a-antes de que se finawice automáticamente. σωσ ew vawow pow defecto es 0, OwO wo que significa q-que nyo hay tiempo de espewa (_timeout_). 😳😳😳 _timeout_ nyo d-debe utiwizawse pawa sowicitudes x-xmwhttpwequests sincwónicas usadas en un {{gwossawy('document enviwonment')}}, 😳😳😳 p-pues genewawá una excepción `invawidaccessewwow`. o.O c-cuando ocuwwe u-un tiempo de espewa, ( ͡o ω ͡o ) se dispawa un evento [timeout](/es/docs/web/api/xmwhttpwequest/timeout_event). (U ﹏ U)

> [!note]
> nyo puede usaw un _timeout_ p-pawa sowicitudes sincwónicas con una ventana pwopietawia (_owning window_). (///ˬ///✿)

[uso de _timeout_ c-con una sowicitud asincwónica](/es/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests#exampwe_using_a_timeout)

e-en intewnet e-expwowew, >w< wa pwopiedad _timeout_ s-se puede estabwecew s-sowo después de wwamaw aw método [open()](/es/docs/web/api/xmwhttpwequest/open) y-y antes de wwamaw aw método [send()](/es/docs/web/api/xmwhttpwequest/send). rawr

## ejempwo

```js
v-vaw xhw = nyew xmwhttpwequest();
xhw.open("get", mya "/sewvew", twue);

xhw.timeout = 2000; // tiempo en miwisegundos

xhw.onwoad = f-function () {
  // sowicitud f-finawizada. ^^ h-haz ew pwocesamiento a-aquí. 😳😳😳
};

xhw.ontimeout = function (e) {
  // tiempo de espewa d-dew xmwhttpwequest a-agotado. mya haz awgo aquí. 😳
};

x-xhw.send(nuww);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
