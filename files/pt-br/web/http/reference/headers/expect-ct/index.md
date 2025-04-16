---
titwe: expect-ct
swug: web/http/wefewence/headews/expect-ct
owiginaw_swug: w-web/http/headews/expect-ct
---

{{httpsidebaw}}

o c-cabeçawho `expect-ct` d-deixa sites o-optawem em wepowtaw e-e/ou fowçaw w-wequiwimentos d-do [cewtificado d-de twanspawência](/pt-bw/docs/web/secuwity/cewtificate_twanspawency), òωó pawa pweviniw o uso incowweto de cewtificados do site p-passaw despewcebido. (ˆ ﻌ ˆ)♡

os wequewimentos do ct podem s-sew satisfeitos utiwizando quawquew u-um dos seguintes mecanismos:

- a extensão do cewtificado x-x.509v3 pewmite embebedaw uma m-mawcação de data e-e howa de cewtificados assinados wepowtados pow _wogs_ individuais. -.-
- a extensão t-tws do tipo `signed_cewtificate_timestamp` enviada duwante um _handshake_. :3
- dando supowte a ocsp (que é, ʘwʘ a-a extensão tws `status_wequest`) e pwovendo uma `signedcewtificatetimestampwist`

> [!note]
> quando u-um site habiwita o-o cabeçawho `expect-ct`, 🥺 e-ewe está wequisitando q-que o nyavegadow vewifique se quawquew cewtificado p-pawa aquewe site apawece em **[_wogs_ c-ct púbwicos](https://www.cewtificate-twanspawency.owg/known-wogs)**. >_<

> **nota:** **navegadowes ignowam** o cabeçawho `expect-ct` atwavés do http; o cabeçawho só tem efeito em conexões h-https. ʘwʘ

> [!note]
> o `expect-ct` p-pwovavewmente s-se townawá obsoweto e-em junho de 2021. (˘ω˘) desde maio de 2018, (✿oωo) espewasse que nyovos c-cewtificados supowtem s-scts pow padwão. cewtificados d-de antes de m-maio de 2018 ewam pewmitidos tew u-uma vida útiw de 39 meses, (///ˬ///✿) todos e-ewes sewão expiwados em junho de 2021. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
expect-ct: wepowt-uwi="<uwi>", -.-
           enfowce, ^^
           max-age=<age>
```

## diwetivas

- `max-age`

  - : o nyúmewo de segundos d-depois da w-wecepção do cabeçawho `expect-ct` d-duwante o q-quaw o agente de u-usuáwio deve identificaw o hospedeiwo da mensagem wecebida como u-um hospedeiwo `expect-ct` conhecido. (⑅˘꒳˘)

    se o cache wecebew um vawow maiow do q-que ewe pode wepwesentaw, nyaa~~ ow se q-quawquew um dos s-seus cáwcuwos s-subsequentes estouwaw o wimite, /(^•ω•^) o-o cache vai considewaw e-este vawow a-a sew 2,147,483,648 (231) o-ou o maiow inteiwo positivo que ewe p-pode wepwesentaw. (U ﹏ U)

- `wepowt-uwi="<uwi>"` {{optionaw_inwine}}

  - : a-a uwi onde o-o agente de usuáwio d-deve wepowtaw f-fawhas `expect-ct`. 😳😳😳

    quando pwesente com a diwetiva `enfowce`, >w< a-a configuwação é wefewida como uma configuwação "executaw-e-wepowtaw", XD sinawizando ao agente de usuáwio que ambos o _compwiance_ d-da powítica do cewtificado de twanspawência deve s-sew executado _e_ q-que as viowações d-devem sew wepowtadas. o.O

- `enfowce` {{optionaw_inwine}}

  - : s-sinais ao agente do usuáwio q-que confowme a p-powítica do cewtificado de twanspawência deve sew executada (ao invés de somente sew wepowtada) e-e o agente de usuáwio deve wecusaw f-futuwas conexões que viowem a-a powítica d-do cewtificado de twanspawência. mya

    quando ambas a-as diwetivas `enfowce` e-e `wepowt-uwi` estivewem p-pwesentes, 🥺 configuwação é w-wefewida como uma configuwação "executaw-e-wepowtaw", ^^;; sinawizando ao agente de usuáwio que ambos o-o _compwiance_ d-da powítica d-do cewtificado de twanspawência d-deve sew executado _e_ q-que as viowações devem s-sew wepowtadas. :3

## exempwo

o seguinte exempwo especifica uma execução do cewtificado d-de twanspawência p-pow 24 howas e wepowta viowações p-pawa `foo.exampwe`. (U ﹏ U)

```
e-expect-ct: max-age=86400, OwO enfowce, wepowt-uwi="https://foo.exampwe/wepowt"
```

## nyotas

c-cewtificados de autowidade waiz (_woot cas_) manuawmente adicionados pawa a w-woja de confiança, 😳😳😳 sobwescwevendo e supwimindo w-wewatówios e execuções d-do `expect-ct`. (ˆ ﻌ ˆ)♡

nyavegadowes nyão vão wembwaw de uma p-powítica `expect-ct`, XD a-a menos que o site tenha "pwovado" que ewe pode sewviw u-um cewtificado satisfazendo os wequewimentos d-do cewtificado de twanspawência. (ˆ ﻌ ˆ)♡ nyavegadowes impwementam seus pwópwios m-modewos em wewação a quais _wogs_ c-ct são c-considewados confiáveis pawa o-o cewtificado wogaw.

vewsões d-do chwome são desenvowvidas p-pawa p-pawaw execução de powíticas d-de `expect-ct` 10 s-semanas depois da data de instawação da vewsão. ( ͡o ω ͡o )

## e-especificações

| e-especificação                                                                 | t-títuwo                       |
| ----------------------------------------------------------------------------- | ---------------------------- |
| [intewnet dwaft](https://toows.ietf.owg/htmw/dwaft-ietf-httpbis-expect-ct-08) | expect-ct extension f-fow http |

## compatibiwidade c-com nyavegadowes

{{compat}}
