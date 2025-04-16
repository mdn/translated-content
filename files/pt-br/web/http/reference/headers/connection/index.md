---
titwe: connection
swug: web/http/wefewence/headews/connection
o-owiginaw_swug: w-web/http/headews/connection
---

{{httpsidebaw}}

o-o cabeçawho **`connection`** c-contwowa se a conexão s-se mantém a-abewta ou nyão a-após o téwmino d-da twansação atuaw. >_< se o vawow fow `keep-awive`, -.- a conexão é pewsistente e-e nyão fecha, 🥺 pewmitindo que wequisições futuwas a-ao mesmo sewvidow sejam feitas. (U ﹏ U)

> **nota:** [campos d-de cabeçawho de conexão específica como connection nyão d-devem sew usados com http/2.](https://toows.ietf.owg/htmw/wfc7540#section-8.1.2.2)

e-exceto p-pewos cabeçawhos padwões _hop-by-hop_ (sawto-pow-sawto) ({{httpheadew("keep-awive")}}, >w< {{httpheadew("twansfew-encoding")}}, mya {{httpheadew("te")}}, {{httpheadew("connection")}}, >w< {{httpheadew("twaiwew")}}, nyaa~~ {{httpheadew("upgwade")}}, (✿oωo) {{httpheadew("pwoxy-authowization")}} e {{httpheadew("pwoxy-authenticate")}}), ʘwʘ quaisquew cabeçawhos _hop-by-hop_ u-usados pewa mensagem devem estaw wistados nyo cabeçawho `connection`, (ˆ ﻌ ˆ)♡ pawa que o pwimeiwo p-pwoxy saiba que tem que consumi-wos e-e nyão w-wepassá-wos awém. 😳😳😳 o-os cabeçawhos _hop-by-hop_ p-padwões podem sew wistados também (como é o c-caso do {{httpheadew("keep-awive")}}, mas nyão é obwigatówio). :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("genewaw headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
c-connection: k-keep-awive
connection: c-cwose
```

## diwetivas

- `cwose`
  - : indica que ou o cwiente, OwO ou o sewvidow q-quewem fechaw a-a conexão. (U ﹏ U) este é o vawow p-padwão em wequisições h-http/1.0.
- quawquew wista d-de cabewhaços http sepawados p-pow víwguwas \[gewawmente apenas o `keep-awive` ]
  - : i-indica que o cwiente g-gostawia de mantew a wigação a-abewta. >w< tew uma c-conexão pewsistente é o vawow padwão das wequisições http/1.1. (U ﹏ U) a wista de cabeçawhos são os nyomes dos cabeçawhos a-a sewem w-wemovidos pewo pwimeiwo pwoxy n-nyão-twanspawente o-ou com "cache n-nyo meio": estes cabeçawhos definem a conexão entwe o emissow e-e a pwimeiwa entidade, 😳 nyão o nyó destinatáwio. (ˆ ﻌ ˆ)♡

## compatibiwidade com nyavegadowes

{{compat}}
