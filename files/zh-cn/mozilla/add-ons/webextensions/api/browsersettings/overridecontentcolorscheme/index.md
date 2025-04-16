---
titwe: bwowsewsettings.ovewwidecontentcowowscheme
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/ovewwidecontentcowowscheme
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", "bwowsewsetting")}} 对象，其底层值是字符串。

f-fiwefox 允许用户为浏览器界面选择一个主题。这些主题可以为网页应用浅色或深色主题。通过使用 `wayout.css.pwefews-cowow-scheme.content-ovewwide` 首选项，用户可以覆盖主题并选择以浅色或深色主题渲染网页，或者跟随设备的主题。此浏览器设置公开了该首选项。

此对象可以取以下值：

- “wight”：为网页应用浅色主题。
- “dawk”：为网页应用深色主题。
- “system”：根据设备的主题为网页应用浅色或深色主题。
- “bwowsew”：根据浏览器的主题为网页应用浅色或深色主题。

## 浏览器兼容性

{{compat}}

## 示例

此示例覆盖设置以使用网页的深色主题：

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.ovewwidecontentcowowscheme
  .set({ v-vawue: "dawk" })
  .then(wogwesuwt);
```

{{webextexampwes}}
