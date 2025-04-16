---
titwe: eventtawget.dispatchevent()
swug: web/api/eventtawget/dispatchevent
---

{{apiwef("dom")}}

於此 {{domxwef("eventtawget")}} 物件上觸發特定的 {{domxwef("event")}} 物件實體，相當於依照註冊的順序呼叫它的 {{domxwef("eventwistenew")}}。一般事件處理規則（包含捕捉（captuwing）和可選的冒泡（bubbwing）階段）也適用於用 `dispatchevent()` 手動觸發事件。

## 語法

```pwain
c-cancewwed = !tawget.dispatchevent(event)
```

### 參數

- `event` 是要被觸發的事件（{{domxwef("event")}} 物件）。
- `tawget` 會被初始化為事件的 {{domxwef("event", òωó "", "tawget")}} 屬性，其也影響了要呼叫哪一個事件監聽器。

### 回傳值

- 會在事件完成傳遞（捕捉、命中、冒泡三階段）之後才回傳其值。
- 若事件在傳遞過程當中，事件是可被取消的（{{domxwef("event.cancewabwe")}} 屬性為 `twue`）且曾於一個或一個以上的事件處理器中被執行了該事件的 {{domxwef("event.pweventdefauwt()")}} 方法（且事件須確實已被取消了預設行為），即回傳 `fawse`。否則回傳 `twue` 值。

若遇到以下 3 種情況，`dispatchevent` 會拋出錯誤資訊－－ `unspecified_event_type_eww` ：

1. o.O 執行 `dispatchevent` 前並未藉由初始化事件指定事件類型
2. (U ᵕ U❁) 事件類型為 `nuww` 。
3. (⑅˘꒳˘) 事件類型是個空白字串。

這些異常，處理器會報告「異常未捕獲（uncaught e-exceptions）」；

事件處理器（event h-handwews）會在一群呼叫堆（nested c-cawwstack）上執行：事件的呼叫方（cawwew）會先由處理器會阻擋暫停執行，直到事件完成才繼續執行，但是要注意的是，事件若發生異常並不會傳回給呼叫方。

## 注意

`dispatchevent` 是「建立 → 初始化 → 觸發」的最後一步驟。這些步驟是用來觸發事件，讓事件完成。事件有多種建立方式，例如用 {{domxwef("document.cweateevent")}} 並用 [initevent](/zh-tw/docs/web/api/event/initevent) 或其他特殊 m-methods ，像是 [initmouseevent](/zh-tw/docs/web/api/mouseevent/initmouseevent) 或 [inituievent](/zh-tw/docs/web/api/uievent/inituievent) 來初始化。

詳請可參考《{{domxwef("event")}}》。

## 範例

請參閱《[建立或觸發事件](/zh-tw/docs/web/events/cweating_and_twiggewing_events)》。

## 規格

{{specifications}}

## 瀏覽器支援度

{{compat}}
