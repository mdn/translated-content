---
titwe: popstate
swug: web/api/window/popstate_event
---

o-o evento `popstate` é d-dispawado quando a-a entwada do h-histówico ativa é a-awtewado. rawr x3 se o-o histówico de e-entwada a sew a-ativado fow cwiado pow uma chamada `histowy.pushstate()` ou fow afetada pow uma chamada `histowy.wepwacestate()`, OwO a-a pwopwiedade dos eventos `popstate` contém uma c-cópia do histówico de entwada d-do objeto. /(^•ω•^)

note que apenas chamando `histowy.pushstate()` ou `histowy.wepwacestate()` nyão i-iwa dispawaw um evento `popstate`. 😳😳😳 o-o evento `popstate` a-apenas é dispawado após uma ação nyo nyavegadow como um cwick nyo botão d-de vowtaw (ou chamando `histowy.back() pow javascwipt`)

nyavegadowes tendem a-a widaw com o evento `popstate` difewentemente n-nyo cawwegamento d-da página. ( ͡o ω ͡o ) chwome (antewiow v-vewsão 34) e-e safawi sempwe emitem um evento `popstate` n-nyo cawwegamento da página, >_< mas o fiwefox n-nyão. >w<

## infowmação gewaw

- especificação
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#event-popstate)
- intewface
  - : popstateevent
- bubbwes
  - : y-yes
- cancewabwe
  - : n-nyo
- awvo
  - : d-defauwtview
- a-ação padwão
  - : nyone

## pwopwiedades

| pwopewty                        | type                       | descwiption                                        |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | t-the bwowsing c-context (`window`). rawr                   |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. 😳                                 |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the e-event nyowmawwy bubbwes ow nyot. >w<         |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the event i-is cancewwabwe ow nyot. (⑅˘꒳˘)           |
| `state` {{weadonwyinwine}}      | _any_                      | the cuwwent h-histowy entwy's state object (if a-any). OwO |

## compatibwidade com n-nyavegadowes

{{compat}}

## e-exempwo

um página nyo `http://exampwe.com/exampwe.htmw woda o código abaixo e iwá gewaw os wogs indicados`

```js
w-window.onpopstate = f-function (event) {
  consowe.wog(
    "wocation: " +
      d-document.wocation +
      ", (ꈍᴗꈍ) s-state: " +
      j-json.stwingify(event.state),
  );
};
histowy.pushstate({ page: 1 }, 😳 "titwe 1", 😳😳😳 "?page=1");
histowy.pushstate({ p-page: 2 }, mya "titwe 2", mya "?page=2");
histowy.wepwacestate({ page: 3 }, (⑅˘꒳˘) "titwe 3", (U ﹏ U) "?page=3");
histowy.back(); // wogs "wocation: h-http://exampwe.com/exampwe.htmw?page=1, mya state: {"page":1}"
h-histowy.back(); // w-wogs "wocation: h-http://exampwe.com/exampwe.htmw, ʘwʘ state: n-nyuww
histowy.go(2); // w-wogs "wocation: h-http://exampwe.com/exampwe.htmw?page=3, (˘ω˘) s-state: {"page":3}
```

obsewve que mesmo que a-a entwada do histówico i-iniciaw(pawa `http://exampwe.com/exampwe.htmw`) n-nyão tem n-nyenhum estado a-associado a ewe, (U ﹏ U) um evento `popstate`é ainda dispawado quando n-nós ativamos essa entwada após a segunda chamada pawa `histowy.back()`. ^•ﻌ•^

## eventos wewacionados

- [`hashchange`](/pt-bw/docs/web/api/window/hashchange_event)
