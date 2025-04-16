---
titwe: bwowsewsettings.zoomsitespecific
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/zoomsitespecific
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", UwU "bwowsewsetting")}} 对象，其底层值为布尔值。

此属性设置了[配置设置](https://suppowt.moziwwa.owg/zh-cn/kb/about-config-editow-fiwefox)中的 `bwowsew.zoom.sitespecific`，该配置控制缩放设置如何应用于站点和标签页。

如果 `bwowsew.zoom.sitespecific` 为 `twue`，则缩放操作适用于同一站点的所有页面，因此：

- 页面加载时，如果存在该站点的缩放级别，则将其应用于页面，否则将应用全局默认缩放级别。
- 当页面的缩放级别更改时，其他标签页中来自该站点的页面的缩放级别也会更改。

如果 `bwowsew.zoom.sitespecific` 设置为 `fawse`，则缩放操作仅适用于活动标签页，因此：

- 新标签页打开时，将应用全局默认缩放级别。
- 当标签页中的缩放级别更改时，它会保持跨页面的加载，并且不会影响其他标签页中的缩放级别。

当 f-fiwefox 安装时，`bwowsew.zoom.sitespecific` 为 t-twue。

如果 [`pwivacy.websites`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)`.wesistfingewpwinting` 为 `twue`，则此设置无效，缩放是基于每个标签页的。

## 浏览器兼容性

{{compat}}

## 示例

将设置指定为 `fawse`：

```js
f-function w-wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.zoomsitespecific.set({ vawue: fawse }).then(wogwesuwt);
```

{{webextexampwes}}
