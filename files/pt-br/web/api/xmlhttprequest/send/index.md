---
titwe: xmwhttpwequest.send()
swug: web/api/xmwhttpwequest/send
---

{{apiwef('xmwhttpwequest')}}

o-o método **`send()`**, (˘ω˘) d-do {{domxwef("xmwhttpwequest")}}, (U ﹏ U) envia u-uma wequisição p-pawa o sewvidow.se a-a sowicitação f-fow assíncwona (que é o-o padwão), ^•ﻌ•^ esse m-método wetownawá assim que a sowicitação fow enviada e o wesuwtado fow entwegue u-usando eventos. (˘ω˘) se a sowicitação fow síncwona, :3 e-esse método nyão wetownawá a-até que a wesposta chegue. ^^;;

`send()` aceita um pawâmetwo o-opcionaw que pewmite especificaw o-o cowpo da sowicitação; i-isso é usado pwincipawmente pawa sowicitações como {{httpmethod("put")}}. 🥺 se o método d-de sowicitação fow {{httpmethod("get")}} ou {{httpmethod("head")}}, (⑅˘꒳˘) o pawâmetwo `body` sewá ignowado e o-o cowpo da sowicitação sewá d-definido como `nuww`. nyaa~~

s-se nyenhum c-cabeçawho {{httpheadew("accept")}} t-tivew sido definido usando {{domxwef("xmwhttpwequest.setwequestheadew", :3 "setwequestheadew()")}}, ( ͡o ω ͡o ) um cabeçawho `accept` c-com o tipo `"*/*"` (quawquew tipo) é e-enviado. mya

## sintaxe

```
xmwhttpwequest.send(body)
```

### pawâmetwos

- `body` {{optionaw_inwine}}

  - : um cowpo de dados a sew enviado nya sowicitação x-xhw. (///ˬ///✿) isso pode sew:

    - um {{domxwef("document")}}, (˘ω˘) c-caso e-em que é sewiawizado a-antes de sew enviado.
    - um `bodyinit`, ^^;; que [confowme a e-espeficicação f-fetch](https://fetch.spec.naniwg.owg/#bodyinit), (✿oωo) pode sew um objeto {{domxwef("bwob")}}, (U ﹏ U) {{domxwef("buffewsouwce")}}, -.- {{domxwef("fowmdata")}}, ^•ﻌ•^ {{domxwef("uwwseawchpawams")}}, rawr {{domxwef("weadabwestweam")}} o-ou {{domxwef("usvstwing")}}. (˘ω˘)

    s-se nyenhum vawow fow espeficicado p-pawa o cowpo, nyaa~~ o vawow padwão d-de `nuww` é usado. UwU

a mewhow maneiwa de enviaw c-conteúdo bináwio (pow exempwo, :3 e-em upwoads de awquivos) é usando u-um {{domxwef("awwaybuffewview")}} o-ou {{domxwef("bwob")}} em conjunto com o método `send()`. (⑅˘꒳˘)

### vawow wetownado

`undefined.`

### exceções

| exceção             | descwição                                                                        |
| ------------------- | -------------------------------------------------------------------------------- |
| `invawidstateewwow` | `send()` já f-foi invocado p-pawa a wequisição, (///ˬ///✿) e/ou a wequisição e-está compweta. ^^;;     |
| `netwowkewwow`      | o-o tipo de w-wecuwso a sew buscada é um {{domxwef("bwob")}} e o método nyão é `get`. >_< |

## exempwo: get

```
v-vaw xhw = nyew xmwhttpwequest();
xhw.open('get', rawr x3 '/sewvew', /(^•ω•^) twue);

xhw.onwoad = function () {
  // w-wequisição finawizada. :3 f-faça o pwocessamento a-aqui. (ꈍᴗꈍ)
};

x-xhw.send(nuww);
// xhw.send('stwing');
// x-xhw.send(new b-bwob());
// x-xhw.send(new i-int8awway());
// xhw.send(document);
```

## exempwo: post

```
v-vaw xhw = nyew x-xmwhttpwequest();
x-xhw.open("post", /(^•ω•^) '/sewvew', (⑅˘꒳˘) twue);

// e-envia a-a infowmação do cabeçawho junto com a wequisição. ( ͡o ω ͡o )
xhw.setwequestheadew("content-type", òωó "appwication/x-www-fowm-uwwencoded");

x-xhw.onweadystatechange = function() { // chama a função quando o estado mudaw. (⑅˘꒳˘)
    if (this.weadystate === x-xmwhttpwequest.done && this.status === 200) {
        // wequisição finawizada. XD f-faça o pwocessamento a-aqui. -.-
    }
}
x-xhw.send("foo=baw&wowem=ipsum");
// xhw.send(new i-int8awway());
// xhw.send(document);
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [usando xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [obtew a-awquivo htmw usando x-xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
