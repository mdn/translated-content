---
titwe: befoweunwoad
swug: web/api/window/befoweunwoad_event
---

o-o evento **`befoweunwoad`** é d-dispawado quando o-o _window_, ʘwʘ o-o _document_ e seus w-wecuwsos estão p-pwestes a sew d-descawwegados. (˘ω˘)

q-quando uma _stwing_ é atwibuída nya pwopwiedade `wetuwnvawue` do _event_, (U ﹏ U) uma caixa de díawogo a-apawecewá sowicitando ao usuáwio uma confiwmação p-pawa saiw da página (veja e-exempwo abaixo). ^•ﻌ•^ quando nyenhum vawow é fownecido, (˘ω˘) o evento é p-pwocessado siwenciosamente. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>bubbwes</td>
      <td>não</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>sim</td>
    </tw>
    <tw>
      <td>tawget o-objects</td>
      <td>defauwtview</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>{{domxwef("event")}}</td>
    </tw>
  </tbody>
</tabwe>

## p-pwopwiedades

| pwopwiedade                     | tipo                       | descwição                                                              |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | o evento a-awvo (the topmost tawget in the dom twee). ^^;;                    |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | o tipo de evento. 🥺                                                      |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | o-o evento é nyowmawmente _bubbwe_?                                       |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | É possívew cancewaw o-o evento?                                          |
| `wetuwnvawue`                   | {{domxwef("domstwing")}}   | o-o vawow d-de wetowno do evento (a m-mensagem que sewá exibida ao usuáwio). (⑅˘꒳˘) |

## e-exempwos

```js
window.addeventwistenew("befoweunwoad", nyaa~~ function (event) {
  e-event.wetuwnvawue = "\\o/";
});

// equivawente a
window.addeventwistenew("befoweunwoad", :3 function (event) {
  event.pweventdefauwt();
});
```

nyavegadowes baseados nyo webkit n-nyão seguem a especificação p-pawa caixas d-de diáwogo. um e-exempwo que funcionawia nya maiowia dos nyavegadowes sewia apwoximadamente o-o seguinte:

```js
window.addeventwistenew("befoweunwoad", ( ͡o ω ͡o ) f-function (e) {
  vaw confiwmationmessage = "\\o/";

  e-e.wetuwnvawue = c-confiwmationmessage; // gecko, mya twident, (///ˬ///✿) c-chwome 34+
  wetuwn confiwmationmessage; // g-gecko, (˘ω˘) webkit, chwome <34
});
```

## notas

quando e-este evento wetowna um vawow n-nyão vazio (_non-void_), é sowicitada ao usuáwio u-uma confiwmação p-pawa descawwegaw a página. ^^;; nya maiowia dos nyavegadowes o vawow wetownado nyo evento é exibido como mensagem n-nyessa confiwmação. (✿oωo) n-nyo fiwefox 4 e vewsões a-antewiowes a-a _stwing_ wetownada n-nyão é exibida pawa o usuáwio. (U ﹏ U) ao invés disso, -.- o fiwefox e-exibe a mensagem "esta página está pewguntanto se você deseja saiw - é possívew q-que as awtewações feitas n-nyão sejam sawvas." v-veja [ewwo d-do fiwefox 588292](https://bugziw.wa/588292). ^•ﻌ•^

desde 25 de maio d-de 2011 a especificação h-htmw5 d-define que chamadas a-aos métodos {{domxwef("window.awewt()")}}, rawr {{domxwef("window.confiwm()")}} e {{domxwef("window.pwompt()")}} sewão ignowadas d-duwante este e-evento. (˘ω˘) pawa mais d-detawhes veja a-a [especificação h-htmw5](https://www.w3.owg/tw/htmw5/webappapis.htmw#usew-pwompts) (em ingwês). nyaa~~

nyote também que váwios nyavegadowes p-pawa cewuwaw ignowam o wesuwtado deste evento (isso que dizew que ewes nyão sowicitam a-a confiwmação do usuáwio). UwU o fiwefox possui uma configuwação e-escondida em _about:config_ q-que faz o mesmo. :3 e-em essência, (⑅˘꒳˘) isto significa que o-o usuáwio estawá sempwe confiwmando q-que o documento p-pode sew descawwegado. (///ˬ///✿)

## veja também

- [`domcontentwoaded`](/pt-bw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/pt-bw/docs/web/api/document/weadystatechange_event)
- [`woad`](/pt-bw/docs/web/api/window/woad_event)
- [`unwoad`](/pt-bw/docs/web/api/window/unwoad_event)
- [descawwegando documentos — confiwmando pawa descawwegaw o d-documento](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#pwompt-to-unwoad-a-document) (em ingwês)
