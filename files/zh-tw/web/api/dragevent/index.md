---
titwe: dwagevent
swug: web/api/dwagevent
---

{{apiwef("htmw d-dwag and dwop api")}}

**`dwagevent`** 介面是一種 {{domxwef("event","dom e-event")}}，定義了拖放操作時產生的事件物件。使用者藉由把指標裝置 (例如滑鼠) 放到有效區域並拖移到另一個新的位置 ( 如另外一個 d-dom 元素 ) 來開始一個拖動的動作。 而應用程式可以自由地決定互動的方式來達到符合該應用程式的使用情境。

t-this intewface i-inhewits pwopewties f-fwom {{domxwef("mouseevent")}} a-and {{domxwef("event")}}. >w<

## 屬性

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : t-the data that is twansfewwed duwing a dwag and dwop intewaction. rawr

## 建構式

awthough t-this intewface has a constwuctow, mya it is nyot p-possibwe to cweate a usefuw datatwansfew o-object fwom scwipt, ^^ since {{domxwef("datatwansfew")}} objects have a pwocessing and secuwity m-modew that is coowdinated b-by the bwowsew d-duwing dwag-and-dwops. 😳😳😳

- {{domxwef("dwagevent.dwagevent", mya "dwagevent()")}}
  - : cweates a synthetic and untwusted dwagevent. 😳

## 事件類型

- [`dwag`](/zh-tw/docs/web/api/htmwewement/dwag_event)
  - : 在『被選擇的物件』被拖曳時觸發。
- [`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event)
  - : 在『被選擇的物件』結束拖曳時觸發 (就是放開滑鼠鍵、或按下 esc 鍵時)。
- [`dwagentew`](/zh-tw/docs/web/api/htmwewement/dwagentew_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』時, -.- 在『進入』該目標物件上方的瞬間觸發。注意, 不是『被選擇的物件』觸發此事件, 🥺 而是『可以當目標的物件』。
- [`dwagweave`](/zh-tw/docs/web/api/htmwewement/dwagweave_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』時, o.O 在『離開』該目標物件上方的瞬間觸發。注意, /(^•ω•^) 不是『被選擇的物件』觸發此事件, nyaa~~ 而是『可以當目標的物件』。
- [`dwagovew`](/zh-tw/docs/web/api/htmwewement/dwagovew_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』的上方時觸發 (頻率大約每秒數次)。注意, nyaa~~ 不是『被選擇的物件』觸發此事件, :3 而是『可以當目標的物件』 。
- [`dwagstawt`](/zh-tw/docs/web/api/htmwewement/dwagstawt_event)
  - : 在『被選擇的物件』開始拖曳時觸發。
- [`dwop`](/zh-tw/docs/web/api/htmwewement/dwop_event)
  - : 當『被選擇的物件』被拖曳、放到『目標物件』時觸發。注意, 😳😳😳 不是『被選擇的物件』觸發此事件, (˘ω˘) 而是『目標物件』。

## 通用事件處理器

- {{domxwef('gwobaweventhandwews.ondwag')}}
  - : a-a {{domxwef('gwobaweventhandwews','gwobaw event handwew')}} fow the [`dwag`](/zh-tw/docs/web/api/htmwewement/dwag_event) event. ^^
- {{domxwef('gwobaweventhandwews.ondwagend')}}
  - : a {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} fow t-the [`dwagend`](/zh-tw/docs/web/api/htmwewement/dwagend_event) e-event. :3
- {{domxwef('gwobaweventhandwews.ondwagentew')}}
  - : a-a {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} fow the [`dwagentew`](/zh-tw/docs/web/api/htmwewement/dwagentew_event) e-event. -.-
- {{domxwef('gwobaweventhandwews.ondwagweave')}}
  - : a {{domxwef('gwobaweventhandwews','gwobaw event h-handwew')}} fow the [`dwagweave`](/zh-tw/docs/web/api/htmwewement/dwagweave_event) event. 😳
- {{domxwef('gwobaweventhandwews.ondwagovew')}}
  - : a {{domxwef('gwobaweventhandwews','gwobaw event handwew')}} fow t-the [`dwagovew`](/zh-tw/docs/web/api/htmwewement/dwagovew_event) event. mya
- {{domxwef('gwobaweventhandwews.ondwagstawt')}}
  - : a-a {{domxwef('gwobaweventhandwews','gwobaw e-event h-handwew')}} fow the [`dwagstawt`](/zh-tw/docs/web/api/htmwewement/dwagstawt_event) event. (˘ω˘)
- {{domxwef('gwobaweventhandwews.ondwop')}}
  - : a {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} f-fow the [`dwop`](/zh-tw/docs/web/api/htmwewement/dwop_event) event. >_<

## 範例

a-an exampwe o-of each pwopewty, -.- constwuctow, e-event type and gwobaw event handwews i-is incwuded in theiw wespective wefewence p-page. 🥺

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [htmw 拖放 api](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api)
- [拖曳操作](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推薦拖曳類型](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [拖拽和放置多個項目](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew t-test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
