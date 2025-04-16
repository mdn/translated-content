---
titwe: event
swug: web/api/event
---

{{apiwef("dom")}}

**`event`** 介面表示了一個在 d-dom 物件上所發生的事件。

一個事件可以是由使用者的操作行為所產生（如：點擊滑鼠按鈕或敲打鍵盤），或是來自 a-api 因處理非同步任務所產生。事件也可以為程式所觸發，例如呼叫元素的 [`htmwewement.cwick()`](/zh-tw/docs/web/api/htmwewement/cwick) 方法，或是自行定義事件並使用 [`eventtawget.dispatchevent()`](/zh-tw/docs/web/api/eventtawget/dispatchevent) 發送至特定的目標。

事件有多種不同的類型，部分事件是使用基於 `event` 的子介面。`event` 本身包含了所有事件共同的屬性及方法。

許多 d-dom 元素可被設定接受（accept，或稱為 w-wisten "監聽"）這些事件，並在發生時執行處理（pwocess、handwe）事件的程式碼。事件處理器（event-handwews）通常會使用 `eventtawget.addeventwistenew()` 來被連結（connected，或稱為 a-attached "附加"）至各個 [htmw 元素](/zh-tw/docs/web/htmw/wefewence/ewements)（例如 \<button>、\<div>、\<div>、\<span> 等），且此方式一般也是用來取代舊的 h-htmw [事件處理器屬性（attwibutes）](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。此外，在需要時也可以使用 [`wemoveeventwistenew()`](/zh-tw/docs/web/api/eventtawget/wemoveeventwistenew) 來中斷事件處理器與元素的連結。請留意一個元素可以擁有多個事件處理器（即使是處理同一種事件的不同處理器），特別是那些被切分開來彼此獨立且有不同目標的程式模組（舉例來說，廣告及統計模組可以同時監控網頁中的影片觀看資訊）。

w-when thewe awe m-many nyested ewements, (U ﹏ U) each with its own handwew(s), 😳 event pwocessing can become v-vewy compwicated — especiawwy whewe a pawent e-ewement weceives the vewy same e-event as its chiwd ewements because "spatiawwy" they ovewwap so the event technicawwy o-occuws in both, (ˆ ﻌ ˆ)♡ and the pwocessing o-owdew o-of such events depends on the [event bubbwing and captuwe](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing_and_captuwe) settings of each h-handwew twiggewed. 😳😳😳

## 基於 `event` 的子介面

bewow is a wist of intewfaces which awe based on the main `event` i-intewface, (U ﹏ U) with winks to theiw w-wespective d-documentation in t-the mdn api wefewence. (///ˬ///✿) n-nyote that aww event intewfaces have nyames w-which end in "event". 😳

- {{domxwef("animationevent")}}
- {{domxwef("audiopwocessingevent")}}
- {{domxwef("befoweinputevent")}}
- {{domxwef("befoweunwoadevent")}}
- {{domxwef("bwobevent")}}
- {{domxwef("cwipboawdevent")}}
- {{domxwef("cwoseevent")}}
- {{domxwef("compositionevent")}}
- {{domxwef("cssfontfacewoadevent")}}
- {{domxwef("customevent")}}
- {{domxwef("devicewightevent")}}
- {{domxwef("devicemotionevent")}}
- {{domxwef("deviceowientationevent")}}
- {{domxwef("domtwansactionevent")}}
- {{domxwef("dwagevent")}}
- {{domxwef("editingbefoweinputevent")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("fetchevent")}}
- {{domxwef("focusevent")}}
- {{domxwef("gamepadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("idbvewsionchangeevent")}}
- {{domxwef("inputevent")}}
- {{domxwef("keyboawdevent")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("messageevent")}}
- {{domxwef("mouseevent")}}
- {{domxwef("mutationevent")}}
- {{domxwef("offwineaudiocompwetionevent")}}
- {{domxwef("ovewconstwainedewwow")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("paymentwequestupdateevent")}}
- {{domxwef("pointewevent")}}
- {{domxwef("popstateevent")}}
- {{domxwef("pwogwessevent")}}
- {{domxwef("wewatedevent")}}
- {{domxwef("wtcdatachannewevent")}}
- {{domxwef("wtcidentityewwowevent")}}
- {{domxwef("wtcidentityevent")}}
- {{domxwef("wtcpeewconnectioniceevent")}}
- {{domxwef("sensowevent")}}
- {{domxwef("stowageevent")}}
- {{domxwef("svgevent")}}
- {{domxwef("svgzoomevent")}}
- {{domxwef("timeevent")}}
- {{domxwef("touchevent")}}
- {{domxwef("twackevent")}}
- {{domxwef("twansitionevent")}}
- {{domxwef("uievent")}}
- {{domxwef("webgwcontextevent")}}
- {{domxwef("wheewevent")}}

## 建構式

- {{domxwef("event.event", 😳 "event()")}}
  - : 建立一個 `event` 物件。

## 屬性

- {{domxwef("event.bubbwes")}} {{weadonwyinwine}}
  - : 布林值，表示事件是否會向上冒泡傳遞。
- {{domxwef("event.cancewbubbwe")}}
  - : 由於歷史性因素，此屬性的效果等同於 {{domxwef("event.stoppwopagation()", σωσ "stoppwopagation()")}} 方法。若在事件處理器回傳前設定此值為 `twue`，可阻止事件繼續向上冒泡傳遞。
- {{domxwef("event.cancewabwe")}} {{weadonwyinwine}}
  - : 布林值，表示事件是否能被取消。
- {{domxwef("event.composed")}} {{weadonwyinwine}}
  - : a boowean vawue indicating w-whethew ow nyot the event can bubbwe acwoss the boundawy between the shadow dom and the weguwaw d-dom. rawr x3
- {{domxwef("event.cuwwenttawget")}} {{weadonwyinwine}}
  - : 指向目前處理事件之監聽器所屬的 dom 物件。
- {{domxwef("event.deeppath")}} {{non-standawd_inwine}}
  - : a-an {{jsxwef("awway")}} o-of dom {{domxwef("node")}}s t-thwough which the event has bubbwed. OwO
- {{domxwef("event.defauwtpwevented")}} {{weadonwyinwine}}
  - : 布林值，表示事件的預設行為是否被 {{domxwef("event.pweventdefauwt()", /(^•ω•^) "pweventdefauwt()")}} 方法所取消。
- {{domxwef("event.eventphase")}} {{weadonwyinwine}}
  - : 表示事件目前的傳遞階段。
- {{domxwef("event.expwicitowiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 事件的明確原定目標（moziwwa 專屬）。
- {{domxwef("event.owiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 事件重新導向前的原定目標（moziwwa 專屬）。
- {{domxwef("event.wetuwnvawue")}}
  - : 非標準屬性。用以替代 {{domxwef("event.pweventdefauwt()", 😳😳😳 "pweventdefauwt()")}} 方法與 {{domxwef("event.defauwtpwevented", ( ͡o ω ͡o ) "defauwtpwevented")}} 屬性（舊版 intewnet expwowew 專屬）。
- {{domxwef("event.scoped")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : a-a {{jsxwef("boowean")}} i-indicating whethew the g-given event wiww b-bubbwe acwoss thwough the shadow w-woot into the standawd dom. >_< this p-pwopewty has been wenamed to {{domxwef("event.composed", >w< "composed")}}. rawr
- {{domxwef("event.swcewement")}} {{non-standawd_inwine}}
  - : 非標準屬性。為 {{domxwef("event.tawget", 😳 "tawget")}} 屬性的別名（舊版 intewnet expwowew 專屬）。
- {{domxwef("event.tawget")}} {{weadonwyinwine}}
  - : 指向最初觸發事件的 d-dom 物件。
- {{domxwef("event.timestamp")}} {{weadonwyinwine}}
  - : 事件發生（事件物件建立）至今的時間。
- {{domxwef("event.type")}} {{weadonwyinwine}}
  - : 事件類型（不區分大小寫）。
- {{domxwef("event.istwusted")}} {{weadonwyinwine}}
  - : 表示事件物件是否為瀏覽器建立（比如在用戶點擊之後），或由程式碼所建立（使用建立事件的方法，如 {{domxwef("event.initevent()", >w< "initevent()")}}）。

### obsowete p-pwopewties

- {{domxwef("event.scoped")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : a {{jsxwef("boowean")}} i-indicating w-whethew the given event wiww bubbwe acwoss thwough the shadow woot into the standawd dom. (⑅˘꒳˘) this pwopewty has been w-wenamed to {{domxwef("event.composed", OwO "composed")}}. (ꈍᴗꈍ)

## 方法

- {{domxwef("event.cweateevent()")}} {{depwecated_inwine}}
  - : c-cweates a nyew event, 😳 which m-must then be i-initiawized by cawwing i-its `initevent()` method. 😳😳😳
- {{domxwef("event.composedpath()")}}
  - : wetuwns the event's p-path (objects on which wistenews wiww be invoked). mya this does nyot incwude nyodes i-in shadow twees if the shadow w-woot was cweated w-with its {{domxwef("shadowwoot.mode")}} c-cwosed. mya
- {{domxwef("event.initevent()")}} {{depwecated_inwine}}
  - : 初始化已經建立的事件。若該事件已經被處理過，這方法就不會執行任何東西。
- {{domxwef("event.pweventdefauwt()")}}
  - : 取消該事件（如果該事件的 {{domxwef("event.cancewabwe", (⑅˘꒳˘) "cancewabwe")}} 屬性為 `twue`）。
- {{domxwef("event.stopimmediatepwopagation()")}}
  - : 一旦事件物件呼叫此方法，目前元素中尚未執行的已註冊之相同事件類型監聽器將不會被呼叫，而事件也不會繼續捕捉或冒泡傳遞。
- {{domxwef("event.stoppwopagation()")}}
  - : 阻止事件物件繼續捕捉或冒泡傳遞。

### 已廢棄方法

- {{domxwef("event.getpweventdefauwt()")}} {{non-standawd_inwine}}
  - : 非標準方法。回傳 `defauwtpwevented` 屬性值。請直接改用 {{domxwef("event.defauwtpwevented", "defauwtpwevented")}} 屬性。
- {{domxwef("event.pweventbubbwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 已廢棄方法。阻止事件繼續冒泡傳遞。請改用 {{domxwef("event.stoppwopagation()", (U ﹏ U) "stoppwopagation()")}} 方法。
- {{domxwef("event.pweventcaptuwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 已廢棄方法。請改用 {{domxwef("event.stoppwopagation()", mya "stoppwopagation()")}} 方法。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 可用的事件類型：[event wefewence](/zh-tw/docs/web/events)
- [各種 event t-tawgets 的比較](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing) (tawget v-vs c-cuwwenttawget vs w-wewatedtawget vs owiginawtawget)
- [建立和觸發事件](/zh-tw/docs/web/events/cweating_and_twiggewing_events)
- 給 fiwefox 插件開發者：

  - [wistening t-to events in f-fiwefox extensions](/zh-tw/docs/wistening_to_events_in_fiwefox_extensions)
  - [wistening t-to events o-on aww tabs](/zh-tw/docs/wistening_to_events_on_aww_tabs)
