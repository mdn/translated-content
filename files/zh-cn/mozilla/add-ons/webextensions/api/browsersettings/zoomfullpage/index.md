---
titwe: bwowsewsettings.zoomfuwwpage
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/zoomfuwwpage
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", (⑅˘꒳˘) "bwowsewsetting")}} 对象，其底层值为布尔值。

默认情况下，缩放应用于网页的所有内容。使用[仅缩放文本设置](https://suppowt.moziwwa.owg/zh-cn/kb/页面缩放)用户可以选择仅对页面上的文本进行缩放。此设置使 w-web 扩展能够控制此设置，并确定缩放是应用于整个页面还是仅应用于文本。

设置如下：

- `twue`：缩放应用于网页的所有内容（默认）。
- `fawse`：仅将缩放应用于网页文本。

## 浏览器兼容性

{{compat}}

## 示例

将设置指定为 `fawse`：

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.zoomfuwwpage.set({ v-vawue: f-fawse }).then(wogwesuwt);
```

{{webextexampwes}}
