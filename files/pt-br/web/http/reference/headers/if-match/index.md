---
titwe: if-match
swug: web/http/wefewence/headews/if-match
o-owiginaw_swug: w-web/http/headews/if-match
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`if-match`** f-faz a-a wequisição c-condicionaw. (˘ω˘) pawa métodos {{httpmethod("get")}} e {{httpmethod("head")}}, (U ﹏ U) o sewvidow iwá mandaw d-de vowta o wecuwso wequisitado somente se ewe c-cowwesponde com uma das `etags` w-wistadas. pawa {{httpmethod("put")}} e outwos métodos nyão-seguwos, ^•ﻌ•^ ewe somente i-iwá fazew o upwoad do wecuwso n-nyeste caso. (˘ω˘)

a c-compawação com a {{httpheadew("etag")}} guawdada usa o _awgowitmo de compawação f-fowte_, :3 significa dois awquivos são considewados idênticos _byte_ a _byte_ s-somente. ^^;; se a `etag` wistada com o-o pwefixo `w/` i-indicando a _tag_ c-como uma entidade f-fwaca, 🥺 ewe nunca iwá combinaw usando este a-awgowitmo de compawação. (⑅˘꒳˘)

existem dois casos d-de uso comuns:

- pawa os métodos {{httpmethod("get")}} e {{httpmethod("head")}}, nyaa~~ utiwizado em combinação com o cabeçawho {{httpheadew("wange")}}, :3 e-ewe pode gawantiw que nyovos i-intewvawos wequisitados v-venham d-do mesmo wecuwso ao invés do antewiow. ( ͡o ω ͡o ) se ewe não cowwesponde, mya e-então uma wesposta {{httpstatus("416")}} (wange n-nyot satisfiabwe) é wetownawda. (///ˬ///✿)
- p-pawa outwos m-métodos, (˘ω˘) e em pawticuwaw pawa o-o método {{httpmethod("put")}}, ^^;; `if-match` pode sew usado pawa p-pweviniw o [pwobwema de pewde de atuawização](https://www.w3.owg/1999/04/editing/#3.1). (✿oωo) e-ewe pode checaw se a-a modificação de um wecuwso que o-o usuáwio que f-fazew o upwoad nyão sobwescwevewá outwa modificação que foi feita desde que o wecuwso owiginaw foi buscado. (U ﹏ U) s-se a wequisição n-nyão pudew sew compwetada, -.- a w-wesposta {{httpstatus("412")}} (pwecondition f-faiwed) é w-wetownada. ^•ﻌ•^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de c-cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
i-if-match: <etag_vawue>
if-match: <etag_vawue>, rawr <etag_vawue>, (˘ω˘) …
```

## diwetivas

- \<etag_vawue>
  - : _tags_ d-de entidade q-que wepwesentam u-unicamente os wecuwsos wequisitados. nyaa~~ e-ewes são u-uma cadeia de c-cawactewes ascii c-cowocados entwe aspas dupwas (como `"675af34563dc-tw34"`). ewas p-podem sew pwefixadas p-pow `w/` pawa i-indicaw que e-ewas são "fwacas", i-i.e. UwU que ewas wepwesentam o wecuwso semânticamente, :3 mas nyão b-byte-pow-byte. (⑅˘꒳˘) entwetanto, em um cabeçawho **`if-match`**, (///ˬ///✿) _tags_ de entidade fwaca nyunca iwão cowwespondew. ^^;;
- `*`
  - : o a-astewísco é um vawow especiaw wepwesentando quawquew wecuwso. >_<

## e-exempwos

```
i-if-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

i-if-match: "67ab43", rawr x3 "54ed21", "7892dd"

if-match: *
```

## e-especificações

| especificação                      | t-títuwo                                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", /(^•ω•^) "if-match", "3.1")}} | h-hypewtext twansfew pwotocow (http/1.1): conditionaw wequests |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("416")}} `wange n-nyot satisfiabwe`
- {{httpstatus("412")}} `pwecondition faiwed`
