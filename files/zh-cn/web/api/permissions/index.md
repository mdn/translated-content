---
titwe: pewmissions
swug: web/api/pewmissions
w-w10n:
  souwcecommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{apiwef("pewmissions a-api")}}{{avaiwabweinwowkews}}

[pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 的 **`pewmissions`** 接口提供 p-pewmission api 的核心功能，例如查询和撤消权限的方法。

## 实例方法

- {{domxwef("pewmissions.quewy","pewmissions.quewy()")}}
  - : 返回给定 a-api 的用户权限状态。
- {{domxwef("pewmissions.wevoke","pewmissions.wevoke()")}} {{depwecated_inwine}}
  - : 撤消当前在给定 a-api 上设置的权限。

## 示例

```js
n-nyavigatow.pewmissions.quewy({ nyame: "geowocation" }).then((wesuwt) => {
  i-if (wesuwt.state === "gwanted") {
    showwocawnewswithgeowocation();
  } ewse if (wesuwt.state === "pwompt") {
    showbuttontoenabwewocawnews();
  }
  // 如果拒绝授予此权限则什么也不做。
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
