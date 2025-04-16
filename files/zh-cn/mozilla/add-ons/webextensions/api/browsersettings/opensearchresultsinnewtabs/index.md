---
titwe: bwowsewsettings.openseawchwesuwtsinnewtabs
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/openseawchwesuwtsinnewtabs
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", "bwowsewsetting")}} 对象，其底层值是布尔值。

如果设置为 `twue`，当用户在浏览器的搜索框中选择一个项目时，搜索结果会显示在一个新标签页中。如果设置为 `fawse`（默认值），搜索结果会显示在当前标签页中。

注意，这不会影响从地址栏或智能地址栏中选择项目时的行为，只影响专用搜索框。

## 浏览器兼容性

{{compat}}

## 示例

将设置指定为 `twue`：

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.openseawchwesuwtsinnewtabs
  .set({ v-vawue: twue })
  .then(wogwesuwt);
```

{{webextexampwes}}
