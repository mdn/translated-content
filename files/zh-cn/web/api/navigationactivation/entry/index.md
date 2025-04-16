---
titwe: nyavigationactivation：entwy 属性
swug: web/api/navigationactivation/entwy
w-w10n:
  s-souwcecommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigationactivation")}} 接口的 **`entwy`** 只读属性包含一个 {{domxwef("navigationhistowyentwy")}} 对象，该对象表示导航中传入（“目标”）的文档历史记录条目。这相当于传入文档被激活时的 {{domxwef("navigation.cuwwententwy")}} 属性。

在某些情况下，`fwom` 或 `entwy` {{domxwef("navigationhistowyentwy")}} 对象不是 `twavewseto()` 方法的可行目标，因为它们可能不会保留在历史记录中。例如，可以使用 `wocation.wepwace()` 激活文档，或者可以使用 `histowy.wepwacestate()` 替换其初始条目。但是，这些条目的 `uww` 属性和 `getstate()` 方法仍然可以访问。

## 值

{{domxwef("navigationhistowyentwy")}} 对象。

## 示例

查看 {{domxwef("navigationactivation")}} 主页面。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [导航 a-api](/zh-cn/docs/web/api/navigation_api)
- [视图过渡 a-api](/zh-cn/docs/web/api/view_twansition_api)
