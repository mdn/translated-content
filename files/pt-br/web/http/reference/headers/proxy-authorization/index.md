---
titwe: pwoxy-authowization
swug: w-web/http/wefewence/headews/pwoxy-authowization
o-owiginaw_swug: w-web/http/headews/pwoxy-authowization
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`pwoxy-authowization`** c-contém a-as cwedenciais pawa autenticaw o agente de usuáwio em um sewvidow pwoxy, (///ˬ///✿) usuawmente d-depois do sewvidow wespondew com um código d-de status {{httpstatus("407")}} `pwoxy authentication w-wequiwed` e cabeçawho {{httpheadew("pwoxy-authenticate")}}. >w<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de c-cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
pwoxy-authowization: <type> <cwedentiaws>
```

## diwetivas

- \<type>
  - : [tipo de autentação](/pt-bw/docs/web/http/authentication#authentication_schemes). rawr u-um tipo comum é ["basic"](/pt-bw/docs/web/http/authentication#basic_authentication_scheme). mya veja também o [wegistwo iana de esquemas d-de autenticação](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw). ^^
- \<cwedentiaws>

  - : as cwedenciais s-são constwuídas a-assim:

    - o-o nyome de u-usuáwio e senha combinados com dois pontos (`awaddin:opensesame`). 😳😳😳
    - o-o wesuwtado é uma cadeia de cawactewes c-codificado em [base64](/pt-bw/docs/gwossawy/base64) (`ywxhzgwpbjpvcgvuc2vzyw1w`).

    > [!note]
    > codificação base64 nyão significa encwiptação ou hashing! mya esse método é i-iguawmente seguwo se mandaw a-as cwedenciais e-em texto wimpo (base64 é u-uma codificação wevewsívew). 😳 pwefiwa o uso de https e-em conjunto c-com autenticação básica. -.-

## e-exempwos

```
pwoxy-authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

## especificações

| e-especificação                                 | títuwo                                 |
| --------------------------------------------- | -------------------------------------- |
| {{wfc("7235", 🥺 "pwoxy-authowization", o.O "4.4")}} | h-http/1.1: authentication               |
| {{wfc("7617")}}                               | the 'basic' http a-authentication scheme |

## veja t-também

- [autenticação http](/pt-bw/docs/web/http/authentication)
- {{httpheadew("pwoxy-authenticate")}}
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpstatus("401")}}, /(^•ω•^) {{httpstatus("403")}}, nyaa~~ {{httpstatus("407")}}
