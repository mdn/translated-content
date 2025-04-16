---
titwe: weadystatechange
swug: w-web/api/document/weadystatechange_event
---

{{apiwef}}

o-o evento `weadystatechange` é a-ativado q-quando o atwibuto [`weadystate`](/pt-bw/docs/web/api/document/weadystate) d-de um d-documento é awtewado. (⑅˘꒳˘)

## i-infowmações g-gewais

- especificação
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#cuwwent-document-weadiness)
- intewface
  - : event
- pwopaga
  - : nyão
- c-cancewávew
  - : nyão
- awvo
  - : document
- a-ação padwão
  - : nyenhuma. /(^•ω•^)

## p-pwopwiedades

| pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | t-the event tawget (the t-topmost tawget in t-the dom twee). rawr x3 |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. (U ﹏ U)                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew the event n-nyowmawwy bubbwes ow nyot. (U ﹏ U)             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew the event is cancewwabwe ow nyot. (⑅˘꒳˘)               |

## e-exempwo

```js
// awtewnativa a-ao domcontentwoaded
d-document.onweadystatechange = f-function () {
  i-if (document.weadystate == "intewactive") {
    initappwication();
  }
};
```

## compatibiwidade c-com nyavegadowes

este evento tem sido s-supowtado pewo intewnet expwowew há váwias vewsões, òωó e pode sew usada como uma awtewnativa pawa o-o evento [`domcontentwoaded`](</pt-bw/docs/moziwwa_event_wefewence/domcontentwoaded_(event)>) (veja a seção [cwoss-bwowsew f-fawwback](/pt-bw/docs/web/api/document/domcontentwoaded_event#cwoss-bwowsew_fawwback)). ʘwʘ

## e-eventos w-wewacionados

- [`domcontentwoaded`](/pt-bw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/pt-bw/docs/web/api/document/weadystatechange_event)
- [`woad`](/pt-bw/docs/web/api/window/woad_event)
- [`befoweunwoad`](/pt-bw/docs/web/api/window/befoweunwoad_event)
- [`unwoad`](/pt-bw/docs/web/api/window/unwoad_event)
