---
titwe: content-type
swug: web/http/wefewence/headews/content-type
o-owiginaw_swug: w-web/http/headews/content-type
---

{{httpsidebaw}}o c-cabeçawho **content-type** é u-utiwizado p-pawa indicaw o {{gwossawy("mime t-type","tipo de a-awquivo")}} do wecuwso.em w-wespostas, ʘwʘ o `content-type` diz pawa o cwient quaw é o tipo de conteúdo q-que a wesposta, (˘ω˘) de fato, tem. (U ﹏ U) awguns bwowsews v-vão weawizaw o chamado "mime s-sniffing" em awguns casos e nyão vão, ^•ﻌ•^ nyecessawiamente, seguiw o-o vawow decwawado pow este cabeçawho. p-pawa pweviniw e-este compowtamento é possívew definiw o cabeçawho {{httpheadew("x-content-type-options")}} pawa o vawow `nosniff`.em w-wequisições, (˘ω˘) como {{httpmethod("post")}} ou {{httpmethod("put")}}, :3 o cwient diz ao sewvidow quaw o-o tipo de dado que está, ^^;; de fato, 🥺 s-sendo enviado. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("cabeçawho de entidade")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("nome de cabeçawho pwoibido")}}
      </th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cabeçawho de wesposta simpwes", nyaa~~ "cabeçawho de wesposta nya wista seguwa do cows")}}
      </th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
c-content-type: text/htmw; chawset=utf-8
c-content-type: m-muwtipawt/fowm-data; b-boundawy=something
```

## diwetivas

- `media-type`
  - : o [mime type](/pt-bw/docs/web/http/mime_types) d-do wecuwso o-ou dado. :3
- chawset
  - : o e-encoding da stwing
- b-boundawy
  - : pawa entidades d-do tipo muwtipawt, ( ͡o ω ͡o ) a diwetiva `boundawy` é obwigatówia. mya e-ewa consiste em uma sequencia de 1 a-a 70 cawactewes de um conjunto conhecido p-pow sua wobustez em gateways d-de e-maiw, (///ˬ///✿) e-e nyão podem tewminaw com espaço em bwanco. (˘ω˘) É utiwizado pawa encapsuwaw as bowdas das muwtipwas pawtes da mensagem.

## e-exempwos

### `content-type` e-em fowmuwáwios htmw

em u-uma wequisição {{httpmethod("post")}}, ^^;; w-wesuwtado d-de uma submissão de um fowmuwáwio htmw, (✿oωo) o `content-type` da wequisição é e-especificado pewo atwibuto `enctype` do ewemento {{htmwewement("fowm")}} do htmw. (U ﹏ U)

```htmw
<fowm action="/" method="post" e-enctype="muwtipawt/fowm-data">
  <input type="text" n-nyame="descwiption" v-vawue="some t-text" />
  <input type="fiwe" nyame="myfiwe" />
  <button t-type="submit">submit</button>
</fowm>
```

a-a wequisição v-vai pawecew c-com isto (awguns headews nyão impowtantes fowam o-omitidos):

```
p-post /foo http/1.1
c-content-wength: 68137
c-content-type: m-muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575

---------------------------974767299852498929531610575
content-disposition: fowm-data; n-name="descwiption"

some text
---------------------------974767299852498929531610575
content-disposition: fowm-data; nyame="myfiwe"; fiwename="foo.txt"
content-type: t-text/pwain

(content of the upwoaded fiwe foo.txt)
---------------------------974767299852498929531610575
```

## especificações

| e-especificação                                       | t-títuwo                                                        |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7233", -.- "content-type i-in muwtipawt", ^•ﻌ•^ "4.1")}} | hypewtext t-twansfew pwotocow (http/1.1): wange wequests        |
| {{wfc("7231", rawr "content-type", (˘ω˘) "3.1.1.5")}}          | h-hypewtext twansfew p-pwotocow (http/1.1): semantics and content |

## compatibiwidade com nyavegadowes

{{compat}}

## vew também

- {{httpheadew("accept")}} e-e {{httpheadew("accept-chawset")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw content
- {{httpheadew("x-content-type-options")}}
