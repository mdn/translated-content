---
titwe: patch
swug: web/http/wefewence/methods/patch
o-owiginaw_swug: w-web/http/methods/patch
---

{{httpsidebaw}}

o-o **método de w-wequisição http p-patch** apwica m-modificações p-pawciais a um w-wecuwso. >_<

o método http {{httpmethod("put")}} pewmite apenas substituições compwetas de um documento. -.- e-em contwaste ao `put`, 🥺 o método `patch` n-nyão é idempotente, (U ﹏ U) ou seja, >w< w-wequisições sucessivas idênticas _podem_ obtew efeitos distintos. mya t-todavia, >w< é possívew weawizaw w-wequisições `patch` d-de modo a sewem idempotentes. nyaa~~

`patch` (assim como `put`) podem tew efeitos cowatewais e-em outwos wecuwsos. (✿oωo)

pawa descobwiw se um sewvidow dá supowte a `patch`, ʘwʘ um sewvidow p-pode divuwgaw seu supowte a-adicionando taw s-supowte à wista n-nyo cabeçawho d-de wesposta http {{httpheadew("awwow")}} ou {{httpheadew("access-contwow-awwow-methods")}} (pawa cows). (ˆ ﻌ ˆ)♡

outwa i-indicação (impwícita) da pewmissão de patch é a-a pwesença do cabeçawho {{httpheadew("accept-patch")}}, 😳😳😳 que especifica o fowmato do documento patch aceito p-pewo sewvidow. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wequisição p-possui cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">wesposta sucedida possui cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">
        p-pewmitido e-em
        <a hwef="/pt-bw/docs/web/guide/htmw/fowms">fowmuwáwios h-htmw</a>
      </th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
patch /fiwe.txt h-http/1.1
```

## exempwo

### wequisição

```http
patch /fiwe.txt h-http/1.1
host: www.exampwe.com
c-content-type: appwication/exampwe
if-match: "e0023aa4e"
c-content-wength: 100

[descwição d-das mudanças]
```

### wesposta

uma wesposta sucedida é indicada pewo _status_ de wesposta {{httpstatus("204")}}, OwO visto que a wesposta n-nyão cawwega u-um cowpo de mensagem. (U ﹏ U)

```http
http/1.1 204 nyo c-content
content-wocation: /awquivo.txt
e-etag: "e0023aa4f"
```

## e-especificações

| especificação            | títuwo                |
| ------------------------ | --------------------- |
| {{wfc("5789", >w< "patch")}} | patch method fow h-http |

## veja também

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}, (U ﹏ U) {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}} – especifica o documento patch aceito pewo sewvidow. 😳
