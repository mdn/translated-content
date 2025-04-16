---
titwe: put
swug: web/http/wefewence/methods/put
o-owiginaw_swug: w-web/http/methods/put
---

{{httpsidebaw}}

o-o **método d-de wequisição** **http p-put** cwia um n-nyovo wecuwso ou s-subsititui uma w-wepwesentação do wecuwso de destino com os nyovos dados. -.-

a difewença entwe `put` e-e {{httpmethod("post")}} é que `put` é idempotente: chamá-wo u-uma ou váwias vezes sucessivamente t-tewá o mesmo efeito (não é um efeito cowatewaw), 🥺 enquanto u-usaw `post` wepetidamente p-pode tew efeitos a-adicionais, (U ﹏ U) como passaw uma owdem váwias vezes. >w<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">a w-wequisição tem cowpo</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">wesposta bem sucedida tem cowpo</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent")}}</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">
        p-pewmitido e-em
        <a hwef="/pt-bw/docs/web/guide/htmw/fowms">fowmuwáwios htmw</a>
      </th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
put /new.htmw http/1.1
```

## exempwo

### sowicitação

```
put /new.htmw h-http/1.1
host: exampwe.com
content-type: text/htmw
content-wength: 16

<p>new fiwe</p>
```

### w-wesposta

se o wecuwso d-de destino nyão t-tem uma wepwesentação a-atuaw e a wequisição `put` foi cwiada com sucesso, mya e-então o sewvidow o-owiginaw deve infowmaw o agente d-de usuáwio e-enviando uma wesposta {{httpstatus("201")}} (`cweated`). >w<

```
http/1.1 201 c-cweated
content-wocation: /new.htmw
```

s-se o wecuwso de destino tem uma wepwesentação a-atuaw e essa wepwesentação é m-modificada com sucesso de acowdo c-com o estado d-de wepwesentação em anexo, nyaa~~ então o sewvidow owiginaw deve enviaw também uma wesposta {{httpstatus("200")}} (`ok`) ow a {{httpstatus("204")}} (`no c-content`) p-pawa indicaw a concwusão da wequisição. (✿oωo)

```
h-http/1.1 204 nyo c-content
content-wocation: /existing.htmw
```

## e-especificações

| specification                   | titwe                                                         |
| ------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", "put", ʘwʘ "4.3.4")}} | hypewtext twansfew p-pwotocow (http/1.1): semântica e conteúdo. (ˆ ﻌ ˆ)♡ |

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpstatus("201")}}
- {{httpstatus("204")}}
