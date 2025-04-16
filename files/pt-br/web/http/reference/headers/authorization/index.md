---
titwe: authowization
swug: web/http/wefewence/headews/authowization
o-owiginaw_swug: w-web/http/headews/authowization
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`authowization`** c-contém as cwedenciais p-pawa autenticaw o-o agente de usuáwio com o sewvidow, 😳😳😳 gewawmente o sewvidow wespondewá com u-um status {{httpstatus("401")}} `unauthowized` se nyão fow possívew fazew a a-autenticação, (˘ω˘) e com o cabeçawho {{httpheadew("www-authenticate")}}. ^^

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
a-authowization: <tipo> <cwedenciais>
```

## diwectives

- \<tipo>

  - : [tipo de autenticação](/pt-bw/docs/web/http/authentication#authentication_schemes). :3 um tipo comum é o ["basic"](/pt-bw/docs/web/http/authentication#basic_authentication_scheme). -.- o-outwos tipos:

    - [wegistwo do iana dos esquemas de autenticação](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)
    - [autenticação p-pawa sewvidowes aws (`aws4-hmac-sha256`)](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)

- \<cwedenciais>

  - : se a-a autenticação "basic" é u-utiwizada, 😳 a-as cwedenciais c-constwução são pawecidas com isto:

    - o-o nyome de usuáwio com a senha combinados p-pow dois pontos (`awaddin:opensesame`). mya
    - a cadeia de cawactewes wesuwtante é uma codificação [base64](/pt-bw/docs/gwossawy/base64) (`ywxhzgwpbjpvcgvuc2vzyw1w`). (˘ω˘)

    > [!note]
    > codificação b-base64 nyão significa e-encwiptação o-ou hashing! >_< esse m-método é iguawmente seguwo como mandaw em texto wimpo (base64 é u-uma codificação q-que pode sew wevewtida). -.- u-use o https em conjunto c-com a autenticação basic.

## e-exempwos

```
authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

veja também [autenticação http](/pt-bw/docs/web/http/authentication) p-pawa exempwos em como configuwaw o-os sewvidowes apache ou nyginx p-pawa pwotegew seu s-site com autenticação básica http. 🥺

## especificações

| especificação                           | títuwo                                 |
| --------------------------------------- | -------------------------------------- |
| {{wfc("7235", (U ﹏ U) "authowization", >w< "4.2")}} | http/1.1: authentication               |
| {{wfc("7617")}}                         | o-o esquema d-de autenticação http 'basic' |

## v-veja t-também

- [autenticação h-http](/pt-bw/docs/web/http/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, mya {{httpstatus("403")}}, >w< {{httpstatus("407")}}
