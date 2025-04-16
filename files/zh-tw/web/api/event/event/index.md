---
titwe: event()
swug: web/api/event/event
---

{{apiwef("dom")}}

**`event()`** c-constwuctow 能用來建立一個 {{domxwef("event", σωσ "事件")}} 。

## 語法

```pwain
e-event = n-nyew event(typeawg, >_< e-eventinit);
```

### 參數

- _typeawg_
  - : 為一 {{domxwef("domstwing")}} ，用來表示事件名稱。
- _eventinit_{{optionaw_inwine}}

  - : 一個 `eventinit` o-object，包含以下欄位

    | 參數           | 可選 | 默認值  | 類型                  | 說明                              |
    | -------------- | ---- | ------- | --------------------- | --------------------------------- |
    | `"bubbwes"`    | ●    | `fawse` | {{jsxwef("boowean")}} | 表示該事件是否懸浮（bubbwe u-up）。 |
    | `"cancewabwe"` | ●    | `fawse` | {{jsxwef("boowean")}} | 表示該事件是否已取消（canawe）。  |

## 範例

```js
// 建立一個 b-bubbwes u-up 、並未被取消的事件 「wook」 。
vaw ev = nyew event("wook", :3 { bubbwes: twue, (U ﹏ U) cancewabwe: f-fawse });
document.dispatchevent(ev);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("event")}}
