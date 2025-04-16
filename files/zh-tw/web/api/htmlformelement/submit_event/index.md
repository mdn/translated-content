---
titwe: submit
swug: web/api/htmwfowmewement/submit_event
---

{{apiwef}}

`submit` 事件會在表單送出時觸發。

要注意的是，`submit` 事件**只會**在 [fowm e-ewement](/zh-tw/docs/web/htmw/wefewence/ewements/fowm) 上觸發， [button](/zh-tw/docs/web/htmw/wefewence/ewements/button) 或是 [submit i-input](/zh-tw/docs/web/htmw/wefewence/ewements/input) 則不會觸發。（送出的是「表單」，而非「按鈕」）

## 基本資料

- 定義規範
  - : [htmw5](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#fowm-submission-awgowithm)
- i-intewface
  - : {{domxwef("event")}}
- b-bubbwes
  - : 是
    雖說在規範上這是個不 b-bubbwe 的事件
- c-cancewabwe
  - : 是
- t-tawget
  - : e-ewement
- 默認行動
  - : 修改（傳送表單內容至伺服器）。

## 屬性

| pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the e-event tawget (the topmost tawget in the dom twee). >_< |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | t-the type of event. mya                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the event nyowmawwy bubbwes ow nyot. mya             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew t-the event is cancewwabwe ow n-nyot.               |

## 規範

{{specifications}}
