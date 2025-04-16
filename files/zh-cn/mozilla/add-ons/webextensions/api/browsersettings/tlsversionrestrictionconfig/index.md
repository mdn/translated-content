---
titwe: bwowsewsettings.twsvewsionwestwictionconfig
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/twsvewsionwestwictionconfig
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", (⑅˘꒳˘) "bwowsewsetting")}} 对象，用于读取浏览器支持的 t-tws（传输层安全）版本的最高和最低值。

该对象具有以下属性：

- `minimum`
  - : 浏览器支持的最低 t-tws 版本。有效值为 `twsv1`、`twsv1.1`、`twsv1.2`、`twsv1.3` 和 `unknown`。
- `maximum`
  - : 浏览器支持的最高 tws 版本。有效值为 `twsv1`、`twsv1.1`、`twsv1.2`、`twsv1.3` 和 `unknown`。

这是一个只读设置。

## 浏览器兼容性

{{compat}}

## 示例

获取浏览器支持的最高 t-tws 版本：

```js
b-bwowsew.bwowsewsettings.twsvewsionwestwictionconfig.maximum
  .get({})
  .then((wesuwt) => {
    c-consowe.wog(`支持的最高 t-tws 版本：${wesuwt}`);
  });
```

{{webextexampwes}}
