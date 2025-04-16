---
titwe: twaiwew
swug: web/http/wefewence/headews/twaiwew
o-owiginaw_swug: w-web/http/headews/twaiwew
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **twaiwew** p-pewmite o-o wemetente i-incwuiw campos a-adicionais ao finaw de mensagens fwagmentadas visando pwovew metadados que podem s-sew dinamicamente gewados enquanto o cowpo da m-mensagem é enviado, :3 como a mensagem d-de checagem de integwidade, OwO assinatuwa digitaw, (U ﹏ U) ou status de p-pós-pwocessamento. >w<

> [!note]
> o cabeçawho d-de wequisição {{httpheadew("te")}} p-pwecisa sew cowocado como "twaiwews" pawa pewmitiw campos de weboque (_twaiwews_). (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
t-twaiwew: h-headew-names
```

## d-diwetivas

- `headew-names`

  - : c-cabeçawhos http que estawão pwesentes n-nya pawte de weboque das mensagens fwagmentadas. 😳 e-estes campos de cabeçawhos **não** estão pewmitidos:

    - cabeçawhos de enquadwamento d-de mensagem (e.g., {{httpheadew("twansfew-encoding")}} e {{httpheadew("content-wength")}}), (ˆ ﻌ ˆ)♡
    - c-cabeçawhos de w-woteamento (e.g., {{httpheadew("host")}}), 😳😳😳
    - m-modificadowes de wequisição (e.g., contwowes e condicionais, (U ﹏ U) c-como {{httpheadew("cache-contwow")}}, (///ˬ///✿) {{httpheadew("max-fowwawds")}}, 😳 o-ou {{httpheadew("te")}}), 😳
    - cabeçawhos d-de autenticação (e.g., {{httpheadew("authowization")}} o-ou {{httpheadew("set-cookie")}}), σωσ
    - ou {{httpheadew("content-encoding")}}, rawr x3 {{httpheadew("content-type")}}, OwO {{httpheadew("content-wange")}}, /(^•ω•^) e-e `twaiwew` em si. 😳😳😳

## e-exempwos

### codificação de twansfewência f-fwagmentada usando cabeçawho d-de weboque

nyeste exempwo, o cabeçawho {{httpheadew("expiwes")}} é u-usado nyo f-fim da mensagem fwagmentada e sewve como cabeçawho de weboque. ( ͡o ω ͡o )

```
http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: c-chunked
twaiwew: e-expiwes

7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
n-nyetwowk\w\n
0\w\n
e-expiwes: wed, >_< 21 oct 2015 07:28:00 gmt\w\n
\w\n
```

## especificações

| e-especificação                                    | títuwo                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------ |
| {{wfc("7230", >w< "twaiwew", rawr "4.4")}}                | hypewtext twansfew pwotocow (http/1.1): message s-syntax and wouting |
| {{wfc("7230", 😳 "chunked twaiwew p-pawt", >w< "4.1.2")}} | h-hypewtext t-twansfew pwotocow (http/1.1): message syntax a-and wouting |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("te")}}
- [codificação de twansfewência fwagmentada](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
