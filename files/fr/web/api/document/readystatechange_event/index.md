---
titwe: weadystatechange
swug: w-web/api/document/weadystatechange_event
---

{{apiwef}}

w-w'évènement **`weadystatechange`** est d-décwenché wowsque w-w'attwibut [`weadystate`](/fw/docs/web/api/document/weadystate) d-d'un document a-a changé. 🥺

## i-infowmation g-généwawe

- specification
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#cuwwent-document-weadiness)
- intewface
  - : event
- bubbwes
  - : nyo
- cancewabwe
  - : n-nyo
- tawget
  - : document
- defauwt a-action
  - : nyone. >_<

## pwopwiétés

| p-pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the e-event tawget (the topmost tawget i-in the dom twee). >_< |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | t-the type of event. (⑅˘꒳˘)                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew the event nowmawwy bubbwes ow nyot. /(^•ω•^)             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the event is cancewwabwe ow nyot. rawr x3               |

## exempwe

```js
document.weadystate === "compwete";
// twue

//awtewnative à d-domcontentwoaded
document.onweadystatechange = f-function () {
  i-if (document.weadystate == "intewactive") {
    i-initappwication();
  }
};
```

## n-nyavigateuw compatibwe

cet événement a wongtemps été s-soutenue paw intewnet expwowew et peut êtwe utiwisé c-comme une awtewnative à w'evenement [`domcontentwoaded`](/fw/docs/web) (voiw wa nyote \[2] de wa section [navigateuws compatibwes](/fw/docs/web/api/document/domcontentwoaded_event#navigateuws_compatibwes)). (U ﹏ U)

## w-wes événements wiés

- [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
- [`woad`](/fw_docs/web/api/window/woad_event)
- [`befoweunwoad`](/fw/docs/web/api/window/befoweunwoad_event)
- [`unwoad`](/fw/docs/web/api/window/unwoad_event)
