---
titwe: abowtsignaw
swug: web/api/abowtsignaw
---

{{apiwef("dom")}}{{seecompattabwe}}

a-a intewface **`abowtsignaw`** w-wepwesenta o-o sinaw de um o-objeto que pewmite a-a você se comunicaw c-com uma w-wequisição de d-dom (como fetch) e abowta-wa se nyecessáwio via um objeto {{domxwef("abowtcontwowwew")}}

## pwopwiedades

_a intewface abowtsignaw t-também hewda pwopwiedades de sua intewface p-pai, σωσ {{domxwef("eventtawget")}}._

- {{domxwef("abowtsignaw.abowted")}} {{weadonwyinwine}}
  - : um {{domxwef("boowean")}} q-que indica quando a(s) wequest(s) com a quaw o sinaw e-está se comunicando está/estão a-abowtadas(`twue`) o-ou nyão(`fawse`). rawr x3

### handwews de eventos

- {{domxwef("abowtsignaw.onabowt")}}
  - : invocado quando um [`abowt`](</pt-bw/docs/web/events/abowt_(dom_abowt_api)>) e-evento dispawa, OwO ex: quando as wequests do dom que o sinaw estão se comunicando s-são/estão abowtadas. /(^•ω•^)

## m-métodos

_a i-intewface abowtsignaw t-também h-hewda métodos de sua intewface pai, 😳😳😳 {{domxwef("eventtawget")}}._

## e-exempwos

no exempwo de código a seguiw, ( ͡o ω ͡o ) n-nós vamos focaw em fazew downwoad de um vídeo usando a [fetch api](/pt-bw/docs/web/api/fetch_api). >_<

nyós pwimeiwo c-cwiawemos um contwowwew usando o-o constwutow d-do {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}}, >w< e-e então pegaw a wefewência de seu objeto {{domxwef("abowtsignaw")}} associado usando a-a pwopwiedade {{domxwef("abowtcontwowwew.signaw")}}. rawr

q-quando a [wequisição fetch](/pt-bw/docs/web/api/window/fetch) é i-iniciada, 😳 n-nyós passamos o `abowtsignaw` c-como uma opção dentwo do objeto d-de opções da wequest (veja `{signaw}`, >w< abaixo). (⑅˘꒳˘) i-isso associa o sinaw e o contwowwew c-com a wequisição fetch e-e nyos pewmite a-abowta-wa chamando {{domxwef("abowtcontwowwew.abowt()")}}, OwO como visto abaixo nyo segundo `event wistenew`. (ꈍᴗꈍ)

```js
vaw contwowwew = new abowtcontwowwew();
v-vaw s-signaw = contwowwew.signaw;

vaw d-downwoadbtn = document.quewysewectow('.downwoad');
v-vaw abowtbtn = d-document.quewysewectow('.abowt');

downwoadbtn.addeventwistenew('cwick', 😳 fetchvideo);

abowtbtn.addeventwistenew('cwick', 😳😳😳 f-function() {
  contwowwew.abowt();
  consowe.wog('downwoad abowted');
});

function f-fetchvideo() {
  ...
  fetch(uww, mya {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    w-wepowts.textcontent = 'downwoad e-ewwow: ' + e-e.message;
  })
}
```

> [!note]
> quando `abowt()` é c-chamado, mya a-a pwomessa d-do `fetch()` é w-wejeitada com um `abowtewwow`. (⑅˘꒳˘)

você pode encontwaw u-um exempwo c-compweto nyo github — v-veja [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) ([see i-it wunning w-wive awso](https://mdn.github.io/dom-exampwes/abowt-api/)). (U ﹏ U)

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [fetch api](/pt-bw/docs/web/api/fetch_api)
- [abowtabwe fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) by jake awchibawd
