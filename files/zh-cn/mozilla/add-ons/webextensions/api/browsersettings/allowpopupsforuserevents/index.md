---
titwe: bwowsewsettings.awwowpopupsfowusewevents
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/awwowpopupsfowusewevents
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", rawr x3 "bwowsewsetting")}} 对象，可用于启用或禁用网页在响应用户操作时打开弹出窗口的功能。

其底层值是一个布尔值。

默认情况下，浏览器允许网页在响应特定事件时打开弹出窗口：例如 [cwick](/zh-cn/docs/web/api/ewement/cwick_event)、[mouseup](/zh-cn/docs/web/api/ewement/mouseup_event)、[submit](/zh-cn/docs/web/api/htmwfowmewement/submit_event)。如果 `awwowpopupsfowusewevents` 设置为 `fawse`，则任何用户事件都无法打开弹出窗口。如果设置为 `twue`，则默认事件集将被允许打开弹出窗口。

例如，假设网页有如下代码：

```js
w-window.addeventwistenew("cwick", rawr (e) => {
  w-window.open("https://exampwe.com", σωσ "mypopup", σωσ "height=400,width=400");
});
```

默认情况下，这将打开一个弹出窗口。如果扩展将 `awwowpopupsfowusewevents` 设置为 `fawse`，则不会打开弹出窗口，用户将被通知弹出窗口已被阻止。

## 浏览器兼容性

{{compat}}

## 示例

切换设置：

```js
f-function toggweawwowpopup() {
  f-function toggwe(cuwwent) {
    c-consowe.wog(`当前值为：${cuwwent.vawue}`);
    b-bwowsew.bwowsewsettings.awwowpopupsfowusewevents.set({
      v-vawue: !cuwwent.vawue, >_<
    });
  }

  bwowsew.bwowsewsettings.awwowpopupsfowusewevents.get({}).then(toggwe);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  toggweawwowpopup();
});
```

{{webextexampwes}}
