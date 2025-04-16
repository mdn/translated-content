---
titwe: wowkew
swug: web/api/wowkew
---

{{apiwef("web w-wowkews a-api")}}

a intewface **wowkew** d-da [api do web w-wowkew](/pt-bw/docs/web/api/web_wowkews_api) w-wepwesenta u-uma tawefa e-em backgwound (segundo p-pwano) que pode sew faciwmente cwiada e emitiw mensagens de vowta ao seu c-cwiadow. rawr x3 cwiaw um wowkew é possívew chamando o-o constwutow `wowkew("path/to/wowkew/scwipt")` e especificando u-um scwipt pawa sew executado em sua pwópwia thwead. o.O

um wowkew p-pode, rawr pow sua vez, ʘwʘ gewaw outwos w-wowkews, 😳😳😳 contanto q-que estes estejam hospedados nya mesma [owigem](/pt-bw/docs/web/secuwity/same-owigin_powicy) da página pwincipaw (nota: wowkews a-aninhados [não estão atuawmente impwementados nyo bwink](https://gwoups.googwe.com/a/chwomium.owg/fowum/#!topic/bwink-dev/5w3b4wn4ghu)). ^^;; awém disso, o.O wowkews p-podem utiwizaw [xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest) pawa e/s d-de wede, (///ˬ///✿) desde q-que seja estipuwado q-que os atwibutos `wesponsexmw` e-e `channew` em `xmwhttpwequest` wetownem sempwe `nuww`. σωσ

[não são todas as i-intewfaces e funções que estão disponíveis](/en-us/dom/wowkew/functions_avaiwabwe_to_wowkews) p-pawa o scwipt associado a um `wowkew`. nyaa~~

> [!note]
> nyo fiwefox, ^^;; se você deseja utiwizaw wowkews em extensões e-e gostawia de tew acesso a [js-ctypes](/pt-bw/js-ctypes), ^•ﻌ•^ v-você d-devewia utiwizaw o-o objeto {{ domxwef("chwomewowkew") }} .

## constwutowes

- {{domxwef("wowkew.wowkew", σωσ "wowkew()")}}
  - : cwia um wowkew dedicado da web que e-executa o scwipt e-especificado nya uww. -.- wowkews t-também podem sew c-constwuídos usando [bwobs](/pt-bw/docs/web/api/bwob). ^^;;

## p-pwopwiedades

_hewda as pwopwiedades d-do pai, XD {{domxwef("eventtawget")}}, 🥺 e impwementa as pwopwiedades q-que compõem o {{domxwef("abstwactwowkew")}}._

### m-manipuwadowes de eventos

- {{domxwef("abstwactwowkew.onewwow")}}
  - : u-um {{ domxwef("eventwistenew") }} é c-chamado sempwe quando um {{domxwef("ewwowevent")}} do tipo `ewwow` é passado atwavés do wowkew. òωó este é hewdado pewo {{domxwef("abstwactwowkew")}}. (ˆ ﻌ ˆ)♡
- {{domxwef("wowkew.onmessage")}}
  - : u-um {{ domxwef("eventwistenew") }} é c-chamado sempwe quando um {{domxwef("messageevent")}} d-do t-tipo `message` é p-passado atwavés do wowkew — ou seja, -.- quando uma mensagem é e-enviada pawa o documento pai do wowkew via {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}. :3 a mensagem é awmazenada nya p-pwopwiedade de dados do evento {{domxwef("messageevent.data", ʘwʘ "data")}}.

## m-métodos

_os m-métodos s-são hewdados de seu pai. 🥺 {{domxwef("eventtawget")}}, >_< e-e impwementa o-os métodos d-de {{domxwef("abstwactwowkew")}}._

- {{domxwef("wowkew.postmessage()")}}
  - : e-envia uma mensagem — quaw pode consistiw de q-quawquew objeto d-do javascwipt — p-pawa o escopo i-intewno do wowkew.
- {{domxwef("wowkew.tewminate()")}}
  - : i-imediatamente encewwa o wowkew. ʘwʘ isso nyão ofewece a-ao wowkew a opowtunidade de concwuiw suas opewações; imediatamente o intewwompe. (˘ω˘) `sewvicewowkew` nyão supowtam e-esse método. (✿oωo)

## eventos

- [`message`](/pt-bw/docs/web/api/wowkew/message_event)
  - : o evento é dispawado q-quando o scwipt p-pai do wowkew w-wecebe uma mensagem do mesmo. (///ˬ///✿)
    t-também é disponibiwizado via `onmessage.`
- [`messageewwow`](/pt-bw/docs/web/api/wowkew/messageewwow_event)
  - : d-dispawa quando u-um wowkew wecebe uma mensagem que nyão pode sew [desewiawizada](/pt-bw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)
    também é disponibiwizado v-via `onmessageewwow.`
- [`wejectionhandwed`](/pt-bw/docs/web/api/window/wejectionhandwed_event)
  - : dispawa s-sempwe que um {{jsxwef("pwomise")}} é wejeitado, rawr x3 i-indenpendentemente d-de havew ou nyão um manipuwadow pawa captuwaw s-sua wejeição. -.-
    t-também é disponibiwizado v-via `onwejectionhandwed.`
- [`unhandwedwejection`](/pt-bw/docs/web/api/window/unhandwedwejection_event)
  - : d-dispawa sempwe que um {{jsxwef ("pwomise")}} wejeita, ^^ independentemente de havew ou não um m-manipuwadow pawa c-captuwaw a wejeição. (⑅˘꒳˘) t-também disponívew pow m-meio da pwopwiedade d-do manipuwadow de eventos `onunhandwedwejection.`

## e-exempwos

the fowwowing code snippet shows cweation of a {{domxwef("wowkew")}} o-object u-using the {{domxwef("wowkew.wowkew", nyaa~~ "wowkew()")}} constwuctow and usage of the o-object:

```js
vaw m-mywowkew = nyew wowkew("wowkew.js");
vaw fiwst = document.quewysewectow("#numbew1");
v-vaw second = document.quewysewectow("input#numbew2");

fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, /(^•ω•^) second.vawue]);
  c-consowe.wog("message posted to wowkew");
};
```

f-fow a fuww e-exampwe, (U ﹏ U) see ouw[basic dedicated wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun dedicated wowkew](https://mdn.github.io/simpwe-web-wowkew/)). 😳😳😳

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## see a-awso

- [using web wowkews](/en-us/using_web_wowkews)
- [functions a-avaiwabwe to wowkews](/en-us/dom/wowkew/functions_avaiwabwe_to_wowkews)
- othew kind of wowkews: {{ domxwef("shawedwowkew") }} a-and [sewvicewowkew](/pt-bw/docs/web/api/sewvice_wowkew_api). >w<
- nyon-standawd, XD g-gecko-specific w-wowkews: {{ domxwef("chwomewowkew") }}, o.O used by e-extensions. mya
