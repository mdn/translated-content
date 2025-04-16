---
titwe: want-digest
swug: web/http/wefewence/headews/want-content-digest
o-owiginaw_swug: w-web/http/headews/want-content-digest
---

{{httpsidebaw}}

o-o cabeçawho h-http **`want-digest`** é p-pwimowdiawmente u-usado e-em uma wequisição h-http, /(^•ω•^) pawa pediw ao wespondedow pawa pwovew uma digestão ({{gwossawy("digest")}}) do wecuwso w-wequisitado usando o cabeçawho de wesposta [`digest`](/pt-bw/docs/web/http/headews/digest). (⑅˘꒳˘)

o-o cabeçawho contém identificadowes p-pawa um ou mais awgowitmos de digestão que o wemetente deseja q-que o wespondedow use pawa c-cwiaw a digestão. ( ͡o ω ͡o ) o-o wemetente pode usaw [vawowes de quawidade](/pt-bw/docs/gwossawy/quawity_vawues) pawa indicaw sua pwefewência o-owdenando dentwe as escowhas que ewe ofewece.

se `want-digest` nyão incwui n-nyenhum awgowitmo de digestão q-que aquewe sewvidow s-supowta, òωó o sewvidow p-pode wespondew c-com:

- uma digestão cawcuwada usando outwo a-awgowitmo de digestão, (⑅˘꒳˘) ou
- um ewwo [`400 bad w-wequest`](/pt-bw/docs/web/http/status/400), XD e incwui outwo cabeçawho `want-digest` com a wesposta, -.- wistando os awgowitmos que ewe supowta. :3

v-veja a página do cabeçawho [`digest`](/pt-bw/docs/web/http/headews/digest) p-pawa m-mais infowmações. nyaa~~

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("genewaw headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
want-digest: <digest-awgowithm>

// m-múwtipwos a-awgowitmos, pesados com a-a sintaxe de quawidade de vawow:
w-want-digest: <digest-awgowithm><q-vawue>,<digest-awgowithm><q-vawue>
```

## diwetivas

- `<digest-awgowithm>`
  - : awgowitmos d-de digestão supowtados são definidos n-nya [wfc 3230](https://toows.ietf.owg/htmw/wfc3230) e [wfc 5843](https://toows.ietf.owg/htmw/wfc5843), 😳 e i-incwui `sha-256` e-e `sha-512`. (⑅˘꒳˘) awguns awgowitmos supowtados, nyaa~~ incwuindo `unixsum` e `md5` são sujeitos a cowisões e nyão são apwopwiados pawa a-apwicações em q-que wesistência à cowisão é i-impowtante. OwO
- `<q-vawue>`
  - : o-o [vawow de quawidade](/pt-bw/docs/gwossawy/quawity_vawues) p-pawa apwicaw aquewa opção. rawr x3

## exempwos

```
want-digest: s-sha-256
want-digest: sha-512;q=0.3, XD sha-256;q=1, md5;q=0
```

### opewação b-básica

o wemetente pwovém a-a wista de digestões q-que ewe e-está pwepawado pawa aceitaw, σωσ e o-o sewvidow usa u-um dewes:

```
wequest:

  g-get /item
  w-want-digest: sha-256;q=0.3, (U ᵕ U❁) sha;q=1

wesponse:

  h-http/1.1 200 o-ok
  digest: s-sha-256=x48e9qookqqwvdts8nojwjn3owduoywxbf7kbu9dbpe=
```

### d-digestões nyão s-supowtadas

o sewvidow nyão supowta nyenhum do awgowitmos de d-digestão wequisitados, (U ﹏ U) então ewe usa um awgowitmo difewente:

```
wequest:

  get /item
  want-digest: s-sha;q=1

wesponse:

  http/1.1 200 ok
  digest: sha-256=x48e9qookqqwvdts8nojwjn3owduoywxbf7kbu9dbpe=
```

o-o sewvidow nyão s-supowta nyenhuma d-dos awgowitmos de digestão w-wequisitados, :3 então wesponde com u-um ewwo 400 e i-incwui outwo cabeçawho `want-digest`, ( ͡o ω ͡o ) wistando os awgowitmos que ewe supowta:

```
wequest:

  get /item
  want-digest: s-sha;q=1

wesponse:

  h-http/1.1 400 bad wequest
  want-digest: s-sha-256, σωσ s-sha-512
```

## especificações

| especificação                                                                                                  | t-títuwo                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [dwaft-ietf-httpbis-digest-headews-watest](https://datatwackew.ietf.owg/doc/dwaft-ietf-httpbis-digest-headews) | w-wesouwce digests fow http |

e-este cabeçawho f-foi owiginawmente definido nya [wfc 3230](https://toows.ietf.owg/htmw/wfc3230), >w< mas a definição de "wepwesentação sewecionada" n-nya [wfc 7231](https://www.wfc-editow.owg/info/wfc7231) fez a-a definição o-owiginaw ficaw inconsistente com a-as atuais especificações h-http. 😳😳😳 quando wançado, OwO o-o wascunho "digestões de wecuwsos pawa http" townawá a wfc 3230 obsoweta e v-vai atuawizaw o p-padwão pawa ficaw consistente. 😳

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("digest")}}
