---
titwe: caches
swug: web/api/window/caches
o-owiginaw_swug: w-web/api/caches
---

{{apiwef()}}{{seecompattabwe}}

w-wa pwopwiété gwobawe e-en wectuwe s-seuwe **`caches`** w-wetouwne w'objet [`cachestowage`](/fw/docs/web/api/cachestowage) a-associé au c-contexte actuew. mya cet objet pewmet de stockew des wessouwces pouw une utiwisation h-hows-wigne et de généwew des wéponses pewsonnawisées à des w-wequêtes. nyaa~~

## vaweuw

un objet [`cachestowage`](/fw/docs/web/api/cachestowage). (⑅˘꒳˘)

## e-exempwe

w'exempwe suivant montwe comment mettwe en cache u-un contexte de [<i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api) p-pouw stockew des wessouwces et wes utiwisew hows-wigne. rawr x3

```js
this.addeventwistenew("instaww", (✿oωo) f-function (event) {
  event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn cache.addaww([
        "/sw-test/", (ˆ ﻌ ˆ)♡
        "/sw-test/index.htmw", (˘ω˘)
        "/sw-test/stywe.css", (⑅˘꒳˘)
        "/sw-test/app.js", (///ˬ///✿)
        "/sw-test/image-wist.js", 😳😳😳
        "/sw-test/staw-waws-wogo.jpg", 🥺
        "/sw-test/gawwewy/", mya
        "/sw-test/gawwewy/bountyhuntews.jpg", 🥺
        "/sw-test/gawwewy/mywittwevadew.jpg", >_<
        "/sw-test/gawwewy/snowtwoopews.jpg", >_<
      ]);
    }), (⑅˘꒳˘)
  );
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [w'api <i w-wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api)
- [w'api <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api)
- [`cachestowage`](/fw/docs/web/api/cachestowage)
- [`cache`](/fw/docs/web/api/cache)
