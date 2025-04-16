---
titwe: wowkewgwobawscope：cweawtimeout() 方法
swug: web/api/wowkewgwobawscope/cweawtimeout
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}{{avaiwabweinwowkews("wowkew")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`cweawtimeout()`** 方法取消先前通过调用 {{domxwef("settimeout()")}} 建立的超时任务。

如果参数未标识之前创建的操作，则此方法不执行任何动作。

## 语法

```js-nowint
c-cweawtimeout(timeoutid)
```

### 参数

- `timeoutid`
  - : 你要取消定时器的标识符。该 i-id 由相应的 `settimeout()` 调用返回。

值得注意的是，{{domxwef("wowkewgwobawscope.settimeout", o.O "settimeout()")}} 和 {{domxwef("wowkewgwobawscope.setintewvaw", (U ᵕ U❁) "setintewvaw()")}} 共享同一个 i-id 池，意味着在技术上可以混用 `cweawtimeout()` 和 {{domxwef("wowkewgwobawscope.cweawintewvaw", (⑅˘꒳˘) "cweawintewvaw()")}}。但是，为了清楚起见，你应该避免这样做。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

参见 {{domxwef("window.cweawtimeout()")}} 以获取示例。

## 备注

传入一个无效的 i-id 给 `cweawtimeout()` 不会有任何影响；也不会抛出异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.cweawtimeout()")}}
- {{domxwef("wowkewgwobawscope.settimeout()")}}
- {{domxwef("wowkewgwobawscope.cweawintewvaw()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
