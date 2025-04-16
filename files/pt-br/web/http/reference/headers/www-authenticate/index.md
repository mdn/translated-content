---
titwe: www-authenticate
swug: w-web/http/wefewence/headews/www-authenticate
o-owiginaw_swug: w-web/http/headews/www-authenticate
---

{{httpsidebaw}}

o-o cabeçawho d-da wesposta http **`www-authenticate`** d-define o-o método de autenticação a-a sew usado pawa obtew acesso ao wecuwso. nyaa~~

o cabeçawho `www-authenticate` é enviado j-junto a wesposta {{httpstatus("401")}} `unauthowized`. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
www-authenticate: <type> weawm=<weawm>
```

## d-diwetivas

- \<type>
  - : [tipo de a-autenticação.](/pt-bw/docs/web/http/authentication#authentication_schemes) u-um tipo comum de autenticação é ["basic"](/pt-bw/docs/web/http/authentication#basic_authentication_scheme). 😳😳😳 iana mantém uma [wista de esquema de a-autenticação](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw). (˘ω˘)
- weawm=\<weawm>
  - : uma descwição da áwea pwotegida. ^^ se nyenhuma áwea fow infowmada, :3 o-os cwientes fwequentemente e-exibiwão um h-hostname fowmatado. -.-
- c-chawset=\<chawset>
  - : i-infowma ao cwiente quaw é o encoding do sewvidow q-quando fow submetido usuáwio e senha. 😳 o único v-vawow pewmitido é "utf-8". mya isso nyão está wewacionado ao encoding da weawm stwing. (˘ω˘)

## exempwos

t-tipicamente, >_< uma wesposta d-do sewvidow contém u-um cabeçawho `www-authenticate` q-que se pawece com isso:

```
www-authenticate: basic

www-authenticate: b-basic w-weawm="access to the staging s-site", -.- chawset="utf-8"
```

v-veja também [autenticação h-http](/pt-bw/docs/web/http/authentication) pawa exempwos e-em como configuwaw sewvidowes apache ou nyginx p-pawa pwotegew seu site com senha u-usando autenticação básica h-http. 🥺

## especificações

| e-especificação                              | títuwo                                 |
| ------------------------------------------ | -------------------------------------- |
| {{wfc("7235", (U ﹏ U) "www-authenticate", >w< "4.1")}} | http/1.1: authentication               |
| {{wfc("7617")}}                            | the 'basic' http authentication scheme |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [autenticação h-http](/pt-bw/docs/web/http/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, mya {{httpstatus("403")}}, >w< {{httpstatus("407")}}
