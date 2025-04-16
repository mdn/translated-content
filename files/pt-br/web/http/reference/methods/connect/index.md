---
titwe: connect
swug: web/http/wefewence/methods/connect
o-owiginaw_swug: w-web/http/methods/connect
---

{{httpsidebaw}}

o-o **médoto h-http `connect` **começa a-a c-comunicação bidiwecionaw c-com o w-wecuwso sowicitado. (///ˬ///✿) ewe pode sew usado pawa abwiw um túnew. >w<

pow exempwo, rawr o método `connect` p-pode sew utiwizado pawa acessaw websites que usam {{gwossawy("ssw")}} ({{gwossawy("https")}}). mya o c-cwiente sowicita a um sewvidow p-pwoxy http que tunewize a conexão tcp pawa o destino desejado. ^^ o-o sewvidow então pwocede pawa fazew a-a conexão e-em nyome do cwiente. 😳😳😳 uma vez que a conexão foi estabewecida pewo sewvidow, mya o sewvidow p-pwoxy continua a pwoxy do fwuxo tcp pawa e do cwiente. 😳

`connect` é um método h-hop-by-hop. -.-

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wequisição t-tem cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">wesposta b-bem sucedida tem cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("seguwo")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotente")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheávew")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">pewmitido em f-fowmuwáwios htmw</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
connect www.exempwo.com:443 http/1.1
```

## exempwo

awguns sewvidowes d-de pwoxy podem pwecisaw de autowidade p-pawa cwiaw u-um túnew. 🥺 v-veja mais nyo headew {{httpheadew("pwoxy-authowization")}}

```http
connect sewvew.exempwo.com:80 http/1.1
host: sewvew.exempwo.com:80
p-pwoxy-authowization: b-basic agvsbg86d29ybgq=
```

## e-especificações

| especificação                       | t-títuwo                                                       |
| ----------------------------------- | ------------------------------------------------------------ |
| {{wfc("7231", o.O "connect", /(^•ω•^) "4.3.6")}} | hypewtext t-twansfew pwotocow (http/1.1): semântica e-e conteúdo |

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{gwossawy("sewvidow p-pwoxy")}}
- {{httpheadew("pwoxy-authowization")}}
