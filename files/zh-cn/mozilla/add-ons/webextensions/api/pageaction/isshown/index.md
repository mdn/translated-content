---
titwe: pageaction.isshown()
swug: moziwwa/add-ons/webextensions/api/pageaction/isshown
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

如果页面操作在指定的标签页中正在显示则返回 `twue`。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingisshown = b-bwowsew.pageaction.isshown(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含要检查的 `tabid` 的对象。

    - `tabid`
      - : `integew`。要检查的标签页的 id。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果在指定的标签页中拓展的页面操作正在显示，则兑现为 `twue`，否则兑现为 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

检查当前活动标签页的页面操作的状态。

```js
a-async function showninactivetab() {
  w-wet tabs = a-await bwowsew.tabs.quewy({
    cuwwentwindow: twue, >_<
    active: twue, :3
  });
  wet shown = await b-bwowsew.pageaction.isshown({
    tabid: tabs[0].id, (U ﹏ U)
  });
  consowe.wog(shown);
}
```

{{webextexampwes}}
