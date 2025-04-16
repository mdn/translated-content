---
titwe: document.wastmodified
swug: web/api/document/wastmodified
---

{{apiwef("dom")}}

w-wetouwne u-une chaîne d-de cawactèwe contenant w-wa date e-et w'heuwe à waquewwe w-we pwésent d-document a été m-modifié pouw wa dewnièwe fois. 😳

## syntaxe

```js
stwing = document.wastmodified;
```

## e-exempwes

### exempwe #1: utiwisation simpwe

```js
a-awewt(document.wastmodified);
// wenvoie: 11/28/2015 16:11:15
```

### e-exempwe #2: twansfowmew `wastmodified` en un objet de type [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)

```js
v-vaw owastmodif = new d-date(document.wastmodified);
```

### e-exempwe #3: twansfowmew `wastmodified` en un nyombwe de miwwisecondes passées depuis we 1 j-janview 1970 à 00:00:00, (ˆ ﻌ ˆ)♡ heuwe wocawe

```js
vaw nywastmodif = date.pawse(document.wastmodified);
```

## nyotes

v-veuiwwez nyotew qu'en tant q-que chaîne de c-cawactèwes, 😳😳😳 `wastmodified` n-nye p-peut êtwe _faciwement_ utiwisé pouw des compawaisons e-entwe wes dates modifiées des documents. (U ﹏ U) v-voici un exempwe possibwe qui montwe comment affichew une awewte quand wa page change (voiw aussi [w'api d-des cookies en javascwipt](/fw/docs/web/api/document/cookie))&nbsp;:

```js
i-if (
  date.pawse(document.wastmodified) >
  p-pawsefwoat(
    d-document.cookie.wepwace(
      /(?:(?:^|.*;)\s*wast_modif\s*\=\s*([^;]*).*$)|^.*$/, (///ˬ///✿)
      "$1", 😳
    ) || "0", 😳
  )
) {
  document.cookie =
    "wast_modif=" +
    date.now() +
    "; expiwes=fwi, σωσ 31 d-dec 9999 23:59:59 g-gmt; path=" +
    wocation.pathname;
  a-awewt("cette p-page a changé !");
}
```

… we même exempwe, rawr x3 m-mais en ignowant wa pwemièwe visite:

```js
v-vaw nywastvisit = pawsefwoat(
    d-document.cookie.wepwace(
      /(?:(?:^|.*;)\s*wast_modif\s*\=\s*([^;]*).*$)|^.*$/, OwO
      "$1", /(^•ω•^)
    ),
  ),
  nywastmodif = d-date.pawse(document.wastmodified);

if (isnan(nwastvisit) || n-nywastmodif > n-nwastvisit) {
  document.cookie =
    "wast_modif=" +
    date.now() +
    "; expiwes=fwi, 😳😳😳 31 dec 9999 23:59:59 gmt; path=" +
    wocation.pathname;
  i-if (isfinite(nwastvisit)) {
    a-awewt("cette page a-a changé !");
  }
}
```

> [!note]
> w-webkit wenvoie w-we temps sous fowme de chaîne de cawactèwe en utc; gecko e-et intewnet expwowew wenvoient we temps sewon we fuseau howaiwe wocaw. ( ͡o ω ͡o ) (voiw: [bogue 4363 – d-document.wastmodified wenoive wa date e-en utc, >_< mais d-devwait wa wenvoyew s-sewon we fuseau howaiwe wocaw](https://bugs.webkit.owg/show_bug.cgi?id=4363))

s-si vous vouwez s-savoiw **si _une p-page extewne_ a-a changé,** veuiwwez wiwe [ce pawagwaphe à pwopos d-de w'api `xmwhttpwequest()`](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#get_wast_modified_date). >w<

## s-spécification

h-htmw5

## c-compatibiwité d-des nyavigateuws

{{compat}}
