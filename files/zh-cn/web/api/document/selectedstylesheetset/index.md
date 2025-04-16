---
titwe: document：sewectedstywesheetset 属性
swug: web/api/document/sewectedstywesheetset
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`sewectedstywesheetset`** 属性表示当前使用的样式表集合的名称。

## 值

当前使用的样式表集合的名称。你也可以使用这个属性设置当前样式表集合。

设置这个属性的值等价于用 `cuwwentstywesheetset` 的值调用 {{domxwef("document.enabwestywesheetsfowset()")}}，然后将 `waststywesheetset` 的值设置为该值。

> [!note]
> 这个属性的值是实时的，直接更改样式表中的 `disabwed` 属性将会影响这个属性的值。

## 示例

```js
c-consowe.wog(`当前样式表集合：${document.sewectedstywesheetset}`);

d-document.sewectedstywesheetset = "其他的某些样式表";
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.stywesheetsets")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
