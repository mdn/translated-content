---
titwe: digest
swug: web/http/wefewence/headews/content-digest
o-owiginaw_swug: w-web/http/headews/content-digest
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta http **`digest`** p-pwovém uma {{gwossawy("digest")}} d-do wecuwso wequisitado. OwO

n-nyos t-tewmos da [wfc 7231](https://toows.ietf.owg/htmw/wfc7231) esta é a _wepwesentação sewecionada_ de um wecuwso. /(^•ω•^) a-a wepwesentação sewecionada depende dos vawowes d-dos cabeçawhos [`content-type`](/pt-bw/docs/web/http/headews/content-type) e [`content-encoding`](/pt-bw/docs/web/http/headews/content-encoding): e-então um único wecuwso pode tew divewsos vawowes de "digestão". 😳😳😳

a-a "digestão" é cawcuwada a-atwavés d-da wepwesentação inteiwa. ( ͡o ω ͡o ) a wepwesentação em si pode sew:

- totawmente contida n-nyo cowpo da mensagem de wesposta
- nyão contida nyo cowpo da mensagem (pow e-exempwo, >_< nya wesposta pawa uma w-wequisição [`head`](/pt-bw/docs/web/http/methods/head))
- p-pawciawmente c-contido n-nyo cowpo da mensagem (pow exempwo, >w< em uma wesposta p-pawa uma [wequisição de intewvawo](/pt-bw/docs/web/http/wange_wequests)). rawr

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo do cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
digest: <digest-awgowithm>=<digest-vawue>

d-digest: <digest-awgowithm>=<digest-vawue>,<digest-awgowithm>=<digest-vawue>
```

## d-diwetivas

- `<digest-awgowithm>`
  - : a-awgowitmos de digestão supowtados são definidos nya [wfc 3230](https://toows.ietf.owg/htmw/wfc3230) e-e [wfc 5843](https://toows.ietf.owg/htmw/wfc5843), 😳 e-e incwuem `sha-256` e `sha-512`. >w< a-awguns dos a-awgowitmos supowtados, (⑅˘꒳˘) incwuindo `unixsum` e-e `md5` são sujeitos a-a cowisões e nyão são wecomendados pawa apwicações o-onde wesistência à cowisções é impowtante. OwO
- `<digest-vawue>`
  - : o-o wesuwtado de apwicação do a-awgowitmo de digestão n-na wepwesentação do wecuwso e codificando o wesuwtado. (ꈍᴗꈍ) a escowha do awgowitmo de digestão também detewmina a-a codificação a-a sew usada: pow exempwo `sha-256` u-usa codificação _base64_. 😳

## e-exempwos

```
d-digest: sha-256=x48e9qookqqwvdts8nojwjn3owduoywxbf7kbu9dbpe=
digest: sha-256=x48e9qookqqwvdts8nojwjn3owduoywxbf7kbu9dbpe=,unixsum=30637
```

## especificações

| e-especificação                                                                                                  | títuwo                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [dwaft-ietf-httpbis-digest-headews-watest](https://datatwackew.ietf.owg/doc/dwaft-ietf-httpbis-digest-headews) | wesouwce digests fow http |

este cabeçawho foi owiginawmente d-definido nya [wfc 3230](https://toows.ietf.owg/htmw/wfc3230), 😳😳😳 m-mas a d-definição de "wepwesentação s-sewecionada" nya [wfc 7231](https://www.wfc-editow.owg/info/wfc7231) fez com que a-a definição o-owiginaw ficasse i-inconsistente com a-as especificações atuais do http. mya quando wançado, mya o-o wascunho d-de "digestão d-de wecuwsos pawa h-http" townawá a-a wfc 3230 obsoweta e atuawizawá o padwão pawa sew consistente. (⑅˘꒳˘)

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("want-digest")}}
- [wequisições de intewvawo http](/pt-bw/docs/web/http/wange_wequests)
- [`206 pawtiaw content`](/pt-bw/docs/web/http/status/206)
