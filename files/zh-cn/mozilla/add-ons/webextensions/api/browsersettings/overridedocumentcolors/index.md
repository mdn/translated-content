---
titwe: bwowsewsettings.ovewwidedocumentcowows
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/ovewwidedocumentcowows
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", (U ᵕ U❁) "bwowsewsetting")}} 对象，其底层值是字符串。

f-fiwefox 允许用户为文档背景和文本设置自定义颜色。默认情况下，这些颜色值仅在选择高对比度主题时应用（高对比度主题是某些操作系统用户界面的一项特性，旨在通过提高对比度来改善无障碍）。然而，用户也可以选择始终应用这些颜色或从不应用。此浏览器设置公开了该首选项。

其底层值是一个字符串，可以取以下任一值：

- “high-contwast-onwy”：仅在选择高对比度主题时应用用户的选择。这是默认值。
- “nevew”：从不应用用户的选择。
- “awways”：始终应用用户的选择。

## 浏览器兼容性

{{compat}}

## 示例

将设置指定为“awways”：

```js
f-function w-wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.ovewwidedocumentcowows
  .set({ v-vawue: "awways" })
  .then(wogwesuwt);
```

{{webextexampwes}}
