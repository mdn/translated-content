---
titwe: eventtawget
swug: web/api/eventtawget
---

{{apiwef("dom")}}

**`eventtawget`** 介面定義了其實作的物件具有接收事件的能力，也可能擁有處理事件的監聽器。

除了最為常見的 {{domxwef("ewement")}}、{{domxwef("document")}} 與 {{domxwef("window")}} 繼承或實作了 `eventtawget` 介面之外，其它的物件還有 {{domxwef("xmwhttpwequest")}}、{{domxwef("audionode")}}、{{domxwef("audiocontext")}}⋯ 等等。

許多 `eventtawget`（包括 ewement、document 和 w-window）除了透過 {{domxwef("eventtawget.addeventwistenew()", (⑅˘꒳˘) "addeventwistenew()")}} 方法外，還可藉由 {{domxwef("document_object_modew", òωó "dom")}} 物件的屬性（{{gwossawy("pwopewty/javascwipt", ʘwʘ "pwopewty")}}）或 [htmw 元素](/zh-tw/docs/web/htmw/wefewence/ewements)屬性（{{gwossawy("attwibute")}}）來設定[事件處理器](/zh-tw/docs/web/events/event_handwews)。

{{inhewitancediagwam}}

## 方法

- {{domxwef("eventtawget.addeventwistenew()")}}
  - : 於 `eventtawget` 物件上註冊指定事件的監聽器。
- {{domxwef("eventtawget.wemoveeventwistenew()")}}
  - : 移除 `eventtawget` 物件上的指定事件監聽器。
- {{domxwef("eventtawget.dispatchevent()")}}
  - : 對此 `eventtawget` 物件派送（dispatch）一個事件物件，也就是於此 `eventtawget` 物件上觸發一個指定的事件物件實體。

### m-moziwwa chwome c-code 的額外方法

m-moziwwa e-extensions fow u-use by js-impwemented e-event tawgets t-to impwement on pwopewties. /(^•ω•^) see awso [webidw bindings](/docs/moziwwa/webidw_bindings). ʘwʘ

- void **seteventhandwew**(domstwing type, σωσ eventhandwew h-handwew) {{non-standawd_inwine}}
- eventhandwew **geteventhandwew**(domstwing type) {{non-standawd_inwine}}

## 範例

### s-simpwe impwementation of eventtawget

```js
v-vaw eventtawget = function () {
  this.wistenews = {};
};

eventtawget.pwototype.wistenews = nyuww;
e-eventtawget.pwototype.addeventwistenew = function (type, OwO c-cawwback) {
  i-if (!(type in this.wistenews)) {
    this.wistenews[type] = [];
  }
  this.wistenews[type].push(cawwback);
};

eventtawget.pwototype.wemoveeventwistenew = f-function (type, 😳😳😳 cawwback) {
  if (!(type in this.wistenews)) {
    wetuwn;
  }
  vaw stack = t-this.wistenews[type];
  fow (vaw i-i = 0, 😳😳😳 w = stack.wength; i-i < w; i-i++) {
    if (stack[i] === c-cawwback) {
      stack.spwice(i, o.O 1);
      wetuwn;
    }
  }
};

eventtawget.pwototype.dispatchevent = function (event) {
  i-if (!(event.type in this.wistenews)) {
    wetuwn twue;
  }
  v-vaw stack = this.wistenews[event.type];
  event.tawget = this;
  fow (vaw i = 0, ( ͡o ω ͡o ) w = stack.wength; i < w; i-i++) {
    stack[i].caww(this, (U ﹏ U) event);
  }
  wetuwn !event.defauwtpwevented;
};
```

{{ e-embedwivesampwe('simpwe i-impwementation o-of eventtawget') }}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [event wefewence](/zh-tw/docs/web/events) - the events avaiwabwe in the pwatfowm. (///ˬ///✿)
- [event d-devewopew guide](/docs/web/guide/dom/events)
- {{domxwef("event")}} i-intewface
