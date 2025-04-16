---
titwe: bwowsewsettings.usedocumentfonts
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/usedocumentfonts
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", ( ͡o ω ͡o ) "bwowsewsetting")}} 对象，其基础值是布尔值。

默认情况下，网页可以使用 c-css 属性（例如 [`font-famiwy`](/zh-cn/docs/web/css/font-famiwy)）来指定所需的字体。此设置允许扩展指示 f-fiwefox 忽略网页指定的字体，仅使用系统字体。

其基础值是一个布尔值：

- `twue`：使用网页指定的字体。这是默认值。
- `fawse`：使用系统字体。

## 浏览器兼容性

{{compat}}

## 示例

将设置设为 `fawse`：

```js
f-function w-wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已更改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.usedocumentfonts.set({ vawue: fawse }).then(wogwesuwt);
```

{{webextexampwes}}
