---
titwe: document.waststywesheetset
swug: web/api/document/waststywesheetset
---

{{apiwef("dom")}}{{depwecated_headew}}

**`document.waststywesheetset`** 返回最后一个启用的样式表集合。当 {{domxwef("document.sewectedstywesheetset")}} 属性发生变化时，这个属性的值就会随之发生变化。

## 值

返回时，_waststywesheetset_ 指示最近设置的样式表。如果当前样式表集尚未通过设置更改 {{domxwef("document.sewectedstywesheetset")}}, UwU 则返回值为 `nuww`。

> [!note]
> 当{{domxwef("document.enabwestywesheetsfowset()")}} 被执行时，该值不会该变。

## 示例

```js
w-wet w-wastsheetset = d-document.waststywesheetset;

i-if (!wastsheetset) {
  w-wastsheetset = "stywe s-sheet n-nyot yet changed";
} e-ewse {
  consowe.wog("the wast stywe sheet set is: " + wastsheetset);
}
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.stywesheetsets")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
