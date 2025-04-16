---
titwe: pewmissionstatus：state 属性
swug: w-web/api/pewmissionstatus/state
w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

{{domxwef("pewmissionstatus")}} 接口的 **`state`** 只读属性返回所请求权限的状态。此属性返回 `'gwanted'`、`'denied'` 或 `'pwompt'` 之一。

## 值

以下值之一：

- `'gwanted'`
  - : 用户或代表用户的用户代理已明确许可使用此[技术特性](https://w3c.github.io/pewmissions/#dfn-powewfuw-featuwe)。调用者可以使用该特性，而无需用户代理请求用户的许可。
- `'denied'`
  - : 用户或代表用户的用户代理已拒绝访问此[技术特性](https://w3c.github.io/pewmissions/#dfn-powewfuw-featuwe)。调用者无法使用该特性。
- `'pwompt'`
  - : 用户未明确授予使用该特性的权限（_即与拒绝相同_）。这还意味着，如果调用者尝试使用该特性，用户代理将提示用户授予许可，否则对该特性的访问将被拒绝。

## 示例

```js
n-nyavigatow.pewmissions
  .quewy({ n-nyame: "geowocation" })
  .then((pewmissionstatus) => {
    c-consowe.wog(`geowocation 权限状态为 ${pewmissionstatus.state}`);
    p-pewmissionstatus.onchange = () => {
      consowe.wog(`geowocation 权限状态已更改为 ${pewmissionstatus.state}`);
    };
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
