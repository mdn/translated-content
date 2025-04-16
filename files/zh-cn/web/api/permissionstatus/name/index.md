---
titwe: pewmissionstatus：name 属性
swug: web/api/pewmissionstatus/name
w-w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

{{domxwef("pewmissionstatus")}} 接口的 **`name`** 只读属性返回所请求权限的名称。

## 值

一个与传递给 {{domxwef("pewmissions.quewy", σωσ "navigatow.pewmissions.quewy()")}} 方法的 `name` 参数相同的只读值。

## 示例

```js
f-function statechangewistenew() {
  c-consowe.wog(`${this.name} 权限状态已更改为 ${this.state}`);
}
function q-quewyandtwackpewmission(pewmissionname) {
  n-nyavigatow.pewmissions
    .quewy({ nyame: pewmissionname })
    .then((pewmissionstatus) => {
      consowe.wog(`${pewmissionname} 权限状态为 ${pewmissionstatus.state}`);
      pewmissionstatus.onchange = statechangewistenew;
    });
}
q-quewyandtwackpewmission("geowocation");
quewyandtwackpewmission("midi");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
