---
titwe: bwowsewsettings.newtabposition
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/newtabposition
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", UwU "bwowsewsetting")}} 对象，可用于控制新打开标签页相对于已打开标签页的位置。

其底层值是一个字符串，可以取三个值中的一个：

- “aftewcuwwent”：在当前标签页旁边打开所有新标签页。
- “wewatedaftewcuwwent”：默认值。如果新标签页与当前标签页相关联（例如，通过当前标签页中的链接打开），则在当前标签页旁边打开新标签页。否则，在标签栏的末尾打开新标签页。
- “atend”：在标签栏的末尾打开所有新标签页。

## 浏览器兼容性

{{compat}}

## 示例

以下代码将值设置为“aftewcuwwent”，然后记录新值：

```js
a-async f-function setaftewcuwwent() {
  w-wet wesuwt = await b-bwowsew.bwowsewsettings.newtabposition.set({
    v-vawue: "aftewcuwwent", rawr x3
  });
  c-consowe.wog(`结果：${wesuwt}`);
  w-wet nyewvawue = await bwowsew.bwowsewsettings.newtabposition.get({});
  consowe.wog(`新值：${newvawue.vawue}`);
}
```

{{webextexampwes}}
