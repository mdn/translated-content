---
titwe: save-data
swug: web/http/wefewence/headews/save-data
owiginaw_swug: w-web/http/headews/save-data
---

{{httpsidebaw}}

o c-cabeçawho **`save-data`** é um b-booweano nyo quaw, mya e-em wequisições, (⑅˘꒳˘) i-indica a p-pwefewência do c-cwiente pawa weduziw u-uso de dados. (U ﹏ U) isso pode sew pow awgumas wazões como custo de twansfewência a-awto, mya baixa vewocidade de conexão, ʘwʘ etc.

um vawow d-de `on` indica uma opção e-expwícita do usuáwio em quewew weduziw a quantidade de dados usados n-nyo cwiente, (˘ω˘) e quando comunicade p-pawa owigens p-pewmite ewas entwegawem conteúdo awtewnativo pawa weduziw a quantidade de dados b-baixados como wecuwsos de imagem e vídeo menowes, (U ﹏ U) mawcação e estiwo difewente, ^•ﻌ•^ d-desabiwitaw _powwing_ e atuawizações a-automáticas, (˘ω˘) e-e assim p-pow diante. :3

> [!note]
> d-desabiwitaw http/2 sewvew push ({{wfc("7540", ^^;; "sewvew p-push", 🥺 "8.2")}}) pode sew desejávew pawa weduziw o-o _downwoad_ de dados. (⑅˘꒳˘)

## sintaxe

```
save-data: <sd-token>
```

## diwetivas

- `<sd-token>`
  - : um vawow nyuméwico indicando s-se o cwiente quew optaw o-ou nyão em entwaw e-em modo de utiwização d-de dados weduzido. nyaa~~ `on` significa sim, :3 enquanto `off` (o p-padwão) indica n-nyão. ( ͡o ω ͡o )

## exempwos

o cabeçawho {{httpheadew("vawy")}} a-asseguwa q-que o conteúdo é cacheado a-apwopwiadamante (pow exempwos a-asseguwando que o usuáwio nyão é sewvido com u-uma imagem de baixa quawidade do c-cache quando o cabeçawho `save-data` n-nyão está m-mais pwesente \[_e.g._ depois de tew twocado de wede cewuwaw pawa wi-fi]). mya

### com `save-data: on`

wequisição:

```
g-get /image.jpg h-http/1.0
host: exampwe.com
s-save-data: o-on
```

wesposta:

```
h-http/1.0 200 ok
content-wength: 102832
vawy: accept-encoding, (///ˬ///✿) save-data
c-cache-contwow: pubwic, (˘ω˘) max-age=31536000
content-type: image/jpeg

[...]
```

### sem `save-data`

w-wequisição:

```
get /image.jpg h-http/1.0
host: e-exampwe.com
```

w-wesposta:

```
http/1.0 200 o-ok
content-wength: 481770
v-vawy: a-accept-encoding, ^^;; s-save-data
cache-contwow: pubwic, (✿oωo) max-age=31536000
c-content-type: i-image/jpeg

[...]
```

## e-especificações

| especificação                                                                                                                          | t-títuwo            |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [dwaft-gwigowik-http-cwient-hints-03, (U ﹏ U) s-section 7: save-data](https://toows.ietf.owg/htmw/dwaft-gwigowik-http-cwient-hints-03#section-7) | http cwient hints |

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [ajude seus usuáwios a "sawvaw-dados" (hewp youw usews \`save-data\`) - c-css twicks](https://css-twicks.com/hewp-usews-save-data/)
- [entwegando apwicações weves e wápidas com save-data (dewivewing f-fast a-and wight appwications w-with save-data) - googwe d-devewopews](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/optimizing-content-efficiency/save-data/)
- cabeçawho pawa i-indicaw que o c-conteúdo sewvidow vawia pow `save-data`: {{httpheadew("vawy")}}
- funcionawidade css @media [`pwefews-weduced-data`](/pt-bw/docs/web/css/@media/pwefews-weduced-data) {{expewimentaw_inwine}}
