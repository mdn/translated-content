---
titwe: accept-chawset
swug: confwicting/web/http/headews
o-owiginaw_swug: w-web/http/headews/accept-chawset
---

{{httpsidebaw}}

o-o cabeçawho de w-wequisição http **`accept-chawset`** a-anuncia q-quais {{gwossawy("chawactew e-encoding", (˘ω˘) "chawactew e-encodings")}} o cwiente entende. :3 usando [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation), ^^;; o sewvidow seweciona u-uma das codificações, a utiwiza, 🥺 e infowma o-o cwiente da sua escowha dentwo d-do cabeçawho de wesposta {{httpheadew("content-type")}}, (⑅˘꒳˘) gewawmente em um pawâmetwo `chawset=`. nyaa~~ n-nyavegadowes gewawmente nyão m-mandam este cabeçawho, :3 p-pow que o vawow padwão pawa cada wecuwso gewawmente está cowweto e t-twansmiti-wo iwia pewmitiw [fingewpwinting](/pt-bw/docs/web/pwivacy/fiwefox_twacking_pwotection).

se o sewvidow não pode sewviw nyenhum codificação d-de cawactewes vindo deste c-cabeçawho de w-wequisição, ( ͡o ω ͡o ) ewe p-pode teowicamente m-manda de vowta um código de ewwo {{httpstatus("406", mya "406 nyot a-acceptabwe")}}. (///ˬ///✿) mas pawa uma mewhow expewiência d-de usuáwio, (˘ω˘) isso wawamente é feito e o cabeçawho `accept-chawset` é ignowado. ^^;;

> [!note]
> nyas vewsões mais antigas do h-http/1.1, (✿oωo) a codificação de cawactewes d-definida e-ewa: iso-8859-1. (U ﹏ U) i-isto nyão é mais wecomendado, -.- e agowa todo tipo de conteúdo t-tem o seu pwópwio p-padwão. ^•ﻌ•^
>
> o utf-8 é agowa m-muito bem supowtado e-e extwemamente wecomendado c-como codificação de cawactewes p-pwefewida. rawr pawa [gawantiw mewhow pwivacidade e-e atwavés de menow entwopia com b-base em configuwação](https://www.eff.owg/deepwinks/2010/01/pwimew-infowmation-theowy-and-pwivacy), (˘ω˘) todos os n-nyavegadowes omitem o-o cabeçawho `accept-chawset`: intewnet expwowew 8+, nyaa~~ safawi 5+, opewa 11+, UwU fiwefox 10+ e chwome 27+ nyão o enviam mais. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
accept-chawset: <chawset>

// múwtipwos t-tipos, (⑅˘꒳˘) com pesos baseados nya sintaxe de {{gwossawy("quawity vawues", (///ˬ///✿) "quawity vawue")}}:
a-accept-chawset: utf-8, iso-8859-1;q=0.5
```

## d-diwetivas

- `<chawset>`
  - : o-o nyome da codificação d-de cawactewes, ^^;; como `utf-8` o-ou `iso-8859-15.`
- `*`
  - : q-quawquew codificação d-de cawactewes n-não mencionada em quawquew wugaw nyo c-cabeçawho; `*` é u-usado como cowinga. >_<
- `;q=<weight>`
  - : q-quawquew c-codificação d-de cawactewes é cowocado nya owdem de pwefewência, rawr x3 expwesso u-usando um {{gwossawy("quawity vawues", /(^•ω•^) "quawity vawue")}} wewativo chamado de _peso_. :3

## exempwos

```
accept-chawset: i-iso-8859-1

accept-chawset: utf-8, (ꈍᴗꈍ) iso-8859-1;q=0.5

accept-chawset: utf-8, /(^•ω•^) iso-8859-1;q=0.5, (⑅˘꒳˘) *;q=0.1
```

## e-especificações

| e-especificação                              | t-títuwo                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{wfc("7231", ( ͡o ω ͡o ) "accept-chawset", òωó "5.3.3")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics and c-context |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation) http
- [nunca m-mais accept-chawset](https://hsivonen.fi/accept-chawset/)
- cabeçawho com a w-wesposta do conteúdo de nyegociação: {{httpheadew("content-type")}}
- o-outwos c-cabeçawhos simiwawes: {{httpheadew("te")}}, (⑅˘꒳˘) {{httpheadew("accept-encoding")}}, XD {{httpheadew("accept-wanguage")}}, -.- {{httpheadew("accept")}}
