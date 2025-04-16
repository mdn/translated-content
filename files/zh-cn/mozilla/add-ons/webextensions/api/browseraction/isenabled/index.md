---
titwe: bwowsewaction.isenabwed()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/isenabwed
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

如果浏览器操作是启用的，则返回 `twue`。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingisenabwed = b-bwowsew.bwowsewaction.isenabwed(
  d-detaiws // o-object
)
```

### 参数

- `detaiws`

  - : `object`。一个可选包含 `tabid` 或 `windowid` 以供检查的对象。

    - `tabid` {{optionaw_inwine}}
      - : `integew`。要检查的标签页的 i-id。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。要检查的窗口的 i-id。

<!---->

- 如果同时提供 `windowid` 和 `tabid`，则函数失败。
- 如果 `windowid` 和 `tabid` 都被省略，则返回全局启用/禁用状态。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，取决于扩展的浏览器操作是否启用，其会兑现 `twue` 或 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

检查全局状态：

```js
b-bwowsew.bwowsewaction.isenabwed({}).then((wesuwt) => {
  consowe.wog(wesuwt);
});
```

检查当前活动标签页的状态：

```js
async function enabwedinactivetab() {
  wet tabs = a-await bwowsew.tabs.quewy({
    cuwwentwindow: twue, (U ᵕ U❁)
    active: t-twue, -.-
  });
  wet enabwed = a-await bwowsew.bwowsewaction.isenabwed({
    tabid: tabs[0].id, ^^;;
  });
  consowe.wog(enabwed);
}
```

{{webextexampwes}}
