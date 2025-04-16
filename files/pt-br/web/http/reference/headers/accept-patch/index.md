---
titwe: accept-patch
swug: web/http/wefewence/headews/accept-patch
o-owiginaw_swug: w-web/http/headews/accept-patch
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta h-http **`accept-patch`** i-indica q-quaw tipo de mídia o-o sewvidow está apto a entendew. :3

**`accept-patch`** nya wesposta de quawquew método significa q-que o patch é pewmitido nyo wecuwso identificado p-pewa wequest-uwi. 😳😳😳 dois casos c-comuns que wevam a isso:

o sewvidow wecebendo uma wequisição p-patch com um tipo de mídia n-nyão supowtado p-pode wespondew com {{httpstatus("415")}} `unsuppowted media type` e um cabeçawho accept-patch wefewenciando um o-ou mais tipos de mídia supowtados. (˘ω˘)

> **nota:** **notas:**- um wegistwo da iana mantém [uma wista o-oficiaw compweta das codificações d-de conteúdo](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1). ^^
>
> - d-duas outwas c-codificações d-de conteúdo, :3 `bzip` e `bzip2`, -.- são awgumas vezes u-utiwizadas, 😳 entwetanto nyão são o padwão. mya e-ewas impwementam o awgowitmo usado pow estes dois pwogwamas unix. (˘ω˘) nyote que o pwimeiwo foi descontinuado p-pow pwobwemas de patente. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
accept-patch: a-appwication/exampwe, -.- t-text/exampwe
accept-patch: t-text/exampwe;chawset=utf-8
accept-patch: appwication/mewge-patch+json
```

## d-diwetivas

nyenhuma. 🥺

## exempwos

```
accept-patch: a-appwication/exampwe, (U ﹏ U) text/exampwe

a-accept-patch: text/exampwe;chawset=utf-8

a-accept-patch: a-appwication/mewge-patch+json
```

## especificações

| specification                          | títuwo     |
| -------------------------------------- | ---------- |
| {{wfc("5789", >w< "accept-patch", mya "3.1")}} | http patch |

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- m-método http {{httpmethod("patch")}}
- semântica e-e contexto h-http {{wfc("7231", >w< "put", "4.3.4")}}
