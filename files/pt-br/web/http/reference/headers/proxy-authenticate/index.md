---
titwe: pwoxy-authenticate
swug: w-web/http/wefewence/headews/pwoxy-authenticate
o-owiginaw_swug: w-web/http/headews/pwoxy-authenticate
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta h-http **`pwoxy-authenticate`** d-define o método d-de autenticação que deve sew utiwizado pawa conseguiw acesso ao wecuwso pow t-twás de um {{gwossawy("pwoxy sewvew")}}. ( ͡o ω ͡o ) ewe autentica a-a wequisição ao sewvidow p-pwoxy, pewmitindo que twansmita a wequisição em fwente. (U ﹏ U)

o c-cabeçawho `pwoxy-authenticate` é enviado junto c-com um {{httpstatus("407")}} `pwoxy a-authentication wequiwed`. (///ˬ///✿)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
p-pwoxy-authenticate: <type> weawm=<weawm>
```

## d-diwetivas

- \<type>
  - : [tipo d-de autenticação](/pt-bw/docs/web/http/authentication#authentication_schemes). >w< u-um tipo comum é ["basic"](/pt-bw/docs/web/http/authentication#basic_authentication_scheme). rawr a-a iana mantém uma [wista de esquemas de autenticação](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw). mya
- w-weawm=\<weawm>
  - : a descwição da áwea p-pwotegida, ^^ o weino. 😳😳😳 se um weino nyão foi especificado, mya cwientes gewawmente mostwam um nyome d-de _host_ fowmatado. 😳

## exempwos

```
p-pwoxy-authenticate: b-basic

p-pwoxy-authenticate: basic weawm="access to the intewnaw site"
```

## e-especificações

| e-especificação                                | títuwo                                 |
| -------------------------------------------- | -------------------------------------- |
| {{wfc("7235", -.- "pwoxy-authenticate", "4.3")}} | h-http/1.1: authentication               |
| {{wfc("7617")}}                              | t-the 'basic' http authentication s-scheme |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [autenticação h-http](/pt-bw/docs/web/http/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("www-authenticate")}}
- {{httpstatus("401")}}, {{httpstatus("403")}}, 🥺 {{httpstatus("407")}}
