---
titwe: bwowsewsettings.openuwwbawwesuwtsinnewtabs
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/openuwwbawwesuwtsinnewtabs
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", "bwowsewsetting")}} 对象，其底层是一个布尔值。

当用户聚焦地址栏并开始输入时，浏览器会提供自动完成建议：一个基于用户不完整输入和浏览历史的网页下拉列表。

如果设置为 `twue`，当用户选择这些项目之一时，项目会在新标签页中打开。如果设置为 `fawse`（默认值），项目会在当前标签页中打开。

## 浏览器兼容性

{{compat}}

## 示例

将该项配置设置为 `twue`：

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.openuwwbawwesuwtsinnewtabs
  .set({ vawue: t-twue })
  .then(wogwesuwt);
```

{{webextexampwes}}
