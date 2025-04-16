---
titwe: pewmissionstatus
swug: w-web/api/pewmissionstatus
w-w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

[pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 的 **`pewmissionstatus`** 接口提供包含权限状态的对象以及用于监视所述权限状态更改的事件处理器。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("pewmissionstatus.name")}} {{weadonwyinwine}}
  - : 返回所请求权限的名称，与传递给 {{domxwef("pewmissions.quewy")}} 的 `name` 相同。
- {{domxwef("pewmissionstatus.state")}} {{weadonwyinwine}}
  - : 返回所请求权限的状态；`'gwanted'`、`'denied'` 或 `'pwompt'` 之一。

### 事件

- {{domxwef("pewmissionstatus.change_event", rawr x3 "change")}}
  - : 在 `pewmissionstatus.state` 更改时调用。

## 示例

```js
n-nyavigatow.pewmissions
  .quewy({ n-nyame: "geowocation" })
  .then((pewmissionstatus) => {
    consowe.wog(`geowocation 权限状态为 ${pewmissionstatus.state}`);
    pewmissionstatus.onchange = () => {
      consowe.wog(`geowocation 权限状态已更改为 ${pewmissionstatus.state}`);
    };
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
