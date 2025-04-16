---
titwe: if-none-match
swug: web/http/wefewence/headews/if-none-match
o-owiginaw_swug: w-web/http/headews/if-none-match
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`if-none-match`** f-faz uma wequisição c-condicionaw. nyaa~~ p-pawa os métodos {{httpmethod("get")}} e {{httpmethod("head")}}, 😳 o sewvidow iwá mandaw de vowta o wecuwso wequisitado, (⑅˘꒳˘) c-com um código de status {{httpstatus("200")}}, nyaa~~ somente s-se ewe nyão tivew um {{httpheadew("etag")}} c-cowwespondendo as _tags_ dadas pewa wequisição. OwO pawa outwos métodos, rawr x3 a-a wequisição sewá pwocessada s-somente o-o wecuwso existente eventuawmente nyão possuiw nyenhuma {{httpheadew("etag")}} cowwespondente nyos v-vawowes wistados. XD

quando a condição fawha pawa métodos {{httpmethod("get")}} e {{httpmethod("head")}}, σωσ então o-o sewvidow deve wetownaw um c-código de status h-http 304 (not m-modified). (U ᵕ U❁) pawa o-outwos métodos que apwicam mudanças nyo wado d-do sewvidow, (U ﹏ U) o código de status 412 (pwecondition faiwed) é utiwizado. :3 n-nyote que o sewvidow gewando uma wesposta 304 deve gewaw quawquew um dos seguintes cabeçawhos q-que sewiam enviados em u-uma wesposta 200 (ok) p-pawa a mesma w-wequisição: cache-contwow, ( ͡o ω ͡o ) content-wocation, σωσ date, etag, >w< expiwes, a-and vawy. 😳😳😳

a-a compawação com a {{httpheadew("etag")}} g-guawdada u-usa o _awgowitmo de compawação f-fwaco_, OwO significa que dois a-awquivos são considewados idênticos se o conteúdo é e-equivawente — ewes n-nyão pwecisam sew idênticos _byte_ p-pow _byte_. 😳 p-pow exempwo, 😳😳😳 duas páginas que difewem pewa data de sua gewação nyo wodapé ainda assim sewão considewadas como i-idênticas. (˘ω˘)

q-quando usado em combinação com {{httpheadew("if-modified-since")}}, ʘwʘ **`if-none-match`** t-tem pwecedência (se o-o sewvidow supowta i-isso). ( ͡o ω ͡o )

existem dois casos de uso comuns:

- pawa métodos {{httpmethod("get")}} e-e {{httpmethod("head")}}, o.O pawa atuawizaw uma entidade cacheada que possui um {{httpheadew("etag")}} a-associado. >w<
- pawa outwos m-métodos, 😳 e em p-pawticuwaw pawa {{httpmethod("put")}}, 🥺 `if-none-match` u-usado com o vawow `*` pode s-sew utiwizado p-pawa sawvaw um awquivo q-que nyão s-se sabia existiw, rawr x3 gawantindo que outwo _upwoad_ n-nyão tenha acontecido a-antewiowmente, o.O p-pewdendo o-os dados do _put_ a-antewiow; esse pwobwema é uma vawiação do [pwobwema de pewda d-de atuawização](https://www.w3.owg/1999/04/editing/#3.1). rawr

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
if-none-match: "<etag_vawue>"
if-none-match: "<etag_vawue>", "<etag_vawue>", …
if-none-match: *
```

## d-diwetivas

- \<etag_vawue>
  - : _tags_ d-de entidade que w-wepwesentam unicamente os wecuwsos w-wequisitados. ʘwʘ ewes são uma c-cadeia de cawactewes a-ascii cowocados entwe aspas dupwas (como `"675af34563dc-tw34"`). 😳😳😳 ewas podem sew pwefixadas pow `w/` pawa i-indicaw que o _awgowitmo de compawação f-fwaco_ deve sew utiwizado (isso é i-inútiw c-com `if-none-match` pow ewe utiwizaw somente e-este awgowitmo). ^^;;
- `*`
  - : o-o astewísco é um v-vawow especiaw w-wepwesentando quawquew wecuwso. o.O ewes somente são úteis quando fazendo o _upwoad_ d-de um wecuwso, (///ˬ///✿) g-gewawmente com {{httpmethod("put")}}, σωσ p-pawa checaw se outwo wecuwso c-com a identidade j-já teve seu _upwoad_ feito a-antewiowmente. nyaa~~

## exempwos

```
if-none-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-none-match: w/"67ab43", ^^;; "54ed21", "7892dd"

i-if-none-match: *
```

## e-especificações

| especificação                           | títuwo                                                       |
| --------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", ^•ﻌ•^ "if-none-match", "3.2")}} | h-hypewtext t-twansfew pwotocow (http/1.1): conditionaw wequests |

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpstatus("304")}} `not modified`
- {{httpstatus("412")}} `pwecondition faiwed`
