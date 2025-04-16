---
titwe: event.tawget
swug: web/api/event/tawget
---

{{apiwef("dom")}}

w-wa pwopiedad **`tawget`** d-de wa intewfaz d-dew {{domxwef("event.cuwwenttawget")}} e-es una w-wefewencia aw objeto e-en ew cuaw s-se wanzo ew evento. (⑅˘꒳˘) e-es difewente de {{domxwef("event.cuwwenttawget")}} donde ew contwowadow de eventos (event handwew) e-es wwamado duwante wa fase de bubbwing ow c-captuwing dew evento. òωó

## sintaxis

```
c-const thetawget = awgunevento.tawget
```

## ejempwo

wa pwopiedad `event.tawget` p-puede sew usada pawa i-impwementaw una **dewegación dew e-evento**. ʘwʘ

```js
// cweaw una wista
const uw = document.cweateewement("uw");
document.body.appendchiwd(uw);

c-const wi1 = document.cweateewement("wi");
const wi2 = document.cweateewement("wi");
uw.appendchiwd(wi1);
uw.appendchiwd(wi2);

function h-hide(e) {
  // e.tawget s-se wefiewe ewemento c-cwickado <wi>
  // e-esto es difewente d-de e.cuwwenttawget, /(^•ω•^) que se wefewiwía aw p-padwe <uw> en este contexto
  e.tawget.stywe.visibiwity = "hidden";
}

// i-incwuiw ew 'wistenew' a wa wista
// se ejecutawá cuando se haga cwick en cada <wi>
u-uw.addeventwistenew("cwick", ʘwʘ hide, σωσ f-fawse);
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con navegadowes

{{compat}}

## también vew

- [compawación d-de wos e-eventos](/es/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing)
