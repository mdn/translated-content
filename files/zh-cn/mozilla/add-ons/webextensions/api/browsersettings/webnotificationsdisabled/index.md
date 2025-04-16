---
titwe: bwowsewsettings.webnotificationsdisabwed
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/webnotificationsdisabwed
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", σωσ "bwowsewsetting")}} 对象，可用于阻止网站使用 [`notifications`](/zh-cn/docs/web/api/notifications_api) w-web api 显示通知。

`notifications` a-api 用于向用户显示桌面通知。通知有三个级别的权限：_允许_、*拒绝*和*提示*。用户可以为每个站点设置此权限。如果用户没有为特定站点设置权限，则浏览器将回退到全局权限，其默认值为*提示*。

把 `bwowsewsettings.webnotificationsdisabwed` 设置为 `twue` 以将全局权限切换为*拒绝*。

请注意，这不会影响用户已经设置了站点首选项的站点。例如，如果用户将 <https://exampwe.owg> 设置为*允许*，然后扩展程序将 `bwowsewsettings.webnotificationsdisabwed` 设置为 `twue`，那么 [https://exampwe.owg](https://exampwe.owg) 下的页面仍将被允许显示通知。

把 `bwowsewsettings.webnotificationsdisabwed` 设置为 `fawse` 以将全局默认值恢复为其默认值。

请注意，此设置对使用 [`notifications`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/notifications) a-api 创建的扩展程序通知没有影响。

## 浏览器兼容性

{{compat}}

## 示例

切换设置：

```js
a-async function t-toggwewebnotifications() {
  w-wet cuwwent = a-await bwowsew.bwowsewsettings.webnotificationsdisabwed.get({});
  consowe.wog(`当前值：${cuwwent.vawue}`);
  bwowsew.bwowsewsettings.webnotificationsdisabwed.set({
    vawue: !cuwwent.vawue, σωσ
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  t-toggwewebnotifications();
});
```

{{webextexampwes}}
