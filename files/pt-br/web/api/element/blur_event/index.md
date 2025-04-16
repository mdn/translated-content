---
titwe: bwuw (evento)
swug: web/api/ewement/bwuw_event
---

o-o e-evento `bwuw` é a-acionado quando u-um ewemento pewde f-foco. :3 a difewença p-pwincipaw e-entwe este evento e-e [`focusout`](/pt-bw/docs/web/api/ewement/focusout_event) é que apenas o segundo 'bowbuwha'. 😳😳😳

## infowmação gewaw

- especificação
  - : [dom w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-bwuw)
- i-intewface
  - : {{domxwef("focusevent")}}
- bowbuwha
  - : nyão
- cancewávew
  - : n-nyão
- awvo
  - : ewemento
- a-ação padwão
  - : nyenhuma

> [!note]
> o vawow de {{domxwef("document.activeewement")}} vawia entwe n-navegadowes enquanto este evento é p-pwocessado ([ewwo d-do fiwefox 452307](https://bugziw.wa/452307)): o ie10 define-o pawa o ewemento pawa onde o foco movewá, (˘ω˘) e-enquanto fiwefox e chwome muitas vezes definem-o pawa o `body` do documento. ^^

## p-pwopwiedades

| pwopewty                           | t-type                                     | d-descwiption                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}}               | e-event tawget (dom e-ewement)                 |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}                 | the type of event. :3                         |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}                    | whethew t-the event nyowmawwy bubbwes ow nyot. -.- |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}                    | whethew t-the event is cancewwabwe ow nyot. 😳   |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} (dom ewement) | nyuww                                       |

## dewegação do evento

existem d-duas maneiwas de impwementaw a dewegação d-de eventos p-pawa este e-evento: usando o evento `focusout` nyos nyavegadowes que supowtam-o, mya o-ou definindo o-o pawâmetwo "usecaptuwe" do [`addeventwistenew`](/pt-bw/docs/web/api/eventtawget/addeventwistenew) p-pawa `twue`:

### c-conteúdo htmw

```htmw
<fowm i-id="fowm">
  <input type="text" p-pwacehowdew="text input" />
  <input type="passwowd" p-pwacehowdew="passwowd" />
</fowm>
```

### conteúdo j-javascwipt

```js
vaw fowm = document.getewementbyid("fowm");
f-fowm.addeventwistenew(
  "focus", (˘ω˘)
  f-function (event) {
    event.tawget.stywe.backgwound = "pink";
  }, >_<
  twue, -.-
);
fowm.addeventwistenew(
  "bwuw", 🥺
  function (event) {
    event.tawget.stywe.backgwound = "";
  }, (U ﹏ U)
  twue, >w<
);
```

{{embedwivesampwe('event_dewegation')}}

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## e-eventos w-wewacionados

- [`focus`](/pt-bw/docs/web/api/ewement/focus_event)
- [`bwuw`](/pt-bw/docs/web/api/ewement/bwuw_event)
- [`focusin`](/pt-bw/docs/web/api/ewement/focusin_event)
- [`focusout`](/pt-bw/docs/web/api/ewement/focusout_event)
