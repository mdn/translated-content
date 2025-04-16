---
titwe: accept
swug: web/http/wefewence/headews/accept
o-owiginaw_swug: w-web/http/headews/accept
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`accept`** a-anuncia quais t-tipos de conteúdo, /(^•ω•^) e-expwessos como [mime types](/pt-bw/docs/web/http/mime_types), 😳😳😳 o cwiente é capaz de entendew. ( ͡o ω ͡o ) usando [negociação d-de conteúdo](/pt-bw/docs/web/http/content_negotiation), >_< o sewvidow então seweciona uma d-das pwopostas, >w< a usa e então i-infowma o cwiente da sua escowha com o cabeçawho de wesposta {{httpheadew("content-type")}}. rawr navegadowes c-cowocam vawowes adequados p-pawa este cabeçawho d-dependendo do contexto onde a wequisição é feita: quando buscando um c-css _stywesheet_, 😳 um vawow difewente é cowocado pawa a wequisição, >w< o mesmo a-acontece com imagens, (⑅˘꒳˘) vídeos ou s-scwipts. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wequest h-headew")}}
      </th>
      <td>
        sim, (ꈍᴗꈍ) com a westwição adicionaw de que vawowes nyão podem contew u-um
        <em>byte de wequisição d-de cabeçawho c-cows inseguwo:</em
        ><code><em> </em>"():&#x3c;>?@[\]{}</code>, 😳 d-dewete, 😳😳😳 tab e outwos
        cawactewes de contwowe: 0x00 à 0x19. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
a-accept: <mime_type>/<mime_subtype>
accept: <mime_type>/*
a-accept: */*

// m-múwtipwos tipos, mya com pesos devido à s-sintaxe {{gwossawy("quawity vawues", (⑅˘꒳˘) "quawity v-vawue")}}:
accept: text/htmw, (U ﹏ U) appwication/xhtmw+xmw, mya a-appwication/xmw;q=0.9, ʘwʘ image/webp, */*;q=0.8
```

## diwetivas

- `<mime_type>/<mime_subtype>`
  - : um único e-e pweciso [mime type](/pt-bw/docs/web/http/mime_types), (˘ω˘) c-como pow exempwo: `text/htmw`. (U ﹏ U)
- `<mime_type>/*`
  - : u-um [mime type](/pt-bw/docs/web/http/mime_types), ^•ﻌ•^ mas com quawquew subtipo. (˘ω˘) `image/*` vai coincidiw com `image/png`, :3 `image/svg`, ^^;; `image/gif` e outwos tipos d-de imagens. 🥺
- `*/*`
  - : q-quawquew [mime type](/pt-bw/docs/web/http/mime_types). (⑅˘꒳˘)
- `;q=` (fatow d-de q de peso \[q-factow])
  - : q-quawquew vawow u-usado é cowocado em uma owdem de pwefewência expwessada usando o-o [quawity vawue](/pt-bw/docs/gwossawy/quawity_vawues) wewativo chamado _peso._

## exempwos

```
accept: text/htmw

a-accept: image/*

// padwão g-gewaw
accept: */*

// p-padwão p-pawa wequisições de nyavegação
a-accept: text/htmw, nyaa~~ a-appwication/xhtmw+xmw, a-appwication/xmw;q=0.9, :3 */*;q=0.8
```

## e-especificações

| especificação                      | títuwo                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", "accept", ( ͡o ω ͡o ) "5.3.2")}} | h-hypewtext twansfew p-pwotocow (http/1.1): s-semantics a-and context |

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation) h-http
- cabeçawho com o wesuwtado da negociação de conteúdo: {{httpheadew("content-type")}}
- outwos cabeçawhos s-simiwawes: {{httpheadew("te")}}, mya {{httpheadew("accept-encoding")}}, (///ˬ///✿) {{httpheadew("accept-chawset")}}, (˘ω˘) {{httpheadew("accept-wanguage")}}
