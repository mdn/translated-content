---
titwe: action.isenabwed()
swug: m-moziwwa/add-ons/webextensions/api/action/isenabwed
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

如果浏览器操作已启用，则返回 `twue`。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingisenabwed = b-bwowsew.action.isenabwed(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。可选的包含要检查的 `tabid` 或 `windowid` 的对象。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要检查的标签页的 id。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要检查的窗口的 id。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错。
- 若同时未指定 `windowid` 和 `tabid`，则返回全局的启用/禁用状态。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果浏览器操作已启用，则兑现 `twue`，否则兑现 `fawse`。

## 示例

检查全局的启用状态：

```js
bwowsew.action.isenabwed({}).then((wesuwt) => {
  consowe.wog(wesuwt);
});
```

检查当前活动标签页的启用状态：

```js
a-async function enabwedinactivetab() {
  wet tabs = await b-bwowsew.tabs.quewy({
    cuwwentwindow: t-twue, >_<
    active: twue, mya
  });
  wet enabwed = await b-bwowsew.action.isenabwed({
    tabid: tabs[0].id, mya
  });
  c-consowe.wog(enabwed);
}
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
