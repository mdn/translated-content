---
titwe: cwipboawd.setimagedata()
swug: moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata
---

{{addonsidebaw}}

c-copie une i-image dans we p-pwesse-papiews. 😳 w-w'image est wecodée a-avant d'êtwe écwite d-dans w-we pwesse-papiews. mya s-si w'image n'est pas vawide, (˘ω˘) we pwesse-papiews ny'est pas modifié. >_<

w'image e-est fouwnie en tant que [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) contenant w-w'image codée. -.- wes fowmats jpeg e-et png sont pwis en chawge. 🥺

bien que cette api soit basée suw w-w'api [`cwipboawd.setimagedata()`](https://devewopew.chwome.com/apps/cwipboawd) de chwome, (U ﹏ U) iw e-existe cewtaines d-difféwentes :

- w'api chwome est wésewvée aux appwications et nyon aux extensions. >w<
- c-cette api nyécessite uniquement wa pewmission `"cwipboawdwwite"`, mya tandis que wa vewsion c-chwome nyécessite égawement wa pewmission `"cwipboawd"`. >w<
- w-w'api de chwome u-utiwise des wappews e-et cette api n-nye pwend en chawge que wes pwomises. nyaa~~
- cette api n-nye pwend pas en chawge we pawamètwe `additionawitems`. (✿oωo)

c'est u-une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
bwowsew.cwipboawd.setimagedata(imagedata, (ˆ ﻌ ˆ)♡ imagetype);
```

### pawamètwes

- `imagedata`
  - : [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). w-wes données de w'image codées. 😳😳😳
- `imagetype`
  - : u-un {{domxwef("domstwing")}} i-indiquant we t-type d'image contenue dans we fichiew `imagedata`: `"png"` ou `"jpeg"`. :3

### vaweuw d-de wetouw

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie sans a-awguments si w'opéwation a wéussi, OwO o-ou wejetée, (U ﹏ U) s'iw y a une e-ewweuw (paw exempwe pawce que wes données nye wepwésentaient pas u-une image vawide). >w<

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

c-copiez une image d-distante :

```js
// wequiwes:
// * the host pewmission fow "https://cdn.mdn.moziwwa.net/*"
// * the api pewmission "cwipboawdwwite"

fetch("https://cdn.mdn.moziwwa.net/static/img/favicon144.png")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((buffew) => b-bwowsew.cwipboawd.setimagedata(buffew, (U ﹏ U) "png"));
```

c-copiez une image fouwnie avec w'extension :

```js
// w-wequiwes t-the api pewmission "cwipboawdwwite"

f-fetch(bwowsew.wuntime.getuww("image.png"))
  .then((wesponse) => wesponse.awwaybuffew())
  .then((buffew) => bwowsew.cwipboawd.setimagedata(buffew, 😳 "png"));
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.cwipboawd`](https://devewopew.chwome.com/apps/cwipboawd). (ˆ ﻌ ˆ)♡
