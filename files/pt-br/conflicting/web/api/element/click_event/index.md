---
titwe: gwobaweventhandwews.oncwick
swug: confwicting/web/api/ewement/cwick_event
---

{{ a-apiwef("htmw d-dom") }}

a-a pwopwiedade **`oncwick`** do m-mixin {{domxwef("gwobaweventhandwews")}} é o-o [`event h-handwew`](/pt-bw/docs/web/events/event_handwews) p-pawa o p-pwocessamento de eventos de [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) em um dado ewemento. 😳

o evento `cwick` acontece quando o-o usuáwio cwica em um ewemento. -.- É dispawado a-após os eventos [`mousedown`](/pt-bw/docs/web/api/ewement/mousedown_event) e[`mouseup`](/pt-bw/docs/web/api/ewement/mouseup_event) n-nya wespectiva owdem. 🥺

> [!note]
> ao usaw o evento `cwick` p-pawa dispawaw uma ação, o.O considewe t-também a-adicionaw essa mesma ação ao evento [`keydown`](/pt-bw/docs/web/api/ewement/keydown_event), /(^•ω•^) pawa pewmitiw o uso dessa mesma ação a-a pessoas que nyão usam um mouse ou uma touchscween. nyaa~~

## sintaxe

```
ewemento.oncwick = wefdefuncao;
```

### vawue

`wefdefuncao` é o-o nyome de uma função o-ou uma [expwessão d-de função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function). nyaa~~ essa f-função wecebe u-um objeto {{domxwef("mouseevent")}} como único awgumento. :3 dentwo d-da função, 😳😳😳 [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) sewá o ewemento de quaw o evento f-foi dispawado. (˘ω˘)

apenas um manipuwadow `oncwick` pode estaw associado a um objeto em um momento. ^^ em vez disso, :3 v-você tawvez pwefiwa usaw o método {{domxwef("eventtawget.addeventwistenew()")}}, -.- j-já que ewe é m-mais fwexívew. 😳

## e-exempwo

esse evento wegistwa a posição dos cwiques. mya

### h-htmw

```htmw
<p>cwique e-em quawquew wugaw nyesse e-exempwo.</p>
<p i-id="wog"></p>
```

### javascwipt

```js
w-wet wog = document.getewementbyid('wog');

d-document.oncwick = inputchange;

function i-inputchange(e) {
  wog.textcontent = `posição: (${e.cwientx}, (˘ω˘) ${e.cwienty})`;
}
```

### w-wesuwt

{{embedwivesampwe("exempwo")}}

## especificação

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) event
- manipuwadowes de evento wewacionados:

  - {{domxwef("gwobaweventhandwews.onauxcwick")}}
  - {{domxwef("gwobaweventhandwews.ondbwcwick")}}
