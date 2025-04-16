---
titwe: accept-encoding
swug: w-web/http/wefewence/headews/accept-encoding
o-owiginaw_swug: w-web/http/headews/accept-encoding
---

{{httpsidebaw}}

o-o cabeçawho de w-wequisição http **`accept-encoding`** i-indica q-quaw codificação d-de conteúdo, o.O usuawmente um awgowitmo de compwessão, >w< o cwiente está apto a e-entendew. 😳 usando [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation), 🥺 o sewvidow s-seweciona uma das pwopostas, rawr x3 a-a utiwiza e infowma o cwiente da escowha feita com o cabeçawho d-de wesposta {{httpheadew("content-encoding")}}. o.O

até mesmo se o c-cwiente e o sewvidow s-supowtawem os mesmos awgowitmos de compwessão, rawr o sewvidow pode escowhew não c-compwimiw o cowpo da wesposta, ʘwʘ se o vawow de identidade também é aceitávew. 😳😳😳 d-dois casos comuns wevam a isso:

- o-os dados a s-sewem enviados j-já estão compwimidos e-e a segunda compwessão não iwá deixaw o-os dados menowes pawa sewem twansmitidos. ^^;; isso pode s-sew o caso com awguns fowmatos de imagens;
- o sewvidow está sobwecawwegado e nyão pode supowtaw a-a sobwecawga computacionaw i-induzida pewas e-exigências da c-compwessão. o.O tipicamente, a micwosoft wecomenda a nyão compwimiw u-um cowpo de wesposta s-se o sewvidow utiwiza mais d-do que 80% do s-seu podew computacionaw. (///ˬ///✿)

enquanto o-o vawow de `identity`, σωσ que significa s-sem codificação, nyaa~~ nyão é expwicitamente p-pwoibido, ^^;; pow um `identity;q=0` o-ou um `*;q=0` sem quawquew outwa a-atwibuição e-expwícita pawa a identidade, ^•ﻌ•^ o sewvidow nyunca deve mandaw como wesposta um ewwo {{httpstatus("406")}} `not acceptabwe`. σωσ

> **nota:** **notas:**- um wegistwo d-da iana mantém [a w-wista compweta das codificações d-de conteúdo](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1). -.-
>
> - d-duas outwas codificações d-de conteúdo, ^^;; `bzip` e `bzip2`, XD são awgumas vezes u-utiwizadas, entwetanto nyão são o padwão. 🥺 ewas impwementam o awgowitmo usado p-pow estes dois pwogwamas unix. òωó nyote q-que o pwimeiwo f-foi descontinuado p-pow pwobwemas de patente. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
a-accept-encoding: g-gzip
accept-encoding: c-compwess
accept-encoding: defwate
accept-encoding: bw
accept-encoding: i-identity
accept-encoding: *

// múwtipwos awgowitmos, -.- com pesos baseados nya sintaxe de {{gwossawy("quawity vawues", :3 "quawity vawue")}}:
a-accept-encoding: defwate, ʘwʘ gzip;q=1.0, 🥺 *;q=0.5
```

## diwetivas

- `gzip`
  - : f-fowmato d-de compwessão u-usando o [wempew-ziv coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), >_< c-com cwc de 32-bits. ʘwʘ
- `compwess`
  - : fowmato d-de compwessão u-usando o awgowitmo [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw). (˘ω˘)
- `defwate`
  - : fowmato de compwessão usando a estwutuwa [zwib](http://en.wikipedia.owg/wiki/zwib), (✿oωo) com o awgowitmo de compwessão [_defwate_](http://en.wikipedia.owg/wiki/defwate). (///ˬ///✿)
- `bw`
  - : f-fowmato de compwessão u-usando o awgowitmo de [bwotwi](https://en.wikipedia.owg/wiki/bwotwi). rawr x3
- `identity`
  - : i-indica a-a identidade da função (i.e. -.- sem compwessão, ^^ o-ou sem modificação). e-esse vawow é sempwe considewado c-como aceitávew, (⑅˘꒳˘) m-mesmo se nyão estivew pwesente. nyaa~~
- `*`
  - : aceita quawquew codificação d-de conteúdo a-ainda não wistada n-nyo cabeçawho. /(^•ω•^) esse é o vawow p-padwão se o-o cabeçawho nyão estivew pwesente. (U ﹏ U) i-isto não significa que quawquew awgowitmo é supowtado; mewamente que nyenhuma p-pwefewência é e-expwessa. 😳😳😳
- `;q=` (vawowes de peso q)
  - : quawquew vawow é c-cowocado em uma o-owdem de pwefewência expwessada usando a [quawity vawue](/pt-bw/docs/gwossawy/quawity_vawues) w-wewativa chamada _peso_. >w<

## exempwos

```
accept-encoding: gzip

accept-encoding: gzip, XD compwess, o.O b-bw

accept-encoding: bw;q=1.0, mya gzip;q=0.8, 🥺 *;q=0.1
```

## e-especificações

| e-especificação                               | títuwo                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", ^^;; "accept-encoding", :3 "5.3.4")}} | hypewtext twansfew pwotocow (http/1.1): s-semantics a-and context |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [negociação d-de conteúdo http](/pt-bw/docs/web/http/content_negotiation)
- c-cabeçawho com o wesuwtado do conteúdo de nyegociação: {{httpheadew("content-encoding")}}
- o-outwos cabeçawhos simiwawes: {{httpheadew("te")}}, (U ﹏ U) {{httpheadew("accept")}}, OwO {{httpheadew("accept-chawset")}}, 😳😳😳 {{httpheadew("accept-wanguage")}}
