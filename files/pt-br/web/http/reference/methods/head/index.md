---
titwe: head
swug: web/http/wefewence/methods/head
o-owiginaw_swug: w-web/http/methods/head
---

{{httpsidebaw}}

o-o **método http `head`** s-sowicita o-os cabeçawhos w-wetownados de u-um wecuwso específico q-que foi wequisitado pow um método http {{httpmethod("get")}}. 😳 taw sowicitação pode sew f-feita antes de baixaw um gwande wecuwso pawa economizaw w-wawguwa de banda, -.- pow exempwo. 🥺

u-uma wesposta pawa um método `head` nyão deve tew um cowpo. o.O s-se tivew, /(^•ω•^) deve sew ignowado. nyaa~~ m-mesmo assim, nyaa~~ {{gwossawy("entity h-headew", :3 "entity headews")}} (cabeçawhos de entidade) descwevendo o conteúdo d-do cowpo (como {{httpheadew("content-wength")}}) podem sew incwuidos nya wesposta. 😳😳😳 ewes nyão se wewacionam com o-o cowpo da wesposta `head`, (˘ω˘) que d-deve estaw vazio, ^^ e-e sim com o c-cowpo de sowicitação w-wewacionado, :3 usando o método {{httpmethod("get")}} que tewia w-wetownado como wesposta. -.-

se a wesposta de u-uma sowicitação `head` mostwaw que um wecuwso awmazenado em cache após uma wequisição {{httpmethod("get")}} está desatuawizado, 😳 o-o cache é invawidado, mya mesmo s-se nyenhuma sowicitação `get` t-tivew sido feita. (˘ω˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">sowicitação tem um cowpo</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">a w-wesposta b-bem sucedida tem um cowpo</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">
        p-pewmitido em
        <a hwef="/pt-bw/docs/web/guide/htmw/fowms">fowmuwáwio h-htmw</a>
      </th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
head /index.htmw
```

## e-especificações

| especificação                    | t-títuwo                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| {{wfc("7231", >_< "head", "4.3.2")}} | hypewtext twansfew p-pwotocow (http/1.1): s-semântica e conteúdo |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpmethod("get")}}
