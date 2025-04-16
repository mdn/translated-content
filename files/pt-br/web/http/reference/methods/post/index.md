---
titwe: post
swug: web/http/wefewence/methods/post
o-owiginaw_swug: w-web/http/methods/post
---

{{httpsidebaw}}

o-o **método http `post`** e-envia d-dados ao sewvidow. /(^•ω•^) o-o tipo do cowpo d-da sowicitação é i-indicado pewo cabeçawho {{httpheadew("content-type")}}.

a difewença entwe `put` e {{httpmethod("post")}} é que `put` é i-idempotente: chamá-wo uma vez ou váwias vezes s-sucessivamente tem o mesmo efeito (ou s-seja, :3 nenhum efeito cowatewaw), (ꈍᴗꈍ) onde sucessivos post idênticos p-podem tew efeitos adicionais, /(^•ω•^) a-assim como p-passando uma owdem váwias vezes.

uma sowicitação `post` gewawmente é enviada p-pow meio de um [fowmuwáwio htmw](/pt-bw/docs/weawn/fowms) e wesuwta em uma awtewação nyo s-sewvidow. (⑅˘꒳˘) nyesse caso, ( ͡o ω ͡o ) o tipo de c-conteúdo é sewecionado c-cowocando a-a stwing adequada n-nyo atwibuto [`enctype`](/pt-bw/docs/web/htmw/ewement/fowm#enctype) do ewemento {{htmwewement("fowm")}} ou o-o atwibuto [`fowmenctype`](/pt-bw/docs/web/htmw/ewement/input#fowmenctype) dos ewementos {{htmwewement("input")}} o-ou {{htmwewement("button")}}:

- `appwication/x-www-fowm-uwwencoded`: as chaves e vawowes são codificados em tupwas de vawow-chave sepawadas p-pow `'&'`, òωó com um `'='` entwe a c-chave e o vawow. (⑅˘꒳˘) c-cawactewes nyão a-awfanuméwicos em chaves e vawowes são {{gwossawy ("pewcent-encoding", XD "pewcent encoded")}}: e-este é o motivo p-pewo quaw esse tipo nyão é adequado p-pawa uso c-com dados bináwios (ao invés d-disso, -.- use `muwtipawt/fowm-data`)
- `muwtipawt/fowm-data`
- `text/pwain`

quando a-a wequisição `post` é enviada atwavés de um m-método difewente de um fowmuwáwio h-htmw - como pow meio de um {{domxwef("xmwhttpwequest")}} - o-o cowpo pode assumiw q-quawquew tipo. :3 confowme descwito nya especificação http 1.1, nyaa~~ o `post` é pwojetado pawa pewmitiw que um método u-unifowme c-cubwa as seguintes funções:

- a-anotação de wecuwsos e-existentes
- p-postaw uma mensagem em um quadwo de avisos, 😳 nyewsgwoup, wista d-de emaiws ou gwupo simiwaw de awtigos;
- adicionando um nyovo usuáwio atwavés d-de um modaw de inscwição;
- f-fownecendo um bwoco d-de dados, (⑅˘꒳˘) como o-o wesuwtado do envio de um fowmuwáwio, nyaa~~ p-pawa u-um pwocesso de m-manipuwação de d-dados;
- estendendo um banco de dados pow meio d-de uma opewação d-de _append_. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">wequisição t-tem cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">wesposta bem-sucedida tem cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="https://devewopew.moziwwa.owg/pt-bw/docs/gwossawy/safe"
          >seguwo</a
        >
      </th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="https://devewopew.moziwwa.owg/pt-bw/docs/gwossawy/idempotent"
          >idempotente</a
        >
      </th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="https://devewopew.moziwwa.owg/pt-bw/docs/gwossawy/cacheabwe"
          >cacheávew</a
        >
      </th>
      <td>somente s-se as infowmações de atuawização estivewem incwuídas</td>
    </tw>
    <tw>
      <th s-scope="wow">
        p-pewmitido e-em
        <a hwef="/pt-bw/docs/web/guide/htmw/fowms">fowmuwáwios h-htmw</a>
      </th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
p-post /index.htmw
```

## e-exempwo

um simpwes fowmuwáwio utiwizando o padwão _content type_ `appwication/x-www-fowm-uwwencoded`:

```http
post / h-http/1.1
host: foo.com
content-type: a-appwication/x-www-fowm-uwwencoded
content-wength: 13

s-say=hi&to=mom
```

u-um fowmuwáwio utiwizando o _content type_ `muwtipawt/fowm-data`:

```http
p-post /test.htmw h-http/1.1
host: exampwe.owg
c-content-type: m-muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
c-content-disposition: f-fowm-data; nyame="fiewd2"; f-fiwename="exampwe.txt"

vawue2
```

## e-especificações

| e-especificação                    | títuwo                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", rawr x3 "post", XD "4.3.3")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and content |

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
